import { describe, it, expect } from "vitest";
import { scheduledSkipOdooWrite } from "./scheduled-mode";

describe("scheduledSkipOdooWrite", () => {
  it("writes in Odoo only from the production environment", () => {
    expect(scheduledSkipOdooWrite("PRODUCTION")).toBe(false);
  });

  it("stays in test mode everywhere else", () => {
    for (const env of ["DEVELOPMENT", "STAGING", "PREVIEW", "", "production"]) {
      expect(scheduledSkipOdooWrite(env)).toBe(true);
    }
  });
});
