/**
 * Backtesting system types
 *
 * Compares auto-proposal system predictions with actual orders
 * to evaluate prediction quality (TP/FP/FN metrics, MAE, MAPE)
 *
 * @module features/backtesting/types
 */

/**
 * LLM usage summary
 */
export interface LLMUsageSummary {
  calls: number;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}

/**
 * Complete comparison result: System vs Reality
 */
export interface BacktestComparisonResult {
  // Context
  clientId: number;
  clientName: string;
  orderName: string;
  orderDate: string;
  cutoffDate: string;
  daysBeforePrediction: number;

  // Products by category
  /** System predicted + Client ordered */
  truePositives: ProductMatch[];
  /** System predicted but NOT ordered */
  falsePositives: ProductMismatch[];
  /** Client ordered but NOT predicted */
  falseNegatives: ProductMismatch[];

  // Product-level metrics (binary)
  productMetrics: {
    /** TP / (TP + FP) */
    precision: number;
    /** TP / (TP + FN) */
    recall: number;
    /** 2 * P*R / (P+R) */
    f1Score: number;
    totalPredicted: number;
    totalReal: number;
  };

  // Quantity-level metrics (continuous)
  quantityMetrics: {
    /** Mean Absolute Error (units) - PRIMARY METRIC */
    mae: number;
    /** Weighted MAPE (%) - ROBUST RECOMMENDED METRIC */
    wmape: number;
    /** Mean Absolute Percentage Error (%) - INFO (biased) */
    mape: number;
    /** Directional bias (%) - >0 = overestimate, <0 = underestimate */
    bias: number;
    distribution: {
      /** Error = 0 (perfect quantity) */
      exactMatch: number;
      /** Error > 0 (with error) */
      partialMatch: number;
    };
  };

  // LLM usage (if used)
  llmUsage?: LLMUsageSummary;
}

/**
 * Correctly predicted product (TP) with quantity analysis
 */
export interface ProductMatch {
  productId: number;
  productName: string;
  predictedQty: number;
  realQty: number;
  /** |predicted - real| in units */
  absoluteError: number;
  /** Error percentage (for MAPE) */
  errorPercent: number;
  /** exact = perfect equality, partial = error > 0 */
  matchType: 'exact' | 'partial';
  /** Prediction confidence level (based on history) */
  confidence: 'low' | 'medium' | 'high';

  // LLM info (detailed tracking)
  /** Should the product use LLM? (>2 orders) */
  llm_required: boolean;
  /** Did we successfully get an LLM prediction? */
  llm_success: boolean;
  /** Final quantity source */
  quantitySource: 'median' | 'llm';
  /** Median quantity (for comparison if LLM used) */
  medianQty?: number;

  // Data passed to LLM (for debug/audit)
  llm_input_data?: {
    recent_orders: Array<{ date: string; quantity: number }>;
    last_year_orders: Array<{ date: string; quantity: number }>;
  };

  // LLM prediction (if success)
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
 * Incorrectly predicted product (FP or FN)
 */
export interface ProductMismatch {
  productId: number;
  productName: string;
  qty: number;
  /** Justification (e.g., "Stock sufficient", "No history") */
  reason: string;
  /** Confidence level based on history (for filtering by confidence) */
  confidence?: 'low' | 'medium' | 'high';

  // LLM info (consistency with TP)
  llm_required?: boolean;
  llm_success?: boolean;
  quantitySource?: 'median' | 'llm' | 'unknown';
  medianQty?: number;

  // Data passed to LLM (for debug/audit)
  llm_input_data?: {
    recent_orders: Array<{ date: string; quantity: number }>;
    last_year_orders: Array<{ date: string; quantity: number }>;
  };

  // LLM prediction
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
// TYPES FOR ENRICHED JSON V2 FORMAT
// ============================================================================

/**
 * Statistics calculated on product order history
 */
export interface HistoryStatistics {
  mean: number;
  median: number;
  stdDev: number;
  min: number;
  max: number;
  /** Coefficient of variation (stdDev / mean) */
  cv: number;
  trend: "increasing" | "stable" | "decreasing";
  outliers: number[];
  /** Order regularity score 0-1 */
  regularityScore: number;
}

/**
 * Automatically calculated features for product classification
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
 * Segmented performance metrics (global or by confidence level)
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
 * Enriched True Positive product with complete history, features, and LLM
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
 * Enriched False Positive or False Negative product with context
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
  // LLM data (enrichment for consistency with TP)
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
 * Complete JSON v2 format for enriched backtest report
 *
 * Differences from v1:
 * - Single file per client (no low/clean separation)
 * - Complete per-product details (history, features, LLM)
 * - Metrics segmented by confidence
 * - Error and mismatch classification
 */
export interface BacktestReportJSONv2 {
  meta: {
    version: "2.0.0";
    /** ISO 8601 timestamp */
    generatedAt: string;
    config: {
      daysBeforePrediction: number;
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
