# Rapport Backtest - Client DEMAIN L'EPICERIE

## Contexte

- **Client** : DEMAIN L'EPICERIE (ID: 12315)
- **Commande réelle** : S39793
- **Date commande** : 2025-10-20 06:52:01
- **Date cutoff système** : 2025-10-19 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 23
- **Tokens**: 21,097 input + 3,853 output = 24,950 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 26.3% | 19 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 41.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 40.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -23.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV145] LV Sauce Tartare 200 ml  | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 6 | 3.0 | 50.0% | partial | Non | Non | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [MF0047] MF Mayonnaise 250ml | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [LV145] LV Sauce Tartare 200 ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande d'environ 60 jours (juin à août). Depuis la dernière commande du 7 août 2025, 73 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit très faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité est fixée à 1 unité, correspondant à la médiane stricte des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 128 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 6u
- **Erreur LLM**: 3u (50.0%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 07/08/2025, soit plus de 70 jours. L'historique de l'année précédente montre une rotation régulière avec des commandes en septembre et octobre (cycle moyen d'environ 60 jours). Le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent (3u) et passé (médiane de 4-5u), la quantité de 3u est retenue pour éviter le surstockage tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 987 tokens
- **Output**: 152 tokens
- **Total**: 1,139 tokens



</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/06/2025, soit plus de 130 jours. L'historique N-1 montre une activité régulière en octobre (14/10/2024) et novembre (21/11/2023). Le cycle est irrégulier mais la période actuelle correspond historiquement à un besoin. Par principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité quasi systématique à 2 unités. La médiane des commandes est de 2. Conformément à la règle sur les rotations faibles, on maintient cette quantité habituelle.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 187 tokens
- **Total**: 1,158 tokens



</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/06/2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles historiques observés en N-1 (souvent espacés de 2 à 4 mois). Un besoin est donc probable pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique montre des commandes de 1u ou 2u. La médiane des commandes récentes et passées se situe à 1.5u. En suivant la règle de privilégier la quantité la plus basse en cas de doute sur une faible rotation, mais en notant que la dernière commande était de 2u, on maintient un stock de 2u pour couvrir la période à venir.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 207 tokens
- **Total**: 1,160 tokens



</details>


<details>
<summary><strong>5. [MF0047] MF Mayonnaise 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
Le produit présente une rotation très faible et irrégulière avec une dernière commande enregistrée il y a plus de 130 jours (06/06/2025). Bien que le cycle soit difficile à déterminer, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les seuils habituels. L'historique (N et N-1) montre une stabilité sur une quantité de 2 unités. En suivant la règle de la médiane des commandes récentes et le maintien des quantités pour les faibles rotations, une commande de 2 unités est préconisée pour couvrir le risque de rupture sur l'horizon des 30 prochains jours.

**Tokens utilises pour cette prediction:**
- **Input**: 916 tokens
- **Output**: 150 tokens
- **Total**: 1,066 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [LV145] LV Sauce Tartare 200 ml </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 06:18:45: 1u
- 2025-06-06 13:03:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 06:18:45: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-14 13:30:12: 4u
- 2024-09-09 13:21:14: 3u
- 2024-07-05 11:31:40: 5u
- 2024-04-29 11:45:56: 4u
- 2024-03-22 14:10:57: 6u
- 2024-01-09 14:00:53: 5u
- 2023-11-21 07:19:11: 5u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-06 13:03:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-14 13:30:12: 2u
- 2024-09-09 13:21:14: 2u
- 2024-07-05 11:31:40: 1u
- 2024-04-29 11:45:56: 2u
- 2024-01-09 14:00:53: 2u
- 2023-11-21 07:19:11: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-06 13:03:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:21:14: 1u
- 2024-07-05 11:31:40: 1u
- 2024-03-22 14:10:57: 1u
- 2024-01-09 14:00:53: 2u
- 2023-11-21 07:19:11: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [MF0047] MF Mayonnaise 250ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-06 13:03:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 11:31:40: 2u
- 2024-03-22 14:10:57: 2u
- 2024-01-09 14:00:53: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (14)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [CB005] CB Apple juice 1l | 2 | Predicted 2u but not ordered |
| [MF0027] MF Tarti Aubergine 250g  | 2 | Predicted 2u but not ordered |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Predicted 1u but not ordered |
| [LV158] LV Moutarde 200 ml | 1 | Predicted 1u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 2 | Predicted 2u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Predicted 1u but not ordered |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Predicted 1u but not ordered |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Predicted 2u but not ordered |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | Predicted 2u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:14:12.777Z*
