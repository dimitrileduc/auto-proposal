# Rapport Backtest - Client LA  CORBEILLE BCT SRL

## Contexte

- **Client** : LA  CORBEILLE BCT SRL (ID: 38975)
- **Commande réelle** : S37370
- **Date commande** : 2025-06-11 13:21:51
- **Date cutoff système** : 2025-06-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 8
- **Tokens**: 7,196 input + 1,300 output = 8,496 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 8 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 85.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 41.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 mars 2025, soit environ 89 jours. L'historique montre des commandes espacées (mars et juin en 2024). Avec un seuil de réapprovisionnement de 30 jours et une commande enregistrée à la même période l'année dernière (juin 2024), il existe un risque de rupture ou un besoin de renouvellement de cycle. Par principe de précaution B2B, le besoin est détecté. ÉTAPE 2 : Estimation de la quantité. Le produit présente une rotation très faible et constante de 1 unité par commande. La médiane et le mode de l'historique (récent et N-1) sont de 1u. Conformément aux règles sur les faibles rotations, la quantité de 1 est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 197 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 13 mars 2025, soit environ 89 jours. Bien que l'historique soit limité, la date actuelle (10 juin) correspond à la période de commande de l'année précédente (juin 2024). En application du principe de précaution B2B et face à l'incertitude du cycle de rotation, un besoin est détecté pour éviter une rupture prolongée. La quantité retenue est de 3 unités, correspondant au volume de la commande la plus récente, afin de maintenir le stock sans surstockage excessif.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 135 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>3. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 13 mars 2025, soit environ 89 jours. Bien que l'historique récent soit limité à une seule commande de 2 unités, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 70 jours entre mars et juin 2024). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la valeur de la commande la plus récente, afin de maintenir le stock sans surévaluer.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 143 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 13 mars 2025, soit 89 jours. L'historique N-1 montre une commande le 4 juin 2024, indiquant un besoin saisonnier ou cyclique à cette période de l'année. Le délai depuis la dernière commande dépasse largement les cycles habituels, créant un risque de rupture imminent pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. Le produit présente une rotation très faible et régulière (1 à 2 unités). La médiane des commandes récentes et historiques est de 1 unité. En application du principe de précaution B2B et de la règle sur les faibles rotations, la quantité de 1 unité est retenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 186 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 mars 2025, soit environ 89 jours. Bien que la rotation soit très faible, nous entrons dans la période correspondant à la commande de l'année précédente (juin 2024). En application du principe de précaution B2B et pour éviter une rupture sur un produit à cycle long/irrégulier, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une constante de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 164 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>6. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 mars 2025, soit environ 89 jours. L'historique N-1 montre une commande le 4 juin 2024, indiquant un besoin saisonnier ou cyclique à cette période de l'année. Le délai depuis la dernière commande dépasse largement les cycles habituels, créant un risque de rupture imminent pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes très faibles (1u ou 2u). La médiane des commandes est de 2u. En respectant le principe de précaution B2B sans surestimer le stock, une quantité de 2u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 176 tokens
- **Total**: 1,080 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 12:51:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 13:41:23: 1u
- 2024-03-25 10:05:18: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 12:51:48: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 13:41:23: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 12:51:48: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 13:41:23: 1u
- 2024-03-25 10:05:18: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 12:51:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 13:41:23: 2u
- 2024-03-25 10:05:18: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 12:51:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 13:41:23: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 12:51:48: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 13:41:23: 2u
- 2024-03-25 10:05:18: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:24:16.730Z*
