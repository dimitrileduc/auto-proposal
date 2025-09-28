// Service Odoo avec API JSON-2
import { getDateDaysAgo } from "../../utils/date.utils";

interface OdooOrder {
  id: number;
  partner_id: [number, string];
  date_order: string;
  name: string;
  state: string;
}

export interface OdooPartner {
  id: number;
  name: string;
  email: string | false;
  sale_order_ids: number[];
}

// Odoo configuration
const ODOO_CONFIG = {
  baseUrl: process.env.ODOO_URL || "https://demo-food-autopilot.odoo.com",
  database: process.env.ODOO_DB || "demo-food-autopilot",
  apiKey: process.env.ODOO_API_KEY,
};

/**
 * Génère les headers HTTP pour l'API JSON-2 d'Odoo
 * @returns Headers avec authentification et configuration
 */
function getJsonApiHeaders(): Record<string, string> {
  if (!ODOO_CONFIG.apiKey) {
    throw new Error(
      "ODOO_API_KEY manquante dans les variables d'environnement"
    );
  }

  return {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `bearer ${ODOO_CONFIG.apiKey}`,
    "X-Odoo-Database": ODOO_CONFIG.database,
  };
}

/**
 * Requête JSON-2
 * @param endpoint Endpoint de l'API (ex: 'res.partner/search_read')
 * @param body Corps de la requête
 * @returns Réponse JSON de l'API
 */
async function odooApiRequest<T = any>(
  endpoint: string,
  body: any
): Promise<T> {
  const url = `${ODOO_CONFIG.baseUrl}/json/2/${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: getJsonApiHeaders(),
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(
        `Erreur API Odoo (${response.status}): ${response.statusText}`
      );
    }

    const data = await response.json();

    if (data?.name && data?.message) {
      throw new Error(`Erreur Odoo: ${data.message}`);
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(`Erreur de connexion à Odoo: ${error}`);
  }
}

/**
 * Récupère les partenaires company inactifs (sans commande récente)
 *
 * Un partenaire est considéré comme inactif s'il :
 * - N'a aucune commande (sale_order_ids = false)
 * - OU a des commandes mais aucune dans les X derniers jours
 *
 * @param days Nombre de jours pour définir "récent" (défaut: 30)
 * @returns Liste des partenaires inactifs (email peut être false si vide)
 * @throws {Error} En cas d'erreur API ou de configuration
 *
 * @example
 * ```typescript
 * // Récupérer les clients inactifs depuis 30 jours
 * const inactiveClients = await getInactiveCompanyPartners(30)
 * console.log(`${inactiveClients.length} clients inactifs trouvés`)
 * ```
 */
export async function getInactiveCompanyPartners(
  days: number = 30
): Promise<OdooPartner[]> {
  if (days <= 0) {
    throw new Error("Le nombre de jours doit être positif");
  }

  const dateLimitStr = getDateDaysAgo(days);

  try {
    // RPC 1: Récupérer les commandes récentes et leurs partner_ids
    const recentOrders = await odooApiRequest<OdooOrder[]>(
      "sale.order/search_read",
      {
        domain: [["date_order", ">=", dateLimitStr]],
        fields: ["partner_id"],
      }
    );

    // Déduplication  des partner_ids actifs
    const activePartnerIds = [
      ...new Set(recentOrders.map((order) => order.partner_id[0])),
    ];

    // RPC 2: Récupérer les partenaires inactifs via logique d'exclusion
    const inactivePartners = await odooApiRequest<OdooPartner[]>(
      "res.partner/search_read",
      {
        domain: [
          ["is_company", "=", true],
          //  ["customer_rank", ">", 0], NOTE: Client should have a customer_rank > 0 on Odoo -> tofix
          ["id", "!=", 1], //temp fix:  Exclure société mère (demo-food-autopilot = admin)
          "|", // Union de deux groupes d'inactifs
          ["sale_order_ids", "=", false], // GROUPE 1: Jamais commandé
          "&", // GROUPE 2: A commandé mais pas récemment
          ["sale_order_ids", "!=", false],
          ["id", "not in", activePartnerIds],
        ],
        fields: ["name", "email", "id"],
      }
    );

    return inactivePartners;
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error(
          `Erreur lors de la récupération des partenaires inactifs: ${error}`
        );
  }
}
