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
  excludeTagId?: number
): OdooDomainCondition[] {
  const domain: OdooDomainCondition[] = [
    ["date_order", ">=", dateMin],
    ["date_order", "<=", dateMax],
  ];

  if (excludeTagId !== undefined) {
    domain.push(["tag_ids", "not in", [excludeTagId]]);
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
  referenceDate?: string
): OdooDomainCondition[] {
  const domain: OdooDomainCondition[] = [
    ["partner_id", "=", partnerId],
    ["date_order", ">=", dateLimitStr],
    ["state", "in", states],
  ];

  if (referenceDate) {
    domain.push(["date_order", "<", referenceDate]);
  }

  return domain;
}
