/**
 * Trigger.dev task for batch backtesting multiple clients (aggregated)
 *
 * Orchestrates multiple backtests with statistical aggregation of results.
 * Compares system performance across N clients and analyzes global metrics
 * (mean, median, stdDev, percentiles).
 *
 * Workflow:
 * 1. Takes an explicit list of clientIds (or auto-discovers)
 * 2. Launches backtest-client in batch for all clients (parallel)
 * 3. Collects and aggregates results
 * 4. Calculates global statistics (mean, median, stdDev, percentiles)
 * 5. Generates JSON + Markdown reports
 *
 * @module trigger/backtest-aggregate
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
 * Payload for launching backtest-aggregate
 */
export interface BacktestAggregatePayload {
  /**
   * Explicit list of clients to backtest.
   * If not provided, auto-discovers the top 50 most active clients in 2025.
   */
  clientIds?: number[];

  /**
   * Number of clients to auto-discover (default: 50).
   * Only used if clientIds is not provided.
   */
  autoDiscoverCount?: number;

  /** Days before order date to calculate cutoff (default: 1) */
  daysBeforePrediction?: number;

  /**
   * Reference date for order search (optional).
   * If not set: uses today (current behavior).
   * If set: finds the last order BEFORE this date.
   * Format: "YYYY-MM-DD" e.g., "2025-10-15"
   */
  referenceDate?: string;

  /**
   * Specific orders to test (optional).
   * If provided: tests exactly these orders (clientId -> orderName).
   * If not: default behavior (auto-discovery or clientIds).
   * Example: { "13621": "S39729", "17251": "S39718" }
   */
  specificOrders?: Record<string, string>;

  /** Configuration propagated to each child backtest (for A/B testing) */
  config?: {
    replenishmentThreshold?: number;
  };
}

/**
 * Complete result of backtest-aggregate
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
    /** Path to backtest-aggregate-{date}.json */
    json: string;
    /** Path to backtest-aggregate-{date}.md */
    markdown: string;
  };

  executionTime: number;
}

/**
 * Trigger.dev task for batch backtesting multiple clients
 *
 * Orchestrates N backtests in parallel, collects results, and generates
 * aggregated statistics to evaluate overall system performance.
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

    console.log("\nBACKTEST AGGREGATE STARTED");
    console.log(`Days before prediction: ${payload.daysBeforePrediction ?? 1}\n`);

    let clientIds: number[];
    let orderMapping: Record<string, string> | undefined;

    if (payload.specificOrders) {
      clientIds = Object.keys(payload.specificOrders).map(id => parseInt(id));
      orderMapping = payload.specificOrders;
    } else if (!payload.clientIds || payload.clientIds.length === 0) {
      const count = payload.autoDiscoverCount ?? 50;

      const odooConfig = {
        url: process.env.ODOO_URL || "https://demo-food-autopilot.odoo.com",
        db: process.env.ODOO_DB || "demo-food-autopilot",
        username: process.env.ODOO_USERNAME!,
        password: process.env.ODOO_PASSWORD!,
      };

      clientIds = await findTopBacktestClients(odooConfig, count, 2025, payload.referenceDate);
    } else {
      clientIds = payload.clientIds;
    }

    const BATCH_SIZE = 500;
    const totalClients = clientIds.length;
    const totalChunks = Math.ceil(totalClients / BATCH_SIZE);

    const allResults: BacktestIndividualResult[] = [];

    let totalLLMCalls = 0;
    let totalPromptTokens = 0;
    let totalCompletionTokens = 0;

    for (let chunkIdx = 0; chunkIdx < totalChunks; chunkIdx++) {
      const chunkStart = chunkIdx * BATCH_SIZE;
      const chunkEnd = Math.min(chunkStart + BATCH_SIZE, totalClients);
      const chunkClientIds = clientIds.slice(chunkStart, chunkEnd);

      try {
        const batchPayloads = chunkClientIds.map((clientId) => ({
          payload: {
            clientId,
            daysBeforePrediction: payload.daysBeforePrediction ?? 1,
            referenceDate: payload.referenceDate,
            orderName: orderMapping ? orderMapping[clientId.toString()] : undefined,
            config: payload.config,
          },
          options: {
            ttl: "60m",
          }
        }));

        const batchResults = await backtestClientTask.batchTriggerAndWait(batchPayloads);

        for (const run of batchResults.runs) {
          if (run.ok) {
            const taskResult = run.output;

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

            if (taskResult.llm_usage) {
              totalLLMCalls += taskResult.llm_usage.calls;
              totalPromptTokens += taskResult.llm_usage.promptTokens;
              totalCompletionTokens += taskResult.llm_usage.completionTokens;
            }
          } else {
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
          }
        }
      } catch (batchError) {
        const batchErrorMessage = batchError instanceof Error ? batchError.message : String(batchError);
        console.error(`BATCH ${chunkIdx + 1} FAILED: ${batchErrorMessage}`);

        for (const clientId of chunkClientIds) {
          allResults.push({
            clientId,
            clientName: "Unknown",
            orderName: "N/A",
            success: false,
            error: `Batch failure: ${batchErrorMessage}`,
          });
        }

        continue;
      }
    }

    const successfulResults = allResults.filter((r) => r.success && r.metrics);

    const aggregateMetrics = calculateAggregateStatistics(
      successfulResults.map((r) => r.metrics!)
    );

    const reportsOutputDir = path.join(process.cwd(), "reports-output");
    await fs.mkdir(reportsOutputDir, { recursive: true });

    const timestamp = new Date().toISOString().split("T")[0];

    let jsonPath = "";
    let mdPath = "";

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
        const aggregatedV2 = generateAggregatedReportV2(v2Reports);
        const aggregatedV2FileName = `backtest-aggregate-${timestamp}-v2.json`;
        jsonPath = path.join(reportsOutputDir, aggregatedV2FileName);
        await fs.writeFile(jsonPath, JSON.stringify(aggregatedV2, null, 2), 'utf-8');

        const summaryMarkdown = generateSummaryMarkdown(v2Reports);
        const summaryFileName = `backtest-aggregate-${timestamp}-summary.md`;
        mdPath = path.join(reportsOutputDir, summaryFileName);
        await fs.writeFile(mdPath, summaryMarkdown, 'utf-8');
      }
    } catch (aggregateError) {
      console.warn(`Failed to generate reports:`, aggregateError instanceof Error ? aggregateError.message : String(aggregateError));
    }

    const executionTime = Date.now() - startTime;

    console.log(`\nBACKTEST AGGREGATE COMPLETED`);
    console.log(`Clients processed: ${allResults.length}`);
    console.log(`Succeeded: ${successfulResults.length}`);
    console.log(`Failed: ${allResults.length - successfulResults.length}`);
    console.log(`Execution time: ${(executionTime / 1000).toFixed(1)}s\n`);

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
