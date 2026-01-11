# Rapport Backtest - Client SRL Grégoire-Knoden

## Contexte

- **Client** : SRL Grégoire-Knoden (ID: 71871)
- **Commande réelle** : S38540
- **Date commande** : 2025-09-09 06:51:29
- **Date cutoff système** : 2025-09-08 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 15
- **Tokens**: 13,108 input + 2,223 output = 15,331 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 15 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 80.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.70 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 46.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 30.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV345] LV Spread KIDS 200ml Organic | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV214] LV Biscuits apéro tomate basilic 100g bio  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV216] LV Biscuits apéro Fromage & Oignon 100g bio | 1 | 0 | 1.0 | 0.0% | partial | Non | Non | LLM |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte à 96 jours (04/06/2025). Bien que la rotation soit très faible (1 unité), l'absence de commande récente et le dépassement d'un cycle trimestriel standard créent un doute sur l'état du stock. En application du principe de précaution B2B (Étape 1), un besoin est détecté pour éviter une rupture prolongée. La quantité est fixée à 1 unité, correspondant à la médiane historique et à la règle de maintien pour les rotations faibles (Étape 2).

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 129 tokens
- **Total**: 1,001 tokens



</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 04/06/2025, soit plus de 90 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et conformément à la règle sur les faibles rotations, une commande de 1 unité est préconisée pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 111 tokens
- **Total**: 984 tokens



</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 04/06/2025, soit plus de 90 jours. Bien que la rotation soit très faible (1 unité), l'absence de commande récente et le dépassement du cycle habituel pour ce type de produit créent un doute sur l'état du stock. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité est fixée à 1 unité, correspondant à la médiane historique et à la règle de maintien pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 132 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 04/06/2025, soit 96 jours sans activité. Bien que la rotation soit très faible, l'absence de cycle défini et le principe de précaution B2B imposent de prévoir un réapprovisionnement pour éviter une rupture prolongée si un besoin survient dans les 30 prochains jours. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique disponible) pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 158 tokens
- **Total**: 1,029 tokens



</details>


<details>
<summary><strong>5. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le produit présente une rotation très faible avec une seule commande enregistrée il y a 96 jours (04/06/2025). Bien que le cycle soit difficile à déterminer avec un seul point de donnée, le principe de précaution B2B s'applique car le délai depuis la dernière commande est important. Un risque de rupture est possible dans l'horizon des 30 jours. ÉTAPE 2 : En suivant la règle des rotations très faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane de l'historique récent, afin d'éviter un surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 156 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>6. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 04/06/2025, soit 96 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle trimestriel standard. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 165 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>7. [LV214] LV Biscuits apéro tomate basilic 100g bio </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/06/2025, soit plus de 90 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans augmenter sans raison.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 153 tokens
- **Total**: 1,028 tokens



</details>


<details>
<summary><strong>8. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/06/2025, soit 96 jours sans activité. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter une rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément aux règles sur les rotations très faibles (1-2u) et à l'absence d'historique N-1, la médiane de 1 unité est retenue pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 171 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>9. [LV216] LV Biscuits apéro Fromage & Oignon 100g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 0u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 0u
- **Erreur LLM**: 1u (Infinity%)
- **Erreur Mediane**: 1u (Infinity%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 04/06/2025, soit plus de 90 jours sans activité. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter une rupture prolongée) et conformément à la règle sur les rotations faibles (1-2u), une commande de 1 unité est préconisée pour reconstituer le stock minimal.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 121 tokens
- **Total**: 997 tokens



</details>


<details>
<summary><strong>10. [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 04/06/2025, soit 96 jours. Bien que la rotation soit très faible (1u), le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit de ce type. En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles, la quantité est maintenue à 1u pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 156 tokens
- **Total**: 1,032 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 07:54:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 07:54:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 07:54:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 07:54:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 07:54:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 07:54:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV214] LV Biscuits apéro tomate basilic 100g bio </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 07:54:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 07:54:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV216] LV Biscuits apéro Fromage & Oignon 100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 07:54:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 0u

</details>


<details>
<summary><strong>10. [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 07:54:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Predicted 1u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:25:24.489Z*
