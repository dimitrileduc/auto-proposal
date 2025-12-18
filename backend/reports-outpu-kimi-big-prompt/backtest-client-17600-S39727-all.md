# Rapport Backtest - Client SDP Rungis

## Contexte

- **Client** : SDP Rungis (ID: 17600)
- **Commande réelle** : S39727
- **Date commande** : 2025-10-14 13:50:03
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 🤖 Usage LLM

- **Appels**: 25
- **Tokens**: 37,941 input + 76,870 output = 114,811 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.0% | 24 produits prédits, 6 corrects |
| **Rappel** | 85.7% | 7 produits réels, 6 détectés |
| **F1-Score** | 38.7% | Score équilibré global |

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
| **MAE** | 142.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 44.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 58.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -23.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

## True Positives (6)

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP | 200 | 400 | 200.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml  | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV363] LV BIO Tartin'apero Avocat 180g  | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml | 400 | 200 | 200.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml | 0 | 200 | 200.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV356] LV SET 3 X 135G trisauces  SDP | 0 | 256 | 256.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP</strong> - LLM: 200u vs Médiane: 198u (Réel: 400u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 200u (confidence: high)
- 📊 **Baseline N-1**: 200u
- 📊 **Médiane**: 198u
- ✅ **Réel commandé**: 400u
- 📉 **Erreur LLM**: 200u (50.0%)
- 📉 **Erreur Médiane**: 202u (50.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~22-27 jours)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit montre un pattern mensuel irrégulier (22-27 jours) avec des volumes EXCEPTIONNELLEMENT STABLES à 200u (196u, 200u, 200u). La commande de 4u est un outlier à exclure. La date 14/10 est hors cycle (intervalle trop court de 6 jours), donc je prédits la quantité de la PROCHAINE commande probable selon la règle spéciale. Comportement B2B typique : un client qui commande 200u régulièrement ne change pas brusquement. La précision maximale est atteinte en ignorant l'outlier et en capitalisant sur la stabilité constatée.

</details>


