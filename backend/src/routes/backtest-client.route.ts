/**
 * Route HTTP pour déclencher la task Trigger.dev "backtest-client"
 *
 * POST /backtest-client - Déclencher le backtest pour un client spécifique
 */
import { Hono } from "hono";
import { tasks } from "@trigger.dev/sdk/v3";
import type { BacktestClientTaskPayload, backtestClientTask } from "../trigger/backtest-client.task";

const backtestClientRoute = new Hono();

/**
 * POST /backtest-client
 * Déclenche la task Trigger.dev pour backtester un client spécifique
 *
 * Body:
 * {
 *   "clientId": 60468,  // ID du client à backtester (requis)
 *   "daysBeforePrediction": 14  // Optionnel, nombre de jours avant commande pour le cutoff (défaut: 14)
 * }
 *
 * Exemple avec curl:
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

    // Préparer le payload pour la task
    const payload: BacktestClientTaskPayload = {
      clientId,
      daysBeforePrediction: daysBeforePrediction ?? 14,
    };

    console.log(`🚀 Triggering backtest-client task for client ${payload.clientId}`);

    // Déclencher la task Trigger.dev
    const handle = await tasks.trigger<typeof backtestClientTask>(
      "backtest-client",
      payload
    );

    console.log(`✅ Backtest task triggered successfully: ${handle.id}`);

    return c.json({
      success: true,
      taskId: handle.id,
      clientId: payload.clientId,
      daysBeforePrediction: payload.daysBeforePrediction,
      message: `Backtest task triggered for client ${payload.clientId}`,
      note: "Check Trigger.dev dashboard for task progress and results",
    });
  } catch (error: any) {
    console.error("❌ Failed to trigger backtest-client task:", error);
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
