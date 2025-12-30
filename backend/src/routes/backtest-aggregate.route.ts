/**
 * HTTP route to trigger the Trigger.dev "backtest-aggregate" task
 *
 * Provides endpoint to run batch backtest across multiple clients with statistical aggregation.
 *
 * @module routes/backtest-aggregate
 */

import { Hono } from "hono";
import { tasks } from "@trigger.dev/sdk/v3";
import type { BacktestAggregatePayload, backtestAggregateTask } from "../trigger/backtest-aggregate.task";

const backtestAggregateRoute = new Hono();

/**
 * Triggers batch backtest task with aggregation
 *
 * POST /backtest/aggregate
 *
 * Runs backtest across multiple clients and aggregates results with statistics.
 *
 * Two operational modes:
 * - **Explicit mode**: Provide clientIds array to test specific clients
 * - **Auto-discovery mode**: Auto-discover top N active clients (default: 50)
 *
 * @param clientIds Optional array of client IDs to backtest explicitly
 * @param autoDiscoverCount Number of clients to auto-discover (default: 50)
 * @param daysBeforePrediction Days before order date for cutoff (default: 1)
 * @param config Optional configuration for A/B testing
 * @returns Task ID, mode, and client count
 *
 * Examples:
 * ```bash
 * # Explicit mode: test 3 specific clients
 * curl -X POST http://localhost:3000/backtest/aggregate \
 *   -H "Content-Type: application/json" \
 *   -d '{
 *     "clientIds": [12292, 99, 17819],
 *     "daysBeforePrediction": 1
 *   }'
 *
 * # Auto-discovery mode: top 50 clients (default)
 * curl -X POST http://localhost:3000/backtest/aggregate \
 *   -H "Content-Type: application/json" \
 *   -d '{"daysBeforePrediction": 1}'
 *
 * # Auto-discovery mode: top 100 clients
 * curl -X POST http://localhost:3000/backtest/aggregate \
 *   -H "Content-Type: application/json" \
 *   -d '{
 *     "autoDiscoverCount": 100,
 *     "daysBeforePrediction": 1
 *   }'
 *
 * # A/B testing: compare configurations
 * # Config A
 * curl -X POST http://localhost:3000/backtest/aggregate \
 *   -H "Content-Type: application/json" \
 *   -d '{"config": {"analysisWindowDays": 120}}'
 *
 * # Config B
 * curl -X POST http://localhost:3000/backtest/aggregate \
 *   -H "Content-Type: application/json" \
 *   -d '{"config": {"analysisWindowDays": 180}}'
 * ```
 */
backtestAggregateRoute.post("/", async (c) => {
  try {
    const body = await c.req.json();
    const { clientIds, autoDiscoverCount, daysBeforePrediction, config } = body;

    if (clientIds && (!Array.isArray(clientIds) || clientIds.length === 0)) {
      return c.json({ error: "clientIds must be a non-empty array if provided" }, 400);
    }

    if (clientIds && clientIds.some((id) => typeof id !== 'number')) {
      return c.json({ error: "All clientIds must be numbers" }, 400);
    }

    const payload: BacktestAggregatePayload = {
      clientIds: clientIds ?? undefined,
      autoDiscoverCount: autoDiscoverCount ?? 50,
      daysBeforePrediction: daysBeforePrediction ?? 1,
      config: config ?? undefined,
    };

    const mode = payload.clientIds ? "explicit" : "auto-discovery";
    const clientCountInfo = payload.clientIds
      ? `${payload.clientIds.length} clients (explicit)`
      : `${payload.autoDiscoverCount} clients (auto-discovery)`;

    const handle = await tasks.trigger<typeof backtestAggregateTask>(
      "backtest-aggregate",
      payload
    );

    return c.json({
      success: true,
      taskId: handle.id,
      mode,
      clientCount: payload.clientIds?.length ?? payload.autoDiscoverCount,
      daysBeforePrediction: payload.daysBeforePrediction,
      message: `Backtest aggregate task triggered (${mode}: ${clientCountInfo})`,
      note: "Check Trigger.dev dashboard for task progress and results",
    });
  } catch (error: any) {
    console.error("Failed to trigger backtest-aggregate task:", error);
    return c.json(
      {
        error: "Failed to trigger backtest aggregate task",
        message: error.message,
      },
      500
    );
  }
});

export default backtestAggregateRoute;
