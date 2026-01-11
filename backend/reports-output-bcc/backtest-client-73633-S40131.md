# Rapport Backtest - Client les jardins d'arquennes

## Contexte

- **Client** : les jardins d'arquennes (ID: 73633)
- **Commande réelle** : S40131
- **Date commande** : 2025-11-05 10:27:41
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 46
- **Tokens**: 40,500 input + 6,699 output = 47,199 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 22.2% | 18 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 36.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [UPI09] Jus de pomme-orange bio d'UPIGNY 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Le cycle de commande observé est d'environ 68 jours (entre juillet et septembre). Au 4 novembre, 48 jours se sont écoulés depuis la dernière commande, ce qui représente environ 70% du cycle moyen. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent durant cette période. En application du principe de précaution B2B et face à une rotation faible mais régulière, la quantité retenue correspond à la médiane constante des commandes précédentes, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 121 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>2. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle observé entre les deux dernières commandes est de 68 jours. La dernière commande date du 17 septembre, soit il y a 48 jours. Le ratio (48/68) est de 70,5%, ce qui dépasse le seuil de risque de 70%. Compte tenu du délai de réapprovisionnement de 30 jours, il existe un risque de rupture imminent. ÉTAPE 2 : Estimation quantité. L'historique récent montre une consommation constante de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 161 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>3. [UPI09] Jus de pomme-orange bio d'UPIGNY 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre, soit 48 jours. Le cycle précédent était de 68 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique (48 + 30 = 78 jours, dépassant le cycle moyen observé). Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre une consommation constante et très faible de 1 unité par commande. La médiane est de 1. Conformément aux règles sur les rotations faibles, on maintient la quantité minimale historique.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 156 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>4. [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande d'environ 68 jours (entre juillet et septembre). La dernière commande date du 17 septembre, soit il y a 48 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 78 jours d'ici la fin de la période de vigilance, ce qui dépasse le cycle moyen observé. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. Les deux dernières commandes sont identiques (1u). La médiane et la tendance constante indiquent un besoin de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 153 tokens
- **Total**: 1,048 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 06:39:33: 1u
- 2025-07-11 06:37:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 06:39:33: 1u
- 2025-07-11 06:37:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [UPI09] Jus de pomme-orange bio d'UPIGNY 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 06:39:33: 1u
- 2025-07-11 06:37:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 06:39:33: 1u
- 2025-07-11 06:37:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (14)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Predicted 1u but not ordered |
| [MF0052] MF Pois chiches  500g | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:23:09.435Z*
