# Quickstart : valider l'activité « Suggestion commande »

Guide de validation, du local à la mise en service. Contrats : [odoo-module.md](./contracts/odoo-module.md),
[odoo-api-calls.md](./contracts/odoo-api-calls.md), [trigger-payloads.md](./contracts/trigger-payloads.md).

## Prérequis

- Docker 29+ (vérifié : `docker --version`), Node 20+, pnpm 10.8, Python 3.9+ (pour `odoo/dev/seed_local.py`, stdlib uniquement).
- Clé OpenRouter dans `backend/.env` (les lancements complets appellent l'IA, inchangée).
- Compte Trigger.dev sur le projet `proj_yebxbxzoixxmavgyyjlk` (`npx trigger.dev login`).

## Scénario A : tests du module sur Odoo 17 local (Docker, sans Enterprise)

```bash
cd odoo
docker compose up -d db
# base jetable, module installé avec ses tests
docker compose run --rm odoo odoo -c /etc/odoo/odoo.conf -d test_suggestion \
  -i moutarderie_suggestion_commande --test-enable \
  --test-tags /moutarderie_suggestion_commande --stop-after-init
```

**Attendu** : journal se terminant par `0 failed, 0 error(s)` et les 14 tests du contrat listés en `OK`.
Vérifie US3 (fermeture, autre société, contact, annulation) et FR-014 (suppression, opportunité perdue,
pas de double trace).

## Scénario B : tests unitaires du backend

```bash
cd backend
pnpm install
pnpm test
```

**Attendu** : vitest vert, incluant :
- `eligibility.utils.test.ts` : ordre des raisons ; borne 21 jours (02/10 → bloqué le 16/10, éligible le 23/10) ;
- `prefilter.service.test.ts` : avec un client Odoo mocké, le pré-filtre émet un nombre fixe de lectures quel que
  soit le nombre de clients, rattache chaque opportunité, activité et trace au bon client, et ne renvoie en
  `eligible` que les clients sans raison d'écart ;
- `activity-note.utils.test.ts` : date de dernière commande en tête, listes dans l'ordre, liste vide omise avec sa
  phrase, quantité + unité, date par produit ; scission habituels/optionnels identique à l'ancienne règle ;
- orchestrateur : client écarté par le pré-filtre (sans vendeur, activité ouverte, relancé < 21 j) → aucune
  tâche client déclenchée, IA **non appelée**, client présent dans le compte rendu avec sa raison ;
- `process-client.service.test.ts` : activité apparue entre le pré-filtre et l'écriture → revérification, aucune
  écriture, `skipped` ; mode test → aucune écriture, `would_create` ; opportunité créée puis échec activité → `error` avec
  `leadCreatedId` ; relance → réutilise l'opportunité, aucun doublon ;
- `odoo-domains.test.ts` : chaque domaine contient le filtre société ; `company-filtering.test.ts` inchangé ;
- statistiques : `created + wouldCreate + skipped + failed = clientsAnalyzed` ; rapport global : la
  section « Aucun produit suggéré » est la dernière et n'a pas de tableau.

Type-check : `npx tsc --noEmit` ; le nombre d'erreurs par fichier touché doit être 0 (les 199 erreurs
préexistantes hors périmètre sont listées dans research R15).

## Scénario C : lancement complet contre l'Odoo local

1. Base de développement avec données :

```bash
cd odoo
docker compose up -d
docker compose run --rm odoo odoo -c /etc/odoo/odoo.conf -d moutarderie_local \
  -i crm,sale_management,moutarderie_suggestion_commande --without-demo=all --stop-after-init
python3 dev/seed_local.py --url http://localhost:8069 --db moutarderie_local   # affiche les ids créés
```

Si le port 8069 est déjà pris sur la machine : `ODOO_HTTP_PORT=8070 docker compose up -d`, puis utiliser
`http://localhost:8070` partout (seed et `ODOO_URL`).

`seed_local.py` affiche : `company_id` de la société analysée, id de l'étiquette d'exclusion, id du
type d'activité, et la liste des clients avec le résultat attendu pour chacun (activité sur l'opportunité
de mars, opportunité à créer, pas de vendeur, vendeur inactif, exclu, activité déjà ouverte, relancé il
y a 10 j, éligible car relancé il y a 25 j, sans produit).

2. Backend pointé sur le local (`backend/.env`) :

```
ODOO_URL=http://localhost:8069
ODOO_DB=moutarderie_local
ODOO_USERNAME=suggestions.auto
ODOO_PASSWORD=<clé API générée pour ce compte dans l'Odoo local>
# (utiliser le compte « Suggestions automatiques » dès le local, pour voir la notification sous ce nom)
ODOO_SUGGESTION_ACTIVITY_TYPE_ID=<id affiché par le seed>
OPENROUTER_API_KEY=...
TRIGGER_SECRET_KEY=...
```

3. Lancement en mode test puis réel :

```bash
cd backend && pnpm run trigger:dev          # terminal 1
cd backend && pnpm run dev                  # terminal 2
# mode test (défaut) : rien n'est écrit, le compte rendu dit ce qui serait créé
curl -X POST localhost:3000/orchestrator-task -H 'Content-Type: application/json' \
  -d '{"config":{"companyId":<id>,"excludedPartnerTagId":<id>}}'
# mode réel
curl -X POST localhost:3000/orchestrator-task -H 'Content-Type: application/json' \
  -d '{"config":{"companyId":<id>,"excludedPartnerTagId":<id>,"skipOdooWrite":false}}'
```

