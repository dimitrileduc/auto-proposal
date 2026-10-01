# Suggestion Activity Feature

Creates the "Suggestion commande" CRM activity in Odoo for each eligible inactive client, instead of a draft quote.

**[Full documentation](../../../../docs/features/suggestion-activity.md)**

## Quick Start

```typescript
import { processClientSuggestion } from './process-client';

const { outcome, activityNote } = await processClientSuggestion(
  {
    clientId: 123,
    clientName: "ACME",
    products: proposalFinal.products,
    companyId: 3,
    runDate: "2026-10-02",          // Europe/Paris
    skipOdooWrite: true,            // test mode: reads only
    eligibilityCheck: true,         // false in backtest: never writes
    activityTypeId: autoProposalConfig.activity.suggestionActivityTypeId,
  },
  odooClient
);
// → outcome: created | would_create | skipped | error
```

## API

```typescript
// Batch pre-filter, orchestrator, before the AI (P1..P5, fixed number of Odoo calls)
buildPartnerContexts(clientIds, companyId, typeId, runDate, odoo, delayDays?): Promise<Map<number, PartnerContext>>
prefilterEligibility(contexts, runDate, delayDays): PrefilterResult
selectClientsToTrigger(inactiveClients, prefilter): { toTrigger, skippedOutcomes }

// Single rule, used by the pre-filter and the task re-check
decideEligibility(ctx, runDate, delayDays): EligibilityDecision
isWithinFollowUpDelay(lastDate, runDate, delayDays): boolean
followUpWindowStart(runDate, delayDays): string

// Client task, after the AI (re-check Q1..Q4, Q5, Q6, then Q8/Q9)
processClientSuggestion(input, deps): Promise<{ outcome; activityNote? }>

// Odoo writes and run-start check
writeSuggestion(odoo, params): Promise<SuggestionActivityOutcome>
verifySuggestionActivityType(odoo, typeId): Promise<void>   // V1, throws if invalid

// Description (pure)
splitProducts(products): { usual; optional }
buildActivityNote(input, labels): string                    // HTML
activityNoteToMarkdown(html): string                        // client report
```

## Eligibility (in order)

1. No salesperson → `no_salesperson` ("pas de vendeur")
2. Archived salesperson → `inactive_salesperson` ("vendeur inactif")
3. Salesperson without access to the analysed company (FOODPRINT) → `salesperson_no_company_access` ("vendeur sans accès à FOODPRINT")
4. Open "Suggestion commande" activity on an opportunity of the client or its contacts → `open_activity`
5. Follow-up (activity done or vanished) less than 21 calendar days ago → `recent_follow_up`, with its date
6. No suggested product (after the AI) → `no_products`

A created opportunity only gets a team of FOODPRINT or without company (client team first, then salesperson team);
Odoo refuses a team of another company.

## Writes (real mode only)

- Opportunity (`crm.lead`) only if the client has no open one: "Suggestion commande <client>", salesperson, client team (else salesperson team), analysed company.
- Activity (`mail.activity`) on the oldest open opportunity: summary "Suggestion commande <client>", HTML description, deadline = run day, assigned to the salesperson. Sent without `res_model_id`, with `context: { default_res_model: "crm.lead" }` (the API account cannot read `ir.model`).
- Write errors → `error` outcome (`leadCreatedId` if the opportunity was created without its activity). Read errors → thrown (Trigger.dev retry).

## Configuration

```typescript
autoProposalConfig.activity = {
  suggestionActivityTypeId,   // ODOO_SUGGESTION_ACTIVITY_TYPE_ID, 0 = not configured
  followUpDelayDays: 21,
  summaryPrefix, leadNamePrefix, introUsual, introOptional,
}
```

## Files

- `suggestion-activity.types.ts` - Outcome, skip reasons, French labels
- `eligibility.utils.ts` - Eligibility rule and 21-day delay
- `prefilter.service.ts` - Batch pre-filter (orchestrator)
- `process-client.service.ts` - Activity step of a client (dependencies injected)
- `suggestion-activity.service.ts` - Odoo writes, V1 check
- `activity-note.utils.ts` - Activity description
- `*.test.ts` - Unit tests (vitest)

The Odoo side (activity type, dedicated account, closing on quote creation, trace of vanished activities) is the module `odoo/addons/moutarderie_suggestion_commande/`.

---

**See**: [Complete documentation](../../../../docs/features/suggestion-activity.md)
