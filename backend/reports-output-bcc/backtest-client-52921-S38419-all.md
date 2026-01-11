# Rapport Backtest - Client Eco Terra GmbH

## Contexte

- **Client** : Eco Terra GmbH (ID: 52921)
- **Commande réelle** : S38419
- **Date commande** : 2025-08-08 06:28:47
- **Date cutoff système** : 2025-08-07 00:00:00
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
| [ECT002] ECT Auberginenaufstrich 250g  | 192 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 576 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 96 | Never ordered in previous analysis window (no history) |
| [ECT003] ECT Möhren-Ingwer Aufstrich 250g  | 192 | Never ordered in previous analysis window (no history) |
| [ECT001] ECT Meerettich Apfel Aufstrich 250g | 96 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:28:09.909Z*
