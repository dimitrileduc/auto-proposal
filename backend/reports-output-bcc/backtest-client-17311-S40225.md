# Rapport Backtest - Client CARREFOUR BELGIUM SA, Market Knokke

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Market Knokke (ID: 17311)
- **Commande réelle** : S40225
- **Date commande** : 2025-11-12 07:34:51
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 12,794 input + 2,129 output = 14,923 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.9% | 14 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 60.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 30.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -30.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse de l'historique montre un cycle de commande irrégulier avec une dernière commande remontant à 92 jours (11 août). Bien que la rotation soit faible, le délai écoulé dépasse largement les intervalles habituels, créant un risque de rupture selon le principe de précaution B2B. En l'absence de stabilité sur les commandes récentes (1u et 4u), la quantité est déterminée par la médiane de l'historique global (2u), ce qui correspond également aux volumes commandés à la même période l'année précédente (août 2024). On privilégie cette valeur médiane de 2 unités pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 154 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 11 août 2025, soit 92 jours sans réapprovisionnement. Bien que l'historique récent soit faible (1u), l'historique N-1 montre une activité significative sur la période septembre-novembre avec des volumes plus importants (2u à 3u). Le délai écoulé dépasse largement les cycles habituels, créant un risque de rupture imminent pour les 30 prochains jours. En application du principe de précaution B2B et en se basant sur la médiane des commandes historiques (hors pic exceptionnel de 7u), une quantité de 2 unités est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 156 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 11 août 2025, soit 92 jours sans activité. Bien que la rotation soit très faible, l'historique de l'année précédente montre des commandes durant la période estivale. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture prolongée) et face à un cycle irrégulier, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la commande la plus récente et à la valeur la plus basse pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 137 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>4. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
Absence de commandes récentes sur l'année en cours. L'historique N-1 montre une rotation très faible et sporadique (2 unités par commande). En l'absence de données récentes et pour éviter une rupture sur un produit à cycle irrégulier, le principe de précaution B2B s'applique. La quantité retenue correspond à la médiane historique (2 unités) afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 97 tokens
- **Total**: 989 tokens



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
Ce produit présente une rotation très faible et irrégulière sans commande récente. En l'absence d'historique sur l'année en cours, l'analyse se base sur les données N-1 conformément aux règles de gestion des cas particuliers. Une commande de 2 unités a été enregistrée fin juillet 2024 et une de 1 unité en mars 2024. En application du principe de précaution B2B pour éviter une rupture prolongée sur un cycle incertain, un besoin est détecté. La quantité retenue est de 1 unité, correspondant à la valeur la plus basse de l'historique et à la médiane prudente pour un produit à très faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 152 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>6. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une activité ponctuelle. En l'absence de données récentes pour établir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture prolongée sur une référence active l'année précédente. ÉTAPE 2 : Estimation de la quantité. L'historique montre des volumes très faibles (1 à 2 unités). Conformément aux règles de rotation faible, la quantité retenue est la plus basse de l'historique (médiane/minimum) soit 1 unité, afin de maintenir une présence en stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 157 tokens
- **Total**: 1,048 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:39:44: 1u
- 2025-07-23 07:39:15: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-07 06:25:34: 2u
- 2024-07-29 06:29:32: 2u
- 2024-03-21 09:59:05: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:39:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:47:57: 3u
- 2024-08-07 06:25:34: 3u
- 2024-07-29 06:29:32: 2u
- 2024-04-23 07:18:56: 7u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:39:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-07 06:25:34: 2u
- 2024-07-29 06:29:32: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:29:32: 2u
- 2024-03-21 09:59:05: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:29:32: 2u
- 2024-03-21 09:59:05: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:29:32: 2u
- 2024-03-21 09:59:05: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 5 | Predicted 5u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Predicted 2u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | Predicted 2u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:57.815Z*
