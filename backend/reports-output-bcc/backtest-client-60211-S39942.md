# Rapport Backtest - Client BIOK CORBAIS

## Contexte

- **Client** : BIOK CORBAIS (ID: 60211)
- **Commande réelle** : S39942
- **Date commande** : 2025-10-29 13:44:03
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 33
- **Tokens**: 30,511 input + 5,381 output = 35,892 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 35.5% | 31 produits prédits, 11 corrects |
| **Rappel** | 100.0% | 11 produits réels, 11 détectés |
| **F1-Score** | 52.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.27 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 17.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 9.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -17.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JOY05] Organic Cherry Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier avec une accélération en octobre (commandes hebdomadaires les 09/10 et 16/10). Depuis la dernière commande, 12 jours se sont écoulés. Bien que le cycle moyen soit plus long, la fréquence récente suggère un besoin imminent pour couvrir les 30 prochains jours (seuil de réapprovisionnement). En appliquant la règle de la médiane sur les commandes récentes (1, 1, 2, 2, 1, 1, 2), la valeur médiane est de 1 unité. Conformément au principe de précaution B2B et à la règle de choisir la quantité la plus basse en cas de doute sur une faible rotation, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 183 tokens
- **Total**: 1,154 tokens



</details>


<details>
<summary><strong>2. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 16 octobre (il y a 12 jours). Le cycle moyen est d'environ 30 jours, mais avec une irrégularité marquée (parfois 7 jours, parfois 2 mois). Selon le principe de précaution B2B et le seuil de réapprovisionnement de 30 jours, un risque de rupture existe à court terme. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes systématiques de 1 unité. La médiane est de 1u. On maintient cette quantité pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 155 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 16 octobre (il y a 12 jours). Le cycle moyen constaté est d'environ 19 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent d'ici la mi-novembre. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des volumes variés (1, 6, 2, 1, 2, 3). La médiane de ces commandes est de 2 unités. Le pic de 6 unités est considéré comme exceptionnel et écarté. La quantité retenue est donc la médiane de 2 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 962 tokens
- **Output**: 187 tokens
- **Total**: 1,149 tokens



