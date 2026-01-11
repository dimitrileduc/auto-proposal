# Rapport Backtest - Client ARSENE - TRAVIE

## Contexte

- **Client** : ARSENE - TRAVIE (ID: 60156)
- **Commande réelle** : S39660
- **Date commande** : 2025-10-16 06:45:53
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 2,628 input + 468 output = 3,096 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 3 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 13.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 235.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 235.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 235.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 17 | 5 | 12.0 | 240.0% | partial | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 16 | 6 | 10.0 | 166.7% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 24 | 6 | 18.0 | 300.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 17u vs Médiane: 17u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 17u
- **Baseline calculee**: 17u
- **Mediane historique**: 17u
- **Reel commande**: 5u
- **Erreur LLM**: 12u (240.0%)
- **Erreur Mediane**: 12u (240.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 17u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 juin 2025, soit environ 119 jours. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement les cycles de réapprovisionnement standards en B2B pour ce type de produit. En application du principe de précaution et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. En l'absence d'historique multiple, la quantité de la dernière commande (17u) est utilisée comme référence médiane pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 153 tokens
- **Total**: 1,029 tokens



</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 16u vs Médiane: 16u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 6u
- **Erreur LLM**: 10u (166.7%)
- **Erreur Mediane**: 10u (166.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 juin 2025, soit environ 119 jours. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement le cycle de rotation standard pour un produit de type chips bio. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. En l'absence d'historique multiple, la quantité de la dernière commande (16u) est utilisée comme référence médiane pour maintenir le stock initialement testé.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 157 tokens
- **Total**: 1,033 tokens



</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 24u vs Médiane: 24u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 24u
- **Baseline calculee**: 24u
- **Mediane historique**: 24u
- **Reel commande**: 6u
- **Erreur LLM**: 18u (300.0%)
- **Erreur Mediane**: 18u (300.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 24u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 juin 2025, soit 119 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement tout cycle de rotation standard pour un produit de type chips. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple, la quantité de la dernière commande (24u) est utilisée comme référence pour maintenir le stock initialement mis en place.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 158 tokens
- **Total**: 1,034 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 13:18:08: 17u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 17u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 13:18:08: 16u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 13:18:08: 24u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 24u
**Quantite Reelle**: 6u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:29:19.635Z*
