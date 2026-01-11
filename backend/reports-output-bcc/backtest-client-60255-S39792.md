# Rapport Backtest - Client CHATEAU DE VIGNEE - HÔTEL

## Contexte

- **Client** : CHATEAU DE VIGNEE - HÔTEL (ID: 60255)
- **Commande réelle** : S39792
- **Date commande** : 2025-10-21 07:43:07
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 1,746 input + 352 output = 2,098 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 2 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB05] REB chips bio - sel de mer 35g | 10 | 10 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB06] REB chips bio - paprika fumé 35g | 10 | 10 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [REB05] REB chips bio - sel de mer 35g</strong> - LLM: 10u vs Médiane: 10u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 10u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 04/08/2025, soit 77 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle précis, le délai écoulé est important. En application du principe de précaution B2B (cycle irrégulier ou difficile à déterminer), un besoin de réapprovisionnement est identifié pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique N-1 et avec une seule commande de référence, la quantité est maintenue à 10 unités, correspondant à la dernière commande connue (médiane sur échantillon unique).

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 171 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>2. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM: 10u vs Médiane: 10u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 10u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 04/08/2025, soit 77 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle précis, le délai écoulé est significatif pour un produit de type snacking (chips). En application du principe de précaution B2B (incertitude sur la rotation = prévoir commande) et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique multiple, la quantité de la dernière commande (10u) est utilisée comme référence pour maintenir le stock initialement mis en place.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 181 tokens
- **Total**: 1,054 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [REB05] REB chips bio - sel de mer 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 12:36:17: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>2. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 12:36:17: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 10u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:13:53.756Z*