</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 15 à 20 jours. La dernière commande datant du 16 octobre (soit 12 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Bien que les quantités varient ponctuellement (pics à 5u ou 6u), la médiane des commandes récentes se situe à 1u. En application du principe de précaution B2B et de la règle de privilégier la valeur basse en cas de doute sur une faible rotation, une commande de 1 unité est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 994 tokens
- **Output**: 161 tokens
- **Total**: 1,155 tokens



</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : L'historique montre un cycle de commande moyen d'environ 15 à 20 jours. La dernière commande date du 16 octobre, soit il y a 12 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car la prochaine commande devrait théoriquement intervenir sous peu pour couvrir le mois de novembre. ÉTAPE 2 (ESTIMATION QUANTITÉ) : Les quantités récentes sont très variables (1u, 2u, 4u, 5u, 6u). La médiane de l'historique récent (1, 1, 1, 2, 2, 4, 5, 6) se situe à 2 unités. Conformément à la règle de précaution B2B et au choix de la valeur la plus basse en cas de doute sur une rotation irrégulière, la quantité de 2 unités est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 994 tokens
- **Output**: 229 tokens
- **Total**: 1,223 tokens



</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique récent montre un cycle de commande moyen d'environ 13 jours. La dernière commande date du 16 octobre, soit il y a 12 jours. Le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes oscillent entre 1u et 6u. La médiane des commandes récentes (2, 1, 2, 6, 1, 4, 2, 3) est de 2u. Le pic de 6u est considéré comme exceptionnel. Conformément à la règle de privilégier la médiane et la prudence en B2B, une quantité de 2u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 994 tokens
- **Output**: 187 tokens
- **Total**: 1,181 tokens



</details>


<details>
<summary><strong>7. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande actif en octobre (commandes les 09/10 et 16/10). Depuis la dernière commande, 12 jours se sont écoulés. Bien que le cycle soit irrégulier sur le long terme, la reprise d'activité en octobre et le seuil de réapprovisionnement de 30 jours imposent une commande par précaution pour éviter une rupture. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la quantité la plus fréquente observée (mode), respectant la règle de ne pas surestimer les stocks pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 963 tokens
- **Output**: 150 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>8. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement régulière environ tous les 20 à 30 jours. La dernière commande datant du 09/10 (soit 19 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Le cycle est stable avec une quantité médiane de 1 unité sur les 6 dernières commandes. En application du principe de précaution B2B et de la stabilité de la rotation, une commande de 1 unité est nécessaire pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 134 tokens
- **Total**: 1,105 tokens



</details>


<details>
<summary><strong>9. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 09/10/2025, soit il y a 19 jours. Le cycle moyen observé entre les commandes récentes est d'environ 30 à 40 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (19 jours écoulés + 30 jours de seuil = 49 jours, ce qui dépasse le cycle habituel). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent est extrêmement stable avec des commandes systématiques de 1 unité. La médiane et le mode sont de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 946 tokens
- **Output**: 198 tokens
- **Total**: 1,144 tokens



</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION) : L'historique récent montre un cycle de commande moyen d'environ 20 jours (15 jours entre août et septembre, 26 jours entre août et août). La dernière commande remonte au 22 septembre, soit 36 jours avant la date actuelle. Le délai écoulé dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est avéré. ÉTAPE 2 (QUANTITÉ) : Les trois dernières commandes sont strictement identiques (1u). En suivant la règle de maintien pour les rotations régulières et faibles, la quantité retenue est la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 159 tokens
- **Total**: 1,068 tokens



</details>


<details>
<summary><strong>11. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 septembre, soit 36 jours. Le cycle moyen observé est d'environ 30 à 40 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane des quantités est de 1u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 164 tokens
- **Total**: 1,084 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-16 06:40:28: 1u
- 2025-10-09 06:22:48: 1u
- 2025-09-10 13:37:05: 2u
- 2025-08-06 06:21:49: 2u
- 2025-07-07 11:50:12: 1u
- 2025-06-11 07:08:29: 1u
- 2025-06-03 13:56:29: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-16 06:40:28: 1u
- 2025-09-10 13:37:05: 1u
- 2025-08-27 06:19:48: 1u
- 2025-06-18 13:08:33: 1u
- 2025-06-11 07:08:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-16 06:40:28: 1u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 2u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 2u
- 2025-07-07 11:50:12: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-16 06:40:28: 2u
- 2025-10-09 06:22:48: 1u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 5u
- 2025-07-07 11:50:12: 1u
- 2025-06-23 13:02:40: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-16 06:40:28: 2u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 5u
- 2025-07-07 11:50:12: 1u
- 2025-06-23 13:02:40: 2u
- 2025-06-18 13:08:33: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-16 06:40:28: 2u
- 2025-10-09 06:22:48: 1u
- 2025-09-22 11:23:24: 2u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 4u
- 2025-07-16 06:22:51: 2u
- 2025-07-07 11:50:12: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-16 06:40:28: 1u
- 2025-10-09 06:22:48: 1u
- 2025-08-12 10:39:04: 1u
- 2025-07-16 06:22:51: 2u
- 2025-06-18 13:08:33: 1u
- 2025-06-11 07:08:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-09-10 13:37:05: 1u
- 2025-08-27 06:19:48: 1u
- 2025-08-06 06:21:49: 1u
- 2025-07-07 11:50:12: 1u
- 2025-06-11 07:08:29: 1u
- 2025-06-03 13:56:29: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-08-27 06:19:48: 1u
- 2025-08-06 06:21:49: 1u
- 2025-06-18 13:08:33: 1u
- 2025-06-11 07:08:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 11:23:24: 1u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JOY05] Organic Cherry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 11:23:24: 1u
- 2025-08-06 06:21:49: 2u
- 2025-07-07 11:50:12: 1u
- 2025-06-23 13:02:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (20)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Predicted 1u but not ordered |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Predicted 1u but not ordered |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Predicted 1u but not ordered |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Predicted 1u but not ordered |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Predicted 1u but not ordered |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | Predicted 4u but not ordered |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Predicted 1u but not ordered |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Predicted 1u but not ordered |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Predicted 1u but not ordered |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 1 | Predicted 1u but not ordered |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Predicted 1u but not ordered |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Predicted 1u but not ordered |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Predicted 1u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Predicted 1u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 2 | Predicted 2u but not ordered |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 4 | Predicted 4u but not ordered |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 4 | Predicted 4u but not ordered |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:51.351Z*
