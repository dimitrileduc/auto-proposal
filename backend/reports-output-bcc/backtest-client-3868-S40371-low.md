# Rapport Backtest - Client TERRA NATURKOST HANDELS KG

## Contexte

- **Client** : TERRA NATURKOST HANDELS KG (ID: 3868)
- **Commande réelle** : S40371
- **Date commande** : 2025-11-14 15:19:09
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 16
- **Tokens**: 15,054 input + 2,605 output = 17,659 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 2 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 50.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 200.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 200.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 200.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV189] LV Tartinade Houmous Type 380g | 75 | 25 | 50.0 | 200.0% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [LV189] LV Tartinade Houmous Type 380g</strong> - LLM: 75u vs Médiane: 75u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 75u
- **Baseline calculee**: 75u
- **Mediane historique**: 75u
- **Reel commande**: 25u
- **Erreur LLM**: 50u (200.0%)
- **Erreur Mediane**: 50u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 75u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 juillet 2025, soit plus de 110 jours sans activité. En l'absence d'historique récurrent permettant de définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture prolongée. Le besoin est considéré comme incertain mais probable compte tenu du délai écoulé. La quantité retenue est de 75 unités, correspondant au volume de la dernière commande connue (médiane sur historique unique).

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 114 tokens
- **Total**: 988 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [LV189] LV Tartinade Houmous Type 380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 10:11:33: 75u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 75u
**Quantite Reelle**: 25u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 75 | Predicted 75u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:32.019Z*
