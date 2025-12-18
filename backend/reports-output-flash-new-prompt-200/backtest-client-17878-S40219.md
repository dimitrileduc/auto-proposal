# Rapport Backtest - Client Epicerie Flocon d'Avoine

## Contexte

- **Client** : Epicerie Flocon d'Avoine (ID: 17878)
- **Commande réelle** : S40219
- **Date commande** : 2025-11-14 12:44:14
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 22
- **Tokens**: 21,469 input + 7,149 output = 28,618 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.3% | 26 produits prédits, 11 corrects |
| **Rappel** | 91.7% | 12 produits réels, 11 détectés |
| **F1-Score** | 57.9% | Score équilibré global |

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
| **MAE** | 0.73 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 57.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 63.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 42.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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

## True Positives (11)

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
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV131] LV Tartinade Potiron 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 6 | 1 | 5.0 | 500.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV345] LV Spread KIDS 200ml Organic | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques tous les 45-60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): La commande de 3u en sept-2024 est un outlier probable (stockage initial ou promo); la moyenne réelle est de 1u. ÉTAPE 2 (Saisonnalité): Impact faible; le produit (Tartinade Potiron) pourrait avoir un intérêt accru en automne, mais les données 2024 (1u en nov) et 2025 (1u en oct) confirment une demande très limitée. ÉTAPE 3 (Tendance): Volume stable mais fréquence en ralentissement (seulement 2 commandes en 3 mois). ÉTAPE 4 (Recommandation): La demande de fond est strictement de 1u par commande. Étant donné la faible rotation et la gestion conservatrice en B2B pour éviter les pertes sur des produits transformés, 1 unité suffit pour couvrir le besoin immédiat sans risque de sur-stockage.

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique tous les 1.5 à 2 mois environ
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): La commande de 3u en sept 2024 est un outlier par rapport à la demande constante de 1u observée sur toutes les autres dates. La demande de fond est de 1u. ÉTAPE 2 (SAISONNALITÉ): Aucune saisonnalité marquée n'est visible; le produit est une tartinade carotte-gingembre avec des ventes stables mais à faible rotation sur l'année. ÉTAPE 3 (TENDANCE): La tendance est parfaitement stable à 1 unité par commande. La fréquence s'est légèrement ralentie en 2025 (tous les 45-60 jours). ÉTAPE 4 (RECOMMANDATION): Malgré le délai depuis la dernière commande (octobre), le volume par commande ne justifie pas un stock supérieur à l'unité de base de 1u pour éviter le sur-stockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>3. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalles de 40 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (2u -> 1u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ÉTAPE 1: La commande de 4u en juin 2024 est un outlier (2x la moyenne), la demande de fond se situe autour de 1.5u. ÉTAPE 2: Faible impact saisonnier, bien qu'une légère hausse de volume soit notée en fin d'année (nov/déc). ÉTAPE 3: La tendance récente montre un ralentissement avec des commandes de seulement 1u en septembre et octobre 2025. ÉTAPE 4: La date actuelle (mi-novembre) correspond historiquement à un besoin de 2u ou 3u (novembre 2023). Malgré la tendance basse récente, le stock de fin d'année justifie une légère hausse. On recommande 2u pour couvrir la fin d'année sans risque de sur-stockage massif face au ralentissement observé.

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une moyenne de 30-45 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 2-3 unités par commande
- **Outliers détectés**: 17u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): La commande de 17u en septembre 2025 est un outlier évident (promotion ou restockage massif) et a été écartée. La demande de fond se situe entre 2 et 4u. Étape 2 (Saisonnalité): En novembre N-1, une commande de 3u a été passée; il n'y a pas de pic saisonnier majeur identifié pour ce produit spécifique en fin d'année. Étape 3 (Tendance): La dernière commande d'octobre était de 2u, montrant une consommation stable. Le jour de commande (jeudi) correspond à l'historique de l'année précédente. Étape 4 (Recommandation): Sur la base d'une moyenne épurée et de la saisonnalité N-1 de novembre (3u), une commande de 3u est recommandée pour couvrir le besoin sans risque de sur-stockage.

