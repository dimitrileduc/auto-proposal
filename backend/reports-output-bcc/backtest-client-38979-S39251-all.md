# Rapport Backtest - Client LA PETITE EPICERIE

## Contexte

- **Client** : LA PETITE EPICERIE (ID: 38979)
- **Commande réelle** : S39251
- **Date commande** : 2025-09-18 09:34:56
- **Date cutoff système** : 2025-09-17 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 13
- **Tokens**: 11,201 input + 1,376 output = 12,577 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 7 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 12 produits réels, 0 détectés |
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

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | Predicted 3u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | Predicted 3u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | Predicted 3u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Predicted 2u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Predicted 2u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Predicted 2u but not ordered |
| [REB06] REB chips bio - paprika fumé 35g | 2 | Predicted 2u but not ordered |


---

## False Negatives (12)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF066] FIL MOUTARDE 300G BOCAL | 3 | Never ordered in previous analysis window (no history) |
| [LV132] LV Tartinade Houmous type 190g | 2 | Never ordered in previous analysis window (no history) |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Never ordered in previous analysis window (no history) |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Never ordered in previous analysis window (no history) |
| [LV160] LV Tartinade Aubergine 190g | 2 | Never ordered in previous analysis window (no history) |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Never ordered in previous analysis window (no history) |
| [MF0055] MF Noix de cajou - Curry 133g | 2 | Never ordered in previous analysis window (no history) |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 2 | Never ordered in previous analysis window (no history) |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | Never ordered in previous analysis window (no history) |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 6 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 36 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:25:15.988Z*
