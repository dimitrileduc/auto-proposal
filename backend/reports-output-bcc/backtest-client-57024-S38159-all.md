# Rapport Backtest - Client Huc, Charlotte

## Contexte

- **Client** : Huc, Charlotte (ID: 57024)
- **Commande réelle** : S38159
- **Date commande** : 2025-07-22 06:16:49
- **Date cutoff système** : 2025-07-21 00:00:00
- **Jours d'avance** : 1j



---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 0 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 18 produits réels, 0 détectés |
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

## False Negatives (18)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV146] LV Sauce Aïoli 200 ml | 1 | Never ordered in previous analysis window (no history) |
| [LV160] LV Tartinade Aubergine 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV131] LV Tartinade Potiron 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV135] LV Tartinade Basilico 190g | 2 | Never ordered in previous analysis window (no history) |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV189] LV Tartinade Houmous Type 380g | 1 | Never ordered in previous analysis window (no history) |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | Never ordered in previous analysis window (no history) |
| [LV214] LV Biscuits apéro tomate basilic 100g bio  | 1 | Never ordered in previous analysis window (no history) |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 1 | Never ordered in previous analysis window (no history) |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Never ordered in previous analysis window (no history) |
| [REB05] REB chips bio - sel de mer 35g | 1 | Never ordered in previous analysis window (no history) |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | Never ordered in previous analysis window (no history) |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 1 | Never ordered in previous analysis window (no history) |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 1 | Never ordered in previous analysis window (no history) |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 1 | Never ordered in previous analysis window (no history) |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:26:28.463Z*
