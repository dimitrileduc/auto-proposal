# Rapport Backtest - Client AU RAYON BIO

## Contexte

- **Client** : AU RAYON BIO (ID: 17809)
- **Commande réelle** : S40144
- **Date commande** : 2025-11-05 14:50:02
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 17
- **Tokens**: 23,516 input + 26,984 output = 50,500 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 62.5% | 16 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 76.9% | Score équilibré global |

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
- **Pattern temporel**: Cycle mensuel régulier avec un intervalle moyen de 28 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse historique montre une grande stabilité pour ce produit. 1) Aucun événement promotionnel n'est identifié, les quantités oscillant presque exclusivement autour de 2 unités. 2) Aucune saisonnalité marquée n'apparaît entre 2024 et 2025. 3) La tendance récente avec 3u en septembre et 1u en octobre confirme une moyenne stable de 2u. 4) La dernière commande a eu lieu le 09/10/2025. Avec un cycle moyen observé de 30 jours, la prochaine commande est attendue autour du 8 ou 9 novembre 2025, soit dans la fenêtre des 30 prochains jours. La quantité recommandée correspond à la constante historique.

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 28-32 jours
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique montre une grande régularité avec une commande par mois en moyenne. La dernière commande date du 2025-10-09 (soit 26 jours avant la date actuelle). Selon l'intervalle moyen observé (30 jours), la prochaine commande est attendue entre le 5 et le 12 novembre, soit à l'intérieur de la fenêtre des 30 prochains jours. Malgré une baisse ponctuelle à 1u en octobre suite à un surstockage temporaire en septembre (4u), la quantité de fond stable est de 2u. On prévoit donc une commande unique de 2u pour revenir au rythme habituel.

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel régulier (cycle moyen de 28 à 30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 2.8 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très stable d'environ 30 jours. La dernière commande ayant eu lieu le 9 octobre 2025 (il y a 26 jours), la prochaine commande est prévue d'ici 5 à 10 jours, soit avant le 15 novembre. Cela se situe parfaitement dans la fenêtre d'analyse des 30 prochains jours. En termes de volume, bien que la dernière commande ait été de 2 unités, l'historique de l'année précédente et du mois précédent montre une demande récurrente de 3 unités (le mode et la médiane). Aucune saisonnalité ou promotion n'est détectée sur ce produit bio de niche.

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel avec un intervalle moyen de 30 à 35 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une grande régularité avec une commande par mois en moyenne. La dernière commande a été passée il y a 26 jours (le 09/10/2025). Selon le cycle habituel d'environ 30 jours, la prochaine commande est imminente et devrait tomber avant le 15 novembre, soit largement dans la fenêtre des 30 prochains jours. La quantité de 2 unités est la plus fréquente (médiane et mode) sur l'ensemble de l'historique N et N-1. L'outlier de 3u en septembre a été compensé par une commande de 1u en octobre, stabilisant la moyenne à 2u.

</details>


<details>
<summary><strong>5. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.36u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 28-30 jours
- **Saisonnalité**: none
- **Tendance**: Stable avec un volume habituel de 2 à 3 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (Nettoyage): Aucun outlier détecté. Les volumes sont très stables, oscillant entre 1 et 3 unités par commande. Étape 2 (Saisonnalité): Le produit suit un régime de fond constant sans influence saisonnière marquée sur les deux années analysées. Étape 3 (Tendance): La fréquence est extrêmement régulière. L'intervalle entre les deux dernières commandes (septembre et octobre 2025) était exactement de 29 jours. Étape 4 (Recommandation): La dernière commande date du 09/10/2025. Avec un cycle moyen de 30 jours, la prochaine commande est attendue aux alentours du 08/11/2025, soit dans la fenêtre des 30 prochains jours. Le volume de 3 unités est retenu car il s'agit de la quantité la plus fréquente (mode) et de la quantité commandée lors de la dernière occurrence.

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier (intervalle moyen de 24 à 28 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande très régulier d'environ 28 jours. La dernière commande ayant eu lieu le 09 octobre 2025 (il y a 26 jours), la prochaine commande est statistiquement prévue dans les 5 prochains jours (aux alentours du 7-9 novembre). En termes de volume, bien que des pics à 3u soient observés ponctuellement en octobre (possible effet de saisonnalité sur les tartinades en début d'automne), la demande de fond stabilisée est de 2u. Conformément à la règle de non-cumul, je recommande 2 unités pour cette commande unique prévue dans la fenêtre des 30 jours.

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
- **Pattern temporel**: Cycle mensuel régulier (environ tous les 29-31 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse de volume (passage de 2u à 1u sur les commandes récentes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une régularité remarquable. Sur l'année N-1, le client commandait presque systématiquement 2 unités tous les 30 à 45 jours. Cependant, les deux commandes les plus récentes (septembre et octobre 2025) montrent une stabilisation à 1 unité avec un intervalle exact de 29-30 jours. La dernière commande ayant eu lieu le 9 octobre 2025, la prochaine échéance théorique se situe autour du 8 ou 9 novembre 2025, ce qui tombe précisément dans la fenêtre des 30 prochains jours. En suivant la tendance récente, une commande unique de 1 unité est attendue.

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
- **Pattern temporel**: Mensuel cyclique (environ tous les 30 à 40 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune commande anormale détectée, la quantité est quasi systématiquement de 2u. Étape 2: Le produit ne présente aucune fluctuation saisonnière significative, maintenu à un niveau de fond constant. Étape 3: La tendance est parfaitement stable. Étape 4: La dernière commande a eu lieu le 09/10/2025. Le cycle moyen observé en N-1 est de 30 à 45 jours. À la date actuelle (04/11/2025), nous sommes à 26 jours de la dernière commande. Une commande est donc très probable dans les 10 prochains jours pour maintenir le stock. Conformément à l'historique, la commande unique sera de 2u.

</details>


<details>
<summary><strong>9. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 1.58u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 30 et 45 jours
- **Saisonnalité**: weak
- **Tendance**: Stable entre 1u et 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation très régulière sur deux ans. Le client commande systématiquement de petites quantités (1 ou 2 unités) tous les 30 à 45 jours en moyenne. La dernière commande date du 9 octobre 2025 (il y a 26 jours). Selon le cycle habituel, la prochaine commande devrait tomber entre le 8 et le 23 novembre, ce qui se situe à l'intérieur de la fenêtre de 30 jours. Étant donné que la dernière commande était de 2 unités et que le stock tourne lentement mais sûrement, une commande de 2 unités est prévue.

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

**✅ Quantité LLM**: 2u (confidence: high)
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

**✅ Quantité LLM**: 2u (confidence: high)
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

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (6)

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

*Rapport généré automatiquement le 2025-12-18T19:57:38.984Z*
