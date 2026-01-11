# Rapport Backtest - Client KOCKARTZ Kobra SRL (Filiale Eupen)

## Contexte

- **Client** : KOCKARTZ Kobra SRL (Filiale Eupen) (ID: 24816)
- **Commande réelle** : S39747
- **Date commande** : 2025-10-16 12:22:50
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,515 input + 721 output = 5,236 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 20.0% | 5 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 33.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 200.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 200.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 200.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF022] JF MOUTARDE MIEL 250ML WECK | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 22 septembre 2025, soit 23 jours avant la date actuelle. L'historique de l'année précédente montre un cycle de réapprovisionnement rapproché entre fin septembre et début octobre (intervalle de 14 jours). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous avons dépassé l'intervalle historique constaté en N-1. En application du principe de précaution B2B et face à une rotation faible mais régulière, la quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes passées.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 145 tokens
- **Total**: 1,049 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 09:40:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-09 13:26:07: 1u
- 2024-09-25 09:07:54: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 5 | Predicted 5u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 5 | Predicted 5u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 5 | Predicted 5u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 4 | Predicted 4u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:18:21.297Z*
