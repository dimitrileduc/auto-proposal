# Rapport Backtest - Client TADAL  SA

## Contexte

- **Client** : TADAL  SA (ID: 3572)
- **Commande réelle** : S38548
- **Date commande** : 2025-08-18 05:57:23
- **Date cutoff système** : 2025-08-17 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 3,830 input + 892 output = 4,722 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 4 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 85.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 112.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 75.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 118.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 75.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0232] BOLOGNAISE POULET TADAL 670 GR | 320 | 128 | 192.0 | 150.0% | partial | Non | Non | LLM |
| [PF0092] BOLOGNAISE BOEUF TADAL 670 GR | 272 | 256 | 16.0 | 6.3% | partial | Non | Non | LLM |
| [PF1168] TADAL VOL AU VENT HALAL 800G | 192 | 64 | 128.0 | 200.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [PF0232] BOLOGNAISE POULET TADAL 670 GR</strong> - LLM: 320u vs Médiane: 262u (Réel: 128u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 320u
- **Baseline calculee**: 320u
- **Mediane historique**: 262u
- **Reel commande**: 128u
- **Erreur LLM**: 192u (150.0%)
- **Erreur Mediane**: 134u (104.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 320u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 mai 2025, soit 81 jours. L'historique N-1 montre une commande le 25 juillet et le 31 août, indiquant un besoin récurrent durant l'été. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car le cycle habituel est largement dépassé. ÉTAPE 2 : Estimation de la quantité. L'historique récent est limité à une commande de 360u. En analysant l'historique N-1, les quantités oscillent entre 192u et 320u. La médiane de l'historique global se situe autour de 272u, mais la commande de l'année dernière à la même période (avril/juillet) était de 320u. Par mesure de précaution B2B et pour s'aligner sur un volume cohérent hors pic exceptionnel, la quantité de 320u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 968 tokens
- **Output**: 243 tokens
- **Total**: 1,211 tokens



</details>


<details>
<summary><strong>2. [PF0092] BOLOGNAISE BOEUF TADAL 670 GR</strong> - LLM: 272u vs Médiane: 270u (Réel: 256u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 272u
- **Baseline calculee**: 272u
- **Mediane historique**: 270u
- **Reel commande**: 256u
- **Erreur LLM**: 16u (6.3%)
- **Erreur Mediane**: 14u (5.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 272u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28/05/2025, soit 81 jours. L'historique N-1 montre des commandes en août (31/08) et juillet (25/07). Le cycle moyen historique est d'environ 75-80 jours. Nous sommes à 100% du cycle moyen, le risque de rupture dans les 30 jours est critique. ÉTAPE 2 : Estimation de la quantité. L'historique récent est limité à une commande (288u). En analysant l'historique global (288, 268, 320, 192, 245, 272), la médiane se situe à 270u. La valeur historique la plus proche de la médiane et correspondant à la saisonnalité de fin d'été (août N-1) est 272u. On retient cette valeur stable.

**Tokens utilises pour cette prediction:**
- **Input**: 968 tokens
- **Output**: 232 tokens
- **Total**: 1,200 tokens



</details>


<details>
<summary><strong>3. [PF1168] TADAL VOL AU VENT HALAL 800G</strong> - LLM: 192u vs Médiane: 184u (Réel: 64u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 192u
- **Baseline calculee**: 192u
- **Mediane historique**: 184u
- **Reel commande**: 64u
- **Erreur LLM**: 128u (200.0%)
- **Erreur Mediane**: 120u (187.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 192u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 28 mai 2025, soit 81 jours avant la date actuelle (17 août). L'historique montre des cycles de commande irréguliers (allant de 1 à 4 mois). Selon le principe de précaution B2B et le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire car le délai depuis la dernière commande est important. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent affiche une commande de 256u, mais les données N-1 montrent des volumes variés (64, 128, 175, 192, 256). La médiane de l'historique complet se situe autour de 183u. En suivant la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité de 192u (valeur historique récurrente et proche de la médiane) est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 965 tokens
- **Output**: 250 tokens
- **Total**: 1,215 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF0232] BOLOGNAISE POULET TADAL 670 GR</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 14:15:54: 360u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-25 09:41:31: 268u
- 2024-04-23 07:41:10: 320u
- 2024-03-15 10:36:20: 192u
- 2023-12-01 10:52:29: 248u
- 2023-08-31 07:26:40: 272u

**Quantite Mediane (fallback)**: 320u
**Quantite Reelle**: 128u

</details>


<details>
<summary><strong>2. [PF0092] BOLOGNAISE BOEUF TADAL 670 GR</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 14:15:54: 288u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-25 09:41:31: 268u
- 2024-04-23 07:41:10: 320u
- 2024-03-15 10:36:20: 192u
- 2023-12-01 10:52:29: 245u
- 2023-08-31 07:26:40: 272u

**Quantite Mediane (fallback)**: 272u
**Quantite Reelle**: 256u

</details>


<details>
<summary><strong>3. [PF1168] TADAL VOL AU VENT HALAL 800G</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 14:15:54: 256u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-25 09:41:31: 64u
- 2024-04-23 07:41:10: 256u
- 2024-03-15 10:36:20: 192u
- 2023-12-01 10:52:29: 175u
- 2023-08-31 07:26:40: 128u

**Quantite Mediane (fallback)**: 192u
**Quantite Reelle**: 64u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1615] BOULETTES TOMATE TADAL 800G | 128 | Predicted 128u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:15:23.472Z*
