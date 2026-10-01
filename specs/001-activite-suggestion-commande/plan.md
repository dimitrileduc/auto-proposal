# Implementation Plan: Activité « Suggestion commande » à la place des devis automatiques

**Branch**: `001-activite-suggestion-commande` | **Date**: 2026-09-30 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-activite-suggestion-commande/spec.md`

## Summary

Le lancement du vendredi ne crée plus de devis brouillon. Pour chaque client inactif éligible, le backend
crée dans l'Odoo de la cliente une activité « Suggestion commande <client> », assignée au vendeur de la
fiche client et posée sur la plus ancienne opportunité ouverte (créée si besoin). La description liste
la date de dernière commande et les produits suggérés (habituels, optionnels).

Approche technique, en deux composants livrés dans l'ordre module → backend :

1. **Module Odoo `moutarderie_suggestion_commande`** (Odoo 17.0, dépendances `crm` + `sale` uniquement,
   aucune dépendance Enterprise) : le type d'activité « Suggestion commande » (`keep_done`, réservé aux
   opportunités), la fermeture immédiate de l'activité à la création d'un `sale.order` pour la même
   société mère et la même société Odoo (paniers e-shop compris), une trace datée sur le chatter de
   l'opportunité quand une activité de ce type disparaît sans être passée en fait (suppression manuelle,
   opportunité perdue), et le compte utilisateur dédié « Suggestions automatiques » sous lequel le backend
   se connecte (R18).
2. **Backend Trigger.dev** : pipeline inchangé (orchestrateur du vendredi → tâche par client, détection
   et prédiction identiques). Un **pré-filtre d'éligibilité en lot dans l'orchestrateur**, avant les
   appels IA (vendeur, activité ouverte, relance de moins de 21 jours), lit Odoo en quelques requêtes
   pour les ~1 700 clients inactifs à la fois ; seuls les clients éligibles déclenchent une tâche client.
   `generateQuote` est remplacé par la création opportunité + activité via l'API XML-RPC, avec
   **revérification complète dans la tâche client juste avant l'écriture** pour rester idempotent quand
   Trigger.dev relance une tâche. `skipOdooQuoteGeneration` devient `skipOdooWrite`
   (test par défaut). Le code de création de devis est supprimé. Aucune base de données ajoutée : l'état
   (activité ouverte, date de passage en fait ou de disparition) est lu dans Odoo (`mail.activity`,
   `mail.message`).

Les décisions détaillées sont dans [research.md](./research.md), le modèle dans
[data-model.md](./data-model.md), les contrats dans [contracts/](./contracts/) et le guide de validation
dans [quickstart.md](./quickstart.md).

## Technical Context

**Language/Version**:
- Backend : TypeScript 5.8 / Node.js 20+ (Node 24 en local), ESM, exécuté par Trigger.dev v4 (runtime `node`).
- Module Odoo : Python 3.10+ (Odoo 17.0 ; image Docker `odoo:17.0` en local, Odoo.sh 17.0 Enterprise en prod).

**Primary Dependencies**:
- Backend : `@trigger.dev/sdk` 4.3.2, `hono`, `odoo-xmlrpc-ts` 1.3 (client XML-RPC, `execute(model, method, args, kwargs)`), `date-fns`, `zod`. Tests : `vitest` (à ajouter en devDependency, absent aujourd'hui alors que `pnpm test` l'invoque).
- Module Odoo : `crm`, `sale` (community). Pas de `sale_crm`, pas de module Enterprise.

**Storage**: aucun ajout côté backend (constitution, contrainte du plan). État métier dans Odoo :
`mail.activity` (activités ouvertes), `mail.message` avec `mail_activity_type_id` (trace de passage en
fait, produite par Odoo, et trace de disparition, produite par notre module). Comptes rendus : fichiers
markdown/JSON dans `backend/reports-output/` + sortie de run Trigger.dev, comme aujourd'hui.

**Testing**:
- Module : tests Odoo `TransactionCase` lancés dans Docker (`--test-enable`), sans données Enterprise.
- Backend : tests unitaires vitest (règles pures, construction de la description, domaines Odoo,
  pré-filtre en lot avec un nombre de lectures fixe, IA non appelée pour un client écarté par le
  pré-filtre, revérification avant l'écriture avec client Odoo mocké, ordre des sections du compte rendu).
- Intégration : lancement complet (`trigger.dev dev` + route HTTP) contre l'Odoo 17 local Docker alimenté
  par un script de jeu de données ; puis validation sur une branche staging Odoo.sh (SC-002 à SC-007).

**Target Platform**: Trigger.dev cloud (projet `proj_yebxbxzoixxmavgyyjlk`) pour le backend ; Odoo.sh 17.0
Enterprise (https://collectif.odoo.com) pour le module.

**Project Type**: service backend (tâches planifiées + routes HTTP) + addon Odoo, dans le même dépôt.

**Performance Goals**: environ 1 700 clients inactifs par lancement (1 746 dans le compte rendu du
11/01/2026), dont quelques dizaines avec des produits suggérés (3 à 46 devis par lancement sur les 8
derniers). Pré-filtre d'éligibilité : 5 à 6 lectures Odoo en lot pour tout le lancement, au lieu
d'environ 8 500 lectures unitaires (5 par client). Par client éligible avec produits : revérification
(3 à 4 lectures) puis 1 à 2 écritures (opportunité facultative + activité). Le hook Odoo sur `sale.order`
ajoute une recherche par devis créé (y compris ~200 paniers e-shop par mois), uniquement pour retrouver
d'éventuelles activités ouvertes du partenaire : négligeable.

**Constraints**:
- Mode test par défaut ; seul le lancement planifié écrit (constitution III).
- Toute lecture et écriture filtrée sur `companyId` (FOODPRINT SRL = 3) ; le hook Odoo compare la société du devis à celle de l'opportunité.
- Idempotence sur relance Trigger.dev (tâche client `maxAttempts: 3`, orchestrateur idem).
- Le délai de 21 jours est calculé à partir de données Odoo uniquement (FR-013, FR-014).
- Le module doit fonctionner sans module Enterprise (tests locaux sur `odoo:17.0` community).
- Ordre de déploiement : module (staging puis prod) avant backend ; les lancements continuent de créer des devis jusqu'à la mise en service du backend (décision du 30/09/2026).
- Pas de fusion sur `main` ni de déploiement Trigger.dev de ce code avant la mise en service : tant que l'id du type vaut 0, la vérification V1 arrête le lancement, qui ne produirait ni devis ni activité.
- L'identifiant du type d'activité se trouve dans `backend/src/config/auto-proposal.ts` comme 196 et 82, avec surcharge par variable d'environnement pour le local et le staging, et vérification en lecture seule au début de chaque lancement.
- Le backend se connecte à Odoo avec le compte dédié « Suggestions automatiques » (créé par le module ; clé API générée une fois par base, jamais versionnée). La notification standard d'Odoo au vendeur est conservée et porte ce nom (décision du 30/09/2026). Repli si ce compte pose un problème de licence à l'ouverture d'Odoo.sh : garder le compte actuel, créer l'activité sans notification (`mail_activity_quick_update`) et faire envoyer par le module une notification signée OdooBot (R18).

**Scale/Scope**: 1 668 sociétés clientes hors exclusion, 1 073 opportunités ouvertes, 246 devis
automatiques existants à ne pas toucher. Périmètre code : 1 module Odoo nouveau (3 fichiers Python +
1 XML + tests), 1 feature backend nouvelle (`suggestion-activity`), 1 feature supprimée
(`proposal-generation`), retouches des 3 tâches Trigger.dev, du client XML-RPC, des rapports, des routes
et de la documentation.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principe | Exigence | Réponse du plan | État |
|---|---|---|---|
| I. Odoo modifié uniquement par module versionné | Type d'activité, règle de fermeture et trace livrés par un module ; le backend n'écrit que des données métier | Module `odoo/addons/moutarderie_suggestion_commande` (type d'activité et compte « Suggestions automatiques » en XML `noupdate`, surcharges `sale.order.create` et `mail.activity.unlink`). Seule la clé API du compte est générée à la main, une fois par base : c'est un secret, pas un réglage. Le backend crée des `crm.lead` et des `mail.activity`, ne touche ni type, ni règle, ni réglage. La spec et ce plan décrivent ce qui change côté Odoo et dans quel module ([contracts/odoo-module.md](./contracts/odoo-module.md)) | ✅ |
| II. Copie de prod avant mise en service | Développement et tests en local (Docker) puis lancement complet sur une branche staging Odoo.sh ; constats consignés | Docker `odoo:17.0` + script de données ; puis staging Odoo.sh avec le module installé et le backend pointé dessus en mode réel ; constats dans `specs/001-activite-suggestion-commande/validation-staging.md` ([quickstart.md](./quickstart.md), scénario D) | ✅ |
| III. Mode test par défaut | Aucune écriture Odoo sans demande explicite | `skipOdooWrite` par défaut `true` dans l'orchestrateur, la tâche client et les routes HTTP ; seul `orchestrator-scheduled` passe `false`. En mode test, les lectures d'éligibilité ont lieu et le compte rendu indique ce qui aurait été créé (FR-019) | ✅ |
| IV. Lecture seule pour vérifier | Vérifications prod en lecture seule | Relevé de l'identifiant du type d'activité en prod par recherche `ir.model.data` (lecture) ; contrôle d'existence du type au début de chaque lancement (lecture). Aucune correction de données prod prévue ; les 246 devis existants ne sont ni modifiés ni supprimés (FR-020) | ✅ |
| V. Traçabilité des lancements | Compte rendu : créé (références), écarté (raison fermée), erreurs ; une catégorie par client ; mode test/réel | Résultat par client = `outcome` à quatre formes (`created`, `would_create`, `skipped`, `error`) avec liste fermée de raisons (FR-016) ; rapport global enrichi de trois listes + mode ; statistiques recalculées ([contracts/trigger-payloads.md](./contracts/trigger-payloads.md)) | ✅ |
| Contraintes techniques | Trigger.dev v4, API uniquement, `companyId` partout, identifiants centralisés et vérifiés | Toutes les lectures CRM/activités et les créations portent `companyId` ; nouveaux identifiants dans `auto-proposal.ts` ; vérification au démarrage du lancement | ✅ |

Aucune dérogation demandée. La section « Complexity Tracking » reste vide.

## Project Structure

### Documentation (this feature)

```text
specs/001-activite-suggestion-commande/
├── plan.md                  # Ce fichier
├── research.md              # Phase 0 : décisions et faits vérifiés (Odoo 17.0, RPC, outillage)
├── data-model.md            # Phase 1 : entités Odoo et backend, transitions, règles
├── quickstart.md            # Phase 1 : scénarios de validation (Docker, unitaires, run complet, staging, déploiement)
├── contracts/
│   ├── odoo-module.md       # Contrat du module : type d'activité, fermeture, trace, tests attendus
│   ├── odoo-api-calls.md    # Appels XML-RPC du backend : domaines, champs, écritures
│   └── trigger-payloads.md  # Payloads/résultats des tâches, routes HTTP, structure du compte rendu
├── validation-staging.md    # Créé lors de la validation sur staging (constitution II)
└── tasks.md                 # Phase 2 (/speckit-tasks), non produit ici
```

### Source Code (repository root)

```text
odoo/                                             # NOUVEAU : tout ce qui concerne l'Odoo de la cliente
├── docker-compose.yml                            # odoo:17.0 + postgres, addons montés
├── config/odoo.conf                              # addons_path, db, sans demo Enterprise
├── addons/
│   └── moutarderie_suggestion_commande/
│       ├── __manifest__.py                       # depends: crm, sale ; version 17.0.1.0.0
│       ├── __init__.py
│       ├── data/mail_activity_type_data.xml      # type « Suggestion commande » (noupdate)
│       ├── data/res_users_data.xml               # compte « Suggestions automatiques » (noupdate, sans mot de passe)
│       ├── hooks.py                              # post_init_hook : rattache le compte aux sociétés
│       ├── models/
│       │   ├── __init__.py
│       │   ├── sale_order.py                     # create() → passe en fait les activités ouvertes du partenaire
│       │   └── mail_activity.py                  # unlink() → trace datée si activité du type encore ouverte
│       ├── tests/
│       │   ├── __init__.py
│       │   ├── common.py                         # jeu de données minimal (2 sociétés, vendeur, client + contact)
│       │   ├── test_auto_close.py                # US3 : fermeture, autre société, annulation, contact, devis créé par OdooBot (chemin e-shop)
│       │   ├── test_user.py                      # compte « Suggestions automatiques » : existe, groupes, sociétés
│       │   └── test_trace.py                     # FR-014 : suppression manuelle, opportunité perdue, pas de doublon
│       └── README.md
└── dev/
    └── seed_local.py                             # jeu de données pour le lancement complet local (XML-RPC, stdlib)

