# Rapport Backtest - Client TERRAGUSTO

## Contexte

- **Client** : TERRAGUSTO (ID: 60549)
- **Commande réelle** : S40083
- **Date commande** : 2025-11-03 15:32:44
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 6
- **Tokens**: 5,384 input + 996 output = 6,380 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 6 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 80.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 7.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 51.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -21.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 14 | 10 | 4.0 | 40.0% | partial | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 10 | 20 | 10.0 | 50.0% | partial | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 10 | 20 | 10.0 | 50.0% | partial | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 10 | 6 | 4.0 | 66.7% | partial | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 14u vs Médiane: 19u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 14u
- **Baseline calculee**: 14u
- **Mediane historique**: 19u
- **Reel commande**: 10u
- **Erreur LLM**: 4u (40.0%)
- **Erreur Mediane**: 9u (90.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 14u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'intervalle entre les deux dernières commandes est de 98 jours. La dernière commande date du 18 septembre, soit il y a 45 jours. Bien que nous soyons à environ 46% du cycle précédent, le cycle est irrégulier (seulement deux points de données). En application du principe de précaution B2B (si doute sur le cycle ou rotation difficile à déterminer), un risque de rupture est identifié à l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 20u et 14u. En suivant la règle de la médiane et la consigne de choisir la valeur la plus basse en cas de doute ou de tendance incertaine, la quantité retenue est de 14 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 197 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 10u vs Médiane: 12u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 12u
- **Reel commande**: 20u
- **Erreur LLM**: 10u (50.0%)
- **Erreur Mediane**: 8u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique récent montre des intervalles de commande de 40 jours (juin-juillet) puis 58 jours (juillet-septembre). La dernière commande date du 18 septembre, soit 45 jours avant la date actuelle (2 novembre). Le cycle moyen étant d'environ 49 jours, nous avons dépassé 70% du cycle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités commandées sont 10u, 8u et 14u. La médiane de ces commandes est de 10u. Conformément à la règle de privilégier la médiane et la prudence en B2B, la quantité retenue est de 10u.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 198 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 10u vs Médiane: 14u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 14u
- **Reel commande**: 20u
- **Erreur LLM**: 10u (50.0%)
- **Erreur Mediane**: 6u (30.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 18 septembre, soit 45 jours avant la date actuelle. L'intervalle entre les deux commandes précédentes était de 58 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous entrons dans la fenêtre critique du cycle habituel (70% du cycle atteint). En application du principe de précaution B2B et de la règle de la médiane/valeur basse pour éviter le surstockage sur un produit à rotation modérée, une quantité de 10 unités (basée sur la commande la plus récente) est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 144 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>4. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 10u vs Médiane: 10u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 10u
- **Reel commande**: 6u
- **Erreur LLM**: 4u (66.7%)
- **Erreur Mediane**: 4u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 18 septembre, soit 45 jours. Le cycle entre les deux commandes précédentes était de 58 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent (45 + 30 > 58). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre des commandes de 10u et 15u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 10u.

**Tokens utilises pour cette prediction:**
- **Input**: 896 tokens
- **Output**: 157 tokens
- **Total**: 1,053 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-18 09:21:44: 14u
- 2025-06-12 12:42:10: 20u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 14u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-18 09:21:44: 14u
- 2025-07-22 10:08:43: 8u
- 2025-06-12 12:42:10: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 20u

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-18 09:21:44: 10u
- 2025-07-22 10:08:43: 18u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 20u

</details>


<details>
<summary><strong>4. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-18 09:21:44: 10u
- 2025-07-22 10:08:43: 15u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 6u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB08] ReBEL chips premium & bio - piment citron 125g | 13 | Predicted 13u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 13 | Predicted 13u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:36.478Z*
