# Rapport Backtest - Client Duisburg Unverpackt

## Contexte

- **Client** : Duisburg Unverpackt (ID: 328)
- **Commande réelle** : S40086
- **Date commande** : 2025-11-12 13:33:37
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 13
- **Tokens**: 11,656 input + 2,085 output = 13,741 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 12 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 80.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.88 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 41.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 54.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -30.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 5 | 8 | 3.0 | 37.5% | partial | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 5 | 8 | 3.0 | 37.5% | partial | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 4 | 4 | 0.0 | 0.0% | exact | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [MF0029] MF Tarti Datte chili 250g | 3 | 1 | 2.0 | 200.0% | partial | LLM |
| [MF0062] ​MF Tarti Betterave rouge | 2 | 5 | 3.0 | 60.0% | partial | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 4 | 2.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 25 août 2025, soit 78 jours sans réapprovisionnement. L'historique montre une rotation lente mais régulière (environ tous les 3 à 4 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous entrons dans la fenêtre habituelle de commande. En application du principe de précaution B2B et de la règle de la médiane sur l'historique global (1, 2, 2, 3), la quantité retenue est de 2 unités (médiane basse) pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 148 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 5u vs Médiane: 5u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 8u
- **Erreur LLM**: 3u (37.5%)
- **Erreur Mediane**: 3u (37.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 25 août 2025, soit 78 jours avant la date actuelle. L'historique N-1 montre une commande à la même période (5 novembre 2024), confirmant un besoin cyclique en fin d'année. Le délai depuis la dernière commande dépasse largement les cycles habituels, créant un risque de rupture imminent sous 30 jours. En application du principe de précaution B2B et de la règle de la médiane sur l'historique (médiane entre 2, 5, 5 et 8), une quantité de 5 unités est préconisée pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 153 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 5u vs Médiane: 4u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 4u
- **Reel commande**: 8u
- **Erreur LLM**: 3u (37.5%)
- **Erreur Mediane**: 4u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 25 août 2025, soit 78 jours sans réapprovisionnement. Bien que l'historique récent soit limité à une seule commande de 5 unités, le délai écoulé dépasse largement les cycles habituels observés l'année précédente (environ 3 mois entre juillet et novembre). En application du principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 5 unités, correspondant au volume de la commande la plus récente, afin de couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 135 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>4. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 25 août 2025, soit 78 jours avant la date actuelle (11 novembre). L'historique montre des cycles longs et irréguliers (environ 70 à 90 jours). Selon le principe de précaution B2B, le délai depuis la dernière commande ayant atteint un seuil critique par rapport au cycle estimé, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent affiche une commande de 4u. L'historique N-1 sur la même période (novembre 2024) était de 5u. En suivant la règle de la médiane et en privilégiant la valeur la plus prudente entre les volumes récents et historiques, une quantité de 4u est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 214 tokens
- **Total**: 1,134 tokens



</details>


<details>
<summary><strong>5. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 août 2025, soit 78 jours. L'historique N-1 montre des commandes en juillet et novembre, suggérant un cycle de rotation d'environ 3 à 4 mois. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement du stock pour couvrir la période de fin d'année (correspondant à la commande du 05/11 l'an dernier). Le risque de rupture est jugé réel. ÉTAPE 2 : Estimation quantité. L'historique récent est très faible (1u), mais l'historique N-1 sur la même période montre un besoin de 2 à 3 unités. En appliquant le principe de précaution B2B tout en privilégiant la valeur basse pour éviter le surstockage, la médiane historique globale (2u) est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 216 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>6. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 août 2025, soit 78 jours. L'historique montre un cycle de commande moyen d'environ 90 jours (avril à juillet, juillet à novembre). À 78 jours, nous atteignons 86% du cycle moyen, ce qui dépasse le seuil de risque de 70%. Une rupture est probable dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes de 2u, 3u et 4u. La médiane de l'historique complet est de 3u. En respectant le principe de précaution B2B et la règle de choisir la valeur la plus basse en cas de doute sur une rotation faible, la quantité de 3u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 208 tokens
- **Total**: 1,127 tokens



</details>


<details>
<summary><strong>7. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 2u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 25 août 2025, soit 78 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande, le principe de précaution B2B s'applique face à une absence prolongée de réapprovisionnement. Le risque de rupture est considéré comme présent par défaut. ÉTAPE 2 : En l'absence d'historique multiple, la quantité de la dernière commande (2u) est retenue comme référence. Conformément aux règles de rotation faible, on maintient la quantité historique sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 868 tokens
- **Output**: 137 tokens
- **Total**: 1,005 tokens



</details>


<details>
<summary><strong>8. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
Absence de commandes récentes mais présence d'un historique à la même période l'année dernière (novembre 2024). Le produit présente une rotation très faible et ponctuelle. En application du principe de précaution B2B et de la règle sur les rotations faibles (1-2u), une commande est déclenchée pour couvrir le besoin potentiel identifié à cette saison. La quantité est fixée à 2 unités, correspondant strictement à l'historique N-1 disponible.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 111 tokens
- **Total**: 984 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:40:12: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 14:57:12: 1u
- 2024-07-30 10:51:01: 2u
- 2024-04-23 13:02:06: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:40:12: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 14:57:12: 5u
- 2024-07-30 10:51:01: 5u
- 2024-04-23 13:02:06: 2u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:40:12: 5u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 14:57:12: 3u
- 2024-07-30 10:51:01: 2u

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>4. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:40:12: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 14:57:12: 5u
- 2024-07-30 10:51:01: 3u
- 2024-04-23 13:02:06: 3u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:40:12: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 14:57:12: 3u
- 2024-07-30 10:51:01: 2u
- 2024-04-23 13:02:06: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:40:12: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 14:57:12: 3u
- 2024-07-30 10:51:01: 2u
- 2024-04-23 13:02:06: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:40:12: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>8. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 14:57:12: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0058] MF Confi Groseilles Bessen | 2 | Predicted 2u but not ordered |
| [MF0059] MF Confi Fraise- Ardbei | 1 | Predicted 1u but not ordered |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Predicted 2u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 3 | Predicted 3u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:22:10.237Z*
