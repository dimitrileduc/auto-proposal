/**
 * Tests for multi-company filtering in xmlrpc-client
 *
 * Context: commit 7982ccc2 ("clean up") removed companyId=3 filtering,
 * causing quotes to be generated for ALL companies (34 erroneous CMB quotes on April 17).
 * These tests verify the 2-step logic (recent orders → inactive partners) works correctly.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";

process.env.ODOO_USERNAME = "test-user";
process.env.ODOO_PASSWORD = "test-pass";

const mockSearchRead = vi.fn();

vi.mock("odoo-xmlrpc-ts", () => {
  return {
    OdooClient: vi.fn().mockImplementation(function () {
      return {
        searchRead: mockSearchRead,
        create: vi.fn(),
        execute: vi.fn(),
      };
    }),
  };
});

vi.mock("../../../utils/date.utils", () => ({
  calculateDateBefore: vi.fn((ref: string, days: number) => {
    const d = new Date(ref);
    d.setDate(d.getDate() - days);
    return d.toISOString().replace("T", " ").substring(0, 19);
  }),
}));

const { createXmlRpcClient } = await import("./xmlrpc-client");

describe("getInactiveCompanyPartners — multi-company filtering", () => {
  let client: ReturnType<typeof createXmlRpcClient>;

  beforeEach(() => {
    vi.clearAllMocks();
    client = createXmlRpcClient();
  });

  it("with companyId=3, recent orders domain includes company_id filter", async () => {
    // Call 0: recent orders for company 3
    mockSearchRead.mockResolvedValueOnce([
      { partner_id: [30, "Client FOODPRINT B"] }, // active recently
    ]);
    // Call 1: inactive partners via buildInactivePartnersDomain
    mockSearchRead.mockResolvedValueOnce([
      { id: 10, name: "Client FOODPRINT A", email: "a@food.com" },
    ]);

    const result = await client.getInactiveCompanyPartners(
      "2025-01-01 00:00:00", "2025-02-01 00:00:00",
      undefined, 196, 3
    );

    expect(result).toEqual([{ id: 10, name: "Client FOODPRINT A", email: "a@food.com" }]);
    expect(mockSearchRead).toHaveBeenCalledTimes(2);

    // Call 0 = sale.order with company_id=3
    expect(mockSearchRead.mock.calls[0][0]).toBe("sale.order");
    expect(mockSearchRead.mock.calls[0][1]).toContainEqual(["company_id", "=", 3]);

    // Call 1 = res.partner with buildInactivePartnersDomain
    expect(mockSearchRead.mock.calls[1][0]).toBe("res.partner");
    const partnerDomain = mockSearchRead.mock.calls[1][1];
    expect(partnerDomain).toContainEqual(["is_company", "=", true]);
    expect(partnerDomain).toContainEqual(["customer_rank", ">", 0]);
    expect(partnerDomain).toContainEqual(["id", "not in", [30]]);
  });

  it("without companyId, throws to prevent cross-company data leaks", async () => {
    await expect(
      client.getInactiveCompanyPartners(
        "2025-01-01 00:00:00", "2025-02-01 00:00:00",
        undefined, null
      )
    ).rejects.toThrow("companyId is required");

    // No API calls should have been made
    expect(mockSearchRead).not.toHaveBeenCalled();
  });

  it("returns only partners Odoo deems inactive via domain (no recent orders)", async () => {
    // No recent orders → all partners with sale_order_ids but not in activePartnerIds
    mockSearchRead.mockResolvedValueOnce([]); // no recent orders
    mockSearchRead.mockResolvedValueOnce([
      { id: 10, name: "Inactive A", email: "a@test.com" },
      { id: 20, name: "Inactive B", email: "b@test.com" },
    ]);

    const result = await client.getInactiveCompanyPartners(
      "2025-01-01 00:00:00", "2025-02-01 00:00:00",
      undefined, null, 3
    );

    expect(result).toHaveLength(2);
    // activePartnerIds should be empty → "id not in []"
    const partnerDomain = mockSearchRead.mock.calls[1][1];
    expect(partnerDomain).toContainEqual(["id", "not in", []]);
  });

  it("tag 196 is correctly excluded from partner results", async () => {
    // Call 0: recent orders
    mockSearchRead.mockResolvedValueOnce([]);
    // Call 1: inactive partners (Odoo filters out tag 196)
    mockSearchRead.mockResolvedValueOnce([
      { id: 20, name: "Not Tagged", email: "ok@test.com" },
    ]);

    const result = await client.getInactiveCompanyPartners(
      "2025-01-01 00:00:00", "2025-02-01 00:00:00",
      undefined, 196, 3
    );

    expect(result).toEqual([{ id: 20, name: "Not Tagged", email: "ok@test.com" }]);
    // Verify tag exclusion in partner domain (call 1)
    const partnerDomain = mockSearchRead.mock.calls[1][1];
    expect(partnerDomain).toContainEqual(["category_id", "not in", [196]]);
  });

  it("active partner IDs are deduplicated from recent orders", async () => {
    // Same partner appears in multiple recent orders
    mockSearchRead.mockResolvedValueOnce([
      { partner_id: [10, "Active Client"] },
      { partner_id: [10, "Active Client"] },
      { partner_id: [10, "Active Client"] },
      { partner_id: [20, "Also Active"] },
    ]);
    mockSearchRead.mockResolvedValueOnce([]);

    await client.getInactiveCompanyPartners(
      "2025-01-01 00:00:00", "2025-02-01 00:00:00",
      undefined, null, 3
    );

    // Partner domain should have deduplicated IDs [10, 20]
    const partnerDomain = mockSearchRead.mock.calls[1][1];
    const idFilter = partnerDomain.find(
      (c: any) => Array.isArray(c) && c[0] === "id" && c[1] === "not in"
    );
    expect(idFilter[2]).toEqual([10, 20]);
  });
});

describe("getOrderHistoryByPartner — company filtering", () => {
  let client: ReturnType<typeof createXmlRpcClient>;

  beforeEach(() => {
    vi.clearAllMocks();
    client = createXmlRpcClient();
  });

  it("with companyId, order query is scoped to that company", async () => {
    mockSearchRead.mockResolvedValueOnce([]);

    await client.getOrderHistoryByPartner(42, 730, "2025-06-01 00:00:00", false, [], 3);

    const domain = mockSearchRead.mock.calls[0][1];
    expect(domain).toContainEqual(["company_id", "=", 3]);
    expect(domain).toContainEqual(["partner_id", "=", 42]);
  });

});
