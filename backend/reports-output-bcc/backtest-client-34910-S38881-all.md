# Rapport Backtest - Client Au coin du pub

## Contexte

- **Client** : Au coin du pub (ID: 34910)
- **Commande réelle** : S38881
- **Date commande** : 2025-09-01 07:14:02
- **Date cutoff système** : 2025-08-31 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 17
- **Tokens**: 15,117 input + 2,606 output = 17,723 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 47.1% | 17 produits prédits, 8 corrects |
| **Rappel** | 50.0% | 16 produits réels, 8 détectés |
| **F1-Score** | 48.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.63 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 27.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 22.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [fsv09] Noix de cajou grillées salées bio vrac 2,8kg  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


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
La dernière commande remonte au 26 mai 2025, soit plus de 90 jours. Bien que la rotation soit faible, l'historique montre des commandes régulières de 3 unités (janvier, avril, juin 2024 et mai 2025). Le délai depuis la dernière commande dépasse largement le cycle habituel, ce qui indique un besoin de réapprovisionnement imminent pour maintenir le stock. En suivant la règle de la médiane historique et la stabilité des quantités passées, une commande de 3 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 128 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 26 mai 2025, soit plus de 90 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 75-80 jours entre avril et juin). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre une stabilité à 2 unités (médiane de N-1). La commande de 3 unités en mai est traitée comme un pic mineur. Conformément à la règle de privilégier la médiane et la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 206 tokens
- **Total**: 1,126 tokens



</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 26 mai 2025, soit plus de 90 jours. Bien que l'historique récent soit limité, l'historique N-1 montre une commande en juin. Le délai écoulé dépasse largement les cycles habituels, créant un risque de rupture ou un besoin de réapprovisionnement par précaution. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique de l'année dernière est très stable à 3 unités. La dernière commande de 5 unités semble être un pic ponctuel. En suivant la règle de la médiane et du choix de la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité de 3 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 179 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>4. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 26 mai 2025, soit plus de 90 jours. Bien que le cycle historique soit lent (environ tous les 2-3 mois), le délai actuel dépasse largement la fréquence habituelle. En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre une stabilité parfaite avec des commandes systématiques de 3 unités. La médiane est de 3u. Conformément à la règle de maintien des rotations régulières, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 176 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 26 mai 2025, soit environ 97 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et conformément à la règle sur les rotations faibles (maintenir 1-2u), une commande de 1 unité est préconisée pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 116 tokens
- **Total**: 991 tokens



</details>


<details>
<summary><strong>6. [fsv02] Noix de cajou nature bio vrac 2,8kg </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 mai 2025, soit plus de 90 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée une incertitude sur l'état du stock. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 177 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>7. [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 mai 2025, soit environ 97 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé suggère un épuisement probable du stock ou un besoin de renouvellement imminent. En application du principe de précaution B2B (doute sur le cycle = prévoir), un réapprovisionnement est nécessaire pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale historique pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 879 tokens
- **Output**: 155 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>8. [fsv09] Noix de cajou grillées salées bio vrac 2,8kg </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 26 mai 2025, soit plus de 90 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter une rupture prolongée), un besoin est identifié. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 880 tokens
- **Output**: 150 tokens
- **Total**: 1,030 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:12:18: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:39:58: 3u
- 2024-04-10 10:32:26: 3u
- 2024-01-09 12:56:51: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:12:18: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:39:58: 2u
- 2024-04-10 10:32:26: 2u
- 2024-01-09 12:56:51: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:12:18: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:39:58: 3u
- 2024-04-10 10:32:26: 3u
- 2024-01-09 12:56:51: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:12:18: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:39:58: 3u
- 2024-04-10 10:32:26: 3u
- 2024-01-09 12:56:51: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:12:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [fsv02] Noix de cajou nature bio vrac 2,8kg </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:12:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:12:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [fsv09] Noix de cajou grillées salées bio vrac 2,8kg </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:12:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (9)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV133] LV Tartinade Ananas Coco 190g | 3 | Predicted 3u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 4 | Predicted 4u but not ordered |
| [LV342] LV Organic Broccoli Spread 190 g | 3 | Predicted 3u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Predicted 1u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Predicted 1u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [REB05] REB chips bio - sel de mer 35g | 1 | Predicted 1u but not ordered |


---

## False Negatives (8)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV161] LV Tartinade Mangue curry 190g | 2 | Never ordered in previous analysis window (no history) |
| [LV135] LV Tartinade Basilico 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV330] LV BIO Tartinade Toscana 190g | 4 | Never ordered in previous analysis window (no history) |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Never ordered in previous analysis window (no history) |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Never ordered in previous analysis window (no history) |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Never ordered in previous analysis window (no history) |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Never ordered in previous analysis window (no history) |
| [fsv08] Banana chips bio vrac 1,6kg | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:19:42.367Z*
