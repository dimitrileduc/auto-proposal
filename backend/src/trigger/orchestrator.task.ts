import { task } from "@trigger.dev/sdk/v3";
import { getInactiveClients } from "../features/client-inactivity/inactivity.service";
import { autoProposalConfig } from "../config/auto-proposal";
import { calculateGlobalWorkflowStatistics, outcomeOf } from "../reports/statistics";
import { prepareAllClientReportData } from "../reports/data-preparation";
import { buildGlobalReportLists, generateGlobalReport } from "../reports/global-report";
import { getTodayAsDateString, getDateDaysAgo, parseUserDateInput, getRunDateParis } from "../utils/date.utils";
import type { OrchestratorTaskPayload, OrchestratorConfig } from "../shared/types";
import { clientProposalTask } from "./client-proposal.task";
import type { GlobalReportData } from "../reports/global-report";
import type { ClientProposalResult } from "../reports/types";
import { createOdooClient } from "../infrastructure/odoo/odoo.service";
import { verifySuggestionActivityType } from "../features/suggestion-activity/suggestion-activity.service";
import {
  buildPartnerContexts,
  prefilterEligibility,
  selectClientsToTrigger,
} from "../features/suggestion-activity/prefilter.service";
import type { SuggestionActivityOutcome } from "../features/suggestion-activity/suggestion-activity.types";
import type { InactiveClient } from "../features/client-inactivity/inactivity.types";
import { errorMessage } from "../utils/error.utils";
import * as fs from "fs/promises";
import * as path from "path";

/**
 * Complete result of the orchestrator task
 */
