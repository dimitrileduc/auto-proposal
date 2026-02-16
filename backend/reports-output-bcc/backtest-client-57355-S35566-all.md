# Rapport Backtest - Client Lieber Unverpackt

## Contexte

- **Client** : Lieber Unverpackt (ID: 57355)
- **Commande réelle** : S35566
- **Date commande** : 2025-03-24 08:07:20
- **Date cutoff système** : 2025-03-23 00:00:00
- **Jours d'avance** : 1j



---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 0 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 11 produits réels, 0 détectés |
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

## False Negatives (11)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0032] MF Tarti Pois chiches 250 g | 3 | Never ordered in previous analysis window (no history) |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | Never ordered in previous analysis window (no history) |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 3 | Never ordered in previous analysis window (no history) |
| [MF0030] MF Tarti Mangue Curry 250g  | 3 | Never ordered in previous analysis window (no history) |
| [MF0033] MF Tarti Poivron chilli 250g | 3 | Never ordered in previous analysis window (no history) |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 3 | Never ordered in previous analysis window (no history) |
| [MF0027] MF Tarti Aubergine 250g  | 3 | Never ordered in previous analysis window (no history) |
| [MF0031] MF Tarti Olives verte 250g  | 2 | Never ordered in previous analysis window (no history) |
| [MF0047] MF Mayonnaise 250ml | 2 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 24 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 144 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:28:12.771Z*
