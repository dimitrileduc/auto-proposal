# Rapport Backtest - Client E.L.D. GMBH

## Contexte

- **Client** : E.L.D. GMBH (ID: 3875)
- **Commande réelle** : S40277
- **Date commande** : 2025-11-12 12:18:17
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 4,513 input + 808 output = 5,321 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 8.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 11.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 12.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 80 | 96 | 16.0 | 16.7% | partial | LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 80 | 80 | 0.0 | 0.0% | exact | LLM |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 48 | 48 | 0.0 | 0.0% | exact | LLM |
| [MF0062] ​MF Tarti Betterave rouge | 64 | 48 | 16.0 | 33.3% | partial | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 80u vs Médiane: 104u (Réel: 96u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 80u
- **Baseline calculee**: 80u
- **Mediane historique**: 104u
- **Reel commande**: 96u
- **Erreur LLM**: 16u (16.7%)
- **Erreur Mediane**: 8u (8.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 80u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande très régulier toutes les 2 semaines (14 jours). La dernière commande date du 03/11/2025, soit il y a 8 jours. Avec un seuil de réapprovisionnement de 30 jours, la prochaine échéance théorique (autour du 17/11) tombe largement dans la fenêtre de risque. Concernant la quantité, bien que des pics à 128u ou 192u soient visibles, la quantité la plus fréquente et la médiane des commandes récentes est de 80u. Conformément aux règles de gestion B2B privilégiant la médiane et la prudence face aux valeurs extrêmes, une commande de 80u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,223 tokens
- **Output**: 177 tokens
- **Total**: 1,400 tokens



</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 80u vs Médiane: 72u (Réel: 80u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 80u
- **Baseline calculee**: 80u
- **Mediane historique**: 72u
- **Reel commande**: 80u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 8u (10.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 80u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre une fréquence d'approvisionnement toutes les 2 à 4 semaines (dernières commandes les 03/11, 20/10 et 22/09). Avec une dernière commande effectuée il y a 8 jours et un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B (70% du cycle moyen atteint ou dépassé d'ici l'horizon cible). Concernant la quantité, les trois dernières commandes sont stables à 80 unités. La valeur de 192 unités en juin est traitée comme un pic exceptionnel et exclue. La médiane des commandes récentes (80, 80, 80, 64, 64, 64) se situe entre 64 et 80 ; conformément à la tendance haussière stabilisée sur les trois derniers mois, la quantité de 80 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,204 tokens
- **Output**: 226 tokens
- **Total**: 1,430 tokens



</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 48u vs Médiane: 64u (Réel: 48u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 48u
- **Baseline calculee**: 48u
- **Mediane historique**: 64u
- **Reel commande**: 48u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 16u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 48u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 35 à 45 jours. La dernière commande date du 3 novembre (il y a 8 jours). Avec un seuil de réapprovisionnement de 30 jours, le prochain besoin théorique se situe autour de la mi-décembre, ce qui entre dans l'horizon de vigilance. Bien que la commande soit récente, le principe de précaution B2B s'applique pour éviter toute rupture sur un produit à rotation régulière. Pour la quantité, la médiane des commandes récentes (48, 48, 128, 64, 64) est de 64, mais les deux dernières commandes se sont stabilisées à 48 unités. Conformément à la règle de choisir la valeur la plus basse en cas de doute ou de stabilisation, une quantité de 48 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,161 tokens
- **Output**: 201 tokens
- **Total**: 1,362 tokens



</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 64u vs Médiane: 144u (Réel: 48u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 64u
- **Baseline calculee**: 64u
- **Mediane historique**: 144u
- **Reel commande**: 48u
- **Erreur LLM**: 16u (33.3%)
- **Erreur Mediane**: 96u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 64u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 35, 49 et 42 jours (moyenne de 42 jours). La dernière commande datant du 03/11 (il y a 8 jours), le prochain besoin est estimé sous 34 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque (8 + 30 = 38 jours, soit > 70% du cycle moyen). En application du principe de précaution B2B, une commande est nécessaire. Pour la quantité, les volumes sont irréguliers (48u à 192u) ; la médiane historique se situe à 112u, mais la règle de prudence impose de choisir la valeur basse la plus cohérente avec les rotations récentes (64u) pour éviter le surstockage sur un produit à rotation variable.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 204 tokens
- **Total**: 1,129 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 15:17:41: 80u
- 2025-10-20 09:34:51: 80u
- 2025-10-06 12:04:21: 192u
- 2025-09-22 10:01:10: 80u
- 2025-08-19 07:47:17: 128u
- 2025-08-04 10:51:04: 128u
- 2025-07-14 09:47:20: 64u
- 2025-06-16 06:38:46: 192u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 12:12:52: 80u
- 2024-10-15 07:31:18: 80u
- 2024-09-30 08:48:16: 80u
- 2024-09-18 06:24:53: 80u
- 2024-08-19 09:44:26: 80u
- 2024-07-30 11:20:19: 80u
- 2024-07-15 11:14:37: 32u
- 2024-07-02 07:36:02: 48u
- 2024-06-17 11:39:54: 192u
- 2024-05-16 07:53:36: 64u
- 2024-05-06 12:20:45: 128u
- 2024-04-16 06:52:33: 48u

**Quantite Mediane (fallback)**: 80u
**Quantite Reelle**: 96u

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 15:17:41: 80u
- 2025-10-20 09:34:51: 80u
- 2025-09-22 10:01:10: 80u
- 2025-08-19 07:47:17: 64u
- 2025-08-04 10:51:04: 64u
- 2025-07-14 09:47:20: 64u
- 2025-06-16 06:38:46: 192u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 12:12:52: 64u
- 2024-10-15 07:31:18: 64u
- 2024-09-30 08:48:16: 64u
- 2024-09-18 06:24:53: 64u
- 2024-08-19 09:44:26: 80u
- 2024-07-30 11:20:19: 64u
- 2024-07-15 11:14:37: 32u
- 2024-07-02 07:36:02: 64u
- 2024-06-17 11:39:54: 64u
- 2024-05-16 07:53:36: 64u
- 2024-05-06 12:20:45: 128u
- 2024-04-16 06:52:33: 32u

**Quantite Mediane (fallback)**: 80u
**Quantite Reelle**: 80u

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 15:17:41: 48u
- 2025-09-22 10:01:10: 48u
- 2025-08-04 10:51:04: 128u
- 2025-07-14 09:47:20: 64u
- 2025-06-30 09:11:19: 64u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 12:12:52: 32u
- 2024-10-15 07:31:18: 32u
- 2024-09-30 08:48:16: 48u
- 2024-09-18 06:24:53: 32u
- 2024-08-19 09:44:26: 32u
- 2024-07-30 11:20:19: 32u
- 2024-07-15 11:14:37: 48u
- 2024-06-17 11:39:54: 64u
- 2024-05-16 07:53:36: 32u
- 2024-05-06 12:20:45: 64u
- 2024-04-16 06:52:33: 32u
- 2024-01-29 09:49:34: 48u

**Quantite Mediane (fallback)**: 48u
**Quantite Reelle**: 48u

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 15:17:41: 48u
- 2025-09-22 10:01:10: 160u
- 2025-08-04 10:51:04: 64u
- 2025-06-30 09:11:19: 192u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 64u
**Quantite Reelle**: 48u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:00.288Z*
