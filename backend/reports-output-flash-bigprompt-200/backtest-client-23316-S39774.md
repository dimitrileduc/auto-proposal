# Rapport Backtest - Client Ferme de Warichet

## Contexte

- **Client** : Ferme de Warichet (ID: 23316)
- **Commande réelle** : S39774
- **Date commande** : 2025-10-21 07:45:53
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 6,143 input + 1,124 output = 7,267 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 76.5% | 34 produits prédits, 26 corrects |
| **Rappel** | 100.0% | 26 produits réels, 26 détectés |
| **F1-Score** | 86.7% | Score équilibré global |

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
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 24.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 26.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -1.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 15 | Égalité parfaite |
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

## True Positives (26)

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
| [RIT01] RITCHIE Orange - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV160] LV Tartinade Aubergine 190g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV131] LV Tartinade Potiron 190g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV135] LV Tartinade Basilico 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV136] LV Tartinade Betterave 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV345] LV Spread KIDS 200ml Organic | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 5 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [UPI08] Jus de pomme-citron bio d'UPIGNY 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT05] RITCHIE Cola - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle basse fréquence (~30-45 jours)
- **Saisonnalité**: weak
- **Tendance**: Légère baisse, stabilisation à 3u
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'historique montre une consommation régulière mais à faible rotation. En 2024 (N-1), les volumes étaient compris entre 3u et 5u (le pic de 6u en 2023 étant traité comme un outlier ou une fin de stock). Sur la période récente (août et septembre 2025), la demande s'est stabilisée strictement à 3u avec un intervalle d'environ 35-40 jours. Étant donné que la dernière commande date du 10 septembre, une commande le 20 octobre respecte parfaitement ce cycle de réapprovisionnement mensuel. La tendance actuelle prime sur les volumes légèrement plus élevés de l'an dernier.

</details>


<details>
<summary><strong>2. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (une seule donnée)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u (point de référence unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec un seul point de données datant de 40 jours (2 unités le mercredi 10 septembre). En l'absence d'un cycle hebdomadaire clair ou de données N-1 pour confirmer une saisonnalité, la règle de continuité de la demande de fond est appliquée. Le jour de prédiction (lundi) est traité comme le jour de reprise de commande le plus probable suite au cycle précédent. La quantité de 2 unités est retenue comme la valeur la plus cohérente avec l'unique observation récente.

</details>


<details>
<summary><strong>3. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalle de 30 à 60 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u en 2024 -> 2u fin 2025)
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
L'analyse montre une faible fréquence de commande (environ tous les deux mois). Le volume historique de référence (N-1) oscillait entre 3 et 5 unités (le pic de 8u en juin est traité comme un outlier saisonnier non reconduit). Sur la période récente, on observe une érosion du volume : la dernière commande de septembre était de 2 unités. Bien que la date de prédiction respecte un intervalle de 40 jours par rapport à la dernière commande, la tendance baissière et la faible rotation du produit orientent vers la quantité minimale observée récemment pour minimiser le MAPE.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:21:45: 3u
- 2025-08-04 12:33:57: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 06:19:32: 4u
- 2024-09-17 06:12:49: 3u
- 2024-07-29 06:03:35: 4u
- 2024-06-17 06:35:48: 4u
- 2024-04-18 13:10:52: 4u
- 2024-02-29 09:45:53: 5u
- 2023-11-09 11:04:30: 6u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [LV357] LV Tartinade BIO Asperge 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:21:45: 2u
- 2025-08-04 12:33:57: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 06:19:32: 3u
- 2024-09-17 06:12:49: 3u
- 2024-06-17 06:35:48: 8u
- 2024-04-18 13:10:52: 5u
- 2024-02-29 09:45:53: 4u
- 2023-11-09 11:04:30: 6u

**✅ Quantité LLM**: 2u (confidence: medium)
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
| [LV188] LV Tartinade Aubergine  380g | 2 | Stock prédit: 0.5u (12j restants) → prédit 2u mais non commandé |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 2 | Stock prédit: -0.2u (-7j restants) → prédit 2u mais non commandé |
| [UPI07] Jus de pomme-framboise bio d'UPIGNY 250ml | 2 | Stock prédit: -0.2u (-7j restants) → prédit 2u mais non commandé |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | Stock prédit: -0.3u (-24j restants) → prédit 1u mais non commandé |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 1 | Stock prédit: -0.3u (-24j restants) → prédit 1u mais non commandé |
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 1 | Stock prédit: -0.3u (-24j restants) → prédit 1u mais non commandé |
| [UPI05] Jus de pomme-gingembre bio d'UPIGNY 250ml | 1 | Stock prédit: -0.3u (-24j restants) → prédit 1u mais non commandé |
| [UPI06] Jus de pomme-rhubarbe bio d'UPIGNY 250ml | 1 | Stock prédit: -0.3u (-24j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:17:09.758Z*
