import { enrichWithHistoryPrices } from "./pricing/pricing.service";
import { adjustForMinimumOrder } from "./moq/moq-adjustment.service";
import { autoProposalConfig } from "../../config/auto-proposal";
/**
 * Prépare une proposition de commande avec prix et ajustement MOQ
 *
 * **Input:** Résultat Phase 2 (stock-replenishment) avec quantity_to_order calculée
 *
 * **Étapes:**
 * 1. Enrichir avec prix (historiques ou actuels selon le mode)
 * 2. Calculer le total de la commande
 * 3. Si total < 300€ → ajuster quantités en round-robin pour atteindre MOQ
 *
 * **Output:** Proposition enrichie avec prix + ajustements MOQ appliqués
 *
 * **Modes de pricing disponibles** :
 * - `historyPriceForClient` : Utilise le price_unit de la dernière commande validée
 * - `currentPriceForClient` : Récupère le prix actuel via pricelist Odoo (non implémenté, voir limitations)
 *
 * @example
 * ```typescript
 * const proposal = prepareProposal(stockReplenishment, undefined, "historyPriceForClient");
 * ```
 *
 * @param stockReplenishment - Résultat de l'analyse de réapprovisionnement (Phase 2)
 * @param odooClient - Client Odoo (requis pour mode currentPriceForClient, non utilisé actuellement)
 * @param mode - Mode de pricing (défaut: historyPriceForClient)
 * @param minimumOrderAmount - MOQ global en euros (défaut: depuis config)
 * @returns Proposition enrichie avec prix et ajustements MOQ
 */
export function prepareProposal(stockReplenishment, odooClient, mode = "historyPriceForClient", minimumOrderAmount = autoProposalConfig.pricing.minimumOrderAmount) {
    const { client_id, products } = stockReplenishment;
    // Étape 1: Enrichir avec prix
    let productsWithPrices;
    switch (mode) {
        case "historyPriceForClient":
            // Utilise le prix historique (price_unit de la dernière commande)
            productsWithPrices = enrichWithHistoryPrices(products);
            break;
        case "currentPriceForClient":
            // ⚠️ NON IMPLÉMENTÉ - Limitation API Odoo v17
            //
            // Pour obtenir les prix actuels avec pricelist, il faudrait :
            // 1. Module custom Odoo exposant une méthode publique wrappant _get_products_price()
            // 2. Créer une sale.order.line temporaire et lire le prix calculé
            // 3. Répliquer la logique pricelist côté backend (non recommandé)
            //
            // Voir pricing.service.ts pour détails complets sur les limitations.
            //
            // Pour l'instant, fallback sur prix historiques :
            productsWithPrices = enrichWithHistoryPrices(products);
            console.warn(`Mode 'currentPriceForClient' non implémenté, utilisation de 'historyPriceForClient' en fallback`);
            break;
        default:
            productsWithPrices = enrichWithHistoryPrices(products);
    }
    // Étape 2: Calculer le total initial
    const originalTotal = productsWithPrices.reduce((sum, p) => sum + p.subtotal, 0);
    // Étape 3: Ajuster si total < MOQ
    let moqAdjustmentApplied = false;
    let adjustmentDetails;
    if (originalTotal < minimumOrderAmount) {
        productsWithPrices = adjustForMinimumOrder(productsWithPrices, originalTotal, minimumOrderAmount);
        const finalTotal = productsWithPrices.reduce((sum, p) => sum + p.subtotal, 0);
        const productsAdjusted = productsWithPrices.filter((p) => p.moq_adjustment > 0).length;
        moqAdjustmentApplied = true;
        adjustmentDetails = {
            original_total: originalTotal,
            minimum_required: minimumOrderAmount,
            gap_filled: finalTotal - originalTotal,
            products_adjusted: productsAdjusted,
        };
    }
    const totalAmount = productsWithPrices.reduce((sum, p) => sum + p.subtotal, 0);
    return {
        client_id,
        products: productsWithPrices,
        total_amount: totalAmount,
        moq_adjustment_applied: moqAdjustmentApplied,
        adjustment_details: adjustmentDetails,
    };
}
