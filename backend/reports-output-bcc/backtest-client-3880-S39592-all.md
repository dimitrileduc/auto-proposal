# Rapport Backtest - Client LA BOVIDA

## Contexte

- **Client** : LA BOVIDA (ID: 3880)
- **Commande réelle** : S39592
- **Date commande** : 2025-10-07 07:00:07
- **Date cutoff système** : 2025-10-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 2,995 input + 470 output = 3,465 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 3 produits prédits, 2 corrects |
| **Rappel** | 50.0% | 4 produits réels, 2 détectés |
| **F1-Score** | 57.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 15.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 41.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 37.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF0516] YVALLI PROVENCALE 2,5 KG BOC | 72 | 48 | 24.0 | 50.0% | partial | LLM |
| [PF0609] YVALLI SAUCE TOMATE 2,5 KG | 18 | 24 | 6.0 | 25.0% | partial | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - LLM: 72u vs Médiane: 72u (Réel: 48u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 72u
- **Baseline calculee**: 72u
- **Mediane historique**: 72u
- **Reel commande**: 48u
- **Erreur LLM**: 24u (50.0%)
- **Erreur Mediane**: 24u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 72u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande moyen d'environ 70 jours (juin à août 2025). Au 6 octobre, 45 jours se sont écoulés depuis la dernière commande, ce qui place le prochain besoin théorique dans l'horizon des 30 jours du seuil de réapprovisionnement (Replenishment Threshold Days). Par principe de précaution B2B, un risque de rupture est identifié. La quantité est fixée à 72 unités, correspondant à la médiane et à la constante observée sur les cinq dernières commandes (stabilité parfaite à 72u depuis avril 2024).

**Tokens utilises pour cette prediction:**
- **Input**: 999 tokens
- **Output**: 151 tokens
- **Total**: 1,150 tokens



</details>


<details>
<summary><strong>2. [PF0609] YVALLI SAUCE TOMATE 2,5 KG</strong> - LLM: 18u vs Médiane: 21u (Réel: 24u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 18u
- **Baseline calculee**: 18u
- **Mediane historique**: 21u
- **Reel commande**: 24u
- **Erreur LLM**: 6u (25.0%)
- **Erreur Mediane**: 3u (12.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 18u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 août 2025, soit 45 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais fréquent (environ tous les 1 à 2 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car nous avons dépassé le délai habituel de réapprovisionnement observé en 2024. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 18 unités, correspondant à la médiane des commandes historiques et à la quantité de la commande la plus récente, évitant ainsi toute surestimation liée aux pics ponctuels de 30 ou 36 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,016 tokens
- **Output**: 170 tokens
- **Total**: 1,186 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:22:11: 72u
- 2025-06-11 13:50:44: 72u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 07:14:10: 72u
- 2024-07-08 06:37:55: 72u
- 2024-04-08 09:23:39: 72u
- 2024-01-10 07:48:51: 120u
- 2023-12-13 10:47:18: 62u
- 2023-11-13 14:33:21: 24u

**Quantite Mediane (fallback)**: 72u
**Quantite Reelle**: 48u

</details>


<details>
<summary><strong>2. [PF0609] YVALLI SAUCE TOMATE 2,5 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 10:22:11: 18u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 07:14:10: 36u
- 2024-07-08 06:37:55: 30u
- 2024-04-08 09:23:39: 18u
- 2024-02-06 14:12:37: 18u
- 2024-02-06 14:12:37: 14u
- 2024-01-10 07:48:51: 30u
- 2023-12-13 10:47:18: 24u
- 2023-11-13 14:33:21: 8u

**Quantite Mediane (fallback)**: 18u
**Quantite Reelle**: 24u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0509] YVALLI GR BOUL TOMATE 2,5 KG | 24 | Predicted 24u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [PF0549] YVALLI SAUCE PIZZA 2,5 KG | 12 | Never ordered in previous analysis window (no history) |
| [PF0539] JF VOL AU VENT 2,5 KG | 6 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:12:31.514Z*
