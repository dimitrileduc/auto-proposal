# Rapport Backtest - Client FRITERIE RENOMMEE

## Contexte

- **Client** : FRITERIE RENOMMEE (ID: 3688)
- **Commande réelle** : S40106
- **Date commande** : 2025-11-04 10:29:17
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 2,921 input + 523 output = 3,444 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 3 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 4.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 66.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -66.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0085] FILOU CURRY KETCHUP  10 KG | 2 | 6 | 4.0 | 66.7% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 2u vs Médiane: 4u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 6u
- **Erreur LLM**: 4u (66.7%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/09/2025, soit 60 jours. Bien que le cycle historique soit irrégulier, l'analyse de l'année précédente montre une activité sur la période fin d'année (décembre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est jugé réel par principe de précaution B2B face à l'absence de commande depuis deux mois. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande exceptionnelle de 10u (pic) et une commande de 2u. La médiane historique globale et la dernière commande convergent vers une consommation de base faible. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute sur une rotation faible), la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 204 tokens
- **Total**: 1,176 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-04 07:46:34: 2u
- 2025-06-11 16:07:24: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 07:35:38: 4u
- 2024-08-05 13:04:32: 4u
- 2024-05-03 07:49:01: 6u
- 2024-03-28 10:45:08: 4u
- 2023-12-12 12:07:13: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 6u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 30 | Predicted 30u but not ordered |
| [PF0097] FILOU MOUTARDE 5 KG | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:16:53.854Z*
