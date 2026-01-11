# Rapport Backtest - Client DLL PROXY OUFFET REFFINAM EXPO

## Contexte

- **Client** : DLL PROXY OUFFET REFFINAM EXPO (ID: 38867)
- **Commande réelle** : S39655
- **Date commande** : 2025-10-13 07:36:57
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 25
- **Tokens**: 22,073 input + 3,600 output = 25,673 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 34.8% | 23 produits prédits, 8 corrects |
| **Rappel** | 72.7% | 11 produits réels, 8 détectés |
| **F1-Score** | 47.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 12.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -18.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 09/07/2025, soit plus de 90 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle standard de réapprovisionnement. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 152 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte à 95 jours (09/07/2025), ce qui dépasse largement les cycles observés l'année précédente (environ 85 jours entre mai et août). Bien que la rotation soit très faible, le principe de précaution B2B s'applique car le délai depuis la dernière commande suggère un besoin imminent ou un stock épuisé. Conformément aux règles de gestion des faibles rotations, la quantité retenue est de 1 unité, correspondant au volume de la commande la plus récente.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 120 tokens
- **Total**: 1,023 tokens



</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit 95 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels observés entre les années précédentes. En application du principe de précaution B2B (mieux vaut prévenir une rupture incertaine), un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité stricte à 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique) pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 180 tokens
- **Total**: 1,068 tokens



</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 09/07/2025, soit plus de 90 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels de réapprovisionnement en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent montre une commande de 2 unités. Conformément à la règle de maintien des quantités pour les rotations faibles et l'utilisation de la médiane historique, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 145 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>5. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit plus de 90 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 3 mois entre mai et août). Par principe de précaution B2B et pour éviter une rupture prolongée sur un produit à faible rotation, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une constance absolue de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 171 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>6. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 09/07/2025, soit plus de 90 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 85 jours entre mai et août). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : L'historique montre des quantités de 1u (récent) et 2u (N-1). Conformément à la règle de privilégier la valeur la plus basse en cas de doute et de maintenir les faibles rotations, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 174 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>7. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le produit présente une rotation très faible avec une seule commande enregistrée il y a 95 jours (9 juillet). Bien que le cycle soit difficile à établir, le principe de précaution B2B s'applique face à l'absence d'historique long terme. Un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée si une demande survient. ÉTAPE 2 : En suivant la règle des rotations très faibles (1-2u) et la médiane historique, la quantité est fixée à 1 unité pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 137 tokens
- **Total**: 1,011 tokens



</details>


<details>
<summary><strong>8. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 09/07/2025, soit 95 jours sans activité. Bien que la rotation soit très faible (1u), l'absence de cycle défini et le principe de précaution B2B imposent de prévoir un réapprovisionnement pour éviter une rupture prolongée si un besoin survient dans les 30 prochains jours. Conformément aux règles de rotation faible, la quantité est maintenue à la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 111 tokens
- **Total**: 985 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:12:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:12:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 13:53:29: 2u
- 2024-05-27 07:28:09: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:12:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-27 07:28:09: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:12:47: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 13:53:29: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:12:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 13:53:29: 1u
- 2024-05-27 07:28:09: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:12:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 13:53:29: 2u
- 2024-05-27 07:28:09: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:12:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:12:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (15)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Predicted 2u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:18:47.562Z*
