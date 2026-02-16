# Rapport Backtest - Client BELGISCHES ROTES KREUZ

## Contexte

- **Client** : BELGISCHES ROTES KREUZ (ID: 3446)
- **Commande réelle** : S39392
- **Date commande** : 2025-09-25 09:16:16
- **Date cutoff système** : 2025-09-24 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 9
- **Tokens**: 7,866 input + 1,358 output = 9,224 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 8 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 2 produits réels, 0 détectés |
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

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1784] JF MOUTARDE DOUCE 250ML WECK | 200 | Predicted 200u but not ordered |
| [PI2838] PI VINAIGRETTE TRUFFE WECK 200 | 273 | Predicted 273u but not ordered |
| [PF1557] LV TARTINADE BIO AUBERGINE 200 | 167 | Predicted 167u but not ordered |
| [PF0088] FILOU VOL AU VENT 800 GR | 18 | Predicted 18u but not ordered |
| [PF0084] FILOU CARBONNADES 800 GR | 18 | Predicted 18u but not ordered |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 18 | Predicted 18u but not ordered |
| [PF0093] FILOU MOUTARDE 300GR | 10 | Predicted 10u but not ordered |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 18 | Predicted 18u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [PF1796] LD MAYONNAI TOMATE 250ML WECK | 13 | Never ordered in previous analysis window (no history) |
| [PF1798] LD MAYONNAI POIVRE 250ML WECK | 4 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:10:28.831Z*
