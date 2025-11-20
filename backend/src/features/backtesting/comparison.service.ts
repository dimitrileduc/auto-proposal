/**
 * Service de comparaison pour le backtesting
 *
 * Compare les prédictions du système auto-proposal avec les commandes réelles Odoo
 * Calcule les métriques: TP/FP/FN, Precision/Recall/F1, MAE, MAPE
 */

import type { ProposalPreparationResult } from "../proposal-preparation/proposal-preparation.types";
import type { StockReplenishmentResult } from "../stock-replenishment/stock-replenishment.types";
import type { OdooSaleOrderLine } from "../../infrastructure/odoo/clients/odoo-client.types";
import type {
  BacktestComparisonResult,
  ProductMatch,
  ProductMismatch,
} from "./backtest.types";

/**
 * Compare les prédictions du système auto-proposal avec la commande réelle
 *
 * @param systemProposal - Résultat de la prédiction du système (ProposalPreparationResult)
 * @param realOrderLines - Lignes de la commande réelle Odoo (OdooSaleOrderLine[])
 * @param stockAnalysis - Résultat complet de l'analyse stock (pour analyser les FN)
 * @param orderContext - Contexte de la commande (client, dates, etc.)
 * @returns Résultat complet de la comparaison avec métriques
 */
export function compareSystemPredictionVsRealOrder(
  systemProposal: ProposalPreparationResult,
  realOrderLines: OdooSaleOrderLine[],
  stockAnalysis: StockReplenishmentResult,
  orderContext: {
    clientId: number;
    clientName: string;
    orderName: string;
    orderDate: string;
    cutoffDate: string;
    daysBeforePrediction: number;
    analysisWindowDays?: number;
  }
): BacktestComparisonResult {
  // 1. Créer des Maps pour faciliter la comparaison (clé = productId)
  const systemProducts = new Map(
    systemProposal.products.map((p) => [p.product_id, p])
  );

  // Filtrer les services de la même manière que le système (stock-replenishment.service.ts:48)
  const realProducts = new Map(
    realOrderLines
      .filter((line) => line.product_type !== "service")
      .map((line) => [line.product_id[0], line])
  );

  // Map des produits analysés (inclut ceux filtrés par seuil de rupture)
  // Utiliser all_products si disponible (pour backtest), sinon products (pour compatibilité)
  const allProducts = stockAnalysis.all_products ?? stockAnalysis.products;
  const analyzedProducts = new Map(
    allProducts.map((p) => [p.product_id, p])
  );

  // 2. Calculer TP/FP/FN
  const truePositives: ProductMatch[] = [];
  const falsePositives: ProductMismatch[] = [];
  const falseNegatives: ProductMismatch[] = [];

  // 3. Parcourir les prédictions du système
  for (const [productId, systemProduct] of systemProducts) {
    const realProduct = realProducts.get(productId);

    if (realProduct) {
      // TRUE POSITIVE: Le système a prédit ET le client a commandé
      const predictedQty = systemProduct.quantity_to_order;
      const realQty = realProduct.product_uom_qty;
      const absoluteError = Math.abs(predictedQty - realQty);

      // Calcul de l'erreur en pourcentage (pour MAPE)
      // Gérer le cas où realQty = 0 (éviter division par zéro)
      const errorPercent = realQty > 0
        ? (absoluteError / realQty) * 100
        : 0;

      // Récupérer les infos LLM si disponibles
      const analyzedProduct = analyzedProducts.get(productId);
      const quantitySource = analyzedProduct?.quantity_source;
      const medianQty = quantitySource === 'llm' ? analyzedProduct?.calculation_metadata.median : undefined;
      const llmPrediction = analyzedProduct?.llm_prediction;

      truePositives.push({
        productId,
        productName: systemProduct.product_name,
        predictedQty,
        realQty,
        absoluteError,
        errorPercent,
        matchType: classifyQuantityMatch(predictedQty, realQty),
        confidence: systemProduct.calculation_metadata.confidence,
        quantitySource,
        medianQty,
        llmPrediction,
      });
    } else {
      // FALSE POSITIVE: Le système a prédit MAIS le client n'a pas commandé
      const analyzedProduct = analyzedProducts.get(productId);
      let reason = "Prédit mais non commandé";

      if (analyzedProduct) {
        const stock = analyzedProduct.stock_prediction.estimated_stock_remaining;
        const days = analyzedProduct.stock_prediction.days_until_stockout;
        reason = `Stock prédit: ${stock.toFixed(1)}u (${days}j restants) → prédit ${systemProduct.quantity_to_order}u mais non commandé`;
      }

      falsePositives.push({
        productId,
        productName: systemProduct.product_name,
        qty: systemProduct.quantity_to_order,
        reason,
      });
    }
  }

  // 4. Parcourir les commandes réelles pour trouver les FN
  for (const [productId, realProduct] of realProducts) {
    if (!systemProducts.has(productId)) {
      // FALSE NEGATIVE: Le client a commandé MAIS le système n'avait pas prédit
      let reason = "Raison inconnue";

      // Vérifier si le produit était dans stockAnalysis (analysé mais filtré)
      const analyzedProduct = analyzedProducts.get(productId);

      if (analyzedProduct) {
        // Produit analysé mais filtré → raison = seuil de rupture non atteint
        const stock = analyzedProduct.stock_prediction.estimated_stock_remaining;
        const days = analyzedProduct.stock_prediction.days_until_stockout;
        const threshold = analyzedProduct.stock_prediction.replenishment_threshold_days;
        reason = `Stock suffisant: ${stock.toFixed(1)}u (${days}j restants > seuil ${threshold}j)`;
      } else {
        // Produit PAS dans stockAnalysis → jamais commandé avant dans la fenêtre d'analyse
        const windowDays = orderContext.analysisWindowDays ?? 120;
        reason = `Jamais commandé avant dans les ${windowDays}j précédents (pas d'historique)`;
      }

      falseNegatives.push({
        productId,
        productName: realProduct.product_id[1],
        qty: realProduct.product_uom_qty,
        reason,
      });
    }
  }

  // 5. Calculer les métriques
  const productMetrics = calculateProductMetrics(
    truePositives.length,
    falsePositives.length,
    falseNegatives.length
  );

  const quantityMetrics = calculateQuantityMetrics(truePositives);

  // 6. Retourner le résultat complet
  return {
    ...orderContext,
    truePositives,
    falsePositives,
    falseNegatives,
    productMetrics,
    quantityMetrics,
    llmUsage: stockAnalysis.llm_usage,
  };
}

