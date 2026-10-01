import { describe, it, expect, vi } from "vitest";
import { processClientSuggestion, type ProcessClientInput } from "./process-client.service";
import type {
  PartnerSalesContext,
  LeadSummary,
  LeadCreateValues,
  ActivityCreateValues,
} from "../../infrastructure/odoo/clients/odoo-client.types";
import type { ProductWithCurrentPrice } from "../proposal-preparation/proposal-preparation.types";

const TYPE_ID = 12;
const RUN_DATE = "2026-10-02";

function product(overrides: Partial<ProductWithCurrentPrice> = {}): ProductWithCurrentPrice {
  return {
    product_id: 100,
    product_name: "Moutarde à l'ancienne 250 g",
    product_uom: [27, "TU6"],
    order_history: [
      { order_id: 1, order_name: "S1", date_order: "2026-06-01 09:00:00", quantity: 20, price_unit: 10 },
      { order_id: 2, order_name: "S2", date_order: "2026-07-03 09:00:00", quantity: 24, price_unit: 10 },
    ],
    quantity_to_order: 24,
    quantity_source: "llm",
    calculation_metadata: {
      strategy: "median_recent_orders",
      confidence: "medium",
      historical_quantities: [20, 24],
      order_count: 2,
      median_value: 22,
    },
    current_price_unit: 10,
    subtotal: 240,
    moq_adjustment: 0,
    ...overrides,
  };
}

const MARIE = { id: 7, name: "Marie", active: true, teamId: 5, companyIds: [3] };

function salesContext(overrides: Partial<PartnerSalesContext> = {}): PartnerSalesContext {
  return {
    id: 10,
    name: "Client A",
    commercialPartnerId: 10,
    isCompany: true,
    partnerTeamId: 2,
    salesperson: MARIE,
    ...overrides,
  };
}

interface FakeState {
  sales?: PartnerSalesContext;
  openLead?: LeadSummary | null;
  leadIds?: number[];
  openActivity?: { id: number; leadId: number } | null;
  lastTrace?: { id: number; leadId: number; date: string } | null;
  lastOrderDate?: string | null;
  /** Company of each team (default: every team belongs to the analysed company 3) */
  teamCompanies?: Map<number, number | false>;
}

function fakeDeps(state: FakeState = {}) {
  return {
    getPartnerSalesContext: vi.fn(async () => state.sales ?? salesContext()),
    getPartnerLeadIds: vi.fn(async () => state.leadIds ?? []),
    findOpenSuggestionActivity: vi.fn(async () => state.openActivity ?? null),
    findLastSuggestionTrace: vi.fn(async () => state.lastTrace ?? null),
    findOldestOpenLead: vi.fn(async () =>
      state.openLead === undefined ? { id: 55, name: "Opportunité mars" } : state.openLead
    ),
    findLastConfirmedOrderDate: vi.fn(async () =>
      state.lastOrderDate === undefined ? "2026-08-12" : state.lastOrderDate
    ),
    getTeamCompanies: vi.fn(async (ids: number[]) => state.teamCompanies ?? new Map(ids.map((id) => [id, 3] as [number, number]))),
    createLead: vi.fn(async (_values: LeadCreateValues) => 900),
    createActivity: vi.fn(async (_values: ActivityCreateValues) => 7000),
  };
}

function input(overrides: Partial<ProcessClientInput> = {}): ProcessClientInput {
  return {
    clientId: 10,
    clientName: "Client A",
    products: [product()],
    companyId: 3,
    runDate: RUN_DATE,
    skipOdooWrite: false,
    eligibilityCheck: true,
    activityTypeId: TYPE_ID,
    ...overrides,
  };
}

function allCalls(deps: ReturnType<typeof fakeDeps>): number {
  return Object.values(deps).reduce((sum, fn) => sum + fn.mock.calls.length, 0);
}

