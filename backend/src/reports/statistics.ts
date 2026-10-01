/**
 * Calculates global workflow statistics
 *
 * Aggregates results across all clients to compute summary statistics including
 * client counts by phase, product counts, and proposal values.
 *
 * @module reports/statistics
 */

import type { ClientProposalResult, GlobalWorkflowStatistics } from "./types";
import type { InactiveClient } from "../features/client-inactivity/inactivity.types";
import type { SuggestionActivityOutcome } from "../features/suggestion-activity/suggestion-activity.types";

/**
 * Calculates aggregated global workflow statistics
 *
 * Processes all client results to compute phase-by-phase metrics:
 * - Phase 0: Total inactive clients identified
 * - Phase 1: Clients analyzed with order history
 * - Phase 2: Clients with stock replenishment risk
 * - Phase 3: "Suggestion commande" outcomes (created, would create, skipped, failed)
 *
 * @param allInactiveClients - All inactive clients identified in Phase 0
 * @param clientResults - Workflow processing results for each client
 * @returns Calculated global workflow statistics
 */
export function calculateGlobalWorkflowStatistics(
  allInactiveClients: InactiveClient[],
  clientResults: ClientProposalResult[]
): GlobalWorkflowStatistics {
  const totalInactiveClients = allInactiveClients.length;

  const clientsAnalyzed = clientResults.length;

  const clientsWithRisk = clientResults.filter(r => r.success && r.hasRisk);

  // Only clients that went through the stock analysis: the ones skipped before the AI have no history read
  const analysed = clientResults.filter(r => r.success && r.phases.stockAnalysis);
  const withHistory = analysed.filter(r => r.phases.stockAnalysis!.total_products_in_history > 0);

  const clientsWithOrderHistory = withHistory.length;
  const clientsWithoutRisk = withHistory.filter(r => !r.hasRisk).length;
  const clientsWithoutOrderHistory = analysed.length - withHistory.length;

  const percentWithHistory = totalInactiveClients > 0
    ? (clientsWithOrderHistory / totalInactiveClients) * 100
    : 0;

  const percentWithRisk = clientsWithOrderHistory > 0
    ? (clientsWithRisk.length / clientsWithOrderHistory) * 100
    : 0;

  const totalProducts = clientsWithRisk.reduce((sum, r) => sum + (r.productsCount ?? 0), 0);
  const totalValue = clientsWithRisk.reduce((sum, r) => sum + (r.finalAmount ?? 0), 0);

  const averageProductsPerClient = clientsWithRisk.length > 0
    ? totalProducts / clientsWithRisk.length
    : 0;

  // One category per client (FR-017): created, would_create, skipped or error
  const outcomes = clientResults.map(outcomeOf);
  const activitiesCreated = outcomes.filter(o => o.kind === "created").length;
  const leadsCreated = outcomes.filter(o => o.kind === "created" && o.leadCreated).length;
  const wouldCreate = outcomes.filter(o => o.kind === "would_create").length;
  const clientsSkipped = outcomes.filter(o => o.kind === "skipped").length;
  const clientsFailed = outcomes.filter(o => o.kind === "error").length;

  return {
    totalInactiveClients,
    clientsAnalyzed,
    clientsWithOrderHistory,
    clientsWithoutOrderHistory,
    percentWithHistory,
    clientsWithRisk: clientsWithRisk.length,
    clientsWithoutRisk,
    percentWithRisk,
    totalProducts,
    averageProductsPerClient,
    totalValue,
    activitiesCreated,
    leadsCreated,
    wouldCreate,
    clientsSkipped,
    clientsFailed,
  };
}

/**
 * Outcome of a client result; a result without outcome is an error
 *
 * @param result - Client result
 * @returns Its "Suggestion commande" outcome
 */
export function outcomeOf(result: ClientProposalResult): SuggestionActivityOutcome {
  return result.outcome ?? { kind: "error", message: result.error ?? "No outcome" };
}
