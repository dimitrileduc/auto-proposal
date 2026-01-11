# Rapport Backtest - Client CONSERVERIE ET MOUTARDERIE BELGE ECHANTILLON

## Contexte

- **Client** : CONSERVERIE ET MOUTARDERIE BELGE ECHANTILLON (ID: 24092)
- **Commande réelle** : S39541
- **Date commande** : 2025-10-03 10:10:16
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 34
- **Tokens**: 31,919 input + 5,367 output = 37,286 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 4.5% | 22 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 8.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 100.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 100.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 100.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 août 2025, soit 41 jours avant la date actuelle. Le cycle moyen observé sur les commandes récentes est d'environ 15 à 30 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré, d'autant plus qu'une commande avait eu lieu début septembre l'année précédente (N-1). Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes de 1u, 2u, 2u et 3u. La médiane de ces quantités est de 2u. Conformément aux règles de gestion des rotations régulières et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,046 tokens
- **Output**: 207 tokens
- **Total**: 1,253 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 11:46:40: 3u
- 2025-08-12 11:22:40: 1u
- 2025-08-12 10:31:34: 2u
- 2025-07-14 07:51:45: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 06:46:55: 2u
- 2024-03-20 07:37:07: 2u
- 2024-01-09 08:56:08: 0u
- 2023-12-12 14:54:31: 0u
- 2023-12-07 10:58:24: 0u
- 2023-11-07 08:23:13: 0u
- 2023-10-17 13:50:06: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (21)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 2 | Predicted 2u but not ordered |
| [PF0093] FILOU MOUTARDE 300GR | 1 | Predicted 1u but not ordered |
| [PF1798] LD MAYONNAI POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 1 | Predicted 1u but not ordered |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 2 | Predicted 2u but not ordered |
| [PF1687] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [PF0539] JF VOL AU VENT 2,5 KG | 1 | Predicted 1u but not ordered |
| [PF0094] FILOU MOUTARDE 700 GR | 1 | Predicted 1u but not ordered |
| [PF1559] LV TARTINADE BIO PAPRIKA 200ML | 6 | Predicted 6u but not ordered |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [PF1640] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [PF3274] JF BURGER SAUCE 925ML | 1 | Predicted 1u but not ordered |
| [PF1533] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [PF1598] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [PF1849] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [PF1601] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 1 | Predicted 1u but not ordered |
| [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L | 1 | Predicted 1u but not ordered |
| [PF0096] FILOU MOUTARDE 3 KG | 3 | Predicted 3u but not ordered |
| [PF3248] AA0347 - LD FR TARTINAD BIO RAIFORT 135G | 1 | Predicted 1u but not ordered |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:33.280Z*
