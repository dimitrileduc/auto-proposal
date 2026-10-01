import { describe, it, expect, vi } from "vitest";
import { buildPartnerContexts, prefilterEligibility, selectClientsToTrigger } from "./prefilter.service";
import type { PartnerSalesContext } from "../../infrastructure/odoo/clients/odoo-client.types";
import type { InactiveClient } from "../client-inactivity/inactivity.types";

const COMPANY_ID = 3;
const TYPE_ID = 12;
const RUN_DATE = "2026-10-23";
const DELAY = 21;

interface FakeData {
  salesContexts: PartnerSalesContext[];
  /** commercial partner id → lead ids */
  leads?: Map<number, number[]>;
  activities?: Array<{ id: number; leadId: number }>;
  traces?: Array<{ id: number; leadId: number; date: string }>;
}

/** Fake Odoo client counting every call */
function fakeOdoo(data: FakeData) {
  const calls: string[] = [];
  const odoo = {
    async getSalesContexts(partnerIds: number[]) {
      calls.push("getSalesContexts");
      const map = new Map<number, PartnerSalesContext>();
      for (const ctx of data.salesContexts) {
        if (partnerIds.includes(ctx.id)) map.set(ctx.id, ctx);
      }
      return map;
    },
    async getLeadIdsByCommercialPartners(cps: number[], companyId: number) {
      calls.push("getLeadIdsByCommercialPartners");
      expect(companyId).toBe(COMPANY_ID);
      const map = new Map<number, number[]>();
      for (const [cp, ids] of data.leads ?? new Map()) {
        if (cps.includes(cp)) map.set(cp, ids);
      }
      return map;
    },
    async findOpenSuggestionActivities(leadIds: number[], typeId: number) {
      calls.push("findOpenSuggestionActivities");
      expect(typeId).toBe(TYPE_ID);
      return (data.activities ?? []).filter((a) => leadIds.includes(a.leadId));
    },
    async findSuggestionTracesSince(leadIds: number[], typeId: number, since: string) {
      calls.push("findSuggestionTracesSince");
      expect(typeId).toBe(TYPE_ID);
      return (data.traces ?? []).filter((t) => leadIds.includes(t.leadId) && t.date >= since);
    },
  };
  return { odoo, calls };
}

function salesContext(id: number, salesperson?: PartnerSalesContext["salesperson"]): PartnerSalesContext {
  return { id, name: `Client ${id}`, commercialPartnerId: id, isCompany: true, salesperson };
}

const MARIE = { id: 7, name: "Marie", active: true, companyIds: [3] };

describe("buildPartnerContexts — batch reads (US1)", () => {
  it("makes the same number of Odoo calls for 3 and for 300 clients", async () => {
    const run = async (n: number) => {
      const ids = Array.from({ length: n }, (_, i) => i + 1);
      const { odoo, calls } = fakeOdoo({ salesContexts: ids.map((id) => salesContext(id, MARIE)) });
      await buildPartnerContexts(ids, COMPANY_ID, TYPE_ID, RUN_DATE, odoo, DELAY);
      return calls.length;
    };

    expect(await run(3)).toBe(await run(300));
  });

  it("maps the salesperson of each client", async () => {
    const { odoo } = fakeOdoo({
      salesContexts: [salesContext(1, MARIE), salesContext(2)],
    });

    const contexts = await buildPartnerContexts([1, 2], COMPANY_ID, TYPE_ID, RUN_DATE, odoo, DELAY);

    expect(contexts.get(1)?.salesperson).toEqual(MARIE);
    expect(contexts.get(1)?.partnerName).toBe("Client 1");
    expect(contexts.get(2)?.salesperson).toBeUndefined();
  });
});

describe("prefilterEligibility — salesperson of another company", () => {
  it("skips a client whose salesperson cannot open records of the analysed company", async () => {
    const { odoo } = fakeOdoo({
      salesContexts: [salesContext(1, MARIE), salesContext(2, { id: 9, name: "Céline", active: true, companyIds: [2] })],
    });
    const contexts = await buildPartnerContexts([1, 2], COMPANY_ID, TYPE_ID, RUN_DATE, odoo, DELAY);

    expect(contexts.get(2)?.companyId).toBe(COMPANY_ID);
    expect(prefilterEligibility(contexts, RUN_DATE, DELAY)).toEqual({
      eligible: [1],
      skipped: [{ clientId: 2, decision: { eligible: false, reason: "salesperson_no_company_access" } }],
    });
  });
});

describe("prefilterEligibility + selectClientsToTrigger (US1)", () => {
  const clients: InactiveClient[] = [
    { id: 1, name: "Client 1", email: null },
    { id: 2, name: "Client 2", email: null },
    { id: 3, name: "Client 3", email: "c3@test.com" },
  ];

  async function prefilter() {
    const { odoo } = fakeOdoo({
      salesContexts: [
        salesContext(1, MARIE),
        salesContext(2),
        salesContext(3, { id: 8, name: "Paul", active: false, companyIds: [3] }),
      ],
    });
    const contexts = await buildPartnerContexts([1, 2, 3], COMPANY_ID, TYPE_ID, RUN_DATE, odoo, DELAY);
    return prefilterEligibility(contexts, RUN_DATE, DELAY);
  }

  it("skips clients without salesperson or with an archived salesperson", async () => {
    const result = await prefilter();

    expect(result.eligible).toEqual([1]);
    expect(result.skipped).toEqual([
      { clientId: 2, decision: { eligible: false, reason: "no_salesperson" } },
      { clientId: 3, decision: { eligible: false, reason: "inactive_salesperson" } },
    ]);
  });

  it("triggers only eligible clients and reports the others as skipped with their label", async () => {
    const { toTrigger, skippedOutcomes } = selectClientsToTrigger(clients, await prefilter());

    expect(toTrigger.map((c) => c.id)).toEqual([1]);
    expect(skippedOutcomes).toEqual([
      { client: clients[1], outcome: { kind: "skipped", reason: "no_salesperson", label: "pas de vendeur" } },
      { client: clients[2], outcome: { kind: "skipped", reason: "inactive_salesperson", label: "vendeur inactif" } },
    ]);
  });
});

