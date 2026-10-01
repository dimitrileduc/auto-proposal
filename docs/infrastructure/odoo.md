# Odoo Integration

Interface avec Odoo ERP pour lire les données et créer les activités « Suggestion commande ».

## Objectif

Communiquer avec Odoo en lecture/écriture pour :
- Rechercher les clients inactifs
- Récupérer l'historique de commandes
- Lire vendeurs, opportunités, activités et relances (éligibilité)
- Créer les opportunités et activités « Suggestion commande »

Le backend ne crée plus de devis. Il ne modifie jamais la configuration d'Odoo : le type d'activité et les règles côté Odoo sont livrés par le module `moutarderie_suggestion_commande`.

## Client Odoo

Factory pattern pour créer clients :

```typescript
import { createOdooClient } from './infrastructure/odoo/odoo.service';
import { OdooApiType } from './types';

const client = createOdooClient(OdooApiType.XMLRPC);
```

### Types de clients

| Type | Avantages | Usage |
|------|-----------|-------|
| **XML-RPC** | Stable, éprouvé | Production (Odoo 17) |
| **JSON-2** | Moderne, standard | Odoo 19+, non utilisé, incomplet vis-à-vis de l'interface |

### Configuration

Variables d'environnement du backend (`backend/.env` en local, variables Trigger.dev en prod) :

