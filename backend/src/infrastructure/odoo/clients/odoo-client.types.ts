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
 * Partner information with company details
 */
export interface PartnerCompanyInfo {
  name: string;
  company_id: [number, string];
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
 * Result of quote email sending operation
 */
export interface EmailSendResult {
  success: boolean;
  template_id: number;
  email_sent_to: string[];
  /** Emails blocked (real client in test mode) */
  email_blocked_for: string[];
  quote_id: number;
  quote_name: string;
  mode: 'test' | 'production';
  error?: string;
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
   * @param companyId Optional: Filter orders by selling company ID
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
   * @param companyId - Optional: Filter orders by selling company ID
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
   * Fetches partner info with company details (required for multi-company)
   *
   * @param partnerId - Partner ID
   * @returns Partner information including company
   */
  getPartnerCompanyInfo(partnerId: number): Promise<PartnerCompanyInfo>;

  /**
   * Creates a sale order (quote)
   *
   * @param data - Sale order creation data
   * @returns Created order ID
   */
  createSaleOrder(data: {
    partner_id: number;
    company_id: number;
    tag_ids?: any[];
    note?: string;
  }): Promise<number>;

  /**
   * Creates a sale order line
   *
   * @param data - Order line creation data
   * @returns Created line ID
   */
  createSaleOrderLine(data: {
    order_id: number;
    product_id: number;
    product_uom_qty: number;
    price_unit: number;
    /** Custom description (optional) */
    name?: string;
  }): Promise<number>;

  /**
   * Creates a sale order option (optional product)
   *
   * Client can add it to their order by clicking the cart button.
   *
   * @param data - Order option creation data
   * @returns Created option ID
   */
  createSaleOrderOption(data: {
    order_id: number;
    product_id: number;
    quantity: number;
    uom_id: number;
    price_unit: number;
    /** Custom description (optional) */
    name?: string;
  }): Promise<number>;

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
   * Sends a quote by email (TEST or PRODUCTION mode)
   *
   * In TEST mode: email only to testEmail (client blocked).
   * In PRODUCTION mode: email to client + CC to testEmail.
   *
   * @param quoteId - Quote ID
   * @param quoteName - Quote reference, e.g., "S39712"
   * @param clientEmail - Client email (for logs/blocking)
   * @param testMode - If true, blocks sending to client
   * @param testEmail - Test/monitoring email
   * @returns Email sending result
   */
  sendQuoteByEmail(
    quoteId: number,
    quoteName: string,
    clientEmail: string,
    testMode: boolean,
    testEmail: string
  ): Promise<EmailSendResult>;

  /**
   * Fetches the last validated order for a client (for backtesting)
   *
   * @param clientId - Client ID
   * @param companyId - Optional: Filter orders by selling company ID
   * @returns Last order with { id, name, date_order, partner_name }
   */
  getLastClientOrder(clientId: number, companyId?: number): Promise<{
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
   * @param companyId - Optional: Filter orders by selling company ID
   * @returns Last order before date with { id, name, date_order, partner_name }
   */
  getLastClientOrderBeforeDate(clientId: number, referenceDate: string, companyId?: number): Promise<{
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

  /**
   * Search partners (companies) by name
   *
   * @param name - Name to search for (case-insensitive, partial match)
   * @returns Array of matching partners with { id, name, email }
   */
  searchPartnersByName(name: string): Promise<Array<{
    id: number;
    name: string;
    email: string | null;
  }>>;
}
