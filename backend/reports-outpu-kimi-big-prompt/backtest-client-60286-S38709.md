# Rapport Backtest - Client DEPOT VRAC ATH

## Contexte

- **Client** : DEPOT VRAC ATH (ID: 60286)
- **Commande réelle** : S38709
- **Date commande** : 2025-08-26 07:26:18
- **Date cutoff système** : 2025-08-26 00:00:00
- **Jours d'avance** : 0j


### 🤖 Usage LLM

- **Appels**: 55
- **Tokens**: 79,780 input + 170,751 output = 250,531 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 48.4% | 62 produits prédits, 30 corrects |
| **Rappel** | 100.0% | 30 produits réels, 30 détectés |
| **F1-Score** | 65.2% | Score équilibré global |

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
| **MAE** | 0.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 8.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 8.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 26 | Égalité parfaite |
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

## True Positives (30)

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
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 8 | 2.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 6 | 8 | 2.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 6 | 6 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (29 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Wednesday-dominant with monthly cadence (~28 days) and minor Monday occurrences
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -6u, -1u

**🧠 Raisonnement LLM:**
1) ANALYSE RYTHMIQUE: Le mercredi est le jour habituel principal (3/5 commandes), avec un intervalle mensuel de 28j entre juillet et août. Le mardi 26/08 est hors cycle. 2) OUTLIERS: La commande de 1u du 09/07 est un outlier isolé; les 4 autres commandes sont stables à 2u. 3) STRATÉGIE JOUR HORS CYCLE: Comme le mardi n'est pas un jour de commande habituel, je dois prédire la quantité de la PROCHAINE commande probable (mercredi 27/08) et NON pas 0. 4) SYNTHÈSE: La valeur la plus fréquente et récente est 2u (4/5 commandes). La prochaine commande le mercredi suivra très probablement cette norme établie.

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sur lundi ou mercredi (2 lundi, 2 mercredi). Intervalles irréguliers (7j, 12j, 37j) sans cycle hebdomadaire strict. Pattern suggère plutôt un besoin régulier avec flexibilité sur le jour.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le mardi 26 août est hors cycle (seul lundi/mercredi historiques). La prochaine commande probable est le mercredi 27 août. Les 3 dernières commandes montrent 2u comme valeur dominante (11/06:2u, 23/06:2u, 06/08:2u). Le 30/06 (1u) est un outlier isolé non répété. Avec données très limitées, la stratégie MAPE-optimal est la valeur la plus fréquente et récente : 2 unités.

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières avec tendance à début de semaine (lundi/mercredi) et intervalle moyen ~18 jours. Pas de saisonnalité N-1 exploitable
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande principalement lundi ou mercredi en quantité stable de 2u (4/5 dernières commandes). Le mardi 26 août est hors jour habituel, mais les règles B2B interdisent la prédiction 0 pour un jour hors cycle. La quantité la plus probable est celle de la prochaine commande, qui sera très probablement de 2u, que cette commande arrive le mercredi 27 août, le lundi 1er septembre, ou exceptionnellement le mardi 26 août. Le pic de 37 jours sans commande est un creux d'activité, pas un indicateur de changement de quantité, car la reprise a été à 2u. L'outlier 1u du 26 mai est trop ancien et isolé pour influencer la prédiction.

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sans intervalle fixe identifié
- **Saisonnalité**: none
- **Tendance**: stable around 2 units
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
The client does not order on Tuesdays. Based on the order history, the next probable order day would be Wednesday 27/08. The most recent order (06/08) was 2 units, and 4 out of 5 historical orders are for 2 units, indicating this is the stable baseline. The 1-unit order on 09/07 is an isolated outlier and should be ignored. Therefore, the next order will most likely be 2 units.

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire majoritaire avec commandes récurrentes le mercredi
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Analyse rythmique: Les commandes sont concentrées le mercredi (3/5) et parfois le lundi (2/5). L'intervalle moyen est de 14 jours, mais les 3 commandes mercredi suivent un pattern hebdomadaire (intervalles de 28 jours entre juillet et août, multiple de 7). La date de prédiction (mardi) est hors cycle - aucune commande historique un mardi.

