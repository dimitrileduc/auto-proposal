import type { OdooPartner } from "../../infrastructure/odoo/odoo.service";
import type { InactiveClient } from "./inactivity.types";

/**
 * Transforme les partenaires Odoo en clients inactifs
 *
 * @param partners Partenaires Odoo bruts
 * @returns Clients inactifs avec email normalisé
 */
export function transformInactiveClients(
  partners: OdooPartner[]
): InactiveClient[] {
  return partners.map((partner) => ({
    id: partner.id,
    name: partner.name,
    email: partner.email || null,
  }));
}