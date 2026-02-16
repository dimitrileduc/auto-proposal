# Rapport Backtest - Client METZGEREI KREUSCH

## Contexte

- **Client** : METZGEREI KREUSCH (ID: 3632)
- **Commande réelle** : S38876
- **Date commande** : 2025-08-29 12:18:36
- **Date cutoff système** : 2025-08-28 00:00:00
- **Jours d'avance** : 1j



---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 0 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 8 produits réels, 0 détectés |
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

## False Negatives (8)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 8 | Never ordered in previous analysis window (no history) |
| [PF0093] FILOU MOUTARDE 300GR | 3 | Never ordered in previous analysis window (no history) |
| [PF0094] FILOU MOUTARDE 700 GR | 6 | Never ordered in previous analysis window (no history) |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 2 | Never ordered in previous analysis window (no history) |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 2 | Never ordered in previous analysis window (no history) |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 8 | Never ordered in previous analysis window (no history) |
| [PF0088] FILOU VOL AU VENT 800 GR | 2 | Never ordered in previous analysis window (no history) |
| [PF0089] FILOU VOL AU VENT 400 GR | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:23:51.502Z*
