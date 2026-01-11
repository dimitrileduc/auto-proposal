# Rapport Backtest - Client NPN DISTRIBUTION

## Contexte

- **Client** : NPN DISTRIBUTION (ID: 3891)
- **Commande réelle** : S39934
- **Date commande** : 2025-10-27 09:37:24
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 908 input + 161 output = 1,069 total


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
| [PF0509] YVALLI GR BOUL TOMATE 2,5 KG | 48 | 48 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0509] YVALLI GR BOUL TOMATE 2,5 KG</strong> - LLM: 48u vs Médiane: 48u (Réel: 48u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 48u
- **Baseline calculee**: 48u
- **Mediane historique**: 48u
- **Reel commande**: 48u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 48u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 30 juin 2025, soit environ 118 jours. Bien que le cycle historique soit irrégulier et espacé, le principe de précaution B2B s'applique ici car l'absence de commande sur une période aussi longue présente un risque de rupture imminent pour un produit de type boulangerie/tomate. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre une stabilité parfaite avec des commandes systématiques de 48 unités. La médiane est de 48. Conformément aux règles, on maintient cette quantité habituelle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 161 tokens
- **Total**: 1,069 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0509] YVALLI GR BOUL TOMATE 2,5 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 11:33:02: 48u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-13 08:48:07: 48u
- 2023-11-10 13:37:08: 48u

**Quantite Mediane (fallback)**: 48u
**Quantite Reelle**: 48u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:24:19.550Z*
