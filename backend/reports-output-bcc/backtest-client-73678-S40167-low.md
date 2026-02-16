# Rapport Backtest - Client U FOOD MANAGEMENT

## Contexte

- **Client** : U FOOD MANAGEMENT (ID: 73678)
- **Commande réelle** : S40167
- **Date commande** : 2025-11-12 10:40:37
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 44
- **Tokens**: 39,105 input + 6,600 output = 45,705 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 9.5% | 21 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 17.4% | Score equilibre global |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV139] LV Tartinade Paprika Chili 380g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [LV139] LV Tartinade Paprika Chili 380g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 11 août 2025, soit exactement 92 jours (environ 3 mois) avant la date actuelle. Bien que l'historique soit limité à une seule commande, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B. Le délai écoulé suggère un besoin de renouvellement imminent pour éviter une rupture de stock prolongée. Conformément aux règles de gestion, la quantité retenue correspond à la valeur de la dernière commande (2 unités), ce qui représente le volume de rotation observé pour ce produit.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 133 tokens
- **Total**: 1,005 tokens



</details>


<details>
<summary><strong>2. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte à 92 jours (11 août). Bien que l'historique soit limité à une seule unité, le délai écoulé dépasse largement un cycle de rotation standard en B2B. En application du principe de précaution (Étape 1) et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue correspond à la médiane de l'historique récent (1u) afin de couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 121 tokens
- **Total**: 999 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [LV139] LV Tartinade Paprika Chili 380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 12:22:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 12:22:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (19)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 2 | Predicted 2u but not ordered |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Predicted 1u but not ordered |
| [fsv01] Cerneaux de noix nature bio vrac 1,8kg | 1 | Predicted 1u but not ordered |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Predicted 1u but not ordered |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Predicted 1u but not ordered |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Predicted 1u but not ordered |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | Predicted 1u but not ordered |
| [CB005] CB Apple juice 1l | 1 | Predicted 1u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 2 | Predicted 2u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 2 | Predicted 2u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | Predicted 2u but not ordered |
| [LV187] LV Tartinade Mangue Curry 380g | 2 | Predicted 2u but not ordered |
| [LV189] LV Tartinade Houmous Type 380g | 2 | Predicted 2u but not ordered |
| [LV217] LV Tartinade Basilic 380g | 2 | Predicted 2u but not ordered |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 2 | Predicted 2u but not ordered |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Predicted 1u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Predicted 1u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Predicted 1u but not ordered |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:22:10.813Z*
