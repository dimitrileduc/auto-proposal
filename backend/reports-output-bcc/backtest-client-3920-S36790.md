# Rapport Backtest - Client ZILVER HORECA

## Contexte

- **Client** : ZILVER HORECA (ID: 3920)
- **Commande réelle** : S36790
- **Date commande** : 2025-05-14 12:10:49
- **Date cutoff système** : 2025-05-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 946 input + 174 output = 1,120 total


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
| **wMAPE** | 23.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 23.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 23.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF0302] FILOU/LD ANDALOUSE EXTRA  10 KG | 128 | 104 | 24.0 | 23.1% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0302] FILOU/LD ANDALOUSE EXTRA  10 KG</strong> - LLM: 128u vs Médiane: 156u (Réel: 104u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 128u
- **Baseline calculee**: 128u
- **Mediane historique**: 156u
- **Reel commande**: 104u
- **Erreur LLM**: 24u (23.1%)
- **Erreur Mediane**: 52u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 128u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande très espacé et irrégulier (environ 4 à 5 mois). La dernière commande enregistrée remonte au 08/01/2025, soit plus de 120 jours. Bien que le cycle soit difficile à définir précisément, le principe de précaution B2B s'applique car nous entrons dans une période où une commande a été passée l'année précédente (mai 2024). En raison de l'irrégularité, un besoin est détecté. Pour la quantité, on écarte le pic exceptionnel de 192u et on se base sur la médiane historique stable de 128u observée sur les commandes de 2024.

**Tokens utilises pour cette prediction:**
- **Input**: 946 tokens
- **Output**: 174 tokens
- **Total**: 1,120 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0302] FILOU/LD ANDALOUSE EXTRA  10 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-08 07:47:23: 192u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-10 06:58:29: 128u
- 2024-01-03 13:43:30: 128u
- 2023-07-31 12:26:17: 156u
- 2023-05-25 06:37:57: 77u

**Quantite Mediane (fallback)**: 128u
**Quantite Reelle**: 104u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:23:57.383Z*
