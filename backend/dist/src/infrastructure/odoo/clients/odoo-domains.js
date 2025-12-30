/**
 * Domaines Odoo réutilisables pour les requêtes
 * Ces domaines sont identiques entre JSON-2 et XML-RPC
 */
/**
 * Domain pour récupérer les commandes dans une période donnée
 * @param dateMin Date minimum de la période (format: "YYYY-MM-DD HH:MM:SS")
 * @param dateMax Date maximum de la période (format: "YYYY-MM-DD HH:MM:SS")
 * @param excludeTagId Optionnel: Tag ID à exclure (ex: tag auto-proposal 82)
 */
export function buildRecentOrdersDomain(dateMin, dateMax, excludeTagId) {
    const domain = [
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
 * @param activePartnerIds IDs des partenaires actifs (ayant commandé récemment)
 * @param excludedPartnerTagId Tag partner à exclure (ex: tag "exclude-auto-proposal")
 */
export function buildInactivePartnersDomain(activePartnerIds, excludedPartnerTagId) {
    const domain = [
        ["is_company", "=", true],
        ["customer_rank", ">", 0],
        ["active", "=", true], // Exclure les clients archivés
        "|", // Union de deux groupes d'inactifs
        ["sale_order_ids", "=", false], // GROUPE 1: Jamais commandé
        "&", // GROUPE 2: A commandé mais pas récemment
        ["sale_order_ids", "!=", false],
        ["id", "not in", activePartnerIds],
    ];
    // Filtrer les partenaires ayant le tag d'exclusion (ex: "exclude-auto-proposal")
    if (excludedPartnerTagId != null && excludedPartnerTagId > 0) {
        domain.push(["category_id", "not in", [excludedPartnerTagId]]);
    }
    return domain;
}
/**
 * Domain pour récupérer les commandes d'un partenaire spécifique
 * - Depuis une date donnée jusqu'à une date de référence
 * - Filtrées par états (draft, sent, sale, done)
 * @param partnerId ID du partenaire
 * @param dateLimitStr Date minimum (format: "YYYY-MM-DD HH:MM:SS")
 * @param states États des commandes à inclure
 * @param referenceDate Date maximum (format: "YYYY-MM-DD HH:MM:SS") - CRITIQUE pour backtest time travel
 */
export function buildPartnerOrdersDomain(partnerId, dateLimitStr, states, referenceDate) {
    const domain = [
        ["partner_id", "=", partnerId],
        ["date_order", ">=", dateLimitStr],
        ["state", "in", states],
    ];
    // CRITIQUE pour backtest: ne pas inclure les commandes après la date de référence
    if (referenceDate) {
        domain.push(["date_order", "<", referenceDate]);
    }
    return domain;
}
