# Rapport Backtest - Client DLL AD Superette Ronse

## Contexte

- **Client** : DLL AD Superette Ronse (ID: 73324)
- **Commande réelle** : S39814
- **Date commande** : 2025-10-20 12:37:23
- **Date cutoff système** : 2025-10-19 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 23
- **Tokens**: 20,861 input + 3,737 output = 24,598 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 39.1% | 23 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 56.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.56 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -6.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen entre les commandes est d'environ 40 jours. La dernière commande date du 01/10/2025, soit 18 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, la prochaine commande est attendue autour du 10/11/2025, ce qui entre dans l'horizon de risque (18 + 30 = 48 jours > cycle de 40). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u, 3u, 1u, 1u. La médiane est de 1u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 211 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 32 jours entre chaque commande. La dernière commande datant du 01/10/2025 (soit 18 jours avant la date actuelle), le risque de rupture intervient dans environ 14 jours, ce qui se situe à l'intérieur du seuil de réapprovisionnement de 30 jours. En appliquant la règle de la médiane sur l'historique récent (1, 1, 3, 1, 2), la valeur médiane est de 1 unité. Conformément au principe de précaution B2B et à la règle de privilégier la quantité la plus basse en cas de rotation faible, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 172 tokens
- **Total**: 1,115 tokens



</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 40 jours. La dernière commande date du 01/10/2025, soit il y a 18 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans l'horizon de prévision (18 + 30 = 48 jours, dépassant le cycle moyen). En application du principe de précaution B2B, un besoin est détecté. La quantité est fixée à 2 unités, correspondant à la médiane des commandes récentes (2, 3, 3, 2) et à la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 169 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation régulière mais lente, avec un intervalle moyen d'environ 56 à 60 jours entre chaque unité. La dernière commande date du 01/10/2025, soit il y a 18 jours. Bien que le cycle habituel ne soit pas encore atteint, le délai de réapprovisionnement de 30 jours (Replenishment Threshold Days) nous place dans une fenêtre critique où le besoin pourrait survenir avant la prochaine livraison possible. En application du principe de précaution B2B et face à une rotation très faible mais constante, une commande de 1 unité (médiane historique) est préconisée pour éviter une rupture de stock sur ce produit à faible volume.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 166 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 20 et 59 jours. Depuis la dernière commande du 28 août 2025, 52 jours se sont écoulés. Ce délai dépasse largement 70% du cycle moyen constaté, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement dans l'horizon des 30 jours (Replenishment Threshold). En application du principe de précaution B2B, une commande est nécessaire. Pour la quantité, la médiane des commandes récentes est de 2 unités (valeurs : 1, 2, 2). On maintient ce volume habituel pour une rotation faible sans surestimer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 157 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>6. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande d'environ 79 jours. La dernière commande datant du 28 août 2025 (soit 52 jours avant la date actuelle), nous avons atteint environ 66% du cycle moyen. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent durant cette période. En application du principe de précaution B2B et face à une rotation faible mais régulière, la quantité retenue correspond à la médiane historique de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 128 tokens
- **Total**: 1,019 tokens



</details>


<details>
<summary><strong>7. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (Détection) : L'historique montre un cycle de commande irrégulier (20 jours puis 59 jours). La dernière commande remonte au 28 août, soit 52 jours avant la date actuelle. Étant donné que ce délai dépasse 70% du cycle long observé et que le seuil de réapprovisionnement est de 30 jours, le risque de rupture est élevé. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 (Quantité) : Les quantités récentes sont de 1u, 3u et 3u. La médiane des commandes récentes est de 3u. Conformément aux règles de maintien de la rotation régulière, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 175 tokens
- **Total**: 1,082 tokens



</details>


<details>
<summary><strong>8. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 20 jours puis 59 jours. Depuis la dernière commande du 28 août 2025, 52 jours se sont écoulés. Ce délai dépasse largement 70% du cycle moyen observé, créant un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un besoin est détecté. La quantité est fixée à 2 unités, correspondant à la médiane constante et stricte de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 131 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>9. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 05/08/2025, soit 75 jours. Le cycle précédent était de 56 jours. Nous avons largement dépassé le cycle moyen constaté, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement selon le principe de précaution B2B (70% du cycle largement atteint). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité maintenue est de 1 unité (médiane de l'historique).

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 165 tokens
- **Total**: 1,057 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:28:51: 1u
- 2025-08-05 06:35:15: 3u
- 2025-06-30 11:50:41: 1u
- 2025-06-10 14:37:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:28:51: 1u
- 2025-08-28 06:05:05: 1u
- 2025-08-05 06:35:15: 3u
- 2025-06-30 11:50:41: 1u
- 2025-06-10 14:37:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:28:51: 2u
- 2025-08-28 06:05:05: 3u
- 2025-06-30 11:50:41: 3u
- 2025-06-10 14:37:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:28:51: 1u
- 2025-08-05 06:35:15: 1u
- 2025-06-10 14:37:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 06:05:05: 2u
- 2025-06-30 11:50:41: 2u
- 2025-06-10 14:37:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 06:05:05: 1u
- 2025-06-10 14:37:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 06:05:05: 3u
- 2025-06-30 11:50:41: 3u
- 2025-06-10 14:37:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-28 06:05:05: 2u
- 2025-06-30 11:50:41: 2u
- 2025-06-10 14:37:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:35:15: 1u
- 2025-06-10 14:37:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (14)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | Predicted 3u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [DIS0004] Display JF bois | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:20.472Z*