describe("buildPartnerContexts — opportunities, activities, follow-ups (US4)", () => {
  it("makes the same number of Odoo calls for 3 and for 300 clients, 6 reads at most", async () => {
    const run = async (n: number) => {
      const ids = Array.from({ length: n }, (_, i) => i + 1);
      const { odoo, calls } = fakeOdoo({
        salesContexts: ids.map((id) => salesContext(id, MARIE)),
        leads: new Map(ids.map((id) => [id, [1000 + id]])),
        activities: [{ id: 1, leadId: 1001 }],
        traces: [{ id: 2, leadId: 1002, date: "2026-10-10 08:00:00" }],
      });
      await buildPartnerContexts(ids, COMPANY_ID, TYPE_ID, RUN_DATE, odoo, DELAY);
      return calls;
    };

    const small = await run(3);
    const large = await run(300);
    expect(small).toEqual(large);
    // P1+P2 (getSalesContexts), P3+P3b, P4, P5
    expect(small).toEqual([
      "getSalesContexts",
      "getLeadIdsByCommercialPartners",
      "findOpenSuggestionActivities",
      "findSuggestionTracesSince",
    ]);
  });

  it("attaches opportunities, open activity and most recent follow-up to the right client", async () => {
    const { odoo } = fakeOdoo({
      salesContexts: [salesContext(1, MARIE), salesContext(2, MARIE), salesContext(3, MARIE)],
      // opportunity 2001 is carried by a contact of client 2 (rattached by P3b in the Odoo client)
      leads: new Map([
        [1, [1001]],
        [2, [2001, 2002]],
      ]),
      activities: [{ id: 900, leadId: 1001 }],
      traces: [
        { id: 10, leadId: 2001, date: "2026-10-05 08:00:00" },
        { id: 11, leadId: 2002, date: "2026-10-12 09:30:00" },
        { id: 12, leadId: 2001, date: "2026-09-20 08:00:00" },
      ],
    });

    const contexts = await buildPartnerContexts([1, 2, 3], COMPANY_ID, TYPE_ID, RUN_DATE, odoo, DELAY);

    expect(contexts.get(1)?.leadIds).toEqual([1001]);
    expect(contexts.get(1)?.openActivity).toEqual({ id: 900, leadId: 1001 });
    expect(contexts.get(1)?.lastFollowUp).toBeUndefined();

    expect(contexts.get(2)?.leadIds).toEqual([2001, 2002]);
    expect(contexts.get(2)?.openActivity).toBeUndefined();
    expect(contexts.get(2)?.lastFollowUp).toEqual({ date: "2026-10-12 09:30:00", messageId: 11, leadId: 2002 });

    expect(contexts.get(3)?.leadIds).toEqual([]);
  });

  it("queries follow-ups since runDate minus the delay", async () => {
    const { odoo } = fakeOdoo({ salesContexts: [salesContext(1, MARIE)], leads: new Map([[1, [1001]]]) });
    const spy = vi.spyOn(odoo, "findSuggestionTracesSince");

    await buildPartnerContexts([1], COMPANY_ID, TYPE_ID, RUN_DATE, odoo, DELAY);

    expect(spy).toHaveBeenCalledWith([1001], TYPE_ID, "2026-10-02 00:00:00");
  });

  it("does not query activities nor follow-ups when no client has an opportunity", async () => {
    const { odoo, calls } = fakeOdoo({ salesContexts: [salesContext(1, MARIE)] });

    await buildPartnerContexts([1], COMPANY_ID, TYPE_ID, RUN_DATE, odoo, DELAY);

    expect(calls).toEqual(["getSalesContexts", "getLeadIdsByCommercialPartners"]);
  });

  it("keeps only clients without skip reason as eligible", async () => {
    const { odoo } = fakeOdoo({
      salesContexts: [salesContext(1, MARIE), salesContext(2, MARIE), salesContext(3, MARIE), salesContext(4)],
      leads: new Map([
        [1, [1001]],
        [2, [2001]],
        [3, [3001]],
      ]),
      activities: [{ id: 900, leadId: 1001 }],
      traces: [
        { id: 10, leadId: 2001, date: "2026-10-12 08:00:00" },
        { id: 11, leadId: 3001, date: "2026-09-25 08:00:00" },
      ],
    });

    const contexts = await buildPartnerContexts([1, 2, 3, 4], COMPANY_ID, TYPE_ID, RUN_DATE, odoo, DELAY);
    const result = prefilterEligibility(contexts, RUN_DATE, DELAY);

    // client 3: trace before the window, not returned → eligible
    expect(result.eligible).toEqual([3]);
    expect(result.skipped.map((s) => [s.clientId, s.decision.reason])).toEqual([
      [1, "open_activity"],
      [2, "recent_follow_up"],
      [4, "no_salesperson"],
    ]);
  });
});
