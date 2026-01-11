# Rapport Backtest - Client Conserverie Et Moutarderie Belge

## Contexte

- **Client** : Conserverie Et Moutarderie Belge (ID: 30)
- **Commande réelle** : S40304
- **Date commande** : 2025-11-13 10:07:30
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 37
- **Tokens**: 36,596 input + 6,056 output = 42,652 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 8.1% | 37 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 15.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 66.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 66.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 02/10/2025, soit 41 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le cycle de commande est largement dépassé, ce qui indique un besoin imminent (Étape 1). En l'absence d'historique long, la quantité est basée sur la médiane des commandes récentes (3u). Conformément au principe de précaution B2B et à la règle de maintien des rotations régulières, une commande de 3 unités est préconisée pour éviter la rupture.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 132 tokens
- **Total**: 1,023 tokens



</details>


<details>
<summary><strong>2. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 02/10/2025, soit plus de 40 jours. Bien que l'historique récent soit faible (3 unités depuis août), l'historique N-1 montre une activité régulière en octobre et novembre (commandes les 24/10 et 05/11). Le délai depuis la dernière commande dépasse largement le cycle habituel constaté l'an dernier, ce qui indique un risque de rupture imminent. En suivant le principe de précaution B2B et la règle de la médiane sur les commandes récentes (1u), une commande de 1 unité est préconisée pour maintenir le stock sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,106 tokens
- **Output**: 152 tokens
- **Total**: 1,258 tokens



</details>


<details>
<summary><strong>3. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 02/10/2025, soit 41 jours avant la date actuelle (12/11/2025). L'historique montre un cycle de commande irrégulier mais fréquent à cette période de l'année (cf. commande du 30/09/2024). Avec un seuil de réapprovisionnement de 30 jours, le délai depuis la dernière commande dépasse largement la fréquence habituelle, créant un risque de rupture ou un besoin imminent. Par principe de précaution B2B, le besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 est extrêmement stable avec des commandes systématiques de 1 unité. La médiane des quantités est de 1. Conformément aux règles sur les rotations faibles, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 216 tokens
- **Total**: 1,188 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 13:11:26: 3u
- 2025-10-02 13:10:20: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 13:11:26: 1u
- 2025-10-02 13:10:20: 1u
- 2025-08-26 09:02:26: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-05 07:58:24: 3u
- 2024-10-24 13:24:00: 2u
- 2024-10-11 06:31:27: 1u
- 2024-09-30 06:51:46: 1u
- 2024-09-24 13:15:25: 1u
- 2024-09-12 06:23:22: 2u
- 2024-08-29 06:19:36: 4u
- 2024-08-23 08:30:23: 1u
- 2024-08-19 06:01:21: 1u
- 2024-08-05 06:18:28: 5u
- 2024-07-10 11:35:11: 3u
- 2024-07-04 07:31:57: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 13:11:26: 1u
- 2025-10-02 13:10:20: 1u
- 2025-08-26 09:02:26: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:51:46: 1u
- 2024-08-23 08:30:23: 1u
- 2024-03-28 11:30:09: 1u
- 2024-03-21 09:42:04: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (34)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 75 | Predicted 75u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 4 | Predicted 4u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 9 | Predicted 9u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 4 | Predicted 4u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 6 | Predicted 6u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 6 | Predicted 6u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 4 | Predicted 4u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 6 | Predicted 6u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 3 | Predicted 3u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 2 | Predicted 2u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 6 | Predicted 6u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 6 | Predicted 6u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 4 | Predicted 4u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | Predicted 2u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | Predicted 2u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 10 | Predicted 10u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 3 | Predicted 3u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 2 | Predicted 2u but not ordered |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 3 | Predicted 3u but not ordered |
| [LV342] LV Organic Broccoli Spread 190 g | 4 | Predicted 4u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 4 | Predicted 4u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 4 | Predicted 4u but not ordered |
| [DIS0003] Display TVF bois | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 117 | Predicted 117u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:16.742Z*
