# Rapport Backtest - Client DLL PROXY TARGET STORE MARANSART

## Contexte

- **Client** : DLL PROXY TARGET STORE MARANSART (ID: 38875)
- **Commande réelle** : S39084
- **Date commande** : 2025-09-10 13:34:51
- **Date cutoff système** : 2025-09-09 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 15
- **Tokens**: 13,199 input + 2,123 output = 15,322 total


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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 100.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 100.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 100.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit 71 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et face à l'incertitude du cycle de rotation, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 2 unités. En l'absence d'autres données ou de saisonnalité (N-1 inexistant), la quantité de 2 unités est maintenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 173 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>2. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 30 juin 2025, soit 71 jours avant la date actuelle. En l'absence d'un historique complet permettant de définir un cycle précis, le principe de précaution B2B s'applique car le délai écoulé suggère un besoin imminent de réapprovisionnement pour éviter une rupture durant les 30 prochains jours. Conformément aux règles de gestion, la quantité retenue correspond à la médiane de la commande récente (2 unités), privilégiant la stabilité du stock pour ce type de rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 123 tokens
- **Total**: 998 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:49:38: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:49:38: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Predicted 2u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [DIS0004] Display JF bois | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:24:48.136Z*
