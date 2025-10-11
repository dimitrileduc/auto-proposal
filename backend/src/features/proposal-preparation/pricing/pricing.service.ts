import type { ProductStockStatus } from "../../../shared/types/product.types";
import type { ProductWithCurrentPrice } from "../proposal-preparation.types";

/**
 * Enrichit les produits avec les prix historiques du client
 *
 * ## Contexte et limitations actuelles
 *
 * **Pourquoi utiliser les prix historiques ?**
 *
 * L'instance Odoo utilise un modèle de tarification 100% basé sur pricelists :
 * - Les produits n'ont pas de `list_price` utilisable (volontairement mis à 99999.99€)
 * - Tous les prix réels sont gérés via `product.pricelist` avec règles personnalisées par client
 * - Le `price_unit` dans l'historique de commandes (`sale.order.line`) contient le prix
 *   calculé par le pricelist du client au moment de la commande
 *
 * **Limitation de l'API Odoo v17** :
 *
 * Depuis Odoo v16+, les méthodes publiques pour calculer les prix via pricelist ont été supprimées.
 * Il n'est donc **pas possible d'obtenir le prix actuel avec pricelist via l'API externe**
 * sans module custom Odoo.
 *
 * **Ce que contient le prix historique** :
 * - Pricelist du client (règles tarifaires négociées)
 * - Prix au moment de la dernière commande validée
 * -  Promotions relative a la dernière commande
 *
 * -
 *
 * **Solutions futures pour obtenir les prix actuels** :
 *
 * 1. **Module custom Odoo** (recommandé) - Wrapper public pour `_get_products_price()`
 * 2. **Créer une sale.order.line temporaire** - Odoo calcule automatiquement le prix, puis lire et supprimer
 *
 *
 * @param products - Produits avec historique de commandes (order_history)
 * @returns Produits enrichis avec prix historiques et subtotaux calculés
 */
export function enrichWithHistoryPrices(
  products: ProductStockStatus[]
): ProductWithCurrentPrice[] {
  return products.map((product) => {
    // Prendre le price_unit de la commande la plus récente
    // Note: order_history est trié par date décroissante dans stock-analysis
    const historicalPrice = product.order_history[0]?.price_unit || 0;

    return {
      ...product,
      current_price_unit: historicalPrice,
      subtotal: product.quantity_to_order * historicalPrice,
      moq_adjustment: 0,
    };
  });
}
