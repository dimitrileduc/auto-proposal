# Rapport Backtest - Client E CENTER ENGELS WIDDERSDORF, E CENTER ENGELS MARSDORF GMBH

## Contexte

- **Client** : E CENTER ENGELS WIDDERSDORF, E CENTER ENGELS MARSDORF GMBH (ID: 48813)
- **Commande réelle** : S38562
- **Date commande** : 2025-08-19 07:04:43
- **Date cutoff système** : 2025-08-18 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 15
- **Tokens**: 13,238 input + 2,262 output = 15,500 total


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
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 16 juin 2025, soit plus de 60 jours. Bien que la rotation soit très faible (1 unité), l'absence d'historique étendu et le délai écoulé créent une incertitude sur le cycle de réapprovisionnement. En application du principe de précaution B2B (Étape 1), un besoin est détecté pour éviter une rupture prolongée. Conformément à l'Étape 2 pour les produits à rotation très faible (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane historique récente.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 139 tokens
- **Total**: 1,013 tokens



</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 04/06/2025, soit 75 jours sans activité. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement (30 jours) crée une incertitude sur le stock résiduel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane historique, sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 187 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>3. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 04/06/2025, soit 75 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'historique plus large, la quantité est basée sur la dernière commande connue (2 unités) pour couvrir un besoin potentiel sans risquer de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 119 tokens
- **Total**: 991 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 10:44:32: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 09:30:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 09:30:59: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:23:27.505Z*
