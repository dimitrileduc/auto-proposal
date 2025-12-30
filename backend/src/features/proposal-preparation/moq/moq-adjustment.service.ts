/**
 * MOQ adjustment service
 *
 * Adjusts product quantities to meet minimum order requirements.
 *
 * @module features/proposal-preparation/moq/service
 */
import { sortByOrderFrequencyAndConfidence } from "./adjustment-strategy.utils";
import type { ProductWithCurrentPrice } from "../proposal-preparation.types";

/**
 * Adjusts quantities to reach global MOQ
 *
 * **Round-robin strategy with immediate stop:**
 * 1. Sort products by order frequency (DESC) then confidence (DESC)
 * 2. Add +1 unit to first product, recalculate gap
 * 3. Check if gap filled -> if YES: STOP, if NO: move to next product
 * 4. Repeat in loop (round-robin) until reaching 300 EUR
 *
 * **IMPORTANT:** Stop happens **immediately** when gap is filled,
 * even mid-round. Current round is NOT completed.
 *
 * @param products - Products with current prices
 * @param currentTotal - Current order total
 * @param minimumOrder - Global MOQ (e.g., 300 EUR)
 * @returns Products with adjusted quantities
 *
 * @example
 * ```typescript
 * // Situation: 55 EUR gap to fill
 * // Sorted products: A (5 orders, 20 EUR), B (3 orders, 15 EUR), C (1 order, 10 EUR)
 *
 * Iteration 1: A +1 (20 EUR) -> Remaining gap: 35 EUR -> Continue
 * Iteration 2: B +1 (15 EUR) -> Remaining gap: 20 EUR -> Continue
 * Iteration 3: C +1 (10 EUR) -> Remaining gap: 10 EUR -> Continue
 * Iteration 4: A +1 (20 EUR) -> Remaining gap: -10 EUR -> STOP
 *
 * Result:
 * - A: +2 units (most ordered product, receives most)
 * - B: +1 unit
 * - C: +1 unit
 * Total: 4 units added, 55 EUR filled (with 10 EUR overage)
 *
 * Note: 2nd round is NOT completed (B and C don't get their 2nd unit)
 * ```
 */
export function adjustForMinimumOrder(
  products: ProductWithCurrentPrice[],
  currentTotal: number,
  minimumOrder: number
): ProductWithCurrentPrice[] {
  const gap = minimumOrder - currentTotal;

  // No adjustment needed if already above MOQ
  if (gap <= 0) {
    return products.map((p) => ({ ...p, moq_adjustment: 0 }));
  }

  // Sort by order frequency + confidence
  const sortedProducts = sortByOrderFrequencyAndConfidence(products);

  // Initialize moq_adjustment to 0 for all products
  const adjustedProducts = products.map((p) => ({ ...p, moq_adjustment: 0 }));

  let remainingGap = gap;
  let currentIndex = 0;
  let iterations = 0;
  const maxIterations = 10000; // Infinite loop protection

  // Round-robin loop: add +1 unit each turn
  while (remainingGap > 0 && iterations < maxIterations) {
    const sortedProduct = sortedProducts[currentIndex];

    // Find this product in adjustedProducts
    const adjustedProduct = adjustedProducts.find(
      (p) => p.product_id === sortedProduct.product_id
    )!;

    // Add +1 unit
    adjustedProduct.quantity_to_order += 1;
    adjustedProduct.subtotal += adjustedProduct.current_price_unit;
    adjustedProduct.moq_adjustment += 1;

    remainingGap -= adjustedProduct.current_price_unit;

    // Move to next product (round-robin)
    currentIndex = (currentIndex + 1) % sortedProducts.length;
    iterations++;
  }

  return adjustedProducts;
}
