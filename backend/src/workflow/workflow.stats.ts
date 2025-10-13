import type { ClientProposalResult } from "./workflow.types";
import type { InactiveClient } from "../features/client-inactivity/inactivity.types";

/**
 * Statistiques calculées pour le workflow global
 */
export interface GlobalWorkflowStatistics {
  // Phase 0: Clients inactifs
  totalInactiveClients: number;
  clientsAnalyzed: number; // Nombre de clients pour lesquels Phase 1 a été effectuée

  // Phase 1: Analyse historique (calculé à partir des clientResults)
  clientsWithOrderHistory: number;
  clientsWithoutOrderHistory: number;
  percentWithHistory: number;

  // Phase 2: Risque de rupture (calculé à partir des clientResults)
  clientsWithRisk: number;
  clientsWithoutRisk: number; // Ont historique mais stock OK
  percentWithRisk: number; // Sur ceux qui ont historique

  // Produits
  totalProducts: number;
  averageProductsPerClient: number; // Pour clients avec risque

  // Valeur
  totalValue: number;

  // Devis (Phase 3)
  quotesGenerated: number;

  // Erreurs
  clientsFailed: number;
}

/**
 * Calcule les statistiques globales du workflow
 *
 * @param allInactiveClients - Tous les clients inactifs (Phase 0)
 * @param clientResults - Résultats du traitement par client
 * @returns Statistiques calculées
 */
export function calculateGlobalWorkflowStatistics(
  allInactiveClients: InactiveClient[],
  clientResults: ClientProposalResult[]
): GlobalWorkflowStatistics {
  const totalInactiveClients = allInactiveClients.length;

  // Nombre de clients analysés (Phase 1 effectuée)
  const clientsAnalyzed = clientResults.length;

  // Séparer les clients selon leur statut
  const clientsWithRisk = clientResults.filter(r => r.success && r.hasRisk);
  const clientsFailed = clientResults.filter(r => !r.success);

  // Un client a un historique de commande SI:
  // - phases.stockAnalysis.total_products_in_history > 0
  // Cela indique qu'il a commandé des produits dans les 180 derniers jours
  const clientsWithOrderHistory = clientResults.filter(
    r => r.success && r.phases.stockAnalysis && r.phases.stockAnalysis.total_products_in_history > 0
  ).length;

  // Clients avec historique MAIS sans risque de rupture
  // = ceux qui ont un historique MAIS hasRisk === false
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

  // Calculer produits et valeur
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
