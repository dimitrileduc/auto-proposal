# Rapport Backtest - Client Green Peas

## Contexte

- **Client** : Green Peas (ID: 12292)
- **Commande réelle** : S40019
- **Date commande** : 2025-10-30 09:12:37
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 20
- **Tokens**: 19,608 input + 3,260 output = 22,868 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.0% | 20 produits prédits, 11 corrects |
| **Rappel** | 84.6% | 13 produits réels, 11 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.73 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 34.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -26.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [MF0029] MF Tarti Datte chili 250g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [MF0052] MF Pois chiches  500g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 30 à 35 jours (dernières commandes le 06/08, 03/09 et 09/10). Au 29/10, cela fait 20 jours depuis la dernière commande. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent dans l'horizon défini (70% du cycle atteint). La quantité est fixée à 1 unité, correspondant à la médiane et à la valeur constante observée sur les trois derniers mois, respectant le principe de ne pas surestimer pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 159 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>2. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 09/10/2025, soit 20 jours avant la date actuelle. Le cycle moyen récent est d'environ 35-40 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent dans l'horizon de prévision (20 + 30 = 50 jours, dépassant largement le cycle habituel). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une rotation très faible et stable de 1u (trois dernières commandes). La médiane des commandes récentes est de 1u. Conformément aux règles sur les rotations faibles, on maintient la quantité de 1u sans augmenter pour éviter le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 1,056 tokens
- **Output**: 193 tokens
- **Total**: 1,249 tokens



</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande date du 09/10/2025, soit il y a 20 jours. Le cycle moyen récent est d'environ 30 à 35 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture (20 jours écoulés + 30 jours de seuil > cycle moyen). Conformément au principe de précaution B2B, un besoin est détecté. Pour la quantité, l'historique récent est extrêmement stable avec une médiane de 1 unité sur les 5 dernières commandes. Bien que l'historique N-1 montre des volumes légèrement supérieurs, la tendance actuelle de 1 unité est privilégiée pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 1,055 tokens
- **Output**: 189 tokens
- **Total**: 1,244 tokens



</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 09/10/2025, soit il y a 20 jours. Le cycle moyen récent est d'environ 30 à 35 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (20 jours écoulés + 30 jours de seuil > cycle moyen). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une rotation très faible et régulière (majoritairement 1u, avec un pic à 2u le 09/10). La médiane des commandes récentes est de 1u. Conformément aux règles sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 209 tokens
- **Total**: 1,198 tokens



