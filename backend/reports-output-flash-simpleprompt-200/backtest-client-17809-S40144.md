# Rapport Backtest - Client AU RAYON BIO

## Contexte

- **Client** : AU RAYON BIO (ID: 17809)
- **Commande réelle** : S40144
- **Date commande** : 2025-11-05 14:50:02
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 17
- **Tokens**: 16,707 input + 4,463 output = 21,170 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 52.6% | 19 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 69.0% | Score équilibré global |

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
| **wMAPE** | 13.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 18.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel environ tous les 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation très régulière de 2 unités par mois depuis 2024. Malgré une légère variation lors des deux dernières commandes (3u puis 1u), la moyenne glissante reste parfaitement stable à 2 unités. L'intervalle de ~26 jours depuis la commande du 09 octobre confirme l'échéance pour une nouvelle commande début novembre.

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel asynchrone (environ toutes les 3-4 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère érosion (moyenne 2u passée à 1.5u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique montre une demande de fond très stable de 2 unités par commande depuis 2024. Bien que la dernière commande d'octobre soit descendue à 1u, celle de septembre à 4u suggère une correction de stock plutôt qu'une baisse structurelle durable (moyenne sur 2 mois = 2.5u). En novembre 2024, le volume était de 2u. Le cycle d'environ 30 jours est respecté (dernière commande il y a 26 jours). En l'absence de saisonnalité marquée et face à une tendance stable sur le long terme, le retour à la constante historique de 2 unités est le scénario le plus probable.

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.6u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~26-31 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à légère baisse (2.5u vs 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une régularité remarquable avec un volume gravitant quasi systématiquement autour de 3 unités depuis 2024. Le cycle de commande est d'environ un mois (dernière commande le 09/10, nous sommes le 04/11, soit 26 jours d'intervalle). Bien que la toute dernière commande était de 2u, la moyenne historique et la stabilité du besoin B2B sur cette référence de tartinade suggèrent un retour à la normale de 3u pour couvrir le mois de novembre, conforme à la commande de novembre N-1 (3u).

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalles erratiques (30 à 45 jours) sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2u avec fluctuation récente
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation stable de 2 unités par commande en moyenne. Bien que la dernière commande d'octobre soit descendue à 1u après un pic à 3u en septembre (effet de compensation), la moyenne lissée sur le long terme et la période N-1 confirme un besoin récurrent de 2 unités pour couvrir le cycle de réapprovisionnement d'environ un mois. La date de prédiction (mardi) est cohérente avec les habitudes de commande passées.

</details>


<details>
<summary><strong>5. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2.5u
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande régulier d'environ un mois. La dernière commande date du 09/10 (il y a 26 jours), ce qui place le 04/11 dans la fenêtre de réapprovisionnement habituelle. Historiquement, le volume oscille entre 2 et 3 unités. Étant donné que la commande de septembre était exceptionnellement faible (1u) et que celle d'octobre était de 3u, on observe un maintien de la demande de fond. La moyenne pondérée et le mode historique de novembre N-1 (3u) justifient une recommandation de 3 unités pour éviter une rupture sur ce cycle mensuel.

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 28 à 32 jours sans jour de commande fixe
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (moyenne 1.6u en 2024 vs 2.0u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une fréquence de commande mensuelle (tous les ~30 jours). La dernière commande date du 09/10/2025 (il y a 26 jours), ce qui positionne la demande du 04/11/2025 parfaitement dans le cycle de réapprovisionnement habituel. Bien que la dernière commande ait atteint 3u, la moyenne glissante sur les 12 derniers mois se stabilise autour de 2u. La saisonnalité N-1 à la même période (fin octobre/début novembre) confirme un volume de 2u à 3u. On privilégie 2u pour éviter le surstockage sur un produit de type tartinade dont la rotation est régulière mais modérée.

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme mensuel glissant (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive de 2u à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité quasi parfaite sur un volume de 2 unités durant l'année 2024. Cependant, une rupture de tendance est observée depuis fin 2024/fin 2025 avec un passage systématique à 1 unité sur les trois dernières occurrences (Nov 2023, Sept 2025, Oct 2025). Le cycle de réapprovisionnement est d'environ 30 jours (dernières commandes le 10/09 et le 09/10). La commande du 04/11 respecte ce cycle de 25-30 jours. Aucune saisonnalité positive n'étant détectée pour ce produit spécifique en novembre l'an dernier (1u), la probabilité pour que la commande soit de 1 unité est maximale.

</details>


<details>
<summary><strong>8. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ toutes les 3 à 5 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec une résilience forte
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité quasi-parfaite de la demande à 2 unités par commande depuis janvier 2024 (11 occurrences sur 13). Le produit ne présente pas de saisonnalité marquée ni de tendance à la hausse ou à la baisse. La dernière commande datant du 9 octobre (soit il y a 26 jours), la commande du 4 novembre s'inscrit parfaitement dans le cycle de réapprovisionnement habituel du client pour cette référence. Bien que la commande de mai 2024 ait été de 1u, le mode statistique de 2u reste le prédicteur le plus fiable pour minimiser le MAPE.

</details>


<details>
<summary><strong>9. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel erratique (30 à 45 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1.5u/commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande extrêmement stable et de faible volume (1 à 2 unités par commande). L'analyse de l'historique montre un cycle de réapprovisionnement d'environ un mois. La dernière commande date du 9 octobre 2025 (26 jours d'écart avec la date de prédiction), ce qui correspond à la phase de réapprovisionnement habituelle du client pour ce SKU. La moyenne pondérée sur les 12 derniers mois est de 1,6 unité. Étant donné que le client commande soit 1 soit 2 unités et que la tendance récente (octobre) est de 2 unités, la quantité la plus probable pour maintenir le stock sans sur-stockage est de 2 unités.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 1u
- 2025-09-10 13:23:04: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 09:41:18: 2u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 1u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 1u
- 2025-09-10 13:23:04: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:57:37: 2u
- 2024-10-08 09:41:18: 3u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 3u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 2u
- 2025-09-10 13:23:04: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:57:37: 3u
- 2024-10-08 09:41:18: 3u
- 2024-09-09 13:39:44: 4u
- 2024-08-02 06:18:07: 3u
- 2024-07-15 06:44:53: 3u
- 2024-06-21 06:37:19: 3u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 3u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 3u
- 2024-02-20 11:03:42: 3u
- 2024-02-02 09:19:36: 3u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 1u
- 2025-09-10 13:23:04: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:57:37: 1u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 1u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-11-28 08:55:15: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 3u
- 2025-09-10 13:23:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:57:37: 3u
- 2024-10-08 09:41:18: 3u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 3u
- 2024-07-15 06:44:53: 3u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 3u
- 2024-04-15 06:28:42: 1u
- 2024-03-15 08:50:31: 3u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 3u
- 2025-09-10 13:23:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-31 14:57:37: 3u
- 2024-10-08 09:41:18: 2u
- 2024-09-09 13:39:44: 1u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 1u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 1u
- 2025-09-10 13:23:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 2u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2023-12-15 07:53:16: 2u
- 2023-11-28 08:55:15: 1u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 09:41:18: 2u
- 2024-09-09 13:39:44: 2u
- 2024-08-02 06:18:07: 2u
- 2024-07-15 06:44:53: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-05-21 08:51:32: 1u
- 2024-04-15 06:28:42: 2u
- 2024-03-15 08:50:31: 2u
- 2024-02-20 11:03:42: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:15:56: 2u
- 2025-09-10 13:23:04: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 09:41:18: 2u
- 2024-08-02 06:18:07: 2u
- 2024-06-21 06:37:19: 2u
- 2024-06-11 07:33:02: 2u
- 2024-04-15 06:28:42: 1u
- 2024-03-15 08:50:31: 2u
- 2024-02-02 09:19:36: 2u
- 2024-01-22 12:29:19: 2u
- 2023-12-15 07:53:16: 1u
- 2023-11-28 08:55:15: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (9)

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
| [LV129] LV Tartinade Carotte Gingembre 190g | 3 | Stock prédit: 0.9u (11j restants) → prédit 3u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 2 | Stock prédit: -0.9u (-11j restants) → prédit 2u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 3 | Stock prédit: -1.3u (-14j restants) → prédit 3u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Stock prédit: 0.6u (11j restants) → prédit 2u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Stock prédit: 1.1u (29j restants) → prédit 2u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 3 | Stock prédit: -0.3u (-3j restants) → prédit 3u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: 0.2u (12j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Stock prédit: 0.2u (17j restants) → prédit 1u mais non commandé |
| [LV156] LV Sauce barbecue 263 ml bio | 1 | Stock prédit: 0.2u (23j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:35:37.455Z*
