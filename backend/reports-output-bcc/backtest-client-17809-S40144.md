# Rapport Backtest - Client AU RAYON BIO

## Contexte

- **Client** : AU RAYON BIO (ID: 17809)
- **Commande réelle** : S40144
- **Date commande** : 2025-11-05 14:50:02
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 24
- **Tokens**: 24,907 input + 4,251 output = 29,158 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 45.5% | 22 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 62.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 23.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -9.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 09/10/2025, soit 26 jours avant la date actuelle. Le cycle moyen récent est d'environ 28 jours (entre sept. et oct.). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. De plus, l'historique N-1 montre une activité régulière en octobre/novembre. Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes oscillent entre 1u et 3u. La médiane des commandes récentes (1, 3, 2, 3, 1) est de 2u. L'historique de l'année précédente était également très stable à 2u. Conformément aux règles, on retient la médiane de 2u pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,142 tokens
- **Output**: 218 tokens
- **Total**: 1,360 tokens



</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
Étape 1 : Détection du besoin. La dernière commande date du 09/10/2025, soit 26 jours avant la date actuelle. Le cycle moyen récent est d'environ 30 à 45 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent d'ici début décembre. De plus, l'historique N-1 montre une activité régulière en novembre/décembre. Étape 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 4u (médiane 1u), mais l'historique long terme (N-1) est extrêmement stable à 2u. Par principe de précaution B2B et pour maintenir le stock sur ce produit à rotation lente mais constante, la quantité de 2u est retenue (médiane historique globale).

**Tokens utilises pour cette prediction:**
- **Input**: 1,125 tokens
- **Output**: 202 tokens
- **Total**: 1,327 tokens



</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 09/10/2025, soit 26 jours avant la date actuelle. Le cycle moyen de commande observé est d'environ 30 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent (proximité immédiate du cycle habituel). L'historique N-1 confirme également une activité régulière en octobre et novembre (commandes les 08/10 et 31/10). En appliquant la règle de la médiane sur les quantités récentes (2, 3, 3, 1, 3), la valeur centrale est de 3 unités. On retient cette quantité pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 1,141 tokens
- **Output**: 164 tokens
- **Total**: 1,305 tokens



</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 09/10/2025, soit 26 jours avant la date actuelle. Le cycle moyen constaté est d'environ 30 à 40 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent d'ici la fin du mois de novembre, d'autant plus qu'une commande avait été passée fin octobre l'année précédente (31/10/2024). ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u, 3u, 2u, 2u, 2u. La médiane de ces commandes est de 2u. Bien que la dernière commande fût de 1u, le volume historique stable (majoritairement 2u sur 2024 et 2025) justifie le maintien de cette quantité pour couvrir le cycle à venir sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,142 tokens
- **Output**: 228 tokens
- **Total**: 1,370 tokens



</details>


<details>
<summary><strong>5. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/10/2025, soit 26 jours. Le cycle moyen récent est d'environ 25-30 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. De plus, l'historique N-1 montre une activité soutenue en octobre et novembre (commandes les 08/10 et 31/10). Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation quantité. Les quantités récentes oscillent entre 1u et 3u. La médiane de l'historique récent est de 2u, mais l'historique N-1 sur la même période (octobre/novembre) montre une récurrence de 3u. En suivant la règle de précaution et la saisonnalité N-1, la quantité de 3u est retenue pour couvrir la période.

**Tokens utilises pour cette prediction:**
- **Input**: 1,139 tokens
- **Output**: 229 tokens
- **Total**: 1,368 tokens



