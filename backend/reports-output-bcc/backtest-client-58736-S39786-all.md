# Rapport Backtest - Client Lions Club Visé Meuse

## Contexte

- **Client** : Lions Club Visé Meuse (ID: 58736)
- **Commande réelle** : S39786
- **Date commande** : 2025-10-27 11:40:31
- **Date cutoff système** : 2025-10-26 00:00:00
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
| [LV161] LV Tartinade Mangue curry 190g | 33 | Never ordered in previous analysis window (no history) |
| [LV216] LV Biscuits apéro Fromage & Oignon 100g bio | 16 | Never ordered in previous analysis window (no history) |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 20 | Never ordered in previous analysis window (no history) |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 6 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:27:17.351Z*
