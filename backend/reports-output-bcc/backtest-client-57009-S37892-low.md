# Rapport Backtest - Client Bäckerei Fonk - Spar Express

## Contexte

- **Client** : Bäckerei Fonk - Spar Express (ID: 57009)
- **Commande réelle** : S37892
- **Date commande** : 2025-07-10 09:25:40
- **Date cutoff système** : 2025-07-09 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 15
- **Tokens**: 13,225 input + 2,330 output = 15,555 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 9 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF071] FIL CARBONNADES 800G BOCAL  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [FIL19] FIL VOL AU VENT 400G BOCAL | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF066] FIL MOUTARDE 300G BOCAL | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [JF071] FIL CARBONNADES 800G BOCAL </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 février 2025, soit plus de 140 jours. Bien que la rotation soit extrêmement faible, l'absence de commande sur une période aussi longue pour un produit de fond de rayon (Bocal) crée une incertitude sur l'état du stock. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), une commande est préconisée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1u pour couvrir le besoin sans risquer de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 177 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>2. [FIL19] FIL VOL AU VENT 400G BOCAL</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 février 2025, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de visibilité sur un cycle régulier impose l'application du principe de précaution B2B. Le risque de rupture est considéré comme présent par défaut de données de récurrence. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique disponible) pour éviter un surstockage inutile tout en assurant une présence minimale en rayon.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 171 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>3. [JF066] FIL MOUTARDE 300G BOCAL</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 février 2025, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée une incertitude sur l'état du stock. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité à 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 177 tokens
- **Total**: 1,049 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF071] FIL CARBONNADES 800G BOCAL </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-18 15:28:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [FIL19] FIL VOL AU VENT 400G BOCAL</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-18 15:28:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF066] FIL MOUTARDE 300G BOCAL</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-18 15:28:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [JF072] FIL BOULETTES SAUCE CHASSEUR 800G BOCAL  | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:20:09.534Z*
