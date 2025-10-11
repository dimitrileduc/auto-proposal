/**
 * Route HTTP pour le workflow Auto-Proposal
 *
 * POST /workflow - Exécuter workflow complet
 */
import { Hono } from "hono";
import { runAutoProposalWorkflow } from "../workflow/auto-proposal.workflow";

const workflow = new Hono();

/**
 * POST /workflow
 * Exécute le workflow complet Auto-Proposal
 *
 * Body (optionnel):
 * {
 *   "skipQuoteGeneration": false,
 *   "maxClientsForProposalGeneration": 10
 * }
 */
workflow.post("/", async (c) => {
  try {
    const body = await c.req.json().catch(() => ({}));
    const {
      skipQuoteGeneration = false,
      maxClientsForProposalGeneration = 10,
    } = body;

    const result = await runAutoProposalWorkflow({
      skipQuoteGeneration,
      maxClientsForProposalGeneration,
    });

    if (result.success) {
      return c.json({
        success: true,
        executionTime: result.executionTime,
        statistics: result.statistics,
        reportPath: result.reportPath,
        clientReports: result.clientReportData.length,
      });
    } else {
      return c.json(
        {
          success: false,
          error: "Workflow execution failed",
        },
        500
      );
    }
  } catch (error: any) {
    console.error("❌ API: Erreur workflow:", error);
    return c.json(
      {
        error: "Workflow execution failed",
        message: error.message,
      },
      500
    );
  }
});

export default workflow;
