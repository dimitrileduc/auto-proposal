# Rapport Backtest - Client Mottin, Xavier

## Contexte

- **Client** : Mottin, Xavier (ID: 71430)
- **Commande réelle** : S34850
- **Date commande** : 2025-02-13 08:08:20
- **Date cutoff système** : 2025-02-12 00:00:00
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
| [AQUA01] AQUAPAX - natural mineral water 500ml | 3 | Never ordered in previous analysis window (no history) |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 2 | Never ordered in previous analysis window (no history) |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Never ordered in previous analysis window (no history) |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | Never ordered in previous analysis window (no history) |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Never ordered in previous analysis window (no history) |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 2 | Never ordered in previous analysis window (no history) |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 2 | Never ordered in previous analysis window (no history) |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 2 | Never ordered in previous analysis window (no history) |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:26:01.083Z*
