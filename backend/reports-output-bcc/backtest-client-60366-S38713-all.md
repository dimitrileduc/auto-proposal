# Rapport Backtest - Client INTERBIO

## Contexte

- **Client** : INTERBIO (ID: 60366)
- **Commande réelle** : S38713
- **Date commande** : 2025-08-25 11:43:44
- **Date cutoff système** : 2025-08-24 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 8
- **Tokens**: 7,055 input + 1,263 output = 8,318 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 8 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 7.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 29.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 14 | 14 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 14 | 28 | 14.0 | 50.0% | partial | Non | Non | LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 28 | 28 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY05] Organic Cherry Jam 370g | 14 | 28 | 14.0 | 50.0% | partial | Non | Non | LLM |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 14 | 14 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY07] JOY! Organic Fig Jam 370g | 28 | 14 | 14.0 | 100.0% | partial | Non | Non | LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 56 | 42 | 14.0 | 33.3% | partial | Non | Non | LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 28 | 28 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 14u vs Médiane: 14u (Réel: 14u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 14u
- **Baseline calculee**: 14u
- **Mediane historique**: 14u
- **Reel commande**: 14u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 14u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le cycle observé entre les deux dernières commandes est de 68 jours. Depuis la dernière commande (14/07/2025), 41 jours se sont écoulés, soit environ 60% du cycle moyen. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans l'horizon de prévision (41 + 30 = 71 jours, dépassant le cycle de 68 jours). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent présente deux valeurs (28u et 14u). En application de la règle de prudence privilégiant la valeur la plus basse en cas de doute ou de tendance incertaine, la quantité retenue est de 14 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 192 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 14u vs Médiane: 28u (Réel: 28u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 14u
- **Baseline calculee**: 14u
- **Mediane historique**: 28u
- **Reel commande**: 28u
- **Erreur LLM**: 14u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 14u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 68 jours entre les deux dernières commandes. Au 24 août 2025, 41 jours se sont écoulés depuis la dernière commande (14 juillet), soit environ 60% du cycle moyen. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture à l'horizon de fin septembre est réel (principe de précaution B2B). Pour la quantité, la médiane historique entre 14u et 28u est de 21u, mais conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation irrégulière pour éviter le surstock, la quantité de 14u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 173 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>3. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 28u vs Médiane: 42u (Réel: 28u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 28u
- **Baseline calculee**: 28u
- **Mediane historique**: 42u
- **Reel commande**: 28u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 14u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 28u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 68 jours entre les deux dernières commandes. Au 24 août, 41 jours se sont écoulés depuis la dernière commande (14 juillet). Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons l'horizon de risque à 71 jours (41+30), ce qui dépasse le cycle moyen constaté. Par principe de précaution B2B, un besoin est détecté. Pour la quantité, la médiane entre 42u et 28u est de 35u, mais conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation irrégulière pour éviter le surstock, la quantité de 28u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 176 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>4. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 14u vs Médiane: 14u (Réel: 28u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 14u
- **Baseline calculee**: 14u
- **Mediane historique**: 14u
- **Reel commande**: 28u
- **Erreur LLM**: 14u (50.0%)
- **Erreur Mediane**: 14u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 14u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande d'environ 68 jours (entre mai et juillet). Au 24 août, 41 jours se sont écoulés depuis la dernière commande, ce qui représente environ 60% du cycle estimé. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture survient durant cette fenêtre. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est nécessaire. La quantité retenue est de 14 unités, correspondant à la médiane et à la constante observée sur les dernières commandes.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 146 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>5. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM: 14u vs Médiane: 14u (Réel: 14u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 14u
- **Baseline calculee**: 14u
- **Mediane historique**: 14u
- **Reel commande**: 14u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 14u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique récent montre un cycle de commande d'environ 68 jours (entre mai et juillet). La dernière commande date du 14 juillet, soit il y a 41 jours. Le prochain besoin est estimé autour du 20 septembre. Étant donné le seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans l'horizon de prévision. Par principe de précaution B2B, le besoin est validé. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les deux dernières commandes sont identiques (14u). Conformément à la règle de rotation régulière, cette quantité est maintenue pour la nouvelle commande.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 166 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>6. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 28u vs Médiane: 21u (Réel: 14u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 28u
- **Baseline calculee**: 28u
- **Mediane historique**: 21u
- **Reel commande**: 14u
- **Erreur LLM**: 14u (100.0%)
- **Erreur Mediane**: 7u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 28u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 07/05/2025, soit 109 jours sans activité. En l'absence d'historique récurrent permettant de définir un cycle précis, le principe de précaution B2B s'applique car le délai dépasse largement les seuils de réapprovisionnement usuels. Le risque de rupture est considéré comme élevé par manque de visibilité sur la rotation. Conformément à la règle de l'étape 2, la quantité est basée sur la dernière commande connue (28u), celle-ci constituant la seule référence de volume disponible.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 135 tokens
- **Total**: 1,005 tokens



</details>


<details>
<summary><strong>7. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 56u vs Médiane: 56u (Réel: 42u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 56u
- **Baseline calculee**: 56u
- **Mediane historique**: 56u
- **Reel commande**: 42u
- **Erreur LLM**: 14u (33.3%)
- **Erreur Mediane**: 14u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 56u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/05/2025, soit 109 jours sans activité. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement les cycles standards de rotation B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter une rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple pour calculer une médiane, la quantité de la dernière commande connue (56u) est reconduite pour maintenir le stock initialement observé.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 150 tokens
- **Total**: 1,022 tokens



</details>


<details>
<summary><strong>8. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 28u vs Médiane: 28u (Réel: 28u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 28u
- **Baseline calculee**: 28u
- **Mediane historique**: 28u
- **Reel commande**: 28u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 28u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 07/05/2025, soit 109 jours sans activité. En l'absence d'historique récurrent permettant de définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture prolongée. Le risque de rupture est considéré comme élevé car nous avons largement dépassé les délais de réapprovisionnement standards. La quantité retenue correspond à la dernière commande connue (28u), conformément à la règle de maintien des volumes historiques en cas de rotation isolée.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 125 tokens
- **Total**: 995 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 07:19:31: 14u
- 2025-05-07 11:23:46: 28u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 14u
**Quantite Reelle**: 14u

</details>


<details>
<summary><strong>2. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 07:19:31: 14u
- 2025-05-07 11:23:46: 28u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 14u
**Quantite Reelle**: 28u

</details>


<details>
<summary><strong>3. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 07:19:31: 42u
- 2025-05-07 11:23:46: 28u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 28u
**Quantite Reelle**: 28u

</details>


<details>
<summary><strong>4. [JOY05] Organic Cherry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 07:19:31: 14u
- 2025-05-07 11:23:46: 14u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 14u
**Quantite Reelle**: 28u

</details>


<details>
<summary><strong>5. [JOY06] JOY! Organic Rhubarb Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 07:19:31: 14u
- 2025-05-07 11:23:46: 14u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 14u
**Quantite Reelle**: 14u

</details>


<details>
<summary><strong>6. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-07 11:23:46: 28u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 28u
**Quantite Reelle**: 14u

</details>


<details>
<summary><strong>7. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-07 11:23:46: 56u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 56u
**Quantite Reelle**: 42u

</details>


<details>
<summary><strong>8. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-07 11:23:46: 28u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 28u
**Quantite Reelle**: 28u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:14:01.287Z*
