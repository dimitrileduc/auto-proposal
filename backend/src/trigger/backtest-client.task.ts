/**
 * Task Trigger.dev pour backtester un client spécifique
 *
 * Compare la prédiction du système avec la commande réelle d'un client
 * en utilisant le "time travel" (analysisEndDate) pour simuler l'état du monde X jours avant la commande.
 *
 * Flow:
 * 1. Récupère la dernière commande réelle du client
 * 2. Calcule la date de cutoff (X jours avant commande)
 * 3. Lance la prédiction système avec analysisEndDate = cutoff
 * 4. Compare système vs réalité
 * 5. Génère rapport markdown détaillé
 */

import { task } from "@trigger.dev/sdk";
import { clientProposalTask } from "./client-proposal.task";
import { createOdooClient } from "../infrastructure/odoo/odoo.service";
import { compareSystemPredictionVsRealOrder } from "../features/backtesting/comparison.service";
import { generateBacktestReport, generateBacktestReportJSON } from "../reports/backtest-report";
import { calculateDateBefore } from "../utils/date.utils";
import { autoProposalConfig } from "../config/auto-proposal";
import * as fs from "fs/promises";
import * as path from "path";

const odooClient = createOdooClient(autoProposalConfig.odooApiType);

/**
 * Payload de la task backtest-client
 */
export interface BacktestClientTaskPayload {
  /** ID du client à backtester */
  clientId: number;

  /** Nombre de jours avant la commande pour calculer le cutoff (défaut: 1 jour) */
  daysBeforePrediction?: number;

  /** Configuration optionnelle pour A/B testing */
  config?: {
    analysisWindowDays?: number;
    targetCoverage?: number;
    leadTime?: number;
  };
}

/**
 * Résultat de la task backtest-client
 */
export interface BacktestClientTaskResult {
  success: boolean;
  clientId: number;
  clientName: string;
  orderName: string;
  orderDate: string;
  cutoffDate: string;
  comparison: {
    truePositives: number;
    falsePositives: number;
    falseNegatives: number;
    precision: number;
    recall: number;
    f1Score: number;
    mae: number;
    mape: number;
  };
  comparisonNoLow?: {  // Nouveau: métriques sans produits low confidence
    truePositives: number;
    falsePositives: number;
    falseNegatives: number;
    precision: number;
    recall: number;
    f1Score: number;
    mae: number;
    mape: number;
  };
  reportPath: string;  // Path au rapport Markdown (legacy)
  reportPaths: {
    markdown: string;
    json: string;
    markdownNoLow?: string;  // Nouveau: rapport sans low confidence
    jsonNoLow?: string;      // Nouveau: rapport JSON sans low confidence
  };
  executionTime: number;
}

/**
 * Task Trigger.dev pour backtester un client spécifique
 *
 * Évalue la qualité des prédictions en comparant avec une commande réelle historique.
 * Utilise le "time travel" via analysisEndDate pour simuler l'état du monde X jours avant la commande.
 */
