import { getInactiveClients } from "../features/client-inactivity/inactivity.service";
import { runClientAutoProposal } from "./client-proposal.workflow";
import { calculateReplenishmentNeeds } from "../features/stock-replenishment/stock-replenishment.service";
import { autoProposalConfig } from "../config/auto-proposal";
import { calculateGlobalWorkflowStatistics } from "./workflow.stats";
import { prepareAllClientReportData } from "./workflow.client-stats";
import { generateClientReport } from "../reports/client-report";
import { generateGlobalReport } from "../reports/global-report";
import type {
  WorkflowOptions,
  WorkflowConfig,
  WorkflowResult,
  ClientProposalResult,
} from "./workflow.types";
import type { GlobalReportData } from "../reports/global-report";
import * as fs from "fs/promises";
import * as path from "path";

/**
 * Workflow principal auto-proposal
 *
 * Étapes:
 * 1. Récupère TOUS les clients inactifs (Phase 0)
 * 2. Loop sur TOUS les clients pour Phase 1 (Stock Analysis)
 *    → Détecte risque de rupture de stock pour chaque client
 * 3. Pour les N premiers clients AVEC RISQUE (selon maxClientsForProposalGeneration):
 *    → Phase 2.5: Proposal Preparation (pricing, MOQ)
 *    → Phase 3: Quote Generation (création devis Odoo si !skipQuoteGeneration)
 * 4. Calcule statistiques globales (avec calculateGlobalWorkflowStatistics)
 * 5. Retourne résultats complets avec stats + données brutes
 *
 * Note: Phase 1 est TOUJOURS faite pour tous les clients inactifs afin d'avoir
 * des statistiques complètes. La limitation maxClientsForProposalGeneration
 * s'applique uniquement aux phases 2.5 et 3 (génération de proposals/quotes).
 *
 * @param options - Options runtime
 * @param options.skipQuoteGeneration - Si true, skip Phase 3 (mode test)
 * @param options.maxClientsForProposalGeneration - Limite Phase 2.5/3 aux N premiers avec risque
 * @returns Résultat global avec statistiques et données brutes
 */
