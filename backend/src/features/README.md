# Features

5 core modules that make up the auto-proposal system.

## Quick Navigation

| Feature | Purpose | Doc |
|---------|---------|-----|
| **client-inactivity** | Detect inactive clients | [Read](../../docs/features/client-inactivity.md) |
| **stock-replenishment** | Calculate replenishment quantities | [Read](../../docs/features/stock-replenishment.md) |
| **proposal-preparation** | Add pricing & MOQ adjustments | [Read](../../docs/features/proposal-preparation.md) |
| **proposal-generation** | Create Odoo draft quotes | [Read](../../docs/features/proposal-generation.md) |
| **backtesting** | Validate prediction quality | [Read](../../docs/features/backtesting.md) |

## Architecture

Each feature follows a consistent pattern:

```
feature/
├── service.ts          # Main business logic
├── types.ts            # TypeScript interfaces
└── [utils/]           # Helper functions
```

## Main Flow

```
Client Inactivity
  ↓
Stock Replenishment
  ↓
Proposal Preparation
  ↓
Proposal Generation
  ↓
Backtesting (validation)
```

## Usage

Features are called from [Trigger.dev tasks](../trigger/README.md):

```typescript
import { calculateReplenishmentNeeds } from './stock-replenishment/stock-replenishment.service';
import { prepareProposal } from './proposal-preparation/proposal-preparation.service';

const needs = await calculateReplenishmentNeeds({ clientId: 123 });
const proposal = await prepareProposal({ clientId: 123, products: needs });
```

---

**See**: [Full docs](../../docs/) · [Tasks](../trigger/)
