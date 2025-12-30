import { task } from "@trigger.dev/sdk/v3";
import { getInactiveClients } from "../features/client-inactivity/inactivity.service";
import { autoProposalConfig } from "../config/auto-proposal";
import { calculateGlobalWorkflowStatistics } from "../reports/statistics";
import { prepareAllClientReportData } from "../reports/data-preparation";
import { generateGlobalReport } from "../reports/global-report";
import { getTodayAsDateString, getDateDaysAgo, parseUserDateInput } from "../utils/date.utils";
import type { OrchestratorTaskPayload, OrchestratorConfig } from "../shared/types";
import { clientProposalTask } from "./client-proposal.task";
import type { GlobalReportData } from "../reports/global-report";
import type { ClientProposalResult } from "../reports/types";
import * as fs from "fs/promises";
import * as path from "path";

/**
 * Complete result of the orchestrator task
 */
export interface OrchestratorTaskResult {
  success: boolean;
  config: OrchestratorConfig;
  statistics: {
    totalInactiveClients: number;
    clientsProcessed: number;
    clientsWithOrderHistory: number;
    clientsWithRisk: number;
    clientsWithoutRisk: number;
    clientsFailed: number;
    quotesGenerated: number;
    reportsGenerated: number;
    totalValue: number;
  };
  globalReport?: {
    markdown: string;
    path: string;
  };
  executionTime: number;
}

/**
 * Trigger.dev orchestrator task for the complete auto-proposal workflow
 *
 * Workflow steps:
 * 1. Fetch all inactive clients
 * 2. Trigger "client-proposal" tasks in batches (parallel)
 * 3. Collect and aggregate results
 * 4. Generate global report with statistics
 *
 * Uses autoProposalConfig as fallback for all parameters.
 *
 * @module trigger/orchestrator
 */
