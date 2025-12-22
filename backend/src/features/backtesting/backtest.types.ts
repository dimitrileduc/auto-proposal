/**
 * Types pour le système de backtesting
 *
 * Compare les prédictions du système auto-proposal avec les commandes réelles
 * pour évaluer la qualité des prédictions (métriques TP/FP/FN, MAE, MAPE)
 */

/**
 * Résumé d'usage LLM
 */
export interface LLMUsageSummary {
  calls: number;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}

/**
 * Résultat complet de la comparaison Système vs Réel
 */
export interface BacktestComparisonResult {
  // Contexte
  clientId: number;
  clientName: string;
  orderName: string;
  orderDate: string;
  cutoffDate: string;
  daysBeforePrediction: number;

  // Produits par catégorie
  truePositives: ProductMatch[];      // Système prédit + Client commande
  falsePositives: ProductMismatch[];  // Système prédit mais PAS commandé
  falseNegatives: ProductMismatch[];  // Client commande mais PAS prédit

  // Métriques niveau produit (binaire)
  productMetrics: {
    precision: number;     // TP / (TP + FP)
    recall: number;        // TP / (TP + FN)
    f1Score: number;       // 2 * P*R / (P+R)
    totalPredicted: number;
    totalReal: number;
  };

  // Métriques niveau quantité (continue)
  quantityMetrics: {
    mae: number;           // Mean Absolute Error (unités) - MÉTRIQUE PRINCIPALE
    wmape: number;         // Weighted MAPE (%) - MÉTRIQUE ROBUSTE RECOMMANDÉE
    mape: number;          // Mean Absolute Percentage Error (%) - INFO (biaisé)
    bias: number;          // Biais directionnel (%) - >0 = surestime, <0 = sous-estime
    distribution: {
      exactMatch: number;   // Erreur = 0 (quantité parfaite)
      partialMatch: number; // Erreur > 0 (avec erreur)
    };
  };

  // Usage LLM (si utilisé)
  llmUsage?: LLMUsageSummary;
}

/**
 * Produit correctement prédit (TP) avec analyse quantité
 */
export interface ProductMatch {
  productId: number;
  productName: string;
  predictedQty: number;
  realQty: number;
  absoluteError: number;        // |predicted - real| en unités
  errorPercent: number;         // Erreur en pourcentage (pour MAPE)
  matchType: 'exact' | 'partial';  // exact = égalité parfaite, partial = erreur > 0
  confidence: 'low' | 'medium' | 'high';  // Niveau de confiance de la prédiction (basé sur historique)

  // Infos LLM (tracking détaillé)
  llm_required: boolean;  // Le produit devait-il utiliser le LLM ? (>2 commandes)
  llm_success: boolean;   // A-t-on réussi à obtenir une prédiction LLM ?
  quantitySource: 'median' | 'llm';  // Source finale de la quantité
  medianQty?: number; // Quantité médiane (pour comparaison si LLM utilisé)

  // Données passées au LLM (pour debug/audit)
  llm_input_data?: {
    recent_orders: Array<{ date: string; quantity: number }>;
    last_year_orders: Array<{ date: string; quantity: number }>;
  };

  // Prédiction LLM (si succès)
  llmPrediction?: {
    quantity: number;
    confidence: 'low' | 'medium' | 'high';
    reasoning: string;
    baseline_quantity: number;
    analysis: {
      frequency_pattern: string;
      detected_outliers: number[];
      seasonality_impact: 'none' | 'weak' | 'strong';
      trend_direction: string;
    };
    usage: {
      promptTokens: number;
      completionTokens: number;
      totalTokens: number;
    };
  };
}

/**
 * Produit mal prédit (FP ou FN)
 */
export interface ProductMismatch {
  productId: number;
  productName: string;
  qty: number;
  reason: string;  // Justification (ex: "Stock suffisant", "Pas d'historique")
  confidence?: 'low' | 'medium' | 'high';  // Niveau de confiance basé sur historique (pour filtrage par confidence)

  // Infos LLM (cohérence avec TP)
  llm_required?: boolean;
  llm_success?: boolean;
  quantitySource?: 'median' | 'llm' | 'unknown';
  medianQty?: number;

  // Données passées au LLM (pour debug/audit)
  llm_input_data?: {
    recent_orders: Array<{ date: string; quantity: number }>;
    last_year_orders: Array<{ date: string; quantity: number }>;
  };

  // Prédiction LLM
  llmPrediction?: {
    quantity: number;
    confidence: 'low' | 'medium' | 'high';
    reasoning: string;
    baseline_quantity: number;
    analysis: {
      frequency_pattern: string;
      detected_outliers: number[];
      seasonality_impact: 'none' | 'weak' | 'strong';
      trend_direction: string;
    };
    usage: {
      promptTokens: number;
      completionTokens: number;
      totalTokens: number;
    };
  };
}

// ============================================================================
// TYPES POUR FORMAT JSON V2 ENRICHI
// ============================================================================

/**
 * Statistiques calculées sur l'historique des commandes d'un produit
 */
export interface HistoryStatistics {
  mean: number;
  median: number;
  stdDev: number;
  min: number;
  max: number;
  cv: number;  // Coefficient de variation (stdDev / mean)
  trend: "increasing" | "stable" | "decreasing";
  outliers: number[];
  regularityScore: number;  // Score 0-1 de régularité des commandes
}

/**
 * Features calculées automatiquement pour classifier un produit
 */
export interface ProductFeatures {
  quantityType: "fixed" | "variable" | "highly_variable";
  orderingPattern: "regular" | "irregular" | "seasonal";
  avgDaysBetweenOrders: number;
  lastOrderDaysAgo: number;
  isSeasonalProduct: boolean;
  hasRecentActivity: boolean;
}

