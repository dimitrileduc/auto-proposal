# Research: Activité « Suggestion commande »

**Date**: 2026-09-30 | **Plan**: [plan.md](./plan.md)

Chaque point suit le format Décision / Justification / Alternatives. Les faits Odoo ont été vérifiés
dans le code source de la branche `17.0` du dépôt `odoo/odoo` le 30/09/2026 (fichiers cités). La prod
est en 17.0 Enterprise (vérifié le 30/09/2026) : le comportement community vérifié s'applique, les
modules Enterprise n'altèrent pas ces mécanismes.

## R1. Faits Odoo 17.0 sur les activités (base de toute la conception)

Vérifié dans `addons/mail/models/mail_activity_type.py`, `mail_activity.py`, `mail_activity_mixin.py`,
`mail_message.py` et `addons/crm/models/crm_lead.py` (branche 17.0) :

- `mail.activity.type` possède `keep_done` (Boolean), `res_model` (Selection, restreint le type à un
  modèle), `chaining_type` (défaut `suggest`), `category` (défaut `default`), `delay_count` (défaut 0).
- `mail.activity` possède `active` (défaut True), `date_done` (calculé, stocké), `state` incluant `done`,
  `res_model_id` (**obligatoire**, `ir.model`), `res_model` (related stocké), `res_id`, `user_id`
  (obligatoire), `summary`, `note` (HTML), `date_deadline` (obligatoire), `activity_type_id` dont le domaine
  impose `res_model` vide ou égal à celui du document.
- `mail.activity._action_done` : poste sur le document un message `mail.message_activity_done` avec
  `mail_activity_type_id = activity.activity_type_id.id` et `subtype_xmlid='mail.mt_activities'`, puis
  **archive** les activités dont le type a `keep_done` et **supprime** (`unlink`) les autres.
  `action_feedback(feedback=False, attachment_ids=None)` est le point d'entrée public.
- `mail.activity.mixin.write` (lignes 245-250) : si `active` passe à False, les activités **actives** du
  document sont supprimées par `unlink()` en `sudo`. La recherche n'utilise pas `active_test=False` : les
  activités archivées (déjà passées en fait avec `keep_done`) restent. `toggle_active` passe par ce `write`.
  Seul `unlink` du document (lignes 256-259) supprime aussi les activités archivées.
- `crm.lead.action_set_lost` appelle `action_archive()` → passe par le `write` ci-dessus → les activités
  de l'opportunité perdue sont supprimées. `crm.lead.toggle_active` met ensuite `probability` à 0.
- `crm.lead` n'a **pas** de champ `won_status` en 17.0. Gagnée ⇔ `stage_id.is_won` ; perdue ⇔ `active = False`.
  Ouverte ⇔ `active = True` et `stage_id.is_won = False`. `type` distingue `lead` et `opportunity`.
- `crm.lead.company_id` est calculé et stocké, peut être vide. `partner_id` a `check_company=True`.
- Étape par défaut d'une opportunité créée : `_compute_stage_id` → `_stage_find(domain=[('fold','=',False)])`,
  première étape non repliée de l'équipe (ou sans équipe), triée par `sequence, id`. Aucune étape à fixer
  côté backend : il suffit de renseigner `team_id`.
- `mail.message` possède `mail_activity_type_id` (Many2one indexé), `model`, `res_id`, `date` (datetime),
  `subtype_id`, `message_type`, `body`.

**Conséquences** : (a) une activité faite laisse une trace durable sous forme de `mail.message` sur
l'opportunité, même si l'activité archivée est ensuite supprimée par un archivage de l'opportunité ;
(b) une opportunité marquée perdue fait disparaître ses activités **ouvertes** sans message → c'est
exactement le cas FR-014 que le module doit tracer ; (c) le `mail.message` porte à la fois le passage en
fait (Odoo) et la disparition (module, R4) : c'est la seule source qui couvre les deux cas en une requête,
et elle survit à l'archivage de l'opportunité (seule la suppression de l'opportunité l'efface, H2).

## R2. Source de vérité de l'anti-doublon (FR-012, FR-013, FR-014) sans base backend

