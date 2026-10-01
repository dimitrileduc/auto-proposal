# Trigger.dev Tasks

Async tasks orchestrated via Trigger.dev, plus the Friday schedule.

## Quick Navigation

| Task | Purpose | Doc |
|------|---------|-----|
| **orchestrator-daily-7am** | Friday 7:00 Europe/Paris, the only run that writes (`skipOdooWrite: false`) | [Read](../../../docs/tasks/orchestrator.md) |
| **orchestrator** | Full workflow (detect → "Suggestion commande" activities) | [Read](../../../docs/tasks/orchestrator.md) |
| **client-proposal** | Process single client | [Read](../../../docs/tasks/client-proposal.md) |
| **backtest-client** | Test predictions vs reality | [Read](../../../docs/tasks/backtest-client.md) |
| **backtest-aggregate** | Batch backtest + stats | [Read](../../../docs/tasks/backtest-aggregate.md) |

## Architecture

```
orchestrator.task
  ├── V1: check the "Suggestion commande" activity type (abort if invalid)
  ├── Fetch inactive clients
  ├── Batch eligibility pre-filter (salesperson, open activity, follow-up < 21 days)
  ├── Batch trigger client-proposal tasks for eligible clients (500/batch)
  └── Outcomes + global report (skipped clients included)

backtest-aggregate.task
  ├── Resolve client list
  └── Batch trigger backtest-client tasks

client-proposal.task
  ├── Stock analysis
  ├── Pricing
  ├── Activity: eligibility re-check, then opportunity (if none open) + activity in Odoo
  │   (reads only when skipOdooWrite, no write when eligibilityCheck is false)
  └── Reports

backtest-client.task
  ├── Fetch actual order
  ├── Time travel to cutoff date
  ├── Trigger client-proposal (skipOdooWrite: true, eligibilityCheck: false)
  └── Compare & report
```

## Main Flow

```typescript
// 1. Full workflow (test mode unless skipOdooWrite: false)
orchestratorTask.trigger({
  config: { dateMin, dateMax, companyId, ... }
});
// → { mode, statistics: { activitiesCreated, leadsCreated, wouldCreate, clientsSkipped, clientsFailed, ... }, outcomes }

// 2. Single client
clientProposalTask.trigger({
  client: { id, name, email },
  config: { skipOdooWrite: true, eligibilityCheck: true, runDate, ... }
});
// → summary.outcome: created | would_create | skipped | error

// 3. Test one client
backtestClientTask.trigger({
  clientId: 123,
  orderName: "S39729"
});

// 4. Batch test
backtestAggregateTask.trigger({
  autoDiscoverCount: 50
});
```

## Retry Logic

All tasks configured with:
- Max attempts: 3 for client tasks; 1 for the orchestrator and the Friday schedule (a retry would replay the AI and distort the report)
- Exponential backoff: 1s → 10s

## Exports

```typescript
export {
  orchestratorTask,
  clientProposalTask,
  backtestClientTask,
  backtestAggregateTask
};
```

## Files

- `orchestrator-scheduled.task.ts` - Friday schedule (writes in Odoo only from the production environment)
- `scheduled-mode.ts` - Write mode of the schedule from the Trigger.dev environment
- `orchestrator.task.ts` - Main workflow
- `client-proposal.task.ts` - Single client
- `backtest-client.task.ts` - Client backtest
- `backtest-aggregate.task.ts` - Batch backtest
- `index.ts` - Exports

---

**See**: [Full docs](../../../docs/tasks/) · [Features](../features/)
