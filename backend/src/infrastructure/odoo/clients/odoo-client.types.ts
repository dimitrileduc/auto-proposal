/**
 * Common interface for Odoo clients (XML-RPC and JSON-2)
 *
 * Allows switching between implementations based on Odoo version.
 *
 * @module infrastructure/odoo/clients/types
 */

export interface OdooOrder {
  id: number;
  partner_id: [number, string];
  date_order: string;
  name: string;
  state: string;
  order_line?: number[];
}

export interface OdooPartner {
  id: number;
  name: string;
  email: string | false;
}

export interface OdooOrderLine {
  id: number;
  product_id: [number, string] | false;
  product_uom_qty: number;
  product_uom: [number, string];
  /** Product type: "product" | "service" | "consu" */
  product_type: string;
  price_unit: number;
  order_id: [number, string];
  /** Product category (for non-food filtering) */
  categ_id?: [number, string];
}

export interface OrderHistory {
  orders: OdooOrder[];
  orderLines: OdooOrderLine[];
}

/**
 * mail.activity.type as read at run start (V1)
 */
export interface ActivityTypeInfo {
  id: number;
  name: string;
  /** Model the type is restricted to (false = any model) */
  resModel: string | false;
  active: boolean;
}

/**
 * Salesperson of a client (res.partner.user_id → res.users), read by id so archived users are returned
 */
export interface SalespersonInfo {
  id: number;
  name: string;
  /** false when the user is archived */
  active: boolean;
  /** res.users.sale_team_id */
  teamId?: number;
  /** res.users.company_ids: companies the salesperson can open records of */
  companyIds: number[];
}

/**
 * Salesperson and team of a client (res.partner + res.users)
 */
export interface PartnerSalesContext {
  id: number;
  name: string;
  /** Commercial partner (the company itself for a company partner) */
  commercialPartnerId: number;
  isCompany: boolean;
  /** res.partner.team_id */
  partnerTeamId?: number;
  /** res.partner.user_id */
  salesperson?: SalespersonInfo;
}

/**
 * Opportunity (crm.lead) carrying the activity
 */
export interface LeadSummary {
  id: number;
  name: string;
  /** Odoo datetime "YYYY-MM-DD HH:MM:SS" (UTC) */
  createDate?: string;
  userId?: number;
  teamId?: number;
}

/**
 * Open "Suggestion commande" activity (P4 / Q3)
 */
export interface OpenSuggestionActivity {
  id: number;
  /** Opportunity carrying the activity */
  leadId: number;
  userId?: number;
  /** "YYYY-MM-DD" */
  dateDeadline?: string;
  summary?: string;
}

/**
 * Follow-up trace: mail.message carrying the activity type (P5 / Q4)
 */
export interface SuggestionTrace {
  /** mail.message id */
  id: number;
  /** Opportunity the message is posted on */
  leadId: number;
  /** Odoo datetime "YYYY-MM-DD HH:MM:SS" (UTC) */
  date: string;
}

/**
 * Values of the opportunity created when the client has none open (Q8)
 */
export interface LeadCreateValues {
  name: string;
  type: "opportunity";
  partner_id: number;
  user_id: number;
  team_id: number | false;
  company_id: number;
}

/**
 * Values of the "Suggestion commande" activity on an opportunity (Q9)
 *
 * res_model_id is not sent: the dedicated account cannot read ir.model, Odoo fills it
 * from the context default_res_model = "crm.lead".
 */
export interface ActivityCreateValues {
  /** Opportunity id */
  res_id: number;
  activity_type_id: number;
  summary: string;
  /** HTML description */
  note: string;
  /** "YYYY-MM-DD" */
  date_deadline: string;
  user_id: number;
}

/**
 * Complete sale order with totals and taxes
 */
export interface OdooSaleOrder {
  id: number;
  /** Order reference, e.g., "S39591" */
  name: string;
  /** Partner tuple [id, name] */
  partner_id: [number, string];
  /** Company tuple [id, name] */
  company_id: [number, string];
  /** Order state: "draft" | "sent" | "sale" | "cancel" */
  state: string;
  /** Total excluding tax (HT) */
  amount_untaxed: number;
  /** Total tax amount */
  amount_tax: number;
  /** Total including tax (TTC) */
  amount_total: number;
  /** IDs of order lines */
  order_line: number[];
  /** IDs of tags */
  tag_ids: number[];
  /** Order creation date */
  date_order: string;
}

