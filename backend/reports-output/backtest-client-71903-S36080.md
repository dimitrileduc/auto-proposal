# Rapport Backtest - Client FOODPRINT SRL - FP

## Contexte

- **Client** : FOODPRINT SRL - FP (ID: 71903)
- **Commande réelle** : S36080
- **Date commande** : 2025-04-14 08:31:16
- **Date cutoff système** : 2025-04-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 12
- **Tokens**: 18,535 input + 15,012 output = 33,547 total
- **Coût**: $0.2808 (~28.08¢)
- **Coût par produit LLM**: $0.0234


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 7.0% | 43 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 13.0% | Score équilibré global |

<details>
<summary>Comment est calculée la Précision ?</summary>

**En simple** : Sur 10 produits prédits, combien sont vraiment commandés ?

**Calcul** : Précision = True Positives ÷ (True Positives + False Positives)

**Exemple** : Si le système prédit 10 produits et que 8 sont commandés → Précision = 80%

**Bon score** : > 80% (peu de fausses alertes)
</details>

<details>
<summary>Comment est calculé le Rappel ?</summary>

**En simple** : Sur 10 produits commandés, combien ont été détectés ?

**Calcul** : Rappel = True Positives ÷ (True Positives + False Negatives)

**Exemple** : Si le client commande 10 produits et que 7 sont détectés → Rappel = 70%

**Bon score** : > 80% (peu de besoins manqués)
</details>

<details>
<summary>Comment est calculé le F1-Score ?</summary>

**En simple** : Moyenne harmonique entre Précision et Rappel (score équilibré)

**Calcul** : F1 = 2 × (Précision × Rappel) ÷ (Précision + Rappel)

**Pourquoi ?** : On peut avoir 100% de précision mais 50% de rappel. Le F1 combine les deux.

**Bon score** : > 80% (système performant globalement)
</details>

### Niveau Quantité (Précision)

**⚠️ Important**: Ces métriques sont calculées **uniquement sur les True Positives** (produits correctement détectés).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

<details>
<summary>Qu'est-ce qu'un Exact Match vs Partial Match ?</summary>

**Exact Match (🎯)** : Quantité prédite = Quantité réelle (erreur = 0)
- Exemple : Système prédit 10, Client commande 10 → Exact Match

**Partial Match (✅)** : Quantité prédite ≠ Quantité réelle (erreur > 0)
- Exemple : Système prédit 10, Client commande 12 → Partial Match (erreur = 2 unités)

**Note** : Seuls les True Positives ont un match type (les produits bien détectés)
</details>

<details>
<summary>Comment est calculé le MAE ?</summary>

**Nom complet** : Mean Absolute Error (Erreur Absolue Moyenne)

**En simple** : En moyenne, le système se trompe de combien d'unités ?

**Calcul** : MAE = Moyenne des |Qté Prédite - Qté Réelle|

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 2 unités
- Produit B : Prédit 5, Réel 4 → Erreur = 1 unité
- Produit C : Prédit 8, Réel 11 → Erreur = 3 unités
- MAE = (2 + 1 + 3) ÷ 3 = 2 unités

**Bon score** : < 2 unités (très précis)
</details>

<details>
<summary>Comment est calculé le MAPE ?</summary>

**Nom complet** : Mean Absolute Percentage Error (Erreur Absolue Moyenne en %)

**En simple** : En moyenne, le système se trompe de combien en pourcentage ?

**Calcul** : MAPE = Moyenne des (|Qté Prédite - Qté Réelle| ÷ Qté Réelle × 100%)

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 16.7%
- Produit B : Prédit 5, Réel 4 → Erreur = 25%
- MAPE = (16.7% + 25%) ÷ 2 = 20.8%

**Bon score** : < 30%