**Attendu** après le run réel (vérifier dans Odoo, CRM → Activités, et dans `reports-output/global-report-<date>.md`) :
- chaque client attendu « activité créée » a exactement une activité « Suggestion commande » ouverte, assignée à son vendeur, sur l'opportunité la plus ancienne, échéance = aujourd'hui ;
- le client sans opportunité a une opportunité « Suggestion commande <nom> » en société analysée, à la première étape, avec l'activité ;
- les clients écartés figurent avec le bon libellé ; le client exclu par étiquette n'apparaît pas ; aucun devis créé ;
- la description commence par « Dernière commande : JJ/MM/AAAA », puis les listes attendues.

4. Idempotence et fermeture (SC-004, US3, US4) :

```bash
# second lancement réel juste après : 0 activité, 0 opportunité créées, clients « activité déjà ouverte »
curl -X POST localhost:3000/orchestrator-task ... '{"config":{...,"skipOdooWrite":false}}'
```
- Dans Odoo, créer un devis (Ventes → Nouveau) pour un client avec activité ouverte → l'activité passe en fait immédiatement, message « Devis S… créé … » sur l'opportunité.
- Créer un devis dans l'autre société pour un client avec activité → elle reste ouverte.
- Dans la messagerie Odoo du vendeur : une notification « Suggestions automatiques » par activité créée.
- Marquer perdue l'opportunité d'un autre client → l'activité disparaît, message « supprimée sans être passée en fait » daté.
- Relancer : ces deux clients sont écartés « relancé il y a moins de 3 semaines (date du jour) ».

## Scénario D : validation sur une branche staging Odoo.sh (constitution II)

Prérequis : accès Odoo.sh ; branche staging créée depuis la prod (copie neutralisée) avec le module
installé (réglage « modules à installer » de la branche, research R16).

1. Relever en lecture seule l'id du type sur staging (`ir.model.data`, contrat module) → `ODOO_SUGGESTION_ACTIVITY_TYPE_ID` dans un `.env` staging du backend (`ODOO_URL` = URL de la branche, `ODOO_DB` = base staging). Générer une clé API pour le compte « Suggestions automatiques » sur staging (`ODOO_USERNAME`/`ODOO_PASSWORD`). Vérifier l'impact de licence de ce compte (R18) ; en cas de problème, basculer sur le repli OdooBot avant de continuer.
   Les e-mails étant coupés sur staging, contrôler les notifications dans la messagerie Odoo des vendeurs (ou les e-mails en file d'attente), pas dans leur boîte mail.
2. Lancement en mode test (`skipOdooWrite` absent) : comparer la liste des clients inactifs avec un lancement de la version actuelle à la même date (SC-005). **Même compte Odoo pour les deux lancements** (la version actuelle lit avec le compte d'une vendeuse, la nouvelle avec `suggestions.auto` : un écart de liste viendrait des droits, pas du code) ; noter le compte utilisé dans `validation-staging.md`. Sur staging, le lancement planifié ne peut pas écrire (environnement Trigger.dev ≠ production) : les lancements réels se font à la main avec `skipOdooWrite: false`, vérifier que `stock-replenishment/` n'a pas changé (`git diff main -- backend/src/features/stock-replenishment`).
3. Lancement en mode réel sur staging : contrôler SC-003 (chaque client « créé » a exactement une activité ouverte, chaque écarté aucune ; chiffres du compte rendu = Odoo), SC-007 (10 activités relues contre l'historique de commandes).
4. Second lancement immédiat : SC-004 (0 créé).
5. SC-002 : pour au moins 5 clients, créer un devis depuis l'opportunité puis depuis Ventes → 100 % des activités passent en fait sans action du vendeur.
6. Marquer une opportunité perdue, relancer : le client est écarté avec la date.
7. Consigner dans `specs/001-activite-suggestion-commande/validation-staging.md` : nom de la branche et de la base, date, id du type, chiffres du compte rendu, écarts constatés (attendu : aucun), captures ou ids des activités contrôlées.

## Scénario E : mise en service (module avant backend)

1. Module : fusion sur la branche de production Odoo.sh → installation en prod. Relever en lecture seule l'id du type en prod (`ir.model.data`) et le reporter dans `backend/src/config/auto-proposal.ts` (`activity.suggestionActivityTypeId`). Vérifier que le hook ne crée rien tant qu'aucune activité n'existe (aucun changement visible pour les vendeurs à ce stade).
2. Backend : générer la clé API du compte « Suggestions automatiques » en prod et remplacer `ODOO_USERNAME`/`ODOO_PASSWORD` dans les variables d'environnement prod de Trigger.dev, puis `pnpm test` et `npx trigger.dev deploy` depuis `backend/`. La tâche planifiée du vendredi passe alors `skipOdooWrite: false` : à partir du lancement suivant, plus aucun devis n'est créé (SC-001).
3. Suivi des 4 premiers lancements (SC-001) et des 8 premières semaines (SC-006) à partir des comptes rendus et d'une lecture seule dans Odoo (activités du type ouvertes par client).

Décision consignée : les lancements du 02/10/2026 et suivants continuent de créer des devis jusqu'à l'étape 2.
