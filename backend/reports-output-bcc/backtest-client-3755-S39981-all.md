# Rapport Backtest - Client BVBA DRINK & FOOD

## Contexte

- **Client** : BVBA DRINK & FOOD (ID: 3755)
- **Commande réelle** : S39981
- **Date commande** : 2025-10-29 07:28:14
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 6
- **Tokens**: 6,283 input + 1,004 output = 7,287 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 6 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 1.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -1.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 80 | 80 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF0077] FILOU PROVENCALE 5 L | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 80u vs Médiane: 80u (Réel: 80u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 80u
- **Baseline calculee**: 80u
- **Mediane historique**: 80u
- **Reel commande**: 80u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 80u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande très régulier d'environ 15 à 18 jours (dernières commandes les 11/09, 29/09 et 14/10). Au 28/10, 14 jours se sont écoulés depuis la dernière commande, ce qui représente plus de 70% du cycle moyen. Un risque de rupture est donc identifié dans l'horizon des 30 jours (Replenishment Threshold Days). Concernant la quantité, l'historique récent est parfaitement stable avec une médiane de 80 unités sur les 8 dernières commandes. Bien que des pics à 160 unités aient été observés l'année dernière, la tendance actuelle est à la stabilité à 80 unités, quantité retenue pour ce réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 1,211 tokens
- **Output**: 192 tokens
- **Total**: 1,403 tokens



</details>


<details>
<summary><strong>2. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse du cycle de commande récent montre un intervalle moyen d'environ 26 jours entre les commandes (28, 22, 25, 29 jours). La dernière commande datant du 14 octobre (il y a 14 jours), le prochain besoin est estimé autour du 9 novembre, ce qui entre dans l'horizon des 30 jours du seuil de réapprovisionnement. En appliquant le principe de précaution B2B et la règle de la médiane sur l'historique récent (1, 3, 3, 1, 2), la quantité retenue est de 2 unités pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,124 tokens
- **Output**: 156 tokens
- **Total**: 1,280 tokens



</details>


<details>
<summary><strong>3. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 30 à 45 jours. La dernière commande enregistrée date du 25 août 2025, soit plus de 60 jours avant la date actuelle (28 octobre). Le seuil de réapprovisionnement de 30 jours est largement dépassé, indiquant un risque de rupture imminent ou un besoin non couvert. Bien que l'historique lointain montre des quantités de 2u ou 3u, les commandes les plus récentes (juillet et août 2025) se sont stabilisées à 1u. En suivant la règle de la médiane récente et le principe de prudence sur les faibles rotations, une quantité de 1u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,087 tokens
- **Output**: 169 tokens
- **Total**: 1,256 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 06:43:12: 80u
- 2025-09-29 15:25:16: 80u
- 2025-09-11 08:18:04: 80u
- 2025-08-25 08:11:04: 80u
- 2025-07-31 05:42:22: 80u
- 2025-07-23 08:42:42: 80u
- 2025-07-02 10:02:56: 80u
- 2025-06-13 12:26:05: 80u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-24 09:57:51: 80u
- 2024-09-24 07:11:41: 160u
- 2024-08-21 11:24:26: 80u
- 2024-08-13 06:35:30: 80u
- 2024-07-25 06:08:11: 80u
- 2024-06-12 13:04:35: 160u
- 2024-06-06 09:56:07: 80u
- 2024-05-27 08:24:25: 80u
- 2024-05-03 12:12:17: 80u
- 2024-04-22 11:43:15: 160u
- 2024-04-08 12:25:11: 80u
- 2024-03-20 08:07:07: 80u

**Quantite Mediane (fallback)**: 80u
**Quantite Reelle**: 80u

</details>


<details>
<summary><strong>2. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 06:43:12: 1u
- 2025-09-16 05:58:23: 3u
- 2025-08-25 08:11:04: 3u
- 2025-07-31 05:42:22: 1u
- 2025-07-02 10:02:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-24 09:57:51: 2u
- 2024-09-24 07:11:41: 2u
- 2024-08-21 11:24:26: 1u
- 2024-08-13 06:35:30: 2u
- 2024-06-25 09:29:04: 4u
- 2024-06-12 13:04:35: 4u
- 2024-05-27 08:24:25: 2u
- 2024-05-03 12:12:17: 1u
- 2024-04-25 08:06:34: 3u
- 2024-03-20 08:07:07: 1u
- 2023-12-12 09:14:02: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 08:11:04: 1u
- 2025-07-31 05:42:22: 1u
- 2025-07-02 10:02:56: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-24 09:57:51: 3u
- 2024-08-21 11:24:26: 1u
- 2024-08-13 06:35:30: 1u
- 2024-07-25 06:08:11: 2u
- 2024-06-12 13:04:35: 2u
- 2024-05-27 08:24:25: 2u
- 2024-04-25 08:06:34: 1u
- 2024-03-20 08:07:07: 1u
- 2024-02-05 07:49:45: 2u
- 2023-12-12 09:14:02: 2u
- 2023-12-07 06:46:14: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0088] FILOU VOL AU VENT 800 GR | 1 | Predicted 1u but not ordered |
| [PF3272] JF PEPPER MAYONNAISE 925ML | 1 | Predicted 1u but not ordered |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:57.837Z*
