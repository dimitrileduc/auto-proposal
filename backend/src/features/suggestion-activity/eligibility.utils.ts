/**
 * Eligibility rule of a client for a "Suggestion commande" activity
 *
 * Single implementation of the rule: called in batch by the orchestrator pre-filter,
 * then for one client by the task re-check right before writing.
 *
 * @module features/suggestion-activity/eligibility
 */
import { differenceInCalendarDays, format, parseISO, subDays } from "date-fns";
import { odooDatetimeToParisDate } from "../../utils/date.utils";
import { SKIP_LABELS } from "./outcome.utils";
import type {
  EligibilityDecision,
  PartnerContext,
  SuggestionActivityOutcome,
} from "./suggestion-activity.types";

/**
 * Decides whether an activity may be created for a client
 *
 * Checks, in order: salesperson, active salesperson, salesperson with access to the analysed
 * company, open activity, follow-up less than delayDays ago. "no_products" is decided after the AI by the client task.
 *
 * @param ctx - What Odoo tells about the client
 * @param runDate - Run day "YYYY-MM-DD" (Europe/Paris)
 * @param delayDays - Minimum days between two follow-ups
 * @returns Eligible, or the skip reason
 */
export function decideEligibility(
  ctx: PartnerContext,
  runDate: string,
  delayDays: number
): EligibilityDecision {
  if (!ctx.salesperson) {
    return { eligible: false, reason: "no_salesperson" };
  }

  if (!ctx.salesperson.active) {
    return { eligible: false, reason: "inactive_salesperson" };
  }

  // Client cards are shared by the companies: the salesperson may work for another one and
  // could neither open the opportunity nor be assigned to a new one (Odoo company check)
  if (!ctx.salesperson.companyIds.includes(ctx.companyId)) {
    return { eligible: false, reason: "salesperson_no_company_access" };
  }

  if (ctx.openActivity) {
    return {
      eligible: false,
      reason: "open_activity",
      detail: { activityId: ctx.openActivity.id, leadId: ctx.openActivity.leadId },
    };
  }

  if (ctx.lastFollowUp && isWithinFollowUpDelay(ctx.lastFollowUp.date, runDate, delayDays)) {
    return {
      eligible: false,
      reason: "recent_follow_up",
      detail: { date: ctx.lastFollowUp.date, leadId: ctx.lastFollowUp.leadId },
    };
  }

  return { eligible: true };
}

/**
 * Whether a follow-up is too recent to suggest again (FR-013)
 *
 * Calendar days, from date to date: done on 02/10 → blocked on 22/10, eligible on 23/10.
 * lastDate is an Odoo datetime (UTC): its Paris calendar day is used, like the dates Odoo shows.
 *
 * @param lastDate - Follow-up date "YYYY-MM-DD[ HH:MM:SS]" (UTC)
 * @param runDate - Run day "YYYY-MM-DD"
 * @param delayDays - Minimum days between two follow-ups
 * @returns true if fewer than delayDays calendar days have passed
 */
export function isWithinFollowUpDelay(lastDate: string, runDate: string, delayDays: number): boolean {
  const days = differenceInCalendarDays(parseISO(runDate.slice(0, 10)), parseISO(odooDatetimeToParisDate(lastDate)));
  return days < delayDays;
}

/**
 * Start of the window where a follow-up blocks a new suggestion
 *
 * @param runDate - Run day "YYYY-MM-DD"
 * @param delayDays - Minimum days between two follow-ups
 * @returns "YYYY-MM-DD 00:00:00", delayDays before runDate
 */
export function followUpWindowStart(runDate: string, delayDays: number): string {
  // Not calculateDateBefore: it mixes local time and UTC and drifts by a day across DST changes
  return `${format(subDays(parseISO(runDate.slice(0, 10)), delayDays), "yyyy-MM-dd")} 00:00:00`;
}

/**
 * Converts a skip decision into the "skipped" outcome of the run report
 *
 * @param decision - Non eligible decision
 * @returns Outcome with its French label (FR-016)
 */
export function toSkippedOutcome(
  decision: Extract<EligibilityDecision, { eligible: false }>
): Extract<SuggestionActivityOutcome, { kind: "skipped" }> {
  return {
    kind: "skipped",
    reason: decision.reason,
    label: SKIP_LABELS[decision.reason](decision.detail),
    ...(decision.detail && { detail: decision.detail }),
  };
}