| Variable | Rôle |
|----------|------|
| `ODOO_URL` | URL de la base (prod : https://collectif.odoo.com) |
| `ODOO_DB` | Nom de la base |
| `ODOO_USERNAME` | `suggestions.auto` (compte « Suggestions automatiques ») |
| `ODOO_PASSWORD` | Clé API de ce compte, une par base, jamais versionnée |
| `ODOO_SUGGESTION_ACTIVITY_TYPE_ID` | Id du type « Suggestion commande » dans cette base (local, staging). Vide = valeur de `autoProposalConfig.activity.suggestionActivityTypeId` |

## Compte « Suggestions automatiques »

Le backend se connecte avec un utilisateur dédié, créé par le module (`user_suggestions_automatiques`, login `suggestions.auto`) : utilisateur interne sans mot de passe, groupe « Ventes : tous les documents », rattaché à toutes les sociétés existantes à l'installation. Les activités, les opportunités créées et la notification envoyée au vendeur portent ce nom, pas celui d'une personne.

- **Clé API** : générée une fois par base (local, staging, prod) depuis le shell Odoo, puis placée dans `ODOO_PASSWORD`. Procédure dans le README du module.
- **E-mail** : le compte a une adresse (`suggestions.auto@example.com`), sans laquelle Odoo refuse de notifier le vendeur assigné. L'adresse réelle est à valider avant la staging (donnée `noupdate` : une mise à jour du module ne la change pas).
- **Droits** : ce compte ne peut pas lire `ir.model`. Les activités sont donc créées sans `res_model_id`, avec le contexte `default_res_model: "crm.lead"` (voir `createActivity`).

## Méthodes `OdooClient`

Toutes les lectures et écritures portent la société analysée (`companyId`, 3 en prod). Les domaines sont construits dans `odoo-domains.ts` et testés unitairement.

### Détection et historique (inchangées)

| Méthode | Usage |
|---------|-------|
| `getInactiveCompanyPartners(dateMin, dateMax, excludeOrderTagId?, excludedPartnerTagId?, companyId)` | Clients inactifs |
| `getOrderHistoryByPartner(partnerId, windowDays, referenceDate, includeDraftOrders, excludedCategoryIds?, companyId?)` | Historique de commandes |
| `getSaleOrderDetails`, `getLastClientOrder`, `getLastClientOrderBeforeDate`, `getOrderByName` | Backtesting |

### Activité « Suggestion commande »

| # | Méthode | Lecture / écriture |
|---|---------|--------------------|
| V1 | `getActivityType(typeId)` | `mail.activity.type` lu par id ; `null` si absent |
| P1 + P2 | `getSalesContexts(partnerIds)` | vendeur et équipe de plusieurs clients en 2 appels (`read`) |
| P3 + P3b | `getLeadIdsByCommercialPartners(cps, companyId)` | opportunités de plusieurs clients, archivées comprises, rattachées à la société cliente (contacts inclus) |
| P4 | `findOpenSuggestionActivities(leadIds, typeId)` | activités ouvertes du type |
| P5 | `findSuggestionTracesSince(leadIds, typeId, since)` | `mail.message` portant le type depuis une date |
| Q1 + Q1b | `getPartnerSalesContext(partnerId)` | vendeur (lu par `read` : un utilisateur archivé est renvoyé avec `active = false`) et équipes |
| Q2 | `getPartnerLeadIds(commercialPartnerId, companyId)` | opportunités d'un client, archivées comprises |
| Q3 | `findOpenSuggestionActivity(leadIds, typeId)` | activité ouverte (échéance la plus proche) |
| Q4 | `findLastSuggestionTrace(leadIds, typeId, since)` | dernière relance |
| Q5 | `findOldestOpenLead(commercialPartnerId, companyId)` | plus ancienne opportunité ouverte (`create_date asc, id asc`) |
| Q6 | `findLastConfirmedOrderDate(partnerId, companyId)` | dernière commande confirmée, jour de Paris `YYYY-MM-DD` |
| Q8 | `createLead(values)` | `crm.lead.create` |
| Q9 | `createActivity(values)` | `mail.activity.create` avec `context: { default_res_model: "crm.lead" }` |

Les archivées sont incluses en passant `context: { active_test: false }` dans les kwargs de `search_read` (vérifié sur Odoo 17 local). Les méthodes P4, P5, Q3 et Q4 ne font aucun appel si la liste d'opportunités est vide.

### Méthodes retirées

`createSaleOrder`, `createSaleOrderLine`, `createSaleOrderOption`, `sendQuoteByEmail` (génération de devis supprimée) et `getPartnerCompanyInfo` (remplacée par `getPartnerSalesContext`).

## Créer une activité

```typescript
const leadId = lead?.id ?? await client.createLead({
  name: "Suggestion commande ACME",
  type: "opportunity",
  partner_id: clientId,
  user_id: salespersonId,
  team_id: teamId ?? false,
  company_id: 3,
});

const activityId = await client.createActivity({
  res_id: leadId,
  activity_type_id: autoProposalConfig.activity.suggestionActivityTypeId,
  summary: "Suggestion commande ACME",
  note: "<p>Dernière commande : 12/08/2026</p>…",
  date_deadline: "2026-10-02",
  user_id: salespersonId,
});
```

En pratique, ces appels passent par `writeSuggestion` (feature [Suggestion Activity](../features/suggestion-activity.md)), qui transforme une erreur d'écriture en `outcome` `error`.

## Modèles Odoo utilisés

| Modèle | Utilisation |
|--------|------------|
| **res.partner** | Clients, vendeur et équipe (lecture) |
| **res.users** | Vendeurs, actifs ou archivés (lecture) |
| **sale.order** | Commandes (lecture uniquement) |
| **sale.order.line** | Lignes de commandes (lecture) |
| **crm.lead** | Opportunités (lecture, création) |
| **mail.activity** | Activités « Suggestion commande » (lecture, création) |
| **mail.activity.type** | Type « Suggestion commande » (lecture, V1) |
| **mail.message** | Traces de relance (lecture) |
| **res.partner.category** | Tags clients (lecture) |

## Module `moutarderie_suggestion_commande`

Module Odoo 17.0 versionné dans `odoo/addons/moutarderie_suggestion_commande/` (dépendances `crm` + `sale`, aucune dépendance Enterprise). Il livre le type d'activité « Suggestion commande » (`keep_done`, réservé à `crm.lead`), le compte « Suggestions automatiques », la fermeture de l'activité à la création d'un devis dans la même société, et la trace datée d'une activité disparue sans être passée en fait. Détails : [Suggestion Activity](../features/suggestion-activity.md#module-odoo-moutarderie_suggestion_commande).

**Id du type** : attribué à l'installation, il diffère d'une base à l'autre. Relevé en lecture seule par `ir.model.data` (module `moutarderie_suggestion_commande`, nom `mail_activity_type_suggestion_commande`, champ `res_id`), puis reporté dans `ODOO_SUGGESTION_ACTIVITY_TYPE_ID` (local, staging) ou `activity.suggestionActivityTypeId` (prod). L'orchestrateur le vérifie au début de chaque lancement.

## Odoo local (Docker)

Pour développer sans toucher la prod, `odoo/` contient un Odoo 17 community :

```bash
cd odoo
docker compose up -d                       # Odoo sur http://localhost:8069
ODOO_HTTP_PORT=8070 docker compose up -d   # si le port 8069 est déjà pris
docker compose run --rm odoo odoo -c /etc/odoo/odoo.conf -d moutarderie_local \
  -i crm,sale_management,moutarderie_suggestion_commande --without-demo=all --stop-after-init
python3 dev/seed_local.py --url http://localhost:8069 --db moutarderie_local
```

`seed_local.py` crée deux sociétés, un vendeur actif et un archivé, l'étiquette d'exclusion, des produits, un client par scénario avec son historique de commandes, et affiche les ids à passer au backend (`companyId`, `excludedPartnerTagId`, id du type). Tests du module : README du module (scénario A du quickstart).

## Gestion d'erreurs

Le client XML-RPC relaie les erreurs Odoo sous forme d'exceptions (`OdooError`, `OdooAuthenticationError`). Dans le pipeline :
- une erreur de **lecture** fait échouer la tâche, qui est relancée par Trigger.dev ;
- une erreur d'**écriture** (opportunité ou activité) devient un `outcome` `error` dans le compte rendu.

## Rate Limiting

- Pré-filtre d'éligibilité en lot : un nombre fixe de lectures pour tous les clients du lancement, au lieu de plusieurs lectures par client.
- `p-limit` pour la concurrence des appels IA.

## Voir aussi

- **[Architecture](../ARCHITECTURE.md)** - Stack overview
- **[Getting Started](../GETTING-STARTED.md)** - Configuration env
- **[Suggestion Activity](../features/suggestion-activity.md)** - Règles et écritures
- Code source: `backend/src/infrastructure/odoo/`, `odoo/addons/moutarderie_suggestion_commande/`

---

**Stack**: Odoo 17 · Node.js · odoo-xmlrpc-ts
