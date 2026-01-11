# Rapport Backtest - Client Les Z'iDées en Vrac

## Contexte

- **Client** : Les Z'iDées en Vrac (ID: 12339)
- **Commande réelle** : S37661
- **Date commande** : 2025-06-25 06:41:21
- **Date cutoff système** : 2025-06-24 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 12,488 input + 2,306 output = 14,794 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 9 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0032] MF Tarti Pois chiches 250 g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 29 janvier 2025, soit environ 146 jours. Bien que l'historique soit très irrégulier et à faible rotation, le principe de précaution B2B s'applique ici car le cycle est difficile à déterminer. Un besoin est donc identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 1u. L'historique N-1 montre des commandes de 2u. Conformément aux règles de gestion des rotations faibles et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u (médiane basse).

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 166 tokens
- **Total**: 1,068 tokens



</details>


<details>
<summary><strong>2. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 29 janvier 2025, soit environ 146 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement les cycles observés précédemment. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 1u. L'historique N-1 montre des quantités de 2u. Conformément à la règle de privilégier la quantité la plus basse en cas de doute et de maintenir 1-2u pour les rotations faibles, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 181 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>3. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 29 janvier 2025, soit environ 146 jours. Bien que l'historique soit très espacé, le délai écoulé dépasse largement les cycles observés précédemment (environ 135 jours entre les commandes de 2023 et 2024). Par principe de précaution B2B et pour éviter une rupture prolongée sur un produit à rotation lente, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique est constant avec des commandes systématiques de 2 unités (médiane = 2). Conformément à la règle de maintien pour les faibles rotations, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 172 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>4. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 29 janvier 2025, soit environ 146 jours. Bien que l'historique soit irrégulier et à faible rotation, le délai écoulé dépasse largement les cycles observés précédemment (environ 100-130 jours entre les commandes de 2023 et 2024). En application du principe de précaution B2B et face à un cycle incertain, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité parfaite avec des commandes systématiques de 2 unités. La médiane est de 2. Conformément aux règles pour les rotations faibles, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 191 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>5. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 29 janvier 2025, soit environ 146 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement tout cycle raisonnable. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 1u. L'historique N-1 montre des commandes de 2u. Conformément aux règles de gestion des rotations faibles (1-2u) et à la consigne de choisir la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 186 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
Le produit présente une rotation très faible et irrégulière (cycle de plusieurs mois). La dernière commande remonte à 146 jours, ce qui dépasse largement les intervalles historiques observés. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture prolongée), un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane stricte et constante de l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 109 tokens
- **Total**: 1,012 tokens



</details>


<details>
<summary><strong>7. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte à 146 jours (29/01/2025), ce qui dépasse largement les cycles historiques observés. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu à la mi-mars l'année précédente. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et historiques, respectant la règle de ne pas surestimer les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 132 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>8. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 29 janvier 2025, soit environ 146 jours. Bien que l'historique soit très espacé, le délai actuel dépasse largement les cycles observés précédemment (environ 100 à 130 jours entre les commandes de 2023 et 2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique complet (récent et N-1) montre une stabilité absolue avec des commandes systématiques de 2 unités. La médiane est de 2. Conformément à la règle sur les rotations faibles, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 191 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>9. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 29 janvier 2025, soit environ 146 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles observés précédemment (environ 90-100 jours entre les commandes de 2023 et 2024). En application du principe de précaution B2B et face à un cycle irrégulier, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique montre des commandes de 2u et 3u. La médiane se situe à 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 201 tokens
- **Total**: 1,103 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-29 14:12:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-14 07:56:40: 2u
- 2023-10-31 07:20:07: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-29 14:12:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-14 07:56:40: 2u
- 2023-10-31 07:20:07: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-29 14:12:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-14 07:56:40: 2u
- 2023-10-31 07:20:07: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-29 14:12:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-14 07:56:40: 2u
- 2023-10-31 07:20:07: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-29 14:12:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-14 07:56:40: 2u
- 2023-10-31 07:20:07: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-29 14:12:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-14 07:56:40: 2u
- 2023-10-31 07:20:07: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-29 14:12:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-14 07:56:40: 3u
- 2023-10-31 07:20:07: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-29 14:12:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-14 07:56:40: 2u
- 2023-10-31 07:20:07: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-29 14:12:49: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-14 07:56:40: 2u
- 2023-10-31 07:20:07: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:24:04.844Z*
