import { describe, it, expect } from "vitest";
import { generateClientReportJSON } from "./client-report-json";
import { generateClientReportMarkdown } from "./client-report-md";
import type { ClientProposalResult } from "./types";
import type { ProductWithCurrentPrice } from "../features/proposal-preparation/proposal-preparation.types";
import type { SuggestionActivityOutcome } from "../features/suggestion-activity/suggestion-activity.types";

const PRODUCT: ProductWithCurrentPrice = {
  product_id: 100,
  product_name: "Moutarde 250 g",
  product_uom: [27, "TU6"],
  order_history: [
    { order_id: 1, order_name: "S1", date_order: "2026-07-03 09:00:00", quantity: 24, price_unit: 10 },
  ],
  quantity_to_order: 24,
  quantity_source: "llm",
  calculation_metadata: {
    strategy: "median_recent_orders",
    confidence: "medium",
    historical_quantities: [24, 24],
    order_count: 2,
    median_value: 24,
  },
  current_price_unit: 10,
  subtotal: 240,
  moq_adjustment: 0,
};

function report(outcome: SuggestionActivityOutcome, skipOdooWrite = false): string {
  const result: ClientProposalResult = {
    clientId: 10,
    clientName: "Épicerie Alpha",
    success: true,
    hasRisk: true,
    phases: {
      stockAnalysis: { client_id: 10, products: [PRODUCT], total_products_in_history: 3 },
      proposalFinal: { client_id: 10, products: [PRODUCT], total_amount: 240, moq_adjustment_applied: false },
    },
    outcome,
    activityNote:
      "<p>Dernière commande : 12/08/2026</p><p>Produits habituels :</p><ul><li>Moutarde 250 g — 24 TU6 — dernière commande : 03/07/2026</li></ul>",
  };
  const json = generateClientReportJSON(result, { replenishmentThreshold: 30, moqMinimum: 300, skipOdooWrite });
  return generateClientReportMarkdown(json);
}

describe("client report — PHASE 3 - ACTIVITÉ", () => {
  it("shows outcome, opportunity, salesperson, deadline and description", () => {
    const markdown = report({
      kind: "created",
      activityId: 7000,
      leadId: 55,
      leadName: "Opportunité mars",
      leadCreated: false,
      salespersonId: 7,
      salespersonName: "Marie",
      dateDeadline: "2026-10-02",
    });

    expect(markdown).toContain("## PHASE 3 - ACTIVITÉ");
    expect(markdown).toContain("**Résultat :** activité créée");
    expect(markdown).toContain("**Opportunité :** Opportunité mars (ID 55) — existante");
    expect(markdown).toContain("**Vendeur :** Marie");
    expect(markdown).toContain("**Échéance :** 02/10/2026");
    expect(markdown).toContain("- Moutarde 250 g — 24 TU6 — dernière commande : 03/07/2026");
    expect(markdown).toContain("- **skipOdooWrite:** false");
    expect(markdown).not.toContain("ODOO QUOTE");
  });

  it("shows the skip reason", () => {
    const markdown = report(
      { kind: "skipped", reason: "open_activity", label: "activité déjà ouverte" },
      true
    );

    expect(markdown).toContain("**Résultat :** activité déjà ouverte");
    expect(markdown).toContain("- **skipOdooWrite:** true");
  });
});
