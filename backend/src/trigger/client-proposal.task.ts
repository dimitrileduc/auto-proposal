import { task } from "@trigger.dev/sdk";
import { calculateReplenishmentNeeds } from "../features/stock-replenishment/stock-replenishment.service";
import { prepareProposal } from "../features/proposal-preparation/proposal-preparation.service";
import { generateQuote } from "../features/proposal-generation/proposal-generation.service";
import { createOdooClient } from "../infrastructure/odoo/odoo.service";
import { autoProposalConfig } from "../config/auto-proposal";
import { getTodayAsDateString, parseUserDateInput } from "../utils/date.utils";
import { prepareClientReportData } from "../reports/data-preparation";
import { generateClientReport, generateQuoteReport } from "../reports/client-report";
import * as fs from "fs/promises";
import * as path from "path";
import type { ClientTaskPayload, ClientProcessingConfig } from "../shared/types";
import type { ClientProposalResult } from "../reports/types";

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
        true,

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
      const stockAnalysis = await calculateReplenishmentNeeds(payload.client.id, {
        analysisWindowDays: config.analysisWindowDays,
        analysisEndDate: config.analysisEndDate,
        targetCoverage: config.targetCoverage,
        leadTime: config.leadTime,
      });

      result.phases.stockAnalysis = stockAnalysis;

      // Vérifier si le client a des produits à commander
      const hasProducts = stockAnalysis.products.length > 0;
      result.hasRisk = hasProducts;
      result.productsCount = hasProducts ? stockAnalysis.products.length : 0;

      // Définir le seuil de réapprovisionnement
      const replenishmentThreshold = config.targetCoverage + config.leadTime;

      if (hasProducts) {
        // Compter les produits urgents (daysUntilStockout <= 0)
        result.urgentProductsCount = stockAnalysis.products.filter(
          (p) => p.stock_prediction.days_until_stockout <= 0
        ).length;

        // Compter les produits modérés (0 < days <= threshold)
        result.moderateProductsCount = stockAnalysis.products.filter(
          (p) =>
            p.stock_prediction.days_until_stockout > 0 &&
            p.stock_prediction.days_until_stockout <= replenishmentThreshold
        ).length;

        console.log(`📊 Client ${payload.client.name}: ${result.productsCount} products at risk`);
      } else {
        result.urgentProductsCount = 0;
        result.moderateProductsCount = 0;
        console.log(`✅ Client ${payload.client.name}: No replenishment needed`);
      }

      // Phase 2.5: Proposal Preparation (Pricing + MOQ)
      // Créer un proposalFinal même si products.length === 0 pour la génération de rapport
      const proposalStart = Date.now();
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

      // Phase 3: Quote Generation (si pas en mode skip ET si produits à commander)
      if (!config.skipOdooQuoteGeneration && hasProducts) {
        const quote = await generateQuote(proposalFinal, odooClient);

        result.phases.quote = quote;
        result.quoteName = quote.quote_name;
        result.quoteId = quote.quote_id;
      }

      result.success = true;
      result.executionTime = Date.now() - startTime;

      // Générer le rapport client si shouldGenerateReport (même si hasRisk = false pour debug backtest)
      let reportMarkdown: string | undefined;
      let quoteMarkdown: string | undefined;

      if (config.shouldGenerateReport) {
        try {
          const reportData = prepareClientReportData(result, {
            ...config,
            replenishmentThreshold,
            // Add the missing fields from WorkflowConfig that prepareClientReportData expects
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
            const reportPath = path.join(reportsOutputDir, reportFileName);
            await fs.writeFile(reportPath, reportMarkdown, "utf-8");

            console.log(`📝 Report generated: ${reportFileName}`);
          }
        } catch (error) {
          console.error(`Failed to generate report for client ${payload.client.id}:`, error);
          // Ne pas faire échouer le workflow pour une erreur de rapport
        }
      }

      if (result.hasRisk) {
        console.log(
          `✅ Client ${payload.client.name}: ${result.productsCount} products at risk, ` +
          `${result.finalAmount?.toFixed(2)}€ HT${result.quoteName ? ` → Quote ${result.quoteName}` : ""}`
        );
      } else {
        console.log(`✅ Client ${payload.client.name}: Complete - No replenishment needed`);
      }

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
