# Rapport Backtest - Client FOODPRINT SRL

## Contexte

- **Client** : FOODPRINT SRL (ID: 13621)
- **Commande réelle** : S40361
- **Date commande** : 2025-11-14 11:29:39
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 285
- **Tokens**: 265,366 input + 47,336 output = 312,702 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 0.0% | 49 produits prédits, 0 corrects |
| **Rappel** | 0.0% | 0 produits réels, 0 détectés |
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

## False Positives (49)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [RISH08] Rish Kombucha Lavender BIO - gingembre 330ml  | 1 | Predicted 1u but not ordered |
| [PF3391] LV VINAIGRETTE CAESAR 240ML | 150 | Predicted 150u but not ordered |
| [RISH08] Rish Kombucha Lavender BIO - hibiscus 330ml | 25 | Predicted 25u but not ordered |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 60 | Predicted 60u but not ordered |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 50 | Predicted 50u but not ordered |
| [RF001] REFIELD Compote de pommes 500g  | 1 | Predicted 1u but not ordered |
| [RF002] REFIELD Passata tomates 500G | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Predicted 1u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Predicted 1u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [MF0029] MF Tarti Datte chili 250g | 1 | Predicted 1u but not ordered |
| [MF0021] MF Sauce BBQ 250ml | 1 | Predicted 1u but not ordered |
| [MF0024] MF KETCHUP 250g | 1 | Predicted 1u but not ordered |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 36 | Predicted 36u but not ordered |
| [UPI02] Jus de pomme-fraise bio d'UPIGNY 250ml | 10 | Predicted 10u but not ordered |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 10 | Predicted 10u but not ordered |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 10 | Predicted 10u but not ordered |
| [PF3387] JF VINAIGRETTE CAESAR 240ML | 200 | Predicted 200u but not ordered |
| [PF3383] JF VINAIGRETTE CIBOULETTE 240ML  | 200 | Predicted 200u but not ordered |
| [PF3386] JF VINAIGRETTE MIEL MOUTARDE 240ML | 200 | Predicted 200u but not ordered |
| [PF3385] JF VINAIGRETTE TRUFFES 240ML | 200 | Predicted 200u but not ordered |
| [PF3384] JF VINAIGRETTE FINES HERBES 240ML  | 200 | Predicted 200u but not ordered |
| [PF3395] LV SDP SAUCE COCKTAIL 125G | 2100 | Predicted 2100u but not ordered |
| [PF3392] LV FR TARTINAPERO BIO ASPERGE BOCAL 190G | 434 | Predicted 434u but not ordered |
| [OCC05] OCCHIOLINO premium arancello 500ml | 3 | Predicted 3u but not ordered |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 10 | Predicted 10u but not ordered |
| [JOY06] JOY! Confiture bio à la rhubarbe 370g | 200 | Predicted 200u but not ordered |
| [JOY08] JOY! Confiture bio à la framboise 370g | 200 | Predicted 200u but not ordered |
| [KOKO01] KOKO Kombucha original 330ml | 40 | Predicted 40u but not ordered |
| [AQUA01] AQUAPAX - eau minérale naturelle 500ml | 111 | Predicted 111u but not ordered |
| [LEA05] LEAMO limonade bio au citron 330ml | 1 | Predicted 1u but not ordered |
| [LEA06] LEAMO maté 330ml | 1 | Predicted 1u but not ordered |
| [LEA07] LEAMO orangeade bio 330ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:41.614Z*
