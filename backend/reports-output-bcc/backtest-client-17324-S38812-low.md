# Rapport Backtest - Client CARREFOUR BELGIUM SA, Market Bastogne Esperanto

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Market Bastogne Esperanto (ID: 17324)
- **Commande réelle** : S38812
- **Date commande** : 2025-09-15 06:11:58
- **Date cutoff système** : 2025-09-14 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 21
- **Tokens**: 18,882 input + 3,591 output = 22,473 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 3 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 0 produits réels, 0 détectés |
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

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Predicted 2u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 6 | Predicted 6u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 6 | Predicted 6u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:01.815Z*
