import { createOdooClient } from "../../infrastructure/odoo/odoo.service";
import { transformInactiveClients } from "./transform.utils";
import { autoProposalConfig } from "../../config/auto-proposal";
import type { InactiveClient } from "./inactivity.types";

const odooClient = createOdooClient(autoProposalConfig.odooApiType);

/**
 * Récupère les clients inactifs
 *
 * @param days Nombre de jours d'inactivité (défaut: config.inactivityDaysThreshold)
 * @param excludeAutoProposalTagId Optionnel: Tag ID à exclure des commandes récentes.
 *        Si undefined, utilise config.workflow.excludeAutoProposalQuotes pour déterminer si on exclut le tag 82
 * @returns Liste des clients inactifs
 * @throws {Error} En cas d'erreur
 *
 * @example
 * ```typescript
 * // Utilise le comportement par défaut de la config (excludeAutoProposalQuotes: true)
 * const inactiveClients = await getInactiveClients(30)
 *
 * // Force l'exclusion du tag 82
 * const inactiveClients = await getInactiveClients(30, 82)
 *
 * // Force l'inclusion (pas d'exclusion)
 * const inactiveClients = await getInactiveClients(30, undefined)
 * ```
 */
export async function getInactiveClients(
  days: number = autoProposalConfig.inactivityDaysThreshold,
  excludeAutoProposalTagId?: number
): Promise<InactiveClient[]> {
  const partners = await odooClient.getInactiveCompanyPartners(days, excludeAutoProposalTagId);
  return transformInactiveClients(partners);
}