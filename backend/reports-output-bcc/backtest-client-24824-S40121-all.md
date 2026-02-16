# Rapport Backtest - Client KOCKARTZ Kockado GmbH (Filiale Eynatten)

## Contexte

- **Client** : KOCKARTZ Kockado GmbH (Filiale Eynatten) (ID: 24824)
- **Commande réelle** : S40121
- **Date commande** : 2025-11-04 14:43:19
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 3,884 input + 663 output = 4,547 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 4 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 75.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 70.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 83.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 70.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 6 | 4 | 2.0 | 50.0% | partial | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 5 | 2 | 3.0 | 150.0% | partial | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 6 | 4 | 2.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 07/08/2025, soit environ 88 jours. Bien que la rotation soit lente, l'historique N-1 montre une activité régulière en fin d'année (décembre). Selon le principe de précaution B2B et le risque de rupture à l'approche de la période de fin d'année, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane historique et à la quantité de la dernière commande, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 130 tokens
- **Total**: 1,118 tokens



</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 07/08/2025, soit environ 88 jours. Bien que la rotation soit faible, l'historique N-1 montre une activité en fin d'année (décembre) et un besoin régulier tous les 2 à 3 mois. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est présent pour couvrir la période de fin d'année. En suivant le principe de précaution B2B et en se basant sur la médiane des quantités historiques (2u), une commande de 2 unités est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 149 tokens
- **Total**: 1,120 tokens



</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit environ 88 jours. L'historique N-1 montre une commande le 03/09/2024 suivie d'un creux, mais avec une reprise d'activité régulière en fin d'année (décembre). Compte tenu du délai important depuis la dernière commande et de l'approche de la période de fin d'année (historiquement active en 2023), il existe un risque de rupture ou un besoin de réapprovisionnement imminent sous 30 jours. ÉTAPE 2 : Estimation de la quantité. La médiane des commandes historiques (récentes et N-1) est de 2 unités. Les volumes sont stables (majoritairement 2u). En respectant le principe de précaution sans surstocker, la quantité de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 987 tokens
- **Output**: 211 tokens
- **Total**: 1,198 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 06:34:14: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 14:30:39: 2u
- 2024-06-11 06:37:21: 1u
- 2024-04-08 11:43:35: 3u
- 2024-04-05 08:47:31: 2u
- 2024-02-02 08:44:55: 2u
- 2023-12-20 08:32:55: 2u
- 2023-12-12 14:35:06: 2u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 06:34:14: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 14:30:39: 2u
- 2024-06-11 06:37:21: 1u
- 2024-04-08 11:43:35: 3u
- 2024-04-05 08:47:31: 2u
- 2024-02-02 08:44:55: 1u
- 2023-12-12 14:35:06: 2u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 06:34:14: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 14:30:39: 2u
- 2024-06-11 06:37:21: 1u
- 2024-04-08 11:43:35: 3u
- 2024-04-05 08:47:31: 2u
- 2024-02-02 08:44:55: 2u
- 2023-12-20 08:32:55: 2u
- 2023-12-12 14:35:06: 2u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF022] JF MOUTARDE MIEL 250ML WECK | 4 | Predicted 4u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV133] LV Tartinade Ananas Coco 190g | 4 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:09:55.127Z*
