# Rapport Backtest - Client Hoornaert, Sébastien - Les Jardins de Steinbach

## Contexte

- **Client** : Hoornaert, Sébastien - Les Jardins de Steinbach (ID: 71393)
- **Commande réelle** : S38279
- **Date commande** : 2025-08-04 11:44:03
- **Date cutoff système** : 2025-08-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 18
- **Tokens**: 15,598 input + 2,094 output = 17,692 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.0% | 5 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 75.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 23.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 20.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV160] LV Tartinade Aubergine 190g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 5 | 7 | 2.0 | 28.6% | partial | LLM |
| [LV136] LV Tartinade Betterave 190g | 4 | 3 | 1.0 | 33.3% | partial | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte à 90 jours (05/05/2025). Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de détection du besoin en cas de cycle irrégulier ou incertain, un risque de rupture est identifié. La quantité retenue correspond à la dernière commande connue (3 unités), conformément à la règle de maintien des volumes pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 120 tokens
- **Total**: 994 tokens



</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 5u vs Médiane: 4u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 4u
- **Reel commande**: 7u
- **Erreur LLM**: 2u (28.6%)
- **Erreur Mediane**: 3u (42.9%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/05/2025, soit 90 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle, le délai écoulé est très important. En application du principe de précaution B2B (doute sur la rotation = prévoir commande), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent présente une commande unique de 5 unités. En l'absence d'autres données ou de pics exceptionnels, la médiane se base sur cette valeur de référence pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 165 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>3. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 4u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 05/05/2025, soit environ 90 jours. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 4 unités, correspondant à la valeur unique observée dans l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 117 tokens
- **Total**: 988 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:58:59: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:58:59: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>3. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:58:59: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Predicted 2u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:23:31.682Z*