Analyse des volumes: 4 des 5 commandes sont à 2u, 1 commande à 1u (outlier probable le 30/06). Le volume est extrêmement stable autour de 2u. La dernière commande était de 2u.

Règle hors cycle: Comme le mardi n'est pas un jour habituel, je dois prédire la quantité de la PROCHAINE commande (probablement le mercredi 27/08) et non mettre 0. Le pattern hebdomadaire mercredi est le plus probable.

Décision: Le volume stable et récent pointe vers 2u comme valeur la plus probable pour la prochaine commande, quelle que soit la date exacte (mercredi 27/08 ou décalage ultérieur).

</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irregular (Lundi & Mercredi observed, no clear weekly cycle)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
Le client commande irrégulièrement sur lundi et mercredi, jamais le mardi. La date de prédiction (26/08, mardi) est donc hors-cycle. La dernière commande sur un jour habituel était le mercredi 06/08 avec 2u. Cette valeur de 2u représente 75% des commandes historiques (3/4) et constitue le niveau dominant. La commande de 1u du 30/06 apparaît comme un ajustement ponctuel isolé entre des commandes à 2u. Aucune donnée N-1 n'est disponible. En appliquant la règle spécifique aux jours hors-cycle, on prédit la quantité de la prochaine commande probable (mercredi 27/08) plutôt que 0. La valeur la plus probable est la dernière valeur cohérente avec la tendance dominante : **2u**.

</details>


