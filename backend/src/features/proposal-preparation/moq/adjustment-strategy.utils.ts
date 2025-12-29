/**
 * MOQ adjustment strategy utilities
 * @module features/proposal-preparation/moq/strategy
 */
import type { ProductWithCurrentPrice } from "../proposal-preparation.types";

/**
 * Sorts products by order frequency then confidence
 *
 * Sorting criteria (by priority):
 * 1. Order frequency (order_count DESC) - Most ordered first
 * 2. Confidence (high > medium > low) - Tiebreaker
 *
 * Used for MOQ adjustment: invest the gap in products
 * the client orders most frequently
 *
 * @param products - Products with current prices
 * @returns Products sorted by adjustment priority
 *
 * @example
 * ```
 * Before sorting:
 * | ID | Product          | Orders | Confidence |
 * |----|------------------|--------|------------|
 * | A  | Spread Mango     | 1      | low        |
 * | B  | Spread Paprika   | 3      | medium     |
 * | C  | Spread Hummus    | 1      | low        |
 * | D  | Spread Tomato    | 3      | high       |
 * | E  | Spread Olives    | 2      | medium     |
 * | F  | Spread Basilico  | 3      | medium     |
 *
 * After sorting:
 * | Rank | Product          | Orders | Confidence |
 * |------|------------------|--------|------------|
 * | 1st  | D - Tomato       | 3      | high       | <- Most ordered + high conf
 * | 2nd  | B - Paprika      | 3      | medium     | <- 3 orders
 * | 3rd  | F - Basilico     | 3      | medium     | <- 3 orders
 * | 4th  | E - Olives       | 2      | medium     |
 * | 5th  | A - Mango        | 1      | low        |
 * | 6th  | C - Hummus       | 1      | low        |
 * ```
 */
export function sortByOrderFrequencyAndConfidence(
  products: ProductWithCurrentPrice[]
): ProductWithCurrentPrice[] {
  return [...products].sort((a, b) => {
    // Criterion 1: Order frequency (DESC)
    const orderCountDiff =
      b.calculation_metadata.order_count - a.calculation_metadata.order_count;

    if (orderCountDiff !== 0) {
      return orderCountDiff;
    }

    // Criterion 2: Confidence (DESC) - tiebreaker
    const confidenceOrder: Record<string, number> = {
      high: 3,
      medium: 2,
      low: 1,
    };

    return (
      confidenceOrder[b.calculation_metadata.confidence] -
      confidenceOrder[a.calculation_metadata.confidence]
    );
  });
}
