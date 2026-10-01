/**
 * Batch eligibility pre-filter, run by the orchestrator before the AI
 *
 * Reads Odoo in a fixed number of calls for all inactive clients of the run,
 * then applies the eligibility rule to each client. Only eligible clients
 * trigger a client task; the others go straight to the run report.
 *
 * @module features/suggestion-activity/prefilter
 */
import type { OdooClient } from "../../infrastructure/odoo/clients/odoo-client.types";
import type { InactiveClient } from "../client-inactivity/inactivity.types";
import { autoProposalConfig } from "../../config/auto-proposal";
import { decideEligibility, followUpWindowStart, toSkippedOutcome } from "./eligibility.utils";
import { toPartnerContext } from "./outcome.utils";
import type {
  EligibilityDecision,
  PartnerContext,
  SuggestionActivityOutcome,
} from "./suggestion-activity.types";

/**
 * Odoo calls used by the pre-filter
 */
export type PrefilterOdoo = Pick<
  OdooClient,
  | "getSalesContexts"
  | "getLeadIdsByCommercialPartners"
  | "findOpenSuggestionActivities"
  | "findSuggestionTracesSince"
>;

/**
 * Result of the pre-filter
 */
export interface PrefilterResult {
  eligible: number[];
  skipped: Array<{ clientId: number; decision: Extract<EligibilityDecision, { eligible: false }> }>;
}

/**
 * Reads the eligibility context of all clients in batch (P1 to P5)
 *
 * The number of Odoo calls does not depend on the number of clients:
 * salespeople (P1 + P2), opportunities (P3 + P3b), open activities (P4),
 * follow-up traces since runDate − delayDays (P5).
 *
 * @param clientIds - Inactive clients of the run
 * @param companyId - Analysed company
 * @param typeId - mail.activity.type id of "Suggestion commande"
 * @param runDate - Run day "YYYY-MM-DD"
 * @param odoo - Odoo client
 * @param delayDays - Minimum days between two follow-ups
 * @returns Context by client id (clients missing in Odoo are absent)
 */
export async function buildPartnerContexts(
  clientIds: number[],
  companyId: number,
  typeId: number,
  runDate: string,
  odoo: PrefilterOdoo,
  delayDays: number = autoProposalConfig.activity.followUpDelayDays
): Promise<Map<number, PartnerContext>> {
  const contexts = new Map<number, PartnerContext>();

  if (clientIds.length === 0) {
    return contexts;
  }

  // P1 + P2: salesperson and team of every client
  const salesContexts = await odoo.getSalesContexts(clientIds);

  for (const clientId of clientIds) {
    const sales = salesContexts.get(clientId);
    if (!sales) continue;

    contexts.set(clientId, toPartnerContext(sales, companyId));
  }

  // P3 + P3b: opportunities of the clients and their contacts, archived included
  const commercialPartnerIds = [...new Set([...contexts.values()].map((ctx) => ctx.commercialPartnerId))];
  const leadsByPartner = await odoo.getLeadIdsByCommercialPartners(commercialPartnerIds, companyId);

  const clientByLead = new Map<number, PartnerContext>();
  for (const ctx of contexts.values()) {
    ctx.leadIds = [...(leadsByPartner.get(ctx.commercialPartnerId) ?? [])];
    for (const leadId of ctx.leadIds) {
      clientByLead.set(leadId, ctx);
    }
  }

  const allLeadIds = [...clientByLead.keys()];
  if (allLeadIds.length === 0) {
    return contexts;
  }

  // P4 + P5 are independent: open activities, and follow-up traces since the window start
  const [activities, traces] = await Promise.all([
    odoo.findOpenSuggestionActivities(allLeadIds, typeId),
    odoo.findSuggestionTracesSince(allLeadIds, typeId, followUpWindowStart(runDate, delayDays)),
  ]);

  // P4: the first open activity (lowest id) per client
  for (const activity of [...activities].sort((a, b) => a.id - b.id)) {
    const ctx = clientByLead.get(activity.leadId);
    if (ctx && !ctx.openActivity) {
      ctx.openActivity = { id: activity.id, leadId: activity.leadId };
    }
  }

  // P5: most recent follow-up per client
  for (const trace of traces) {
    const ctx = clientByLead.get(trace.leadId);
    if (ctx && (!ctx.lastFollowUp || trace.date > ctx.lastFollowUp.date)) {
      ctx.lastFollowUp = { date: trace.date, messageId: trace.id, leadId: trace.leadId };
    }
  }

  return contexts;
}

/**
 * Applies the eligibility rule to each client
 */
export function prefilterEligibility(
  contexts: Map<number, PartnerContext>,
  runDate: string,
  delayDays: number
): PrefilterResult {
  const result: PrefilterResult = { eligible: [], skipped: [] };

  for (const [clientId, ctx] of contexts) {
    const decision = decideEligibility(ctx, runDate, delayDays);
    if (decision.eligible) {
      result.eligible.push(clientId);
    } else {
      result.skipped.push({ clientId, decision });
    }
  }

  return result;
}

/**
 * Splits the inactive clients between the ones to trigger and the skipped ones
 *
 * A client missing from the pre-filter (not found in Odoo) is triggered anyway:
 * the task re-check reports it.
 *
 * @returns Clients to trigger, and a "skipped" outcome for each skipped client
 */
export function selectClientsToTrigger(
  inactiveClients: InactiveClient[],
  prefilter: PrefilterResult
): {
  toTrigger: InactiveClient[];
  skippedOutcomes: Array<{ client: InactiveClient; outcome: SuggestionActivityOutcome }>;
} {
  const skippedById = new Map(prefilter.skipped.map((s) => [s.clientId, s.decision]));
  const toTrigger: InactiveClient[] = [];
  const skippedOutcomes: Array<{ client: InactiveClient; outcome: SuggestionActivityOutcome }> = [];

  for (const client of inactiveClients) {
    const decision = skippedById.get(client.id);
    if (decision) {
      skippedOutcomes.push({ client, outcome: toSkippedOutcome(decision) });
    } else {
      toTrigger.push(client);
    }
  }

  return { toTrigger, skippedOutcomes };
}
