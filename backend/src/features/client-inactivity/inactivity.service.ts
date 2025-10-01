import { getInactiveCompanyPartners } from "../../infrastructure/odoo/odoo.service";
import { transformInactiveClients } from "./transform.utils";
import { autoProposalConfig } from "../../config/auto-proposal";
import type { InactiveClient } from "./inactivity.types";

/**
 * Récupère les clients inactifs
 *
 * @param days Nombre de jours d'inactivité (défaut: config.inactivityDaysThreshold)
 * @returns Liste des clients inactifs
 * @throws {Error} En cas d'erreur
 *
 * @example
 * ```typescript
 * const inactiveClients = await getInactiveClients(30)
 * console.log(`${inactiveClients.length} clients inactifs`)
 * ```
 */
export async function getInactiveClients(
  days: number = autoProposalConfig.inactivityDaysThreshold
): Promise<InactiveClient[]> {
  const partners = await getInactiveCompanyPartners(days);
  return transformInactiveClients(partners);
}