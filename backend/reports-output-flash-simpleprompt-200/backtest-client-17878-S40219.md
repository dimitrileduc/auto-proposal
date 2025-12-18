# Rapport Backtest - Client Epicerie Flocon d'Avoine

## Contexte

- **Client** : Epicerie Flocon d'Avoine (ID: 17878)
- **Commande réelle** : S40219
- **Date commande** : 2025-11-14 12:44:14
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 22
- **Tokens**: 18,705 input + 5,387 output = 24,092 total


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
| **MAE** | 0.27 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 21.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 13.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV345] LV Spread KIDS 200ml Organic | 0 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
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
- **Pattern temporel**: Asynchrone avec un cycle moyen de 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation sporadique mais persistante de 1 unité par commande sur les deux dernières années. Bien que le produit ait montré un pic à 3 unités en septembre 2024, les données récentes de septembre et octobre 2025 confirment un besoin unitaire stable. La commande intervient environ 30 jours après la précédente, s'alignant sur le rythme observé.

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
- **Pattern temporel**: Intermittence ~42 jours (6 semaines) avec disparité de jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse montre une demande extrêmement stable mais espacée de 1 unité par commande. L'intervalle moyen récent est de 6 semaines, ce qui correspond à la date de prédiction actuelle par rapport au 15 octobre. Malgré un pic ponctuel à 3u en septembre N-1, le volume récurrent de 1u domine l'historique récent et passé, justifiant le maintien de cette quantité pour minimiser le risque d'erreur.

</details>


<details>
<summary><strong>3. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle intermittent irrégulier (env. 40-60 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u en 2023 -> 1u fin 2025)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique montre une diminution du volume par commande au fil du temps : le produit est passé de commandes de 2-3 unités en 2023 à une valeur constante de 1 unité sur les deux dernières itérations (septembre et octobre 2025). Bien qu'une commande ait eu lieu en novembre 2023 (3u), la tendance actuelle de consommation locale montre un ralentissement. L'intervalle entre les deux dernières commandes est de 42 jours ; la commande actuelle intervient seulement 29 jours après la précédente, ce qui suggère un besoin de réapprovisionnement minimal pour maintenir le stock sans sur-stockage.

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.75u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme mensuel approximatif (~28-30 jours) avec glissement de jour
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 3u
- **Outliers détectés**: 17u

**🧠 Raisonnement LLM:**
L'historique montre une demande de fond très stable oscillant entre 2 et 4 unités. La commande de 17u en septembre est identifiée comme un outlier (stockage initial ou promotion locale) car elle n'a pas été répétée en octobre (2u). Le cycle de commande actuel est d'environ un mois : la dernière commande datant du 15 octobre, la date du 13 novembre s'inscrit parfaitement dans ce rythme de ~30 jours. La baseline de 2.75u est calculée en excluant l'outlier et en pondérant les valeurs historiques (3u en novembre N-1 et 2u en octobre N). Un arrondi à 3u est préconisé pour correspondre au volume récurrent le plus fréquent sur ce produit.

</details>


<details>
<summary><strong>5. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique non-fixe (6 à 8 semaines d'intervalle)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1-2 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande ultra-stable mais espacée. Avec une dernière commande le 15 octobre (1u), l'intervalle d'un mois suggère un réapprovisionnement imminent. La baseline historique est de 2u sur les périodes équivalentes en N-1, et la tendance récente oscille entre 1 et 2u sans croissance marquée.

</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible intensité, cycle irrégulier d'environ 60 à 70 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande extrêmement stable mais espacée dans le temps. Le volume historique se situe systématiquement autour de 1 unité, à l'exception d'un léger pic à 2 unités en novembre 2023. Compte tenu de la faible fréquence de commande récente (dernière commande en septembre), le besoin de réapprovisionnement à la date du 13 novembre est probable mais ne justifie pas un surstockage au-delà du volume standard.

</details>


<details>
<summary><strong>7. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (historique manquant)
- **Saisonnalité**: none
- **Tendance**: Inconnue (absence de données historiques)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale de données historiques sur l'année N-1 et les trois derniers mois, il est impossible d'établir une baseline statistique ou une tendance. Le produit 'LV Tartinade BIO Asperge' est traité comme une nouvelle référence ou un relancement. Par défaut, pour éviter une erreur de prédiction majeure sur un produit B2B sans antécédents, la quantité minimale unitaire de 1 est suggérée, bien que le degré de confiance soit bas.

</details>


<details>
<summary><strong>8. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM: 0u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données historiques insuffisantes pour établir un cycle
- **Saisonnalité**: none
- **Tendance**: Inexistante (Produit nouveau ou inactif)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale de données historiques pour l'année précédente (N-1) et les trois derniers mois, il est impossible de modéliser une demande. En supply chain, sans signal de demande récurrent ou récent, la quantité par défaut recommandée est 0 pour éviter le surstockage inutile sur une référence potentiellement déréférencée ou n'ayant jamais été commandée par ce client (produit 'dormant'). Une vérification avec le service commercial est préconisée.

</details>


<details>
<summary><strong>9. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 1 à 2 mois), principalement les lundis ou jeudis
- **Saisonnalité**: weak
- **Tendance**: Stable mais très faible (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des données historiques montre une stabilité absolue de la quantité commandée (toujours 1 unité). Bien qu'il n'y ait pas eu de commande au cours des 3 derniers mois, le produit suit un cycle de réapprovisionnement lent et constant. La date de prédiction correspond à un jeudi, jour historiquement privilégié par le client pour ses commandes (2024-09-26, 2024-05-16, 2023-11-23). Il n'y a aucun signal suggérant une augmentation du volume ou une rupture de ce pattern de 1 unité.

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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV357] LV Tartinade BIO Asperge 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [LV345] LV Spread KIDS 200ml Organic</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: high)
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
| [LV132] LV Tartinade Houmous type 190g | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
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
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Stock prédit: -0.4u (-29j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:37:43.265Z*
