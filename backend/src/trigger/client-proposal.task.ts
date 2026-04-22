import { task } from "@trigger.dev/sdk";
import { calculateReplenishmentNeeds } from "../features/stock-replenishment/stock-replenishment.service";
import { prepareProposal } from "../features/proposal-preparation/proposal-preparation.service";
import { generateQuote } from "../features/proposal-generation/proposal-generation.service";
import { createOdooClient } from "../infrastructure/odoo/odoo.service";
import { autoProposalConfig } from "../config/auto-proposal";
import { getTodayAsDateString, parseUserDateInput } from "../utils/date.utils";
import { generateClientReportJSON } from "../reports/client-report-json";
import { generateClientReportMarkdown } from "../reports/client-report-md";
import * as fs from "fs/promises";
import * as path from "path";
import type { ClientTaskPayload, ClientProcessingConfig } from "../shared/types";
import type { ClientProposalResult } from "../reports/types";

const odooClient = createOdooClient(autoProposalConfig.odooApiType);

/**
 * Complete result of the client-proposal task
 */
export interface ClientProposalTaskResult {
  client: {
    id: number;
    name: string;
    email?: string;
  };
  config: ClientProcessingConfig;
  result: ClientProposalResult;
  summary: {
    hasRisk: boolean;
    productsCount: number;
    finalAmount: number;
    quoteName?: string;
    quoteId?: number;
  };
  report: {
    /** Business markdown report */
    markdown?: string;
    /** Structured JSON report */
    json?: string;
  };
  executionTime: number;
}

/**
 * Trigger.dev task for processing automatic proposals for individual clients
 *
 * Executes the complete workflow for a single client:
 * - Phase 1 & 2: Stock Analysis + Quantity Calculation
 * - Phase 2.5: Proposal Preparation (Pricing + MOQ)
 * - Phase 3: Quote Generation (if !skipQuoteGeneration)
 * - Report generation when hasRisk=true
 *
 * Uses autoProposalConfig as fallback for all parameters.
 *
 * @module trigger/client-proposal
 */
export const clientProposalTask = task({
  id: "client-proposal",
  retry: {
    maxAttempts: 3,
    factor: 2,
    minTimeoutInMs: 1000,
    maxTimeoutInMs: 30000,
    randomize: true,
  },
  run: async (payload: ClientTaskPayload): Promise<ClientProposalTaskResult> => {
    const startTime = Date.now();

    console.log(`Processing client: ${payload.client.name} (ID: ${payload.client.id})`);

    const config: ClientProcessingConfig = {
      analysisEndDate: payload.config.analysisEndDate
        ? parseUserDateInput(payload.config.analysisEndDate)
        : getTodayAsDateString(),

      replenishmentThreshold:
        payload.config.replenishmentThreshold ??
        autoProposalConfig.replenishmentThreshold,

      moqMinimum:
        payload.config.moqMinimum ??
        autoProposalConfig.pricing.minimumOrderAmount,

      skipOdooQuoteGeneration:
        payload.config.skipOdooQuoteGeneration ??
        true,

      shouldGenerateReport:
        payload.config.shouldGenerateReport ??
        true,

      companyId:
        payload.config.companyId ??
        autoProposalConfig.defaultCompanyId,
    };

    const result: ClientProposalResult = {
      clientId: payload.client.id,
      clientName: payload.client.name,
      clientEmail: payload.client.email ?? undefined,
      success: false,
      hasRisk: false,
      phases: {},
    };

    try {
      const stockAnalysis = await calculateReplenishmentNeeds(payload.client.id, {
        analysisEndDate: config.analysisEndDate,
        replenishmentThreshold: config.replenishmentThreshold,
        companyId: config.companyId,
      });

      result.phases.stockAnalysis = stockAnalysis;

      const hasProducts = stockAnalysis.products.length > 0;
      result.hasRisk = hasProducts;
      result.productsCount = hasProducts ? stockAnalysis.products.length : 0;

      const proposalFinal = hasProducts
        ? prepareProposal(
            stockAnalysis,
            undefined,
            "historyPriceForClient",
            config.moqMinimum
          )
        : {
            products: [],
            total_amount: 0,
            currency: "EUR",
            moq_adjustment_applied: false,
          };

      result.phases.proposalFinal = proposalFinal;
      result.finalAmount = proposalFinal.total_amount;
      result.moqAdjustmentApplied = proposalFinal.moq_adjustment_applied;

      if (proposalFinal.adjustment_details) {
        result.initialAmount = proposalFinal.adjustment_details.original_total;
        result.moqGapFilled = proposalFinal.adjustment_details.gap_filled;
      } else {
        result.initialAmount = proposalFinal.total_amount;
        result.moqGapFilled = 0;
      }

      if (!config.skipOdooQuoteGeneration && hasProducts) {
        const quote = await generateQuote(proposalFinal, odooClient);

        result.phases.quote = quote;
        result.quoteName = quote.quote_name;
        result.quoteId = quote.quote_id;
      }

      result.success = true;
      result.executionTime = Date.now() - startTime;

      let reportMarkdown: string | undefined;
      let reportJSON: string | undefined;

      if (config.shouldGenerateReport) {
        try {
          const jsonData = generateClientReportJSON(result, {
            analysisEndDate: config.analysisEndDate,
            replenishmentThreshold: config.replenishmentThreshold,
            moqMinimum: config.moqMinimum,
            skipOdooQuoteGeneration: config.skipOdooQuoteGeneration,
          });

          reportMarkdown = generateClientReportMarkdown(jsonData);
          reportJSON = JSON.stringify(jsonData, null, 2);

          const reportsOutputDir = path.join(process.cwd(), "reports-output");
          await fs.mkdir(reportsOutputDir, { recursive: true });

          const clientSlug = payload.client.name.replace(/[^a-zA-Z0-9-]/g, "-");
          const mdFileName = `client-${payload.client.id}-${clientSlug}.md`;
          const jsonFileName = `client-${payload.client.id}-${clientSlug}.json`;

          await fs.writeFile(
            path.join(reportsOutputDir, mdFileName),
            reportMarkdown,
            "utf-8"
          );
          await fs.writeFile(
            path.join(reportsOutputDir, jsonFileName),
            reportJSON,
            "utf-8"
          );
        } catch (error) {
          console.error(`Failed to generate report for client ${payload.client.id}:`, error);
        }
      }

      return {
        client: {
          id: payload.client.id,
          name: payload.client.name,
          email: payload.client.email ?? undefined,
        },
        config,
        result,
        summary: {
          hasRisk: result.hasRisk,
          productsCount: result.productsCount ?? 0,
          finalAmount: result.finalAmount ?? 0,
          quoteName: result.quoteName,
          quoteId: result.quoteId,
        },
        report: {
          markdown: reportMarkdown,
          json: reportJSON,
        },
        executionTime: Date.now() - startTime,
      };
    } catch (error) {
      console.error(`Failed to process client ${payload.client.name}:`, error);
      result.error = error instanceof Error ? error.message : String(error);
      result.success = false;
      result.executionTime = Date.now() - startTime;

      throw error;
    }
  },
});
