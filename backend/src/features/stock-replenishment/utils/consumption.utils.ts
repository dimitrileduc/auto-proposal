/**
 * Consumption calculation utilities
 * @module features/stock-replenishment/utils/consumption
 */
import { autoProposalConfig } from "../../../config/auto-proposal";
import type { OrderLineDetail, ProductOrderHistory } from "../order-history/order-history.types";
import { calculateMedian } from "./median.utils";

/**
 * Calculates the client's average reorder window
 * based on intervals between orders of regular products
 *
 * @param products - List of all client products with their order history
 * @returns Median reorder interval (days) | null if insufficient data
 *
 * @example
 * // Client has 3 regular products:
 * // - Product A: orders at D0, D15, D30 -> intervals [15d, 15d]
 * // - Product B: orders at D0, D20, D40 -> intervals [20d, 20d]
 * // - Product C: orders at D0, D12, D24 -> intervals [12d, 12d]
 * // -> All intervals: [15, 15, 20, 20, 12, 12]
 * // -> Median: 15 days
 */
export function calculateClientReorderWindow(
  products: ProductOrderHistory[]
): number | null {
  const allIntervals: number[] = [];

  // For each client product
  for (const product of products) {
    // Skip products with less than 2 orders (no interval calculable)
    if (product.orders.length < 2) continue;

    // Sort by date descending (most recent first)
    const sortedOrders = [...product.orders].sort(
      (a, b) => new Date(b.date_order).getTime() - new Date(a.date_order).getTime()
    );

    // Calculate intervals between successive orders
    for (let i = 0; i < sortedOrders.length - 1; i++) {
      const currentDate = new Date(sortedOrders[i].date_order);
      const nextDate = new Date(sortedOrders[i + 1].date_order);
      const daysBetween = (currentDate.getTime() - nextDate.getTime()) / (1000 * 60 * 60 * 24);
      allIntervals.push(daysBetween);
    }
  }

  // Not enough data (no product with 2+ orders)
  if (allIntervals.length === 0) return null;

  // Return median (robust to outliers)
  return calculateMedian(allIntervals);
}

/**
 * Calculates average daily consumption based on order history
 *
 * Automatically adapts calculation period for recent products:
 * - Product ordered for 60d -> calculate over 60d (not 365d)
 * - Avoids underestimating consumption for new products
 *
 * @param orders - Product order list (sorted by date descending)
 * @param daysOfHistory - Total analysis period in days (e.g., 365)
 * @param currentDate - Current date for calculation
 * @param clientReorderWindow - Optional client reorder window for single-order products
 * @returns Average consumption per day
 */
export function calculateDailyConsumption(
  orders: OrderLineDetail[],
  daysOfHistory: number,
  currentDate: Date = new Date(),
  clientReorderWindow?: number
): number {
  if (orders.length === 0) {
    return 0;
  }

  const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0);

  // Find first order date for this product
  const firstOrderDate = new Date(
    Math.min(...orders.map((o) => new Date(o.date_order).getTime()))
  );

  // Days since first product order
  const daysSinceFirstOrder = Math.floor(
    (currentDate.getTime() - firstOrderDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // For products with 1 order, use client window if available
  if (orders.length === 1 && clientReorderWindow) {
    return totalQuantity / clientReorderWindow;
  }

  // Adapt period: use actual history if < analysis window
  const actualDays = Math.min(daysOfHistory, daysSinceFirstOrder);

  // Protection against division by zero
  if (actualDays <= 0) {
    return 0;
  }

  return totalQuantity / actualDays;
}
