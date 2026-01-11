# Rapport Backtest - Client JACKY GROUPE SRL

## Contexte

- **Client** : JACKY GROUPE SRL (ID: 52958)
- **Commande réelle** : S38516
- **Date commande** : 2025-08-14 06:49:07
- **Date cutoff système** : 2025-08-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 1,807 input + 318 output = 2,125 total


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
| [PF1854] JACKY MAYONNAISE OEUFS SQUEEZE 300ML | 80 | 80 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF1854] JACKY MAYONNAISE OEUFS SQUEEZE 300ML</strong> - LLM: 80u vs Médiane: 80u (Réel: 80u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 80u
- **Baseline calculee**: 80u
- **Mediane historique**: 80u
- **Reel commande**: 80u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 80u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 juin 2025, soit plus de 60 jours. Bien que le cycle historique semble espacé, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours, créant un risque de rupture certain. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 80 unités, correspondant à la dernière commande ferme (médiane du récent), évitant ainsi le pic exceptionnel de 125 unités observé l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 915 tokens
- **Output**: 130 tokens
- **Total**: 1,045 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1854] JACKY MAYONNAISE OEUFS SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 08:59:05: 80u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 06:09:42: 125u
- 2024-05-02 13:17:42: 62u

**Quantite Mediane (fallback)**: 80u
**Quantite Reelle**: 80u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1853] JACKY MIEL MOUT SQUEEZE 300ML | 80 | Predicted 80u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:15:30.837Z*
