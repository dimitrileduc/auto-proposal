/**
 * Client processing types for the proposal workflow
 * @module shared/types/client
 */
import type { InactiveClient } from "../../features/client-inactivity/inactivity.types";

/**
 * Configuration for processing a single client
 *
 * Used by client-proposal workflow and task.
 * Contains parameters for individual client processing (phases 1, 2.5, 3).
 */
export interface ClientProcessingConfig {
  /** Reference date for history analysis (format: "YYYY-MM-DD HH:MM:SS", defaults to today) */
  analysisEndDate?: string;

  /** Replenishment threshold in days (coverage + lead time) */
  replenishmentThreshold: number;

  /** Minimum order amount in euros (MOQ) */
  moqMinimum: number;

  /** Skip Odoo quote creation (Phase 3) */
  skipOdooQuoteGeneration: boolean;

  /** Generate markdown reports for at-risk clients (default: true) */
  shouldGenerateReport?: boolean;

  /** Company ID for multi-company filtering (e.g., 3 = FOODPRINT SRL) */
  companyId?: number;
}

/**
 * Payload for the "client-proposal" Trigger.dev task
 *
 * Processes a single client through the complete workflow
 * (or partial if skipOdooQuoteGeneration=true)
 */
export interface ClientTaskPayload {
  /** Client to process */
  client: InactiveClient;

  /** Processing configuration */
  config: ClientProcessingConfig;
}
