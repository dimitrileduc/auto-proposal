# Rapport Backtest - Client AD EYNATTEN DELHAIZE EYNADIS

## Contexte

- **Client** : AD EYNATTEN DELHAIZE EYNADIS (ID: 38696)
- **Commande réelle** : S39586
- **Date commande** : 2025-10-07 06:59:59
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 37
- **Tokens**: 34,034 input + 16,781 output = 50,815 total
- **Coût**: $0.0944 (~9.44¢)
- **Coût par produit LLM**: $0.0026


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.0% | 50 produits prédits, 8 corrects |
| **Rappel** | 72.7% | 11 produits réels, 8 détectés |
| **F1-Score** | 26.2% | Score équilibré global |

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
| **MAE** | 1.00 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 43.8% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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

## True Positives (8)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 6 | 3 | 3.0 | 100.0% | ✅ partial | 🤖 LLM |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | 📊 Médiane |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 3 | 1.0 | 33.3% | ✅ partial | 🤖 LLM |
| [MF0029] MF Tarti Datte chili 250g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 6u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 3u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit [JF001] JF MAYONNAI TRUFFES 250ML WECK:

1. Analyse des intervalles entre commandes:
- Intervalle moyen entre commandes: environ 25-30 jours
- Dernier intervalle (29/09 au 07/10): environ 8 jours
- Les intervalles ne sont PAS parfaitement réguliers mais semblent suivre un rythme proche d'un mois

2. Analyse des quantités:
- Quantités variées: 3u, 4u, 6u, 10u (deux fois)
- Moyenne: 6.6 unités
- Variation significative mais acceptable (±30% comme mentionné)
- Pas de tendance linéaire claire à la hausse ou à la baisse

3. Recommandation conservative:
- Basée sur la moyenne et en restant dans la fourchette de variation normale
- Quantité recommandée: 6 unités
- Justification: proche de la moyenne historique, dans l'intervalle de variation acceptable

**📅 Analyse Temporelle:**
Intervalles entre commandes variables mais globalement autour de 25-30 jours. Dernier intervalle plus court (8 jours), ce qui pourrait indiquer un réapprovisionnement anticipé.

