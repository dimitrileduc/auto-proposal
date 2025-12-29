import type { QuantityCalculationMetadata } from "./utils/quantity.utils";

export interface OrderHistoryDetail {
  order_id: number;
  order_name: string;
  date_order: string;
  quantity: number;
  price_unit: number;
}

export interface LLMPredictionDetails {
  quantity: number;
  confidence: "low" | "medium" | "high";
  reasoning: string;
  summary?: string; // Justification courte (max 60 chars) pour Odoo
  baseline_quantity: number; // Baseline quantity from analysis
  // Structured analysis object (Double Chain of Thought)
  analysis: {
    frequency_pattern: string; // Pattern temporel identifié (ex: "hebdomadaire", "mensuel")
    detected_outliers: number[]; // Quantités identifiées comme événements exceptionnels
    seasonality_impact: "none" | "weak" | "strong"; // Impact saisonnier détecté
    trend_direction: string; // Direction observée (ex: "croissant +15%", "stable", "décroissant -10%")
    // Optional Double CoT fields
    day_cycle_analysis?: string; // Analyse du jour de commande habituel vs jour demandé
    cycle_days?: number; // Nombre de jours du cycle médian détecté
    last_order_date?: string; // Date de la dernière commande (YYYY-MM-DD)
    predicted_next_date?: string; // Date prédite de la prochaine commande
    days_until_next?: number; // Nombre de jours jusqu'à la prochaine commande
  };
  // Detailed confidence scores from Double CoT
  confidence_phase1?: "low" | "medium" | "high"; // Confiance détection risque
  confidence_phase2?: "low" | "medium" | "high"; // Confiance quantité
  // Provider reasoning (thinking tokens from Kimi/DeepSeek)
  provider_reasoning?: string;
  // Model info
  model?: string; // Ex: "moonshotai/kimi-k2-thinking"
  provider?: string; // Ex: "openrouter"
  // Token usage for this specific product
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export interface ProductStockStatus {
  product_id: number;
  product_name: string;
  product_uom: [number, string];

  // 1. Historique des commandes
  order_history: OrderHistoryDetail[];

  // 2. Quantité finale
  quantity_to_order: number;
  quantity_source: "llm" | "median-fallback"; // Source de la quantité finale

  // 3. Métadonnées de calcul historique (indépendant du LLM)
  calculation_metadata: QuantityCalculationMetadata;

  // 4. LLM prediction (si disponible)
  llm_prediction?: LLMPredictionDetails;

  // 4. LLM input data (pour debug/audit dans les rapports)
  llm_input_data?: {
    recent_orders: Array<{ date: string; quantity: number }>;
    last_year_orders: Array<{ date: string; quantity: number }>;
  };
}

export interface LLMUsageSummary {
  calls: number;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}

export interface StockReplenishmentResult {
  client_id: number;
  products: ProductStockStatus[]; // Uniquement les produits avec risque de rupture
  total_products_in_history: number; // Nombre total de produits dans l'historique (180j) avant filtrage
  all_products?: ProductStockStatus[]; // TOUS les produits analysés (avec + sans rupture) pour backtest
  llm_usage?: LLMUsageSummary; // Usage LLM pour ce client (si utilisé)
}
