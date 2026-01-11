# Rapport Backtest - Client LA MOUTARDERIE 2

## Contexte

- **Client** : LA MOUTARDERIE 2 (ID: 3658)
- **Commande réelle** : S39844
- **Date commande** : 2025-10-21 10:19:34
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 3,900 input + 630 output = 4,530 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 21.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 30.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 10 | 7 | 3.0 | 42.9% | partial | Non | Non | LLM |
| [PF0089] FILOU VOL AU VENT 400 GR | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM: 10u vs Médiane: 10u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 7u
- **Erreur LLM**: 3u (42.9%)
- **Erreur Mediane**: 3u (42.9%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 60 à 70 jours. La dernière commande datant du 4 septembre 2025 (soit 46 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours de seuil de réapprovisionnement (total de 76 jours écoulés). Historiquement, le client commande très régulièrement ce produit en octobre (cf. 09/10/2024). La quantité est fixée à 10 unités, ce qui correspond à la médiane stricte et constante des commandes récentes et historiques, en excluant le pic ponctuel de 15u et la valeur isolée de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,108 tokens
- **Output**: 168 tokens
- **Total**: 1,276 tokens



</details>


<details>
<summary><strong>2. [PF0089] FILOU VOL AU VENT 400 GR</strong> - LLM: 3u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 02/07/2025, soit plus de 100 jours sans activité pour un produit qui présentait une rotation plus régulière l'année précédente (tous les 1 à 4 mois). En application du principe de précaution B2B, l'absence de commande récente sur une période aussi longue constitue un risque de rupture ou un besoin imminent. La quantité retenue est de 3 unités, correspondant à la médiane des commandes historiques (2, 3, 4, 4, 5) et à la dernière quantité commandée, afin de couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 143 tokens
- **Total**: 1,080 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-04 12:55:36: 10u
- 2025-07-02 09:50:27: 10u
- 2025-05-20 13:01:42: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-09 13:24:35: 10u
- 2024-08-08 11:07:13: 15u
- 2024-07-09 09:58:34: 10u
- 2024-06-11 12:21:52: 10u
- 2024-05-15 07:37:18: 10u
- 2024-05-07 11:04:23: 1u
- 2024-04-09 10:19:20: 10u
- 2024-02-22 12:31:44: 10u
- 2024-01-18 13:54:22: 10u
- 2023-12-07 11:01:34: 10u
- 2023-11-03 12:36:13: 10u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>2. [PF0089] FILOU VOL AU VENT 400 GR</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 09:50:27: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-15 07:37:18: 2u
- 2024-04-09 10:19:20: 4u
- 2023-12-07 11:01:34: 5u
- 2023-11-03 12:36:13: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 3 | Predicted 3u but not ordered |
| [PF0097] FILOU MOUTARDE 5 KG | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:46.676Z*
