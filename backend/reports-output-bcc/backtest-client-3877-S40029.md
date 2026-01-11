# Rapport Backtest - Client ZELECTED FOODS

## Contexte

- **Client** : ZELECTED FOODS (ID: 3877)
- **Commande réelle** : S40029
- **Date commande** : 2025-10-30 13:37:56
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 7,010 input + 1,335 output = 8,345 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 28.6% | 7 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 44.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 63.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 4.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 4.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF1937] ZF MAYO TAPAS TRUFFES 180GR | 1302 | 1302 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF1922] ZF MAYO SAMOURA CHIPOTLE 180GR | 1176 | 1302 | 126.0 | 9.7% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF1937] ZF MAYO TAPAS TRUFFES 180GR</strong> - LLM: 1302u vs Médiane: 1400u (Réel: 1302u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1302u
- **Baseline calculee**: 1302u
- **Mediane historique**: 1400u
- **Reel commande**: 1302u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 98u (7.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1302u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence irrégulière avec une dernière commande effectuée il y a 84 jours (06/08/2025). Bien que l'historique récent soit espacé, le délai écoulé dépasse largement les cycles observés l'année précédente à la même période (novembre/décembre), créant un risque de rupture imminent dans l'horizon des 30 jours. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 1302 unités, correspondant à la valeur basse de la médiane des commandes récentes, afin de couvrir le besoin sans surstocker, la commande de 2640 unités étant traitée comme un pic exceptionnel.

**Tokens utilises pour cette prediction:**
- **Input**: 1,090 tokens
- **Output**: 175 tokens
- **Total**: 1,265 tokens



</details>


<details>
<summary><strong>2. [PF1922] ZF MAYO SAMOURA CHIPOTLE 180GR</strong> - LLM: 1176u vs Médiane: 1196u (Réel: 1302u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1176u
- **Baseline calculee**: 1176u
- **Mediane historique**: 1196u
- **Reel commande**: 1302u
- **Erreur LLM**: 126u (9.7%)
- **Erreur Mediane**: 106u (8.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1176u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juin 2025, soit plus de 130 jours avant la date actuelle (29 octobre 2025). Bien que l'historique récent soit limité, le cycle de commande observé l'année précédente montre des réapprovisionnements réguliers. Compte tenu du délai important depuis la dernière livraison et du seuil de réapprovisionnement de 30 jours, le risque de rupture est critique. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des volumes de 1050u et 1302u. En incluant l'historique N-1 pour stabiliser la prévision, la médiane des commandes se situe à 1176u (médiane entre 1050, 1050, 1100, 1269, 1292, 1302, 1400, 1400). Conformément à la règle de prudence B2B, nous retenons cette valeur médiane pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,035 tokens
- **Output**: 263 tokens
- **Total**: 1,298 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF1937] ZF MAYO TAPAS TRUFFES 180GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 11:57:24: 2640u
- 2025-06-17 12:12:45: 1302u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-09 09:03:56: 631u
- 2024-06-24 09:13:05: 1400u
- 2024-06-07 11:48:13: 1400u
- 2024-05-28 08:23:44: 1050u
- 2024-04-18 10:10:28: 792u
- 2024-02-08 13:56:05: 805u
- 2024-02-08 13:48:29: 1791u
- 2024-01-24 12:15:25: 1750u
- 2024-01-05 12:43:30: 1400u
- 2023-11-24 12:57:57: 1050u

**Quantite Mediane (fallback)**: 1302u
**Quantite Reelle**: 1302u

</details>


<details>
<summary><strong>2. [PF1922] ZF MAYO SAMOURA CHIPOTLE 180GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 12:12:45: 1302u
- 2025-06-13 12:10:04: 1050u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 09:13:05: 1400u
- 2024-06-07 11:48:13: 1400u
- 2024-05-28 08:23:44: 1050u
- 2024-04-18 10:10:28: 1292u
- 2024-02-08 13:56:05: 1100u
- 2024-02-08 13:48:29: 1269u
- 2023-11-24 12:57:57: 1050u

**Quantite Mediane (fallback)**: 1176u
**Quantite Reelle**: 1302u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3269] ZF MAYO SWEET CHILI SRIRACHA 180GR | 1268 | Predicted 1268u but not ordered |
| [PF2995] ZF PIZZA DRESSING 250ML | 640 | Predicted 640u but not ordered |
| [PF1919] ZF MAYO BEARNAISE 180GR | 1050 | Predicted 1050u but not ordered |
| [PF3242] ZF SAUCE AIOLI 180GR | 1400 | Predicted 1400u but not ordered |
| [PF2994] ZF CAESAR DRESSING 250ML | 480 | Predicted 480u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:52.615Z*
