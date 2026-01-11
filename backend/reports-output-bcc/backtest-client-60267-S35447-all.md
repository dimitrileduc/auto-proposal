# Rapport Backtest - Client CLEMENCE DE PIERPONT

## Contexte

- **Client** : CLEMENCE DE PIERPONT (ID: 60267)
- **Commande réelle** : S35447
- **Date commande** : 2025-03-17 13:58:16
- **Date cutoff système** : 2025-03-16 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 3,500 input + 620 output = 4,120 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 4 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 3 produits réels, 0 détectés |
| **F1-Score** | 0.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (0)

*Aucun produit correctement prédit (rappel = 0%)*

---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 7 | Predicted 7u but not ordered |
| [WIG04] WIGNAC cidre rosé bio 750ml | 2 | Predicted 2u but not ordered |
| [WIG03] WIGNAC cidre naturel bio 750ml | 3 | Predicted 3u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [WIG01] WIGNAC cidre naturel bio 330ml | 6 | Never ordered in previous analysis window (no history) |
| [FO001] FO CITRONNADE BIO 33cl | 5 | Never ordered in previous analysis window (no history) |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 5 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:25:55.923Z*
