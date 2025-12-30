/**
 * Centralized exports for all Trigger.dev tasks
 *
 * Each task is defined in its own file for better organization.
 *
 * @module trigger
 */

export { clientProposalTask } from "./client-proposal.task";
export type { ClientProposalTaskResult } from "./client-proposal.task";

export { orchestratorTask } from "./orchestrator.task";
export type { OrchestratorTaskResult } from "./orchestrator.task";

export { backtestClientTask } from "./backtest-client.task";
export type { BacktestClientTaskResult } from "./backtest-client.task";

export { backtestAggregateTask } from "./backtest-aggregate.task";
export type { BacktestAggregateResult } from "./backtest-aggregate.task";