/**
 * Métriques de performance segmentées (globales ou par niveau de confidence)
 */
export interface MetricsByConfidence {
  counts: {
    truePositives: number;
    falsePositives: number;
    falseNegatives: number;
    total: number;
  };

  productMetrics: {
    precision: number;
    recall: number;
    f1Score: number;
    totalPredicted: number;
    totalReal: number;
  };

  quantityMetrics: {
    mae: number;
    wmape: number;
    mape: number;
    bias: number;
    rmse: number;
    distribution: {
      exactMatch: number;
      partialMatch: number;
    };
  };
}

/**
 * Produit True Positive enrichi avec historique complet, features, et LLM
 */
export interface EnrichedProductMatch {
  productId: number;
  productName: string;
  productUom: string;

  prediction: {
    quantity: number;
    source: "median" | "llm";
    confidence: "low" | "medium" | "high";
  };

  reality: {
    quantity: number;
  };

  error: {
    absolute: number;
    percent: number;
    direction: "over" | "under" | "exact";
    severity: "none" | "low" | "medium" | "high" | "critical";
    matchType: "exact" | "partial";
  };

  history: {
    orderCount: number;
    orders: Array<{
      orderId: number;
      orderName: string;
      date: string;
      quantity: number;
      priceUnit: number;
    }>;
    statistics: HistoryStatistics;
    features: ProductFeatures;
  };

  llm?: {
    required: boolean;
    success: boolean;
    input: {
      recentOrders: Array<{ date: string; quantity: number }>;
      lastYearOrders: Array<{ date: string; quantity: number }>;
    };
    prediction?: {
      quantity: number;
      baselineQuantity: number;
      confidence: "low" | "medium" | "high";
      confidencePhase1?: "low" | "medium" | "high";
      confidencePhase2?: "low" | "medium" | "high";
      reasoning: string;
      providerReasoning?: string;
      analysis: {
        frequencyPattern: string;
        seasonalityImpact: "none" | "weak" | "strong";
        trendDirection: string;
        detectedOutliers: number[];
        cycleDays?: number;
        lastOrderDate?: string;
        predictedNextDate?: string;
        daysUntilNext?: number;
        dayCycleAnalysis?: string;
      };
      model?: string;
      provider?: string;
      usage: {
        promptTokens: number;
        completionTokens: number;
        totalTokens: number;
      };
    };
    comparison?: {
      medianQuantity: number;
      llmQuantity: number;
      realQuantity: number;
      medianError: number;
      llmError: number;
      llmImprovement: number;
    };
  };

  stock?: {
    estimatedRemaining: number;
    daysUntilStockout: number;
    replenishmentThreshold: number;
    consumptionPerDay: number;
  };
}

/**
 * Produit False Positive ou False Negative enrichi avec contexte
 */
export interface EnrichedProductMismatch {
  productId: number;
  productName: string;
  mismatchType: "false_positive" | "false_negative";
  quantity: number;
  reason: string;
  classification: {
    category: "stock_sufficient" | "no_history" | "llm_error" | "threshold_filtered" | "other";
    severity: "low" | "medium" | "high";
  };
  context?: {
    stock?: {
      estimatedRemaining: number;
      daysUntilStockout: number;
    };
    history?: {
      orderCount: number;
      lastOrderDaysAgo?: number;
      orders: Array<{
        orderId: number;
        orderName: string;
        date: string;
        quantity: number;
        priceUnit: number;
      }>;
    };
  };
  // LLM data (enrichissement pour cohérence avec TP)
  llm?: {
    required: boolean;
    success: boolean;
    input?: {
      recentOrders: Array<{ date: string; quantity: number }>;
      lastYearOrders: Array<{ date: string; quantity: number }>;
    };
    prediction?: {
      quantity: number;
      baselineQuantity: number;
      confidence: "low" | "medium" | "high";
      confidencePhase1?: "low" | "medium" | "high";
      confidencePhase2?: "low" | "medium" | "high";
      reasoning: string;
      providerReasoning?: string;
      analysis: {
        frequencyPattern: string;
        seasonalityImpact: "none" | "weak" | "strong";
        trendDirection: string;
        detectedOutliers: number[];
        cycleDays?: number;
        lastOrderDate?: string;
        predictedNextDate?: string;
        daysUntilNext?: number;
        dayCycleAnalysis?: string;
      };
      model?: string;
      provider?: string;
      usage: {
        promptTokens: number;
        completionTokens: number;
        totalTokens: number;
      };
    };
  };
}

/**
 * Format JSON v2 complet pour rapport de backtest enrichi
 *
 * Différences avec v1:
 * - Un seul fichier par client (pas de séparation low/clean)
 * - Détails complets par produit (historique, features, LLM)
 * - Métriques segmentées par confidence
 * - Classification des erreurs et mismatches
 */
export interface BacktestReportJSONv2 {
  meta: {
    version: "2.0.0";
    generatedAt: string;  // ISO 8601 timestamp
    config: {
      daysBeforePrediction: number;
      analysisWindowDays: number;
      cutoffDate: string;
    };
  };

  client: {
    id: number;
    name: string;
    order: {
      name: string;
      date: string;
    };
  };

  metrics: {
    all: MetricsByConfidence;
    byConfidence: {
      low: MetricsByConfidence;
      medium: MetricsByConfidence;
      high: MetricsByConfidence;
    };
  };

  llmUsage?: {
    calls: number;
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };

  products: {
    truePositives: EnrichedProductMatch[];
    falsePositives: EnrichedProductMismatch[];
    falseNegatives: EnrichedProductMismatch[];
  };
}
