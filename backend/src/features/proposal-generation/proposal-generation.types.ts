/**
 * Types pour la génération de devis Odoo
 */

/**
 * Détails d'une ligne de commande dans le devis
 */
export interface QuoteLineDetails {
  // IDs
  line_id: number;
  product_id: number;

  // Infos produit
  product_name: string;
  product_uom: [number, string]; // Ex: [27, "TU6"]
  description?: string; // Description/reasoning de la prédiction

  // Quantités
  quantity_ordered: number;

  // Prix & totaux
  price_unit: number; // Prix unitaire HT
  subtotal_ht: number; // price_subtotal
  subtotal_ttc: number; // price_total
  tax_amount: number; // subtotal_ttc - subtotal_ht
}

/**
 * Résultat de la génération d'un devis Odoo
 */
export interface QuoteCreationResult {
  // Devis Odoo
  quote_id: number;
  quote_name: string; // Ex: "S39591"
  state: "draft";

  // Client
  client_id: number;
  client_name: string;
  company_id: number;
  company_name: string;

  // Totaux (calculés par Odoo)
  amount_total_ht: number; // amount_untaxed
  amount_total_ttc: number; // amount_total
  tax_total: number; // amount_tax

  // Lignes détaillées (produits de base)
  order_lines: QuoteLineDetails[];
  lines_count: number;

  // Produits optionnels (sale.order.option)
  optional_products: QuoteLineDetails[];
  optional_products_count: number;

  // Metadata
  tag_id: number; // ID du tag appliqué
  created_at: string; // date_order (ISO)
}
