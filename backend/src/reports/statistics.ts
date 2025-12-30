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

/**
 * Calculates aggregated global workflow statistics
 *
 * Processes all client results to compute phase-by-phase metrics:
 * - Phase 0: Total inactive clients identified
 * - Phase 1: Clients analyzed with order history
 * - Phase 2: Clients with stock replenishment risk
 * - Phase 3: Successful quote generation
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
  const clientsFailed = clientResults.filter(r => !r.success);

  const clientsWithOrderHistory = clientResults.filter(
    r => r.success && r.phases.stockAnalysis && r.phases.stockAnalysis.total_products_in_history > 0
  ).length;

  const clientsWithoutRisk = clientResults.filter(
    r => r.success && r.phases.stockAnalysis && r.phases.stockAnalysis.total_products_in_history > 0 && !r.hasRisk
  ).length;

  const clientsWithoutOrderHistory = clientsAnalyzed - clientsWithOrderHistory - clientsFailed.length;

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

  const quotesGenerated = clientResults.filter(r => r.quoteName).length;

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
    quotesGenerated,
    clientsFailed: clientsFailed.length,
  };
}
