export interface OrderLineDetail {
  order_id: number;
  order_name: string;
  date_order: string;
  quantity: number;
  price_unit: number;
}

export interface ProductOrderHistory {
  product_id: number;
  product_name: string;
  product_uom: [number, string];
  product_type: string;  // "product" | "service" | "consu"
  orders: OrderLineDetail[];
}

export interface ClientOrderHistory {
  partner_id: number;
  products: ProductOrderHistory[];
}