- **Décision** : le backend lit deux choses dans Odoo, par client, sur les opportunités du client et de
  ses contacts (`partner_id.commercial_partner_id = client`, société FOODPRINT uniquement, archivées comprises) :
  1. activité ouverte = `mail.activity` avec `activity_type_id` = notre type, `res_model = 'crm.lead'`,
     `res_id` dans ces opportunités (les activités actives sont les seules à exister sur des opportunités
     actives ; on cherche aussi sur les archivées par sûreté) ;
  2. dernière relance = `mail.message` avec `mail_activity_type_id` = notre type, `model = 'crm.lead'`,
     `res_id` dans ces opportunités, `date >= (jour du lancement − 21 j) 00:00:00`, trié `date desc`,
     limite 1.
  Le message de passage en fait est posé par Odoo (R1) ; le message de disparition est posé par notre
  module (R4). Les deux portent le même `mail_activity_type_id`, donc une seule requête.
- **Justification** : aucune table ni fichier d'état côté backend ; la règle survit aux relances
  Trigger.dev et aux redéploiements ; les messages de chatter survivent à l'archivage de l'opportunité.
- **Alternatives rejetées** : (a) lire `mail.activity` archivées (`active = False`, `date_done`) : ne
  couvre pas les activités disparues, qui n'existent plus, donc il faudrait une seconde source ; (b) un modèle Odoo dédié `x.suggestion.trace` : table, ACL, vues et une
  deuxième requête pour rien ; (c) une trace sur le chatter du partenaire : le passage en fait est tracé sur
  l'opportunité par Odoo, on garde un seul endroit ; (d) un fichier ou une base côté backend : interdit
  par la demande.
- **Limite acceptée (H2)** : si l'opportunité est supprimée (pas archivée), ses messages partent avec elle.

## R3. Type d'activité « Suggestion commande »

- **Décision** : enregistrement XML `noupdate="1"` dans le module, id externe
  `moutarderie_suggestion_commande.mail_activity_type_suggestion_commande`, avec `name = "Suggestion
  commande"`, `res_model = 'crm.lead'`, `keep_done = True`, `category = 'default'`, `chaining_type =
  'suggest'`, `delay_count = 0`, `icon = 'fa-shopping-cart'`, `sequence` élevé, `summary` vide.
- **Justification** : `res_model = 'crm.lead'` empêche qu'un vendeur pose ce type sur un autre modèle et
  borne les recherches du backend ; `keep_done` garde les activités faites visibles dans la vue activité du
  vendeur et sépare proprement « faite » (archivée) de « disparue » (supprimée), ce qui simplifie R4.
- **Alternatives** : type créé à la main en prod (interdit, principe I) ; `keep_done = False` (alors
  `_action_done` supprime aussi les activités faites et le hook de R4 devrait distinguer les deux cas par
  contexte, plus fragile).

## R4. Trace datée d'une activité disparue (FR-014)

