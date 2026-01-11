# Rapport Backtest - Client EMBALDIF SARL

## Contexte

- **Client** : EMBALDIF SARL (ID: 33821)
- **Commande réelle** : S40114
- **Date commande** : 2025-11-05 12:03:01
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 2,873 input + 576 output = 3,449 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 3 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 81.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0516] YVALLI PROVENCALE 2,5 KG BOC | 11 | 10 | 1.0 | 10.0% | partial | Non | Non | LLM |
| [PF0539] JF VOL AU VENT 2,5 KG | 4 | 6 | 2.0 | 33.3% | partial | Non | Non | LLM |
| [PF0609] YVALLI SAUCE TOMATE 2,5 KG | 6 | 2 | 4.0 | 200.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - LLM: 11u vs Médiane: 12u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 11u
- **Baseline calculee**: 11u
- **Mediane historique**: 12u
- **Reel commande**: 10u
- **Erreur LLM**: 1u (10.0%)
- **Erreur Mediane**: 2u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 11u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'analyse des commandes récentes montre un cycle moyen d'environ 25 à 30 jours (intervalles de 20, 31 et 28 jours). La dernière commande date du 07/10/2025, soit 28 jours avant la date actuelle (04/11/2025). Nous avons atteint 100% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des quantités de 10, 11, 20 et 12 unités. La valeur de 20u est un pic exceptionnel à écarter. La médiane des commandes récentes (10, 11, 12) est de 11. Ce volume est cohérent avec l'historique N-1 à la même période (12u en octobre 2024). Par mesure de précaution B2B et respect de la médiane, la quantité retenue est 11.

**Tokens utilises pour cette prediction:**
- **Input**: 1,034 tokens
- **Output**: 266 tokens
- **Total**: 1,300 tokens



</details>


<details>
<summary><strong>2. [PF0539] JF VOL AU VENT 2,5 KG</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

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
La dernière commande remonte au 07/10/2025, soit 28 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B (70% du cycle estimé atteint). L'historique montre une commande de 4 unités à la même période l'année précédente (mars/septembre) et une commande identique de 4 unités le mois dernier. En suivant la règle de la médiane des commandes récentes et la stabilité du volume constaté, une quantité de 4 unités est préconisée pour couvrir les besoins du prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 900 tokens
- **Output**: 148 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>3. [PF0609] YVALLI SAUCE TOMATE 2,5 KG</strong> - LLM: 6u vs Médiane: 6u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 2u
- **Erreur LLM**: 4u (200.0%)
- **Erreur Mediane**: 4u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle récent montre une commande environ tous les 22 jours (entre juillet et août). Depuis la dernière commande du 07/08/2025, 89 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que l'historique récent soit espacé, l'historique N-1 montre une activité en octobre/septembre, suggérant un besoin latent. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est nécessaire. La quantité retenue est de 6 unités, correspondant à la médiane et à la valeur constante des commandes les plus récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 162 tokens
- **Total**: 1,101 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-07 13:14:24: 10u
- 2025-09-17 14:39:39: 11u
- 2025-08-07 07:00:20: 20u
- 2025-07-16 08:06:36: 12u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 14:51:09: 12u
- 2024-09-20 12:54:45: 18u
- 2024-06-25 08:52:38: 16u
- 2024-05-07 14:38:59: 16u
- 2024-03-28 08:18:17: 20u
- 2024-01-18 13:18:47: 14u

**Quantite Mediane (fallback)**: 11u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>2. [PF0539] JF VOL AU VENT 2,5 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-07 13:14:24: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 12:54:45: 2u
- 2024-03-28 08:18:17: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>3. [PF0609] YVALLI SAUCE TOMATE 2,5 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 07:00:20: 6u
- 2025-07-16 08:06:36: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 14:51:09: 6u
- 2024-09-20 12:54:45: 2u
- 2024-01-18 13:18:47: 14u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 2u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:13.952Z*
