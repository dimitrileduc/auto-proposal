# Rapport Backtest - Client ITM GENADIS (SA)

## Contexte

- **Client** : ITM GENADIS (SA) (ID: 38934)
- **Commande réelle** : S39852
- **Date commande** : 2025-10-22 13:38:10
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 25
- **Tokens**: 22,797 input + 3,849 output = 26,646 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 24 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.13 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 8.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 6.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -8.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre 2025, soit 34 jours. Bien que la rotation soit très faible, le délai écoulé dépasse le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité absolue à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité habituelle de 1 unité sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 155 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>2. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 17 septembre 2025, soit 34 jours. L'historique montre un cycle de commande irrégulier mais espacé (environ tous les 1 à 3 mois). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans une zone de risque de rupture potentielle. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent et de l'année précédente (rotation très faible et régulière de 1u).

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 149 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>3. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 17 septembre 2025, soit 34 jours avant la date actuelle. Bien que l'historique soit très faible, le délai écoulé dépasse le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent et N-1 montre une rotation constante de 1 unité par commande. La médiane des quantités étant de 1, cette valeur est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 884 tokens
- **Output**: 147 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>4. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 17 septembre 2025, soit 34 jours. Bien que l'historique montre une rotation très faible et irrégulière, le délai écoulé dépasse le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent et N-1 montre une constante absolue de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 158 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>5. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 3 à 4 mois). La dernière commande remonte au 17 septembre 2025, soit 34 jours avant la date actuelle. Bien que le cycle moyen soit légèrement supérieur, le seuil de réapprovisionnement de 30 jours place le produit dans une zone de risque de rupture imminente selon le principe de précaution B2B. L'historique (récent et N-1) est extrêmement stable avec des commandes unitaires systématiques. En suivant la règle de la médiane sur un historique de rotation faible, la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 160 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>6. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 juin 2025, soit plus de 130 jours. Bien que la rotation soit faible et irrégulière, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 75 à 90 jours). En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre des commandes de 1u ou 2u. La médiane des commandes récentes et historiques se situe à 1.5u. En cas de doute et pour respecter la règle de ne pas surestimer, la quantité de 2u est retenue pour maintenir le stock minimal habituel sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 198 tokens
- **Total**: 1,120 tokens



</details>


<details>
<summary><strong>7. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 11 juin 2025, soit plus de 130 jours sans activité, ce qui dépasse largement le cycle de rotation habituel observé l'année précédente (environ 45-60 jours). Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée en rayon. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente de l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 124 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit présente une rotation lente mais régulière sur l'historique N-1 (tous les 2 à 3 mois). Aucune commande n'a été enregistrée récemment en 2025. En application du principe de précaution B2B et face à l'absence de données récentes, un besoin est détecté pour éviter une rupture prolongée, le cycle habituel étant largement dépassé. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique N-1 montre des commandes de 1u ou 2u. La médiane des quantités historiques est de 2u. Conformément aux règles pour les rotations faibles, on maintient la quantité habituelle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 170 tokens
- **Total**: 1,094 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 12:09:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-28 07:44:10: 1u
- 2024-04-18 12:02:03: 1u
- 2024-03-06 10:01:28: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 12:09:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-28 07:44:10: 1u
- 2024-07-17 11:11:06: 1u
- 2024-04-18 12:02:03: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 12:09:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-21 07:56:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 12:09:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-28 07:44:10: 1u
- 2024-07-17 11:11:06: 1u
- 2024-03-06 10:01:28: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 12:09:33: 1u
- 2025-06-11 07:10:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-28 07:44:10: 1u
- 2024-04-18 12:02:03: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 07:10:32: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-28 07:44:10: 1u
- 2024-05-21 07:56:34: 2u
- 2024-03-06 10:01:28: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 07:10:32: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-28 07:44:10: 2u
- 2024-07-17 11:11:06: 2u
- 2024-05-21 07:56:34: 2u
- 2024-04-18 12:02:03: 1u
- 2024-03-06 10:01:28: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-28 07:44:10: 2u
- 2024-07-17 11:11:06: 1u
- 2024-05-21 07:56:34: 2u
- 2024-03-06 10:01:28: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (16)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:14:29.718Z*
