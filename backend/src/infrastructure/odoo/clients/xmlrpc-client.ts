/**
 * Odoo XML-RPC client for Odoo versions < v19
 *
 * Implements the OdooClient interface using XML-RPC API.
 *
 * @module infrastructure/odoo/clients/xmlrpc-client
 */

import { OdooClient as XmlRpcOdoo } from "odoo-xmlrpc-ts";
import { calculateDateBefore } from "../../../utils/date.utils";
import type {
  OdooClient,
  OdooPartner,
  OdooOrder,
  OdooOrderLine,
  OrderHistory,
  PartnerCompanyInfo,
  OdooSaleOrder,
  OdooSaleOrderLine,
  EmailSendResult,
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
 * Creates and configures an XML-RPC client for Odoo < v19
 *
 * @returns Configured OdooClient instance
 * @throws Error if ODOO_USERNAME or ODOO_PASSWORD environment variables are missing
 */
export function createXmlRpcClient(): OdooClient {
  if (!ODOO_CONFIG.username || !ODOO_CONFIG.password) {
    throw new Error("ODOO_USERNAME and ODOO_PASSWORD environment variables are required");
  }

  const odoo = new XmlRpcOdoo({
    url: ODOO_CONFIG.url,
    db: ODOO_CONFIG.database,
    username: ODOO_CONFIG.username,
    password: ODOO_CONFIG.password,
  });

  return {
    async getInactiveCompanyPartners(
      dateMin: string,
      dateMax: string,
      excludeOrderTagId?: number,
      excludedPartnerTagId?: number | null,
      companyId?: number
    ): Promise<OdooPartner[]> {
      if (companyId === undefined) {
        throw new Error(
          "companyId is required for getInactiveCompanyPartners to prevent cross-company data leaks"
        );
      }

      try {
        const recentOrders = await odoo.searchRead<OdooOrder>("sale.order",
          buildRecentOrdersDomain(dateMin, dateMax, excludeOrderTagId, companyId),
          { fields: ["partner_id"] }
        );

        const activePartnerIds = [
          ...new Set(recentOrders.map((order) => order.partner_id[0])),
        ];

        const inactivePartners = await odoo.searchRead<OdooPartner>("res.partner",
          buildInactivePartnersDomain(activePartnerIds, excludedPartnerTagId),
          { fields: ["name", "email", "id"] }
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
      excludedCategoryIds?: number[],
      companyId?: number
    ): Promise<OrderHistory> {
      if (windowDays <= 0) {
        throw new Error("Window days must be positive");
      }

      const dateStart = calculateDateBefore(referenceDate, windowDays);

      const states = includeDraftOrders
        ? ["draft", "sent", "sale", "done"]
        : ["sale", "done"];

      try {
        const orders = await odoo.searchRead<OdooOrder>("sale.order",
          buildPartnerOrdersDomain(partnerId, dateStart, states, referenceDate, companyId),
          {
            fields: ["id", "name", "date_order", "partner_id", "state", "order_line"],
          }
        );

        if (orders.length === 0) {
          return { orders: [], orderLines: [] };
        }

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

        const domain: any[] = [["id", "in", orderLineIds]];

        if (excludedCategoryIds && excludedCategoryIds.length > 0) {
          domain.push(["product_id.categ_id", "not in", excludedCategoryIds]);
        }

        const orderLines = await odoo.searchRead<OdooOrderLine>(
          "sale.order.line",
          domain,
          {
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
              `Failed to fetch order history for partner ${partnerId}: ${error}`
            );
      }
    },

    async getPartnerCompanyInfo(partnerId: number) {
      try {
        const result = await odoo.searchRead<PartnerCompanyInfo>(
          "res.partner",
          [["id", "=", partnerId]],
          { fields: ["name", "company_id", "user_id"] }
        );

        if (result.length === 0) {
          throw new Error(`Partner ${partnerId} not found`);
        }

        return result[0];
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error(
              `Failed to fetch partner info for partner ${partnerId}: ${error}`
            );
      }
    },

    async createSaleOrder(data: {
      partner_id: number;
      company_id: number;
      tag_ids?: any[];
      note?: string;
      user_id?: number;
    }): Promise<number> {
      try {
        return await odoo.create("sale.order", data);
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error(`Failed to create sale order: ${error}`);
      }
    },

    async createSaleOrderLine(data: {
      order_id: number;
      product_id: number;
      product_uom_qty: number;
      price_unit: number;
      name?: string;
    }): Promise<number> {
      try {
        return await odoo.create("sale.order.line", data);
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error(`Failed to create sale order line: ${error}`);
      }
    },

    async createSaleOrderOption(data: {
      order_id: number;
      product_id: number;
      quantity: number;
      uom_id: number;
      price_unit: number;
      name?: string;
    }): Promise<number> {
      try {
        return await odoo.create("sale.order.option", data);
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error(`Failed to create sale order option: ${error}`);
      }
    },

    async getSaleOrderDetails(quoteId: number) {
      try {
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

        const lines = await odoo.searchRead<OdooSaleOrderLine>(
          "sale.order.line",
          [["order_id", "=", quoteId]],
          {
            fields: [
              "order_id",
              "product_id",
              "product_uom",
              "product_uom_qty",
              "product_type",
              "price_unit",
              "price_subtotal",
              "price_total",
              "tax_id",
              "name",
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
              `Failed to fetch sale order details for quote ${quoteId}: ${error}`
            );
      }
    },

    async sendQuoteByEmail(
      quoteId: number,
      quoteName: string,
      clientEmail: string,
      testMode: boolean,
      testEmail: string
    ): Promise<EmailSendResult> {
      try {
        const templates = await odoo.searchRead<{ id: number; name: string }>(
          "mail.template",
          [
            ["model", "=", "sale.order"],
            ["name", "ilike", "Sales Order"]
          ],
          { fields: ["id", "name"], limit: 1 }
        );

        if (templates.length === 0) {
          throw new Error("No email template found for sale.order");
        }

        const templateId = templates[0].id;

        const emailsSentTo: string[] = [];
        const emailsBlockedFor: string[] = [];

        if (testMode) {
          emailsSentTo.push(testEmail);
          emailsBlockedFor.push(clientEmail);
        } else {
          emailsSentTo.push(clientEmail);
        }

        try {
          let emailValues = {};

          if (testMode) {
            emailValues = {
              email_to: testEmail,
              partner_ids: [],
              email_cc: '',
            };
          }

          const mailIds = await odoo.execute("mail.template", "send_mail", [
            templateId,
            quoteId,
            true,
            false,
            emailValues
          ]);
        } catch (sendError) {
          throw new Error(`Failed to send email: ${sendError}`);
        }

        return {
          success: true,
          template_id: templateId,
          email_sent_to: emailsSentTo,
          email_blocked_for: emailsBlockedFor,
          quote_id: quoteId,
          quote_name: quoteName,
          mode: testMode ? 'test' : 'production'
        };

      } catch (error: any) {
        console.error(`   ❌ Email send failed:`, error);

        return {
          success: false,
          template_id: 0,
          email_sent_to: [],
          email_blocked_for: testMode ? [clientEmail] : [],
          quote_id: quoteId,
          quote_name: quoteName,
          mode: testMode ? 'test' : 'production',
          error: error.message || String(error)
        };
      }
    },

    async getLastClientOrder(clientId: number): Promise<{
      id: number;
      name: string;
      date_order: string;
      partner_name: string;
    }> {
      try {
        const orders = await odoo.searchRead<{
          id: number;
          name: string;
          date_order: string;
          partner_id: [number, string];
        }>(
          "sale.order",
          [
            ["partner_id", "=", clientId],
            ["state", "in", ["sale", "done"]]
          ],
          {
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
        const orders = await odoo.searchRead<{
          id: number;
          name: string;
          date_order: string;
          partner_id: [number, string];
        }>(
          "sale.order",
          [
            ["partner_id", "=", clientId],
            ["state", "in", ["sale", "done"]],
            ["date_order", "<=", referenceDate]
          ],
          {
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
        const orders = await odoo.searchRead<{
          id: number;
          name: string;
          date_order: string;
          partner_id: [number, string];
        }>(
          "sale.order",
          [
            ["name", "=", orderName],
            ["state", "in", ["sale", "done"]]
          ],
          {
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
  };
}
