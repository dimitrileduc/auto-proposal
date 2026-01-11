# Rapport Backtest - Client SPRL GOOD & FOOD, Good & Food

## Contexte

- **Client** : SPRL GOOD & FOOD, Good & Food (ID: 70082)
- **Commande réelle** : S38184
- **Date commande** : 2025-07-22 11:15:28
- **Date cutoff système** : 2025-07-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 8
- **Tokens**: 7,091 input + 1,299 output = 8,390 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 5 produits prédits, 0 corrects |
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

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3352] DLL MARINADE AVOCAT TOMATES SECHEES 240ML | 282 | Predicted 282u but not ordered |
| [PF3351] DLL MARINADE AVOCAT BBQ 240ML | 282 | Predicted 282u but not ordered |
| [PF3353] DLL DRESSING AVOCAT MIEL MOUTARDE 240ML | 282 | Predicted 282u but not ordered |
| [PF3358] DLL DRESSING AVOCAT ITALIAN 240ML | 70 | Predicted 70u but not ordered |
| [PF3355] DLL DRESSING AVOCAT POPPY SEEDS 240ML | 75 | Predicted 75u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:21:37.316Z*