/**
 * Detailed sale order line with pricing and taxes
 */
export interface OdooSaleOrderLine {
  id: number;
  order_id: [number, string];
  product_id: [number, string];
  /** Unit of measure tuple, e.g., [27, "TU6"] */
  product_uom: [number, string];
  product_uom_qty: number;
  /** Product type: "product" | "service" | "consu" */
  product_type: string;
  price_unit: number;
  /** Subtotal excluding tax (HT) */
  price_subtotal: number;
  /** Subtotal including tax (TTC) */
  price_total: number;
  /** IDs of applied taxes */
  tax_id: number[];
  /** Line description (prediction reasoning) */
  name?: string;
}

/**
 * Odoo client interface
 *
 * Implemented by XML-RPC and JSON-2 clients.
 */
export interface OdooClient {
  /**
   * Fetches inactive company partners
   *
   * @param dateMin Minimum date for inactivity period (format: "YYYY-MM-DD HH:MM:SS")
   * @param dateMax Maximum date for inactivity period (format: "YYYY-MM-DD HH:MM:SS")
   * @param excludeOrderTagId Optional: Tag ID to exclude from recent orders (e.g., auto-proposal tag 82)
   * @param excludedPartnerTagId Optional: Partner tag to exclude from results (e.g., "exclude-auto-proposal")
   * @returns Array of inactive partners
   */
  getInactiveCompanyPartners(
    dateMin: string,
    dateMax: string,
    excludeOrderTagId?: number,
    excludedPartnerTagId?: number | null,
    companyId?: number
  ): Promise<OdooPartner[]>;

  /**
   * Fetches order history for a partner
   *
   * @param partnerId - Partner ID
   * @param windowDays - Number of days of history to fetch
   * @param referenceDate - Reference date for calculation (format: "YYYY-MM-DD HH:MM:SS")
   * @param includeDraftOrders - Include draft orders
   * @param excludedCategoryIds - IDs of categories to exclude (deposits, pallets, packaging, etc.)
   * @returns Order history (orders and lines)
   */
  getOrderHistoryByPartner(
    partnerId: number,
    windowDays: number,
    referenceDate: string,
    includeDraftOrders: boolean,
    excludedCategoryIds?: number[],
    companyId?: number
  ): Promise<OrderHistory>;

  /**
   * Reads an activity type by id (run-start check V1)
   *
   * @param typeId - mail.activity.type id
   * @returns The type, or null if it does not exist
   */
  getActivityType(typeId: number): Promise<ActivityTypeInfo | null>;

  /**
   * Reads the salesperson and team of a client (Q1 + Q1b)
   *
   * The salesperson is read by id, so an archived user is returned with active = false.
   *
   * @param partnerId - Client id
   * @returns Sales context of the client
   * @throws Error if the partner does not exist
   */
  getPartnerSalesContext(partnerId: number): Promise<PartnerSalesContext>;

  /**
   * Reads the salesperson and team of many clients in 2 calls (P1 + P2)
   *
   * @param partnerIds - Client ids
   * @returns Sales context by client id (missing partners are absent)
   */
  getSalesContexts(partnerIds: number[]): Promise<Map<number, PartnerSalesContext>>;

  /**
   * Finds the oldest open opportunity of a client and its contacts (Q5)
   *
   * @param commercialPartnerId - Commercial partner of the client
   * @param companyId - Analysed company
   * @returns The opportunity, or null if the client has none open
   */
  findOldestOpenLead(commercialPartnerId: number, companyId: number): Promise<LeadSummary | null>;

  /**
   * Returns all opportunity ids of a client and its contacts, archived included (Q2)
   *
   * @param commercialPartnerId - Commercial partner of the client
   * @param companyId - Analysed company
   */
  getPartnerLeadIds(commercialPartnerId: number, companyId: number): Promise<number[]>;

