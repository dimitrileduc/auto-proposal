# Rapport Backtest - Client SMALA LIEGE

## Contexte

- **Client** : SMALA LIEGE (ID: 60536)
- **Commande réelle** : S38457
- **Date commande** : 2025-08-11 10:58:38
- **Date cutoff système** : 2025-08-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 6
- **Tokens**: 5,239 input + 769 output = 6,008 total


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
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 14.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 11.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [RISH03] RISH kombucha BIO - gingembre 330ml | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 4 | 3 | 1.0 | 33.3% | partial | LLM |
| [RISH05] RISH kombucha BIO - rose 750ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 125 jours. Bien que le cycle soit difficile à déterminer, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le délai depuis la dernière commande dépasse largement les seuils de sécurité habituels. Conformément à la règle de la médiane sur l'historique récent et au maintien des quantités pour les faibles rotations, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 117 tokens
- **Total**: 990 tokens



</details>


<details>
<summary><strong>2. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 07/04/2025, soit plus de 120 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue correspond à la valeur de la dernière commande connue (3u), conformément à la règle de maintien des volumes pour les faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 118 tokens
- **Total**: 991 tokens



</details>


<details>
<summary><strong>3. [RISH05] RISH kombucha BIO - rose 750ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 07/04/2025, soit plus de 120 jours sans activité. Bien que la rotation soit très faible, le principe de précaution B2B et l'absence de cycle régulier identifiable imposent de prévoir un réapprovisionnement pour éviter une rupture de stock prolongée sur cette référence. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est fixée à 1 unité, correspondant au volume de la dernière commande.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 116 tokens
- **Total**: 988 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-07 09:14:27: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-07 09:14:27: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [RISH05] RISH kombucha BIO - rose 750ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-07 09:14:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:15:08.053Z*
