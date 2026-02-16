# Rapport Backtest - Client CONSERVERIE ET MOUTARDERIE BELGE ECHANTILLON

## Contexte

- **Client** : CONSERVERIE ET MOUTARDERIE BELGE ECHANTILLON (ID: 24092)
- **Commande réelle** : S39541
- **Date commande** : 2025-10-03 10:10:16
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 34
- **Tokens**: 31,919 input + 5,367 output = 37,286 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 11 produits prédits, 0 corrects |
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

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 1 | Predicted 1u but not ordered |
| [PF1768] LV TARTINADE BIO TRUFFES 135G | 1 | Predicted 1u but not ordered |
| [PF0609] YVALLI SAUCE TOMATE 2,5 KG | 1 | Predicted 1u but not ordered |
| [PF0509] YVALLI GR BOUL TOMATE 2,5 KG | 1 | Predicted 1u but not ordered |
| [PF0520] YVALLI PET BOUL TOMATE 2,5 KG | 1 | Predicted 1u but not ordered |
| [PF0501] YVALLI VINAIGRETTE 5 KG JERRY | 1 | Predicted 1u but not ordered |
| [PF1552] LV KETCHUP BIO 290G | 1 | Predicted 1u but not ordered |
| [PF3316] DLL VINAIGRETTE FINES HERBES PET 450ML | 1 | Predicted 1u but not ordered |
| [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML | 1 | Predicted 1u but not ordered |
| [PF3301] DLL MAYONNAISE CITRON 300ML | 1 | Predicted 1u but not ordered |
| [PF3340] CARRE MAYONNAISE BELGE 720ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:33.281Z*
