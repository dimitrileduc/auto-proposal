# Rapport Backtest - Client COALLA LOGISTICA SL

## Contexte

- **Client** : COALLA LOGISTICA SL (ID: 12416)
- **Commande réelle** : S37999
- **Date commande** : 2025-07-10 11:02:26
- **Date cutoff système** : 2025-07-09 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 7,084 input + 1,217 output = 8,301 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 28.6% | 7 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 44.4% | Score equilibre global |

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
| [PF1795] LD MAYONNAI WASABI 250ML WECK | 30 | 30 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF1803] LD SAUCE TARTARE 250ML WECK | 50 | 50 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF1795] LD MAYONNAI WASABI 250ML WECK</strong> - LLM: 30u vs Médiane: 20u (Réel: 30u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 30u
- **Baseline calculee**: 30u
- **Mediane historique**: 20u
- **Reel commande**: 30u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 10u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 30u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre une fréquence mensuelle stable (intervalles de 30, 30 et 33 jours). La dernière commande datant du 24 juin (il y a 15 jours), le prochain besoin est estimé autour du 24 juillet, ce qui entre dans l'horizon du seuil de réapprovisionnement de 30 jours. Concernant la quantité, l'historique récent affiche une dominance de 30u (médiane des 4 dernières commandes). Conformément au principe de précaution B2B et à la stabilité du cycle actuel, une commande de 30u est préconisée pour couvrir le besoin imminent.

**Tokens utilises pour cette prediction:**
- **Input**: 1,088 tokens
- **Output**: 157 tokens
- **Total**: 1,245 tokens



</details>


<details>
<summary><strong>2. [PF1803] LD SAUCE TARTARE 250ML WECK</strong> - LLM: 50u vs Médiane: 50u (Réel: 50u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 50u
- **Baseline calculee**: 50u
- **Mediane historique**: 50u
- **Reel commande**: 50u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 50u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre un intervalle moyen d'environ 31 jours (2025-02-11 au 2025-06-24). La dernière commande date du 24 juin, soit il y a 15 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans les 15 prochains jours, ce qui justifie une commande immédiate par précaution. Concernant la quantité, l'historique récent présente des volumes de 20, 30, 50, 50 et 50 unités. La médiane de ces commandes récentes est de 50 unités. Ce volume est cohérent avec la consommation habituelle du produit, sans signe de baisse structurelle.

**Tokens utilises pour cette prediction:**
- **Input**: 1,087 tokens
- **Output**: 181 tokens
- **Total**: 1,268 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF1795] LD MAYONNAI WASABI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-24 14:14:40: 30u
- 2025-05-22 09:04:05: 20u
- 2025-04-22 14:33:44: 30u
- 2025-03-24 09:17:07: 30u
- 2025-02-11 12:14:37: 12u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-23 07:19:36: 35u
- 2024-03-15 10:34:10: 12u
- 2024-02-09 09:15:56: 24u
- 2023-12-28 15:21:45: 12u
- 2023-12-07 14:16:31: 20u
- 2023-10-17 06:51:52: 20u
- 2023-09-13 06:52:58: 12u
- 2023-08-01 13:04:53: 12u

**Quantite Mediane (fallback)**: 30u
**Quantite Reelle**: 30u

</details>


<details>
<summary><strong>2. [PF1803] LD SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-24 14:14:40: 30u
- 2025-05-22 09:04:05: 50u
- 2025-04-22 14:33:44: 50u
- 2025-03-24 09:17:07: 20u
- 2025-02-11 12:14:37: 50u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-23 07:19:36: 70u
- 2024-03-15 10:34:10: 66u
- 2024-01-30 10:33:50: 66u
- 2023-12-28 15:21:45: 33u
- 2023-12-07 14:16:31: 15u
- 2023-10-17 06:51:52: 30u
- 2023-09-13 06:52:58: 20u
- 2023-08-01 13:04:53: 17u

**Quantite Mediane (fallback)**: 50u
**Quantite Reelle**: 50u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 10 | Predicted 10u but not ordered |
| [PF1799] LD MAYONNAISE OEUFS 250ML WECK | 10 | Predicted 10u but not ordered |
| [PF1805] LD SAUCE COCKTAIL 250ML WECK | 6 | Predicted 6u but not ordered |
| [PF1809] LD SAUCE BEARNAISE 250ML WECK | 5 | Predicted 5u but not ordered |
| [PF3284] LD MOUTARDE DOUCE 250ML WECK | 5 | Predicted 5u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:09:56.051Z*
