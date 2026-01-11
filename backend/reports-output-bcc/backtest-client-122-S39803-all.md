# Rapport Backtest - Client Vert2Terre

## Contexte

- **Client** : Vert2Terre (ID: 122)
- **Commande réelle** : S39803
- **Date commande** : 2025-10-20 13:22:49
- **Date cutoff système** : 2025-10-19 00:00:00
- **Jours d'avance** : 1j



---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 0 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 33 produits réels, 0 détectés |
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

## False Negatives (33)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0059] MF Confi Fraise- Ardbei | 1 | Never ordered in previous analysis window (no history) |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Never ordered in previous analysis window (no history) |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Never ordered in previous analysis window (no history) |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Never ordered in previous analysis window (no history) |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Never ordered in previous analysis window (no history) |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Never ordered in previous analysis window (no history) |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Never ordered in previous analysis window (no history) |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | Never ordered in previous analysis window (no history) |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Never ordered in previous analysis window (no history) |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Never ordered in previous analysis window (no history) |
| [MF0027] MF Tarti Aubergine 250g  | 1 | Never ordered in previous analysis window (no history) |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Never ordered in previous analysis window (no history) |
| [MF0029] MF Tarti Datte chili 250g | 1 | Never ordered in previous analysis window (no history) |
| [MF0024] MF KETCHUP 250g | 1 | Never ordered in previous analysis window (no history) |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Never ordered in previous analysis window (no history) |
| [RF002] REFIELD Passata tomates 500G | 1 | Never ordered in previous analysis window (no history) |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Never ordered in previous analysis window (no history) |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Never ordered in previous analysis window (no history) |
| [LV149] LV Sauce Aioli Pesto 200ml | 1 | Never ordered in previous analysis window (no history) |
| [LV160] LV Tartinade Aubergine 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV132] LV Tartinade Houmous type 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV136] LV Tartinade Betterave 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV135] LV Tartinade Basilico 190g | 1 | Never ordered in previous analysis window (no history) |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Never ordered in previous analysis window (no history) |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Never ordered in previous analysis window (no history) |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Never ordered in previous analysis window (no history) |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 1 | Never ordered in previous analysis window (no history) |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 16 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 96 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:23:52.976Z*
