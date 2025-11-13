/**
 * Client Odoo utilisant l'API JSON-2 (Odoo v19+)
 */

import { calculateDateBefore } from "../../../utils/date.utils";
import type {
  OdooClient,
  OdooPartner,
  OrderHistory,
  OdooOrder,
  OdooOrderLine,
} from "./odoo-client.types";
import {
  buildRecentOrdersDomain,
  buildInactivePartnersDomain,
  buildPartnerOrdersDomain,
} from "./odoo-domains";

// Odoo configuration
const ODOO_CONFIG = {
  baseUrl: process.env.ODOO_URL || "https://demo-food-autopilot.odoo.com",
  database: process.env.ODOO_DB || "demo-food-autopilot",
  apiKey: process.env.ODOO_API_KEY,
};

/**
 * Génère les headers HTTP pour l'API JSON-2 d'Odoo
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
      signal: AbortSignal.timeout(10000), // 10s timeout
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
 * Crée un client JSON-2 pour Odoo v19+
 */
export function createJson2Client(): OdooClient {
  return {
    async getInactiveCompanyPartners(dateMin: string, dateMax: string, excludeTagId?: number): Promise<OdooPartner[]> {
      try {
        // RPC 1: Récupérer les commandes récentes dans la période [dateMin, dateMax]
        const recentOrders = await odooApiRequest<OdooOrder[]>(
          "sale.order/search_read",
          {
            domain: buildRecentOrdersDomain(dateMin, dateMax, excludeTagId),
            fields: ["partner_id"],
          }
        );

        // Déduplication des partner_ids actifs
        const activePartnerIds = [
          ...new Set(recentOrders.map((order) => order.partner_id[0])),
        ];

        // RPC 2: Récupérer les partenaires inactifs via logique d'exclusion
        const inactivePartners = await odooApiRequest<OdooPartner[]>(
          "res.partner/search_read",
          {
            domain: buildInactivePartnersDomain(activePartnerIds),
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
    },

    async getOrderHistoryByPartner(
      partnerId: number,
      windowDays: number,
      referenceDate: string,
      includeDraftOrders: boolean,
      excludedCategoryIds?: number[]
    ): Promise<OrderHistory> {
      if (windowDays <= 0) {
        throw new Error("Le nombre de jours doit être positif");
      }

      const dateStart = calculateDateBefore(referenceDate, windowDays);

      const states = includeDraftOrders
        ? ["draft", "sent", "sale", "done"]
        : ["sale", "done"];

      try {
        // RPC 1: Récupérer les commandes du partenaire depuis dateStart jusqu'à referenceDate
        const orders = await odooApiRequest<OdooOrder[]>(
          "sale.order/search_read",
          {
            domain: buildPartnerOrdersDomain(partnerId, dateStart, states, referenceDate),
            fields: [
              "id",
              "name",
              "date_order",
              "partner_id",
              "state",
              "order_line",
            ],
          }
        );

        // Extraire tous les IDs de order_line
        const orderLineIds = orders.flatMap((order) => order.order_line || []);

        if (orderLineIds.length === 0) {
          return { orders: [], orderLines: [] };
        }

        // RPC 2: Récupérer les détails des order_lines avec filtrage produits non-food
        const domain: any[] = [["id", "in", orderLineIds]];

        // Filtrer les produits de catégories exclues (consignes, palettes, emballages, etc.)
        if (excludedCategoryIds && excludedCategoryIds.length > 0) {
          domain.push(["product_id.categ_id", "not in", excludedCategoryIds]);
        }

        const orderLines = await odooApiRequest<OdooOrderLine[]>(
          "sale.order.line/search_read",
          {
            domain,
            fields: [
              "id",
              "product_id",
              "product_uom_qty",
              "product_uom",
              "product_type",
              "price_unit",
              "order_id",
            ],
          }
        );

        return { orders, orderLines };
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error(
              `Erreur lors de la récupération de l'historique du partenaire ${partnerId}: ${error}`
            );
      }
    },

    async getLastClientOrder(clientId: number): Promise<{
      id: number;
      name: string;
      date_order: string;
      partner_name: string;
    }> {
      try {
        console.log(`\n📊 Fetching last validated order for client ${clientId}...`);

        // Rechercher la dernière commande validée (state: 'sale' ou 'done')
        const orders = await odooApiRequest<Array<{
          id: number;
          name: string;
          date_order: string;
          partner_id: [number, string];
        }>>(
          "sale.order/search_read",
          {
            domain: [
              ["partner_id", "=", clientId],
              ["state", "in", ["sale", "done"]]
            ],
            fields: ["name", "date_order", "partner_id"],
            order: "date_order DESC",
            limit: 1
          }
        );

        if (orders.length === 0) {
          throw new Error(`No validated order found for client ${clientId}`);
        }

        const order = orders[0];
        console.log(`   ✅ Found order: ${order.name} (${order.date_order})`);

        return {
          id: order.id,
          name: order.name,
          date_order: order.date_order,
          partner_name: order.partner_id[1]
        };
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error(
              `Erreur lors de la récupération de la dernière commande du client ${clientId}: ${error}`
            );
      }
    },
  };
}
