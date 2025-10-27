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
 * Domain pour récupérer les commandes dans une période donnée
 * @param dateMin Date minimum de la période (format: "YYYY-MM-DD HH:MM:SS")
 * @param dateMax Date maximum de la période (format: "YYYY-MM-DD HH:MM:SS")
 * @param excludeTagId Optionnel: Tag ID à exclure (ex: tag auto-proposal 82)
 */
export function buildRecentOrdersDomain(
  dateMin: string,
  dateMax: string,
  excludeTagId?: number
): OdooDomainCondition[] {
  const domain: OdooDomainCondition[] = [
    ["date_order", ">=", dateMin],
    ["date_order", "<=", dateMax],
  ];

  if (excludeTagId !== undefined) {
    // Exclure les commandes ayant ce tag
    domain.push(["tag_ids", "not in", [excludeTagId]]);
  }

  return domain;
}

/**
 * Domain pour récupérer les partenaires inactifs
 * - Partenaires company uniquement
 * - Avec customer_rank > 0 (ont déjà été clients)
 * - Partenaires actifs uniquement (non archivés dans Odoo)
 * - Soit jamais commandé (sale_order_ids = false)
 * - Soit pas commandé récemment (id not in activePartnerIds)
 */
export function buildInactivePartnersDomain(activePartnerIds: number[]): any[] {
  return [
    ["is_company", "=", true],
    ["customer_rank", ">", 0],
    ["active", "=", true], // Exclure les clients archivés
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
