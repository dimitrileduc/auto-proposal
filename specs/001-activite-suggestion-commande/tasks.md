---

description: "Liste des tâches : activité « Suggestion commande » à la place des devis automatiques"
---

# Tâches : Activité « Suggestion commande » à la place des devis automatiques

**Entrée** : documents de conception dans `/specs/001-activite-suggestion-commande/`

**Prérequis** : [plan.md](./plan.md), [spec.md](./spec.md), [research.md](./research.md), [data-model.md](./data-model.md), [contracts/](./contracts/), [quickstart.md](./quickstart.md)

**Tests** : demandés par le plan (section Testing), par le contrat du module (13 tests listés) et par le quickstart (scénarios A et B). Dans chaque story, les tests sont écrits avant le code et doivent échouer avant l'implémentation.

**Organisation** : une phase par user story, dans l'ordre des priorités (US1 et US4 en P1, US2 et US3 en P2, US5 en P3). US4 passe avant US2 car elle bloque la mise en service (spec, US4).

## Format : `[ID] [P?] [Story] Description`

- **[P]** : peut être fait en parallèle (fichiers différents, aucune dépendance sur une tâche non terminée)
- **[Story]** : user story concernée (US1 à US5)
- Chemins relatifs à la racine du dépôt

## Conventions de chemins

- Module Odoo : `odoo/addons/moutarderie_suggestion_commande/` (abrégé `<module>/` ci-dessous)
- Outillage Odoo local : `odoo/docker-compose.yml`, `odoo/config/`, `odoo/dev/`
- Backend : `backend/src/`, tests vitest à côté du code (`*.test.ts`)
- Nouvelle feature backend : `backend/src/features/suggestion-activity/` (abrégé `<sa>/` ci-dessous)

## Règles transverses (valables pour toutes les tâches)

- Toute lecture et écriture Odoo du backend filtre sur `companyId` (constitution, contraintes techniques).
- Mode test par défaut : `skipOdooWrite` vaut `true` partout sauf dans `orchestrator-scheduled.task.ts` (constitution III).
- Aucune erreur TypeScript nouvelle dans un fichier créé ou modifié, par rapport à `specs/001-activite-suggestion-commande/tsc-baseline.txt` (T003).
- `backend/src/features/stock-replenishment/`, `backend/src/features/client-inactivity/` et `backend/src/features/proposal-preparation/` ne sont pas modifiés (FR-018, SC-005).
- Les libellés visibles par la cliente (compte rendu, description, messages Odoo) sont en français.

---

## Phase 1 : Setup (infrastructure partagée)

**Objectif** : outillage du dépôt réparé, Odoo 17 local prêt, squelette du module.

