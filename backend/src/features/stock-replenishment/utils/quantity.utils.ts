/**
 * Quantity calculation utilities
 * @module features/stock-replenishment/utils/quantity
 */
import { calculateMedian } from "./median.utils";
import type { OrderLineDetail } from "../order-history/order-history.types";

/**
 * Quantity calculation metadata
 */
export interface QuantityCalculationMetadata {
  strategy: "skip" | "single_recent_order" | "median_recent_orders";
  confidence: "low" | "medium" | "high" | null;
  historical_quantities: number[];
  order_count: number;
  median_value: number | null;
}

/**
 * Quantity calculation result
 */
export interface QuantityCalculationResult {
  quantity: number | null;
  metadata: QuantityCalculationMetadata;
}

/**
 * Calculates order quantity based on product order history
 * Uses a 4-level strategy based on order line count
 *
 * - Level 0: No orders -> Skip
 * - Level 1: Single order -> Repeat quantity (low confidence)
 * - Level 2: 2-4 orders -> Median of all (medium confidence)
 * - Level 3: 5+ orders -> Median of last 10 (high confidence)
 *
 * @param orderLines - Product order lines
 * @returns Recommended quantity and metadata
 */
export function calculateQuantityFromHistory(
  orderLines: OrderLineDetail[]
): QuantityCalculationResult {
  const orderCount = orderLines.length;

  // Level 0: No order lines -> Skip
  if (orderCount === 0) {
    return {
      quantity: null,
      metadata: {
        strategy: "skip",
        confidence: null,
        historical_quantities: [],
        order_count: 0,
        median_value: null,
      },
    };
  }

  // Sort by date DESC
  const sortedOrders = [...orderLines].sort(
    (a, b) =>
      new Date(b.date_order).getTime() - new Date(a.date_order).getTime()
  );

  const quantities = sortedOrders.map((line) => line.quantity);

  // Level 1: Single order -> Repeat
  if (orderCount === 1) {
    return {
      quantity: quantities[0],
      metadata: {
        strategy: "single_recent_order",
        confidence: "low",
        historical_quantities: quantities,
        order_count: orderCount,
        median_value: quantities[0],
      },
    };
  }

  // Level 2: 2-4 orders -> Median of all
  if (orderCount < 5) {
    const median = calculateMedian(quantities);
    return {
      quantity: median,
      metadata: {
        strategy: "median_recent_orders",
        confidence: "medium",
        historical_quantities: quantities,
        order_count: orderCount,
        median_value: median,
      },
    };
  }

  // Level 3: 5+ orders -> Median of last 10
  const recentQuantities = quantities.slice(0, 10);
  const median = calculateMedian(recentQuantities);

  return {
    quantity: median,
    metadata: {
      strategy: "median_recent_orders",
      confidence: "high",
      historical_quantities: recentQuantities,
      order_count: orderCount,
      median_value: median,
    },
  };
}
