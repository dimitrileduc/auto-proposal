# Rapport Backtest - Client LES 9 GRAINS D'OR

## Contexte

- **Client** : LES 9 GRAINS D'OR (ID: 60453)
- **Commande réelle** : S39427
- **Date commande** : 2025-10-08 07:07:34
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 37
- **Tokens**: 32,824 input + 5,668 output = 38,492 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 22.2% | 36 produits prédits, 8 corrects |
| **Rappel** | 61.5% | 13 produits réels, 8 détectés |
| **F1-Score** | 32.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 31.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 1 | 2 | 1.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles réguliers d'environ 23 à 33 jours (33 jours entre mai et juillet, 34 jours entre juillet et août, 23 jours entre août et septembre). La dernière commande datant du 5 septembre, soit il y a 32 jours, nous avons dépassé 70% du cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Concernant la quantité, l'historique récent montre une stabilisation à 2 unités lors des trois dernières commandes. La médiane des commandes récentes étant de 2, cette quantité est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 931 tokens
- **Output**: 158 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>2. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 35 jours entre chaque commande (ex: 13/08 au 05/09 = 23 jours, 10/07 au 13/08 = 34 jours). La dernière commande datant du 05/09, soit il y a 32 jours, nous avons dépassé 70% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). Conformément à la règle de la médiane sur l'historique récent (1u, 2u, 1u, 1u, 1u), la quantité retenue est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 947 tokens
- **Output**: 183 tokens
- **Total**: 1,130 tokens



</details>


<details>
<summary><strong>3. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 55 jours (intervalles de 35, 23, et 57 jours). La dernière commande remonte au 05/09/2025, soit 32 jours avant la date actuelle. Ce délai représente environ 60% du cycle moyen, mais compte tenu de l'irrégularité des intervalles et du seuil de réapprovisionnement de 30 jours, un risque de rupture est identifié par précaution (principe B2B). Concernant la quantité, le volume oscille strictement entre 1u et 2u. En suivant la règle de la médiane et la consigne de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 190 tokens
- **Total**: 1,115 tokens



</details>


<details>
<summary><strong>4. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 août 2025, soit 55 jours avant la date actuelle. Bien que l'historique soit limité, le délai écoulé dépasse largement un cycle mensuel standard. En application du principe de précaution B2B (cycle irrégulier/difficile à déterminer), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 2 unités. En l'absence d'autres données ou de saisonnalité N-1, la médiane de 2 unités est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 163 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>5. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 46 jours (31 jours entre mai et juin, 57 jours entre juin et août). Au 7 octobre, 55 jours se sont écoulés depuis la dernière commande du 13 août, ce qui dépasse largement le cycle moyen et le seuil de 70% défini par le principe de précaution. Il existe donc un risque de rupture imminent dans l'horizon des 30 jours. Concernant la quantité, le volume est constant à 1 unité par commande (médiane de 1u). Conformément aux règles de rotation faible, la quantité de 1 unité est maintenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 162 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>6. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen observé est d'environ 58 jours. La dernière commande remonte au 10 juillet 2025, soit 89 jours avant la date actuelle. Le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une consommation constante et faible de 1 unité par commande. La médiane des quantités est de 1. Conformément aux règles sur les rotations faibles, on maintient la quantité de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 157 tokens
- **Total**: 1,050 tokens



</details>


<details>
<summary><strong>7. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le délai depuis la dernière commande (10 juillet) est de 89 jours. Bien que le cycle historique soit irrégulier (23 jours entre les deux premières commandes), le délai actuel dépasse largement la fréquence observée. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : L'historique récent montre des quantités de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 148 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>8. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 58 jours entre les deux dernières commandes. La dernière commande datant du 10 juillet 2025 (il y a 89 jours), le cycle habituel est largement dépassé, ce qui indique un besoin imminent ou une rupture de stock probable. En application du principe de précaution B2B (doute sur le cycle = prévoir), un réapprovisionnement est nécessaire. Pour la quantité, la médiane des commandes récentes (1u et 2u) se situe entre les deux ; conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité de 1 unité est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 158 tokens
- **Total**: 1,052 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:07:25: 2u
- 2025-08-13 07:38:48: 2u
- 2025-07-10 07:08:38: 2u
- 2025-05-13 14:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:07:25: 1u
- 2025-08-13 07:38:48: 2u
- 2025-07-10 07:08:38: 1u
- 2025-06-17 06:38:43: 1u
- 2025-05-13 14:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 14:07:25: 1u
- 2025-07-10 07:08:38: 2u
- 2025-06-17 06:38:43: 2u
- 2025-05-13 14:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 07:38:48: 2u
- 2025-06-17 06:38:43: 0u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 07:38:48: 1u
- 2025-06-17 06:38:43: 1u
- 2025-05-13 14:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-10 07:08:38: 1u
- 2025-05-13 14:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-10 07:08:38: 2u
- 2025-06-17 06:38:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-10 07:08:38: 2u
- 2025-05-13 14:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (28)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Predicted 1u but not ordered |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Predicted 1u but not ordered |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Predicted 1u but not ordered |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | Predicted 2u but not ordered |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Predicted 1u but not ordered |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Predicted 1u but not ordered |
| [MF0013] MF Olives Vertes 500g | 1 | Predicted 1u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Predicted 1u but not ordered |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 2 | Predicted 2u but not ordered |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Predicted 1u but not ordered |
| [MF0061] MF Compote | 1 | Predicted 1u but not ordered |
| [MF0060] MF Passata | 1 | Predicted 1u but not ordered |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | Predicted 1u but not ordered |
| [CB010] CB Jus de Pomme cubis 3l | 3 | Predicted 3u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Predicted 1u but not ordered |
| [MF0012] MF Olives Mix 500g | 1 | Predicted 1u but not ordered |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 3 | Predicted 3u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Predicted 1u but not ordered |
| [MF0058] MF Confi Groseilles Bessen | 1 | Predicted 1u but not ordered |
| [MF0059] MF Confi Fraise- Ardbei | 1 | Predicted 1u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Predicted 1u but not ordered |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | Predicted 1u but not ordered |


---

## False Negatives (5)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0024] MF KETCHUP 250g | 1 | Never ordered in previous analysis window (no history) |
| [fsv17] Mélange de noix bio vrac 2,75kg | 1 | Never ordered in previous analysis window (no history) |
| [fsv08] Banana chips bio vrac 1,6kg | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 3 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 18 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:06:55.434Z*
