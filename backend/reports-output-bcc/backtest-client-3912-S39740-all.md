# Rapport Backtest - Client LEGEND FOOD

## Contexte

- **Client** : LEGEND FOOD (ID: 3912)
- **Commande réelle** : S39740
- **Date commande** : 2025-10-15 11:44:02
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,884 input + 885 output = 5,769 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.0% | 5 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 3616.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 49.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -0.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PI2911] PI SAUCE BURGER BA PO | 12600 | 18114 | 5514.0 | 30.4% | partial | Non | Non | LLM |
| [PI2910] PI SAUCE ALGERIENNE BA PO | 8100 | 3664 | 4436.0 | 121.1% | partial | Non | Non | LLM |
| [PI0095] PI SAUCE CHEESY EASY 70% PO  | 900 | 0 | 900.0 | 0.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [PI2911] PI SAUCE BURGER BA PO</strong> - LLM: 12600u vs Médiane: 13044u (Réel: 18114u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 12600u
- **Baseline calculee**: 12600u
- **Mediane historique**: 13044u
- **Reel commande**: 18114u
- **Erreur LLM**: 5514u (30.4%)
- **Erreur Mediane**: 5070u (28.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 12600u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 60 jours (mai à juillet, juillet à septembre). La dernière commande datant du 18 septembre 2025 (il y a 26 jours), nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (seuil de 70% du cycle atteint). De plus, l'historique N-1 confirme une commande systématique en octobre (07/10/2024). Conformément à la règle de la médiane sur les commandes récentes (12600, 12600, 13487), la quantité de 12600 unités est retenue pour maintenir la stabilité de l'approvisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 1,099 tokens
- **Output**: 183 tokens
- **Total**: 1,282 tokens



</details>


<details>
<summary><strong>2. [PI2910] PI SAUCE ALGERIENNE BA PO</strong> - LLM: 8100u vs Médiane: 9430u (Réel: 3664u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8100u
- **Baseline calculee**: 8100u
- **Mediane historique**: 9430u
- **Reel commande**: 3664u
- **Erreur LLM**: 4436u (121.1%)
- **Erreur Mediane**: 5766u (157.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8100u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen récent est d'environ 60 jours (58 jours entre mai et juillet, 58 jours entre juillet et septembre). La dernière commande date du 18 septembre 2025, soit il y a 26 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 56 jours d'écart d'ici la fin de la période de vigilance, ce qui correspond à plus de 90% du cycle moyen. Le risque de rupture est imminent. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes oscillent entre 8082u et 9000u. La médiane des trois dernières commandes est de 8100u. Conformément à la règle de prudence privilégiant la valeur la plus basse en cas de doute sur le volume exact, la quantité de 8100u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,152 tokens
- **Output**: 220 tokens
- **Total**: 1,372 tokens



</details>


<details>
<summary><strong>3. [PI0095] PI SAUCE CHEESY EASY 70% PO </strong> - LLM: 900u vs Médiane: 1350u (Réel: 0u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 900u
- **Baseline calculee**: 900u
- **Mediane historique**: 1350u
- **Reel commande**: 0u
- **Erreur LLM**: 900u (Infinity%)
- **Erreur Mediane**: 1350u (Infinity%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 900u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 22/07/2025, soit 84 jours avant la date actuelle. Bien que l'historique récent soit limité à une seule commande, le délai écoulé est significatif pour un produit de type sauce. En application du principe de précaution B2B (cycle difficile à déterminer = prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de multiples commandes récentes pour calculer une médiane, la règle de maintien de la quantité historique récente s'applique. La dernière commande était de 900u. Bien que l'historique N-1 affiche 1800u, la règle privilégie la quantité la plus basse en cas de doute pour éviter le surstockage. La quantité retenue est donc de 900u.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 216 tokens
- **Total**: 1,108 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [PI2911] PI SAUCE BURGER BA PO</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-18 10:12:09: 12600u
- 2025-07-22 06:41:51: 12600u
- 2025-05-20 08:56:47: 13487u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 09:56:31: 12600u
- 2024-07-18 07:52:41: 12487u
- 2024-07-05 06:58:13: 11700u
- 2024-06-04 13:56:30: 11700u
- 2024-05-28 13:46:05: 12360u
- 2024-02-16 08:32:21: 12600u
- 2024-01-24 07:38:55: 12413u
- 2023-11-10 12:59:42: 10668u
- 2023-11-10 12:59:12: 12000u

**Quantite Mediane (fallback)**: 12600u
**Quantite Reelle**: 18114u

</details>


<details>
<summary><strong>2. [PI2910] PI SAUCE ALGERIENNE BA PO</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-18 10:12:09: 9000u
- 2025-07-22 06:41:51: 8100u
- 2025-05-20 08:56:47: 8082u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 09:56:31: 8100u
- 2024-09-12 12:35:37: 1754u
- 2024-07-18 07:52:41: 7120u
- 2024-07-05 06:58:13: 9900u
- 2024-06-04 13:56:30: 8100u
- 2024-05-28 13:46:05: 8988u
- 2024-02-23 07:36:51: 2000u
- 2024-02-16 08:32:21: 9000u
- 2024-01-25 10:28:41: 3600u
- 2024-01-24 07:38:55: 9000u
- 2023-11-14 11:59:49: 2000u
- 2023-11-10 12:59:42: 10713u

**Quantite Mediane (fallback)**: 8100u
**Quantite Reelle**: 3664u

</details>


<details>
<summary><strong>3. [PI0095] PI SAUCE CHEESY EASY 70% PO </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-22 06:41:51: 900u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 13:56:30: 1800u

**Quantite Mediane (fallback)**: 900u
**Quantite Reelle**: 0u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PI0201] PI ANDALOUSE NOUV RECETTE PO | 1 | Predicted 1u but not ordered |
| [PI2903] PI SAUCE ANDALOUSE BIO | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [VID005] CONTAINER EXPORT | 24 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:10:44.680Z*
