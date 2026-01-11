# Rapport Backtest - Client SRL ALL SNACKS PRODUCTION

## Contexte

- **Client** : SRL ALL SNACKS PRODUCTION (ID: 58171)
- **Commande réelle** : S39010
- **Date commande** : 2025-09-05 12:13:03
- **Date cutoff système** : 2025-09-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 890 input + 198 output = 1,088 total


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
| **MAE** | 33.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 37.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 37.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -37.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0164] FILOU MOUTARDE  10 KG | 55 | 88 | 33.0 | 37.5% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0164] FILOU MOUTARDE  10 KG</strong> - LLM: 55u vs Médiane: 52u (Réel: 88u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 55u
- **Baseline calculee**: 55u
- **Mediane historique**: 52u
- **Reel commande**: 88u
- **Erreur LLM**: 33u (37.5%)
- **Erreur Mediane**: 36u (40.9%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 55u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'intervalle entre les deux dernières commandes est de 78 jours. La dernière commande date du 15 juillet, soit il y a 51 jours. Le seuil de réapprovisionnement est de 30 jours. 51 jours représentent environ 65% du cycle moyen, mais compte tenu de l'irrégularité et du principe de précaution B2B (risque de rupture à l'horizon de 30 jours), un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent présente deux valeurs (55u et 78u). En application de la règle de prudence privilégiant la valeur la plus basse en cas de doute ou de médiane incertaine, la quantité de 55u est retenue pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 198 tokens
- **Total**: 1,088 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0164] FILOU MOUTARDE  10 KG</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-15 08:53:30: 55u
- 2025-04-28 11:11:11: 78u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 55u
**Quantite Reelle**: 88u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:17:52.480Z*
