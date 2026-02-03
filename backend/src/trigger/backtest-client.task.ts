/**
 * Trigger.dev task for backtesting a specific client
 *
 * Compares system prediction with actual client order using "time travel"
 * (analysisEndDate) to simulate world state X days before the order.
 *
 * Workflow:
 * 1. Fetch actual order to test
 * 2. Calculate cutoff date (X days before order)
 * 3. Run system prediction with analysisEndDate = cutoff
 * 4. Compare system vs reality
 * 5. Generate detailed markdown/JSON reports
 *
 * @module trigger/backtest-client
 */

import { task } from "@trigger.dev/sdk";
import { clientProposalTask } from "./client-proposal.task";
import { createOdooClient } from "../infrastructure/odoo/odoo.service";
import { compareSystemPredictionVsRealOrder } from "../features/backtesting/comparison.service";
import { generateBacktestReport, generateBacktestReportJSON, generateBacktestReportJSONv2 } from "../reports/backtest-report";
import { calculateDateBefore } from "../utils/date.utils";
import { autoProposalConfig } from "../config/auto-proposal";
import * as fs from "fs/promises";
import * as path from "path";

const odooClient = createOdooClient(autoProposalConfig.odooApiType);

/**
 * Payload for the backtest-client task
 */
export interface BacktestClientTaskPayload {
  /** Client ID to backtest */
  clientId: number;

  /** Days before order date to calculate cutoff (default: 1) */
  daysBeforePrediction?: number;

  /**
   * Reference date to search for orders (optional)
   * If set: finds the last order BEFORE this date
   * If not set: finds the most recent order
   */
  referenceDate?: string;

  /**
   * Specific order name to test (optional)
   * If provided: tests this exact order
   * If not: uses last order (default behavior)
   * Example: "S39729"
   */
  orderName?: string;

  /** Optional configuration for A/B testing */
  config?: {
    replenishmentThreshold?: number;
  };
}

/**
 * Result of the backtest-client task
 */
