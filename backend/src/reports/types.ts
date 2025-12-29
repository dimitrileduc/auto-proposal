/**
 * Report types for global workflow and client proposal results
 *
 * @module reports/types
 */

import type { StockReplenishmentResult } from "../features/stock-replenishment/stock-replenishment.types";
import type { ProposalPreparationResult } from "../features/proposal-preparation/proposal-preparation.types";
import type { QuoteCreationResult } from "../features/proposal-generation/proposal-generation.types";

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

  /** Phase 3: Quotes generated in Odoo */
  quotesGenerated: number;

  /** Number of clients that failed processing */
  clientsFailed: number;
}

/**
 * Runtime options for workflow execution
 *
 * All parameters override the default config from auto-proposal.ts.
 * Can be set via Trigger.dev payload.
 */
export interface WorkflowOptions {
  /** Inactivity threshold in days */
  inactivityDays?: number;
  /** Replenishment threshold in days */
  replenishmentThreshold?: number;
  /** Minimum order amount (MOQ) */
  moqMinimum?: number;

  /** Max number of clients to analyze (for debugging) or "all" */
  maxClientsToAnalyze?: number | "all";
  /** Generate markdown reports for all clients with risk */
  generateReports?: boolean;
  /** Skip Odoo quote generation (test mode) */
  skipOdooQuoteGeneration?: boolean;
  /** Force reanalysis of all inactive clients */
  forceReanalysis?: boolean;
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
  /** Skip Odoo quote generation */
  skipOdooQuoteGeneration: boolean;
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
    quote?: QuoteCreationResult;
  };
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
  /** Generated quote name in Odoo */
  quoteName?: string;
  /** Generated quote ID in Odoo */
  quoteId?: number;
  /** Path to generated report */
  reportPath?: string;
  /** Full markdown report content */
  reportMarkdown?: string;
  /** Quote markdown content */
  quoteMarkdown?: string;
  /** Error message if processing failed */
  error?: string;
  /** Execution time in milliseconds */
  executionTime?: number;
}

/**
 * Data for generating global workflow report
 */
export interface GlobalReportData {
  /** Workflow configuration */
  config: WorkflowConfig;
  /** Aggregated statistics */
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
  /** Client summary rows for report table */
  clients: ClientTableRow[];
  /** Processing errors by client */
  errors: ClientError[];
}

/**
 * Client row in global report table
 */
export interface ClientTableRow {
  /** Client name */
  clientName: string;
  /** Client ID */
  clientId: number;
  /** Number of products with risk */
  productsCount: number;
  /** Risk level classification */
  riskLevel: "urgent" | "moderate" | "ok";
  /** Proposal value before MOQ adjustment */
  initialAmount: number;
  /** Proposal value after MOQ adjustment */
  finalAmount: number;
  /** Whether MOQ adjustment was applied */
  moqAdjusted: boolean;
  /** Amount to fill MOQ gap */
  moqGap?: number;
  /** Quote name in Odoo */
  quoteName?: string;
  /** Processing status */
  status: "success" | "error";
  /** Path to client report */
  reportPath: string;
}

/**
 * Client processing error in global report
 */
export interface ClientError {
  /** Client ID */
  clientId: number;
  /** Client name */
  clientName: string;
  /** Phase where error occurred */
  phase: "stock-analysis" | "proposal-preparation" | "quote-generation";
  /** Error message */
  error: string;
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
    quote?: QuoteCreationResult;
  };
  /** Summary statistics */
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
  /** Client's recent order history */
  orderHistory?: {
    date: string;
    orderName: string;
    productsCount: number;
    amountHT: number;
  }[];
  /** Timing for each processing phase */
  phaseTiming: {
    stockAnalysis: number;
    proposalPreparation: number;
    quoteGeneration: number;
  };
}
