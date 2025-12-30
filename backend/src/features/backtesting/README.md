# Backtesting Feature

Validates prediction quality by comparing system predictions vs actual orders.

**[Full documentation](../../../../docs/features/backtesting.md)**

## Quick Start

```typescript
import { compareSystemPredictionVsRealOrder } from './comparison.service';

const result = await compareSystemPredictionVsRealOrder({
  systemProducts: prediction,
  realOrderProducts: actual
});
// → Metrics: precision, recall, F1, MAE, WMAPE
```

## Metrics

| Metric | Meaning |
|--------|---------|
| **Precision** | % correct of predicted |
| **Recall** | % of true orders detected |
| **F1-Score** | Balance between P & R |
| **MAE** | Quantity error (units) |
| **WMAPE** | Weighted error (%) |

## Segmentation

Results by confidence level:
- **Clean**: 2+ orders, medium/high confidence
- **Low**: 1 order, low confidence
- **All**: Combined

## Files

- `comparison.service.ts` - Comparison logic
- `client-discovery.service.ts` - Top clients for backtesting
- `statistics.service.ts` - Metrics aggregation
- `backtest.types.ts` - Types

---

**See**: [Complete documentation](../../../../docs/features/backtesting.md)
