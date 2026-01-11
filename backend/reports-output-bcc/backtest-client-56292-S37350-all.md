# Rapport Backtest - Client DLL AD GENVAL

## Contexte

- **Client** : DLL AD GENVAL (ID: 56292)
- **Commande réelle** : S37350
- **Date commande** : 2025-06-11 07:09:09
- **Date cutoff système** : 2025-06-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 50
- **Tokens**: 45,828 input + 7,474 output = 53,302 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 22.9% | 48 produits prédits, 11 corrects |
| **Rappel** | 100.0% | 11 produits réels, 11 détectés |
| **F1-Score** | 37.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.36 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 18.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -26.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 28 jours (42 jours entre les deux dernières, 14 jours entre les précédentes). La dernière commande date du 20 mai, soit il y a 21 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent d'ici le 20 juin. Conformément au principe de précaution B2B et à la règle de rotation régulière (3 dernières commandes identiques à 1u), la quantité retenue est la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 137 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 20 à 25 jours entre chaque commande sur les trois derniers mois. La dernière commande datant du 20 mai (soit 21 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours sera atteint très prochainement. Il existe donc un risque de rupture imminent. Concernant la quantité, l'historique récent oscille entre 1u et 2u. Conformément à la règle de prudence B2B privilégiant la médiane et la valeur la plus basse en cas de doute pour éviter le surstockage sur des produits à faible rotation, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 158 tokens
- **Total**: 1,147 tokens



</details>


<details>
<summary><strong>3. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'historique récent montre un cycle de commande d'environ 13 jours (entre le 07/05 et le 20/05). Au 10/06, cela fait 21 jours que la dernière commande a été passée, ce qui dépasse largement les 70% du cycle moyen estimé. Il existe donc un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de la médiane sur les rotations faibles et régulières (1u à chaque commande), la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 146 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>4. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 25 jours sur les trois dernières transactions. La dernière commande datant du 20 mai (soit 21 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Conformément au principe de précaution B2B et à la règle des 70% du cycle, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane constante et stricte observée sur l'ensemble de l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 143 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>5. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation faible mais régulière avec des commandes systématiques de 1 unité. La dernière commande remonte au 20 mai 2025, soit 21 jours avant la date actuelle. Le cycle récent (7 mai au 20 mai) était de 13 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous avons déjà dépassé la durée du dernier cycle de rotation. En application du principe de précaution B2B et de la règle de la médiane sur les quantités historiques (1u), une commande de 1 unité est nécessaire pour couvrir les besoins des 30 prochains jours.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 156 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>6. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière (environ tous les 15 à 30 jours). La dernière commande remonte au 20 mai, soit 21 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous dépassons 70% du cycle moyen constaté. La quantité historique est strictement constante à 1 unité par commande, y compris sur la période N-1. En suivant la règle de la médiane et de la stabilité pour les faibles rotations, une commande de 1 unité est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 134 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>7. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 20 mai 2025, soit 21 jours avant la date actuelle. Bien que le cycle soit irrégulier, l'historique montre une commande à la même période l'année dernière (4 juin 2024). En application du principe de précaution B2B et face à un cycle incertain, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est extrêmement stable avec des commandes unitaires systématiques (1u). La médiane des quantités est de 1. Conformément à la règle sur les rotations faibles, la quantité de 1u est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 175 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>8. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une accélération récente avec des commandes le 07/05 et le 20/05 (intervalle de 13 jours). Depuis la dernière commande du 20/05, 21 jours se sont écoulés, ce qui dépasse largement le cycle moyen récent. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de précaution B2B et à la stabilité de l'historique (médiane de 1u), une commande de 1 unité est nécessaire pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 146 tokens
- **Total**: 1,067 tokens



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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande régulier d'environ 15 à 30 jours (dernières commandes le 07/05 et 20/05). Depuis la dernière commande du 20/05, 21 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de rupture potentielle. ÉTAPE 2 : Estimation quantité. La rotation est très faible et constante à 1 unité par commande (médiane et mode = 1u). Conformément aux règles sur la rotation faible, on maintient la quantité historique de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 168 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>10. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (1 unité par commande). La dernière commande remonte au 20 mai 2025, soit 21 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture, d'autant plus qu'une commande avait été passée à la même période l'année dernière (juin 2024). En application du principe de précaution B2B et face à un cycle de rotation faible, la commande est déclenchée. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 159 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>11. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 30 jours (25/03, 08/04, 07/05). La dernière commande datant du 07/05, soit il y a 34 jours, nous avons dépassé l'intervalle habituel. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En suivant la règle de la médiane des quantités récentes (1u, 1u, 1u), la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage, conformément à la rotation faible mais constante du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 158 tokens
- **Total**: 1,079 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 06:18:30: 1u
- 2025-04-08 11:45:23: 1u
- 2025-03-25 07:36:12: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 06:47:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 06:18:30: 1u
- 2025-05-07 09:12:46: 2u
- 2025-04-08 11:45:23: 2u
- 2025-03-25 07:36:12: 1u
- 2025-02-07 08:03:00: 1u
- 2025-01-20 09:21:24: 1u
- 2025-01-16 10:19:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 06:47:26: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 06:18:30: 1u
- 2025-05-07 09:12:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 06:18:30: 1u
- 2025-05-07 09:12:46: 1u
- 2025-04-08 11:45:23: 1u
- 2025-02-07 08:03:00: 1u
- 2025-01-20 09:21:24: 1u
- 2025-01-16 10:19:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 06:47:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 06:18:30: 1u
- 2025-05-07 09:12:46: 1u
- 2025-01-20 09:21:24: 1u
- 2025-01-16 10:19:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 06:47:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 06:18:30: 1u
- 2025-05-07 09:12:46: 1u
- 2025-04-08 11:45:23: 1u
- 2025-03-25 07:36:12: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 06:47:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 06:18:30: 1u
- 2025-01-20 09:21:24: 1u
- 2025-01-16 10:19:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 06:47:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 06:18:30: 1u
- 2025-05-07 09:12:46: 1u
- 2025-02-07 08:03:00: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 06:47:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 06:18:30: 1u
- 2025-05-07 09:12:46: 1u
- 2025-04-08 11:45:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 06:47:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 06:18:30: 1u
- 2025-01-20 09:21:24: 1u
- 2025-01-16 10:19:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 06:47:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-07 09:12:46: 1u
- 2025-04-08 11:45:23: 1u
- 2025-03-25 07:36:12: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 06:47:26: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (37)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Predicted 1u but not ordered |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Predicted 1u but not ordered |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Predicted 1u but not ordered |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | Predicted 1u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Predicted 1u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Predicted 1u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Predicted 1u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |
| [LEA09] LEAMO cola bio 330ml | 1 | Predicted 1u but not ordered |
| [LEA05] LEAMO organic lemon lemonade 330 ml | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | Predicted 2u but not ordered |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Predicted 1u but not ordered |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Predicted 1u but not ordered |
| [LEA06] LEAMO maté 330ml | 1 | Predicted 1u but not ordered |
| [LEA07] LEAMO orangeade bio 330ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:30.362Z*
