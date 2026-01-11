# Rapport Backtest - Client BOYAUDERIE  PICARDE

## Contexte

- **Client** : BOYAUDERIE  PICARDE (ID: 3887)
- **Commande réelle** : S39967
- **Date commande** : 2025-10-28 11:18:05
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 2,781 input + 444 output = 3,225 total


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
| **MAE** | 10.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0516] YVALLI PROVENCALE 2,5 KG BOC | 10 | 20 | 10.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - LLM: 10u vs Médiane: 11u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 11u
- **Reel commande**: 20u
- **Erreur LLM**: 10u (50.0%)
- **Erreur Mediane**: 9u (45.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 03/09/2025, soit 54 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais espacé (environ tous les 2 à 4 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent si l'on suit la saisonnalité de l'année précédente (commandes en fin d'année). En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 10 unités, correspondant à la médiane historique et à la valeur la plus basse constatée hors pic exceptionnel, afin d'éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 946 tokens
- **Output**: 161 tokens
- **Total**: 1,107 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 09:41:02: 12u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 08:40:52: 10u
- 2024-03-26 10:27:42: 10u
- 2024-01-02 06:51:47: 10u
- 2023-11-23 14:54:46: 15u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 20u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0509] YVALLI GR BOUL TOMATE 2,5 KG | 8 | Predicted 8u but not ordered |
| [PF0549] YVALLI SAUCE PIZZA 2,5 KG | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:17:31.430Z*
