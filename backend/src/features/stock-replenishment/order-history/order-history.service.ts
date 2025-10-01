import { getOrderHistoryByPartner } from "../../../infrastructure/odoo/odoo.service";
import { transformOrderHistory } from "./transform.utils";
import { autoProposalConfig } from "../../../config/auto-proposal";
import type { ClientOrderHistory } from "./order-history.types";

/**
 * Récupère et transforme l'historique des commandes d'un client groupé par produit
 *
 * @param partnerId ID du partenaire Odoo (défaut: 3 = Arthur Schwaiger pour tests)
 * @param days Nombre de jours d'historique (défaut: 360 = 12 mois)
 * @returns Historique structuré par produit
 * @throws {Error} En cas d'erreur
 *
 * @example
 * ```typescript
 * const history = await getProductOrderHistory(3, 360)
 * console.log(`${history.products.length} produits commandés`)
 * ```
 */
export async function getProductOrderHistory(
  partnerId: number = autoProposalConfig.testing.defaultClientId,
  days: number = autoProposalConfig.analysisWindowDays
): Promise<ClientOrderHistory> {
  const rawHistory = await getOrderHistoryByPartner(
    partnerId,
    days,
    autoProposalConfig.testing.includeDraftOrders
  );
  return transformOrderHistory(rawHistory, partnerId);
}