# Rapport Backtest - Client 100% Liégeois

## Contexte

- **Client** : 100% Liégeois (ID: 81)
- **Commande réelle** : S39971
- **Date commande** : 2025-10-28 13:21:16
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 6
- **Tokens**: 5,361 input + 982 output = 6,343 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.7% | 6 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 28.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 25.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 62.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 62.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -62.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 15 | 40 | 25.0 | 62.5% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 15u vs Médiane: 12u (Réel: 40u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 15u
- **Baseline calculee**: 15u
- **Mediane historique**: 12u
- **Reel commande**: 40u
- **Erreur LLM**: 25u (62.5%)
- **Erreur Mediane**: 28u (70.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 15u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 05/08/2025, soit il y a 83 jours. L'intervalle précédent était de 50 jours. Le délai actuel dépasse largement le cycle moyen constaté, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement selon le principe de précaution B2B, surtout avec un seuil de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 15u et 16u. En appliquant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 15u.

**Tokens utilises pour cette prediction:**
- **Input**: 896 tokens
- **Output**: 174 tokens
- **Total**: 1,070 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 11:44:12: 15u
- 2025-06-16 08:50:12: 16u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 15u
**Quantite Reelle**: 40u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 7 | Predicted 7u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 4 | Predicted 4u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | Predicted 6u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | Predicted 4u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:36.495Z*
