# Rapport Backtest - Client Epicerie Uhoda Kennedy

## Contexte

- **Client** : Epicerie Uhoda Kennedy (ID: 23342)
- **Commande réelle** : S39989
- **Date commande** : 2025-10-29 11:28:56
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 18,059 input + 5,883 output = 23,942 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 18.4% | 38 produits prédits, 7 corrects |
| **Rappel** | 100.0% | 7 produits réels, 7 détectés |
| **F1-Score** | 31.1% | Score équilibré global |

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
| **MAE** | 0.57 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 28.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -36.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (une seule commande enregistrée le mer. 08/10/2025)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule occurrence enregistrée le 8 octobre pour 1 unité. En l'absence de données de saisonnalité (N-1) ou de répétition structurelle, la probabilité la plus forte reste le maintien de la quantité unitaire. La demande intervient 20 jours après la précédente, suggérant un besoin ponctuel ou un cycle long. Sans preuve de croissance ou de groupage de commande, la prédiction est fixée à 1 unité.

</details>


<details>
<summary><strong>2. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle long (environ 30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité à une seule donnée récente le vendredi 26 septembre. En l'absence de saisonnalité N-1 et de volume important, nous observons un cycle de réapprovisionnement mensuel. La commande du 28 octobre (mardi) s'inscrit dans cette logique de cycle de 30 jours malgré le décalage de jour de semaine, suggérant un besoin de renouvellement de stock fond de rayon identique au volume précédent.

</details>


<details>
<summary><strong>3. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Donnée insuffisante (Une seule commande détectée le 26/09)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec un historique limité à un seul point de données (26 septembre, 1 unité) et aucune donnée saisonnière N-1, la prédiction repose sur la continuité directe de la dernière observation. En l'absence de signaux de croissance ou de cycles identifiés, l'hypothèse la plus probable pour minimiser l'erreur (MAPE) est le maintien du volume unitaire (1u) malgré le changement de jour de commande (vendredi vers mardi).

</details>


<details>
<summary><strong>4. [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé - Première commande enregistrée
- **Saisonnalité**: none
- **Tendance**: Inconnue (lancement de produit ou nouveau client)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale de données historiques (N-1) et de données récentes (3 derniers mois), il est impossible d'établir une baseline statistique ou une tendance. Le produit étant une infusion biologique de 33cl (réseau agroalimentaire B2B), la quantité recommandée de 1 unité est une valeur par défaut symbolisant l'absence de prédictibilité. Dans un contexte réel, une étude de marché ou un plan de lancement commercial serait nécessaire pour affiner ce chiffre.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:16:30: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 06:18:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 06:18:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (31)

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
| [LB003] LB Festive (4,5%) 33CL | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Stock prédit: 0.6u (7j restants) → prédit 2u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Stock prédit: 0.5u (6j restants) → prédit 2u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | Stock prédit: 0.3u (6j restants) → prédit 1u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 2 | Stock prédit: 0.4u (4j restants) → prédit 2u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 2 | Stock prédit: -0.3u (-8j restants) → prédit 2u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Stock prédit: 0.3u (3j restants) → prédit 2u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Stock prédit: -0.8u (-13j restants) → prédit 2u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Stock prédit: 0.8u (21j restants) → prédit 2u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | Stock prédit: -0.1u (-1j restants) → prédit 3u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Stock prédit: -0.8u (-14j restants) → prédit 2u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: 0.4u (21j restants) → prédit 1u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: 0.4u (21j restants) → prédit 1u mais non commandé |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 1 | Stock prédit: -0.2u (-4j restants) → prédit 1u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 2 | Stock prédit: 0.2u (3j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: -0.3u (-17j restants) → prédit 1u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | Stock prédit: -2.5u (-74j restants) → prédit 1u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -2.2u (-54j restants) → prédit 1u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 2 | Stock prédit: -1.7u (-65j restants) → prédit 2u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 6 | Stock prédit: -3.3u (-65j restants) → prédit 6u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 5 | Stock prédit: -3.1u (-63j restants) → prédit 5u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 3 | Stock prédit: -2.0u (-52j restants) → prédit 3u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | Stock prédit: 0.2u (28j restants) → prédit 1u mais non commandé |
| [CB010] CB Jus de Pomme cubis 3l | 0 | Stock prédit: -0.2u (-5j restants) → prédit 0u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 3 | Stock prédit: -1.6u (-41j restants) → prédit 3u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Stock prédit: -1.1u (-63j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: -2.9u (-88j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -2.9u (-88j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:35:55.632Z*