/**
 * Calcule les métriques de détection produit (binaire)
 *
 * @param tp - Nombre de True Positives
 * @param fp - Nombre de False Positives
 * @param fn - Nombre de False Negatives
 * @returns Métriques: precision, recall, f1Score, totaux
 */
export function calculateProductMetrics(
  tp: number,
  fp: number,
  fn: number
): {
  precision: number;
  recall: number;
  f1Score: number;
  totalPredicted: number;
  totalReal: number;
} {
  const totalPredicted = tp + fp;
  const totalReal = tp + fn;

  // Precision = TP / (TP + FP)
  // "Sur 100 produits prédits, combien sont vraiment commandés ?"
  const precision = totalPredicted > 0 ? tp / totalPredicted : 0;

  // Recall = TP / (TP + FN)
  // "Sur 100 produits commandés, combien ont été détectés ?"
  const recall = totalReal > 0 ? tp / totalReal : 0;

  // F1-Score = 2 × (Precision × Recall) / (Precision + Recall)
  // Score équilibré entre précision et rappel
  const f1Score =
    precision + recall > 0
      ? (2 * (precision * recall)) / (precision + recall)
      : 0;

  return {
    precision,
    recall,
    f1Score,
    totalPredicted,
    totalReal,
  };
}

/**
 * Calcule les métriques de précision quantité (continue)
 *
 * @param truePositives - Liste des produits correctement prédits avec quantités
 * @returns Métriques: MAE (principale), wMAPE (robuste), MAPE (info), distribution
 */
