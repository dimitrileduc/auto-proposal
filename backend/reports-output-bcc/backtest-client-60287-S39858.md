# Rapport Backtest - Client DEPOT VRAC SILLY SPRL

## Contexte

- **Client** : DEPOT VRAC SILLY SPRL (ID: 60287)
- **Commande réelle** : S39858
- **Date commande** : 2025-10-22 10:58:25
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 15
- **Tokens**: 13,179 input + 2,212 output = 15,391 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 8 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 71.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 91.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 4 | 1 | 3.0 | 300.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse montre un cycle de commande irrégulier avec une dernière commande effectuée il y a 63 jours (19 août). Bien que la rotation soit faible, le délai écoulé dépasse largement la fréquence observée entre les deux premières commandes (42 jours). En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), un besoin est détecté pour couvrir l'horizon des 30 prochains jours. La quantité retenue est de 1 unité, correspondant à la valeur basse de l'historique récent, afin d'éviter un surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 139 tokens
- **Total**: 1,029 tokens



</details>


<details>
<summary><strong>2. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM: 1u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen observé est d'environ 42 jours. La dernière commande remonte au 19 août, soit 63 jours avant la date actuelle. Le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 1u et 3u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 168 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>3. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen observé est d'environ 62 jours. La dernière commande remonte au 19 août, soit 63 jours avant la date actuelle. Le seuil de 70% du cycle est largement dépassé et le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 2u et 4u. En application de la règle de précaution B2B et du choix de la valeur la plus basse en cas de doute sur une faible rotation, la médiane basse de 2u est retenue pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 170 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>4. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM: 4u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 3u (300.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/07/2025, soit plus de 100 jours. Bien que la rotation soit faible, l'absence de commande récente sur un produit de type boisson (canette) suggère un risque de rupture de stock ou un besoin de réapprovisionnement imminent pour maintenir une disponibilité minimale. En application du principe de précaution B2B (doute sur le cycle = prévoir), une commande est déclenchée. ÉTAPE 2 : Estimation quantité. L'historique récent présente une commande unique de 4 unités. En l'absence d'autres données ou de saisonnalité N-1, la médiane se base sur cette valeur de référence pour assurer le stock de base.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 175 tokens
- **Total**: 1,049 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 12:00:13: 3u
- 2025-07-08 09:40:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 12:00:13: 3u
- 2025-07-08 09:40:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 12:00:13: 2u
- 2025-06-18 07:06:03: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-08 09:40:39: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 1u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | Predicted 2u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | Predicted 2u but not ordered |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 2 | Predicted 2u but not ordered |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:41.440Z*
