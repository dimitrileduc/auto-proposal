# Rapport Backtest - Client Maréchal, Marc (les pieds sur terre)

## Contexte

- **Client** : Maréchal, Marc (les pieds sur terre) (ID: 57301)
- **Commande réelle** : S38775
- **Date commande** : 2025-08-27 06:15:48
- **Date cutoff système** : 2025-08-26 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 36
- **Tokens**: 31,920 input + 5,597 output = 37,517 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 57.9% | 19 produits prédits, 11 corrects |
| **Rappel** | 100.0% | 11 produits réels, 11 détectés |
| **F1-Score** | 73.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.55 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 17.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 27.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -11.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV345] LV Spread KIDS 200ml Organic | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 5 | 5 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 5 | 5 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 5 | 5 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 5 | 5 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 05/08/2025, soit 21 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours et un historique montrant des intervalles irréguliers (parfois très longs, parfois rapprochés de 10 jours), le principe de précaution B2B s'applique pour éviter une rupture. Le cycle moyen est difficile à établir avec certitude, ce qui justifie une commande de sécurité. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (1, 2, 3) et à la quantité de la dernière commande, respectant la règle de ne pas surestimer sur des produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 162 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>2. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 40 jours. La dernière commande datant du 5 août (soit 21 jours avant la date actuelle), nous entrons dans la zone de risque de rupture (70% du cycle atteint) d'ici les 30 prochains jours. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (1, 2, 2, 3), afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 138 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>3. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle observé entre les deux dernières commandes est de 46 jours. La dernière commande date du 05/08/2025, soit il y a 21 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 51 jours d'écart d'ici la fin de la période de vigilance, ce qui dépasse le cycle moyen. Le risque de rupture est donc identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. En application de la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 177 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>4. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 5u vs Médiane: 5u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 5u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 36 jours entre les commandes récentes. La dernière commande datant du 20 juin 2025 (soit 67 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture critique ou un besoin non couvert. En appliquant la règle de la médiane sur l'historique récent (2u, 5u, 5u), la quantité retenue est de 5 unités pour reconstituer le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 140 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>5. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 5u vs Médiane: 5u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 5u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 20 juin 2025, soit 67 jours avant la date actuelle. Le cycle moyen observé entre les commandes précédentes est d'environ 35 jours. Le délai actuel dépasse largement ce cycle (bien au-delà des 70%), ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement immédiat pour couvrir les 30 prochains jours. ÉTAPE 2 : L'historique récent montre des quantités de 2u, 5u et 5u. La médiane de ces commandes est de 5u. Conformément aux règles de gestion B2B, on privilégie cette médiane pour maintenir le stock sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 164 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles irréguliers (10 jours, puis 64 jours). Depuis la dernière commande du 20 juin 2025, 67 jours se sont écoulés, ce qui dépasse largement le cycle précédent. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (1, 2, 3), afin de maintenir le stock sans risque de surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 136 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 5u vs Médiane: 5u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 5u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 36 jours entre les commandes récentes. La dernière commande datant du 20 juin 2025 (soit 67 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture critique ou un besoin non couvert. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent (5u, 5u, 2u), la quantité retenue est de 5 unités pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 145 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 5u vs Médiane: 5u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 5u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 juin, soit 67 jours. Le cycle moyen observé est d'environ 36 jours (entre avril et juin). Le délai depuis la dernière commande dépasse largement 70% du cycle habituel, indiquant un risque de rupture imminent ou une consommation du stock de sécurité dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 2u, 5u et 5u. La médiane des quantités récentes est de 5u. Conformément à la règle de maintien de la rotation régulière, la quantité de 5u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 157 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 10 jours puis 64 jours. Depuis la dernière commande du 20 juin 2025, 67 jours se sont écoulés, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou un besoin de restockage par précaution. La quantité est fixée à 2 unités, correspondant à la médiane des commandes récentes (1, 2, 3), conformément à la règle de prudence en cas de rotation irrégulière.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 132 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>10. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 17 avril 2025, soit plus de 130 jours sans activité pour ce produit. Bien que le cycle historique soit court (10 jours entre les deux seules commandes), l'absence prolongée de mouvement crée une incertitude majeure sur la rotation actuelle. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture potentielle lors d'une reprise d'activité) et conformément à la règle de rotation faible, une commande de 1 unité est préconisée. Cette quantité correspond à la valeur la plus basse de l'historique récent, limitant ainsi le risque de surstockage tout en assurant une présence minimale en rayon.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 162 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>11. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 17 avril 2025, soit plus de 130 jours sans activité pour ce produit. Bien que le cycle historique soit court (10 jours entre les deux seules commandes connues), l'absence prolongée de mouvement crée une incertitude majeure sur la rotation actuelle. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et face à un cycle irrégulier/indéterminé, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la valeur la plus basse de l'historique récent, afin de limiter le risque de surstockage sur un produit à très faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 160 tokens
- **Total**: 1,048 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:23:28: 2u
- 2025-04-17 10:10:52: 3u
- 2025-04-07 06:45:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:23:28: 2u
- 2025-06-20 07:48:15: 3u
- 2025-04-17 10:10:52: 2u
- 2025-04-07 06:45:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:23:28: 1u
- 2025-06-20 07:48:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 07:48:15: 5u
- 2025-04-17 10:10:52: 5u
- 2025-04-07 06:45:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>5. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 07:48:15: 5u
- 2025-04-17 10:10:52: 5u
- 2025-04-07 06:45:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 07:48:15: 2u
- 2025-04-17 10:10:52: 3u
- 2025-04-07 06:45:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 07:48:15: 5u
- 2025-04-17 10:10:52: 5u
- 2025-04-07 06:45:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 07:48:15: 5u
- 2025-04-17 10:10:52: 5u
- 2025-04-07 06:45:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 07:48:15: 2u
- 2025-04-17 10:10:52: 3u
- 2025-04-07 06:45:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>10. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-17 10:10:52: 3u
- 2025-04-07 06:45:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-17 10:10:52: 5u
- 2025-04-07 06:45:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Predicted 2u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Predicted 1u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Predicted 1u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Predicted 2u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:22:11.283Z*
