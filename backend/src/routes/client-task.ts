/**
 * Route HTTP pour déclencher la task Trigger.dev "client-proposal"
 *
 * POST /client-task - Déclencher la task pour un client spécifique
 */
import { Hono } from "hono";
import { tasks } from "@trigger.dev/sdk/v3";
import { autoProposalConfig } from "../config/auto-proposal";
import type { ClientTaskPayload } from "../shared/types";
import type { clientProposalTask } from "../trigger/client-proposal.task";

const clientTask = new Hono();

/**
 * POST /client-task
 * Déclenche la task Trigger.dev pour traiter un client spécifique
 *
 * Body:
 * {
 *   "clientId": 3749,  // ID du client à traiter
 *   "clientName": "ALAVI",  // Optionnel, pour affichage
 *   "clientEmail": "lvdp@alavi.be",  // Optionnel
 *   "config": {  // Optionnel, overrides des paramètres
 *     "analysisWindowDays": 120,
 *     "analysisEndDate": "2025-10-26 23:59:59",  // Date de référence pour l'analyse d'historique (format: "YYYY-MM-DD HH:MM:SS"). Default: aujourd'hui
 *     "targetCoverage": 25,
 *     "leadTime": 5,
 *     "moqMinimum": 300,
 *     "skipOdooQuoteGeneration": false,  // Si false, crée les devis Odoo (défaut: true = skip)
 *     "shouldGenerateReport": true  // Si true, génère les rapports markdown pour les clients avec risk. Default: true
 *   }
 * }
 */
clientTask.post("/", async (c) => {
  try {
    const body = await c.req.json();
    const { clientId, clientName, clientEmail, config = {} } = body;

    if (!clientId) {
      return c.json({ error: "clientId is required" }, 400);
    }

    // Préparer le payload pour la task
    const payload: ClientTaskPayload = {
      client: {
        id: clientId,
        name: clientName || `Client ${clientId}`,
        email: clientEmail || null,
      },
      config: {
        analysisWindowDays: config.analysisWindowDays ?? autoProposalConfig.analysisWindowDays,
        analysisEndDate: config.analysisEndDate,
        targetCoverage: config.targetCoverage ?? autoProposalConfig.targetCoverage,
        leadTime: config.leadTime ?? autoProposalConfig.leadTime,
        moqMinimum: config.moqMinimum ?? autoProposalConfig.pricing.minimumOrderAmount,
        skipOdooQuoteGeneration: config.skipOdooQuoteGeneration ?? true,
        shouldGenerateReport: config.shouldGenerateReport,
      },
    };

    console.log(`🚀 Triggering client-proposal task for client ${payload.client.name} (ID: ${payload.client.id})`);

    // Déclencher la task Trigger.dev
    const handle = await tasks.trigger<typeof clientProposalTask>(
      "client-proposal",
      payload
    );

    console.log(`✅ Task triggered successfully: ${handle.id}`);

    return c.json({
      success: true,
      taskId: handle.id,
      client: payload.client,
      config: payload.config,
      message: `Task triggered for client ${payload.client.name}`,
    });
  } catch (error: any) {
    console.error("❌ Failed to trigger client-proposal task:", error);
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
