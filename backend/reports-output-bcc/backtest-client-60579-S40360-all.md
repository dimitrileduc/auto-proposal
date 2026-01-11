# Rapport Backtest - Client Wandercoop

## Contexte

- **Client** : Wandercoop (ID: 60579)
- **Commande réelle** : S40360
- **Date commande** : 2025-11-14 12:32:09
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 20
- **Tokens**: 18,833 input + 3,268 output = 22,101 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 45.0% | 20 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 62.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 17.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 13.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -17.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | 3 | 2.0 | 66.7% | partial | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 05/11/2025 (il y a 8 jours). Bien que le cycle moyen soit d'environ 30-35 jours, l'historique montre des commandes rapprochées en juillet. En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours (Replenishment Threshold Days), un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une rotation très faible et stable (majoritairement 1u). La médiane des commandes récentes est de 1u. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1u sans augmentation injustifiée.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 182 tokens
- **Total**: 1,121 tokens



</details>


<details>
<summary><strong>2. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre une rotation très faible mais régulière avec un cycle moyen d'environ 35 jours entre chaque commande. La dernière commande date du 5 novembre, soit il y a 8 jours. Étant donné que le seuil de réapprovisionnement est de 30 jours, le prochain besoin interviendra durant cette période de couverture (cycle de ~35 jours vs 8 jours déjà écoulés + 30 jours de visibilité). En application du principe de précaution B2B et de la règle sur les rotations faibles (1-2u), une commande de 1 unité est préconisée pour maintenir le stock sans risque de surstockage, correspondant à la médiane stricte des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 164 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 18 jours. La dernière commande datant du 05/11 (il y a 8 jours), le prochain besoin est estimé sous 10 jours, ce qui entre dans la fenêtre de réapprovisionnement de 30 jours (Risque de rupture détecté). Pour la quantité, l'historique présente des volumes compris entre 1u et 4u. La médiane des commandes récentes est de 2u. Conformément aux règles de gestion B2B privilégiant la médiane et la prudence face aux variations, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 994 tokens
- **Output**: 150 tokens
- **Total**: 1,144 tokens



</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Analyse du cycle de commande. L'historique montre des commandes régulières environ toutes les 3 à 4 semaines (moyenne ~20 jours). La dernière commande date du 05/11, soit il y a 8 jours. Avec un seuil de réapprovisionnement de 30 jours, le prochain besoin tombera dans la fenêtre de risque (8 + 30 = 38 jours depuis la dernière commande, ce qui dépasse largement le cycle moyen). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Calcul de la quantité. Les quantités récentes sont : 3, 2, 1, 2, 1, 1, 2, 4. La médiane de ces valeurs est de 2u. On écarte le pic exceptionnel de 4u. La quantité retenue est la médiane pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 994 tokens
- **Output**: 209 tokens
- **Total**: 1,203 tokens



</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 20 jours sur les derniers mois. La dernière commande date du 05/11, soit il y a 8 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient d'ici 22 jours, ce qui entre dans la fenêtre de vigilance. Le cycle étant légèrement irrégulier (allant de 15 à 40 jours), le principe de précaution B2B s'applique pour éviter une rupture. Pour la quantité, la médiane des commandes récentes (1, 1, 1, 2, 2, 2, 2, 3) est de 2 unités. On retient cette valeur médiane stable, en ignorant le pic ponctuel de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 994 tokens
- **Output**: 186 tokens
- **Total**: 1,180 tokens



</details>


<details>
<summary><strong>6. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 28 jours. La dernière commande datant du 05/11 (il y a 8 jours), le prochain besoin est estimé autour du 03/12, ce qui entre dans l'horizon des 30 jours du seuil de réapprovisionnement. Bien que la dernière commande soit de 1u, la médiane des quantités sur les 5 dernières commandes est de 2u. En application du principe de précaution B2B pour éviter une rupture sur un produit à rotation régulière, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 974 tokens
- **Output**: 146 tokens
- **Total**: 1,120 tokens



</details>


