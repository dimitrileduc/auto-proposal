# Rapport Backtest - Client Brasserie Grain D'Orge

## Contexte

- **Client** : Brasserie Grain D'Orge (ID: 17519)
- **Commande réelle** : S36974
- **Date commande** : 2025-06-11 07:58:50
- **Date cutoff système** : 2025-06-10 00:00:00
- **Jours d'avance** : 1j



---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 0 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 5 produits réels, 0 détectés |
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

## False Negatives (5)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| undefined | 0 | Never ordered in previous analysis window (no history) |
| GrainOrge/BT-ST-33cl/PROPRE  | 25920 | Never ordered in previous analysis window (no history) |
| GrainOrge/CA-PLAST-24*33CL/VIDE  | 1080 | Never ordered in previous analysis window (no history) |
| CPL/Intercalaire plastique consigné | 65 | Never ordered in previous analysis window (no history) |
| BB/Palette-IND-DIN | 7 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:27:34.937Z*
