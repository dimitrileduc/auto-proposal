# Feature Specification: Activité « Suggestion commande » à la place des devis automatiques

**Feature Branch**: `001-activite-suggestion-commande`

**Created**: 2026-09-30

**Status**: Draft

**Input**: User description: "Remplacer les devis brouillons générés par l'auto-proposal par une activité CRM qui rappelle au vendeur de relancer ses clients inactifs. Problème : ces devis ne sont pas utilisés et encombrent les ventes. La réunion avec Moutarderie a conclu que le rappel est utile, mais pas sous forme de devis. US1 : en tant que vendeur, je reçois pour chaque client inactif qui a des produits suggérés une activité « Suggestion commande %CLIENT% ». Elle m'est assignée et posée sur la plus ancienne opportunité ouverte du client. Si le client n'a aucune opportunité, on en crée une. Les clients qui portent l'étiquette « Exclude Autoproposal » ou qui n'ont pas de vendeur n'en reçoivent pas. US2 : en tant que vendeur, la description me donne la date de la dernière commande du client, puis les produits suggérés en deux listes (habituels, optionnels). Chaque liste commence par une phrase qui l'explique. Chaque produit indique sa quantité suggérée et la date de sa dernière commande. US3 : en tant que vendeur, l'activité passe en fait toute seule dès qu'un devis est créé pour ce client. US4 : en tant que vendeur, je ne reçois jamais de nouvelle activité tant qu'une activité est ouverte, ni moins de 3 semaines après la dernière passée en fait. US5 : en tant que responsable, le compte rendu de chaque lancement indique les activités créées, les opportunités créées et les clients écartés, avec la raison. Réussi quand : plus aucun devis automatique n'est créé, un devis créé pour un client ferme son activité sans action du vendeur, et le fonctionnement est validé sur une copie des données réelles avant la mise en service. Ne changent pas : la détection des clients inactifs, le calcul des produits et quantités suggérés, la fréquence des lancements. Hors périmètre : le nettoyage des devis automatiques déjà existants."

## Contexte métier

