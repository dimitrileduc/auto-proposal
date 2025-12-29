/**
 * HTTP route to trigger the Trigger.dev "backtest-client" task
 *
 * Provides endpoint to run backtest for individual clients.
 *
 * @module routes/backtest-client
 */

import { Hono } from "hono";
import { tasks } from "@trigger.dev/sdk/v3";
import type { BacktestClientTaskPayload, backtestClientTask } from "../trigger/backtest-client.task";

const backtestClientRoute = new Hono();

/**
 * Triggers client backtest task
 *
 * POST /backtest-client
 *
 * Compares system prediction with actual order for a specific client.
 *
 * @param clientId Client ID to backtest (required)
 * @param daysBeforePrediction Days before order date for cutoff (default: 14)
 * @returns Task ID and configuration
 *
 * Example:
 * ```bash
 * curl -X POST http://localhost:3000/backtest-client \
 *   -H "Content-Type: application/json" \
 *   -d '{"clientId": 60468, "daysBeforePrediction": 14}'
 * ```
 */
backtestClientRoute.post("/", async (c) => {
  try {
    const body = await c.req.json();
    const { clientId, daysBeforePrediction } = body;

    if (!clientId || typeof clientId !== 'number') {
      return c.json({ error: "clientId (number) is required" }, 400);
    }

    const payload: BacktestClientTaskPayload = {
      clientId,
      daysBeforePrediction: daysBeforePrediction ?? 14,
    };

    const handle = await tasks.trigger<typeof backtestClientTask>(
      "backtest-client",
      payload
    );

    return c.json({
      success: true,
      taskId: handle.id,
      clientId: payload.clientId,
      daysBeforePrediction: payload.daysBeforePrediction,
      message: `Backtest task triggered for client ${payload.clientId}`,
      note: "Check Trigger.dev dashboard for task progress and results",
    });
  } catch (error: any) {
    console.error("Failed to trigger backtest-client task:", error);
    return c.json(
      {
        error: "Failed to trigger backtest task",
        message: error.message,
      },
      500
    );
  }
});

export default backtestClientRoute;
