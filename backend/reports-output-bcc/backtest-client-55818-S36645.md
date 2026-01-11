# Rapport Backtest - Client CARREFOUR BELGIUM SA, CRF Market BXL TOMBERG

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CRF Market BXL TOMBERG (ID: 55818)
- **Commande réelle** : S36645
- **Date commande** : 2025-05-09 13:56:57
- **Date cutoff système** : 2025-05-08 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 17
- **Tokens**: 15,017 input + 2,612 output = 17,629 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 62.5% | 16 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 76.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 28.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une commande récente le 10 avril 2025, soit il y a 28 jours. Bien que le cycle soit irrégulier, le délai actuel atteint un seuil critique par rapport à l'horizon de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la valeur basse de l'historique récent pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 138 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>2. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen entre les commandes récentes est d'environ 58 jours (34 jours entre déc/jan et 84 jours entre jan/avr). La dernière commande date du 10 avril, soit il y a 28 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 58 jours d'écart dans l'horizon de prévision. En application du principe de précaution B2B (risque de rupture si cycle irrégulier), un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes systématiques de 1 unité. La médiane est de 1. On maintient cette quantité constante sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 176 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 10 avril, soit il y a 28 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement du stock (proche de 100% du cycle estimé). En application du principe de précaution B2B et pour éviter une rupture sur un produit à rotation faible mais régulière, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la dernière quantité commandée, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 130 tokens
- **Total**: 1,003 tokens



</details>


<details>
<summary><strong>4. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande observé est d'environ 84 jours. La dernière commande date du 10 avril 2025, soit il y a 28 jours. Bien que nous ne soyons pas encore au terme du cycle théorique, le seuil de réapprovisionnement est de 30 jours, ce qui place la prochaine échéance de commande critique dans la fenêtre de vigilance. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 148 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
La dernière commande remonte au 10 avril, soit il y a 28 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement du stock. Bien que l'historique soit limité à une seule commande récente, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture. La quantité retenue est de 2 unités, correspondant à la médiane (et unique valeur) de l'historique récent, afin de maintenir le niveau de stock habituel sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 131 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>6. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 118 jours entre les deux dernières commandes. Au 08/05/2025, 28 jours se sont écoulés depuis la dernière commande (10/04/2025). Bien que nous ne soyons qu'à environ 24% du cycle moyen, la rotation est très faible et irrégulière. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture sur un produit à faible rotation) et compte tenu du seuil de réapprovisionnement de 30 jours, une commande est préconisée. La quantité retenue est de 2 unités, correspondant à la médiane stricte et constante des commandes historiques récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 172 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>7. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 10 avril, soit 28 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de risque de rupture. En l'absence d'historique long permettant de définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture de stock. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien des quantités historiques, la quantité retenue est de 1 unité (médiane du flux récent).

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 145 tokens
- **Total**: 1,020 tokens



</details>


<details>
<summary><strong>8. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 10 avril 2025, soit il y a 28 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture (proche de 100% du cycle mensuel estimé). En l'absence d'historique long, le principe de précaution B2B impose de prévoir une commande. La quantité retenue est de 1 unité, correspondant à la médiane et à la dernière commande enregistrée pour ce produit à rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 126 tokens
- **Total**: 1,000 tokens



</details>


<details>
<summary><strong>9. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse montre un cycle de commande irrégulier avec une dernière commande effectuée il y a 28 jours (10 avril). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est considéré comme présent selon le principe de précaution B2B, car nous entrons dans la fenêtre critique de réapprovisionnement. Pour la quantité, bien que la dernière commande fût de 2 unités, l'historique global montre une rotation très faible (1 à 2 unités). Conformément aux règles de gestion des rotations faibles et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 156 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>10. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 janvier 2025, soit 112 jours sans activité. Bien que la rotation soit très faible, l'absence de cycle régulier et le délai important écoulé depuis la dernière unité vendue imposent une commande de précaution pour éviter une rupture de stock prolongée sur cette référence, conformément au principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. En l'absence d'autres données ou de saisonnalité N-1, la médiane de 2 unités est retenue pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 162 tokens
- **Total**: 1,036 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-10 11:25:25: 2u
- 2024-12-13 11:15:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-10 11:25:25: 1u
- 2025-01-16 13:39:37: 1u
- 2024-12-13 11:15:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-10 11:25:25: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-10 11:25:25: 1u
- 2025-01-16 13:39:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-10 11:25:25: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-10 11:25:25: 2u
- 2024-12-13 11:15:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-10 11:25:25: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-10 11:25:25: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-10 11:25:25: 2u
- 2024-12-13 11:15:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-16 13:39:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 5 | Predicted 5u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | Predicted 4u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [DIS0004] Display JF bois | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:20:06.910Z*
