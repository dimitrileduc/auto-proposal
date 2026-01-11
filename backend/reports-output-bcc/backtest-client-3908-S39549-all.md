# Rapport Backtest - Client BOURDEAU CHARLES

## Contexte

- **Client** : BOURDEAU CHARLES (ID: 3908)
- **Commande réelle** : S39549
- **Date commande** : 2025-10-03 13:07:46
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 1,917 input + 307 output = 2,224 total


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
| **MAE** | 1.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0549] YVALLI SAUCE PIZZA 2,5 KG | 7 | 9 | 2.0 | 22.2% | partial | Non | Non | LLM |
| [PF0516] YVALLI PROVENCALE 2,5 KG BOC | 10 | 9 | 1.0 | 11.1% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF0549] YVALLI SAUCE PIZZA 2,5 KG</strong> - LLM: 7u vs Médiane: 7u (Réel: 9u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 7u
- **Baseline calculee**: 7u
- **Mediane historique**: 7u
- **Reel commande**: 9u
- **Erreur LLM**: 2u (22.2%)
- **Erreur Mediane**: 2u (22.2%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 7u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande espacé (environ tous les 2 à 3 mois). La dernière commande datant du 31 juillet 2025 (soit 63 jours), nous avons dépassé le délai habituel de réapprovisionnement constaté l'année précédente à la même période (août). Le risque de rupture est imminent dans l'horizon des 30 jours. En suivant la règle de la médiane des commandes historiques (7, 7, 8, 12, 7, 7), la quantité de 7 unités est retenue pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 957 tokens
- **Output**: 146 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>2. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - LLM: 10u vs Médiane: 10u (Réel: 9u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 9u
- **Erreur LLM**: 1u (11.1%)
- **Erreur Mediane**: 1u (11.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande espacé d'environ 2 à 3 mois. La dernière commande datant du 31 juillet 2025 (il y a 63 jours), nous atteignons le seuil critique de réapprovisionnement pour couvrir les besoins des 30 prochains jours (Replenishment Threshold Days). Bien que l'historique récent soit limité à une seule commande de 10u, les données N-1 confirment une stabilité autour de ce volume (médiane historique de 10u). En application du principe de précaution B2B et pour éviter une rupture imminente, une commande de 10 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 960 tokens
- **Output**: 161 tokens
- **Total**: 1,121 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0549] YVALLI SAUCE PIZZA 2,5 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-31 05:37:14: 7u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 13:40:00: 7u
- 2024-05-15 08:55:08: 8u
- 2024-03-15 12:34:37: 12u
- 2023-12-11 07:41:24: 7u
- 2023-10-05 06:41:35: 7u

**Quantite Mediane (fallback)**: 7u
**Quantite Reelle**: 9u

</details>


<details>
<summary><strong>2. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-31 05:37:14: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 13:40:00: 10u
- 2024-05-15 08:55:08: 8u
- 2024-03-15 12:34:37: 7u
- 2023-12-11 07:41:24: 10u
- 2023-10-05 06:41:35: 14u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 9u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:14:13.365Z*
