/**
 * HTTP route to trigger the Trigger.dev "client-proposal" task
 *
 * Provides endpoint to process individual clients for proposal generation.
 *
 * @module routes/client-task
 */

import { Hono } from "hono";
import { tasks } from "@trigger.dev/sdk/v3";
import { autoProposalConfig } from "../config/auto-proposal";
import type { ClientTaskPayload } from "../shared/types";
import type { clientProposalTask } from "../trigger/client-proposal.task";

const clientTask = new Hono();

/**
 * Triggers client proposal task
 *
 * POST /client-task
 *
 * Triggers the Trigger.dev task to process a specific client for proposal generation.
 *
 * @param clientId Client ID to process (required)
 * @param clientName Client name for display (optional)
 * @param clientEmail Client email (optional)
 * @param config Configuration overrides (optional):
 *   - analysisEndDate: Reference date for analysis (format: "YYYY-MM-DD HH:MM:SS", default: today)
 *   - replenishmentThreshold: Replenishment threshold in days
 *   - moqMinimum: Minimum order amount
 *   - skipOdooQuoteGeneration: Skip Odoo quote creation (default: true)
 *   - shouldGenerateReport: Generate markdown reports (default: true)
 * @returns Task ID and configuration
 */
clientTask.post("/", async (c) => {
  try {
    const body = await c.req.json();
    const { clientId, clientName, clientEmail, config = {} } = body;

    if (!clientId) {
      return c.json({ error: "clientId is required" }, 400);
    }

    const payload: ClientTaskPayload = {
      client: {
        id: clientId,
        name: clientName || `Client ${clientId}`,
        email: clientEmail || null,
      },
      config: {
        analysisEndDate: config.analysisEndDate,
        replenishmentThreshold: config.replenishmentThreshold ?? autoProposalConfig.replenishmentThreshold,
        moqMinimum: config.moqMinimum ?? autoProposalConfig.pricing.minimumOrderAmount,
        skipOdooQuoteGeneration: config.skipOdooQuoteGeneration ?? true,
        shouldGenerateReport: config.shouldGenerateReport,
      },
    };

    const handle = await tasks.trigger<typeof clientProposalTask>(
      "client-proposal",
      payload
    );

    console.log(`Task triggered successfully: ${handle.id}`);

    return c.json({
      success: true,
      taskId: handle.id,
      client: payload.client,
      config: payload.config,
      message: `Task triggered for client ${payload.client.name}`,
    });
  } catch (error: any) {
    console.error("Failed to trigger client-proposal task:", error);
    return c.json(
      {
        error: "Failed to trigger task",
        message: error.message,
      },
      500
    );
  }
});

export default clientTask;
