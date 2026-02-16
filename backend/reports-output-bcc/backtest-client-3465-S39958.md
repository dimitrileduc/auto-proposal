# Rapport Backtest - Client NIKITA

## Contexte

- **Client** : NIKITA (ID: 3465)
- **Commande réelle** : S39958
- **Date commande** : 2025-10-28 09:44:01
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 3,210 input + 504 output = 3,714 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 3 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF0162] MOUTARDE JAUNE VRAC | 2700 | 2700 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0162] MOUTARDE JAUNE VRAC</strong> - LLM: 2700u vs Médiane: 2700u (Réel: 2700u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2700u
- **Baseline calculee**: 2700u
- **Mediane historique**: 2700u
- **Reel commande**: 2700u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2700u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande moyen d'environ 25 à 30 jours. La dernière commande enregistrée date du 30 juin 2025, ce qui indique une rupture de stock probable ou une absence de données récentes au 27 octobre 2025. En application du principe de précaution B2B et pour couvrir le risque sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité est fixée à 2700 unités, correspondant à la médiane des commandes historiques (excluant les pics et les faibles volumes ponctuels) et à la volumétrie observée sur la même période l'année précédente (octobre 2024).

**Tokens utilises pour cette prediction:**
- **Input**: 1,145 tokens
- **Output**: 170 tokens
- **Total**: 1,315 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0162] MOUTARDE JAUNE VRAC</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:12:08: 1800u
- 2025-06-20 07:01:03: 2700u
- 2025-06-04 14:22:49: 1800u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-16 07:26:33: 2700u
- 2024-09-12 14:28:54: 2700u
- 2024-08-07 11:31:45: 2700u
- 2024-07-03 06:38:59: 900u
- 2024-06-12 07:20:17: 3600u
- 2024-05-14 14:38:47: 1800u
- 2024-04-17 07:07:48: 2700u
- 2024-04-17 07:07:48: 100u
- 2024-04-03 05:40:41: 1700u
- 2024-03-28 07:31:42: 2700u
- 2024-03-26 14:43:56: 1700u
- 2024-03-12 12:38:47: 900u

**Quantite Mediane (fallback)**: 2700u
**Quantite Reelle**: 2700u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3378] MOUTARDE BLANCHE VRAC | 1800 | Predicted 1800u but not ordered |
| [PI2790] PI MOUTARDE BLANCHE | 1800 | Predicted 1800u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:53.034Z*
