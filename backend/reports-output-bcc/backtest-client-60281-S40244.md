# Rapport Backtest - Client DAO - Hotel SELYS

## Contexte

- **Client** : DAO - Hotel SELYS (ID: 60281)
- **Commande réelle** : S40244
- **Date commande** : 2025-11-12 08:53:31
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 10
- **Tokens**: 8,706 input + 1,438 output = 10,144 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 44.4% | 9 produits prédits, 4 corrects |
| **Rappel** | 80.0% | 5 produits réels, 4 détectés |
| **F1-Score** | 57.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 54.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 58.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [DAF002] DAF Lime and Ginger with Jasmine flower 25cl</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 17 septembre, soit 55 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours (Replenishment Threshold Days), une commande est nécessaire. La quantité retenue correspond à la seule valeur historique disponible (4 unités), conformément à la règle de maintien des volumes pour les rotations régulières ou faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 128 tokens
- **Total**: 1,001 tokens



</details>


<details>
<summary><strong>2. [DAF001] DAF Elderflower with Pomegrenade juice 25cl</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 17 septembre 2025, soit 55 jours avant la date actuelle (11 novembre). Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle précis, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique multiple, on se base sur la dernière quantité commandée (3 unités) pour maintenir le stock sur ce produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 167 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>3. [DAF004] DAF Peach and Lemon with Honeybush flower 25cl</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 17 septembre 2025, soit 55 jours avant la date actuelle (11 novembre). Avec un seuil de réapprovisionnement de 30 jours, le délai depuis la dernière commande est important. En l'absence d'un historique de cycle établi (une seule commande récente), le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien des quantités pour les rotations faibles (1-2u) et l'utilisation de la médiane historique, la quantité recommandée est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 176 tokens
- **Total**: 1,050 tokens



</details>


<details>
<summary><strong>4. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 17 septembre 2025, soit 55 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la valeur unique et médiane de l'historique récent, afin de maintenir le stock sans surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 131 tokens
- **Total**: 1,004 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [DAF002] DAF Lime and Ginger with Jasmine flower 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:43:02: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [DAF001] DAF Elderflower with Pomegrenade juice 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:43:02: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [DAF004] DAF Peach and Lemon with Honeybush flower 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:43:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:43:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB05] REB chips bio - sel de mer 35g | 1 | Predicted 1u but not ordered |
| [REB06] REB chips bio - paprika fumé 35g | 2 | Predicted 2u but not ordered |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 2 | Predicted 2u but not ordered |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 2 | Predicted 2u but not ordered |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [AQUA01] AQUAPAX - natural mineral water 500ml | 10 | Product analyzed but LLM -> 0 - client ordered 10u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [AQUA01] AQUAPAX - natural mineral water 500ml</strong> - LLM predit: 0u | Reel commande: 10u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune commande n'est enregistrée dans l'historique récent ni sur la période N-1. En l'absence totale de données de consommation ou de cycle de rotation, il est impossible d'établir un besoin de réapprovisionnement. Le risque de rupture ne peut être évalué, donc aucune commande n'est préconisée.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:14:53.092Z*
