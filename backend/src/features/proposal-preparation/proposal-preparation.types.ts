/**
 * Proposal preparation types
 * @module features/proposal-preparation/types
 */
import type { ProductStockStatus } from "../../shared/types/product.types";

/**
 * Product enriched with current price and financial calculations
 */
export interface ProductWithCurrentPrice extends ProductStockStatus {
  /** Historical unit price (last price_unit from order_history) */
  current_price_unit: number;

  /** Subtotal: quantity_to_order x current_price_unit */
  subtotal: number;

  /** Units added to reach global MOQ (0 if no adjustment) */
  moq_adjustment: number;
}

/**
 * Proposal preparation result
 * (Phase 2.5: Pricing + MOQ adjustment)
 */
export interface ProposalPreparationResult {
  /** Odoo client ID */
  client_id: number;

  /** Pricelist ID used (optional, only with currentPriceForClient mode) */
  pricelist_id?: number;

  /** Products with historical prices and adjusted quantities */
  products: ProductWithCurrentPrice[];

  /** Total proposal amount (after MOQ adjustment if applied) */
  total_amount: number;

  /** Indicates if MOQ adjustment was applied */
  moq_adjustment_applied: boolean;

  /** MOQ adjustment details (if applied) */
  adjustment_details?: {
    /** Total before MOQ adjustment */
    original_total: number;

    /** Minimum required MOQ (e.g., 300 EUR) */
    minimum_required: number;

    /** Amount added to fill the gap */
    gap_filled: number;

    /** Number of products with increased quantity */
    products_adjusted: number;
  };
}