describe("processClientSuggestion (US1)", () => {
  it("(1) no suggested product → skipped no_products, no Odoo read", async () => {
    const deps = fakeDeps();

    const { outcome } = await processClientSuggestion(input({ products: [] }), deps);

    expect(outcome).toEqual({ kind: "skipped", reason: "no_products", label: "aucun produit suggéré" });
    expect(allCalls(deps)).toBe(0);
  });

  it("(2) real mode with an open opportunity → one activity on it, assigned to the salesperson", async () => {
    const deps = fakeDeps();

    const { outcome } = await processClientSuggestion(input(), deps);

    expect(deps.createLead).not.toHaveBeenCalled();
    expect(deps.createActivity).toHaveBeenCalledTimes(1);
    expect(deps.createActivity).toHaveBeenCalledWith(
      expect.objectContaining({
        res_id: 55,
        activity_type_id: TYPE_ID,
        summary: "Suggestion commande Client A",
        date_deadline: RUN_DATE,
        user_id: 7,
      })
    );
    const note = deps.createActivity.mock.calls[0][0].note;
    expect(note.startsWith("<p>Dernière commande : 12/08/2026</p>")).toBe(true);
    expect(note).toContain("<li>Moutarde à l'ancienne 250 g — 24 TU6 — dernière commande : 03/07/2026</li>");
    expect(deps.findLastConfirmedOrderDate).toHaveBeenCalledWith(10, 3);

    expect(outcome).toEqual({
      kind: "created",
      activityId: 7000,
      leadId: 55,
      leadName: "Opportunité mars",
      leadCreated: false,
      salespersonId: 7,
      salespersonName: "Marie",
      dateDeadline: RUN_DATE,
    });
  });

  it("(3) no open opportunity → creates it for the salesperson in the company, then the activity", async () => {
    const deps = fakeDeps({ openLead: null });

    const { outcome } = await processClientSuggestion(input(), deps);

    expect(deps.createLead).toHaveBeenCalledWith({
      name: "Suggestion commande Client A",
      type: "opportunity",
      partner_id: 10,
      user_id: 7,
      team_id: 2,
      company_id: 3,
    });
    expect(deps.createActivity).toHaveBeenCalledWith(expect.objectContaining({ res_id: 900 }));
    expect(outcome).toMatchObject({ kind: "created", leadId: 900, leadCreated: true, activityId: 7000 });
  });

  it("(3b) created opportunity team: client team, else salesperson team, else none", async () => {
    const withoutClientTeam = fakeDeps({ openLead: null, sales: salesContext({ partnerTeamId: undefined }) });
    await processClientSuggestion(input(), withoutClientTeam);
    expect(withoutClientTeam.createLead).toHaveBeenCalledWith(expect.objectContaining({ team_id: 5 }));

    const withoutAnyTeam = fakeDeps({
      openLead: null,
      sales: salesContext({ partnerTeamId: undefined, salesperson: { id: 7, name: "Marie", active: true, companyIds: [3] } }),
    });
    await processClientSuggestion(input(), withoutAnyTeam);
    expect(withoutAnyTeam.createLead).toHaveBeenCalledWith(expect.objectContaining({ team_id: false }));
  });

  it("(3c) created opportunity team: a team of another company is never set (Odoo would refuse it)", async () => {
    // client team 2 is a Moutarderie team, salesperson team 5 is a FOODPRINT team → team 5
    const clientTeamElsewhere = fakeDeps({ openLead: null, teamCompanies: new Map([[2, 2], [5, 3]]) });
    await processClientSuggestion(input(), clientTeamElsewhere);
    expect(clientTeamElsewhere.getTeamCompanies).toHaveBeenCalledWith([2, 5]);
    expect(clientTeamElsewhere.createLead).toHaveBeenCalledWith(expect.objectContaining({ team_id: 5 }));

    // both teams belong to other companies → no team
    const bothElsewhere = fakeDeps({ openLead: null, teamCompanies: new Map([[2, 2], [5, 1]]) });
    await processClientSuggestion(input(), bothElsewhere);
    expect(bothElsewhere.createLead).toHaveBeenCalledWith(expect.objectContaining({ team_id: false }));

    // a team without company is shared by all companies → kept
    const sharedTeam = fakeDeps({ openLead: null, teamCompanies: new Map<number, number | false>([[2, false], [5, 3]]) });
    await processClientSuggestion(input(), sharedTeam);
    expect(sharedTeam.createLead).toHaveBeenCalledWith(expect.objectContaining({ team_id: 2 }));

    // existing opportunity → teams are not read
    const withLead = fakeDeps();
    await processClientSuggestion(input(), withLead);
    expect(withLead.getTeamCompanies).not.toHaveBeenCalled();
  });

  it("(3d) salesperson without access to the analysed company → skipped, nothing written", async () => {
    const deps = fakeDeps({ sales: salesContext({ salesperson: { ...MARIE, companyIds: [2] } }) });

    const { outcome } = await processClientSuggestion(input(), deps);

    expect(outcome).toEqual({
      kind: "skipped",
      reason: "salesperson_no_company_access",
      label: "vendeur sans accès à FOODPRINT",
    });
    expect(deps.createLead).not.toHaveBeenCalled();
    expect(deps.createActivity).not.toHaveBeenCalled();
  });

  it("(4) test mode → no write, would_create tells whether an opportunity would be created", async () => {
    const withLead = fakeDeps();
    const r1 = await processClientSuggestion(input({ skipOdooWrite: true }), withLead);
    expect(r1.outcome).toEqual({
      kind: "would_create",
      leadId: 55,
      leadName: "Opportunité mars",
      leadCreated: false,
      salespersonId: 7,
      salespersonName: "Marie",
    });

    const withoutLead = fakeDeps({ openLead: null });
    const r2 = await processClientSuggestion(input({ skipOdooWrite: true }), withoutLead);
    expect(r2.outcome).toMatchObject({ kind: "would_create", leadCreated: true });

    for (const deps of [withLead, withoutLead]) {
      expect(deps.createLead).not.toHaveBeenCalled();
      expect(deps.createActivity).not.toHaveBeenCalled();
    }
    // the description that would have been written is returned for the report
    expect(r1.activityNote?.startsWith("<p>Dernière commande : 12/08/2026</p>")).toBe(true);
  });

  it("(5) activity creation fails after the opportunity was created → error with leadCreatedId", async () => {
    const deps = fakeDeps({ openLead: null });
    deps.createActivity.mockRejectedValueOnce(new Error("access denied"));

    const { outcome } = await processClientSuggestion(input(), deps);

    expect(outcome).toEqual({ kind: "error", message: "access denied", leadCreatedId: 900 });
  });

  it("(6) opportunity creation fails → error without leadCreatedId, no activity", async () => {
    const deps = fakeDeps({ openLead: null });
    deps.createLead.mockRejectedValueOnce(new Error("stage missing"));

    const { outcome } = await processClientSuggestion(input(), deps);

    expect(outcome).toEqual({ kind: "error", message: "stage missing" });
    expect(deps.createActivity).not.toHaveBeenCalled();
  });

  it("(7) salesperson removed between the pre-filter and the write → skipped no_salesperson, no write", async () => {
    const deps = fakeDeps({ sales: salesContext({ salesperson: undefined }) });

    const { outcome } = await processClientSuggestion(input(), deps);

    expect(outcome).toEqual({ kind: "skipped", reason: "no_salesperson", label: "pas de vendeur" });
    expect(deps.createLead).not.toHaveBeenCalled();
    expect(deps.createActivity).not.toHaveBeenCalled();
  });

  it("(8) eligibilityCheck false → no eligibility decision and never any write", async () => {
    const deps = fakeDeps({ sales: salesContext({ salesperson: undefined }) });

    const { outcome } = await processClientSuggestion(
      input({ eligibilityCheck: false, skipOdooWrite: false }),
      deps
    );

    expect(outcome).toMatchObject({ kind: "would_create", leadId: 55, leadCreated: false });
    expect(deps.createLead).not.toHaveBeenCalled();
    expect(deps.createActivity).not.toHaveBeenCalled();
  });

  it("(9) retry after a first attempt created the opportunity → it is reused, no second opportunity", async () => {
    const deps = fakeDeps({ openLead: { id: 900, name: "Suggestion commande Client A" } });

    const { outcome } = await processClientSuggestion(input(), deps);

    expect(deps.createLead).not.toHaveBeenCalled();
    expect(outcome).toMatchObject({ kind: "created", leadId: 900, leadCreated: false });
  });

  it("refuses to run the eligibility check without a configured activity type", async () => {
    const deps = fakeDeps();

    await expect(processClientSuggestion(input({ activityTypeId: 0 }), deps)).rejects.toThrow(
      "not configured"
    );
    expect(allCalls(deps)).toBe(0);
  });

  it("read errors propagate (Trigger.dev retry)", async () => {
    const deps = fakeDeps();
    deps.getPartnerSalesContext.mockRejectedValueOnce(new Error("timeout"));

    await expect(processClientSuggestion(input(), deps)).rejects.toThrow("timeout");
    expect(deps.createActivity).not.toHaveBeenCalled();
  });
});

