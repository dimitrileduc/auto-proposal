# Rapport Backtest - Client TERRA NATURKOST HANDELS KG

## Contexte

- **Client** : TERRA NATURKOST HANDELS KG (ID: 3868)
- **Commande réelle** : S40371
- **Date commande** : 2025-11-14 15:19:09
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 12,477 input + 2,419 output = 14,896 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 87.5% | 16 produits prédits, 14 corrects |
| **Rappel** | 87.5% | 16 produits réels, 14 détectés |
| **F1-Score** | 87.5% | Score équilibré global |

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
| **MAE** | 20.43 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 46.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 58.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 2.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 11 | Avec erreur |

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

## True Positives (14)

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
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 32 | 48 | 16.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 48 | 48 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 64 | 80 | 16.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 32 | 80 | 48.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 25 | 50 | 25.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 50 | 50 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV136] LV Tartinade Betterave 190g | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV159] LV Tartinade aux Truffes  135g  | 25 | 53 | 28.0 | 52.8% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV345] LV Spread KIDS 200ml Organic | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV342] LV Organic Broccoli Spread 190 g | 50 | 53 | 3.0 | 5.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV133] LV Tartinade Ananas Coco 190g | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV189] LV Tartinade Houmous Type 380g | 75 | 25 | 50.0 | 200.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 32u vs Médiane: 32u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 32u (confidence: medium)
- 📊 **Baseline N-1**: 24u
- 📊 **Médiane**: 32u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 16u (33.3%)
- 📉 **Erreur Médiane**: 16u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 21 et 45 jours (moyenne ~32j)
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 16u-32u
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
L'analyse montre une alternance fréquente entre 16u et 32u (multiples de couches ou de cartons). La dernière commande le 17/10/2025 était de 32u. En suivant le cycle moyen d'environ 30 jours constaté historiquement (ex: 2024-01-05 à 2024-01-26, ou 2025-09-26 à 2025-10-17), la prochaine commande est attendue autour de la mi-novembre, correspondant parfaitement à la date du 13/11/2025. Compte tenu de la stabilité de la demande B2B sur ce format (Delikatess 250ml) et de la répétition du volume de 32u dans 50% des transactions historiques, cette quantité est la plus probable pour le réapprovisionnement de novembre.

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 48u vs Médiane: 48u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: high)
- 📊 **Baseline N-1**: 48u
- 📊 **Médiane**: 48u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 21 à 35 jours (cycle mensuel dominant)
- **Saisonnalité**: none
- **Tendance**: Stable à 48u avec une légère fluctuation ponctuelle
- **Outliers détectés**: 80u, 64u

**🧠 Raisonnement LLM:**
L'analyse montre une forte récurrence de la quantité 48u sur l'année N-1 et la période récente. Le client commande principalement les vendredis avec un cycle d'environ 3-5 semaines. La date de prédiction (jeudi 13/11) précède immédiatement le jour habituel (vendredi) et correspond à un intervalle de 27 jours depuis la dernière commande du 17/10. En suivant les consignes de cycle, on anticipe la commande imminente de ce cycle mensuel, dont le volume de fond est stabilisé à 48u.

</details>


<details>
<summary><strong>3. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 64u vs Médiane: 64u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 64u (confidence: high)
- 📊 **Baseline N-1**: 64u
- 📊 **Médiane**: 64u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 16u (20.0%)
- 📉 **Erreur Médiane**: 16u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (~20-30j) avec stabilisation récente à 21-25 jours d'intervalle
- **Saisonnalité**: none
- **Tendance**: Baisse progressive et stabilisation de 80u vers 64u
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
L'analyse montre une transition claire d'un volume historique de 80u (2024) vers un volume stabilisé de 64u sur les trois dernières commandes consécutives de 2025. Le rythme de commande s'est accéléré passant de ~45 jours en 2024 à un cycle mensuel strict en 2025. Bien que le vendredi soit le jour dominant, la commande de septembre 2025 a été passée un jeudi, validant la pertinence de la date de prédiction actuelle (jeudi 13 novembre). La stabilité parfaite des 3 dernières livraisons (64, 64, 64) rend cette valeur très probable.

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 32u vs Médiane: 32u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 32u (confidence: medium)
- 📊 **Baseline N-1**: 32u
- 📊 **Médiane**: 32u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 48u (60.0%)
- 📉 **Erreur Médiane**: 48u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~21 jours d'écart observé, possiblement mensuel glissant)
- **Saisonnalité**: none
- **Tendance**: Stable à 32u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique présente une stabilité parfaite sur les deux derniers points de données (32u). Bien que l'intervalle soit de 21 jours entre les deux dernières commandes, le volume reste constant. La date de prédiction (jeudi 13/11) ne correspond pas au jour habituel (vendredi), mais selon les consignes métiers, nous prédisons la quantité du prochain cycle probable. Compte tenu de la stabilité absolue des volumes récents et de l'absence de données N-1 pour infirmer cette tendance, la répétition de la valeur 32u est le scénario le plus probable.

</details>


