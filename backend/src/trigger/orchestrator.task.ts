import { task } from "@trigger.dev/sdk/v3";
import { getInactiveClients } from "../features/client-inactivity/inactivity.service";
import { autoProposalConfig } from "../config/auto-proposal";
import { calculateGlobalWorkflowStatistics } from "../workflow/workflow.stats";
import { prepareAllClientReportData } from "../workflow/workflow.client-stats";
import { generateGlobalReport } from "../reports/global-report";
import type { OrchestratorTaskPayload, OrchestratorConfig } from "../shared/types";
import { clientProposalTask } from "./client-proposal.task";
import type { GlobalReportData } from "../reports/global-report";
import type { ClientProposalResult } from "../workflow/workflow.types";
import * as fs from "fs/promises";
import * as path from "path";

/**
 * Résultat complet de la tâche orchestrator
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
 * Tâche Trigger.dev orchestrator pour le workflow auto-proposal complet
 *
 * Cette tâche:
 * 1. Récupère tous les clients inactifs
 * 2. Déclenche des tasks "client-proposal" en batch (parallèle)
 * 3. Collecte et agrège les résultats
 * 4. Génère le rapport global avec statistiques
 *
 * La configuration utilise autoProposalConfig comme fallback pour tous les paramètres.
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

    // Merge config + options runtime (payload override config)
    const config: OrchestratorConfig = {
      inactivityDays:
        payload.config?.inactivityDays ?? autoProposalConfig.inactivityDaysThreshold,
      analysisWindowDays:
        payload.config?.analysisWindowDays ?? autoProposalConfig.analysisWindowDays,
      targetCoverage:
        payload.config?.targetCoverage ?? autoProposalConfig.targetCoverage,
      leadTime:
        payload.config?.leadTime ?? autoProposalConfig.leadTime,
      moqMinimum:
        payload.config?.moqMinimum ?? autoProposalConfig.pricing.minimumOrderAmount,
      skipOdooQuoteGeneration:
        payload.config?.skipOdooQuoteGeneration ?? false,
      maxClientsToAnalyze:
        payload.config?.maxClientsToAnalyze ?? "all",
      forceReanalysis:
        payload.config?.forceReanalysis ??
        autoProposalConfig.workflow.forceReanalysis,
      generateReports:
        payload.config?.generateReports ??
        autoProposalConfig.workflow.generateReports,
    };

    console.log("\n🚀 AUTO-PROPOSAL ORCHESTRATOR STARTED");
    console.log(`   Mode: ${config.skipOdooQuoteGeneration ? "TEST (skip Odoo quotes)" : "PRODUCTION"}`);
    console.log(`   Inactivity threshold: ${config.inactivityDays} days`);
    console.log(`   Analysis window: ${config.analysisWindowDays} days`);
    console.log(`   Force reanalysis: ${config.forceReanalysis ? "YES (include clients with tag 82)" : "NO (skip tag 82)"}\n`);

    try {
      // 1. Récupérer tous les clients inactifs
      console.log("📊 Fetching inactive clients...");
      const allInactiveClients = await getInactiveClients(
        config.inactivityDays,
        config.forceReanalysis ? autoProposalConfig.quoteGeneration.autoProposalTagId : undefined
      );
      console.log(`   Found ${allInactiveClients.length} inactive clients\n`);

      // 2. Limiter les clients à analyser (debug)
      const maxToAnalyze =
        config.maxClientsToAnalyze === "all"
          ? allInactiveClients.length
          : config.maxClientsToAnalyze;
      const clientsToProcess = allInactiveClients.slice(0, maxToAnalyze);

      console.log(`📊 Processing ${clientsToProcess.length}/${allInactiveClients.length} inactive clients...\n`);

      // 3. Batch trigger de toutes les tasks client-proposal en parallèle
      // Trigger.dev limite à 500 tasks par batch, on découpe donc en chunks
      const BATCH_SIZE = 500;
      const totalClients = clientsToProcess.length;
      const totalChunks = Math.ceil(totalClients / BATCH_SIZE);

      console.log(`🔄 Triggering client-proposal tasks in ${totalChunks} batch(es) of max ${BATCH_SIZE}...`);

      const clientResults: ClientProposalResult[] = [];
      let clientsWithRiskCount = 0;
      let quotesGeneratedCount = 0;
      let reportsGeneratedCount = 0;

      // Traiter par chunks de 500
      for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
        const chunkStart = chunkIndex * BATCH_SIZE;
        const chunkEnd = Math.min(chunkStart + BATCH_SIZE, totalClients);
        const chunkClients = clientsToProcess.slice(chunkStart, chunkEnd);

        console.log(`\n   Batch ${chunkIndex + 1}/${totalChunks}: Processing clients ${chunkStart + 1}-${chunkEnd}...`);

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
                  analysisWindowDays: config.analysisWindowDays,
                  targetCoverage: config.targetCoverage,
                  leadTime: config.leadTime,
                  moqMinimum: config.moqMinimum,
                  skipOdooQuoteGeneration: config.skipOdooQuoteGeneration,
                  shouldGenerateReport: config.generateReports,
                },
              },
            };
          });

          // Batch trigger and wait pour ce chunk
          const batchResults = await clientProposalTask.batchTriggerAndWait(batchPayloads);

          console.log(`   ✅ Completed ${batchResults.runs.length} client tasks for this batch`);

          // 5. Collecter les résultats de ce batch
          for (const run of batchResults.runs) {
            if (run.ok) {
              // Succès: extraire le résultat
              const taskResult = run.output;
              clientResults.push(taskResult.result);

              if (taskResult.summary.hasRisk) {
                clientsWithRiskCount++;
              }

              if (taskResult.report.complete) {
                reportsGeneratedCount++;
              }

              if (taskResult.summary.quoteName) {
                quotesGeneratedCount++;
                console.log(
                  `   ✅ ${taskResult.client.name}: ${taskResult.summary.productsCount} products, ` +
                  `${taskResult.summary.finalAmount.toFixed(2)}€ HT → Quote ${taskResult.summary.quoteName}`
                );
              } else if (taskResult.summary.hasRisk) {
                console.log(
                  `   📋 ${taskResult.client.name}: ${taskResult.summary.productsCount} products, ` +
                  `${taskResult.summary.finalAmount.toFixed(2)}€ HT (no quote)`
                );
              }
            } else {
              // Erreur: créer un résultat d'erreur
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

              console.log(`   ❌ ${client.name}: Failed - ${errorMessage}`);
            }
          }
        } catch (batchError) {
          // Si le batch entier échoue (erreur réseau, timeout, etc.), on marque tous les clients comme échoués
          const batchErrorMessage = batchError instanceof Error ? batchError.message : String(batchError);
          console.error(`   ❌ BATCH ${chunkIndex + 1} FAILED: ${batchErrorMessage}`);
          console.log(`   ⚠️  Marking ${chunkClients.length} clients as failed and continuing with next batch...`);

          // Marquer tous les clients du batch comme échoués
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

          // Continuer avec le prochain batch
          continue;
        }
      }

      console.log(`\n   Total with risk: ${clientsWithRiskCount}`);
      console.log(`   Quotes generated: ${quotesGeneratedCount}\n`);

      // 6. Calculer statistiques
      const statistics = calculateGlobalWorkflowStatistics(
        allInactiveClients,
        clientResults
      );

      // 7. Préparer données pour rapports clients
      const clientReportData = prepareAllClientReportData(clientResults, {
        inactivityDays: config.inactivityDays,
        analysisWindowDays: config.analysisWindowDays,
        targetCoverage: config.targetCoverage,
        leadTime: config.leadTime,
        replenishmentThreshold: config.targetCoverage + config.leadTime,
        moqMinimum: config.moqMinimum,
        maxClientsToAnalyze: config.maxClientsToAnalyze,
        generateReports: config.generateReports,
        skipOdooQuoteGeneration: config.skipOdooQuoteGeneration,
        forceReanalysis: config.forceReanalysis,
      });

      const executionTime = Date.now() - startTime;

      // 8. Générer rapport global markdown
      console.log("\n📝 Generating global report...");
      const reportsOutputDir = path.join(process.cwd(), "reports-output");
      await fs.mkdir(reportsOutputDir, { recursive: true });

      const globalReportData: GlobalReportData = {
        executionDate: new Date().toISOString(),
        totalExecutionTime: executionTime,
        clients: clientReportData,
        statistics,
        config: {
          replenishmentThreshold: config.targetCoverage + config.leadTime,
          targetCoverageDays: config.targetCoverage,
          analysisWindowDays: config.analysisWindowDays,
          moqMinimum: config.moqMinimum,
        },
      };

      const globalMarkdownReport = generateGlobalReport(globalReportData);
      const globalReportFileName = `global-report-${new Date().toISOString().split("T")[0]}.md`;
      const reportPath = path.join(reportsOutputDir, globalReportFileName);
      await fs.writeFile(reportPath, globalMarkdownReport, "utf-8");
      console.log(`   ✅ ${globalReportFileName}`);

      // 9. Résultat final
      console.log("\n✅ ORCHESTRATOR COMPLETED");
      console.log(`   Processed: ${clientResults.length}/${clientsToProcess.length} clients (${allInactiveClients.length} total inactive)`);
      console.log(`   With order history: ${statistics.clientsWithOrderHistory}`);
      console.log(`   With risk: ${statistics.clientsWithRisk}`);
      console.log(`   Without risk: ${statistics.clientsWithoutRisk}`);
      console.log(`   Failed: ${statistics.clientsFailed}`);
      console.log(`   Quotes generated: ${statistics.quotesGenerated}`);
      console.log(`   Total value: ${statistics.totalValue.toFixed(2)}€ HT`);
      console.log(`   Execution time: ${(executionTime / 1000).toFixed(1)}s\n`);

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
      console.error(`\n❌ ORCHESTRATOR FAILED: ${errorMessage}\n`);

      throw error;
    }
  },
});
