# Rapport Backtest - Client Jardin d'Antan

## Contexte

- **Client** : Jardin d'Antan (ID: 38965)
- **Commande réelle** : S39130
- **Date commande** : 2025-09-12 06:19:24
- **Date cutoff système** : 2025-09-11 00:00:00
- **Jours d'avance** : 1j



---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 0 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 21 produits réels, 0 détectés |
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

## False Negatives (21)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 4 | Never ordered in previous analysis window (no history) |
| [LV145] LV Sauce Tartare 200 ml  | 4 | Never ordered in previous analysis window (no history) |
| [LV146] LV Sauce Aïoli 200 ml | 6 | Never ordered in previous analysis window (no history) |
| [LV147] LV Sauce Cocktail 200 ml | 4 | Never ordered in previous analysis window (no history) |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 4 | Never ordered in previous analysis window (no history) |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 4 | Never ordered in previous analysis window (no history) |
| [LV155] LV Vinaigrette Caesar 250 ml | 4 | Never ordered in previous analysis window (no history) |
| [LV157] LV Ketchup aux tomates 263 ml bio | 2 | Never ordered in previous analysis window (no history) |
| [LV140] LV Moutarde à l'ancienne  200ml | 4 | Never ordered in previous analysis window (no history) |
| [LV160] LV Tartinade Aubergine 190g | 8 | Never ordered in previous analysis window (no history) |
| [LV129] LV Tartinade Carotte Gingembre 190g | 8 | Never ordered in previous analysis window (no history) |
| [LV161] LV Tartinade Mangue curry 190g | 8 | Never ordered in previous analysis window (no history) |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 8 | Never ordered in previous analysis window (no history) |
| [LV132] LV Tartinade Houmous type 190g | 8 | Never ordered in previous analysis window (no history) |
| [LV162] LV Tartinade Tomato Basilico 190g | 6 | Never ordered in previous analysis window (no history) |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 8 | Never ordered in previous analysis window (no history) |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 8 | Never ordered in previous analysis window (no history) |
| [LV330] LV BIO Tartinade Toscana 190g | 8 | Never ordered in previous analysis window (no history) |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 3 | Never ordered in previous analysis window (no history) |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 3 | Never ordered in previous analysis window (no history) |
| [LV040] LV Caprons apéritifs 240g | 4 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:28:34.974Z*
