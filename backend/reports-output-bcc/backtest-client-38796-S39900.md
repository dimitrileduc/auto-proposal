# Rapport Backtest - Client DLL AD DELFILATURE BRAINE

## Contexte

- **Client** : DLL AD DELFILATURE BRAINE (ID: 38796)
- **Commande réelle** : S39900
- **Date commande** : 2025-10-29 11:25:39
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 8
- **Tokens**: 7,214 input + 1,353 output = 8,567 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.9% | 7 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 60.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 133.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 133.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 133.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 1 | 2.0 | 200.0% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 août 2025, soit 76 jours. Bien que la rotation soit faible, l'historique montre des commandes espacées de 1 à 3 mois. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture ou de besoin imminent est présent selon le principe de précaution B2B (cycle irrégulier). ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes de 1, 2 et 3 unités. La médiane de l'historique global est de 2 unités. En suivant la règle de prudence (choisir la valeur la plus basse en cas de doute entre deux quantités types), une commande de 2 unités est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 195 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 août 2025, soit plus de 75 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles observés l'année précédente (mars à juillet). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes de 1u à 2u. La médiane des commandes (2u) est retenue pour maintenir le stock sans surstockage, conformément à la règle de rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 165 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 août 2025, soit 76 jours avant la date actuelle. L'historique montre des cycles de commande espacés (environ 40 à 70 jours). Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle habituel, créant un risque de rupture imminent ou un besoin de réapprovisionnement par précaution pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes très stables entre 1 et 2 unités. La médiane des commandes est de 1,5 unité. En suivant la règle de précaution B2B et en se basant sur la commande la plus récente, une quantité de 2 unités est préconisée pour couvrir la période sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 197 tokens
- **Total**: 1,117 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 08:48:13: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:20:39: 2u
- 2024-07-15 06:42:33: 1u
- 2024-03-06 11:12:16: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 08:48:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 06:42:33: 2u
- 2024-03-06 11:12:16: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 08:48:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:20:39: 1u
- 2024-07-15 06:42:33: 2u
- 2024-03-06 11:12:16: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:13:33.817Z*
