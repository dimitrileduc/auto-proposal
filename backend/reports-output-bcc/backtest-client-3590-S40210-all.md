# Rapport Backtest - Client MAISON DESPRIET SA

## Contexte

- **Client** : MAISON DESPRIET SA (ID: 3590)
- **Commande réelle** : S40210
- **Date commande** : 2025-11-07 12:48:24
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 11
- **Tokens**: 11,799 input + 1,938 output = 13,737 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 54.5% | 11 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 70.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 84.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 63.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 37.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -63.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 160 | 480 | 320.0 | 66.7% | partial | Non | Non | LLM |
| [PF1140] FILOU SAUCE CHASSEUR 850G | 4 | 8 | 4.0 | 50.0% | partial | Non | Non | LLM |
| [PF0075] FILOU CHASSEUR  10 L | 104 | 264 | 160.0 | 60.6% | partial | Non | Non | LLM |
| [PF3266] JF SAUCE BEARNAISE 3L | 20 | 40 | 20.0 | 50.0% | partial | Non | Non | LLM |
| [PF0084] FILOU CARBONNADES 800 GR | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 480u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 160u
- **Baseline calculee**: 160u
- **Mediane historique**: 160u
- **Reel commande**: 480u
- **Erreur LLM**: 320u (66.7%)
- **Erreur Mediane**: 320u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 160u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande très fréquent, généralement hebdomadaire (dernières commandes les 20/10, 23/10, 27/10 et 03/11). Avec une dernière commande effectuée il y a seulement 3 jours et un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B, d'autant plus que le produit présente une rotation soutenue. Pour la quantité, la médiane des commandes récentes (80, 160, 160, 160, 160, 240, 240, 240) se situe à 160 unités. Conformément aux règles de gestion, nous retenons cette valeur médiane pour couvrir les besoins sans surestimer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 1,226 tokens
- **Output**: 203 tokens
- **Total**: 1,429 tokens



</details>


<details>
<summary><strong>2. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - LLM: 4u vs Médiane: 4u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 8u
- **Erreur LLM**: 4u (50.0%)
- **Erreur Mediane**: 4u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence hebdomadaire régulière (commandes les 20/10, 23/10, 27/10 et 03/11). La dernière commande datant du 03/11, le prochain besoin est imminent au regard du seuil de réapprovisionnement de 30 jours. En appliquant la méthode de la médiane sur l'historique récent (valeurs : 1, 2, 4, 4, 4, 5, 12, 15), la médiane se situe à 4 unités. Le pic de 15u est considéré comme exceptionnel et exclu pour éviter le surstockage. Une quantité de 4 unités permet de maintenir la rotation habituelle sans risque de rupture.

**Tokens utilises pour cette prediction:**
- **Input**: 1,198 tokens
- **Output**: 180 tokens
- **Total**: 1,378 tokens



</details>


