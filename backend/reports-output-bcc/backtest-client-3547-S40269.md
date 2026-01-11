# Rapport Backtest - Client K&F DE PAUW

## Contexte

- **Client** : K&F DE PAUW (ID: 3547)
- **Commande réelle** : S40269
- **Date commande** : 2025-11-12 11:39:39
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 22,862 input + 3,774 output = 26,636 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 4.8% | 21 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 9.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 7.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 4.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 4.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF1194] GF VIN FINES HERBES WECK 330ML | 153 | 160 | 7.0 | 4.4% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF1194] GF VIN FINES HERBES WECK 330ML</strong> - LLM: 153u vs Médiane: 145u (Réel: 160u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 153u
- **Baseline calculee**: 153u
- **Mediane historique**: 145u
- **Reel commande**: 160u
- **Erreur LLM**: 7u (4.4%)
- **Erreur Mediane**: 15u (9.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 153u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 70 jours entre les réapprovisionnements récents (juin à août). Au 11 novembre, 78 jours se sont écoulés depuis la dernière commande du 25 août, ce qui dépasse largement le seuil de 70% du cycle habituel. Le risque de rupture est imminent dans l'horizon des 30 jours. Pour la quantité, la médiane des commandes récentes (145u et 160u) est de 152.5, arrondie à 153u. Ce volume est cohérent avec l'historique N-1 à la même période (145u en septembre) et stabilise le stock sans intégrer les pics exceptionnels constatés par le passé.

**Tokens utilises pour cette prediction:**
- **Input**: 1,074 tokens
- **Output**: 180 tokens
- **Total**: 1,254 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1194] GF VIN FINES HERBES WECK 330ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 08:28:00: 160u
- 2025-06-17 12:03:08: 145u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:21:49: 145u
- 2024-06-12 06:00:48: 290u
- 2024-06-12 06:00:48: 16u
- 2024-05-27 07:37:32: 160u
- 2024-04-17 06:40:51: 64u
- 2024-03-28 08:01:49: 64u
- 2024-03-18 14:12:55: 75u
- 2024-02-01 14:41:32: 75u
- 2023-12-07 14:03:11: 75u
- 2023-11-13 14:18:34: 75u

**Quantite Mediane (fallback)**: 153u
**Quantite Reelle**: 160u

</details>




---

## False Positives (20)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1809] LD SAUCE BEARNAISE 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1195] GF VIN ANCIENNE WECK 330ML | 290 | Predicted 290u but not ordered |
| [PF1799] LD MAYONNAISE OEUFS 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF1801] LD MAYONNA DU CHEF 470 ML WECK | 22 | Predicted 22u but not ordered |
| [PF1803] LD SAUCE TARTARE 250ML WECK | 50 | Predicted 50u but not ordered |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 200 | Predicted 200u but not ordered |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 200 | Predicted 200u but not ordered |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 200 | Predicted 200u but not ordered |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 100 | Predicted 100u but not ordered |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 25 | Predicted 25u but not ordered |
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 200 | Predicted 200u but not ordered |
| [PF0193] GF VIN ANCIENNE JERRYCAN 5L | 25 | Predicted 25u but not ordered |
| [PF3282] LD SAUCE AIOLI 250ML WECK | 25 | Predicted 25u but not ordered |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 25 | Predicted 25u but not ordered |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 100 | Predicted 100u but not ordered |
| [PF1795] LD MAYONNAI WASABI 250ML WECK | 25 | Predicted 25u but not ordered |
| [PF1807] LD SAUCE ANDALOUSE 250ML WECK | 25 | Predicted 25u but not ordered |
| [PF1805] LD SAUCE COCKTAIL 250ML WECK | 25 | Predicted 25u but not ordered |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 50 | Predicted 50u but not ordered |
| [PF1193] GF VIN TOMATE WECK 330ML | 145 | Predicted 145u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:20:20.622Z*