export async function runAutoProposalWorkflow(
  options?: WorkflowOptions
): Promise<WorkflowResult> {
  const startTime = Date.now();

  // Merge config + options runtime
  const config: WorkflowConfig = {
    inactivityDays: autoProposalConfig.inactivityDaysThreshold,
    analysisWindowDays: autoProposalConfig.analysisWindowDays,
    targetCoverage: autoProposalConfig.targetCoverage,
    leadTime: autoProposalConfig.leadTime,
    replenishmentThreshold:
      autoProposalConfig.targetCoverage + autoProposalConfig.leadTime,
    moqMinimum: autoProposalConfig.pricing.minimumOrderAmount,
    maxClientsForProposalGeneration:
      options?.maxClientsForProposalGeneration ??
      autoProposalConfig.workflow.maxClientsForProposalGeneration,
    skipQuoteGeneration: options?.skipQuoteGeneration ?? false,
  };

  console.log("\n🚀 AUTO-PROPOSAL WORKFLOW STARTED");
  console.log(`   Mode: ${config.skipQuoteGeneration ? "TEST (skip quotes)" : "PRODUCTION"}`);
  console.log(`   Inactivity threshold: ${config.inactivityDays} days`);
  console.log(`   Analysis window: ${config.analysisWindowDays} days\n`);

  try {
    // 1. Récupérer tous les clients inactifs
    console.log("📊 Fetching inactive clients...");
    const allInactiveClients = await getInactiveClients(config.inactivityDays);
    console.log(`   Found ${allInactiveClients.length} inactive clients\n`);

    // 2. Loop sur TOUS les clients inactifs
    console.log("📊 Analyzing ALL inactive clients...\n");

    const clientResults: ClientProposalResult[] = [];
    const maxProposalGeneration = config.maxClientsForProposalGeneration === "all"
      ? Infinity
      : config.maxClientsForProposalGeneration;

    console.log(
      `   Phase 1 (Stock Analysis): ALL ${allInactiveClients.length} clients`
    );
    console.log(
      `   Phase 2.5 (Proposal) + Phase 3 (Quote): First ${maxProposalGeneration === Infinity ? "ALL" : maxProposalGeneration} clients with risk\n`
    );

    let processedCount = 0;
    let clientsWithRiskCount = 0;

    for (const client of allInactiveClients) {
      processedCount++;

      if (processedCount % 100 === 0) {
        console.log(`   Progress: ${processedCount}/${allInactiveClients.length}...`);
      }

      try {
        // Décider si on fait workflow complet ou juste Phase 1
        const shouldRunFullWorkflow = clientsWithRiskCount < maxProposalGeneration;

        let result: ClientProposalResult;

        if (shouldRunFullWorkflow) {
          // Workflow complet (Phase 1, 2.5, 3)
          result = await runClientAutoProposal(client, config);

          if (result.success && result.hasRisk) {
            clientsWithRiskCount++;
            console.log(
              `[${clientsWithRiskCount}] ${client.name}: ${result.productsCount} products, ${result.finalAmount?.toFixed(2)}€ HT${result.quoteName ? ` → Quote ${result.quoteName}` : ""}`
            );
          }
        } else {
          // Juste Phase 1 (Stock Analysis) - limite atteinte
          const stockAnalysis = await calculateReplenishmentNeeds(client.id);

          result = {
            clientId: client.id,
            clientName: client.name,
            clientEmail: client.email ?? undefined,
            success: true,
            hasRisk: stockAnalysis.products.length > 0,
            phases: { stockAnalysis },
            productsCount: stockAnalysis.products.length,
          };

          if (result.hasRisk) {
            clientsWithRiskCount++;
          }
        }

        clientResults.push(result);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);

        clientResults.push({
          clientId: client.id,
          clientName: client.name,
          clientEmail: client.email ?? undefined,
          success: false,
          hasRisk: false,
          phases: {},
          error: errorMessage,
        });
      }
    }

    // 4. Calculer statistiques
    const statistics = calculateGlobalWorkflowStatistics(
      allInactiveClients,
      clientResults
    );

    // 5. Préparer données pour rapports clients
    const clientReportData = prepareAllClientReportData(clientResults, config);
    console.log(`\n📊 Client reports prepared: ${clientReportData.length}`);

    const executionTime = Date.now() - startTime;

    // 6. Générer rapports markdown
    console.log("\n📝 Generating reports...");
    const reportsOutputDir = path.join(process.cwd(), "reports-output");
    await fs.mkdir(reportsOutputDir, { recursive: true });

    // Générer rapports clients individuels (tous ceux avec full workflow)
    for (const reportData of clientReportData) {
      try {
        const markdownReport = generateClientReport(reportData);
        const reportFileName = `client-${reportData.client.id}-${reportData.client.name.replace(/[^a-zA-Z0-9-]/g, "-")}.md`;
        const reportFilePath = path.join(reportsOutputDir, reportFileName);
        await fs.writeFile(reportFilePath, markdownReport, "utf-8");
        console.log(`   ✅ ${reportFileName}`);
      } catch (error) {
        console.error(`   ❌ Failed to generate report for client ${reportData.client.id}:`, error);
      }
    }

    // Générer rapport global
    const globalReportData: GlobalReportData = {
      executionDate: new Date().toISOString(),
      totalExecutionTime: executionTime,
      clients: clientReportData,
      statistics,
      config: {
        replenishmentThreshold: config.replenishmentThreshold,
        targetCoverageDays: config.targetCoverage,
        analysisWindowDays: config.analysisWindowDays,
        moqMinimum: config.moqMinimum,
      },
    };

    const globalMarkdownReport = generateGlobalReport(globalReportData);
    const globalReportFileName = `global-report-${new Date().toISOString().split("T")[0]}.md`;
    const reportPath = path.join(reportsOutputDir, globalReportFileName);
    await fs.writeFile(reportPath, globalMarkdownReport, "utf-8");
    console.log(`   ✅ ${globalReportFileName}`);

    // 7. Résultat final
    const result: WorkflowResult = {
      success: true,
      config,
      statistics,
      clientResults,
      allInactiveClients,
      clientReportData,
      reportPath,
      executionTime,
    };

    console.log("\n✅ WORKFLOW COMPLETED");
    console.log(
      `   Processed: ${clientResults.length}/${allInactiveClients.length} clients`
    );
    console.log(`   With order history: ${statistics.clientsWithOrderHistory}`);
    console.log(`   With risk: ${statistics.clientsWithRisk}`);
    console.log(`   Without risk: ${statistics.clientsWithoutRisk}`);
    console.log(`   Failed: ${statistics.clientsFailed}`);
    console.log(`   Quotes generated: ${statistics.quotesGenerated}`);
    console.log(`   Total value: ${statistics.totalValue.toFixed(2)}€ HT`);
    console.log(`   Execution time: ${(executionTime / 1000).toFixed(1)}s\n`);

    return result;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`\n❌ WORKFLOW FAILED: ${errorMessage}\n`);

    const statistics = calculateGlobalWorkflowStatistics([], []);

    return {
      success: false,
      config,
      statistics,
      clientResults: [],
      allInactiveClients: [],
      clientReportData: [],
      reportPath: "",
      executionTime: Date.now() - startTime,
    };
  }
}
