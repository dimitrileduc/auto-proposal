/**
 * Scheduled orchestrator task - runs daily at 7:00 AM Paris time
 *
 * Triggers the main orchestrator workflow on a daily schedule.
 *
 * @module trigger/orchestrator-scheduled
 */

import { schedules } from "@trigger.dev/sdk/v3";
import { orchestratorTask } from "./orchestrator.task";
import { autoProposalConfig } from "../config/auto-proposal";

/**
 * Daily scheduled orchestrator - PRODUCTION
 *
 * Runs every day at 7:00 AM Europe/Paris timezone.
 * Processes inactive clients and generates Odoo quotes.
 */
export const dailyOrchestratorSchedule = schedules.task({
  id: "orchestrator-daily-7am",
  cron: {
    pattern: "0 7 * * *",
    timezone: "Europe/Paris",
  },
  run: async (payload) => {
    console.log(`\n========================================`);
    console.log(`SCHEDULED ORCHESTRATOR RUN - PRODUCTION`);
    console.log(`Time: ${payload.timestamp}`);
    console.log(`Last run: ${payload.lastTimestamp || "First run"}`);
    console.log(`========================================\n`);

    const result = await orchestratorTask.triggerAndWait({
      config: {
        // PRODUCTION: All inactive clients
        skipOdooQuoteGeneration: false,
        generateReports: true,
        forceReanalysis: false,
        companyId: autoProposalConfig.defaultCompanyId,
      },
    });

    if (result.ok) {
      console.log(`\n✅ Orchestrator completed successfully`);
      console.log(`   Clients processed: ${result.output.statistics.clientsProcessed}`);
      console.log(`   Quotes generated: ${result.output.statistics.quotesGenerated}`);
      console.log(`   Total value: ${result.output.statistics.totalValue}€`);

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