export const orchestratorTask = task({
  id: "auto-proposal-orchestrator",
  retry: {
    maxAttempts: 3,
    factor: 2,
    minTimeoutInMs: 1000,
    maxTimeoutInMs: 30000,
    randomize: true,
  },
  run: async (payload: OrchestratorTaskPayload): Promise<OrchestratorTaskResult> => {
    const startTime = Date.now();

    const config: OrchestratorConfig = {
      dateMin: payload.config?.dateMin
        ? parseUserDateInput(payload.config.dateMin)
        : autoProposalConfig.inactivityDetection.dateMin ?? getDateDaysAgo(30),
      dateMax: payload.config?.dateMax
        ? parseUserDateInput(payload.config.dateMax)
        : autoProposalConfig.inactivityDetection.dateMax ?? getTodayAsDateString(),
      replenishmentThreshold:
        payload.config?.replenishmentThreshold ?? autoProposalConfig.replenishmentThreshold,
      moqMinimum:
        payload.config?.moqMinimum ?? autoProposalConfig.pricing.minimumOrderAmount,
      skipOdooQuoteGeneration:
        payload.config?.skipOdooQuoteGeneration ?? true,
      maxClientsToAnalyze:
        payload.config?.maxClientsToAnalyze ?? "all",
      forceReanalysis:
        payload.config?.forceReanalysis ??
        autoProposalConfig.workflow.forceReanalysis,
      generateReports:
        payload.config?.generateReports ??
        autoProposalConfig.workflow.generateReports,
      excludedPartnerTagId:
        payload.config?.excludedPartnerTagId ??
        autoProposalConfig.inactivityDetection.excludedPartnerTagId,
    };

    console.log("\nAUTO-PROPOSAL ORCHESTRATOR STARTED");
    console.log(`Mode: ${config.skipOdooQuoteGeneration ? "TEST (skip Odoo quotes)" : "PRODUCTION"}`);
    console.log(`Inactivity period: ${config.dateMin} to ${config.dateMax}`);
    console.log(`Force reanalysis: ${config.forceReanalysis ? "YES (include clients with tag 82)" : "NO (skip tag 82)"}\n`);

    try {
      const allInactiveClients = await getInactiveClients(
        config.dateMin,
        config.dateMax,
        config.forceReanalysis ? autoProposalConfig.quoteGeneration.autoProposalTagId : undefined,
        config.excludedPartnerTagId
      );

      const maxToAnalyze =
        config.maxClientsToAnalyze === "all"
          ? allInactiveClients.length
          : config.maxClientsToAnalyze;
      const clientsToProcess = allInactiveClients.slice(0, maxToAnalyze);

      const BATCH_SIZE = 500;
      const totalClients = clientsToProcess.length;
      const totalChunks = Math.ceil(totalClients / BATCH_SIZE);

      const clientResults: ClientProposalResult[] = [];
      let clientsWithRiskCount = 0;
      let quotesGeneratedCount = 0;
      let reportsGeneratedCount = 0;

      for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
        const chunkStart = chunkIndex * BATCH_SIZE;
        const chunkEnd = Math.min(chunkStart + BATCH_SIZE, totalClients);
        const chunkClients = clientsToProcess.slice(chunkStart, chunkEnd);

        try {
          const batchPayloads = chunkClients.map((client) => {
            return {
              payload: {
                client: {
                  id: client.id,
                  name: client.name,
                  email: client.email,
                },
                config: {
                  analysisEndDate: config.dateMax,
                  replenishmentThreshold: config.replenishmentThreshold,
                  moqMinimum: config.moqMinimum,
                  skipOdooQuoteGeneration: config.skipOdooQuoteGeneration,
                  shouldGenerateReport: config.generateReports,
                },
              },
            };
          });

          const batchResults = await clientProposalTask.batchTriggerAndWait(batchPayloads);

          for (const run of batchResults.runs) {
            if (run.ok) {
              const taskResult = run.output;
              clientResults.push(taskResult.result);

              if (taskResult.summary.hasRisk) {
                clientsWithRiskCount++;
              }

              if (taskResult.report.markdown) {
                reportsGeneratedCount++;
              }

              if (taskResult.summary.quoteName) {
                quotesGeneratedCount++;
              }
            } else {
              const runIndex = batchResults.runs.indexOf(run);
              const client = chunkClients[runIndex];
              const errorMessage = run.error && typeof run.error === 'object' && 'message' in run.error
                ? String(run.error.message)
                : "Unknown error";

              clientResults.push({
                clientId: client.id,
                clientName: client.name,
                clientEmail: client.email ?? undefined,
                success: false,
                hasRisk: false,
                phases: {},
                error: errorMessage,
              });
            }
          }
        } catch (batchError) {
          const batchErrorMessage = batchError instanceof Error ? batchError.message : String(batchError);
          console.error(`BATCH ${chunkIndex + 1} FAILED: ${batchErrorMessage}`);

          for (const client of chunkClients) {
            clientResults.push({
              clientId: client.id,
              clientName: client.name,
              clientEmail: client.email ?? undefined,
              success: false,
              hasRisk: false,
              phases: {},
              error: `Batch failure: ${batchErrorMessage}`,
            });
          }

          continue;
        }
      }

      const statistics = calculateGlobalWorkflowStatistics(
        allInactiveClients,
        clientResults
      );

      const inactivityDaysForReport = Math.round(
        (new Date(config.dateMax).getTime() - new Date(config.dateMin).getTime()) / (1000 * 60 * 60 * 24)
      );
      const clientReportData = prepareAllClientReportData(clientResults, {
        inactivityDays: inactivityDaysForReport,
        replenishmentThreshold: config.replenishmentThreshold,
        moqMinimum: config.moqMinimum,
        maxClientsToAnalyze: config.maxClientsToAnalyze,
        generateReports: config.generateReports,
        skipOdooQuoteGeneration: config.skipOdooQuoteGeneration,
        forceReanalysis: config.forceReanalysis,
      });

      const executionTime = Date.now() - startTime;

      const reportsOutputDir = path.join(process.cwd(), "reports-output");
      await fs.mkdir(reportsOutputDir, { recursive: true });

      const globalReportData: GlobalReportData = {
        executionDate: new Date().toISOString(),
        totalExecutionTime: executionTime,
        clients: clientReportData,
        statistics,
        config: {
          replenishmentThreshold: config.replenishmentThreshold,
          moqMinimum: config.moqMinimum,
        },
      };

      const globalMarkdownReport = generateGlobalReport(globalReportData);
      const globalReportFileName = `global-report-${new Date().toISOString().split("T")[0]}.md`;
      const reportPath = path.join(reportsOutputDir, globalReportFileName);
      await fs.writeFile(reportPath, globalMarkdownReport, "utf-8");

      console.log("\nORCHESTRATOR COMPLETED");
      console.log(`Processed: ${clientResults.length}/${clientsToProcess.length} clients (${allInactiveClients.length} total inactive)`);
      console.log(`With order history: ${statistics.clientsWithOrderHistory}`);
      console.log(`With risk: ${statistics.clientsWithRisk}`);
      console.log(`Without risk: ${statistics.clientsWithoutRisk}`);
      console.log(`Failed: ${statistics.clientsFailed}`);
      console.log(`Quotes generated: ${statistics.quotesGenerated}`);
      console.log(`Total value: ${statistics.totalValue.toFixed(2)}€ HT`);
      console.log(`Execution time: ${(executionTime / 1000).toFixed(1)}s\n`);

      return {
        success: true,
        config,
        statistics: {
          totalInactiveClients: allInactiveClients.length,
          clientsProcessed: clientResults.length,
          clientsWithOrderHistory: statistics.clientsWithOrderHistory,
          clientsWithRisk: statistics.clientsWithRisk,
          clientsWithoutRisk: statistics.clientsWithoutRisk,
          clientsFailed: statistics.clientsFailed,
          quotesGenerated: statistics.quotesGenerated,
          reportsGenerated: reportsGeneratedCount,
          totalValue: statistics.totalValue,
        },
        globalReport: {
          markdown: globalMarkdownReport,
          path: reportPath,
        },
        executionTime,
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`\nORCHESTRATOR FAILED: ${errorMessage}\n`);

      throw error;
    }
  },
});
