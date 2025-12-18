# Rapport Backtest - Client AD EYNATTEN DELHAIZE EYNADIS

## Contexte

- **Client** : AD EYNATTEN DELHAIZE EYNADIS (ID: 38696)
- **Commande réelle** : S40324
- **Date commande** : 2025-11-13 12:28:59
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 42
- **Tokens**: 64,047 input + 131,989 output = 196,036 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 6.3% | 64 produits prédits, 4 corrects |
| **Rappel** | 40.0% | 10 produits réels, 4 détectés |
| **F1-Score** | 10.8% | Score équilibré global |

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
| **MAE** | 12.75 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 79.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 68.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -79.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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

## True Positives (4)

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
| [JF009] JF SAUCE TARTARE 250ML WECK | 0 | 21 | 21.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 6 | 21 | 15.0 | 71.4% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 18 | 14.0 | 77.8% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LD014] LD Organic Avocado Spread 180 g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 0u vs Médiane: 2u (Réel: 21u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: high)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 21u
- 📉 **Erreur LLM**: 21u (100.0%)
- 📉 **Erreur Médiane**: 19u (90.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Spécial
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Aucune commande dans les données historiques. Le produit est probablement inactif ou en tout début de cycle de vie.

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 6u vs Médiane: 8u (Réel: 21u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 21u
- 📉 **Erreur LLM**: 15u (71.4%)
- 📉 **Erreur Médiane**: 13u (61.9%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières à fréquence mensuelle variable (3-5 semaines), sans cycle hebdomadaire strict. Pas de pattern saisonnal clair sur les données disponibles.
- **Saisonnalité**: none
- **Tendance**: rebound_higher
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client a repris le produit après une longue pause (10 mois). La séquence 1u puis 10u suggère un test puis reconstitution de stock. Le pic de 10u est récent mais statistiquement isolé (outlier). En agro B2B, après reconstitution, le client retourne généralement à son niveau de consommation régulier (médiane 4u) plutôt que de répéter les pics. Le mercredi est un jour ouvré valide sans contrainte hors-cycle.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 07:08:52: 1u
- 2025-09-29 06:22:00: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-29 07:41:38: 2u
- 2024-09-16 12:44:43: 2u
- 2024-07-31 06:22:12: 2u
- 2024-07-11 06:44:28: 1u
- 2024-06-26 12:38:31: 3u
- 2024-06-19 10:15:51: 3u
- 2024-04-29 11:50:19: 6u
- 2024-03-21 09:05:03: 3u

**✅ Quantité LLM**: 0u (confidence: high)
**📊 Quantité Réelle**: 21u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 06:05:27: 10u
- 2025-08-22 06:53:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-29 07:41:38: 4u
- 2024-09-25 06:29:04: 4u
- 2024-09-16 12:44:43: 1u
- 2024-08-19 06:08:42: 2u
- 2024-07-31 06:22:12: 3u
- 2024-07-11 06:44:28: 2u
- 2024-06-26 12:38:31: 1u
- 2024-06-19 10:15:51: 5u
- 2024-05-31 12:44:08: 2u
- 2024-04-29 11:50:19: 10u
- 2024-03-21 09:05:03: 4u

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 21u

</details>




---

## False Positives (60)

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
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Stock prédit: 1.1u (17j restants) → prédit 2u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | Stock prédit: -2.2u (-7j restants) → prédit 3u mais non commandé |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Stock prédit: -0.9u (-7j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: 0.5u (16j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: 0.5u (16j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 10 | Stock prédit: 0.5u (15j restants) → prédit 10u mais non commandé |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.5u (16j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Stock prédit: 0.9u (11j restants) → prédit 2u mais non commandé |
| [JF067] FIL MOUTARDE 700G BOCAL | 2 | Stock prédit: 0.9u (13j restants) → prédit 2u mais non commandé |
| [FIL27] FIL MOUTARDE 300ML SQUEEZE  | 2 | Stock prédit: 0.9u (13j restants) → prédit 2u mais non commandé |
| [FIL19] FIL VOL AU VENT 400G BOCAL | 2 | Stock prédit: 0.9u (13j restants) → prédit 2u mais non commandé |
| [JF068] FIL VOL AU VENT 800G BOCAL  | 2 | Stock prédit: 0.9u (13j restants) → prédit 2u mais non commandé |
| [JF074] FIL MAYONNAISE ŒUFS 1L SEAU  | 1 | Stock prédit: 0.5u (13j restants) → prédit 1u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 2 | Stock prédit: 0.7u (7j restants) → prédit 2u mais non commandé |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Stock prédit: 0.6u (19j restants) → prédit 1u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Stock prédit: 0.6u (25j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Stock prédit: 0.4u (8j restants) → prédit 1u mais non commandé |
| [JF041] JF MAYONNAISE SQUEEZE 300ML | 1 | Stock prédit: 0.5u (13j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Stock prédit: 0.3u (7j restants) → prédit 2u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.2u (6j restants) → prédit 1u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.5u (18j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.5u (18j restants) → prédit 1u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 0.9u (15j restants) → prédit 2u mais non commandé |
| [LD004] LD Tartinade Tomate Basilic bio 180g | 2 | Stock prédit: 0.5u (7j restants) → prédit 2u mais non commandé |
| [LD008] LD Tartinade Pois chiches bio 180g   | 2 | Stock prédit: 0.5u (7j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Stock prédit: -1.0u (-7j restants) → prédit 2u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Stock prédit: 0.1u (1j restants) → prédit 2u mais non commandé |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | Stock prédit: 0.6u (14j restants) → prédit 2u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | Stock prédit: -0.4u (-5j restants) → prédit 2u mais non commandé |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Stock prédit: 0.7u (19j restants) → prédit 2u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Stock prédit: 0.5u (12j restants) → prédit 2u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Stock prédit: 0.8u (13j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: 0.2u (8j restants) → prédit 1u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: -1.3u (-24j restants) → prédit 1u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Stock prédit: 0.2u (6j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: -1.1u (-14j restants) → prédit 2u mais non commandé |
| [MF0027] MF Tarti Aubergine 250g  | 2 | Stock prédit: 0.5u (13j restants) → prédit 2u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 2 | Stock prédit: 0.4u (12j restants) → prédit 2u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Stock prédit: -0.5u (-9j restants) → prédit 2u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Stock prédit: 0.6u (21j restants) → prédit 2u mais non commandé |
| [MF0047] MF Mayonnaise 250ml | 2 | Stock prédit: 0.8u (30j restants) → prédit 2u mais non commandé |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 2 | Stock prédit: 0.8u (30j restants) → prédit 2u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: -0.2u (-9j restants) → prédit 1u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 0 | Stock prédit: -0.8u (-18j restants) → prédit 0u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: -0.1u (-2j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 4 | Stock prédit: -2.5u (-35j restants) → prédit 4u mais non commandé |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock prédit: 0.1u (7j restants) → prédit 1u mais non commandé |
| [MF0033] MF Tarti Poivron chilli 250g | 3 | Stock prédit: -0.4u (-7j restants) → prédit 3u mais non commandé |
| [MF0013] MF Olives Vertes 500g | 1 | Stock prédit: -0.6u (-22j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: -0.2u (-6j restants) → prédit 2u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: -1.4u (-47j restants) → prédit 1u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | Stock prédit: -1.5u (-55j restants) → prédit 2u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 0 | Stock prédit: -0.9u (-22j restants) → prédit 0u mais non commandé |
| [MF0012] MF Olives Mix 500g | 0 | Stock prédit: -0.2u (-19j restants) → prédit 0u mais non commandé |


---

## False Negatives (6)

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
| [DIS0012] Display Foodprint Karton LD | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD013] LD Tuscan Organic Spread 180 g | 8 | Stock suffisant: 1.4u (39j restants > seuil 30j) |
| [LD015] LD Onion Spread 180g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD011] LD Organic Kids Spread 180 g | 4 | Stock suffisant: 1.6u (58j restants > seuil 30j) |
| [JF048] JF DISPLAY SAUCES 250ML  | 3 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-17T16:30:08.179Z*
