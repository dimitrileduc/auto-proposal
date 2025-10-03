/**
 * Domaines Odoo réutilisables pour les requêtes
 * Ces domaines sont identiques entre JSON-2 et XML-RPC
 */

/**
 * Domain pour récupérer les commandes depuis une date donnée
 */
export function buildRecentOrdersDomain(dateLimitStr: string) {
  return [["date_order", ">=", dateLimitStr]];
}

/**
 * Domain pour récupérer les partenaires inactifs
 * - Partenaires company uniquement
 * - Soit jamais commandé (sale_order_ids = false)
 * - Soit pas commandé récemment (id not in activePartnerIds)
 */
export function buildInactivePartnersDomain(activePartnerIds: number[]) {
  return [
    ["is_company", "=", true],
    // TODO: Uncomment when customer_rank is properly configured in Odoo
    // Currently some valid customers have customer_rank = 0 in the database
    // ["customer_rank", ">", 0],
    "|", // Union de deux groupes d'inactifs
    ["sale_order_ids", "=", false], // GROUPE 1: Jamais commandé
    "&", // GROUPE 2: A commandé mais pas récemment
    ["sale_order_ids", "!=", false],
    ["id", "not in", activePartnerIds],
  ];
}

/**
 * Domain pour récupérer les commandes d'un partenaire spécifique
 * - Depuis une date donnée
 * - Filtrées par états (draft, sent, sale, done)
 */
export function buildPartnerOrdersDomain(
  partnerId: number,
  dateLimitStr: string,
  states: string[]
) {
  return [
    ["partner_id", "=", partnerId],
    ["date_order", ">=", dateLimitStr],
    ["state", "in", states],
  ];
}
