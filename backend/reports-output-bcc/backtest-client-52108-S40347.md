# Rapport Backtest - Client Rolliver SRL

## Contexte

- **Client** : Rolliver SRL (ID: 52108)
- **Commande réelle** : S40347
- **Date commande** : 2025-11-13 13:19:32
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,455 input + 829 output = 5,284 total


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
| **MAE** | 4.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 100.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 100.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 100.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV131] LV Tartinade Potiron 190g | 8 | 4 | 4.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 8u vs Médiane: 7u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 7u
- **Reel commande**: 4u
- **Erreur LLM**: 4u (100.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 01/07/2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande systématique en période de fin d'année/début d'année (janvier). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est identifié pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent est trop mince (une seule commande de 5u), on se réfère donc aux données N-1 qui présentent une stabilité à 8u. La médiane historique globale se situe à 8u. On retient cette quantité pour assurer la disponibilité sans surstockage majeur.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 198 tokens
- **Total**: 1,099 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-01 09:11:49: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:24:50: 8u
- 2024-01-04 15:48:40: 8u

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 4u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV138] LV Tartinade Carotte gingembre  380g | 4 | Predicted 4u but not ordered |
| [LV188] LV Tartinade Aubergine  380g | 4 | Predicted 4u but not ordered |
| [LV187] LV Tartinade Mangue Curry 380g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:15:46.584Z*
