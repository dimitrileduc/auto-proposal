# 📊 Analyse Stratégie Hybride vs Médiane Pure

**Date:** 2025-11-19
**Seuils:** Hausse > 2x, Baisse < 0.5x

## 🎯 Résumé Global

- **Produits analysés:** 5
- **MAE Médiane:** 9.80 unités
- **MAE Hybride:** 10.60 unités
- **Amélioration:** -8.2%

## ✅ Verdict

**❌ NON RECOMMANDÉ** : La stratégie hybride dégrade le MAE.

## 📈 Distribution des Produits

| Catégorie | Nombre | % |
|-----------|--------|---|
| Améliorés | 2 | 40.0% |
| Dégradés | 1 | 20.0% |
| Inchangés | 2 | 40.0% |

## 🎛️ Stratégies Appliquées

| Stratégie | Nombre | % | Description |
|-----------|--------|---|-------------|
| Médiane (stable) | 2 | 40.0% | Ratio 0.5x - 2x |
| Blend (hausse) | 2 | 40.0% | Ratio > 2x → (dernière + médiane) / 2 |
| Follow-Last (baisse) | 0 | 0.0% | Ratio < 0.5x → dernière commande |

## 📦 Détails par Produit

| Produit | Réel | Médiane | Hybride | Ratio | Erreur Médiane | Erreur Hybride | Gain | Stratégie |
|---------|------|---------|---------|-------|----------------|----------------|------|-----------|
| Produit B (baisse) | 15 | 49 | 15 | 0.31x | 34.0 | 0.0 | -34.0 ✅ | follow-last |
| Produit A (croissance) | 24 | 11 | 18 | 2.27x | 13.0 | 6.0 | -7.0 ✅ | blend |
| Produit C (stable) | 20 | 21 | 21 | 1.00x | 1.0 | 1.0 | 0 ➖ | median |
| Produit E (volatil) | 4 | 4 | 4 | 2.00x | 0.0 | 0.0 | 0 ➖ | median |
| Produit D (outlier) | 9 | 10 | 55 | 10.00x | 1.0 | 46.0 | +45.0 ❌ | blend |

## 📝 Notes

- **Ratio**: Dernière commande ÷ Médiane historique
- **Gain**: Erreur Médiane - Erreur Hybride (positif = amélioration)
- **Stratégies:**
  - `median`: Aucun changement (ratio stable entre 0.5x et 2x)
  - `blend`: Moyenne entre dernière et médiane (ratio > 2x = croissance forte)
  - `follow-last`: Suit la dernière commande (ratio < 0.5x = baisse brutale)

⚠️ **Attention:** Cette analyse est basée sur des données mockées pour démonstration.
Pour une analyse réelle, il faut accéder aux True Positives détaillés avec l'historique complet.