# Rapport Backtest - Client MDH FOODSERVICE

## Contexte

- **Client** : MDH FOODSERVICE (ID: 60488)
- **Commande réelle** : S40235
- **Date commande** : 2025-11-12 09:20:02
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 8
- **Tokens**: 7,388 input + 1,435 output = 8,823 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.0% | 8 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 40.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 12.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JOY03] JOY! Organic Apricot Jam 370g | 10 | 20 | 10.0 | 50.0% | partial | Non | Non | LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 15 | 30 | 15.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 10u vs Médiane: 10u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 20u
- **Erreur LLM**: 10u (50.0%)
- **Erreur Mediane**: 10u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 28 jours entre chaque réapprovisionnement. La dernière commande datant du 29 octobre (il y a 13 jours), le prochain besoin est estimé sous 15 jours, ce qui entre dans l'horizon de 30 jours du seuil de réapprovisionnement. Bien que la dernière commande ait été de 5u, l'historique récent montre une stabilité forte à 10u (médiane et mode). En application du principe de précaution B2B et de la règle de la médiane, une quantité de 10u est préconisée pour couvrir le cycle habituel sans risque de rupture.

**Tokens utilises pour cette prediction:**
- **Input**: 960 tokens
- **Output**: 159 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>2. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 15u vs Médiane: 18u (Réel: 30u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 15u
- **Baseline calculee**: 15u
- **Mediane historique**: 18u
- **Reel commande**: 30u
- **Erreur LLM**: 15u (50.0%)
- **Erreur Mediane**: 12u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 15u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 28 jours entre les réapprovisionnements. La dernière commande datant du 29 octobre (il y a 13 jours), le prochain besoin est estimé dans environ 15 jours, ce qui entre dans l'horizon de risque des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, une commande est nécessaire. Pour la quantité, l'historique récent présente des variations (5u, 20u, 20u, 10u, 10u, 30u). La médiane de ces commandes est de 15 unités. Conformément aux règles de gestion, nous retenons cette valeur médiane pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 961 tokens
- **Output**: 178 tokens
- **Total**: 1,139 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-29 14:49:41: 5u
- 2025-09-22 09:26:25: 10u
- 2025-09-01 08:56:10: 10u
- 2025-08-19 09:01:45: 10u
- 2025-07-14 07:06:04: 10u
- 2025-06-13 11:44:43: 12u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 20u

</details>


<details>
<summary><strong>2. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-29 14:49:41: 5u
- 2025-09-22 09:26:25: 20u
- 2025-09-01 08:56:10: 20u
- 2025-08-19 09:01:45: 10u
- 2025-07-14 07:06:04: 10u
- 2025-06-13 11:44:43: 30u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 15u
**Quantite Reelle**: 30u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 5 | Predicted 5u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | Predicted 3u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 10 | Predicted 10u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | Predicted 4u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | Predicted 3u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 10 | Predicted 10u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:27.776Z*
