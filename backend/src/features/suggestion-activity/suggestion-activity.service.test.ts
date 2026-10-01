import { describe, it, expect, vi } from "vitest";
import { verifySuggestionActivityType } from "./suggestion-activity.service";
import type { ActivityTypeInfo } from "../../infrastructure/odoo/clients/odoo-client.types";

function odooWith(type: ActivityTypeInfo | null) {
  return { getActivityType: vi.fn(async () => type) };
}

describe("verifySuggestionActivityType (V1)", () => {
  it("accepts the Suggestion commande type on crm.lead", async () => {
    const odoo = odooWith({ id: 12, name: "Suggestion commande", resModel: "crm.lead", active: true });
    await expect(verifySuggestionActivityType(odoo, 12)).resolves.toBeUndefined();
  });

  it("fails without reading Odoo when the id is not configured", async () => {
    const odoo = odooWith(null);
    await expect(verifySuggestionActivityType(odoo, 0)).rejects.toThrow("not configured");
    expect(odoo.getActivityType).not.toHaveBeenCalled();
  });

  it("fails when the id does not exist", async () => {
    await expect(verifySuggestionActivityType(odooWith(null), 99)).rejects.toThrow("does not exist");
  });

  it("fails when the id is another type or another model", async () => {
    await expect(
      verifySuggestionActivityType(odooWith({ id: 4, name: "Appel", resModel: false, active: true }), 4)
    ).rejects.toThrow('expected "Suggestion commande" on crm.lead');
    await expect(
      verifySuggestionActivityType(
        odooWith({ id: 12, name: "Suggestion commande", resModel: "res.partner", active: true }),
        12
      )
    ).rejects.toThrow("expected");
  });
});