</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 30 à 40 jours. La dernière commande datant du 09 octobre (soit 26 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours du seuil de réapprovisionnement. L'historique N-1 confirme également une activité régulière sur cette période (commandes fin octobre et début novembre). En appliquant la règle de la médiane sur les commandes récentes (1, 2, 2, 3, 3), la valeur centrale est de 2 unités. Conformément au principe de précaution B2B et à la stabilisation des volumes, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,122 tokens
- **Output**: 165 tokens
- **Total**: 1,287 tokens



</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 (DÉTECTION) : La dernière commande date du 09/10/2025, soit il y a 26 jours. Le cycle moyen récent est d'environ 25-30 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 (QUANTITÉ) : L'historique récent montre une stabilisation à 1 unité par commande (4 des 5 dernières commandes). Bien que l'historique N-1 affichait 2 unités, la tendance actuelle est à la baisse. La médiane des commandes récentes est de 1 unité. Conformément à la règle de ne pas surestimer et de respecter la baisse de rotation, la quantité retenue est de 1.

**Tokens utilises pour cette prediction:**
- **Input**: 1,145 tokens
- **Output**: 193 tokens
- **Total**: 1,338 tokens



</details>


<details>
<summary><strong>8. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 09/10/2025, soit 26 jours avant la date actuelle. L'historique N-1 montre une fréquence de commande quasi mensuelle (octobre, septembre, août). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous entrons dans le cycle habituel de commande. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent présente des quantités de 1, 2 et 3 unités. La médiane de ces commandes est de 2 unités. L'historique N-1 confirme une stabilité très forte à 2 unités. Conformément à la règle de privilégier la médiane et la stabilité, la quantité retenue est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 1,122 tokens
- **Output**: 188 tokens
- **Total**: 1,310 tokens



</details>


<details>
<summary><strong>9. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 09/10/2025, soit 26 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de rupture potentielle. L'historique N-1 montre une activité régulière en novembre et décembre (commandes fin novembre). Le cycle de commande est irrégulier (entre 30 et 80 jours), ce qui impose l'application du principe de précaution B2B. Pour la quantité, la médiane des commandes récentes et historiques se situe à 2 unités. Bien que la dernière commande fût de 1u, la récurrence historique du chiffre 2u (7 occurrences sur les 10 dernières commandes) justifie le maintien de ce volume pour couvrir les besoins du mois à venir.

**Tokens utilises pour cette prediction:**
- **Input**: 1,091 tokens
- **Output**: 183 tokens
- **Total**: 1,274 tokens



</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 09/10/2025, soit 26 jours avant la date actuelle. Le cycle moyen constaté est d'environ 30 à 40 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent d'ici début décembre. De plus, l'historique N-1 montre une activité régulière en fin d'année (novembre/décembre). Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des volumes très faibles (1u ou 2u). La médiane des commandes récentes est de 1u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,109 tokens
- **Output**: 209 tokens
- **Total**: 1,318 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:15:56: 1u
- 2025-09-10 13:23:04: 3u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 3u
- 2025-06-20 11:16:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:41:18: 2u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 1u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:15:56: 1u
- 2025-09-10 13:23:04: 4u
- 2025-07-24 14:00:56: 1u
- 2025-06-20 11:16:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 14:57:37: 2u
- 2024-10-08 09:41:18: 3u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 3u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:15:56: 2u
- 2025-09-10 13:23:04: 3u
- 2025-07-24 14:00:56: 3u
- 2025-07-17 06:58:21: 1u
- 2025-06-20 11:16:50: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 14:57:37: 3u
- 2024-10-08 09:41:18: 3u
- 2024-09-09 13:39:44: 4u
- 2024-08-02 06:18:07: 3u
- 2024-07-15 06:44:53: 3u
- 2024-06-21 06:37:19: 3u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 3u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 3u
- 2024-02-20 11:03:42: 3u
- 2024-02-02 09:19:36: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:15:56: 1u
- 2025-09-10 13:23:04: 3u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 2u
- 2025-06-20 11:16:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 14:57:37: 1u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 1u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-11-28 08:55:15: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV135] LV Tartinade Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:15:56: 3u
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 2u
- 2025-06-20 11:16:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 14:57:37: 3u
- 2024-10-08 09:41:18: 3u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 3u
- 2024-07-15 06:44:53: 3u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 3u
- 2024-04-15 06:28:42: 1u
- 2024-03-15 08:50:31: 3u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:15:56: 3u
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 3u
- 2025-06-20 11:16:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 14:57:37: 3u
- 2024-10-08 09:41:18: 2u
- 2024-09-09 13:39:44: 1u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 1u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:15:56: 1u
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 1u
- 2025-07-17 06:58:21: 1u
- 2025-06-20 11:16:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2023-12-15 07:53:16: 2u
- 2023-11-28 08:55:15: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:15:56: 2u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 3u
- 2025-06-20 11:16:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:41:18: 2u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 1u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:15:56: 1u
- 2025-09-10 13:23:04: 3u
- 2025-06-20 11:16:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:41:18: 2u
- 2024-08-02 06:18:07: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 1u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 1u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-11-28 08:55:15: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:15:56: 2u
- 2025-09-10 13:23:04: 1u
- 2025-07-24 14:00:56: 2u
- 2025-07-17 06:58:21: 1u
- 2025-06-20 11:16:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-08 09:41:18: 2u
- 2024-08-02 06:18:07: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-04-15 06:28:42: 1u
- 2024-03-15 08:50:31: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-12-15 07:53:16: 1u
- 2023-11-28 08:55:15: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (12)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 3 | Predicted 3u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 2 | Predicted 2u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 2 | Predicted 2u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Predicted 2u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 2 | Predicted 2u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Predicted 1u but not ordered |
| [LV156] LV Sauce barbecue 263 ml bio | 1 | Predicted 1u but not ordered |
| [LV040] LV Caprons apéritifs 240g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:29.604Z*
