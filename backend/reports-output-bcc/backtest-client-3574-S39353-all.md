# Rapport Backtest - Client BEFOOD NV

## Contexte

- **Client** : BEFOOD NV (ID: 3574)
- **Commande réelle** : S39353
- **Date commande** : 2025-09-23 12:33:26
- **Date cutoff système** : 2025-09-22 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 1,040 input + 257 output = 1,297 total


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
| **MAE** | 72.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 40.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -40.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0164] FILOU MOUTARDE  10 KG | 104 | 176 | 72.0 | 40.9% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0164] FILOU MOUTARDE  10 KG</strong> - LLM: 104u vs Médiane: 104u (Réel: 176u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 104u
- **Baseline calculee**: 104u
- **Mediane historique**: 104u
- **Reel commande**: 176u
- **Erreur LLM**: 72u (40.9%)
- **Erreur Mediane**: 72u (40.9%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 104u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 03/09/2025, soit il y a 19 jours. Le cycle moyen récent est d'environ 30 à 40 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (19 + 30 = 49 jours sans commande potentielle, ce qui dépasse le cycle habituel). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre une récurrence forte autour de 104u (valeur dominante en 2024 et présente en 2025). La médiane des commandes récentes (132, 53, 110, 104) se situe entre 104 et 110. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute et privilégier la stabilité historique), la quantité de 104u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,040 tokens
- **Output**: 257 tokens
- **Total**: 1,297 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0164] FILOU MOUTARDE  10 KG</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 09:33:19: 132u
- 2025-08-28 12:46:12: 53u
- 2025-07-24 12:12:54: 110u
- 2025-05-28 15:06:58: 104u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-08 06:37:20: 104u
- 2024-06-18 11:21:03: 104u
- 2024-04-22 12:26:54: 104u
- 2024-01-04 10:38:52: 104u
- 2023-12-19 07:59:33: 52u
- 2023-11-08 10:16:16: 104u

**Quantite Mediane (fallback)**: 104u
**Quantite Reelle**: 176u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:16:38.364Z*
