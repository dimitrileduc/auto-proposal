# Rapport Backtest - Client PLUS QUAEDVLIEG AMBY B.V.

## Contexte

- **Client** : PLUS QUAEDVLIEG AMBY B.V. (ID: 71492)
- **Commande réelle** : S40062
- **Date commande** : 2025-11-03 09:16:13
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 3,494 input + 621 output = 4,115 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 6.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 54.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 58.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 45.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF068] FIL VOL AU VENT 800G BOCAL  | 40 | 30 | 10.0 | 33.3% | partial | Non | Non | LLM |
| [FIL19] FIL VOL AU VENT 400G BOCAL | 20 | 8 | 12.0 | 150.0% | partial | Non | Non | LLM |
| [JF071] FIL CARBONNADES 800G BOCAL  | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [JF072] FIL BOULETTES SAUCE CHASSEUR 800G BOCAL  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [JF068] FIL VOL AU VENT 800G BOCAL </strong> - LLM: 40u vs Médiane: 40u (Réel: 30u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 40u
- **Baseline calculee**: 40u
- **Mediane historique**: 40u
- **Reel commande**: 30u
- **Erreur LLM**: 10u (33.3%)
- **Erreur Mediane**: 10u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 40u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 19 août 2025, soit 75 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente (40u), l'absence d'historique sur l'année précédente et l'incertitude sur le cycle de rotation imposent l'application du principe de précaution B2B. Le délai depuis la dernière commande est important, ce qui crée un risque de rupture potentiel dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément aux règles, en cas de cycle irrégulier ou difficile à déterminer, il faut prévoir une commande. La quantité retenue est de 40 unités, correspondant à la valeur unique et médiane de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 171 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>2. [FIL19] FIL VOL AU VENT 400G BOCAL</strong> - LLM: 20u vs Médiane: 20u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 20u
- **Baseline calculee**: 20u
- **Mediane historique**: 20u
- **Reel commande**: 8u
- **Erreur LLM**: 12u (150.0%)
- **Erreur Mediane**: 12u (150.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 20u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 19 août, soit 75 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et pour couvrir un risque de rupture sur l'horizon des 30 prochains jours (Replenishment Threshold Days), une commande est nécessaire. La quantité retenue correspond à la valeur de la dernière commande connue (20 unités), faute d'autres points de comparaison pour établir une médiane.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 128 tokens
- **Total**: 999 tokens



</details>


<details>
<summary><strong>3. [JF071] FIL CARBONNADES 800G BOCAL </strong> - LLM: 2u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 19 août 2025, soit 75 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit de ce type. En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), une commande est nécessaire pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique multiple, la quantité de la dernière commande (2u) est retenue comme référence. Conformément aux règles de rotation faible, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 174 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>4. [JF072] FIL BOULETTES SAUCE CHASSEUR 800G BOCAL </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 19 août 2025, soit 75 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de détection d'un besoin incertain, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : En l'absence d'historique multiple, la quantité de la dernière commande connue (2 unités) est retenue comme référence pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 148 tokens
- **Total**: 1,026 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [JF068] FIL VOL AU VENT 800G BOCAL </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 09:03:49: 40u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 40u
**Quantite Reelle**: 30u

</details>


<details>
<summary><strong>2. [FIL19] FIL VOL AU VENT 400G BOCAL</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 09:03:49: 20u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>3. [JF071] FIL CARBONNADES 800G BOCAL </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 09:03:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [JF072] FIL BOULETTES SAUCE CHASSEUR 800G BOCAL </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 09:03:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:27:44.221Z*
