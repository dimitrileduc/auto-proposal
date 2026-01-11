# Rapport Backtest - Client TIERHOF ALTE KIRCHE

## Contexte

- **Client** : TIERHOF ALTE KIRCHE (ID: 58216)
- **Commande réelle** : S40240
- **Date commande** : 2025-11-12 10:45:37
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 20
- **Tokens**: 17,497 input + 2,914 output = 20,411 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 2 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 41.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -42.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 21 août 2025, soit 82 jours sans réapprovisionnement. Bien que la rotation soit faible (2 unités par commande), le délai écoulé dépasse largement le cycle habituel suggéré par l'historique. En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours (Replenishment Threshold Days), une commande est nécessaire. La quantité retenue correspond à la médiane historique constante de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 119 tokens
- **Total**: 1,005 tokens



</details>


<details>
<summary><strong>2. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 21 août 2025, soit 82 jours sans réapprovisionnement. Bien que la rotation soit faible (2 unités), le délai écoulé dépasse largement le cycle suggéré par l'historique (comparaison avec la commande d'octobre de l'année précédente). En application du principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la médiane constante observée dans l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 128 tokens
- **Total**: 1,014 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 14:00:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 12:50:08: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 14:00:52: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 12:50:08: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:27:07.627Z*
