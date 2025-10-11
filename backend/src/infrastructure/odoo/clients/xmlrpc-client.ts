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
  PartnerCompanyInfo,
  OdooSaleOrder,
  OdooSaleOrderLine,
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
          "product_uom",
          "product_type",
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
            product_uom: line.product_uom,
            product_type: line.product_type,
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

    async getPartnerCompanyInfo(partnerId: number) {
      try {
        const result = await odoo.searchRead<PartnerCompanyInfo>(
          "res.partner",
          [["id", "=", partnerId]],
          { fields: ["name", "company_id"] }
        );

        if (result.length === 0) {
          throw new Error(`Partner ${partnerId} not found`);
        }

        return result[0];
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error(
              `Erreur lors de la récupération des infos du partenaire ${partnerId}: ${error}`
            );
      }
    },

    async createSaleOrder(data: {
      partner_id: number;
      company_id: number;
      tag_ids?: any[];
      note?: string;
    }): Promise<number> {
      try {
        return await odoo.create("sale.order", data);
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error(`Erreur lors de la création du sale.order: ${error}`);
      }
    },

    async createSaleOrderLine(data: {
      order_id: number;
      product_id: number;
      product_uom_qty: number;
      price_unit: number;
    }): Promise<number> {
      try {
        return await odoo.create("sale.order.line", data);
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error(`Erreur lors de la création de la sale.order.line: ${error}`);
      }
    },

    async getSaleOrderDetails(quoteId: number) {
      try {
        // Récupérer le devis
        const orders = await odoo.searchRead<OdooSaleOrder>(
          "sale.order",
          [["id", "=", quoteId]],
          {
            fields: [
              "name",
              "partner_id",
              "company_id",
              "state",
              "amount_untaxed",
              "amount_tax",
              "amount_total",
              "order_line",
              "tag_ids",
              "date_order",
            ],
          }
        );

        if (orders.length === 0) {
          throw new Error(`Sale order ${quoteId} not found`);
        }

        // Récupérer les lignes
        const lines = await odoo.searchRead<OdooSaleOrderLine>(
          "sale.order.line",
          [["order_id", "=", quoteId]],
          {
            fields: [
              "order_id",
              "product_id",
              "product_uom",
              "product_uom_qty",
              "price_unit",
              "price_subtotal",
              "price_total",
              "tax_id",
            ],
          }
        );

        return {
          order: orders[0],
          lines: lines,
        };
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error(
              `Erreur lors de la récupération des détails du devis ${quoteId}: ${error}`
            );
      }
    },
  };
}
