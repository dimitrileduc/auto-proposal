# Rapport Backtest - Client DURET Aline

## Contexte

- **Client** : DURET Aline (ID: 33742)
- **Commande réelle** : S39978
- **Date commande** : 2025-10-29 07:39:28
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 32
- **Tokens**: 28,495 input + 4,601 output = 33,096 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 28.6% | 7 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 44.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV357] LV Tartinade BIO Asperge 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 août 2025, soit 75 jours sans activité. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (risque de rupture si un besoin survient dans les 30 prochains jours), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 164 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>2. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 août 2025, soit 75 jours avant la date actuelle. Bien que l'historique soit limité à une seule unité, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et compte tenu du seuil de réapprovisionnement de 30 jours, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane de l'historique récent pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 138 tokens
- **Total**: 1,012 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:13:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 06:13:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Predicted 1u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Predicted 1u but not ordered |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Predicted 1u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Predicted 1u but not ordered |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:18:35.691Z*
