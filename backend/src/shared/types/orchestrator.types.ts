/**
 * Orchestrator types for batch client processing
 * @module shared/types/orchestrator
 */

/**
 * Configuration for the auto-proposal orchestrator
 */
export interface OrchestratorConfig {
  /** Start date for inactivity detection (format: "YYYY-MM-DD HH:MM:SS") */
  dateMin: string;

  /** End date for inactivity detection (format: "YYYY-MM-DD HH:MM:SS") */
  dateMax: string;

  /** Limit number of clients to analyze (debug), "all" = no limit */
  maxClientsToAnalyze: number | "all";

  /** Force reanalysis of clients with existing auto-proposals (tag 82) */
  forceReanalysis: boolean;

  /** Generate markdown reports for at-risk clients */
  generateReports: boolean;

  /** Replenishment threshold in days (coverage + lead time) */
  replenishmentThreshold: number;

  /** Minimum order amount in euros (MOQ) */
  moqMinimum: number;

  /** Skip Odoo quote creation (Phase 3) */
  skipOdooQuoteGeneration: boolean;

  /** Partner tag ID to exclude from analysis (null = no filtering) */
  excludedPartnerTagId?: number | null;

  /** Odoo company ID to filter orders (default: from config = FOODPRINT SRL) */
  companyId?: number;
}

/**
 * Payload for the "auto-proposal-orchestrator" Trigger.dev task
 *
 * Orchestrates batch processing of inactive clients
 * by triggering parallel "client-proposal" tasks.
 */
export interface OrchestratorTaskPayload {
  /** Orchestration config (partial override of autoProposalConfig) */
  config?: Partial<OrchestratorConfig>;
}
