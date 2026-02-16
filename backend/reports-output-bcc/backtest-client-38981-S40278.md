# Rapport Backtest - Client LD food SA (ITM by Mestdagh)

## Contexte

- **Client** : LD food SA (ITM by Mestdagh) (ID: 38981)
- **Commande réelle** : S40278
- **Date commande** : 2025-11-12 14:29:39
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 29
- **Tokens**: 26,624 input + 4,719 output = 31,343 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 38.5% | 26 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 55.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 15.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 8.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -15.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible mais régulière (environ une unité tous les 2 à 3 mois). La dernière commande remontant au 3 septembre (soit 69 jours), le cycle moyen est atteint, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours. En application du principe de précaution B2B et de la règle sur les faibles rotations, une commande de 1 unité (médiane historique) est préconisée pour maintenir le stock sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 121 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 23 et 42 jours. La dernière commande remonte au 03/09/2025, soit 69 jours avant la date actuelle (11/11/2025). Ce délai dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours, indiquant un besoin immédiat pour éviter une rupture. L'historique N-1 confirme également une activité sur cette période (commande le 30/10/2024). En suivant la règle de la médiane des quantités récentes (2u, 2u, 1u), la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 161 tokens
- **Total**: 1,134 tokens



</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation lente mais régulière avec un cycle moyen d'environ 50 à 70 jours. La dernière commande remonte au 03/09/2025, soit 69 jours avant la date actuelle. Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, signalant un risque de rupture imminent ou un besoin non couvert. Conformément au principe de précaution B2B et à la règle de rotation faible (1-2u), une commande est déclenchée. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 159 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 45 à 60 jours. La dernière commande remontant au 03/09/2025 (soit 69 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent. Bien qu'une commande de 2u ait été enregistrée récemment, l'historique long terme (N-1) et la majorité des commandes récentes sont de 1u. En application de la règle de la médiane et du choix de la valeur la plus basse en cas de doute sur une faible rotation, une quantité de 1u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 165 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 03/09/2025, soit 69 jours. Le cycle moyen observé est d'environ 35-40 jours. Nous avons largement dépassé ce cycle, et bien que la rotation soit faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, surtout à l'approche de la période de fin d'année (novembre). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 1u et 2u. La médiane et le mode de l'historique (récent et N-1) sont de 1u. En respectant la règle de choisir la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 203 tokens
- **Total**: 1,157 tokens



</details>


<details>
<summary><strong>6. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation lente mais régulière avec un besoin identifié à cette période l'année dernière (commande le 04/11/2024). La dernière commande remontant à plus de 100 jours (23/07/2025), le cycle de réapprovisionnement est largement dépassé, créant un risque de rupture imminent pour les 30 prochains jours. En application du principe de précaution B2B et de la règle de la médiane sur un produit à faible rotation (1-2u), une quantité de 1 unité est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 149 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>7. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juillet 2025, soit plus de 110 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au cycle précédent (environ 23 jours) suggère un besoin de réapprovisionnement par précaution pour éviter une rupture prolongée, conformément au principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une consommation constante de 1 unité par commande. En suivant la règle de maintien pour les rotations faibles (1-2u) et la médiane des commandes passées, la quantité recommandée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 163 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>8. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 130 jours. L'historique montre une rotation très faible et irrégulière (juin 2024, novembre 2024, juin 2025). En application du principe de précaution B2B, face à un cycle irrégulier et une absence de commande depuis plus de 4 mois, un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique est constant sur une unité par commande (médiane = 1). Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 186 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>9. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible et irrégulière (1 unité par commande). La dernière commande remonte au 30 juin 2025, soit plus de 130 jours. Bien que le cycle soit difficile à définir précisément, les données de l'année précédente (N-1) indiquent des commandes en octobre et novembre. En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte des commandes historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 142 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>10. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 130 jours. L'historique N-1 montre une commande le 4 novembre 2024, ce qui indique un besoin récurrent à cette période de l'année. Le délai depuis la dernière commande dépasse largement le cycle habituel, créant un risque de rupture imminent. ÉTAPE 2 : Estimation de la quantité. L'historique (récent et N-1) est extrêmement stable avec des commandes systématiques de 1 unité. Conformément à la règle de rotation faible et au maintien de la médiane historique, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 163 tokens
- **Total**: 1,083 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:38:08: 1u
- 2025-06-30 12:31:25: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 13:59:29: 1u
- 2024-06-11 06:51:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:38:08: 2u
- 2025-07-23 11:07:11: 2u
- 2025-06-30 12:31:25: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 07:33:15: 2u
- 2024-08-21 13:59:29: 2u
- 2024-07-17 12:27:49: 1u
- 2024-06-11 06:51:56: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:38:08: 1u
- 2025-07-23 11:07:11: 1u
- 2025-06-30 12:31:25: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 13:59:29: 1u
- 2024-06-11 06:51:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:38:08: 2u
- 2025-07-23 11:07:11: 1u
- 2025-06-30 12:31:25: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 07:33:15: 1u
- 2024-08-21 13:59:29: 1u
- 2024-07-17 12:27:49: 1u
- 2024-06-11 06:51:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:38:08: 1u
- 2025-07-23 11:07:11: 2u
- 2025-06-30 12:31:25: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 13:59:29: 1u
- 2024-07-17 12:27:49: 1u
- 2024-06-11 06:51:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-23 11:07:11: 2u
- 2025-06-30 12:31:25: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 16:07:56: 1u
- 2024-08-21 13:59:29: 1u
- 2024-07-17 12:27:49: 1u
- 2024-06-11 06:51:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-23 11:07:11: 1u
- 2025-06-30 12:31:25: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:31:25: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 16:07:56: 1u
- 2024-06-11 06:51:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:31:25: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 16:07:56: 1u
- 2024-10-30 07:33:15: 1u
- 2024-07-17 12:27:49: 1u
- 2024-06-11 06:51:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:31:25: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 16:07:56: 1u
- 2024-07-17 12:27:49: 1u
- 2024-06-11 06:51:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (16)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:14:32.819Z*
