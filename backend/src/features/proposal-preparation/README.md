# Proposal Preparation Feature

Enriches quantities with pricing and applies MOQ adjustment strategy.

**[Full documentation](../../../../docs/features/proposal-preparation.md)**

## Quick Start

```typescript
import { prepareProposal } from './proposal-preparation.service';

const proposal = await prepareProposal({
  clientId: 123,
  products: stockNeeds,
  moqMinimum: 300
});
// → Proposal with prices and MOQ applied
```

## API

```typescript
prepareProposal(params: {
  clientId: number;
  products: ProductStockStatus[];
  moqMinimum?: number;
  analysisEndDate?: string;
}): Promise<ProposalPreparationResult>
```

## Process

1. Add historical pricing (last order price)
2. Calculate subtotals
3. Apply MOQ adjustment if needed (round-robin strategy)

## Configuration

```typescript
moqMinimum: 300  // EUR threshold
```

## Files

- `proposal-preparation.service.ts` - Main service
- `pricing/pricing.service.ts` - Price enrichment
- `moq/moq-adjustment.service.ts` - MOQ strategy

---

**See**: [Complete documentation](../../../../docs/features/proposal-preparation.md)
