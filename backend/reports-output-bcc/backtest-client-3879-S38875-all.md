# Rapport Backtest - Client CASA WESTFALIA

## Contexte

- **Client** : CASA WESTFALIA (ID: 3879)
- **Commande réelle** : S38875
- **Date commande** : 2025-08-29 12:09:39
- **Date cutoff système** : 2025-08-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 2,060 input + 352 output = 2,412 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 2 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 100.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 31.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 35.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 31.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF1049] FILOU/LD SAUCE CHEESY 5 L | 360 | 360 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF1122] FILOU/ LD SAUCE BBQ 3 KG | 480 | 280 | 200.0 | 71.4% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF1049] FILOU/LD SAUCE CHEESY 5 L</strong> - LLM: 360u vs Médiane: 300u (Réel: 360u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 360u
- **Baseline calculee**: 360u
- **Mediane historique**: 300u
- **Reel commande**: 360u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 60u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 360u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande moyen d'environ 60 à 70 jours. La dernière commande enregistrée remonte au 07/04/2025, soit plus de 140 jours sans réapprovisionnement, ce qui dépasse largement le cycle habituel et confirme un besoin immédiat (risque de rupture critique). En se basant sur l'historique N-1 à la même période (août/octobre 2023 et 2024), la quantité de 360 unités est la norme constante et la médiane des commandes récentes. Conformément au principe de précaution B2B et à la stabilité du volume historique, une commande de 360 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 174 tokens
- **Total**: 1,196 tokens



</details>


<details>
<summary><strong>2. [PF1122] FILOU/ LD SAUCE BBQ 3 KG</strong> - LLM: 480u vs Médiane: 420u (Réel: 280u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 480u
- **Baseline calculee**: 480u
- **Mediane historique**: 420u
- **Reel commande**: 280u
- **Erreur LLM**: 200u (71.4%)
- **Erreur Mediane**: 140u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 480u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un besoin critique à cette période de l'année (commandes importantes en août 2023 et 2024). La dernière commande enregistrée remonte à plus de 140 jours (avril 2025), ce qui dépasse largement les cycles habituels et confirme un risque de rupture imminent pour la période estivale. En application du principe de précaution B2B et face à l'absence de commandes récentes depuis avril, un réapprovisionnement est nécessaire. La quantité de 480 unités est retenue car elle correspond à la médiane des commandes significatives et à la quantité exacte commandée lors des trois dernières occurrences (avril 2025, août 2024, juin 2024).

**Tokens utilises pour cette prediction:**
- **Input**: 1,038 tokens
- **Output**: 178 tokens
- **Total**: 1,216 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF1049] FILOU/LD SAUCE CHEESY 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-07 07:12:45: 360u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-19 09:35:48: 360u
- 2024-06-07 08:12:40: 360u
- 2024-03-15 12:32:47: 360u
- 2024-02-08 12:07:35: 360u
- 2023-12-18 13:21:21: 240u
- 2023-11-07 10:14:57: 60u
- 2023-10-09 12:56:50: 360u
- 2023-08-30 08:01:15: 360u

**Quantite Mediane (fallback)**: 360u
**Quantite Reelle**: 360u

</details>


<details>
<summary><strong>2. [PF1122] FILOU/ LD SAUCE BBQ 3 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-07 07:12:45: 480u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 12:46:47: 480u
- 2024-07-19 09:35:48: 0u
- 2024-06-07 08:12:40: 480u
- 2024-03-15 12:32:47: 680u
- 2024-02-08 12:07:35: 480u
- 2023-12-18 13:21:21: 360u
- 2023-11-07 10:14:57: 120u
- 2023-10-09 12:56:50: 240u
- 2023-08-30 08:01:15: 320u

**Quantite Mediane (fallback)**: 480u
**Quantite Reelle**: 280u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:19:08.625Z*
