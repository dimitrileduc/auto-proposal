# Rapport Backtest - Client CRF MARKET EUPEN SHOPPING CENT ROTENBERG

## Contexte

- **Client** : CRF MARKET EUPEN SHOPPING CENT ROTENBERG (ID: 29081)
- **Commande réelle** : S40323
- **Date commande** : 2025-11-13 12:27:19
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 80
- **Tokens**: 74,270 input + 12,574 output = 86,844 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 5 produits prédits, 0 corrects |
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

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF041] JF MAYONNAISE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [LD008] LD Tartinade Pois chiches bio 180g   | 1 | Predicted 1u but not ordered |
| [LD004] LD Tartinade Tomate Basilic bio 180g | 3 | Predicted 3u but not ordered |
| [RF001] REFIELD Compote de pommes 500g  | 1 | Predicted 1u but not ordered |
| [CB010] CB Jus de Pomme cubis 3l | 6 | Predicted 6u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:52.371Z*