</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 35 jours entre chaque réapprovisionnement. La dernière commande datant du 09/10/2025 (soit 20 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours du seuil de réapprovisionnement (70% du cycle atteint). Conformément à la règle de précaution B2B, un besoin est détecté. Pour la quantité, la médiane des commandes récentes (3u, 3u, 2u, 2u, 4u) est de 3 unités. Ce volume est cohérent avec l'historique N-1 à la même période (septembre/octobre), on maintient donc cette quantité médiane.

**Tokens utilises pour cette prediction:**
- **Input**: 1,090 tokens
- **Output**: 178 tokens
- **Total**: 1,268 tokens



</details>


<details>
<summary><strong>6. [MF0052] MF Pois chiches  500g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 56 jours. La dernière commande datant du 09/10/2025 (soit 20 jours), nous entrons dans la zone de risque de rupture (70% du cycle) d'ici les 30 prochains jours (Replenishment Threshold Days). Par principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane des commandes récentes (3u, 2u, 3u) et à la récurrence historique observée sur la même période l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 1,002 tokens
- **Output**: 153 tokens
- **Total**: 1,155 tokens



</details>


<details>
<summary><strong>7. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 30 à 35 jours entre chaque réapprovisionnement (ex: 03/09 au 09/10). La dernière commande datant du 09/10 (soit 20 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours du seuil de réapprovisionnement. En suivant la règle de la médiane des commandes récentes (1, 1, 2, 3, 4), la valeur centrale est 2. Ce volume est cohérent avec la rotation actuelle du produit, bien que plus faible que l'année précédente à la même période. Par mesure de précaution B2B, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,110 tokens
- **Output**: 179 tokens
- **Total**: 1,289 tokens



</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'historique montre un cycle de commande d'environ 60 à 90 jours (juin, août, septembre). Depuis la dernière commande du 03/09/2025, 56 jours se sont écoulés. Ce délai représente plus de 70% du cycle moyen observé, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un besoin est détecté. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 139 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>9. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 30 à 40 jours. La dernière commande remontant au 03/09/2025 (soit 56 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent. Bien que la dernière commande fût de 1u, l'historique récent et N-1 montre une médiane stable de 2u. En application du principe de précaution B2B et de la règle de la médiane, une commande de 2 unités est préconisée pour couvrir les besoins du prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 1,090 tokens
- **Output**: 155 tokens
- **Total**: 1,245 tokens



</details>


<details>
<summary><strong>10. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 30 à 40 jours (juin, août, septembre). La dernière commande datant du 03/09/2025, le délai écoulé (56 jours) dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, signalant un risque de rupture imminent. Bien que l'historique N-1 montre des pics ponctuels, la tendance récente est strictement stabilisée à 1 unité par commande. En application de la règle de la médiane sur l'historique récent et du principe de précaution pour les rotations faibles, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,038 tokens
- **Output**: 164 tokens
- **Total**: 1,202 tokens



</details>


<details>
<summary><strong>11. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte à 121 jours (30 juin 2025). Bien que la rotation soit très faible et irrégulière, l'historique N-1 montre une activité à cette période (décembre). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et au volume minimal habituel pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 123 tokens
- **Total**: 1,062 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:35:27: 1u
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 1u
- 2025-06-30 12:50:52: 2u
- 2025-06-03 13:57:38: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:35:27: 1u
- 2025-09-03 06:58:40: 1u
- 2025-06-30 12:50:52: 1u
- 2025-06-03 13:57:38: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 2u
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 2u
- 2024-03-12 14:11:03: 2u
- 2024-02-12 06:43:09: 2u
- 2024-01-22 12:57:59: 2u
- 2023-12-12 07:24:48: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:35:27: 1u
- 2025-09-03 06:58:40: 1u
- 2025-06-30 12:50:52: 1u
- 2025-06-18 13:06:05: 1u
- 2025-06-03 13:57:38: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 1u
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 1u
- 2024-03-12 14:11:03: 2u
- 2024-02-12 06:43:09: 4u
- 2023-12-12 07:24:48: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:35:27: 2u
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 1u
- 2025-06-18 13:06:05: 1u
- 2025-06-03 13:57:38: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-11 07:44:12: 4u
- 2024-05-13 11:42:43: 1u
- 2024-01-22 12:57:59: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:35:27: 3u
- 2025-09-03 06:58:40: 3u
- 2025-08-06 06:20:35: 2u
- 2025-06-30 12:50:52: 2u
- 2025-06-03 13:57:38: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 3u
- 2024-08-05 06:36:16: 3u
- 2024-06-11 07:44:12: 4u
- 2024-05-13 11:42:43: 2u
- 2024-03-29 14:59:13: 2u
- 2024-02-12 06:43:09: 4u
- 2024-01-22 12:57:59: 2u
- 2023-12-12 07:24:48: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [MF0052] MF Pois chiches  500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:35:27: 3u
- 2025-08-06 06:20:35: 2u
- 2025-06-18 13:06:05: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 12:17:01: 3u
- 2024-09-03 12:32:05: 5u
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 3u
- 2024-05-13 11:42:43: 1u
- 2024-03-12 14:11:03: 6u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:35:27: 2u
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 3u
- 2025-06-30 12:50:52: 1u
- 2025-06-18 13:06:05: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 12:17:01: 6u
- 2024-09-03 12:32:05: 2u
- 2024-08-05 06:36:16: 6u
- 2024-06-11 07:44:12: 5u
- 2024-05-13 11:42:43: 1u
- 2024-03-29 14:59:13: 6u
- 2024-03-12 14:11:03: 3u
- 2024-02-12 06:43:09: 2u
- 2024-01-22 12:57:59: 4u
- 2023-12-12 07:24:48: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 1u
- 2025-06-03 13:57:38: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 2u
- 2025-06-30 12:50:52: 2u
- 2025-06-03 13:57:38: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 2u
- 2024-08-05 06:36:16: 3u
- 2024-06-11 07:44:12: 2u
- 2024-05-13 11:42:43: 2u
- 2024-03-29 14:59:13: 2u
- 2024-03-12 14:11:03: 1u
- 2024-02-12 06:43:09: 4u
- 2024-01-22 12:57:59: 2u
- 2023-12-12 07:24:48: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>10. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 1u
- 2025-06-30 12:50:52: 1u
- 2025-06-03 13:57:38: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-27 12:17:01: 1u
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 4u
- 2024-05-13 11:42:43: 2u
- 2024-03-29 14:59:13: 1u
- 2024-01-22 12:57:59: 3u
- 2023-12-12 07:24:48: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:50:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 3u
- 2024-02-12 06:43:09: 2u
- 2023-12-12 07:24:48: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (9)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Predicted 1u but not ordered |
| [MF0051] MF Kidney Beans 500g | 1 | Predicted 1u but not ordered |
| [MF0012] MF Olives Mix 500g | 1 | Predicted 1u but not ordered |
| [MF0061] MF Compote | 1 | Predicted 1u but not ordered |
| [MF0060] MF Passata | 2 | Predicted 2u but not ordered |
| [MF0024] MF KETCHUP 250g | 6 | Predicted 6u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [VID0009] Consigne casier | 21 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 126 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:06:00.622Z*
