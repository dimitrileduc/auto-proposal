# Rapport Backtest - Client Sweet Little Belgium

## Contexte

- **Client** : Sweet Little Belgium (ID: 23924)
- **Commande réelle** : S40233
- **Date commande** : 2025-11-12 08:41:22
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 2,707 input + 494 output = 3,201 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 2 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 4.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 4.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 20 | 20 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 juin 2025, soit environ 145 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue pour un produit de type tartinade suggère un besoin de réapprovisionnement imminent ou un risque de rupture de stock en rayon. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est prévue. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 2 unités. Conformément aux règles pour les rotations faibles (1-2u), on maintient la quantité historique sans l'augmenter. La médiane et la valeur la plus basse de l'historique convergent vers 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 182 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 20u vs Médiane: 23u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 20u
- **Baseline calculee**: 20u
- **Mediane historique**: 23u
- **Reel commande**: 20u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 3u (15.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 20u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 19 juin 2025, soit plus de 140 jours sans activité, ce qui dépasse largement les cycles observés. L'historique de l'année précédente montre une activité importante sur la période de novembre (pics à 50u et 180u en 2023). En application du principe de précaution B2B et face à l'incertitude du cycle actuel à l'approche de la période de fin d'année, un besoin est détecté. La quantité est fixée à 20 unités, correspondant à la commande la plus récente, afin de couvrir le besoin sans surstocker par rapport aux volumes médians habituels (hors pics exceptionnels).

**Tokens utilises pour cette prediction:**
- **Input**: 960 tokens
- **Output**: 165 tokens
- **Total**: 1,125 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 06:21:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 06:21:49: 20u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 11:57:02: 10u
- 2024-07-10 11:52:50: 25u
- 2023-12-14 07:23:41: 35u
- 2023-11-28 08:49:46: 180u
- 2023-11-17 07:37:03: 50u

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 20u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:23:54.988Z*
