# Rapport Backtest - Client BEES COOP

## Contexte

- **Client** : BEES COOP (ID: 38709)
- **Commande réelle** : S39784
- **Date commande** : 2025-10-17 12:52:44
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 19,892 input + 3,919 output = 23,811 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 70.6% | 17 produits prédits, 12 corrects |
| **Rappel** | 92.3% | 13 produits réels, 12 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 57.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 68.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 19.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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

## True Positives (12)

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
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 3 | 1 | 2.0 | 200.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF035] JF BURGER SQUEEZE 300ML | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 5 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF038] JF KETCHUP SQUEEZE 300ML | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.66u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (20-35 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (moyenne 1.14u vers 1.66u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation de faible volume mais avec une légère tendance à la hausse sur les 3 derniers mois (moyenne de 1.66u contre 1.14u historiquement). Bien que le produit ne suive pas un jour fixe de la semaine de manière rigide, les commandes récentes ont eu lieu environ tous les 13 à 30 jours. La dernière commande datant du 16 septembre (2u), et la prédiction étant fixée au 16 octobre (soit exactement 30 jours après), nous sommes sur une fenêtre de réapprovisionnement hautement probable. On retient 2u pour s'aligner sur la dernière commande et le volume observé en août.

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 5u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: high)
- 📊 **Baseline N-1**: 4.67u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (moyenne 3.5 vers 5.5)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande approximativement mensuel (intervalles de 32 jours et 13 jours récemment, compensant un mois de juillet sans commande). La tendance récente (moyenne des 3 derniers mois : 4.66) est supérieure à la moyenne N-1 (4.0). La dernière commande le 2025-09-16 était de 6u, mais la moyenne mobile courte suggère un atterrissage plus proche de 5u. Le 16 octobre correspond exactement au cycle de 30 jours après la commande de septembre, rendant la probabilité d'une commande de réapprovisionnement de 5u très élevée.

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1.15u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit avec un volume de rotation faible mais régulier d'environ une unité par mois. Les deux dernières commandes (septembre 2025) ont eu lieu à 13 jours d'intervalle pour 1u chacune. La date de prédiction (16 octobre) se situe exactement 30 jours après la dernière commande du 16 septembre, respectant le cycle mensuel observé historiquement. Bien que l'année N-1 affichait occasionnellement 2u, la tendance récente sur les deux derniers mois est strictement stabilisée à 1u. En l'absence de pic saisonnier marqué sur ce SKU de spécialité, la quantité la plus probable pour le 16 octobre est 1 unité.

</details>


<details>
<summary><strong>4. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance mensuelle (~27-35 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u-3u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse des intervalles montre une commande mensuelle erratique. La quantité de 4u en septembre 2024 semble être un outlier comparée aux autres points de l'historique qui oscillent majoritairement entre 1u et 3u. Les deux dernières commandes récentes (septembre 2025) montrent une stabilité à 2u et 3u. Bien que la date de prédiction (jeudi) soit proche de la dernière commande du 16 septembre, le volume de fond moyen se stabilise autour de 2u. Je retiens 2u pour minimiser le MAPE, reflétant la tendance immédiate la plus probable.

</details>


<details>
<summary><strong>5. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (~30-45j)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passage de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un produit à faible rotation mais avec une accélération très récente. En 2024, le volume était systématiquement de 1u par commande. La dernière commande (16 sept 2025) a doublé pour atteindre 2u. La date de prédiction (16 oct 2025) tombe exactement 30 jours après la dernière commande, ce qui correspond au cycle court observé entre les deux dernières saisies (13 jours puis 30 jours). Compte tenu de la tendance de croissance immédiate (dernière valeur à 2u) et de la maturité du cycle pour ce client, la quantité de 2u est la plus probable pour maintenir son stock.

</details>


<details>
<summary><strong>6. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme mensuel irrégulier (28-35 jours)
- **Saisonnalité**: none
- **Tendance**: Stable entre 1u et 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un produit à faible rotation constante. Le cycle de commande moyen est d'environ 30 jours (dernières commandes le 04/08, 03/09, 16/09). La date de prédiction (16/10) correspond exactement à un intervalle de 30 jours après la dernière commande du 16/09. Les volumes oscillent strictement entre 1 et 2 unités. Étant donné que la dernière commande était de 2u et que le volume N-1 d'août 2024 était également de 2u, la quantité de 2u est la plus probable pour couvrir le besoin mensuel.

</details>


<details>
<summary><strong>7. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (intervalles de 45 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle de commande très espacé, généralement tous les 1.5 à 2 mois. La dernière commande date du 3 septembre (25% plus récente que l'intervalle moyen habituel). Cependant, le volume est extrêmement stable, oscillant entre 1u et 2u depuis 2024. Compte tenu du fait qu'il s'agit de B2B et que la dernière commande était de 2u, nous maintenons ce volume de référence pour la prochaine occurrence de commande, malgré l'espacement irrégulier.

</details>


<details>
<summary><strong>8. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très erratique - Cycle long (60 à 90 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passage de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre des commandes très espacées (4 commandes en 2024, une seule en 2025). On observe cependant une légère augmentation du volume unitaire, passant de l'unité systématique en 2024 à 2 unités lors de la dernière commande d'août 2025. En l'absence de cycle hebdomadaire strict et compte tenu de la faible fréquence, on se base sur le dernier volume observé (2u) comme indicateur de la demande de fond actuelle du client pour ce produit, bien que la probabilité d'une commande précisément le jeudi 16 octobre soit statistiquement faible au vu de l'espacement des dates historiques (intervalle de +2 mois). Conformément aux consignes, nous prédisons le volume de la prochaine commande probable plutôt que 0 car le produit est toujours actif dans le catalogue client (commande récente en août). Pour minimiser le MAPE sur une commande sporadique, le dernier point (2u) est la référence la plus fiable malgré le manque de données de récurrence courte (hebdomadaire). Les données N-1 ne montrent aucun pic saisonnier spécifique en octobre (dernière commande N-1 fin septembre). La tendance récente à 2u prime donc pour la prédiction finale de la prochaine commande à venir en octobre/novembre 2025, estimée ici au plus tôt pour la date cible du 16/10/2025 par défaut de cycle fixe clairement établi (hormis le mode sporadique).

</details>


<details>
<summary><strong>9. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très erratique - Commandes sporadiques tous les 1 à 3 mois
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Le produit présente un historique de commandes très faibles et espacées. La valeur de 4 unités en juin 2024 est un outlier isolé (probablement un stock de mise en place ou une promotion ponctuelle). Toutes les autres commandes, y compris la plus récente d'août 2025, sont physiquement limitées à 1 unité. Bien que le rythme ne soit pas hebdomadaire, la quantité de fond est de 1u par commande déclenchée.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [JF035] JF BURGER SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 08:36:35: 2u
- 2025-09-03 06:47:09: 1u
- 2025-08-04 11:59:10: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-06 09:14:09: 2u
- 2024-06-28 11:44:57: 1u
- 2024-05-13 11:48:40: 1u
- 2024-04-09 06:51:49: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 08:36:35: 6u
- 2025-09-03 06:47:09: 3u
- 2025-08-04 11:59:10: 5u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 08:29:53: 3u
- 2024-08-22 07:59:17: 2u
- 2024-08-06 09:14:09: 5u
- 2024-06-28 11:44:57: 6u
- 2024-05-13 11:48:40: 4u
- 2024-04-09 06:51:49: 4u

**✅ Quantité LLM**: 5u (confidence: high)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 08:36:35: 1u
- 2025-09-03 06:47:09: 1u
- 2025-08-04 11:59:10: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 08:29:53: 2u
- 2024-08-22 07:59:17: 1u
- 2024-06-28 11:44:57: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 08:36:35: 2u
- 2025-09-03 06:47:09: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 08:29:53: 4u
- 2024-08-22 07:59:17: 1u
- 2024-08-06 09:14:09: 2u
- 2024-06-28 11:44:57: 2u
- 2024-05-13 11:48:40: 3u
- 2024-04-09 06:51:49: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>5. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 08:36:35: 2u
- 2025-09-03 06:47:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-22 07:59:17: 1u
- 2024-08-06 09:14:09: 1u
- 2024-06-28 11:44:57: 1u
- 2024-05-13 11:48:40: 1u
- 2024-04-09 06:51:49: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 08:36:35: 2u
- 2025-09-03 06:47:09: 1u
- 2025-08-04 11:59:10: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-22 07:59:17: 2u
- 2024-08-06 09:14:09: 1u
- 2024-06-28 11:44:57: 2u
- 2024-05-13 11:48:40: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>7. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:47:09: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 08:29:53: 2u
- 2024-08-06 09:14:09: 2u
- 2024-06-28 11:44:57: 1u
- 2024-04-09 06:51:49: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:59:10: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 08:29:53: 1u
- 2024-06-28 11:44:57: 1u
- 2024-05-13 11:48:40: 1u
- 2024-04-09 06:51:49: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:59:10: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-22 07:59:17: 1u
- 2024-06-28 11:44:57: 4u
- 2024-05-13 11:48:40: 1u
- 2024-04-09 06:51:49: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Stock prédit: 0.5u (24j restants) → prédit 1u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 3 | Stock prédit: 1.0u (22j restants) → prédit 3u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 3 | Stock prédit: -1.4u (-29j restants) → prédit 3u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: 0.1u (11j restants) → prédit 1u mais non commandé |


---

## False Negatives (1)

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
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 2 | Stock suffisant: 1.6u (101j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T11:15:09.678Z*
