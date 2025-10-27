import { createOdooClient } from "../../../infrastructure/odoo/odoo.service";
import { transformOrderHistory } from "./transform.utils";
import { autoProposalConfig } from "../../../config/auto-proposal";
import type { ClientOrderHistory } from "./order-history.types";

const odooClient = createOdooClient(autoProposalConfig.odooApiType);

/**
 * Récupère et transforme l'historique des commandes d'un client groupé par produit
 *
 * @param partnerId ID du partenaire Odoo (défaut: 3 = Arthur Schwaiger pour tests)
 * @param windowDays Nombre de jours d'historique (défaut: 180 = 6 mois)
 * @param referenceDate Date de référence pour le calcul de l'historique (format: "YYYY-MM-DD HH:MM:SS")
 * @returns Historique structuré par produit
 * @throws {Error} En cas d'erreur
 *
 * @example
 * ```typescript
 * const history = await getProductOrderHistory(3, 180, "2025-10-26 00:00:00")
 * console.log(`${history.products.length} produits commandés`)
 * ```
 */
export async function getProductOrderHistory(
  partnerId: number = autoProposalConfig.testing.defaultClientId,
  windowDays: number = autoProposalConfig.analysisWindowDays,
  referenceDate: string
): Promise<ClientOrderHistory> {
  const rawHistory = await odooClient.getOrderHistoryByPartner(
    partnerId,
    windowDays,
    referenceDate,
    autoProposalConfig.testing.includeDraftOrders,
    autoProposalConfig.productFiltering.excludedCategoryIds
  );
  return transformOrderHistory(rawHistory, partnerId);
}
