# Rapport Backtest - Client Halon Francois (la ferme du Joli bois)

## Contexte

- **Client** : Halon Francois (la ferme du Joli bois) (ID: 60412)
- **Commande réelle** : S39887
- **Date commande** : 2025-10-23 11:49:52
- **Date cutoff système** : 2025-10-22 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 18
- **Tokens**: 15,988 input + 2,819 output = 18,807 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 56.3% | 16 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 72.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.44 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 59.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 64.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -31.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 5 | 3.0 | 60.0% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
L'analyse du cycle de commande montre un intervalle d'environ 44 jours entre les deux dernières commandes. La dernière commande datant du 05 septembre (soit 47 jours avant la date actuelle), le cycle habituel est dépassé. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B et de la règle des 70% du cycle, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la constante observée sur l'historique récent pour ce produit à rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 147 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>2. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 05/09/2025, soit 47 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande (rotation faible), le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et pour éviter une rupture de stock prolongée sur un produit actif, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane de l'historique récent pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 132 tokens
- **Total**: 1,006 tokens



</details>


<details>
<summary><strong>3. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 44 jours entre les deux dernières commandes. La dernière commande datant du 05/09/2025, soit il y a 47 jours, le cycle habituel est dépassé. Selon le principe de précaution B2B et le critère des 70% du cycle, un risque de rupture est identifié pour les 30 prochains jours. La quantité est fixée à 1 unité, correspondant à la médiane constante des commandes récentes pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 126 tokens
- **Total**: 1,018 tokens



</details>


<details>
<summary><strong>4. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 60 jours (63 jours entre mai et juillet, 44 jours entre juillet et septembre). Au 22 octobre, 47 jours se sont écoulés depuis la dernière commande, ce qui dépasse 70% du cycle moyen constaté. Un risque de rupture est donc identifié dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent (1u, 2u, 2u), la quantité retenue est de 2 unités pour couvrir le besoin imminent.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 148 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>5. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 (Détection du besoin) : L'historique montre un cycle de commande d'environ 60 à 70 jours (mai à juillet, juillet à septembre). La dernière commande date du 05/09/2025, soit 47 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 77 jours d'ici la fin de la période de couverture, ce qui dépasse le cycle habituel. Le risque de rupture est réel. ÉTAPE 2 (Estimation quantité) : Les quantités récentes sont de 1u, 2u et 2u. La médiane de l'historique récent est de 2u. Conformément au principe de précaution B2B et à la stabilité de la rotation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 192 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse montre un cycle de commande long (environ 58 jours entre les deux dernières commandes). Depuis la dernière commande du 23 juillet 2025, 91 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture critique ou un besoin non couvert. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent (3u et 2u), la quantité de 2 unités est retenue (choix de la valeur la plus basse en cas de doute pour éviter le surstockage).

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 149 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juillet 2025, soit 91 jours. Bien que la rotation soit faible, le délai écoulé est très important. En l'absence d'un cycle régulier établi, le principe de précaution B2B s'applique pour éviter une rupture prolongée, surtout avec un horizon de réapprovisionnement de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien pour les faibles rotations et à l'utilisation de la médiane historique, la quantité préconisée est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 158 tokens
- **Total**: 1,033 tokens



</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 23 juillet 2025, soit 91 jours avant la date actuelle. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (Étape 1) et face à l'incertitude du cycle sur un produit à faible rotation, un risque de rupture est identifié pour les 30 prochains jours. Conformément à l'Étape 2 pour les rotations très faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane historique récente.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 146 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>9. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a environ 150 jours. Bien que le cycle soit difficile à déterminer en l'absence d'historique récurrent, le principe de précaution B2B s'applique ici : en cas de doute sur le cycle ou de données insuffisantes, il est préférable de prévoir un réapprovisionnement pour éviter une rupture prolongée. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est maintenue à 2 unités, correspondant à la médiane du seul historique récent disponible, sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 133 tokens
- **Total**: 1,008 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:04:12: 2u
- 2025-07-23 11:05:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:04:12: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:04:12: 1u
- 2025-07-23 11:05:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:04:12: 1u
- 2025-07-23 11:05:56: 2u
- 2025-05-26 11:26:12: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:04:12: 1u
- 2025-07-23 11:05:56: 2u
- 2025-05-26 11:26:12: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-23 11:05:56: 3u
- 2025-05-26 11:26:12: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-23 11:05:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-23 11:05:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:26:12: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Predicted 1u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Predicted 1u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [LV216] LV Biscuits apéro Fromage & Oignon 100g bio | 1 | Predicted 1u but not ordered |
| [LV214] LV Biscuits apéro tomate basilic 100g bio  | 1 | Predicted 1u but not ordered |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:16.596Z*
