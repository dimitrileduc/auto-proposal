# Rapport Backtest - Client E-CENTER VIELER

## Contexte

- **Client** : E-CENTER VIELER (ID: 38886)
- **Commande réelle** : S40342
- **Date commande** : 2025-11-13 12:51:40
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 35
- **Tokens**: 32,813 input + 5,266 output = 38,079 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 13 produits prédits, 0 corrects |
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

## False Positives (13)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [DIS0012] Display Foodprint Karton LD | 1 | Predicted 1u but not ordered |
| [LD013] LD Tuscan Organic Spread 180 g | 8 | Predicted 8u but not ordered |
| [LD014] LD Organic Avocado Spread 180 g | 4 | Predicted 4u but not ordered |
| [LD015] LD Onion Spread 180g | 4 | Predicted 4u but not ordered |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 4 | Predicted 4u but not ordered |
| [LD011] LD Organic Kids Spread 180 g | 4 | Predicted 4u but not ordered |
| [LD006] LD Tartinade Olives bio 180g   | 2 | Predicted 2u but not ordered |
| [LD009] LD Organic Asparagus Spread 180 g | 2 | Predicted 2u but not ordered |
| [LD010] LD Organic Truffle Spread 135 g | 2 | Predicted 2u but not ordered |
| [LD012] LD Organic Samphire Spread 135 g | 2 | Predicted 2u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:07:25.838Z*
