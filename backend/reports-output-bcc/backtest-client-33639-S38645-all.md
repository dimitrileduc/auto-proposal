# Rapport Backtest - Client Gaume - Jus de pomme

## Contexte

- **Client** : Gaume - Jus de pomme (ID: 33639)
- **Commande réelle** : S38645
- **Date commande** : 2025-09-02 10:55:55
- **Date cutoff système** : 2025-09-01 00:00:00
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
| undefined | 0 | Never ordered in previous analysis window (no history) |
| Palette-VMF  | 0 | Never ordered in previous analysis window (no history) |
| BB/Palette-IND-DIN | 0 | Never ordered in previous analysis window (no history) |
| Gaume/BT-Blanche-1l/SALE | 0 | Never ordered in previous analysis window (no history) |
| Gaume/BT-Verte-1l/SALE  | 0 | Never ordered in previous analysis window (no history) |
| Gaume/BT-Blanche-1l/PROPRE | 4224 | Never ordered in previous analysis window (no history) |
| Gaume/BT-Verte-1l/PROPRE  | 3600 | Never ordered in previous analysis window (no history) |
| CPL/Intercalaire plastique consigné | 102 | Never ordered in previous analysis window (no history) |
| CPL/Intercalaire plastique consigné/SALE | -52 | Never ordered in previous analysis window (no history) |
| Gaume/Palox-1200*1l/VIDE  | 15 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:28:41.612Z*
