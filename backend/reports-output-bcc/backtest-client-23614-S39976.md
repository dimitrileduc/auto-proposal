# Rapport Backtest - Client Alnatura Produktions- und Handels GmbH, Invoice Address

## Contexte

- **Client** : Alnatura Produktions- und Handels GmbH, Invoice Address (ID: 23614)
- **Commande réelle** : S39976
- **Date commande** : 2025-10-29 07:41:55
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 11
- **Tokens**: 11,403 input + 1,727 output = 13,130 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 9.1% | 11 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 16.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 300.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV104] LV Paprika Chili Aufstri 180g DE | 300 | 600 | 300.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [LV104] LV Paprika Chili Aufstri 180g DE</strong> - LLM: 300u vs Médiane: 300u (Réel: 600u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 300u
- **Baseline calculee**: 300u
- **Mediane historique**: 300u
- **Reel commande**: 600u
- **Erreur LLM**: 300u (50.0%)
- **Erreur Mediane**: 300u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 300u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 14 à 30 jours. La dernière commande enregistrée date du 03/09/2025, soit 55 jours avant la date actuelle (28/10/2025). Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent ou un besoin non couvert. En suivant la règle de la médiane des commandes récentes (toutes à 300u), la quantité recommandée est de 300 unités pour maintenir la rotation standard sans surestimer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 1,174 tokens
- **Output**: 155 tokens
- **Total**: 1,329 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [LV104] LV Paprika Chili Aufstri 180g DE</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 08:18:02: 300u
- 2025-08-20 06:08:56: 300u
- 2025-08-07 07:25:44: 300u
- 2025-07-08 07:19:22: 300u
- 2025-06-10 12:51:00: 300u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-15 11:47:58: 600u
- 2024-09-18 06:25:10: 300u
- 2024-08-27 11:52:00: 300u
- 2024-08-07 07:56:23: 300u
- 2024-07-03 07:36:16: 900u
- 2024-05-29 09:11:13: 300u
- 2024-05-08 06:38:08: 600u
- 2024-04-16 12:55:07: 300u
- 2024-03-26 12:32:16: 300u
- 2024-03-05 13:51:42: 600u
- 2024-01-16 12:42:37: 600u
- 2024-01-03 14:24:51: 600u

**Quantite Mediane (fallback)**: 300u
**Quantite Reelle**: 600u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV102] LV Karot. Ingwer Aufstrich 180g DE | 300 | Predicted 300u but not ordered |
| [LV105] LV Tomate Basil Aufstr 180g | 300 | Predicted 300u but not ordered |
| [LV106] LV Oliven Aufstrich 180g DE | 300 | Predicted 300u but not ordered |
| [LV343] LV Toskana Aufstrich 180g | 300 | Predicted 300u but not ordered |
| [LV347] LV Trüffel Aufstrich 180g DE | 150 | Predicted 150u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 300 | Predicted 300u but not ordered |
| [LV103] LV Mango Curry Aufstrich 180g | 300 | Predicted 300u but not ordered |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 300 | Predicted 300u but not ordered |
| [LV346] LV Kürbis Aufstrich 180g DE | 560 | Predicted 560u but not ordered |
| [LV341] LV Zwiebel Aufstrich 180g | 300 | Predicted 300u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:20:16.505Z*
