# Rapport Backtest - Client Cru's Delicatessen

## Contexte

- **Client** : Cru's Delicatessen (ID: 60276)
- **Commande réelle** : S39715
- **Date commande** : 2025-10-16 08:20:31
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 3,559 input + 619 output = 4,178 total


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
| **MAE** | 4.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 40.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -40.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 6 | 10 | 4.0 | 40.0% | partial | Non | Non | LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 6 | 10 | 4.0 | 40.0% | partial | Non | Non | LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 6 | 10 | 4.0 | 40.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 6u vs Médiane: 6u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 10u
- **Erreur LLM**: 4u (40.0%)
- **Erreur Mediane**: 4u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse montre un cycle de commande d'environ 110 jours entre les deux dernières occurrences. La dernière commande datant du 09/09/2025 (il y a 36 jours), nous entrons dans la zone de risque de rupture pour les 30 prochains jours selon le principe de précaution B2B, car le cycle est irrégulier et difficile à déterminer avec précision. Pour la quantité, la médiane des commandes récentes est de 6 unités. Conformément aux règles de gestion des rotations faibles, nous maintenons ce volume historique constant sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 133 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 6u vs Médiane: 6u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 10u
- **Erreur LLM**: 4u (40.0%)
- **Erreur Mediane**: 4u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 110 jours entre les deux dernières commandes. Au 15 octobre 2025, 36 jours se sont écoulés depuis la dernière commande (09/09/2025). Bien que nous ne soyons pas encore au terme du cycle théorique, l'historique est trop limité pour garantir une régularité stricte. En application du principe de précaution B2B (incertitude sur le cycle = risque), une commande est préconisée pour couvrir l'horizon des 30 prochains jours. La quantité retenue est de 6 unités, correspondant à la médiane et à la constante observée sur les commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 160 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>3. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 6u vs Médiane: 7u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 7u
- **Reel commande**: 10u
- **Erreur LLM**: 4u (40.0%)
- **Erreur Mediane**: 3u (30.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 09/09/2025, soit 36 jours avant la date actuelle. L'intervalle précédent était de 110 jours, mais le seuil de réapprovisionnement de 30 jours est désormais atteint. En application du principe de précaution B2B (cycle irrégulier), un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 6u et 8u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 6 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 161 tokens
- **Total**: 1,056 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 06:46:44: 6u
- 2025-05-22 06:29:23: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>2. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 06:46:44: 6u
- 2025-05-22 06:29:23: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>3. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 06:46:44: 8u
- 2025-05-22 06:29:23: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 10u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:29:28.680Z*
