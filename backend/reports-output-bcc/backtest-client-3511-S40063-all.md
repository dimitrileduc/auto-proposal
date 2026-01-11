# Rapport Backtest - Client CARRY GERON SA

## Contexte

- **Client** : CARRY GERON SA (ID: 3511)
- **Commande réelle** : S40063
- **Date commande** : 2025-11-03 13:20:39
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 6
- **Tokens**: 6,472 input + 1,160 output = 7,632 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 6 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 80.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 25.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 35.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 28.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -28.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0075] FILOU CHASSEUR  10 L | 52 | 44 | 8.0 | 18.2% | partial | Non | Non | LLM |
| [PF0078] FILOU CHASSEUR 5 L | 100 | 160 | 60.0 | 37.5% | partial | Non | Non | LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 24 | 22 | 2.0 | 9.1% | partial | Non | Non | LLM |
| [PF0097] FILOU MOUTARDE 5 KG | 30 | 60 | 30.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 52u vs Médiane: 52u (Réel: 44u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 52u
- **Baseline calculee**: 52u
- **Mediane historique**: 52u
- **Reel commande**: 44u
- **Erreur LLM**: 8u (18.2%)
- **Erreur Mediane**: 8u (18.2%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 52u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre un intervalle moyen d'environ 30 à 35 jours (ex: 35 jours entre le 01/09 et le 06/10). La dernière commande datant du 06/10, nous sommes à 27 jours d'écart au 02/11, soit environ 80% du cycle habituel. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Pour la quantité, bien que les deux dernières commandes (88u et 66u) soient plus élevées, l'historique long terme et la médiane des commandes précédentes se stabilisent à 52u. En application de la règle de prudence B2B privilégiant la médiane et la valeur la plus basse en cas de doute sur une hausse de volume, une commande de 52u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,141 tokens
- **Output**: 208 tokens
- **Total**: 1,349 tokens



</details>


<details>
<summary><strong>2. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 100u vs Médiane: 90u (Réel: 160u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 100u
- **Baseline calculee**: 100u
- **Mediane historique**: 90u
- **Reel commande**: 160u
- **Erreur LLM**: 60u (37.5%)
- **Erreur Mediane**: 70u (43.8%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 100u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre un intervalle moyen d'environ 34 jours (21, 35, 28, 25 jours). La dernière commande datant du 06 octobre (soit 27 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours de seuil de réapprovisionnement. En application du principe de précaution B2B, une commande est nécessaire. Pour la quantité, la médiane des commandes récentes (80, 80, 100, 100, 160) est de 100 unités. Ce volume est cohérent avec l'historique et permet de couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,143 tokens
- **Output**: 170 tokens
- **Total**: 1,313 tokens



</details>


<details>
<summary><strong>3. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 24u vs Médiane: 17u (Réel: 22u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 24u
- **Baseline calculee**: 24u
- **Mediane historique**: 17u
- **Reel commande**: 22u
- **Erreur LLM**: 2u (9.1%)
- **Erreur Mediane**: 5u (22.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 24u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence d'approvisionnement d'environ 35 à 50 jours. La dernière commande datant du 6 octobre (il y a 27 jours), nous entrons dans la fenêtre de risque de rupture compte tenu du seuil de réapprovisionnement de 30 jours. Bien que l'historique N-1 montre des volumes de 11u, les commandes récentes de 2025 se sont stabilisées sur un palier supérieur. La médiane des commandes récentes (24, 12, 24, 24) est de 24u. En application du principe de précaution B2B et pour maintenir la cohérence avec la rotation actuelle, une commande de 24u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,070 tokens
- **Output**: 178 tokens
- **Total**: 1,248 tokens



</details>


<details>
<summary><strong>4. [PF0097] FILOU MOUTARDE 5 KG</strong> - LLM: 30u vs Médiane: 30u (Réel: 60u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 30u
- **Baseline calculee**: 30u
- **Mediane historique**: 30u
- **Reel commande**: 60u
- **Erreur LLM**: 30u (50.0%)
- **Erreur Mediane**: 30u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 30u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 40 jours. La dernière commande datant du 1er septembre 2025, le délai depuis la dernière livraison (62 jours) dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture critique. Bien que l'historique N-1 montre des volumes plus importants en fin d'année (40u-60u), les données récentes de 2025 sont stables à 30u. En application de la règle de la médiane des commandes récentes et par mesure de précaution B2B, une commande de 30 unités est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 1,103 tokens
- **Output**: 163 tokens
- **Total**: 1,266 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:20:55: 88u
- 2025-09-01 09:35:44: 66u
- 2025-08-11 12:34:53: 52u
- 2025-07-14 07:21:06: 52u
- 2025-06-06 12:51:36: 52u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:19:05: 52u
- 2024-09-05 09:51:57: 104u
- 2024-07-03 11:28:09: 104u
- 2024-06-10 08:11:06: 104u
- 2024-05-14 14:52:20: 52u
- 2024-04-09 09:36:52: 104u
- 2024-03-12 13:12:16: 52u
- 2024-02-12 10:47:57: 52u
- 2024-01-08 10:51:07: 52u
- 2023-12-11 15:03:36: 52u
- 2023-11-20 13:36:57: 52u

**Quantite Mediane (fallback)**: 52u
**Quantite Reelle**: 44u

</details>


<details>
<summary><strong>2. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:20:55: 100u
- 2025-09-01 09:35:44: 160u
- 2025-08-11 12:34:53: 100u
- 2025-07-14 07:21:06: 80u
- 2025-06-06 12:51:36: 80u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 07:19:05: 40u
- 2024-09-05 09:51:57: 120u
- 2024-09-05 07:02:54: 20u
- 2024-07-03 11:28:09: 80u
- 2024-06-10 08:11:06: 80u
- 2024-05-14 14:52:20: 120u
- 2024-04-09 09:36:52: 80u
- 2024-02-12 10:48:44: 80u
- 2024-02-12 10:47:57: 30u
- 2024-01-08 10:51:07: 80u
- 2023-12-11 15:03:36: 80u

**Quantite Mediane (fallback)**: 100u
**Quantite Reelle**: 160u

</details>


<details>
<summary><strong>3. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:20:55: 24u
- 2025-09-01 09:35:44: 12u
- 2025-07-14 07:21:06: 24u
- 2025-06-06 12:51:36: 24u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 09:51:57: 11u
- 2024-07-03 11:28:09: 22u
- 2024-06-10 08:11:06: 11u
- 2024-05-14 14:52:20: 11u
- 2024-03-12 13:12:16: 11u
- 2024-02-12 10:47:57: 11u
- 2024-01-08 10:51:07: 11u
- 2023-11-20 13:36:57: 22u

**Quantite Mediane (fallback)**: 24u
**Quantite Reelle**: 22u

</details>


<details>
<summary><strong>4. [PF0097] FILOU MOUTARDE 5 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 09:35:44: 30u
- 2025-08-11 12:34:53: 20u
- 2025-07-14 07:21:06: 30u
- 2025-06-06 12:51:36: 30u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 09:51:57: 60u
- 2024-07-03 11:28:09: 30u
- 2024-06-10 08:11:06: 30u
- 2024-05-14 14:52:20: 30u
- 2024-04-09 09:36:52: 50u
- 2024-03-12 13:12:16: 40u
- 2024-02-12 10:47:57: 30u
- 2024-01-08 10:51:07: 40u
- 2023-12-11 15:03:36: 40u
- 2023-11-20 13:36:57: 30u

**Quantite Mediane (fallback)**: 30u
**Quantite Reelle**: 60u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0096] FILOU MOUTARDE 3 KG | 30 | Predicted 30u but not ordered |
| [PF0089] FILOU VOL AU VENT 400 GR | 4 | Predicted 4u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:34.163Z*
