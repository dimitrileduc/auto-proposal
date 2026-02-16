# Rapport Backtest - Client CARREFOUR CONTACT

## Contexte

- **Client** : CARREFOUR CONTACT (ID: 3881)
- **Commande réelle** : S39483
- **Date commande** : 2025-10-02 08:26:01
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 928 input + 170 output = 1,098 total


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
| **MAE** | 24.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF0549] YVALLI SAUCE PIZZA 2,5 KG | 72 | 48 | 24.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0549] YVALLI SAUCE PIZZA 2,5 KG</strong> - LLM: 72u vs Médiane: 72u (Réel: 48u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 72u
- **Baseline calculee**: 72u
- **Mediane historique**: 72u
- **Reel commande**: 48u
- **Erreur LLM**: 24u (50.0%)
- **Erreur Mediane**: 24u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 72u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 13 juin 2025, soit plus de 100 jours sans activité. L'historique montre des cycles de réapprovisionnement espacés (environ 3 à 6 mois). Avec un seuil de réapprovisionnement de 30 jours et une date actuelle au 1er octobre, le risque de rupture est élevé selon le principe de précaution B2B, car nous entrons dans une période où une commande a été passée l'année précédente (octobre 2023). La quantité retenue est de 72 unités, correspondant à la médiane des commandes historiques et à la quantité la plus basse observée récemment, afin d'éviter le surstockage tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 928 tokens
- **Output**: 170 tokens
- **Total**: 1,098 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0549] YVALLI SAUCE PIZZA 2,5 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-13 13:03:57: 72u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-16 12:04:52: 144u
- 2024-03-14 13:38:45: 144u
- 2023-10-16 13:50:52: 72u

**Quantite Mediane (fallback)**: 72u
**Quantite Reelle**: 48u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:26:57.292Z*