<details>
<summary><strong>7. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières (intervalles: 7-37 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Données très limitées mais stables. 4 commandes sur 5 à 2u (dernière le 2025-08-06). Le mardi est hors cycle (habitude lundi/mercredi), donc je prédit la quantité de la prochaine commande probab: 2u en suivant le pattern dominant. L'unique commande à 1u est considérée comme outlier ponctuel à pondérer quasi nullement.

</details>


<details>
<summary><strong>8. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun cycle hebdomadaire strict identifié. Intervalles irréguliers (12j, 16j, 28j) suggèrent un rythme approximativement mensuel (~28j) sans jour fixe, mais avec une préférence mercredi (3/4 des commandes).
- **Saisonnalité**: none
- **Tendance**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE : 4 commandes sur 3 mois, quantité IDENTIQUE de 2u à chaque fois. Jours observés : 3× mercredi, 1× lundi. Intervalles irréguliers (12, 16, 28j) sans pattern hebdomadaire, mais avec une tendance à l'allongement ~mensuel. Date cible (mardi) est hors cycle. FILTRAGE : Stabilité parfaite, aucun outlier - tous les points valent 2u. SYNTHÈSE : Bien que le jour soit hors cycle, la règle interdit le 0. La quantité est systématique et indépendante du jour. Les données récentes montrent une immuabilité totale : 2u quelle que soit la date ou l'intervalle. La prochaine commande (peu importe le jour) sera nécessairement 2u.

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuelle avec irrégularités
- **Saisonnalité**: none
- **Tendance**: Stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande principalement le mercredi (60% des cas) ou lundi (40%), jamais un mardi. Les 4 dernières commandes sont stables à 2u. Le cycle est irrégulier (intervalles de 7 à 28 jours) mais la valeur est constante. Comme le mardi 26/08 est hors cycle, la prédiction concerne la PROCHAINE commande, qui sera très probablement de 2u. La valeur isolée de 1u du 2025-06-18 est considérée comme outlier (commande exceptionnelle ou erreur).

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières sur lundi (1u) et mercredi (2u). Intervalles variables : 7j, 12j, 37j. Pas de pattern mensuel stable.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -1u

**🧠 Raisonnement LLM:**
Le mardi 2025-08-26 est hors cycle habituel (lundi/mercredi). La règle spécifique B2B interdit de prédire 0. La prochaine commande probable est le mercredi 2025-08-27, jour où le pattern montre systématiquement 2u (2 commandes sur 2 occurrences). La dernière commande du 2025-08-06 (mercredi) était de 2u, confirmant ce niveau. Les commandes de lundi sont à 1u mais représentent un volume inférieur. Pour minimiser le MAPE, on privilégie la valeur la plus récente et la plus fréquente pour le prochain jour de commande probable : 2u.

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mixte : commandes irrégulières avec préférence pour lundi/mercredi et intervalle moyen de 13-15 jours. Le dernier intervalle de 28 jours indique un cycle mensuel probable.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le mardi 2025-08-26 est un jour hors cycle (aucune commande historique un mardi). Le client commande principalement les lundis et mercredis avec des intervalles irréguliers (7-28 jours). Les quantités sont stables (1-2u) depuis 3 mois. La dernière commande (2025-08-06) était de 2u un mercredi. Pour un jour hors cycle, je dois prédire la quantité de la prochaine commande probable. Compte tenu que les 2 dernières commandes mercredi étaient de 2u et que cette valeur est la plus récente et la plus fréquente dans la période récente, la prochaine commande (probablement un mercredi) sera de 2u.

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes les lundis et mercredis (3 mercredi, 2 lundi), intervalles irréguliers (5j,7j,9j,28j) suggérant cycle mensuel avec variations
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -1u

**🧠 Raisonnement LLM:**
Aucune donnée N-1. Les 3 commandes les plus récentes (30/06,09/07,06/08) sont stables à 2u. Le 1u du 18/06 est isolé entre des valeurs de 2u, donc outlier probable. Le mardi est hors du cycle habituel (lundi/mercredi). D'après les règles spéciales jour hors cycle, on prédit la quantité de la **prochaine commande probable**, pas 0. La prochaine commande aura lieu un mercredi ou lundi suivant, avec 2u comme valeur la plus probable (3/3 dernières commandes stables). Le long intervalle 28j (09/07-06/08) suggère une fréquence mensuelle irrégulière, mais la quantité reste stable à 2u.

</details>


<details>
<summary><strong>13. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: mensuelle_28j
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Analyse rythmique : Intervalles constants de 28 jours entre le 2025-06-11, 2025-07-09 et 2025-08-06 (tous les mercredis), révélant un cycle mensuel régulier. La date de prédiction (2025-08-26) est un mardi, donc hors du jour habituel de commande. Filtrage outliers : Aucun outlier détecté, les 3 commandes sont identiques à 2u. Synthèse : Le pattern est stable et fiable malgré le faible nombre de points. Comme la prédiction est hors cycle, j'applique la règle B2B : prédire la quantité de la PROCHAINE commande probable (mercredi suivant) et non 0. La quantité la plus probable reste 2u, cohérente avec la tendance actuelle et l'absence de variation.

</details>


<details>
<summary><strong>14. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: mensuelle_irreguliere
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande exclusivement le mercredi à intervalles mensuels irréguliers (21-28 jours) avec une quantité ultra-stable de 1 unité. La date de prédiction étant un mardi (hors cycle), selon la règle spéciale on ne prédit pas 0 mais la quantité de la PROCHAINE commande probable (mercredi suivant). Quel que soit l'intervalle exact (21 ou 28 jours), la quantité est systématiquement 1u. Aucune donnée N-1 ou saisonnalité ne viennent modifier ce pattern.

</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucune fréquence fixe identifiée. Les intervalles 16j/12j/44j indiquent un cycle irrégulier, typique d'un approvisionnement B2B réactif aux stocks. Pas de saisonnalité exploitable (absence de données N-1).
- **Saisonnalité**: none
- **Tendance**: volatility
- **Outliers détectés**: -1u, -1u, 0u, -1u

**🧠 Raisonnement LLM:**
Jour de prédiction hors cycle (mardi → pas de commande historique). Pas de pattern 7j ou 30j. Intervalles irréguliers (12-44j) suggèrent un approvisionnement réactif. Pic de 10u isolé entre des valeurs stables 4-6u → outlier probable (événement exceptionnel). Dernière valeur 6u représente le retour au niveau normal. Stratégie: pour données limitées sans cycle stable, privilégier la dernière valeur stable comme proxy de la prochaine commande lundi/mercredi suivant. MAPE minimal avec 6u vs risque d'erreur +66% si 10u sélectionné.

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: 2u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bi-mensuel irrégulier sans jour unique. Alternance probable LUNDI/MERCREDI avec intervalles variables. Mardi est systématiquement absent.
- **Saisonnalité**: none
- **Tendance**: stabilisation haussière après correction d'outlier
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
1) **JOUR HORS CYCLE** : Mardi absent de l'historique, donc prédiction pour la PROCHAINE commande (mercredi 27 août ou lundi 1er sept). 2) **OUTLIER DETECTÉ** : 10u du 2025-06-11 est isolé entre 2u et 4u → événement exceptionnel (promo/erreur) à exclure. 3) **TENDANCE POST-OUTLIER** : Après correction, les volumes sont stables [2u→4u→6u], montrant une lente progression sur 3 mois. 4) **DERNIÈRE VALEUR PONDERÉE** : 6u (dernière commande mercredi 06/08) est le meilleur proxy du niveau actuel, confirmé par médiane 5u et moyenne récente 4-6u. 5) **MINIMISATION MAPE** : Privilégier précision sur prudence → pas de gonflement. 6u est le volume le plus probable pour la prochaine commande mercredi (jour principal), tout en restant cohérent si le prochain cycle tombe lundi.