- [X] T001 Ajouter `vitest` `^3` en devDependency de `backend/package.json` (`pnpm add -D vitest@^3` depuis `backend/`), garder `backend/vitest.config.ts` tel quel, puis vérifier que `pnpm test` exécute `backend/src/infrastructure/odoo/clients/company-filtering.test.ts` au vert (research R15)
- [X] T002 Corriger `backend/tsconfig.json` : `"module": "ESNext"` et `"moduleResolution": "Bundler"` à la place de `NodeNext`/`node`, puis vérifier que `npx tsc --noEmit` depuis `backend/` s'exécute sans l'erreur TS5109 (research R15)
- [X] T003 Relever la référence d'erreurs TypeScript avant tout changement de code : depuis `backend/`, `npx tsc --noEmit 2>&1 | grep -oE '^src/[^(]+' | sort | uniq -c > ../specs/001-activite-suggestion-commande/tsc-baseline.txt` (environ 199 erreurs attendues, hors périmètre, research R15) (dépend de T002)
- [X] T004 [P] Compléter `backend/.env.example` sans retirer les lignes existantes : `ODOO_USERNAME=suggestions.auto`, `ODOO_PASSWORD=<clé API du compte « Suggestions automatiques », générée une fois par base, jamais versionnée>`, `ODOO_SUGGESTION_ACTIVITY_TYPE_ID=` (vide = valeur de `backend/src/config/auto-proposal.ts`), chacune avec un commentaire d'une ligne (research R15, R18)
- [X] T005 [P] Créer `odoo/docker-compose.yml` (services `db` = `postgres:15` et `odoo` = `odoo:17.0`, `./addons` monté sur `/mnt/extra-addons`, `./config` monté sur `/etc/odoo`, port `8069:8069`, volumes nommés pour les données) et `odoo/config/odoo.conf` (`addons_path = /mnt/extra-addons,/usr/lib/python3/dist-packages/odoo/addons`, `db_host = db`, identifiants postgres du compose, `without_demo = all`) (research R14)
- [X] T006 [P] Créer le squelette du module dans `odoo/addons/moutarderie_suggestion_commande/` : `__manifest__.py` identique au contrat ([contracts/odoo-module.md](./contracts/odoo-module.md), section Manifeste), `__init__.py` (`from . import models` et `from .hooks import post_init_hook`), `models/__init__.py` vide, `tests/__init__.py` vide, `README.md` (objet, dépendances `crm` + `sale`, installation, commande de test du scénario A de [quickstart.md](./quickstart.md))

**Point de contrôle** : `pnpm test` vert, `npx tsc --noEmit` exploitable, référence d'erreurs enregistrée.

---

## Phase 2 : Fondations (prérequis bloquants)

**Objectif** : le type d'activité et le compte dédié existent dans un Odoo 17 local ; le backend a sa configuration, ses types partagés et le renommage `skipOdooWrite`.

**⚠️ CRITIQUE** : aucune user story ne commence avant la fin de cette phase.

### Module Odoo : données livrées

- [X] T007 Créer `<module>/data/mail_activity_type_data.xml` (`<data noupdate="1">`) : enregistrement `mail_activity_type_suggestion_commande` de `mail.activity.type` avec `name` « Suggestion commande », `res_model` `crm.lead`, `keep_done` True, `category` `default`, `chaining_type` `suggest`, `delay_count` 0, `icon` `fa-shopping-cart`, `sequence` 100 (research R3, data-model 1.1)
- [X] T008 [P] Créer `<module>/data/res_users_data.xml` (`<data noupdate="1">`) : enregistrement `user_suggestions_automatiques` de `res.users` avec `name` « Suggestions automatiques », `login` `suggestions.auto`, sans mot de passe, `groups_id` = `[(4, ref('sales_team.group_sale_salesman_all_leads'))]` (research R18)
- [X] T009 Créer `<module>/hooks.py` avec `post_init_hook(env)` (signature Odoo 17) qui rattache `user_suggestions_automatiques` à toutes les sociétés existantes (`company_ids = [(6, 0, env['res.company'].search([]).ids)]`) (dépend de T008)
- [X] T010 [P] Créer `<module>/tests/common.py` : classe `SuggestionCommandeCase(TransactionCase)` dont `setUpClass` crée la société A (analysée) et la société B, une équipe commerciale, un vendeur (`res.users` du groupe `sales_team.group_sale_salesman`, sociétés A et B), une société cliente et un contact enfant, un produit vendable, une opportunité ouverte en A et une en B pour le client, et récupère le type via `env.ref('moutarderie_suggestion_commande.mail_activity_type_suggestion_commande')` ; helpers `_schedule(lead, user=None)` (crée l'activité comme le backend : `mail.activity.create` avec `res_model_id = env['ir.model']._get_id('crm.lead')`, `res_id`, `activity_type_id`, `summary`, `date_deadline` aujourd'hui, `user_id`) et `_create_quote(partner, company)` (crée un `sale.order` brouillon avec une ligne) ([contracts/odoo-module.md](./contracts/odoo-module.md), Tests attendus)
- [X] T011 Créer `<module>/tests/test_user.py` (données installées) avec `test_type_installed` (type présent, `res_model = crm.lead`, `keep_done = True`) et `test_user_created` (compte `suggestions.auto` présent, utilisateur interne, groupe `sales_team.group_sale_salesman_all_leads`, rattaché à toutes les sociétés), et l'importer dans `<module>/tests/__init__.py` (dépend de T010)
- [X] T012 Lancer le scénario A de [quickstart.md](./quickstart.md) (`cd odoo && docker compose up -d db` puis `docker compose run --rm odoo odoo -c /etc/odoo/odoo.conf -d test_suggestion -i moutarderie_suggestion_commande --test-enable --test-tags /moutarderie_suggestion_commande --stop-after-init`) : le module s'installe, `test_type_installed` et `test_user_created` passent (dépend de T005 à T011)

### Odoo local : jeu de données et clé API

- [X] T013 Créer `odoo/dev/seed_local.py` (Python stdlib `xmlrpc.client`, arguments `--url`, `--db`, `--user admin`, `--password admin`) qui refuse de tourner si le client témoin existe déjà, puis crée : sociétés A et B ; une équipe commerciale ; un vendeur actif et un vendeur archivé ; l'étiquette partenaire « Exclude-Auto-Proposal » ; 3 à 5 produits avec unité de vente ; et un client société (`customer_rank` 1) par scénario, chacun avec son historique : (a) deux opportunités ouvertes « mars » puis « juin » créées dans cet ordre (le tri `create_date asc, id asc` choisit « mars »), (b) seulement une opportunité gagnée et une perdue, (c) sans vendeur, (d) vendeur archivé, (e) étiquette d'exclusion, (f) activité « Suggestion commande » ouverte, (g) activité passée en fait il y a 10 jours, (h) activité passée en fait il y a 25 jours, (i) aucune commande (aucun produit suggéré), (j) seulement une piste (`type = lead`), (k) seulement une opportunité en société B, (l) opportunité ouverte portée par un contact du client. Historique : commandes en société A tous les 25 à 30 jours sur environ 9 mois, dernière il y a environ 45 jours, confirmées par `action_confirm` puis `date_order` réécrite à la date passée (`action_confirm` la remet à maintenant) ; créations en société B avec le contexte `allowed_company_ids`. Relances antidatées de (g) et (h) : `mail.activity.create`, puis `action_feedback`, puis réécriture de `date` sur le `mail.message` qui porte `mail_activity_type_id`. Le script affiche l'id de la société A, l'id de l'étiquette, l'id du type d'activité et, pour chaque client, le résultat attendu (research R14, quickstart scénario C) (dépend de T007)
- [X] T014 [P] Documenter dans `<module>/README.md` la génération de la clé API du compte `suggestions.auto`, une fois par base, jamais versionnée : en local, `docker compose run --rm odoo odoo shell -c /etc/odoo/odoo.conf -d moutarderie_local`, puis `env['res.users.apikeys'].with_user(env.ref('moutarderie_suggestion_commande.user_suggestions_automatiques'))._generate(None, 'auto-proposal backend')` et `env.cr.commit()` ; sur Odoo.sh, même commande dans le shell de la branche. Ajouter le relevé en lecture seule de l'id du type par `ir.model.data` (contrat module) (research R18)

### Backend : configuration, types, renommage

- [X] T015 [P] Modifier `backend/src/config/auto-proposal.ts` : ajouter `inactivityDetection.autoProposalOrderTagId: 82` et le bloc `activity` de [data-model.md](./data-model.md) §2.1 (`suggestionActivityTypeId: Number(process.env.ODOO_SUGGESTION_ACTIVITY_TYPE_ID) || 0` où `0` veut dire valeur prod non encore relevée, ce qui fait échouer la vérification V1 ; `followUpDelayDays: 21` ; `summaryPrefix` et `leadNamePrefix` « Suggestion commande » ; `introUsual` et `introOptional` avec les phrases de la spec) ; remplacer `autoProposalConfig.quoteGeneration.autoProposalTagId` par `autoProposalConfig.inactivityDetection.autoProposalOrderTagId` dans `backend/src/trigger/orchestrator.task.ts` et `backend/src/routes/test.ts`. Garder `quoteGeneration` pour l'instant : il est retiré en T034 (research R8, R12)
- [X] T016 [P] Ajouter `getRunDateParis(now: Date = new Date()): string` (renvoie `YYYY-MM-DD` en Europe/Paris via `Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris" })`) dans `backend/src/utils/date.utils.ts`, avec le test `backend/src/utils/date.utils.test.ts` (`2026-10-01T22:30:00Z` → `2026-10-02` ; `2026-10-02T05:00:00Z` → `2026-10-02`) (research R6, H3)
- [X] T017 [P] Créer `backend/src/features/suggestion-activity/suggestion-activity.types.ts` : `SkipReason`, `SkipDetail`, `SKIP_LABELS` (libellés exacts de FR-016, date au format `JJ/MM/AAAA` pour `recent_follow_up`), `formatErrorLabel(message)` (« erreur (message) »), `SalespersonInfo`, `PartnerContext`, `EligibilityDecision` et `SuggestionActivityOutcome`, conformes à [data-model.md](./data-model.md) §2.3 et §2.5
- [X] T018 Renommer `skipOdooQuoteGeneration` en `skipOdooWrite` (défaut `true`, sans compatibilité ascendante) dans `backend/src/shared/types/orchestrator.types.ts`, `backend/src/shared/types/client.types.ts`, `backend/src/reports/types.ts`, `backend/src/reports/client-report-json.ts`, `backend/src/trigger/orchestrator.task.ts`, `backend/src/trigger/client-proposal.task.ts`, `backend/src/trigger/orchestrator-scheduled.task.ts` (`false`), `backend/src/trigger/backtest-client.task.ts` (`true`), `backend/src/routes/client-task.ts` et `backend/src/routes/orchestrator-task.ts` (commentaires) ; ajouter à `ClientProcessingConfig` les champs `eligibilityCheck?: boolean` (défaut `true`) et `runDate?: string` (`YYYY-MM-DD`, défaut `getRunDateParis()`), avec leur commentaire JSDoc ; vérifier `grep -rn skipOdooQuoteGeneration backend/src` vide ([contracts/trigger-payloads.md](./contracts/trigger-payloads.md), Renommage) (dépend de T015)

**Point de contrôle** : module installé avec 2 tests verts ; seed prêt ; `pnpm test` vert ; aucune erreur TypeScript nouvelle. Le pipeline crée encore des devis à ce stade (transition décidée le 30/09/2026).

---

## Phase 3 : User Story 1 — Recevoir une activité de relance au lieu d'un devis (Priorité : P1) 🎯 MVP (avec US4)

**Objectif** : un lancement ne crée plus de devis. Pour chaque client inactif avec produits suggérés et vendeur actif, il crée une activité « Suggestion commande <client> » sur la plus ancienne opportunité ouverte, ou sur une opportunité créée si le client n'en a pas.

**Test indépendant** : sur l'Odoo local alimenté par T013, un lancement réel crée une activité par client éligible, sur la bonne opportunité et au bon vendeur, et aucun `sale.order`.

### Tests US1 (à écrire d'abord, doivent échouer)

- [X] T019 [P] [US1] Créer `backend/src/features/suggestion-activity/eligibility.utils.test.ts` : `decideEligibility` renvoie `no_salesperson` sans vendeur, `inactive_salesperson` si `salesperson.active === false`, `{ eligible: true }` sinon ; `no_salesperson` passe avant `inactive_salesperson`
- [X] T020 [P] [US1] Créer `backend/src/infrastructure/odoo/clients/odoo-domains.test.ts` : `buildOldestOpenLeadDomain(cp, 3)` contient `["partner_id.commercial_partner_id","=",cp]`, `["type","=","opportunity"]`, `["active","=",true]`, `["stage_id.is_won","=",false]` et `["company_id","=",3]`, sans `["company_id","=",false]` (contrat Q5)
- [X] T021 [P] [US1] Créer `backend/src/infrastructure/odoo/clients/xmlrpc-client.suggestion.test.ts` sur le modèle de `company-filtering.test.ts` (mock de `odoo-xmlrpc-ts`) : `getPartnerSalesContext` gère `user_id = false` et `user_id = [7, "Marie"]`, et lit l'utilisateur par `read` (pas `search`) ; `getSalesContexts` fait exactement 2 appels pour 3 clients ; `createLead` transmet `company_id` ; `getCrmLeadModelId` n'interroge `ir.model` qu'une fois sur deux appels ; `getActivityType` renvoie `null` pour un id absent
- [X] T022 [P] [US1] Créer `backend/src/features/suggestion-activity/prefilter.service.test.ts` (client Odoo factice) : pour 3 et pour 300 clients, `buildPartnerContexts` fait le même nombre de lectures (P1 + P2) ; client sans vendeur → écarté `no_salesperson` ; vendeur archivé → `inactive_salesperson` ; `selectClientsToTrigger` ne renvoie à déclencher que les éligibles et produit pour les autres un `outcome` `skipped` avec leur libellé
- [X] T023 [P] [US1] Créer `backend/src/features/suggestion-activity/process-client.service.test.ts` (dépendances injectées, aucune IA) : (1) aucun produit → `skipped` `no_products`, aucune lecture Odoo ; (2) mode réel avec opportunité ouverte → un seul `createActivity` avec `res_model_id` en cache, `res_id` = opportunité, `activity_type_id`, `summary` « Suggestion commande <client> », `date_deadline` = `runDate`, `user_id` = vendeur → `created` avec `leadCreated: false` ; (3) sans opportunité ouverte → `createLead` (`name`, `type: "opportunity"`, `partner_id`, `user_id`, `team_id` = équipe du client, sinon équipe du vendeur, sinon `false`, `company_id`) puis activité → `leadCreated: true` ; (4) `skipOdooWrite: true` → aucun appel `create*`, `would_create` avec `leadCreated` = aucune opportunité ouverte ; (5) `createActivity` échoue après `createLead` → `error` avec `leadCreatedId` ; (6) `createLead` échoue → `error` sans `leadCreatedId` ; (7) vendeur retiré entre le pré-filtre et l'écriture → `skipped` `no_salesperson`, aucune écriture ; (8) `eligibilityCheck: false` → pas de décision d'éligibilité et aucune écriture même avec `skipOdooWrite: false` ; (9) relance après un premier essai qui a créé l'opportunité → l'opportunité trouvée par Q5 est réutilisée, pas de second `createLead`

### Implémentation US1

- [X] T024 [US1] Ajouter à `backend/src/infrastructure/odoo/clients/odoo-domains.ts` `buildCompanyDomain(companyId)` (`[["company_id","=",companyId]]`, sans exception pour les opportunités sans société) et `buildOldestOpenLeadDomain(commercialPartnerId, companyId)` (contrat Q5)
- [X] T025 [US1] Modifier `backend/src/infrastructure/odoo/clients/odoo-client.types.ts` : ajouter les types `ActivityTypeInfo`, `PartnerSalesContext` (id, nom, `commercialPartnerId`, `isCompany`, `partnerTeamId?`, `salesperson?` avec id, nom, `active`, `teamId?`), `LeadSummary`, `LeadCreateValues`, `ActivityCreateValues`, et les méthodes `getActivityType(typeId)` (V1), `getPartnerSalesContext(partnerId)` (Q1 + Q1b), `getSalesContexts(partnerIds)` (P1 + P2, renvoie une `Map`), `findOldestOpenLead(commercialPartnerId, companyId)` (Q5), `getCrmLeadModelId()` (Q7), `createLead(values)` (Q8), `createActivity(values)` (Q9) ; retirer `createSaleOrder`, `createSaleOrderLine`, `createSaleOrderOption`, `sendQuoteByEmail`, `getPartnerCompanyInfo`, `PartnerCompanyInfo` et `EmailSendResult` s'il n'est plus utilisé ([contracts/odoo-api-calls.md](./contracts/odoo-api-calls.md))
- [X] T026 [US1] Implémenter les méthodes de T025 dans `backend/src/infrastructure/odoo/clients/xmlrpc-client.ts` (`read` par `odoo.execute(model, "read", [ids, fields])` ; many2one `[id, nom]` ou `false` convertis ; id `ir.model` de `crm.lead` mis en cache dans la closure ; `getActivityType` renvoie `null` si l'enregistrement n'existe pas) et supprimer les méthodes retirées ; `json2-client.ts` n'est pas modifié (hors périmètre, research R12) (dépend de T024, T025)
- [X] T027 [P] [US1] Créer `backend/src/features/suggestion-activity/eligibility.utils.ts` avec `decideEligibility(ctx, runDate, delayDays)`, qui applique pour l'instant `no_salesperson` puis `inactive_salesperson` ; c'est la seule implémentation de la règle, complétée par US4 en T049 (data-model §2.3) (dépend de T017)
- [X] T028 [US1] Créer `backend/src/features/suggestion-activity/suggestion-activity.service.ts` : `resolveTeamId(ctx)` (équipe du client, sinon celle du vendeur, sinon `false`), `buildLeadValues(ctx, companyId)`, `buildActivityValues({ leadId, typeId, clientName, note, runDate, salespersonId, resModelId })` et `writeSuggestion(odoo, …)`, qui crée l'opportunité si besoin (Q8) puis l'activité (Q9) et renvoie `created` ou `error`, avec `leadCreatedId` si l'opportunité a été créée sans son activité (contrat, Écritures et Séquence) (dépend de T025)
- [X] T029 [US1] Créer `backend/src/features/suggestion-activity/process-client.service.ts` : `processClientSuggestion(input, deps)` (entrée : `clientId`, `clientName`, `products: ProductWithCurrentPrice[]`, `companyId`, `runDate`, `skipOdooWrite`, `eligibilityCheck`, `activityTypeId` ; dépendances : sous-ensemble d'`OdooClient`). Séquence : aucun produit → `skipped no_products` ; si `eligibilityCheck`, relire Q1 + Q1b, puis `decideEligibility` et écarter si besoin ; Q5 ; si `skipOdooWrite` ou `eligibilityCheck === false`, renvoyer `would_create` ; sinon `writeSuggestion`. `note` reste une chaîne vide à ce stade (renseignée par US2 en T057). Les erreurs de lecture remontent (relance Trigger.dev) (dépend de T027, T028)
- [X] T030 [US1] Créer `backend/src/features/suggestion-activity/prefilter.service.ts` : `buildPartnerContexts(clientIds, companyId, typeId, runDate, odoo)` (P1 + P2 via `getSalesContexts`), `prefilterEligibility(contexts, runDate, delayDays)` et `selectClientsToTrigger(inactiveClients, prefilterResult)`, qui renvoie `{ toTrigger, skippedOutcomes }` (data-model §2.3) (dépend de T026, T027)
- [X] T031 [US1] Modifier `backend/src/reports/types.ts` : retirer l'import `QuoteCreationResult`, `phases.quote`, `quoteName`, `quoteId`, `quoteMarkdown` de `ClientProposalResult` et les champs `quote*` de `ClientReportData`, `GlobalReportData`, `ClientTableRow` ; ajouter `outcome?: SuggestionActivityOutcome` à `ClientProposalResult`, toujours renseigné par l'orchestrateur ; remplacer `quotesGenerated` par `activitiesCreated` dans `GlobalWorkflowStatistics` ; `phaseTiming.quoteGeneration` devient `activity` ; la phase `"quote-generation"` de `ClientError` devient `"activity"` (data-model §2.5)
- [X] T032 [US1] Retirer les usages du devis dans `backend/src/reports/data-preparation.ts`, `backend/src/reports/client-report-json.ts`, `backend/src/reports/client-report-md.ts`, `backend/src/reports/client-report.ts` (sections devis et `generateQuoteReport`, inutilisé), `backend/src/reports/global-report.ts` (colonne « ODOO excl. tax ») et `backend/src/reports/statistics.ts` (`activitiesCreated` = nombre d'`outcome.kind === "created"`) ; la phase 3 « ACTIVITÉ » du rapport client est complétée par US5 en T067 (dépend de T031)
- [X] T033 [US1] Modifier `backend/src/trigger/client-proposal.task.ts` : supprimer l'import et l'appel de `generateQuote` ; après `prepareProposal`, appeler `processClientSuggestion` avec `proposalFinal.products`, `runDate` (payload, sinon `getRunDateParis()`), `eligibilityCheck` (défaut `true`), `skipOdooWrite` et `activityTypeId = autoProposalConfig.activity.suggestionActivityTypeId` ; ranger le résultat dans `result.outcome` et `summary.outcome` ; retirer `quoteName` et `quoteId` du `summary` ; mettre à jour le JSDoc (phase 3 = activité) ([contracts/trigger-payloads.md](./contracts/trigger-payloads.md), `client-proposal`) (dépend de T029, T031)
- [X] T034 [US1] Supprimer `backend/src/features/proposal-generation/` (service, types, README) et le bloc `quoteGeneration` de `backend/src/config/auto-proposal.ts` ; retirer la ligne `proposal-generation` de `backend/src/features/README.md` et y ajouter `suggestion-activity` ; vérifier que `grep -rn "proposal-generation\|generateQuote\|quoteGeneration" backend/src` est vide (FR-001, research R12) (dépend de T032, T033)
- [X] T035 [US1] Modifier `backend/src/trigger/orchestrator.task.ts` : créer le client Odoo (`createOdooClient(autoProposalConfig.odooApiType)`) ; avant la détection, V1 : `getActivityType(typeId)` et échec explicite du lancement si l'id est absent, si `name` n'est pas « Suggestion commande » ou si `res_model` n'est pas `crm.lead` ; calculer `runDate = getRunDateParis()` ; après la détection et `maxClientsToAnalyze`, lancer `buildPartnerContexts`, `prefilterEligibility` et `selectClientsToTrigger` ; les écartés deviennent des `ClientProposalResult` (`success: true`, `phases: {}`, `outcome` `skipped`) ; `batchTriggerAndWait` ne reçoit que les éligibles (lots de 500, index des runs pris sur la liste des éligibles) avec `skipOdooWrite`, `companyId`, `runDate` et `eligibilityCheck: true` ; un run en échec donne `outcome` `error` avec le message ; ajouter `outcomes: Array<{ clientId, clientName, outcome }>` au résultat ; remplacer `quotesGenerated` par `activitiesCreated` dans les statistiques et les journaux (contrats odoo-api-calls, Séquence, et trigger-payloads) (dépend de T030, T033)
- [X] T036 [P] [US1] Modifier `backend/src/trigger/orchestrator-scheduled.task.ts` : journal « Activités créées » à partir de `statistics.activitiesCreated` à la place de `quotesGenerated`, JSDoc mis à jour (plus de devis) (dépend de T035)
- [X] T037 [P] [US1] Modifier `backend/src/trigger/backtest-client.task.ts` : appeler `clientProposalTask.triggerAndWait` avec `skipOdooWrite: true, eligibilityCheck: false` (research R13)
- [X] T038 [P] [US1] Modifier `backend/src/routes/client-task.ts` : transmettre `skipOdooWrite` (défaut `true`), `eligibilityCheck`, `companyId` et `runDate` du corps vers le payload, et mettre à jour le JSDoc ([contracts/trigger-payloads.md](./contracts/trigger-payloads.md), Routes HTTP)
- [X] T039 [US1] Valider US1 : `pnpm test` vert (T019 à T023) ; aucune erreur TypeScript nouvelle par rapport à `tsc-baseline.txt` ; puis quickstart scénario C, étapes 1 à 3 : `.env` local avec le compte `suggestions.auto` et sa clé (T014), lancement en mode test puis en mode réel, avec `companyId` et `excludedPartnerTagId` affichés par le seed. Vérifier dans Odoo les scénarios d'acceptation 1 à 6 de US1 : activité sur l'opportunité « mars », opportunité créée pour les clients (b), (j) et (k), client (c) écarté « pas de vendeur », client (d) « vendeur inactif », client (e) absent, client (i) « aucun produit suggéré », client (l) activité posée sur l'opportunité portée par son contact. Le nombre de `sale.order` est le même avant et après le lancement.

**Point de contrôle** : US1 fonctionne seule. Ne pas mettre en service sans US4 : chaque vendredi créerait une nouvelle activité par client.

---

## Phase 4 : User Story 4 — Jamais de doublon, et un délai après chaque relance (Priorité : P1)

**Objectif** : aucun client n'a deux activités ouvertes, et aucun n'est relancé moins de 21 jours après le passage en fait ou la disparition de la précédente.

**Test indépendant** : sur l'Odoo local, deux lancements réels de suite (le second ne crée rien), puis des activités passées en fait à différentes dates (seed (g) et (h)) et une opportunité marquée perdue : vérifier qui est relancé.

### Module Odoo : trace de disparition (FR-014)

- [X] T040 [P] [US4] Créer `<module>/tests/test_trace.py` (hérite de `SuggestionCommandeCase`) avec `test_manual_unlink_posts_trace`, `test_lost_lead_posts_trace`, `test_done_then_lost_no_double_trace` et `test_other_activity_type_no_trace`, conformes au tableau du contrat, et l'importer dans `<module>/tests/__init__.py`
- [X] T041 [US4] Créer `<module>/models/mail_activity.py` (`_inherit = "mail.activity"`, surcharge de `unlink`) conforme au contrat, Comportement 2 : ne traiter que les activités du type encore `active` ; un seul message par (`res_model`, `res_id`), posté avant `super().unlink()` sur l'enregistrement relu en `sudo().with_context(active_test=False)` s'il existe ; `message_type="notification"`, `subtype_xmlid="mail.mt_activities"`, `mail_activity_type_id=type.id`, `author_id=env.user.partner_id.id` ; corps `Markup` avec la date du jour au format `JJ/MM/AAAA` (`fields.Date.context_today`) ; si le type est introuvable (`env.ref(..., raise_if_not_found=False)`), ne rien faire. L'importer dans `<module>/models/__init__.py` (research R4)
- [X] T042 [US4] Relancer le scénario A : les 4 tests de `test_trace.py` passent, en plus de ceux de T012 (dépend de T040, T041)

### Tests backend US4 (à écrire d'abord)

- [X] T043 [P] [US4] Compléter `<sa>/eligibility.utils.test.ts` : activité ouverte (même en retard, même assignée à un autre utilisateur) → `open_activity` ; relance le `2026-10-02 08:00:00` → lancement du `2026-10-16` écarté avec le libellé « relancé il y a moins de 3 semaines (02/10/2026) », lancement du `2026-10-23` éligible ; `isWithinFollowUpDelay` bloque à 20 jours et laisse passer à 21 ; `followUpWindowStart("2026-10-23", 21)` = `"2026-10-02 00:00:00"` ; ordre des contrôles : sans vendeur + activité ouverte → `no_salesperson`
- [X] T044 [P] [US4] Compléter `backend/src/infrastructure/odoo/clients/odoo-domains.test.ts` : `buildPartnerLeadsDomain` (P3 en `in`, Q2 en `=`) contient `type = opportunity` et `company_id = companyId` (sans « ou vide ») ; `buildOpenSuggestionActivitiesDomain` contient `activity_type_id`, `res_model = crm.lead`, `res_id in` et `active = true` ; `buildSuggestionTracesDomain` contient `mail_activity_type_id`, `model = crm.lead`, `res_id in` et `date >= since`
- [X] T045 [P] [US4] Compléter `<sa>/prefilter.service.test.ts` : pour 3 et pour 300 clients, P1 à P5 font le même nombre de lectures (6 au plus) ; une opportunité portée par un contact est rattachée au bon client par P3b ; activité (P4) et trace la plus récente (P5, maximum calculé en code) rattachées au bon client ; sans opportunité, P4 et P5 ne sont pas émises ; seuls les clients sans raison d'écart sont dans `eligible`
- [X] T046 [P] [US4] Compléter `<sa>/process-client.service.test.ts` : activité apparue entre le pré-filtre et l'écriture → `skipped open_activity`, aucune écriture ; trace de moins de 21 jours → `skipped recent_follow_up` avec la date ; relance de tâche après création de l'activité → `skipped open_activity`, sans doublon (SC-004)

### Implémentation backend US4

- [X] T047 [US4] Ajouter à `backend/src/infrastructure/odoo/clients/odoo-domains.ts` `buildPartnerLeadsDomain(commercialPartnerIds: number | number[], companyId)` (P3/Q2), `buildOpenSuggestionActivitiesDomain(leadIds, typeId)` (P4/Q3) et `buildSuggestionTracesDomain(leadIds, typeId, since)` (P5/Q4) ([contracts/odoo-api-calls.md](./contracts/odoo-api-calls.md))
- [X] T048 [US4] Ajouter à `backend/src/infrastructure/odoo/clients/odoo-client.types.ts` et implémenter dans `backend/src/infrastructure/odoo/clients/xmlrpc-client.ts` : `getPartnerLeadIds` (Q2), `findOpenSuggestionActivity` (Q3, `order: "date_deadline asc"`, `limit: 1`), `findLastSuggestionTrace` (Q4, `order: "date desc"`, `limit: 1`), `getLeadIdsByCommercialPartners` (P3 + P3b, renvoie `Map<commercialPartnerId, leadIds>`), `findOpenSuggestionActivities` (P4) et `findSuggestionTracesSince` (P5). Q2 et P3 passent `context: { active_test: false }` : vérifier au premier appel local que les opportunités archivées reviennent ; sinon passer par `execute(model, "search_read", [domain], { fields, context })`. Aucune requête si `leadIds` est vide. Pas de découpage des listes `in` : quelques milliers d'ids restent un petit message XML-RPC (dépend de T047)
- [X] T049 [US4] Compléter `<sa>/eligibility.utils.ts` : `isWithinFollowUpDelay(lastDate, runDate, delayDays)` (`differenceInCalendarDays` de `date-fns` sur la partie date `YYYY-MM-DD` de `lastDate`, bloqué si l'écart est inférieur à `delayDays`), `followUpWindowStart(runDate, delayDays)` et les contrôles `open_activity` puis `recent_follow_up` (avec `detail.date`) dans `decideEligibility`, après les contrôles vendeur (research R6, data-model §2.3)
- [X] T050 [US4] Compléter `buildPartnerContexts` dans `<sa>/prefilter.service.ts` avec P3 à P5 (`leadIds`, `openActivity`, `lastFollowUp` = trace la plus récente depuis `followUpWindowStart`) (dépend de T048, T049)
- [X] T051 [US4] Compléter la revérification de `<sa>/process-client.service.ts` : quand `eligibilityCheck` est actif, remplir `leadIds`, `openActivity` et `lastFollowUp` du contexte avec Q2 à Q4 avant `decideEligibility` (dépend de T048, T049)
- [X] T052 [US4] Valider US4 : `pnpm test` vert ; scénario C, étape 4 du quickstart : un second lancement réel crée 0 activité et 0 opportunité, et les clients déjà servis sont écartés « activité déjà ouverte » ; client (f) écarté « activité déjà ouverte » ; client (g) écarté avec la date ; client (h) reçoit une activité ; après avoir marqué perdue l'opportunité d'un client servi, l'activité disparaît, le message « supprimée sans être passée en fait » est daté du jour, et le lancement suivant écarte ce client avec la date du jour

**Point de contrôle** : US1 + US4 forment le MVP livrable (plus de devis, pas de doublon).

---

## Phase 5 : User Story 2 — Lire dans l'activité ce qu'il faut proposer (Priorité : P2)

**Objectif** : la description de l'activité donne la date de dernière commande, puis les produits habituels et optionnels (quantité, unité, date de dernière commande).

**Test indépendant** : ouvrir une activité créée en local et comparer la date de dernière commande et chaque produit avec l'historique du client dans le seed.

- [X] T053 [P] [US2] Créer `<sa>/activity-note.utils.test.ts` : la note commence par `<p>Dernière commande : 12/08/2026</p>` ; 3 habituels puis 1 optionnel, chaque liste précédée de sa phrase (`introUsual`, `introOptional`) ; ligne produit « Produit — 24 TU6 — dernière commande : 03/07/2026 » ; sans optionnel, ni phrase ni liste optionnelle, et de même sans habituel ; `lastOrderDate: null` → « Dernière commande : aucune commande confirmée » ; `splitProducts` classe en optionnel si `calculation_metadata.confidence === "low"`, en habituel sinon (ancienne règle de `generateQuote`) ; date d'un produit = plus grande `order_history[].date_order` ; quantité entière ; noms de produits échappés en HTML (`&`, `<`)
- [X] T054 [P] [US2] Compléter `backend/src/infrastructure/odoo/clients/odoo-domains.test.ts` : `buildLastConfirmedOrderDomain(partnerId, companyId)` contient `partner_id = partnerId`, `state in ["sale","done"]` et `company_id = companyId` (contrat Q6)
- [X] T055 [US2] Créer `<sa>/activity-note.utils.ts` : types `ActivityNoteInput` et `NoteProduct`, `splitProducts(products)` (nom, `quantity_to_order` arrondi, unité `product_uom[1]`, date de dernière commande) et `buildActivityNote(input, { introUsual, introOptional })`, qui produit le HTML décrit en research R10 (data-model §2.4) (dépend de T017)
- [X] T056 [US2] Ajouter `buildLastConfirmedOrderDomain` à `backend/src/infrastructure/odoo/clients/odoo-domains.ts`, et `findLastConfirmedOrderDate(partnerId, companyId): Promise<string | null>` (Q6, `order: "date_order desc"`, `limit: 1`, renvoie `YYYY-MM-DD`) à `odoo-client.types.ts` et `xmlrpc-client.ts`
- [X] T057 [US2] Dans `<sa>/process-client.service.ts`, lire Q6 après Q5 (en mode test aussi), construire la note avec `splitProducts` et `buildActivityNote` (phrases lues dans `autoProposalConfig.activity`) et la passer à `createActivity` ; renvoyer la note avec le résultat et la ranger dans un nouveau champ `activityNote?: string` de `ClientProposalResult` (`backend/src/reports/types.ts`), renseigné par `backend/src/trigger/client-proposal.task.ts` ; compléter `<sa>/process-client.service.test.ts` : la `note` transmise commence par `<p>Dernière commande` (dépend de T055, T056)
- [X] T058 [US2] Valider US2 : `pnpm test` vert ; en local, supprimer les activités créées ou repartir d'une base re-seedée, relancer en mode réel et relire 3 descriptions contre l'historique du seed : date de dernière commande, listes non vides avec leur phrase, quantité, unité et date par produit (SC-007 en local)

---

## Phase 6 : User Story 3 — L'activité se ferme toute seule quand un devis est fait (Priorité : P2)

**Objectif** : la création d'un devis dans la même société pour le client ou l'un de ses contacts passe l'activité ouverte en fait, avec une trace qui cite le devis.

**Test indépendant** : dans Odoo, créer un devis pour un client qui a une activité ouverte et constater qu'elle passe en fait sans autre action.

- [X] T059 [P] [US3] Créer `<module>/tests/test_auto_close.py` (hérite de `SuggestionCommandeCase`) avec `test_quote_closes_activity_same_company`, `test_quote_for_contact_closes_activity`, `test_quote_created_by_superuser_closes_activity` (`with_user(SUPERUSER_ID)`, chemin des paniers e-shop), `test_quote_other_company_keeps_activity`, `test_lead_without_company_not_closed` (pas d'exception pour les opportunités sans société), `test_cancelled_or_deleted_quote_keeps_done` et `test_no_activity_no_write`, conformes au tableau du contrat, et l'importer dans `<module>/tests/__init__.py`
- [X] T060 [US3] Créer `<module>/models/sale_order.py` (`_inherit = "sale.order"`, surcharge de `create` avec `@api.model_create_multi`) conforme au contrat, Comportement 1 : après `super()`, pour chaque commande qui a un `partner_id`, chercher en `sudo().with_context(active_test=False)` les opportunités du même `commercial_partner_id` et de la même société que la commande (pas d'exception pour les opportunités sans société) ; puis leurs activités actives du type ; puis `action_feedback(feedback="Devis <nom> créé le <JJ/MM/AAAA> pour <display_name>")`. Si le type est introuvable, ne rien faire. Ne toucher ni à `unlink` ni à `action_cancel`. L'importer dans `<module>/models/__init__.py` (research R5, R19)
- [X] T061 [US3] Valider US3 : scénario A complet, 13 tests en `OK` et `0 failed, 0 error(s)` ; puis, dans l'Odoo local, créer un devis en société A pour un client avec activité ouverte (activité passée en fait, message « Devis S… créé … » sur l'opportunité) et un devis en société B pour un autre client (activité toujours ouverte) (dépend de T059, T060)

---

## Phase 7 : User Story 5 — Un compte rendu de chaque lancement (Priorité : P3)

**Objectif** : le compte rendu global donne le mode, les activités créées, les opportunités créées, les clients écartés avec leur raison, les erreurs, puis une section compacte « Aucun produit suggéré ».

**Test indépendant** : après un lancement local, comparer le compte rendu `backend/reports-output/global-report-<date>.md` avec ce qui a été créé dans Odoo.

### Tests US5 (à écrire d'abord)

- [X] T062 [P] [US5] Créer `backend/src/reports/statistics.test.ts` : avec des résultats mêlant `created`, `would_create`, `skipped` (dont des clients écartés par le pré-filtre, sans `phases`) et `error`, vérifier `activitiesCreated + wouldCreate + clientsSkipped + clientsFailed = clientsAnalyzed` (FR-017) ; `leadsCreated` compte les `created` avec `leadCreated: true` ; les clients écartés par le pré-filtre ne sont pas comptés dans `clientsWithoutOrderHistory`
- [X] T063 [P] [US5] Créer `backend/src/reports/global-report.test.ts` : ligne « **Mode :** TEST (aucune écriture Odoo) » ou « RÉEL » ; sections dans l'ordre « Activités créées (N) », « Opportunités créées (N) », « Clients écartés (N) » (sans les « aucun produit suggéré »), « Erreurs (N) », puis « Aucun produit suggéré (N) » en dernier, en liste simple sans tableau ; en mode test, le titre devient « Activités qui auraient été créées (N) » ; chaque client apparaît dans une seule de ces sections ; les exemples détaillés et le tableau des clients ne contiennent ni les clients écartés par le pré-filtre ni les « aucun produit suggéré » ; une erreur avec `leadCreatedId` remplit la colonne « Opportunité créée sans activité »

### Implémentation US5

- [X] T064 [US5] Compléter `GlobalWorkflowStatistics` dans `backend/src/reports/types.ts` avec `leadsCreated`, `wouldCreate`, `clientsSkipped` et `clientsFailed` (data-model §2.6)
- [X] T065 [US5] Réécrire le comptage de `backend/src/reports/statistics.ts` à partir des `outcome` : `activitiesCreated`, `leadsCreated`, `wouldCreate`, `clientsSkipped`, `clientsFailed` ; `clientsWithoutOrderHistory` ne compte que les résultats qui ont une `stockAnalysis` sans historique (dépend de T064)
- [X] T066 [US5] Modifier `backend/src/reports/global-report.ts` : ajouter à `GlobalReportData` `mode`, `created`, `leadsCreated`, `skipped`, `errors` et `noProducts` (data-model §2.6), et une fonction `buildGlobalReportLists(results)` qui les remplit à partir de tous les `ClientProposalResult`, y compris ceux écartés par le pré-filtre ; ordre du rapport : en-tête, statistiques (avec les nouveaux compteurs, sans division par zéro), « Mode », les 4 sections du contrat, les sections existantes (exemples détaillés, tableau des clients à risque), désormais limitées aux clients passés par l'IA avec au moins un produit suggéré (`created`, `would_create`, ou `skipped`/`error` après l'IA) pour ne pas relister les ~1 700 clients, puis « Aucun produit suggéré (N) » en dernier ; libellés en français ([contracts/trigger-payloads.md](./contracts/trigger-payloads.md), Compte rendu global) (dépend de T064)
- [X] T067 [US5] Remplacer la phase 3 du rapport client par « PHASE 3 - ACTIVITÉ » dans `backend/src/reports/client-report-json.ts`, `backend/src/reports/client-report-md.ts` et `backend/src/reports/data-preparation.ts` : `outcome` et son libellé, opportunité (id, nom, nouvelle ou existante), vendeur, échéance, description (`activityNote` HTML convertie en markdown simple, `<p>` en paragraphe et `<li>` en « - »), et `config.skipOdooWrite` dans les détails techniques (contrat, Rapport client)
- [X] T068 [US5] Modifier `backend/src/trigger/orchestrator.task.ts` : ajouter `mode: "test" | "real"` au résultat ; renvoyer les statistiques du contrat (`activitiesCreated`, `leadsCreated`, `wouldCreate`, `clientsSkipped`, `clientsFailed`) ; construire `GlobalReportData` avec `mode` et `buildGlobalReportLists(clientResults)` ; journal de fin : clients traités, activités créées, opportunités créées, clients écartés, erreurs (dépend de T065, T066)
- [X] T069 [P] [US5] Modifier `backend/src/trigger/orchestrator-scheduled.task.ts` : journal de fin avec activités créées, opportunités créées, clients écartés et erreurs (contrat, `orchestrator-daily-7am`) (dépend de T068)
- [X] T070 [US5] Valider US5 : `pnpm test` vert ; en local, lancement en mode test (titre « auraient été créées », rien d'écrit dans Odoo) puis en mode réel ; chaque client listé « activité créée » a exactement une activité ouverte dans Odoo, chaque écarté n'en a aucune, et les compteurs du rapport correspondent à Odoo (SC-003 en local)

---

## Phase 8 : Finitions, validation et mise en service

**Objectif** : documentation à jour, contrôles de qualité, validation sur staging (constitution II), puis mise en service (module avant backend).

### Documentation

- [X] T071 [P] Créer `docs/features/suggestion-activity.md` (règles d'éligibilité, description, écritures Odoo, module, mode test) et supprimer `docs/features/proposal-generation.md`
- [X] T072 [P] Mettre à jour `docs/tasks/orchestrator.md` et `docs/tasks/client-proposal.md` : `skipOdooWrite`, vérification V1, pré-filtre, `outcomes`, `eligibilityCheck`, `runDate`, nouvelles statistiques
- [X] T073 [P] Mettre à jour `docs/infrastructure/odoo.md` : nouvelles méthodes `OdooClient`, méthodes retirées, compte `suggestions.auto` et clé API, `ODOO_SUGGESTION_ACTIVITY_TYPE_ID`, module `moutarderie_suggestion_commande` et Odoo local Docker
- [X] T074 [P] Remplacer « devis » par « activité » là où il s'agit de la sortie du lancement, et corriger les liens vers `proposal-generation`, dans `README.md`, `docs/README.md`, `docs/ARCHITECTURE.md`, `docs/GETTING-STARTED.md`, `docs/features/backtesting.md`, `docs/features/proposal-preparation.md` et `backend/CLAUDE.md`
- [X] T075 [P] Créer `backend/src/features/suggestion-activity/README.md` et mettre à jour `backend/src/config/README.md` (bloc `activity`, `autoProposalOrderTagId`, plus de `quoteGeneration`), `backend/src/trigger/README.md` et `backend/src/reports/README.md`
- [X] T076 [P] Corriger `specs/001-activite-suggestion-commande/quickstart.md`, scénario A : « les 13 tests du contrat » au lieu de « 11 »

### Contrôles de qualité

- [X] T077 Vérifier qu'il ne reste aucun `skipOdooQuoteGeneration`, `generateQuote`, `quoteGeneration`, `quotesGenerated`, `createSaleOrder` ni `sendQuoteByEmail` dans `backend/src` (`grep -rn`) ; `json2-client.ts` est toléré s'il ne fait qu'hériter de l'interface
- [X] T078 Depuis `backend/`, relancer `npx tsc --noEmit 2>&1 | grep -oE '^src/[^(]+' | sort | uniq -c` et comparer à `specs/001-activite-suggestion-commande/tsc-baseline.txt` : aucun fichier créé ou modifié n'a d'erreur nouvelle ; corriger sinon
- [X] T079 Relancer tous les tests : `pnpm test` (scénario B) et scénario A (13 tests du module) ; vérifier `git diff main -- backend/src/features/stock-replenishment backend/src/features/client-inactivity backend/src/features/proposal-preparation` vide (FR-018, SC-005)
- [X] T080 Dérouler le scénario C complet du quickstart sur une base locale re-seedée, du mode test à l'idempotence et à la fermeture, et vérifier la notification « Suggestions automatiques » dans la messagerie Odoo du vendeur

### Validation staging et mise en service (constitution II ; nécessitent l'accès Odoo.sh et l'accord de l'utilisateur)

- [ ] T081 Scénario D du quickstart sur une branche staging Odoo.sh. Préalables : confirmer la liaison du dépôt ; si le dépôt relié à Odoo.sh n'est pas celui-ci, y livrer le module par sous-module git (à défaut par copie) en désignant une source unique ; installer le module sur la branche (research R16) ; relever l'id du type en lecture seule, générer la clé API `suggestions.auto`, vérifier l'impact de licence de ce compte (en cas de problème, appliquer le repli OdooBot de research R18 avant de continuer). Contrôles : mode test comparé à la version actuelle (SC-005), mode réel (SC-003, SC-007), second lancement (SC-004), devis créés depuis l'opportunité et depuis Ventes (SC-002), opportunité perdue, devis automatiques existants (étiquette 82) comptés avant et après le lancement réel, nombre et états inchangés (FR-020). Consigner le tout dans `specs/001-activite-suggestion-commande/validation-staging.md`
- [ ] T082 Mise en service du module (scénario E, étape 1), seulement après l'accord explicite de l'utilisateur et la validation par la cliente des deux phrases d'introduction des listes (spec, hypothèses ; modifiables dans `autoProposalConfig.activity`) : fusion sur la branche de production Odoo.sh, relevé en lecture seule de l'id du type en prod (`ir.model.data`), puis report de cette valeur dans `activity.suggestionActivityTypeId` de `backend/src/config/auto-proposal.ts` (dépend de T081)
- [ ] T083 Mise en service du backend (scénario E, étape 2), seulement après l'accord explicite de l'utilisateur : clé API `suggestions.auto` générée en prod, `ODOO_USERNAME`/`ODOO_PASSWORD` remplacés dans les variables prod de Trigger.dev, `pnpm test`, puis `npx trigger.dev deploy` depuis `backend/` (dépend de T082)
- [ ] T084 Suivi après mise en service (scénario E, étape 3) : 0 devis automatique sur les 4 premiers lancements (SC-001) ; sur 8 semaines, jamais deux activités ouvertes pour un client ni de relance à moins de 21 jours (SC-006), contrôlé à partir des comptes rendus et d'une lecture seule dans Odoo (dépend de T083)

---

## Corrections après review (30/09/2026)

- [X] T085 Équipe d'une opportunité créée : ne garder que l'équipe du client ou du vendeur qui est de FOODPRINT ou sans société, sinon aucune (`resolveTeamId`, `getTeamCompanies`). 304 clients ont une équipe d'une autre société ; Odoo refusait la création (« Incompatible companies on records », reproduit en local). Tests : `process-client.service.test.ts` (3c), `xmlrpc-client.suggestion.test.ts`
- [X] T086 Nouvelle raison d'écart `salesperson_no_company_access` (« vendeur sans accès à FOODPRINT ») : vendeur dont `company_ids` ne contient pas la société analysée (107 clients). Spec FR-006, FR-016 et Clarifications mises à jour. Tests : `eligibility.utils.test.ts`, `prefilter.service.test.ts`, `process-client.service.test.ts` (3d)
- [X] T087 Module : la fermeture à la création d'un devis est isolée (savepoint + journal), un échec ne bloque jamais le devis. Test `test_close_failure_does_not_block_quote` (14 tests du module)
- [X] T088 `vitest.config.ts` : exclure `.trigger/**` et `**/node_modules/**` (les builds de `trigger.dev dev` faisaient échouer `pnpm test`)

---

## Dépendances et ordre d'exécution

### Dépendances entre phases

- **Setup (phase 1)** : aucune dépendance.
- **Fondations (phase 2)** : dépend du setup ; bloque toutes les stories.
- **US1 (phase 3)** : dépend des fondations. Elle pose `eligibility.utils.ts`, `prefilter.service.ts`, `process-client.service.ts` et les méthodes de base du client Odoo.
- **US4 (phase 4)** : le module (T040 à T042) ne dépend que des fondations ; le backend (T043 à T052) complète les fichiers créés par US1 et passe donc après elle.
- **US2 (phase 5)** : `activity-note.utils.ts` (T053, T055) ne dépend que des fondations ; le branchement (T057) dépend de `process-client.service.ts` (US1).
- **US3 (phase 6)** : module seul, ne dépend que des fondations (T007, T010) ; peut avancer en parallèle de toutes les phases backend.
- **US5 (phase 7)** : dépend de US1 (`outcome` dans les résultats, orchestrateur) ; les tests T062 et T063 peuvent être écrits dès la fin de US1.
- **Finitions (phase 8)** : T071 à T080 après les stories voulues ; T081 à T084 dans l'ordre, chacune soumise à l'accord de l'utilisateur.

### Dépendances entre stories

```
Setup ─▶ Fondations ─┬─▶ US1 ─┬─▶ US4 (backend) ─┐
                     │        ├─▶ US2 (T057)     ├─▶ Finitions ─▶ Staging ─▶ Prod module ─▶ Prod backend ─▶ Suivi
                     │        └─▶ US5            │
                     ├─▶ US4 (module T040–T042) ─┤
                     └─▶ US3 (module) ───────────┘
```

### Fichiers partagés (travail séquentiel obligatoire)

- `backend/src/features/suggestion-activity/process-client.service.ts` : T029, puis T051, puis T057
- `backend/src/features/suggestion-activity/eligibility.utils.ts` : T027, puis T049
- `backend/src/features/suggestion-activity/prefilter.service.ts` : T030, puis T050
- `backend/src/infrastructure/odoo/clients/odoo-domains.ts` : T024, puis T047, puis T056
- `backend/src/infrastructure/odoo/clients/odoo-client.types.ts` et `xmlrpc-client.ts` : T025/T026, puis T048, puis T056
- `backend/src/trigger/orchestrator.task.ts` : T015, puis T018, puis T035, puis T068
- `backend/src/reports/types.ts` : T018, puis T031, puis T057, puis T064
- `<module>/tests/__init__.py` et `<module>/models/__init__.py` : un import ajouté par T011, T040, T041, T059 et T060

### Au sein de chaque story

- Tests écrits et en échec avant l'implémentation.
- Domaines, puis client Odoo, puis règles pures, puis service, puis tâches Trigger.dev.
- La tâche de validation de la story ferme la phase.

---

## Exemples de parallélisation

### Phase 2 (fondations)

```text
En parallèle : T008 (res_users_data.xml), T010 (tests/common.py), T014 (README clé API)
En parallèle : T015 (config), T016 (date Paris), T017 (types suggestion-activity)
```

### US1

```text
Tests en parallèle : T019 eligibility.utils.test.ts, T020 odoo-domains.test.ts, T021 xmlrpc-client.suggestion.test.ts,
                     T022 prefilter.service.test.ts, T023 process-client.service.test.ts
Puis en parallèle :  T027 eligibility.utils.ts  //  T024 → T025 → T026 (client Odoo)
Fin de phase :       T036 (scheduled), T037 (backtest), T038 (route) en parallèle après T035
```

### US4

```text
Module et backend en parallèle : T040 → T041 → T042  //  T043, T044, T045, T046 (tests backend)
```

### US2 et US3 pendant US1/US4

```text
Développeur A : US1 puis US4 (backend)
Développeur B : T053 + T055 (activity-note), puis T059 → T060 → T061 (module, fermeture)
```

### US5

```text
Tests en parallèle : T062 statistics.test.ts, T063 global-report.test.ts
```

### Finitions

```text
En parallèle : T071, T072, T073, T074, T075, T076 (documentation)
```

---

## Stratégie d'implémentation

### MVP (US1 + US4)

1. Phases 1 et 2 : outillage, module avec son type et son compte, seed, configuration et renommage.
2. Phase 3 (US1) : activité à la place du devis. Validation locale (T039).
3. Phase 4 (US4) : anti-doublon et trace de disparition. Validation locale (T052).
4. **STOP** : US1 + US4 constituent le minimum mis en service ; sans US4, chaque vendredi relancerait les mêmes clients.

### Livraison incrémentale

1. MVP (US1 + US4).
2. US2 : description exploitable (le rappel existe déjà sans elle).
3. US3 : fermeture automatique à la création d'un devis (module seul, livrable à tout moment après les fondations).
4. US5 : compte rendu enrichi.
5. Finitions, puis staging (T081), puis prod (T082 à T084) avec accord de l'utilisateur à chaque étape.

Rappel de transition (décision du 30/09/2026) : les lancements du vendredi continuent de créer des devis jusqu'à T083. Rien dans les phases 1 à 8 ne suspend le lancement planifié actuel.

---

## Notes

- Constat du 30/09/2026 sur ce worktree : le motif `*test*` et `scripts/` sont dans `backend/.gitignore`, pas dans le `.gitignore` racine. `odoo/addons/*/tests/` et `odoo/dev/` ne sont donc pas ignorés (`git check-ignore` vérifié), et l'exception `.gitignore` prévue par le plan n'est pas nécessaire. Les nouveaux `backend/src/**/*.test.ts` sont gardés par l'exception `!*.test.ts` existante.
- Le contrat du module liste 13 tests alors que le quickstart en annonce 11 ; T076 aligne le quickstart sur le contrat.
- `eligibilityCheck: false` (backtest) interdit toute écriture, même si `skipOdooWrite` vaut `false`. C'est un garde-fou ajouté dans T029 et testé en T023 (8).
- H1 est tranchée (30/09/2026) : pas d'exception pour les opportunités sans société, documenté par `test_lead_without_company_not_closed`. H2 n'a pas de tâche dédiée ; H3 est couverte par T016.
- Chaque tâche de validation (T039, T052, T058, T061, T070) se fait en local ; la validation sur copie de prod est T081.
- Pas de fusion sur `main` ni de déploiement Trigger.dev de ce code avant T083 : tant que `suggestionActivityTypeId` vaut 0, la vérification V1 arrête le lancement du vendredi, qui ne produirait plus ni devis ni activité.
- [X] T089 Module : fermeture aussi au changement de client d'un devis brouillon/envoyé (`sale.order.write`, paniers e-shop anonymes rattachés à la connexion) ; `flush_all()` avant le savepoint. Tests `test_partner_change_on_draft_closes_activity`, `test_partner_change_on_confirmed_order_keeps_activity` (review du 01/10/2026)
- [X] T090 Module : trace de disparition isolée (savepoint + journal), un échec ne bloque ni la suppression ni le passage en perdu. Test `test_trace_failure_does_not_block_lost`
- [X] T091 Backend : date de relance comptée et affichée en jour de Paris (`odooDatetimeToParisDate` dans `isWithinFollowUpDelay` et `SKIP_LABELS`). Tests `eligibility.utils.test.ts`
- [X] T092 Backend : ni l'orchestrateur ni la tâche planifiée ne se relancent (`maxAttempts: 1` sur les deux : une relance de la tâche planifiée créerait un nouveau run de l'orchestrateur) ; une relance rejouerait l'IA et fausserait le compte rendu. Module : le message de fermeture cite la date de création du devis, pas celle du jour
- [X] T093 Backend : le lancement planifié n'écrit dans Odoo que depuis l'environnement Trigger.dev `PRODUCTION` (`scheduled-mode.ts`, `ctx.environment.type`) ; un `trigger.dev dev` ou un déploiement staging reste en mode test. Test `scheduled-mode.test.ts`. Quickstart D : comparaison SC-005 avec le même compte Odoo (review isolée du 01/10/2026)
- [X] T094 Qualité (`/simplify` + review structure/nommage du 01/10/2026) : lectures Odoo indépendantes en parallèle (P4/P5, Q5/Q6), P3b ne relit que les contacts, helpers partagés (`toPartnerContext`, `errorMessage`, `isOptionalProduct`), libellés et nom d'opportunité lus dans la config, code mort supprimé (`client-report.ts`, types inutilisés) ; suffixes de fichiers du dépôt (`*.utils.ts`, `*.service.ts`), `outcome.utils.ts` séparé du fichier de types, `findLastConfirmedOrderDate` / `getLeadIdsByCommercialPartners`, `resModel`, `weeklyOrchestratorSchedule`, commentaires de code en anglais ; module : `const.py`, `test_installed_data.py`, manifeste complété
