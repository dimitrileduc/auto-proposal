# Rapport Backtest - Client Cru's Delicatessen

## Contexte

- **Client** : Cru's Delicatessen (ID: 60276)
- **Commande réelle** : S39715
- **Date commande** : 2025-10-16 08:20:31
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 3,559 input + 619 output = 4,178 total


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
| **MAE** | 4.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 40.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -40.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 6 | 10 | 4.0 | 40.0% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 6u vs Médiane: 6u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 10u
- **Erreur LLM**: 4u (40.0%)
- **Erreur Mediane**: 4u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 mai 2025, soit 146 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande, le principe de précaution B2B s'applique face à une absence prolongée de stock ou de mouvement. Le risque de rupture est considéré comme présent par défaut d'information sur la rotation réelle. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple, la règle de maintien de la quantité de la rotation régulière est appliquée. La médiane et la valeur unique disponible étant de 6 unités, cette quantité est retenue pour reconstituer un stock minimal sans risque de surstockage majeur.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 165 tokens
- **Total**: 1,041 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-22 06:29:23: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 10u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:29:28.682Z*
