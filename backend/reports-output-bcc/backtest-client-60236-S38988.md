# Rapport Backtest - Client BRASSERIE MAZIERS (GRAND ENCLOS)

## Contexte

- **Client** : BRASSERIE MAZIERS (GRAND ENCLOS) (ID: 60236)
- **Commande réelle** : S38988
- **Date commande** : 2025-09-05 14:11:59
- **Date cutoff système** : 2025-09-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 2,639 input + 443 output = 3,082 total


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
| **MAE** | 5.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 11.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 15 | 15 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 30 | 20 | 10.0 | 50.0% | partial | Non | Non | LLM |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 5 | 10 | 5.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 15u vs Médiane: 13u (Réel: 15u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 15u
- **Baseline calculee**: 15u
- **Mediane historique**: 13u
- **Reel commande**: 15u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (13.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 15u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 18 juin 2025, soit 78 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour ce type de produit. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : En l'absence de données historiques multiples pour calculer une médiane, la quantité de la dernière commande (15u) est reconduite pour maintenir le stock, conformément à la règle de maintien des volumes sur rotation régulière ou faible.

**Tokens utilises pour cette prediction:**
- **Input**: 879 tokens
- **Output**: 156 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>2. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 30u vs Médiane: 25u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 30u
- **Baseline calculee**: 30u
- **Mediane historique**: 25u
- **Reel commande**: 20u
- **Erreur LLM**: 10u (50.0%)
- **Erreur Mediane**: 5u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 30u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 18 juin 2025, soit 78 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement les cycles de réapprovisionnement standards en B2B pour ce type de boisson. En application du principe de précaution (Étape 1), un besoin est détecté pour éviter une rupture de stock prolongée. La quantité retenue correspond à la seule valeur historique disponible (30u), conformément à la règle de maintien des volumes en cas de rotation régulière ou unique.

**Tokens utilises pour cette prediction:**
- **Input**: 883 tokens
- **Output**: 132 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>3. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM: 5u vs Médiane: 8u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 8u
- **Reel commande**: 10u
- **Erreur LLM**: 5u (50.0%)
- **Erreur Mediane**: 2u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 18 juin 2025, soit 78 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle précis, le délai écoulé est important. En application du principe de précaution B2B (si doute sur le cycle ou rotation → prévoir commande), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : En l'absence d'historique multiple, la quantité de la dernière commande (5u) est utilisée comme référence pour maintenir le stock, conformément à la règle de maintien des rotations faibles/régulières.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 155 tokens
- **Total**: 1,032 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 06:55:56: 15u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 15u
**Quantite Reelle**: 15u

</details>


<details>
<summary><strong>2. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 06:55:56: 30u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 30u
**Quantite Reelle**: 20u

</details>


<details>
<summary><strong>3. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 06:55:56: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 10u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:23:23.321Z*
