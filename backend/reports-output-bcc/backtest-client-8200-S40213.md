# Rapport Backtest - Client BONNI, ACHAT

## Contexte

- **Client** : BONNI, ACHAT (ID: 8200)
- **Commande réelle** : S40213
- **Date commande** : 2025-11-12 09:20:47
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 42
- **Tokens**: 37,801 input + 6,285 output = 44,086 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.0% | 25 produits prédits, 4 corrects |
| **Rappel** | 80.0% | 5 produits réels, 4 détectés |
| **F1-Score** | 26.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.75 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 77.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 58.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 77.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 7 | 3 | 4.0 | 133.3% | partial | Non | Non | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 6 | 3 | 3.0 | 100.0% | partial | Non | Non | LLM |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 7u vs Médiane: 7u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 7u
- **Baseline calculee**: 7u
- **Mediane historique**: 7u
- **Reel commande**: 3u
- **Erreur LLM**: 4u (133.3%)
- **Erreur Mediane**: 4u (133.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 7u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles d'environ 60 jours (juin-août, août-septembre). Depuis la dernière commande du 9 septembre, 63 jours se sont écoulés, ce qui dépasse le cycle habituel et présente un risque de rupture imminent dans l'horizon des 30 jours. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité est fixée à 7 unités, correspondant à la médiane des commandes récentes (5, 7, 15), en écartant le pic exceptionnel de 15 unités pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 144 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>2. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 6u vs Médiane: 5u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 5u
- **Reel commande**: 3u
- **Erreur LLM**: 3u (100.0%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique récent montre un cycle de commande d'environ 33 jours (entre le 07/08 et le 09/09). La dernière commande remonte au 09/09, soit 63 jours avant la date actuelle (11/11). Ce délai dépasse largement le cycle moyen constaté et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est critique, une commande est nécessaire par précaution. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes précédentes sont de 5u et 7u. En appliquant la règle de la médiane pour lisser les variations, la quantité recommandée est de 6u.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 172 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>3. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse montre un cycle de commande très espacé (environ 34 jours entre les deux dernières commandes) avec une rotation faible. La dernière commande remonte au 15 juillet 2025, soit 119 jours sans activité. Bien que le délai dépasse largement le cycle habituel, le principe de précaution B2B impose de prévoir un réapprovisionnement pour couvrir un risque de rupture imminent si le client reprend son cycle. En suivant la règle de la médiane sur l'historique récent (1u et 2u) et en privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 151 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 11 juin 2025, soit 153 jours sans activité pour ce produit. Bien que la rotation soit très faible, l'absence de cycle défini et le délai important depuis le dernier mouvement imposent une commande de précaution (principe B2B) pour éviter une rupture de stock prolongée. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est fixée à 2 unités, correspondant à la dernière commande enregistrée.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 114 tokens
- **Total**: 989 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 14:23:24: 7u
- 2025-08-07 09:06:40: 5u
- 2025-06-11 11:47:30: 15u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 7u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-09 14:23:24: 7u
- 2025-08-07 09:06:40: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-15 13:12:56: 2u
- 2025-06-11 11:47:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 11:47:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (21)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3274] JF BURGER SAUCE 925ML | 2 | Predicted 2u but not ordered |
| [PF0096] FILOU MOUTARDE 3 KG | 20 | Predicted 20u but not ordered |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 88 | Predicted 88u but not ordered |
| [PF0075] FILOU CHASSEUR  10 L | 88 | Predicted 88u but not ordered |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 6 | Predicted 6u but not ordered |
| [PF0088] FILOU VOL AU VENT 800 GR | 24 | Predicted 24u but not ordered |
| [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L | 44 | Predicted 44u but not ordered |
| [PF3271] JF WASABI MAYONNAISE 925ML | 4 | Predicted 4u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [PF0093] FILOU MOUTARDE 300GR | 3 | Predicted 3u but not ordered |
| [PF0165] FILOU COCKTAIL FRENKEN 3 L | 10 | Predicted 10u but not ordered |
| [PF0094] FILOU MOUTARDE 700 GR | 3 | Predicted 3u but not ordered |
| [PF0078] FILOU CHASSEUR 5 L | 7 | Predicted 7u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | Predicted 4u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 6 | Predicted 6u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 4 | Predicted 4u but not ordered |
| [JF066] FIL MOUTARDE 300G BOCAL | 4 | Predicted 4u but not ordered |
| [PF1844] FILOU ANDALOUSE SQUEEZE 300ML | 2 | Predicted 2u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de vente, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul car il n'y a aucune demande enregistrée pour ce produit.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:16:03.696Z*
