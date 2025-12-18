# Rapport Backtest - Client CARREFOUR BELGIUM SA, CD Carrefour Kontich

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CD Carrefour Kontich (ID: 17251)
- **Commande réelle** : S39718
- **Date commande** : 2025-10-14 08:41:27
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 🤖 Usage LLM

- **Appels**: 12
- **Tokens**: 19,125 input + 28,101 output = 47,226 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 13 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 76.2% | Score équilibré global |

<details>
<summary>Comment est calculée la Précision ?</summary>

**En simple** : Sur 10 produits prédits, combien sont vraiment commandés ?

**Calcul** : Précision = True Positives ÷ (True Positives + False Positives)

**Exemple** : Si le système prédit 10 produits et que 8 sont commandés → Précision = 80%

**Bon score** : > 80% (peu de fausses alertes)
</details>

<details>
<summary>Comment est calculé le Rappel ?</summary>

**En simple** : Sur 10 produits commandés, combien ont été détectés ?

**Calcul** : Rappel = True Positives ÷ (True Positives + False Negatives)

**Exemple** : Si le client commande 10 produits et que 7 sont détectés → Rappel = 70%

**Bon score** : > 80% (peu de besoins manqués)
</details>

<details>
<summary>Comment est calculé le F1-Score ?</summary>

**En simple** : Moyenne harmonique entre Précision et Rappel (score équilibré)

**Calcul** : F1 = 2 × (Précision × Rappel) ÷ (Précision + Rappel)

**Pourquoi ?** : On peut avoir 100% de précision mais 50% de rappel. Le F1 combine les deux.

**Bon score** : > 80% (système performant globalement)
</details>

### Niveau Quantité (Précision)

**⚠️ Important**: Ces métriques sont calculées **uniquement sur les True Positives** (produits correctement détectés).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 12.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 9.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 12.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 9.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

<details>
<summary>Qu'est-ce qu'un Exact Match vs Partial Match ?</summary>

**Exact Match (🎯)** : Quantité prédite = Quantité réelle (erreur = 0)
- Exemple : Système prédit 10, Client commande 10 → Exact Match

**Partial Match (✅)** : Quantité prédite ≠ Quantité réelle (erreur > 0)
- Exemple : Système prédit 10, Client commande 12 → Partial Match (erreur = 2 unités)

**Note** : Seuls les True Positives ont un match type (les produits bien détectés)
</details>

<details>
<summary>Comment est calculé le MAE ?</summary>

**Nom complet** : Mean Absolute Error (Erreur Absolue Moyenne)

**En simple** : En moyenne, le système se trompe de combien d'unités ?

**Calcul** : MAE = Moyenne des |Qté Prédite - Qté Réelle|

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 2 unités
- Produit B : Prédit 5, Réel 4 → Erreur = 1 unité
- Produit C : Prédit 8, Réel 11 → Erreur = 3 unités
- MAE = (2 + 1 + 3) ÷ 3 = 2 unités

**Bon score** : < 2 unités (très précis)
</details>

<details>
<summary>Comment est calculé le MAPE ?</summary>

**Nom complet** : Mean Absolute Percentage Error (Erreur Absolue Moyenne en %)

**En simple** : En moyenne, le système se trompe de combien en pourcentage ?

**Calcul** : MAPE = Moyenne des (|Qté Prédite - Qté Réelle| ÷ Qté Réelle × 100%)

**Exemple** :
- Produit A : Prédit 10, Réel 12 → Erreur = 16.7%
- Produit B : Prédit 5, Réel 4 → Erreur = 25%
- MAPE = (16.7% + 25%) ÷ 2 = 20.8%

**Bon score** : < 30%

