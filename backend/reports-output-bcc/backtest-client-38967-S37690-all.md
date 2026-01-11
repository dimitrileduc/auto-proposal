# Rapport Backtest - Client KELLETER GMBH

## Contexte

- **Client** : KELLETER GMBH (ID: 38967)
- **Commande réelle** : S37690
- **Date commande** : 2025-06-26 08:50:02
- **Date cutoff système** : 2025-06-25 00:00:00
- **Jours d'avance** : 1j



---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 0 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 4 produits réels, 0 détectés |
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

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 5 | Never ordered in previous analysis window (no history) |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Never ordered in previous analysis window (no history) |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 5 | Never ordered in previous analysis window (no history) |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:26:20.632Z*
