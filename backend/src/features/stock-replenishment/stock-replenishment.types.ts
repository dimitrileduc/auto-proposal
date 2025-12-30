/**
 * Stock replenishment types
 * @module features/stock-replenishment/types
 */
import type { QuantityCalculationMetadata } from "./utils/quantity.utils";

/**
 * Order history detail for a product
 */
export interface OrderHistoryDetail {
  order_id: number;
  order_name: string;
  date_order: string;
  quantity: number;
  price_unit: number;
}

/**
 * LLM prediction details for a product
 */
export interface LLMPredictionDetails {
  quantity: number;
  reasoning: string;
  /** Short justification (max 60 chars) for Odoo quote */
  summary?: string;
  /** Baseline quantity from analysis */
  baseline_quantity: number;
  /** Provider reasoning (thinking tokens from Kimi/DeepSeek) */
  provider_reasoning?: string;
  /** Model identifier (e.g., "google/gemini-3-flash-preview") */
  model?: string;
  /** Provider name (e.g., "openrouter") */
  provider?: string;
  /** Token usage for this specific product */
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

/**
 * Product stock status with replenishment analysis
 */
export interface ProductStockStatus {
  product_id: number;
  product_name: string;
  product_uom: [number, string];

  /** Order history for this product */
  order_history: OrderHistoryDetail[];

  /** Final quantity to order */
  quantity_to_order: number;
  /** Source of the final quantity ("llm" or "median-fallback") */
  quantity_source: "llm" | "median-fallback";

  /** Historical calculation metadata (independent of LLM) */
  calculation_metadata: QuantityCalculationMetadata;

  /** LLM prediction details (if available) */
  llm_prediction?: LLMPredictionDetails;

  /** LLM input data for debug/audit in reports */
  llm_input_data?: {
    recent_orders: Array<{ date: string; quantity: number }>;
    last_year_orders: Array<{ date: string; quantity: number }>;
  };
}

/**
 * LLM usage summary for a client
 */
export interface LLMUsageSummary {
  calls: number;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}

/**
 * Stock replenishment analysis result for a client
 */
export interface StockReplenishmentResult {
  client_id: number;
  /** Products with stockout risk (to order) */
  products: ProductStockStatus[];
  /** Total products in history (before filtering) */
  total_products_in_history: number;
  /** All analyzed products (with/without risk) for backtesting */
  all_products?: ProductStockStatus[];
  /** LLM usage for this client (if used) */
  llm_usage?: LLMUsageSummary;
}
