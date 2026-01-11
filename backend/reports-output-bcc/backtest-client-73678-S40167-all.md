# Rapport Backtest - Client U FOOD MANAGEMENT

## Contexte

- **Client** : U FOOD MANAGEMENT (ID: 73678)
- **Commande réelle** : S40167
- **Date commande** : 2025-11-12 10:40:37
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 44
- **Tokens**: 39,105 input + 6,600 output = 45,705 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 20.5% | 44 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 34.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.22 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 13.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 11.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -13.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV139] LV Tartinade Paprika Chili 380g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle d'environ 67 jours entre les deux dernières commandes. La dernière commande datant du 17 octobre (il y a 25 jours), nous entrons dans la fenêtre de risque de rupture à l'horizon des 30 jours (seuil de réapprovisionnement). Conformément au principe de précaution B2B, un besoin est détecté malgré la faible rotation. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 899 tokens
- **Output**: 137 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande moyen est d'environ 27 jours (18 jours entre les deux dernières, 38 jours entre les précédentes). La dernière commande date du 06/10/2025, soit il y a 36 jours. Ce délai dépasse largement le cycle moyen et l'horizon de réapprovisionnement de 30 jours, indiquant un besoin immédiat. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante des commandes historiques récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 115 tokens
- **Total**: 1,022 tokens



</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 38 jours puis 18 jours, soit une moyenne de 28 jours. Depuis la dernière commande du 06/10/2025, 36 jours se sont écoulés, ce qui dépasse le cycle moyen et indique un risque de rupture imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). En application du principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 2 unités, correspondant à la médiane et au mode des commandes récentes (2u, 1u, 2u), afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 153 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>4. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 38 et 18 jours (moyenne ~28 jours). Depuis la dernière commande du 06/10/2025, 36 jours se sont écoulés, ce qui dépasse largement le cycle moyen et indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et au mode des commandes récentes, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 140 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>5. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande moyen d'environ 28 jours (18 jours entre les deux dernières, 38 jours entre les précédentes). La dernière commande date du 06/10/2025, soit il y a 36 jours. Nous avons dépassé le cycle moyen et le seuil de réapprovisionnement de 30 jours est largement atteint. Le risque de rupture est avéré. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 1u, 1u et 2u. La médiane de l'historique récent est de 1u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 185 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 06/10/2025, soit 36 jours. Le cycle moyen observé est d'environ 28 jours (18j entre les deux dernières, 38j entre les précédentes). Le délai depuis la dernière commande dépasse largement le cycle moyen et l'horizon de 30 jours (Replenishment Threshold Days). Le risque de rupture est avéré. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 1u, 2u et 2u. La médiane des quantités est de 2u. Conformément aux règles de rotation faible et de maintien de la régularité, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 179 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>7. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 38 jours puis 18 jours, soit une moyenne de 28 jours. Depuis la dernière commande du 06/10/2025, 36 jours se sont écoulés, ce qui dépasse largement le cycle moyen et le seuil de 70% (20 jours). Le risque de rupture est imminent dans l'horizon des 30 jours. En suivant la règle de la médiane des commandes récentes (1u, 1u, 2u), la quantité recommandée est de 1 unité, privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 156 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>8. [LV139] LV Tartinade Paprika Chili 380g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 11 août 2025, soit exactement 92 jours (environ 3 mois) avant la date actuelle. Bien que l'historique soit limité à une seule commande, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B. Le délai écoulé suggère un besoin de renouvellement imminent pour éviter une rupture de stock prolongée. Conformément aux règles de gestion, la quantité retenue correspond à la valeur de la dernière commande (2 unités), ce qui représente le volume de rotation observé pour ce produit.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 133 tokens
- **Total**: 1,005 tokens



</details>


<details>
<summary><strong>9. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 92 jours (11 août). Bien que l'historique soit limité à une seule unité, le délai écoulé dépasse largement un cycle de rotation standard en B2B. En application du principe de précaution (Étape 1) et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue correspond à la médiane de l'historique récent (1u) afin de couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 121 tokens
- **Total**: 999 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-17 12:53:14: 1u
- 2025-08-11 12:22:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:54:59: 1u
- 2025-09-18 12:27:27: 1u
- 2025-08-11 12:22:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:54:59: 2u
- 2025-09-18 12:27:27: 1u
- 2025-08-11 12:22:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:54:59: 2u
- 2025-09-18 12:27:27: 1u
- 2025-08-11 12:22:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:54:59: 1u
- 2025-09-18 12:27:27: 1u
- 2025-08-11 12:22:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:54:59: 2u
- 2025-09-18 12:27:27: 1u
- 2025-08-11 12:22:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:54:59: 1u
- 2025-09-18 12:27:27: 1u
- 2025-08-11 12:22:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV139] LV Tartinade Paprika Chili 380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 12:22:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 12:22:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (35)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 2 | Predicted 2u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Predicted 2u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | Predicted 1u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Predicted 1u but not ordered |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 2 | Predicted 2u but not ordered |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | Predicted 2u but not ordered |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Predicted 1u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Predicted 1u but not ordered |
| [LV188] LV Tartinade Aubergine  380g | 1 | Predicted 1u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Predicted 2u but not ordered |
| [fsv01] Cerneaux de noix nature bio vrac 1,8kg | 1 | Predicted 1u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 1 | Predicted 1u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 1 | Predicted 1u but not ordered |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Predicted 1u but not ordered |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Predicted 1u but not ordered |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Predicted 1u but not ordered |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | Predicted 1u but not ordered |
| [CB005] CB Apple juice 1l | 1 | Predicted 1u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 2 | Predicted 2u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 2 | Predicted 2u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | Predicted 2u but not ordered |
| [LV187] LV Tartinade Mangue Curry 380g | 2 | Predicted 2u but not ordered |
| [LV189] LV Tartinade Houmous Type 380g | 2 | Predicted 2u but not ordered |
| [LV217] LV Tartinade Basilic 380g | 2 | Predicted 2u but not ordered |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 2 | Predicted 2u but not ordered |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Predicted 1u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Predicted 1u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Predicted 1u but not ordered |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:22:10.814Z*