</details>


<details>
<summary><strong>17. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: irrégulier
- **Saisonnalité**: none
- **Tendance**: stable to slight increase
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Jour de prédiction (mardi) hors cycle habituel (lundi/mercredi). Dernière valeur stable cohérente avec progression douce 2→4→6. Outlier 10u exclu.

</details>


<details>
<summary><strong>18. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: aucun
- **Saisonnalité**: none
- **Tendance**: upward
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1. **ANALYSE RYTHMIQUE** : Les 2 commandes historiques sont le 2025-06-11 (mer.) et 2025-07-09 (mer.) avec intervalle 28 jours, indiquant un cycle mensuel régulier le mercredi. La date de prédiction 2025-08-26 est un **mardi**, donc hors cycle habituel.

2. **APPLICATION RÈGLE JOUR HORS CYCLE** : Conformément aux guidelines, je ne prédits PAS 0. Je dois prédire la quantité de la **prochaine commande probable**, qui sera le mercredi suivant (2025-08-27).

3. **ANALYSE QUANTITÉS** : Progression 1u → 2u. Avec seulement 2 points, privilégie la dernière valeur cohérente avec la tendance immédiate. L'augmentation est récente mais le volume reste très faible.

4. **SYNTHÈSE** : Le client commande ~1 fois par mois, le mercredi. Sur le mardi 26/08, aucune commande n'est attendue. La prochaine commande (mercredi 27/08) suivra la tendance récente à 2 unités.

</details>


<details>
<summary><strong>19. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intermittent (LUN/MER)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: 5 commandes éparses sur 2,5 mois (intervalles 7-16j), sans pattern hebdomadaire strict. Jours observés: lundi (2×) et mercredi (3×). Mardi 26/08 est hors cycle habituel. FILTRAGE OUTLIERS: Aucun outlier détecté - toutes les quantités sont de 1u (stabilité maximale). SYNTHÈSE: Données limitées mais extrêmement stables. Aucune donnée N-1 disponible. Conformément aux règles pour jour hors cycle, je ne prédits pas 0 mais la quantité de la prochaine commande probable. La tendance actuelle est une commande unique de 1u à chaque occurrence. La probabilité d'une commande de 1u est de 100% (5/5).

</details>


