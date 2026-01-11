# Rapport Backtest - Client KDIS

## Contexte

- **Client** : KDIS (ID: 3884)
- **Commande réelle** : S38411
- **Date commande** : 2025-08-07 12:55:09
- **Date cutoff système** : 2025-08-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 911 input + 179 output = 1,090 total


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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0204] KDIS MAYONNAISE KOSHER 5 L | 1000 | 1000 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0204] KDIS MAYONNAISE KOSHER 5 L</strong> - LLM: 1000u vs Médiane: 1008u (Réel: 1000u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1000u
- **Baseline calculee**: 1000u
- **Mediane historique**: 1008u
- **Reel commande**: 1000u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 8u (0.8%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1000u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 31 mars 2025, soit plus de 120 jours sans activité. Bien que le cycle soit irrégulier, l'historique montre des commandes volumineuses (environ 1000u) espacées de plusieurs mois (septembre 2023, mars 2024, mars 2025). En application du principe de précaution B2B et face à l'incertitude du cycle de rotation, un besoin de réapprovisionnement est détecté pour couvrir l'horizon des 30 prochains jours. La quantité retenue correspond à la médiane de l'historique (1000u), excluant le pic de 1015u et la valeur basse de 960u.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 179 tokens
- **Total**: 1,090 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0204] KDIS MAYONNAISE KOSHER 5 L</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-31 12:06:10: 960u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-12 13:14:32: 1015u
- 2023-09-07 12:20:13: 1000u

**Quantite Mediane (fallback)**: 1000u
**Quantite Reelle**: 1000u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:27:48.937Z*