<details>
<summary><strong>5. [LV348] LV Tartinade Dattes-Chili 180g BE bio</strong> - LLM: 25u vs Médiane: 50u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: medium)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 50u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 25u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Quinzaine ou mensuel erratique (intervalles de 15j observés)
- **Saisonnalité**: none
- **Tendance**: Stable à 25u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est limité à deux points de données récents, mais ils sont parfaitement identiques à 25 unités. On observe une commande le jeudi 11/09 suivie d'une commande 15 jours plus tard le vendredi 26/09. La date de prédiction (13 novembre) tombe également un jeudi, ce qui correspond au jour de la première commande observée. En l'absence de données N-1 et face à une stabilité parfaite sur les deux dernières itérations, la quantité la plus probable est le maintien du volume actuel à 25 unités.

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 25u vs Médiane: 75u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: low)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 75u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 50u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée/sporadique (dernière commande il y a ~48 jours)
- **Saisonnalité**: none
- **Tendance**: Stable sur point unique (25u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec une seule donnée disponible (25u le 26/09/2025), il est impossible d'établir un cycle récurrent. Cependant, en B2B, le volume de commande initial est souvent représentatif du besoin logistique standard ou du stock de sécurité minimal. Bien que la date demandée (jeudi) diffère du jour de la dernière commande (vendredi), le produit LV Tartinade Betterave semble faire l'objet de réapprovisionnements espacés. Faute d'autre information d'évolution, la dernière valeur connue de 25u est la prédiction la plus probable.

</details>


<details>
<summary><strong>7. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 25u vs Médiane: 25u (Réel: 53u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: medium)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 53u
- 📉 **Erreur LLM**: 28u (52.8%)
- 📉 **Erreur Médiane**: 28u (52.8%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel environ tous les 15 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 25u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Bien que nous n'ayons que deux points de données, ils sont parfaitement identiques (25u) et espacés de 15 jours. La date de prédiction (13 novembre) tombe un jeudi, ce qui est cohérent avec l'historique du 11 septembre (jeudi également). Le produit semble suivre un cycle de réapprovisionnement stable de 25 unités par quinzaine. En l'absence de données N-1 pour la fin d'année, on maintient la tendance récente stable observée en septembre.

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 32u
- 2025-09-26 09:47:05: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 11:39:30: 16u
- 2024-09-23 07:00:28: 32u
- 2024-08-16 11:44:09: 32u
- 2024-07-05 09:22:25: 16u
- 2024-05-06 12:17:20: 32u
- 2024-04-25 07:54:19: 32u
- 2024-03-27 14:20:05: 32u
- 2024-02-23 08:25:35: 48u
- 2024-01-26 09:38:43: 16u
- 2024-01-05 08:53:58: 32u

**✅ Quantité LLM**: 32u (confidence: medium)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 48u
- 2025-09-26 09:47:05: 48u
- 2025-09-11 14:14:00: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 11:39:30: 48u
- 2024-09-23 07:00:28: 80u
- 2024-08-16 11:44:09: 48u
- 2024-07-05 09:22:25: 64u
- 2024-05-06 12:17:20: 32u
- 2024-04-25 07:54:19: 48u
- 2024-03-27 14:20:05: 48u
- 2024-02-23 08:25:35: 48u
- 2024-01-26 09:38:43: 48u
- 2024-01-05 08:53:58: 48u

**✅ Quantité LLM**: 48u (confidence: high)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>3. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 64u
- 2025-09-26 09:47:05: 64u
- 2025-09-11 14:14:00: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 11:39:30: 80u
- 2024-09-23 07:00:28: 48u
- 2024-08-16 11:44:09: 80u
- 2024-07-05 09:22:25: 80u
- 2024-05-06 12:17:20: 80u
- 2024-04-25 07:54:19: 80u
- 2024-03-27 14:20:05: 80u
- 2024-02-23 08:25:35: 64u
- 2024-01-26 09:38:43: 80u
- 2024-01-05 08:53:58: 64u

**✅ Quantité LLM**: 64u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 32u
- 2025-09-26 09:47:05: 32u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 32u (confidence: medium)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>5. [LV348] LV Tartinade Dattes-Chili 180g BE bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u
- 2025-09-11 14:14:00: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: medium)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: low)
**📊 Quantité Réelle**: 25u

</details>


<details>
<summary><strong>7. [LV159] LV Tartinade aux Truffes  135g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u
- 2025-09-11 14:14:00: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: medium)
**📊 Quantité Réelle**: 53u

</details>




---

## False Positives (2)

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
| [LV331] LV Tartinade Lentils Balsamico 190g | 25 | Stock prédit: -27.0u (-24j restants) → prédit 25u mais non commandé |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 75 | Stock prédit: -328.6u (-92j restants) → prédit 75u mais non commandé |


---

## False Negatives (2)

<details>
<summary>Qu'est-ce qu'un False Negative ?</summary>

**En simple** : Un produit que le système n'a PAS prédit MAIS que le client a commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Pas besoin de commander ce produit"
- Réalité : Le client commande ce produit
- → False Negative (besoin manqué)

**Problème** : Trop de False Negatives = beaucoup de besoins ratés (baisse le Rappel)
</details>


*Produits commandés mais non prédits*

| Produit | Qté commandée | Raison |
|---------|---------------|--------|
| [VID0009] Consigne casier | 256 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 1536 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:14:20.047Z*
