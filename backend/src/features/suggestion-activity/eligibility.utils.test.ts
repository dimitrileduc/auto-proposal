import { describe, it, expect } from "vitest";
import { decideEligibility, followUpWindowStart, isWithinFollowUpDelay, toSkippedOutcome } from "./eligibility.utils";
import type { PartnerContext } from "./suggestion-activity.types";

const RUN_DATE = "2026-10-16";
const DELAY = 21;

function context(overrides: Partial<PartnerContext> = {}): PartnerContext {
  return {
    partnerId: 10,
    partnerName: "Client A",
    commercialPartnerId: 10,
    companyId: 3,
    salesperson: { id: 7, name: "Marie", active: true, companyIds: [2, 3] },
    leadIds: [],
    ...overrides,
  };
}

describe("decideEligibility — salesperson (US1)", () => {
  it("skips a client without salesperson", () => {
    const decision = decideEligibility(context({ salesperson: undefined }), RUN_DATE, DELAY);
    expect(decision).toEqual({ eligible: false, reason: "no_salesperson" });
  });

  it("skips a client whose salesperson is archived", () => {
    const decision = decideEligibility(
      context({ salesperson: { id: 7, name: "Marie", active: false, companyIds: [3] } }),
      RUN_DATE,
      DELAY
    );
    expect(decision).toEqual({ eligible: false, reason: "inactive_salesperson" });
  });

  it("accepts a client with an active salesperson", () => {
    expect(decideEligibility(context(), RUN_DATE, DELAY)).toEqual({ eligible: true });
  });

  it("checks no_salesperson before inactive_salesperson", () => {
    const decision = decideEligibility(context({ salesperson: undefined }), RUN_DATE, DELAY);
    expect(decision.eligible === false && decision.reason).toBe("no_salesperson");
  });

  it("skips a client whose salesperson has no access to the analysed company", () => {
    const decision = decideEligibility(
      context({ salesperson: { id: 9, name: "Céline", active: true, companyIds: [1, 2] } }),
      RUN_DATE,
      DELAY
    );
    expect(decision).toEqual({ eligible: false, reason: "salesperson_no_company_access" });
    if (decision.eligible === false) {
      expect(toSkippedOutcome(decision).label).toBe("vendeur sans accès à FOODPRINT");
    }
  });

  it("checks inactive_salesperson before the company access, and the access before the open activity", () => {
    const archivedElsewhere = decideEligibility(
      context({ salesperson: { id: 9, name: "Céline", active: false, companyIds: [2] } }),
      RUN_DATE,
      DELAY
    );
    expect(archivedElsewhere.eligible === false && archivedElsewhere.reason).toBe("inactive_salesperson");

    const elsewhereWithActivity = decideEligibility(
      context({
        salesperson: { id: 9, name: "Céline", active: true, companyIds: [2] },
        leadIds: [55],
        openActivity: { id: 900, leadId: 55 },
      }),
      RUN_DATE,
      DELAY
    );
    expect(elsewhereWithActivity.eligible === false && elsewhereWithActivity.reason).toBe(
      "salesperson_no_company_access"
    );
  });
});

describe("decideEligibility — open activity and follow-up delay (US4)", () => {
  it("skips a client with an open activity, even overdue or assigned to someone else", () => {
    const decision = decideEligibility(
      context({
        leadIds: [55],
        openActivity: { id: 900, leadId: 55 },
      }),
      RUN_DATE,
      DELAY
    );
    expect(decision).toEqual({
      eligible: false,
      reason: "open_activity",
      detail: { activityId: 900, leadId: 55 },
    });
  });

  it("skips a client followed up less than 3 weeks ago, with the date in the label", () => {
    const ctx = context({
      leadIds: [55],
      lastFollowUp: { date: "2026-10-02 08:00:00", messageId: 1, leadId: 55 },
    });

    const decision = decideEligibility(ctx, "2026-10-16", DELAY);

    expect(decision).toEqual({
      eligible: false,
      reason: "recent_follow_up",
      detail: { date: "2026-10-02 08:00:00", leadId: 55 },
    });
    expect(toSkippedOutcome(decision as Extract<typeof decision, { eligible: false }>).label).toBe(
      "relancé il y a moins de 3 semaines (02/10/2026)"
    );
  });

  it("accepts the same client 21 days after the follow-up", () => {
    const ctx = context({
      leadIds: [55],
      lastFollowUp: { date: "2026-10-02 08:00:00", messageId: 1, leadId: 55 },
    });
    expect(decideEligibility(ctx, "2026-10-23", DELAY)).toEqual({ eligible: true });
  });

  it("checks the salesperson before the open activity", () => {
    const decision = decideEligibility(
      context({ salesperson: undefined, leadIds: [55], openActivity: { id: 900, leadId: 55 } }),
      RUN_DATE,
      DELAY
    );
    expect(decision.eligible === false && decision.reason).toBe("no_salesperson");
  });

  it("checks the open activity before the follow-up delay", () => {
    const decision = decideEligibility(
      context({
        leadIds: [55],
        openActivity: { id: 900, leadId: 55 },
        lastFollowUp: { date: "2026-10-10 08:00:00", messageId: 1, leadId: 55 },
      }),
      RUN_DATE,
      DELAY
    );
    expect(decision.eligible === false && decision.reason).toBe("open_activity");
  });
});

describe("isWithinFollowUpDelay", () => {
  it("blocks at 20 days and lets through at 21 days", () => {
    expect(isWithinFollowUpDelay("2026-10-02 08:00:00", "2026-10-22", 21)).toBe(true);
    expect(isWithinFollowUpDelay("2026-10-02 08:00:00", "2026-10-23", 21)).toBe(false);
  });

  it("counts calendar days from date to date, on the Paris day of the follow-up", () => {
    expect(isWithinFollowUpDelay("2026-10-02 20:00:00", "2026-10-23", 21)).toBe(false);
    expect(isWithinFollowUpDelay("2026-10-02 00:00:00", "2026-10-16", 21)).toBe(true);
    // 22:30 UTC on 02/10 is already 03/10 in Paris: 20 days before 23/10, still blocked
    expect(isWithinFollowUpDelay("2026-10-02 22:30:00", "2026-10-23", 21)).toBe(true);
    expect(isWithinFollowUpDelay("2026-10-02 22:30:00", "2026-10-24", 21)).toBe(false);
  });

  it("labels the follow-up with its Paris day", () => {
    const decision = decideEligibility(
      context({ leadIds: [55], lastFollowUp: { date: "2026-10-02 22:30:00", messageId: 1, leadId: 55 } }),
      "2026-10-16",
      DELAY
    );
    expect(toSkippedOutcome(decision as Extract<typeof decision, { eligible: false }>).label).toBe(
      "relancé il y a moins de 3 semaines (03/10/2026)"
    );
  });
});

describe("followUpWindowStart", () => {
  it("returns runDate minus the delay at midnight", () => {
    expect(followUpWindowStart("2026-10-23", 21)).toBe("2026-10-02 00:00:00");
  });

  it("crosses month and DST boundaries", () => {
    expect(followUpWindowStart("2026-11-13", 21)).toBe("2026-10-23 00:00:00");
    expect(followUpWindowStart("2027-01-05", 21)).toBe("2026-12-15 00:00:00");
  });
});
