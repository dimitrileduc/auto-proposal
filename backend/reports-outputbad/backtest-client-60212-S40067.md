# Rapport Backtest - Client BIOK GASTUCHE

## Contexte

- **Client** : BIOK GASTUCHE (ID: 60212)
- **Commande réelle** : S40067
- **Date commande** : 2025-11-05 14:53:27
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 27
- **Tokens**: 38,975 input + 80,265 output = 119,240 total


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
| **MAE** | 0.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 45.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: cycle_mixed
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un cycle de commande IRRÉGULIER (~16 jours en moyenne) avec une préférence pour le mercredi (3/5 commandes), mais aussi des commandes lundi et jeudi. La date de prédiction est un mardi (jour hors cycle principal). La commande de 2u du 2025-08-20 est un outlier isolé et ancien, exclue du calcul. Les 3 dernières commandes sont stables à 1u. Selon les règles spécifiques pour jours hors cycle, on ne prédit pas 0 mais la quantité de la prochaine commande probable (mercredi 2025-11-05). La tendance récente est très stable à 1u. Absence de données N-1 pour confirmer saisonnalité.

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier avec intervalles de 12 à 17 jours (moyenne 14j). Pas de jour fixe identifié : mercredi (3×), lundi (1×), jeudi (1×).
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
🔍 **ANALYSE RYTHMIQUE** : Intervalles irréguliers (12-17j) sans jour fixe. Le mercredi apparaît 3× sur 5 commandes, suggérant une préférence pour ce jour. La date de prédiction (mardi) est hors cycle → prédire la quantité de la PROCHAINE commande (probablement mercredi 05/11).

⚠️ **OUTLIERS** : La commande de 1u le 27/08 est isolée (-50% vs valeur stable). Elle est considérée comme événement exceptionnel (stock tampon/test) et exclue du calcul principal.

📊 **TENDANCE** : Hors outlier, les volumes sont stables [2u-3u] avec une légère progression vers 3u (2u,2u,3u récemment). Moyenne pertinente = 2.5u, médiane = 2.5u.

🎯 **DÉCISION** : Pour la prochaine commande mercredi (jour le plus probable), l'historique montre 3u en dernier et 3u précédemment. La valeur 3u est la plus récente, stable, et correspond au jour de commande le plus fréquent.

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucune
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE** :
- Pas de pattern hebdomadaire ou mensuel clair identifié
- Les jours de commande varient : mercredi (3×), jeudi (1×), lundi (1×)
- Intervalles irréguliers entre 10 et 21 jours
- Le mardi 2025-11-04 ne correspond pas à un jour habituel (absent de l'historique)

**OUTLIERS** :
- 2025-08-20 : 1u (outlier, valeur isolée parmi des commandes stables)
- Ces 4 dernières commandes sont toutes de 3u (tendance stable)

**APPLICATION RÈGLE JOUR HORS CYCLE** :
- La date de prédiction est un mardi (jour ouvré mais non habituel)
- Pas de pattern de commande mardi identifié
- **Néanmoins, la règle interdit formellement de prédire 0**
- On prédit donc la quantité de la prochaine commande probable selon la tendance actuelle

**SYNTHÈSE & DÉCISION** :
- Malgré l'absence de commande mardi dans l'historique, la tendance est clairement stable à 3u
- Le outlier de 1u est ancien et isolé
- Les données récentes (4 commandes consécutives) sont 100% homogènes à 3u
- En agroalimentaire B2B, une stabilité de commande à 3u sur 2+ mois indique une consommation régulière
- La prédiction MAPE-minimaliste privilégie la réalité récente sur l'historique absent

**Conclusion logique : 3 unités** (dernière valeur = tendance = mode = médiane)

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes irrégulières en semaine (lun., mer., jeu.) avec intervalles variables (7-13 jours). Le dernier intervalle de 13 jours entre le 22/10 (mer.) et la date prédite 04/11 (mar.) crée un timing parfaitement cohérent, plaçant le mardi comme jour ouvré plausible pour la prochaine commande.
- **Saisonnalité**: none
- **Tendance**: Légère hausse progressive : stabilisation autour de 3u avec une évolution récente vers 4u (dernière commande).
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Intervalle de 13j cohérent + jour ouvré + tendance haussière récente validée

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
- **Pattern temporel**: Irregular: intervalles de 10-21 jours (moyenne ~16 jours). Pas de cycle hebdomadaire strict. Observance majoritaire du mercredi (60% des commandes).
- **Saisonnalité**: none
- **Tendance**: Déclin marqué: 3u→2u→1u→1u→1u. Stabilisation récente à 1u sur les 3 dernières commandes (50% du dataset).
- **Outliers détectés**: -2025u

**🧠 Raisonnement LLM:**
1) Hors cycle: la prédiction pour un mardi nécessite d'estimer la prochaine commande (mercredi probable). 2) L'outlier 3u du 2025-08-20 est isolé et ancien. 3) La tendance récente est claire: stabilisation à 1u sur 3 commandes consécutives. 4) Pattern mercredi dominant (3/5). La prochaine commande mercredi (2025-11-05) sera très probablement 1u. 5) Données limitées mais cohérentes.