**Note** : Moins fiable que MAE pour petites quantités (prédit 2, réel 1 = 100% mais seulement 1 unité d'écart)
</details>

---

## True Positives (3)

<details>
<summary>Qu'est-ce qu'un True Positive ?</summary>

**En simple** : Un produit que le système a prédit ET que le client a vraiment commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client commande ce produit
- → True Positive (bonne prédiction)

**C'est bon** : Plus il y en a, mieux c'est
</details>


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 112 | 112 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 56 | 56 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 56 | 56 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 112u vs Médiane: undefinedu (Réel: 112u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 112u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 112u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
**ÉTAPE 1: DE-EVENTING**
L'historique montre 7 commandes concentrées sur le 12 avril 2025, toutes dans une fenêtre de ~50 minutes (09:42 à 10:32):
- 5 commandes de 56u (quantité standard)
- 2 commandes de 112u (double de la quantité standard)
Total: 504u en une seule journée

Cette concentration temporelle extrême suggère fortement un événement ponctuel (préparation d'un week-end, rattrapage post-rupture, ou consolidation de plusieurs demandes clients). Il s'agit clairement d'une anomalie, pas d'une demande quotidienne normale.

**Demande de fond estimée:** En temps normal, ce produit semble avoir un pattern de commande de 56u (unité de base), avec parfois 112u (double commande). La fréquence normale reste inconnue avec seulement cet historique, mais la quantité unitaire standard est clairement 56u.

**ÉTAPE 2: SAISONNALITÉ**
Produit: Chips premium bio - profil snacking
- Nous sommes mi-avril (printemps), période généralement moyenne pour le snacking
- Pas encore en haute saison estivale (BBQ, apéritifs, terrasses) qui commence mai-juin
- Pas de période promotionnelle majeure identifiable actuellement
- Produit bio/premium: moins sensible aux variations saisonnières que les chips standard

**Ajustement saisonnier:** Neutre à légèrement positif (+0 à +10%) car nous approchons de la période pré-estivale où la demande de snacking commence à augmenter.

**ÉTAPE 3: TENDANCE RÉCENTE**
Problème majeur: L'historique ne contient qu'UN SEUL jour de données (12 avril). Impossible d'établir une tendance fiable.
- Pas de comparaison possible avec les semaines précédentes
- Impossible de déterminer si la fréquence s'accélère ou ralentit
- Le pic du 12/04 est probablement un rattrapage, suggérant une rupture ou sous-approvisionnement antérieur

**Ajustement tendance:** Impossible à calculer de manière fiable. Par prudence, restons conservateurs.

**ÉTAPE 4: RECOMMANDATION FINALE**
Base de calcul:
- Quantité standard observée: 56u (format de base)
- Quantité double observée: 112u (commande importante)
- Historique insuffisant pour calculer une fréquence hebdomadaire/mensuelle

Recommandation: **112 unités**

Justification:
1. C'est la quantité "double" observée dans l'historique, représentant une commande importante mais pas exceptionnelle
2. Permet de couvrir une demande normale sans sur-stocker dangereusement
3. Produit agroalimentaire premium bio = rotation probablement modérée, DLC à respecter
4. En l'absence de données historiques suffisantes, mieux vaut être conservateur
5. Si la demande est de 56u par cycle, 112u offre une marge de sécurité x2

**RÉSERVES IMPORTANTES:**
- Confiance MEDIUM car historique très limité (1 seul jour)
- Le pic du 12/04 fausse l'analyse - besoin de 4-6 semaines de données pour une prédiction robuste
- Recommandation à ajuster rapidement dès réception de plus de données historiques

**📅 Analyse Temporelle:**
Historique extrêmement limité: toutes les commandes datent du 12 avril 2025 (il y a 2 jours), concentrées sur 50 minutes. Aucune donnée sur la fréquence normale de réapprovisionnement. Impossible d'établir un cycle de commande typique (hebdomadaire? bi-hebdomadaire?). Cette concentration suggère un événement ponctuel de rattrapage plutôt qu'un pattern régulier. CRITIQUE: Besoin urgent de données sur au moins 4-8 semaines pour établir une fréquence et une saisonnalité fiables.

**📊 Analyse Quantité:**
7 commandes analysées, total 504u sur une seule journée. Pattern identifié: quantité de base = 56u (apparaît 5 fois), quantité double = 112u (apparaît 2 fois). Le ratio 56u/112u suggère un conditionnement ou une logique d'achat par multiples de 56. Moyenne brute: 72u/commande, mais non représentative car toutes les commandes sont concentrées sur un événement unique. La quantité 56u semble être l'unité standard de commande normale, 112u représentant une commande renforcée.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 56u vs Médiane: undefinedu (Réel: 56u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 56u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 56u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING (Nettoyage des outliers):
Les commandes montrent un pattern très concentré sur une seule date (2025-04-12), avec 7 commandes passées entre 10h04 et 10h32. Cela représente un total de 504 unités en moins d'une heure.
Pattern observé: 112u + 56u + 56u + 56u + 56u + 56u + 112u = 504u
Cette concentration temporelle suggère fortement:
- Une correction de stock massive
- Un rattrapage de commandes groupées
- Ou une opération promotionnelle/événementielle

Il s'agit clairement d'un événement ponctuel anormal, PAS d'une demande récurrente. La répétition de 56u (unité de base) et 112u (2x l'unité) indique probablement le format de conditionnement standard.

Demande de fond réelle estimée: Impossible à déterminer avec certitude car nous n'avons qu'un seul jour de données, mais l'unité de commande récurrente semble être 56u (format standard).

ÉTAPE 2 - SAISONNALITÉ:
Date actuelle: mi-avril 2025
Produit: Chips premium bio thym/romarin - produit apéritif
Période: Début de printemps, approche de la période estivale
Saisonnalité attendue: 
- Les chips apéritives ont généralement une demande accrue en période estivale (BBQ, apéros extérieurs) et pendant les fêtes
- Mi-avril = période pré-estivale, demande qui commence à augmenter
- Cependant, SANS historique de plusieurs mois/années, impossible de confirmer le pattern saisonnier de ce produit spécifique

Ajustement saisonnier: Neutre (données insuffisantes pour affirmer la phase)

ÉTAPE 3 - TENDANCE RÉCENTE:
Problème majeur: L'historique ne couvre qu'UNE SEULE DATE (2025-04-12), avec 7 commandes concentrées sur 28 minutes.
Il n'y a AUCUNE donnée sur:
- La fréquence normale de commande
- Le volume habituel
- L'évolution sur les semaines/mois précédents

Impossible de déterminer une tendance fiable. L'événement du 12 avril semble exceptionnel et ne peut servir de base pour extrapoler une tendance.

ÉTAPE 4 - RECOMMANDATION FINALE:
Base de calcul:
- Unité de commande standard identifiée: 56u (format le plus récurrent)
- Absence d'historique normal exploitable
- Principe de précaution: CONSERVATEUR pour éviter le sur-stockage

Recommandation: 56 unités
Justification:
1. 56u = format standard de conditionnement apparent
2. Sans historique fiable, on privilégie la prudence
3. L'événement du 12/04 (504u) ne doit PAS servir de référence
4. Mieux vaut une petite rupture qu'un sur-stock de produits bio périssables
5. Cette quantité permet de tester la demande réelle post-événement

AVERTISSEMENT: Cette recommandation est basée sur des données TRÈS limitées (1 jour, événement anormal). Un suivi rapproché est ESSENTIEL pour ajuster dès les prochaines commandes normales.


**📅 Analyse Temporelle:**
L'historique ne couvre qu'une seule date (2025-04-12) avec 7 commandes concentrées sur 28 minutes (10h04-10h32). Il n'y a aucune information sur les intervalles de commande normaux, la fréquence hebdomadaire ou mensuelle. Cette concentration extrême suggère un événement exceptionnel (correction de stock, promotion, rattrapage) plutôt qu'un pattern de commande régulier. IMPOSSIBLE d'établir une cadence normale de réapprovisionnement avec ces données.

**📊 Analyse Quantité:**
Total commandé le 12/04: 504 unités en 7 commandes. Formats observés: 56u (x5 commandes) et 112u (x2 commandes), suggérant que 56u est l'unité de conditionnement standard. Cette quantité massive sur une période ultra-courte est clairement anormale et ne reflète pas une demande quotidienne/hebdomadaire typique. Sans autres points de comparaison historiques, impossible de distinguer la demande normale du pic exceptionnel. Le volume de 504u doit être considéré comme un outlier total.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 56u vs Médiane: undefinedu (Réel: 56u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 56u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 56u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1 - DE-EVENTING:
L'historique ne présente que 3 commandes, toutes effectuées le même jour (2025-04-12) sur une période de 27 minutes (10:04 à 10:31). Les quantités sont identiques (56u × 3 = 168u total). Ce pattern suggère fortement:
- Soit une commande groupée fragmentée en 3 lignes techniques (même client, même système)
- Soit 3 clients différents ayant commandé simultanément
- Soit un événement ponctuel (promotion, salon, lancement)

Aucune donnée historique antérieure n'est disponible pour identifier la "demande de fond normale". Ces 3 commandes identiques et simultanées ne permettent pas d'établir une baseline fiable. Cependant, la répétition exacte de 56u suggère qu'il s'agit d'une unité de commande standard (probablement un conditionnement par carton/palette).

ÉTAPE 2 - SAISONNALITÉ:
Impossible d'analyser la saisonnalité avec seulement 1 jour d'historique. Cependant:
- Période actuelle: mi-avril (printemps)
- Produit: chips premium bio à la truffe → produit d'apéritif haut de gamme
- La truffe est traditionnellement associée à l'automne/hiver, mais les chips sont consommées toute l'année
- Mi-avril = pas de période festive majeure → demande probablement moyenne/basse

Sans données historiques sur plusieurs mois, aucun ajustement saisonnier ne peut être appliqué de manière fiable.

ÉTAPE 3 - TENDANCE RÉCENTE:
Impossible d'établir une tendance avec un seul jour de données. Les 3 commandes de 56u le même jour ne montrent ni hausse ni baisse, juste une répétition. Il n'y a aucune donnée antérieure pour comparer l'évolution.

Point d'attention: L'absence totale de commandes avant le 12/04 (ou leur non-disponibilité dans l'historique) est problématique. Soit:
- C'est un nouveau produit (lancement récent)
- Les données historiques n'ont pas été fournies
- Il y a eu une rupture de stock prolongée avant

ÉTAPE 4 - RECOMMANDATION FINALE:
Base de calcul:
- Quantité unitaire observée: 56u (standard apparent)
- Fréquence: inconnue (données insuffisantes)
- Demande journalière estimée: impossible à calculer précisément

Approche CONSERVATRICE retenue:
Avec si peu de données et l'incertitude sur la nature de ces commandes groupées, je recommande:
→ 56 unités (1 unité de commande standard)

Justification:
1. Pattern de commande observé = 56u (unité standard)
2. Principe de précaution: données insuffisantes → ne pas sur-anticiper
3. Éviter le sur-stockage d'un produit premium bio (DLC courte probable)
4. En B2B, mieux vaut réapprovisionner fréquemment qu'immobiliser du capital
5. Cette quantité permet de tester la demande réelle sur les prochains jours

ALERTE: Cette recommandation est hautement incertaine. Idéalement, il faudrait:
- Minimum 3-4 semaines d'historique pour établir une baseline
- Information sur le délai de livraison fournisseur
- Connaissance du stock actuel
- Données de vente sortante (pas juste les réappros)


**📅 Analyse Temporelle:**
Historique extrêmement limité: seulement 3 commandes enregistrées le même jour (2025-04-12) sur 27 minutes. Aucune donnée antérieure disponible. Intervalle entre commandes = quasi-nul (quelques minutes), ce qui indique soit un traitement batch informatique, soit un événement commercial ponctuel. Impossible de déterminer la fréquence normale de réapprovisionnement. Ce pattern ne reflète probablement pas un rythme de commande régulier. La période écoulée depuis la dernière commande (2 jours au 14/04) est trop courte pour être significative.

**📊 Analyse Quantité:**
Toutes les commandes sont strictement identiques: 56 unités. Cette uniformité parfaite suggère un conditionnement standardisé (carton, palette partielle) plutôt qu'une demande organique variable. Volume total observé: 168u sur un seul jour. Sans contexte additionnel, impossible de distinguer si 56u représente une commande client unique ou une unité logistique standard. L'absence de variation (pas de 50u, 60u, ou autres quantités) indique une contrainte logistique/packaging forte. Aucune baseline de "demande normale" ne peut être calculée avec ces 3 points identiques et simultanés.

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (40)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [ORG01] ORGANICA crunchy fruit ananas 16g | 36 | Stock prédit: -36.0u (0j restants) → prédit 36u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 54 | Stock prédit: -54.0u (0j restants) → prédit 54u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 90 | Stock prédit: -90.0u (0j restants) → prédit 90u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 72 | Stock prédit: -72.0u (0j restants) → prédit 72u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 54 | Stock prédit: -54.0u (0j restants) → prédit 54u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 36 | Stock prédit: -36.0u (0j restants) → prédit 36u mais non commandé |
| [fsv01] Cerneaux de noix nature bio vrac 1,8 kg | 6 | Stock prédit: -6.0u (0j restants) → prédit 6u mais non commandé |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 10 | Stock prédit: -15.0u (0j restants) → prédit 10u mais non commandé |
| [fsv03] Noisette nature bio vrac 2,8kg  | 8 | Stock prédit: -10.0u (0j restants) → prédit 8u mais non commandé |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 6 | Stock prédit: -6.0u (0j restants) → prédit 6u mais non commandé |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 3 | Stock prédit: -1.0u (0j restants) → prédit 3u mais non commandé |
| [fsv17] Mélange de noix bio vrac 2,75kg | 3 | Stock prédit: -1.0u (0j restants) → prédit 3u mais non commandé |
| [SOWA01] SOWA citron menthe 250ml | 6 | Stock prédit: -10.0u (0j restants) → prédit 6u mais non commandé |
| [SOWA02] SOWA bissap 250ml | 6 | Stock prédit: -10.0u (0j restants) → prédit 6u mais non commandé |
| [SOWA03] SOWA ginger beer ardent 250ml | 6 | Stock prédit: -10.0u (0j restants) → prédit 6u mais non commandé |
| [SOWA04] SOWA thé glacé pêche 250ml | 5 | Stock prédit: -8.0u (0j restants) → prédit 5u mais non commandé |
| [KLAK01] KLAK Maté 330ml | 2 | Stock prédit: -2.0u (0j restants) → prédit 2u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 13 | Stock prédit: -10.0u (0j restants) → prédit 13u mais non commandé |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 10 | Stock prédit: -20.0u (0j restants) → prédit 10u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 18 | Stock prédit: -10.0u (0j restants) → prédit 18u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 26 | Stock prédit: -27.0u (0j restants) → prédit 26u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 42 | Stock prédit: -36.0u (0j restants) → prédit 42u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 42 | Stock prédit: -36.0u (0j restants) → prédit 42u mais non commandé |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 18 | Stock prédit: -12.0u (0j restants) → prédit 18u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 30 | Stock prédit: -36.0u (0j restants) → prédit 30u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 42 | Stock prédit: -60.0u (0j restants) → prédit 42u mais non commandé |
| [UPI08] Jus de pomme-citron bio d'UPIGNY 250ml | 13 | Stock prédit: -10.0u (0j restants) → prédit 13u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 13 | Stock prédit: -10.0u (0j restants) → prédit 13u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 10 | Stock prédit: -10.0u (0j restants) → prédit 10u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 8 | Stock prédit: -5.0u (0j restants) → prédit 8u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 25 | Stock prédit: -25.0u (0j restants) → prédit 25u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 20 | Stock prédit: -35.0u (0j restants) → prédit 20u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 25 | Stock prédit: -35.0u (0j restants) → prédit 25u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 23 | Stock prédit: -35.0u (0j restants) → prédit 23u mais non commandé |
| [RISH05] RISH kombucha BIO - rose 750ml | 8 | Stock prédit: -12.0u (0j restants) → prédit 8u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 56 | Stock prédit: -280.0u (0j restants) → prédit 56u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 56 | Stock prédit: -336.0u (0j restants) → prédit 56u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 112 | Stock prédit: -448.0u (0j restants) → prédit 112u mais non commandé |
| [REB05] ReBEL chips premium & bio - sel de mer 35g | 64 | Stock prédit: -150.0u (0j restants) → prédit 64u mais non commandé |
| [REB06] ReBEL chips premium & bio - paprika fumé 35g | 64 | Stock prédit: -64.0u (0j restants) → prédit 64u mais non commandé |


---

## False Negatives (0)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>

*Aucun faux négatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-11-19T16:28:27.722Z*
