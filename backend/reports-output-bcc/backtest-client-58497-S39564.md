# Rapport Backtest - Client MARKTKAUF MEHR

## Contexte

- **Client** : MARKTKAUF MEHR (ID: 58497)
- **Commande réelle** : S39564
- **Date commande** : 2025-10-06 07:18:15
- **Date cutoff système** : 2025-10-05 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 9
- **Tokens**: 7,753 input + 825 output = 8,578 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 2 produits prédits, 1 corrects |
| **Rappel** | 33.3% | 3 produits réels, 1 détectés |
| **F1-Score** | 40.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 6 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Il n'existe aucun historique de commande récent ou sur l'année précédente pour ce produit. En l'absence totale de données de cycle ou de rotation, le principe de précaution B2B s'applique : tout doute sur le besoin impose de prévoir une commande pour éviter une rupture potentielle sur un produit référencé. ÉTAPE 2 : ESTIMATION QUANTITÉ. Sans historique pour calculer une médiane, la règle des rotations très faibles est appliquée par défaut. Une quantité minimale de 1 unité est préconisée pour initialiser le stock ou répondre à un besoin ponctuel sans risquer de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 864 tokens
- **Output**: 151 tokens
- **Total**: 1,015 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 7 | Predicted 7u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | Product analyzed but LLM -> 0 - client ordered 3u |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (2 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM predit: 0u | Reel commande: 3u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour établir un cycle de consommation ou une quantité de référence. En l'absence totale d'historique de rotation, aucun besoin de réapprovisionnement ne peut être justifié selon le principe de précaution contre le surstockage.

</details>


<details>
<summary><strong>2. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) permettant d'établir un cycle de consommation ou une rotation. En l'absence totale d'historique de vente pour ce produit, aucun besoin de réapprovisionnement ne peut être justifié par précaution.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:22:38.425Z*
