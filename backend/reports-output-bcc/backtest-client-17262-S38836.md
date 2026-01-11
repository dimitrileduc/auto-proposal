# Rapport Backtest - Client CARREFOUR BELGIUM SA, Hyper Oostakker

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Hyper Oostakker (ID: 17262)
- **Commande réelle** : S38836
- **Date commande** : 2025-09-01 06:41:33
- **Date cutoff système** : 2025-08-31 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 9
- **Tokens**: 7,916 input + 1,422 output = 9,338 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.0% | 4 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 40.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | 4 | 1.0 | 25.0% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/04/2025, soit environ 149 jours. Bien que l'historique soit irrégulier et à faible rotation, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement tout cycle raisonnable, suggérant un besoin de réapprovisionnement imminent pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. La commande la plus récente était de 3 unités. En l'absence d'autres données récentes, la médiane se base sur ce dernier volume. Conformément aux règles de rotation faible, on maintient ce volume historique récent sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 162 tokens
- **Total**: 1,049 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-04 06:37:42: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 06:41:26: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 3 | Predicted 3u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:24:36.384Z*
