# Rapport Backtest - Client Appelfabriek

## Contexte

- **Client** : Appelfabriek (ID: 17381)
- **Commande réelle** : S38430
- **Date commande** : 2025-08-08 11:04:31
- **Date cutoff système** : 2025-08-07 00:00:00
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
| Appelfabriek/BT-VDF-1l/PROPRE  | 36000 | Never ordered in previous analysis window (no history) |
| CPL/Intercalaire plastique consigné | 0 | Never ordered in previous analysis window (no history) |
| BB/Palette-IND-DIN | 0 | Never ordered in previous analysis window (no history) |
| Appelfabriek/CA-PLAST-6*70cl/VIDE | 3696 | Never ordered in previous analysis window (no history) |
| BB/Palette-EU | 0 | Never ordered in previous analysis window (no history) |
| Palette-CHEP | 0 | Never ordered in previous analysis window (no history) |
| Palette-VMF  | 0 | Never ordered in previous analysis window (no history) |
| Appelfabriek/Palox-500*1L/VIDE | 0 | Never ordered in previous analysis window (no history) |
| Palette-IND NON STANDARD  | 0 | Never ordered in previous analysis window (no history) |
| Palette EURO | 31 | Never ordered in previous analysis window (no history) |
| Appelfabriek/div-CA-plastique/VIDE | 0 | Never ordered in previous analysis window (no history) |
| Appelfabriek/BT-VDF-70cl/PROPRE | 2000 | Never ordered in previous analysis window (no history) |
| Palette-EURO-LPR | 1 | Never ordered in previous analysis window (no history) |
| Palette-EURO-CHEP | 1 | Never ordered in previous analysis window (no history) |
| undefined | 0 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:15:14.116Z*
