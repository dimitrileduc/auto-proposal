import { calculateReplenishmentNeeds } from "../features/stock-replenishment/stock-replenishment.service";
import { prepareProposal } from "../features/proposal-preparation/proposal-preparation.service";
import { generateQuote } from "../features/proposal-generation/proposal-generation.service";
import { createOdooClient } from "../infrastructure/odoo/odoo.service";
import { autoProposalConfig } from "../config/auto-proposal";
import { prepareClientReportData } from "./workflow.client-stats";
import { generateClientReport, generateQuoteReport } from "../reports/client-report";
import * as fs from "fs/promises";
import * as path from "path";
import type { InactiveClient } from "../features/client-inactivity/inactivity.types";
import type {
  ClientProposalResult,
  WorkflowConfig,
} from "./workflow.types";

const odooClient = createOdooClient(autoProposalConfig.odooApiType);

/**
 * Exécute le workflow auto-proposal pour UN client
 *
 * Phases:
 * 1. Stock Analysis (Phase 1 & 2): Détection risque + calcul quantités
 * 2. Proposal Preparation (Phase 2.5): Pricing + MOQ adjustment
 * 3. Quote Generation (Phase 3): Création devis Odoo (si !skipQuoteGeneration)
 *
 * @param client - Client inactif (depuis getInactiveClients)
 * @param config - Configuration du workflow
 * @returns Résultat complet avec toutes les phases
 */
export async function runClientAutoProposal(
  client: InactiveClient,
  config: WorkflowConfig
): Promise<ClientProposalResult> {
  const startTime = Date.now();
  const phaseTimings = {
    stockAnalysis: 0,
    proposalPreparation: 0,
    quoteGeneration: 0,
  };

  const result: ClientProposalResult = {
    clientId: client.id,
    clientName: client.name,
    clientEmail: client.email ?? undefined,
    success: false,
    hasRisk: false,
    phases: {},
  };

  try {
    // Phase 1 & 2: Stock Analysis + Quantity Calculation
    const stockStart = Date.now();
    const stockAnalysis = await calculateReplenishmentNeeds(client.id, {
      analysisWindowDays: config.analysisWindowDays,
      targetCoverage: config.targetCoverage,
      leadTime: config.leadTime
    });
    phaseTimings.stockAnalysis = Date.now() - stockStart;

    result.phases.stockAnalysis = stockAnalysis;

    // Vérifier si le client a des produits à commander
    if (stockAnalysis.products.length === 0) {
      result.hasRisk = false;
      result.success = true;
      result.executionTime = Date.now() - startTime;
      result.productsCount = 0;
      return result;
    }

    result.hasRisk = true;
    result.productsCount = stockAnalysis.products.length;

    // Compter les produits urgents (daysUntilStockout <= 0)
    result.urgentProductsCount = stockAnalysis.products.filter(
      (p) => p.stock_prediction.days_until_stockout <= 0
    ).length;

    // Compter les produits modérés (0 < days <= threshold)
    result.moderateProductsCount = stockAnalysis.products.filter(
      (p) =>
        p.stock_prediction.days_until_stockout > 0 &&
        p.stock_prediction.days_until_stockout <=
          config.replenishmentThreshold
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
    if (!config.skipQuoteGeneration) {
      const quoteStart = Date.now();
      const quote = await generateQuote(proposalFinal, odooClient);
      phaseTimings.quoteGeneration = Date.now() - quoteStart;

      result.phases.quote = quote;
      result.quoteName = quote.quote_name;
      result.quoteId = quote.quote_id;
    }

    result.success = true;
    result.executionTime = Date.now() - startTime;

    // Générer le rapport client si hasRisk
    if (result.hasRisk) {
      try {
        const reportData = prepareClientReportData(result, config);
        if (reportData) {
          // Générer le rapport complet
          const markdownReport = generateClientReport(reportData);

          // Générer le rapport devis seul (si quote existe)
          const quoteMarkdown = generateQuoteReport(reportData);

          // Sauvegarder le rapport complet sur disque
          const reportsOutputDir = path.join(process.cwd(), "reports-output");
          await fs.mkdir(reportsOutputDir, { recursive: true });

          const reportFileName = `client-${client.id}-${client.name.replace(/[^a-zA-Z0-9-]/g, "-")}.md`;
          const reportFilePath = path.join(reportsOutputDir, reportFileName);
          await fs.writeFile(reportFilePath, markdownReport, "utf-8");

          // Ajouter les rapports au résultat
          result.reportPath = reportFilePath;
          result.reportMarkdown = markdownReport;
          result.quoteMarkdown = quoteMarkdown;

          console.log(`📝 Report generated: ${reportFileName}`);
        }
      } catch (error) {
        console.error(`Failed to generate report for client ${client.id}:`, error);
        // Ne pas faire échouer le workflow pour une erreur de rapport
      }
    }

    return result;
  } catch (error) {
    result.error = error instanceof Error ? error.message : String(error);
    result.success = false;
    result.executionTime = Date.now() - startTime;
    return result;
  }
}
