# Rapport Backtest - Client LA FERME DE CANTRAINE

## Contexte

- **Client** : LA FERME DE CANTRAINE (ID: 60405)
- **Commande réelle** : S37067
- **Date commande** : 2025-05-26 12:22:53
- **Date cutoff système** : 2025-05-25 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 13
- **Tokens**: 11,366 input + 1,889 output = 13,255 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 15.4% | 13 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 26.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 7.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 83.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 82.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -83.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 8 | 6.0 | 75.0% | partial | LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | 10 | 9.0 | 90.0% | partial | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 8u
- **Erreur LLM**: 7u (87.5%)
- **Erreur Mediane**: 7u (87.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande date du 16 avril, soit il y a 39 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane de l'historique récent pour ce produit à rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 116 tokens
- **Total**: 993 tokens



</details>


<details>
<summary><strong>2. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 1u vs Médiane: 1u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 10u
- **Erreur LLM**: 9u (90.0%)
- **Erreur Mediane**: 9u (90.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 16 avril 2025, soit 39 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est considéré comme présent par principe de précaution B2B, malgré le faible historique. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 133 tokens
- **Total**: 1,009 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-16 08:46:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>2. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-16 08:46:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 10u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Predicted 1u but not ordered |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | Predicted 1u but not ordered |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Predicted 1u but not ordered |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Predicted 1u but not ordered |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Predicted 1u but not ordered |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Predicted 1u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:27:11.555Z*
