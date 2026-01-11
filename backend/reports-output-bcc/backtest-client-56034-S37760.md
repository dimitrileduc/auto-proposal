# Rapport Backtest - Client CARREFOUR BELGIUM SA, CRF Nivelles Arbaletriers (53)

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CRF Nivelles Arbaletriers (53) (ID: 56034)
- **Commande réelle** : S37760
- **Date commande** : 2025-06-30 12:59:13
- **Date cutoff système** : 2025-06-29 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 17
- **Tokens**: 14,773 input + 2,246 output = 17,019 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 41.7% | 12 produits prédits, 5 corrects |
| **Rappel** | 71.4% | 7 produits réels, 5 détectés |
| **F1-Score** | 52.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 20.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 14 mars 2025, soit plus de 100 jours sans activité. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit alimentaire. En application du principe de précaution B2B (doute sur le cycle = prévoir commande) et pour éviter une rupture prolongée sur un horizon de 30 jours, un réapprovisionnement est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale historique sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 171 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 mars 2025, soit plus de 100 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 153 tokens
- **Total**: 1,028 tokens



</details>


<details>
<summary><strong>3. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 107 jours (14 mars). Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité est fixée à 1 unité, correspondant à la médiane et à la seule valeur de l'historique récent, conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 118 tokens
- **Total**: 993 tokens



</details>


<details>
<summary><strong>4. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 14 mars 2025, soit plus de 100 jours sans activité pour ce produit. Bien que la rotation soit très faible, l'absence de données historiques sur une période plus longue crée une incertitude sur le cycle de réapprovisionnement. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture prolongée), une commande est préconisée. La quantité retenue est de 2 unités, correspondant à la médiane (et unique valeur) de l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 142 tokens
- **Total**: 1,013 tokens



</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Absence totale d'historique de commandes (récentes et N-1). Selon le principe de précaution B2B et la règle de détection du besoin en cas de doute ou d'absence de cycle déterminé, une commande doit être prévue pour éviter une rupture potentielle ou assurer le référencement. ÉTAPE 2 : Pour un produit sans historique et à rotation inconnue, la règle des cas particuliers (rotation faible/incertaine) impose de maintenir une quantité minimale de 1 unité afin de limiter le risque de surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 862 tokens
- **Output**: 134 tokens
- **Total**: 996 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-14 07:49:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-14 07:49:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-14 07:49:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-14 07:49:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Predicted 2u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Product analyzed but LLM -> 0 - client ordered 2u |


### Details des Predictions LLM pour FN (2 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de vente établi, il est impossible de justifier un besoin de réapprovisionnement immédiat. Le risque de rupture ne peut être évalué, entraînant une décision de non-commande par défaut de demande constatée.

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur la période récente et sur l'année précédente (N-1). En l'absence de données permettant d'établir un cycle de rotation ou une demande de référence, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est considéré comme nul faute de consommation enregistrée.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:28:28.598Z*
