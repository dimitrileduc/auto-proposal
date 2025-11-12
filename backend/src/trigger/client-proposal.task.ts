import { task } from "@trigger.dev/sdk";
import { calculateReplenishmentNeeds } from "../features/stock-replenishment/stock-replenishment.service";
import { prepareProposal } from "../features/proposal-preparation/proposal-preparation.service";
import { generateQuote } from "../features/proposal-generation/proposal-generation.service";
import { createOdooClient } from "../infrastructure/odoo/odoo.service";
import { autoProposalConfig } from "../config/auto-proposal";
import { getTodayAsDateString, parseUserDateInput } from "../utils/date.utils";
import { prepareClientReportData } from "../workflow/workflow.client-stats";
import { generateClientReport, generateQuoteReport } from "../reports/client-report";
import * as fs from "fs/promises";
import * as path from "path";
import type { ClientTaskPayload, ClientProcessingConfig } from "../shared/types";
import type { ClientProposalResult } from "../workflow/workflow.types";

const odooClient = createOdooClient(autoProposalConfig.odooApiType);

/**
 * Résultat complet de la tâche client-proposal
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
    urgentProductsCount: number;
    moderateProductsCount: number;
    finalAmount: number;
    quoteName?: string;
    quoteId?: number;
  };
  report: {
    complete?: string;  // Le rapport markdown complet
    quote?: string;  // Le rapport markdown du devis seul
  };
  executionTime: number;
}

/**
 * Tâche Trigger.dev pour traiter la proposition automatique d'un client individuel
 *
 * Cette tâche exécute le workflow complet pour un client:
 * - Phase 1 & 2: Stock Analysis + Quantity Calculation
 * - Phase 2.5: Proposal Preparation (Pricing + MOQ)
 * - Phase 3: Quote Generation (si !skipQuoteGeneration)
 * - Génération du rapport markdown automatique si hasRisk
 *
 * La configuration utilise autoProposalConfig comme fallback pour tous les paramètres
 */
