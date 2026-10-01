/**
 * Reusable Odoo domain builders for queries
 *
 * These domains are identical across JSON-2 and XML-RPC implementations.
 *
 * @module infrastructure/odoo/clients/odoo-domains
 */

/**
 * Type definitions for Odoo domain conditions
 *
 * Note: The odoo-xmlrpc-ts type system does not support logical operators ("|", "&", "!")
 * so we use any[] for complex domains to support all operators.
 */
type OdooDomainCondition = [string, string, any];
type OdooDomainOperator = "|" | "&" | "!";
type OdooDomain = Array<OdooDomainCondition | OdooDomainOperator>;

/**
 * Builds domain to fetch orders within a given date range
 *
 * Optionally excludes orders with a specific tag.
 *
 * @param dateMin Minimum date of the period (format: "YYYY-MM-DD HH:MM:SS")
 * @param dateMax Maximum date of the period (format: "YYYY-MM-DD HH:MM:SS")
 * @param excludeTagId Optional tag ID to exclude (e.g., auto-proposal tag 82)
 * @returns Array of domain conditions
 */
export function buildRecentOrdersDomain(
  dateMin: string,
  dateMax: string,
  excludeTagId?: number,
  companyId?: number
): OdooDomainCondition[] {
  const domain: OdooDomainCondition[] = [
    ["date_order", ">=", dateMin],
    ["date_order", "<=", dateMax],
  ];

  if (excludeTagId !== undefined) {
    domain.push(["tag_ids", "not in", [excludeTagId]]);
  }

  if (companyId !== undefined) {
    domain.push(["company_id", "=", companyId]);
  }

  return domain;
}

/**
 * Builds domain to fetch inactive partners
 *
 * Criteria for inactivity:
 * - Only company partners (is_company = true)
 * - Have been customers before (customer_rank > 0)
 * - Currently active in Odoo (not archived)
 * - Either never placed an order or did not order recently
 *
 * @param activePartnerIds IDs of active partners (those who ordered recently)
 * @param excludedPartnerTagId Optional partner tag to exclude (e.g., "exclude-auto-proposal")
 * @returns Array of domain conditions with logical operators
 */
export function buildInactivePartnersDomain(
  activePartnerIds: number[],
  excludedPartnerTagId?: number | null
): any[] {
  const domain: any[] = [
    ["is_company", "=", true],
    ["customer_rank", ">", 0],
    ["active", "=", true],
    "|",
    ["sale_order_ids", "=", false],
    "&",
    ["sale_order_ids", "!=", false],
    ["id", "not in", activePartnerIds],
  ];

  if (excludedPartnerTagId != null && excludedPartnerTagId > 0) {
    domain.push(["category_id", "not in", [excludedPartnerTagId]]);
  }

  return domain;
}

/**
 * Builds domain to fetch orders for a specific partner
 *
 * Filters orders by date range and state.
 *
 * @param partnerId Partner ID
 * @param dateLimitStr Minimum date (format: "YYYY-MM-DD HH:MM:SS")
 * @param states Order states to include (e.g., "draft", "sent", "sale", "done")
 * @param referenceDate Maximum date (format: "YYYY-MM-DD HH:MM:SS") - critical for backtest time travel
 * @returns Array of domain conditions
 */
export function buildPartnerOrdersDomain(
  partnerId: number,
  dateLimitStr: string,
  states: string[],
  referenceDate?: string,
  companyId?: number
): OdooDomainCondition[] {
  const domain: OdooDomainCondition[] = [
    ["partner_id", "=", partnerId],
    ["date_order", ">=", dateLimitStr],
    ["state", "in", states],
  ];

  if (referenceDate) {
    domain.push(["date_order", "<", referenceDate]);
  }

  if (companyId !== undefined) {
    domain.push(["company_id", "=", companyId]);
  }

  return domain;
}

/**
 * Builds the company filter of the analysed company
 *
 * Records without company are NOT included (no exception for opportunities without company).
 *
 * @param companyId Analysed company (e.g., 3 = FOODPRINT SRL)
 * @returns Array of domain conditions
 */
export function buildCompanyDomain(companyId: number): OdooDomainCondition[] {
  return [["company_id", "=", companyId]];
}

/**
 * Builds domain to fetch the open opportunities of a client (Q5)
 *
 * Open = active and not in a won stage. Opportunities of the client and of its contacts
 * (same commercial partner), leads excluded, analysed company only.
 *
 * @param commercialPartnerId Commercial partner of the client (the company itself)
 * @param companyId Analysed company
 * @returns Array of domain conditions
 */
export function buildOldestOpenLeadDomain(
  commercialPartnerId: number,
  companyId: number
): OdooDomainCondition[] {
  return [
    ["partner_id.commercial_partner_id", "=", commercialPartnerId],
    ["type", "=", "opportunity"],
    ["active", "=", true],
    ["stage_id.is_won", "=", false],
    ...buildCompanyDomain(companyId),
  ];
}

/**
 * Builds domain to fetch all opportunities of one or many clients (P3 / Q2)
 *
 * Opportunities of the clients and of their contacts, analysed company only, leads excluded.
 * Archived opportunities are included by the caller (context active_test = false).
 *
 * @param commercialPartnerIds One commercial partner (Q2, "=") or many (P3, "in")
 * @param companyId Analysed company
 * @returns Array of domain conditions
 */
export function buildPartnerLeadsDomain(
  commercialPartnerIds: number | number[],
  companyId: number
): OdooDomainCondition[] {
  const partnerCondition: OdooDomainCondition = Array.isArray(commercialPartnerIds)
    ? ["partner_id.commercial_partner_id", "in", commercialPartnerIds]
    : ["partner_id.commercial_partner_id", "=", commercialPartnerIds];

  return [partnerCondition, ["type", "=", "opportunity"], ...buildCompanyDomain(companyId)];
}

/**
 * Builds domain to fetch the open "Suggestion commande" activities of opportunities (P4 / Q3)
 *
 * @param leadIds Opportunity ids
 * @param typeId mail.activity.type id of "Suggestion commande"
 * @returns Array of domain conditions
 */
export function buildOpenSuggestionActivitiesDomain(leadIds: number[], typeId: number): OdooDomainCondition[] {
  return [
    ["activity_type_id", "=", typeId],
    ["res_model", "=", "crm.lead"],
    ["res_id", "in", leadIds],
    ["active", "=", true],
  ];
}

/**
 * Builds domain to fetch the follow-up traces of opportunities since a date (P5 / Q4)
 *
 * A trace is a mail.message carrying the activity type: posted by Odoo when the activity
 * is marked as done, or by the module when it vanishes without being done.
 *
 * @param leadIds Opportunity ids
 * @param typeId mail.activity.type id of "Suggestion commande"
 * @param since Window start "YYYY-MM-DD HH:MM:SS" (UTC)
 * @returns Array of domain conditions
 */
export function buildSuggestionTracesDomain(
  leadIds: number[],
  typeId: number,
  since: string
): OdooDomainCondition[] {
  return [
    ["mail_activity_type_id", "=", typeId],
    ["model", "=", "crm.lead"],
    ["res_id", "in", leadIds],
    ["date", ">=", since],
  ];
}

/**
 * Builds domain to fetch the confirmed orders of a client (Q6)
 *
 * @param partnerId Client id
 * @param companyId Analysed company
 * @returns Array of domain conditions
 */
export function buildLastConfirmedOrderDomain(partnerId: number, companyId: number): OdooDomainCondition[] {
  return [["partner_id", "=", partnerId], ["state", "in", ["sale", "done"]], ...buildCompanyDomain(companyId)];
}
