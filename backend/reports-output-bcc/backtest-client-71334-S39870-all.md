# Rapport Backtest - Client BIODIS

## Contexte

- **Client** : BIODIS (ID: 71334)
- **Commande réelle** : S39870
- **Date commande** : 2025-10-22 12:36:11
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 19
- **Tokens**: 17,631 input + 3,090 output = 20,721 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 36.8% | 19 produits prédits, 7 corrects |
| **Rappel** | 100.0% | 7 produits réels, 7 détectés |
| **F1-Score** | 53.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 22.14 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 26.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 93 | 93 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 217 | 93 | 124.0 | 133.3% | partial | Non | Non | LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 93 | 93 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 31 | 62 | 31.0 | 50.0% | partial | Non | Non | LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 31 | 31 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 62 | 62 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 31 | 31 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM: 93u vs Médiane: 93u (Réel: 93u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 93u
- **Baseline calculee**: 93u
- **Mediane historique**: 93u
- **Reel commande**: 93u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 93u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le cycle de commande moyen est d'environ 25 jours (intervalles de 27, 28, 21, 20, 28 jours). La dernière commande date du 01/10, soit il y a 20 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons 50 jours sans commande, ce qui dépasse largement le cycle habituel et le seuil de sécurité (70% du cycle). Le risque de rupture est imminent. ÉTAPE 2 : L'historique récent montre des quantités de 93, 62, 155, 93, 62, 93. La médiane de ces commandes est de 93u. Le pic de 155u est ignoré car exceptionnel. La quantité retenue est donc la médiane de 93u.

**Tokens utilises pour cette prediction:**
- **Input**: 967 tokens
- **Output**: 209 tokens
- **Total**: 1,176 tokens



</details>


<details>
<summary><strong>2. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 217u vs Médiane: 93u (Réel: 93u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 217u
- **Baseline calculee**: 217u
- **Mediane historique**: 93u
- **Reel commande**: 93u
- **Erreur LLM**: 124u (133.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 217u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 27-28 jours (07/08, 04/09, 01/10). La dernière commande datant du 01/10 (soit 20 jours), nous atteignons 70% du cycle moyen. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent avant la prochaine fenêtre. Concernant la quantité, bien que le volume ait augmenté progressivement depuis juin, la médiane des trois dernières commandes (217, 186, 217) est de 217 unités. En suivant le principe de précaution B2B et la règle de la médiane, une commande de 217 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 188 tokens
- **Total**: 1,158 tokens



</details>


<details>
<summary><strong>3. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 93u vs Médiane: 93u (Réel: 93u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 93u
- **Baseline calculee**: 93u
- **Mediane historique**: 93u
- **Reel commande**: 93u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 93u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 28 jours (intervalles de 27, 28, 21, 41 et 20 jours). La dernière commande datant du 01/10/2025 (soit 20 jours écoulés), le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Le cycle moyen étant de 27 jours, nous atteignons 74% du cycle, ce qui déclenche le besoin par précaution. Concernant la quantité, la valeur de 93u est la constante historique (médiane et mode), à l'exception d'un pic ponctuel de 155u en août qui est écarté pour éviter le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 966 tokens
- **Output**: 186 tokens
- **Total**: 1,152 tokens



</details>


<details>
<summary><strong>4. [PF2972] LD FR TARTINADE BIO OLIVE 200</strong> - LLM: 31u vs Médiane: 47u (Réel: 62u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 31u
- **Baseline calculee**: 31u
- **Mediane historique**: 47u
- **Reel commande**: 62u
- **Erreur LLM**: 31u (50.0%)
- **Erreur Mediane**: 15u (24.2%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 31u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande moyen d'environ 32 jours. La dernière commande datant du 01/10/2025 (soit 20 jours écoulés), nous atteignons 62% du cycle moyen. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent durant cette période (principe de précaution B2B). Concernant la quantité, l'historique alterne entre 31u et 62u ; conformément à la règle de prudence privilégiant la valeur la plus basse en cas de doute sur la médiane, une quantité de 31u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 947 tokens
- **Output**: 160 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>5. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 31u vs Médiane: 31u (Réel: 31u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 31u
- **Baseline calculee**: 31u
- **Mediane historique**: 31u
- **Reel commande**: 31u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 31u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une régularité mensuelle (environ tous les 28 jours). La dernière commande datant du 01/10, nous sommes à 20 jours d'intervalle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent d'ici la prochaine fenêtre de commande. La quantité est calculée sur la médiane stricte des commandes récentes qui est de 31 unités de manière constante.

**Tokens utilises pour cette prediction:**
- **Input**: 932 tokens
- **Output**: 111 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>6. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - LLM: 62u vs Médiane: 62u (Réel: 62u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 62u
- **Baseline calculee**: 62u
- **Mediane historique**: 62u
- **Reel commande**: 62u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 62u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande très régulier d'environ 21 à 28 jours. La dernière commande remonte au 04/09/2025, soit 47 jours avant la date actuelle. Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent ou un besoin déjà présent. La quantité commandée est strictement constante à 62 unités sur les 5 dernières occurrences. En suivant la règle de la médiane et de la stabilité du cycle, la quantité préconisée est de 62 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 146 tokens
- **Total**: 1,101 tokens



</details>


<details>
<summary><strong>7. [PF3200] LD FR TARTINADE BIO ASPERGE 180G</strong> - LLM: 31u vs Médiane: 47u (Réel: 31u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 31u
- **Baseline calculee**: 31u
- **Mediane historique**: 47u
- **Reel commande**: 31u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 16u (51.6%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 31u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juillet 2025, soit plus de 90 jours. Le cycle historique observé était d'environ 21 jours. Bien que l'activité semble s'être arrêtée, le principe de précaution B2B et l'absence d'historique N-1 imposent de prévoir un réapprovisionnement pour couvrir le risque de rupture sur l'horizon des 30 prochains jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 31u, 93u et 31u. La médiane est de 31u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de tendance incertaine, la quantité retenue est de 31 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 913 tokens
- **Output**: 198 tokens
- **Total**: 1,111 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 11:19:31: 93u
- 2025-09-04 13:24:31: 62u
- 2025-08-07 12:45:07: 155u
- 2025-07-17 10:25:37: 93u
- 2025-06-27 12:12:34: 62u
- 2025-06-05 12:02:01: 93u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 93u
**Quantite Reelle**: 93u

</details>


<details>
<summary><strong>2. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 11:19:31: 217u
- 2025-09-04 13:24:31: 186u
- 2025-08-07 12:45:07: 217u
- 2025-07-17 10:25:37: 124u
- 2025-06-27 12:12:34: 93u
- 2025-06-05 12:02:01: 93u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 217u
**Quantite Reelle**: 93u

</details>


<details>
<summary><strong>3. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 11:19:31: 93u
- 2025-09-04 13:24:31: 93u
- 2025-08-07 12:45:07: 155u
- 2025-07-17 10:25:37: 93u
- 2025-06-27 12:12:34: 93u
- 2025-06-05 12:02:01: 93u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 93u
**Quantite Reelle**: 93u

</details>


<details>
<summary><strong>4. [PF2972] LD FR TARTINADE BIO OLIVE 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 11:19:31: 31u
- 2025-08-07 12:45:07: 62u
- 2025-07-17 10:25:37: 31u
- 2025-06-27 12:12:34: 62u
- 2025-06-05 12:02:01: 31u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 31u
**Quantite Reelle**: 62u

</details>


<details>
<summary><strong>5. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 11:19:31: 31u
- 2025-09-04 13:24:31: 31u
- 2025-08-07 12:45:07: 31u
- 2025-06-05 12:02:01: 31u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 31u
**Quantite Reelle**: 31u

</details>


<details>
<summary><strong>6. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-04 13:24:31: 62u
- 2025-08-07 12:45:07: 62u
- 2025-07-17 10:25:37: 62u
- 2025-06-27 12:12:34: 62u
- 2025-06-05 12:02:01: 62u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 62u
**Quantite Reelle**: 62u

</details>


<details>
<summary><strong>7. [PF3200] LD FR TARTINADE BIO ASPERGE 180G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 10:25:37: 31u
- 2025-06-27 12:12:34: 93u
- 2025-06-05 12:02:01: 31u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 31u
**Quantite Reelle**: 31u

</details>




---

## False Positives (12)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | Predicted 40u but not ordered |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 100 | Predicted 100u but not ordered |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 31 | Predicted 31u but not ordered |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 31 | Predicted 31u but not ordered |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 25 | Predicted 25u but not ordered |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 62 | Predicted 62u but not ordered |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 434 | Predicted 434u but not ordered |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 62 | Predicted 62u but not ordered |
| [PF1690] LD BBQ BIO 300G | 25 | Predicted 25u but not ordered |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 25 | Predicted 25u but not ordered |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | Predicted 40u but not ordered |
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 62 | Predicted 62u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:03.321Z*
