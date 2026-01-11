# Rapport Backtest - Client K&F DE PAUW

## Contexte

- **Client** : K&F DE PAUW (ID: 73359)
- **Commande réelle** : S40290
- **Date commande** : 2025-11-12 13:11:25
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 26
- **Tokens**: 23,729 input + 3,993 output = 27,722 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 5.9% | 17 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 11.1% | Score equilibre global |

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
| [LV160] LV Tartinade Aubergine 190g | 31 | 31 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 31u vs Médiane: 31u (Réel: 31u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 31u
- **Baseline calculee**: 31u
- **Mediane historique**: 31u
- **Reel commande**: 31u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 31u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 8 à 11 jours entre les dernières commandes (03/11, 23/10, 14/10, 06/10). La dernière commande datant du 03/11 (il y a 8 jours), le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). La quantité est stable à 31 unités sur les 5 dernières commandes significatives. En appliquant la règle de la médiane et en ignorant la valeur atypique de 1u d'août, la quantité préconisée est de 31 unités pour maintenir cette rotation régulière.

**Tokens utilises pour cette prediction:**
- **Input**: 962 tokens
- **Output**: 165 tokens
- **Total**: 1,127 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 09:31:25: 31u
- 2025-10-23 07:11:08: 31u
- 2025-10-14 14:36:52: 31u
- 2025-10-06 07:30:22: 31u
- 2025-09-22 12:46:11: 31u
- 2025-08-25 14:40:12: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 31u
**Quantite Reelle**: 31u

</details>




---

## False Positives (16)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV146] LV Sauce Aïoli 200 ml | 12 | Predicted 12u but not ordered |
| [LV149] LV Sauce Aioli Pesto 200ml | 12 | Predicted 12u but not ordered |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 31 | Predicted 31u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 31 | Predicted 31u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 31 | Predicted 31u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 31 | Predicted 31u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 31 | Predicted 31u but not ordered |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 8 | Predicted 8u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 62 | Predicted 62u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 8 | Predicted 8u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 31 | Predicted 31u but not ordered |
| [LV145] LV Sauce Tartare 200 ml  | 8 | Predicted 8u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 31 | Predicted 31u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 31 | Predicted 31u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 31 | Predicted 31u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 62 | Predicted 62u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:20:42.992Z*
