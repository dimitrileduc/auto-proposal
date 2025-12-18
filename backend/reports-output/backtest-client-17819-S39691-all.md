# Rapport Backtest - Client Tirtiaux Fruits srl

## Contexte

- **Client** : Tirtiaux Fruits srl (ID: 17819)
- **Commande réelle** : S39691
- **Date commande** : 2025-10-14 13:40:25
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 28
- **Tokens**: 34,858 input + 52,940 output = 87,798 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 68.8% | 32 produits prédits, 22 corrects |
| **Rappel** | 62.9% | 35 produits réels, 22 détectés |
| **F1-Score** | 65.7% | Score équilibré global |

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
| **MAE** | 0.59 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 46.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 13 | Avec erreur |

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

## True Positives (22)

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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV160] LV Tartinade Aubergine 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV132] LV Tartinade Houmous type 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (15 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier (intervalle de 30 à 35 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité mensuelle quasi parfaite sur ce produit. ÉTAPE 1: Aucune valeur aberrante détectée, les volumes oscillent strictement entre 1u et 3u. ÉTAPE 2: La saisonnalité est faible, bien que les données N-1 montrent des commandes constantes en automne (nov/déc). ÉTAPE 3: La tendance récente (août et septembre 2025) est stabilisée à 2 unités par commande. ÉTAPE 4: La dernière commande date du 2025-09-08, soit il y a 35 jours. Étant donné le cycle habituel de 30-35 jours, une commande est prévue de façon imminente dans la fenêtre des 30 prochains jours. Le volume recommandé pour cette commande unique est de 2 unités, correspondant au mode de consommation actuel.

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande irrégulière tous les 45 à 60 jours en moyenne
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES D'ANALYSE : 1. DE-EVENTING : Toutes les commandes historiques sont de 1 unité, aucune anomalie ou promotion n'est détectée. 2. SAISONNALITÉ : Bien qu'il y ait eu une longue absence de commandes entre oct. 2024 et sept. 2025, la reprise en septembre 2025 à 1 unité est cohérente avec le volume historique. 3. TENDANCE : Le produit est très stable en volume (1u) mais lent en rotation. 4. PRÉDICTION : La dernière commande date du 2025-09-08. Sur la base du cycle historique de 2024 (intervalles de 24, 42 et 56 jours entre les commandes de fin de saison), la prochaine commande est attendue entre 40 et 55 jours après la dernière, soit entre le 18 octobre et le 02 novembre 2025. Cette fenêtre tombe dans les 30 prochains jours. Quantité recommandée : 1 unité.

</details>


<details>
<summary><strong>3. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique, intervalle de 30 à 65 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante identifiée, toutes les commandes historiques sont de 1 unité. ÉTAPE 2: Pas de saisonnalité marquée en fin d'année sur l'historique 2024, mais les données sont parcellaires. ÉTAPE 3: Le produit a repris son activité après un long arrêt, avec une commande de 1u le 08/09/2025. ÉTAPE 4: Le délai depuis la dernière commande est de 35 jours. Les intervalles historiques varient entre 32 et 66 jours. La fenêtre de prédiction (30 prochains jours) couvre la période probable de renouvellement (jusqu'à 65 jours post-dernière commande). Une commande unitaire est donc attendue.

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (cycle d'environ 34 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre un comportement extrêmement régulier malgré le faible nombre de données : deux commandes de 1 unité avec un intervalle de 34 jours. La dernière commande ayant eu lieu le 08/09/2025, la prochaine était théoriquement attendue autour du 12/10/2025. Nous sommes le 13/10/2025, le cycle est donc arrivé à échéance. Une commande unique de 1 unité est donc prévue de manière imminente au cours de la période d'analyse.

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 0u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (intervalles irréguliers de 2 à 13 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à très bas volume (1-2u par commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une rotation extrêmement lente avec seulement trois commandes en 18 mois (avril 2024, juin 2024, août 2025). Le produit se comporte comme un article de niche avec des intervalles de commande très longs et erratiques. La dernière commande date du 5 août 2025 (il y a environ 70 jours). Bien qu'un intervalle de 2 mois ait été observé entre avril et juin 2024, l'absence totale de données pour la période d'octobre/novembre en N-1 et la nature imprévisible du cycle suggèrent qu'aucune commande ne sera passée dans la fenêtre critique des 30 prochains jours.

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande unique identifiée sans récurrence établie
- **Saisonnalité**: none
- **Tendance**: Inactif (dernière commande il y a 69 jours)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un historique extrêmement limité avec une seule commande d'une unité enregistrée le 05 août 2025. Depuis cette date, soit 69 jours, aucun mouvement n'a été observé. En l'absence de cycle régulier (hebdomadaire ou mensuel) et au vu de la période d'inactivité prolongée dépassant les deux mois, il n'y a aucun signal statistique permettant de prédire une commande dans les 30 prochains jours. Le produit semble être une commande ponctuelle ou un test sans réachat identifié à ce stade.

</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimodal alternant entre mensuel (~30j) et bimestriel (~60j)
- **Saisonnalité**: none
- **Tendance**: Stable en volume (2u) mais ralentissement de la fréquence en 2025
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre que ce produit suit soit un cycle de 30 jours (vu en août/septembre 2024), soit un cycle de repos plus long d'environ 60 jours (vu entre novembre et janvier, ou avril et juin). La dernière commande datant du 5 août 2025 (soit il y a 69 jours), le client a sauté son cycle court de septembre. Historiquement, après une longue période d'inactivité, une commande de réapprovisionnement survient. Le volume de 2 unités est la médiane stable observée sur l'historique long terme.

</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, cycle variant de 30 à 90 jours avec interruptions prolongées
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un produit à rotation très lente et irrégulière (slow-mover). La dernière commande remonte au 05/08/2025 (2u), soit il y a 69 jours. En observant les données de 2023-2024, on remarque des commandes récurrentes sur la période de fin d'année (novembre, décembre) après des creux automnaux. Compte tenu du délai écoulé depuis la dernière commande (>2 mois) et de la reprise d'activité observée historiquement à partir de début novembre (ex: commande du 07/11/2023), une commande de réapprovisionnement est probable dans la fenêtre des 30 prochains jours. La quantité recommandée de 2 unités correspond au volume des dernières commandes et à la demande saisonnière de fond de l'année précédente.

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel irrégulier (~55-60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Le produit a une demande de fond très stable de 1 unité par commande, sans aucun outlier significatif. Étape 2 : Aucune saisonnalité n'est observable sur les données N-1 et récentes. Étape 3 : La tendance est stable. Les commandes ont eu lieu environ tous les 55-60 jours durant l'année 2024. Étape 4 : La dernière commande date du 05/08/2025, soit il y a 69 jours. Étant donné que l'intervalle habituel (~55-60j) est déjà dépassé, une commande de réapprovisionnement de 1 unité est fortement probable durant la fenêtre des 30 prochains jours (Octobre/Novembre). La confiance est marquée comme 'low' en raison d'une longue interruption d'activité entre septembre 2024 et août 2025.

</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (cycle moyen de 28-35 jours), principalement le lundi ou mardi
- **Saisonnalité**: weak
- **Tendance**: Stable avec un volume habituel compris entre 1u et 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique révèle un produit à rotation lente mais régulière (environ une fois par mois). On observe un arrêt anormal des commandes depuis le 05 août 2025 (soit 69 jours d'inactivité), alors que le cycle habituel est de 30 jours. Ce retard suggère un épuisement probable des stocks. Les données de l'année précédente (N-1) montrent une commande de 2 unités début novembre 2023 et une commande fin septembre 2024. Compte tenu du volume de la toute dernière commande (2u) et du besoin de rattrapage suite à l'absence de commande en septembre, une commande de 2 unités est prévue pour la prochaine occurrence unique sous 30 jours.

</details>


<details>
<summary><strong>11. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique / Cycle long (environ 90-120 jours) avec inactivité prolongée
- **Saisonnalité**: none
- **Tendance**: Inactif / Dormant (aucune transaction depuis 16 mois)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre un profil de consommation extrêmement faible et irrégulier (3 commandes de 1 unité au total). La dernière activité enregistrée date du 31 mai 2024, soit plus de 16 mois avant la date actuelle. Bien qu'une commande ait été passée en novembre 2023, l'absence totale de commandes sur l'ensemble de l'année 2025 et les 3 derniers mois indique une rupture de consommation ou un déréférencement du produit chez ce client. Le cycle habituel de réapprovisionnement est largement dépassé, rendant une commande dans les 30 prochains jours hautement improbable.

</details>


<details>
<summary><strong>12. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 0u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques avec un intervalle historique de 90 à 110 jours (environ tous les 3-4 mois)
- **Saisonnalité**: none
- **Tendance**: Inactif (aucune commande enregistrée depuis septembre 2024)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 : Pas d'outliers identifiés, les volumes sont constants entre 1u et 2u. ÉTAPE 2 : Aucune saisonnalité marquée n'est visible, le produit semble être un 'slow mover' avec une rotation très faible. ÉTAPE 3 : La tendance est critique. Bien que le client commandait tous les 3-4 mois auparavant, aucune commande n'a été passée depuis le 02/09/2024, soit 13 mois d'inactivité. ÉTAPE 4 : Le temps écoulé depuis la dernière commande (406 jours) dépasse largement le cycle habituel calculé (~100 jours). En l'absence totale d'activité récente (0 commande sur les 3 derniers mois et sur l'année 2025), la probabilité d'une commande imminente sous 30 jours est jugée nulle.

</details>


<details>
<summary><strong>13. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel de ~28 jours observé lors des phases d'activité (août à septembre).
- **Saisonnalité**: weak
- **Tendance**: Stable autour de 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande mensuel régulier (environ tous les 28-30 jours) lorsqu'il y a de l'activité. Bien qu'aucune commande n'ait été enregistrée sur les 3 derniers mois (gap d'un an dans les données fournies), l'historique de l'année précédente montre une commande systématique en début novembre (07/11/2023) et un rythme soutenu en fin d'année. En suivant le cycle de 28 jours observé lors de la dernière période active (août-septembre), une commande est théoriquement attendue fin octobre ou début novembre, soit dans la fenêtre des 30 jours. La quantité de 3 unités correspond à la médiane et au mode de l'historique.

</details>


<details>
<summary><strong>14. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Inexistant (pas d'historique de commande)
- **Saisonnalité**: none
- **Tendance**: Stable (nulle)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'absence totale de données historiques pour ce produit (aucune commande l'année précédente et aucune commande sur les 3 derniers mois) empêche l'établissement d'une demande de fond ou d'un cycle de réapprovisionnement. En l'absence de signal de consommation passé, l'application stricte des règles de prédiction conclut à une absence de commande prévisible dans les 30 prochains jours.

</details>


<details>
<summary><strong>15. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun historique de commande détecté
- **Saisonnalité**: none
- **Tendance**: Inactif (0 unité)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un historique totalement vide (aucune donnée N-1 ni de commandes sur les 3 derniers mois). ÉTAPE 1: Aucun outlier car aucune donnée. ÉTAPE 2: Impossible d'établir une saisonnalité spécifique au client. ÉTAPE 3: La tendance est à l'inactivité totale sur ce SKU. ÉTAPE 4: Conformément aux principes de la Supply Chain, sans signal de demande historique ou de cycle récurrent, il est impossible de prévoir une commande dans les 30 prochains jours. La recommandation est donc fixée à 0.

</details>




### 📊 Données d'Input LLM (15 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 2u
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 3u
- 2024-08-05 06:29:22: 3u
- 2024-06-24 06:37:56: 2u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 2u
- 2024-04-02 08:47:10: 3u
- 2024-02-29 08:57:59: 2u
- 2024-02-02 07:19:09: 1u
- 2024-01-09 12:58:28: 2u
- 2023-12-05 08:08:03: 1u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-02-02 07:19:09: 1u
- 2023-12-05 08:08:03: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:29:22: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 1u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-24 06:37:56: 1u
- 2024-04-02 08:47:10: 2u

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 2u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 3u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-02 08:47:10: 3u
- 2024-02-29 08:57:59: 3u
- 2024-01-09 12:58:28: 3u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-05-31 07:24:37: 2u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 1u
- 2023-12-05 08:08:03: 2u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-04-29 07:16:03: 1u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 1u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 1u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 1u
- 2024-04-02 08:47:10: 1u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 2u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-05-31 07:24:37: 1u
- 2024-02-02 07:19:09: 1u
- 2023-11-07 08:22:06: 1u

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:19:45: 1u
- 2024-05-31 07:24:37: 2u
- 2024-02-29 08:57:59: 1u
- 2023-11-07 08:22:06: 2u

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>13. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:29:12: 2u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 3u
- 2024-04-29 07:16:03: 2u
- 2024-04-02 08:47:10: 3u
- 2024-02-29 08:57:59: 4u
- 2024-01-09 12:58:28: 3u
- 2023-12-05 08:08:03: 3u
- 2023-11-07 08:22:06: 3u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (10)

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
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: 0.3u (14j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: -0.4u (-19j restants) → prédit 1u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Stock prédit: -0.5u (-9j restants) → prédit 2u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Stock prédit: -0.3u (-20j restants) → prédit 1u mais non commandé |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Stock prédit: -0.6u (-35j restants) → prédit 1u mais non commandé |


---

## False Negatives (13)

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
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | En rupture (-24j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [LV131] LV Tartinade Potiron 190g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -1.1u (-50j) mais client a commandé 1u |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | LLM avait prédit 0 (pas de besoin) avec stock: 0.0u (3j) mais client a commandé 1u |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | En rupture (-64j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.2u (-12j) mais client a commandé 1u |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.7u (-39j) mais client a commandé 1u |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.7u (-39j) mais client a commandé 1u |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.2u (-10j) mais client a commandé 1u |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T20:01:26.154Z*
