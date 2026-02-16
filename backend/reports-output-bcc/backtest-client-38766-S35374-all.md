# Rapport Backtest - Client CRF MARKET SINAAI BASTIJNS BVBA

## Contexte

- **Client** : CRF MARKET SINAAI BASTIJNS BVBA (ID: 38766)
- **Commande réelle** : S35374
- **Date commande** : 2025-03-13 08:51:49
- **Date cutoff système** : 2025-03-12 00:00:00
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
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Never ordered in previous analysis window (no history) |
| Schenker | 0 | Never ordered in previous analysis window (no history) |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Never ordered in previous analysis window (no history) |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Never ordered in previous analysis window (no history) |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Never ordered in previous analysis window (no history) |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Never ordered in previous analysis window (no history) |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Never ordered in previous analysis window (no history) |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Never ordered in previous analysis window (no history) |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Never ordered in previous analysis window (no history) |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:26:44.236Z*
