# Rapport Backtest - Client BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation

## Contexte

- **Client** : BIOCOOP SA COOP, BIOCOOP SA COOP, Adresse de facturation (ID: 5490)
- **Commande réelle** : S40296
- **Date commande** : 2025-11-12 14:19:04
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 26
- **Tokens**: 29,720 input + 4,874 output = 34,594 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.8% | 26 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 70.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 141.93 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 43.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -43.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 434 | 434 | 0.0 | 0.0% | exact | LLM |
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 31 | 31 | 0.0 | 0.0% | exact | LLM |
| [PF1690] LD BBQ BIO 300G | 25 | 25 | 0.0 | 0.0% | exact | LLM |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 25 | 50 | 25.0 | 50.0% | partial | LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | 80 | 40.0 | 50.0% | partial | LLM |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 434 | 868 | 434.0 | 50.0% | partial | LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 434 | 868 | 434.0 | 50.0% | partial | LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 434 | 868 | 434.0 | 50.0% | partial | LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 434 | 868 | 434.0 | 50.0% | partial | LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 62 | 155 | 93.0 | 60.0% | partial | LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 93 | 124 | 31.0 | 25.0% | partial | LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 62 | 93 | 31.0 | 33.3% | partial | LLM |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 31 | 62 | 31.0 | 50.0% | partial | LLM |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | 40 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 434u
- **Baseline calculee**: 434u
- **Mediane historique**: 434u
- **Reel commande**: 434u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 434u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 28 jours (04/09, 02/10, 30/10). La dernière commande ayant eu lieu le 07/11, le prochain besoin théorique se situe début décembre, ce qui entre dans l'horizon des 30 jours du seuil de réapprovisionnement (Replenishment Threshold Days). En application du principe de précaution B2B et pour éviter toute rupture sur ce cycle mensuel, une commande est nécessaire. La quantité est fixée à 434 unités, correspondant à la médiane stricte et constante des commandes observées sur l'année 2025.

**Tokens utilises pour cette prediction:**
- **Input**: 1,241 tokens
- **Output**: 165 tokens
- **Total**: 1,406 tokens



</details>


