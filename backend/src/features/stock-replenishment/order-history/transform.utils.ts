/**
 * Order history transformation utilities
 * @module features/stock-replenishment/order-history/transform
 */
import type { OrderHistory } from "../../../infrastructure/odoo/odoo.service";
import type { ClientOrderHistory, ProductOrderHistory } from "./order-history.types";

/**
 * Transforms raw Odoo order history into product-grouped structure
 *
 * Note: Non-food product filtering (deposits, pallets, packaging, etc.)
 * is done on the Odoo side in the query for performance optimization.
 *
 * @param rawHistory - Raw Odoo data (orders + orderLines already filtered)
 * @param partnerId - Partner ID
 * @returns Order history structured by product with orders sorted by date descending
 */
export function transformOrderHistory(
  rawHistory: OrderHistory,
  partnerId: number
): ClientOrderHistory {
  if (rawHistory.orders.length === 0) {
    return {
      partner_id: partnerId,
      products: [],
    };
  }

  const ordersMap = new Map(
    rawHistory.orders.map((order) => [order.id, order])
  );

  const productsMap = new Map<number, ProductOrderHistory>();

  for (const line of rawHistory.orderLines) {
    const order = ordersMap.get(line.order_id[0]);
    if (!order) continue;

    const productId = line.product_id[0];
    const productName = line.product_id[1];

    if (!productsMap.has(productId)) {
      productsMap.set(productId, {
        product_id: productId,
        product_name: productName,
        product_uom: line.product_uom,
        product_type: line.product_type,
        orders: [],
      });
    }

    productsMap.get(productId)!.orders.push({
      order_id: order.id,
      order_name: order.name,
      date_order: order.date_order,
      quantity: line.product_uom_qty,
      price_unit: line.price_unit,
    });
  }

  for (const product of productsMap.values()) {
    product.orders.sort(
      (a, b) => new Date(b.date_order).getTime() - new Date(a.date_order).getTime()
    );
  }

  return {
    partner_id: partnerId,
    products: Array.from(productsMap.values()),
  };
}
