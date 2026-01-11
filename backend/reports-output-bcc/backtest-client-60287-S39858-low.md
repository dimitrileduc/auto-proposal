# Rapport Backtest - Client DEPOT VRAC SILLY SPRL

## Contexte

- **Client** : DEPOT VRAC SILLY SPRL (ID: 60287)
- **Commande réelle** : S39858
- **Date commande** : 2025-10-22 10:58:25
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 15
- **Tokens**: 13,179 input + 2,212 output = 15,391 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 14.3% | 7 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 25.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [RISH05] RISH kombucha BIO - rose 750ml | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [RISH05] RISH kombucha BIO - rose 750ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 août, soit 63 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (cycle irrégulier ou difficile à déterminer), un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. En l'absence de cycle établi, la quantité de la dernière commande (2u) est maintenue comme référence médiane pour assurer le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 138 tokens
- **Total**: 1,012 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [RISH05] RISH kombucha BIO - rose 750ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 11:59:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 2 | Predicted 2u but not ordered |
| [RISH06] RISH kombucha BIO - tagette 750ml | 2 | Predicted 2u but not ordered |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 3 | Predicted 3u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 2 | Predicted 2u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 4 | Predicted 4u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:41.443Z*
