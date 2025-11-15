/**
 * Transforme les partenaires Odoo en clients inactifs
 *
 * @param partners Partenaires Odoo bruts
 * @returns Clients inactifs avec email normalisé
 */
export function transformInactiveClients(partners) {
    return partners.map((partner) => ({
        id: partner.id,
        name: partner.name,
        email: partner.email || null,
    }));
}
