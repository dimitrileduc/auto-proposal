# Rapport Backtest - Client CRF MARKET ALKEN NV

## Contexte

- **Client** : CRF MARKET ALKEN NV (ID: 52800)
- **Commande réelle** : S39563
- **Date commande** : 2025-10-06 06:29:07
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 16
- **Tokens**: 14,552 input + 2,613 output = 17,165 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 16 produits prédits, 12 corrects |
| **Rappel** | 100.0% | 12 produits réels, 12 détectés |
| **F1-Score** | 85.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 22.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (12)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF021] JF PICKLES 350 ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (12 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 27 mai 2025, soit plus de 130 jours sans activité, ce qui dépasse largement les cycles observés l'année précédente (environ 75 à 100 jours). Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu à la même période l'année dernière (01/10/2024). La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 145 tokens
- **Total**: 1,067 tokens



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
La dernière commande remonte au 27 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement tout cycle de réapprovisionnement standard. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane historique et à la règle de maintien des stocks pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 120 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
La dernière commande remonte au 27 mai 2025, soit plus de 130 jours sans activité, ce qui dépasse largement les cycles observés l'année précédente (environ 60 à 80 jours). Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, surtout à l'approche de la période anniversaire de la commande d'octobre 2024 (1u). En suivant la règle de la médiane historique et la consigne de choisir la valeur la plus basse en cas de doute sur une faible rotation (1-2u), la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 160 tokens
- **Total**: 1,082 tokens



</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 27 mai 2025, soit plus de 130 jours. Bien que l'historique récent soit faible, nous entrons dans la période d'octobre où une commande de 2u a été enregistrée l'année dernière (01/10/2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est identifié pour couvrir le risque de rupture sur l'horizon de 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique global montre des volumes faibles (1u, 1u, 2u, 4u). La médiane des commandes passées est de 1.5u. En suivant la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à rotation lente, mais en tenant compte du pic saisonnier N-1 à 2u, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 248 tokens
- **Total**: 1,168 tokens



</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 27 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un besoin est identifié. ÉTAPE 2 : L'historique récent montre une commande unitaire (1u) et l'historique N-1 montre également un volume faible (2u). Conformément à la règle sur les rotations faibles (1-2u), la quantité retenue est la plus basse de l'historique récent pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 173 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>6. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible et sporadique (environ une unité tous les 3 à 5 mois). La dernière commande enregistrée remonte au 27 mai 2025, soit plus de 130 jours sans mouvement. Selon le principe de précaution B2B, l'absence de commande récente sur une période dépassant largement le cycle habituel crée une incertitude sur l'état du stock. Un besoin de réapprovisionnement est donc détecté pour couvrir les 30 prochains jours. Conformément à la règle des rotations faibles (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane stricte de l'historique.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 159 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>7. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique montre des commandes espacées (avril, octobre, mai). Le délai écoulé depuis la dernière commande dépasse largement les cycles précédents, créant un doute sur la disponibilité du stock. En application du principe de précaution B2B, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 174 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>8. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande à la même période (1er octobre 2024). Par principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est constant à 1 unité. La médiane est de 1. On maintient cette quantité minimale sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 152 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>9. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 27 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande à la même période (01/10/2024). Le délai écoulé dépasse largement tout cycle raisonnable, créant un risque de rupture pour ce produit à rotation lente. Par principe de précaution B2B, un réapprovisionnement est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique est constant avec des commandes unitaires (1u). La médiane des commandes récentes et passées est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1u sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 188 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>10. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation très faible et espacée (cycle de plusieurs mois). La dernière commande enregistrée remonte au 27 mai 2025, soit plus de 130 jours. Bien que le cycle soit irrégulier, le délai écoulé depuis la dernière commande dépasse largement les intervalles observés l'année précédente (environ 75 à 100 jours). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à faible rotation, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes passées.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 153 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>11. [JF021] JF PICKLES 350 ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 mai 2025, soit plus de 130 jours. L'historique montre une rotation très faible mais régulière (environ tous les 3 à 4 mois). Nous sommes actuellement en octobre, période correspondant à une commande l'année dernière (01/10/2024). Le cycle moyen est largement dépassé, le risque de rupture est confirmé par le principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique est constant avec des commandes unitaires de 1u. La médiane et la tendance étant de 1u, cette quantité est maintenue pour éviter un surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 915 tokens
- **Output**: 173 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>12. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport à l'historique (commande en juin l'année précédente) crée une incertitude sur le niveau de stock actuel. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique montre une stabilité stricte à 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité, sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 177 tokens
- **Total**: 1,078 tokens



</details>




### Donnees d'Input LLM (12 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 13:14:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:01:34: 2u
- 2024-06-21 07:11:34: 2u
- 2024-04-08 07:20:48: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 13:14:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-21 07:11:34: 1u
- 2024-04-08 07:20:48: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 13:14:56: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:01:34: 1u
- 2024-06-21 07:11:34: 2u
- 2024-04-08 07:20:48: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 13:14:56: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:01:34: 2u
- 2024-06-21 07:11:34: 1u
- 2024-04-08 07:20:48: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 13:14:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-21 07:11:34: 2u
- 2024-04-08 07:20:48: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 13:14:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:01:34: 1u
- 2024-06-21 07:11:34: 1u
- 2024-04-08 07:20:48: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 13:14:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:01:34: 1u
- 2024-04-08 07:20:48: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 13:14:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:01:34: 1u
- 2024-04-08 07:20:48: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 13:14:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:01:34: 1u
- 2024-04-08 07:20:48: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 13:14:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:01:34: 2u
- 2024-06-21 07:11:34: 2u
- 2024-04-08 07:20:48: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 13:14:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:01:34: 1u
- 2024-06-21 07:11:34: 1u
- 2024-04-08 07:20:48: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 13:14:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-21 07:11:34: 1u
- 2024-04-08 07:20:48: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:19:59.207Z*
