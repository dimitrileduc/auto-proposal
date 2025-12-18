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

  /**
   * Date de référence pour chercher la commande (optionnel)
   * Si défini: cherche la dernière commande AVANT cette date
   * Si non défini: cherche la dernière commande (comportement actuel)
   */
  referenceDate?: string;

  /**
   * Nom de commande spécifique à tester (optionnel)
   * Si fourni: teste cette commande exacte
   * Si non fourni: comportement actuel (dernière commande)
   * Ex: "S39729"
   */
  orderName?: string;

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
    wmape: number;
    mape: number;
    bias: number;
  };
  comparisonNoLow?: {  // Métriques pour produits low confidence (1 commande)
    truePositives: number;
    falsePositives: number;
    falseNegatives: number;
    precision: number;
    recall: number;
    f1Score: number;
    mae: number;
    wmape: number;
    mape: number;
    bias: number;
  };
  comparisonAll?: {  // Métriques pour TOUS les produits (clean + low)
    truePositives: number;
    falsePositives: number;
    falseNegatives: number;
    precision: number;
    recall: number;
    f1Score: number;
    mae: number;
    wmape: number;
    mape: number;
    bias: number;
  };
  llm_usage?: {  // Usage LLM pour ce client
    calls: number;
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  reportPath: string;  // Path au rapport Markdown (legacy)
  reportPaths: {
    markdown: string;
    json: string;
    markdownNoLow?: string;  // Rapport low confidence
    jsonNoLow?: string;      // Rapport JSON low confidence
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
      // 1️⃣ Récupérer la commande à tester
      console.log("📊 Step 1/6: Fetching order to test...");

      let lastOrder: {
        id: number;
        name: string;
        date_order: string;
        partner_name: string;
        partner_id?: number;
      };

      if (payload.orderName) {
        // Mode commande spécifique
        console.log(`   Testing specific order: ${payload.orderName}`);
        const orderData = await odooClient.getOrderByName(payload.orderName);

        // Vérifier que la commande appartient bien au client
        if (orderData.partner_id !== payload.clientId) {
          throw new Error(
            `Order ${payload.orderName} belongs to client ${orderData.partner_id} (${orderData.partner_name}), ` +
            `not to requested client ${payload.clientId}`
          );
        }

        lastOrder = orderData;
      } else if (payload.referenceDate) {
        // Mode date de référence
        console.log(`   Using reference date: ${payload.referenceDate}`);
        lastOrder = await odooClient.getLastClientOrderBeforeDate(payload.clientId, payload.referenceDate);
      } else {
        // Mode par défaut: dernière commande
        lastOrder = await odooClient.getLastClientOrder(payload.clientId);
      }

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

      // SWAP: Rapport principal = sans low confidence (données propres 2+ commandes)
      const systemProposalClean = {
        ...systemProposal,
        products: systemProposal.products.filter((p) =>
          p.calculation_metadata?.confidence !== 'low'
        )
      } as typeof systemProposal;

      // Filtrer realOrderLines pour CLEAN: garder seulement les produits qui ont confidence !== 'low'
      // EXCLURE les produits avec 0 historique (pas dans allProducts) ET les produits low (1 commande)
      const allProducts = systemResult.result.phases.stockAnalysis.all_products ?? systemResult.result.phases.stockAnalysis.products;
      const realOrderLinesClean = realOrderDetails.lines.filter((line) => {
        const analyzedProduct = allProducts.find(p => p.product_id === line.product_id[0]);
        return analyzedProduct && analyzedProduct.calculation_metadata?.confidence !== 'low';
      });

      // Comparaison CLEAN (rapport principal)
      const comparisonClean = compareSystemPredictionVsRealOrder(
        systemProposalClean,
        realOrderLinesClean,
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

      console.log(`   ✅ Comparison CLEAN (2+ commandes) complete:`);
      console.log(`      TP: ${comparisonClean.truePositives.length}`);
      console.log(`      FP: ${comparisonClean.falsePositives.length}`);
      console.log(`      FN: ${comparisonClean.falseNegatives.length}`);
      console.log(`      Precision: ${(comparisonClean.productMetrics.precision * 100).toFixed(1)}%`);
      console.log(`      Recall: ${(comparisonClean.productMetrics.recall * 100).toFixed(1)}%`);

      // SWAP: Rapport secondaire = only low confidence (sparse data 1 commande)
      const systemProposalLow = {
        ...systemProposal,
        products: systemProposal.products.filter((p) =>
          p.calculation_metadata?.confidence === 'low'
        )
      } as typeof systemProposal;

      // Filtrer realOrderLines pour LOW: garder seulement les produits qui ont confidence === 'low'
      const realOrderLinesLow = realOrderDetails.lines.filter((line) => {
        const analyzedProduct = allProducts.find(p => p.product_id === line.product_id[0]);
        return analyzedProduct?.calculation_metadata?.confidence === 'low';
      });

      // Comparaison LOW (rapport secondaire)
      const comparisonLow = compareSystemPredictionVsRealOrder(
        systemProposalLow,
        realOrderLinesLow,
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

      console.log(`   ✅ Comparison LOW (1 commande) complete:`);
      console.log(`      TP: ${comparisonLow.truePositives.length}`);
      console.log(`      FP: ${comparisonLow.falsePositives.length}`);
      console.log(`      FN: ${comparisonLow.falseNegatives.length}`);
      console.log(`      Precision: ${(comparisonLow.productMetrics.precision * 100).toFixed(1)}%`);
      console.log(`      Recall: ${(comparisonLow.productMetrics.recall * 100).toFixed(1)}%\n`);

      // 6️⃣ Génération des rapports markdown + JSON
      console.log("📝 Step 6/6: Generating backtest reports...");

      const reportsOutputDir = path.join(process.cwd(), "reports-output");
      await fs.mkdir(reportsOutputDir, { recursive: true });

      // SWAP: Rapport PRINCIPAL = CLEAN (2+ commandes, données propres pour ML)
      const reportMarkdown = generateBacktestReport(comparisonClean);
      const reportFileNameMd = `backtest-client-${payload.clientId}-${lastOrder.name}.md`;
      const reportPathMd = path.join(reportsOutputDir, reportFileNameMd);
      await fs.writeFile(reportPathMd, reportMarkdown, "utf-8");
      console.log(`   ✅ Markdown CLEAN report saved: ${reportFileNameMd}`);

      // Rapport JSON CLEAN
      const reportJSON = generateBacktestReportJSON(comparisonClean);
      const reportFileNameJson = `backtest-client-${payload.clientId}-${lastOrder.name}.json`;
      const reportPathJson = path.join(reportsOutputDir, reportFileNameJson);
      await fs.writeFile(reportPathJson, JSON.stringify(reportJSON, null, 2), "utf-8");
      console.log(`   ✅ JSON CLEAN report saved: ${reportFileNameJson}`);

      // SWAP: Rapport SECONDAIRE = LOW (1 commande, sparse data isolé)
      const reportMarkdownLow = generateBacktestReport(comparisonLow);
      const reportFileNameMdLow = `backtest-client-${payload.clientId}-${lastOrder.name}-low.md`;
      const reportPathMdLow = path.join(reportsOutputDir, reportFileNameMdLow);
      await fs.writeFile(reportPathMdLow, reportMarkdownLow, "utf-8");
      console.log(`   ✅ Markdown LOW report saved: ${reportFileNameMdLow}`);

      const reportJSONLow = generateBacktestReportJSON(comparisonLow);
      const reportFileNameJsonLow = `backtest-client-${payload.clientId}-${lastOrder.name}-low.json`;
      const reportPathJsonLow = path.join(reportsOutputDir, reportFileNameJsonLow);
      await fs.writeFile(reportPathJsonLow, JSON.stringify(reportJSONLow, null, 2), "utf-8");
      console.log(`   ✅ JSON LOW report saved: ${reportFileNameJsonLow}`);

      // Générer aussi le rapport ALL (legacy, pour comparaison)
      const reportMarkdownAll = generateBacktestReport(comparison);
      const reportFileNameMdAll = `backtest-client-${payload.clientId}-${lastOrder.name}-all.md`;
      const reportPathMdAll = path.join(reportsOutputDir, reportFileNameMdAll);
      await fs.writeFile(reportPathMdAll, reportMarkdownAll, "utf-8");
      console.log(`   ✅ Markdown ALL report saved: ${reportFileNameMdAll}`);

      const executionTime = Date.now() - startTime;
      console.log(`✅ BACKTEST COMPLETED in ${(executionTime / 1000).toFixed(1)}s\n`);

      // Extract LLM usage from stockAnalysis (if present)
      console.log("🔍 DEBUG: Checking for LLM usage data...");
      const stockAnalysis = systemResult.result.phases.stockAnalysis;
      if (stockAnalysis) {
        console.log("   stockAnalysis keys:", Object.keys(stockAnalysis));
        console.log("   llm_usage value:", stockAnalysis.llm_usage);
      } else {
        console.log("   ⚠️ stockAnalysis is undefined");
      }

      const llmUsage = stockAnalysis?.llm_usage;
      if (llmUsage) {
        console.log(`   🤖 LLM Usage: ${llmUsage.calls} calls, ${llmUsage.totalTokens} tokens\n`);
      } else {
        console.log(`   ⚠️ No LLM usage data found\n`);
      }

      return {
        success: true,
        clientId: payload.clientId,
        clientName: lastOrder.partner_name,
        orderName: lastOrder.name,
        orderDate: lastOrder.date_order,
        cutoffDate,
        comparison: {
          truePositives: comparisonClean.truePositives.length,
          falsePositives: comparisonClean.falsePositives.length,
          falseNegatives: comparisonClean.falseNegatives.length,
          precision: comparisonClean.productMetrics.precision,
          recall: comparisonClean.productMetrics.recall,
          f1Score: comparisonClean.productMetrics.f1Score,
          mae: comparisonClean.quantityMetrics.mae,
          wmape: comparisonClean.quantityMetrics.wmape,
          mape: comparisonClean.quantityMetrics.mape,
          bias: comparisonClean.quantityMetrics.bias,
        },
        comparisonNoLow: {
          truePositives: comparisonLow.truePositives.length,
          falsePositives: comparisonLow.falsePositives.length,
          falseNegatives: comparisonLow.falseNegatives.length,
          precision: comparisonLow.productMetrics.precision,
          recall: comparisonLow.productMetrics.recall,
          f1Score: comparisonLow.productMetrics.f1Score,
          mae: comparisonLow.quantityMetrics.mae,
          wmape: comparisonLow.quantityMetrics.wmape,
          mape: comparisonLow.quantityMetrics.mape,
          bias: comparisonLow.quantityMetrics.bias,
        },
        comparisonAll: {
          truePositives: comparison.truePositives.length,
          falsePositives: comparison.falsePositives.length,
          falseNegatives: comparison.falseNegatives.length,
          precision: comparison.productMetrics.precision,
          recall: comparison.productMetrics.recall,
          f1Score: comparison.productMetrics.f1Score,
          mae: comparison.quantityMetrics.mae,
          wmape: comparison.quantityMetrics.wmape,
          mape: comparison.quantityMetrics.mape,
          bias: comparison.quantityMetrics.bias,
        },
        llm_usage: llmUsage,
        reportPath: reportPathMd,  // Legacy: keep markdown path for backward compatibility
        reportPaths: {
          markdown: reportPathMd,
          json: reportPathJson,
          markdownNoLow: reportPathMdLow,
          jsonNoLow: reportPathJsonLow,
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
