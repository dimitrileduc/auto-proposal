# Rapport Backtest - Client Hyper St Agathe Berchem

## Contexte

- **Client** : Hyper St Agathe Berchem (ID: 17282)
- **Commande réelle** : S39825
- **Date commande** : 2025-10-21 06:11:48
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 19,865 input + 3,498 output = 23,363 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.6% | 22 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 77.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.64 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 51.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 12.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF021] JF PICKLES 350 ML | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente et irrégulière (intervalles de 83 jours puis 49 jours). Depuis la dernière commande du 01/09/2025, 49 jours se sont écoulés, ce qui correspond au dernier cycle observé. En application du principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 1 unité, correspondant à la médiane historique et au volume le plus fréquent, afin d'éviter un surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 134 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>2. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 24, 58 et 59 jours. Depuis la dernière commande du 01/09/2025, 49 jours se sont écoulés, ce qui représente plus de 70% du cycle moyen constaté. Un risque de rupture est identifié dans l'horizon des 30 jours (Replenishment Threshold Days). En suivant la règle de précaution B2B et la méthode de la médiane sur l'historique récent (1u, 1u, 2u), la quantité retenue est de 1 unité, privilégiant la valeur la plus basse en cas de doute sur une rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 155 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 45 à 60 jours. La dernière commande remontant au 1er septembre (soit 49 jours), le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane et au mode des commandes récentes les plus significatives (juillet et septembre), tout en ignorant la commande isolée de 1 unité pour garantir la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 140 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>4. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 01/09/2025, soit 49 jours. Bien que le cycle soit irrégulier, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours et l'historique suggère un besoin intermittent. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : L'historique récent montre des commandes de 1u et 2u. La médiane et la valeur maximale observée (hors pics) étant de 2u, cette quantité est retenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 148 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 01/09/2025, soit 49 jours. Le cycle précédent était de 59 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons 83% du cycle moyen observé, dépassant le seuil de précaution de 70%. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. En application de la règle de la médiane et du choix de la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 167 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>6. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 24 jours puis 59 jours. Depuis la dernière commande du 01/09/2025, 49 jours se sont écoulés, ce qui dépasse largement 70% du cycle moyen constaté. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane des commandes récentes (2, 3, 5), afin de couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 145 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 24 et 59 jours. Depuis la dernière commande du 01/09/2025, 49 jours se sont écoulés, ce qui dépasse largement 70% du cycle moyen constaté. Il existe donc un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (2u, 2u, 4u), en privilégiant la valeur la plus basse pour éviter le surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 163 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles irréguliers (24 jours, puis 59 jours). La dernière commande remonte au 01/09/2025, soit 49 jours avant la date actuelle. Ce délai dépasse largement 70% du cycle moyen observé, créant un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (1, 2, 3), afin de maintenir un stock cohérent sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 152 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>9. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles irréguliers (24 jours, puis 59 jours). La dernière commande remonte au 1er septembre 2025, soit 49 jours avant la date actuelle. Ce délai dépasse largement 70% du cycle moyen observé, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (1, 2, 3), afin de maintenir un stock cohérent sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 151 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>10. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 01/09/2025, soit 49 jours avant la date actuelle. Bien que l'historique soit limité, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours, créant une incertitude sur le stock disponible. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane du volume de commande le plus récent, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 137 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>11. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle d'environ 60 jours entre les deux dernières commandes (juillet à septembre). Au 20 octobre, 49 jours se sont écoulés depuis la dernière commande, ce qui représente 81% du cycle moyen. Ce dépassement du seuil de 70% indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de précaution B2B, un réapprovisionnement est nécessaire. La quantité est fixée à 4 unités, correspondant à la médiane des commandes récentes (4 et 6) en privilégiant la valeur la plus basse pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 158 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>12. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle d'environ 60 jours entre les deux dernières commandes (juillet à septembre). Au 20 octobre, 49 jours se sont écoulés depuis la dernière commande, ce qui représente 81% du cycle moyen. Ce dépassement du seuil de 70% indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B et conformément à la règle de rotation régulière (2u commandées systématiquement en 2025), la quantité retenue est la médiane des commandes récentes, soit 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 148 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>13. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 01/09/2025, soit 49 jours. Le cycle précédent était de 83 jours. 70% de ce cycle représente environ 58 jours. Bien que nous ne soyons pas encore à l'échéance théorique, le cycle est irrégulier et le risque de rupture à l'horizon de 30 jours (Replenishment Threshold Days) est réel. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 2u et 3u. La médiane de ces commandes est de 2,5u. En cas de doute ou de rotation faible, la règle impose de choisir la valeur la plus basse pour éviter le surstock. La quantité retenue est donc de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 211 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>14. [JF021] JF PICKLES 350 ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen observé est d'environ 59 jours. La dernière commande date du 01/09/2025, soit 49 jours écoulés. Ce délai représente 83% du cycle moyen, dépassant le seuil de risque de 70%. Un réapprovisionnement est nécessaire pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une consommation constante et faible de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles, la quantité de 1 unité est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 149 tokens
- **Total**: 1,034 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:41:12: 3u
- 2025-06-10 06:33:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 14:11:18: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:41:12: 2u
- 2025-07-04 09:06:27: 1u
- 2025-06-10 06:33:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 14:11:18: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:41:12: 3u
- 2025-07-04 09:06:27: 3u
- 2025-06-10 06:33:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 14:11:18: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:41:12: 2u
- 2025-06-10 06:33:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 14:11:18: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:41:12: 1u
- 2025-07-04 09:06:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 14:11:18: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:41:12: 5u
- 2025-07-04 09:06:27: 3u
- 2025-06-10 06:33:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 14:11:18: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:41:12: 4u
- 2025-07-04 09:06:27: 2u
- 2025-06-10 06:33:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 14:11:18: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:41:12: 3u
- 2025-07-04 09:06:27: 2u
- 2025-06-10 06:33:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 14:11:18: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:41:12: 3u
- 2025-07-04 09:06:27: 1u
- 2025-06-10 06:33:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 14:11:18: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:41:12: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 14:11:18: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:41:12: 4u
- 2025-07-04 09:06:27: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 14:11:18: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>12. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:41:12: 2u
- 2025-07-04 09:06:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 14:11:18: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:41:12: 3u
- 2025-06-10 06:33:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 14:11:18: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 06:41:12: 1u
- 2025-07-04 09:06:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:15.998Z*
