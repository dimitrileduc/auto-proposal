import type { StockReplenishmentResult } from "../features/stock-replenishment/stock-replenishment.types";
import type { ProposalPreparationResult } from "../features/proposal-preparation/proposal-preparation.types";
import type { QuoteCreationResult } from "../features/proposal-generation/proposal-generation.types";

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
 * Options runtime pour le workflow (override config)
 * Tous les paramètres peuvent être overridés depuis le payload (e.g. Trigger.dev)
 */
export interface WorkflowOptions {
  // Paramètres d'analyse
  inactivityDays?: number; // Seuil d'inactivité en jours
  analysisWindowDays?: number; // Fenêtre d'analyse historique en jours
  replenishmentThreshold?: number; // Seuil de réapprovisionnement en jours
  moqMinimum?: number; // Montant minimum de commande (MOQ)

  // Paramètres de workflow
  maxClientsToAnalyze?: number | "all"; // Debug: limite le nombre total de clients à analyser (Phase 1)
  generateReports?: boolean; // Si true, génère les rapports markdown pour tous les clients avec risk
  skipOdooQuoteGeneration?: boolean; // Si true, ne crée pas les devis dans Odoo (mode test)
  forceReanalysis?: boolean; // Si true, force la réanalyse de tous les clients inactifs, même ceux ayant déjà des devis auto-proposal
}

/**
 * Configuration complète du workflow (depuis config + options runtime)
 */
export interface WorkflowConfig {
  // Depuis auto-proposal.ts config
  inactivityDays: number;
  analysisWindowDays: number;
  replenishmentThreshold: number; // Seuil de réapprovisionnement (couverture + lead time)
  moqMinimum: number;
  // Runtime overrides
  maxClientsToAnalyze: number | "all";
  generateReports: boolean;
  skipOdooQuoteGeneration: boolean;
  forceReanalysis: boolean;
}

/**
 * Résultat du workflow global (tous les clients)
 */
export interface WorkflowResult {
  success: boolean;
  config: WorkflowConfig;

  // Statistiques calculées
  statistics: GlobalWorkflowStatistics;

  // Données brutes
  clientResults: ClientProposalResult[];
  allInactiveClients: Array<{ id: number; name: string; email: string | null }>;

  // Données préparées pour rapports clients
  clientReportData: ClientReportData[];

  reportPath: string;
  executionTime: number; // ms
}

/**
 * Résultat du traitement d'un client
 */
export interface ClientProposalResult {
  clientId: number;
  clientName: string;
  clientEmail?: string;
  success: boolean;
  hasRisk: boolean; // true si des produits nécessitent réappro
  phases: {
    stockAnalysis?: StockReplenishmentResult;
    proposalInitial?: ProposalPreparationResult;
    proposalFinal?: ProposalPreparationResult;
    quote?: QuoteCreationResult;
  };
  // Stats pour le tableau global
  productsCount?: number;
  initialAmount?: number; // Avant MOQ
  finalAmount?: number; // Après MOQ
  moqAdjustmentApplied?: boolean;
  moqGapFilled?: number;
  quoteName?: string;
  quoteId?: number;
  reportPath?: string;
  reportMarkdown?: string; // Contenu markdown du rapport complet
  quoteMarkdown?: string; // Contenu markdown du devis seul
  error?: string;
  executionTime?: number; // ms
}

/**
 * Données pour la génération du rapport global
 */
export interface GlobalReportData {
  config: WorkflowConfig;
  stats: {
    executionDate: string;
    totalInactiveClients: number;
    clientsToProcess: number;
    clientsWithHistory: number;
    clientsWithRisk: number;
    clientsWithoutRisk: number;
    quotesGenerated: number;
    quotesFailed: number;
    totalValue: number;
    executionTime: number;
  };
  clients: ClientTableRow[];
  errors: ClientError[];
}

/**
 * Ligne du tableau clients dans le rapport global
 */
export interface ClientTableRow {
  clientName: string;
  clientId: number;
  productsCount: number;
  riskLevel: "urgent" | "moderate" | "ok";
  initialAmount: number;
  finalAmount: number;
  moqAdjusted: boolean;
  moqGap?: number;
  quoteName?: string;
  status: "success" | "error";
  reportPath: string;
}

/**
 * Erreur client pour le rapport global
 */
export interface ClientError {
  clientId: number;
  clientName: string;
  phase: "stock-analysis" | "proposal-preparation" | "quote-generation";
  error: string;
}

/**
 * Données pour la génération du rapport client
 */
export interface ClientReportData {
  client: {
    id: number;
    name: string;
    email?: string;
  };
  config: WorkflowConfig;
  executionDate: string;
  executionTime: number;
  phases: {
    stockAnalysis: StockReplenishmentResult;
    proposalInitial: ProposalPreparationResult;
    proposalFinal: ProposalPreparationResult;
    quote?: QuoteCreationResult;
  };
  summary: {
    productsCount: number;
    initialAmount: number;
    finalAmount: number;
    moqAdjusted: boolean;
    moqGap?: number;
    quoteName?: string;
    quoteId?: number;
    quoteState?: string;
  };
  orderHistory?: {
    date: string;
    orderName: string;
    productsCount: number;
    amountHT: number;
  }[];
  phaseTiming: {
    stockAnalysis: number;
    proposalPreparation: number;
    quoteGeneration: number;
  };
}
