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
}
