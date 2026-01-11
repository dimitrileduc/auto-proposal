# Rapport Backtest - Client AD EYNATTEN DELHAIZE EYNADIS

## Contexte

- **Client** : AD EYNATTEN DELHAIZE EYNADIS (ID: 38696)
- **Commande réelle** : S40324
- **Date commande** : 2025-11-13 12:28:59
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 71
- **Tokens**: 68,984 input + 11,628 output = 80,612 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 10 produits prédits, 0 corrects |
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

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF067] FIL MOUTARDE 700G BOCAL | 2 | Predicted 2u but not ordered |
| [FIL27] FIL MOUTARDE 300ML SQUEEZE  | 2 | Predicted 2u but not ordered |
| [FIL23] FIL MAYONNAISE 300ML SQUEEZE  | 1 | Predicted 1u but not ordered |
| [FIL19] FIL VOL AU VENT 400G BOCAL | 2 | Predicted 2u but not ordered |
| [JF068] FIL VOL AU VENT 800G BOCAL  | 2 | Predicted 2u but not ordered |
| [JF074] FIL MAYONNAISE ŒUFS 1L SEAU  | 1 | Predicted 1u but not ordered |
| [JF041] JF MAYONNAISE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [LD004] LD Tartinade Tomate Basilic bio 180g | 2 | Predicted 2u but not ordered |
| [LD008] LD Tartinade Pois chiches bio 180g   | 2 | Predicted 2u but not ordered |
| [MF0024] MF KETCHUP 250g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:20:28.005Z*
