# Rapport Backtest - Client SCHMETS  DELICATESSES, ACHAT

## Contexte

- **Client** : SCHMETS  DELICATESSES, ACHAT (ID: 8555)
- **Commande réelle** : S40197
- **Date commande** : 2025-11-07 12:51:16
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 19
- **Tokens**: 17,354 input + 3,325 output = 20,679 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 68.4% | 19 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 81.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 11.31 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 37.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 65.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 6.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 11 | Avec erreur |

---

## True Positives (13)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 10 | 30 | 20.0 | 66.7% | partial | LLM |
| [PF0502] FILOU MOUTARDE SQUEEZE 300 ML | 40 | 40 | 0.0 | 0.0% | exact | LLM |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 2 | 10 | 8.0 | 80.0% | partial | LLM |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 4 | 5 | 1.0 | 20.0% | partial | LLM |
| [PF0084] FILOU CARBONNADES 800 GR | 3 | 5 | 2.0 | 40.0% | partial | LLM |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 70 | 65 | 5.0 | 7.7% | partial | LLM |
| [PF0094] FILOU MOUTARDE 700 GR | 20 | 30 | 10.0 | 33.3% | partial | LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 10 | 3 | 7.0 | 233.3% | partial | LLM |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 44 | 40 | 4.0 | 10.0% | partial | LLM |
| [PF0093] FILOU MOUTARDE 300GR | 30 | 50 | 20.0 | 40.0% | partial | LLM |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 40 | 40 | 0.0 | 0.0% | exact | LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 60 | 50 | 10.0 | 20.0% | partial | LLM |
| [PF0089] FILOU VOL AU VENT 400 GR | 80 | 20 | 60.0 | 300.0% | partial | LLM |


### Details des Predictions LLM (13 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 10u vs Médiane: 20u (Réel: 30u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 20u
- **Reel commande**: 30u
- **Erreur LLM**: 20u (66.7%)
- **Erreur Mediane**: 10u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'analyse de l'historique récent montre des intervalles de commande de 43, 46 et 34 jours (moyenne ~41 jours). La dernière commande date du 24 octobre, soit il y a 13 jours. Avec un seuil de réapprovisionnement de 30 jours, l'horizon de risque atteint le 6 décembre (soit 43 jours après la dernière commande). Le cycle moyen étant de 41 jours, le risque de rupture est avéré durant cette période. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes sont 30, 10, 10 et 25. La médiane de ces commandes est de 17.5. En application de la règle de précaution B2B privilégiant la valeur la plus basse en cas de doute ou de rotation irrégulière, et constatant que le volume de 10u revient fréquemment (mode), la quantité de 10u est retenue pour éviter le surstockage tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 247 tokens
- **Total**: 1,203 tokens



</details>


<details>
<summary><strong>2. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 40u
- **Baseline calculee**: 40u
- **Mediane historique**: 40u
- **Reel commande**: 40u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 40u (risque detecte)

**Raisonnement LLM:**
L'historique montre un cycle de commande régulier d'environ 23 à 46 jours (moyenne de 34 jours). La dernière commande remonte au 13 octobre, soit 24 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car le cycle moyen sera atteint dans les 10 prochains jours. En application du principe de précaution B2B et face à une consommation stable, une commande est nécessaire. La quantité est fixée à 40 unités, correspondant à la médiane et à la constante parfaite observée sur les trois dernières commandes.

