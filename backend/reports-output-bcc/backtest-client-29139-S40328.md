# Rapport Backtest - Client DLL AD EUPEN EUSCO

## Contexte

- **Client** : DLL AD EUPEN EUSCO (ID: 29139)
- **Commande réelle** : S40328
- **Date commande** : 2025-11-13 12:30:22
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 83
- **Tokens**: 81,499 input + 14,348 output = 95,847 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 3.8% | 79 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 7.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 4.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 70.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 69.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -70.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 7 | 5.0 | 71.4% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 7 | 5.0 | 71.4% | partial | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 6 | 4.0 | 66.7% | partial | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 7u
- **Erreur LLM**: 5u (71.4%)
- **Erreur Mediane**: 4u (57.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 27 octobre 2025. L'historique récent montre un cycle de commande moyen d'environ 28 jours (intervalles de 40, 21, 21, 34, 17 jours). Au 12 novembre, 16 jours se sont écoulés depuis la dernière commande. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 46 jours sans commande d'ici la fin de la période de vigilance, ce qui dépasse largement le cycle moyen. Le risque de rupture est avéré. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes sont : 3, 2, 1, 3, 2, 3. La médiane de ces valeurs est de 2,5. Conformément à la règle de prudence privilégiant la valeur la plus basse en cas de doute sur la médiane, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,141 tokens
- **Output**: 231 tokens
- **Total**: 1,372 tokens



</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 7u
- **Erreur LLM**: 5u (71.4%)
- **Erreur Mediane**: 5u (71.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 40 jours entre chaque réapprovisionnement. La dernière commande datant du 27 octobre (il y a 16 jours), le prochain besoin théorique se situe autour du 6 décembre, ce qui entre dans l'horizon des 30 jours du seuil de réapprovisionnement (Replenishment Threshold Days). Bien que la dernière commande fût de 1u, l'historique récent et N-1 montre une récurrence dominante de 2u. En application du principe de précaution B2B pour éviter une rupture sur un produit à rotation régulière, une commande est préconisée. La quantité retenue est de 2u, correspondant à la médiane des commandes historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 1,073 tokens
- **Output**: 169 tokens
- **Total**: 1,242 tokens



</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 6u
- **Erreur LLM**: 4u (66.7%)
- **Erreur Mediane**: 4u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 35 à 40 jours. La dernière commande datant du 27 octobre (il y a 16 jours), le prochain besoin théorique se situe autour du 1er décembre, ce qui entre dans l'horizon des 30 jours du Replenishment Threshold Days. En application du principe de précaution B2B, un risque de rupture est identifié. Pour la quantité, l'historique récent oscille entre 2u et 3u. Conformément aux règles de gestion, la médiane basse est privilégiée pour éviter le surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,092 tokens
- **Output**: 149 tokens
- **Total**: 1,241 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-27 11:39:53: 3u
- 2025-09-17 11:24:53: 2u
- 2025-08-27 06:21:46: 1u
- 2025-08-06 12:15:13: 3u
- 2025-07-03 11:56:36: 2u
- 2025-06-16 08:58:08: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 14:15:21: 3u
- 2024-10-04 09:33:24: 1u
- 2024-09-09 13:02:32: 4u
- 2024-08-05 10:31:21: 3u
- 2024-07-11 13:39:47: 3u
- 2024-06-24 13:10:55: 1u
- 2024-06-04 11:33:54: 1u
- 2024-05-13 14:04:31: 4u
- 2024-04-08 08:18:30: 2u
- 2024-03-21 08:49:39: 3u
- 2024-03-05 13:13:14: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-27 11:39:53: 1u
- 2025-09-17 11:24:53: 2u
- 2025-08-06 12:15:13: 2u
- 2025-07-03 11:56:36: 2u
- 2025-06-16 08:58:08: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 09:33:24: 2u
- 2024-09-09 13:02:32: 1u
- 2024-08-05 10:31:21: 1u
- 2024-07-11 13:39:47: 1u
- 2024-06-04 11:33:54: 1u
- 2024-05-13 14:04:31: 2u
- 2024-03-21 08:49:39: 1u
- 2024-03-05 13:13:14: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-27 11:39:53: 3u
- 2025-09-17 11:24:53: 2u
- 2025-08-27 06:21:46: 3u
- 2025-07-03 11:56:36: 2u
- 2025-06-16 08:58:08: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 14:15:21: 2u
- 2024-10-30 14:15:21: 2u
- 2024-10-04 09:33:24: 3u
- 2024-09-09 13:02:32: 3u
- 2024-08-05 10:31:21: 1u
- 2024-07-11 13:39:47: 2u
- 2024-06-04 11:33:54: 4u
- 2024-05-13 14:04:31: 4u
- 2024-03-05 13:13:14: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 6u

</details>




---

## False Positives (76)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Predicted 1u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Predicted 2u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | Predicted 2u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 3 | Predicted 3u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | Predicted 2u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Predicted 2u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Predicted 2u but not ordered |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Predicted 2u but not ordered |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | Predicted 2u but not ordered |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Predicted 1u but not ordered |
| [MF0027] MF Tarti Aubergine 250g  | 2 | Predicted 2u but not ordered |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Predicted 1u but not ordered |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | Predicted 2u but not ordered |
| [MF0029] MF Tarti Datte chili 250g | 2 | Predicted 2u but not ordered |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Predicted 1u but not ordered |
| [MF0047] MF Mayonnaise 250ml | 2 | Predicted 2u but not ordered |
| [MF0024] MF KETCHUP 250g | 1 | Predicted 1u but not ordered |
| [RF003] REFIELD Maïs 500G  | 1 | Predicted 1u but not ordered |
| [MF0052] MF Pois chiches  500g | 1 | Predicted 1u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Predicted 1u but not ordered |
| [MF0012] MF Olives Mix 500g | 1 | Predicted 1u but not ordered |
| [MF0014] MF Olives noires 500g | 1 | Predicted 1u but not ordered |
| [MF0013] MF Olives Vertes 500g | 1 | Predicted 1u but not ordered |
| [LD014] LD Organic Avocado Spread 180 g | 2 | Predicted 2u but not ordered |
| [LD012] LD Organic Samphire Spread 135 g | 2 | Predicted 2u but not ordered |
| [LD010] LD Organic Truffle Spread 135 g | 3 | Predicted 3u but not ordered |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | Predicted 2u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Predicted 4u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Predicted 2u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Predicted 1u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | Predicted 3u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 3 | Predicted 3u but not ordered |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Predicted 1u but not ordered |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Predicted 1u but not ordered |
| [MF0021] MF Sauce BBQ 250ml | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Predicted 1u but not ordered |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Predicted 1u but not ordered |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | Predicted 1u but not ordered |
| [LD011] LD Organic Kids Spread 180 g | 1 | Predicted 1u but not ordered |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 1 | Predicted 1u but not ordered |
| [LD015] LD Onion Spread 180g | 1 | Predicted 1u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 3 | Predicted 3u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | Predicted 2u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [MF0061] MF Compote | 1 | Predicted 1u but not ordered |
| [MF0051] MF Kidney Beans 500g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:50.070Z*
