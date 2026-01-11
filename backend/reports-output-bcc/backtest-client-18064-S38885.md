# Rapport Backtest - Client Depairon Distribution

## Contexte

- **Client** : Depairon Distribution (ID: 18064)
- **Commande réelle** : S38885
- **Date commande** : 2025-09-05 10:07:36
- **Date cutoff système** : 2025-09-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 11
- **Tokens**: 9,866 input + 1,695 output = 11,561 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 20.0% | 5 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 33.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande irrégulier avec une dernière commande effectuée il y a 94 jours (02/06/2025). Bien que la rotation soit faible, le délai écoulé depuis la dernière commande dépasse largement les intervalles observés l'année précédente (environ 60 à 75 jours entre avril et juin). En application du principe de précaution B2B, un risque de rupture est identifié pour l'horizon des 30 prochains jours. La quantité retenue est de 3 unités, correspondant à la médiane des commandes récentes et historiques (3u et 5u), en privilégiant la valeur la plus basse pour éviter le surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 165 tokens
- **Total**: 1,104 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 12:23:39: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:15:35: 5u
- 2024-04-08 11:40:22: 5u
- 2023-12-08 07:26:58: 3u
- 2023-10-24 06:45:09: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 2 | Predicted 2u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | Predicted 3u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:27:49.168Z*
