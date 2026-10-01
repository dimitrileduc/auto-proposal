import { describe, it, expect } from "vitest";
import { formatDateFr, getRunDateParis, odooDatetimeToParisDate } from "./date.utils";

describe("getRunDateParis", () => {
  it("returns the Paris calendar day when UTC is still the previous day", () => {
    expect(getRunDateParis(new Date("2026-10-01T22:30:00Z"))).toBe("2026-10-02");
  });

  it("returns the same day early in the morning UTC", () => {
    expect(getRunDateParis(new Date("2026-10-02T05:00:00Z"))).toBe("2026-10-02");
  });

  it("handles winter time (UTC+1)", () => {
    expect(getRunDateParis(new Date("2026-12-31T23:30:00Z"))).toBe("2027-01-01");
    expect(getRunDateParis(new Date("2026-12-31T22:30:00Z"))).toBe("2026-12-31");
  });
});

describe("formatDateFr", () => {
  it("formats the date part of an Odoo date or datetime", () => {
    expect(formatDateFr("2026-10-02")).toBe("02/10/2026");
    expect(formatDateFr("2026-10-02 23:59:00")).toBe("02/10/2026");
  });
});

describe("odooDatetimeToParisDate", () => {
  it("converts an Odoo UTC datetime to the Paris calendar day", () => {
    expect(odooDatetimeToParisDate("2026-08-11 22:30:00")).toBe("2026-08-12");
    expect(odooDatetimeToParisDate("2026-08-12 09:00:00")).toBe("2026-08-12");
  });

  it("keeps a plain date", () => {
    expect(odooDatetimeToParisDate("2026-08-12")).toBe("2026-08-12");
  });
});
