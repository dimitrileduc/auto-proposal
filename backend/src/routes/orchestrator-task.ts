/**
 * HTTP route to trigger the Trigger.dev "auto-proposal-orchestrator" task
 *
 * Provides endpoint to orchestrate batch processing of all inactive clients.
 *
 * @module routes/orchestrator-task
 */

import { Hono } from "hono";
import { tasks } from "@trigger.dev/sdk/v3";
import type { OrchestratorTaskPayload } from "../shared/types";
import type { orchestratorTask } from "../trigger/orchestrator.task";

const orchestratorTaskRoute = new Hono();

/**
 * Triggers auto-proposal orchestrator task
 *
 * POST /orchestrator-task
 *
 * Triggers the orchestrator to process all inactive clients for proposal generation.
 *
 * Configuration options (all optional):
 * - dateMin: Minimum inactivity date (formats: "DDMMYY", "DD/MM/YY", "DD/MM/YYYY", "YYYY-MM-DD")
 * - dateMax: Maximum inactivity date (default: today)
 * - replenishmentThreshold: Days threshold for replenishment (default: 30)
 * - moqMinimum: Minimum order amount in currency (default: 300)
 * - maxClientsToAnalyze: Max clients to process or "all" for all
 * - generateReports: Generate markdown reports (default: true)
 * - skipOdooQuoteGeneration: Skip Odoo quote creation - test mode (default: true)
 * - forceReanalysis: Reanalyze clients with auto-proposal tag (default: false)
 *
 * @returns Task ID and configuration
 */
orchestratorTaskRoute.post("/", async (c) => {
  try {
    const body = await c.req.json().catch(() => ({}));
    const { config = {} } = body;

    const payload: OrchestratorTaskPayload = {
      config,
    };

    const handle = await tasks.trigger<typeof orchestratorTask>(
      "auto-proposal-orchestrator",
      payload
    );

    console.log(`Task triggered successfully: ${handle.id}`);

    return c.json({
      success: true,
      taskId: handle.id,
      config: payload.config,
      message: "Auto-proposal orchestrator task triggered",
    });
  } catch (error: any) {
    console.error("Failed to trigger auto-proposal-orchestrator task:", error);
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
