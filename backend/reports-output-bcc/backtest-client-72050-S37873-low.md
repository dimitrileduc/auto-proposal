# Rapport Backtest - Client EDEKA Rhein Ruhr Stiftung & Co. KG, Geldermann Nicole e.k.

## Contexte

- **Client** : EDEKA Rhein Ruhr Stiftung & Co. KG, Geldermann Nicole e.k. (ID: 72050)
- **Commande réelle** : S37873
- **Date commande** : 2025-07-03 12:22:35
- **Date cutoff système** : 2025-07-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 9
- **Tokens**: 7,871 input + 1,351 output = 9,222 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 9 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 08/05/2025, soit 55 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé suggère un besoin imminent de réapprovisionnement pour couvrir les 30 prochains jours (seuil de réapprovisionnement). En l'absence d'historique plus large ou de saisonnalité N-1, le principe de précaution B2B s'applique pour éviter la rupture. La quantité retenue est de 3 unités, correspondant au volume de la dernière commande connue (médiane par défaut).

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 142 tokens
- **Total**: 1,017 tokens



</details>


<details>
<summary><strong>2. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 08/05/2025, soit 55 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou le cycle de réapprovisionnement est largement entamé. En l'absence d'historique long, le principe de précaution B2B s'applique pour éviter une rupture de stock. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien des quantités historiques, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 151 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 08/05/2025, soit 55 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement les cycles standards de rotation en B2B. En application du principe de précaution (Étape 1), un risque de rupture est identifié à l'horizon des 30 jours de seuil de réapprovisionnement. Pour la quantité (Étape 2), la valeur de 2 unités est retenue car elle correspond à l'unique point de référence historique récent, assurant un maintien de stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 147 tokens
- **Total**: 1,022 tokens



</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/05/2025, soit 55 jours. Avec un seuil de réapprovisionnement de 30 jours, l'horizon de risque atteint 85 jours sans commande. En l'absence d'historique long permettant de définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture sur un produit à rotation lente. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien des volumes pour les rotations faibles et l'utilisation de la médiane historique, la quantité recommandée est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 165 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 08/05/2025, soit 55 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement un cycle mensuel standard. En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), un réapprovisionnement est nécessaire pour couvrir les 30 prochains jours. La quantité retenue est de 2 unités, correspondant au volume de la dernière commande connue.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 120 tokens
- **Total**: 993 tokens



</details>


<details>
<summary><strong>6. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 08/05/2025, soit 55 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande récente, le délai écoulé suggère un besoin imminent de réapprovisionnement pour couvrir les 30 prochains jours (Replenishment Threshold Days). En application du principe de précaution B2B et face à l'absence de cycle établi, une commande est nécessaire. La quantité est fixée à 2 unités, correspondant à la médiane (et unique valeur) de l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 142 tokens
- **Total**: 1,017 tokens



</details>


<details>
<summary><strong>7. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 08/05/2025, soit 55 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé suggère un besoin imminent de réapprovisionnement pour couvrir les 30 prochains jours (Replenishment Threshold Days). En application du principe de précaution B2B et face à l'incertitude du cycle, une commande est préconisée. La quantité est fixée à 2 unités, correspondant à la valeur de la dernière commande connue (médiane sur historique restreint).

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 134 tokens
- **Total**: 1,009 tokens



</details>


<details>
<summary><strong>8. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 08/05/2025, soit 55 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré si le cycle de rotation est mensuel ou bimestriel. En l'absence d'historique long, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles et le maintien des quantités constatées, la médiane (2u) est retenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 159 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>9. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/05/2025, soit 55 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré si le cycle de rotation est mensuel ou bimestriel. En l'absence d'historique long, le principe de précaution B2B s'applique : le besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent ne présente qu'une seule commande de 2 unités. Conformément à la règle de maintien des rotations faibles (1-2u) et à l'utilisation de la médiane/valeur constante en cas de doute, la quantité de 2 unités est retenue pour couvrir le prochain cycle sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 191 tokens
- **Total**: 1,063 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 13:17:39: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 13:17:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 13:17:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 13:17:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 13:17:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 13:17:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 13:17:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 13:17:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 13:17:39: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:25:45.200Z*
