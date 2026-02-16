# Rapport Backtest - Client DLL AD ST VITH DELVITH

## Contexte

- **Client** : DLL AD ST VITH DELVITH (ID: 38832)
- **Commande réelle** : S40310
- **Date commande** : 2025-11-13 10:20:14
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 44
- **Tokens**: 41,614 input + 7,178 output = 48,792 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 12.2% | 41 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 21.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 3.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 70.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 67.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -70.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LD013] LD Tuscan Organic Spread 180 g | 1 | 8 | 7.0 | 87.5% | partial | LLM |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [LD015] LD Onion Spread 180g | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [LD011] LD Organic Kids Spread 180 g | 2 | 4 | 2.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 8u
- **Erreur LLM**: 7u (87.5%)
- **Erreur Mediane**: 7u (87.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles réguliers d'environ 40 à 50 jours (25/06, 06/08, 24/09, 03/11). La dernière commande date du 03/11, soit il y a seulement 9 jours. Cependant, le seuil de réapprovisionnement est de 30 jours, ce qui nous projette jusqu'au 12/12. À cette date, nous serons à 39 jours depuis la dernière commande, ce qui correspond exactement à la fenêtre de rotation habituelle du produit. Il existe donc un risque de rupture durant la période de couverture. Concernant la quantité, bien que la dernière commande fût de 2u, l'historique long montre une constante à 1u. En application de la règle de prudence B2B (choisir la valeur la plus basse en cas de doute sur une rotation faible), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 223 tokens
- **Total**: 1,146 tokens



</details>


<details>
<summary><strong>2. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre une rotation régulière mais lente avec un cycle de commande moyen d'environ 70 à 90 jours. La dernière commande date du 03 novembre 2025 (il y a 9 jours). Bien que le cycle habituel ne soit pas encore atteint, le principe de précaution B2B s'applique ici car le stock est unitaire (1u) et toute vente immédiate entraînerait une rupture. Conformément à la règle de maintien des rotations faibles (1-2u) et à l'utilisation de la médiane historique, une commande de 1 unité est préconisée pour sécuriser la disponibilité sur l'horizon des 30 prochains jours.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 159 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>3. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles variant entre 40 et 50 jours. La dernière commande date du 03/11/2025 (il y a 9 jours). Avec un seuil de réapprovisionnement de 30 jours, nous couvrons la période jusqu'au 12/12/2025, date à laquelle le cycle habituel sera atteint ou dépassé. Par principe de précaution B2B et pour éviter une rupture sur ce produit à rotation lente mais régulière, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 154 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>4. [LD015] LD Onion Spread 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande date de seulement 9 jours (03/11), mais l'historique montre une rotation extrêmement faible et irrégulière (seulement 2 unités sur l'année). Selon le principe de précaution B2B, en cas de cycle difficile à déterminer ou de doute sur la rotation, il convient de prévoir une commande pour éviter toute rupture. La quantité retenue est de 1 unité, correspondant à la médiane et au volume constant des commandes précédentes, respectant la règle de ne pas augmenter les stocks sur les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 122 tokens
- **Total**: 1,007 tokens



</details>


<details>
<summary><strong>5. [LD011] LD Organic Kids Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
Le cycle de commande observé est d'environ 90 jours (3 mois). La dernière commande datant du 24 septembre 2025, nous sommes à 49 jours de recul. Bien que nous ne soyons qu'à environ 55% du cycle habituel, l'absence d'historique N-1 et la faible rotation imposent une vigilance B2B. En appliquant le principe de précaution pour couvrir les 30 prochains jours (atteignant ainsi 79 jours depuis la dernière commande, soit >70% du cycle), un risque de rupture est identifié. La quantité retenue est de 2 unités, correspondant à la médiane constante des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 157 tokens
- **Total**: 1,046 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 07:41:58: 2u
- 2025-09-24 11:00:28: 1u
- 2025-08-06 06:22:29: 1u
- 2025-06-25 09:56:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>2. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 07:41:58: 1u
- 2025-09-24 11:00:28: 1u
- 2025-06-25 09:56:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 07:41:58: 2u
- 2025-09-24 11:00:28: 2u
- 2025-08-06 06:22:29: 1u
- 2025-06-25 09:56:28: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [LD015] LD Onion Spread 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 07:41:58: 1u
- 2025-06-25 09:56:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [LD011] LD Organic Kids Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 11:00:28: 2u
- 2025-06-25 09:56:28: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>




---

## False Positives (36)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LD009] LD Organic Asparagus Spread 180 g | 1 | Predicted 1u but not ordered |
| [LD012] LD Organic Samphire Spread 135 g | 1 | Predicted 1u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Predicted 2u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Predicted 2u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Predicted 2u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 6 | Predicted 6u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 4 | Predicted 4u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | Predicted 2u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | Predicted 2u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 5 | Predicted 5u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 6 | Predicted 6u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | Predicted 2u but not ordered |
| [LD010] LD Organic Truffle Spread 135 g | 2 | Predicted 2u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Predicted 2u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 3 | Predicted 3u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:04.418Z*
