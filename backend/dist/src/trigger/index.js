/**
 * Export centralisé de toutes les tâches Trigger.dev
 *
 * Chaque tâche est définie dans son propre fichier pour une meilleure organisation
 */
export { clientProposalTask } from "./client-proposal.task";
export { orchestratorTask } from "./orchestrator.task";
export { backtestClientTask } from "./backtest-client.task";
export { backtestAggregateTask } from "./backtest-aggregate.task";
// Future: export { autoProposalCron } from "./auto-proposal-cron.task";
