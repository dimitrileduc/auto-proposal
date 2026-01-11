# Rapport Backtest - Client DLL AD LEDE GEEFI

## Contexte

- **Client** : DLL AD LEDE GEEFI (ID: 38811)
- **Commande réelle** : S37897
- **Date commande** : 2025-07-09 11:23:40
- **Date cutoff système** : 2025-07-08 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 10
- **Tokens**: 9,073 input + 1,511 output = 10,584 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 9 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 80.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 19.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF021] JF PICKLES 350 ML | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/05/2025, soit 60 jours. Le cycle précédent était de 59 jours. Nous sommes à 100% du cycle moyen, le risque de rupture est imminent dans l'horizon des 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 2u et une de 4u. L'historique N-1 sur la même période (mai) était de 2u. En suivant la règle de la médiane et le principe de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 169 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>2. [JF021] JF PICKLES 350 ML</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 09/05/2025, soit 60 jours avant la date actuelle. Bien que le cycle de rotation soit lent et irrégulier, le délai écoulé dépasse largement les intervalles observés l'année précédente (environ 56 jours entre mars et mai 2024). En application du principe de précaution B2B et face à un risque de rupture probable dans l'horizon des 30 jours, un réapprovisionnement est nécessaire. La quantité est fixée à 2 unités, correspondant à la médiane historique et au volume stable observé l'année dernière, afin d'éviter un surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 898 tokens
- **Output**: 154 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 09/05/2025, soit 60 jours. Le cycle précédent était de 59 jours. Nous sommes à 100% du cycle moyen, le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 1u et 2u. En application de la règle de précaution B2B privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 155 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>4. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 3u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 mars 2025, soit environ 119 jours. Bien que l'historique soit limité, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de la règle de détection d'un besoin incertain, une commande est nécessaire pour éviter une rupture de stock prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent présente une commande unique de 3 unités. En l'absence d'autres données ou de pics exceptionnels, la médiane se base sur cette valeur de référence. On maintient donc une quantité de 3 unités pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 171 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>5. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 11 mars 2025, soit environ 119 jours. Bien que l'historique soit irrégulier et à faible rotation, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 60 jours entre mars et mai 2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : L'historique montre des quantités constantes de 2u (médiane). Conformément à la règle sur les rotations faibles, la quantité de 2u est maintenue sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 165 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>6. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
Absence de commandes récentes sur ce produit à rotation très faible. L'historique N-1 montre une commande de 2 unités à la même période l'année dernière (mai/juin). En application du principe de précaution B2B et pour éviter une rupture sur un produit à cycle long ou irrégulier, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la dernière commande connue, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 110 tokens
- **Total**: 1,001 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 12:57:31: 4u
- 2025-03-11 08:59:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-23 08:07:33: 2u
- 2024-03-28 10:16:43: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 12:57:31: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-23 08:07:33: 2u
- 2024-03-28 10:16:43: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-09 12:57:31: 1u
- 2025-03-11 08:59:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-23 08:07:33: 0u
- 2024-03-28 10:16:43: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-11 08:59:01: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-23 08:07:33: 0u
- 2024-03-28 10:16:43: 0u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-11 08:59:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-23 08:07:33: 2u
- 2024-03-28 10:16:43: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-23 08:07:33: 2u
- 2024-03-28 10:16:43: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | Predicted 3u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:14:29.318Z*
