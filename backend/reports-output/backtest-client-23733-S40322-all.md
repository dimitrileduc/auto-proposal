# Rapport Backtest - Client DELISALADES

## Contexte

- **Client** : DELISALADES (ID: 23733)
- **Commande réelle** : S40322
- **Date commande** : 2025-11-13 12:24:21
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 16
- **Tokens**: 21,280 input + 29,431 output = 50,711 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 46.7% | 15 produits prédits, 7 corrects |
| **Rappel** | 63.6% | 11 produits réels, 7 détectés |
| **F1-Score** | 53.8% | Score équilibré global |

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
| **MAE** | 2.43 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 63.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 76.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 11.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [LV161] LV Tartinade Mangue curry 190g | 6 | 2 | 4.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 12 | 6 | 6.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 0 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF021] JF PICKLES 350 ML | 5 | 8 | 3.0 | 37.5% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV129] LV Tartinade Carotte Gingembre 190g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 0 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


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
- **Pattern temporel**: Cycle régulier d'environ 21 jours identifié sur les trois derniers mois
- **Saisonnalité**: weak
- **Tendance**: Stable à 3u par commande avec une fréquence de rotation en hausse par rapport à l'année précédente
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité parfaite sur la période récente (septembre et octobre 2025) avec 3 unités commandées systématiquement tous les 20 à 23 jours. La dernière commande ayant eu lieu le 23 octobre, l'échéance théorique du cycle (23 oct + 21j = 13 nov) tombe précisément dans les 24h suivant le 12 novembre (date actuelle). La probabilité d'une commande de 3 unités dans les prochains jours est donc très élevée. Aucun outlier n'est détecté et la demande de fond est stabilisée à 3u malgré une activité plus faible en N-1.

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 6u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: high)
- 📊 **Baseline N-1**: 5.4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 4u (200.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle régulier de 20 à 25 jours environ (mensuel à bi-mensuel)
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 5 unités par commande
- **Outliers détectés**: 10u, 2u

**🧠 Raisonnement LLM:**
ÉTAPE 1: La demande de fond est stable avec une moyenne de 5,4u. L'observation de 10u en juillet 2024 est traitée comme un pic saisonnier/promotionnel et l'unité de 2u comme un ajustement ponctuel. ÉTAPE 2: Faible impact saisonnier global, bien que les tartinades tendent à légèrement augmenter en période festive (fin d'année). ÉTAPE 3: La tendance récente montre des intervalles de 20 et 23 jours (sept/oct 2025). ÉTAPE 4: La dernière commande date du 2025-10-23. Avec un cycle médian constaté de 23 jours, la prochaine commande est attendue aux alentours du 15 novembre 2025, soit dans la fenêtre de prédiction. Une quantité de 6 unités est recommandée (arrondi logistique cohérent avec l'historique).

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 12u vs Médiane: 14u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 12u (confidence: high)
- 📊 **Baseline N-1**: 12u
- 📊 **Médiane**: 14u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 6u (100.0%)
- 📉 **Erreur Médiane**: 8u (133.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: cycle médian de 21 à 25 jours
- **Saisonnalité**: weak
- **Tendance**: Hausse significative (passage de 6u en N-1 à une base de 12-15u en 2025)
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
ÉTAPE 1: Identification d'un outlier à 20u en juillet 2024. Exclusion faite, la base historique était de 6u. ÉTAPE 2: Faible impact saisonnier sur novembre, bien qu'un pic estival ait été noté. ÉTAPE 3: La tendance récente montre un doublement des volumes habituels (15u en septembre, 12u en octobre) suggérant une montée en puissance du point de vente ou de la référence. ÉTAPE 4: La dernière commande date du 23 octobre (il y a 20 jours). Avec un cycle médian mesuré à 25 jours en 2024, la fenêtre de commande optimale se situe dans les 7 prochains jours (vers le 17-20 novembre), donc dans l'intervalle d'analyse. Nous recommandons 12u, aligné sur la dernière commande pour stabiliser le stock face à la nouvelle tendance de consommation.

</details>


<details>
<summary><strong>4. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 0u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle sporadique long (intervalles de 1 à 12 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une fréquence de commande très faible et irrégulière (seulement 4 points de données sur 18 mois). La dernière commande a eu lieu le 03/10/2025 (2u). Si l'on se réfère à l'année précédente (N-1), aucune commande n'a été passée entre octobre et mai, suggérant une absence de demande pour ce produit durant la période hivernale/fin d'année. Le délai depuis la dernière commande est de 40 jours, ce qui dépasse les cycles courts, et sans pattern de fin d'année identifié, la probabilité d'une commande dans les 30 prochains jours est jugée nulle.

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 35 jours, souvent concentré le jeudi ou le lundi.
- **Saisonnalité**: weak
- **Tendance**: Stable à 4u
- **Outliers détectés**: 15u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle moyen de 35 à 40 jours entre les commandes. La dernière commande datant du 2025-10-03 (il y a 40 jours), le client est dans sa fenêtre de commande habituelle. Bien qu'une pointe à 8u ait été observée en fin d'année 2023, les volumes récents de 2025 (2u et 4u) incitent à la prudence. La quantité recommandée de 4u correspond à la demande de fond (mode statistique) pour ce produit. Une seule commande est attendue dans les 30 prochains jours vu l'espacement chronologique constaté.

</details>


<details>
<summary><strong>6. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 0u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: medium)
- 📊 **Baseline N-1**: 3.67u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec inactivité prolongée (> 12 mois)
- **Saisonnalité**: strong
- **Tendance**: Inactivité totale / Produit potentiellement déréférencé
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre que le produit n'a fait l'objet d'aucune commande durant l'année 2025 et les 3 derniers mois. La dernière transaction remonte au 17 juin 2024 (plus de 510 jours). Bien que le produit soit un article à forte connotation festive (truffes), l'absence de réactivation de la référence à l'approche de la mi-novembre 2025 suggère un arrêt de consommation pour ce client. Conformément à la règle de calcul, le délai depuis la dernière commande étant largement supérieur au cycle moyen estimé et à la fenêtre de 30 jours, aucune commande n'est prévue.

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

**✅ Quantité LLM**: 6u (confidence: high)
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

**✅ Quantité LLM**: 12u (confidence: high)
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

**✅ Quantité LLM**: 0u (confidence: low)
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

**✅ Quantité LLM**: 4u (confidence: medium)
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

**✅ Quantité LLM**: 0u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (8)

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
| [LV130] LV BIO Tartinade Paprika Chili 190g | 7 | Stock prédit: 4.2u (13j restants) → prédit 7u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 3 | Stock prédit: 1.4u (17j restants) → prédit 3u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 3 | Stock prédit: 1.5u (18j restants) → prédit 3u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 4 | Stock prédit: 1.2u (16j restants) → prédit 4u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 2 | Stock prédit: 0.8u (28j restants) → prédit 2u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | Stock prédit: 1.0u (18j restants) → prédit 2u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 3 | Stock prédit: -0.9u (-14j restants) → prédit 3u mais non commandé |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 2 | Stock prédit: -1.6u (-59j restants) → prédit 2u mais non commandé |


---

## False Negatives (4)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | LLM avait prédit 0 (pas de besoin) avec stock: -1.4u (-28j) mais client a commandé 2u |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock suffisant: 0.9u (34j restants > seuil 30j) |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | LLM avait prédit 0 (pas de besoin) avec stock: 0.7u (21j) mais client a commandé 2u |


---

*Rapport généré automatiquement le 2025-12-18T19:59:19.785Z*
