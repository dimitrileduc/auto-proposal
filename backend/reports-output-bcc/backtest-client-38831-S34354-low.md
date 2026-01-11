# Rapport Backtest - Client DLL AD SPA

## Contexte

- **Client** : DLL AD SPA (ID: 38831)
- **Commande réelle** : S34354
- **Date commande** : 2025-01-16 13:06:48
- **Date cutoff système** : 2025-01-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 19,351 input + 3,185 output = 22,536 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 4 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 0 produits réels, 0 détectés |
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
| [JF050] JF présentoir sauces Weck Bearnaise 250ml x12 | 3 | Predicted 3u but not ordered |
| [JF051] JF présentoir sauces Weck Cocktail 250ml x12 | 3 | Predicted 3u but not ordered |
| [JF052] JF présentoir sauces Weck Truffe 250ml x12 | 4 | Predicted 4u but not ordered |
| [JF053] JF présentoir sauces Weck mayo 470ml + 50 gratuits% (720ml) | 10 | Predicted 10u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:29:33.623Z*