**📊 Analyse Quantité:**
Quantités fluctuantes entre 3 et 10 unités. Pas de tendance linéaire claire. Variation considérée comme normale en contexte B2B.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: undefinedu (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes:

1. Analyse temporelle:
- Intervalles entre commandes:
  * 6 jours (29/09 - 23/09)
  * 30 jours (22/08 - 22/07)
  * 25 jours (22/07 - 16/06)
- Les intervalles sont variables mais globalement entre 20-30 jours
- Pas de périodicité stricte, mais suggestion d'un cycle d'environ 25-30 jours

2. Analyse des quantités:
- Variations entre 1u et 2u
- Alternance entre 1u et 2u
- Dernière commande à 2u
- Variations inférieures à 30% (acceptable en B2B)

3. Recommandation:
- Quantité conservatrice basée sur les dernières commandes
- Dernier point de commande: 2u
- Recommandation: 2 unités
- Confiance moyenne due à la variabilité des commandes

**📅 Analyse Temporelle:**
Intervalles irréguliers entre 6-30 jours, tendance vers un cycle de 25-30 jours

**📊 Analyse Quantité:**
Variations entre 1-2 unités, dernière commande à 2 unités

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique des commandes pour le produit [MF0029] MF Tarti Datte chili 250g:

1. Analyse des intervalles entre commandes:
- Entre chaque commande: environ 2 semaines (14-16 jours)
- Intervalle relativement régulier, indiquant un besoin cyclique stable
- Dernier intervalle (2025-09-23 au 2025-10-07) suggère un rythme constant

2. Analyse des quantités:
- Variations entre 1u et 2u
- Alternance entre 1u et 2u 
- Pas de croissance ou décroissance linéaire claire
- Variations normales dans la plage attendue en B2B (±30%)

3. Recommandation conservative:
- Quantité médiane historique = 2 unités
- Dernière commande à 2u renforce cette recommandation
- Prend en compte la stabilité et les variations normales du marché

Recommandation finale : 2 unités, avec une confiance moyenne reflétant la régularité relative des commandes.

**📅 Analyse Temporelle:**
Intervalles réguliers de 14-16 jours entre commandes, indiquant un cycle d'approvisionnement stable et prévisible.

**📊 Analyse Quantité:**
Variations entre 1u et 2u, typiques des commandes B2B avec légers ajustements de stock. Aucune tendance de croissance ou décroissance significative.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>4. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 2u vs Médiane: undefinedu (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes pour le produit JF057:

1. Analyse temporelle des intervalles:
- Intervalles entre commandes variables
- Min: 11 jours (entre 2025-08-05 et 2025-08-11)
- Max: 41 jours (entre 2025-06-16 et 2025-07-15)
- Dernière commande il y a environ 45 jours (depuis 2025-09-09)
- Pas de périodicité stricte, mais tendance à commander tous les 15-45 jours

2. Analyse des quantités:
- Quantités oscillant entre 1 et 3 unités
- Moyenne: 2.33 unités
- Dernières commandes stabilisées autour de 2-3 unités
- Variations normales et attendues en B2B (+/- 30%)

3. Recommandation conservative:
- Quantité recommandée: 2 unités
- Basée sur la moyenne et les dernières commandes
- Permet de maintenir un stock minimal sans surstock
- Tient compte des variations normales du marché B2B

**📅 Analyse Temporelle:**
Intervalles de commande irréguliers, principalement entre 11 et 45 jours, sans périodicité fixe

**📊 Analyse Quantité:**
Quantités entre 1-3 unités, moyenne de 2.33, dernières commandes stabilisées

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>5. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: undefinedu (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
Analyse détaillée de l'historique de commandes:

1. Analyse temporelle:
- Intervalles entre commandes variables: 
  * 18 jours (09-09 à 08-22)
  * 17 jours (08-22 à 08-05)
  * 11 jours (08-05 à 07-15)
  * 30 jours (07-15 à 06-16)
- Pas de périodicité stricte, mais tendance autour de 15-20 jours entre commandes
- Dernière commande le 2025-09-09, aujourd'hui 2025-10-07 = environ 28 jours depuis

2. Analyse des quantités:
- Quantités commandées: 1u, 1u, 2u, 2u, 1u
- Variation entre 1 et 2 unités
- Pas de croissance/décroissance linéaire claire
- Moyenne proche de 1.4 unités
- Dernières commandes plutôt à 1 unité

3. Recommandation conservatrice:
- Tendance récente vers 1 unité
- Variation normale B2B de ±30%
- Recommandation de 1 unité

Stratégie: Commande prudente sans sur-stockage.

**📅 Analyse Temporelle:**
Intervalles variables, centrés autour de 15-20 jours, dernière commande il y a 28 jours

**📊 Analyse Quantité:**
Quantités entre 1-2 unités, moyenne 1.4u, dernières commandes à 1u

**📈 Tendance détectée:** ❌ Non

</details>




---

## False Positives (42)

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Stock prédit: 1.6u (30j restants) → prédit 2u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: 0.8u (30j restants) → prédit 1u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Stock prédit: 1.5u (21j restants) → prédit 2u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | Stock prédit: 0.4u (4j restants) → prédit 2u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Stock prédit: 1.5u (24j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: 1.3u (12j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Stock prédit: 0.2u (0j restants) → prédit 2u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 8 | Stock prédit: 6.9u (28j restants) → prédit 8u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Stock prédit: 1.2u (19j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Stock prédit: 1.1u (15j restants) → prédit 2u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 1.2u (19j restants) → prédit 2u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: 0.5u (14j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 2 | Stock prédit: 0.3u (10j restants) → prédit 2u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 2 | Stock prédit: 0.5u (25j restants) → prédit 2u mais non commandé |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 2 | Stock prédit: 0.3u (10j restants) → prédit 2u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Stock prédit: 0.2u (3j restants) → prédit 2u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: 1.3u (21j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 4 | Stock prédit: -0.8u (-8j restants) → prédit 4u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 5 | Stock prédit: 1.6u (13j restants) → prédit 5u mais non commandé |
| [MF0033] MF Tarti Poivron chilli 250g | 3 | Stock prédit: 1.6u (29j restants) → prédit 3u mais non commandé |
| [MF0013] MF Olives Vertes 500g | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Stock prédit: 0.4u (25j restants) → prédit 2u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 4 | Stock prédit: -3.2u (-27j restants) → prédit 4u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: 0.8u (29j restants) → prédit 2u mais non commandé |
| [LD014] LD Organic Avocado Spread 180 g | 3 | Stock prédit: 0.5u (13j restants) → prédit 3u mais non commandé |
| [LD013] LD Tuscan Organic Spread 180 g | 3 | Stock prédit: -0.5u (-15j restants) → prédit 3u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Stock prédit: -0.5u (-14j restants) → prédit 2u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 2 | Stock prédit: 0.2u (12j restants) → prédit 2u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Stock prédit: -0.4u (-6j restants) → prédit 3u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 3 | Stock prédit: 0.4u (9j restants) → prédit 3u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Stock prédit: -0.7u (-14j restants) → prédit 2u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | Stock prédit: -1.7u (-61j restants) → prédit 2u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: -2.7u (-82j restants) → prédit 1u mais non commandé |


---

## False Negatives (3)

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
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Stock suffisant: 0.6u (73j restants > seuil 30j) |
| [VID0009] Consigne casier | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 12 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-19T15:56:01.922Z*
