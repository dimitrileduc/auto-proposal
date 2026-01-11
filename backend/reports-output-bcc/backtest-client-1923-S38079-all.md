# Rapport Backtest - Client Daphne SNC Kaska

## Contexte

- **Client** : Daphne SNC Kaska (ID: 1923)
- **Commande réelle** : S38079
- **Date commande** : 2025-07-15 11:26:53
- **Date cutoff système** : 2025-07-14 00:00:00
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
| [EMB0011] MMP Bocal 540 Vides | 720 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 720 | Never ordered in previous analysis window (no history) |
| [EMB0004] MMP Casier Vides | 120 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 120 | Never ordered in previous analysis window (no history) |
| [EMB0013] COUV TO70 NOIR RTS PAST | 720 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:28:41.989Z*
