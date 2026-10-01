/**
 * Write mode of the scheduled run, from the Trigger.dev environment
 *
 * Only the production environment writes in Odoo (constitution III). A `trigger.dev dev`
 * left running on a Friday morning, or a staging deployment, runs in test mode.
 *
 * @module trigger/scheduled-mode
 */

/**
 * @param environmentType - ctx.environment.type: "PRODUCTION", "STAGING", "DEVELOPMENT" or "PREVIEW"
 * @returns skipOdooWrite for the scheduled orchestrator run
 */
export function scheduledSkipOdooWrite(environmentType: string): boolean {
  return environmentType !== "PRODUCTION";
}
