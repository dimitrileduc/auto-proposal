# Rapport Backtest - Client LE NOURRAIN SAVEURS D'ANTOINE

## Contexte

- **Client** : LE NOURRAIN SAVEURS D'ANTOINE (ID: 3898)
- **Commande réelle** : S38521
- **Date commande** : 2025-08-19 08:53:23
- **Date cutoff système** : 2025-08-18 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 1,000 input + 224 output = 1,224 total


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
| **MAE** | 12.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0509] YVALLI GR BOUL TOMATE 2,5 KG | 24 | 36 | 12.0 | 33.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0509] YVALLI GR BOUL TOMATE 2,5 KG</strong> - LLM: 24u vs Médiane: 25u (Réel: 36u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 24u
- **Baseline calculee**: 24u
- **Mediane historique**: 25u
- **Reel commande**: 36u
- **Erreur LLM**: 12u (33.3%)
- **Erreur Mediane**: 11u (30.6%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 24u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande enregistrée date du 04/04/2025. L'historique N-1 montre une commande récurrente début août (08/08/2024). Avec une date actuelle au 18/08/2025 et un seuil de réapprovisionnement de 30 jours, le cycle annuel indique un besoin immédiat pour couvrir la période estivale/rentrée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique long terme montre une stabilité forte autour de 24 unités (médiane historique). Bien que la dernière commande ponctuelle était de 36u, les règles de gestion B2B préconisent de ne pas se baser sur les pics exceptionnels et de privilégier la médiane ou la valeur la plus basse en cas de doute pour éviter le surstock. On retient donc la quantité standard de 24u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,000 tokens
- **Output**: 224 tokens
- **Total**: 1,224 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0509] YVALLI GR BOUL TOMATE 2,5 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-04 06:22:13: 36u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 06:32:41: 24u
- 2024-06-07 09:20:38: 24u
- 2024-04-05 09:41:13: 24u
- 2024-02-09 09:18:02: 26u
- 2024-01-19 10:29:55: 26u
- 2023-11-17 09:42:38: 24u
- 2023-10-06 08:12:05: 27u

**Quantite Mediane (fallback)**: 24u
**Quantite Reelle**: 36u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:39.151Z*
