# Rapport Backtest - Client Haferflöckchen unverpackt

## Contexte

- **Client** : Haferflöckchen unverpackt (ID: 12299)
- **Commande réelle** : S35824
- **Date commande** : 2025-05-28 07:13:20
- **Date cutoff système** : 2025-05-27 00:00:00
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
| [MF0030] MF Tarti Mangue Curry 250g  | 4 | Never ordered in previous analysis window (no history) |
| [MF0033] MF Tarti Poivron chilli 250g | 4 | Never ordered in previous analysis window (no history) |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 4 | Never ordered in previous analysis window (no history) |
| [MF0029] MF Tarti Datte chili 250g | 4 | Never ordered in previous analysis window (no history) |
| [MF0062] ​MF Tarti Betterave rouge | 1 | Never ordered in previous analysis window (no history) |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | Never ordered in previous analysis window (no history) |
| [MF0027] MF Tarti Aubergine 250g  | 2 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 21 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 126 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:27:21.959Z*