<details>
<summary><strong>3. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 104u vs Médiane: 107u (Réel: 264u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 104u
- **Baseline calculee**: 104u
- **Mediane historique**: 107u
- **Reel commande**: 264u
- **Erreur LLM**: 160u (60.6%)
- **Erreur Mediane**: 157u (59.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 104u (risque detecte)

**Raisonnement LLM:**
Le cycle de commande récent est très court (7 à 14 jours en octobre). La dernière commande datant du 27 octobre (soit 10 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours. L'analyse des quantités récentes montre une alternance entre 88u et 132u, avec une médiane calculée à 104u sur les 8 dernières commandes. Conformément aux règles de gestion, nous retenons cette médiane de 104u pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 1,224 tokens
- **Output**: 131 tokens
- **Total**: 1,355 tokens



</details>


<details>
<summary><strong>4. [PF3266] JF SAUCE BEARNAISE 3L</strong> - LLM: 20u vs Médiane: 20u (Réel: 40u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 25 à 30 jours sur les commandes récentes (septembre à octobre). La dernière commande datant du 06/10/2025, soit il y a 31 jours, le seuil de réapprovisionnement de 30 jours est atteint, signalant un risque de rupture imminent. Bien que le volume historique de l'année précédente à la même période (novembre) soit plus faible, la tendance 2025 montre une augmentation structurelle des volumes par commande. En appliquant la règle de la médiane sur les commandes récentes (12, 20, 20, 30, 30, 30), la valeur médiane est de 25u, mais conformément au principe de prudence B2B privilégiant la valeur basse en cas de doute sur une baisse récente (12u en octobre), une quantité de 20u est retenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,165 tokens
- **Output**: 227 tokens
- **Total**: 1,392 tokens



</details>


<details>
<summary><strong>5. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/10/2025, soit exactement 31 jours. Le cycle entre les deux dernières commandes était de 25 jours. Nous avons dépassé ce cycle moyen et le seuil de réapprovisionnement de 30 jours est atteint. Le risque de rupture est avéré. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une consommation constante de 1 unité par commande (septembre et octobre 2025). Bien que l'historique N-1 montre parfois 2 unités, la règle de précaution sur rotation faible et la priorité à la médiane récente imposent de maintenir la quantité à 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 168 tokens
- **Total**: 1,120 tokens



</details>


<details>
<summary><strong>6. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande enregistrée date du 21 octobre 2024. En l'absence de données récentes pour 2025, l'analyse se base sur l'historique N-1. À cette période l'année dernière (novembre/décembre), le produit présentait une rotation active. Le délai depuis la dernière commande théorique dépasse le cycle moyen constaté, créant un risque de rupture imminent sous 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre des volumes compris entre 1u et 4u. La médiane des commandes significatives se situe à 2u. Conformément au principe de précaution B2B et à la règle de ne pas surestimer, une quantité de 2u est préconisée pour couvrir le besoin sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 1,058 tokens
- **Output**: 201 tokens
- **Total**: 1,259 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 08:38:17: 240u
- 2025-10-27 06:58:44: 240u
- 2025-10-23 09:13:38: 80u
- 2025-10-20 08:16:09: 160u
- 2025-10-20 08:08:48: 160u
- 2025-10-06 09:21:48: 160u
- 2025-09-29 05:47:52: 240u
- 2025-09-15 12:12:38: 160u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 06:37:40: 160u
- 2024-10-21 06:08:37: 240u
- 2024-10-10 08:27:59: 160u
- 2024-09-30 07:21:41: 80u
- 2024-09-26 08:50:24: 240u
- 2024-09-16 11:50:49: 320u
- 2024-09-09 11:38:48: 240u
- 2024-08-27 11:41:12: 160u
- 2024-08-27 11:40:22: 320u
- 2024-08-26 08:27:23: 160u
- 2024-08-14 07:59:29: 160u
- 2024-08-12 08:25:02: 160u

**Quantite Mediane (fallback)**: 160u
**Quantite Reelle**: 480u

</details>


<details>
<summary><strong>2. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 08:38:17: 5u
- 2025-10-27 06:58:44: 2u
- 2025-10-23 09:13:38: 15u
- 2025-10-20 08:16:09: 4u
- 2025-10-20 08:08:48: 1u
- 2025-09-29 05:47:52: 4u
- 2025-09-15 12:12:38: 12u
- 2025-09-11 08:10:53: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 06:37:40: 10u
- 2024-10-21 06:08:37: 4u
- 2024-09-16 11:50:49: 6u
- 2024-08-12 08:25:02: 15u
- 2024-06-24 09:19:20: 4u
- 2024-06-17 07:40:59: 10u
- 2024-06-17 07:22:49: 8u
- 2024-06-06 12:27:23: 4u
- 2024-05-31 06:50:36: 4u
- 2024-05-27 07:09:19: 2u
- 2024-04-04 08:57:19: 10u
- 2024-03-07 02:48:05: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>3. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-27 06:58:44: 132u
- 2025-10-20 08:16:09: 88u
- 2025-10-06 09:21:48: 88u
- 2025-09-29 05:47:52: 132u
- 2025-09-11 08:10:53: 132u
- 2025-08-26 15:29:17: 104u
- 2025-08-19 09:04:50: 104u
- 2025-07-29 06:11:06: 52u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 06:08:37: 156u
- 2024-09-26 08:50:24: 156u
- 2024-09-16 11:50:49: 104u
- 2024-09-09 11:38:48: 104u
- 2024-08-27 11:40:22: 104u
- 2024-08-14 07:59:29: 208u
- 2024-07-24 07:35:24: 18u
- 2024-07-24 06:06:23: 156u
- 2024-06-17 07:40:59: 104u
- 2024-06-06 12:27:23: 104u
- 2024-05-31 06:50:36: 52u
- 2024-05-23 06:43:22: 104u

**Quantite Mediane (fallback)**: 104u
**Quantite Reelle**: 264u

</details>


<details>
<summary><strong>4. [PF3266] JF SAUCE BEARNAISE 3L</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:21:48: 12u
- 2025-09-11 08:10:53: 20u
- 2025-07-29 06:11:06: 20u
- 2025-06-30 08:10:09: 30u
- 2025-06-19 11:21:19: 30u
- 2025-06-06 12:48:58: 30u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 06:08:37: 10u
- 2024-09-26 08:50:24: 6u
- 2024-09-16 11:50:49: 10u
- 2024-09-09 11:38:48: 8u
- 2024-08-27 11:40:22: 10u
- 2024-08-14 07:59:29: 8u
- 2024-07-24 07:35:24: 6u
- 2024-07-24 06:06:23: 10u
- 2024-06-17 07:40:59: 6u
- 2024-06-06 12:27:23: 8u
- 2024-05-31 06:50:36: 6u
- 2024-05-23 06:43:22: 4u

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 40u

</details>


<details>
<summary><strong>5. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-06 09:21:48: 1u
- 2025-09-11 08:10:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 07:40:59: 2u
- 2024-06-06 12:27:23: 1u
- 2024-02-22 07:08:34: 2u
- 2024-01-08 09:20:28: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-21 06:08:37: 3u
- 2024-08-14 07:59:29: 2u
- 2024-06-17 07:40:59: 2u
- 2024-05-31 06:50:36: 1u
- 2024-05-23 06:43:22: 1u
- 2024-05-06 07:48:49: 1u
- 2024-04-29 13:55:46: 1u
- 2024-02-22 07:08:34: 4u
- 2024-02-05 07:46:55: 2u
- 2024-01-08 09:20:28: 1u
- 2023-12-11 09:45:53: 0u
- 2023-12-11 09:45:53: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3273] JF MITRAILLETTE SAUCE 925ML | 1 | Predicted 1u but not ordered |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 1 | Predicted 1u but not ordered |
| [PF3271] JF WASABI MAYONNAISE 925ML | 1 | Predicted 1u but not ordered |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 4 | Predicted 4u but not ordered |
| [PF3290] JF MAYO BARAKI 925ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:06.334Z*