export const backtestClientTask = task({
  id: "backtest-client",
  queue: {
    concurrencyLimit: 5, // Limite à 5 backtests simultanés pour laisser des workers aux client-proposal enfants
  },
  retry: {
    maxAttempts: 3,
    factor: 2,
    minTimeoutInMs: 1000,
    maxTimeoutInMs: 30000,
    randomize: true,
  },
  run: async (payload: BacktestClientTaskPayload): Promise<BacktestClientTaskResult> => {
    const startTime = Date.now();
    const daysBeforePrediction = payload.daysBeforePrediction ?? 1;

    console.log(`\n🧪 BACKTEST STARTED - Client ${payload.clientId}`);
    console.log(`   Days before prediction: ${daysBeforePrediction}\n`);

    try {
      // 1️⃣ Récupérer la dernière commande réelle
      console.log("📊 Step 1/6: Fetching last validated order...");
      const lastOrder = await odooClient.getLastClientOrder(payload.clientId);
      console.log(`   ✅ Found order: ${lastOrder.name} (${lastOrder.date_order})\n`);

      // 2️⃣ Calculer la date de cutoff (time travel)
      console.log("📅 Step 2/6: Calculating cutoff date...");
      const cutoffDate = calculateDateBefore(
        lastOrder.date_order,
        daysBeforePrediction
      );
      console.log(`   ✅ Cutoff date: ${cutoffDate}`);
      console.log(`   🕐 Simulating system state ${daysBeforePrediction} days before order\n`);

      // 3️⃣ Lancer la prédiction système avec time travel
      console.log("🤖 Step 3/6: Running system prediction with time travel...");
      console.log(`   analysisEndDate = ${cutoffDate}`);

      const systemPrediction = await clientProposalTask.triggerAndWait({
        client: {
          id: payload.clientId,
          name: lastOrder.partner_name,
          email: null,
        },
        config: {
          analysisEndDate: cutoffDate,
          skipOdooQuoteGeneration: true,
          shouldGenerateReport: true, // Générer le rapport client pour debug
          analysisWindowDays: payload.config?.analysisWindowDays ?? autoProposalConfig.analysisWindowDays,
          targetCoverage: payload.config?.targetCoverage ?? autoProposalConfig.targetCoverage,
          leadTime: payload.config?.leadTime ?? autoProposalConfig.leadTime,
          moqMinimum: autoProposalConfig.pricing.minimumOrderAmount,
        },
      });

      if (!systemPrediction.ok) {
        throw new Error(`System prediction failed: ${systemPrediction.error}`);
      }

      const systemResult = systemPrediction.output;
      console.log(`   ✅ System predicted ${systemResult.summary.productsCount} products\n`);

      // 4️⃣ Récupérer les détails de la commande réelle
      console.log("📦 Step 4/6: Fetching real order details...");
      const realOrderDetails = await odooClient.getSaleOrderDetails(lastOrder.id);
      console.log(`   ✅ Real order has ${realOrderDetails.lines.length} products\n`);

      // 5️⃣ Comparaison Système vs Réalité
      console.log("🔍 Step 5/6: Comparing system prediction vs real order...");

      // Gérer le cas où il n'y a pas de proposalFinal (0 produits à commander)
      const systemProposal = systemResult.result.phases.proposalFinal || {
        products: [],
        totalAmount: 0,
        currency: "EUR",
        needsMoqAdjustment: false,
      };

      const comparison = compareSystemPredictionVsRealOrder(
        systemProposal,
        realOrderDetails.lines,
        systemResult.result.phases.stockAnalysis,
        {
          clientId: payload.clientId,
          clientName: lastOrder.partner_name,
          orderName: lastOrder.name,
          orderDate: lastOrder.date_order,
          cutoffDate,
          daysBeforePrediction,
          analysisWindowDays: payload.config?.analysisWindowDays,
        }
      );

      console.log(`   ✅ Comparison ALL complete:`);
      console.log(`      TP: ${comparison.truePositives.length}`);
      console.log(`      FP: ${comparison.falsePositives.length}`);
      console.log(`      FN: ${comparison.falseNegatives.length}`);
      console.log(`      Precision: ${(comparison.productMetrics.precision * 100).toFixed(1)}%`);
      console.log(`      Recall: ${(comparison.productMetrics.recall * 100).toFixed(1)}%`);
      console.log(`      F1-Score: ${(comparison.productMetrics.f1Score * 100).toFixed(1)}%`);
      console.log(`      MAE: ${comparison.quantityMetrics.mae.toFixed(2)} unités`);
      console.log(`      MAPE: ${comparison.quantityMetrics.mape.toFixed(1)}%`);

      // Filtrer systemProposal sans produits low confidence
      const systemProposalNoLow = {
        ...systemProposal,
        products: systemProposal.products.filter((p) =>
          p.calculation_metadata?.confidence !== 'low'
        )
      } as typeof systemProposal;

      // 2ème comparaison SANS LOW confidence
      const comparisonNoLow = compareSystemPredictionVsRealOrder(
        systemProposalNoLow,
        realOrderDetails.lines,
        systemResult.result.phases.stockAnalysis,
        {
          clientId: payload.clientId,
          clientName: lastOrder.partner_name,
          orderName: lastOrder.name,
          orderDate: lastOrder.date_order,
          cutoffDate,
          daysBeforePrediction,
          analysisWindowDays: payload.config?.analysisWindowDays,
        }
      );

      console.log(`   ✅ Comparison NO-LOW complete:`);
      console.log(`      TP: ${comparisonNoLow.truePositives.length}`);
      console.log(`      FP: ${comparisonNoLow.falsePositives.length}`);
      console.log(`      FN: ${comparisonNoLow.falseNegatives.length}`);
      console.log(`      Precision: ${(comparisonNoLow.productMetrics.precision * 100).toFixed(1)}%`);
      console.log(`      Recall: ${(comparisonNoLow.productMetrics.recall * 100).toFixed(1)}%\n`);

      // 6️⃣ Génération des rapports markdown + JSON
      console.log("📝 Step 6/6: Generating backtest reports...");

      const reportsOutputDir = path.join(process.cwd(), "reports-output");
      await fs.mkdir(reportsOutputDir, { recursive: true });

      // Générer rapport Markdown
      const reportMarkdown = generateBacktestReport(comparison);
      const reportFileNameMd = `backtest-client-${payload.clientId}-${lastOrder.name}.md`;
      const reportPathMd = path.join(reportsOutputDir, reportFileNameMd);
      await fs.writeFile(reportPathMd, reportMarkdown, "utf-8");
      console.log(`   ✅ Markdown report saved: ${reportFileNameMd}`);

      // Générer rapport JSON
      const reportJSON = generateBacktestReportJSON(comparison);
      const reportFileNameJson = `backtest-client-${payload.clientId}-${lastOrder.name}.json`;
      const reportPathJson = path.join(reportsOutputDir, reportFileNameJson);
      await fs.writeFile(reportPathJson, JSON.stringify(reportJSON, null, 2), "utf-8");
      console.log(`   ✅ JSON report saved: ${reportFileNameJson}`);

      // Générer rapports NO-LOW
      const reportMarkdownNoLow = generateBacktestReport(comparisonNoLow);
      const reportFileNameMdNoLow = `backtest-client-${payload.clientId}-${lastOrder.name}-no-low.md`;
      const reportPathMdNoLow = path.join(reportsOutputDir, reportFileNameMdNoLow);
      await fs.writeFile(reportPathMdNoLow, reportMarkdownNoLow, "utf-8");
      console.log(`   ✅ Markdown NO-LOW report saved: ${reportFileNameMdNoLow}`);

      const reportJSONNoLow = generateBacktestReportJSON(comparisonNoLow);
      const reportFileNameJsonNoLow = `backtest-client-${payload.clientId}-${lastOrder.name}-no-low.json`;
      const reportPathJsonNoLow = path.join(reportsOutputDir, reportFileNameJsonNoLow);
      await fs.writeFile(reportPathJsonNoLow, JSON.stringify(reportJSONNoLow, null, 2), "utf-8");
      console.log(`   ✅ JSON NO-LOW report saved: ${reportFileNameJsonNoLow}`);

      const executionTime = Date.now() - startTime;
      console.log(`✅ BACKTEST COMPLETED in ${(executionTime / 1000).toFixed(1)}s\n`);

      return {
        success: true,
        clientId: payload.clientId,
        clientName: lastOrder.partner_name,
        orderName: lastOrder.name,
        orderDate: lastOrder.date_order,
        cutoffDate,
        comparison: {
          truePositives: comparison.truePositives.length,
          falsePositives: comparison.falsePositives.length,
          falseNegatives: comparison.falseNegatives.length,
          precision: comparison.productMetrics.precision,
          recall: comparison.productMetrics.recall,
          f1Score: comparison.productMetrics.f1Score,
          mae: comparison.quantityMetrics.mae,
          mape: comparison.quantityMetrics.mape,
        },
        comparisonNoLow: {
          truePositives: comparisonNoLow.truePositives.length,
          falsePositives: comparisonNoLow.falsePositives.length,
          falseNegatives: comparisonNoLow.falseNegatives.length,
          precision: comparisonNoLow.productMetrics.precision,
          recall: comparisonNoLow.productMetrics.recall,
          f1Score: comparisonNoLow.productMetrics.f1Score,
          mae: comparisonNoLow.quantityMetrics.mae,
          mape: comparisonNoLow.quantityMetrics.mape,
        },
        reportPath: reportPathMd,  // Legacy: keep markdown path for backward compatibility
        reportPaths: {
          markdown: reportPathMd,
          json: reportPathJson,
          markdownNoLow: reportPathMdNoLow,
          jsonNoLow: reportPathJsonNoLow,
        },
        executionTime,
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`\n❌ BACKTEST FAILED: ${errorMessage}\n`);
      throw error;
    }
  },
});
