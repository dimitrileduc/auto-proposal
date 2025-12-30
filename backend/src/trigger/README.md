# Trigger.dev Tasks

4 async tasks orchestrated via Trigger.dev.

## Quick Navigation

| Task | Purpose | Doc |
|------|---------|-----|
| **orchestrator** | Full workflow (detect → quote) | [Read](../../docs/tasks/orchestrator.md) |
| **client-proposal** | Process single client | [Read](../../docs/tasks/client-proposal.md) |
| **backtest-client** | Test predictions vs reality | [Read](../../docs/tasks/backtest-client.md) |
| **backtest-aggregate** | Batch backtest + stats | [Read](../../docs/tasks/backtest-aggregate.md) |

## Architecture

```
orchestrator.task
  ├── Fetch inactive clients
  └── Batch trigger client-proposal tasks (500/batch)

backtest-aggregate.task
  ├── Resolve client list
  └── Batch trigger backtest-client tasks

client-proposal.task
  ├── Stock analysis
  ├── Pricing
  ├── Quote creation
  └── Reports

backtest-client.task
  ├── Fetch actual order
  ├── Time travel to cutoff date
  ├── Trigger client-proposal (predictions)
  └── Compare & report
```

## Main Flow

```typescript
// 1. Full workflow
orchestratorTask.trigger({
  config: { dateMin, dateMax, ... }
});

// 2. Single client
clientProposalTask.trigger({
  client: { id, name, ... },
  config: { ... }
});

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
- Max attempts: 3
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

- `orchestrator.task.ts` - Main workflow
- `client-proposal.task.ts` - Single client
- `backtest-client.task.ts` - Client backtest
- `backtest-aggregate.task.ts` - Batch backtest
- `index.ts` - Exports

---

**See**: [Full docs](../../docs/tasks/) · [Features](../features/)
