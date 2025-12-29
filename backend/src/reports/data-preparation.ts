/**
 * Transforms client proposal results into report data structures
 *
 * Prepares raw workflow results (ClientProposalResult) into structured report data
 * (ClientReportData) for markdown and JSON report generation.
 *
 * @module reports/data-preparation
 */
import type {
  ClientProposalResult,
  ClientReportData,
  WorkflowConfig,
} from "./types";

/**
 * Prepares client report data from workflow result
 *
 * Transforms raw workflow results (ClientProposalResult) into structured report data
 * (ClientReportData) for report generation.
 *
 * Only generates report data if processing succeeded and required phases are present.
 *
 * @param clientResult - Workflow result for the client
 * @param config - Workflow configuration
 * @returns Formatted report data, or null if insufficient data
 */
export function prepareClientReportData(
  clientResult: ClientProposalResult,
  config: WorkflowConfig
): ClientReportData | null {
  if (!clientResult.success) {
    return null;
  }

  if (!clientResult.phases.stockAnalysis || !clientResult.phases.proposalFinal) {
    return null;
  }

  return {
    client: {
      id: clientResult.clientId,
      name: clientResult.clientName,
      email: clientResult.clientEmail,
    },
    config,
    executionDate: new Date().toISOString(),
    executionTime: clientResult.executionTime ?? 0,
    phases: {
      stockAnalysis: clientResult.phases.stockAnalysis,
      proposalInitial: clientResult.phases.proposalFinal,
      proposalFinal: clientResult.phases.proposalFinal,
      quote: clientResult.phases.quote,
    },
    summary: {
      productsCount: clientResult.productsCount ?? 0,
      initialAmount: clientResult.initialAmount ?? 0,
      finalAmount: clientResult.finalAmount ?? 0,
      moqAdjusted: clientResult.moqAdjustmentApplied ?? false,
      moqGap: clientResult.moqGapFilled,
      quoteName: clientResult.quoteName,
      quoteId: clientResult.quoteId,
      quoteState: clientResult.phases.quote?.quote_state,
    },
    orderHistory: [],
    phaseTiming: {
      stockAnalysis: 0,
      proposalPreparation: 0,
      quoteGeneration: 0,
    },
  };
}

/**
 * Prepares report data for all clients from workflow results
 *
 * Transforms all ClientProposalResult entries into ClientReportData structures,
 * filtering out any entries with insufficient data.
 *
 * @param clientResults - All workflow results for clients
 * @param config - Workflow configuration
 * @returns Array of formatted report data for all clients with sufficient data
 */
export function prepareAllClientReportData(
  clientResults: ClientProposalResult[],
  config: WorkflowConfig
): ClientReportData[] {
  return clientResults
    .map((result) => prepareClientReportData(result, config))
    .filter((data): data is ClientReportData => data !== null);
}
