# Rapport Backtest - Client EDEKA SEBASTIAN HEIN E.K.

## Contexte

- **Client** : EDEKA SEBASTIAN HEIN E.K. (ID: 38913)
- **Commande réelle** : S36213
- **Date commande** : 2025-04-15 12:37:13
- **Date cutoff système** : 2025-04-14 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 13
- **Tokens**: 11,200 input + 1,254 output = 12,454 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 5 produits prédits, 0 corrects |
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

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 6 | Predicted 6u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 6 | Predicted 6u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 6 | Predicted 6u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 5 | Predicted 5u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 5 | Predicted 5u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF048] JF DISPLAY SAUCES 250ML  | 1 | Never ordered in previous analysis window (no history) |
| [JF049] JF DISPLAY SAUCES Squeeze | 1 | Never ordered in previous analysis window (no history) |
| [TVF013] TVF DISPLAY TARTINADES 200ML | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:26:27.849Z*
