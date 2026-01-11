# Rapport Backtest - Client Belgian East Wine

## Contexte

- **Client** : Belgian East Wine (ID: 23548)
- **Commande réelle** : S36817
- **Date commande** : 2025-05-15 08:26:23
- **Date cutoff système** : 2025-05-14 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 10
- **Tokens**: 8,874 input + 1,534 output = 10,408 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 70.0% | 10 produits prédits, 7 corrects |
| **Rappel** | 100.0% | 7 produits réels, 7 détectés |
| **F1-Score** | 82.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 63.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 57.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 45.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 5 | 2 | 3.0 | 150.0% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Il n'y a aucune commande enregistrée pour l'année en cours (2024-2025), ce qui indique une absence de stock ou une rupture prolongée pour ce produit. Selon le principe de précaution B2B, en l'absence d'historique récent mais avec une activité constatée l'année précédente à des périodes variées, un besoin est détecté pour relancer la référence. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique N-1 montre des commandes de 3u et 4u. En appliquant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 185 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Bien qu'il n'y ait pas de commandes récentes en 2024/2025, l'historique N-1 montre une rotation régulière de type "fond de rayon" avec un cycle moyen d'environ 60 jours. La dernière commande enregistrée remontant à plus de 12 mois, le stock est théoriquement épuisé. En application du principe de précaution B2B (mieux vaut prévoir un besoin incertain qu'une rupture), une commande est nécessaire pour reconstituer le stock de présentation. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique N-1 est extrêmement stable avec des commandes constantes de 2 unités. La médiane et la valeur constante étant de 2, cette quantité est retenue pour maintenir le produit sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 193 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>3. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
Absence totale d'historique de commandes (récent et N-1). En application du principe de précaution B2B et de la règle de détection du besoin en cas de doute ou d'absence de cycle identifiable, une commande est préconisée pour constituer un stock initial ou éviter une rupture indéterminée. La quantité est fixée à l'unité minimale (1) conformément à la règle de rotation faible/incertaine afin de ne pas surestimer le besoin sans données historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 861 tokens
- **Output**: 112 tokens
- **Total**: 973 tokens



</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Il n'y a aucune commande enregistrée pour l'année en cours (Recent Orders vide), ce qui indique une absence de stock ou une rupture prolongée depuis la dernière commande de décembre 2023. Selon le principe de précaution B2B et la règle du doute sur le cycle, un réapprovisionnement est nécessaire pour relancer la rotation du produit. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique récent, l'analyse se base sur les données N-1. Les commandes historiques montrent des volumes de 3u, 4u et 4u. La médiane de ces valeurs est de 4u. Cette quantité est retenue pour reconstituer un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 181 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>5. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucun historique de commande récent ou sur l'année précédente (N-1). En l'absence totale de données permettant de définir un cycle de rotation, la règle de précaution B2B s'applique : en cas de doute ou de cycle indéterminé, il faut prévoir une commande pour éviter une rupture potentielle dès le lancement ou la mise en stock. ÉTAPE 2 : ESTIMATION QUANTITÉ. Pour un produit à rotation inconnue ou très faible, la règle stipule de maintenir une quantité minimale (1-2 unités) sans augmenter sans raison. La quantité de 1 unité est choisie comme stock de sécurité initial minimal.

**Tokens utilises pour cette prediction:**
- **Input**: 858 tokens
- **Output**: 160 tokens
- **Total**: 1,018 tokens



</details>


<details>
<summary><strong>6. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Absence totale d'historique de commandes (récentes et N-1). En application du principe de précaution B2B, tout doute sur le cycle ou l'absence de données doit conduire à prévoir une commande pour éviter une rupture potentielle ou un défaut de référencement. ÉTAPE 2 : En l'absence de médiane historique, la quantité minimale de 1 unité est préconisée pour initier le stock sans risque de surstockage, conformément à la règle de choisir la valeur la plus basse en cas d'incertitude.

**Tokens utilises pour cette prediction:**
- **Input**: 860 tokens
- **Output**: 128 tokens
- **Total**: 988 tokens



</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une rotation régulière de 2 unités environ tous les deux mois. La dernière commande enregistrée datant de décembre, le cycle de réapprovisionnement est largement dépassé, créant un risque de rupture certain. En application du principe de précaution B2B et en se basant sur la médiane constante de l'année précédente (2u), une commande de 2 unités est nécessaire pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 112 tokens
- **Total**: 1,017 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2023-12-18 07:48:15: 4u
- 2023-11-16 07:18:20: 3u
- 2023-09-01 12:02:21: 3u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2023-12-18 07:48:15: 2u
- 2023-11-16 07:18:20: 2u
- 2023-09-01 12:02:21: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2023-12-18 07:48:15: 3u
- 2023-11-16 07:18:20: 4u
- 2023-09-01 12:02:21: 4u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2023-12-18 07:48:15: 2u
- 2023-11-16 07:18:20: 2u
- 2023-09-01 12:02:21: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Predicted 1u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 3 | Predicted 3u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 4 | Predicted 4u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:26:08.813Z*
