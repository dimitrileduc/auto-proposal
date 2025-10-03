/**
 * Client Odoo utilisant l'API XML-RPC (Odoo < v19)
 */

import { OdooClient as XmlRpcOdoo } from "odoo-xmlrpc-ts";
import { getDateDaysAgo } from "../../../utils/date.utils";
import type {
  OdooClient,
  OdooPartner,
  OdooOrder,
  OdooOrderLine,
  OrderHistory,
} from "./odoo-client.types";
import {
  buildRecentOrdersDomain,
  buildInactivePartnersDomain,
  buildPartnerOrdersDomain,
} from "./odoo-domains";

const ODOO_CONFIG = {
  url: process.env.ODOO_URL || "https://demo-food-autopilot.odoo.com",
  database: process.env.ODOO_DB || "demo-food-autopilot",
  username: process.env.ODOO_USERNAME,
  password: process.env.ODOO_PASSWORD,
};

/**
 * Crée un client XML-RPC pour Odoo < v19
 */
export function createXmlRpcClient(): OdooClient {
  if (!ODOO_CONFIG.username || !ODOO_CONFIG.password) {
    throw new Error("ODOO_USERNAME et ODOO_PASSWORD requis pour XML-RPC");
  }

  const odoo = new XmlRpcOdoo({
    url: ODOO_CONFIG.url,
    db: ODOO_CONFIG.database,
    username: ODOO_CONFIG.username,
    password: ODOO_CONFIG.password,
  });

  return {
    async getInactiveCompanyPartners(days: number): Promise<OdooPartner[]> {
      if (days <= 0) {
        throw new Error("Le nombre de jours doit être positif");
      }

      const dateLimitStr = getDateDaysAgo(days);

      try {
        // RPC 1: Récupérer les commandes récentes
        const recentOrders = await odoo.searchRead<OdooOrder>("sale.order",
          buildRecentOrdersDomain(dateLimitStr),
          {
            fields: ["partner_id"],
          }
        );

        // Déduplication des partner_ids actifs
        const activePartnerIds = [
          ...new Set(recentOrders.map((order) => order.partner_id[0])),
        ];

        // RPC 2: Récupérer les partenaires inactifs
        const inactivePartners = await odoo.searchRead<OdooPartner>("res.partner",
          buildInactivePartnersDomain(activePartnerIds),
          {
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
      days: number,
      includeDraftOrders: boolean = false
    ): Promise<OrderHistory> {
      if (days <= 0) {
        throw new Error("Le nombre de jours doit être positif");
      }

      const dateLimitStr = getDateDaysAgo(days);

      const states = includeDraftOrders
        ? ["draft", "sent", "sale", "done"]
        : ["sale", "done"];

      try {
        // RPC 1: Récupérer les commandes du partenaire
        const orders = await odoo.searchRead<OdooOrder>("sale.order",
          buildPartnerOrdersDomain(partnerId, dateLimitStr, states),
          {
            fields: ["id", "name", "date_order", "partner_id", "state", "order_line"],
          }
        );

        if (orders.length === 0) {
          return { orders: [], orderLines: [] };
        }

        // Extraire tous les IDs de order_line
        const orderLineIds = orders.flatMap((order) => order.order_line || []);

        if (orderLineIds.length === 0) {
          return {
            orders: orders.map((order) => ({
              id: order.id,
              partner_id: order.partner_id,
              date_order: order.date_order,
              name: order.name,
              state: order.state,
              order_line: order.order_line || [],
            })),
            orderLines: [],
          };
        }

        // RPC 2: Récupérer les détails des order_lines
        const orderLines = await odoo.read<OdooOrderLine>("sale.order.line", orderLineIds, [
          "id",
          "product_id",
          "product_uom_qty",
          "product_uom_id",
          "price_unit",
          "order_id",
        ]);

        return {
          orders: orders.map((order) => ({
            id: order.id,
            partner_id: order.partner_id,
            date_order: order.date_order,
            name: order.name,
            state: order.state,
            order_line: order.order_line || [],
          })),
          orderLines: orderLines.map((line) => ({
            id: line.id,
            product_id: line.product_id || false,
            product_uom_qty: line.product_uom_qty,
            product_uom_id: line.product_uom_id,
            price_unit: line.price_unit,
            order_id: line.order_id,
          })),
        };
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error(
              `Erreur lors de la récupération de l'historique du partenaire ${partnerId}: ${error}`
            );
      }
    },
  };
}
