import { calculateMedian } from "./median.utils";
import { autoProposalConfig } from "../../../config/auto-proposal";
import type { OrderLineDetail } from "../order-history/order-history.types";

/**
 * Métadonnées de calcul
 */
export interface QuantityCalculationMetadata {
  strategy: "skip" | "single_recent_order" | "median_recent_orders";
  confidence: "low" | "medium" | "high" | null;
  historical_quantities: number[];
  order_count: number;
  median_value: number | null;
}

/**
 * Résultat du calcul de quantité
 */
export interface QuantityCalculationResult {
  quantity: number | null;
  metadata: QuantityCalculationMetadata;
}

/**
 * Calcule la quantité à commander basée sur l'historique réel du produit
 * Utilise une stratégie à 4 niveaux selon le nombre de lignes de commande
 *
 * @param orderLines Lignes de commande du produit
 * @returns Quantité recommandée et métadonnées
 */
export function calculateQuantityFromHistory(
  orderLines: OrderLineDetail[]
): QuantityCalculationResult {
  const config = autoProposalConfig.quantityStrategy;
  const orderCount = orderLines.length;

  // Niveau 0 : Aucune ligne de commande → Skip
  if (orderCount === 0) {
    return {
      quantity: null,
      metadata: {
        strategy: "skip",
        confidence: null,
        historical_quantities: [],
        order_count: 0,
        median_value: null,
      },
    };
  }

  // Trier par date DESC
  const sortedOrders = [...orderLines].sort(
    (a, b) =>
      new Date(b.date_order).getTime() - new Date(a.date_order).getTime()
  );

  const quantities = sortedOrders.map((line) => line.quantity);

  // Niveau 1 : Une seule ligne de commande → Répéter
  if (orderCount === 1) {
    return {
      quantity: quantities[0],
      metadata: {
        strategy: "single_recent_order",
        confidence: "low",
        historical_quantities: quantities,
        order_count: orderCount,
        median_value: quantities[0],
      },
    };
  }

  // Niveau 2 : 2-4 lignes de commande → Médiane de toutes
  if (orderCount < config.minOrdersForHighConfidence) {
    const median = calculateMedian(quantities);
    return {
      quantity: median,
      metadata: {
        strategy: "median_recent_orders",
        confidence: "medium",
        historical_quantities: quantities,
        order_count: orderCount,
        median_value: median,
      },
    };
  }

  // Niveau 3 : 5+ lignes de commande → Médiane des N dernières
  const recentQuantities = quantities.slice(0, config.maxRecentOrderLines);
  const median = calculateMedian(recentQuantities);

  return {
    quantity: median,
    metadata: {
      strategy: "median_recent_orders",
      confidence: "high",
      historical_quantities: recentQuantities,
      order_count: orderCount,
      median_value: median,
    },
  };
}

/**
 * TODO : Ajuste la quantité selon les contraintes (MOQ, multiples)
 *
 * @param quantity Quantité brute calculée
 * @param multiple Multiple d'UoM (ex: vendu par 12)
 * @param moq Quantité minimum de commande
 * @returns Quantité ajustée
 */
//export function adjustQuantityForConstraints(): number {}
