/**
 * Interface commune pour les clients Odoo (XML-RPC et JSON-2)
 * Permet de switcher entre les implémentations selon la version d'Odoo
 */

export interface OdooOrder {
  id: number;
  partner_id: [number, string];
  date_order: string;
  name: string;
  state: string;
  order_line?: number[];
}

export interface OdooPartner {
  id: number;
  name: string;
  email: string | false;
}

export interface OdooOrderLine {
  id: number;
  product_id: [number, string] | false;
  product_uom_qty: number;
  product_uom: [number, string];
  product_type: string;  // "product" | "service" | "consu"
  price_unit: number;
  order_id: [number, string];
}

export interface OrderHistory {
  orders: OdooOrder[];
  orderLines: OdooOrderLine[];
}

/**
 * Informations partner avec company
 */
export interface PartnerCompanyInfo {
  name: string;
  company_id: [number, string];
}

/**
 * Sale Order complet avec totaux et taxes
 */
export interface OdooSaleOrder {
  id: number;
  name: string;                    // Ex: "S39591"
  partner_id: [number, string];    // [24199, "AUX DELICES D'EMBOURG"]
  company_id: [number, string];    // [3, "FOODPRINT SRL"]
  state: string;                   // "draft" | "sent" | "sale" | "cancel"
  amount_untaxed: number;          // Total HT
  amount_tax: number;              // Total taxes
  amount_total: number;            // Total TTC
  order_line: number[];            // IDs des lignes
  tag_ids: number[];               // IDs des tags
  date_order: string;              // Date création
}

/**
 * Sale Order Line détaillée avec prix et taxes
 */
export interface OdooSaleOrderLine {
  id: number;
  order_id: [number, string];
  product_id: [number, string];
  product_uom: [number, string];   // Ex: [27, "TU6"]
  product_uom_qty: number;
  price_unit: number;
  price_subtotal: number;          // HT
  price_total: number;             // TTC
  tax_id: number[];                // IDs des taxes
}

/**
 * Interface du client Odoo
 * Implémentée par XML-RPC et JSON-2
 */
export interface OdooClient {
  /**
   * Récupère les partenaires company inactifs
   */
  getInactiveCompanyPartners(days: number): Promise<OdooPartner[]>;

  /**
   * Récupère l'historique des commandes d'un partenaire
   */
  getOrderHistoryByPartner(
    partnerId: number,
    days: number,
    includeDraftOrders: boolean
  ): Promise<OrderHistory>;

  /**
   * Récupère les infos partner avec company (requis pour multi-company)
   */
  getPartnerCompanyInfo(partnerId: number): Promise<PartnerCompanyInfo>;

  /**
   * Crée un sale.order (devis)
   */
  createSaleOrder(data: {
    partner_id: number;
    company_id: number;
    tag_ids?: any[];
    note?: string;
  }): Promise<number>;

  /**
   * Crée une sale.order.line
   */
  createSaleOrderLine(data: {
    order_id: number;
    product_id: number;
    product_uom_qty: number;
    price_unit: number;
  }): Promise<number>;

  /**
   * Récupère les détails complets d'un devis avec lignes et taxes
   */
  getSaleOrderDetails(quoteId: number): Promise<{
    order: OdooSaleOrder;
    lines: OdooSaleOrderLine[];
  }>;
}
