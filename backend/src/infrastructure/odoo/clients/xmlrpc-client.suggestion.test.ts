/**
 * Tests for the CRM / activity methods of xmlrpc-client
 * ("Suggestion commande" activity instead of automatic quotes)
 */
import { describe, it, expect, vi, beforeEach } from "vitest";

process.env.ODOO_USERNAME = "test-user";
process.env.ODOO_PASSWORD = "test-pass";

const mockSearchRead = vi.fn();
const mockExecute = vi.fn();
const mockCreate = vi.fn();

vi.mock("odoo-xmlrpc-ts", () => {
  return {
    OdooClient: vi.fn().mockImplementation(function () {
      return {
        searchRead: mockSearchRead,
        create: mockCreate,
        execute: mockExecute,
      };
    }),
  };
});

const { createXmlRpcClient } = await import("./xmlrpc-client");

/** Returns the rows registered for a (model, method) execute call */
function executeRouter(routes: Record<string, (args: any[]) => unknown>) {
  mockExecute.mockImplementation(async (model: string, method: string, args: any[]) => {
    const handler = routes[`${model}.${method}`];
    if (!handler) throw new Error(`unexpected call ${model}.${method}`);
    return handler(args);
  });
}

describe("getPartnerSalesContext (Q1 + Q1b)", () => {
  let client: ReturnType<typeof createXmlRpcClient>;

  beforeEach(() => {
    vi.clearAllMocks();
    client = createXmlRpcClient();
  });

  it("handles a client without salesperson (user_id = false)", async () => {
    executeRouter({
      "res.partner.read": () => [
        { id: 10, name: "Client A", user_id: false, team_id: false, commercial_partner_id: [10, "Client A"], is_company: true },
      ],
    });

    const ctx = await client.getPartnerSalesContext(10);

    expect(ctx).toEqual({
      id: 10,
      name: "Client A",
      commercialPartnerId: 10,
      isCompany: true,
      partnerTeamId: undefined,
      salesperson: undefined,
    });
    expect(mockExecute).toHaveBeenCalledTimes(1);
  });

  it("reads the salesperson by id with read (archived users are returned), not search", async () => {
    executeRouter({
      "res.partner.read": () => [
        { id: 10, name: "Client A", user_id: [7, "Marie"], team_id: [2, "Ventes"], commercial_partner_id: [10, "Client A"], is_company: true },
      ],
      "res.users.read": () => [{ id: 7, name: "Marie", active: false, sale_team_id: [5, "Equipe Marie"], company_ids: [2, 3] }],
    });

    const ctx = await client.getPartnerSalesContext(10);

    expect(ctx.salesperson).toEqual({ id: 7, name: "Marie", active: false, teamId: 5, companyIds: [2, 3] });
    expect(mockExecute.mock.calls.find((c) => c[0] === "res.users")?.[2][1]).toContain("company_ids");
    expect(ctx.partnerTeamId).toBe(2);
    const usersCall = mockExecute.mock.calls.find((c) => c[0] === "res.users");
    expect(usersCall?.[1]).toBe("read");
    expect(usersCall?.[2][0]).toEqual([7]);
    expect(mockSearchRead).not.toHaveBeenCalled();
  });

  it("throws when the partner does not exist", async () => {
    executeRouter({ "res.partner.read": () => [] });
    await expect(client.getPartnerSalesContext(99)).rejects.toThrow("99");
  });
});

