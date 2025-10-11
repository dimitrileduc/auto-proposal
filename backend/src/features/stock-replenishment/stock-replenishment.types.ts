import type { QuantityCalculationMetadata } from "./utils/quantity.utils";

export interface OrderHistoryDetail {
  order_id: number;
  order_name: string;
  date_order: string;
  quantity: number;
  price_unit: number;
}

export interface StockPredictionDetails {
  consumption_per_day: number;
  estimated_stock_remaining: number;
  days_until_stockout: number;
  replenishment_threshold_days: number;
}

export interface ProductStockStatus {
  product_id: number;
  product_name: string;
  product_uom: [number, string];

  // 1. Historique des commandes (base)
  order_history: OrderHistoryDetail[];

  // 2. Stock prediction (Phase 1: TRIGGER)
  stock_prediction: StockPredictionDetails;

  // 3. Quantity calculation (Phase 2: QUANTITÉ)
  quantity_to_order: number;
  calculation_metadata: QuantityCalculationMetadata;
}

export interface StockReplenishmentResult {
  client_id: number;
  products: ProductStockStatus[]; // Uniquement les produits avec risque de rupture
  total_products_in_history: number; // Nombre total de produits dans l'historique (180j) avant filtrage
}
