/**
 * Route HTTP pour déclencher la task Trigger.dev "auto-proposal-orchestrator"
 *
 * POST /orchestrator-task - Déclencher l'orchestrateur pour tous les clients inactifs
 */
import { Hono } from "hono";
import { tasks } from "@trigger.dev/sdk/v3";
import type { OrchestratorTaskPayload } from "../shared/types";
import type { orchestratorTask } from "../trigger/orchestrator.task";

const orchestratorTaskRoute = new Hono();

/**
 * POST /orchestrator-task
 * Déclenche la task Trigger.dev orchestrator pour traiter tous les clients inactifs
 *
 * Body (tous optionnels):
 * {
 *   "config": {
 *     "dateMin": "2025-09-26 00:00:00",  // Date minimum pour détection d'inactivité (format: "YYYY-MM-DD HH:MM:SS"). Default: aujourd'hui - 30 jours
 *     "dateMax": "2025-10-26 23:59:59",  // Date maximum pour détection d'inactivité (format: "YYYY-MM-DD HH:MM:SS"). Default: aujourd'hui
 *     "analysisWindowDays": 180,
 *     "targetCoverage": 14,
 *     "leadTime": 5,
 *     "moqMinimum": 300,
 *     "maxClientsToAnalyze": 3,  // "all" ou nombre, pour debug
 *     "generateReports": true,  // Si true, génère les rapports markdown pour tous les clients avec risk
 *     "skipOdooQuoteGeneration": true,  // Si true, skip création devis Odoo (mode test)
 *     "forceReanalysis": false  // Si true, réanalyse même les clients avec devis auto-proposal (tag 82)
 *   }
 * }
 */
orchestratorTaskRoute.post("/", async (c) => {
  try {
    const body = await c.req.json().catch(() => ({}));
    const { config = {} } = body;

    // Préparer le payload pour la task
    const payload: OrchestratorTaskPayload = {
      config: {
        dateMin: config.dateMin,
        dateMax: config.dateMax,
        analysisWindowDays: config.analysisWindowDays,
        targetCoverage: config.targetCoverage,
        leadTime: config.leadTime,
        moqMinimum: config.moqMinimum,
        maxClientsToAnalyze: config.maxClientsToAnalyze,
        generateReports: config.generateReports,
        skipOdooQuoteGeneration: config.skipOdooQuoteGeneration,
        forceReanalysis: config.forceReanalysis,
      },
    };

    console.log(`🚀 Triggering auto-proposal-orchestrator task`);
    if (config.dateMin && config.dateMax) {
      console.log(`   Inactivity period: ${config.dateMin} to ${config.dateMax}`);
    }
    if (config.maxClientsToAnalyze) {
      console.log(`   Max clients to analyze: ${config.maxClientsToAnalyze}`);
    }
    if (config.skipOdooQuoteGeneration) {
      console.log(`   Mode: TEST (skipOdooQuoteGeneration=true)`);
    }

    // Déclencher la task Trigger.dev
    const handle = await tasks.trigger<typeof orchestratorTask>(
      "auto-proposal-orchestrator",
      payload
    );

    console.log(`✅ Task triggered successfully: ${handle.id}`);

    return c.json({
      success: true,
      taskId: handle.id,
      config: payload.config,
      message: "Auto-proposal orchestrator task triggered",
    });
  } catch (error: any) {
    console.error("❌ Failed to trigger auto-proposal-orchestrator task:", error);
    return c.json(
      {
        error: "Failed to trigger task",
        message: error.message,
      },
      500
    );
  }
});

export default orchestratorTaskRoute;
