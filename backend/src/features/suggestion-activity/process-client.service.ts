/**
 * "Suggestion commande" step of a client, after the AI
 *
 * Dependencies are injected so the sequence can be tested without Odoo nor AI.
 *
 * @module features/suggestion-activity/process-client
 */
import type { OdooClient } from "../../infrastructure/odoo/clients/odoo-client.types";
import type { ProductWithCurrentPrice } from "../proposal-preparation/proposal-preparation.types";
import { autoProposalConfig } from "../../config/auto-proposal";
import { decideEligibility, followUpWindowStart, toSkippedOutcome } from "./eligibility.utils";
import { writeSuggestion } from "./suggestion-activity.service";
import { buildActivityNote, splitProducts } from "./activity-note.utils";
import { toPartnerContext } from "./outcome.utils";
import type { SuggestionActivityOutcome } from "./suggestion-activity.types";

/**
 * Input of the activity step for one client
 */
export interface ProcessClientInput {
  clientId: number;
  clientName: string;
  /** Suggested products (final proposal) */
  products: ProductWithCurrentPrice[];
  companyId: number;
  /** Run day "YYYY-MM-DD" (Europe/Paris): activity deadline */
  runDate: string;
  /** Test mode: reads only, "would_create" outcome */
  skipOdooWrite: boolean;
  /** false (backtest): no eligibility decision and never any write */
  eligibilityCheck: boolean;
  /** mail.activity.type id of "Suggestion commande" */
  activityTypeId: number;
  /** Minimum days between two follow-ups (default: config) */
  delayDays?: number;
}

/**
 * Odoo calls used by the activity step
 */
export type ProcessClientDeps = Pick<
  OdooClient,
  | "getPartnerSalesContext"
  | "getPartnerLeadIds"
  | "findOpenSuggestionActivity"
  | "findLastSuggestionTrace"
  | "findOldestOpenLead"
  | "findLastConfirmedOrderDate"
  | "getTeamCompanies"
  | "createLead"
  | "createActivity"
>;

/**
 * Result of the activity step
 */
export interface ProcessClientResult {
  outcome: SuggestionActivityOutcome;
  /** HTML description of the activity (created or that would have been created) */
  activityNote?: string;
}

/**
 * Decides and writes the "Suggestion commande" activity of a client
 *
 * Sequence: no product → skipped; re-check of the eligibility (Q1..Q4) right before
 * writing; oldest open opportunity (Q5) and last confirmed order (Q6) for the description;
 * then "would_create" in test mode, or creation of the opportunity if needed and of the
 * activity. Read errors propagate (Trigger.dev retry).
 *
 * @param input - Client, products and run options
 * @param deps - Odoo client (or a subset of it)
 * @returns Outcome of the client
 */
export async function processClientSuggestion(
  input: ProcessClientInput,
  deps: ProcessClientDeps
): Promise<ProcessClientResult> {
  if (input.products.length === 0) {
    return { outcome: toSkippedOutcome({ eligible: false, reason: "no_products" }) };
  }

  if (input.eligibilityCheck && !input.activityTypeId) {
    throw new Error(
      "Suggestion activity type id is not configured (ODOO_SUGGESTION_ACTIVITY_TYPE_ID or autoProposalConfig.activity.suggestionActivityTypeId)"
    );
  }

  const delayDays = input.delayDays ?? autoProposalConfig.activity.followUpDelayDays;

  // Q1 + Q1b: salesperson and commercial partner, also needed without eligibility check
  const sales = await deps.getPartnerSalesContext(input.clientId);

  if (input.eligibilityCheck) {
    // Q2..Q4: same rule as the pre-filter, re-read for this client right before writing
    // (Trigger.dev retry, parallel tasks, task triggered alone by the route)
    const leadIds = await deps.getPartnerLeadIds(sales.commercialPartnerId, input.companyId);
    const [openActivity, lastTrace] =
      leadIds.length === 0
        ? [null, null]
        : await Promise.all([
            deps.findOpenSuggestionActivity(leadIds, input.activityTypeId),
            deps.findLastSuggestionTrace(leadIds, input.activityTypeId, followUpWindowStart(input.runDate, delayDays)),
          ]);

    const ctx = toPartnerContext(sales, input.companyId, leadIds);
    ctx.openActivity = openActivity ?? undefined;
    ctx.lastFollowUp = lastTrace ? { date: lastTrace.date, messageId: lastTrace.id, leadId: lastTrace.leadId } : undefined;

    const decision = decideEligibility(ctx, input.runDate, delayDays);
    if (!decision.eligible) {
      return { outcome: toSkippedOutcome(decision) };
    }
  }

  // Q5: opportunity carrying the activity (none → to be created); Q6: last confirmed order,
  // first line of the description. Independent reads, done in test mode too.
  const [lead, lastOrderDate] = await Promise.all([
    deps.findOldestOpenLead(sales.commercialPartnerId, input.companyId),
    deps.findLastConfirmedOrderDate(input.clientId, input.companyId),
  ]);
  const { usual, optional } = splitProducts(input.products);
  const note = buildActivityNote({ lastOrderDate, usual, optional }, autoProposalConfig.activity);

  if (input.skipOdooWrite || !input.eligibilityCheck) {
    return {
      outcome: {
        kind: "would_create",
        leadId: lead?.id,
        leadName: lead?.name ?? `${autoProposalConfig.activity.leadNamePrefix} ${input.clientName}`,
        leadCreated: lead === null,
        salespersonId: sales.salesperson?.id,
        salespersonName: sales.salesperson?.name,
      },
      activityNote: note,
    };
  }

  // The eligibility check above guarantees an active salesperson
  const salesperson = sales.salesperson;
  if (!salesperson) {
    throw new Error(`Client ${input.clientId} passed the eligibility check without a salesperson`);
  }

  const outcome = await writeSuggestion(deps, {
    ctx: { ...sales, salesperson },
    lead,
    clientName: input.clientName,
    companyId: input.companyId,
    typeId: input.activityTypeId,
    note,
    runDate: input.runDate,
  });

  return { outcome, activityNote: note };
}
