# Rapport Backtest - Client DLL AD MARENGO

## Contexte

- **Client** : DLL AD MARENGO (ID: 38818)
- **Commande réelle** : S38924
- **Date commande** : 2025-09-02 09:39:51
- **Date cutoff système** : 2025-09-01 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 12
- **Tokens**: 10,665 input + 1,905 output = 12,570 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.0% | 10 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 75.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 03/06/2025, soit environ 90 jours. Bien que la rotation soit très faible, l'historique de l'année précédente montre une commande en août (N-1). En application du principe de précaution B2B et pour éviter une rupture sur un cycle irrégulier, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique (toutes les commandes passées étant de 1u).

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 125 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit environ 90 jours. Bien que la rotation soit très faible, l'historique montre des commandes espacées de 2 à 3 mois (mai/juin et août). Nous sommes actuellement le 01/09, ce qui correspond à la fenêtre de réapprovisionnement observée l'année précédente (août). Par principe de précaution B2B et pour éviter une rupture sur un cycle long, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique est constant avec des commandes unitaires (1u). La médiane et le mode sont de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1u sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 190 tokens
- **Total**: 1,097 tokens



</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit environ 90 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en août (08/08/2024). En application du principe de précaution B2B et pour éviter une rupture sur un cycle irrégulier, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique complet (récent et N-1) est constant à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 169 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>4. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit environ 90 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (risque de rupture sur l'horizon de 30 jours), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 2u et l'historique N-1 une commande de 3u. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur les produits à faible rotation, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 181 tokens
- **Total**: 1,068 tokens



</details>


<details>
<summary><strong>5. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 03/06/2025, soit environ 90 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels de réapprovisionnement en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent montre une commande de 2u et l'historique N-1 à la même période était de 3u. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 884 tokens
- **Output**: 167 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>6. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 03/06/2025, soit environ 90 jours. Bien que l'historique soit limité à une seule commande récente, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture). Le délai écoulé suggère un besoin de réapprovisionnement imminent pour maintenir le stock. La quantité retenue correspond à la dernière commande connue (3 unités), conformément à la règle de maintien des volumes pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 129 tokens
- **Total**: 1,000 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 11:53:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 13:09:52: 1u
- 2024-05-30 13:30:09: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 11:53:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 13:09:52: 1u
- 2024-05-30 13:30:09: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 11:53:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 13:09:52: 1u
- 2024-05-30 13:30:09: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 11:53:45: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 13:30:09: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 11:53:45: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 13:30:09: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 11:53:45: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:15:40.123Z*
