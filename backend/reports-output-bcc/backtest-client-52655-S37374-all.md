# Rapport Backtest - Client MSG Retail SRL

## Contexte

- **Client** : MSG Retail SRL (ID: 52655)
- **Commande réelle** : S37374
- **Date commande** : 2025-06-11 13:22:37
- **Date cutoff système** : 2025-06-10 00:00:00
- **Jours d'avance** : 1j



---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 0 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 15 produits réels, 0 détectés |
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

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (15)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Never ordered in previous analysis window (no history) |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 4 | Never ordered in previous analysis window (no history) |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:28:04.950Z*
