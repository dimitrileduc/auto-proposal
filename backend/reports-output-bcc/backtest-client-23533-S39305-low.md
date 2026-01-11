# Rapport Backtest - Client Epicerie Le Colibri

## Contexte

- **Client** : Epicerie Le Colibri (ID: 23533)
- **Commande réelle** : S39305
- **Date commande** : 2025-09-24 06:17:45
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 42
- **Tokens**: 37,699 input + 6,244 output = 43,943 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 45.5% | 11 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 62.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 02/07/2025, soit 83 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B s'applique car le délai dépasse largement les seuils de rotation standards. Un risque de rupture est identifié à l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de rotation faible (1-2u), la quantité est fixée à 2 unités, correspondant à la médiane de l'historique récent, afin de reconstituer le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 142 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>2. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 02/07/2025, soit 83 jours sans activité. Bien que la rotation soit très faible, l'absence de cycle défini et le principe de précaution B2B imposent de prévoir une unité pour éviter une rupture de stock prolongée sur cette référence, le risque étant jugé présent à l'horizon de 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u (médiane de l'historique) pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 177 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>3. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à plus de 140 jours (05/05/2025), ce qui dépasse largement tout cycle de rotation standard pour un produit de type boisson. Bien que l'historique soit très faible (une seule commande), le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée si le produit est toujours au catalogue. En l'absence de données récurrentes, la quantité est fixée à 1 unité, correspondant à la médiane (et unique valeur) de l'historique récent, conformément à la règle de maintien des rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 140 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>4. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 05/05/2025, soit plus de 140 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande historique, le principe de précaution B2B s'applique ici : en cas de doute sur la rotation ou de cycle irrégulier, il convient de prévoir un réapprovisionnement pour éviter une rupture prolongée si le produit est toujours au catalogue. La quantité retenue est de 1 unité, correspondant à la médiane (et unique valeur) de l'historique récent, respectant la règle de ne pas augmenter les stocks sur les produits à très faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 144 tokens
- **Total**: 1,013 tokens



</details>


<details>
<summary><strong>5. [ORG01] ORGANICA crunchy fruit ananas 16g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 05/05/2025, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée un doute sur l'état du stock. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter tout surstockage tout en assurant une présence minimale en rayon.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 162 tokens
- **Total**: 1,031 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:46:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:46:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [ORG01] ORGANICA crunchy fruit ananas 16g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:46:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV138] LV Tartinade Carotte gingembre  380g | 2 | Predicted 2u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Predicted 1u but not ordered |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Predicted 1u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:13:19.582Z*
