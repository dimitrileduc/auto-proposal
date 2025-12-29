/**
 * Client inactivity transformation utilities
 * @module features/client-inactivity/transform
 */
import type { OdooPartner } from "../../infrastructure/odoo/odoo.service";
import type { InactiveClient } from "./inactivity.types";

/**
 * Transforms Odoo partners into inactive clients
 *
 * @param partners - Raw Odoo partners
 * @returns Inactive clients with normalized email
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
