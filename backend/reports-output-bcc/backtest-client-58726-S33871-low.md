# Rapport Backtest - Client SRL AXYLIUM

## Contexte

- **Client** : SRL AXYLIUM (ID: 58726)
- **Commande réelle** : S33871
- **Date commande** : 2025-01-02 09:51:43
- **Date cutoff système** : 2025-01-01 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 866 input + 134 output = 1,000 total


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
| **MAE** | 42.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 4200.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 4200.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 4200.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LC001] LC Coffret Exploration  | 43 | 1 | 42.0 | 4200.0% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [LC001] LC Coffret Exploration </strong> - LLM: 43u vs Médiane: 43u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 43u
- **Baseline calculee**: 43u
- **Mediane historique**: 43u
- **Reel commande**: 1u
- **Erreur LLM**: 42u (4200.0%)
- **Erreur Mediane**: 42u (4200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 43u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 16 décembre 2024, soit 16 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture si le cycle de rotation est mensuel. En l'absence d'historique plus large pour établir une moyenne précise, le principe de précaution B2B s'applique : un besoin est détecté. La quantité retenue correspond à la dernière commande connue (43u), celle-ci faisant office de référence unique pour maintenir le niveau de stock actuel.

**Tokens utilises pour cette prediction:**
- **Input**: 866 tokens
- **Output**: 134 tokens
- **Total**: 1,000 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [LC001] LC Coffret Exploration </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-16 08:42:36: 43u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 43u
**Quantite Reelle**: 1u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:26:52.801Z*
