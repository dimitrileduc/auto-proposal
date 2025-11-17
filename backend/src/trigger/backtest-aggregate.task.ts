/**
 * Task Trigger.dev pour backtester plusieurs clients en batch (agrégé)
 *
 * Orchestration de backtests multiples avec agrégation statistique des résultats.
 * Permet de comparer les performances du système sur N clients et analyser les métriques
 * globales (mean, median, stdDev, percentiles).
 *
 * Flow:
 * 1. Prend une liste explicite de clientIds
 * 2. Lance backtest-client en batch pour tous les clients (parallèle)
 * 3. Collecte et agrège les résultats
 * 4. Calcule statistiques globales (mean, median, stdDev, percentiles)
 * 5. Génère rapports JSON + Markdown
 */

import { task } from "@trigger.dev/sdk";
import { backtestClientTask } from "./backtest-client.task";
import {
  calculateAggregateStatistics,
  generateAggregateMarkdownReport,
  type BacktestIndividualResult,
  type AggregateMetrics,
  type AggregateReportData,
} from "../features/backtesting/statistics.service";
import { findTopBacktestClients } from "../features/backtesting/client-discovery.service";
import * as fs from "fs/promises";
import * as path from "path";

/**
 * Payload pour lancer backtest-aggregate
 */
export interface BacktestAggregatePayload {
  /**
   * Liste explicite de clients à backtester
   * Si non fourni, découvre automatiquement les 50 clients les plus actifs en 2025
   */
  clientIds?: number[];

  /**
   * Nombre de clients à découvrir automatiquement (défaut: 50)
   * Utilisé seulement si clientIds n'est pas fourni
   */
  autoDiscoverCount?: number;

  /** Nombre de jours avant la commande pour calculer le cutoff (défaut: 1 jour) */
  daysBeforePrediction?: number;

  /** Configuration propagée à chaque backtest enfant (pour A/B testing) */
  config?: {
    analysisWindowDays?: number;  // Défaut: 180j (depuis autoProposalConfig)
    targetCoverage?: number;      // Défaut: 14j (depuis autoProposalConfig)
    leadTime?: number;            // Défaut: 5j (depuis autoProposalConfig)
  };
}

/**
 * Résultat complet de backtest-aggregate
 */
export interface BacktestAggregateResult {
  success: boolean;
  clientsProcessed: number;
  clientsSucceeded: number;
  clientsFailed: number;

  aggregateMetrics: AggregateMetrics;

  individualResults: BacktestIndividualResult[];

  reports: {
    json: string;      // Path vers backtest-aggregate-{date}.json
    markdown: string;  // Path vers backtest-aggregate-{date}.md
  };

  executionTime: number;
}

/**
 * Task Trigger.dev pour backtester plusieurs clients en batch
 *
 * Orchestre N backtests en parallèle, collecte les résultats et génère
 * des statistiques agrégées pour évaluer les performances globales du système.
 */
