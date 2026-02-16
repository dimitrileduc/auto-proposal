# Rapport Backtest - Client C.F. GRELL NACHF. NATURKOST

## Contexte

- **Client** : C.F. GRELL NACHF. NATURKOST (ID: 3863)
- **Commande réelle** : S39980
- **Date commande** : 2025-10-29 07:42:30
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 4,628 input + 673 output = 5,301 total


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
| **MAE** | 32.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 66.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 62.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -66.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 16 | 64 | 48.0 | 75.0% | partial | LLM |
| [MF0062] ​MF Tarti Betterave rouge | 16 | 32 | 16.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 16u vs Médiane: 32u (Réel: 64u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 32u
- **Reel commande**: 64u
- **Erreur LLM**: 48u (75.0%)
- **Erreur Mediane**: 32u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre une fréquence de réapprovisionnement tous les 5 à 14 jours. Depuis la dernière commande du 13 octobre (soit 15 jours écoulés), nous avons dépassé le cycle moyen, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Bien que l'historique montre des volumes plus importants par le passé, les deux dernières commandes se sont stabilisées à 16 unités. En suivant la règle de la médiane récente et en privilégiant la prudence face à une tendance à la baisse des volumes, une quantité de 16 unités est préconisée pour couvrir le besoin actuel sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,217 tokens
- **Output**: 160 tokens
- **Total**: 1,377 tokens



</details>


<details>
<summary><strong>2. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 16u vs Médiane: 24u (Réel: 32u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 24u
- **Reel commande**: 32u
- **Erreur LLM**: 16u (50.0%)
- **Erreur Mediane**: 8u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier (environ tous les 5 à 14 jours en octobre). Depuis la dernière commande du 13 octobre, 15 jours se sont écoulés, ce qui représente plus de 70% du cycle moyen observé récemment, signalant un risque de rupture imminent dans l'horizon des 30 jours. Concernant la quantité, bien que des pics à 32u et 64u aient été enregistrés cet été, les trois dernières commandes sont stabilisées à 16u. En appliquant la règle de la médiane sur la période récente et le principe de prudence (choisir la valeur la plus basse en cas de doute), une commande de 16 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 977 tokens
- **Output**: 172 tokens
- **Total**: 1,149 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 14:04:36: 16u
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 32u
- 2025-09-10 06:05:27: 48u
- 2025-07-14 07:23:44: 64u
- 2025-07-02 08:07:18: 32u
- 2025-06-25 09:09:30: 32u
- 2025-06-18 09:47:16: 48u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-14 06:48:32: 48u
- 2024-10-04 09:15:32: 32u
- 2024-09-23 07:03:10: 48u
- 2024-08-23 06:50:23: 48u
- 2024-08-07 07:50:22: 16u
- 2024-07-19 07:16:19: 64u
- 2024-07-01 04:50:52: 32u
- 2024-06-14 08:44:06: 32u
- 2024-05-24 09:36:53: 64u
- 2024-05-13 07:07:14: 48u
- 2024-04-19 09:15:16: 64u
- 2024-03-22 09:26:53: 32u

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 64u

</details>


<details>
<summary><strong>2. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 14:04:36: 16u
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 16u
- 2025-07-14 07:23:44: 64u
- 2025-07-02 08:07:18: 32u
- 2025-06-25 09:09:30: 16u
- 2025-06-18 09:47:16: 32u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 32u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 48 | Predicted 48u but not ordered |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | Predicted 16u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:57.218Z*
