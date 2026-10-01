/**
 * Writes the "Suggestion commande" activity in Odoo
 *
 * Creates the opportunity when the client has none open (Q8), then the activity (Q9).
 *
 * @module features/suggestion-activity/service
 */
import type {
  OdooClient,
  PartnerSalesContext,
  LeadSummary,
  LeadCreateValues,
  ActivityCreateValues,
} from "../../infrastructure/odoo/clients/odoo-client.types";
import { autoProposalConfig } from "../../config/auto-proposal";
import { errorMessage } from "../../utils/error.utils";
import type { SalespersonInfo, SuggestionActivityOutcome } from "./suggestion-activity.types";

/**
 * Company of each sales team (false = team shared by all companies)
 */
export type TeamCompanies = Map<number, number | false>;

/**
 * Teams that may be set on a created opportunity, in order of preference
 */
export function candidateTeamIds(ctx: Pick<PartnerSalesContext, "partnerTeamId" | "salesperson">): number[] {
  return [ctx.partnerTeamId, ctx.salesperson?.teamId].filter((id): id is number => id !== undefined);
}

/**
 * Team of a created opportunity: client team, else salesperson team, else none
 *
 * A team is kept only if it belongs to the analysed company or to no company: Odoo refuses
 * an opportunity whose team belongs to another company ("Incompatible companies on records").
 * Client cards are shared by the companies, so the client team is often a Moutarderie or
 * BRING BACK team. A team missing from teamCompanies is not kept.
 */
export function resolveTeamId(
  ctx: Pick<PartnerSalesContext, "partnerTeamId" | "salesperson">,
  companyId: number,
  teamCompanies: TeamCompanies
): number | false {
  for (const teamId of candidateTeamIds(ctx)) {
    const teamCompany = teamCompanies.get(teamId);
    if (teamCompany === false || teamCompany === companyId) {
      return teamId;
    }
  }
  return false;
}

/**
 * Values of the opportunity created for a client without open opportunity (Q8)
 *
 * The stage is left to Odoo (first unfolded stage of the team), no expected revenue.
 */
export function buildLeadValues(
  ctx: Pick<PartnerSalesContext, "id" | "partnerTeamId"> & { salesperson: SalespersonInfo },
  clientName: string,
  companyId: number,
  teamCompanies: TeamCompanies
): LeadCreateValues {
  return {
    name: `${autoProposalConfig.activity.leadNamePrefix} ${clientName}`,
    type: "opportunity",
    partner_id: ctx.id,
    user_id: ctx.salesperson.id,
    team_id: resolveTeamId(ctx, companyId, teamCompanies),
    company_id: companyId,
  };
}

/**
 * Values of the "Suggestion commande" activity (Q9)
 */
export function buildActivityValues(params: {
  leadId: number;
  typeId: number;
  clientName: string;
  note: string;
  runDate: string;
  salespersonId: number;
}): ActivityCreateValues {
  return {
    res_id: params.leadId,
    activity_type_id: params.typeId,
    summary: `${autoProposalConfig.activity.summaryPrefix} ${params.clientName}`,
    note: params.note,
    date_deadline: params.runDate,
    user_id: params.salespersonId,
  };
}

/**
 * Creates the opportunity if needed, then the activity
 *
 * Write errors become an "error" outcome; an opportunity created without its activity
 * is reported with leadCreatedId.
 *
 * @returns "created" or "error" outcome
 */
export async function writeSuggestion(
  odoo: Pick<OdooClient, "getTeamCompanies" | "createLead" | "createActivity">,
  params: {
    ctx: Pick<PartnerSalesContext, "id" | "partnerTeamId"> & { salesperson: SalespersonInfo };
    lead: LeadSummary | null;
    clientName: string;
    companyId: number;
    typeId: number;
    note: string;
    runDate: string;
  }
): Promise<SuggestionActivityOutcome> {
  const { ctx, lead, clientName, companyId, typeId, note, runDate } = params;

  let leadId: number;
  let leadName: string;
  let leadCreated = false;

  if (lead) {
    leadId = lead.id;
    leadName = lead.name;
  } else {
    let values: LeadCreateValues;
    try {
      const teamIds = candidateTeamIds(ctx);
      const teamCompanies: TeamCompanies = teamIds.length > 0 ? await odoo.getTeamCompanies(teamIds) : new Map();
      values = buildLeadValues(ctx, clientName, companyId, teamCompanies);
      leadId = await odoo.createLead(values);
    } catch (error) {
      return { kind: "error", message: errorMessage(error) };
    }
    leadName = values.name;
    leadCreated = true;
  }

  try {
    const activityId = await odoo.createActivity(
      buildActivityValues({
        leadId,
        typeId,
        clientName,
        note,
        runDate,
        salespersonId: ctx.salesperson.id,
      })
    );

    return {
      kind: "created",
      activityId,
      leadId,
      leadName,
      leadCreated,
      salespersonId: ctx.salesperson.id,
      salespersonName: ctx.salesperson.name,
      dateDeadline: runDate,
    };
  } catch (error) {
    return leadCreated
      ? { kind: "error", message: errorMessage(error), leadCreatedId: leadId }
      : { kind: "error", message: errorMessage(error) };
  }
}


/**
 * Checks the configured activity type at run start (V1)
 *
 * Read only. Protects against a missing id (production value not read yet)
 * and against an id from another database (local, staging).
 *
 * @param odoo - Odoo client
 * @param typeId - Configured mail.activity.type id
 * @throws Error with an explicit message if the type is missing or is not "Suggestion commande" on crm.lead
 */
export async function verifySuggestionActivityType(
  odoo: Pick<OdooClient, "getActivityType">,
  typeId: number
): Promise<void> {
  const expectedName = autoProposalConfig.activity.summaryPrefix;
  const hint =
    "Set ODOO_SUGGESTION_ACTIVITY_TYPE_ID (local, staging) or autoProposalConfig.activity.suggestionActivityTypeId (prod) to the id of moutarderie_suggestion_commande.mail_activity_type_suggestion_commande.";

  if (!typeId) {
    throw new Error(`Suggestion activity type id is not configured (0). ${hint}`);
  }

  const type = await odoo.getActivityType(typeId);

  if (!type) {
    throw new Error(`Activity type ${typeId} does not exist in this Odoo database. ${hint}`);
  }

  if (type.name !== expectedName || type.resModel !== "crm.lead") {
    throw new Error(
      `Activity type ${typeId} is "${type.name}" on ${type.resModel || "any model"}, expected "${expectedName}" on crm.lead. ${hint}`
    );
  }
}
