# Rapport Backtest - Client MOHR FRISCHCENTER KG

## Contexte

- **Client** : MOHR FRISCHCENTER KG (ID: 39002)
- **Commande réelle** : S38906
- **Date commande** : 2025-09-01 09:08:14
- **Date cutoff système** : 2025-08-31 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 1,738 input + 290 output = 2,028 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 2 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 9 produits réels, 0 détectés |
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

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF048] JF DISPLAY SAUCES 250ML  | 1 | Predicted 1u but not ordered |
| [JF049] JF DISPLAY SAUCES Squeeze | 1 | Predicted 1u but not ordered |


---

## False Negatives (9)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | Never ordered in previous analysis window (no history) |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | Never ordered in previous analysis window (no history) |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 4 | Never ordered in previous analysis window (no history) |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 6 | Never ordered in previous analysis window (no history) |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | Never ordered in previous analysis window (no history) |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:20:05.468Z*
