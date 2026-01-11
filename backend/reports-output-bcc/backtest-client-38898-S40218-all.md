# Rapport Backtest - Client EDEKA HOLLAND ROETGEN

## Contexte

- **Client** : EDEKA HOLLAND ROETGEN (ID: 38898)
- **Commande réelle** : S40218
- **Date commande** : 2025-11-13 12:58:37
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 11
- **Tokens**: 10,399 input + 1,623 output = 12,022 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 18.2% | 11 produits prédits, 2 corrects |
| **Rappel** | 25.0% | 8 produits réels, 2 détectés |
| **F1-Score** | 21.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 5.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 84.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 84.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -84.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 7 | 6.0 | 85.7% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 6 | 5.0 | 83.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 3u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 7u
- **Erreur LLM**: 6u (85.7%)
- **Erreur Mediane**: 4u (57.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 19 août 2025, soit 85 jours sans activité. Bien que le cycle récent soit irrégulier, l'historique de l'année précédente montre des commandes en octobre et novembre (cycle de fin d'année). En application du principe de précaution B2B face à un cycle incertain et pour couvrir le risque de rupture sur les 30 prochains jours, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane basse des commandes récentes et à la tendance de volume observée sur la même période l'année dernière (1u en octobre).

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 144 tokens
- **Total**: 1,115 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 3u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 6u
- **Erreur LLM**: 5u (83.3%)
- **Erreur Mediane**: 3u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre une rotation lente et irrégulière. La dernière commande remonte au 15 juillet 2025, soit environ 120 jours sans activité. Bien que le cycle soit difficile à définir précisément, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu à la mi-octobre l'année précédente (N-1). Conformément aux règles de gestion des rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant au volume de la commande la plus récente, afin de limiter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 160 tokens
- **Total**: 1,099 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 07:00:54: 2u
- 2025-07-15 12:30:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:49:09: 1u
- 2024-08-07 13:06:00: 1u
- 2024-07-04 08:35:37: 5u
- 2024-04-23 12:45:32: 4u
- 2024-03-14 09:10:59: 4u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-15 12:30:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 06:49:09: 2u
- 2024-07-04 08:35:37: 3u
- 2024-04-23 12:45:32: 4u
- 2024-03-14 09:10:59: 5u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 6u

</details>




---

## False Positives (9)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (6)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LD013] LD Tuscan Organic Spread 180 g | 8 | Never ordered in previous analysis window (no history) |
| [LD014] LD Organic Avocado Spread 180 g | 4 | Never ordered in previous analysis window (no history) |
| [LD015] LD Onion Spread 180g | 4 | Never ordered in previous analysis window (no history) |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 4 | Never ordered in previous analysis window (no history) |
| [LD011] LD Organic Kids Spread 180 g | 4 | Never ordered in previous analysis window (no history) |
| [JF009] JF SAUCE TARTARE 250ML WECK | 7 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:21:03.107Z*
