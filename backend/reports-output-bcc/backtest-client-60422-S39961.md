# Rapport Backtest - Client LA NATURE A SES DELICES

## Contexte

- **Client** : LA NATURE A SES DELICES (ID: 60422)
- **Commande réelle** : S39961
- **Date commande** : 2025-10-28 09:35:48
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 13
- **Tokens**: 11,413 input + 1,871 output = 13,284 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 81.8% | 11 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 90.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 75.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 94.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 75.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [LV153] LV Vinaigrette Ciboulette 250 ml bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse montre un cycle de commande d'environ 30 jours entre juin et juillet, mais aucune commande n'a été passée depuis le 22 juillet (soit plus de 90 jours). Bien que la rotation soit faible, le délai depuis la dernière commande dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Par principe de précaution B2B et pour éviter une rupture prolongée sur ce produit bio, un besoin est détecté. La quantité est fixée à 2 unités, correspondant à la médiane et à la constante observée lors des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 138 tokens
- **Total**: 1,029 tokens



</details>


<details>
<summary><strong>2. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 juillet 2025, soit plus de 90 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle précédent (30 jours entre juin et juillet). En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute pour les produits à très faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 169 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>3. [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
L'historique récent montre un cycle de commande d'environ 30 jours (juin à juillet). Depuis la dernière commande du 22 juillet 2025, plus de 90 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 3 unités, correspondant à la médiane et à la constante observée sur les dernières commandes.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 132 tokens
- **Total**: 1,025 tokens



</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 juillet 2025, soit environ 97 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue correspond à la dernière commande connue (3 unités), conformément à la règle de maintien des volumes pour les rotations faibles et régulières.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 119 tokens
- **Total**: 994 tokens



</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 22 juillet 2025, soit plus de 90 jours sans activité. Bien que la rotation soit faible, l'absence de données historiques supplémentaires et l'incertitude sur le cycle de réapprovisionnement imposent l'application du principe de précaution B2B pour éviter une rupture prolongée. Conformément aux règles de gestion des rotations faibles et irrégulières, la quantité est fixée à 3 unités, correspondant au volume de la dernière commande connue (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 119 tokens
- **Total**: 994 tokens



</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 juillet 2025, soit plus de 90 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de la règle sur les cycles irréguliers/difficiles à déterminer, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. En l'absence d'historique multiple, la quantité de la dernière commande (3 unités) est utilisée comme référence. Conformément à la règle de maintien des rotations faibles (1-3u), la quantité préconisée est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 167 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 22 juillet 2025, soit 97 jours avant la date actuelle. Bien que le cycle de rotation soit lent, le délai écoulé dépasse largement les standards de réapprovisionnement habituels. En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent présente une commande unique de 3 unités. Conformément à la règle de maintien des quantités pour les rotations faibles et régulières, la médiane (3u) est retenue pour éviter tout surstockage tout en assurant la présence du produit en rayon.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 178 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 22 juillet 2025, soit environ 97 jours sans activité. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et pour éviter une rupture de stock prolongée sur un produit à faible rotation, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane de l'historique récent pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 122 tokens
- **Total**: 997 tokens



</details>


<details>
<summary><strong>9. [LV154] LV Vinaigrette Miel et moutarde 250 ml bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 23 juin 2025, soit plus de 120 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée si le produit est toujours au catalogue. La quantité retenue correspond à la dernière commande connue (2 unités), ce qui représente le volume minimal de rotation observé.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 103 tokens
- **Total**: 979 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [LV153] LV Vinaigrette Ciboulette 250 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 06:14:55: 2u
- 2025-06-23 10:58:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 06:14:55: 1u
- 2025-06-23 10:58:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 06:14:55: 3u
- 2025-06-23 10:58:22: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 06:14:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 06:14:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 06:14:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 06:14:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 06:14:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV154] LV Vinaigrette Miel et moutarde 250 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 10:58:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Predicted 1u but not ordered |
| [LV140] LV Moutarde à l'ancienne  200ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:18:05.902Z*
