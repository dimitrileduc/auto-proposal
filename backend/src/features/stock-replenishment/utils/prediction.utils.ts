/**
 * Stock prediction utilities
 * @module features/stock-replenishment/utils/prediction
 */
import type { ProductOrderHistory } from "../order-history/order-history.types";

/**
 * Predicts stock status based on consumption and last order
 *
 * @param product - Product order history
 * @param consumptionPerDay - Average daily consumption
 * @param currentDate - Current date (for testing)
 * @returns Stock prediction with estimated stock and days until stockout
 */
export function predictStockStatus(
  product: ProductOrderHistory,
  consumptionPerDay: number,
  currentDate: Date = new Date()
): { estimatedStock: number; daysUntilStockout: number } {
  // If no orders, no stock
  if (product.orders.length === 0) {
    return { estimatedStock: 0, daysUntilStockout: 0 };
  }

  // Last order (most recent)
  const lastOrder = product.orders[0];
  const lastOrderDate = new Date(lastOrder.date_order);
  const lastQuantity = lastOrder.quantity;

  // Calculate days elapsed since last order
  const daysElapsed = Math.floor(
    (currentDate.getTime() - lastOrderDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Estimate remaining stock
  const estimatedStock = lastQuantity - daysElapsed * consumptionPerDay;

  // Calculate days until stockout (negative = already out of stock)
  const daysUntilStockout = Math.trunc(estimatedStock / consumptionPerDay);

  return {
    estimatedStock,
    daysUntilStockout,
  };
}