**Tokens utilises pour cette prediction:**
- **Input**: 913 tokens
- **Output**: 146 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>3. [PF1539] FILOU BOULETTE CHASSEUR 800G</strong> - LLM: 2u vs Médiane: 4u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 10u
- **Erreur LLM**: 8u (80.0%)
- **Erreur Mediane**: 6u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 13 octobre, soit il y a 24 jours. Le cycle moyen observé entre les deux dernières commandes est de 23 jours. Avec un seuil de réapprovisionnement de 30 jours, nous sommes à 104% du cycle moyen, ce qui indique un risque de rupture imminent. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une stabilisation à 2 unités (septembre et octobre) après une commande plus importante en juin (6u). En appliquant la règle de la médiane sur les commandes récentes et en privilégiant la quantité la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 182 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>4. [PF1224] FILOU BOULETTES TOMATE 800 GR</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 23 à 89 jours. Depuis la dernière commande du 13 octobre 2025, 24 jours se sont écoulés. Bien que nous soyons au début du cycle moyen, le délai de réapprovisionnement de 30 jours nous place dans une zone de risque de rupture à l'horizon de début décembre. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est nécessaire. La quantité retenue est de 4 unités, correspondant à la médiane des commandes récentes (2, 4, 6), ce qui permet de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 155 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>5. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM: 3u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 2u (40.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 octobre, soit 24 jours. Le cycle moyen observé est d'environ 35 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent (24 jours écoulés + 30 jours de seuil > cycle moyen). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 4u, 2u et 3u. La médiane de ces valeurs est de 3u. Conformément aux règles, on privilégie la médiane pour stabiliser le stock sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 165 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>6. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 70u vs Médiane: 63u (Réel: 65u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 70u
- **Baseline calculee**: 70u
- **Mediane historique**: 63u
- **Reel commande**: 65u
- **Erreur LLM**: 5u (7.7%)
- **Erreur Mediane**: 2u (3.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 70u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen entre les commandes est d'environ 32 jours (32j entre août et sept, 32j entre sept et oct). La dernière commande date du 13 octobre, soit il y a 24 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent (24j écoulés ≥ 70% du cycle de 32j). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des quantités de 65, 70, 80, 80, 80. La médiane de ces commandes est de 80u, cependant, on observe une légère tendance à la baisse sur les deux dernières commandes (70u puis 65u). En application de la règle de prudence (choisir la valeur la plus basse en cas de doute ou tendance à la baisse), la quantité retenue est de 70u pour couvrir le prochain cycle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 238 tokens
- **Total**: 1,191 tokens



</details>


<details>
<summary><strong>7. [PF0094] FILOU MOUTARDE 700 GR</strong> - LLM: 20u vs Médiane: 30u (Réel: 30u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 20u
- **Baseline calculee**: 20u
- **Mediane historique**: 30u
- **Reel commande**: 30u
- **Erreur LLM**: 10u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 20u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 13 octobre, soit 24 jours. Le cycle moyen observé est d'environ 37 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans l'horizon de prévision (24 + 30 > 37). Le principe de précaution B2B s'applique. ÉTAPE 2 : L'historique récent montre des quantités de 20, 20, 40 et 30. La médiane des commandes récentes est de 25, mais les deux dernières commandes se sont stabilisées à 20u. En cas de doute ou de tendance stabilisée, la règle impose de choisir la valeur la plus basse pour éviter le surstock. La quantité retenue est donc de 20u.

**Tokens utilises pour cette prediction:**
- **Input**: 929 tokens
- **Output**: 192 tokens
- **Total**: 1,121 tokens



</details>


<details>
<summary><strong>8. [PF0096] FILOU MOUTARDE 3 KG</strong> - LLM: 10u vs Médiane: 8u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 8u
- **Reel commande**: 3u
- **Erreur LLM**: 7u (233.3%)
- **Erreur Mediane**: 5u (166.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande date du 13 octobre, soit il y a 24 jours. Le cycle historique montre une commande importante à cette période précise l'année dernière (10u le 14/10/2024) et une commande identique le 13/10/2025. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car nous entrons dans une phase de consommation active constatée l'an dernier. ÉTAPE 2 : Bien que la médiane des trois dernières commandes soit de 4u, le pic de 10u est récurrent sur la périodenalité (octobre/novembre 2024 et 2025). Par principe de précaution B2B et pour couvrir le besoin saisonnier identifié, la quantité de 10u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 204 tokens
- **Total**: 1,125 tokens



</details>


<details>
<summary><strong>9. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM: 44u vs Médiane: 48u (Réel: 40u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 44u
- **Baseline calculee**: 44u
- **Mediane historique**: 48u
- **Reel commande**: 40u
- **Erreur LLM**: 4u (10.0%)
- **Erreur Mediane**: 8u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 44u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande date du 13 octobre, soit il y a 24 jours. Le cycle moyen récent est d'environ 23-25 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. ÉTAPE 2 : L'historique récent montre une stabilisation à 44 unités (septembre et octobre), après un pic exceptionnel de 104 unités en juin qui ne doit pas être pris en compte. La commande de l'année dernière à la même période (52u) confirme un besoin significatif, mais la règle de la médiane et de la prudence privilégie le maintien de la quantité stable la plus récente.

**Tokens utilises pour cette prediction:**
- **Input**: 930 tokens
- **Output**: 164 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>10. [PF0093] FILOU MOUTARDE 300GR</strong> - LLM: 30u vs Médiane: 30u (Réel: 50u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 30u
- **Baseline calculee**: 30u
- **Mediane historique**: 30u
- **Reel commande**: 50u
- **Erreur LLM**: 20u (40.0%)
- **Erreur Mediane**: 20u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 30u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le cycle moyen entre les commandes est d'environ 52 jours (43 jours entre juin et août, 62 jours entre août et octobre). La dernière commande date du 06/10/2025, soit il y a 31 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 61 jours d'ici la fin de la période, ce qui correspond au cycle maximum observé. Il existe un risque de rupture imminent. ÉTAPE 2 : L'historique récent montre des quantités de 20, 30 et 40 unités. La médiane est de 30 unités. Conformément aux règles de précaution B2B et de stabilité, la quantité retenue est la médiane historique.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 181 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>11. [PF1689] FILOU CURRY KETCH SQUEEZE 300</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 40u
- **Baseline calculee**: 40u
- **Mediane historique**: 40u
- **Reel commande**: 40u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 40u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 05/08/2025, soit 93 jours sans activité. En l'absence d'historique complet pour définir un cycle précis, le principe de précaution B2B s'applique face à une période d'inactivité prolongée. Le risque de rupture est considéré comme probable ou incertain d'ici les 30 prochains jours. ÉTAPE 2 : L'historique récent ne présente qu'une seule commande de 40 unités. Conformément à la règle de maintien des quantités pour les rotations régulières ou uniques sans tendance inverse, la quantité de 40 est retenue pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 159 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>12. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 60u vs Médiane: 30u (Réel: 50u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 60u
- **Baseline calculee**: 60u
- **Mediane historique**: 30u
- **Reel commande**: 50u
- **Erreur LLM**: 10u (20.0%)
- **Erreur Mediane**: 20u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 60u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit plus de 130 jours. Bien que l'historique récent soit limité, la comparaison avec l'année précédente montre une commande à la même période (30 septembre 2024). En application du principe de précaution B2B et face à l'absence de données récentes confirmant une fin de vie du produit, un risque de rupture est identifié pour couvrir la période de fin d'année. ÉTAPE 2 : Estimation de la quantité. La dernière commande était de 60u et celle de l'année précédente de 64u. La médiane et la règle de prudence (choisir la valeur la plus basse en cas de doute) orientent vers une quantité de 60u pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 197 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>13. [PF0089] FILOU VOL AU VENT 400 GR</strong> - LLM: 80u vs Médiane: 30u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 80u
- **Baseline calculee**: 80u
- **Mediane historique**: 30u
- **Reel commande**: 20u
- **Erreur LLM**: 60u (300.0%)
- **Erreur Mediane**: 10u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 80u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 23 juin 2025, soit plus de 130 jours sans activité sur ce produit. Bien que l'historique récent soit limité à une seule commande de 80 unités, le délai écoulé dépasse largement tout cycle de réapprovisionnement standard, créant un risque de rupture critique ou un besoin de restockage immédiat selon le principe de précaution B2B. En l'absence de données plus régulières, la quantité est basée sur le dernier volume observé (80u) pour assurer la disponibilité sur l'horizon des 30 prochains jours.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 138 tokens
- **Total**: 1,024 tokens



</details>




### Donnees d'Input LLM (13 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-24 11:20:40: 30u
- 2025-09-20 05:57:22: 10u
- 2025-08-05 09:12:07: 10u
- 2025-06-23 12:42:43: 25u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-14 07:08:28: 20u
- 2024-10-03 07:50:47: 50u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 30u

</details>


<details>
<summary><strong>2. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 08:25:46: 40u
- 2025-09-20 05:57:22: 40u
- 2025-08-05 09:12:07: 40u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 40u
**Quantite Reelle**: 40u

</details>


<details>
<summary><strong>3. [PF1539] FILOU BOULETTE CHASSEUR 800G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 08:25:46: 2u
- 2025-09-20 05:57:22: 2u
- 2025-06-23 12:42:43: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>4. [PF1224] FILOU BOULETTES TOMATE 800 GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 08:25:46: 4u
- 2025-09-20 05:57:22: 2u
- 2025-06-23 12:42:43: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:22:41: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>5. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 08:25:46: 4u
- 2025-09-20 05:57:22: 2u
- 2025-08-05 09:12:07: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:22:41: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>6. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 08:25:46: 65u
- 2025-09-11 08:06:57: 70u
- 2025-08-05 09:12:07: 80u
- 2025-06-26 13:17:02: 80u
- 2025-06-19 11:23:06: 80u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 70u
**Quantite Reelle**: 65u

</details>


<details>
<summary><strong>7. [PF0094] FILOU MOUTARDE 700 GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 08:25:46: 20u
- 2025-09-20 05:57:22: 20u
- 2025-08-05 09:12:07: 40u
- 2025-06-23 12:42:43: 30u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 30u

</details>


<details>
<summary><strong>8. [PF0096] FILOU MOUTARDE 3 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 08:25:46: 10u
- 2025-09-20 05:57:22: 3u
- 2025-06-23 12:42:43: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-14 07:08:28: 10u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 08:25:46: 44u
- 2025-09-20 05:57:22: 44u
- 2025-06-23 12:42:43: 104u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-14 07:08:28: 52u

**Quantite Mediane (fallback)**: 44u
**Quantite Reelle**: 40u

</details>


<details>
<summary><strong>10. [PF0093] FILOU MOUTARDE 300GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:06:02: 30u
- 2025-08-05 09:12:07: 40u
- 2025-06-23 12:42:43: 20u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 30u
**Quantite Reelle**: 50u

</details>


<details>
<summary><strong>11. [PF1689] FILOU CURRY KETCH SQUEEZE 300</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 09:12:07: 40u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 40u
**Quantite Reelle**: 40u

</details>


<details>
<summary><strong>12. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 12:42:43: 60u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:22:41: 64u

**Quantite Mediane (fallback)**: 60u
**Quantite Reelle**: 50u

</details>


<details>
<summary><strong>13. [PF0089] FILOU VOL AU VENT 400 GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 12:42:43: 80u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 07:27:03: 30u

**Quantite Mediane (fallback)**: 80u
**Quantite Reelle**: 20u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0075] FILOU CHASSEUR  10 L | 10 | Predicted 10u but not ordered |
| [PF0077] FILOU PROVENCALE 5 L | 10 | Predicted 10u but not ordered |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 40 | Predicted 40u but not ordered |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 5 | Predicted 5u but not ordered |
| [PF1844] FILOU ANDALOUSE SQUEEZE 300ML | 40 | Predicted 40u but not ordered |
| [PF1845] FILOU SAMOURAI SQUEEZE 300ML | 40 | Predicted 40u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:38.176Z*
