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
export const stockPredictorSignature = `"Pour déterminer s'il y aura commande dans 30j, fais confiance aux exemples fournis. Pour la QUANTITÉ: 1) Prédire UNE seule commande (pas un cumul). 2) Privilégier la médiane sur la moyenne (plus robuste aux outliers). 3) Si petites quantités (1-2u) récemment → rester conservateur."

productName:string "Nom du produit",
recentOrders:string "Historique des commandes des 5 derniers mois",
lastYearOrders:string "Historique N-1 même période",
currentDate:string "Date d'analyse YYYY-MM-DD"
->
quantity:number "Quantité de la PROCHAINE commande (0 si pas de commande dans 30j)",
reasoning:string "1) Risque rupture? 2) Cycle et dernière commande? 3) Quantité estimée et pourquoi?"`;
