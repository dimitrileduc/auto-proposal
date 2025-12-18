# Rapport Backtest - Client DELITRAITEUR

## Contexte

- **Client** : DELITRAITEUR (ID: 60283)
- **Commande réelle** : S39542
- **Date commande** : 2025-10-03 13:14:16
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 6,496 input + 12,587 output = 19,083 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 70.0% | 10 produits prédits, 7 corrects |
| **Rappel** | 77.8% | 9 produits réels, 7 détectés |
| **F1-Score** | 73.7% | Score équilibré global |

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
| **MAE** | 26.71 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 73.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 79.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -51.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 18 | 60 | 42.0 | 70.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 15 | 25 | 10.0 | 40.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV162] LV Tartinade Tomato Basilico 190g | 15 | 7 | 8.0 | 114.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 10 | 40 | 30.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 10 | 60 | 50.0 | 83.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 18 | 45 | 27.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 38 | 18 | 20.0 | 111.1% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 18u vs Médiane: 19u (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 18u (confidence: medium)
- 📊 **Baseline N-1**: 19u
- 📊 **Médiane**: 19u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 42u (70.0%)
- 📉 **Erreur Médiane**: 41u (68.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel de 28 jours (constaté le 04/08, 01/09, 29/09)
- **Saisonnalité**: weak
- **Tendance**: Stable avec un volume de croisière entre 17u et 20u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier identifié, la commande de 10u en juillet correspond probablement à un lancement de produit. Étape 2 : Pas d'historique N-1, mais le secteur suggère une consommation de thé glacé plus forte en été. Nous entrons en octobre, une légère baisse est anticipée. Étape 3 : La tendance de fond sur les mois complets est de 19 unités. Le client a passé commande de 17u le lundi 29/09, ce qui couvre déjà le cycle d'octobre. Étape 4 : La quantité recommandée de 18u représente le besoin théorique pour un cycle complet de 4 semaines, ajusté par un coefficient conservateur (-5%) dû à la sortie de la période estivale. Note importante : une commande ayant été effectuée il y a 3 jours, un nouveau réapprovisionnement immédiat de 18u créerait un sur-stock, mais c'est le volume optimal pour maintenir le cycle habituel.

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 15u vs Médiane: 25u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 15u (confidence: low)
- 📊 **Baseline N-1**: 15u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 8u (114.3%)
- 📉 **Erreur Médiane**: 18u (257.1%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (cycle de 15 à 45 jours)
- **Saisonnalité**: strong
- **Tendance**: Baisse progressive (25u en été vs 10u en septembre)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier identifié malgré la faible quantité de septembre qui semble traduire une réalité de marché. Étape 2 : Produit typé estival (Tomate/Basilic). Le volume de 25u en juillet/août a chuté à 10u en septembre, confirmant une fin de saisonnalité haute. Étape 3 : Tendance baissière constatée. L'historique montre une commande environ tous les 30 jours, la dernière ayant eu lieu il y a exactement un mois (01/09). Étape 4 : Recommandation de 15u. Ce volume permet de couvrir le mois d'octobre en anticipant une demande stabilisée mais inférieure au pic d'été, tout en restant prudent par rapport au dernier réapprovisionnement de 10u qui était peut-être un ajustement de fin de saison.

</details>


<details>
<summary><strong>3. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 15u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 30u (75.0%)
- 📉 **Erreur Médiane**: 30u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle principalement mensuel avec un pic de fréquence bimensuel en août
- **Saisonnalité**: strong
- **Tendance**: Baisse de volume de 20u à 10u corrélée à la fin de saison estivale
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1. DE-EVENTING: Aucune quantité n'a été identifiée comme aberrante ; les variations entre 10 et 20 unités sont cohérentes pour du B2B de boissons. 2. SAISONNALITÉ: Impact fort identifié. Les commandes de 20u ont eu lieu en juillet et début août (pleine saison). La baisse à 10u fin août/septembre marque l'entrée en période creuse pour les boissons rafraîchissantes. 3. TENDANCE: Les deux dernières commandes se sont stabilisées à 10 unités. Le rythme semble redevenir mensuel après une accélération en août. 4. RECOMMANDATION: Avec l'entrée en octobre (automne), la demande de fond est estimée à 10 unités. On privilégie la prudence pour éviter un surstockage d'un produit saisonnier en fin de cycle.

</details>


<details>
<summary><strong>4. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 50u (83.3%)
- 📉 **Erreur Médiane**: 50u (83.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours), généralement en début de mois
- **Saisonnalité**: weak
- **Tendance**: Stable à 10u après pic estival
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
L'historique montre une stabilisation de la demande à 10 unités sur les deux derniers mois (août et septembre) après un pic à 20 unités en juillet, probablement lié à une demande estivale accrue. N'ayant pas de données N-1 pour confirmer une reprise en automne pour ce type de boisson, nous restons conservateurs en suivant la tendance récente de 10u. Le cycle de commande de 4 semaines est respecté.

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 18u vs Médiane: 18u (Réel: 45u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 18u (confidence: low)
- 📊 **Baseline N-1**: 18u
- 📊 **Médiane**: 18u
- ✅ **Réel commandé**: 45u
- 📉 **Erreur LLM**: 27u (60.0%)
- 📉 **Erreur Médiane**: 27u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intermittent, environ tous les 60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 18u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur deux points de données identiques (18 unités), ce qui suggère fortement un achat par carton complet ou lot logistique fixe. Bien que l'intervalle entre les commandes précédentes soit de deux mois et que seulement un mois se soit écoulé depuis la dernière (01/09), la commande est déclenchée ce jour. En l'absence de données N-1 et face à une stabilité parfaite du volume sur les deux occurrences, je recommande de maintenir la quantité de 18 unités. Une légère prudence est de mise car nous entrons en octobre (basse saison pour les limonades), mais le respect du colisage probable prime sur l'ajustement saisonnier ici.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 09:22:29: 17u
- 2025-09-01 06:22:40: 20u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 18u (confidence: medium)
**📊 Quantité Réelle**: 60u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 25u
- 2025-07-04 11:09:53: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 15u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>3. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 10u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: medium)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>4. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-04 09:36:12: 10u
- 2025-07-04 11:09:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: medium)
**📊 Quantité Réelle**: 60u

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 18u
- 2025-07-04 11:09:53: 18u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 18u (confidence: low)
**📊 Quantité Réelle**: 45u

</details>




---

## False Positives (3)

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
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 126 | Stock prédit: -38.2u (-13j restants) → prédit 126u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 21 | Stock prédit: -18.3u (-27j restants) → prédit 21u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 53 | Stock prédit: -5.4u (-4j restants) → prédit 53u mais non commandé |


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
| [LV160] LV Tartinade Aubergine 190g | 50 | Stock suffisant: 32.9u (36j restants > seuil 30j) |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 40 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:24:31.930Z*