<details>
<summary><strong>20. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non régulier (intervalles variables 7-16 jours, pas de cycle fixe)
- **Saisonnalité**: none
- **Tendance**: decline
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande uniquement en semaine (lundi/mercredi) par intervalles irréguliers (7-16j). Aucune commande un mardi. Le délai de 48j depuis la dernière commande (vs max 16j) est un signal d'arrêt potentiel, mais sans confirmation officielle, je respecte la règle interdisant 0 pour jour hors cycle. La quantité historique est constamment 1u. Si une commande survient malgré la rupture de cycle, elle sera de 1u.

</details>


<details>
<summary><strong>21. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: . . . . . . . . .
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande irrégulièrement les lundis ou mercredis (intervalle 7-16 jours) avec une quantité systématique de 1u. La date de prédiction est un mardi (hors cycle), donc selon les règles, je dois prédire la quantité de la PROCHAINE commande probable (mercredi 27 août) et non 0. La stabilité parfaite des données récentes (5x 1u) indique une probabilité extrême que la prochaine commande soit aussi de 1u.

</details>


<details>
<summary><strong>22. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 6u vs Médiane: 6u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: low)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Unidentified (single data point)
- **Saisonnalité**: none
- **Tendance**: stable (insufficient data)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Data shows ONE single order: 6 units on Wednesday 2025-07-09. No N-1 seasonality reference. 48-day interval until prediction date suggests monthly/quarterly cycle or data gaps. **Critical rule application**: Cannot predict 0 for a B2B product even if day seems unusual. In agroalimentaire B2B, clients have recurring needs with stable quantities when they do order. With no evidence of trend change or outlier behavior, the most probable next order quantity replicates the last known order. **Strategy**: Replicate last value (6u) as baseline for next occurrence.

</details>


<details>
<summary><strong>23. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: cycle_irregular_3_weeks
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Données extrêmement limitées (3 points) mais cohérentes : chaque commande = 1u. Cycle moyen de 22 jours, mais dernière commande date de 48 jours (décalage majeur). Sans preuve d'arrêt, la règle des jours hors cycle impose de prédire la prochaine commande potentielle plutôt que 0. Le volume unitaire stable reste le seul pattern fiable malgré le délai inhabituel.

</details>


<details>
<summary><strong>24. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: monthly_episodic
- **Saisonnalité**: none
- **Tendance**: flat
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Pattern épisodique stable (3 commandes = 1u). Jour habituel : mercredi. Mardi = hors cycle → appliquer règle spéciale : prédire quantité prochaine commande, pas 0.

</details>


<details>
<summary><strong>25. [RIT09] RITCHIE Cola - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle épars d'environ 22 jours (21-23j) sans jour fixe mais avec une préférence marquée pour le mercredi (2/3 des commandes récentes). Le lundi apparaît une fois.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Les seules données disponibles montrent une commande unique de 1 unité tous les 21-23 jours, sans évolution. Le pattern de commande est trop mince pour détecter une saisonnalité ou une tendance. La date de prédiction étant un mardi (hors cycle habituel qui semble être le mercredi), la règle spéciale s'applique : prédire la quantité de la prochaine commande, jamais 0. La dernière commande du 2025-07-09 était de 1u. Aucun élément ne suggère une augmentation ou diminution. En agro B2B, minimiser le MAPE impose de privilégier la valeur historique stable plutôt qu'une hypothétique augmentation non justifiée.

</details>


<details>
<summary><strong>26. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: irrégulier (lundi, mercredi)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE DU RYTHME: Intervalles irréguliers entre les 3 commandes (16j puis 19j) sans pattern hebdomadaire stable. Les jours de commande sont lundi (2x) et mercredi (1x), écartant tout cycle 7j ou 14j. Le mardi 26/08 est hors cycle.

OUTLIER: La commande de 2u du 11/06 est un pic ×2 mais cohérent avec une variation B2B marginale; pondération faible confirmée.

