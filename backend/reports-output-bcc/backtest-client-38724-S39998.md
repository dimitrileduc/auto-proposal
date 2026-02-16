# Rapport Backtest - Client CORA S.A.

## Contexte

- **Client** : CORA S.A. (ID: 38724)
- **Commande réelle** : S39998
- **Date commande** : 2025-10-29 13:29:02
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 18
- **Tokens**: 16,808 input + 3,109 output = 19,917 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 17.6% | 17 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 30.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 22.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -18.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF037] JF BBQ SQUEEZE 300ML | 2 | 6 | 4.0 | 66.7% | partial | LLM |
| [JF073] FIL BOULLETTES SAUCE TOMATE 800G BOCAL  | 8 | 8 | 0.0 | 0.0% | exact | LLM |
| [JF071] FIL CARBONNADES 800G BOCAL  | 8 | 8 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 6u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 6u
- **Reel commande**: 6u
- **Erreur LLM**: 4u (66.7%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence irrégulière avec une dernière commande effectuée il y a 12 jours (16 octobre). Bien que le cycle moyen soit difficile à établir précisément, le principe de précaution B2B s'applique car nous entrons dans la fenêtre de réapprovisionnement de 30 jours. La médiane des quantités récentes (1, 6, 5, 2, 1) est de 2 unités. En suivant la règle de privilégier la médiane et d'éviter la surestimation face à des pics ponctuels (comme les 5u et 6u de septembre), une commande de 2 unités est préconisée pour couvrir le risque de rupture sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 162 tokens
- **Total**: 1,101 tokens



</details>


<details>
<summary><strong>2. [JF073] FIL BOULLETTES SAUCE TOMATE 800G BOCAL </strong> - LLM: 8u vs Médiane: 8u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 8u
- **Reel commande**: 8u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence irrégulière (allant de 5 jours à plus de 2 mois), mais la dernière commande remonte au 16 octobre, soit il y a 12 jours. Compte tenu du seuil de réapprovisionnement de 30 jours et de l'imprévisibilité du cycle, un risque de rupture existe par précaution B2B. La quantité historique est strictement constante à 8 unités sur toutes les commandes récentes. En suivant la règle de maintien de la quantité régulière, la prévision est fixée à 8 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 929 tokens
- **Output**: 132 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>3. [JF071] FIL CARBONNADES 800G BOCAL </strong> - LLM: 8u vs Médiane: 20u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 20u
- **Reel commande**: 8u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 12u (150.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 08/09/2025, soit 50 jours d'inactivité. Bien que le cycle initial semble court (5 jours), l'absence de commande depuis plus de 7 semaines sur un produit de type bocal suggère soit une rupture, soit un cycle irrégulier. En application du principe de précaution B2B (si doute sur le cycle ou rotation -> prévoir), un besoin est détecté pour couvrir les 30 prochains jours. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une stabilité parfaite avec deux commandes de 8 unités. La médiane et la quantité constante étant de 8, ce volume est retenu pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 181 tokens
- **Total**: 1,070 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-16 07:19:03: 1u
- 2025-09-08 07:10:00: 6u
- 2025-09-03 14:20:33: 5u
- 2025-07-04 08:16:41: 2u
- 2025-06-16 09:52:21: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [JF073] FIL BOULLETTES SAUCE TOMATE 800G BOCAL </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-16 07:19:03: 8u
- 2025-09-08 07:10:00: 8u
- 2025-09-03 14:20:33: 8u
- 2025-07-04 08:16:41: 8u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>3. [JF071] FIL CARBONNADES 800G BOCAL </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 07:10:00: 8u
- 2025-09-03 14:20:33: 8u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 8u

</details>




---

## False Positives (14)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 15 | Predicted 15u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 6 | Predicted 6u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 16 | Predicted 16u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 5 | Predicted 5u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 7 | Predicted 7u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 16 | Predicted 16u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 5 | Predicted 5u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 13 | Predicted 13u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 9 | Predicted 9u but not ordered |
| [JF068] FIL VOL AU VENT 800G BOCAL  | 16 | Predicted 16u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 4 | Predicted 4u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 5 | Predicted 5u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 3 | Predicted 3u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 5 | Predicted 5u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:02.315Z*
