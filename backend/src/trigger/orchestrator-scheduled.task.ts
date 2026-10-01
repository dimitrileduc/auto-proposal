/**
 * Scheduled orchestrator task - runs every Friday at 7:00 AM Paris time
 *
 * Triggers the main orchestrator workflow every Friday morning.
 *
 * @module trigger/orchestrator-scheduled
 */

import { schedules } from "@trigger.dev/sdk/v3";
import { orchestratorTask } from "./orchestrator.task";
import { autoProposalConfig } from "../config/auto-proposal";
import { scheduledSkipOdooWrite } from "./scheduled-mode";

/**
 * Weekly scheduled orchestrator - PRODUCTION
 *
 * Runs every Friday at 7:00 AM Europe/Paris timezone.
 * Processes inactive clients and creates a "Suggestion commande" activity in Odoo
 * for each eligible client (no quote is created). Only this task writes in Odoo, and only
 * when it runs in the Trigger.dev production environment: in dev or staging it stays in test mode.
 */
export const weeklyOrchestratorSchedule = schedules.task({
  id: "orchestrator-daily-7am",
  cron: {
    pattern: "0 7 * * 5",
    timezone: "Europe/Paris",
  },
  // No retry: a retry would trigger a new orchestrator run, replay the AI for every client
  // and report the clients already served as "activité déjà ouverte"
  retry: {
    maxAttempts: 1,
  },
  run: async (payload, { ctx }) => {
    const skipOdooWrite = scheduledSkipOdooWrite(ctx.environment.type);

    console.log(`\n========================================`);
    console.log(`SCHEDULED ORCHESTRATOR RUN - ${skipOdooWrite ? "TEST MODE (no write in Odoo)" : "PRODUCTION"}`);
    console.log(`Trigger.dev environment: ${ctx.environment.type}`);
    console.log(`Time: ${payload.timestamp}`);
    console.log(`Last run: ${payload.lastTimestamp || "First run"}`);
    console.log(`========================================\n`);

    const result = await orchestratorTask.triggerAndWait({
      config: {
        // Writes in Odoo only from the production environment
        skipOdooWrite,
        generateReports: true,
        forceReanalysis: false,
        companyId: autoProposalConfig.defaultCompanyId,
      },
    });

    if (result.ok) {
      console.log(`\n✅ Orchestrator completed successfully`);
      const statistics = result.output.statistics;
      console.log(`   Clients processed: ${statistics.clientsProcessed}`);
      console.log(`   Activities created: ${statistics.activitiesCreated}`);
      console.log(`   Opportunities created: ${statistics.leadsCreated}`);
      console.log(`   Clients skipped: ${statistics.clientsSkipped}`);
      console.log(`   Errors: ${statistics.clientsFailed}`);

      return {
        success: true,
        statistics: result.output.statistics,
        executionTime: result.output.executionTime,
      };
    } else {
      console.error(`\n❌ Orchestrator failed:`, result.error);
      throw new Error(`Orchestrator failed: ${JSON.stringify(result.error)}`);
    }
  },
});
