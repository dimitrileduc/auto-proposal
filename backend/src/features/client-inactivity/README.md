# Client Inactivity Feature

Identifies clients who haven't ordered in a given period.

**[Full documentation](../../../../docs/features/client-inactivity.md)**

## Quick Start

```typescript
import { getInactiveClients } from './inactivity.service';

const inactive = await getInactiveClients({
  dateMin: "2025-09-26",
  dateMax: "2025-10-26"
});
// → List of inactive clients
```

## API

```typescript
getInactiveClients(params: {
  dateMin: string;
  dateMax: string;
  excludeAutoProposalTagId?: number;
  excludedPartnerTagId?: number;
}): Promise<InactiveClient[]>
```

## Files

- `inactivity.service.ts` - Main service
- `inactivity.types.ts` - Types
- `transform.utils.ts` - Data transformation

---

**See**: [Complete documentation](../../../../docs/features/client-inactivity.md)
