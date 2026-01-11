# Rapport Backtest - Client ILIS    SA

## Contexte

- **Client** : ILIS    SA (ID: 3585)
- **Commande réelle** : S40179
- **Date commande** : 2025-11-06 14:07:11
- **Date cutoff système** : 2025-11-05 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 7,430 input + 1,330 output = 8,760 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 1 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 8.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 18.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 18.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0959] FILOU TOMATO KETCHUP 10KG | 52 | 44 | 8.0 | 18.2% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 44u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 52u
- **Baseline calculee**: 52u
- **Mediane historique**: 52u
- **Reel commande**: 44u
- **Erreur LLM**: 8u (18.2%)
- **Erreur Mediane**: 8u (18.2%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 52u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 29 août 2025, soit 68 jours avant la date actuelle. En l'absence d'un historique complet permettant de définir un cycle précis, le principe de précaution B2B s'applique car le délai écoulé suggère un risque imminent de rupture de stock d'ici les 30 prochains jours (Replenishment Threshold Days). Conformément aux règles de gestion, en cas de cycle irrégulier ou difficile à déterminer, il convient de prévoir une commande. La quantité retenue correspond à la dernière commande connue (52u), celle-ci servant de référence médiane unique pour maintenir le niveau de stock habituel.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 149 tokens
- **Total**: 1,023 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-29 11:50:51: 52u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 52u
**Quantite Reelle**: 44u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:32.757Z*
