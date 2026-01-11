# Rapport Backtest - Client Le Maire Bio

## Contexte

- **Client** : Le Maire Bio (ID: 21033)
- **Commande réelle** : S40348
- **Date commande** : 2025-11-13 13:20:54
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 21
- **Tokens**: 19,605 input + 3,669 output = 23,274 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 14.3% | 21 produits prédits, 3 corrects |
| **Rappel** | 50.0% | 6 produits réels, 3 détectés |
| **F1-Score** | 22.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV161] LV Tartinade Mangue curry 190g | 6 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 6 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 6 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 6u vs Médiane: 6u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 29 septembre 2025, soit 44 jours. Bien que le cycle historique soit irrégulier, le délai actuel dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité à 6 unités. La médiane des commandes récentes est de 6. Les pics historiques de l'année précédente (14u) sont écartés car considérés comme exceptionnels. On maintient la quantité constante de 6 unités pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 162 tokens
- **Total**: 1,152 tokens



</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 6u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 03/07/2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue pour un produit de type tartinade suggère un besoin de réapprovisionnement imminent ou un cycle de rotation lent arrivant à échéance. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est déclenchée. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent présente une commande unique de 6 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité est maintenue à 6 unités pour reconstituer le stock initial constaté.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 191 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>3. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 6u vs Médiane: 6u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit plus de 130 jours. L'historique montre des cycles de commande variant entre 30 et 150 jours. Compte tenu de l'absence de commande récente et du principe de précaution B2B, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique est extrêmement stable avec une quantité constante de 6 unités sur toutes les commandes passées (récentes et N-1). La médiane et la mode étant de 6, cette quantité est maintenue pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 165 tokens
- **Total**: 1,119 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-29 06:23:08: 6u
- 2025-07-03 12:11:48: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 06:30:25: 5u
- 2024-05-27 07:21:55: 14u
- 2024-04-10 10:23:44: 5u
- 2024-03-05 08:26:32: 4u
- 2024-02-05 13:13:59: 4u
- 2023-11-28 08:38:37: 5u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:11:48: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:11:48: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:22:51: 6u
- 2024-08-05 06:30:25: 6u
- 2024-03-05 08:26:32: 6u
- 2024-02-05 13:13:59: 6u
- 2023-11-28 08:38:37: 6u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 4u

</details>




---

## False Positives (18)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | Predicted 2u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 2 | Predicted 2u but not ordered |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Predicted 1u but not ordered |
| [LV149] LV Sauce Aioli Pesto 200ml | 1 | Predicted 1u but not ordered |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 4 | Predicted 4u but not ordered |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 2 | Predicted 2u but not ordered |
| [RIT05] RITCHIE Cola - verre 275ml | 3 | Predicted 3u but not ordered |
| [RIT01] RITCHIE Orange - verre 275ml | 4 | Predicted 4u but not ordered |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 4 | Predicted 4u but not ordered |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 2 | Predicted 2u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 6 | Predicted 6u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 6 | Predicted 6u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 6 | Predicted 6u but not ordered |
| [LV040] LV Caprons apéritifs 240g | 4 | Predicted 4u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 6 | Predicted 6u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 6 | Predicted 6u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | Predicted 2u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 4 | Never ordered in previous analysis window (no history) |
| [LV342] LV Organic Broccoli Spread 190 g | 4 | Never ordered in previous analysis window (no history) |
| [LV131] LV Tartinade Potiron 190g | 4 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:20:44.368Z*
