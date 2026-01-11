# Rapport Backtest - Client Edeka Thömmes

## Contexte

- **Client** : Edeka Thömmes (ID: 71909)
- **Commande réelle** : S36194
- **Date commande** : 2025-08-14 11:48:42
- **Date cutoff système** : 2025-08-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 12,216 input + 1,871 output = 14,087 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 14.3% | 14 produits prédits, 2 corrects |
| **Rappel** | 50.0% | 4 produits réels, 2 détectés |
| **F1-Score** | 22.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 100.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 100.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 100.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 3 | 1 | 2.0 | 200.0% | partial | LLM |
| [JF049] JF DISPLAY SAUCES Squeeze | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 14 juillet 2025, soit 30 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons 100% du cycle observé. En l'absence d'historique plus large pour établir une moyenne précise, le principe de précaution B2B s'applique pour éviter une rupture de stock. La quantité retenue est de 3 unités, correspondant à la médiane (et unique valeur) de l'historique récent, conformément à la règle de maintien des rotations régulières.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 132 tokens
- **Total**: 1,005 tokens



</details>


<details>
<summary><strong>2. [JF049] JF DISPLAY SAUCES Squeeze</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 28 avril 2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'absence de cycle défini et le principe de précaution B2B imposent de prévoir un réapprovisionnement pour éviter une rupture prolongée si le besoin se manifeste à nouveau. ÉTAPE 2 : En l'absence d'historique multiple, la quantité est maintenue à 1 unité, correspondant à la dernière commande enregistrée, conformément à la règle de maintien des rotations faibles (1-2u).

**Tokens utilises pour cette prediction:**
- **Input**: 867 tokens
- **Output**: 134 tokens
- **Total**: 1,001 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:07:12: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF049] JF DISPLAY SAUCES Squeeze</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-28 13:11:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (12)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [DIS0004] Display JF bois | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF048] JF DISPLAY SAUCES 250ML  | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:23:28.686Z*
