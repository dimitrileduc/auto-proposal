/**
 * Domaines Odoo réutilisables pour les requêtes
 * Ces domaines sont identiques entre JSON-2 et XML-RPC
 */

/**
 * Type pour les domaines Odoo (tuples de 3 éléments ou opérateurs logiques)
 * Note: Le type de odoo-xmlrpc-ts ne supporte pas les opérateurs logiques ("|", "&", "!")
 * donc on utilise any[] pour les domaines complexes
 */
type OdooDomainCondition = [string, string, any];
type OdooDomainOperator = "|" | "&" | "!";
type OdooDomain = Array<OdooDomainCondition | OdooDomainOperator>;

/**
 * Domain pour récupérer les commandes depuis une date donnée
 */
export function buildRecentOrdersDomain(dateLimitStr: string): OdooDomainCondition[] {
  return [["date_order", ">=", dateLimitStr]];
}

/**
 * Domain pour récupérer les partenaires inactifs
 * - Partenaires company uniquement
 * - Avec customer_rank > 0 (ont déjà été clients)
 * - Soit jamais commandé (sale_order_ids = false)
 * - Soit pas commandé récemment (id not in activePartnerIds)
 */
export function buildInactivePartnersDomain(activePartnerIds: number[]): any[] {
  return [
    ["is_company", "=", true],
    ["customer_rank", ">", 0],
    "|", // Union de deux groupes d'inactifs
    ["sale_order_ids", "=", false], // GROUPE 1: Jamais commandé
    "&", // GROUPE 2: A commandé mais pas récemment
    ["sale_order_ids", "!=", false],
    ["id", "not in", activePartnerIds],
  ] as any[]; // Cast nécessaire car odoo-xmlrpc-ts ne supporte pas les opérateurs logiques dans le type
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
): OdooDomainCondition[] {
  return [
    ["partner_id", "=", partnerId],
    ["date_order", ">=", dateLimitStr],
    ["state", "in", states],
  ];
}
