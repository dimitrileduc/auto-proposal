# Rapport Backtest - Client FOODPRINT SRL, FOODPRINT SRL, Adresse de facturation

## Contexte

- **Client** : FOODPRINT SRL, FOODPRINT SRL, Adresse de facturation (ID: 17105)
- **Commande réelle** : S37902
- **Date commande** : 2025-07-04 11:57:50
- **Date cutoff système** : 2025-07-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 30
- **Tokens**: 26,325 input + 4,536 output = 30,861 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 30 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 2 produits réels, 0 détectés |
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

## False Positives (30)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1469] JF MAYONNAI TRUFFES 250ML WECK | 400 | Predicted 400u but not ordered |
| [PF1473] JF MAYONNAIS POIVRE 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1563] LV AIOLI PESTO BIO 200ML | 185 | Predicted 185u but not ordered |
| [PI3267] PI MAYONNAISE BIO CONS 250ML | 680 | Predicted 680u but not ordered |
| [PF1706] LV TARTINADE BIO BETTERAVE 200 | 990 | Predicted 990u but not ordered |
| [PF1768] LV TARTINADE BIO TRUFFES 135G | 500 | Predicted 500u but not ordered |
| [PF1786] TARTI ALNATUR BIO MANGUE 200ML | 300 | Predicted 300u but not ordered |
| [PF1789] TARTI ALNATUR BIO PAPRIKA 200M | 300 | Predicted 300u but not ordered |
| [PF1790] TARTI ALNATUR BIO TOMATE 200ML | 300 | Predicted 300u but not ordered |
| [PF3233] LV BE TARTINADE BIO TOSCANE 190G | 1050 | Predicted 1050u but not ordered |
| [PF3307] LV DE BROTAUFSTRICH BIO DATTE CHILI 180G | 300 | Predicted 300u but not ordered |
| [PF2002] TVF TARTINADE BIO MANGUE 200ML | 350 | Predicted 350u but not ordered |
| [PF2003] TVF TARTINADE BIO PAPRIKA200ML | 350 | Predicted 350u but not ordered |
| [PF2007] TVF TARTINADE BIO TOMATE 200ML | 350 | Predicted 350u but not ordered |
| [PF1703] LV MAYONNAISE BIO 470ML WECK | 140 | Predicted 140u but not ordered |
| [PF1462] LV AIOLI BIO 200ML | 370 | Predicted 370u but not ordered |
| [PF1557] LV TARTINADE BIO AUBERGINE 200 | 2000 | Predicted 2000u but not ordered |
| [PF1951] LV TARTINADE BIO BASILIC 400G | 166 | Predicted 166u but not ordered |
| [PF1707] LV TARTINADE BIO LENTILLE 200 | 330 | Predicted 330u but not ordered |
| [PF1629] LV TARTINADE BIO TOMATE 200ML | 2310 | Predicted 2310u but not ordered |
| [PF3235] LV BE TARTINADE BIO TOMATE OLIVE CAPRE 190G | 330 | Predicted 330u but not ordered |
| [PF3366] LV BE TARTINADE BIO ASPERGE 190G | 700 | Predicted 700u but not ordered |
| [PF1719] LV VIN CIBOULET PET 250 BIO | 500 | Predicted 500u but not ordered |
| [PF1967] JF SAUCE AIOLI 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1639] JF BURGER SQUEEZE 300ML | 150 | Predicted 150u but not ordered |
| [PF1524] JF VINAIGRET TRUFFES WECK 200M | 130 | Predicted 130u but not ordered |
| [PF1553] JF VINAIGRET MIEL MOU WECK 200 | 120 | Predicted 120u but not ordered |
| [PF1793] LV MAYONNAI TRUFFES 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1800] LV MAYONNAISE OEUFS 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1810] LV SAUCE BEARNAISE 250ML WECK | 200 | Predicted 200u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [PF0088] FILOU VOL AU VENT 800 GR | 8 | Never ordered in previous analysis window (no history) |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 8 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:07:12.654Z*