backend/
├── package.json                                  # + vitest (devDependency)
├── tsconfig.json                                 # moduleResolution corrigé (tsc --noEmit exploitable)
├── .env.example                                  # + ODOO_USERNAME/PASSWORD (compte « Suggestions automatiques » + clé API), ODOO_SUGGESTION_ACTIVITY_TYPE_ID
└── src/
    ├── config/auto-proposal.ts                   # - quoteGeneration ; + odoo.autoProposalOrderTagId (82),
    │                                             #   + activity { suggestionActivityTypeId, followUpDelayDays: 21, libellés }
    ├── features/
    │   ├── proposal-generation/                  # SUPPRIMÉ (service, types, README)
    │   └── suggestion-activity/                  # NOUVEAU
    │       ├── suggestion-activity.types.ts      # Outcome, SkipReason, libellés FR
    │       ├── eligibility.utils.ts                    # règles pures : vendeur, activité ouverte, délai 21 j
    │       ├── prefilter.service.ts                      # pré-filtre en lot pour tous les clients inactifs (orchestrateur)
    │       ├── prefilter.service.test.ts
    │       ├── activity-note.utils.ts                  # description HTML (FR-007..010), tri habituels/optionnels
    │       ├── suggestion-activity.service.ts    # revérification + création opportunité/activité (OdooClient)
    │       ├── process-client.service.ts                 # pipeline d'un client, dépendances injectées (testable)
    │       ├── eligibility.utils.test.ts
    │       ├── activity-note.utils.test.ts
    │       ├── process-client.service.test.ts
    │       └── README.md
    ├── infrastructure/odoo/clients/
    │   ├── odoo-client.types.ts                  # - createSaleOrder/Line/Option, sendQuoteByEmail ; + méthodes CRM/activités
    │   ├── xmlrpc-client.ts                      # implémentation (+ cache ir.model crm.lead)
    │   ├── odoo-domains.ts                       # + domaines opportunités / activités / traces
    │   ├── odoo-domains.test.ts                  # NOUVEAU
    │   ├── company-filtering.test.ts             # inchangé
    │   └── json2-client.ts                       # inchangé (v19+, non utilisé, hors périmètre)
    ├── trigger/
    │   ├── orchestrator-scheduled.task.ts        # skipOdooWrite: false ; logs activités/opportunités
    │   ├── orchestrator.task.ts                  # rename, vérification du type d'activité, pré-filtre en lot, agrégation outcomes, rapport global
    │   ├── client-proposal.task.ts               # délègue à process-client ; rename
    │   └── backtest-client.task.ts               # rename + eligibilityCheck: false
    ├── reports/
    │   ├── types.ts                              # - QuoteCreationResult ; + outcome, statistiques activités
    │   ├── statistics.ts                         # activitiesCreated, leadsCreated, clientsSkipped, clientsFailed
    │   ├── global-report.ts                      # mode + 3 listes (FR-015) + erreurs, puis section compacte « Aucun produit suggéré »
    │   ├── client-report-json.ts / client-report-md.ts / data-preparation.ts  # phase 3 = activité
    └── routes/
        ├── orchestrator-task.ts, client-task.ts  # rename (défaut true)

