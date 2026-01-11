# Rapport Backtest - Client Schüttgut e.K.

## Contexte

- **Client** : Schüttgut e.K. (ID: 33796)
- **Commande réelle** : S39827
- **Date commande** : 2025-10-21 06:15:14
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 9
- **Tokens**: 8,487 input + 1,424 output = 9,911 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 9 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 80.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.17 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 86.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 35.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 4 | 1 | 3.0 | 300.0% | partial | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0062] ​MF Tarti Betterave rouge | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 juillet 2025, soit plus de 90 jours. L'historique N-1 montre une commande le 8 octobre 2024, indiquant un besoin récurrent à cette période de l'année. Le cycle est irrégulier mais le délai depuis la dernière commande dépasse largement les seuils de précaution. Le risque de rupture est avéré. ÉTAPE 2 : Estimation quantité. L'historique complet (récent et N-1) présente des quantités de 1, 2 et 3 unités. La médiane de l'historique global est de 2 unités. Conformément à la règle de prudence B2B et à la médiane constatée, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 182 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>2. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 14 juillet 2025, soit plus de 90 jours. Bien que le cycle historique soit irrégulier, l'historique N-1 montre une commande à la même période (8 octobre 2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité est fixée à 4 unités, correspondant à la commande de l'année précédente à la même période, ce qui représente la médiane entre les volumes récents (5u) et historiques plus anciens (2-3u).

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 147 tokens
- **Total**: 1,101 tokens



</details>


<details>
<summary><strong>3. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 14 juillet 2025, soit plus de 90 jours. L'historique de l'année précédente montre une commande récurrente en octobre (08/10/2024). Bien que le cycle soit irrégulier, le délai écoulé depuis la dernière vente et la saisonnalité N-1 indiquent un risque de rupture imminent ou un besoin de réapprovisionnement selon le principe de précaution B2B. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes historiques (2u), en écartant le pic ponctuel de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 151 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>4. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 4u vs Médiane: 3u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 juillet 2025, soit plus de 90 jours sans activité, ce qui dépasse largement les cycles habituels observés l'année précédente. En application du principe de précaution B2B et face à cette irrégularité, un besoin de réapprovisionnement est détecté pour couvrir les 30 prochains jours. L'historique N-1 montre une commande de 4 unités à la même période (8 octobre 2024). La quantité retenue est de 4 unités, correspondant à la valeur haute de la médiane historique pour compenser l'absence prolongée de stock.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 143 tokens
- **Total**: 1,097 tokens



</details>


<details>
<summary><strong>5. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 14 juillet 2025, soit plus de 90 jours sans activité, ce qui dépasse largement le cycle habituel observé l'année précédente (environ 60-70 jours). Bien que la rotation soit faible, l'historique N-1 montre une commande récurrente de 3 unités en octobre (08/10/2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane et à la valeur fréquente observée lors des périodes similaires l'an dernier.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 160 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>6. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 14 juillet 2025, soit 98 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence de cycle établi, le principe de précaution B2B s'applique pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de données comparatives ou de tendances, la quantité est maintenue à 4 unités, correspondant au volume de la commande précédente (médiane sur historique unique).

**Tokens utilises pour cette prediction:**
- **Input**: 868 tokens
- **Output**: 152 tokens
- **Total**: 1,020 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:25:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:26:38: 2u
- 2024-07-03 12:36:27: 3u
- 2024-05-13 11:38:07: 2u
- 2024-03-25 07:45:55: 1u
- 2024-01-03 08:52:32: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:25:06: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:26:38: 4u
- 2024-07-03 12:36:27: 3u
- 2024-05-13 11:38:07: 3u
- 2024-03-25 07:45:55: 2u
- 2024-01-03 08:52:32: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:25:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:26:38: 2u
- 2024-07-03 12:36:27: 2u
- 2024-05-13 11:38:07: 3u
- 2024-03-25 07:45:55: 2u
- 2024-01-03 08:52:32: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:25:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:26:38: 4u
- 2024-07-03 12:36:27: 3u
- 2024-05-13 11:38:07: 3u
- 2024-03-25 07:45:55: 2u
- 2024-01-03 08:52:32: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:25:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:26:38: 3u
- 2024-07-03 12:36:27: 3u
- 2024-05-13 11:38:07: 1u
- 2024-03-25 07:45:55: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:25:06: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 3 | Predicted 3u but not ordered |
| [MF0034] MF Tarti Pomme Raifort 250g  | 3 | Predicted 3u but not ordered |
| [MF0032] MF Tarti Pois chiches 250 g | 3 | Predicted 3u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:21:16.207Z*
