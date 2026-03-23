/**
 * Client inactivity detection service
 *
 * Identifies clients who haven't ordered within a given period
 * for automated proposal generation.
 *
 * @module features/client-inactivity/service
 */
import { createOdooClient } from "../../infrastructure/odoo/odoo.service";
import { transformInactiveClients } from "./transform.utils";
import { autoProposalConfig } from "../../config/auto-proposal";
import type { InactiveClient } from "./inactivity.types";

const odooClient = createOdooClient(autoProposalConfig.odooApiType);

/**
 * Retrieves inactive clients within a given period
 *
 * @param dateMin - Start date for inactivity period (format: "YYYY-MM-DD HH:MM:SS")
 * @param dateMax - End date for inactivity period (format: "YYYY-MM-DD HH:MM:SS")
 * @param excludeAutoProposalTagId - Optional: Tag ID to exclude from recent orders.
 *        If provided (e.g., 82), clients with ONLY orders having this tag will be considered inactive.
 *        If undefined, all clients without recent orders are inactive (normal behavior).
 * @param excludedPartnerTagId - Optional: Partner tag to permanently exclude from results (e.g., 196).
 *        Clients with this tag are excluded regardless of their activity.
 * @returns List of inactive clients
 * @throws Error on Odoo API failure
 *
 * @example
 * ```typescript
 * // Normal behavior: inactive clients between Sept 26 and Oct 26 2025
 * const inactiveClients = await getInactiveClients("2025-09-26 00:00:00", "2025-10-26 00:00:00")
 *
 * // Force reanalysis: include clients with ONLY orders having tag 82
 * const inactiveClients = await getInactiveClients("2025-09-26 00:00:00", "2025-10-26 00:00:00", 82)
 *
 * // With partner tag exclusion: exclude clients with tag 196
 * const inactiveClients = await getInactiveClients("2025-09-26 00:00:00", "2025-10-26 00:00:00", undefined, 196)
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
