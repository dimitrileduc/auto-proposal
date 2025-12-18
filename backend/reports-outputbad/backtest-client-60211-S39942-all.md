# Rapport Backtest - Client BIOK CORBAIS

## Contexte

- **Client** : BIOK CORBAIS (ID: 60211)
- **Commande réelle** : S39942
- **Date commande** : 2025-10-29 13:44:03
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 37,603 input + 72,264 output = 109,867 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 35.5% | 31 produits prédits, 11 corrects |
| **Rappel** | 100.0% | 11 produits réels, 11 détectés |
| **F1-Score** | 52.4% | Score équilibré global |

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
| **MAE** | 0.45 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 29.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 15.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -29.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 4 | 3.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JOY05] Organic Cherry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire irrégulier avec intervalles mixtes: 7j (octobre) puis ~30-35j (août-septembre). Pattern récent stabilisé sur jeudi.
- **Saisonnalité**: none
- **Tendance**: RUPTURE NETTE À LA BAISSE: passage de 2u (août-septembre) à 1u (octobre) sur les 2 dernières commandes consécutives.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le mardi 28 octobre est hors cycle (mercredi/jeudi habituels). Je prédit donc la quantité pour la PROCHAINE commande (mercredi/jeudi suivant). Les 2 dernières commandes consécutives du 9 et 16 octobre montrent une rupture nette à 1u, confirmant une nouvelle tendance stable. Les anciennes valeurs de 2u (août/sept) sont désormais obsolètes. En B2B agro, la précision prime: la valeur la plus probable est 1u, pas une moyenne gonflée. 3 scénarios possibles: 1u (forte probabilité 70%), 2u (retour à l'ancienne cadence 20%), 0u (arrêt produit improbable 10%).

</details>


<details>
<summary><strong>2. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulère avec une préférence pour le mercredi (2/3 des commandes). Intervalles variables : 14 jours entre les deux premières commandes (mercredi à mercredi), puis 36 jours jusqu'à la dernière commande (décalé sur un jeudi).
- **Saisonnalité**: none
- **Tendance**: Stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Analyse rythmique : Avec 3 points de données sur 3 mois, la quantité est systématiquement de 1 unité sans variation. Les commandes surviennent de manière épisodique, principalement les mercredis (2 sur 3) avec un intervalle irrégulier. La date de prédiction (mardi) est hors cycle habituel. Selon les règles spéciales, je ne dois pas prédire 0 mais la quantité de la prochaine commande probable. La prochaine commande sera vraisemblablement le mercredi 29 octobre (jour habituel). La constante parfaite de 1 unité sur toutes les commandes récentes, combinée à l'absence de saisonnalité ou de tendance de volume, indique que la prochaine commande sera très probablement de 1 unité. Aucun outlier à filtrer car toutes les valeurs sont identiques.

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: eparse_no_fixed_day
- **Saisonnalité**: none
- **Tendance**: stable_low
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Le rythme de commande est éparse (intervalles de 14-36 jours) sans jour fixe clair, bien que le mercredi soit légèrement plus fréquent. La valeur 6u du 10 sept. est un outlier isolé (3× supérieur aux autres commandes). Les 3 autres commandes sont stables à 1-2u, avec la plus récente à 1u. Comme le mardi n'est pas un jour exclusif mais que le pattern est irrégulier, je prends la modalité et la dernière valeur observée, excluant l'outlier. Les données N-1 manquent.

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: irrégulière
- **Saisonnalité**: none
- **Tendance**: stable_fluctuating
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Données extrêmement limitées (5 commandes sur 3 mois) avec rythme et quantités irrégulières. La valeur de 6u est clairement un outlier ponctuel à exclure. Le mode (1u) représente 60% des commandes et correspond à la médiane. La dernière commande de 2u n'indique pas une tendance suffisamment établie pour l'emporter sur la valeur typique. Le produit montre un profil 'low runner' avec demande sporadique et très bas volume.

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucune fréquence détectée
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande irrégulièrement avec des intervalles de 14 à 36 jours, sans pattern hebdomadaire stable. La valeur 6u du 2025-09-10 est un outlier clair (événement exceptionnel). Les commandes stables sont de 1-2 unités. La date 2025-10-28 (mardi) n’est pas le jour préféré (mercredi), donc la prédiction se fait pour la prochaine commande probable. La quantité la plus fréquente et récente stable est 1 unité.

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern journalier fixe détecté. Les commandes surviennent sur différents jours (mercredi, lundi, jeudi) avec des intervalles irréguliers (7, 12, 14, 17 jours). Aucune donnée N-1 disponible. Le mardi est hors cycle historique.
- **Saisonnalité**: none
- **Tendance**: Stable avec alternance 1-2 unités. Pic isolé de 6u le 10/09 (outlier probable). Dernière commande : 2u le 16/10.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une alternance stable entre 1 et 2 unités, avec un pic isolé de 6u (10/09) qui apparaît comme un outlier événementiel non répété. Aucune commande n'a jamais eu lieu un mardi. Les intervalles sont irréguliers (7-17 jours) sans pattern mensuel clair. Le client semble commander sur des jours ouvrés variables selon ses besoins de stock. Le 6u étant un événement exceptionnel (probablement promotion/test), la tendance récente stable à 1-2u domine. La dernière commande était 2u le 16/10, avec une accélération de la cadence (intervalle de 7j). En B2B agroalimentaire, une fois le volume légèrement augmenté, il se stabilise généralement. Prédire 2u cible le niveau actuel stable tout en évitant l'erreur massive que serait la prédiction de 6u.

</details>


<details>
<summary><strong>7. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: INTERVALLES: 58 jours (12/08→09/10) puis 7 jours (09/10→16/10). Les 2 dernières commandes suggèrent un cycle HEBDOMADAIRE le JEUDI
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Les 2 dernières commandes montrent un cycle hebdomadaire le JEUDI (09/10 et 16/10). La date demandée (28/10) un MARDI est hors cycle. Règle spéciale appliquée: on ne prédit pas 0 mais la quantité de la prochaine commande probable (JEUDI 30/10). Historique ultra-stable à 1 unité. Aucun outlier. Aucune donnée N-1 pour saisonnalité.

</details>


<details>
<summary><strong>8. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalles irréguliers mais mensuels: 21j (6→27 août), 14j (27 août→10 sept), 29j (10 sept→9 oct). Pattern non hebdomadaire strict, plutôt une commande mensuelle avec variation de ±1 semaine. Dernière commande le 9 oct (jeu) rompt le mercredi mais confirme la fréquence ~mensuelle.
- **Saisonnalité**: none
- **Tendance**: constant
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client commande en moyenne une fois par mois (intervalles 14-29j) avec préférence mercredi (3/4). Toutes les commandes sont de 1u sans exception. Comme le 28 oct est un mardi (hors cycle), la règle métier interdit la prédiction 0. La prochaine commande attendue dans les 7-10 jours sera nécessairement de 1u. La quantité est tellement stable (écart-type=0) que même avec peu de données, le risque d'erreur est nul. MAPE minimal atteint en prédisant la valeur historique constante pour la prochaine livraison.

</details>


<details>
<summary><strong>9. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: sporadic_cycle_21_43_days
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
The customer orders sporadically every 21 to 43 days (not a strict weekly pattern). All historical orders are 1u. The target date (mardi) is off the typical days (mercredi, jeudi). According to guidelines, when predicting for an off-cycle day, we predict the quantity of the next probable order rather than zero. The next probable order quantity based on stable historical data is 1u. The last order was on 2025-10-09, so the next is not yet due, but if an order were placed, it would likely be 1u.

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irregular non-weekly cycles (15 days, 26 days)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Three sporadic orders of exactly 1 unit each (Aug 12 Tue, Aug 27 Wed, Sep 22 Mon) show no fixed weekly rhythm but perfect quantity stability. The 15-26 day irregular intervals suggest ad-hoc reordering when stock depletes. For the target Tuesday 2025-10-28, despite 36 days since last order, historical pattern strongly indicates the next order—whenever it occurs—will be 1 unit. No outlier or promotional distortion is present.

</details>


<details>
<summary><strong>11. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucune fréquence régulière détectée (intervalle de 47 jours entre les 2 commandes, jours différents)
- **Saisonnalité**: none
- **Tendance**: décroissante (2u → 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit montre une activité très éparsée avec seulement 2 commandes en 3 mois (2u le 6 août, 1u le 22 sept). L'intervalle de 47 jours irrégulier et les jours variables (mercredi→lundi) ne permettent pas d'établir un cycle fiable. Sans données N-1, aucun effet saisonnier ne peut être intégré. La tendance décroissante (2→1) et le principe de précision B2B imposent de privilégier la dernière valeur réelle plutôt qu'une moyenne qui lisserait une évolution probable. Le mardi 28 octobre est hors jour habituel mais ouvré, donc la prochaine commande potentielle (à venir lundi ou mercredi suivant) sera probablement au niveau de la dernière commande. Prédire 1u minimise le MAPE dans ce contexte de très basse volumétrie.

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 06:40:28: 1u
- 2025-10-09 06:22:48: 1u
- 2025-09-10 13:37:05: 2u
- 2025-08-06 06:21:49: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 06:40:28: 1u
- 2025-09-10 13:37:05: 1u
- 2025-08-27 06:19:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 06:40:28: 1u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 2u
- 2025-08-12 10:39:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 06:40:28: 2u
- 2025-10-09 06:22:48: 1u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 06:40:28: 2u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 06:40:28: 2u
- 2025-10-09 06:22:48: 1u
- 2025-09-22 11:23:24: 2u
- 2025-09-10 13:37:05: 6u
- 2025-08-27 06:19:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 06:40:28: 1u
- 2025-10-09 06:22:48: 1u
- 2025-08-12 10:39:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-09-10 13:37:05: 1u
- 2025-08-27 06:19:48: 1u
- 2025-08-06 06:21:49: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:22:48: 1u
- 2025-08-27 06:19:48: 1u
- 2025-08-06 06:21:49: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:23:24: 1u
- 2025-08-27 06:19:48: 1u
- 2025-08-12 10:39:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [JOY05] Organic Cherry Jam 370g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 11:23:24: 1u
- 2025-08-06 06:21:49: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (20)

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
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.6u (17j restants) → prédit 1u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock prédit: 0.6u (14j restants) → prédit 1u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock prédit: 0.6u (17j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 2 | Stock prédit: 0.5u (16j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: -1.4u (-10j restants) → prédit 2u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | Stock prédit: -0.3u (-3j restants) → prédit 2u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: 0.4u (10j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 2 | Stock prédit: -0.0u (0j restants) → prédit 2u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Stock prédit: -0.6u (-8j restants) → prédit 2u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock prédit: -0.7u (-20j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: -0.2u (-8j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Stock prédit: -1.9u (-30j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: -0.5u (-19j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.2u (-10j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 12 | Stock prédit: 0.3u (16j restants) → prédit 12u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 0 | Stock prédit: -1.5u (-28j restants) → prédit 0u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 10 | Stock prédit: -0.4u (-9j restants) → prédit 10u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 2 | Stock prédit: -0.7u (-26j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-17T16:29:42.290Z*
