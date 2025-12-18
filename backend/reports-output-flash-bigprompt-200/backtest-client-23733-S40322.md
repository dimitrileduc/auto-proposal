# Rapport Backtest - Client DELISALADES

## Contexte

- **Client** : DELISALADES (ID: 23733)
- **Commande réelle** : S40322
- **Date commande** : 2025-11-13 12:24:21
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 16
- **Tokens**: 25,805 input + 4,794 output = 30,599 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 43.8% | 16 produits prédits, 7 corrects |
| **Rappel** | 87.5% | 8 produits réels, 7 détectés |
| **F1-Score** | 58.3% | Score équilibré global |

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
| **MAE** | 2.29 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 59.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 56.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 29.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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

## True Positives (7)

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
| [LV140] LV Moutarde à l'ancienne  200ml | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 14 | 6 | 8.0 | 133.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF021] JF PICKLES 350 ML | 5 | 8 | 3.0 | 37.5% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV129] LV Tartinade Carotte Gingembre 190g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [LV140] LV Moutarde à l'ancienne  200ml</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 20-30 jours
- **Saisonnalité**: weak
- **Tendance**: Hausse stabilisée à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une stabilisation remarquable de la demande à 3 unités sur les trois derniers mois (septembre, début octobre, fin octobre), indépendamment du jour de la semaine. Bien que les données N-1 affichaient une moyenne de 2.2 unités, la tendance récente est strictement constante à 3 unités. L'intervalle entre les dernières commandes (20 jours, puis 20 jours) suggère qu'une commande est logiquement attendue autour de la mi-novembre. La date cible du 12 novembre (mercredi) s'inscrit parfaitement dans ce rythme de réapprovisionnement mensuel/tri-hebdomadaire.

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 4-5u
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande mensuel régulier (une commande par mois). Sur les 12 derniers mois, le volume modal est de 4u ou 6u. La période récente (octobre 2025) montre un retour à 4u après un pic isolé à 8u (probablement promotionnel ou restockage saisonnier). La date de prédiction (12 novembre) correspond parfaitement au cycle mensuel suite à la commande du 23 octobre (~20 jours de rotation de stock pour ce type de SKU). Compte tenu de la stabilité de la tendance de fond à 4u sur les périodes équivalentes en N-1 (septembre/octobre 2024) et de la dernière valeur observée, la quantité de 4u est la plus probable pour minimiser le MAPE.

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 14u vs Médiane: 14u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 14u (confidence: high)
- 📊 **Baseline N-1**: 13.5u
- 📊 **Médiane**: 14u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 8u (133.3%)
- 📉 **Erreur Médiane**: 8u (133.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-40 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse significative +25%
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande mensuel. Bien que la moyenne 2024 tournait autour de 6-8 unités (en excluant l'outlier de 20u en juillet), l'année 2025 marque une rupture de tendance nette à la hausse. Les deux dernières commandes (15u en septembre et 12u en octobre) montrent un nouveau palier de consommation. La date de prédiction (12 novembre) correspond exactement à l'intervalle de 40 jours observé entre les deux dernières commandes (10 sept au 23 oct = 43 jours). La quantité recommandée de 14u est une moyenne pondérée privilégiant la croissance récente tout en lissant le léger fléchissement d'octobre.

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence / Opportuniste (intervalle irrégulier > 30j)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
Le produit présente un historique de commandes très dispersé avec de faibles quantités (moyenne de 2.6u sur les commandes positives). La commande la plus récente (octobre 2025) et une commande de l'année précédente (octobre 2024) pointent toutes deux vers une quantité de 2 unités. Bien que le mercredi ne soit pas un jour de commande récurrent identifié, la règle métier impose de ne pas prédire 0. Compte tenu de la stabilité du volume minimum observé sur les points de données valides les plus proches temporellement, la quantité de 2 unités est la plus probable pour répondre au prochain besoin de réapprovisionnement.

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier de 30 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (8u -> 4u -> 2u)
- **Outliers détectés**: 15u

**🧠 Raisonnement LLM:**
L'historique montre un produit à faible rotation avec une tendance baissière. La valeur de 15u en juillet 2024 est un outlier évident par rapport au reste de la série (3-8u). Sur les 12 derniers mois, le volume moyen hors outlier est de 4.5u, mais les deux dernières commandes sont très faibles (4u puis 2u). La prédiction pour ce mercredi 12 novembre se situe environ 40 jours après la dernière commande (03/10), ce qui correspond au cycle habituel. Je retiens une quantité de 3u, pondérant davantage la baisse récente tout en restant proche du plancher historique de sécurité (pas de 0u selon les guidelines).

</details>


<details>
<summary><strong>6. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 3.67u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme très erratique (cycle ~30-40 jours initialement)
- **Saisonnalité**: none
- **Tendance**: Instable avec absence prolongée de commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité et ancien (aucune activité depuis juin 2024). Cependant, le produit présente une consistance de commande entre 3u et 4u lors de ses apparitions. En suivant la règle de gestion des jours hors cycle, comme aucune récurrence hebdomadaire fixe n'est établie mais que le besoin de fond se situe autour de 3,67u, je projette la quantité de la prochaine commande probable à 4u pour couvrir la demande de base historique.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [LV140] LV Moutarde à l'ancienne  200ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 09:44:15: 3u
- 2025-10-03 08:03:20: 3u
- 2025-09-10 08:42:30: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-16 10:06:10: 4u
- 2024-06-17 08:26:34: 2u
- 2024-06-04 07:52:11: 1u
- 2024-05-14 14:28:33: 2u
- 2024-02-12 12:18:18: 2u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 09:44:15: 4u
- 2025-10-03 08:03:20: 8u
- 2025-09-10 08:42:30: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-24 14:18:31: 6u
- 2024-10-07 12:34:29: 4u
- 2024-09-12 09:46:28: 4u
- 2024-08-12 12:27:21: 6u
- 2024-07-16 10:06:10: 10u
- 2024-06-17 08:26:34: 2u
- 2024-06-04 07:52:11: 6u
- 2024-05-14 14:28:33: 8u
- 2024-04-05 09:30:21: 4u
- 2024-03-07 14:50:08: 4u
- 2024-01-25 09:32:53: 6u
- 2024-01-03 14:44:54: 6u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-23 09:44:15: 12u
- 2025-09-10 08:42:30: 15u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-24 14:18:31: 6u
- 2024-10-07 12:34:29: 10u
- 2024-09-12 09:46:28: 6u
- 2024-08-12 12:27:21: 8u
- 2024-07-16 10:06:10: 20u
- 2024-06-17 08:26:34: 4u
- 2024-06-04 07:52:11: 4u
- 2024-05-14 14:28:33: 6u
- 2024-04-18 12:24:57: 8u
- 2024-04-05 09:30:21: 6u
- 2024-03-26 10:49:17: 6u
- 2024-03-07 14:50:08: 6u

**✅ Quantité LLM**: 14u (confidence: high)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 08:03:20: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 12:34:29: 2u
- 2024-06-17 08:26:34: 0u
- 2024-05-14 14:28:33: 4u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 08:03:20: 4u
- 2025-09-10 08:42:30: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-24 14:18:31: 8u
- 2024-09-12 09:46:28: 4u
- 2024-07-16 10:06:10: 15u
- 2024-06-17 08:26:34: 3u
- 2024-05-14 14:28:33: 8u
- 2024-04-18 12:24:57: 3u
- 2024-03-07 14:50:08: 4u
- 2024-02-12 12:18:18: 3u
- 2024-01-03 14:44:54: 4u
- 2023-12-07 13:55:19: 8u
- 2023-11-23 10:34:37: 4u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>6. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-17 08:26:34: 4u
- 2024-04-05 09:30:21: 3u
- 2024-03-26 10:49:17: 4u

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (9)

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
| [LV130] LV BIO Tartinade Paprika Chili 190g | 8 | Stock prédit: 4.2u (13j restants) → prédit 8u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 3 | Stock prédit: 1.4u (17j restants) → prédit 3u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 3 | Stock prédit: 1.5u (18j restants) → prédit 3u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 4 | Stock prédit: 1.2u (16j restants) → prédit 4u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 2 | Stock prédit: 0.8u (28j restants) → prédit 2u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | Stock prédit: 1.0u (18j restants) → prédit 2u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 3 | Stock prédit: -0.9u (-14j restants) → prédit 3u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 2 | Stock prédit: -2.5u (-68j restants) → prédit 2u mais non commandé |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 2 | Stock prédit: -1.6u (-59j restants) → prédit 2u mais non commandé |


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
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock suffisant: 0.9u (34j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T11:14:44.259Z*
