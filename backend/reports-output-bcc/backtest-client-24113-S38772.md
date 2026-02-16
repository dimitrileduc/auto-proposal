# Rapport Backtest - Client Le Potiquet

## Contexte

- **Client** : Le Potiquet (ID: 24113)
- **Commande réelle** : S38772
- **Date commande** : 2025-08-27 06:16:35
- **Date cutoff système** : 2025-08-26 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 26
- **Tokens**: 23,553 input + 3,670 output = 27,223 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.7% | 18 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 28.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 80.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 116.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 80.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [CB005] CB Apple juice 1l | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [CB006] CB Blackcurrant Apple juice 1l | 4 | 1 | 3.0 | 300.0% | partial | LLM |
| [MF0059] MF Confi Fraise- Ardbei | 2 | 2 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [CB005] CB Apple juice 1l</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/07/2025, soit 50 jours. L'intervalle précédent était de 40 jours. Le cycle moyen est estimé à environ 45 jours. Puisque 50 jours se sont écoulés (soit > 70% du cycle), le risque de rupture est imminent dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 3u et 4u. En appliquant la règle de la médiane et le principe de précaution B2B privilégiant la valeur la plus basse en cas de doute, la quantité retenue est de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 913 tokens
- **Output**: 166 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>2. [CB006] CB Blackcurrant Apple juice 1l</strong> - LLM: 4u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 3u (300.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 28 mai 2025, soit environ 90 jours sans activité. Bien que l'historique soit irrégulier et à faible rotation, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés précédemment. Un risque de rupture est identifié pour l'horizon des 30 prochains jours. La quantité retenue est de 4 unités, correspondant à la valeur de la commande la plus récente (médiane du cycle actuel), afin de couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 899 tokens
- **Output**: 129 tokens
- **Total**: 1,028 tokens



</details>


<details>
<summary><strong>3. [MF0059] MF Confi Fraise- Ardbei</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 28 mai 2025, soit environ 90 jours sans activité. En l'absence d'un cycle de commande régulier établi (historique récent limité à une seule commande), le principe de précaution B2B s'applique pour éviter une rupture prolongée. Le risque de rupture est considéré comme présent car nous avons largement dépassé les délais habituels de réapprovisionnement pour un produit de ce type. La quantité retenue est de 2 unités, correspondant à la valeur de la dernière commande connue (médiane), afin de reconstituer un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 142 tokens
- **Total**: 1,011 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [CB005] CB Apple juice 1l</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-07 06:16:13: 3u
- 2025-05-28 06:17:25: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2023-11-02 07:20:57: 1u
- 2023-09-14 11:56:12: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [CB006] CB Blackcurrant Apple juice 1l</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:17:25: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-01-16 07:51:35: 2u
- 2023-09-14 11:56:12: 1u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [MF0059] MF Confi Fraise- Ardbei</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:17:25: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (15)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | Predicted 2u but not ordered |
| [MF0055] MF Noix de cajou - Curry 133g | 2 | Predicted 2u but not ordered |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Predicted 2u but not ordered |
| [MF0030] MF Tarti Mangue Curry 250g  | 4 | Predicted 4u but not ordered |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Predicted 2u but not ordered |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | Predicted 2u but not ordered |
| [MF0034] MF Tarti Pomme Raifort 250g  | 3 | Predicted 3u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | Predicted 2u but not ordered |
| [MF0027] MF Tarti Aubergine 250g  | 2 | Predicted 2u but not ordered |
| [MF0029] MF Tarti Datte chili 250g | 2 | Predicted 2u but not ordered |
| [LB004] LB Blonde (6,5%) 33CL | 1 | Predicted 1u but not ordered |
| [LB002] LB Blonde 75 CL (6,5%) | 3 | Predicted 3u but not ordered |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 2 | Predicted 2u but not ordered |
| [LB003] LB Festive (4,5%) 33CL | 1 | Predicted 1u but not ordered |
| [LB005] LB Amber (5,2%) 33CL | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:21:18.935Z*
