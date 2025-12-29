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
  type BacktestIndividualResult,
  type AggregateMetrics,
} from "../features/backtesting/statistics.service";
import { generateAggregatedReportV2, generateSummaryMarkdown } from "../reports/backtest-report";
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

  /**
   * Date de référence pour chercher les commandes (optionnel)
   * Si non défini: utilise aujourd'hui (comportement actuel)
   * Si défini: cherche la dernière commande AVANT cette date
   * Format: "YYYY-MM-DD" ex: "2025-10-15"
   */
  referenceDate?: string;

  /**
   * Commandes spécifiques à tester (optionnel)
   * Si fourni: teste exactement ces commandes (clientId -> orderName)
   * Si non fourni: comportement actuel (auto-découverte ou clientIds)
   * Ex: { "13621": "S39729", "17251": "S39718" }
   */
  specificOrders?: Record<string, string>;

  /** Configuration propagée à chaque backtest enfant (pour A/B testing) */
  config?: {
    analysisWindowDays?: number;  // Défaut: 120j (depuis autoProposalConfig)
    replenishmentThreshold?: number;  // Défaut: 30j (depuis autoProposalConfig)
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

  llm_usage?: {
    calls: number;
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };

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
    let orderMapping: Record<string, string> | undefined;

    if (payload.specificOrders) {
      // Mode commandes spécifiques
      clientIds = Object.keys(payload.specificOrders).map(id => parseInt(id));
      orderMapping = payload.specificOrders;
      console.log(`📊 Mode: Specific orders (${clientIds.length} exact orders to test)`);
      console.log(`   Testing exact orders from previous run\n`);
    } else if (!payload.clientIds || payload.clientIds.length === 0) {
      // Mode auto-découverte
      const count = payload.autoDiscoverCount ?? 50;
      console.log(`📊 Mode: Auto-discovery (finding top ${count} clients with 2025 orders)`);

      const odooConfig = {
        url: process.env.ODOO_URL || "https://demo-food-autopilot.odoo.com",
        db: process.env.ODOO_DB || "demo-food-autopilot",
        username: process.env.ODOO_USERNAME!,
        password: process.env.ODOO_PASSWORD!,
      };

      clientIds = await findTopBacktestClients(odooConfig, count, 2025, payload.referenceDate);
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

    // Track LLM usage across all clients
    let totalLLMCalls = 0;
    let totalPromptTokens = 0;
    let totalCompletionTokens = 0;

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
            referenceDate: payload.referenceDate,
            orderName: orderMapping ? orderMapping[clientId.toString()] : undefined,
            config: payload.config,
          },
          options: {
            ttl: "60m", // TTL de 60 minutes par tâche pour éviter expiration dans la queue
          }
        }));

        // Batch trigger and wait
        const batchResults = await backtestClientTask.batchTriggerAndWait(batchPayloads);

        console.log(`   ✅ Completed ${batchResults.runs.length} backtest tasks for this batch`);

        // Collecter résultats
        for (const run of batchResults.runs) {
          if (run.ok) {
            // Succès: extraire les métriques
            const taskResult = run.output;
            // SWAP: comparison = CLEAN (2+ commandes), comparisonNoLow = LOW (1 commande)

            // Filtrer CLEAN: inclure seulement si client a commandé des produits CLEAN (TP+FN > 0)
            if (taskResult.comparison.truePositives + taskResult.comparison.falseNegatives > 0) {
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
                  wmape: taskResult.comparison.wmape,
                  mape: taskResult.comparison.mape,
                  bias: taskResult.comparison.bias,
                },
              });
            }


            // Aggregate LLM usage
            if (taskResult.llm_usage) {
              totalLLMCalls += taskResult.llm_usage.calls;
              totalPromptTokens += taskResult.llm_usage.promptTokens;
              totalCompletionTokens += taskResult.llm_usage.completionTokens;
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

    // Log LLM usage summary
    if (totalLLMCalls > 0) {
      console.log(`\n🤖 LLM Usage Summary:`);
      console.log(`   Total Calls: ${totalLLMCalls}`);
      console.log(`   Total Tokens: ${totalPromptTokens + totalCompletionTokens} (${totalPromptTokens} prompt + ${totalCompletionTokens} completion)`);
    }

    // ===== ÉTAPE 4: GÉNÉRATION RAPPORTS =====
    console.log(`\n📝 Generating reports...`);

    const reportsOutputDir = path.join(process.cwd(), "reports-output");
    await fs.mkdir(reportsOutputDir, { recursive: true });

    const timestamp = new Date().toISOString().split("T")[0];

    // Variables pour les paths (utilisées dans le return)
    let jsonPath = "";
    let mdPath = "";

    // ===== GÉNÉRATION RAPPORT V2 AGRÉGÉ =====
    console.log(`\n📊 Generating aggregated V2 report...`);
    try {
      const v2Files = await fs.readdir(reportsOutputDir);
      const v2Reports = [];

      for (const file of v2Files) {
        if (file.endsWith('-v2.json') && file.startsWith('backtest-client-')) {
          const filePath = path.join(reportsOutputDir, file);
          const content = await fs.readFile(filePath, 'utf-8');
          v2Reports.push(JSON.parse(content));
        }
      }

      if (v2Reports.length > 0) {
        // Générer V2 JSON agrégé
        const aggregatedV2 = generateAggregatedReportV2(v2Reports);
        const aggregatedV2FileName = `backtest-aggregate-${timestamp}-v2.json`;
        jsonPath = path.join(reportsOutputDir, aggregatedV2FileName);
        await fs.writeFile(jsonPath, JSON.stringify(aggregatedV2, null, 2), 'utf-8');
        console.log(`   ✅ V2 JSON report saved: ${aggregatedV2FileName}`);

        // Générer Summary Markdown
        const summaryMarkdown = generateSummaryMarkdown(v2Reports);
        const summaryFileName = `backtest-aggregate-${timestamp}-summary.md`;
        mdPath = path.join(reportsOutputDir, summaryFileName);
        await fs.writeFile(mdPath, summaryMarkdown, 'utf-8');
        console.log(`   ✅ Summary MD report saved: ${summaryFileName}`);

        console.log(`      Aggregated ${v2Reports.length} client reports`);
      } else {
        console.log(`   ⚠️  No V2 reports found to aggregate`);
      }
    } catch (aggregateError) {
      console.warn(`   ⚠️  Failed to generate reports:`, aggregateError instanceof Error ? aggregateError.message : String(aggregateError));
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
      llm_usage: totalLLMCalls > 0 ? {
        calls: totalLLMCalls,
        promptTokens: totalPromptTokens,
        completionTokens: totalCompletionTokens,
        totalTokens: totalPromptTokens + totalCompletionTokens,
      } : undefined,
      reports: {
        json: jsonPath,
        markdown: mdPath,
      },
      executionTime,
    };
  },
});
