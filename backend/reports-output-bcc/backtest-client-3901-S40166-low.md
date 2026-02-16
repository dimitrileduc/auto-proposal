# Rapport Backtest - Client CASIMEX

## Contexte

- **Client** : CASIMEX (ID: 3901)
- **Commande réelle** : S40166
- **Date commande** : 2025-11-06 10:16:27
- **Date cutoff système** : 2025-11-05 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 25
- **Tokens**: 23,307 input + 4,666 output = 27,973 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 2 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 600.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF3397] BS1833 COSCO - BORNIBUS BEARNAISE KOSHER BOCAL 800G | 600 | 0 | 600.0 | 0.0% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF3397] BS1833 COSCO - BORNIBUS BEARNAISE KOSHER BOCAL 800G</strong> - LLM: 600u vs Médiane: 600u (Réel: 0u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 600u
- **Baseline calculee**: 600u
- **Mediane historique**: 600u
- **Reel commande**: 0u
- **Erreur LLM**: 600u (Infinity%)
- **Erreur Mediane**: 600u (Infinity%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 600u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte à 63 jours (03/09/2025). Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'historique de cycle établi, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. La quantité retenue correspond à la dernière commande connue (600u), conformément à la règle de maintien des volumes en cas de rotation régulière ou unique.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 131 tokens
- **Total**: 1,021 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF3397] BS1833 COSCO - BORNIBUS BEARNAISE KOSHER BOCAL 800G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 12:54:04: 600u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 600u
**Quantite Reelle**: 0u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3398] BS1833 - BORNIBUS BEARNAISE KOSHER BOCAL 800G  | 96 | Predicted 96u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:34.641Z*