docs/
├── features/suggestion-activity.md               # remplace proposal-generation.md
├── tasks/orchestrator.md, tasks/client-proposal.md, infrastructure/odoo.md, README.md, ARCHITECTURE.md
└── (README racine)                               # « devis » → « activité »

```

**Structure Decision**: dépôt unique avec deux composants indépendants. `odoo/` regroupe le module
(versionné, testable seul dans Docker) et l'outillage local ; le backend garde sa structure par features.
Le module est autonome (copiable tel quel dans le dépôt relié à Odoo.sh si celui-ci n'est pas ce dépôt,
voir research R16). Le dossier de données locales est `odoo/dev/` ; ni lui ni `odoo/addons/*/tests/` ne sont ignorés par git
(`*test*` et `scripts/` ne sont ignorés que dans `backend/`, vérifié par `git check-ignore`).

## Décisions de conception (résumé)

Détail et alternatives dans [research.md](./research.md).

1. **Source de vérité de l'anti-doublon dans Odoo** : activité ouverte = `mail.activity` actif du type sur
   une opportunité du client ou de ses contacts ; dernière relance = `mail.message` le plus récent portant
   `mail_activity_type_id` = notre type sur ces opportunités (Odoo le pose au passage en fait ; notre module
   le pose à la disparition). Pas de base backend.
2. **Type d'activité `keep_done`, réservé à `crm.lead`** : les activités faites restent visibles au vendeur,
   et le type ne peut pas être posé sur un autre modèle, ce qui borne les recherches du backend.
3. **Fermeture immédiate** : surcharge de `sale.order.create` ; `action_feedback("Devis S… créé …")` sur les
   activités ouvertes du type dont l'opportunité a le même `commercial_partner_id` que le devis et une
   société égale à celle du devis, sans exception pour les opportunités sans société (H1, tranchée).
4. **Trace de disparition** : surcharge de `mail.activity.unlink` ; pour toute activité du type encore
   active, message sur le chatter de l'opportunité avec `mail_activity_type_id` et `subtype mail.mt_activities`
   avant suppression. Couvre la suppression manuelle et « opportunité marquée perdue » (archivage → Odoo
   supprime les activités).
5. **Éligibilité en lot dans l'orchestrateur, avant l'IA, puis revérifiée dans la tâche client avant
   l'écriture** : le pré-filtre lit en quelques requêtes (`in` sur tous les clients) vendeurs, opportunités,
   activités ouvertes et traces récentes, applique `decideEligibility` à chaque client, et ne déclenche une
   tâche que pour les éligibles ; les écartés entrent directement dans le compte rendu. La tâche client
   refait la décision complète, client par client, juste avant d'écrire (une tâche lancée seule par la
   route reste donc protégée). Ordre des contrôles = vendeur → vendeur actif → activité ouverte → relance
   < 21 j → (IA) → produits suggérés. Lecture seule en mode test.
6. **Création via `mail.activity.create`** (avec `res_model_id` résolu une fois) plutôt que
   `activity_schedule` : cette dernière retourne un recordset non sérialisable en XML-RPC.
7. **Identifiant du type d'activité** : dans `auto-proposal.ts` (valeur prod relevée après installation,
   en lecture seule), surcharge `ODOO_SUGGESTION_ACTIVITY_TYPE_ID` pour local/staging, contrôle
   d'existence et de nom au début de chaque lancement (abandon propre sinon).
8. **Backtest** : `eligibilityCheck: false` pour que les prédictions historiques ne soient pas écartées
   par les règles de relance.
9. **Outillage** : ajout de `vitest`, correction de `tsconfig.json` ; les 199 erreurs
   TypeScript préexistantes (optimisation, backtest) ne sont pas dans le périmètre ; règle = aucune erreur
   nouvelle dans les fichiers touchés.
10. **Compte dédié « Suggestions automatiques »** : créé par le module, utilisé par le backend ; la
    notification standard d'Odoo au vendeur est conservée et porte ce nom. Repli OdooBot noté (R18).
11. **Paniers e-shop** : créés par `sale.order.create` comme tout devis, ils ferment l'activité, même
    abandonnés (R19). Aucun traitement particulier, un test le documente.
12. **Compte rendu** : ordre des sections = activités créées, opportunités créées, clients écartés (hors
    « aucun produit suggéré »), erreurs, puis section compacte « Aucun produit suggéré (N) ». Les sections
    existantes (exemples détaillés, tableau des clients) ne gardent que les clients passés par l'IA avec au
    moins un produit suggéré.

## Hypothèses à confirmer par l'utilisateur (non bloquantes)

- **H1** (tranchée le 30/09/2026) : les opportunités sans société sont ignorées. Le backend ne pose
  l'activité que sur des opportunités FOODPRINT, et le hook ne ferme que si `lead.company_id ==
  order.company_id`. Aucune opportunité ouverte sans société en prod au 30/09/2026.
- **H2** : la trace de disparition est un message de chatter sur l'opportunité ; si l'opportunité elle-même
  est supprimée (et non archivée), la trace disparaît avec elle et le client redevient éligible au lancement
  suivant. Jugé acceptable (suppression d'opportunité rare, action volontaire).
- **H3** : « jour du lancement » = date d'exécution en Europe/Paris ; le délai de 21 jours se compte en
  dates calendaires sur cette base (research R6).

## Complexity Tracking

Aucune violation de la constitution à justifier.

## Post-design Constitution Check

Réévaluation après Phase 1 (data-model, contrats, quickstart) : les cinq principes restent respectés. Le
seul point de vigilance est le principe I sur l'identifiant du type d'activité : sa valeur prod ne peut
être connue qu'après l'installation du module en prod ; le plan impose de la relever en lecture seule et
de la vérifier au démarrage de chaque lancement plutôt que de la deviner. Le déploiement du backend
attend cette valeur (quickstart, scénario E).