<details>
<summary><strong>7. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 30 à 35 jours (03/09, 02/10, 05/11). La dernière commande datant du 05/11, nous entrons dans la fenêtre de réapprovisionnement critique pour couvrir les 30 prochains jours (Replenishment Threshold Days). Bien que l'intervalle ne soit pas encore totalement écoulé, le principe de précaution B2B impose de prévoir la commande pour éviter la rupture. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (1, 2, 2, 2, 3, 3), conformément à la règle de ne pas surestimer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 962 tokens
- **Output**: 176 tokens
- **Total**: 1,138 tokens



</details>


<details>
<summary><strong>8. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/10/2025, soit 42 jours. Le cycle moyen observé est d'environ 23 jours. Nous avons largement dépassé ce cycle (182% du cycle moyen), ce qui indique un risque de rupture imminent ou une vente perdue. Le seuil de réapprovisionnement de 30 jours confirme l'urgence de commander. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes très faibles et stables (1u ou 2u). La médiane des commandes récentes est de 1u. Conformément à la règle sur les rotations faibles (1-2u) et au principe de choisir la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 960 tokens
- **Output**: 191 tokens
- **Total**: 1,151 tokens



</details>


<details>
<summary><strong>9. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le cycle moyen entre les commandes est d'environ 28 jours. La dernière commande remonte au 02/10/2025, soit 42 jours avant la date actuelle. Le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un besoin immédiat pour éviter la rupture. ÉTAPE 2 : L'historique récent montre des quantités de 4u, 1u, 1u, 1u et 4u. La médiane de ces commandes est de 1u. Conformément à la règle de privilégier la médiane et la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 944 tokens
- **Output**: 172 tokens
- **Total**: 1,116 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:52:11: 1u
- 2025-10-02 06:12:05: 1u
- 2025-07-18 10:48:56: 2u
- 2025-07-16 06:25:08: 1u
- 2025-06-30 13:00:00: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:52:11: 1u
- 2025-09-24 12:59:39: 1u
- 2025-08-08 11:54:27: 1u
- 2025-07-16 06:25:08: 1u
- 2025-06-30 13:00:00: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:52:11: 3u
- 2025-10-02 06:12:05: 1u
- 2025-09-24 12:59:39: 2u
- 2025-09-03 06:51:32: 3u
- 2025-08-08 11:54:27: 1u
- 2025-07-18 10:48:56: 2u
- 2025-07-16 06:25:08: 1u
- 2025-06-30 13:00:00: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:52:11: 3u
- 2025-10-02 06:12:05: 2u
- 2025-09-24 12:59:39: 1u
- 2025-09-03 06:51:32: 2u
- 2025-08-08 11:54:27: 1u
- 2025-07-18 10:48:56: 1u
- 2025-06-30 13:00:00: 2u
- 2025-06-18 13:10:32: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:52:11: 3u
- 2025-09-24 12:59:39: 2u
- 2025-09-03 06:51:32: 2u
- 2025-08-08 11:54:27: 1u
- 2025-07-18 10:48:56: 1u
- 2025-07-16 06:25:08: 1u
- 2025-06-30 13:00:00: 2u
- 2025-06-18 13:10:32: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:52:11: 1u
- 2025-10-02 06:12:05: 3u
- 2025-09-03 06:51:32: 2u
- 2025-08-08 11:54:27: 2u
- 2025-07-18 10:48:56: 2u
- 2025-07-16 06:25:08: 1u
- 2025-06-18 13:10:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-05 14:52:11: 2u
- 2025-10-02 06:12:05: 3u
- 2025-09-03 06:51:32: 2u
- 2025-08-08 11:54:27: 1u
- 2025-06-30 13:00:00: 2u
- 2025-06-18 13:10:32: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:12:05: 1u
- 2025-09-24 12:59:39: 2u
- 2025-08-08 11:54:27: 2u
- 2025-07-18 10:48:56: 1u
- 2025-07-16 06:25:08: 1u
- 2025-06-18 13:10:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:12:05: 4u
- 2025-09-03 06:51:32: 1u
- 2025-08-08 11:54:27: 1u
- 2025-07-16 06:25:08: 1u
- 2025-06-18 13:10:32: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Predicted 2u but not ordered |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Predicted 1u but not ordered |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | Predicted 1u but not ordered |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY05] Organic Cherry Jam 370g | 1 | Predicted 1u but not ordered |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Predicted 1u but not ordered |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Predicted 1u but not ordered |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:52.139Z*