describe("processClientSuggestion — re-check right before writing (US4)", () => {
  it("activity appeared between the pre-filter and the write → skipped open_activity, no write", async () => {
    const deps = fakeDeps({ leadIds: [55], openActivity: { id: 800, leadId: 55 } });

    const { outcome } = await processClientSuggestion(input(), deps);

    expect(outcome).toEqual({
      kind: "skipped",
      reason: "open_activity",
      label: "activité déjà ouverte",
      detail: { activityId: 800, leadId: 55 },
    });
    expect(deps.createLead).not.toHaveBeenCalled();
    expect(deps.createActivity).not.toHaveBeenCalled();
  });

  it("follow-up less than 21 days ago → skipped recent_follow_up with the date", async () => {
    const deps = fakeDeps({ leadIds: [55], lastTrace: { id: 3, leadId: 55, date: "2026-09-20 14:00:00" } });

    const { outcome } = await processClientSuggestion(input({ runDate: "2026-10-02" }), deps);

    expect(outcome).toMatchObject({
      kind: "skipped",
      reason: "recent_follow_up",
      label: "relancé il y a moins de 3 semaines (20/09/2026)",
    });
    expect(deps.findLastSuggestionTrace).toHaveBeenCalledWith([55], TYPE_ID, "2026-09-11 00:00:00");
    expect(deps.createActivity).not.toHaveBeenCalled();
  });

  it("reads the opportunities of the client in the analysed company, and skips Q3/Q4 without opportunity", async () => {
    const deps = fakeDeps({ leadIds: [] });

    await processClientSuggestion(input(), deps);

    expect(deps.getPartnerLeadIds).toHaveBeenCalledWith(10, 3);
    expect(deps.findOpenSuggestionActivity).not.toHaveBeenCalled();
    expect(deps.findLastSuggestionTrace).not.toHaveBeenCalled();
  });

  it("task retried after the activity was created → skipped open_activity, no duplicate (SC-004)", async () => {
    const deps = fakeDeps({ leadIds: [55], openActivity: null });

    const first = await processClientSuggestion(input(), deps);
    expect(first.outcome.kind).toBe("created");

    // Second attempt: the activity created by the first one is now open in Odoo
    deps.findOpenSuggestionActivity.mockResolvedValue({ id: 7000, leadId: 55 });
    const retry = await processClientSuggestion(input(), deps);

    expect(retry.outcome).toMatchObject({ kind: "skipped", reason: "open_activity" });
    expect(deps.createActivity).toHaveBeenCalledTimes(1);
  });

  it("eligibilityCheck false → no re-check reads", async () => {
    const deps = fakeDeps();

    await processClientSuggestion(input({ eligibilityCheck: false, skipOdooWrite: true }), deps);

    expect(deps.getPartnerLeadIds).not.toHaveBeenCalled();
    expect(deps.findOpenSuggestionActivity).not.toHaveBeenCalled();
    expect(deps.findLastSuggestionTrace).not.toHaveBeenCalled();
  });
});
