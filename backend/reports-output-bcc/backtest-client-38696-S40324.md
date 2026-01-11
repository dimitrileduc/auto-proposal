# Rapport Backtest - Client AD EYNATTEN DELHAIZE EYNADIS

## Contexte

- **Client** : AD EYNATTEN DELHAIZE EYNADIS (ID: 38696)
- **Commande réelle** : S40324
- **Date commande** : 2025-11-13 12:28:59
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 71
- **Tokens**: 68,984 input + 11,628 output = 80,612 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 9.8% | 61 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 17.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 10.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 78.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 72.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -78.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LD013] LD Tuscan Organic Spread 180 g | 1 | 8 | 7.0 | 87.5% | partial | Non | Non | LLM |
| [LD011] LD Organic Kids Spread 180 g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 21 | 19.0 | 90.5% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 5 | 21 | 16.0 | 76.2% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 18 | 14.0 | 77.8% | partial | Non | Non | LLM |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 8u
- **Erreur LLM**: 7u (87.5%)
- **Erreur Mediane**: 6u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle d'environ 66 jours entre les deux dernières commandes. La dernière commande datant du 27 octobre (il y a 16 jours), nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (seuil de réapprovisionnement), car le cycle est irrégulier et la rotation faible. En application du principe de précaution B2B et de la règle sur les rotations faibles (1-2u), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la valeur la plus basse de l'historique récent pour éviter le surstockage tout en maintenant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 152 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>2. [LD011] LD Organic Kids Spread 180 g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 27 octobre, soit 16 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture, d'autant plus que l'historique est trop limité pour établir un cycle de rotation précis. En application du principe de précaution B2B (doute sur le cycle = prévoir), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la valeur de la commande la plus récente, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 132 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 21u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 21u
- **Erreur LLM**: 19u (90.5%)
- **Erreur Mediane**: 19u (90.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 21 octobre, soit 22 jours avant la date actuelle. Le cycle moyen constaté sur l'historique récent est d'environ 30 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons 73% du cycle moyen (22/30), ce qui déclenche une alerte de risque de rupture selon le principe de précaution B2B. L'historique de l'année précédente confirme également une activité régulière sur la période octobre-novembre. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (1, 2, 3, 2, 1) et à la stabilité observée l'an dernier à la même période.

**Tokens utilises pour cette prediction:**
- **Input**: 1,073 tokens
- **Output**: 171 tokens
- **Total**: 1,244 tokens



</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 5u vs Médiane: 6u (Réel: 21u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 6u
- **Reel commande**: 21u
- **Erreur LLM**: 16u (76.2%)
- **Erreur Mediane**: 15u (71.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 30 à 40 jours sur les commandes récentes. La dernière commande datant du 23 septembre (soit 50 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement dépassé, indiquant un risque de rupture imminent. Bien qu'une commande de 10 unités ait eu lieu récemment, l'historique montre une forte volatilité (1u, 8u, 5u, 3u). En appliquant la règle de la médiane sur les commandes récentes (1, 3, 5, 8, 10), la valeur centrale est de 5 unités. Ce volume est cohérent avec la consommation habituelle et permet de couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,126 tokens
- **Output**: 181 tokens
- **Total**: 1,307 tokens



</details>


<details>
<summary><strong>5. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 18u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 18u
- **Erreur LLM**: 14u (77.8%)
- **Erreur Mediane**: 14u (77.8%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/09/2025, soit 64 jours. L'historique N-1 montre une activité régulière en octobre et novembre (commandes fin octobre). Le cycle moyen constaté est d'environ 30 à 45 jours. Le délai depuis la dernière commande dépasse largement ce cycle, créant un risque de rupture imminent sous 30 jours. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes sont de 5u, 3u et 6u (médiane = 5u). L'historique N-1 montre des volumes entre 1u et 6u. En suivant la règle de prudence B2B et en privilégiant la médiane tout en évitant la surestimation, une quantité de 4u est retenue (valeur centrale historique).

**Tokens utilises pour cette prediction:**
- **Input**: 1,092 tokens
- **Output**: 200 tokens
- **Total**: 1,292 tokens



</details>


<details>
<summary><strong>6. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 22 août 2025, soit 82 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de la règle sur les cycles irréguliers/difficiles à déterminer, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : En l'absence de données comparatives, la quantité est fixée à 2 unités, correspondant à la valeur de la dernière commande connue (médiane de l'historique récent), afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 164 tokens
- **Total**: 1,036 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-27 15:08:08: 2u
- 2025-08-22 06:53:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>2. [LD011] LD Organic Kids Spread 180 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-27 15:08:08: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:08:52: 1u
- 2025-09-29 06:22:00: 2u
- 2025-08-05 11:44:48: 3u
- 2025-07-15 09:37:25: 2u
- 2025-06-16 11:05:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-29 07:41:38: 2u
- 2024-09-16 12:44:43: 2u
- 2024-07-31 06:22:12: 2u
- 2024-07-11 06:44:28: 1u
- 2024-06-26 12:38:31: 3u
- 2024-06-19 10:15:51: 3u
- 2024-04-29 11:50:19: 6u
- 2024-03-21 09:05:03: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 21u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-23 06:05:27: 10u
- 2025-08-22 06:53:50: 1u
- 2025-07-22 10:11:51: 8u
- 2025-06-30 08:43:22: 5u
- 2025-06-16 11:05:45: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-29 07:41:38: 4u
- 2024-09-25 06:29:04: 4u
- 2024-09-16 12:44:43: 1u
- 2024-08-19 06:08:42: 2u
- 2024-07-31 06:22:12: 3u
- 2024-07-11 06:44:28: 2u
- 2024-06-26 12:38:31: 1u
- 2024-06-19 10:15:51: 5u
- 2024-05-31 12:44:08: 2u
- 2024-04-29 11:50:19: 10u
- 2024-03-21 09:05:03: 4u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 21u

</details>


<details>
<summary><strong>5. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 06:35:00: 5u
- 2025-08-22 06:53:50: 3u
- 2025-06-16 11:05:45: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-29 07:41:38: 4u
- 2024-09-25 06:29:04: 2u
- 2024-09-16 12:44:43: 1u
- 2024-08-19 06:08:42: 1u
- 2024-07-31 06:22:12: 4u
- 2024-06-26 12:38:31: 4u
- 2024-06-19 10:15:51: 2u
- 2024-05-31 12:44:08: 1u
- 2024-05-06 07:16:25: 4u
- 2024-04-29 11:50:19: 6u
- 2024-03-21 09:05:03: 3u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 18u

</details>


<details>
<summary><strong>6. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 06:53:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>




---

## False Positives (55)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Predicted 2u but not ordered |
| [MF0029] MF Tarti Datte chili 250g | 2 | Predicted 2u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Predicted 1u but not ordered |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Predicted 1u but not ordered |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Predicted 2u but not ordered |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Predicted 2u but not ordered |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Predicted 2u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | Predicted 2u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | Predicted 2u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Predicted 2u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Predicted 2u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Predicted 2u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Predicted 2u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Predicted 2u but not ordered |
| [MF0027] MF Tarti Aubergine 250g  | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Predicted 2u but not ordered |
| [MF0047] MF Mayonnaise 250ml | 1 | Predicted 1u but not ordered |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Predicted 1u but not ordered |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Predicted 1u but not ordered |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Predicted 1u but not ordered |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | Predicted 2u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | Predicted 2u but not ordered |
| [MF0013] MF Olives Vertes 500g | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Predicted 2u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 3 | Predicted 3u but not ordered |
| [MF0012] MF Olives Mix 500g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:20:28.003Z*