**Note** : Moins fiable que MAE pour petites quantités (prédit 2, réel 1 = 100% mais seulement 1 unité d'écart)
</details>

---

## True Positives (8)

<details>
<summary>Qu'est-ce qu'un True Positive ?</summary>

**En simple** : Un produit que le système a prédit ET que le client a vraiment commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client commande ce produit
- → True Positive (bonne prédiction)

**C'est bon** : Plus il y en a, mieux c'est
</details>


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR | 192 | 192 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF01012] CARREFOUR VOL AU VENT 400 GR | 192 | 192 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8 | 108 | 108 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3339] CARRE MAYONNAISE ANCIENNE 500ML | 96 | 96 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3343] SIMPL CARRE VOL AU VENT 800 GR | 192 | 96 | 96.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8 | 108 | 108 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1952] CARRE VIN CIBOULET PET 450 | 98 | 98 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3341] CARRE MAYONNAISE BIO 500ML | 110 | 110 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR</strong> - LLM: 192u vs Médiane: 192u (Réel: 192u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: high)
- 📊 **Baseline N-1**: 192u
- 📊 **Médiane**: 192u
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Les commandes les plus fréquentes sont 96u et 288u (4 occurrences chacune sur l'ensemble des données). Les valeurs 384u et 480u sont des points aberrants isolés, non récurrents. Les données montrent un pattern hebdomadaire clair avec majorité de commandes le mardi.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le 2025-10-14 est un mardi, jour habituel de commande. Les données récentes montrent 2 commandes stables de 96u en septembre, suivies d'une commande de 192u le 7 octobre 2025. Le pic de 384u le 30 septembre 2025 est un outlier isolé entre des valeurs plus basses, probablement lié à un événement exceptionnel. La commande la plus récente dans le cycle (192u) correspond exactement à la moyenne saisonnière N-1 pour cette période (octobre 2024: 288u et 96u = moyenne 192u). Cette valeur représente le niveau de base le plus probable pour une commande régulière. Les pics à 384u et 480u sont trop isolés pour influencer la prévision d'une commande standard. La décision de 192u offre le meilleur équilibre entre précision et minimisation du MAPE, en évitant à la fois la surreprésentation des outliers et la sous-estimation des capacités du client.

</details>


<details>
<summary><strong>2. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - LLM: 192u vs Médiane: 192u (Réel: 192u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: medium)
- 📊 **Baseline N-1**: 192u
- 📊 **Médiane**: 192u
- ✅ **Réel commandé**: 192u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: weekly
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Non disponible

</details>


<details>
<summary><strong>3. [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8</strong> - LLM: 108u vs Médiane: 108u (Réel: 108u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 108u (confidence: high)
- 📊 **Baseline N-1**: 108u
- 📊 **Médiane**: 108u
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire strict les mardis
- **Saisonnalité**: none
- **Tendance**: stable_last_3_months
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande strictement le mardi toutes les 7-14j. Les 5 dernières commandes (août-octobre 2025) sont IDENTIQUES à 108u. Les valeurs N-1 (216u/324u) ne se sont jamais reproduites en 2025, indiquant une stabilisation durable. La date 2025-10-14 est un mardi → jour de cycle NOMINAL.

</details>


<details>
<summary><strong>4. [PF3339] CARRE MAYONNAISE ANCIENNE 500ML</strong> - LLM: 96u vs Médiane: 96u (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 96u (confidence: high)
- 📊 **Baseline N-1**: 96u
- 📊 **Médiane**: 96u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire le mardi (intervalles de 7j, sauf exception de 42j)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: 192u

**🧠 Raisonnement LLM:**
**1. Analyse Rythmique :**
- **Jour habituel identifié**: Mardi (4/5 commandes sont des mardis)
- **Fréquence**: Pattern hebdomadaire dominant avec intervalles de 7 jours (09/09→16/09, 30/09→07/10)
- **Exception**: Commande du 29/07 (mardi) après 42 jours de silence (commande exceptionnelle)
- **Date prédiction**: 14/10/2025 = Mardi → **Jour CYCLE HABITUEL** (pas de décalage)

**2. Filtrage des Outliers :**
- **192u du 29/07**: Volume 2× supérieur à la normale, isolé entre longs silences → **Outlier évident** (probablement commande spéciale stock/promo)
- **4 dernières commandes**: Toutes à **96u** avec stabilité parfaite → **Tendance fiable**
- **Décision**: Exclure le 192u du calcul (pondération 0%), ne pas polluer la prédiction avec un événement exceptionnel non répété

**3. Synthèse & Prédiction :**
- **Données limitées mais ultra-stables**: 4 points récents identiques à 96u
- **Pattern**: Commande hebdomadaire le mardi, quantité constante
- **Dernière commande**: 07/10 = 96u (il y a 7 jours)
- **Prochaine commande attendue**: Mardi 14/10 = **96u** (maintien du cycle)

**Règle d'Or appliquée**: En agro B2B, privilégier la PRÉCISION. La quantité la plus probable est la valeur récurrente stable, pas une moyenne diluée par un outlier.

</details>


<details>
<summary><strong>5. [PF3343] SIMPL CARRE VOL AU VENT 800 GR</strong> - LLM: 192u vs Médiane: 192u (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 192u (confidence: high)
- 📊 **Baseline N-1**: 192u
- 📊 **Médiane**: 192u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 96u (100.0%)
- 📉 **Erreur Médiane**: 96u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire le mardi
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -96u

**🧠 Raisonnement LLM:**
Pattern hebdomadaire stable le mardi avec 4 des 5 dernières commandes à 192u. L'unique valeur basse de 96u du 02/09 est considérée comme outlier exceptionnel. La date de prédiction est un mardi (jour habituel) et la dernière commande du 07/10 était à 192u. En agro B2B, privilégier la stabilité récente pour minimiser le MAPE.

</details>


<details>
<summary><strong>6. [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8</strong> - LLM: 108u vs Médiane: 108u (Réel: 108u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 108u (confidence: high)
- 📊 **Baseline N-1**: 108u
- 📊 **Médiane**: 108u
- ✅ **Réel commandé**: 108u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Toute commande historique a eu lieu un mardi
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande exclusivement les mardis avec un cycle bi-hebdomadaire (tous les 14 jours) strictement respecté sur les 4 dernières commandes : 12 août, 26 août, 9 septembre et 23 septembre. Chacune de ces commandes régulières était de 108 unités. La commande du 30 septembre à 216 unités est un outlier clair : volume double brisant le cycle (seulement 7 jours après la précédente), correspondant probablement à une commande exceptionnelle (promotion, stock de sécurité ou erreur). La date de prédiction du 14 octobre est exactement 14 jours après cette commande exceptionnelle et correspondrait au retour du cycle bi-hebdomadaire normal. Le pattern le plus probable est donc la reprise du rythme régulier : 108 unités.

</details>


<details>
<summary><strong>7. [PF1952] CARRE VIN CIBOULET PET 450</strong> - LLM: 98u vs Médiane: 98u (Réel: 98u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 98u (confidence: high)
- 📊 **Baseline N-1**: 98u
- 📊 **Médiane**: 98u
- ✅ **Réel commandé**: 98u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bi-mensuelle variable (intervalles ~14-28 jours) sur jour fixe MARDI
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande majoritairement le mardi avec un volume récurrent de 98u (10/12 commandes). Les 3 dernières commandes 'normales' sont stables à 98u. Le pic de 392u du 29/07/25 est un outlier isolé sans répétition, caractéristique d'un événement exceptionnel (promotion, erreur commande). Le pattern d'intervalle (14-28 jours) indique que le 14/10/25 est un mardi potentiel de commande. En agroalimentaire B2B, la stabilité des volumes réguliers prime sur les fluctuations exceptionnelles. La valeur la plus probable est donc le volume récurrent historique: 98u.

</details>


<details>
<summary><strong>8. [PF3341] CARRE MAYONNAISE BIO 500ML</strong> - LLM: 110u vs Médiane: 110u (Réel: 110u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 110u (confidence: high)
- 📊 **Baseline N-1**: 110u
- 📊 **Médiane**: 110u
- ✅ **Réel commandé**: 110u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuelle/Bimensuelle avec commandes historiquement le mardi
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client démontre une demande extrêmement stable de 110 unités à chaque commande passée un mardi. L'absence de données pour les mardis intermédiaires (30/09, 07/10) suggère un cycle mensuel/bimensuel plutôt qu'une résiliation. La date de prédiction (mardi 14/10) correspond au jour habituel. En agroalimentaire B2B, une telle constance (même quantité sur 3 points distincts) indique un besoin de stock régulier sans saisonnalité apparente. Aucun facteur de risque ne justifie d'ajuster la quantité.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 10:12:05: 288u
- 2025-10-07 09:21:19: 192u
- 2025-09-30 10:39:35: 384u
- 2025-09-23 14:07:32: 96u
- 2025-09-16 12:31:33: 96u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 96u
- 2024-10-01 09:34:05: 288u
- 2024-09-24 07:15:22: 96u
- 2024-09-17 15:18:07: 480u
- 2024-09-12 12:47:26: 192u
- 2024-09-05 07:15:19: 288u
- 2024-08-27 09:32:47: 192u
- 2024-08-20 08:57:46: 192u
- 2024-08-13 08:17:17: 96u
- 2024-06-25 12:51:56: 288u
- 2024-06-25 12:51:20: 288u
- 2024-06-25 12:50:51: 384u

**✅ Quantité LLM**: 192u (confidence: high)
**📊 Quantité Réelle**: 192u

</details>


<details>
<summary><strong>2. [PF01012] CARREFOUR VOL AU VENT 400 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 10:12:05: 192u
- 2025-10-07 09:21:19: 96u
- 2025-09-30 10:39:35: 288u
- 2025-09-23 14:07:32: 192u
- 2025-09-16 12:31:33: 192u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 192u
- 2024-10-01 09:34:05: 96u
- 2024-08-20 08:57:46: 192u
- 2024-07-15 10:04:22: 576u
- 2024-07-03 11:51:49: 96u
- 2024-07-03 08:54:55: 480u
- 2024-07-02 08:34:10: 384u
- 2024-06-27 12:35:53: 96u
- 2024-06-25 12:51:56: 192u
- 2024-06-25 12:51:20: 192u
- 2024-06-25 12:50:51: 192u
- 2024-06-25 08:49:38: 192u

**✅ Quantité LLM**: 192u (confidence: medium)
**📊 Quantité Réelle**: 192u

</details>


<details>
<summary><strong>3. [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:21:19: 108u
- 2025-09-30 10:39:35: 108u
- 2025-09-23 14:07:32: 108u
- 2025-09-09 13:17:20: 108u
- 2025-08-26 13:19:30: 108u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 108u
- 2024-10-01 09:34:05: 108u
- 2024-09-24 07:15:22: 108u
- 2024-09-17 15:18:07: 216u
- 2024-09-12 12:47:26: 108u
- 2024-07-03 11:51:49: 108u
- 2024-07-02 08:34:10: 324u
- 2024-06-27 12:35:53: 108u
- 2024-06-25 12:51:56: 108u
- 2024-06-25 12:51:20: 108u
- 2024-06-25 12:50:51: 216u
- 2024-06-25 08:49:38: 108u

**✅ Quantité LLM**: 108u (confidence: high)
**📊 Quantité Réelle**: 108u

</details>


<details>
<summary><strong>4. [PF3339] CARRE MAYONNAISE ANCIENNE 500ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:21:19: 96u
- 2025-09-30 10:39:35: 96u
- 2025-09-16 12:31:33: 96u
- 2025-09-09 13:17:20: 96u
- 2025-07-29 04:52:34: 192u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 96u (confidence: high)
**📊 Quantité Réelle**: 96u

</details>


<details>
<summary><strong>5. [PF3343] SIMPL CARRE VOL AU VENT 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:21:19: 192u
- 2025-09-30 10:39:35: 192u
- 2025-09-23 14:07:32: 192u
- 2025-09-09 13:17:20: 192u
- 2025-09-02 11:55:00: 96u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 192u (confidence: high)
**📊 Quantité Réelle**: 96u

</details>


<details>
<summary><strong>6. [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-30 10:39:35: 216u
- 2025-09-23 14:07:32: 108u
- 2025-09-09 13:17:20: 108u
- 2025-08-26 13:19:30: 108u
- 2025-08-12 09:34:57: 108u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 108u (confidence: high)
**📊 Quantité Réelle**: 108u

</details>


<details>
<summary><strong>7. [PF1952] CARRE VIN CIBOULET PET 450</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 14:07:32: 98u
- 2025-09-09 13:17:20: 98u
- 2025-08-12 10:12:59: 98u
- 2025-07-29 04:52:34: 392u
- 2025-07-29 04:52:06: 196u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 08:55:53: 98u
- 2024-09-24 07:15:22: 98u
- 2024-09-12 12:47:26: 98u
- 2024-09-05 07:15:19: 98u
- 2024-08-27 09:32:47: 98u
- 2024-08-20 08:57:46: 98u
- 2024-08-13 08:17:17: 98u
- 2024-08-06 14:39:19: 98u
- 2024-06-25 12:51:56: 196u
- 2024-06-25 12:51:20: 98u
- 2024-06-25 12:50:51: 98u
- 2024-06-25 08:49:38: 196u

**✅ Quantité LLM**: 98u (confidence: high)
**📊 Quantité Réelle**: 98u

</details>


<details>
<summary><strong>8. [PF3341] CARRE MAYONNAISE BIO 500ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 14:07:32: 110u
- 2025-07-29 04:52:34: 110u
- 2025-07-29 04:52:06: 110u
- 2025-07-22 14:39:10: 110u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 110u (confidence: high)
**📊 Quantité Réelle**: 110u

</details>




---

## False Positives (5)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3340] CARRE MAYONNAISE BELGE 720ML | 80 | Stock prédit: 6.5u (0j restants) → prédit 80u mais non commandé |
| [PF3344] SIMPL CARRE CARBONNADES 800 GR PAR 8 | 96 | Stock prédit: 57.2u (8j restants) → prédit 96u mais non commandé |
| [PF3381] CARREFOUR SAUCE COCKTAIL BIO SQUEEZE 300ML | 112 | Stock prédit: -14.0u (-3j restants) → prédit 112u mais non commandé |
| [PF2933] CARRE VIN MIEL MOU PET 450 BIO | 98 | Stock prédit: -322.3u (-52j restants) → prédit 98u mais non commandé |
| [PF2932] CARRE VIN CIBOULET PET 450 BIO | 98 | Stock prédit: -438.8u (-62j restants) → prédit 98u mais non commandé |


---

## False Negatives (0)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>

*Aucun faux négatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-18T08:44:27.234Z*
