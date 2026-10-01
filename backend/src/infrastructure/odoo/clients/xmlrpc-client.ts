/**
 * Odoo XML-RPC client for Odoo versions < v19
 *
 * Implements the OdooClient interface using XML-RPC API.
 *
 * @module infrastructure/odoo/clients/xmlrpc-client
 */

import { OdooClient as XmlRpcOdoo } from "odoo-xmlrpc-ts";
import { calculateDateBefore, odooDatetimeToParisDate } from "../../../utils/date.utils";
import { errorMessage } from "../../../utils/error.utils";
import type {
  OdooClient,
  OdooPartner,
  OdooOrder,
  OdooOrderLine,
  OrderHistory,
  OdooSaleOrder,
  OdooSaleOrderLine,
  ActivityTypeInfo,
  PartnerSalesContext,
  LeadSummary,
  LeadCreateValues,
  ActivityCreateValues,
  OpenSuggestionActivity,
  SuggestionTrace,
} from "./odoo-client.types";
import {
  buildRecentOrdersDomain,
  buildInactivePartnersDomain,
  buildPartnerOrdersDomain,
  buildOldestOpenLeadDomain,
  buildPartnerLeadsDomain,
  buildOpenSuggestionActivitiesDomain,
  buildSuggestionTracesDomain,
  buildLastConfirmedOrderDomain,
} from "./odoo-domains";

/** Odoo many2one value as returned by read / search_read */
type Many2one = [number, string] | false;

interface PartnerSalesRow {
  id: number;
  name: string;
  user_id: Many2one;
  team_id: Many2one;
  commercial_partner_id: Many2one;
  is_company: boolean;
}

interface UserSalesRow {
  id: number;
  name: string;
  active: boolean;
  sale_team_id: Many2one;
  company_ids?: number[];
}

interface ActivityRow {
  id: number;
  res_id: number;
  user_id?: Many2one;
  date_deadline?: string;
  summary?: string | false;
}

interface TraceRow {
  id: number;
  res_id: number;
  date: string;
}

function toOpenActivity(row: ActivityRow): OpenSuggestionActivity {
  return {
    id: row.id,
    leadId: row.res_id,
    userId: many2oneId(row.user_id),
    dateDeadline: row.date_deadline,
    summary: row.summary || undefined,
  };
}

function toTrace(row: TraceRow): SuggestionTrace {
  return { id: row.id, leadId: row.res_id, date: row.date };
}

/** Context that includes archived records (lost opportunities) */
const WITH_ARCHIVED = { active_test: false };

const PARTNER_SALES_FIELDS = ["name", "user_id", "team_id", "commercial_partner_id", "is_company"];
const USER_SALES_FIELDS = ["name", "active", "sale_team_id", "company_ids"];

function many2oneId(value: Many2one | undefined): number | undefined {
  return value ? value[0] : undefined;
}

