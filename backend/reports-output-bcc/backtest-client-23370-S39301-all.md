# Rapport Backtest - Client CASEUS NEUPRÉ

## Contexte

- **Client** : CASEUS NEUPRÉ (ID: 23370)
- **Commande réelle** : S39301
- **Date commande** : 2025-09-22 06:12:37
- **Date cutoff système** : 2025-09-21 00:00:00
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
| [LV161] LV Tartinade Mangue curry 190g | 3 | Never ordered in previous analysis window (no history) |
| [LV330] LV BIO Tartinade Toscana 190g | 3 | Never ordered in previous analysis window (no history) |
| [LV160] LV Tartinade Aubergine 190g | 3 | Never ordered in previous analysis window (no history) |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | Never ordered in previous analysis window (no history) |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 3 | Never ordered in previous analysis window (no history) |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | Never ordered in previous analysis window (no history) |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | Never ordered in previous analysis window (no history) |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:24:10.139Z*
