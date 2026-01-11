# Rapport Backtest - Client CAMAL S.A.

## Contexte

- **Client** : CAMAL S.A. (ID: 3469)
- **Commande réelle** : S38170
- **Date commande** : 2025-07-22 09:16:45
- **Date cutoff système** : 2025-07-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 3,997 input + 677 output = 4,674 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 6.75 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 24.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 22.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -11.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0093] FILOU MOUTARDE 300GR | 24 | 24 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF0094] FILOU MOUTARDE 700 GR | 31 | 24 | 7.0 | 29.2% | partial | Non | Non | LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 24 | 32 | 8.0 | 25.0% | partial | Non | Non | LLM |
| [PF0089] FILOU VOL AU VENT 400 GR | 20 | 32 | 12.0 | 37.5% | partial | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [PF0093] FILOU MOUTARDE 300GR</strong> - LLM: 24u vs Médiane: 24u (Réel: 24u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 24u
- **Baseline calculee**: 24u
- **Mediane historique**: 24u
- **Reel commande**: 24u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 24u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande d'environ 60 jours (20/03 au 20/05). Au 21/07, 62 jours se sont écoulés depuis la dernière commande, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent. La quantité est fixée à 24 unités, correspondant à la médiane exacte des commandes récentes et à la quantité la plus fréquente observée sur l'historique long terme (N-1).

**Tokens utilises pour cette prediction:**
- **Input**: 995 tokens
- **Output**: 136 tokens
- **Total**: 1,131 tokens



</details>


<details>
<summary><strong>2. [PF0094] FILOU MOUTARDE 700 GR</strong> - LLM: 31u vs Médiane: 32u (Réel: 24u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 31u
- **Baseline calculee**: 31u
- **Mediane historique**: 32u
- **Reel commande**: 24u
- **Erreur LLM**: 7u (29.2%)
- **Erreur Mediane**: 8u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 31u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. L'historique récent montre un cycle de commande d'environ 60 jours (mars à mai). La dernière commande date du 20 mai 2025, soit 62 jours avant la date actuelle (21 juillet). Le cycle moyen est dépassé et le risque de rupture est imminent dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 30u et 32u. La médiane de cette période est de 31u. L'historique N-1 à la même période (juin) montrait un volume légèrement supérieur (36u), mais conformément à la règle de prudence et de priorité à la médiane récente, la quantité de 31u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,031 tokens
- **Output**: 182 tokens
- **Total**: 1,213 tokens



</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 24u vs Médiane: 24u (Réel: 32u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 24u
- **Baseline calculee**: 24u
- **Mediane historique**: 24u
- **Reel commande**: 32u
- **Erreur LLM**: 8u (25.0%)
- **Erreur Mediane**: 8u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 24u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande moyen d'environ 60 jours (63 jours entre les deux dernières commandes). La dernière commande datant du 20 mai 2025, soit il y a 62 jours, nous avons dépassé le cycle habituel. Le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). En application du principe de précaution B2B et de la détection de besoin, une commande est nécessaire. La quantité retenue est de 24 unités, correspondant à la médiane et à la constante des commandes récentes, les volumes plus élevés de l'année précédente étant traités comme des pics exceptionnels.

**Tokens utilises pour cette prediction:**
- **Input**: 1,012 tokens
- **Output**: 161 tokens
- **Total**: 1,173 tokens



</details>


<details>
<summary><strong>4. [PF0089] FILOU VOL AU VENT 400 GR</strong> - LLM: 20u vs Médiane: 20u (Réel: 32u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 20u
- **Baseline calculee**: 20u
- **Mediane historique**: 20u
- **Reel commande**: 32u
- **Erreur LLM**: 12u (37.5%)
- **Erreur Mediane**: 12u (37.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 20u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 20 mai 2025, soit il y a 62 jours. L'historique montre un cycle moyen d'environ 60 jours (mars à mai). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation quantité. Les commandes récentes oscillent entre 16u et 24u. La médiane de l'historique global (8, 16, 16, 24, 24, 24) se situe à 20u. En suivant la règle de la médiane pour éviter de surstocker tout en couvrant le besoin, la quantité retenue est de 20 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 959 tokens
- **Output**: 198 tokens
- **Total**: 1,157 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [PF0093] FILOU MOUTARDE 300GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 12:21:31: 24u
- 2025-03-18 10:15:47: 24u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-06 10:47:48: 36u
- 2024-04-03 06:18:56: 24u
- 2024-01-30 13:16:48: 24u
- 2023-12-19 12:42:47: 24u
- 2023-10-31 13:19:20: 16u
- 2023-09-12 13:27:32: 16u

**Quantite Mediane (fallback)**: 24u
**Quantite Reelle**: 24u

</details>


<details>
<summary><strong>2. [PF0094] FILOU MOUTARDE 700 GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 12:21:31: 32u
- 2025-03-18 10:15:47: 30u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 09:03:44: 36u
- 2024-05-06 10:47:48: 36u
- 2024-04-03 06:18:56: 24u
- 2024-01-30 13:16:48: 16u
- 2023-12-19 12:42:47: 24u
- 2023-10-31 13:19:20: 16u
- 2023-10-03 09:59:18: 16u
- 2023-09-12 13:27:32: 16u

**Quantite Mediane (fallback)**: 31u
**Quantite Reelle**: 24u

</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 12:21:31: 24u
- 2025-03-18 10:15:47: 24u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-06 10:47:48: 36u
- 2024-04-03 06:18:56: 24u
- 2024-01-30 13:16:48: 24u
- 2023-12-19 12:42:47: 24u
- 2023-10-31 13:19:20: 16u
- 2023-10-03 09:59:18: 16u
- 2023-09-12 13:27:32: 16u

**Quantite Mediane (fallback)**: 24u
**Quantite Reelle**: 32u

</details>


<details>
<summary><strong>4. [PF0089] FILOU VOL AU VENT 400 GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 12:21:31: 16u
- 2025-03-18 10:15:47: 24u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-06 10:47:48: 24u
- 2024-04-03 06:18:56: 24u
- 2024-01-30 13:16:48: 8u
- 2023-12-19 12:42:47: 16u

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 32u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:33.696Z*