export interface OrchestratorTaskResult {
  success: boolean;
  config: OrchestratorConfig;
  /** test = nothing written in Odoo */
  mode: "test" | "real";
  statistics: {
    totalInactiveClients: number;
    clientsProcessed: number;
    clientsWithOrderHistory: number;
    clientsWithRisk: number;
    clientsWithoutRisk: number;
    activitiesCreated: number;
    leadsCreated: number;
    /** Test mode: activities that would have been created */
    wouldCreate: number;
    clientsSkipped: number;
    clientsFailed: number;
    reportsGenerated: number;
    totalValue: number;
  };
  /** Outcome of every analysed client, skipped before the AI included */
  outcomes: Array<{ clientId: number; clientName: string; outcome: SuggestionActivityOutcome }>;
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
 * 1. Check the "Suggestion commande" activity type (V1), abort the run if invalid
 * 2. Fetch all inactive clients
 * 3. Batch eligibility pre-filter (salesperson, open activity, recent follow-up)
 * 4. Trigger "client-proposal" tasks in batches (parallel), eligible clients only
 * 5. Collect and aggregate results, skipped clients included
 * 6. Generate global report with statistics
 *
 * Uses autoProposalConfig as fallback for all parameters.
 *
 * @module trigger/orchestrator
 */
export const orchestratorTask = task({
  id: "auto-proposal-orchestrator",
  // No retry: a failure after the client batches would replay the AI for every client and
  // report the clients already served as "activité déjà ouverte". Client tasks retry on their own.
  retry: {
    maxAttempts: 1,
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
      skipOdooWrite:
        payload.config?.skipOdooWrite ?? true,
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
      companyId:
        payload.config?.companyId ??
        autoProposalConfig.defaultCompanyId,
    };

    const activityTypeId = autoProposalConfig.activity.suggestionActivityTypeId;
    const delayDays = autoProposalConfig.activity.followUpDelayDays;
    const companyId = config.companyId ?? autoProposalConfig.defaultCompanyId;
    const runDate = getRunDateParis();
    const mode: "test" | "real" = config.skipOdooWrite ? "test" : "real";

    console.log("\nAUTO-PROPOSAL ORCHESTRATOR STARTED");
    console.log(`Mode: ${config.skipOdooWrite ? "TEST (no write in Odoo)" : "REAL (activities written in Odoo)"}`);
    console.log(`Run date: ${runDate}`);
    console.log(`Inactivity period: ${config.dateMin} to ${config.dateMax}`);
    console.log(`Company ID: ${config.companyId}`);
    console.log(`Force reanalysis: ${config.forceReanalysis ? "YES (include clients with tag 82)" : "NO (skip tag 82)"}\n`);

    try {
      const odooClient = createOdooClient(autoProposalConfig.odooApiType);

      // V1: abort before any work if the activity type is not the expected one
      await verifySuggestionActivityType(odooClient, activityTypeId);

      const allInactiveClients = await getInactiveClients(
        config.dateMin,
        config.dateMax,
        config.forceReanalysis ? autoProposalConfig.inactivityDetection.autoProposalOrderTagId : undefined,
        config.excludedPartnerTagId,
        config.companyId
      );

      const maxToAnalyze =
        config.maxClientsToAnalyze === "all"
          ? allInactiveClients.length
          : config.maxClientsToAnalyze;
      const clientsToProcess = allInactiveClients.slice(0, maxToAnalyze);

      // Batch pre-filter before the AI: skipped clients go straight to the report
      const contexts = await buildPartnerContexts(
        clientsToProcess.map((client) => client.id),
        companyId,
        activityTypeId,
        runDate,
        odooClient,
        delayDays
      );
      const prefilter = prefilterEligibility(contexts, runDate, delayDays);
      const { toTrigger, skippedOutcomes } = selectClientsToTrigger(clientsToProcess, prefilter);

      console.log(`Pre-filter: ${toTrigger.length} eligible, ${skippedOutcomes.length} skipped before the AI`);

      const clientResults: ClientProposalResult[] = skippedOutcomes.map(({ client, outcome }) => ({
        clientId: client.id,
        clientName: client.name,
        clientEmail: client.email ?? undefined,
        success: true,
        hasRisk: false,
        phases: {},
        outcome,
      }));

      const BATCH_SIZE = 500;
      const totalClients = toTrigger.length;
      const totalChunks = Math.ceil(totalClients / BATCH_SIZE);

      let reportsGeneratedCount = 0;

      for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
        const chunkStart = chunkIndex * BATCH_SIZE;
        const chunkEnd = Math.min(chunkStart + BATCH_SIZE, totalClients);
        const chunkClients = toTrigger.slice(chunkStart, chunkEnd);

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
                  skipOdooWrite: config.skipOdooWrite,
                  shouldGenerateReport: config.generateReports,
                  companyId,
                  runDate,
                  eligibilityCheck: true,
                },
              },
            };
          });

          const batchResults = await clientProposalTask.batchTriggerAndWait(batchPayloads);

          batchResults.runs.forEach((run, runIndex) => {
            if (run.ok) {
              const taskResult = run.output;
              clientResults.push({ ...taskResult.result, outcome: taskResult.summary.outcome });

              if (taskResult.report.markdown) {
                reportsGeneratedCount++;
              }
            } else {
              const runErrorMessage = run.error && typeof run.error === 'object' && 'message' in run.error
                ? String(run.error.message)
                : "Unknown error";

              clientResults.push(failedClientResult(chunkClients[runIndex], runErrorMessage));
            }
          });
        } catch (batchError) {
          const batchErrorMessage = errorMessage(batchError);
          console.error(`BATCH ${chunkIndex + 1} FAILED: ${batchErrorMessage}`);

          for (const client of chunkClients) {
            clientResults.push(failedClientResult(client, `Batch failure: ${batchErrorMessage}`));
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
        skipOdooWrite: config.skipOdooWrite,
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
        mode,
        ...buildGlobalReportLists(clientResults),
      };

      const globalMarkdownReport = generateGlobalReport(globalReportData);
      const globalReportFileName = `global-report-${new Date().toISOString().split("T")[0]}.md`;
      const reportPath = path.join(reportsOutputDir, globalReportFileName);
      await fs.writeFile(reportPath, globalMarkdownReport, "utf-8");

      console.log("\nORCHESTRATOR COMPLETED");
      console.log(`Mode: ${mode === "test" ? "TEST (nothing written in Odoo)" : "REAL"}`);
      console.log(`Clients processed: ${clientResults.length}/${clientsToProcess.length} (${allInactiveClients.length} total inactive)`);
      console.log(`With order history: ${statistics.clientsWithOrderHistory}`);
      console.log(`With suggested products: ${statistics.clientsWithRisk}`);
      console.log(
        mode === "test"
          ? `Activities that would have been created: ${statistics.wouldCreate}`
          : `Activities created: ${statistics.activitiesCreated}`
      );
      console.log(`Opportunities created: ${statistics.leadsCreated}`);
      console.log(`Clients skipped: ${statistics.clientsSkipped}`);
      console.log(`Errors: ${statistics.clientsFailed}`);
      console.log(`Execution time: ${(executionTime / 1000).toFixed(1)}s\n`);

      return {
        success: true,
        config,
        mode,
        statistics: {
          totalInactiveClients: allInactiveClients.length,
          clientsProcessed: clientResults.length,
          clientsWithOrderHistory: statistics.clientsWithOrderHistory,
          clientsWithRisk: statistics.clientsWithRisk,
          clientsWithoutRisk: statistics.clientsWithoutRisk,
          activitiesCreated: statistics.activitiesCreated,
          leadsCreated: statistics.leadsCreated,
          wouldCreate: statistics.wouldCreate,
          clientsSkipped: statistics.clientsSkipped,
          clientsFailed: statistics.clientsFailed,
          reportsGenerated: reportsGeneratedCount,
          totalValue: statistics.totalValue,
        },
        outcomes: clientResults.map((result) => ({
          clientId: result.clientId,
          clientName: result.clientName,
          outcome: outcomeOf(result),
        })),
        globalReport: {
          markdown: globalMarkdownReport,
          path: reportPath,
        },
        executionTime,
      };
    } catch (error) {
      console.error(`\nORCHESTRATOR FAILED: ${errorMessage(error)}\n`);

      throw error;
    }
  },
});

/**
 * Result of a client whose task failed after its retries
 */
function failedClientResult(client: InactiveClient, message: string): ClientProposalResult {
  return {
    clientId: client.id,
    clientName: client.name,
    clientEmail: client.email ?? undefined,
    success: false,
    hasRisk: false,
    phases: {},
    error: message,
    outcome: { kind: "error", message },
  };
}
