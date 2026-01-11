# Rapport Backtest - Client BIOFRESH BELGIUM NV-SA

## Contexte

- **Client** : BIOFRESH BELGIUM NV-SA (ID: 60207)
- **Commande réelle** : S40061
- **Date commande** : 2025-11-03 08:38:25
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 23
- **Tokens**: 20,651 input + 3,462 output = 24,113 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 4.8% | 21 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 9.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 66.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 122.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 122.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 122.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 120 | 54 | 66.0 | 122.2% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 120u vs Médiane: 120u (Réel: 54u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 120u
- **Baseline calculee**: 120u
- **Mediane historique**: 120u
- **Reel commande**: 54u
- **Erreur LLM**: 66u (122.2%)
- **Erreur Mediane**: 66u (122.2%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 120u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 21 jours. La dernière commande datant du 21 octobre (soit 12 jours avant la date actuelle), le risque de rupture est élevé dans l'horizon des 30 jours (seuil de réapprovisionnement). Bien que la dernière commande ait été de 54u, le volume récurrent et la médiane des commandes précédentes se situent à 120u. En application du principe de précaution B2B et pour maintenir le stock face à une rotation régulière, la quantité de 120u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 995 tokens
- **Output**: 146 tokens
- **Total**: 1,141 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 07:38:04: 54u
- 2025-10-08 13:49:43: 126u
- 2025-09-16 06:05:48: 120u
- 2025-08-26 08:04:32: 60u
- 2025-07-23 09:53:39: 120u
- 2025-07-09 06:47:03: 120u
- 2025-06-20 12:26:36: 120u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 120u
**Quantite Reelle**: 54u

</details>




---

## False Positives (20)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 20 | Predicted 20u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 15 | Predicted 15u but not ordered |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 14 | Predicted 14u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 14 | Predicted 14u but not ordered |
| [JOY03] JOY! Organic Apricot Jam 370g | 14 | Predicted 14u but not ordered |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 14 | Predicted 14u but not ordered |
| [JOY08] JOY! Organic Raspberry Jam 370g | 14 | Predicted 14u but not ordered |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 18 | Predicted 18u but not ordered |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 18 | Predicted 18u but not ordered |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 63 | Predicted 63u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 30 | Predicted 30u but not ordered |
| [JOY05] Organic Cherry Jam 370g | 14 | Predicted 14u but not ordered |
| [JOY07] JOY! Organic Fig Jam 370g | 14 | Predicted 14u but not ordered |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 18 | Predicted 18u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 30 | Predicted 30u but not ordered |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 9 | Predicted 9u but not ordered |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 18 | Predicted 18u but not ordered |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 28 | Predicted 28u but not ordered |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 18 | Predicted 18u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:49.843Z*
