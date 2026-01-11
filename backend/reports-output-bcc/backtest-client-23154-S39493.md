# Rapport Backtest - Client HALLET DRINK SHOP

## Contexte

- **Client** : HALLET DRINK SHOP (ID: 23154)
- **Commande réelle** : S39493
- **Date commande** : 2025-10-01 13:31:26
- **Date cutoff système** : 2025-09-30 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 18
- **Tokens**: 16,851 input + 2,913 output = 19,764 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 44.4% | 18 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 61.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.88 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 41.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 42.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -17.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV131] LV Tartinade Potiron 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV188] LV Tartinade Aubergine  380g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 04/08/2025, soit 57 jours. L'historique montre un cycle de commande irrégulier mais récurrent (environ tous les 3-4 mois). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans une zone de risque de rupture par rapport à la fréquence historique (dernière commande N-1 en septembre). En application du principe de précaution B2B et face à un cycle incertain, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane et au mode des commandes récentes et historiques, ce produit présentant une rotation très faible et stable.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 153 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>2. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 04/08/2025, soit 57 jours. Bien que le cycle moyen soit difficile à établir précisément, le délai écoulé suggère un besoin imminent pour éviter une rupture de stock sur les 30 prochains jours (principe de précaution B2B). En suivant la règle de la médiane des commandes récentes (1u en 2025) et en privilégiant la valeur la plus basse pour éviter le surstockage sur un produit à faible rotation, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 142 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence irrégulière avec une dernière commande effectuée il y a 57 jours (04/08/2025). Bien que le cycle moyen soit difficile à établir précisément, le délai écoulé dépasse largement les 30 jours du seuil de réapprovisionnement, créant un risque de rupture imminent. En application du principe de précaution B2B, une commande est nécessaire. Pour la quantité, l'historique récent montre des volumes faibles (2u et 3u). La commande exceptionnelle de 22u en septembre 2024 est écartée car considérée comme un pic ponctuel. La médiane des commandes régulières étant de 2u, cette valeur est retenue pour éviter le surstockage tout en maintenant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 177 tokens
- **Total**: 1,150 tokens



</details>


<details>
<summary><strong>4. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 60 à 90 jours. La dernière commande datant du 4 août 2025 (soit 57 jours avant la date actuelle), nous avons dépassé 70% du cycle habituel. Un risque de rupture est identifié pour les 30 prochains jours (Replenishment Threshold Days). En application du principe de précaution B2B et de la règle de la médiane sur les commandes récentes (3u en mai et août 2025), une commande de 3 unités est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 147 tokens
- **Total**: 1,120 tokens



</details>


<details>
<summary><strong>5. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 04/08/2025, soit environ 57 jours. Bien que le cycle soit irrégulier, le délai écoulé dépasse largement le seuil de précaution (70% du cycle moyen estimé) et le risque de rupture est réel dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, une commande est nécessaire. Pour la quantité, la médiane des commandes récentes et historiques (hors pics exceptionnels de 10u et 6u) est de 1 unité. Conformément aux règles de gestion des rotations faibles, on maintient la quantité de 1u sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 977 tokens
- **Output**: 172 tokens
- **Total**: 1,149 tokens



</details>


<details>
<summary><strong>6. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 07/05/2025, soit plus de 140 jours sans activité, ce qui dépasse largement les cycles observés l'année précédente (environ 60 à 120 jours). Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que nous entrons dans une période où des commandes ont été enregistrées l'année passée (novembre). La quantité retenue est de 3 unités, correspondant à la médiane et au volume de la commande la plus récente, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 153 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>7. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 07/05/2025, soit plus de 140 jours, ce qui dépasse largement les cycles observés précédemment. Bien que la rotation soit faible, l'historique N-1 montre une commande de 2 unités à la mi-mai et une autre en novembre. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande) et pour couvrir la période automnale correspondant à la saisonnalité du produit (potiron), un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (2023-2024), afin de maintenir un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 166 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>8. [LV188] LV Tartinade Aubergine  380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 07/05/2025, soit plus de 140 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en septembre (09/09/2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture prolongée sur cette période. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique (récent et N-1) est constant à 1 unité. Conformément à la règle sur les rotations faibles (1-2u), la quantité de 1 est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 172 tokens
- **Total**: 1,074 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [LV136] LV Tartinade Betterave 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 12:35:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:28:36: 1u
- 2024-05-16 13:14:28: 1u
- 2024-01-30 10:47:48: 1u
- 2023-11-17 07:56:28: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 12:35:41: 1u
- 2025-05-07 09:15:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-04 07:44:33: 2u
- 2024-05-16 13:14:28: 2u
- 2023-11-17 07:56:28: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 12:35:41: 3u
- 2025-05-07 09:15:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:28:36: 22u
- 2024-07-04 07:44:33: 2u
- 2024-05-16 13:14:28: 2u
- 2024-01-30 10:47:48: 3u
- 2023-11-17 07:56:28: 14u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 12:35:41: 3u
- 2025-05-07 09:15:06: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:28:36: 1u
- 2024-07-04 07:44:33: 3u
- 2024-05-16 13:14:28: 2u
- 2024-01-30 10:47:48: 3u
- 2023-11-17 07:56:28: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 12:35:41: 1u
- 2025-05-07 09:15:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:28:36: 10u
- 2024-07-04 07:44:33: 1u
- 2024-05-16 13:14:28: 1u
- 2024-01-30 10:47:48: 1u
- 2023-11-17 07:56:28: 6u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>6. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-07 09:15:06: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-04 07:44:33: 1u
- 2024-01-30 10:47:48: 3u
- 2023-11-17 07:56:28: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [LV131] LV Tartinade Potiron 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-07 09:15:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-16 13:14:28: 2u
- 2023-11-17 07:56:28: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [LV188] LV Tartinade Aubergine  380g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-07 09:15:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:28:36: 1u
- 2024-07-04 07:44:33: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV132] LV Tartinade Houmous type 190g | 1 | Predicted 1u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Predicted 2u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 2 | Predicted 2u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Predicted 2u but not ordered |
| [LV138] LV Tartinade Carotte gingembre  380g | 1 | Predicted 1u but not ordered |
| [LV189] LV Tartinade Houmous Type 380g | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:18:25.913Z*
