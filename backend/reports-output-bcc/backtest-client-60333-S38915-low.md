# Rapport Backtest - Client FORESTIA SA – Forestia

## Contexte

- **Client** : FORESTIA SA – Forestia (ID: 60333)
- **Commande réelle** : S38915
- **Date commande** : 2025-09-01 13:32:57
- **Date cutoff système** : 2025-08-31 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 12,323 input + 1,960 output = 14,283 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.0% | 8 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 40.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 27.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 26.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -27.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB05] REB chips bio - sel de mer 35g | 4 | 6 | 2.0 | 33.3% | partial | Non | Non | LLM |
| [REB06] REB chips bio - paprika fumé 35g | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [REB05] REB chips bio - sel de mer 35g</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 6u
- **Erreur LLM**: 2u (33.3%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 05/06/2025, soit 87 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'historique complexe ou de saisonnalité N-1, la quantité est basée sur la dernière commande connue (4 unités) pour assurer la disponibilité du produit sans surestimer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 126 tokens
- **Total**: 998 tokens



</details>


<details>
<summary><strong>2. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/06/2025, soit 87 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et face à l'incertitude du cycle de rotation, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple, la quantité de la dernière commande (4u) est utilisée comme référence pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 159 tokens
- **Total**: 1,031 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [REB05] REB chips bio - sel de mer 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 12:26:38: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 12:26:38: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MANA02] MANA natural energy drink - tropical passion 250ml | 4 | Predicted 4u but not ordered |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 3 | Predicted 3u but not ordered |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 3 | Predicted 3u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 3 | Predicted 3u but not ordered |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 3 | Predicted 3u but not ordered |
| [NOC01] NOCCIOLATA Pâte cacao-noisette bio 250g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:19.872Z*