</details>


<details>
<summary><strong>5. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cyclique irrégulier (tous les 45 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les commandes oscillent de manière cohérente entre 1 et 2 unités. Étape 2: Aucune saisonnalité marquée n'apparaît entre 2024 et 2025; le produit est un basique d'épicerie fine stable. Étape 3: La tendance récente montre une légère baisse du volume (1u en octobre) mais la fréquence reste lente (environ 1 commande tous les 2 mois). Étape 4: La date actuelle (novembre) correspond à une période où une commande de 1u fut passée l'an dernier. Cependant, pour maintenir un stock de sécurité minimal sur un produit à faible rotation mais régulier, une commande de 2 unités est préconisée pour couvrir les besoins jusqu'à fin décembre/janvier.

</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel et irrégulier, intervalle de 2 à 3 mois
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond très faible et sporadique (1 unité par commande en moyenne). ÉTAPE 1: Aucune quantité aberrante identifiée, le volume est constant à 1u. ÉTAPE 2: Une légère saisonnalité semble apparaître en novembre (2u en 2023), suggérant un besoin pour les fêtes de fin d'année. ÉTAPE 3: La tendance reste stable mais la fréquence est très faible (dernière commande en septembre). ÉTAPE 4: Étant donné le faible historique et le caractère périssable/spécifique (Tartinade Bio), une recommandation conservatrice de 1 unité est préconisée pour couvrir la période sans risque de surstockage, tout en respectant la date demandée qui correspond historiquement à un cycle d'approvisionnement.

</details>


<details>
<summary><strong>7. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 6u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 5u (500.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifiable (produit sans historique)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (absence de données historiques)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Impossible d'identifier des outliers par manque de données. ÉTAPE 2 (Saisonnalité) : Bien que les tartinades de légumes puissent avoir un pic festif ou printanier, l'absence de données N-1 empêche toute confirmation. ÉTAPE 3 (Tendance) : Aucune commande récente permettant de calculer une pente. ÉTAPE 4 (Recommandation) : En l'absence de base de données, j'applique une stratégie conservatrice de 'Stock Minimum de Sécurité' (MOQ par défaut pour ce type de produit B2B, estimé à un carton de 6 unités). La confiance est faible car la prédiction repose sur une estimation prudente de lancement/réapprovisionnement minimal et non sur une interpolation statistique.

</details>


<details>
<summary><strong>8. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern identifiable (produit sans historique)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (Lancement ou nouveau référencement)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Absence totale de données historiques (N-1 et période récente), impossible d'identifier des outliers ou une demande de fond. Étape 2: Saisonnalité non évaluable par manque de points de comparaison. Étape 3: Tendance indéterminable, suggérant un nouveau produit ou une première commande de test. Étape 4: En l'absence de données et suivant le principe de prudence (conservateur), je recommande une quantité minimale d'unité logistique (1) pour initialiser le stock sans risque de démarque ou de sur-stockage massif sur une référence potentiellement lente.

</details>


<details>
<summary><strong>9. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les deux mois
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement stable mais de faible intensité (1 unité par commande). Le nettoyage des données (ÉTAPE 1) n'identifie aucun outlier. La saisonnalité (ÉTAPE 2) indique une commande passée précisément à la même période l'année dernière (23 nov 2023), suggérant un besoin cyclique pour la fin d'année. La tendance (ÉTAPE 3) est stable bien qu'il n'y ait pas eu de commandes sur les 90 derniers jours. Étant donné la faible fréquence et le volume constant de 1 unité, la recommandation finale (ÉTAPE 4) est maintenue à 1 pour éviter tout sur-stockage sur un produit à rotation lente, tout en couvrant le besoin saisonnier probable identifié en N-1 à cette date précise (novembre). La confiance est qualifiée de 'low' en raison de l'absence de données récentes au cours des 3 derniers mois (Période Récente). Ils n'achètent jamais plus d'une unité à la fois sur cet historique, donc commander 1 est le choix le plus sûr et logique au vu des données fournies (stratégie conservatrice). 2025-11-13 est un jeudi, ce qui correspond au jour de commande le plus fréquent historiquement (3/6 commandes). La période actuelle (novembre) correspond au cycle de réapprovisionnement déjà observé en N-1 (nov-2023). Le produit est classé en rotation très lente, justifiant une quantité minimale de réapprovisionnement égale à l'unité de base observée jusqu'à présent (1u). Pas de croissance détectée, mais un respect du cycle de 12 mois pour cette période de l'année. La quantité est donc fixée strictement à 1 pour répondre à la demande de fond tout en sécurisant la rotation du stock bio Parmesan 100g. Dans un contexte B2B agroalimentaire, sur-stocker un produit déjà lent représente un risque financier inutile pour le distributeur ou le point de vente.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [LV131] LV Tartinade Potiron 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-15 05:02:02: 1u
- 2025-09-03 06:41:22: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:43:55: 3u
- 2024-05-16 12:15:00: 1u
- 2024-04-22 10:02:31: 1u
- 2024-03-05 10:49:15: 1u
- 2023-12-12 13:33:41: 2u
- 2023-11-23 08:04:40: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-15 05:02:02: 1u
- 2025-09-03 06:41:22: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:43:55: 3u
- 2024-06-17 06:02:18: 1u
- 2024-05-16 12:15:00: 1u
- 2024-04-22 10:02:31: 1u
- 2024-03-05 10:49:15: 1u
- 2023-12-12 13:33:41: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-15 05:02:02: 1u
- 2025-09-03 06:41:22: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:43:55: 2u
- 2024-07-29 06:27:47: 2u
- 2024-06-17 06:02:18: 4u
- 2024-05-16 12:15:00: 1u
- 2024-04-22 10:02:31: 1u
- 2024-03-05 10:49:15: 2u
- 2023-12-12 13:33:41: 2u
- 2023-11-23 08:04:40: 3u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-15 05:02:02: 2u
- 2025-09-17 06:40:39: 17u
- 2025-09-03 06:41:22: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:43:55: 4u
- 2024-09-26 06:43:55: 2u
- 2024-07-29 06:27:47: 3u
- 2024-06-17 06:02:18: 2u
- 2024-05-16 12:15:00: 4u
- 2024-04-22 10:02:31: 3u
- 2024-03-05 10:49:15: 2u
- 2023-12-12 13:33:41: 3u
- 2023-11-23 08:04:40: 3u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-15 05:02:02: 1u
- 2025-09-03 06:41:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:43:55: 2u
- 2024-06-17 06:02:18: 2u
- 2024-04-22 10:02:31: 2u
- 2024-03-05 10:49:15: 2u
- 2023-12-12 13:33:41: 2u
- 2023-11-23 08:04:40: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:41:22: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-29 06:27:47: 1u
- 2024-06-17 06:02:18: 1u
- 2024-05-16 12:15:00: 1u
- 2023-11-23 08:04:40: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV357] LV Tartinade BIO Asperge 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV345] LV Spread KIDS 200ml Organic</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:43:55: 1u
- 2024-06-17 06:02:18: 1u
- 2024-05-16 12:15:00: 1u
- 2024-04-22 10:02:31: 1u
- 2024-03-05 10:49:15: 1u
- 2023-11-23 08:04:40: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (15)

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
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 2 | Stock prédit: 0.2u (4j restants) → prédit 2u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Stock prédit: 0.4u (21j restants) → prédit 1u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | Stock prédit: 0.4u (21j restants) → prédit 1u mais non commandé |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 1 | Stock prédit: -0.4u (-20j restants) → prédit 1u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Stock prédit: -0.1u (-8j restants) → prédit 1u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: -0.4u (-20j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: -0.4u (-20j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: 0.1u (11j restants) → prédit 1u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: -0.1u (-9j restants) → prédit 1u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock prédit: -0.8u (-43j restants) → prédit 1u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 10 | Stock prédit: -0.4u (-29j restants) → prédit 10u mais non commandé |


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
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Stock suffisant: 0.5u (32j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:12:44.956Z*