describe("getSalesContexts (P1 + P2)", () => {
  beforeEach(() => vi.clearAllMocks());

  it("reads 3 clients and their salespeople in exactly 2 calls", async () => {
    executeRouter({
      "res.partner.read": () => [
        { id: 1, name: "A", user_id: [7, "Marie"], team_id: false, commercial_partner_id: [1, "A"], is_company: true },
        { id: 2, name: "B", user_id: [7, "Marie"], team_id: false, commercial_partner_id: [2, "B"], is_company: true },
        { id: 3, name: "C", user_id: false, team_id: false, commercial_partner_id: [3, "C"], is_company: true },
      ],
      "res.users.read": (args) => {
        expect(args[0]).toEqual([7]);
        return [{ id: 7, name: "Marie", active: true, sale_team_id: false }];
      },
    });

    const contexts = await createXmlRpcClient().getSalesContexts([1, 2, 3]);

    expect(mockExecute).toHaveBeenCalledTimes(2);
    expect(contexts.get(1)?.salesperson).toEqual({ id: 7, name: "Marie", active: true, teamId: undefined, companyIds: [] });
    expect(contexts.get(2)?.salesperson?.id).toBe(7);
    expect(contexts.get(3)?.salesperson).toBeUndefined();
  });

  it("makes no call for an empty list", async () => {
    const contexts = await createXmlRpcClient().getSalesContexts([]);
    expect(contexts.size).toBe(0);
    expect(mockExecute).not.toHaveBeenCalled();
  });
});

describe("getTeamCompanies", () => {
  beforeEach(() => vi.clearAllMocks());

  it("reads the company of each team by id, false for a team without company", async () => {
    executeRouter({
      "crm.team.read": (args) => {
        expect(args[0]).toEqual([2, 5]);
        expect(args[1]).toEqual(["company_id"]);
        return [
          { id: 2, company_id: [2, "Conserverie Et Moutarderie Belge"] },
          { id: 5, company_id: false },
        ];
      },
    });

    const companies = await createXmlRpcClient().getTeamCompanies([2, 5, 2]);

    expect(companies).toEqual(new Map<number, number | false>([[2, 2], [5, false]]));
    expect(mockExecute).toHaveBeenCalledTimes(1);
  });
});

describe("createLead (Q8)", () => {
  beforeEach(() => vi.clearAllMocks());

  it("sends the company of the analysed company", async () => {
    mockCreate.mockResolvedValueOnce(501);

    const id = await createXmlRpcClient().createLead({
      name: "Suggestion commande Client A",
      type: "opportunity",
      partner_id: 10,
      user_id: 7,
      team_id: false,
      company_id: 3,
    });

    expect(id).toBe(501);
    expect(mockCreate).toHaveBeenCalledWith("crm.lead", expect.objectContaining({ company_id: 3, type: "opportunity" }));
  });
});

describe("createActivity (Q9)", () => {
  beforeEach(() => vi.clearAllMocks());

  it("lets Odoo resolve the crm.lead model from the context, without reading ir.model", async () => {
    executeRouter({ "mail.activity.create": () => 7000 });

    const id = await createXmlRpcClient().createActivity({
      res_id: 55,
      activity_type_id: 12,
      summary: "Suggestion commande Client A",
      note: "<p>Dernière commande : 12/08/2026</p>",
      date_deadline: "2026-10-02",
      user_id: 7,
    });

    expect(id).toBe(7000);
    const [, , args, kwargs] = mockExecute.mock.calls[0];
    expect(args[0]).not.toHaveProperty("res_model_id");
    expect(args[0]).toMatchObject({ res_id: 55, activity_type_id: 12, user_id: 7 });
    expect(kwargs).toEqual({ context: { default_res_model: "crm.lead" } });
    expect(mockSearchRead).not.toHaveBeenCalled();
  });
});

describe("getActivityType (V1)", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns null for an id that does not exist", async () => {
    executeRouter({ "mail.activity.type.read": () => [] });
    expect(await createXmlRpcClient().getActivityType(999)).toBeNull();
  });

  it("returns name and model of an existing type", async () => {
    executeRouter({
      "mail.activity.type.read": () => [{ id: 12, name: "Suggestion commande", res_model: "crm.lead", active: true }],
    });
    expect(await createXmlRpcClient().getActivityType(12)).toEqual({
      id: 12,
      name: "Suggestion commande",
      resModel: "crm.lead",
      active: true,
    });
  });
});

