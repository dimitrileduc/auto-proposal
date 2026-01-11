# Rapport Backtest - Client VITAFRAIS SAS

## Contexte

- **Client** : VITAFRAIS SAS (ID: 58998)
- **Commande réelle** : S38873
- **Date commande** : 2025-08-29 11:55:17
- **Date cutoff système** : 2025-08-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 6
- **Tokens**: 5,390 input + 1,064 output = 6,454 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 6 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 25.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 25 | 75 | 50.0 | 66.7% | partial | Non | Non | LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 25 | 25 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 25u vs Médiane: 41u (Réel: 75u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 41u
- **Reel commande**: 75u
- **Erreur LLM**: 50u (66.7%)
- **Erreur Mediane**: 34u (45.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 14/08, soit il y a 14 jours. Le cycle récent montre des commandes hebdomadaires en août (7 jours d'intervalle). Nous sommes à 200% du cycle moyen constaté en août. Le risque de rupture est élevé d'ici les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent présente des volumes de 25u, 50u et 25u. La médiane est de 25u. Conformément à la règle de prudence (choisir la valeur la plus basse en cas de doute entre deux volumes types), la quantité retenue est de 25u.

**Tokens utilises pour cette prediction:**
- **Input**: 914 tokens
- **Output**: 175 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>2. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 25u vs Médiane: 38u (Réel: 25u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 38u
- **Reel commande**: 25u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 13u (52.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date de 14 jours. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle, le seuil de réapprovisionnement est de 30 jours. En application du principe de précaution B2B (cycle incertain = prévoir commande), un risque de rupture est identifié pour couvrir le mois à venir. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 25 unités. En l'absence d'autres données ou de tendance à la baisse, la quantité de 25 unités est maintenue pour assurer la disponibilité du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 154 tokens
- **Total**: 1,031 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 12:24:53: 25u
- 2025-08-07 12:21:11: 50u
- 2025-06-02 12:59:55: 25u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 75u

</details>


<details>
<summary><strong>2. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 12:24:53: 25u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 25u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 50 | Predicted 50u but not ordered |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 25 | Predicted 25u but not ordered |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 25 | Predicted 25u but not ordered |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | Predicted 40u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:07:33.378Z*
