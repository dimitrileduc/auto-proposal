# Rapport Backtest - Client EDEKA RALF BREIL

## Contexte

- **Client** : EDEKA RALF BREIL (ID: 71178)
- **Commande réelle** : S35203
- **Date commande** : 2025-03-07 07:20:57
- **Date cutoff système** : 2025-03-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,120 input + 1,013 output = 7,133 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 7 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 14 produits réels, 0 détectés |
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

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 5 | Predicted 5u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 5 | Predicted 5u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 5 | Predicted 5u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 5 | Predicted 5u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Predicted 4u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 4 | Predicted 4u but not ordered |
| [DIS0003] Display TVF bois | 1 | Predicted 1u but not ordered |


---

## False Negatives (14)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | Never ordered in previous analysis window (no history) |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | Never ordered in previous analysis window (no history) |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Never ordered in previous analysis window (no history) |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | Never ordered in previous analysis window (no history) |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 3 | Never ordered in previous analysis window (no history) |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [DIS0004] Display JF bois | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:25:58.982Z*
