# Rapport Backtest - Client SA INTERANS

## Contexte

- **Client** : SA INTERANS (ID: 56781)
- **Commande réelle** : S39597
- **Date commande** : 2025-10-13 07:41:43
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 46
- **Tokens**: 40,497 input + 6,597 output = 47,094 total


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
| [LD015] LD Onion Spread 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [LD015] LD Onion Spread 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 90 jours (14 juillet). Bien que la rotation soit très faible (1 unité), l'absence de commandes récentes sur une longue période et l'approche d'un nouveau cycle potentiel justifient une commande de précaution pour éviter une rupture de stock prolongée. Conformément aux règles B2B, en cas de doute sur un cycle irrégulier, le réapprovisionnement est préconisé. La quantité est fixée à 1 unité, correspondant à la médiane historique et à la règle de maintien pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 124 tokens
- **Total**: 994 tokens



</details>


<details>
<summary><strong>2. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique) pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 168 tokens
- **Total**: 1,042 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [LD015] LD Onion Spread 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:18:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:12:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF021] JF PICKLES 350 ML | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:16:52.369Z*
