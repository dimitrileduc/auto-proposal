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
| **Précision** | 0.0% | 6 produits prédits, 0 corrects |
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

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1784] JF MOUTARDE DOUCE 250ML WECK | 200 | Predicted 200u but not ordered |
| [PI2838] PI VINAIGRETTE TRUFFE WECK 200 | 273 | Predicted 273u but not ordered |
| [PF1557] LV TARTINADE BIO AUBERGINE 200 | 167 | Predicted 167u but not ordered |
| [PF0088] FILOU VOL AU VENT 800 GR | 18 | Predicted 18u but not ordered |
| [PF0084] FILOU CARBONNADES 800 GR | 18 | Predicted 18u but not ordered |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 18 | Predicted 18u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:28.830Z*