- **Décision** : dans le module, surcharge de `mail.activity.unlink`. Pour chaque activité du type
  « Suggestion commande » encore `active = True` (donc jamais passée en fait), poster avant suppression
  sur le document lié (`crm.lead`, en `sudo`, auteur = utilisateur courant) un message :
  `message_post(body=…, message_type='notification', subtype_xmlid='mail.mt_activities',
  mail_activity_type_id=<type>)`. Corps : « Activité « Suggestion commande » supprimée sans être passée
  en fait le JJ/MM/AAAA (opportunité marquée perdue ou activité supprimée). » `message_post` accepte les
  champs de `mail.message` passés en kwargs (`mail_activity_type_id` en fait partie, c'est le mécanisme
  qu'utilise `_action_done`).
- **Justification** : couvre la suppression manuelle, l'archivage de l'opportunité (perdue) et tout autre
  chemin qui finit par `unlink`. Les activités faites sont archivées (R3) et ne déclenchent pas de trace
  supplémentaire : quand l'archivage de l'opportunité les supprime à leur tour, elles sont `active = False`
  et sont ignorées.
- **Ordre des opérations** : le message est posté avant `super().unlink()` ; le document est chargé avec
  `active_test=False` (l'opportunité est déjà archivée quand le `write` du mixin appelle `unlink`).
- **Alternatives** : surcharge de `crm.lead.action_set_lost` seulement (ne couvre pas la suppression
  manuelle ni l'archivage direct) ; `ir.logging` (pas requêtable par partenaire).

## R5. Fermeture immédiate à la création d'un devis (FR-011)

- **Décision** : surcharge de `sale.order.create` (`@api.model_create_multi`). Après `super()`, pour chaque
  commande créée avec un `partner_id` : rechercher (`sudo`, `active_test=False`) les opportunités telles que
  `partner_id.commercial_partner_id = order.partner_id.commercial_partner_id` et `company_id =
  order.company_id` ; puis les `mail.activity` actives du type sur ces opportunités ; appeler
  `action_feedback(feedback="Devis %s créé le %s pour %s" % (order.name, date, order.partner_id.display_name))`.
  Odoo poste alors le message de passage en fait (R1), auteur = utilisateur qui crée le devis.
- **Justification** : « immédiatement, au moment de la création du devis » ; le message cite le devis ;
  seuls les devis créés après l'activité comptent, par construction ; une commande créée dans une autre
  société ne ferme rien (US3 scénario 2) ; un devis annulé ou supprimé ensuite ne rouvre rien (US3
  scénario 3, rien ne le fait). Le contact d'une société (adresse de livraison, personne) partage le
  `commercial_partner_id` de la société : le devis « pour l'un de ses contacts » ferme bien l'activité.
- **Opportunités sans société** (H1, tranchée le 30/09/2026) : ignorées, elles ne portent jamais l'activité
  et ne sont jamais fermées par le hook. Le backend ne pose l'activité que sur des opportunités FOODPRINT
  (FR-004). Aucune opportunité ouverte sans société en prod au 30/09/2026.
- **Alternatives** : action automatisée `base.automation` (module Enterprise-agnostique mais configuration
  data plus opaque, difficile à tester unitairement) ; surcharge de `sale.order.action_confirm` (trop
  tard : la spec parle de création, pas de confirmation).

## R6. Délai de 21 jours (FR-013)

- **Décision** : fonction pure `isWithinFollowUpDelay(lastDate, runDate, 21)` : bloqué si
  `differenceInCalendarDays(runDate, lastDate) < 21`. Exemple de la spec : passée en fait le 02/10 →
  16/10 bloqué (14 j), 23/10 éligible (21 j). La requête Odoo filtre `date >= (runDate − 21 j) 00:00:00`
  puis la décision exacte se prend sur la date renvoyée. `runDate` = date d'exécution en Europe/Paris (H3).
- **Justification** : la borne est testable unitairement, la requête ne rapatrie que l'utile.
- **Fuseau** (révisé le 01/10/2026, review) : `mail.message.date` est en UTC ; le backend la convertit en
  jour calendaire de Paris (`odooDatetimeToParisDate`) avant de compter les jours et dans le libellé du compte
  rendu, comme les dates affichées par Odoo et comme Q6.

## R7. Écritures du backend : opportunité et activité

- **Décision** :
  1. Opportunité (uniquement si aucune ouverte) : `crm.lead.create` avec `name = "Suggestion commande
     <client>"`, `type = 'opportunity'`, `partner_id`, `user_id` = vendeur de la fiche client, `team_id` =
     équipe du client (`res.partner.team_id`) sinon équipe du vendeur (`res.users.sale_team_id`) sinon
     vide, `company_id = companyId`. Étape choisie par Odoo (R1). Aucun montant.
  2. Activité : `mail.activity.create` avec `res_model_id` = id de `ir.model` pour `crm.lead` (résolu une
     fois par processus et mis en cache), `res_id`, `activity_type_id`, `summary = "Suggestion commande
     <client>"`, `note` = HTML de la description, `date_deadline = runDate`, `user_id` = vendeur.
- **Justification** : `create` renvoie un entier (les méthodes `model_create` sont converties par
  `api.downgrade`) ; en revanche `crm.lead.activity_schedule` renvoie un recordset sans décorateur
  `@api.returns`, que le marshaller XML-RPC ne sait pas sérialiser. La création d'une activité assignée à
  un autre utilisateur que l'auteur déclenche la notification standard d'Odoo au vendeur
  (`mail_activity.py` 17.0, lignes 328-337, sauf contexte `mail_activity_quick_update`). Décision du
  30/09/2026 : la conserver, sous le nom du compte dédié (R18). Constat prod : le compte API actuel est
  celui d'une vendeuse, responsable de 480 clients ; avec lui, ses clients n'auraient pas eu de
  notification et les autres vendeurs l'auraient reçue à son nom.
- **Alternatives** : `activity_schedule` via RPC (rejeté pour la raison ci-dessus) ; créer l'activité sur
  le partenaire plutôt que sur l'opportunité (contraire à la spec).

## R8. Identifiant du type d'activité dans la configuration

- **Décision** : `autoProposalConfig.activity.suggestionActivityTypeId` dans `backend/src/config/auto-proposal.ts`,
  valeur prod relevée en lecture seule après l'installation du module en prod (recherche `ir.model.data`
  sur `module = 'moutarderie_suggestion_commande'`, `name = 'mail_activity_type_suggestion_commande'`).
  Surcharge par `ODOO_SUGGESTION_ACTIVITY_TYPE_ID` (local Docker et staging ont leurs propres ids). Au
  début de chaque lancement, l'orchestrateur lit le type (`name`, `res_model`) et abandonne le lancement
  avec un message clair si l'id n'existe pas ou ne s'appelle pas « Suggestion commande ».
- **Justification** : demande explicite (même traitement que 196 et 82) ; la vérification au démarrage
  applique la contrainte « identifiants vérifiés avant usage » et protège contre un id de staging laissé en
  prod. Les ids diffèrent entre bases car ils sont attribués à l'installation.
- **Alternatives** : résolution par id externe à chaque lancement (plus robuste, mais l'utilisateur veut
  l'id en config ; la vérification au démarrage donne la même sécurité).

## R9. Emplacement des contrôles d'éligibilité et idempotence

- **Décision** (révisée le 30/09/2026) : pré-filtre **en lot dans l'orchestrateur** (`prefilter.service.ts`),
  après la détection et avant le déclenchement des tâches client : lectures avec des domaines `in` sur
  tous les clients inactifs (vendeurs, utilisateurs, opportunités, activités ouvertes, traces depuis
  `runDate − 21 j`), puis `decideEligibility` par client (vendeur → vendeur actif → activité ouverte →
  relance < 21 j). Seuls les éligibles déclenchent `client-proposal` ; les écartés entrent directement dans
  les `outcomes`. Dans la tâche client : après l'IA, aucun produit suggéré ; avant l'écriture (étape 3),
  décision complète refaite pour ce client (vendeur, activité ouverte, relance récente) + opportunité
  ouverte la plus ancienne. En mode test, l'étape 3 fait les mêmes lectures et produit `would_create`.
- **Volume** : ~1 700 clients inactifs par lancement (1 746 le 11/01/2026). Contrôle client par client
  avant l'IA = ~5 lectures × 1 700 ≈ 8 500 appels par vendredi, en parallèle ; en lot = 5 à 6 appels.
- **Justification** : la tâche client est l'unité de relance de Trigger.dev (`maxAttempts: 3`) : chaque
  tentative refait les contrôles ; les tâches s'exécutent en parallèle ; une seule implémentation de la
  règle. Cas de relance : (a) opportunité créée puis échec avant l'activité → à la tentative suivante,
  l'opportunité créée est la seule ouverte, donc réutilisée, pas de doublon ; (b) activité créée puis échec
  après → la tentative suivante écarte le client « activité déjà ouverte », ce qui est exact ; le compte rendu
  le dit ainsi. Un second lancement le même jour ne crée rien (SC-004).
- **Alternatives** : contrôle client par client dans la tâche avant l'IA (version initiale de ce plan,
  rejetée : ~8 500 appels Odoo par lancement pour un résultat identique) ; clé d'idempotence Trigger.dev
  (ne protège pas contre l'écriture partielle dans Odoo). La règle reste écrite une seule fois
  (`decideEligibility`), appelée par le pré-filtre et par la revérification.

## R10. Contenu de la description (FR-007 à FR-010)

- **Décision** : HTML construit par une fonction pure `buildActivityNote(input)` :
  `<p>Dernière commande : JJ/MM/AAAA</p>`, puis pour chaque liste non vide `<p>phrase</p><ul><li>Produit —
  24 TU6 — dernière commande : JJ/MM/AAAA</li>…</ul>`. Habituels/optionnels séparés par la règle actuelle
  de `generateQuote` : `calculation_metadata.confidence === 'low'` → optionnel. Date de dernière commande
  du client : requête `sale.order` (états `sale`/`done`, `partner_id = client`, `company_id`) triée
  `date_order desc`, comme la spec (commande confirmée). Date de dernière commande d'un produit : max de
  `order_history[].date_order` du produit (même historique que la suggestion). Unité = `product_uom[1]`.
  Phrases d'introduction dans la config (à valider par la cliente), pas de dépendance à l'IA.
- **Justification** : testable sans Odoo ni IA ; respecte l'ordre imposé ; une liste vide disparaît avec sa
  phrase (FR-009).

## R11. Compte rendu (FR-015 à FR-017)

- **Décision** : chaque tâche client renvoie un `outcome` (`created` | `would_create` | `skipped` | `error`).
  L'orchestrateur agrège et le rapport global gagne, après les statistiques existantes : la ligne
  « Mode : TEST / RÉEL », « Activités créées » (client, vendeur, opportunité, nouvelle/existante),
  « Opportunités créées », « Clients écartés » (client, raison, hors « aucun produit suggéré »),
  « Erreurs » (client, message, opportunité créée sans activité le cas échéant), puis en dernier une
  section compacte « Aucun produit suggéré (N) » : noms en liste simple, sans tableau (décision du
  30/09/2026 ; c'est la grande majorité des ~1 700 clients). Les clients écartés avant l'IA n'ont pas d'analyse de stock : le
  rapport global est construit à partir de tous les résultats, pas seulement de ceux qui ont un rapport
  client. Canal inchangé : fichiers `reports-output/` et sortie de run Trigger.dev.
- **Libellés fermés** (FR-016) : « pas de vendeur », « vendeur inactif », « vendeur sans accès à FOODPRINT », « aucun produit suggéré »,
  « activité déjà ouverte », « relancé il y a moins de 3 semaines (JJ/MM/AAAA) », « erreur (message) ».

## R12. Code supprimé et code conservé

- **Supprimé** : `features/proposal-generation/` (service, types, README) ; méthodes `createSaleOrder`,
  `createSaleOrderLine`, `createSaleOrderOption`, `sendQuoteByEmail` de `OdooClient` et de `xmlrpc-client`
  (uniquement utilisées par la génération de devis) ; `quoteGeneration.noteTemplate` ; références
  `QuoteCreationResult` dans les rapports ; `docs/features/proposal-generation.md`.
- **Conservé** : `getSaleOrderDetails` (backtest), `getPartnerCompanyInfo` (étendu : `user_id`,
  `team_id`, `commercial_partner_id`, `is_company`), l'étiquette 82 renommée
  `inactivityDetection.autoProposalOrderTagId` (utilisée par `forceReanalysis` et `routes/test.ts`,
  détection inchangée FR-018), `json2-client.ts` (client v19+, non utilisé, déjà incomplet vis-à-vis de
  l'interface : hors périmètre).
- **Renommage** : `skipOdooQuoteGeneration` → `skipOdooWrite` dans types, tâches, routes, rapports, docs.

## R13. Backtest et règles d'éligibilité

- **Décision** : `ClientProcessingConfig.eligibilityCheck` (défaut `true`) ; `backtest-client.task` passe
  `false` (et `skipOdooWrite: true`). Le backtest prédit à une date passée pour des clients qui ont
  commandé depuis : les règles vendeur/relance n'ont pas de sens pour lui.

## R14. Odoo 17 local via Docker

- **Décision** : `odoo/docker-compose.yml` avec `odoo:17.0` et `postgres:15`, `./addons` monté dans
  `/mnt/extra-addons`, `odoo.conf` avec `addons_path` incluant ce dossier. Base `moutarderie_local`
  initialisée avec `crm,sale_management,moutarderie_suggestion_commande` sans données de démonstration ;
  `odoo/dev/seed_local.py` (Python stdlib `xmlrpc.client`) crée : 2 sociétés, 1 équipe commerciale,
  3 utilisateurs (vendeur actif, vendeur archivé, admin), une étiquette partenaire « Exclude-Auto-Proposal »,
  des produits avec unités, des clients couvrant chaque scénario (avec/sans vendeur, vendeur archivé,
  contact, étiquette d'exclusion, opportunités ouvertes anciennes et récentes, gagnée, perdue, autre
  société, piste seule, activité déjà ouverte, activité faite il y a 10 j et il y a 25 j) et des commandes
  confirmées antidatées (`date_order`) pour donner un historique à la prédiction. Les tests du module
  tournent avec `--test-enable --test-tags /moutarderie_suggestion_commande` sur une base jetable.
- **Backend contre ce local** : `.env` local avec `ODOO_URL=http://localhost:8069`, identifiants admin,
  `ODOO_SUGGESTION_ACTIVITY_TYPE_ID` lu après installation ; `companyId` et `excludedPartnerTagId` passés
  dans le payload de la route (déjà supporté) car les ids locaux diffèrent de la prod.
- **Justification** : constitution II ; aucun module Enterprise n'est nécessaire au module ni au backend.

## R15. Outillage du dépôt (constats du 30/09/2026 sur ce worktree)

- `pnpm test` échoue : `vitest` n'est pas dans `devDependencies` (0 occurrence dans `pnpm-lock.yaml`).
  **Décision** : l'ajouter (`^3`), `vitest.config.ts` existant conservé.
- `npx tsc --noEmit` échoue sur `tsconfig.json` (TS5109 : `moduleResolution: node` incompatible avec
  `module: NodeNext` en TypeScript 5.8). **Décision** : passer à `module: ESNext` + `moduleResolution:
  Bundler` (Trigger.dev bundle avec esbuild, le runtime n'est pas concerné). Avec ce réglage, 199 erreurs
  préexistantes subsistent (58 dans `reports/backtest-report.ts`, le reste dans `optimization/` et
  `backtesting/`, plus `json2-client.ts` incomplet). **Hors périmètre** ; règle de qualité de cette
  fonctionnalité : aucune erreur nouvelle dans les fichiers créés ou modifiés (comparaison du nombre
  d'erreurs par fichier avant/après).
- `*test*` et `scripts/` sont ignorés par `backend/.gitignore` (avec l'exception `!*.test.ts`), pas par le
  `.gitignore` racine : `odoo/addons/*/tests/` et `odoo/dev/` ne sont pas ignorés (`git check-ignore`).
  **Décision** : aucune exception à ajouter ; le script de données va dans `odoo/dev/`.
- `.env.example` ne mentionne pas `ODOO_USERNAME`/`ODOO_PASSWORD` alors que le client XML-RPC les exige :
  à compléter avec la nouvelle variable.

## R16. Odoo.sh : emplacement du module et validation staging

- **Décision** : le module vit dans ce dépôt sous `odoo/addons/moutarderie_suggestion_commande/`. Odoo.sh
  ajoute au chemin des addons les dossiers du dépôt relié qui contiennent des modules (dossier racine et
  sous-dossiers, y compris via sous-modules git) ; l'accès Odoo.sh étant imminent, la liaison exacte
  (ce dépôt ou un dépôt dédié) est à confirmer à l'ouverture de l'accès. Le module étant autonome, un
  déplacement est une copie sans modification. Une branche staging Odoo.sh = copie neutralisée de la prod
  (actions planifiées et e-mails sortants désactivés), ce qui convient à la validation : le backend
  écrit via l'API, le hook `sale.order` s'exécute dans Odoo, rien ne dépend des crons ni des e-mails.
- **Point à vérifier à l'ouverture de l'accès** : réglage « modules à installer » de la branche staging
  (le module doit y être installé) et nom de la base staging pour le `.env` du backend.

## R17. Vendeur et équipe

- **Décision** : vendeur = `res.partner.user_id` de la société cliente (spec, hypothèse « Vendeur »).
  Activité = `res.users.read([uid], ['active', 'name', 'sale_team_id'])` (un `search` ignorerait un
  utilisateur archivé ; `read` par id le renvoie). Raisons : `user_id` vide → « pas de vendeur » ;
  `active = False` → « vendeur inactif » ; FOODPRINT absent de `company_ids` → « vendeur sans accès à FOODPRINT »
  (décision du 30/09/2026, après review : 107 clients ont un vendeur d'une autre société, qui ne pourrait
  ni être assigné à une nouvelle opportunité FOODPRINT, `check_company`, ni ouvrir l'opportunité).
  Équipe d'une opportunité créée : gardée seulement si elle est de FOODPRINT ou sans société (304 clients ont
  une équipe d'une autre société ; Odoo refuse sinon avec « Incompatible companies on records », reproduit
  en local le 30/09/2026) ; lue par `crm.team.read(company_id)` seulement quand une opportunité est créée.

## R18. Compte dédié « Suggestions automatiques » (décision du 30/09/2026)

- **Décision** : le module crée un utilisateur interne `res.users` (id externe
  `user_suggestions_automatiques`, nom « Suggestions automatiques », login `suggestions.auto`, sans mot de
  passe, `noupdate`) avec le groupe `sales_team.group_sale_salesman_all_leads` (lecture et écriture sur
  toutes les opportunités et commandes). Un `post_init_hook` le rattache à toutes les sociétés (le backend
  filtre déjà sur `companyId`). Une clé API est générée une fois par base (local, staging, prod) et placée
  dans `ODOO_USERNAME`/`ODOO_PASSWORD` du backend (XML-RPC accepte la clé API à la place du mot de passe).
- **Justification** : les activités, opportunités créées et notifications portent « Suggestions
  automatiques » au lieu du nom d'une personne ; la notification standard d'Odoo est conservée ; les
  clients de la vendeuse dont le compte sert aujourd'hui d'accès API reçoivent aussi leur notification.
- **À vérifier à l'ouverture d'Odoo.sh** : impact de licence d'un utilisateur interne supplémentaire, et
  droits suffisants pour toutes les lectures du backend (historique de commandes, `ir.model`,
  `mail.message` des opportunités, `res.users`).
- **Repli** (si la licence pose problème) : garder le compte actuel ; créer l'activité avec le contexte
  `mail_activity_quick_update` (pas de notification standard) ; le module envoie à la place, pour les
  activités de ce type, une notification `message_notify` signée OdooBot (`base.partner_root`) avec un
  texte à nous. L'auteur des activités et opportunités reste alors le compte actuel.

## R19. Paniers e-shop (décision du 30/09/2026)

- **Constat prod** (lecture seule, 30/09/2026) : `website_sale` installé ; site « FOODPRINT »
  (foodprint.bio) très utilisé par les clients sociétés : depuis le 01/06/2026, 827 commandes e-shop de
  clients sociétés (358 sociétés), 798 confirmées, 25 brouillons, 4 envoyées. Les paniers sont créés par
  `sale.order.create` sous OdooBot (823 sur 827).
- **Décision** : aucun traitement particulier. Un panier est un devis : il ferme l'activité dès sa
  création, même s'il est abandonné ensuite (~3 %). Cohérent avec la détection, qui compte déjà ces
  paniers comme de l'activité.
- **Test** : `test_quote_created_by_superuser_closes_activity` (devis créé `with_user(SUPERUSER_ID)`,
  chemin de l'e-shop) ; le module ne dépend pas de `website_sale`.

## Faits vérifiés sur le dépôt (30/09/2026)

- `odoo-xmlrpc-ts` 1.3 : `execute(model, method, args, kwargs?)` → `execute_kw` ; `create` renvoie
  l'id ; `searchRead(model, domain, {fields, order, limit, context?})`. Le contexte `active_test=False`
  se passe dans les kwargs (`context`), à confirmer sur le premier appel en local.
- Pipeline actuel : `orchestrator-scheduled` (cron `0 7 * * 5` Europe/Paris) → `orchestratorTask`
  (`getInactiveClients` puis `batchTriggerAndWait` par lots de 500) → `clientProposalTask`
  (`calculateReplenishmentNeeds` → `prepareProposal` → `generateQuote` si `!skipOdooQuoteGeneration &&
  hasProducts` → rapports). Détection : `buildRecentOrdersDomain` + `buildInactivePartnersDomain`
  (`company_id`, étiquette 196), inchangés.
- Règle habituels/optionnels de `generateQuote` : `calculation_metadata.confidence === 'low'` → option.
- Un seul test existant : `company-filtering.test.ts` (mock de `odoo-xmlrpc-ts`), modèle pour les nouveaux.