export const clientProposalTask = task({
  id: "client-proposal",
  retry: {
    maxAttempts: 3,        // Maximum 3 tentatives (1 + 2 retry)
    factor: 2,             // Délai double entre chaque retry
    minTimeoutInMs: 1000,  // Attendre minimum 1 seconde
    maxTimeoutInMs: 30000, // Maximum 30 secondes d'attente
    randomize: true,       // Ajoute ±25% d'aléatoire au délai
  },
  run: async (payload: ClientTaskPayload): Promise<ClientProposalTaskResult> => {
    const startTime = Date.now();
    const phaseTimings = {
      stockAnalysis: 0,
      proposalPreparation: 0,
      quoteGeneration: 0,
    };

    console.log(`📊 Processing client: ${payload.client.name} (ID: ${payload.client.id})`);

    // Utilise autoProposalConfig comme configuration par défaut avec overrides depuis le payload
    const config: ClientProcessingConfig = {
      analysisWindowDays:
        payload.config.analysisWindowDays ??
        autoProposalConfig.analysisWindowDays,

      analysisEndDate: payload.config.analysisEndDate
        ? parseUserDateInput(payload.config.analysisEndDate)
        : getTodayAsDateString(),

      targetCoverage:
        payload.config.targetCoverage ??
        autoProposalConfig.targetCoverage,

      leadTime:
        payload.config.leadTime ??
        autoProposalConfig.leadTime,

      moqMinimum:
        payload.config.moqMinimum ??
        autoProposalConfig.pricing.minimumOrderAmount,

      skipOdooQuoteGeneration:
        payload.config.skipOdooQuoteGeneration ??
        false,

      shouldGenerateReport:
        payload.config.shouldGenerateReport ??
        true,
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
      // Phase 1 & 2: Stock Analysis + Quantity Calculation
      const stockStart = Date.now();
      const stockAnalysis = await calculateReplenishmentNeeds(payload.client.id, {
        analysisWindowDays: config.analysisWindowDays,
        analysisEndDate: config.analysisEndDate,
        targetCoverage: config.targetCoverage,
        leadTime: config.leadTime,
      });
      phaseTimings.stockAnalysis = Date.now() - stockStart;

      result.phases.stockAnalysis = stockAnalysis;

      // Vérifier si le client a des produits à commander
      if (stockAnalysis.products.length === 0) {
        result.hasRisk = false;
        result.success = true;
        result.executionTime = Date.now() - startTime;
        result.productsCount = 0;

        console.log(`✅ Client ${payload.client.name}: No replenishment needed`);

        return {
          client: {
            id: payload.client.id,
            name: payload.client.name,
            email: payload.client.email ?? undefined,
          },
          config,
          result,
          summary: {
            hasRisk: false,
            productsCount: 0,
            urgentProductsCount: 0,
            moderateProductsCount: 0,
            finalAmount: 0,
          },
          report: {},
          executionTime: Date.now() - startTime,
        };
      }

      result.hasRisk = true;
      result.productsCount = stockAnalysis.products.length;

      // Compter les produits urgents (daysUntilStockout <= 0)
      result.urgentProductsCount = stockAnalysis.products.filter(
        (p) => p.stock_prediction.days_until_stockout <= 0
      ).length;

      // Compter les produits modérés (0 < days <= threshold)
      const replenishmentThreshold = config.targetCoverage + config.leadTime;
      result.moderateProductsCount = stockAnalysis.products.filter(
        (p) =>
          p.stock_prediction.days_until_stockout > 0 &&
          p.stock_prediction.days_until_stockout <= replenishmentThreshold
      ).length;

      // Phase 2.5: Proposal Preparation (Pricing + MOQ)
      const proposalStart = Date.now();
      const proposalFinal = prepareProposal(
        stockAnalysis,
        undefined,
        "historyPriceForClient",
        config.moqMinimum
      );
      phaseTimings.proposalPreparation = Date.now() - proposalStart;

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

      // Phase 3: Quote Generation (si pas en mode skip)
      if (!config.skipOdooQuoteGeneration) {
        const quoteStart = Date.now();
        const quote = await generateQuote(proposalFinal, odooClient);
        phaseTimings.quoteGeneration = Date.now() - quoteStart;

        result.phases.quote = quote;
        result.quoteName = quote.quote_name;
        result.quoteId = quote.quote_id;
      }

      result.success = true;
      result.executionTime = Date.now() - startTime;

      // Générer le rapport client si hasRisk ET shouldGenerateReport
      let reportMarkdown: string | undefined;
      let quoteMarkdown: string | undefined;
      let reportPath: string | undefined;

      if (result.hasRisk && config.shouldGenerateReport) {
        try {
          const reportData = prepareClientReportData(result, {
            ...config,
            replenishmentThreshold,
            // Add the missing fields from WorkflowConfig that prepareClientReportData expects
            inactivityDays: autoProposalConfig.inactivityDaysThreshold,
            generateReports: autoProposalConfig.workflow.generateReports,
            maxClientsToAnalyze: "all",
            forceReanalysis: autoProposalConfig.workflow.forceReanalysis,
          });

          if (reportData) {
            // Générer le rapport complet
            reportMarkdown = generateClientReport(reportData);

            // Générer le rapport devis seul (si quote existe)
            quoteMarkdown = generateQuoteReport(reportData);

            // Sauvegarder le rapport complet sur disque
            const reportsOutputDir = path.join(process.cwd(), "reports-output");
            await fs.mkdir(reportsOutputDir, { recursive: true });

            const reportFileName = `client-${payload.client.id}-${payload.client.name.replace(/[^a-zA-Z0-9-]/g, "-")}.md`;
            reportPath = path.join(reportsOutputDir, reportFileName);
            await fs.writeFile(reportPath, reportMarkdown, "utf-8");

            console.log(`📝 Report generated: ${reportFileName}`);
          }
        } catch (error) {
          console.error(`Failed to generate report for client ${payload.client.id}:`, error);
          // Ne pas faire échouer le workflow pour une erreur de rapport
        }
      }

      console.log(
        `✅ Client ${payload.client.name}: ${result.productsCount} products at risk, ` +
        `${result.finalAmount?.toFixed(2)}€ HT${result.quoteName ? ` → Quote ${result.quoteName}` : ""}`
      );

      // Retourne un objet complet avec toutes les informations utiles
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
          urgentProductsCount: result.urgentProductsCount ?? 0,
          moderateProductsCount: result.moderateProductsCount ?? 0,
          finalAmount: result.finalAmount ?? 0,
          quoteName: result.quoteName,
          quoteId: result.quoteId,
        },
        report: {
          complete: reportMarkdown,
          quote: quoteMarkdown,
        },
        executionTime: Date.now() - startTime,
      };
    } catch (error) {
      console.error(`❌ Failed to process client ${payload.client.name}:`, error);
      result.error = error instanceof Error ? error.message : String(error);
      result.success = false;
      result.executionTime = Date.now() - startTime;

      throw error;
    }
  },
});
