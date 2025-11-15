/**
 * Route HTTP pour déclencher la task Trigger.dev "auto-proposal-orchestrator"
 *
 * POST /orchestrator-task - Déclencher l'orchestrateur pour tous les clients inactifs
 */
import { Hono } from "hono";
import { tasks } from "@trigger.dev/sdk/v3";
const orchestratorTaskRoute = new Hono();
/**
 * POST /orchestrator-task
 * Déclenche la task Trigger.dev orchestrator pour traiter tous les clients inactifs
 *
 * Body (tous optionnels):
 * {
 *   "config": {
 *     // Période d'inactivité
 *     "dateMin": "010925",                    // Date min inactivité. Formats: "JJMMAA", "JJ/MM/AA", "JJ/MM/AAAA", "AAAA-MM-JJ". Default: config ou aujourd'hui - 30j
 *     "dateMax": "011025",                    // Date max inactivité (= référence analyse stock). Default: config ou aujourd'hui
 *
 *     // Analyse stock
 *     "analysisWindowDays": 180,              // Jours d'historique avant dateMax. Default: config (180)
 *     "targetCoverage": 14,                   // Jours de couverture. Default: config (14)
 *     "leadTime": 5,                          // Délai livraison. Default: config (5)
 *     "moqMinimum": 300,                      // MOQ en euros. Default: config (300)
 *
 *     // Workflow
 *     "maxClientsToAnalyze": "all",           // "all" ou nombre (debug). Default: "all"
 *     "generateReports": true,                // Génère rapports markdown. Default: config (true)
 *     "skipOdooQuoteGeneration": false,       // Mode TEST (pas de devis). Default: false
 *     "forceReanalysis": false                // Réanalyse clients avec tag 82. Default: config (false)
 *   }
 * }
 */
orchestratorTaskRoute.post("/", async (c) => {
    try {
        const body = await c.req.json().catch(() => ({}));
        const { config = {} } = body;
        // Préparer le payload pour la task
        const payload = {
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
        const handle = await tasks.trigger("auto-proposal-orchestrator", payload);
        console.log(`✅ Task triggered successfully: ${handle.id}`);
        return c.json({
            success: true,
            taskId: handle.id,
            config: payload.config,
            message: "Auto-proposal orchestrator task triggered",
        });
    }
    catch (error) {
        console.error("❌ Failed to trigger auto-proposal-orchestrator task:", error);
        return c.json({
            error: "Failed to trigger task",
            message: error.message,
        }, 500);
    }
});
export default orchestratorTaskRoute;