function toSalesContext(partner: PartnerSalesRow, users: Map<number, UserSalesRow>): PartnerSalesContext {
  const userId = many2oneId(partner.user_id);
  const user = userId !== undefined ? users.get(userId) : undefined;

  return {
    id: partner.id,
    name: partner.name,
    commercialPartnerId: many2oneId(partner.commercial_partner_id) ?? partner.id,
    isCompany: partner.is_company,
    partnerTeamId: many2oneId(partner.team_id),
    salesperson: user
      ? {
          id: user.id,
          name: user.name,
          active: user.active,
          teamId: many2oneId(user.sale_team_id),
          companyIds: user.company_ids ?? [],
        }
      : undefined,
  };
}

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

  /**
   * Reads records by id. Archived records are returned; missing ids are skipped by Odoo.
   */
  async function readRecords<T>(model: string, ids: number[], fields: string[]): Promise<T[]> {
    if (ids.length === 0) {
      return [];
    }
    return odoo.execute<T[]>(model, "read", [ids, fields]);
  }

  async function readSalespeople(partners: PartnerSalesRow[]): Promise<Map<number, UserSalesRow>> {
    const userIds = [
      ...new Set(partners.map((p) => many2oneId(p.user_id)).filter((id): id is number => id !== undefined)),
    ];
    const users = await readRecords<UserSalesRow>("res.users", userIds, USER_SALES_FIELDS);
    return new Map(users.map((u) => [u.id, u]));
  }

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

    async getActivityType(typeId: number): Promise<ActivityTypeInfo | null> {
      try {
        const types = await readRecords<{ id: number; name: string; res_model: string | false; active: boolean }>(
          "mail.activity.type",
          [typeId],
          ["name", "res_model", "active"]
        );
        const type = types[0];
        return type ? { id: type.id, name: type.name, resModel: type.res_model, active: type.active } : null;
      } catch (error) {
        // Odoo 17 raises MissingError on read of a missing id
        if (/MissingError|does not exist/i.test(errorMessage(error))) {
          return null;
        }
        throw error;
      }
    },

    async getPartnerSalesContext(partnerId: number): Promise<PartnerSalesContext> {
      const partners = await readRecords<PartnerSalesRow>("res.partner", [partnerId], PARTNER_SALES_FIELDS);

      if (partners.length === 0) {
        throw new Error(`Partner ${partnerId} not found`);
      }

      const users = await readSalespeople(partners);
      return toSalesContext(partners[0], users);
    },

    async getSalesContexts(partnerIds: number[]): Promise<Map<number, PartnerSalesContext>> {
      const partners = await readRecords<PartnerSalesRow>("res.partner", partnerIds, PARTNER_SALES_FIELDS);
      const users = await readSalespeople(partners);

      return new Map(partners.map((partner) => [partner.id, toSalesContext(partner, users)]));
    },

    async findOldestOpenLead(commercialPartnerId: number, companyId: number): Promise<LeadSummary | null> {
      const leads = await odoo.searchRead<{
        id: number;
        name: string;
        create_date: string;
        user_id: Many2one;
        team_id: Many2one;
      }>(
        "crm.lead",
        buildOldestOpenLeadDomain(commercialPartnerId, companyId),
        {
          fields: ["id", "name", "create_date", "user_id", "team_id"],
          order: "create_date asc, id asc",
          limit: 1,
        }
      );

      if (leads.length === 0) {
        return null;
      }

      const lead = leads[0];
      return {
        id: lead.id,
        name: lead.name,
        createDate: lead.create_date,
        userId: many2oneId(lead.user_id),
        teamId: many2oneId(lead.team_id),
      };
    },

    async getPartnerLeadIds(commercialPartnerId: number, companyId: number): Promise<number[]> {
      const leads = await odoo.execute<Array<{ id: number }>>(
        "crm.lead",
        "search_read",
        [buildPartnerLeadsDomain(commercialPartnerId, companyId)],
        { fields: ["id"], context: WITH_ARCHIVED }
      );

      return leads.map((lead) => lead.id);
    },

    async findOpenSuggestionActivity(leadIds: number[], typeId: number): Promise<OpenSuggestionActivity | null> {
      if (leadIds.length === 0) {
        return null;
      }

      const activities = await odoo.searchRead<ActivityRow>(
        "mail.activity",
        buildOpenSuggestionActivitiesDomain(leadIds, typeId),
        {
          fields: ["id", "res_id", "user_id", "date_deadline", "summary"],
          order: "date_deadline asc",
          limit: 1,
        }
      );

      return activities.length > 0 ? toOpenActivity(activities[0]) : null;
    },

    async findLastSuggestionTrace(leadIds: number[], typeId: number, since: string): Promise<SuggestionTrace | null> {
      if (leadIds.length === 0) {
        return null;
      }

      const traces = await odoo.searchRead<TraceRow>(
        "mail.message",
        buildSuggestionTracesDomain(leadIds, typeId, since),
        { fields: ["id", "res_id", "date"], order: "date desc", limit: 1 }
      );

      return traces.length > 0 ? toTrace(traces[0]) : null;
    },

    async getLeadIdsByCommercialPartners(
      commercialPartnerIds: number[],
      companyId: number
    ): Promise<Map<number, number[]>> {
      const leadsByPartner = new Map<number, number[]>();

      if (commercialPartnerIds.length === 0) {
        return leadsByPartner;
      }

      // P3: opportunities of the clients and their contacts, archived included
      const leads = await odoo.execute<Array<{ id: number; partner_id: Many2one }>>(
        "crm.lead",
        "search_read",
        [buildPartnerLeadsDomain(commercialPartnerIds, companyId)],
        { fields: ["id", "partner_id"], context: WITH_ARCHIVED }
      );

      // P3b: commercial partner of each opportunity partner (contact → company). The clients
      // themselves are their own commercial partner: only the contacts need a read.
      const commercialByPartner = new Map(commercialPartnerIds.map((id) => [id, id]));
      const contactIds = [
        ...new Set(leads.map((lead) => many2oneId(lead.partner_id)).filter((id): id is number => id !== undefined)),
      ].filter((id) => !commercialByPartner.has(id));
      const contacts = await readRecords<{ id: number; commercial_partner_id: Many2one }>(
        "res.partner",
        contactIds,
        ["commercial_partner_id"]
      );
      for (const contact of contacts) {
        commercialByPartner.set(contact.id, many2oneId(contact.commercial_partner_id) ?? contact.id);
      }

      for (const lead of leads) {
        const partnerId = many2oneId(lead.partner_id);
        const commercialPartnerId = partnerId !== undefined ? commercialByPartner.get(partnerId) : undefined;
        if (commercialPartnerId === undefined) continue;

        const ids = leadsByPartner.get(commercialPartnerId) ?? [];
        ids.push(lead.id);
        leadsByPartner.set(commercialPartnerId, ids);
      }

      return leadsByPartner;
    },

    async findOpenSuggestionActivities(leadIds: number[], typeId: number): Promise<OpenSuggestionActivity[]> {
      if (leadIds.length === 0) {
        return [];
      }

      const activities = await odoo.searchRead<ActivityRow>(
        "mail.activity",
        buildOpenSuggestionActivitiesDomain(leadIds, typeId),
        { fields: ["id", "res_id"] }
      );

      return activities.map(toOpenActivity);
    },

    async findSuggestionTracesSince(leadIds: number[], typeId: number, since: string): Promise<SuggestionTrace[]> {
      if (leadIds.length === 0) {
        return [];
      }

      const traces = await odoo.searchRead<TraceRow>(
        "mail.message",
        buildSuggestionTracesDomain(leadIds, typeId, since),
        { fields: ["res_id", "date"] }
      );

      return traces.map(toTrace);
    },

    async findLastConfirmedOrderDate(partnerId: number, companyId: number): Promise<string | null> {
      const orders = await odoo.searchRead<{ date_order: string; name: string }>(
        "sale.order",
        buildLastConfirmedOrderDomain(partnerId, companyId),
        { fields: ["date_order", "name"], order: "date_order desc", limit: 1 }
      );

      return orders.length > 0 ? odooDatetimeToParisDate(orders[0].date_order) : null;
    },

    async getTeamCompanies(teamIds: number[]): Promise<Map<number, number | false>> {
      const teams = await readRecords<{ id: number; company_id: Many2one }>(
        "crm.team",
        [...new Set(teamIds)],
        ["company_id"]
      );
      return new Map(teams.map((team) => [team.id, many2oneId(team.company_id) ?? false]));
    },

    async createLead(values: LeadCreateValues): Promise<number> {
      try {
        return await odoo.create("crm.lead", values);
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error(`Failed to create opportunity: ${error}`);
      }
    },

    async createActivity(values: ActivityCreateValues): Promise<number> {
      try {
        // default_res_model lets Odoo fill res_model_id (ir.model is not readable by the API account)
        return await odoo.execute<number>("mail.activity", "create", [values], {
          context: { default_res_model: "crm.lead" },
        });
      } catch (error) {
        throw error instanceof Error
          ? error
          : new Error(`Failed to create activity: ${error}`);
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