- Chaque vendredi à 7 h, l'auto-proposal repère les clients inactifs de FOODPRINT SRL : des sociétés clientes, non archivées, sans aucune commande ni devis depuis 30 jours, hors étiquette « Exclude-Auto-Proposal ». Pour chacun, il calcule les produits à recommander et leurs quantités, puis crée un devis brouillon. Les produits sont répartis en **habituels** (lignes du devis) et **optionnels** (produits optionnels du devis).
- Relevé en prod le 30/09/2026 (lecture seule) : **246 devis automatiques en brouillon**, aucun confirmé. Sur les 8 derniers lancements, entre 3 et 46 devis ont été créés par lancement (25 le 25/09).
- Chaque lancement analyse environ 1 700 clients inactifs (1 746 dans le compte rendu du 11/01/2026). Seuls quelques dizaines ont des produits suggérés ; les autres n'ont rien à proposer.
- Les clients de FOODPRINT commandent beaucoup via l'e-shop (foodprint.bio) : depuis le 01/06/2026, 827 commandes e-shop de clients sociétés (358 sociétés), dont 798 confirmées et 29 restées en brouillon ou envoyées. Relevé en lecture seule le 30/09/2026.
- Aujourd'hui, le devis automatique sert aussi de frein : comme la détection compte tout devis, un client qui vient d'en recevoir un n'est plus inactif pendant 30 jours. Sans devis, ce frein disparaît : un même client inactif serait signalé chaque vendredi. La règle anti-doublon de l'US4 le remplace.
- Le CRM est très utilisé chez FOODPRINT : 1 073 opportunités ouvertes au 30/09. Parmi les 25 clients du lancement du 25/09, 13 avaient une opportunité ouverte et 12 n'en avaient aucune.
- 136 des 1 668 sociétés clientes (hors étiquette d'exclusion) n'ont pas de vendeur. 118 portent l'étiquette « Exclude-Auto-Proposal ».
- L'Odoo de la cliente (Odoo 17.0 Enterprise sur Odoo.sh) est géré par nous. Tout ce qui demande un changement côté Odoo est livré par un module versionné (constitution, principe I).

## Clarifications

### Session 2026-09-30

- Q: Quand un devis est créé pour un client qui a une activité « Suggestion commande » ouverte, qui la passe en fait, et dans quel délai ? → A: Une règle dans l'Odoo, livrée par notre module, la passe en fait immédiatement à la création du devis.
- Q: Si une activité « Suggestion commande » est supprimée, ou disparaît parce que son opportunité est marquée perdue, le client peut-il en recevoir une nouvelle dès le vendredi suivant ? → A: Non. Elle compte comme passée en fait à la date de sa disparition, et le délai de 3 semaines s'applique.
- Q: Comment vérifie-t-on que le calcul des produits et quantités n'a pas changé, alors que l'IA peut varier d'un lancement à l'autre ? → A: La liste des clients inactifs est identique à la version actuelle, et la partie qui calcule les suggestions n'est pas modifiée.
- Q: Faut-il arrêter la création de devis du vendredi dès maintenant, avant que les activités soient en service ? → A: Non. Les lancements continuent de créer des devis jusqu'à la mise en service.
- Q: Le vendeur reçoit-il une notification quand une activité lui est assignée, et au nom de qui ? → A: Oui, la notification standard d'Odoo, au nom d'un compte dédié « Suggestions automatiques » (et non d'une personne).
- Q: Un panier créé sur l'e-shop ferme-t-il l'activité, même s'il est abandonné ? → A: Oui, c'est un devis comme un autre.
- Q: Comment présenter les nombreux clients écartés pour « aucun produit suggéré » dans le compte rendu ? → A: Tous listés, mais dans une section compacte en fin de compte rendu, après les activités créées, les autres écartés et les erreurs.
- Q: Une opportunité sans société compte-t-elle pour poser ou fermer l'activité ? → A: Non. Seules les opportunités FOODPRINT portent l'activité, et seul un devis de la même société la ferme.
- Q: Que faire d'un client dont le vendeur n'a pas accès à FOODPRINT ? → A: L'écarter avec la raison « vendeur sans accès à FOODPRINT » ; la cliente réassigne le vendeur. Rien n'est changé dans Odoo.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Recevoir une activité de relance au lieu d'un devis (Priority: P1)

En tant que vendeur, je reçois pour chaque client inactif qui a des produits suggérés une activité « Suggestion commande <nom du client> ». Elle m'est assignée et posée sur la plus ancienne opportunité ouverte du client ; si le client n'a aucune opportunité ouverte, une opportunité est créée pour la porter. Les clients qui portent l'étiquette « Exclude-Auto-Proposal » ou qui n'ont pas de vendeur n'en reçoivent pas. Plus aucun devis automatique n'est créé.

**Why this priority**: c'est le changement demandé par la cliente. Il supprime les devis inutilisés tout en gardant le rappel jugé utile en réunion.

**Independent Test**: sur une copie de la prod, un lancement réel crée une activité par client inactif éligible, sur la bonne opportunité et au bon vendeur, et aucun devis.

**Acceptance Scenarios**:

1. **Given** un client inactif avec des produits suggérés, un vendeur, et deux opportunités ouvertes (créées en mars et en juin), **When** le lancement s'exécute, **Then** une activité « Suggestion commande <client> » est posée sur l'opportunité de mars et assignée au vendeur du client.
2. **Given** un client inactif avec des produits suggérés et un vendeur, mais sans opportunité ouverte (aucune, ou seulement gagnées ou perdues), **When** le lancement s'exécute, **Then** une opportunité est créée pour ce client et l'activité y est posée.
3. **Given** un client inactif sans vendeur, **When** le lancement s'exécute, **Then** aucune activité ni opportunité n'est créée et le client est écarté avec la raison « pas de vendeur ».
4. **Given** un client portant l'étiquette « Exclude-Auto-Proposal », **When** le lancement s'exécute, **Then** il ne reçoit rien.
5. **Given** un client inactif sans aucun produit suggéré, **When** le lancement s'exécute, **Then** il ne reçoit rien et il est écarté avec la raison « aucun produit suggéré ».
6. **Given** n'importe quel lancement réel, **When** il se termine, **Then** aucun devis n'a été créé.

---

### User Story 2 - Lire dans l'activité ce qu'il faut proposer (Priority: P2)

En tant que vendeur, la description de l'activité me donne la date de la dernière commande du client, puis les produits suggérés en deux listes (habituels, optionnels). Chaque liste commence par une phrase qui l'explique. Chaque produit indique sa quantité suggérée et la date de sa dernière commande.

**Why this priority**: c'est ce qui rend le rappel exploitable sans rouvrir l'historique du client. Mais l'activité seule (US1) a déjà une valeur de rappel.

**Independent Test**: ouvrir une activité créée sur la copie et vérifier, pour ce client, la date de dernière commande et chaque produit (quantité, date) par rapport à l'historique de ses commandes.

**Acceptance Scenarios**:

1. **Given** un client dont la dernière commande date du 12/08/2026, avec 3 produits habituels et 1 optionnel suggérés, **When** l'activité est créée, **Then** la description affiche « Dernière commande : 12/08/2026 », puis la phrase et la liste des 3 produits habituels, puis la phrase et la liste du produit optionnel.
2. **Given** un produit suggéré à 24 unités dont la dernière commande date du 03/07/2026, **When** l'activité est créée, **Then** sa ligne indique le produit, « 24 » avec son unité de vente, et « dernière commande : 03/07/2026 ».
3. **Given** un client sans produit optionnel suggéré, **When** l'activité est créée, **Then** la liste « optionnels » et sa phrase n'apparaissent pas.

---

### User Story 3 - L'activité se ferme toute seule quand un devis est fait (Priority: P2)

En tant que vendeur, l'activité passe en fait toute seule dès qu'un devis est créé pour ce client, sans que j'aie à m'en occuper.

**Why this priority**: sans cela, les vendeurs accumulent des activités déjà traitées. C'est un critère de réussite explicite.

**Independent Test**: sur la copie, créer un devis pour un client qui a une activité ouverte et constater qu'elle passe en fait sans autre action.

**Acceptance Scenarios**:

1. **Given** un client avec une activité « Suggestion commande » ouverte, **When** n'importe quel utilisateur crée un devis pour ce client (ou l'un de ses contacts) chez FOODPRINT, **Then** l'activité passe en fait sans action du vendeur, avec une trace qui cite le devis.
2. **Given** un client avec une activité ouverte, **When** un devis est créé pour lui dans une autre société (par exemple BRING BACK), **Then** l'activité reste ouverte.
3. **Given** une activité passée en fait par la création d'un devis, **When** ce devis est ensuite annulé ou supprimé, **Then** l'activité reste passée en fait.

---

### User Story 4 - Jamais de doublon, et un délai après chaque relance (Priority: P1)

En tant que vendeur, je ne reçois jamais de nouvelle activité pour un client tant qu'une activité « Suggestion commande » est ouverte pour lui, ni moins de 3 semaines après que la dernière est passée en fait.

**Why this priority**: sans devis, un client inactif est détecté chaque vendredi (voir Contexte métier). Sans cette règle, les vendeurs recevraient une nouvelle activité par client et par semaine. Cette règle bloque la mise en service.

**Independent Test**: sur la copie, relancer deux fois de suite ; puis simuler une activité passée en fait à différentes dates et vérifier qui est relancé.

**Acceptance Scenarios**:

1. **Given** un client avec une activité ouverte (même en retard, même réassignée à un collègue), **When** un lancement s'exécute, **Then** aucune nouvelle activité n'est créée et le client est écarté avec la raison « activité déjà ouverte ».
2. **Given** un client dont la dernière activité est passée en fait le vendredi 02/10, toujours inactif, **When** le lancement du vendredi 16/10 s'exécute, **Then** il est écarté avec la raison « relancé il y a moins de 3 semaines (02/10) ».
3. **Given** le même client, **When** le lancement du vendredi 23/10 s'exécute (21 jours après), **Then** il peut recevoir une nouvelle activité.
4. **Given** un lancement déjà exécuté, **When** on le relance le même jour, **Then** il ne crée aucune activité ni opportunité supplémentaire.

---

### User Story 5 - Un compte rendu de chaque lancement (Priority: P3)

En tant que responsable, le compte rendu de chaque lancement indique les activités créées, les opportunités créées et les clients écartés, avec la raison.

**Why this priority**: il permet de contrôler le fonctionnement et de répondre à un vendeur qui demande pourquoi il a été relancé ou non. Il n'est pas nécessaire au vendeur pour travailler.

**Independent Test**: après un lancement sur la copie, comparer le compte rendu avec ce qui a été créé dans Odoo.

**Acceptance Scenarios**:

1. **Given** un lancement terminé, **When** le responsable lit le compte rendu, **Then** il y trouve la liste des activités créées (client, vendeur, opportunité, et si l'opportunité est nouvelle ou existante), la liste des opportunités créées et la liste des clients écartés avec leur raison.
2. **Given** un client en erreur pendant le lancement, **When** le responsable lit le compte rendu, **Then** le client figure en erreur avec le message, et les autres clients ont bien été traités.
3. **Given** un lancement en mode test, **When** il se termine, **Then** rien n'est écrit dans Odoo et le compte rendu indique ce qui aurait été créé.

---

### Edge Cases

- **Opportunités des contacts** : une opportunité ouverte liée à un contact de la société cliente compte comme une opportunité du client.
- **Opportunité d'un autre vendeur ou d'une autre équipe** : l'activité est posée sur la plus ancienne opportunité ouverte du client, quel que soit son responsable. Elle est assignée au vendeur de la fiche client.
- **Pistes** (non converties en opportunité) : ignorées. Si le client n'a qu'une piste, une opportunité est créée.
- **Opportunités d'une autre société ou sans société** : ignorées. Seules comptent les opportunités de FOODPRINT. Au 30/09/2026, aucune opportunité ouverte n'est sans société en prod.
- **Vendeur archivé** (utilisateur désactivé) : traité comme « pas de vendeur », avec la raison « vendeur inactif ».
- **Vendeur sans accès à FOODPRINT** : les fiches clients sont communes aux sociétés, et le vendeur de la fiche peut travailler pour une autre société (107 clients au 30/09/2026). Le client est écarté avec la raison « vendeur sans accès à FOODPRINT » ; la cliente réassigne le vendeur si besoin.
- **Fermeture en échec** : si le passage en fait de l'activité échoue à la création d'un devis, le devis est créé quand même et l'activité reste ouverte. De même, si la trace de disparition échoue, l'activité est supprimée (et l'opportunité marquée perdue) quand même.
- **Panier e-shop commencé sans connexion** : créé au nom du visiteur public puis rattaché au client à la connexion ou au paiement ; ce rattachement ferme l'activité comme une création de devis.
- **Activité supprimée par le vendeur, ou disparue** (par exemple quand l'opportunité est marquée perdue, ce qui supprime ses activités ouvertes) : traitée comme passée en fait à la date de sa disparition. Le délai de 3 semaines s'applique.
- **Activité passée en fait à la main** par le vendeur (client appelé, pas de commande) : le délai de 3 semaines s'applique. Ensuite, si le client est toujours inactif, il peut être relancé.
- **Activité ouverte depuis longtemps** : elle n'est ni mise à jour ni remplacée, même si les suggestions ont changé.
- **Clients ayant déjà un devis automatique récent** (par exemple du 25/09) : la détection, inchangée, les considère comme actifs pendant 30 jours après ce devis. Ils ne recevront pas d'activité avant cette date.
- **Devis automatiques existants** : ils ne ferment pas une activité, puisque seul un devis créé après l'activité compte. Ils ne sont ni modifiés ni supprimés (hors périmètre).
- **Panier e-shop** : un panier créé sur l'e-shop est un devis. Il ferme l'activité, même si le client l'abandonne ensuite (environ 3 % des commandes e-shop de clients sociétés restent en brouillon). C'est cohérent avec la détection, qui compte déjà ce panier comme de l'activité pendant 30 jours.
- **Client passé actif entre deux lancements** : son activité ouverte reste ouverte jusqu'à la création d'un devis ou une action du vendeur. En pratique, un client qui commande a un devis, qui ferme l'activité.
- **Erreur sur un client** (opportunité ou activité non créée) : le client est noté en erreur. Les autres clients sont traités normalement. Une opportunité créée sans son activité est signalée dans le compte rendu.

## Requirements *(mandatory)*

### Functional Requirements

**Création (US1)**

- **FR-001**: Le système NE DOIT PLUS créer de devis, quel que soit le lancement.
- **FR-002**: Pour chaque client inactif (détection inchangée) qui a au moins un produit suggéré (calcul inchangé), qui a un vendeur actif et qui n'est pas bloqué par FR-012 ou FR-013, le système DOIT créer exactement une activité.
- **FR-003**: L'activité DOIT être intitulée « Suggestion commande <nom du client> », être du type d'activité « Suggestion commande », avoir pour échéance le jour du lancement et être assignée au vendeur de la fiche client.
- **FR-004**: L'activité DOIT être posée sur la plus ancienne opportunité ouverte du client (date de création la plus ancienne). Une opportunité est ouverte si elle n'est ni gagnée ni perdue ou archivée. Comptent les opportunités du client et de ses contacts, chez FOODPRINT uniquement ; les pistes et les opportunités sans société ne comptent pas.
- **FR-005**: Si le client n'a aucune opportunité ouverte, le système DOIT en créer une pour lui chez FOODPRINT, intitulée « Suggestion commande <nom du client> » et attribuée à son vendeur, puis y poser l'activité.
- **FR-006**: Les clients sans vendeur, dont le vendeur est un utilisateur archivé, ou dont le vendeur n'a pas accès à FOODPRINT dans Odoo, NE DOIVENT recevoir ni activité ni opportunité. Les clients portant l'étiquette « Exclude-Auto-Proposal » restent exclus par la détection, qui ne change pas.

**Description (US2)**

- **FR-007**: La description de l'activité DOIT commencer par la date de la dernière commande du client (JJ/MM/AAAA).
- **FR-008**: Elle DOIT ensuite présenter les produits suggérés en deux listes, « habituels » puis « optionnels ». La répartition est celle qui sépare aujourd'hui les lignes du devis de ses produits optionnels.
- **FR-009**: Chaque liste DOIT commencer par une phrase qui l'explique. Une liste vide est omise, sa phrase avec.
- **FR-010**: Chaque produit DOIT indiquer son nom, sa quantité suggérée avec son unité de vente, et la date de sa dernière commande par le client.

**Fermeture (US3)**

- **FR-011**: Quand un devis est créé chez FOODPRINT pour un client (ou l'un de ses contacts) qui a une activité « Suggestion commande » ouverte, cette activité DOIT passer en fait immédiatement, au moment de la création du devis et sans action du vendeur, avec une trace qui cite le devis. Seuls les devis créés après l'activité comptent.

**Anti-doublon (US4)**

- **FR-012**: Le système NE DOIT PAS créer d'activité pour un client qui a déjà une activité « Suggestion commande » ouverte, quels que soient son opportunité, son responsable ou son échéance.
- **FR-013**: Le système NE DOIT PAS créer d'activité pour un client dont la dernière activité « Suggestion commande » est passée en fait il y a moins de 21 jours calendaires, comptés de date à date. Exemple : passée en fait le 02/10, le client est de nouveau éligible à partir du 23/10.
- **FR-014**: Une activité « Suggestion commande » supprimée ou disparue sans être passée en fait DOIT être traitée comme passée en fait à la date de sa disparition : le délai de FR-013 s'applique.

**Compte rendu (US5)**

- **FR-015**: Chaque lancement DOIT produire un compte rendu, par le même canal qu'aujourd'hui, qui liste :
  - les activités créées (client, vendeur, opportunité, et si l'opportunité est nouvelle ou existante) ;
  - les opportunités créées ;
  - les clients écartés, chacun avec sa raison.
  Les clients écartés pour « aucun produit suggéré », de loin les plus nombreux, sont regroupés dans une section compacte en fin de compte rendu, après les erreurs.
- **FR-016**: Les raisons d'écart DOIVENT venir d'une liste fermée : « pas de vendeur », « vendeur inactif », « vendeur sans accès à FOODPRINT », « aucun produit suggéré », « activité déjà ouverte », « relancé il y a moins de 3 semaines (date) », « erreur (message) ».
- **FR-017**: Chaque client inactif analysé DOIT apparaître dans une seule catégorie : activité créée, écarté ou en erreur. Le compte rendu DOIT indiquer si le lancement était en mode test ou réel.

**Inchangés et garde-fous**

- **FR-018**: La détection des clients inactifs, le calcul des produits et quantités suggérés, et la fréquence des lancements (vendredi à 7 h) NE DOIVENT PAS changer.
- **FR-019**: En mode test, un lancement NE DOIT rien écrire dans Odoo (ni activité, ni opportunité). Son compte rendu DOIT indiquer ce qui aurait été créé.
- **FR-020**: Les devis automatiques déjà existants NE DOIVENT être ni modifiés ni supprimés.

### Key Entities

- **Client inactif** : société cliente de FOODPRINT repérée par la détection existante. Elle a un vendeur (ou non), des contacts et un historique de commandes.
- **Produit suggéré** : produit, quantité avec unité de vente, catégorie (habituel ou optionnel), date de sa dernière commande par le client. Il est issu du calcul existant.
- **Opportunité** : opportunité CRM du client ou de l'un de ses contacts, ouverte, gagnée ou perdue. Elle porte l'activité ; elle est créée par le système si aucune n'est ouverte.
- **Activité « Suggestion commande »** : rappel assigné au vendeur, posé sur une opportunité, ouvert ou passé en fait (avec sa date). Une seule peut être ouverte par client.
- **Compte rendu de lancement** : date, mode (test ou réel), activités créées, opportunités créées, clients écartés avec leur raison, erreurs.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: À partir de la mise en service, 0 devis automatique créé, vérifié sur les 4 premiers lancements.
- **SC-002**: Sur la copie de prod, 100 % des activités testées (au moins 5 clients, dont un devis créé depuis l'opportunité et un devis créé depuis les Ventes) passent en fait sans action du vendeur, dès la création du devis.
- **SC-003**: Sur la copie de prod, lors d'un lancement complet, chaque client listé « activité créée » a exactement une activité ouverte, et chaque client écarté n'en a aucune. Les chiffres du compte rendu correspondent à ce qu'on constate dans Odoo, sans aucun écart.
- **SC-004**: Un second lancement exécuté juste après le premier crée 0 activité et 0 opportunité.
- **SC-005**: Pour les mêmes données et la même date, la liste des clients inactifs est identique à celle de la version actuelle (comparaison en mode test sur la copie), et la partie qui calcule les produits et quantités suggérés n'a subi aucune modification. Les quantités elles-mêmes peuvent varier d'un lancement à l'autre, car l'IA n'est pas déterministe.
- **SC-006**: Sur les 8 semaines qui suivent la mise en service, aucun client n'a eu deux activités « Suggestion commande » ouvertes en même temps. Aucun n'en a reçu une nouvelle moins de 21 jours après le passage en fait de la précédente.
- **SC-007**: Sur un échantillon de 10 activités de la copie, 100 % contiennent la date de dernière commande, les listes non vides avec leur phrase, et pour chaque produit sa quantité et la date de sa dernière commande, conformes à l'historique du client.

## Assumptions

- **Vendeur** : c'est le vendeur indiqué sur la fiche du client (société), et non celui des contacts ou des opportunités.
- **Notification et auteur** : le vendeur reçoit la notification standard d'Odoo à la création de l'activité. Le système agit dans Odoo sous un compte dédié « Suggestions automatiques » : c'est ce nom qui apparaît comme auteur des activités, des opportunités créées et des notifications, et non celui d'une personne.
- **Phrases d'introduction proposées** (à valider par la cliente) :
  - habituels : « Produits que ce client commande régulièrement et qu'il devrait bientôt recommander : » ;
  - optionnels : « Produits commandés plus rarement par ce client, à lui proposer en complément : ».
- **Dernière commande** : commande confirmée. Un devis non confirmé ne compte pas. La date de dernière commande d'un produit vient du même historique que celui utilisé pour la suggestion.
- **Opportunité créée** : elle suit l'équipe commerciale du client, ou à défaut celle du vendeur, à condition que cette équipe soit de FOODPRINT ou sans société (sinon, pas d'équipe : 304 clients ont une équipe d'une autre société au 30/09/2026), et démarre à la première étape du pipeline de l'équipe. Aucun montant attendu n'est renseigné.
- **Étiquette « Exclude-Auto-Proposal »** : l'exclusion reste faite par la détection. Ces clients n'apparaissent donc pas dans la liste des écartés du compte rendu.
- **Compte rendu** : c'est le compte rendu de lancement existant, enrichi. Il garde le même canal et les mêmes lecteurs qu'aujourd'hui.
- **Validation** : le développement et les tests commencent en local, sans attendre l'accès Odoo.sh. La validation (SC-002 à SC-005, SC-007) se fait ensuite sur une copie récente de la prod, une branche staging Odoo.sh (constitution, principe II).
- **Module Odoo** : le type d'activité « Suggestion commande » et la fermeture immédiate (FR-011) sont livrés par notre module Odoo, déployé via Odoo.sh (constitution, principe I).
- **Transition** : le lancement du vendredi 02/10/2026 et les suivants continuent de créer des devis tant que ce changement n'est pas en service. Ils ne sont ni suspendus ni passés en mode test en attendant (décision du 30/09/2026).
