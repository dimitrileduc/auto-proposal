# Rapport Backtest - Client Tante Olga OHG

## Contexte

- **Client** : Tante Olga OHG (ID: 319)
- **Commande réelle** : S34826
- **Date commande** : 2025-02-13 13:15:05
- **Date cutoff système** : 2025-02-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 10
- **Tokens**: 8,720 input + 1,472 output = 10,192 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.0% | 10 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 75.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.17 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 29.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 29.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 6 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |
| [MF0052] MF Pois chiches  500g | 6 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [RF003] REFIELD Maïs 500G  | 5 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 6u vs Médiane: 5u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 5u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 23 septembre 2024, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de données récentes crée une incertitude sur l'état des stocks. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), une commande est déclenchée. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique multiple, on se base sur la dernière quantité connue. La médiane et la valeur unique étant de 6 unités, cette quantité est maintenue pour assurer la disponibilité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 161 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>2. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 4u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
Le produit présente une rotation très faible avec une seule commande enregistrée il y a plus de 140 jours. Bien que le cycle soit difficile à déterminer, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée si un besoin survient dans les 30 prochains jours. En l'absence d'historique multiple, la quantité est basée sur la dernière commande connue (4 unités) afin de maintenir un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 112 tokens
- **Total**: 985 tokens



</details>


<details>
<summary><strong>3. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 4u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte à plus de 140 jours, ce qui dépasse largement tout cycle de rotation standard pour un produit de ce type. En l'absence d'historique récurrent permettant d'établir une saisonnalité ou une fréquence précise, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. Le besoin est considéré comme immédiat (risque de rupture avéré). La quantité retenue correspond à la dernière commande connue (4 unités), conformément à la règle de maintien des volumes sur les rotations faibles et irrégulières.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 125 tokens
- **Total**: 998 tokens



</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 4u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 septembre 2024, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de commande récente et l'incertitude sur le cycle de réapprovisionnement imposent l'application du principe de précaution B2B. Un risque de rupture est identifié par défaut. ÉTAPE 2 : Estimation quantité. L'historique récent présente une commande unique de 4 unités. En l'absence d'autres données ou de saisonnalité N-1, la médiane (4u) est retenue pour maintenir le stock sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 154 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>5. [MF0052] MF Pois chiches  500g</strong> - LLM: 6u vs Médiane: 6u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 23 septembre 2024, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B. Le risque de rupture est considéré comme présent par défaut de visibilité sur le stock résiduel. ÉTAPE 2 : En l'absence d'historique multiple, la quantité de la dernière commande (6u) est retenue comme référence pour maintenir le stock, conformément à la règle de maintien des volumes sur rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 138 tokens
- **Total**: 1,008 tokens



</details>


<details>
<summary><strong>6. [RF003] REFIELD Maïs 500G </strong> - LLM: 5u vs Médiane: 6u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 6u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 23 septembre 2024, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B. Le risque de rupture est considéré comme présent par défaut de visibilité. ÉTAPE 2 : En l'absence d'historique multiple, la quantité est basée sur la dernière commande connue (5u) pour maintenir le stock sans risque de surstockage, conformément à la règle de maintien des volumes sur rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 136 tokens
- **Total**: 1,006 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-09-23 13:26:54: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-09-23 13:26:54: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-09-23 13:26:54: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-09-23 13:26:54: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>5. [MF0052] MF Pois chiches  500g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-09-23 13:26:54: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>6. [RF003] REFIELD Maïs 500G </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-09-23 13:26:54: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 4u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0047] MF Mayonnaise 250ml | 3 | Predicted 3u but not ordered |
| [MF0051] MF Kidney Beans 500g | 3 | Predicted 3u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 5 | Predicted 5u but not ordered |
| [MF0046] MF ORIENTAL BOWL 500G | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:27:23.427Z*
