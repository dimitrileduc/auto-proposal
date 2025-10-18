import { createOdooClient } from "../../infrastructure/odoo/odoo.service";
import { transformInactiveClients } from "./transform.utils";
import { autoProposalConfig } from "../../config/auto-proposal";
import type { InactiveClient } from "./inactivity.types";

const odooClient = createOdooClient(autoProposalConfig.odooApiType);

/**
 * Récupère les clients inactifs
 *
 * @param days Nombre de jours d'inactivité (défaut: config.inactivityDaysThreshold)
 * @param excludeAutoProposalTagId Optionnel: Tag ID à exclure des commandes récentes lors du calcul d'inactivité.
 *        Si fourni (ex: 82), les clients ayant SEULEMENT des commandes avec ce tag seront considérés comme inactifs.
 *        Si undefined, tous les clients sans commande récente sont inactifs (comportement normal).
 * @returns Liste des clients inactifs
 * @throws {Error} En cas d'erreur
 *
 * @example
 * ```typescript
 * // Comportement normal: exclut les clients avec des commandes récentes (quelque soit le tag)
 * const inactiveClients = await getInactiveClients(30)
 *
 * // Force reanalysis: inclut les clients ayant SEULEMENT des commandes avec tag 82
 * const inactiveClients = await getInactiveClients(30, 82)
 * ```
 */
export async function getInactiveClients(
  days: number = autoProposalConfig.inactivityDaysThreshold,
  excludeAutoProposalTagId?: number
): Promise<InactiveClient[]> {
  const partners = await odooClient.getInactiveCompanyPartners(days, excludeAutoProposalTagId);
  return transformInactiveClients(partners);
}