</details>


<details>
<summary><strong>6. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun cycle identifié (intervalles irréguliers: 43j, 13j)
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Les 3 commandes historiques montrent un volume ultra-stable à 1u mais des intervals très irréguliers (43j puis 13j) sans cycle hebdomadaire ni mensuel clair. Le jour de prédiction (mardi) n'est jamais apparu comme jour de commande. Selon la règle des jours hors cycle, je ne peux pas prédire 0. Comme la tendance est stable et que toutes les valeurs sont identiques, la prochaine commande (quelle que soit sa date) aura très probablement le même volume que les précédentes.

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
- **Pattern temporel**: Irregular hybrid pattern: historical 21-22 day cycle (monthly) on Wednesdays shifting to recent 7-day cycle (weekly) on Thursdays. Clear transition visible in October 2025.
- **Saisonnalité**: none
- **Tendance**: decreasing
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Three key factors drive this prediction: 1) Clear behavioral shift from 21-day to 7-day ordering cycle in October, 2) Quantities stabilized at 1u in the last two orders (Oct 2 & 9), indicating new baseline after the pattern change, 3) Tuesday is off-cycle (regular day=Thursday), so per the special rule I must predict the next order's quantity (upcoming Thursday 2025-11-06) rather than assuming zero for the prediction date itself. The absence of N-1 data prevents seasonal adjustment, but the 1u level is strongly supported by recent consistency.

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
- **Pattern temporel**: UNKNOWN
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
The forecasting task is extremely challenging due to the severe lack of data. We have only one data point from 2025-09-10 (Wednesday) for 1 unit, approximately 55 days before the prediction date on 2025-11-04 (Tuesday). Without historical data from N-1 or additional recent points, we cannot detect any pattern, seasonality, or trend. The single unit order likely represents a trial purchase or a slow-moving specialty item (organic sparkling yerba mate). Given the minimal evidence, the most probable scenario is a repeat of similar low-volume purchasing behavior. The prediction follows the rule that a single unit order is most likely to result in a subsequent order of similar magnitude, especially after such a long interval, maintaining stable demand.

</details>


<details>
<summary><strong>9. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Aucun pattern stable détecté - donnée unique
- **Saisonnalité**: none
- **Tendance**: inconnu - pas de tendance établie avec une seule donnée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec une seule commande de 1u (typiquement un test produit) il y a 69 jours, et aucune donnée historique N-1 pour établir une saisonnalité ou un cycle régulier, le pattern le plus probable en agroalimentaire B2B est l'abandon après test non concluant. Le délai supérieur à 2 mois sans nouvelle commande sur un produit de niche (organique, 12g) indique une probabilité d'arrêt supérieure à 85%. Bien que la règle 'n'utilise jamais 0 pour un jour hors cycle' s'applique, c'est la situation 'produit arrêté' qui prévaut ici selon les critères autorisation explicite du guideline. Une commande de 1u étant le signe d'un test, et l'absence de répétition au-delà de la fenêtre d'évaluation classique (4-6 semaines), la quantité la plus probable pour la prochaine commande est 0 unités.

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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 3u (confidence: medium)
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

**✅ Quantité LLM**: 3u (confidence: medium)
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

**✅ Quantité LLM**: 4u (confidence: medium)
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

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 0u (confidence: low)
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
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: -0.5u (-26j restants) → prédit 1u mais non commandé |
| [LEA06] LEAMO maté 330ml | 1 | Stock prédit: 0.2u (21j restants) → prédit 1u mais non commandé |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 2 | Stock prédit: -0.2u (-6j restants) → prédit 2u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 0 | Stock prédit: -2.4u (-77j restants) → prédit 0u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 0 | Stock prédit: -1.6u (-68j restants) → prédit 0u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-17T16:28:10.720Z*
