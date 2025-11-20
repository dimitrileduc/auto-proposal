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
  costUSD: number;
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

  // Infos LLM (si utilisé pour prédire la quantité)
  quantitySource?: 'median' | 'llm';
  medianQty?: number; // Quantité médiane (pour comparaison si LLM utilisé)
  llmPrediction?: {
    quantity: number;
    confidence: 'low' | 'medium' | 'high';
    reasoning: string;
    temporal_analysis: string;
    quantity_analysis: string;
    trend_detected: boolean;
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
