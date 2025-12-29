/**
 * Configuration pour l'orchestrateur auto-proposal
 */
export interface OrchestratorConfig {
  /** Date minimum pour la détection d'inactivité (format: "YYYY-MM-DD HH:MM:SS") */
  dateMin: string;

  /** Date maximum pour la détection d'inactivité (format: "YYYY-MM-DD HH:MM:SS") */
  dateMax: string;

  /** Limite le nombre de clients à analyser (debug), "all" = tous */
  maxClientsToAnalyze: number | "all";

  /** Si true, force la réanalyse de tous les clients inactifs, même ceux ayant déjà des devis auto-proposal (tag 82) */
  forceReanalysis: boolean;

  /** Si true, génère les rapports markdown pour tous les clients avec risk */
  generateReports: boolean;

  /** Nombre de jours d'historique à analyser (ex: 180 = 6 mois) */
  analysisWindowDays: number;

  /** Seuil de réapprovisionnement en jours (couverture + lead time) */
  replenishmentThreshold: number;

  /** Montant minimum de commande en euros (MOQ) */
  moqMinimum: number;

  /** Si true, skip la création du devis Odoo (Phase 3) */
  skipOdooQuoteGeneration: boolean;

  /** Tag partner à exclure définitivement de l'analyse (ex: 195 = "exclude-auto-proposal"). Si null, pas de filtrage. */
  excludedPartnerTagId?: number | null;
}

/**
 * Payload pour la task Trigger.dev "auto-proposal-orchestrator"
 *
 * Cette task orchestre le traitement batch de tous les clients inactifs
 * en déclenchant des tasks "client-proposal" en parallèle.
 */
export interface OrchestratorTaskPayload {
  /** Configuration d'orchestration (override partiel de autoProposalConfig) */
  config?: Partial<OrchestratorConfig>;
}
