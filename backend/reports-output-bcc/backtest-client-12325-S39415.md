# Rapport Backtest - Client Unverpackt im Weschnitztal

## Contexte

- **Client** : Unverpackt im Weschnitztal (ID: 12325)
- **Commande réelle** : S39415
- **Date commande** : 2025-09-29 06:18:13
- **Date cutoff système** : 2025-09-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 13
- **Tokens**: 11,918 input + 2,050 output = 13,968 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 58.3% | 12 produits prédits, 7 corrects |
| **Rappel** | 100.0% | 7 produits réels, 7 détectés |
| **F1-Score** | 73.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 26.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -38.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0051] MF Kidney Beans 500g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 3 | 6 | 3.0 | 50.0% | partial | Non | Non | LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [MF0051] MF Kidney Beans 500g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 avril 2025, soit 153 jours sans activité. Bien que la rotation soit très faible, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B. Un besoin peut survenir à tout moment après une telle période d'inactivité. ÉTAPE 2 : Estimation quantité. En l'absence d'historique multiple, on se base sur la dernière quantité commandée (3u). Conformément aux règles de rotation faible, on maintient ce volume sans l'augmenter pour éviter le surstockage tout en couvrant un éventuel besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 157 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>2. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 153 jours (avril 2025), ce qui dépasse largement les cycles observés historiquement (environ 60-90 jours en 2024). Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu à la même période l'année précédente (juillet/août). Conformément à la règle des rotations faibles (1-2u), la quantité retenue est la médiane historique la plus basse, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 145 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>3. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 3u vs Médiane: 3u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 6u
- **Erreur LLM**: 3u (50.0%)
- **Erreur Mediane**: 3u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre une rotation lente mais régulière avec un cycle de commande moyen d'environ 3 à 4 mois. La dernière commande remontant au 28 avril 2025 (soit 153 jours), le délai dépasse largement le cycle habituel, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement certain. En application du principe de précaution B2B et de la règle de la médiane sur les commandes récentes (3u), une commande de 3 unités est préconisée pour couvrir les besoins des 30 prochains jours sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 139 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28/04/2025, soit 153 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande fin juillet et une en novembre. Le délai depuis la dernière commande dépasse largement tout cycle régulier, créant un doute sur le niveau de stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est nécessaire. ÉTAPE 2 : Estimation. L'historique récent et N-1 montre une récurrence de 1u (médiane). Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1u sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 174 tokens
- **Total**: 1,095 tokens



</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 28 avril 2025, soit 153 jours sans réapprovisionnement. Bien que la rotation soit très faible et irrégulière, l'historique N-1 montre une commande à la même période (31 juillet 2024) et une fréquence de 2 à 3 commandes par an. En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à faible rotation, un besoin est détecté. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la règle de maintien des faibles rotations (1-2u).

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 146 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>6. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière. La dernière commande remonte à 153 jours (avril 2025), ce qui dépasse largement les cycles historiques observés en 2024 (environ 60 à 90 jours). Selon le principe de précaution B2B, un délai aussi long sans commande sur un produit actif indique un risque imminent de rupture ou un besoin de réapprovisionnement pour maintenir le stock en rayon. En suivant la règle des rotations faibles (1-2u) et en privilégiant la valeur la plus basse pour éviter le surstockage, la quantité recommandée est de 1 unité (médiane basse de l'historique).

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 154 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>7. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 avril 2025, soit 153 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande fin juillet et une autre en octobre. Avec un seuil de réapprovisionnement de 30 jours et une absence de commande depuis 5 mois, le risque de rupture ou le besoin de renouvellement du stock est probable selon le principe de précaution B2B. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité quasi constante à 1 unité (médiane = 1). Conformément aux règles sur les rotations faibles, on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 172 tokens
- **Total**: 1,108 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [MF0051] MF Kidney Beans 500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-28 08:22:31: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-28 08:22:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 06:18:33: 1u
- 2024-04-23 07:51:03: 2u
- 2024-02-29 09:40:20: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-28 08:22:31: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 06:18:33: 3u
- 2024-04-23 07:51:03: 3u
- 2024-02-29 09:40:20: 2u
- 2023-11-21 07:35:13: 2u
- 2023-10-06 06:41:58: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-28 08:22:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 06:18:33: 1u
- 2024-04-23 07:51:03: 1u
- 2023-11-21 07:35:13: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-28 08:22:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 06:18:33: 1u
- 2024-04-23 07:51:03: 1u
- 2024-02-29 09:40:20: 2u
- 2023-11-21 07:35:13: 2u
- 2023-10-06 06:41:58: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-28 08:22:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 06:18:33: 1u
- 2024-04-23 07:51:03: 2u
- 2024-02-29 09:40:20: 2u
- 2023-10-06 06:41:58: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-28 08:22:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 06:18:33: 1u
- 2024-04-23 07:51:03: 1u
- 2023-11-21 07:35:13: 2u
- 2023-10-06 06:41:58: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [RF003] REFIELD Maïs 500G  | 3 | Predicted 3u but not ordered |
| [MF0021] MF Sauce BBQ 250ml | 1 | Predicted 1u but not ordered |
| [MF0047] MF Mayonnaise 250ml | 1 | Predicted 1u but not ordered |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Predicted 1u but not ordered |
| [MF0030] MF Tarti Mangue Curry 250g  | 3 | Predicted 3u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:19:18.583Z*
