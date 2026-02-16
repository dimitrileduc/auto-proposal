/**
 * Odoo quote generation types
 * @module features/proposal-generation/types
 */

/**
 * Quote line details for an order item
 */
export interface QuoteLineDetails {
  // IDs
  line_id: number;
  product_id: number;

  // Product info
  product_name: string;
  /** Unit of measure tuple, e.g., [27, "TU6"] */
  product_uom: [number, string];
  /** Prediction description/reasoning */
  description?: string;

  // Quantities
  quantity_ordered: number;

  // Pricing and totals
  /** Unit price excluding tax */
  price_unit: number;
  /** Subtotal excluding tax (price_subtotal) */
  subtotal_ht: number;
  /** Subtotal including tax (price_total) */
  subtotal_ttc: number;
  /** Tax amount (subtotal_ttc - subtotal_ht) */
  tax_amount: number;
}

/**
 * Result of Odoo quote generation
 */
export interface QuoteCreationResult {
  // Odoo quote
  quote_id: number;
  /** Quote reference, e.g., "S39591" */
  quote_name: string;
  state: "draft";

  // Client
  client_id: number;
  client_name: string;
  company_id: number;
  company_name: string;

  // Totals (calculated by Odoo)
  /** Total excluding tax (amount_untaxed) */
  amount_total_ht: number;
  /** Total including tax (amount_total) */
  amount_total_ttc: number;
  /** Total tax amount (amount_tax) */
  tax_total: number;

  // Detailed lines (base products)
  order_lines: QuoteLineDetails[];
  lines_count: number;

  // Optional products (sale.order.option)
  optional_products: QuoteLineDetails[];
  optional_products_count: number;

  // Metadata
  /** Applied tag ID */
  tag_id: number;
  /** Order creation date (date_order, ISO format) */
  created_at: string;

  // Chatter (internal note with LLM reasoning)
  /** Message ID in Odoo chatter (mail.message), null if posting failed */
  chatter_message_id: number | null;
  /** Preview of the posted message (text, first 200 chars), null if posting failed */
  chatter_message_preview: string | null;
}
