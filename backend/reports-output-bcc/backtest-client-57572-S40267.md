# Rapport Backtest - Client MAISON SCHOONBRODT

## Contexte

- **Client** : MAISON SCHOONBRODT (ID: 57572)
- **Commande réelle** : S40267
- **Date commande** : 2025-11-13 07:43:10
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 930 input + 190 output = 1,120 total


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
| **MAE** | 88.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 157.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 157.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 157.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 144 | 56 | 88.0 | 157.1% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM: 144u vs Médiane: 156u (Réel: 56u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 144u
- **Baseline calculee**: 144u
- **Mediane historique**: 156u
- **Reel commande**: 56u
- **Erreur LLM**: 88u (157.1%)
- **Erreur Mediane**: 100u (178.6%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 144u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle d'environ 60 jours entre les commandes récentes (juillet à septembre). Depuis la dernière commande du 17 septembre 2025, 56 jours se sont écoulés. Nous atteignons 93% du cycle moyen, ce qui dépasse largement le seuil de précaution de 70%. Un risque de rupture est donc identifié pour les 30 prochains jours. Pour la quantité, la médiane des commandes récentes (132 et 156) est de 144 unités. Ce volume est cohérent avec la consommation globale observée, bien qu'en légère augmentation par rapport à l'année précédente (156u cumulés en sept 2024). Conformément à la règle de la médiane, nous préconisons 144 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 930 tokens
- **Output**: 190 tokens
- **Total**: 1,120 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 06:23:03: 132u
- 2025-07-15 07:38:12: 156u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 10:41:32: 104u
- 2024-09-19 10:40:21: 52u

**Quantite Mediane (fallback)**: 144u
**Quantite Reelle**: 56u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:17:45.826Z*
