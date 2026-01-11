# Rapport Backtest - Client CRF MARKET CINEY CENTRE

## Contexte

- **Client** : CRF MARKET CINEY CENTRE (ID: 72468)
- **Commande réelle** : S39102
- **Date commande** : 2025-09-17 06:32:54
- **Date cutoff système** : 2025-09-16 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 31
- **Tokens**: 27,465 input + 5,108 output = 32,573 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 58.8% | 17 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 74.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 29.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 45 jours (41 jours entre mai et juin, 51 jours entre juin et août). Depuis la dernière commande du 08/08/2025, 39 jours se sont écoulés, ce qui représente plus de 85% du cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (2, 3, 2) et à la valeur la plus basse en cas de doute, conformément aux règles de gestion des stocks à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 176 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>2. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle moyen entre les commandes est d'environ 50 jours (41 jours entre mai et juin, 51 jours entre juin et août). La dernière commande date du 08/08/2025, soit 39 jours écoulés. Ce délai représente environ 78% du cycle moyen, dépassant le seuil de risque de 70%. Un besoin est donc identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : L'historique récent montre des quantités de 1u, 2u et 2u. La médiane de ces commandes est de 2u. Conformément au principe de précaution B2B et à la stabilité de la rotation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 175 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>3. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle observé entre les deux dernières commandes est de 91 jours. La dernière commande date du 08/08/2025, soit 39 jours avant la date actuelle. Bien que nous ne soyons qu'à environ 43% du cycle moyen, l'historique est très limité (seulement deux points de données), ce qui rend le cycle incertain. En application du principe de précaution B2B (incertitude sur le cycle = prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes constantes de 2 unités. La médiane est de 2. Conformément aux règles pour les rotations faibles et régulières, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 197 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>4. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 91 jours. La dernière commande date du 08/08/2025, soit il y a 39 jours. Bien que nous soyons à environ 43% du cycle moyen, la rotation est faible et irrégulière. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture sur un produit bio à faible rotation), un réapprovisionnement est préconisé pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : L'historique récent montre une constance stricte avec des commandes de 2 unités. La médiane et la règle de maintien des rotations régulières (3-5 dernières identiques ou ici 100% de l'historique) imposent une quantité de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 193 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : L'historique montre un cycle de commande d'environ 90 jours (mai à août). Depuis la dernière commande du 08/08/2025, 39 jours se sont écoulés. Bien que nous ne soyons pas encore au terme du cycle théorique, la rotation est irrégulière et le principe de précaution B2B s'applique pour éviter une rupture dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 (ESTIMATION QUANTITÉ) : Les commandes récentes sont de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 182 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>6. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 40 à 51 jours. La dernière commande datant du 08/08/2025 (il y a 39 jours), nous atteignons 75% du cycle moyen, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, bien que la dernière commande fût de 3 unités, l'historique précédent montre une base constante de 1 unité. Conformément à la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage sur des produits à faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 177 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>7. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 08/08/2025, soit 39 jours. Les intervalles précédents étaient de 51 et 40 jours (moyenne ~45 jours). À 39 jours, nous avons atteint 86% du cycle moyen, ce qui dépasse le seuil de risque de 70%. Un réapprovisionnement est nécessaire pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 1u, 2u et 3u. La médiane de ces commandes est de 2u. Conformément à la règle de privilégier la médiane et la prudence en B2B, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 186 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>8. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'intervalle entre les deux dernières commandes est de 91 jours. La dernière commande date du 08/08/2025, soit 39 jours avant la date actuelle. Bien que nous ne soyons qu'à environ 43% du cycle précédent, la rotation est très faible et irrégulière. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture sur un produit à faible rotation), un réapprovisionnement est préconisé. ÉTAPE 2 : Estimation quantité. L'historique montre des commandes de 1u et 2u. Conformément aux règles de gestion des rotations faibles (1-2u) et au choix de la valeur la plus basse en cas de doute pour ne pas surestimer le stock, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 201 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>9. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 18 juin 2025, soit environ 90 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement le cycle précédent (40 jours entre mai et juin). En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la valeur basse de l'historique récent pour éviter un surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 125 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>10. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse montre un cycle de commande irrégulier avec une dernière commande datant de 90 jours (18 juin). Bien que la rotation soit faible, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés précédemment, créant une incertitude sur le stock actuel. En l'absence d'historique N-1, la quantité est déterminée par la médiane des commandes récentes (médiane entre 1u et 3u = 2u). Cette quantité modérée permet de couvrir le besoin sans risque de surstockage excessif pour ce format spécifique.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 140 tokens
- **Total**: 1,031 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-08 11:45:15: 2u
- 2025-06-18 06:19:53: 3u
- 2025-05-09 12:28:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-08 11:45:15: 1u
- 2025-06-18 06:19:53: 2u
- 2025-05-09 12:28:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-08 11:45:15: 2u
- 2025-05-09 12:28:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-08 11:45:15: 2u
- 2025-05-09 12:28:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-08 11:45:15: 2u
- 2025-05-09 12:28:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-08 11:45:15: 3u
- 2025-06-18 06:19:53: 1u
- 2025-05-09 12:28:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-08 11:45:15: 2u
- 2025-06-18 06:19:53: 3u
- 2025-05-09 12:28:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-08 11:45:15: 2u
- 2025-05-09 12:28:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 06:19:53: 2u
- 2025-05-09 12:28:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 06:19:53: 3u
- 2025-05-09 12:28:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Predicted 2u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:15:11.256Z*
