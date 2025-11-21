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
}
