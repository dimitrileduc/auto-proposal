import { getInactiveCompanyPartners } from "../../../infrastructure/odoo/odoo.service";

export interface InactiveClient {
  id: number;
  name: string;
  email: string | null;
}

export async function getInactiveClients(
  days: number
): Promise<InactiveClient[]> {
  const partners = await getInactiveCompanyPartners(days);

  return partners.map((partner) => ({
    id: partner.id,
    name: partner.name,
    email: partner.email || null,
  }));
}