DECISION CRITIQUE: 57 jours depuis la dernière commande (vs max 19j historique) suggère fortement un arrêt du produit. Cependant, les guidelines spécifient que 0 est interdit pour 'jour hors cycle' sauf si arrêt confirmé. Avec seulement 3 points de données, l'incertitude est élevée. La valeur 1u (mode et dernière commande) minimise le MAPE dans les deux scénarios : si arrêt (erreur de 1), si commande réelle (probabilité plus forte d'être 1u que 2u).

</details>


<details>
<summary><strong>27. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: 7-day weekly cycle on Mondays
- **Saisonnalité**: none
- **Tendance**: breakdown - no orders for 57 days
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le pattern hebdomadaire lundi est clair (2 commandes de 1u à 7 jours d'intervalle). Cependant, la dernière commande date du 30 juin, soit 57 jours avant la date de prédiction (26 août). Cette période représente 8 cycles hebdomadaires manqués. En agroalimentaire B2B, une absence de commande de plus de 8 semaines sur un produit alimentaire régulier constitue une rupture majeure et suggère fortement que le client a arrêté ce produit. La date de prédiction étant un mardi (hors cycle) renforce cette conclusion : aucune commande n'est attendue car le produit n'est plus actif. La règle 'ne pas mettre 0 pour un jour hors cycle' ne s'applique pas ici car c'est l'arrêt du produit qui justifie le 0, pas le jour de la semaine.

</details>


<details>
<summary><strong>28. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes épisodiques sans jour fixe
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE: L'historique montre 3 commandes sur 12 jours (18/06, 23/06, 30/06) avec intervalles irréguliers (5j puis 7j). Les jours observés sont mercredi et lundi, mais le mardi 26/08 est hors cycle. Cependant, la règle B2B stricte interdit de prédire 0 pour un jour hors cycle. Il faut prédire la quantité de la prochaine commande probable. Les commandes sont sporadiques mais systématiquement de 1u, suggérant un réapprovisionnement unitaire à la demande. FILTRAGE OUTLIERS: Aucun outlier détecté (toutes les valeurs = 1u). Volume extrêmement bas et stable. SYNTHESE: Malgré un pattern non hebdomadaire strict, la constance à 1u est le seul signal fiable. La dernière commande (30/06) était un lundi, donc le mardi 26/08 est hors cycle mais proche temporellement. Comportement B2B agro: les clients commandent en semaine quand besoin. La probabilité que toute future commande soit de 1u est de 100% sur l'échantillon. Le jour exact importe peu car la quantité est déterminée par le besoin ponctuel, pas par le calendrier. Conclusion: La prochaine commande, quelle que soit son jour, sera très probablement de 1u.

</details>


<details>
<summary><strong>29. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 10u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 7u (233.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun cycle stable identifié (2 commandes sur 2 jours différents, intervalle 12 jours). Pas de jour habituel établi.
- **Saisonnalité**: none
- **Tendance**: Forte baisse (-60%) puis silence prolongé
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
[ANALYSE RYTHMIQUE] Données critiques : 2 commandes sur 2 jours (mer. 11/06: 10u, lun. 23/06: 4u), intervalle 12j. Aucun cycle hebdomadaire stable. Aucune donnée N-1. Le silence de 64 jours depuis le 23 juin est l'indicateur le plus puissant. En agroalimentaire B2B, un tel gap (>60j) signifie quasi-systématiquement que le client a arrêté le produit ou passe à une rotation <1/an. La baisse 10→4u est le pattern classique d'un test produit suivi d'un abandon progressif. [TRAITEMENT OUTLIERS] La valeur 10u est considérée comme non-répétitive (commande test). La valeur 4u est plus représentative du régime final. [JOUR HORS CYCLE] Sans cycle établi, la règle 'pas de 0' s'applique mais la probabilité de commande est <5%. La prochaine commande, si elle survient, sera un reliquat exceptionnel. [DÉCISION MAPE] Pour minimiser l'erreur absolue dans un scénario d'arrêt probable : si réalité=0, MAPE=100% quel que soit le chiffre; si réalité=2-3u (reliquat), MAPE sera 33-50% avec 3u vs 100% avec 4u; si réalité≥4u (retour inattendu), MAPE sera <25% avec 3u. La fourchette 2-3u a 60% de probabilité vs 40% pour ≥4u. 3u est le compromis optimal réduisant le MAPE attendu de 15% vs 4u. [CONCLUSION] La prédiction de 3u vise la précision maximale dans un contexte de déclin avéré et d'incertitude extrême, tout en respectant la règle de ne jamais forcer 0 par défaut.

</details>




### 📊 Données d'Input LLM (29 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [LV133] LV Tartinade Ananas Coco 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 2u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-30 12:27:19: 2u
- 2025-06-23 10:56:35: 2u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>13. [LV137] LV Tartinade Lentilles Curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 2u
- 2025-07-09 11:07:27: 2u
- 2025-06-11 13:30:57: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 1u
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u
- 2025-05-26 13:01:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>16. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u
- 2025-05-26 13:01:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>17. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-06 12:17:47: 6u
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u
- 2025-05-26 13:01:58: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>18. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 2u
- 2025-06-11 13:30:57: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>19. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u
- 2025-06-11 13:30:57: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>20. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u
- 2025-06-11 13:30:57: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>21. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-30 12:27:19: 1u
- 2025-06-18 07:07:27: 1u
- 2025-06-11 13:30:57: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>22. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 6u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 6u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>23. [RIT08] RITCHIE Citron - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>24. [RIT10] RITCHIE Cola ZERO - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>25. [RIT09] RITCHIE Cola - canette 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-09 11:07:27: 1u
- 2025-06-18 07:07:27: 1u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>26. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-11 13:30:57: 2u
- 2025-05-26 13:01:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>27. [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>28. [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 12:27:19: 1u
- 2025-06-23 10:56:35: 1u
- 2025-06-18 07:07:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>29. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-23 10:56:35: 4u
- 2025-06-11 13:30:57: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>




---

## False Positives (32)

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
| [LV131] LV Tartinade Potiron 190g | 2 | Stock prédit: 1.0u (20j restants) → prédit 2u mais non commandé |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 3 | Stock prédit: 1.4u (16j restants) → prédit 3u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 3 | Stock prédit: 1.6u (20j restants) → prédit 3u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | Stock prédit: 0.6u (7j restants) → prédit 2u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 2 | Stock prédit: 0.4u (4j restants) → prédit 2u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Stock prédit: -0.9u (-22j restants) → prédit 1u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Stock prédit: -0.9u (-22j restants) → prédit 1u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Stock prédit: -0.6u (-17j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 0 | Stock prédit: -0.9u (-22j restants) → prédit 0u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: -0.4u (-13j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 0 | Stock prédit: 0.2u (11j restants) → prédit 0u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 0 | Stock prédit: 0.2u (11j restants) → prédit 0u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.4u (-13j restants) → prédit 1u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 4 | Stock prédit: -2.1u (-19j restants) → prédit 4u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 4 | Stock prédit: -0.7u (-8j restants) → prédit 4u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.9u (-26j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.9u (-26j restants) → prédit 1u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 0 | Stock prédit: -1.8u (-35j restants) → prédit 0u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 3 | Stock prédit: -3.3u (-39j restants) → prédit 3u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 3 | Stock prédit: -3.3u (-39j restants) → prédit 3u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 0 | Stock prédit: -3.3u (-39j restants) → prédit 0u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 3 | Stock prédit: -3.3u (-39j restants) → prédit 3u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 3 | Stock prédit: -3.3u (-39j restants) → prédit 3u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 0 | Stock prédit: -3.3u (-39j restants) → prédit 0u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 3 | Stock prédit: -3.3u (-39j restants) → prédit 3u mais non commandé |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 4 | Stock prédit: -2.4u (-39j restants) → prédit 4u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 5 | Stock prédit: -4.1u (-80j restants) → prédit 5u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T08:51:56.887Z*
