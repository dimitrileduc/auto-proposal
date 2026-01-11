# Rapport Backtest - Client ILIS    SA

## Contexte

- **Client** : ILIS    SA (ID: 3585)
- **Commande réelle** : S40179
- **Date commande** : 2025-11-06 14:07:11
- **Date cutoff système** : 2025-11-05 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 7,430 input + 1,330 output = 8,760 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 83.3% | 6 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 90.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 62.80 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 49.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -45.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 160 | 400 | 240.0 | 60.0% | partial | LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 2 | 10 | 8.0 | 80.0% | partial | LLM |
| [PF0077] FILOU PROVENCALE 5 L | 50 | 80 | 30.0 | 37.5% | partial | LLM |
| [PF0097] FILOU MOUTARDE 5 KG | 20 | 40 | 20.0 | 50.0% | partial | LLM |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 104 | 88 | 16.0 | 18.2% | partial | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 240u (Réel: 400u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 160u
- **Baseline calculee**: 160u
- **Mediane historique**: 240u
- **Reel commande**: 400u
- **Erreur LLM**: 240u (60.0%)
- **Erreur Mediane**: 160u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 160u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande hebdomadaire (tous les vendredis en octobre). La dernière commande date du 24 octobre, soit il y a 12 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car le cycle habituel de 7 jours est déjà dépassé. Concernant la quantité, on observe une tendance à la baisse sur les dernières semaines (passant de 240u à 160u, puis 80u). En appliquant la règle de la médiane sur les commandes d'octobre (80, 160, 160) et en privilégiant la prudence face à la baisse récente, une quantité de 160u est retenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,205 tokens
- **Output**: 189 tokens
- **Total**: 1,394 tokens



</details>


<details>
<summary><strong>2. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 2u vs Médiane: 10u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 10u
- **Reel commande**: 10u
- **Erreur LLM**: 8u (80.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle récent montre un intervalle de 42 jours entre les deux dernières commandes. Au 05/11/2025, 12 jours se sont écoulés depuis la dernière commande (24/10). Avec un seuil de réapprovisionnement de 30 jours, l'horizon de couverture atteint 42 jours après la date actuelle, ce qui correspond exactement au cycle de rotation observé. Il existe donc un risque de rupture imminent durant cette période. Conformément à la règle de précaution B2B et à la méthode de la médiane sur l'historique récent (2u et 6u), la quantité la plus basse de 2 unités est retenue pour éviter le surstockage tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 1,062 tokens
- **Output**: 170 tokens
- **Total**: 1,232 tokens



</details>


<details>
<summary><strong>3. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 50u vs Médiane: 45u (Réel: 80u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 50u
- **Baseline calculee**: 50u
- **Mediane historique**: 45u
- **Reel commande**: 80u
- **Erreur LLM**: 30u (37.5%)
- **Erreur Mediane**: 35u (43.8%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 50u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre une fréquence d'approvisionnement environ tous les 12 à 30 jours (dernière commande le 24/10, soit il y a 12 jours). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent d'ici la fin du mois de novembre. Bien que l'historique de l'année précédente montre des volumes plus faibles (30u), la tendance 2025 est nettement supérieure avec des commandes oscillant entre 40u et 80u. En appliquant la règle de la médiane sur les commandes récentes (40, 50, 80, 80, 80, 80), la médiane se situe à 80u, mais conformément au principe de prudence et à la baisse observée sur les deux dernières commandes (50u puis 40u), la quantité de 50u est retenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,175 tokens
- **Output**: 227 tokens
- **Total**: 1,402 tokens



</details>


<details>
<summary><strong>4. [PF0097] FILOU MOUTARDE 5 KG</strong> - LLM: 20u vs Médiane: 20u (Réel: 40u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 20u
- **Baseline calculee**: 20u
- **Mediane historique**: 20u
- **Reel commande**: 40u
- **Erreur LLM**: 20u (50.0%)
- **Erreur Mediane**: 20u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 20u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 23 septembre 2025, soit 43 jours. Bien que l'historique récent soit limité à deux points, le cycle moyen observé historiquement (environ 30-45 jours) et le délai actuel indiquent un risque de rupture imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). En application du principe de précaution B2B, une commande est nécessaire. Pour la quantité, la valeur de 60u en septembre est traitée comme un pic exceptionnel par rapport à l'historique long terme très stable. La médiane historique et la quantité récurrente la plus fréquente étant de 20u, cette valeur est retenue pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,066 tokens
- **Output**: 169 tokens
- **Total**: 1,235 tokens



</details>


<details>
<summary><strong>5. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 104u vs Médiane: 52u (Réel: 88u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 104u
- **Baseline calculee**: 104u
- **Mediane historique**: 52u
- **Reel commande**: 88u
- **Erreur LLM**: 16u (18.2%)
- **Erreur Mediane**: 36u (40.9%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 104u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande irrégulier avec une dernière commande enregistrée le 29 août 2025. Depuis cette date, 68 jours se sont écoulés, ce qui dépasse largement les intervalles observés précédemment. En application du principe de précaution B2B (risque de rupture imminent ou cycle difficile à déterminer), un besoin de réapprovisionnement est identifié pour l'horizon des 30 prochains jours. Pour la quantité, bien que des volumes de 52u soient fréquents en N-1, les commandes les plus récentes de 2025 montrent une augmentation des volumes (104u et 156u). La médiane des commandes récentes (26, 104, 156) est de 104u. Conformément aux règles de gestion, nous retenons cette valeur médiane pour couvrir le besoin sans surestimer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 1,107 tokens
- **Output**: 207 tokens
- **Total**: 1,314 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-24 11:20:59: 80u
- 2025-10-17 12:59:10: 160u
- 2025-10-10 09:19:46: 160u
- 2025-09-26 09:43:49: 240u
- 2025-09-12 08:28:12: 240u
- 2025-08-29 11:50:51: 240u
- 2025-08-07 12:31:36: 400u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:23:33: 80u
- 2024-07-15 07:19:05: 240u
- 2024-06-28 08:15:03: 800u
- 2024-06-24 06:41:26: 320u
- 2024-06-10 06:26:08: 80u
- 2024-05-31 10:26:02: 80u
- 2024-05-27 07:14:06: 240u
- 2024-05-17 14:12:43: 320u
- 2024-04-25 14:17:14: 320u
- 2024-04-25 13:58:12: 160u
- 2024-04-05 10:00:00: 240u
- 2024-03-22 10:15:32: 160u

**Quantite Mediane (fallback)**: 160u
**Quantite Reelle**: 400u

</details>


<details>
<summary><strong>2. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-24 11:20:59: 2u
- 2025-09-12 08:28:12: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-06 06:22:18: 10u
- 2024-06-10 06:26:08: 3u
- 2024-05-31 10:26:02: 3u
- 2024-04-25 14:17:14: 10u
- 2024-03-22 10:15:32: 10u
- 2024-02-23 11:22:54: 10u
- 2024-02-09 07:26:34: 10u
- 2024-01-18 13:13:49: 10u
- 2024-01-05 07:48:07: 10u
- 2023-12-01 09:40:17: 10u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>3. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-24 11:20:59: 40u
- 2025-09-23 13:54:09: 50u
- 2025-09-12 08:28:12: 80u
- 2025-08-29 11:50:51: 80u
- 2025-08-29 11:50:51: 80u
- 2025-08-05 09:10:12: 80u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:23:33: 30u
- 2024-08-06 06:22:18: 30u
- 2024-06-28 08:15:03: 30u
- 2024-06-10 06:26:08: 30u
- 2024-05-27 07:14:06: 30u
- 2024-04-25 14:17:14: 30u
- 2024-03-22 10:15:32: 30u
- 2024-03-15 10:54:41: 30u
- 2024-03-12 13:08:50: 30u
- 2024-02-09 07:26:34: 10u
- 2024-01-05 07:48:07: 40u
- 2023-12-01 09:40:17: 20u

**Quantite Mediane (fallback)**: 50u
**Quantite Reelle**: 80u

</details>


<details>
<summary><strong>4. [PF0097] FILOU MOUTARDE 5 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-23 13:54:09: 60u
- 2025-08-05 09:10:12: 20u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 07:19:05: 20u
- 2024-06-28 08:15:03: 30u
- 2024-06-24 06:41:26: 5u
- 2024-06-10 06:26:08: 20u
- 2024-05-27 07:14:06: 20u
- 2024-05-17 14:15:25: 20u
- 2024-04-25 14:17:14: 20u
- 2024-03-12 13:08:50: 20u
- 2023-12-01 09:40:17: 20u
- 2023-11-16 07:09:41: 10u

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 40u

</details>


<details>
<summary><strong>5. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-29 11:50:51: 104u
- 2025-08-05 09:10:12: 156u
- 2025-08-05 08:25:24: 26u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-28 08:15:03: 104u
- 2024-06-24 06:41:26: 52u
- 2024-05-31 10:26:02: 52u
- 2024-05-27 07:14:06: 52u
- 2024-04-25 14:17:14: 52u
- 2024-03-22 10:15:32: 52u
- 2024-03-12 13:08:50: 52u
- 2024-02-09 07:26:34: 52u
- 2024-01-18 13:13:49: 52u
- 2023-12-01 09:40:17: 52u
- 2023-11-16 07:09:41: 52u

**Quantite Mediane (fallback)**: 104u
**Quantite Reelle**: 88u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0089] FILOU VOL AU VENT 400 GR | 6 | Predicted 6u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:32.736Z*
