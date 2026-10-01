import { describe, it, expect } from "vitest";
import {
  buildCompanyDomain,
  buildOldestOpenLeadDomain,
  buildPartnerLeadsDomain,
  buildOpenSuggestionActivitiesDomain,
  buildSuggestionTracesDomain,
  buildLastConfirmedOrderDomain,
} from "./odoo-domains";

describe("buildCompanyDomain", () => {
  it("filters on the company, without exception for records without company", () => {
    expect(buildCompanyDomain(3)).toEqual([["company_id", "=", 3]]);
  });
});

describe("buildOldestOpenLeadDomain (Q5)", () => {
  const domain = buildOldestOpenLeadDomain(42, 3);

  it("targets open opportunities of the client and its contacts", () => {
    expect(domain).toContainEqual(["partner_id.commercial_partner_id", "=", 42]);
    expect(domain).toContainEqual(["type", "=", "opportunity"]);
    expect(domain).toContainEqual(["active", "=", true]);
    expect(domain).toContainEqual(["stage_id.is_won", "=", false]);
  });

  it("is scoped to the analysed company only", () => {
    expect(domain).toContainEqual(["company_id", "=", 3]);
    expect(domain).not.toContainEqual(["company_id", "=", false]);
    expect(domain).not.toContain("|");
  });
});

describe("buildPartnerLeadsDomain (P3 / Q2)", () => {
  it("uses 'in' for many clients (P3)", () => {
    const domain = buildPartnerLeadsDomain([10, 11], 3);
    expect(domain).toContainEqual(["partner_id.commercial_partner_id", "in", [10, 11]]);
    expect(domain).toContainEqual(["type", "=", "opportunity"]);
    expect(domain).toContainEqual(["company_id", "=", 3]);
  });

  it("uses '=' for one client (Q2), archived opportunities not filtered by the domain", () => {
    const domain = buildPartnerLeadsDomain(10, 3);
    expect(domain).toContainEqual(["partner_id.commercial_partner_id", "=", 10]);
    expect(domain).toContainEqual(["company_id", "=", 3]);
    expect(domain).not.toContainEqual(["company_id", "=", false]);
    expect(domain.some((c) => Array.isArray(c) && c[0] === "active")).toBe(false);
  });
});

describe("buildOpenSuggestionActivitiesDomain (P4 / Q3)", () => {
  it("targets open activities of the type on the given opportunities", () => {
    const domain = buildOpenSuggestionActivitiesDomain([55, 56], 12);
    expect(domain).toContainEqual(["activity_type_id", "=", 12]);
    expect(domain).toContainEqual(["res_model", "=", "crm.lead"]);
    expect(domain).toContainEqual(["res_id", "in", [55, 56]]);
    expect(domain).toContainEqual(["active", "=", true]);
  });
});

describe("buildSuggestionTracesDomain (P5 / Q4)", () => {
  it("targets messages of the type on the given opportunities since the window start", () => {
    const domain = buildSuggestionTracesDomain([55], 12, "2026-10-02 00:00:00");
    expect(domain).toContainEqual(["mail_activity_type_id", "=", 12]);
    expect(domain).toContainEqual(["model", "=", "crm.lead"]);
    expect(domain).toContainEqual(["res_id", "in", [55]]);
    expect(domain).toContainEqual(["date", ">=", "2026-10-02 00:00:00"]);
  });
});

describe("buildLastConfirmedOrderDomain (Q6)", () => {
  it("targets confirmed orders of the client in the analysed company", () => {
    const domain = buildLastConfirmedOrderDomain(10, 3);
    expect(domain).toContainEqual(["partner_id", "=", 10]);
    expect(domain).toContainEqual(["state", "in", ["sale", "done"]]);
    expect(domain).toContainEqual(["company_id", "=", 3]);
  });
});
