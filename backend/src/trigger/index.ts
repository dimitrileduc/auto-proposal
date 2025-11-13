/**
 * Export centralisé de toutes les tâches Trigger.dev
 *
 * Chaque tâche est définie dans son propre fichier pour une meilleure organisation
 */

export { clientProposalTask } from "./client-proposal.task";
export type { ClientProposalTaskResult } from "./client-proposal.task";

export { orchestratorTask } from "./orchestrator.task";
export type { OrchestratorTaskResult } from "./orchestrator.task";

export { backtestClientTask } from "./backtest-client.task";
export type { BacktestClientTaskResult } from "./backtest-client.task";

export { backtestAggregateTask } from "./backtest-aggregate.task";
export type { BacktestAggregateResult } from "./backtest-aggregate.task";

// Future: export { autoProposalCron } from "./auto-proposal-cron.task";