/**
 * Order history types for stock analysis
 * @module features/stock-replenishment/order-history/types
 */

/**
 * Individual order line detail
 */
export interface OrderLineDetail {
  order_id: number;
  order_name: string;
  date_order: string;
  quantity: number;
  price_unit: number;
}

/**
 * Product order history with all past orders
 */
export interface ProductOrderHistory {
  product_id: number;
  product_name: string;
  product_uom: [number, string];
  /** Product type: "product" | "service" | "consu" */
  product_type: string;
  orders: OrderLineDetail[];
}

/**
 * Client order history grouped by product
 */
export interface ClientOrderHistory {
  partner_id: number;
  products: ProductOrderHistory[];
}
