# Rapport Backtest - Client SA RG FOOD

## Contexte

- **Client** : SA RG FOOD (ID: 52792)
- **Commande réelle** : S37361
- **Date commande** : 2025-06-11 08:21:19
- **Date cutoff système** : 2025-06-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 18
- **Tokens**: 15,809 input + 2,675 output = 18,484 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.1% | 18 produits prédits, 11 corrects |
| **Rappel** | 78.6% | 14 produits réels, 11 détectés |
| **F1-Score** | 68.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.45 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 29.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 27.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -17.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 14 avril 2025, soit 57 jours avant la date actuelle. En l'absence d'un historique plus dense pour définir un cycle précis, le principe de précaution B2B s'applique car le délai écoulé suggère un besoin imminent de réapprovisionnement pour éviter une rupture de stock dans les 30 prochains jours (Replenishment Threshold Days). Conformément à la règle de la médiane sur l'historique récent et à la gestion des rotations faibles, la quantité est maintenue à 2 unités, correspondant au volume de la dernière commande enregistrée.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 138 tokens
- **Total**: 1,011 tokens



</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 avril, soit 57 jours. Le cycle précédent était de 60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons la fin du cycle habituel. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes de 2 unités. La médiane est de 2. Conformément à la règle de maintien pour les rotations faibles, la quantité de 2 est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 132 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>3. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 avril, soit 57 jours. Le cycle précédent était de 60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons 95% du cycle moyen observé. Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles pour les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 151 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 avril, soit 57 jours. Le cycle précédent était de 60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons la fin du cycle habituel. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. En suivant la règle de la médiane et le principe de choisir la valeur la plus basse en cas de doute pour une rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 140 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>5. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 avril, soit 57 jours. Le cycle précédent était de 60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons la fin du cycle de rotation habituel. ÉTAPE 2 : Estimation quantité. L'historique montre des volumes très faibles (1u et 2u). Conformément à la règle de précaution sur les faibles rotations et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité pour couvrir le prochain cycle sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 151 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>6. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 avril 2025, soit 57 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé suggère un besoin imminent de réapprovisionnement pour maintenir la disponibilité du produit, surtout avec un seuil de 30 jours. En l'absence de cycle établi, le principe de précaution B2B s'applique pour éviter une rupture. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien des quantités historiques, la quantité recommandée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 162 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>7. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande date du 14 avril 2025, soit 57 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, l'horizon de risque s'étend jusqu'à 87 jours après la dernière commande. En l'absence d'historique long pour établir un cycle précis, le principe de précaution B2B s'applique car le délai depuis la dernière commande est important. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien des quantités pour les rotations faibles et l'utilisation de la médiane historique, la quantité recommandée est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 161 tokens
- **Total**: 1,033 tokens



</details>


<details>
<summary><strong>8. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 avril 2025, soit 57 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré pour ce produit à faible rotation. En l'absence d'un cycle régulier établi, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément aux règles de rotation très faible (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane de l'historique disponible.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 167 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>9. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 14 avril 2025, soit 57 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (cycle incertain = risque de rupture), un besoin est détecté. ÉTAPE 2 : L'historique récent présente une commande unique de 1 unité. Conformément à la règle de maintien des rotations faibles (1-2u) et à l'utilisation de la médiane historique, la quantité recommandée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 153 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>10. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 février 2025, soit environ 117 jours. Bien que la rotation soit très faible, le délai écoulé depuis la dernière commande dépasse largement un cycle de réapprovisionnement standard. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 170 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>11. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a environ 117 jours. Bien que le cycle soit difficile à déterminer en l'absence d'historique long, le principe de précaution B2B s'applique pour éviter une rupture prolongée sur une référence active. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane de l'historique récent, afin de maintenir un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 120 tokens
- **Total**: 994 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-14 12:00:48: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-14 12:00:48: 2u
- 2025-02-13 09:18:36: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-14 12:00:48: 1u
- 2025-02-13 09:18:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-14 12:00:48: 1u
- 2025-02-13 09:18:36: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-14 12:00:48: 1u
- 2025-02-13 09:18:36: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-14 12:00:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-14 12:00:48: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-14 12:00:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-14 12:00:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-13 09:18:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-13 09:18:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Predicted 2u but not ordered |
| [DIS0004] Display JF bois | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Predicted 2u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Predicted 2u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Never ordered in previous analysis window (no history) |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:22:46.812Z*
