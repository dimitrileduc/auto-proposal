# Rapport Backtest - Client CRF MARKET OUPEYE OULIMA

## Contexte

- **Client** : CRF MARKET OUPEYE OULIMA (ID: 38758)
- **Commande réelle** : S37410
- **Date commande** : 2025-06-12 12:31:59
- **Date cutoff système** : 2025-06-11 00:00:00
- **Jours d'avance** : 1j



---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 0 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 10 produits réels, 0 détectés |
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

## False Negatives (10)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Never ordered in previous analysis window (no history) |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Never ordered in previous analysis window (no history) |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:28:19.686Z*
