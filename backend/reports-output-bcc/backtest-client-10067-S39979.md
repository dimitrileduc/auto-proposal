# Rapport Backtest - Client Unverpackt Nürnberg

## Contexte

- **Client** : Unverpackt Nürnberg (ID: 10067)
- **Commande réelle** : S39979
- **Date commande** : 2025-11-12 14:18:28
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 10
- **Tokens**: 8,972 input + 1,540 output = 10,512 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 9 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 80.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 23.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 19.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -23.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0014] MF Olives noires 500g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MF0012] MF Olives Mix 500g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [MF0062] ​MF Tarti Betterave rouge | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [MF0014] MF Olives noires 500g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en septembre et une activité régulière tous les 2 à 4 mois. Le délai depuis la dernière commande dépasse largement le cycle moyen observé, créant un risque de rupture probable pour ce produit à faible rotation. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une dominance de commandes à l'unité (médiane de 1u). Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité minimale de 1u pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 917 tokens
- **Output**: 176 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>2. [MF0012] MF Olives Mix 500g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 130 jours. Bien que l'historique montre une rotation lente et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés précédemment. Un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des commandes constantes de 2u ou 3u. La médiane des commandes historiques est de 3u. Conformément aux règles de maintien des faibles rotations, la quantité retenue est de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 917 tokens
- **Output**: 164 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport à l'historique (commande en mai l'année précédente) crée une incertitude sur le niveau de stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. La dernière commande était de 2u et celle de l'année précédente de 1u. La médiane et la valeur la plus récente suggèrent une quantité de 2u pour maintenir le stock sans risque de surstockage excessif.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 182 tokens
- **Total**: 1,068 tokens



</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte à plus de 4 mois (134 jours), ce qui dépasse largement un cycle de rotation standard. En l'absence d'historique récurrent ou de données N-1, le principe de précaution B2B s'applique car le besoin est incertain mais probable pour reconstituer un stock minimal. La quantité retenue correspond à la dernière commande connue (2u), respectant la règle de maintien des faibles rotations sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 868 tokens
- **Output**: 106 tokens
- **Total**: 974 tokens



</details>


<details>
<summary><strong>5. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit alimentaire. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité absolue à 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 unité est maintenue pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 172 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>6. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente (environ 60 à 120 jours). Un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique (récent et N-1) montre une constance absolue à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 181 tokens
- **Total**: 1,101 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [MF0014] MF Olives noires 500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:48:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:59:37: 1u
- 2024-05-14 07:53:41: 1u
- 2024-03-12 07:28:53: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [MF0012] MF Olives Mix 500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:48:22: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:59:37: 3u
- 2024-05-14 07:53:41: 2u
- 2024-03-12 07:28:53: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:48:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-14 07:53:41: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:48:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:48:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 07:28:53: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:48:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:59:37: 1u
- 2024-05-14 07:53:41: 1u
- 2024-03-12 07:28:53: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0034] MF Tarti Pomme Raifort 250g  | 3 | Predicted 3u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Predicted 1u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:15:22.316Z*
