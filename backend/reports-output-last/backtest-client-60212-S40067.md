# Rapport Backtest - Client BIOK GASTUCHE

## Contexte

- **Client** : BIOK GASTUCHE (ID: 60212)
- **Commande réelle** : S40067
- **Date commande** : 2025-11-05 14:53:27
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 27
- **Tokens**: 38,975 input + 67,417 output = 106,392 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 32.3% | 31 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 48.8% | Score équilibré global |

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
| **MAE** | 0.30 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 20.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
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

## True Positives (10)

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
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun jour récurrent identifié. Commandes éparse sur mer., jeu., lun., mer., mer.
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1 unité avec un pic isolé à 2
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le mardi n'est pas un jour habituel mais l'intervalle de 13j depuis le 22/10 est dans la plage observée. La tendance récente est stable à 1u (3/3 dernères commandes).

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes espacées de **13 à 17 jours** (moyenne: 14 jours). Le **mercredi** apparaît 3 fois sur 5 (jour le plus fréquent).
- **Saisonnalité**: none
- **Tendance**: Stabilisation autour de 2-3 unités depuis septembre. Pas de tendance de croissance/déclin claire.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Jour hors cycle (mardi), cycle bi-mensuel détecté, quantités stables à 2-3u, médiane privilégiée pour minimiser MAPE

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Tous les 10-21 jours, pas de cycle hebdomadaire strict avec une tendance vers 20-21 jours récemment
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Pour minimiser le MAPE avec des données limitées (5 points), je privilégie la tendance récente stable.** Le volume de 3u est le pattern dominant (4/5 commandes). Le 1u initial est un outlier de phase test. Comme le mardi est hors cycle, je prédit la quantité pour la prochaine commande probable (mercredi), qui sera de 3u. C'est la valeur la plus probable qui minimise l'erreur de prédiction.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes tous les 10.5 jours en moyenne (intervalles: 12j, 10j, 7j, 13j). Jours habituels: mercredi (2x), jeudi (2x), lundi (1x). Pas de cycle hebdomadaire strict.
- **Saisonnalité**: none
- **Tendance**: .
- **Outliers détectés**: -5e-324u

**🧠 Raisonnement LLM:**
ANALYSE RYTHMIQUE : Les 5 commandes montrent un intervalle moyen de 10,5 jours (12j/10j/7j/13j) sans jour fixe : mercredi (2x), jeudi (2x), lundi (1x). La date cible (mardi) est un jour ouvré mais hors des jours historiques → règle 'jour hors cycle' s'applique: prédire la quantité de la prochaine commande, jamais 0. FILTRAGE OUTLIERS : Série stable 2-4u, pas de valeurs aberrantes. La dernière commande de 4u (22 oct) dépasse légèrement la norme 2-3u mais reste dans une variation acceptable. SYNTHESE : Données très limitées (5 points). Pour minimiser MAPE, privilégier la valeur la plus probable: le mode est 3u (3 occurrences sur 5). La moyenne pondérée récente donne 3,3u mais en agro B2B les commandes sont entières. Le mercredi 5 nov (jour habituel suivant) attendrait 3u (histo mercredi: 3u et 4u, mais le jeudi stable à 3u est plus fiable). Décision: **3 unités** comme prédiction la plus robuste.

</details>


<details>
<summary><strong>5. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: none
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Outliers détectés**: -1u, 2u, 3u, -0.5u, -0.25u

**🧠 Raisonnement LLM:**
La prédiction de 1 unité est fondée sur la stabilité des 3 dernières commandes (22 sept, 2 oct, 22 oct) toutes à 1u, marquant un plateau après la décroissance depuis les outliers précédents (3u puis 2u). La date de prédiction (mardi) étant hors jour habituel, la règle des jours hors cycle s'applique: on anticipe la quantité de la prochaine commande (probablement mercredi suivant), qui sera de 1u selon la tendance récente stabilisée. Aucune donnée N-1 ne contredit cette tendance.

</details>


<details>
<summary><strong>6. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Episodic irregular with 13-43 day intervals
- **Saisonnalité**: none
- **Tendance**: stable at 1 unit
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
All 3 historical orders are exactly 1 unit with no variation. The ordering rhythm is irregular (13-43 day intervals) but quantity pattern is perfectly stable. 2025-11-04 is Tuesday - not a regular order day (typically Wednesday/Thursday). Per B2B rules, we predict the quantity for the next probable order (Wed/Thu following), which will be 1 unit based on unchanging historical behavior. No outliers or seasonal effects detected.

</details>


