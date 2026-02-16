# Rapport Backtest - Client SRL SVASTI

## Contexte

- **Client** : SRL SVASTI (ID: 58766)
- **Commande réelle** : S36491
- **Date commande** : 2025-05-08 08:08:46
- **Date cutoff système** : 2025-05-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 1,731 input + 301 output = 2,032 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 2 produits prédits, 0 corrects |
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

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LC002] LC Coffret Découverte | 5 | Predicted 5u but not ordered |
| [LC001] LC Coffret Exploration  | 7 | Predicted 7u but not ordered |


---

## False Negatives (9)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Never ordered in previous analysis window (no history) |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Never ordered in previous analysis window (no history) |
| [CB010] CB Jus de Pomme cubis 3l | 3 | Never ordered in previous analysis window (no history) |
| [LEA05] LEAMO organic lemon lemonade 330 ml | 1 | Never ordered in previous analysis window (no history) |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Never ordered in previous analysis window (no history) |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Never ordered in previous analysis window (no history) |
| [fsv18] Mendiant bio vrac 2,8kg | 1 | Never ordered in previous analysis window (no history) |
| [fsv04] Amande nature bio vrac 2,8 kg | 1 | Never ordered in previous analysis window (no history) |
| [RISH05] RISH kombucha BIO - rose 750ml | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:28:49.386Z*
