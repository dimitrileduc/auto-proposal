# Rapport Backtest - Client CARREFOUR BELGIUM SA, CRF MARKET GROENE VALLEI GENT

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CRF MARKET GROENE VALLEI GENT (ID: 56315)
- **Commande réelle** : S39502
- **Date commande** : 2025-10-02 08:07:46
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 11
- **Tokens**: 9,744 input + 1,805 output = 11,549 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 45.5% | 11 produits prédits, 5 corrects |
| **Rappel** | 50.0% | 10 produits réels, 5 détectés |
| **F1-Score** | 47.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.80 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 66.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 70.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 66.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 1 | 2.0 | 200.0% | partial | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 2 | 1.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 juin 2025, soit plus de 110 jours. Bien que la rotation soit extrêmement faible (produit de niche ou très longue conservation), le délai écoulé depuis la dernière commande dépasse largement un cycle trimestriel classique. En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une constante de 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité, soit la médiane stricte de l'historique disponible.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 177 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>2. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 10 juin 2025, soit plus de 110 jours. Bien que la rotation soit très faible, l'historique montre une commande annuelle à cette période l'année précédente (mai/juin). En B2B, le principe de précaution s'applique pour éviter une rupture sur un produit à rotation lente mais constante. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre une quantité constante de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 162 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 juin 2025, soit plus de 110 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (risque de rupture si le stock est épuisé depuis la dernière vente), un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité parfaite à 2 unités. Conformément à la règle sur les rotations faibles (1-2u), la quantité de 2 unités est maintenue pour couvrir le besoin sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 162 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 10 juin 2025, soit 113 jours sans activité. Bien que la rotation soit faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit alimentaire. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande de 3 unités, tandis que l'année précédente à la même période, la commande était de 1 unité. En suivant la règle de la médiane et de la stabilité sur les faibles rotations, la quantité de 3 unités est retenue pour maintenir le stock sans surstockage excessif.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 182 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 juin 2025, soit plus de 110 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (risque de rupture sur un horizon de 30 jours), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 3 unités, tandis que l'année précédente à la même période, la commande était de 1 unité. Conformément à la règle de privilégier la médiane du volume récent pour maintenir le stock sans surestimer, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 171 tokens
- **Total**: 1,061 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:33:12: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 08:00:08: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:33:12: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 08:00:08: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:33:12: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 08:00:08: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:33:12: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 08:00:08: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:33:12: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 08:00:08: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Predicted 2u but not ordered |


---

## False Negatives (5)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | Never ordered in previous analysis window (no history) |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Never ordered in previous analysis window (no history) |
| [JF021] JF PICKLES 350 ML | 3 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:15:48.763Z*
