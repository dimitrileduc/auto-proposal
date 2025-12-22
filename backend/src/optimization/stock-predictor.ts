/**
 * Signature ax pour la prédiction de stock B2B
 *
 * SIMPLIFIÉ: On prédit UNIQUEMENT la quantité.
 * - quantity > 0 → shouldOrder = true
 * - quantity = 0 → shouldOrder = false
 *
 * La question est: "Si une commande est passée dans les 30 prochains jours,
 * quelle sera la quantité de cette commande?"
 */

/**
 * Signature pour la prédiction de réapprovisionnement
 * Format string DSPy-style - QUANTITÉ SEULE + Principes clés
 */
export const stockPredictorSignature = `"Tu es un expert Supply Chain B2B. Prédit la quantité de la PROCHAINE commande (pas un cumul). Utilise la médiane des quantités récentes (robuste aux outliers). Si cycle > 30j depuis dernière commande = 0. Petites quantités (1-2u): privilégie le récent. Grosses quantités: exclue outliers >2x médiane."

productName:string "Nom du produit",
recentOrders:string "Commandes des 3 derniers mois (date + quantité)",
lastYearOrders:string "Commandes N-1 même période (saisonnalité)",
currentDate:string "Date d'analyse YYYY-MM-DD"
->
quantity:number "Quantité prochaine commande (0 = pas de commande prévue dans 30j)",
reasoning:string "Cycle détecté, dernière commande, calcul quantité"`;

/**
 * Types TypeScript correspondants
 */
export interface StockPredictionInput {
  productName: string;
  recentOrders: string;
  lastYearOrders: string;
  currentDate: string;
}

export interface StockPredictionOutput {
  quantity: number;
  reasoning: string;
}

/**
 * Type pour les exemples d'entraînement
 */
export interface StockTrainingExample {
  // Input
  productName: string;
  recentOrders: string;
  lastYearOrders: string;
  currentDate: string;
  // Output (ground truth) - QUANTITÉ SEULE
  quantity: number;
}
