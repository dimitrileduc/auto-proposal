# Contrat : appels Odoo du backend (XML-RPC, `OdooClient`)

Toutes les lectures et écritures portent `companyId` (3 en prod). Les domaines sont construits dans
`odoo-domains.ts` (testés unitairement) ; les appels sont implémentés dans `xmlrpc-client.ts`.
`T` = id du type d'activité (config, R8). `runDate` = "YYYY-MM-DD" (Europe/Paris).
Authentification : compte « Suggestions automatiques » (`suggestions.auto` + clé API, R18).

## Vérification au démarrage du lancement (orchestrateur)

| # | Modèle | Appel | Domaine / champs | Usage |
|---|---|---|---|---|
| V1 | `mail.activity.type` | `read([T], ["name","res_model","active"])` | — | Abandon du lancement si absent, ou `name ≠ "Suggestion commande"`, ou `res_model ≠ "crm.lead"` |

Nouvelle méthode : `getActivityType(typeId): Promise<{ id; name; res_model } | null>`.

## Pré-filtre en lot, avant l'IA (orchestrateur, R9)

Une seule série de lectures pour tous les clients inactifs du lancement (~1 700). `ids` = ids des clients
inactifs ; les listes `in` ne sont pas découpées (quelques milliers d'ids restent un petit message XML-RPC).

| # | Modèle | Appel | Domaine / champs | Résultat |
|---|---|---|---|---|
| P1 | `res.partner` | `read(ids, ["name","user_id","team_id","commercial_partner_id"])` | — | vendeur et équipe par client, `commercialPartnerId` |
| P2 | `res.users` | `read(vendeurIdsDistincts, ["name","active","sale_team_id","company_ids"])` | — | vendeurs actifs ou non, et leur accès à la société analysée |
| P3 | `crm.lead` | `search_read`, `context: { active_test: false }` | `[("partner_id.commercial_partner_id","in",cps), ("type","=","opportunity"), ("company_id","=",companyId)]`, champs `["id","partner_id"]` | opportunités de tous les clients, archivées comprises |
| P3b | `res.partner` | `read(partnerIdsDesOpportunites, ["commercial_partner_id"])` | — | rattachement opportunité → client |
| P4 | `mail.activity` | `search_read` | `[("activity_type_id","=",T), ("res_model","=","crm.lead"), ("res_id","in",leadIds), ("active","=",true)]`, champs `["id","res_id"]` | clients avec activité ouverte |
| P5 | `mail.message` | `search_read` | `[("mail_activity_type_id","=",T), ("model","=","crm.lead"), ("res_id","in",leadIds), ("date",">=", runDate − 21 j + " 00:00:00")]`, champs `["res_id","date"]` | date de relance la plus récente par client (max en code) |

Puis `decideEligibility` par client. Méthodes : `getSalesContexts(partnerIds)` (P1 + P2),
`getLeadIdsByCommercialPartners(cps, companyId)` (P3 + P3b), `findOpenSuggestionActivities(leadIds, T)`
(P4), `findSuggestionTracesSince(leadIds, T, since)` (P5).

## Revérification par client, juste avant l'écriture (tâche client, étape 3)

Même règle, pour un seul client (protège aussi une tâche lancée seule par la route) :

| # | Modèle | Appel | Domaine / champs | Résultat |
|---|---|---|---|---|
| Q1 | `res.partner` | `read([clientId], ["name","user_id","team_id","commercial_partner_id","is_company"])` | — | vendeur, équipe du client, `commercialPartnerId` |
| Q1b | `res.users` | `read([userId], ["name","active","sale_team_id","company_ids"])` (pas `search`, qui masque les archivés) | — | vendeur actif ou non, équipe du vendeur |
| Q2 | `crm.lead` | `search_read` avec `context: { active_test: false }` | `[("partner_id.commercial_partner_id","=",cp), ("type","=","opportunity"), ("company_id","=",companyId)]`, champs `["id","name","active","create_date","user_id","company_id"]` | `leadIds` (toutes, archivées comprises) |
| Q3 | `mail.activity` | `search_read` | `[("activity_type_id","=",T), ("res_model","=","crm.lead"), ("res_id","in",leadIds), ("active","=",true)]`, champs `["id","res_id","user_id","date_deadline","summary"]`, `order: "date_deadline asc"`, `limit: 1` | activité ouverte |
| Q4 | `mail.message` | `search_read` | `[("mail_activity_type_id","=",T), ("model","=","crm.lead"), ("res_id","in",leadIds), ("date",">=", runDate − 21 j + " 00:00:00")]`, champs `["id","res_id","date"]`, `order: "date desc"`, `limit: 1` | dernière relance récente |

Si `leadIds` est vide, Q3 et Q4 ne sont pas émises (résultat vide).

Méthodes exposées : `getPartnerSalesContext(partnerId)` (Q1 + Q1b), `getPartnerLeadIds(commercialPartnerId, companyId)` (Q2), `findOpenSuggestionActivity(leadIds, typeId)` (Q3), `findLastSuggestionTrace(leadIds, typeId, sinceDatetime)` (Q4).

## Lectures pour l'écriture (étape 3, mode test inclus, après Q1 à Q4)

| # | Modèle | Appel | Domaine / champs | Résultat |
|---|---|---|---|---|
| Q5 | `crm.lead` | `search_read` | `[("partner_id.commercial_partner_id","=",cp), ("type","=","opportunity"), ("active","=",true), ("stage_id.is_won","=",false), ("company_id","=",companyId)]`, champs `["id","name","create_date","user_id","team_id"]`, `order: "create_date asc, id asc"`, `limit: 1` | opportunité porteuse (ou aucune → à créer) |
| Q6 | `sale.order` | `search_read` | `[("partner_id","=",clientId), ("state","in",["sale","done"]), ("company_id","=",companyId)]`, champs `["date_order","name"]`, `order: "date_order desc"`, `limit: 1` | date de dernière commande (description) |
| ~~Q7~~ | ~~`ir.model`~~ | Retiré à l'implémentation (30/09/2026) : le compte `suggestions.auto` n'a pas le droit de lire `ir.model`. Q9 laisse Odoo résoudre `res_model_id` par le contexte `default_res_model`. | — | — |

Méthodes : `findOldestOpenLead(commercialPartnerId, companyId)` (Q5), `findLastConfirmedOrderDate(partnerId, companyId)` (Q6).

## Écritures (mode réel uniquement, `skipOdooWrite = false`)

| # | Modèle | Appel | Valeurs | Résultat |
|---|---|---|---|---|
| Q8 | `crm.lead` | `create` (seulement si Q5 vide) | `{ name: "Suggestion commande <client>", type: "opportunity", partner_id, user_id: vendeur, team_id: première équipe de FOODPRINT ou sans société parmi partner.team_id et user.sale_team_id, sinon false, company_id: companyId }`, après `crm.team.read(ids, ["company_id"])` | `leadId` (entier) |
| Q9 | `mail.activity` | `create`, `context: { default_res_model: "crm.lead" }` | `{ res_id: leadId, activity_type_id: T, summary: "Suggestion commande <client>", note: <HTML>, date_deadline: runDate, user_id: vendeur }` (pas de `res_model_id` : Odoo le remplit depuis le contexte) | `activityId` (entier) |

Méthodes : `createLead(values)` (Q8), `createActivity(values)` (Q9). `activity_schedule` n'est pas
utilisé (retourne un recordset non sérialisable en XML-RPC, R7).

## Méthodes retirées de `OdooClient`

`createSaleOrder`, `createSaleOrderLine`, `createSaleOrderOption`, `sendQuoteByEmail`.
`getPartnerCompanyInfo` est remplacé par `getPartnerSalesContext`. `getSaleOrderDetails`,
`getInactiveCompanyPartners`, `getOrderHistoryByPartner`, `getLastClientOrder*`, `getOrderByName`
sont inchangés.

## Séquence (mode réel)

```
Orchestrateur, une fois pour tous les clients inactifs :
V1               ─▶ type d'activité valide ? sinon abandon du lancement
P1..P5           ─▶ decideEligibility par client ──écartés directement dans le compte rendu
                     (pas de vendeur, vendeur inactif, vendeur sans accès à FOODPRINT,
                      activité déjà ouverte, relancé < 3 semaines)
Tâche client, seulement pour les éligibles :
[IA : calculateReplenishmentNeeds → prepareProposal, inchangés]
aucun produit ? ──écarté (aucun produit suggéré)
Q1..Q4   ─▶ revérification complète (relance Trigger.dev, tâche lancée seule) ──écarté si changé
Q5, Q6   ─▶ opportunité porteuse, date dernière commande
[Q8]     ─▶ opportunité créée si Q5 vide   (échec → outcome error, sans leadCreatedId)
Q9       ─▶ activité créée                  (échec → outcome error, leadCreatedId si Q8 a eu lieu)
```

Mode test : même séquence, Q8 et Q9 remplacés par `would_create` avec `leadCreated = (Q5 vide)`.
