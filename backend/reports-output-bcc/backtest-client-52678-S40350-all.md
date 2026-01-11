# Rapport Backtest - Client VivArdent SRL

## Contexte

- **Client** : VivArdent SRL (ID: 52678)
- **Commande réelle** : S40350
- **Date commande** : 2025-11-13 13:31:32
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 21
- **Tokens**: 19,201 input + 3,595 output = 22,796 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 23.8% | 21 produits prédits, 5 corrects |
| **Rappel** | 55.6% | 9 produits réels, 5 détectés |
| **F1-Score** | 33.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.80 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 70.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 70.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -70.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV161] LV Tartinade Mangue curry 190g | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 4 | 2.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 octobre 2025, soit il y a 30 jours. Le cycle moyen récent est d'environ 60-70 jours. Bien que nous ne soyons qu'à 50% du cycle théorique, le seuil de réapprovisionnement est de 30 jours. En application du principe de précaution B2B (risque de rupture à l'horizon du seuil), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite à 1 unité par commande (médiane = 1). Bien que les volumes de l'année précédente fussent plus élevés (2-3u), la tendance actuelle est à la baisse. On maintient donc la quantité de 1 unité conformément à la règle de rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 197 tokens
- **Total**: 1,152 tokens



</details>


<details>
<summary><strong>2. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 13 octobre, soit il y a 30 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou le cycle de commande est atteint. En l'absence d'historique long, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1 unité sans augmenter sans raison.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 131 tokens
- **Total**: 1,002 tokens



</details>


<details>
<summary><strong>3. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 13 octobre 2025, soit il y a 30 jours. Le cycle de commande historique est irrégulier et à très faible rotation (1-2 unités). Étant donné que nous atteignons le seuil de réapprovisionnement de 30 jours et conformément au principe de précaution B2B pour éviter une rupture sur un produit à cycle incertain, un besoin est détecté. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la dernière commande enregistrée, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 135 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le cycle de commande observé est d'environ 50 jours. La dernière commande remonte au 05/08/2025, soit plus de 90 jours. Le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Par principe de précaution B2B et pour éviter une rupture prolongée, un besoin est détecté. ÉTAPE 2 : L'historique récent montre une régularité stricte de 1 unité par commande. La médiane est de 1. Conformément à la règle de maintien des faibles rotations, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 152 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>5. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
La dernière commande remonte à 149 jours (juin 2025). Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et face à l'absence d'historique N-1, une commande est préconisée. La quantité retenue est de 2 unités, correspondant à la médiane (et valeur unique) de l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 135 tokens
- **Total**: 1,007 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:44:22: 1u
- 2025-08-05 09:18:36: 1u
- 2025-06-16 08:48:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 06:30:01: 2u
- 2024-06-05 12:40:46: 2u
- 2024-04-11 10:00:55: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:44:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:44:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-11 08:45:13: 1u
- 2024-04-11 10:00:55: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 09:18:36: 1u
- 2025-06-16 08:48:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 08:48:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>




---

## False Positives (16)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Predicted 1u but not ordered |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Predicted 1u but not ordered |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Predicted 1u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Predicted 1u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV214] LV Biscuits apéro tomate basilic 100g bio  | 1 | Predicted 1u but not ordered |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 1 | Predicted 1u but not ordered |
| [LV216] LV Biscuits apéro Fromage & Oignon 100g bio | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Predicted 1u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Predicted 1u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Predicted 1u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Predicted 2u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [DIS0011] Display Foodprint Karton LV | 1 | Never ordered in previous analysis window (no history) |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 4 | Never ordered in previous analysis window (no history) |
| [LV132] LV Tartinade Houmous type 190g | 0 | Never ordered in previous analysis window (no history) |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 0 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:10:24.408Z*
