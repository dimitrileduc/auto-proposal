# Rapport Backtest - Client CARREFOUR BELGIUM SA, Hyper Herstal

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Hyper Herstal (ID: 17271)
- **Commande réelle** : S39904
- **Date commande** : 2025-10-29 09:52:37
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 27
- **Tokens**: 24,228 input + 4,175 output = 28,403 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 2 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 100.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 100.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 100.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 4 | 2 | 2.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit plus de 140 jours. Bien que le cycle soit difficile à déterminer avec une seule commande, le principe de précaution B2B s'applique ici car le délai depuis la dernière commande dépasse largement tout cycle standard de rotation de stock. Le risque de rupture est considéré comme élevé par manque de visibilité. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple, on se base sur la seule donnée récente disponible (4 unités). La médiane et la valeur de référence sont donc de 4 unités pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 154 tokens
- **Total**: 1,029 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 06:38:35: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF006] JF MAYONNAISE OEUFS 280ML DTO | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:57.634Z*