export function calculateQuantityMetrics(
  truePositives: ProductMatch[]
): {
  mae: number;
  wmape: number;
  mape: number;
  bias: number;
  distribution: {
    exactMatch: number;
    partialMatch: number;
  };
} {
  if (truePositives.length === 0) {
    return {
      mae: 0,
      wmape: 0,
      mape: 0,
      bias: 0,
      distribution: { exactMatch: 0, partialMatch: 0 },
    };
  }

  // MAE = Mean Absolute Error (unités) - MÉTRIQUE PRINCIPALE
  // Formule: MAE = (1/N) × Σ |Qté_Prédite - Qté_Réelle|
  // Avantages: Symétrique, facile à interpréter ("en moyenne, on se trompe de X unités")
  const mae =
    truePositives.reduce((sum, tp) => sum + tp.absoluteError, 0) /
    truePositives.length;

  // wMAPE = Weighted Mean Absolute Percentage Error (%) - MÉTRIQUE ROBUSTE RECOMMANDÉE
  // Formule: wMAPE = Σ |Qté_Prédite - Qté_Réelle| / Σ Qté_Réelle × 100%
  // Avantages: Pas de biais asymétrique, robuste aux petites quantités, recommandé en supply chain
  const totalAbsoluteError = truePositives.reduce((sum, tp) => sum + tp.absoluteError, 0);
  const totalActual = truePositives.reduce((sum, tp) => sum + tp.realQty, 0);
  const wmape = totalActual > 0 ? (totalAbsoluteError / totalActual) * 100 : 0;

  // MAPE = Mean Absolute Percentage Error (%) - INFO (biaisé, gardé pour comparaison historique)
  // Formule: MAPE = (1/N) × Σ |Qté_Prédite - Qté_Réelle| / Qté_Réelle × 100%
  // Limitations: Asymétrique (pénalise 2-3× plus sur-estimation), explose sur petites quantités
  const mape =
    truePositives.reduce((sum, tp) => sum + tp.errorPercent, 0) /
    truePositives.length;

  // BIAS = Biais directionnel (%) - DIAGNOSTIC SUR/SOUS-ESTIMATION
  // Formule: Bias = Σ (Qté_Prédite - Qté_Réelle) / Σ Qté_Réelle × 100%
  // Interprétation: > 0 = surestimation, < 0 = sous-estimation, = 0 = équilibré
  const totalSignedError = truePositives.reduce((sum, tp) => sum + (tp.predictedQty - tp.realQty), 0);
  const bias = totalActual > 0 ? (totalSignedError / totalActual) * 100 : 0;

  // Distribution: exact (erreur = 0) vs partial (erreur > 0)
  const exactMatch = truePositives.filter((tp) => tp.matchType === "exact")
    .length;
  const partialMatch = truePositives.filter((tp) => tp.matchType === "partial")
    .length;

  return {
    mae,
    wmape,
    mape,
    bias,
    distribution: { exactMatch, partialMatch },
  };
}

/**
 * Classifie la qualité d'un match selon l'erreur absolue de quantité
 *
 * Classification simple à 2 niveaux:
 * - Exact: erreur = 0 (égalité parfaite)
 * - Partial: erreur > 0 (avec erreur, quelle qu'elle soit)
 *
 * @param predictedQty - Quantité prédite par le système
 * @param realQty - Quantité réelle commandée
 * @returns Type de match: 'exact' | 'partial'
 */
export function classifyQuantityMatch(
  predictedQty: number,
  realQty: number
): "exact" | "partial" {
  const absoluteError = Math.abs(predictedQty - realQty);

  if (absoluteError === 0) return "exact"; // Égalité parfaite
  return "partial"; // Toute erreur > 0
}
