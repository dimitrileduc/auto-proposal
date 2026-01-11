# Rapport Backtest - Client Hit Handelsgruppe GmbH&Co.KG, Hit 126 Aachen Tivoli, HIT Tivoli Verbraucherm. GmbH&Co.

## Contexte

- **Client** : Hit Handelsgruppe GmbH&Co.KG, Hit 126 Aachen Tivoli, HIT Tivoli Verbraucherm. GmbH&Co. (ID: 52741)
- **Commande réelle** : S39828
- **Date commande** : 2025-10-21 07:04:01
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 2,713 input + 523 output = 3,236 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 3 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 133.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 36.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 5 | 1 | 4.0 | 400.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 6 | 6 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

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
L'analyse montre un cycle de commande d'environ 75 jours entre les deux dernières livraisons. La dernière commande datant du 11 août 2025 (il y a 70 jours), nous atteignons le seuil de 70% du cycle moyen, ce qui indique un risque imminent de rupture de stock dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément au principe de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, la médiane des commandes récentes (3u et 5u) est de 4u, mais en suivant la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 173 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 1u
- **Erreur LLM**: 3u (300.0%)
- **Erreur Mediane**: 3u (300.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 11 août 2025, soit 70 jours avant la date actuelle. L'intervalle précédent était de 77 jours. Nous atteignons 90% du cycle moyen constaté, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). Par principe de précaution B2B, le besoin est validé. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 3u et 5u. La médiane de ces deux valeurs est de 4u. Conformément aux règles, on privilégie la médiane pour stabiliser le stock sans surévaluer.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 172 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 5u vs Médiane: 5u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 6u
- **Erreur LLM**: 1u (16.7%)
- **Erreur Mediane**: 1u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande long et irrégulier (environ 77 jours entre les deux dernières commandes). La dernière commande remonte au 11 août, soit 70 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons 90% du cycle moyen observé. Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 5u et 9u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à rotation lente, la quantité retenue est de 5u.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 178 tokens
- **Total**: 1,083 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 11:31:28: 5u
- 2025-05-26 12:18:43: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 06:24:57: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 11:31:28: 5u
- 2025-05-26 12:18:43: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 06:24:57: 2u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 11:31:28: 5u
- 2025-05-26 12:18:43: 9u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-30 06:24:57: 8u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 6u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:17:07.201Z*
