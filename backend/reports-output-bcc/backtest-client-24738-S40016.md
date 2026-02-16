# Rapport Backtest - Client Geuchterhof

## Contexte

- **Client** : Geuchterhof (ID: 24738)
- **Commande réelle** : S40016
- **Date commande** : 2025-10-30 07:25:42
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 6
- **Tokens**: 5,322 input + 938 output = 6,260 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 5 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 68.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 28.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 4 | 2 | 2.0 | 100.0% | partial | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 4 | 5 | 1.0 | 20.0% | partial | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 6 | 5 | 1.0 | 20.0% | partial | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture de stock est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 2 unités. Conformément à la règle de maintien des quantités pour les rotations faibles (1-2u) et à l'utilisation de la médiane historique, la quantité recommandée est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 167 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>2. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 17 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle de réapprovisionnement raisonnable en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane du volume récent, afin de maintenir un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 118 tokens
- **Total**: 1,005 tokens



</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique montre des commandes espacées (avril 2024, novembre 2023). Le délai écoulé depuis la dernière commande dépasse largement les cycles observés précédemment. Par principe de précaution B2B et pour éviter une rupture prolongée sur un produit à faible rotation, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des quantités de 4u et 5u. La médiane et la valeur la plus basse de l'historique récent étant de 4u, cette quantité est retenue pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 189 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent (juin 2025) et N-1 (avril 2024) montre une stabilité parfaite avec des commandes de 4 unités. La médiane est de 4. On maintient cette quantité constante sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 167 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 6u vs Médiane: 5u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 5u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 17 juin 2025, soit plus de 130 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement tout cycle de rotation standard. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. La commande la plus récente (juin 2025) était de 6 unités. En l'absence d'autres données récentes pour calculer une médiane, cette valeur de référence est retenue pour maintenir le stock, tout en restant prudents face à la rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 174 tokens
- **Total**: 1,059 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 07:56:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-25 14:47:34: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 07:56:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-25 14:47:34: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 07:56:52: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-25 14:47:34: 4u
- 2023-11-14 09:04:21: 5u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 07:56:52: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-25 14:47:34: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 07:56:52: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-25 14:47:34: 4u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 5u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:24:11.214Z*
