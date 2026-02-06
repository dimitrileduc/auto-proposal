/**
 * Odoo JSON-2 client for Odoo versions v19+
 *
 * Implements the OdooClient interface using JSON-2 REST API.
 *
 * @module infrastructure/odoo/clients/json2-client
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
 * Generates HTTP headers for Odoo JSON-2 API requests
 *
 * @returns HTTP headers object with authorization
 * @throws Error if ODOO_API_KEY environment variable is missing
 */
function getJsonApiHeaders(): Record<string, string> {
  if (!ODOO_CONFIG.apiKey) {
    throw new Error(
      "ODOO_API_KEY environment variable is required"
    );
  }

  return {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `bearer ${ODOO_CONFIG.apiKey}`,
    "X-Odoo-Database": ODOO_CONFIG.database,
  };
}

/**
 * Executes a JSON-2 API request to Odoo
 *
 * @param endpoint API endpoint path
 * @param body Request body
 * @returns Response data
 * @throws Error if API request fails
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
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      throw new Error(
        `Odoo API error (${response.status}): ${response.statusText}`
      );
    }

    const data = await response.json();

    if (data?.name && data?.message) {
      throw new Error(`Odoo error: ${data.message}`);
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(`Connection error to Odoo: ${error}`);
  }
}

/**
 * Creates and configures a JSON-2 client for Odoo v19+
 *
 * @returns Configured OdooClient instance
 */
export function createJson2Client(): OdooClient {
  return {
    async getInactiveCompanyPartners(dateMin: string, dateMax: string, excludeTagId?: number): Promise<OdooPartner[]> {
      try {
        const recentOrders = await odooApiRequest<OdooOrder[]>(
          "sale.order/search_read",
          {
            domain: buildRecentOrdersDomain(dateMin, dateMax, excludeTagId),
            fields: ["partner_id"],
          }
        );

        const activePartnerIds = [
          ...new Set(recentOrders.map((order) => order.partner_id[0])),
        ];

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
              `Failed to fetch inactive partners: ${error}`
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
        throw new Error("Window days must be positive");
      }

      const dateStart = calculateDateBefore(referenceDate, windowDays);

      const states = includeDraftOrders
        ? ["draft", "sent", "sale", "done"]
        : ["sale", "done"];

      try {
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

        const orderLineIds = orders.flatMap((order) => order.order_line || []);

        if (orderLineIds.length === 0) {
          return { orders: [], orderLines: [] };
        }

        const domain: any[] = [["id", "in", orderLineIds]];

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
              `Failed to fetch order history for partner ${partnerId}: ${error}`
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
              `Failed to fetch last order for client ${clientId}: ${error}`
            );
      }
    },

    async getLastClientOrderBeforeDate(clientId: number, referenceDate: string): Promise<{
      id: number;
      name: string;
      date_order: string;
      partner_name: string;
    }> {
      try {
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
              ["state", "in", ["sale", "done"]],
              ["date_order", "<=", referenceDate]
            ],
            fields: ["name", "date_order", "partner_id"],
            order: "date_order DESC",
            limit: 1
          }
        );

        if (orders.length === 0) {
          throw new Error(`No validated order found for client ${clientId} before ${referenceDate}`);
        }

        const order = orders[0];

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
              `Failed to fetch order for client ${clientId} before ${referenceDate}: ${error}`
            );
      }
    },

    async getOrderByName(orderName: string): Promise<{
      id: number;
      name: string;
      date_order: string;
      partner_name: string;
      partner_id: number;
    }> {
      try {
        const orders = await odooApiRequest<Array<{
          id: number;
          name: string;
          date_order: string;
          partner_id: [number, string];
        }>>(
          "sale.order/search_read",
          {
            domain: [
              ["name", "=", orderName],
              ["state", "in", ["sale", "done"]]
            ],
            fields: ["name", "date_order", "partner_id"],
            limit: 1
          }
        );

        if (orders.length === 0) {
          throw new Error(`Order ${orderName} not found or not validated`);
        }

        const order = orders[0];

        return {
          id: order.id,
          name: order.name,
          date_order: order.date_order,
          partner_name: order.partner_id[1],
          partner_id: order.partner_id[0]
        };
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error(
              `Failed to fetch order ${orderName}: ${error}`
            );
      }
    },

    async postInternalNote(_model: string, _recordId: number, _body: string): Promise<number> {
      throw new Error("postInternalNote not implemented for JSON-2 client");
    },

    async getMessageById(_messageId: number): Promise<{ id: number; body: string; date: string } | null> {
      throw new Error("getMessageById not implemented for JSON-2 client");
    },
  };
}
