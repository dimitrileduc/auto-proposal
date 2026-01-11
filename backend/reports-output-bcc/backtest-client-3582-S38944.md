# Rapport Backtest - Client SCHMETS  DELICATESSES

## Contexte

- **Client** : SCHMETS  DELICATESSES (ID: 3582)
- **Commande réelle** : S38944
- **Date commande** : 2025-09-03 08:02:56
- **Date cutoff système** : 2025-09-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 8
- **Tokens**: 8,142 input + 1,523 output = 9,665 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 8 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 29.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 47.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 58.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -18.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 80 | 65 | 15.0 | 23.1% | partial | Non | Non | LLM |
| [PF1844] FILOU ANDALOUSE SQUEEZE 300ML | 40 | 19 | 21.0 | 110.5% | partial | Non | Non | LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 32 | 80 | 48.0 | 60.0% | partial | Non | Non | LLM |
| [PF0089] FILOU VOL AU VENT 400 GR | 48 | 80 | 32.0 | 40.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 80u vs Médiane: 80u (Réel: 65u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 80u
- **Baseline calculee**: 80u
- **Mediane historique**: 80u
- **Reel commande**: 65u
- **Erreur LLM**: 15u (23.1%)
- **Erreur Mediane**: 15u (23.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 80u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande enregistrée remonte au 06/05/2025, soit environ 119 jours avant la date actuelle (02/09/2025). Bien que l'historique récent soit lacunaire, l'historique N-1 montre une activité régulière durant l'été et l'automne (août, septembre, novembre). En application du principe de précaution B2B et face à une absence de commande depuis plus de 3 mois, le risque de rupture est imminent. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique long terme montre une quantité récurrente et stable de 80 unités (mode et médiane sur 2024). La commande de 4u en avril est traitée comme une anomalie ou un ajustement mineur. La médiane des commandes significatives étant de 80u, cette quantité est retenue pour couvrir le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 1,106 tokens
- **Output**: 223 tokens
- **Total**: 1,329 tokens



</details>


<details>
<summary><strong>2. [PF1844] FILOU ANDALOUSE SQUEEZE 300ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 19u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 40u
- **Baseline calculee**: 40u
- **Mediane historique**: 40u
- **Reel commande**: 19u
- **Erreur LLM**: 21u (110.5%)
- **Erreur Mediane**: 21u (110.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 40u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre des commandes volumineuses espacées (mai et novembre). La dernière commande connue remontant à plus d'un an, le stock est théoriquement épuisé. En application du principe de précaution B2B et face à l'absence de données récentes pour établir un cycle précis, un besoin de réapprovisionnement est détecté pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique récent, la prévision se base sur les données N-1. Les deux dernières commandes connues étant de 40 unités, la médiane de 40 est retenue pour maintenir le niveau de stock habituel.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 185 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 32u vs Médiane: 32u (Réel: 80u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 32u
- **Baseline calculee**: 32u
- **Mediane historique**: 32u
- **Reel commande**: 80u
- **Erreur LLM**: 48u (60.0%)
- **Erreur Mediane**: 48u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 32u (risque detecte)

**Raisonnement LLM:**
L'historique récent (Recent Orders) est vide, mais l'analyse de l'historique N-1 montre une activité régulière à cette période. La dernière commande enregistrée date du 19 août 2024 (32u), précédée d'une commande en juillet (32u) et juin (32u). Le cycle moyen observé est d'environ 30 à 45 jours. Étant donné que nous sommes le 2 septembre 2025 et que la dernière commande théorique remonte à plus de 12 mois, il existe un risque de rupture imminent pour couvrir les besoins des 30 prochains jours (Replenishment Threshold Days). Conformément à la règle de précaution B2B et à l'utilisation de la médiane des quantités historiques (32u), une commande de 32 unités est préconisée pour relancer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 1,049 tokens
- **Output**: 199 tokens
- **Total**: 1,248 tokens



</details>


<details>
<summary><strong>4. [PF0089] FILOU VOL AU VENT 400 GR</strong> - LLM: 48u vs Médiane: 48u (Réel: 80u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 48u
- **Baseline calculee**: 48u
- **Mediane historique**: 48u
- **Reel commande**: 80u
- **Erreur LLM**: 32u (40.0%)
- **Erreur Mediane**: 32u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 48u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Bien qu'il n'y ait pas de commandes récentes en 2025, l'historique N-1 montre une activité régulière entre mai et juillet (cycles de 20 à 30 jours). La dernière commande enregistrée date de juillet 2024. En application du principe de précaution B2B et face à l'absence de données récentes pour confirmer un arrêt de commercialisation, un risque de rupture est identifié pour couvrir la période de rentrée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre une stabilité parfaite avec une quantité récurrente de 48 unités (médiane et mode). Le pic de 96u est considéré comme exceptionnel. La quantité retenue est donc de 48 unités pour maintenir le stock standard.

**Tokens utilises pour cette prediction:**
- **Input**: 1,033 tokens
- **Output**: 193 tokens
- **Total**: 1,226 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-06 07:49:17: 60u
- 2025-04-23 09:16:04: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 06:52:42: 80u
- 2024-07-15 07:13:28: 80u
- 2024-07-08 06:41:51: 40u
- 2024-06-07 11:51:10: 80u
- 2024-05-17 15:15:13: 40u
- 2024-04-12 09:35:31: 80u
- 2024-03-15 12:29:47: 80u
- 2024-02-07 14:17:48: 80u
- 2024-01-02 07:53:03: 80u
- 2023-12-07 13:58:00: 0u
- 2023-11-28 07:30:31: 0u
- 2023-11-24 12:58:07: 80u

**Quantite Mediane (fallback)**: 80u
**Quantite Reelle**: 65u

</details>


<details>
<summary><strong>2. [PF1844] FILOU ANDALOUSE SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-03 09:23:48: 40u
- 2023-11-24 12:58:12: 40u

**Quantite Mediane (fallback)**: 40u
**Quantite Reelle**: 19u

</details>


<details>
<summary><strong>3. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 06:52:42: 32u
- 2024-07-08 06:41:51: 32u
- 2024-06-07 11:51:10: 32u
- 2024-04-12 09:35:31: 64u
- 2024-02-09 11:44:47: 64u
- 2024-01-02 07:53:03: 64u
- 2023-12-07 13:58:00: 0u
- 2023-11-28 07:30:31: 0u
- 2023-10-27 14:06:41: 64u
- 2023-10-24 09:02:20: 0u
- 2023-09-25 11:25:44: 32u

**Quantite Mediane (fallback)**: 32u
**Quantite Reelle**: 80u

</details>


<details>
<summary><strong>4. [PF0089] FILOU VOL AU VENT 400 GR</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-08 06:41:51: 48u
- 2024-06-07 11:51:10: 48u
- 2024-05-17 15:15:13: 48u
- 2024-03-22 11:24:28: 48u
- 2024-01-19 12:53:34: 48u
- 2024-01-15 08:21:42: 96u
- 2023-12-07 13:58:00: 0u
- 2023-11-28 07:30:31: 0u
- 2023-10-24 09:02:20: 0u
- 2023-10-09 07:56:06: 48u

**Quantite Mediane (fallback)**: 48u
**Quantite Reelle**: 80u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0085] FILOU CURRY KETCHUP  10 KG | 8 | Predicted 8u but not ordered |
| [PF0078] FILOU CHASSEUR 5 L | 20 | Predicted 20u but not ordered |
| [PF0096] FILOU MOUTARDE 3 KG | 5 | Predicted 5u but not ordered |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 40 | Predicted 40u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:17:24.940Z*
