# Proposal Generation Feature

Creates Odoo draft quotes from prepared proposals.

**[Full documentation](../../../../docs/features/proposal-generation.md)**

## Quick Start

```typescript
import { generateQuote } from './proposal-generation.service';

const quote = await generateQuote({
  clientId: 123,
  proposalData: proposal,
  skipOdooCreation: false
});
// → Odoo draft quote created (e.g., S39591)
```

## API

```typescript
generateQuote(params: {
  clientId: number;
  proposalData: ProposalPreparationResult;
  skipOdooCreation?: boolean;
}): Promise<QuoteCreationResult>
```

## Product Segmentation

- **Base Products**: 2+ orders, medium/high confidence → sale.order
- **Optional Products**: 1 order, low confidence → sale.order.option

## Configuration

```typescript
autoProposalTagId: 82  // Tag for system-generated quotes
```

## Files

- `proposal-generation.service.ts` - Main service
- `proposal-generation.types.ts` - Types

---

**See**: [Complete documentation](../../../../docs/features/proposal-generation.md)