export const backtestAggregateTask = task({
  id: "backtest-aggregate",
  retry: {
    maxAttempts: 2,
    factor: 2,
    minTimeoutInMs: 1000,
    maxTimeoutInMs: 30000,
    randomize: true,
  },
  run: async (payload: BacktestAggregatePayload): Promise<BacktestAggregateResult> => {
    const startTime = Date.now();

    console.log("\n🧪 BACKTEST AGGREGATE STARTED");
    console.log(`   Days before prediction: ${payload.daysBeforePrediction ?? 1}\n`);

    // ===== ÉTAPE 1: DÉCOUVERTE OU VALIDATION DES CLIENTS =====
    let clientIds: number[];

    if (!payload.clientIds || payload.clientIds.length === 0) {
      // Mode auto-découverte
      const count = payload.autoDiscoverCount ?? 50;
      console.log(`📊 Mode: Auto-discovery (finding top ${count} clients with 2025 orders)`);

      const odooConfig = {
        url: process.env.ODOO_URL || "https://demo-food-autopilot.odoo.com",
        db: process.env.ODOO_DB || "demo-food-autopilot",
        username: process.env.ODOO_USERNAME!,
        password: process.env.ODOO_PASSWORD!,
      };

      clientIds = await findTopBacktestClients(odooConfig, count, 2025);
      console.log(`   ✅ Discovered ${clientIds.length} clients\n`);
    } else {
      // Mode liste explicite
      clientIds = payload.clientIds;
      console.log(`📊 Mode: Explicit list (${clientIds.length} clients provided)\n`);
    }

    // ===== ÉTAPE 2: BATCH TRIGGER DES BACKTESTS =====
    console.log(`🔄 Triggering ${clientIds.length} backtest-client tasks...`);

    // Trigger.dev limite à 500 tasks par batch
    const BATCH_SIZE = 500;
    const totalClients = clientIds.length;
    const totalChunks = Math.ceil(totalClients / BATCH_SIZE);

    const allResults: BacktestIndividualResult[] = [];
    const allResultsNoLow: BacktestIndividualResult[] = [];

    for (let chunkIdx = 0; chunkIdx < totalChunks; chunkIdx++) {
      const chunkStart = chunkIdx * BATCH_SIZE;
      const chunkEnd = Math.min(chunkStart + BATCH_SIZE, totalClients);
      const chunkClientIds = clientIds.slice(chunkStart, chunkEnd);

      console.log(`\n   Batch ${chunkIdx + 1}/${totalChunks}: Processing clients ${chunkStart + 1}-${chunkEnd}...`);

      try {
        // Construire payloads pour backtestClientTask
        const batchPayloads = chunkClientIds.map((clientId) => ({
          payload: {
            clientId,
            daysBeforePrediction: payload.daysBeforePrediction ?? 1,
            config: payload.config,
          },
        }));

        // Batch trigger and wait (pattern orchestrator.task.ts:163)
        const batchResults = await backtestClientTask.batchTriggerAndWait(batchPayloads);

        console.log(`   ✅ Completed ${batchResults.runs.length} backtest tasks for this batch`);

        // Collecter résultats
        for (const run of batchResults.runs) {
          if (run.ok) {
            // Succès: extraire les métriques
            const taskResult = run.output;
            // SWAP: comparison = CLEAN (2+ commandes), comparisonNoLow = LOW (1 commande)
            allResults.push({
              clientId: taskResult.clientId,
              clientName: taskResult.clientName,
              orderName: taskResult.orderName,
              success: true,
              metrics: {
                precision: taskResult.comparison.precision,
                recall: taskResult.comparison.recall,
                f1Score: taskResult.comparison.f1Score,
                mae: taskResult.comparison.mae,
                mape: taskResult.comparison.mape,
              },
            });

            // Collecter version LOW (sparse data) si disponible
            if (taskResult.comparisonNoLow) {
              allResultsNoLow.push({
                clientId: taskResult.clientId,
                clientName: taskResult.clientName,
                orderName: taskResult.orderName,
                success: true,
                metrics: {
                  precision: taskResult.comparisonNoLow.precision,
                  recall: taskResult.comparisonNoLow.recall,
                  f1Score: taskResult.comparisonNoLow.f1Score,
                  mae: taskResult.comparisonNoLow.mae,
                  mape: taskResult.comparisonNoLow.mape,
                },
              });
            }

            console.log(
              `   ✅ ${taskResult.clientName}: Recall ${(taskResult.comparison.recall * 100).toFixed(1)}%, ` +
              `MAPE ${taskResult.comparison.mape.toFixed(1)}%`
            );
          } else {
            // Échec du backtest
            const runIndex = batchResults.runs.indexOf(run);
            const clientId = chunkClientIds[runIndex];
            const errorMessage = run.error && typeof run.error === 'object' && 'message' in run.error
              ? String(run.error.message)
              : "Unknown error";

            allResults.push({
              clientId,
              clientName: "Unknown",
              orderName: "N/A",
              success: false,
              error: errorMessage,
            });

            console.log(`   ❌ Client ${clientId}: Failed - ${errorMessage}`);
          }
        }
      } catch (batchError) {
        // Si le batch entier échoue, marquer tous les clients du batch comme échoués
        const batchErrorMessage = batchError instanceof Error ? batchError.message : String(batchError);
        console.error(`   ❌ BATCH ${chunkIdx + 1} FAILED: ${batchErrorMessage}`);
        console.log(`   ⚠️  Marking ${chunkClientIds.length} clients as failed and continuing...`);

        for (const clientId of chunkClientIds) {
          allResults.push({
            clientId,
            clientName: "Unknown",
            orderName: "N/A",
            success: false,
            error: `Batch failure: ${batchErrorMessage}`,
          });
        }

        // Continuer avec le prochain batch
        continue;
      }
    }

    // ===== ÉTAPE 3: AGRÉGATION STATISTIQUES =====
    console.log(`\n📊 Calculating aggregate statistics...`);

    const successfulResults = allResults.filter((r) => r.success && r.metrics);

    if (successfulResults.length === 0) {
      console.log(`   ⚠️  No successful backtests to aggregate`);
    }

    const aggregateMetrics = calculateAggregateStatistics(
      successfulResults.map((r) => r.metrics!)
    );

    console.log(`   CLEAN (2+ orders) - ${successfulResults.length} clients:`);
    console.log(`   Mean Recall: ${(aggregateMetrics.mean.recall * 100).toFixed(1)}%`);
    console.log(`   Median Recall: ${(aggregateMetrics.median.recall * 100).toFixed(1)}%`);
    console.log(`   Mean MAPE: ${aggregateMetrics.mean.mape.toFixed(1)}%`);
    console.log(`   Median MAPE: ${aggregateMetrics.median.mape.toFixed(1)}%`);

    // ===== ÉTAPE 4: GÉNÉRATION RAPPORTS =====
    console.log(`\n📝 Generating reports...`);

    const reportsOutputDir = path.join(process.cwd(), "reports-output");
    await fs.mkdir(reportsOutputDir, { recursive: true });

    const timestamp = new Date().toISOString().split("T")[0];

    // SWAP: Rapport PRINCIPAL = CLEAN (2+ commandes, données propres)
    const reportData: AggregateReportData = {
      executionDate: new Date().toISOString(),
      config: {
        daysBeforePrediction: payload.daysBeforePrediction ?? 1,
        analysisWindowDays: payload.config?.analysisWindowDays,
        targetCoverage: payload.config?.targetCoverage,
        leadTime: payload.config?.leadTime,
      },
      aggregateMetrics,
      individualResults: allResults,
    };

    // JSON CLEAN (pour analyse programmatique)
    const jsonPath = path.join(reportsOutputDir, `backtest-aggregate-${timestamp}.json`);
    await fs.writeFile(jsonPath, JSON.stringify(reportData, null, 2), "utf-8");
    console.log(`   ✅ JSON CLEAN report saved: backtest-aggregate-${timestamp}.json`);

    // Markdown CLEAN (pour lecture humaine)
    const markdownReport = generateAggregateMarkdownReport(reportData);
    const mdPath = path.join(reportsOutputDir, `backtest-aggregate-${timestamp}.md`);
    await fs.writeFile(mdPath, markdownReport, "utf-8");
    console.log(`   ✅ Markdown CLEAN report saved: backtest-aggregate-${timestamp}.md`);

    // SWAP: Rapport SECONDAIRE = LOW (1 commande, sparse data isolé)
    if (allResultsNoLow.length > 0) {
      const successfulResultsNoLow = allResultsNoLow.filter((r) => r.success && r.metrics);

      const aggregateMetricsNoLow = calculateAggregateStatistics(
        successfulResultsNoLow.map((r) => r.metrics!)
      );

      const reportDataNoLow: AggregateReportData = {
        executionDate: new Date().toISOString(),
        config: {
          daysBeforePrediction: payload.daysBeforePrediction ?? 1,
          analysisWindowDays: payload.config?.analysisWindowDays,
          targetCoverage: payload.config?.targetCoverage,
          leadTime: payload.config?.leadTime,
        },
        aggregateMetrics: aggregateMetricsNoLow,
        individualResults: allResultsNoLow,
      };

      // JSON LOW (sparse data)
      const jsonPathNoLow = path.join(reportsOutputDir, `backtest-aggregate-${timestamp}-low.json`);
      await fs.writeFile(jsonPathNoLow, JSON.stringify(reportDataNoLow, null, 2), "utf-8");
      console.log(`   ✅ JSON LOW report saved: backtest-aggregate-${timestamp}-low.json`);

      // Markdown LOW (sparse data)
      const markdownReportNoLow = generateAggregateMarkdownReport(reportDataNoLow);
      const mdPathNoLow = path.join(reportsOutputDir, `backtest-aggregate-${timestamp}-low.md`);
      await fs.writeFile(mdPathNoLow, markdownReportNoLow, "utf-8");
      console.log(`   ✅ Markdown LOW report saved: backtest-aggregate-${timestamp}-low.md`);

      console.log(`   📊 LOW (sparse data): ${successfulResultsNoLow.length} clients analyzed`);
    }

    // ===== ÉTAPE 5: RÉSULTAT FINAL =====
    const executionTime = Date.now() - startTime;

    console.log(`\n✅ BACKTEST AGGREGATE COMPLETED`);
    console.log(`   Clients processed: ${allResults.length}`);
    console.log(`   Succeeded: ${successfulResults.length}`);
    console.log(`   Failed: ${allResults.length - successfulResults.length}`);
    console.log(`   Execution time: ${(executionTime / 1000).toFixed(1)}s\n`);

    return {
      success: true,
      clientsProcessed: allResults.length,
      clientsSucceeded: successfulResults.length,
      clientsFailed: allResults.length - successfulResults.length,
      aggregateMetrics,
      individualResults: allResults,
      reports: {
        json: jsonPath,
        markdown: mdPath,
      },
      executionTime,
    };
  },
});
