# Rapport Backtest - Client PAIRI DAIZA stock

## Contexte

- **Client** : PAIRI DAIZA stock (ID: 60508)
- **Commande réelle** : S39785
- **Date commande** : 2025-10-21 07:58:15
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,549 input + 863 output = 5,412 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 80.0% | 5 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 88.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 6.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 69.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 58.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 36.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 7 | 6 | 1.0 | 16.7% | partial | LLM |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 7 | 9 | 2.0 | 22.2% | partial | LLM |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 5 | 9 | 4.0 | 44.4% | partial | LLM |
| [AQUA01] AQUAPAX - natural mineral water 500ml | 30 | 12 | 18.0 | 150.0% | partial | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 7u vs Médiane: 10u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 7u
- **Baseline calculee**: 7u
- **Mediane historique**: 10u
- **Reel commande**: 6u
- **Erreur LLM**: 1u (16.7%)
- **Erreur Mediane**: 4u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 7u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 11 août 2025, soit 70 jours avant la date actuelle (20 octobre). Bien que le cycle historique soit irrégulier (6 jours entre les deux dernières, mais un long intervalle auparavant), le délai écoulé dépasse largement les cycles observés. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre des commandes de 6, 7 et 10 unités. La médiane de ces valeurs est de 7. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 7 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 913 tokens
- **Output**: 210 tokens
- **Total**: 1,123 tokens



</details>


<details>
<summary><strong>2. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM: 7u vs Médiane: 10u (Réel: 9u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 7u
- **Baseline calculee**: 7u
- **Mediane historique**: 10u
- **Reel commande**: 9u
- **Erreur LLM**: 2u (22.2%)
- **Erreur Mediane**: 1u (11.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 7u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une irrégularité marquée avec une dernière commande remontant à 70 jours (11 août). Bien que le cycle moyen soit difficile à établir précisément, le délai écoulé dépasse largement les seuils de sécurité habituels, créant un risque de rupture imminent dans l'horizon des 30 jours (principe de précaution B2B). Pour la quantité, la médiane des commandes récentes (2, 7, 12) est de 7 unités. Ce volume permet de couvrir le besoin sans surstockage excessif, conformément à la stratégie de maintien des stocks sur une rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 914 tokens
- **Output**: 141 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>3. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - LLM: 5u vs Médiane: 6u (Réel: 9u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 6u
- **Reel commande**: 9u
- **Erreur LLM**: 4u (44.4%)
- **Erreur Mediane**: 3u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 août 2025, soit 70 jours avant la date actuelle (20 octobre). Le cycle moyen observé entre les commandes précédentes était d'environ 30 à 50 jours. Le délai depuis la dernière commande dépasse largement le cycle habituel et l'horizon de réapprovisionnement de 30 jours. En application du principe de précaution B2B (risque de rupture), un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 3, 5 et 6 unités. La médiane de ces valeurs est de 5. Conformément aux règles de gestion, nous retenons cette médiane pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 177 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>4. [AQUA01] AQUAPAX - natural mineral water 500ml</strong> - LLM: 30u vs Médiane: 40u (Réel: 12u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 30u
- **Baseline calculee**: 30u
- **Mediane historique**: 40u
- **Reel commande**: 12u
- **Erreur LLM**: 18u (150.0%)
- **Erreur Mediane**: 28u (233.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 30u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 05/08/2025, soit 76 jours. L'intervalle précédent était de 50 jours. Le délai actuel dépasse largement le cycle moyen constaté, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement immédiat selon le principe de précaution B2B. ÉTAPE 2 : L'historique récent montre des commandes de 30u et 40u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 30u.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 152 tokens
- **Total**: 1,046 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:33:38: 10u
- 2025-08-05 06:38:25: 7u
- 2025-06-16 12:28:03: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 7u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:33:38: 7u
- 2025-08-05 06:38:25: 2u
- 2025-06-16 12:28:03: 12u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 7u
**Quantite Reelle**: 9u

</details>


<details>
<summary><strong>3. [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:33:38: 5u
- 2025-08-05 06:38:25: 3u
- 2025-06-16 12:28:03: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 9u

</details>


<details>
<summary><strong>4. [AQUA01] AQUAPAX - natural mineral water 500ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:38:25: 30u
- 2025-06-16 12:28:03: 40u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 30u
**Quantite Reelle**: 12u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 10 | Predicted 10u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:37.500Z*