describe("getLeadIdsByCommercialPartners (P3 + P3b)", () => {
  beforeEach(() => vi.clearAllMocks());

  it("includes archived opportunities and attaches a contact's opportunity to its company, in 2 calls", async () => {
    executeRouter({
      "crm.lead.search_read": () => [
        { id: 1001, partner_id: [10, "Client A"] },
        { id: 1002, partner_id: [15, "Client A, Jean"] },
        { id: 2001, partner_id: [20, "Client B"] },
      ],
      "res.partner.read": () => [
        { id: 10, commercial_partner_id: [10, "Client A"] },
        { id: 15, commercial_partner_id: [10, "Client A"] },
        { id: 20, commercial_partner_id: [20, "Client B"] },
      ],
    });

    const leads = await createXmlRpcClient().getLeadIdsByCommercialPartners([10, 20], 3);

    expect(leads.get(10)).toEqual([1001, 1002]);
    expect(leads.get(20)).toEqual([2001]);
    expect(mockExecute).toHaveBeenCalledTimes(2);

    const [, , args, kwargs] = mockExecute.mock.calls[0];
    expect(args[0]).toContainEqual(["partner_id.commercial_partner_id", "in", [10, 20]]);
    expect(args[0]).toContainEqual(["company_id", "=", 3]);
    expect(kwargs.context).toEqual({ active_test: false });
  });
});

describe("getPartnerLeadIds (Q2)", () => {
  beforeEach(() => vi.clearAllMocks());

  it("includes archived opportunities of the analysed company", async () => {
    executeRouter({ "crm.lead.search_read": () => [{ id: 1001 }, { id: 1003 }] });

    expect(await createXmlRpcClient().getPartnerLeadIds(10, 3)).toEqual([1001, 1003]);

    const [, , args, kwargs] = mockExecute.mock.calls[0];
    expect(args[0]).toContainEqual(["partner_id.commercial_partner_id", "=", 10]);
    expect(args[0]).toContainEqual(["company_id", "=", 3]);
    expect(kwargs.context).toEqual({ active_test: false });
  });
});

describe("activity and trace reads (P4, P5, Q3, Q4)", () => {
  beforeEach(() => vi.clearAllMocks());

  it("makes no call when there is no opportunity", async () => {
    const client = createXmlRpcClient();

    expect(await client.findOpenSuggestionActivity([], 12)).toBeNull();
    expect(await client.findLastSuggestionTrace([], 12, "2026-10-02 00:00:00")).toBeNull();
    expect(await client.findOpenSuggestionActivities([], 12)).toEqual([]);
    expect(await client.findSuggestionTracesSince([], 12, "2026-10-02 00:00:00")).toEqual([]);
    expect(mockSearchRead).not.toHaveBeenCalled();
    expect(mockExecute).not.toHaveBeenCalled();
  });

  it("returns the most recent trace (Q4)", async () => {
    mockSearchRead.mockResolvedValueOnce([{ id: 77, res_id: 1001, date: "2026-10-12 09:30:00" }]);

    const trace = await createXmlRpcClient().findLastSuggestionTrace([1001], 12, "2026-10-02 00:00:00");

    expect(trace).toEqual({ id: 77, leadId: 1001, date: "2026-10-12 09:30:00" });
    expect(mockSearchRead.mock.calls[0][0]).toBe("mail.message");
    expect(mockSearchRead.mock.calls[0][2]).toMatchObject({ order: "date desc", limit: 1 });
  });

  it("returns the open activity with the earliest deadline (Q3)", async () => {
    mockSearchRead.mockResolvedValueOnce([
      { id: 900, res_id: 1001, user_id: [99, "Autre"], date_deadline: "2026-09-01", summary: "Suggestion commande Client A" },
    ]);

    const activity = await createXmlRpcClient().findOpenSuggestionActivity([1001], 12);

    expect(activity).toEqual({
      id: 900,
      leadId: 1001,
      userId: 99,
      dateDeadline: "2026-09-01",
      summary: "Suggestion commande Client A",
    });
    expect(mockSearchRead.mock.calls[0][0]).toBe("mail.activity");
    expect(mockSearchRead.mock.calls[0][2]).toMatchObject({ order: "date_deadline asc", limit: 1 });
  });
});