<details>
<summary><strong>2. [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G</strong> - LLM: 31u vs Médiane: 31u (Réel: 31u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 14 jours (18/09, 02/10, 15/10, 30/10). La dernière commande date du 07/11, soit il y a 4 jours. Avec un seuil de réapprovisionnement de 30 jours, le prochain besoin tombera durant cette période de couverture (cycle moyen de 14 jours < 30 jours). En appliquant le principe de précaution B2B et la règle de la médiane sur l'historique récent, la quantité standard de 31 unités est retenue. Bien qu'un pic à 62u ait été observé le 07/11, la majorité des commandes (7 sur 8) sont de 31u, ce qui constitue la médiane stable à privilégier.

**Tokens utilises pour cette prediction:**
- **Input**: 1,222 tokens
- **Output**: 199 tokens
- **Total**: 1,421 tokens



</details>


<details>
<summary><strong>3. [PF1690] LD BBQ BIO 300G</strong> - LLM: 25u vs Médiane: 25u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 25u
- **Reel commande**: 25u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 14 jours (dernières commandes significatives les 16/10, 30/10 et 07/11). La dernière commande datant du 07/11 (il y a 4 jours), le prochain besoin est estimé autour du 21/11, ce qui entre dans l'horizon des 30 jours du seuil de réapprovisionnement. Historiquement, le volume est extrêmement stable avec une quantité constante de 25 unités par commande. En appliquant la règle de la médiane sur l'historique récent et N-1, la quantité de 25 unités est retenue pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 1,208 tokens
- **Output**: 167 tokens
- **Total**: 1,375 tokens



</details>


<details>
<summary><strong>4. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 25u vs Médiane: 38u (Réel: 50u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 38u
- **Reel commande**: 50u
- **Erreur LLM**: 25u (50.0%)
- **Erreur Mediane**: 12u (24.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière tous les 7 à 14 jours (dernières commandes les 16/10, 30/10 et 07/11). Avec une dernière commande effectuée il y a seulement 4 jours et un seuil de réapprovisionnement de 30 jours, un nouveau besoin est certain d'apparaître dans cet horizon pour maintenir le flux. Bien que le volume du 07/11 soit exceptionnellement élevé (cumul de 225u), l'historique profond (N-1) et les commandes précédentes de 2025 montrent une base constante de 25u par ligne de commande. En application de la règle de la médiane et du choix de la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 25u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,219 tokens
- **Output**: 199 tokens
- **Total**: 1,418 tokens



</details>


<details>
<summary><strong>5. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 80u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 40u
- **Baseline calculee**: 40u
- **Mediane historique**: 40u
- **Reel commande**: 80u
- **Erreur LLM**: 40u (50.0%)
- **Erreur Mediane**: 40u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 40u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande très régulier environ tous les 7 à 14 jours (dernières commandes le 01/10, 16/10, 30/10 et 07/11). Avec une dernière commande effectuée il y a 4 jours et un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent au regard de la fréquence de rotation élevée. La quantité est fixée à 40 unités, ce qui correspond à la médiane stricte et constante de l'historique récent et de l'année précédente (N-1).

**Tokens utilises pour cette prediction:**
- **Input**: 1,219 tokens
- **Output**: 150 tokens
- **Total**: 1,369 tokens



</details>


<details>
<summary><strong>6. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 434u
- **Baseline calculee**: 434u
- **Mediane historique**: 434u
- **Reel commande**: 868u
- **Erreur LLM**: 434u (50.0%)
- **Erreur Mediane**: 434u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 434u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier environ tous les 14 jours (04/09, 18/09, 02/10, 16/10). La dernière commande groupée date du 07/11, soit il y a seulement 4 jours. Cependant, avec un seuil de réapprovisionnement de 30 jours, la prochaine échéance théorique (autour du 21/11) tombe largement dans la fenêtre de vigilance. Bien que le volume du 07/11 soit exceptionnellement élevé (1736u au total), la quantité unitaire récurrente et la médiane historique sont strictement de 434u. En suivant le principe de précaution B2B et la règle de la médiane pour éviter le surstockage après un pic, une commande de 434u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,234 tokens
- **Output**: 209 tokens
- **Total**: 1,443 tokens



</details>


<details>
<summary><strong>7. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 434u
- **Baseline calculee**: 434u
- **Mediane historique**: 434u
- **Reel commande**: 868u
- **Erreur LLM**: 434u (50.0%)
- **Erreur Mediane**: 434u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 434u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière environ tous les 7 à 14 jours (dernières commandes les 15/10, 16/10, 30/10 et 07/11). Avec une dernière commande effectuée il y a 4 jours et un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B (70% du cycle atteint ou dépassé pour couvrir l'horizon). Concernant la quantité, l'historique récent et N-1 est extrêmement stable avec une unité de base récurrente de 434u. Bien que des commandes multiples soient parfois passées le même jour, la médiane par transaction reste fixée à 434u. En respectant la règle de ne pas surestimer et de privilégier la valeur constante la plus basse en cas de doute, une quantité de 434u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,234 tokens
- **Output**: 222 tokens
- **Total**: 1,456 tokens



</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 434u
- **Baseline calculee**: 434u
- **Mediane historique**: 434u
- **Reel commande**: 868u
- **Erreur LLM**: 434u (50.0%)
- **Erreur Mediane**: 434u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 434u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière environ tous les 14 à 20 jours (dernières commandes groupées le 07/11, 16/10, 02/10). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent d'ici début décembre. Bien qu'un pic exceptionnel de 1302u ait été observé le 07/11, la quantité standard historique est de 434u (médiane et mode constants sur 2024 et 2025). En application de la règle de la médiane et du principe de précaution B2B, une commande de 434u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,234 tokens
- **Output**: 175 tokens
- **Total**: 1,409 tokens



</details>


<details>
<summary><strong>9. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 434u vs Médiane: 434u (Réel: 868u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 434u
- **Baseline calculee**: 434u
- **Mediane historique**: 434u
- **Reel commande**: 868u
- **Erreur LLM**: 434u (50.0%)
- **Erreur Mediane**: 434u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 434u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande très court et régulier (environ tous les 7 à 14 jours). La dernière commande datant du 7 novembre, le risque de rupture est élevé d'ici les 30 prochains jours (seuil de réapprovisionnement). Bien que des pics à 868u apparaissent récemment, la quantité récurrente et la médiane historique (confirmée par les données N-1) se situent à 434u. En application du principe de précaution B2B et de la règle de la médiane, une commande de 434u est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,240 tokens
- **Output**: 156 tokens
- **Total**: 1,396 tokens



</details>


<details>
<summary><strong>10. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 62u vs Médiane: 47u (Réel: 155u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 62u
- **Baseline calculee**: 62u
- **Mediane historique**: 47u
- **Reel commande**: 155u
- **Erreur LLM**: 93u (60.0%)
- **Erreur Mediane**: 108u (69.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 62u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle de commande observé est d'environ 7 à 14 jours (commandes les 16/10, 30/10 et 07/11). La dernière commande date du 07/11, soit il y a 4 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé avant la prochaine fenêtre de calcul. Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent présente des quantités variées : 31, 31, 31, 62, 62, 93, 93, 186. La médiane des commandes récentes se situe à 62u. Bien qu'un pic à 186u soit visible le 07/11, il est traité comme exceptionnel. Conformément aux règles, on retient la médiane de 62u pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,215 tokens
- **Output**: 247 tokens
- **Total**: 1,462 tokens



</details>


<details>
<summary><strong>11. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 93u vs Médiane: 93u (Réel: 124u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 93u
- **Baseline calculee**: 93u
- **Mediane historique**: 93u
- **Reel commande**: 124u
- **Erreur LLM**: 31u (25.0%)
- **Erreur Mediane**: 31u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 93u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence hebdomadaire régulière (commandes les 16/10, 30/10 et 07/11). La dernière commande datant du 07/11, un réapprovisionnement est nécessaire pour couvrir les besoins sous 7 jours, ce qui entre largement dans le seuil de 30 jours (Replenishment Threshold Days). Concernant la quantité, l'historique récent présente des volumes compris entre 62u et 124u. La médiane des commandes récentes est de 93u. Conformément aux règles de gestion B2B privilégiant la médiane et la prudence en cas de doute, la quantité retenue est de 93u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,215 tokens
- **Output**: 167 tokens
- **Total**: 1,382 tokens



</details>


<details>
<summary><strong>12. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 62u vs Médiane: 47u (Réel: 93u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 62u
- **Baseline calculee**: 62u
- **Mediane historique**: 47u
- **Reel commande**: 93u
- **Erreur LLM**: 31u (33.3%)
- **Erreur Mediane**: 46u (49.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 62u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière toutes les 1 à 2 semaines (dernières commandes le 07/11, 30/10 et 16/10). Avec une dernière commande effectuée il y a 4 jours et un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B. L'historique récent présente des volumes variés (31u, 62u, 93u). Conformément aux règles de gestion, la médiane des quantités récentes (62u) est retenue pour couvrir le besoin sans surstocker, ce qui correspond également aux volumes observés à la même période l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 1,223 tokens
- **Output**: 168 tokens
- **Total**: 1,391 tokens



</details>


<details>
<summary><strong>13. [PF3361] LD FR TARTINADE BIO OIGNON 180G</strong> - LLM: 31u vs Médiane: 31u (Réel: 62u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 31u
- **Baseline calculee**: 31u
- **Mediane historique**: 31u
- **Reel commande**: 62u
- **Erreur LLM**: 31u (50.0%)
- **Erreur Mediane**: 31u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 31u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier environ tous les 7 à 15 jours (dernières commandes le 07/11, 30/10, 15/10, 01/10). Avec une dernière commande effectuée il y a 4 jours et un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent dans l'horizon défini. Concernant la quantité, bien que des pics à 93u apparaissent le 07/11, la valeur récurrente et stable (médiane) est de 31u. Conformément aux règles de gestion B2B privilégiant la médiane et la prudence face aux pics exceptionnels, une quantité de 31u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,003 tokens
- **Output**: 184 tokens
- **Total**: 1,187 tokens



</details>


<details>
<summary><strong>14. [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier environ tous les 15 à 20 jours (dernières commandes le 07/11, 16/10, 01/10). Avec une dernière commande effectuée il y a seulement 4 jours, nous sommes au début d'un nouveau cycle, mais compte tenu du seuil de réapprovisionnement de 30 jours, un besoin surviendra avant la fin de cette période. En application du principe de précaution B2B et pour couvrir l'horizon de 30 jours, une commande est nécessaire. La quantité est fixée à 40 unités, ce qui correspond à la médiane stricte et constante de l'historique récent et de l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 1,220 tokens
- **Output**: 177 tokens
- **Total**: 1,397 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 434u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 434u
- 2025-10-02 06:43:53: 434u
- 2025-09-04 08:22:56: 434u
- 2025-09-04 08:22:01: 434u
- 2025-09-04 08:20:55: 434u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 06:34:23: 434u
- 2024-10-31 06:34:04: 434u
- 2024-10-17 12:47:26: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:31: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-08-09 05:43:38: 104u
- 2024-08-09 05:43:13: 104u
- 2024-08-09 05:42:53: 104u
- 2024-07-03 06:05:40: 434u
- 2024-07-03 06:04:58: 868u

**Quantite Mediane (fallback)**: 434u
**Quantite Reelle**: 434u

</details>


<details>
<summary><strong>2. [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 12:44:50: 31u
- 2025-11-07 12:37:21: 62u
- 2025-11-07 12:37:00: 31u
- 2025-10-30 08:14:34: 31u
- 2025-10-15 13:54:30: 31u
- 2025-10-02 06:44:40: 31u
- 2025-10-02 06:43:53: 31u
- 2025-09-18 11:01:30: 31u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-03 06:10:08: 186u
- 2024-07-03 06:09:51: 93u
- 2024-07-03 06:09:33: 93u
- 2024-07-03 06:05:19: 155u
- 2024-07-01 05:44:03: 124u
- 2024-07-01 05:43:42: 93u
- 2024-07-01 05:43:20: 62u
- 2024-06-28 11:30:23: 93u
- 2024-06-17 07:14:56: 31u
- 2024-06-17 07:14:47: 31u
- 2024-05-16 15:26:59: 31u
- 2024-05-16 15:22:16: 31u

**Quantite Mediane (fallback)**: 31u
**Quantite Reelle**: 31u

</details>


<details>
<summary><strong>3. [PF1690] LD BBQ BIO 300G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 12:44:50: 25u
- 2025-11-07 12:37:21: 25u
- 2025-11-07 12:37:00: 25u
- 2025-10-30 08:14:34: 25u
- 2025-10-16 06:33:00: 25u
- 2025-10-15 13:54:01: 25u
- 2025-09-18 11:02:12: 25u
- 2025-09-04 08:22:01: 25u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 06:34:23: 25u
- 2024-10-30 14:45:09: 25u
- 2024-10-17 12:48:25: 25u
- 2024-10-17 12:48:04: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u
- 2024-09-19 21:12:31: 25u
- 2024-09-19 21:11:27: 25u
- 2024-09-05 07:12:20: 25u
- 2024-08-09 05:42:26: 25u
- 2024-08-08 06:02:21: 25u
- 2024-08-07 13:00:33: 25u

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 25u

</details>


<details>
<summary><strong>4. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 12:44:50: 50u
- 2025-11-07 12:37:21: 100u
- 2025-11-07 12:37:00: 75u
- 2025-10-30 08:14:34: 25u
- 2025-10-30 08:14:05: 25u
- 2025-10-30 08:13:10: 25u
- 2025-10-16 06:33:00: 50u
- 2025-10-16 06:32:32: 25u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 06:34:41: 25u
- 2024-10-31 06:34:23: 25u
- 2024-10-31 06:34:04: 25u
- 2024-10-30 14:45:09: 25u
- 2024-10-17 12:48:25: 25u
- 2024-10-17 12:48:04: 25u
- 2024-10-17 12:47:26: 25u
- 2024-10-03 06:12:28: 25u
- 2024-10-03 06:12:09: 25u
- 2024-10-03 06:11:51: 25u
- 2024-10-03 06:11:28: 25u
- 2024-09-19 21:13:09: 25u

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 50u

</details>


<details>
<summary><strong>5. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 12:44:50: 40u
- 2025-11-07 12:37:21: 40u
- 2025-11-07 12:37:00: 40u
- 2025-10-30 08:14:34: 40u
- 2025-10-30 08:13:39: 40u
- 2025-10-16 06:33:00: 40u
- 2025-10-16 06:32:32: 40u
- 2025-10-01 14:23:59: 40u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-17 12:48:25: 40u
- 2024-10-17 12:48:04: 40u
- 2024-10-17 12:47:46: 40u
- 2024-10-17 12:47:26: 40u
- 2024-09-19 21:13:09: 40u
- 2024-09-19 21:12:09: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-09-05 07:11:43: 40u
- 2024-09-05 07:10:56: 40u
- 2024-08-09 05:43:38: 40u
- 2024-08-09 05:43:13: 40u

**Quantite Mediane (fallback)**: 40u
**Quantite Reelle**: 80u

</details>


<details>
<summary><strong>6. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-16 06:32:32: 434u
- 2025-10-15 13:54:01: 434u
- 2025-10-02 06:43:53: 434u
- 2025-09-18 11:03:27: 434u
- 2025-09-04 08:22:56: 434u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 06:34:23: 434u
- 2024-10-30 14:45:09: 434u
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-08-09 05:43:13: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-07 13:00:03: 434u
- 2024-07-25 07:55:56: 434u
- 2024-07-25 07:55:13: 434u
- 2024-07-01 05:44:03: 434u

**Quantite Mediane (fallback)**: 434u
**Quantite Reelle**: 868u

</details>


<details>
<summary><strong>7. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 434u
- 2025-10-30 08:13:39: 434u
- 2025-10-16 06:33:00: 434u
- 2025-10-16 06:32:32: 434u
- 2025-10-15 13:54:30: 434u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 14:45:09: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-03 06:12:28: 434u
- 2024-09-19 21:13:09: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-08-09 05:42:53: 434u
- 2024-08-08 06:02:21: 434u
- 2024-08-07 13:00:49: 434u

**Quantite Mediane (fallback)**: 434u
**Quantite Reelle**: 868u

</details>


<details>
<summary><strong>8. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 12:44:50: 434u
- 2025-11-07 12:37:21: 1302u
- 2025-11-07 12:37:00: 434u
- 2025-10-16 06:33:00: 434u
- 2025-10-16 06:32:32: 434u
- 2025-10-02 06:44:40: 434u
- 2025-10-01 14:23:59: 434u
- 2025-09-19 08:03:40: 434u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 06:34:23: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-17 12:47:46: 434u
- 2024-10-17 12:47:26: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u
- 2024-09-05 07:11:43: 434u
- 2024-08-09 05:43:38: 434u
- 2024-08-09 05:42:26: 434u
- 2024-08-08 06:02:21: 434u

**Quantite Mediane (fallback)**: 434u
**Quantite Reelle**: 868u

</details>


<details>
<summary><strong>9. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 12:44:50: 868u
- 2025-11-07 12:37:21: 868u
- 2025-11-07 12:37:00: 434u
- 2025-10-30 08:14:34: 868u
- 2025-10-30 08:14:05: 434u
- 2025-10-16 06:33:00: 434u
- 2025-10-16 06:32:32: 434u
- 2025-10-15 13:54:30: 434u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 06:34:41: 434u
- 2024-10-31 06:34:23: 434u
- 2024-10-31 06:34:04: 434u
- 2024-10-17 12:48:25: 434u
- 2024-10-17 12:48:04: 434u
- 2024-10-17 12:47:26: 434u
- 2024-10-03 06:12:28: 434u
- 2024-10-03 06:11:51: 434u
- 2024-09-19 21:12:09: 434u
- 2024-09-19 21:11:27: 434u
- 2024-09-05 07:12:20: 434u
- 2024-09-05 07:12:01: 434u

**Quantite Mediane (fallback)**: 434u
**Quantite Reelle**: 868u

</details>


<details>
<summary><strong>10. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 186u
- 2025-11-07 12:37:00: 62u
- 2025-10-30 08:14:34: 93u
- 2025-10-30 08:14:05: 31u
- 2025-10-30 08:13:10: 31u
- 2025-10-16 06:33:00: 62u
- 2025-10-16 06:32:32: 31u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 06:34:41: 31u
- 2024-10-31 06:34:23: 62u
- 2024-10-31 06:34:04: 62u
- 2024-10-30 14:45:09: 31u
- 2024-10-17 12:48:25: 31u
- 2024-10-17 12:48:04: 62u
- 2024-10-17 12:47:46: 31u
- 2024-10-17 12:47:26: 31u
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 62u
- 2024-10-03 06:11:28: 31u

**Quantite Mediane (fallback)**: 62u
**Quantite Reelle**: 155u

</details>


<details>
<summary><strong>11. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 124u
- 2025-11-07 12:37:00: 93u
- 2025-10-30 08:14:34: 93u
- 2025-10-30 08:14:05: 124u
- 2025-10-30 08:13:39: 62u
- 2025-10-30 08:13:10: 93u
- 2025-10-16 06:33:00: 62u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 06:34:41: 31u
- 2024-10-31 06:34:23: 62u
- 2024-10-31 06:34:04: 62u
- 2024-10-30 14:45:09: 31u
- 2024-10-17 12:48:25: 31u
- 2024-10-17 12:48:04: 62u
- 2024-10-17 12:47:46: 31u
- 2024-10-17 12:47:26: 31u
- 2024-10-03 06:12:28: 31u
- 2024-10-03 06:12:09: 31u
- 2024-10-03 06:11:51: 31u
- 2024-10-03 06:11:28: 31u

**Quantite Mediane (fallback)**: 93u
**Quantite Reelle**: 124u

</details>


<details>
<summary><strong>12. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 12:44:50: 31u
- 2025-11-07 12:37:21: 93u
- 2025-11-07 12:37:00: 62u
- 2025-10-30 08:14:34: 31u
- 2025-10-30 08:13:39: 31u
- 2025-10-16 06:33:00: 93u
- 2025-10-16 06:32:32: 62u
- 2025-10-15 13:54:30: 31u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-17 12:48:25: 155u
- 2024-10-17 12:48:04: 62u
- 2024-10-03 06:12:28: 62u
- 2024-10-03 06:12:09: 62u
- 2024-10-03 06:11:51: 93u
- 2024-10-03 06:11:28: 62u
- 2024-09-19 21:13:09: 62u
- 2024-09-19 21:12:31: 62u
- 2024-09-19 21:12:09: 62u
- 2024-09-19 21:11:27: 31u
- 2024-09-05 07:12:20: 31u
- 2024-09-05 07:11:43: 31u

**Quantite Mediane (fallback)**: 62u
**Quantite Reelle**: 93u

</details>


<details>
<summary><strong>13. [PF3361] LD FR TARTINADE BIO OIGNON 180G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 12:44:50: 93u
- 2025-11-07 12:37:21: 31u
- 2025-11-07 12:37:00: 93u
- 2025-10-30 08:13:39: 31u
- 2025-10-30 08:13:10: 31u
- 2025-10-15 13:54:30: 31u
- 2025-10-15 13:54:01: 31u
- 2025-10-01 14:24:40: 31u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 31u
**Quantite Reelle**: 62u

</details>


<details>
<summary><strong>14. [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-07 12:37:21: 40u
- 2025-11-07 12:37:00: 40u
- 2025-10-16 06:32:32: 40u
- 2025-10-01 14:23:59: 40u
- 2025-09-18 11:03:27: 40u
- 2025-09-18 11:02:40: 40u
- 2025-09-18 11:02:12: 40u
- 2025-09-04 08:20:24: 40u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 06:34:04: 40u
- 2024-10-17 12:48:25: 40u
- 2024-10-03 06:11:28: 40u
- 2024-09-05 07:12:20: 40u
- 2024-09-05 07:12:01: 40u
- 2024-08-09 05:43:13: 40u
- 2024-08-09 05:42:26: 40u
- 2024-08-08 06:02:21: 40u
- 2024-07-25 07:58:01: 40u
- 2024-07-25 07:55:32: 40u
- 2024-07-25 07:55:13: 40u
- 2024-07-01 05:44:03: 40u

**Quantite Mediane (fallback)**: 40u
**Quantite Reelle**: 40u

</details>




---

## False Positives (12)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 434 | Predicted 434u but not ordered |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 434 | Predicted 434u but not ordered |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 248 | Predicted 248u but not ordered |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 279 | Predicted 279u but not ordered |
| [PF2991] LD TARTINADE BIO CHATAIGNE135G | 304 | Predicted 304u but not ordered |
| [PF3311] CB9027 - LD FR TARTINADE BIO CEPES 135G | 306 | Predicted 306u but not ordered |
| [PF3382] CB9032 - LD FR PUREE DE RAIFORT BIO 135g | 25 | Predicted 25u but not ordered |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 240 | Predicted 240u but not ordered |
| [PF1840] LD TARTINADE BIO TRIPACK | 1235 | Predicted 1235u but not ordered |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 639 | Predicted 639u but not ordered |
| [PF2990] LD TARTINADE BIO SALICORN 135G | 306 | Predicted 306u but not ordered |
| [PF3310] CB9026 - LD FR PESTO BIO CHAMPIGNONS TRUFFES 135G | 188 | Predicted 188u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:03:52.128Z*
