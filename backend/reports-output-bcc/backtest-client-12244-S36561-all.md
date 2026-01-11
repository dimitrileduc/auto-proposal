# Rapport Backtest - Client Ratafia (Marc Maraite)

## Contexte

- **Client** : Ratafia (Marc Maraite) (ID: 12244)
- **Commande réelle** : S36561
- **Date commande** : 2025-05-07 08:06:20
- **Date cutoff système** : 2025-05-06 00:00:00
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
| Maraite/BT-Verte-1l/PROPRE  | 9800 | Never ordered in previous analysis window (no history) |
| Maraite/BT-Transparente-1l/PROPRE  | 2940 | Never ordered in previous analysis window (no history) |
| BB/Palette-IND-DIN | 12 | Never ordered in previous analysis window (no history) |
| CPL/Intercalaire plastique consigné | 65 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:27:35.763Z*
