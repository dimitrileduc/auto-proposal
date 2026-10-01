<!--
Sync Impact Report
- Version : 1.0.0 → 2.0.0 (redéfinition incompatible du principe I)
- Principes modifiés :
  - I. « Odoo client intouchable sans accord » → « Odoo modifié uniquement par module versionné » :
    l'Odoo est désormais géré par nous ; les changements côté Odoo passent par un module versionné.
  - II. Copie de prod avant mise en service : la copie est une branche staging Odoo.sh ; le
    développement et les tests commencent en local sans attendre l'accès Odoo.sh.
- Principes ajoutés : aucun
- Sections modifiées : Contraintes techniques, Workflow de développement, Gouvernance
- Sections supprimées : aucune
- Modèles dépendants (lus à l'exécution, non modifiés) :
  - .specify/templates/plan-template.md ✅ compatible (la « Constitution Check » vérifie I à V)
  - .specify/templates/spec-template.md ✅ compatible
  - .specify/templates/tasks-template.md ✅ compatible (validation sur staging = tâche explicite)
- Spec touchée : specs/001-activite-suggestion-commande/spec.md (références au principe I mises à jour)
- TODO différés : aucun
-->

# Constitution Auto-Proposal

## Périmètre

Backend auto-proposal de la Conserverie et Moutarderie Belge : détection des clients inactifs,
calcul des produits et quantités suggérés, et écriture du résultat dans l'Odoo de la cliente.
La société analysée est FOODPRINT SRL (société n° 3 dans Odoo).

## Principes fondamentaux

### I. Odoo modifié uniquement par module versionné (NON NÉGOCIABLE)

- L'Odoo de la Moutarderie est hébergé sur Odoo.sh (17.0 Enterprise, https://collectif.odoo.com)
  et géré par nous.
- Toute modification de cet Odoo (type d'activité, règle automatique, action serveur, champ, vue,
  réglage) DOIT être livrée par un module versionné, testé en local puis sur une branche staging
  Odoo.sh avant la prod. Aucun réglage à la main en prod.
- Le backend auto-proposal agit via l'API : il écrit des données métier (activités, opportunités,
  etc.) et NE DOIT PAS modifier la configuration d'Odoo de lui-même.
- Une fonctionnalité qui a besoin d'une modification côté Odoo DOIT la décrire dans sa spec et
  dans son plan : ce qui change, et dans quel module.

**Pourquoi** : une modification versionnée se relit, se teste et se redéploie ; un réglage fait à
la main en prod ne laisse ni trace ni moyen de le reproduire.

### II. Copie de prod avant mise en service

- Tout changement qui modifie ce qui est écrit dans Odoo DOIT être validé par un lancement complet
  sur une copie de la prod (branche staging Odoo.sh) avant sa mise en service.
- Le développement et les tests commencent en local (Odoo 17 via Docker), sans attendre l'accès
  Odoo.sh ; la validation sur données réelles se fait ensuite sur staging.
- Les constats de validation (copie utilisée, date, résultats) DOIVENT être consignés dans le
  dossier de la fonctionnalité.
- Sans validation, le changement n'est pas mis en service.

**Pourquoi** : l'Odoo local ne contient pas les vraies données ; seule une copie de la prod montre
le comportement réel sans toucher la prod.

### III. Mode test par défaut

- Un lancement, quelle que soit la façon dont il est déclenché, NE DOIT RIEN écrire dans Odoo
  par défaut. L'écriture exige une demande explicite dans le lancement.
- Seul le lancement planifié écrit en prod. Un lancement manuel qui écrit en prod est une
  exception décidée explicitement par l'utilisateur.
- Un lancement en mode test DEVRAIT produire le même compte rendu qu'un lancement réel, en
  indiquant ce qui aurait été créé.

**Pourquoi** : un essai ou un lancement mal paramétré ne doit jamais produire de données chez
la cliente.

### IV. Lecture seule pour vérifier

- Toute vérification en prod (enquête, contrôle d'un résultat, comptage, préparation d'une spec)
  DOIT se faire en lecture seule : recherche, lecture, comptage.
- Aucune donnée de prod NE DOIT être corrigée à la main, même pour réparer un effet du backend,
  sans l'accord de la cliente.

**Pourquoi** : la prod est l'outil de travail quotidien de la cliente ; une vérification ne doit
jamais la modifier.

### V. Traçabilité des lancements

- Chaque lancement DOIT produire un compte rendu qui liste ce qui a été créé dans Odoo (avec les
  références), ce qui a été écarté (avec la raison) et les erreurs.
- Chaque client analysé DOIT apparaître dans une seule catégorie : traité, écarté ou en erreur.
- Les raisons d'écart DOIVENT venir d'une liste fermée, lisible par une personne non technique.
- Le compte rendu DOIT indiquer si le lancement était en mode test ou réel.

**Pourquoi** : sans compte rendu, ni l'équipe ni la cliente ne peuvent expliquer pourquoi un
client a été relancé ou non.

## Contraintes techniques

- Backend Node.js + TypeScript ; tâches Trigger.dev v4 (projet `proj_yebxbxzoixxmavgyyjlk`) ;
  le backend accède à Odoo uniquement par l'API.
- Côté Odoo : modules compatibles Odoo 17.0, déployés via Odoo.sh (principe I).
- Multi-société : toute lecture et toute écriture DOIVENT être filtrées sur la société analysée
  (FOODPRINT SRL, `defaultCompanyId` = 3).
- Lancement planifié : chaque vendredi à 7 h (Europe/Paris). Changer cette fréquence relève
  d'une décision de la cliente.
- Les identifiants Odoo utilisés (étiquettes, types, étapes, sociétés) sont centralisés dans
  `backend/src/config/auto-proposal.ts` et DOIVENT être vérifiés en prod, en lecture seule,
  avant usage.

## Workflow de développement

- Toute fonctionnalité suit Spec Kit : spec, clarification si besoin, plan, tâches, implémentation.
- Les specs sont rédigées en français et orientées métier.
- Chaque plan contient une vérification de conformité aux principes I à V.
- Développement et tests en local d'abord (II), puis validation sur staging.
- Mise en service : validation sur staging (II), accord de l'utilisateur, puis activation dans le
  lancement planifié.

## Gouvernance

- Cette constitution prime sur les autres pratiques du dépôt.
- Amendement : proposé par écrit, approuvé par l'utilisateur, avec un rapport d'impact en tête
  de ce fichier.
- Versionnage sémantique :
  - MAJOR : retrait ou redéfinition incompatible d'un principe ;
  - MINOR : ajout d'un principe ou d'une section, ou extension notable d'une règle ;
  - PATCH : clarification, formulation, coquille.
- Conformité : toute dérogation à un principe est justifiée dans le plan et approuvée par
  l'utilisateur avant l'implémentation. Le principe I n'admet aucune dérogation.
- Guidage au quotidien : `backend/CLAUDE.md` et `docs/`.

**Version** : 2.0.0 | **Ratifiée** : 2026-09-30 | **Dernière modification** : 2026-09-30
