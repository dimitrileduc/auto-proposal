/**
 * Report types for global workflow and client proposal results
 *
 * @module reports/types
 */

import type { StockReplenishmentResult } from "../features/stock-replenishment/stock-replenishment.types";
import type { ProposalPreparationResult } from "../features/proposal-preparation/proposal-preparation.types";
import type { SuggestionActivityOutcome } from "../features/suggestion-activity/suggestion-activity.types";

/**
 * Global workflow statistics aggregated across all processed clients
 */
export interface GlobalWorkflowStatistics {
  /** Phase 0: Total inactive clients identified */
  totalInactiveClients: number;
  /** Clients analyzed in Phase 1 */
  clientsAnalyzed: number;

  /** Phase 1: Clients with order history */
  clientsWithOrderHistory: number;
  /** Clients without order history */
  clientsWithoutOrderHistory: number;
  /** Percentage of clients with order history */
  percentWithHistory: number;

  /** Phase 2: Clients with replenishment risk */
  clientsWithRisk: number;
  /** Clients with history but no stock risk */
  clientsWithoutRisk: number;
  /** Percentage with risk among clients with history */
  percentWithRisk: number;

  /** Total products across all clients with risk */
  totalProducts: number;
  /** Average products per client with risk */
  averageProductsPerClient: number;

  /** Total proposal value across all clients */
  totalValue: number;

  /** Phase 3: "Suggestion commande" activities created in Odoo */
  activitiesCreated: number;

  /** Opportunities created to carry an activity */
  leadsCreated: number;

  /** Test mode: activities that would have been created */
  wouldCreate: number;

  /** Clients skipped, with a reason (pre-filter, no product, re-check) */
  clientsSkipped: number;

  /** Clients in error (task failure or Odoo write error) */
  clientsFailed: number;
}

/**
 * Complete workflow configuration
 *
 * Combines default config with runtime overrides.
 */
export interface WorkflowConfig {
  /** Inactivity threshold in days */
  inactivityDays: number;
  /** Replenishment threshold (coverage + lead time) in days */
  replenishmentThreshold: number;
  /** Minimum order amount */
  moqMinimum: number;
  /** Max clients to analyze or "all" */
  maxClientsToAnalyze: number | "all";
  /** Generate reports for clients */
  generateReports: boolean;
  /** Test mode: no write in Odoo */
  skipOdooWrite: boolean;
  /** Force reanalysis of inactive clients */
  forceReanalysis: boolean;
}

/**
 * Complete workflow result across all clients
 */
export interface WorkflowResult {
  /** Execution success status */
  success: boolean;
  /** Workflow configuration used */
  config: WorkflowConfig;

  /** Aggregated statistics */
  statistics: GlobalWorkflowStatistics;

  /** Individual results for each client */
  clientResults: ClientProposalResult[];
  /** List of all inactive clients identified */
  allInactiveClients: Array<{ id: number; name: string; email: string | null }>;

  /** Prepared data for generating client reports */
  clientReportData: ClientReportData[];

  /** Path to generated global report */
  reportPath: string;
  /** Execution time in milliseconds */
  executionTime: number;
}

/**
 * Result of processing a single client
 */
export interface ClientProposalResult {
  /** Client ID */
  clientId: number;
  /** Client name */
  clientName: string;
  /** Client email */
  clientEmail?: string;
  /** Processing success status */
  success: boolean;
  /** Whether client has stock replenishment risk */
  hasRisk: boolean;
  /** Processing phases and results */
  phases: {
    stockAnalysis?: StockReplenishmentResult;
    proposalInitial?: ProposalPreparationResult;
    proposalFinal?: ProposalPreparationResult;
  };
  /**
   * Outcome of the "Suggestion commande" step (created, would_create, skipped, error).
   * Always filled by the orchestrator, including for clients skipped before the AI.
   */
  outcome?: SuggestionActivityOutcome;
  /** HTML description of the activity (created or that would have been created) */
  activityNote?: string;
  /** Number of products with replenishment risk */
  productsCount?: number;
  /** Proposal value before MOQ adjustment */
  initialAmount?: number;
  /** Proposal value after MOQ adjustment */
  finalAmount?: number;
  /** Whether MOQ adjustment was applied */
  moqAdjustmentApplied?: boolean;
  /** Amount filled to meet MOQ */
  moqGapFilled?: number;
  /** Path to generated report */
  reportPath?: string;
  /** Full markdown report content */
  reportMarkdown?: string;
  /** Error message if processing failed */
  error?: string;
  /** Execution time in milliseconds */
  executionTime?: number;
}

/**
 * Data for generating individual client report
 */
export interface ClientReportData {
  /** Client information */
  client: {
    id: number;
    name: string;
    email?: string;
  };
  /** Workflow configuration */
  config: WorkflowConfig;
  /** Report generation date */
  executionDate: string;
  /** Total execution time in milliseconds */
  executionTime: number;
  /** Processing phases and results */
  phases: {
    stockAnalysis: StockReplenishmentResult;
    proposalInitial: ProposalPreparationResult;
    proposalFinal: ProposalPreparationResult;
  };
  /** Summary statistics */
  summary: {
    productsCount: number;
    initialAmount: number;
    finalAmount: number;
    moqAdjusted: boolean;
    moqGap?: number;
  };
}
