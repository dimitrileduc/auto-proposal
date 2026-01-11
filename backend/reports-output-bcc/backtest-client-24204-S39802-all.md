# Rapport Backtest - Client Ferme de la Grosse Haie

## Contexte

- **Client** : Ferme de la Grosse Haie (ID: 24204)
- **Commande réelle** : S39802
- **Date commande** : 2025-10-21 07:44:59
- **Date cutoff système** : 2025-10-20 00:00:00
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
| [MF0055] MF Noix de cajou - Curry 133g | 3 | Never ordered in previous analysis window (no history) |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Never ordered in previous analysis window (no history) |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Never ordered in previous analysis window (no history) |
| [LV145] LV Sauce Tartare 200 ml  | 1 | Never ordered in previous analysis window (no history) |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 2 | Never ordered in previous analysis window (no history) |
| [LV146] LV Sauce Aïoli 200 ml | 2 | Never ordered in previous analysis window (no history) |
| [LV149] LV Sauce Aioli Pesto 200ml | 2 | Never ordered in previous analysis window (no history) |
| [LV158] LV Moutarde 200 ml | 3 | Never ordered in previous analysis window (no history) |
| [LV140] LV Moutarde à l'ancienne  200ml | 2 | Never ordered in previous analysis window (no history) |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Never ordered in previous analysis window (no history) |
| [LV160] LV Tartinade Aubergine 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Never ordered in previous analysis window (no history) |
| [LV132] LV Tartinade Houmous type 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV040] LV Caprons apéritifs 240g | 1 | Never ordered in previous analysis window (no history) |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 3 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 30 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 30 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:29:02.340Z*
