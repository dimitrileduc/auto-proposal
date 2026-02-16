# Rapport Backtest - Client La fromagerie des 2 Monts

## Contexte

- **Client** : La fromagerie des 2 Monts (ID: 24360)
- **Commande réelle** : S40245
- **Date commande** : 2025-11-14 12:30:40
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j



---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 0 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 6 produits réels, 0 détectés |
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

## False Negatives (6)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 3 | Never ordered in previous analysis window (no history) |
| [LV161] LV Tartinade Mangue curry 190g | 3 | Never ordered in previous analysis window (no history) |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | Never ordered in previous analysis window (no history) |
| [LV132] LV Tartinade Houmous type 190g | 3 | Never ordered in previous analysis window (no history) |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | Never ordered in previous analysis window (no history) |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 3 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:28:35.155Z*
