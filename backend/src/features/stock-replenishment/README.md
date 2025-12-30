# Stock Replenishment Feature

Calculates replenishment quantities using LLM predictions with fallback to median.

**[Full documentation](../../../../docs/features/stock-replenishment.md)**

## Quick Start

```typescript
import { calculateReplenishmentNeeds } from './stock-replenishment.service';

const needs = await calculateReplenishmentNeeds({
  clientId: 123,
  replenishmentThreshold: 30
});
// → Products to order with quantities
```

## API

```typescript
calculateReplenishmentNeeds(params: {
  clientId: number;
  analysisEndDate?: string;
  replenishmentThreshold?: number;
}): Promise<ProductStockStatus[]>
```

## LLM vs Fallback

- **2+ orders**: Use Claude predictions
- **1 order**: Use median fallback
- **0 orders**: Excluded

## Files

- `stock-replenishment.service.ts` - Main service
- `order-history/` - Order history retrieval
- `utils/` - Calculation utilities

---

**See**: [Complete documentation](../../../../docs/features/stock-replenishment.md)
