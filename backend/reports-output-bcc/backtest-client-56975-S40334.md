# Rapport Backtest - Client DLL AD WAREGEM

## Contexte

- **Client** : DLL AD WAREGEM (ID: 56975)
- **Commande réelle** : S40334
- **Date commande** : 2025-11-13 12:42:52
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 12
- **Tokens**: 10,906 input + 1,812 output = 12,718 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.0% | 12 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 40.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 4.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 60.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 58.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -60.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 6 | 2.0 | 33.3% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 7 | 5.0 | 71.4% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 7 | 5.0 | 71.4% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 6u
- **Erreur LLM**: 2u (33.3%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 02/10/2025, soit 41 jours avant la date actuelle. L'historique montre un cycle de réapprovisionnement d'environ 60 jours (août à octobre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous entrons dans la fenêtre critique du prochain cycle. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent (4u en août et octobre), une commande de 4 unités est nécessaire pour couvrir les besoins à venir.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 140 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 7u
- **Erreur LLM**: 5u (71.4%)
- **Erreur Mediane**: 4u (57.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence d'environ 60 à 70 jours entre les commandes récentes. La dernière commande datant du 02 octobre (il y a 41 jours), nous entrons dans la zone de risque de rupture pour les 30 prochains jours (seuil de réapprovisionnement). Bien que le cycle soit légèrement irrégulier, le principe de précaution B2B impose de prévoir une commande. Pour la quantité, la médiane des commandes récentes (2, 2, 5) est de 2 unités. Conformément aux règles de gestion des rotations faibles et à la priorité donnée à la médiane pour éviter le surstockage, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 161 tokens
- **Total**: 1,115 tokens



</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 7u
- **Erreur LLM**: 5u (71.4%)
- **Erreur Mediane**: 5u (71.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse montre un cycle de commande espacé d'environ 3 mois (85-90 jours). La dernière commande datant du 02/10/2025 (il y a 41 jours), nous entrons dans la zone de vigilance pour couvrir les besoins des 30 prochains jours (Replenishment Threshold Days), d'autant plus qu'une commande avait été passée en septembre l'année précédente. En application du principe de précaution B2B et face à une rotation faible mais constante, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane exacte des commandes récentes et historiques, tout en privilégiant la valeur la plus basse pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 166 tokens
- **Total**: 1,086 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 07:50:00: 4u
- 2025-08-04 14:05:08: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 06:27:15: 6u
- 2024-07-03 05:42:12: 3u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 07:50:00: 2u
- 2025-08-04 14:05:08: 2u
- 2025-07-09 11:22:58: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-22 06:27:15: 1u
- 2024-09-03 09:59:38: 4u
- 2024-07-03 05:42:12: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 07:50:00: 2u
- 2025-07-09 11:22:58: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 09:59:38: 2u
- 2024-07-03 05:42:12: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 7u

</details>




---

## False Positives (9)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 3 | Predicted 3u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:11:56.571Z*