export interface BacktestClientTaskResult {
  success: boolean;
  clientId: number;
  clientName: string;
  orderName: string;
  orderDate: string;
  cutoffDate: string;
  /** Main comparison metrics (clean: 2+ orders) */
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
  /** Metrics for low confidence products (1 order only) */
  comparisonNoLow?: {
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
  /** Metrics for ALL products (clean + low combined) */
  comparisonAll?: {
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
  /** LLM usage for this client */
  llm_usage?: {
    calls: number;
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  /** Path to markdown report (legacy) */
  reportPath: string;
  reportPaths: {
    markdown: string;
    json: string;
    /** Low confidence markdown report */
    markdownNoLow?: string;
    /** Low confidence JSON report */
    jsonNoLow?: string;
  };
  executionTime: number;
}

/**
 * Trigger.dev task for backtesting a specific client
 *
 * Evaluates prediction quality by comparing against actual historical orders.
 * Uses "time travel" via analysisEndDate to simulate world state X days before the order.
 */
export const backtestClientTask = task({
  id: "backtest-client",
  queue: {
    concurrencyLimit: 5,
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

    console.log(`\nBACKTEST STARTED - Client ${payload.clientId}`);
    console.log(`Days before prediction: ${daysBeforePrediction}\n`);

    try {
      let lastOrder: {
        id: number;
        name: string;
        date_order: string;
        partner_name: string;
        partner_id?: number;
      };

      if (payload.orderName) {
        const orderData = await odooClient.getOrderByName(payload.orderName);

        if (orderData.partner_id !== payload.clientId) {
          throw new Error(
            `Order ${payload.orderName} belongs to client ${orderData.partner_id} (${orderData.partner_name}), ` +
            `not to requested client ${payload.clientId}`
          );
        }

        lastOrder = orderData;
      } else if (payload.referenceDate) {
        lastOrder = await odooClient.getLastClientOrderBeforeDate(
          payload.clientId,
          payload.referenceDate,
          autoProposalConfig.defaultCompanyId
        );
      } else {
        lastOrder = await odooClient.getLastClientOrder(
          payload.clientId,
          autoProposalConfig.defaultCompanyId
        );
      }

      const cutoffDate = calculateDateBefore(
        lastOrder.date_order,
        daysBeforePrediction
      );

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
          replenishmentThreshold: payload.config?.replenishmentThreshold ?? autoProposalConfig.replenishmentThreshold,
          moqMinimum: autoProposalConfig.pricing.minimumOrderAmount,
        },
      });

      if (!systemPrediction.ok) {
        throw new Error(`System prediction failed: ${systemPrediction.error}`);
      }

      const systemResult = systemPrediction.output;

      const realOrderDetails = await odooClient.getSaleOrderDetails(lastOrder.id);

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
        }
      );

      const systemProposalClean = {
        ...systemProposal,
        products: systemProposal.products.filter((p) =>
          p.calculation_metadata?.confidence !== 'low'
        )
      } as typeof systemProposal;

      const allProducts = systemResult.result.phases.stockAnalysis.all_products ?? systemResult.result.phases.stockAnalysis.products;
      const realOrderLinesClean = realOrderDetails.lines.filter((line) => {
        const analyzedProduct = allProducts.find(p => p.product_id === line.product_id[0]);
        return analyzedProduct && analyzedProduct.calculation_metadata?.confidence !== 'low';
      });

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
        }
      );

      const systemProposalLow = {
        ...systemProposal,
        products: systemProposal.products.filter((p) =>
          p.calculation_metadata?.confidence === 'low'
        )
      } as typeof systemProposal;

      const realOrderLinesLow = realOrderDetails.lines.filter((line) => {
        const analyzedProduct = allProducts.find(p => p.product_id === line.product_id[0]);
        return analyzedProduct?.calculation_metadata?.confidence === 'low';
      });

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
        }
      );

      const reportsOutputDir = path.join(process.cwd(), "reports-output");
      await fs.mkdir(reportsOutputDir, { recursive: true });

      const reportMarkdown = generateBacktestReport(comparisonClean);
      const reportFileNameMd = `backtest-client-${payload.clientId}-${lastOrder.name}.md`;
      const reportPathMd = path.join(reportsOutputDir, reportFileNameMd);
      await fs.writeFile(reportPathMd, reportMarkdown, "utf-8");

      const reportJSON = generateBacktestReportJSON(comparisonClean);
      const reportFileNameJson = `backtest-client-${payload.clientId}-${lastOrder.name}.json`;
      const reportPathJson = path.join(reportsOutputDir, reportFileNameJson);
      await fs.writeFile(reportPathJson, JSON.stringify(reportJSON, null, 2), "utf-8");

      const reportMarkdownLow = generateBacktestReport(comparisonLow);
      const reportFileNameMdLow = `backtest-client-${payload.clientId}-${lastOrder.name}-low.md`;
      const reportPathMdLow = path.join(reportsOutputDir, reportFileNameMdLow);
      await fs.writeFile(reportPathMdLow, reportMarkdownLow, "utf-8");

      const reportJSONLow = generateBacktestReportJSON(comparisonLow);
      const reportFileNameJsonLow = `backtest-client-${payload.clientId}-${lastOrder.name}-low.json`;
      const reportPathJsonLow = path.join(reportsOutputDir, reportFileNameJsonLow);
      await fs.writeFile(reportPathJsonLow, JSON.stringify(reportJSONLow, null, 2), "utf-8");

      const reportMarkdownAll = generateBacktestReport(comparison);
      const reportFileNameMdAll = `backtest-client-${payload.clientId}-${lastOrder.name}-all.md`;
      const reportPathMdAll = path.join(reportsOutputDir, reportFileNameMdAll);
      await fs.writeFile(reportPathMdAll, reportMarkdownAll, "utf-8");

      const reportJSONv2 = generateBacktestReportJSONv2(
        comparison,
        systemResult.result.phases.stockAnalysis
      );
      const reportFileNameJsonV2 = `backtest-client-${payload.clientId}-${lastOrder.name}-v2.json`;
      const reportPathJsonV2 = path.join(reportsOutputDir, reportFileNameJsonV2);
      await fs.writeFile(reportPathJsonV2, JSON.stringify(reportJSONv2, null, 2), "utf-8");

      const executionTime = Date.now() - startTime;
      console.log(`BACKTEST COMPLETED in ${(executionTime / 1000).toFixed(1)}s\n`);

      // Extract LLM usage from stockAnalysis (if present)
      const stockAnalysis = systemResult.result.phases.stockAnalysis;
      const llmUsage = stockAnalysis?.llm_usage;

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
        reportV2: reportJSONv2,  // Include v2 data for aggregate (files not accessible cross-worker)
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
      console.error(`\nBACKTEST FAILED: ${errorMessage}\n`);
      throw error;
    }
  },
});
