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
  product_uom_id: [number, string];
  orders: OrderLineDetail[];
}

export interface ClientOrderHistory {
  partner_id: number;
  products: ProductOrderHistory[];
}