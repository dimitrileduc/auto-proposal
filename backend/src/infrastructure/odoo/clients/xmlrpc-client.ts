/**
 * Client Odoo utilisant l'API XML-RPC (Odoo < v19)
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
    async getInactiveCompanyPartners(
      dateMin: string,
      dateMax: string,
      excludeOrderTagId?: number,
      excludedPartnerTagId?: number | null
    ): Promise<OdooPartner[]> {
      try {
        // RPC 1: Récupérer les commandes récentes dans la période [dateMin, dateMax]
        const recentOrders = await odoo.searchRead<OdooOrder>("sale.order",
          buildRecentOrdersDomain(dateMin, dateMax, excludeOrderTagId),
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
          buildInactivePartnersDomain(activePartnerIds, excludedPartnerTagId),
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
        const orders = await odoo.searchRead<OdooOrder>("sale.order",
          buildPartnerOrdersDomain(partnerId, dateStart, states, referenceDate),
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

        // RPC 2: Récupérer les détails des order_lines avec filtrage produits non-food
        const domain: any[] = [["id", "in", orderLineIds]];

        // Filtrer les produits de catégories exclues (consignes, palettes, emballages, etc.)
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
              "product_type",
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

    async sendQuoteByEmail(
      quoteId: number,
      quoteName: string,
      clientEmail: string,
      testMode: boolean,
      testEmail: string
    ): Promise<EmailSendResult> {
      try {
        console.log(`\n📧 Odoo XML-RPC: Sending quote ${quoteName} (ID: ${quoteId})`);
        console.log(`   Mode: ${testMode ? 'TEST' : 'PRODUCTION'}`);

        // Récupérer le template ID pour les devis
        const templates = await odoo.searchRead<{ id: number; name: string }>(
          "mail.template",
          [
            ["model", "=", "sale.order"],
            ["name", "ilike", "Sales Order"]  // Cherche le template standard
          ],
          { fields: ["id", "name"], limit: 1 }
        );

        if (templates.length === 0) {
          throw new Error("No email template found for sale.order");
        }

        const templateId = templates[0].id;
        console.log(`   Using template: ${templates[0].name} (ID: ${templateId})`);

        const emailsSentTo: string[] = [];
        const emailsBlockedFor: string[] = [];

        if (testMode) {
          // MODE TEST: Email uniquement à testEmail
          console.log(`   🔒 TEST MODE: Overriding recipient`);
          console.log(`   ✅ Email will go ONLY to: ${testEmail}`);
          console.log(`   🚫 Client email ${clientEmail} is BLOCKED`);

          emailsSentTo.push(testEmail);
          emailsBlockedFor.push(clientEmail);
        } else {
          // MODE PRODUCTION: Email normal au client
          console.log(`   ⚠️  PRODUCTION MODE:`);
          console.log(`      TO: ${clientEmail} (client)`);
          emailsSentTo.push(clientEmail);
        }

        // Utiliser mail.template.send_mail pour envoyer
        console.log(`   Sending email via template...`);

        try {
          let emailValues = {};

          if (testMode) {
            // En mode TEST, forcer l'email à aller à testEmail
            emailValues = {
              email_to: testEmail,
              partner_ids: [],  // Clear les partners
              email_cc: '',     // Clear le CC
            };
            console.log(`   Forcing email_to: ${testEmail}`);
          }

          // send_mail avec tous les paramètres positionnels
          // Signature: send_mail(res_id, force_send=False, raise_exception=False, email_values=None)
          const mailIds = await odoo.execute("mail.template", "send_mail", [
            templateId,           // Template ID (self)
            quoteId,             // res_id (sale.order)
            true,                // force_send
            false,               // raise_exception
            emailValues          // email_values dict
          ]);

          console.log(`   ✅ Email sent successfully! Mail ID(s): ${mailIds}`);
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
        console.log(`\n📊 Fetching last validated order for client ${clientId}...`);

        // Rechercher la dernière commande validée (state: 'sale' ou 'done')
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

    async getLastClientOrderBeforeDate(clientId: number, referenceDate: string): Promise<{
      id: number;
      name: string;
      date_order: string;
      partner_name: string;
    }> {
      try {
        console.log(`\n📊 Fetching last validated order for client ${clientId} before ${referenceDate}...`);

        // Rechercher la dernière commande validée AVANT referenceDate
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
            ["date_order", "<=", referenceDate]  // Ajout de la contrainte de date
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
              `Erreur lors de la récupération de la dernière commande du client ${clientId} avant ${referenceDate}: ${error}`
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
        console.log(`\n📊 Fetching order ${orderName}...`);

        // Rechercher la commande par son nom
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
        console.log(`   ✅ Found order: ${order.name} (${order.date_order}) for ${order.partner_id[1]}`);

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
              `Erreur lors de la récupération de la commande ${orderName}: ${error}`
            );
      }
    },
  };
}
