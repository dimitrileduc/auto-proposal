# Rapport Backtest - Client FOODPRINT SRL ECHANTILLON

## Contexte

- **Client** : FOODPRINT SRL ECHANTILLON (ID: 24784)
- **Commande réelle** : S40301
- **Date commande** : 2025-11-13 09:20:33
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 92
- **Tokens**: 82,361 input + 14,061 output = 96,422 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 1.1% | 91 produits prédits, 1 corrects |
| **Rappel** | 14.3% | 7 produits réels, 1 détectés |
| **F1-Score** | 2.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles d'environ 60 à 70 jours (juin-août, août-septembre). Depuis la dernière commande du 29 septembre 2025, 44 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons un horizon de 74 jours, ce qui dépasse le cycle moyen constaté. Il existe donc un risque de rupture imminent. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 136 tokens
- **Total**: 1,072 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-29 09:21:59: 1u
- 2025-08-22 09:04:42: 1u
- 2025-06-20 13:58:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-26 09:26:00: 1u
- 2024-01-30 15:19:35: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (90)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Predicted 1u but not ordered |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | Predicted 1u but not ordered |
| [MF0047] MF Mayonnaise 250ml | 1 | Predicted 1u but not ordered |
| [SOWA02] SOWA bissap 250ml | 5 | Predicted 5u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [DIS0004] Display JF bois | 1 | Predicted 1u but not ordered |
| [DIS0003] Display TVF bois | 1 | Predicted 1u but not ordered |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | Predicted 1u but not ordered |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Predicted 1u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Predicted 1u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 1 | Predicted 1u but not ordered |
| [LV102] LV Karot. Ingwer Aufstrich 180g DE | 1 | Predicted 1u but not ordered |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Predicted 1u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Predicted 1u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Predicted 1u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 1 | Predicted 1u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Predicted 1u but not ordered |
| [MF0058] MF Confi Groseilles Bessen | 1 | Predicted 1u but not ordered |
| [MF0059] MF Confi Fraise- Ardbei | 1 | Predicted 1u but not ordered |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Predicted 1u but not ordered |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Predicted 1u but not ordered |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Predicted 1u but not ordered |
| [MF0014] MF Olives noires 500g | 1 | Predicted 1u but not ordered |
| [MF0013] MF Olives Vertes 500g | 1 | Predicted 1u but not ordered |
| [MF0012] MF Olives Mix 500g | 1 | Predicted 1u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | Predicted 2u but not ordered |
| [MF0027] MF Tarti Aubergine 250g  | 2 | Predicted 2u but not ordered |
| [MF0029] MF Tarti Datte chili 250g | 1 | Predicted 1u but not ordered |
| [MF0021] MF Sauce BBQ 250ml | 1 | Predicted 1u but not ordered |
| [MF0024] MF KETCHUP 250g | 2 | Predicted 2u but not ordered |
| [MF0052] MF Pois chiches  500g | 1 | Predicted 1u but not ordered |
| [MF0051] MF Kidney Beans 500g | 1 | Predicted 1u but not ordered |
| [DIS0001] Display M&F | 1 | Predicted 1u but not ordered |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | Predicted 1u but not ordered |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Predicted 1u but not ordered |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 1 | Predicted 1u but not ordered |
| [LV188] LV Tartinade Aubergine  380g | 1 | Predicted 1u but not ordered |
| [TVF015] TVF TARTINADE BIO AUBERGINE 380G | 1 | Predicted 1u but not ordered |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Predicted 1u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 1 | Predicted 1u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Predicted 1u but not ordered |
| [MF0062] ​MF Tarti Betterave rouge | 1 | Predicted 1u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Predicted 1u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Predicted 1u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Predicted 1u but not ordered |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Predicted 1u but not ordered |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Predicted 1u but not ordered |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Predicted 1u but not ordered |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Predicted 1u but not ordered |
| [LD015] LD Onion Spread 180g | 2 | Predicted 2u but not ordered |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 2 | Predicted 2u but not ordered |
| [LD011] LD Organic Kids Spread 180 g | 2 | Predicted 2u but not ordered |
| [LD014] LD Organic Avocado Spread 180 g | 2 | Predicted 2u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | Predicted 1u but not ordered |
| [fsv11] Noix de cajou mexicaines bio vrac 2,8kg  | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Predicted 1u but not ordered |
| [LV216] LV Biscuits apéro Fromage & Oignon 100g bio | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Predicted 2u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 2 | Predicted 2u but not ordered |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Predicted 1u but not ordered |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Predicted 1u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Predicted 1u but not ordered |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Predicted 1u but not ordered |
| [REB05] REB chips bio - sel de mer 35g | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Predicted 1u but not ordered |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | Predicted 1u but not ordered |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 1 | Predicted 1u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (6)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Never ordered in previous analysis window (no history) |
| [LV156] LV Sauce barbecue 263 ml bio | 1 | Never ordered in previous analysis window (no history) |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 1 | Never ordered in previous analysis window (no history) |
| [LV214] LV Biscuits apéro tomate basilic 100g bio  | 1 | Never ordered in previous analysis window (no history) |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Never ordered in previous analysis window (no history) |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:04:14.629Z*
