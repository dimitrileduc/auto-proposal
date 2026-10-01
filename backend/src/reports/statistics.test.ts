import { describe, it, expect } from "vitest";
import { calculateGlobalWorkflowStatistics } from "./statistics";
import type { ClientProposalResult } from "./types";
import type { StockReplenishmentResult } from "../features/stock-replenishment/stock-replenishment.types";
import type { SuggestionActivityOutcome } from "../features/suggestion-activity/suggestion-activity.types";

function stockAnalysis(productsInHistory: number, products = 0): StockReplenishmentResult {
  return {
    client_id: 0,
    products: Array.from({ length: products }) as StockReplenishmentResult["products"],
    total_products_in_history: productsInHistory,
  };
}

function result(
  clientId: number,
  outcome: SuggestionActivityOutcome,
  overrides: Partial<ClientProposalResult> = {}
): ClientProposalResult {
  return {
    clientId,
    clientName: `Client ${clientId}`,
    success: true,
    hasRisk: false,
    phases: {},
    outcome,
    ...overrides,
  };
}

const created = (leadCreated: boolean): SuggestionActivityOutcome => ({
  kind: "created",
  activityId: 1,
  leadId: 2,
  leadName: "Opp",
  leadCreated,
  salespersonId: 7,
  salespersonName: "Marie",
  dateDeadline: "2026-10-02",
});

const results: ClientProposalResult[] = [
  // through the AI with products
  result(1, created(false), { hasRisk: true, productsCount: 3, phases: { stockAnalysis: stockAnalysis(5, 3) } }),
  result(2, created(true), { hasRisk: true, productsCount: 1, phases: { stockAnalysis: stockAnalysis(2, 1) } }),
  result(3, { kind: "would_create", leadName: "Suggestion commande Client 3", leadCreated: true, salespersonId: 7, salespersonName: "Marie" }, {
    hasRisk: true,
    productsCount: 2,
    phases: { stockAnalysis: stockAnalysis(4, 2) },
  }),
  // through the AI, no product
  result(4, { kind: "skipped", reason: "no_products", label: "aucun produit suggéré" }, {
    phases: { stockAnalysis: stockAnalysis(3) },
  }),
  result(5, { kind: "skipped", reason: "no_products", label: "aucun produit suggéré" }, {
    phases: { stockAnalysis: stockAnalysis(0) },
  }),
  // skipped by the pre-filter, before the AI: no phases
  result(6, { kind: "skipped", reason: "no_salesperson", label: "pas de vendeur" }),
  result(7, { kind: "skipped", reason: "open_activity", label: "activité déjà ouverte" }),
  // re-check after the AI
  result(8, { kind: "skipped", reason: "open_activity", label: "activité déjà ouverte" }, {
    hasRisk: true,
    productsCount: 1,
    phases: { stockAnalysis: stockAnalysis(2, 1) },
  }),
  // errors: write error, and task failure
  result(9, { kind: "error", message: "access denied", leadCreatedId: 55 }, {
    hasRisk: true,
    productsCount: 1,
    phases: { stockAnalysis: stockAnalysis(2, 1) },
  }),
  result(10, { kind: "error", message: "timeout" }, { success: false, error: "timeout" }),
];

const inactiveClients = Array.from({ length: 12 }, (_, i) => ({ id: i + 1, name: `Client ${i + 1}`, email: null }));

describe("calculateGlobalWorkflowStatistics — activity outcomes (US5)", () => {
  const stats = calculateGlobalWorkflowStatistics(inactiveClients, results);

  it("puts every analysed client in exactly one category (FR-017)", () => {
    expect(stats.clientsAnalyzed).toBe(10);
    expect(stats.activitiesCreated + stats.wouldCreate + stats.clientsSkipped + stats.clientsFailed).toBe(
      stats.clientsAnalyzed
    );
  });

  it("counts each outcome kind", () => {
    expect(stats.activitiesCreated).toBe(2);
    expect(stats.wouldCreate).toBe(1);
    expect(stats.clientsSkipped).toBe(5);
    expect(stats.clientsFailed).toBe(2);
  });

  it("counts created opportunities only for created activities", () => {
    expect(stats.leadsCreated).toBe(1);
  });

  it("does not count clients skipped before the AI as clients without order history", () => {
    expect(stats.clientsWithoutOrderHistory).toBe(1);
    expect(stats.clientsWithOrderHistory).toBe(6);
  });

  it("has no division by zero without any result", () => {
    const empty = calculateGlobalWorkflowStatistics([], []);
    expect(empty.percentWithHistory).toBe(0);
    expect(empty.percentWithRisk).toBe(0);
    expect(empty.averageProductsPerClient).toBe(0);
  });
});
