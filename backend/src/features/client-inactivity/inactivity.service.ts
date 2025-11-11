import { createOdooClient } from "../../infrastructure/odoo/odoo.service";
import { transformInactiveClients } from "./transform.utils";
import { autoProposalConfig } from "../../config/auto-proposal";
import type { InactiveClient } from "./inactivity.types";

const odooClient = createOdooClient(autoProposalConfig.odooApiType);

/**
 * Récupère les clients inactifs dans une période donnée
 *
 * @param dateMin Date minimum pour la période d'inactivité (format: "YYYY-MM-DD HH:MM:SS")
 * @param dateMax Date maximum pour la période d'inactivité (format: "YYYY-MM-DD HH:MM:SS")
 * @param excludeAutoProposalTagId Optionnel: Tag ID à exclure des commandes récentes lors du calcul d'inactivité.
 *        Si fourni (ex: 82), les clients ayant SEULEMENT des commandes avec ce tag seront considérés comme inactifs.
 *        Si undefined, tous les clients sans commande récente sont inactifs (comportement normal).
 * @param excludedPartnerTagId Optionnel: Tag partner à exclure définitivement des résultats (ex: 195 = "exclude-auto-proposal").
 *        Les clients avec ce tag sont exclus de l'analyse, indépendamment de leur activité.
 * @returns Liste des clients inactifs
 * @throws {Error} En cas d'erreur
 *
 * @example
 * ```typescript
 * // Comportement normal: clients inactifs entre le 26 sept et le 26 oct 2025
 * const inactiveClients = await getInactiveClients("2025-09-26 00:00:00", "2025-10-26 00:00:00")
 *
 * // Force reanalysis: inclut les clients ayant SEULEMENT des commandes avec tag 82
 * const inactiveClients = await getInactiveClients("2025-09-26 00:00:00", "2025-10-26 00:00:00", 82)
 *
 * // Avec exclusion par tag partner: exclut les clients ayant le tag 195
 * const inactiveClients = await getInactiveClients("2025-09-26 00:00:00", "2025-10-26 00:00:00", undefined, 195)
 * ```
 */
export async function getInactiveClients(
  dateMin: string,
  dateMax: string,
  excludeAutoProposalTagId?: number,
  excludedPartnerTagId?: number | null
): Promise<InactiveClient[]> {
  const partners = await odooClient.getInactiveCompanyPartners(
    dateMin,
    dateMax,
    excludeAutoProposalTagId,
    excludedPartnerTagId
  );
  return transformInactiveClients(partners);
}