/**
 * Pricing service
 *
 * Enriches products with pricing information from order history.
 *
 * @module features/proposal-preparation/pricing/service
 */
import type { ProductStockStatus } from "../../../shared/types/product.types";
import type { ProductWithCurrentPrice } from "../proposal-preparation.types";

/**
 * Enriches products with historical client prices
 *
 * ## Context and current limitations
 *
 * **Why use historical prices?**
 *
 * The Odoo instance uses a 100% pricelist-based pricing model:
 * - Products don't have usable `list_price` (intentionally set to 99999.99 EUR)
 * - All actual prices are managed via `product.pricelist` with custom rules per client
 * - The `price_unit` in order history (`sale.order.line`) contains the price
 *   calculated by the client's pricelist at order time
 *
 * **Odoo v17 API limitation:**
 *
 * Since Odoo v16+, public methods for calculating prices via pricelist have been removed.
 * It's therefore **not possible to get current price with pricelist via external API**
 * without a custom Odoo module.
 *
 * **What the historical price contains:**
 * - Client's pricelist (negotiated pricing rules)
 * - Price at time of last validated order
 * - Promotions relative to the last order
 *
 * **Future solutions for getting current prices:**
 *
 * 1. **Custom Odoo module** (recommended) - Public wrapper for `_get_products_price()`
 * 2. **Create temporary sale.order.line** - Odoo auto-calculates price, then read and delete
 *
 * @param products - Products with order history (order_history)
 * @returns Products enriched with historical prices and calculated subtotals
 */
export function enrichWithHistoryPrices(
  products: ProductStockStatus[]
): ProductWithCurrentPrice[] {
  return products.map((product) => {
    // Take price_unit from most recent order
    // Note: order_history is sorted by date descending in stock-analysis
    const historicalPrice = product.order_history[0]?.price_unit || 0;

    return {
      ...product,
      current_price_unit: historicalPrice,
      subtotal: product.quantity_to_order * historicalPrice,
      moq_adjustment: 0,
    };
  });
}
