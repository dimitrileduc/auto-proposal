# Rapport Backtest - Client BELGOBON

## Contexte

- **Client** : BELGOBON (ID: 60186)
- **Commande réelle** : S39140
- **Date commande** : 2025-09-10 13:26:06
- **Date cutoff système** : 2025-09-09 00:00:00
- **Jours d'avance** : 1j



---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 0 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 9 produits réels, 0 détectés |
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

## False Negatives (9)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Never ordered in previous analysis window (no history) |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Never ordered in previous analysis window (no history) |
| [AQUA01] AQUAPAX - natural mineral water 500ml | 2 | Never ordered in previous analysis window (no history) |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | Never ordered in previous analysis window (no history) |
| [JOY03] JOY! Organic Apricot Jam 370g | 2 | Never ordered in previous analysis window (no history) |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 2 | Never ordered in previous analysis window (no history) |
| [JOY05] Organic Cherry Jam 370g | 2 | Never ordered in previous analysis window (no history) |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | Never ordered in previous analysis window (no history) |
| [JOY08] JOY! Organic Raspberry Jam 370g | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:25:17.885Z*