<details>
<summary><strong>7. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Le pattern historique montre deux phases distinctes : (1) Phase initiale de commandes tous les 21 jours le mercredi avec 2 unités (20/08, 10/09). (2) Phase récente de commandes hebdomadaires le jeudi avec 1 unité (02/10, 09/10).
- **Saisonnalité**: none
- **Tendance**: Baisse de la quantité moyenne (de 2u à 1u) et augmentation de la fréquence (de 21j à 7j).
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
1) RYTHMIQUE : Historique récent montre 2 commandes consécutives de 1 unité le jeudi (02/10 et 09/10), intervalle de 7 jours, rompant clairement avec l'ancien cycle 3-semaines/2 unités du mercredi. 2) OUTLIERS : Aucun outlier détecté. Le changement de pattern est une rupture de tendance validée par deux points récents cohérents. 3) JOUR DE PRÉDICTION : Le mardi 04/11 est hors cycle (ni mercredi ni jeudi). Les règles spéciales interdisent 0. La prochaine commande probable est le jeudi 06/11. 4) SYNTHESE AVEC DONNÉES LIMITÉES : Comme indiqué dans les guidelines, avec peu de données (4 points) mais un pattern récent stable sur 2 points, on privilégie la dernière valeur cohérente (1 unité) sur la moyenne historique qui inclurait une valeur obsolète (2 unités). 5) PRÉCISION B2B : En agroalimentaire B2B, une telle evolution vers des commandes plus fréquentes et plus petites est cohérente avec une optimisation de stock. La dernière valeur connue (1u) est la plus probable pour la prochaine commande.

</details>


<details>
<summary><strong>8. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes pour déterminer une fréquence stable. Une seule commande observée le 2025-09-10 (mercredi) sur 3 mois, suggérant un cycle potentiellement mensuel ou une commande test.
- **Saisonnalité**: none
- **Tendance**: flat
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Seule commande historique de 1 unité sur 3 mois. Comportement typique d'un produit en phase de test ou de lancement B2B. En l'absence de pattern et d'outliers, la quantité la plus probable pour la prochaine commande (quelle que soit le jour exact) est alignée sur la seule référence disponible. Règle anti-zéro appliquée pour jour hors cycle potentiel.

</details>


<details>
<summary><strong>9. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: NON_DETERMINE
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec une seule commande de 1unité sur 3 mois, il est impossible d'établir un cycle hebdomadaire ou mensuel. La consigne 'Ne pas mettre 0 pour un jour hors cycle' s'applique même sans pattern établi, donc nous devons prédire la quantité de la prochaine commande probable. La valeur observée (1u) est typique d'un test produit B2B. Sans signe d'accélération ou d'abandon confirmé, la prédiction la plus précise est la répétition de cette commande test.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-22 13:43:10: 1u
- 2025-10-09 06:38:48: 1u
- 2025-09-22 11:22:05: 1u
- 2025-08-27 07:04:23: 1u
- 2025-08-20 11:31:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-22 13:43:10: 3u
- 2025-10-09 06:38:48: 2u
- 2025-09-22 11:22:05: 2u
- 2025-09-10 13:32:58: 3u
- 2025-08-27 07:04:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-22 13:43:10: 3u
- 2025-10-02 06:22:23: 3u
- 2025-09-22 11:22:05: 3u
- 2025-09-10 13:32:58: 3u
- 2025-08-20 11:31:02: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-22 13:43:10: 4u
- 2025-10-09 06:38:48: 3u
- 2025-10-02 06:22:23: 3u
- 2025-09-22 11:22:05: 2u
- 2025-09-10 13:32:58: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-22 13:43:10: 1u
- 2025-10-02 06:22:23: 1u
- 2025-09-22 11:22:05: 1u
- 2025-09-10 13:32:58: 2u
- 2025-08-20 11:31:02: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-22 13:43:10: 1u
- 2025-10-09 06:38:48: 1u
- 2025-08-27 07:04:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:38:48: 1u
- 2025-10-02 06:22:23: 1u
- 2025-09-10 13:32:58: 2u
- 2025-08-20 11:31:02: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 13:32:58: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-27 07:04:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (21)

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
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 1.1u (15j restants) → prédit 2u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Stock prédit: 0.6u (18j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Stock prédit: 0.5u (10j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: 0.3u (11j restants) → prédit 1u mais non commandé |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Stock prédit: 0.3u (11j restants) → prédit 1u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: -1.6u (-11j restants) → prédit 2u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: -0.7u (-22j restants) → prédit 1u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: -0.9u (-32j restants) → prédit 1u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 0 | Stock prédit: -0.5u (-26j restants) → prédit 0u mais non commandé |
| [LEA06] LEAMO maté 330ml | 1 | Stock prédit: 0.2u (21j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 2 | Stock prédit: -0.2u (-6j restants) → prédit 2u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 8 | Stock prédit: -2.4u (-77j restants) → prédit 8u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 8 | Stock prédit: -1.6u (-68j restants) → prédit 8u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T08:11:25.993Z*