<details>
<summary><strong>2. [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml </strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 350u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: COMMANDE MENSUELLE IRREGULIERE
- **Saisonnalité**: none
- **Tendance**: INCREASING_STABLE
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**

## ANALYSE RYTHMIQUE DÉTAILLÉE

**Pattern identifié**: Le client opère sur un **cycle mensuel irrégulier** (intervalles 16-34 jours) avec des jours de la semaine variables (mardi, mercredi, jeudi), sans préférence hebdomadaire fixe.

**Intervale critique**: La dernière commande date du 2025-10-08 (mercredi). Avec des intervalles récents de 16-34 jours, le 2025-10-14 (6 jours plus tard) est **hors cycle** - aucune commande n'est statistiquement attendue ce jour.

**Outliers détectés et filtrés** : 
- 2024-05-23 | 305u (pic isolé, -13% vs baseline, probable promotion)
- 2024-08-07→08 (1 jour d'intervalle : double-saisie à ignorer)
- Période de vide oct-2024 → août-2025 (10 mois) : hors périmètre prédictif

**Rupture de tendance majeure** : Transition brutale de 350u (N-1) → 434u (3 dernières commandes), soit +24% de croissance stable maintenue sur 3 mois consecutifs.

## DÉCISION FINAL

**Application de la règle "Jour hors cycle"** : Le 2025-10-14 est statistiquement hors période de commande. Cependant, la directive interdit formellement la prédiction 0. Je dois donc prédire la quantité de la **prochaine commande probable**, dont les caractéristiques sont désormais fixées.

**Poids des données** : 
- 3 commandes récentes à 434u = poids 70% (stabilité confirmée)
- 10 commandes historiques à 350u = poids 30% (obsolètes face à la rupture)

**Coefficient de tendance** : 434/350 = 1,24 (hausse structurelle)

## RECOMMANDATION PRÉCISE

434 unités. Cette valeur minimise le MAPE en captant la nouvelle baseline établie, tout en respectant l'interdiction de prédire 0 pour un jour hors cycle.


</details>


<details>
<summary><strong>3. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: low)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimonthly
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande exclusivement le mercredi (3/3 commandes historiques). La date de prédiction étant un mardi, hors du cycle habituel, je dois prédire la quantité de la **prochaine commande** (mercredi 15 octobre) et non 0. Les données révèlent deux outliers évidents le 20/08 : 864u (pic exceptionnel, probablement stockage/promotion) et 4u (ajustement/annulation). La commande du 08/10 à 434u représente le volume récurrent le plus récent et fiable. Avec seulement 3 points de données sans saisonnalité N-1, privilégier la dernière valeur stable donne la meilleure précision possible. Les cycles irréguliers (49 jours) suggèrent des commandes à fréquence variable plutôt que bimensuelle stricte.

</details>


<details>
<summary><strong>4. [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml</strong> - LLM: 400u vs Médiane: 500u (Réel: 200u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 400u (confidence: high)
- 📊 **Baseline N-1**: 400u
- 📊 **Médiane**: 500u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 200u (100.0%)
- 📉 **Erreur Médiane**: 300u (150.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: N/A
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Après analyse du rythme irrégulier (pas de cycle hebdomadaire fixe mais tendance mensuelle), le mode statistique est clairement 400u (9/14 commandes). Le pic de 600u est considéré comme ponctuel car suivi de retour à 400u. La date de prédiction étant un mardi (jour historique de commande) avec un intervalle cohérent (34j), et les 2 dernières commandes étant 400u, la valeur la plus probable est 400u. La valeur historique d'octobre N-1 (400u) confirme l'absence de variation saisonnière.

</details>


<details>
<summary><strong>5. [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml</strong> - LLM: 0u vs Médiane: 200u (Réel: 200u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: high)
- 📊 **Baseline N-1**: 200u
- 📊 **Médiane**: 200u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 200u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: aperiodic_with_tuesday_preference
- **Saisonnalité**: none
- **Tendance**: strong_zero_signal
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**
- Pattern identifié : Commandes irrégulières espacées de 62 à 104 jours (2-3 mois)
- Jour préféré : Mardi (3/4 commandes historiques)
- Date prédiction : Mardi 14 oct. 2025 → **correspond au jour habituel**
- Problème majeur : **Aucune commande depuis juin 2024 (16 mois d'écart)**

**ANALYSE DES OUTLIERS**
- Aucun outlier détecté : toutes les commandes historiques sont de 200u (stabilité parfaite)
- Volume typique : 200u par commande

**TENDANCE & RUPTURE**
- Cycle historique : ~2-3 mois maximum entre commandes
- Situation actuelle : **+16 mois sans commande** (soit 5-8 cycles manqués)
- Cette rupture massive indique **forte probabilité d'arrêt du produit** par le client

**SYNTHÈSE DECISIONNELLE**
- En B2B agroalimentaire, une absence >12 mois = signal quasi-certain d'arrêt du produit (fin de commercialisation, changement fournisseur, cessation activité)
- La règle « prédire 0 si client a arrêté le produit » s'applique parfaitement ici
- Prédire même 200u serait irréaliste et majorerait fortement le MAPE
- **Environnement B2B** : Les clients ne reprennent pas un produit après 16 mois de silence sans nouvelle contractualisation

**CONCLUSION** : Le produit est très probablement discontinué chez ce client. La quantité la plus précise et la moins risquée pour le MAPE est 0.

</details>


<details>
<summary><strong>6. [LV356] LV SET 3 X 135G trisauces  SDP</strong> - LLM: 0u vs Médiane: 512u (Réel: 256u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: high)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 512u
- ✅ **Réel commandé**: 256u
- 📉 **Erreur LLM**: 256u (100.0%)
- 📉 **Erreur Médiane**: 256u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern stable détectable
- **Saisonnalité**: none
- **Tendance**: declining
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE : Historique de seulement 2 commandes datant de 2024 (août et octobre), intervalles irréguliers (~55 jours). Aucune commande depuis 378 jours. Période récente (3 derniers mois) : ABSENCE TOTALE DE COMMANDES. Cette absence prolongée (>1 an) en agroalimentaire B2B indique une rupture commerciale quasi-certaine (fin de vie produit, changement de fournisseur ou arrêt de lancement). La date de prédiction (mardi) est théoriquement un jour ouvré, mais le client ne commande manifestement PLUS ce produit. Règle spéciale appliquée : 'prédire 0 si le client a arrêté ce produit' (autorisé) vs 'prédire 0 car jour inhabituiel' (interdit). L'absence totale depuis plus d'un an justifie le statut 'produit arrêté'. CONFIDENCE ÉLEVÉE car le signal d'inactivité est massif et prolongé.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 200u
- 2025-09-16 11:31:53: 200u
- 2025-08-20 10:22:31: 196u
- 2025-08-20 10:22:31: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 200u (confidence: high)
**📊 Quantité Réelle**: 400u

</details>


<details>
<summary><strong>2. [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 434u
- 2025-09-04 09:10:58: 434u
- 2025-08-19 07:26:59: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 08:46:54: 350u
- 2024-09-11 07:42:30: 350u
- 2024-08-08 07:00:55: 350u
- 2024-08-07 07:54:26: 350u
- 2024-06-11 08:53:39: 350u
- 2024-05-23 09:00:22: 305u
- 2024-04-24 08:56:28: 350u
- 2024-04-02 13:39:05: 350u
- 2024-01-30 09:51:19: 350u
- 2023-12-19 08:25:50: 350u
- 2023-11-07 14:19:04: 350u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>3. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 434u
- 2025-08-20 10:22:31: 864u
- 2025-08-20 10:22:31: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 434u (confidence: low)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>4. [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 09:37:56: 400u
- 2025-09-04 09:10:58: 400u
- 2025-08-19 07:26:59: 600u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-10 12:10:09: 400u
- 2024-09-11 07:42:30: 200u
- 2024-08-08 07:00:55: 200u
- 2024-08-07 07:54:26: 400u
- 2024-06-11 08:46:37: 800u
- 2024-05-23 09:00:22: 400u
- 2024-04-24 08:56:28: 400u
- 2024-04-02 13:39:05: 400u
- 2024-03-25 14:38:30: 200u
- 2024-03-13 08:07:55: 400u
- 2024-01-30 09:51:19: 400u
- 2023-12-19 08:26:46: 400u

**✅ Quantité LLM**: 400u (confidence: high)
**📊 Quantité Réelle**: 200u

</details>


<details>
<summary><strong>5. [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-11 08:46:37: 200u
- 2024-04-02 13:39:05: 200u
- 2023-12-19 08:25:50: 200u
- 2023-10-18 13:56:51: 200u

**✅ Quantité LLM**: 0u (confidence: high)
**📊 Quantité Réelle**: 200u

</details>


<details>
<summary><strong>6. [LV356] LV SET 3 X 135G trisauces  SDP</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 08:31:17: 512u
- 2024-08-07 07:56:04: 640u

**✅ Quantité LLM**: 0u (confidence: high)
**📊 Quantité Réelle**: 256u

</details>




---

## False Positives (18)

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
| [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml | 200 | Stock prédit: 132.8u (9j restants) → prédit 200u mais non commandé |
| [LV234] LV "CLASSIQUE" WECK Mayonnaise aus œufs 250ml | 400 | Stock prédit: 332.0u (24j restants) → prédit 400u mais non commandé |
| [LV313] LV "CLASSIQUE" WECK Sauce COCKTAIL 250ml | 200 | Stock prédit: 163.6u (22j restants) → prédit 200u mais non commandé |
| [LV236] LV "CLASSIQUE" WECK Sauce TARTARE 250ml | 200 | Stock prédit: 151.5u (15j restants) → prédit 200u mais non commandé |
| [LV303] LV BIO  Tartin'apero Mangue curry SDP 200 ml  | 434 | Stock prédit: 335.2u (16j restants) → prédit 434u mais non commandé |
| [LV358] LV SDP SAUCE BEARNAISE 125G (copie) | 350 | Stock prédit: 169.1u (25j restants) → prédit 350u mais non commandé |
| [LV302] LV BIO Tartin'apero Carotte Gingembre SDP 200 ml  | 392 | Stock prédit: -192.8u (-9j restants) → prédit 392u mais non commandé |
| [LV314] LV "CLASSIQUE" WECK Sauce AIOLI PESTO 250ml | 200 | Stock prédit: -83.6u (-11j restants) → prédit 200u mais non commandé |
| [LV334] LA VACHE TRAD Sauce au poivre bocal 250ml WECK SDP | 200 | Stock prédit: -102.9u (-13j restants) → prédit 200u mais non commandé |
| [LV304] LV BIO Tartin'apero Poivrons Chili SDP 200 ml  | 434 | Stock prédit: -79.9u (-6j restants) → prédit 434u mais non commandé |
| [LV307] LV BIO Tartin'apero Houmous type SDP 200 ml  | 392 | Stock prédit: 137.1u (18j restants) → prédit 392u mais non commandé |
| [LV tritart 135] LV BIO SET 3 X 135G TARTIN'APERO SDP | 256 | Stock prédit: -131.7u (-13j restants) → prédit 256u mais non commandé |
| [LV337] LV BIO Tartin'apero TOMATE AIL DES OURS SDP 200ml | 434 | Stock prédit: -27.2u (-2j restants) → prédit 434u mais non commandé |
| [LV362] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml bio (copie) | 217 | Stock prédit: -4.0u (0j restants) → prédit 217u mais non commandé |
| [LV364] LV SDP SAUCE Cocktail  125ML | 175 | Stock prédit: -4.0u (0j restants) → prédit 175u mais non commandé |
| [LV306] LV BIO Tartin'apero Olives Vertes SDP200 ml  | 350 | Stock prédit: -23.8u (-3j restants) → prédit 350u mais non commandé |
| [LV301] LV BIO Tartin'apero Aubergine SDP 200 ml  | 0 | Stock prédit: 24.2u (7j restants) → prédit 0u mais non commandé |
| [LV327] LV BIO Tartin'apero Toscane SDP 200 ml   | 350 | Stock prédit: 24.2u (7j restants) → prédit 350u mais non commandé |


---

## False Negatives (1)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>


*Produits commandés mais non prédits*

| Produit | Qté commandée | Raison |
|---------|---------------|--------|
| [LV311] LV BIO Tartin'apero Basilico SDP 200 ml  | 350 | Stock suffisant: 418.7u (136j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T08:45:57.580Z*
