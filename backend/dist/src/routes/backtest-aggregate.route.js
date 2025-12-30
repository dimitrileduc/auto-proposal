/**
 * Route HTTP pour déclencher la task Trigger.dev "backtest-aggregate"
 *
 * POST /backtest/aggregate - Déclencher le backtest agrégé pour plusieurs clients
 */
import { Hono } from "hono";
import { tasks } from "@trigger.dev/sdk/v3";
const backtestAggregateRoute = new Hono();
/**
 * POST /backtest/aggregate
 * Déclenche la task Trigger.dev pour backtester plusieurs clients en batch
 *
 * Body:
 * {
 *   // MODE 1: Liste explicite de clients
 *   "clientIds": [12292, 99, 17819],  // Optionnel (si non fourni, mode auto-découverte)
 *
 *   // MODE 2: Auto-découverte (utilisé si clientIds non fourni)
 *   "autoDiscoverCount": 50,          // Optionnel, défaut: 50 (top N clients actifs en 2025)
 *
 *   // Paramètres communs
 *   "daysBeforePrediction": 1,        // Optionnel, défaut: 1
 *   "config": {                       // Optionnel
 *     "analysisWindowDays": 120,
 *     "replenishmentThreshold": 30
 *   }
 * }
 *
 * Exemples avec curl:
 * ```bash
 * # MODE 1: Liste explicite
 * curl -X POST http://localhost:3000/backtest/aggregate \
 *   -H "Content-Type: application/json" \
 *   -d '{
 *     "clientIds": [12292, 99, 17819],
 *     "daysBeforePrediction": 1
 *   }'
 *
 * # MODE 2: Auto-découverte (50 clients par défaut)
 * curl -X POST http://localhost:3000/backtest/aggregate \
 *   -H "Content-Type: application/json" \
 *   -d '{
 *     "daysBeforePrediction": 1
 *   }'
 *
 * # MODE 2: Auto-découverte (nombre personnalisé)
 * curl -X POST http://localhost:3000/backtest/aggregate \
 *   -H "Content-Type: application/json" \
 *   -d '{
 *     "autoDiscoverCount": 100,
 *     "daysBeforePrediction": 1
 *   }'
 * ```
 *
 * Cas d'usage A/B Testing:
 * ```bash
 * # Test Config A (120j) - Auto-découverte 50 clients
 * curl -X POST http://localhost:3000/backtest/aggregate \
 *   -H "Content-Type: application/json" \
 *   -d '{"config": {"analysisWindowDays": 120}}'
 *
 * # Test Config B (180j) - Auto-découverte 50 clients
 * curl -X POST http://localhost:3000/backtest/aggregate \
 *   -H "Content-Type: application/json" \
 *   -d '{"config": {"analysisWindowDays": 180}}'
 *
 * # Comparer les 2 JSON résultants pour voir quelle config performe mieux
 * ```
 */
backtestAggregateRoute.post("/", async (c) => {
    try {
        const body = await c.req.json();
        const { clientIds, autoDiscoverCount, daysBeforePrediction, config } = body;
        // Validation
        if (clientIds && (!Array.isArray(clientIds) || clientIds.length === 0)) {
            return c.json({ error: "clientIds must be a non-empty array if provided" }, 400);
        }
        if (clientIds && clientIds.some((id) => typeof id !== 'number')) {
            return c.json({ error: "All clientIds must be numbers" }, 400);
        }
        // Préparer le payload pour la task
        const payload = {
            clientIds: clientIds ?? undefined,
            autoDiscoverCount: autoDiscoverCount ?? 50,
            daysBeforePrediction: daysBeforePrediction ?? 1,
            config: config ?? undefined,
        };
        const mode = payload.clientIds ? "explicit" : "auto-discovery";
        const clientCountInfo = payload.clientIds
            ? `${payload.clientIds.length} clients (explicit)`
            : `${payload.autoDiscoverCount} clients (auto-discovery)`;
        console.log(`🚀 Triggering backtest-aggregate task: ${clientCountInfo}`);
        // Déclencher la task Trigger.dev
        const handle = await tasks.trigger("backtest-aggregate", payload);
        console.log(`✅ Backtest aggregate task triggered successfully: ${handle.id}`);
        return c.json({
            success: true,
            taskId: handle.id,
            mode,
            clientCount: payload.clientIds?.length ?? payload.autoDiscoverCount,
            daysBeforePrediction: payload.daysBeforePrediction,
            message: `Backtest aggregate task triggered (${mode}: ${clientCountInfo})`,
            note: "Check Trigger.dev dashboard for task progress and results",
        });
    }
    catch (error) {
        console.error("❌ Failed to trigger backtest-aggregate task:", error);
        return c.json({
            error: "Failed to trigger backtest aggregate task",
            message: error.message,
        }, 500);
    }
});
export default backtestAggregateRoute;