  /**
   * Finds an open "Suggestion commande" activity on these opportunities (Q3)
   *
   * @returns The activity with the earliest deadline, or null (no call if leadIds is empty)
   */
  findOpenSuggestionActivity(leadIds: number[], typeId: number): Promise<OpenSuggestionActivity | null>;

  /**
   * Finds the most recent follow-up trace on these opportunities since a date (Q4)
   *
   * @param since - Window start "YYYY-MM-DD HH:MM:SS"
   * @returns The most recent trace, or null (no call if leadIds is empty)
   */
  findLastSuggestionTrace(leadIds: number[], typeId: number, since: string): Promise<SuggestionTrace | null>;

  /**
   * Returns the opportunities of many clients, archived included, in 2 calls (P3 + P3b)
   *
   * An opportunity carried by a contact is attached to its company.
   *
   * @param commercialPartnerIds - Commercial partners of the clients
   * @param companyId - Analysed company
   * @returns Opportunity ids by commercial partner id
   */
  getLeadIdsByCommercialPartners(commercialPartnerIds: number[], companyId: number): Promise<Map<number, number[]>>;

  /**
   * Returns the open "Suggestion commande" activities of many opportunities (P4)
   *
   * @returns Activities (empty, no call, if leadIds is empty)
   */
  findOpenSuggestionActivities(leadIds: number[], typeId: number): Promise<OpenSuggestionActivity[]>;

  /**
   * Returns the follow-up traces of many opportunities since a date (P5)
   *
   * @returns Traces (empty, no call, if leadIds is empty)
   */
  findSuggestionTracesSince(leadIds: number[], typeId: number, since: string): Promise<SuggestionTrace[]>;

  /**
   * Returns the date of the last confirmed order of a client (Q6)
   *
   * @param partnerId - Client id
   * @param companyId - Analysed company
   * @returns Paris calendar day "YYYY-MM-DD", or null if the client has no confirmed order
   */
  findLastConfirmedOrderDate(partnerId: number, companyId: number): Promise<string | null>;

  /**
   * Returns the company of sales teams (read by id)
   *
   * Used before creating an opportunity: a team of another company would be refused by Odoo.
   *
   * @param teamIds - crm.team ids
   * @returns Company id by team id, false for a team without company (missing teams are absent)
   */
  getTeamCompanies(teamIds: number[]): Promise<Map<number, number | false>>;

  /**
   * Creates an opportunity (Q8)
   *
   * @returns Created opportunity id
   */
  createLead(values: LeadCreateValues): Promise<number>;

  /**
   * Creates an activity on an opportunity (Q9)
   *
   * @returns Created activity id
   */
  createActivity(values: ActivityCreateValues): Promise<number>;

  /**
   * Fetches complete quote details with lines and taxes
   *
   * @param quoteId - Quote ID
   * @returns Quote object and order lines
   */
  getSaleOrderDetails(quoteId: number): Promise<{
    order: OdooSaleOrder;
    lines: OdooSaleOrderLine[];
  }>;

  /**
   * Fetches the last validated order for a client (for backtesting)
   *
   * @param clientId - Client ID
   * @returns Last order with { id, name, date_order, partner_name }
   */
  getLastClientOrder(clientId: number): Promise<{
    id: number;
    name: string;
    date_order: string;
    partner_name: string;
  }>;

  /**
   * Fetches the last validated order for a client BEFORE a given date
   *
   * @param clientId - Client ID
   * @param referenceDate - Reference date (format: "YYYY-MM-DD")
   * @returns Last order before date with { id, name, date_order, partner_name }
   */
  getLastClientOrderBeforeDate(clientId: number, referenceDate: string): Promise<{
    id: number;
    name: string;
    date_order: string;
    partner_name: string;
  }>;

  /**
   * Fetches a specific order by name
   *
   * @param orderName - Order name, e.g., "S39729"
   * @returns Order with { id, name, date_order, partner_name, partner_id }
   */
  getOrderByName(orderName: string): Promise<{
    id: number;
    name: string;
    date_order: string;
    partner_name: string;
    partner_id: number;
  }>;
}
