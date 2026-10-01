/**
 * Labels and conversions around the "Suggestion commande" outcomes
 *
 * French labels shown to the client in the run reports (FR-016), and the mapping from the
 * Odoo sales context to the eligibility context.
 *
 * @module features/suggestion-activity/outcome.utils
 */
import { autoProposalConfig } from "../../config/auto-proposal";
import { formatDateFr, odooDatetimeToParisDate } from "../../utils/date.utils";
import type { PartnerSalesContext } from "../../infrastructure/odoo/clients/odoo-client.types";
import type { PartnerContext, SkipDetail, SkipReason, SuggestionActivityOutcome } from "./suggestion-activity.types";

/**
 * French labels shown in the run report, one per skip reason (FR-016)
 */
export const SKIP_LABELS: Record<SkipReason, (detail?: SkipDetail) => string> = {
  no_salesperson: () => "pas de vendeur",
  inactive_salesperson: () => "vendeur inactif",
  salesperson_no_company_access: () => "vendeur sans accès à FOODPRINT",
  open_activity: () => "activité déjà ouverte",
  recent_follow_up: (detail) =>
    detail?.date
      ? `relancé il y a moins de ${followUpDelayLabel()} (${formatDateFr(odooDatetimeToParisDate(detail.date))})`
      : `relancé il y a moins de ${followUpDelayLabel()}`,
  no_products: () => "aucun produit suggéré",
};


/** "3 semaines" for 21 days, "10 jours" otherwise: the label follows the configured delay */
function followUpDelayLabel(): string {
  const days = autoProposalConfig.activity.followUpDelayDays;
  return days % 7 === 0 ? `${days / 7} semaines` : `${days} jours`;
}

/**
 * Label of a client in error (FR-016)
 *
 * @param message - Error message
 * @returns "erreur (message)"
 */
export function formatErrorLabel(message: string): string {
  return `erreur (${message})`;
}

/**
 * Short French label of an outcome, for the client report
 *
 * @param outcome - Outcome of the client
 * @returns e.g. "activité créée", "pas de vendeur", "erreur (message)"
 */
export function describeOutcome(outcome: SuggestionActivityOutcome): string {
  switch (outcome.kind) {
    case "created":
      return "activité créée";
    case "would_create":
      return "activité qui aurait été créée (mode test)";
    case "skipped":
      return outcome.label;
    case "error":
      return formatErrorLabel(outcome.message);
  }
}

/**
 * Eligibility context of a client from its sales context, before the CRM reads
 *
 * @param sales - Q1/P1 result
 * @param companyId - Analysed company
 * @param leadIds - Opportunities of the client (Q2/P3), empty until read
 */
export function toPartnerContext(sales: PartnerSalesContext, companyId: number, leadIds: number[] = []): PartnerContext {
  return {
    partnerId: sales.id,
    partnerName: sales.name,
    commercialPartnerId: sales.commercialPartnerId,
    companyId,
    salesperson: sales.salesperson,
    partnerTeamId: sales.partnerTeamId,
    leadIds,
  };
}
