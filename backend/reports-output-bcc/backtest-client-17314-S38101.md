# Rapport Backtest - Client CARREFOUR BELGIUM SA, CD Carrefour Cargovil

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CD Carrefour Cargovil (ID: 17314)
- **Commande réelle** : S38101
- **Date commande** : 2025-07-16 12:37:03
- **Date cutoff système** : 2025-07-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 6
- **Tokens**: 5,618 input + 1,047 output = 6,665 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.0% | 5 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 57.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR | 192 | 192 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8 | 108 | 108 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR</strong> - LLM: 192u vs Médiane: 288u (Réel: 192u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 192u
- **Baseline calculee**: 192u
- **Mediane historique**: 288u
- **Reel commande**: 192u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 96u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 192u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle récent montre un intervalle de 65 jours entre les deux dernières commandes. Au 15 juillet 2025, 26 jours se sont écoulés depuis la dernière commande (19 juin). Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 56 jours d'ancienneté à l'horizon du seuil, soit plus de 85% du cycle moyen constaté. Le risque de rupture est donc imminent selon la règle des 70%. Pour la quantité, bien que l'historique montre des pics à 288u, la commande la plus récente est de 192u. En application du principe de prudence B2B et de l'utilisation de la valeur la plus basse en cas de doute sur la tendance, la quantité de 192u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 929 tokens
- **Output**: 195 tokens
- **Total**: 1,124 tokens



</details>


<details>
<summary><strong>2. [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8</strong> - LLM: 108u vs Médiane: 108u (Réel: 108u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 108u
- **Baseline calculee**: 108u
- **Mediane historique**: 108u
- **Reel commande**: 108u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 108u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 19 juin, soit il y a 26 jours. Bien que le cycle historique soit irrégulier (environ 60 jours entre les deux dernières commandes), le seuil de réapprovisionnement de 30 jours est presque atteint. En application du principe de précaution B2B, un risque de rupture est identifié pour l'horizon des 30 prochains jours. La quantité retenue est de 108 unités, correspondant à la médiane exacte des commandes récentes et à la quantité la plus fréquente observée sur les deux dernières années, écartant les pics exceptionnels de 216 unités constatés début 2024.

**Tokens utilises pour cette prediction:**
- **Input**: 987 tokens
- **Output**: 152 tokens
- **Total**: 1,139 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 06:40:50: 192u
- 2025-04-15 06:48:18: 288u

**Commandes N-1 (meme periode annee derniere):**
- 2023-12-12 09:07:26: 288u
- 2023-11-24 10:51:23: 288u

**Quantite Mediane (fallback)**: 192u
**Quantite Reelle**: 192u

</details>


<details>
<summary><strong>2. [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 06:40:50: 108u
- 2025-04-15 06:48:18: 108u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 08:58:03: 108u
- 2024-02-14 07:40:46: 216u
- 2024-01-31 07:24:12: 216u
- 2023-12-12 09:07:26: 108u
- 2023-11-24 10:51:23: 108u

**Quantite Mediane (fallback)**: 108u
**Quantite Reelle**: 108u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF01012] CARREFOUR VOL AU VENT 400 GR | 96 | Predicted 96u but not ordered |
| [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8 | 108 | Predicted 108u but not ordered |
| [PF3249] CARRE BOULETTES TOMATE 800 GR PAR 8 | 192 | Predicted 192u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:13:04.196Z*
