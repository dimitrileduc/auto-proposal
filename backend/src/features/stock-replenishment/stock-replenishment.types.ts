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

export interface LLMPredictionDetails {
  quantity: number;
  confidence: "low" | "medium" | "high";
  reasoning: string;
  baseline_quantity: number; // Médiane N-1 après de-eventing
  outliers_detected: number[]; // Outliers détectés (> 2x médiane)
  trend_ratio: string; // Ex: "+15%", "stable", "-10%"
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

  // 4. LLM prediction (si utilisé pour >2 commandes)
  llm_prediction?: LLMPredictionDetails;
  quantity_source?: "median" | "llm"; // Source de la quantité finale
}

export interface LLMUsageSummary {
  calls: number;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  costUSD: number;
}

export interface StockReplenishmentResult {
  client_id: number;
  products: ProductStockStatus[]; // Uniquement les produits avec risque de rupture
  total_products_in_history: number; // Nombre total de produits dans l'historique (180j) avant filtrage
  all_products?: ProductStockStatus[]; // TOUS les produits analysés (avec + sans rupture) pour backtest
  llm_usage?: LLMUsageSummary; // Usage LLM pour ce client (si utilisé)
}
