# Rapport Backtest - Client E-CENTER VIELER

## Contexte

- **Client** : E-CENTER VIELER (ID: 38886)
- **Commande réelle** : S40342
- **Date commande** : 2025-11-13 12:51:40
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 35
- **Tokens**: 32,813 input + 5,266 output = 38,079 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 13.6% | 22 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 24.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 5.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 80.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 80.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -80.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 6 | 5.0 | 83.3% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 7 | 5.0 | 71.4% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 7 | 6.0 | 85.7% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 6u
- **Erreur LLM**: 5u (83.3%)
- **Erreur Mediane**: 5u (83.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 13 octobre 2025, soit 30 jours avant la date actuelle. Le cycle historique montre une fréquence de commande environ tous les 30 à 60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou le besoin de renouvellement est probable (principe de précaution B2B). La quantité est fixée à 1 unité, correspondant à la médiane et au mode des commandes récentes et historiques pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 122 tokens
- **Total**: 1,129 tokens



</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 7u
- **Erreur LLM**: 5u (71.4%)
- **Erreur Mediane**: 6u (85.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 13 octobre 2025, soit il y a 30 jours. L'historique de l'année précédente montre une activité régulière sur la période octobre-novembre (commandes en septembre et octobre). Le cycle de commande récent semble s'espacer d'environ 60 à 70 jours, mais compte tenu du seuil de réapprovisionnement de 30 jours et du principe de précaution B2B, un risque de rupture est identifié. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur constante des commandes récentes de 2025.

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 147 tokens
- **Total**: 1,169 tokens



</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 7u
- **Erreur LLM**: 6u (85.7%)
- **Erreur Mediane**: 6u (85.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
Le produit présente une rotation très faible mais régulière (1 unité par commande). La dernière commande remonte au 05/08/2025, soit plus de 90 jours. Bien que le cycle soit lent, l'historique N-1 montre une activité en octobre et fin d'année. En application du principe de précaution B2B et pour éviter une rupture sur un produit à faible rotation, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 129 tokens
- **Total**: 1,083 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:49:36: 1u
- 2025-08-05 06:32:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-29 07:25:39: 1u
- 2024-09-13 12:00:40: 2u
- 2024-07-29 07:18:47: 1u
- 2024-06-24 06:58:55: 1u
- 2024-05-16 08:14:43: 1u
- 2024-04-23 08:30:54: 1u
- 2024-03-27 12:39:41: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 07:49:36: 2u
- 2025-08-05 06:32:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-10 06:56:45: 1u
- 2024-09-13 12:00:40: 1u
- 2024-08-20 06:54:51: 1u
- 2024-07-29 07:18:47: 1u
- 2024-06-04 08:17:02: 2u
- 2024-04-23 08:30:54: 2u
- 2024-03-27 12:39:41: 0u
- 2024-03-12 14:53:16: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 06:32:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-10 06:56:45: 1u
- 2024-08-20 06:54:51: 1u
- 2024-06-04 08:17:02: 1u
- 2024-05-16 08:14:43: 1u
- 2024-03-27 12:39:41: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 7u

</details>




---

## False Positives (19)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Predicted 2u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Predicted 2u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Predicted 2u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [DIS0004] Display JF bois | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:07:25.836Z*
