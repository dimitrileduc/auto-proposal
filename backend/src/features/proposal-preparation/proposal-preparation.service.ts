/**
 * Proposal preparation service
 *
 * Prepares order proposals with pricing and MOQ adjustments.
 *
 * @module features/proposal-preparation/service
 */
import { enrichWithHistoryPrices } from "./pricing/pricing.service";
import { adjustForMinimumOrder } from "./moq/moq-adjustment.service";
import { autoProposalConfig } from "../../config/auto-proposal";
import type { StockReplenishmentResult } from "../../shared/types/product.types";
import type { ProposalPreparationResult } from "./proposal-preparation.types";
import type { OdooClient } from "../../infrastructure/odoo/clients/odoo-client.types";

/**
 * Prepares an order proposal with pricing and MOQ adjustment
 *
 * **Input:** Phase 2 result (stock-replenishment) with calculated quantity_to_order
 *
 * **Steps:**
 * 1. Enrich with prices (historical or current depending on mode)
 * 2. Calculate order total
 * 3. If total < 300 EUR -> adjust quantities round-robin to reach MOQ
 *
 * **Output:** Enriched proposal with prices + MOQ adjustments applied
 *
 * **Available pricing modes:**
 * - `historyPriceForClient`: Uses price_unit from last validated order
 * - `currentPriceForClient`: Retrieves current price via Odoo pricelist (not implemented, see limitations)
 *
 * @param stockReplenishment - Stock replenishment analysis result (Phase 2)
 * @param odooClient - Odoo client (required for currentPriceForClient mode, currently unused)
 * @param mode - Pricing mode (default: historyPriceForClient)
 * @param minimumOrderAmount - Global MOQ in euros (default: from config)
 * @returns Enriched proposal with prices and MOQ adjustments
 *
 * @example
 * ```typescript
 * const proposal = prepareProposal(stockReplenishment, undefined, "historyPriceForClient");
 * ```
 */
export function prepareProposal(
  stockReplenishment: StockReplenishmentResult,
  odooClient?: OdooClient,
  mode: "historyPriceForClient" | "currentPriceForClient" = "historyPriceForClient",
  minimumOrderAmount: number = autoProposalConfig.pricing.minimumOrderAmount
): ProposalPreparationResult {
  const { client_id, products } = stockReplenishment;

  // Step 1: Enrich with prices
  let productsWithPrices;

  switch (mode) {
    case "historyPriceForClient":
      // Use historical price (price_unit from last order)
      productsWithPrices = enrichWithHistoryPrices(products);
      break;

    case "currentPriceForClient":
      // WARNING: NOT IMPLEMENTED - Odoo v17 API limitation
      // To get current prices with pricelist, would need:
      // 1. Custom Odoo module exposing public method wrapping _get_products_price()
      // 2. Create temporary sale.order.line and read calculated price
      // 3. Replicate pricelist logic backend-side (not recommended)
      // See pricing.service.ts for full limitation details.
      // For now, fallback to historical prices:
      productsWithPrices = enrichWithHistoryPrices(products);
      console.warn(
        `Mode 'currentPriceForClient' not implemented, using 'historyPriceForClient' as fallback`
      );
      break;

    default:
      productsWithPrices = enrichWithHistoryPrices(products);
  }

  // Step 2: Calculate initial total
  const originalTotal = productsWithPrices.reduce(
    (sum, p) => sum + p.subtotal,
    0
  );

  // Step 3: Adjust if total < MOQ
  let moqAdjustmentApplied = false;
  let adjustmentDetails;

  if (originalTotal < minimumOrderAmount) {
    productsWithPrices = adjustForMinimumOrder(
      productsWithPrices,
      originalTotal,
      minimumOrderAmount
    );

    const finalTotal = productsWithPrices.reduce(
      (sum, p) => sum + p.subtotal,
      0
    );

    const productsAdjusted = productsWithPrices.filter(
      (p) => p.moq_adjustment > 0
    ).length;

    moqAdjustmentApplied = true;
    adjustmentDetails = {
      original_total: originalTotal,
      minimum_required: minimumOrderAmount,
      gap_filled: finalTotal - originalTotal,
      products_adjusted: productsAdjusted,
    };
  }

  const totalAmount = productsWithPrices.reduce(
    (sum, p) => sum + p.subtotal,
    0
  );

  return {
    client_id,
    products: productsWithPrices,
    total_amount: totalAmount,
    moq_adjustment_applied: moqAdjustmentApplied,
    adjustment_details: adjustmentDetails,
  };
}
