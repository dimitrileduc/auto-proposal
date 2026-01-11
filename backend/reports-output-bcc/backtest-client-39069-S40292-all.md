# Rapport Backtest - Client SPAR GLABBEEK UNIVAN

## Contexte

- **Client** : SPAR GLABBEEK UNIVAN (ID: 39069)
- **Commande réelle** : S40292
- **Date commande** : 2025-11-12 13:28:54
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 12
- **Tokens**: 11,218 input + 2,015 output = 13,233 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 58.3% | 12 produits prédits, 7 corrects |
| **Rappel** | 87.5% | 8 produits réels, 7 détectés |
| **F1-Score** | 70.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.57 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 36.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | 4 | 1.0 | 25.0% | partial | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF021] JF PICKLES 350 ML | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | 1 | 1.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 60 à 70 jours entre les réapprovisionnements. La dernière commande datant du 25 août 2025 (soit 78 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, présentant un risque de rupture imminent. Conformément à la règle de précaution B2B et à l'analyse de l'historique (2024 et 2025), la quantité commandée est systématiquement de 3 unités. La médiane des commandes récentes étant de 3, cette quantité est retenue pour couvrir les besoins du prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 157 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle d'environ 60 jours entre les dernières commandes (juin à août). Depuis la dernière commande du 25 août 2025, 78 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent. La quantité retenue est de 3 unités, correspondant à la médiane et à la valeur constante observée sur les commandes récentes les plus significatives.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 121 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>3. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 août 2025, soit 78 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande de 3 unités en octobre 2024. En l'absence de commande récente pour couvrir la fin d'année et compte tenu du délai écoulé, il existe un risque de rupture de stock. Par principe de précaution B2B, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes unitaires (1u). La médiane des commandes récentes est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité minimale de 1 unité pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 193 tokens
- **Total**: 1,131 tokens



</details>


<details>
<summary><strong>4. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 août 2025, soit 78 jours. L'historique montre une rotation lente mais régulière avec des intervalles variant de 30 à 90 jours. Étant donné le délai important depuis la dernière commande et l'approche de la fin d'année (période où des commandes ont été passées l'an dernier), il existe un risque de rupture ou un besoin imminent sous 30 jours. Par principe de précaution B2B, le besoin est validé. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité forte autour de 2 unités (médiane de l'historique global). On maintient cette quantité habituelle sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 976 tokens
- **Output**: 182 tokens
- **Total**: 1,158 tokens



</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 août 2025, soit 78 jours avant la date actuelle. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles habituels observés l'année précédente (environ 60-70 jours). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est jugé élevé par principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique montre des commandes de 1u, 2u et un pic récent à 3u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, une quantité de 2 unités est préconisée (moyenne entre le fond de roulement de 1u et le pic de 3u).

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 209 tokens
- **Total**: 1,150 tokens



</details>


<details>
<summary><strong>6. [JF021] JF PICKLES 350 ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
La dernière commande remonte au 26 juin 2025, soit plus de 130 jours sans activité pour ce produit. Bien que la rotation soit très faible, l'historique (2024 et 2025) montre un besoin récurrent de 2 unités à cette période de l'année. En application du principe de précaution B2B et pour éviter une rupture sur un cycle long ou irrégulier, une commande est préconisée. La quantité retenue est de 2 unités, correspondant à la médiane stricte des commandes passées, sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 881 tokens
- **Output**: 135 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>7. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement les cycles observés précédemment. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre des volumes faibles (1u, 2u, 3u). La médiane de l'historique global est de 1.5u. En cas de doute entre deux quantités et pour respecter la règle de ne pas surestimer les produits à faible rotation, la valeur de 2u est retenue (moyenne basse entre la dernière commande et l'historique N-1).

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 200 tokens
- **Total**: 1,123 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:26:37: 3u
- 2025-06-26 06:29:26: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:25:38: 3u
- 2024-07-19 06:30:26: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:26:37: 3u
- 2025-06-26 06:29:26: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:25:38: 1u
- 2024-07-19 06:30:26: 2u
- 2024-06-25 06:23:12: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:26:37: 1u
- 2025-06-26 06:29:26: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:25:38: 3u
- 2024-07-19 06:30:26: 1u
- 2024-06-25 06:23:12: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:26:37: 2u
- 2025-06-26 06:29:26: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:25:38: 3u
- 2024-07-19 06:30:26: 2u
- 2024-06-25 06:23:12: 2u
- 2024-04-16 12:50:41: 2u
- 2024-03-19 15:36:24: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:26:37: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:25:38: 1u
- 2024-07-19 06:30:26: 1u
- 2024-06-25 06:23:12: 1u
- 2024-04-16 12:50:41: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:29:26: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-25 06:23:12: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:29:26: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 07:25:38: 2u
- 2024-04-16 12:50:41: 1u
- 2024-03-19 15:36:24: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Predicted 2u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Predicted 1u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Predicted 2u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LD004] LD Tartinade Tomate Basilic bio 180g | 3 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:10:30.100Z*
