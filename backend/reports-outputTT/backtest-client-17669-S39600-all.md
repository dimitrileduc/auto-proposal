# Rapport Backtest - Client Epicerie Uhoda Beaufays

## Contexte

- **Client** : Epicerie Uhoda Beaufays (ID: 17669)
- **Commande réelle** : S39600
- **Date commande** : 2025-10-08 07:26:15
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 36
- **Tokens**: 44,989 input + 63,197 output = 108,186 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 35.5% | 31 produits prédits, 11 corrects |
| **Rappel** | 78.6% | 14 produits réels, 11 détectés |
| **F1-Score** | 48.9% | Score équilibré global |

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
| **wMAPE** | 23.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 22.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -23.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV342] LV Organic Broccoli Spread 190 g | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (10 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle variable entre 14 et 36 jours, avec une médiane récente de 35 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité parfaite de la quantité commandée (1 unité). Concernant le cadencier, les deux derniers intervalles étaient de 35 et 36 jours. La dernière commande ayant eu lieu le 1er octobre, la prochaine commande théorique est attendue vers le 5 novembre (si l'on suit le cycle de 35 jours). Cette date tombe exactement dans la fenêtre des 30 prochains jours (se terminant le 6 novembre). On prévoit donc la commande d'une unité unique, conformément aux habitudes de consommation du client.

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel irrégulier, environ tous les 15 à 21 jours, avec une préférence pour le mardi/mercredi.
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (moyenne 1.4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une consommation régulière mais très faible (1 ou 2 unités par commande). Le cycle moyen entre deux commandes est d'environ 21 jours, bien que le dernier intervalle ait été de 15 jours. La dernière commande ayant eu lieu le 01/10/2025, la prochaine est statistiquement prévue entre le 16/10 et le 22/10, soit durant la fenêtre des 30 jours. Étant donné la tendance stable et le dernier volume enregistré (1u), nous prédisons une commande d'une unité pour maintenir le stock sans sur-stockage.

</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle historique irrégulier (45-60 jours) avec une accélération récente en septembre 2025 (13 jours)
- **Saisonnalité**: weak
- **Tendance**: Reprise d'activité après une longue absence (octobre 2024 à août 2025)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse se décompose en 4 étapes. 1. Nettoyage : La commande de 4u en juillet 2024 a été isolée comme un pic saisonnier ou promotionnel, la demande de fond se situant entre 1 et 2u. 2. Saisonnalité : Faible impact en octobre/novembre au regard des données N-1. 3. Tendance : Le produit a été inactif pendant presque un an avant de reprendre en septembre 2025 avec deux commandes rapprochées (1u et 2u). 4. Recommandation : La dernière commande date du 16 septembre (il y a 21 jours). Compte tenu du cycle médian historique raccourci par l'activité récente, une commande est attendue durant la fenêtre des 30 prochains jours. Nous prédisons une quantité de 2u pour la prochaine commande unique.

</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 20 et 50 jours, majoritairement le mardi
- **Saisonnalité**: weak
- **Tendance**: Stabilisation à 1u sur les commandes récentes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre des commandes systématiques avec un intervalle variant entre 20 et 58 jours. La dernière commande a eu lieu le 16 septembre 2025 (il y a 21 jours). Étant donné que le dernier intervalle était de 20 jours et que la médiane historique se situe autour de 45 jours, il est extrêmement probable qu'une commande survienne dans les 30 prochains jours (soit début octobre, soit fin octobre). Bien que la moyenne historique soit proche de 2u, les deux commandes les plus récentes sont de 1u, suggérant une réduction de la demande de fond.

</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 28-30 jours avec une accélération ponctuelle à 13 jours en septembre
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique client montre une régularité parfaite sur le volume avec systématiquement 1 unité par commande. Sur le plan temporel, bien que le dernier intervalle ait été plus court (13 jours), le cycle médian se situe autour de 28 jours. La dernière commande datant du 16 septembre 2025 (soit 21 jours avant l'analyse), la prochaine commande est statistiquement attendue entre le 9 et le 14 octobre 2025. Cet événement tombe dans la fenêtre des 30 prochains jours. En suivant la tendance de fond invariable, la quantité recommandée est de 1 unité.

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une moyenne de 35 jours et un minimum observé de 20 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très stable mais faible (toujours 1 unité). L'intervalle entre les commandes a varié entre 50 jours et 20 jours. La dernière commande ayant été effectuée il y a 21 jours (le 16 septembre), la prochaine commande est statistiquement attendue dans la fenêtre des 30 prochains jours (entre le 7 octobre et le 21 octobre selon l'évolution du cycle). Conformément à la règle de ne pas cumuler les commandes, une recommandation de 1 unité est émise.

</details>


<details>
<summary><strong>7. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire identifié le mercredi (intervalle de 7 jours).
- **Saisonnalité**: none
- **Tendance**: Inactivité prolongée (absence de commande depuis 34 jours, soit 4 cycles manqués).
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un rythme hebdomadaire de 1u le mercredi. Cependant, la dernière commande date du 03/09/2025. Aujourd'hui nous sommes le 07/10/2025 (mardi), soit 34 jours après. Le client a manqué les 4 derniers cycles théoriques (10, 17, 24 sept. et 1er oct.). En logistique B2B, un tel écart sur un produit à faible volume et cycle court suggère soit un déréférencement, soit un arrêt de la consommation du produit par le client final. Bien que le prochain mercredi théorique tombe demain (08/10), la probabilité de reprise est jugée trop faible pour recommander une commande.

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique (intervalles de 50j puis 7j)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une quantité constante de 1 unité par commande. Bien que les intervalles soient irréguliers (moyenne de 28,5 jours), 34 jours se sont écoulés depuis la dernière commande du 03/09/2025. Il est donc très probable qu'une commande de réapprovisionnement survienne dans les 30 prochains jours. La tendance et le volume historique dictent une commande unique de 1 unité.

</details>


<details>
<summary><strong>9. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 0u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: medium)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ancien cycle hebdomadaire (mardi) identifié en juillet
- **Saisonnalité**: none
- **Tendance**: Inactif (arrêt complet après le 22/07/2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre que le client suivait un rythme hebdomadaire strict chaque mardi en juillet 2025 avec des quantités de 1 à 2 unités. Cependant, aucune commande n'a été enregistrée depuis le 22 juillet 2025. À la date actuelle du 7 octobre 2025, cela représente une période d'inactivité de 77 jours, ce qui dépasse considérablement le cycle habituel de 7 jours ainsi que la fenêtre de prédiction de 30 jours. En l'absence de signal de reprise ou de données historiques indiquant une saisonnalité spécifique en octobre, la probabilité d'une commande imminente est jugée négligeable.

</details>


<details>
<summary><strong>10. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 2.15u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle erratique avec une moyenne d'une commande tous les 60 à 90 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive du volume unitaire (de 3-4u vers 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à faible rotation avec une demande irrégulière. ÉTAPE 1: Aucune quantité anormale n'est détectée (plage de 1 à 4 unités). ÉTAPE 2: La saisonnalité est faible, bien qu'un historique de commande en octobre/novembre existe en N-1. ÉTAPE 3: On observe une baisse de la quantité par commande, les deux dernières occurrences étant de 1 unité seulement. ÉTAPE 4: La dernière commande remonte au 15 juillet 2025 (il y a 84 jours). L'intervalle historique médian étant d'environ 80 jours, une commande de réapprovisionnement est fortement probable dans la fenêtre des 30 prochains jours. En suivant la tendance récente de volume minimal, la prédiction pour la prochaine commande unique est de 1 unité.

</details>




### 📊 Données d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-22 13:55:28: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:34:37: 1u
- 2025-09-16 10:15:06: 2u
- 2025-08-06 06:23:24: 2u
- 2025-07-15 09:58:18: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 2u
- 2025-09-03 06:40:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 1u
- 2024-07-30 10:52:57: 4u
- 2024-07-01 06:32:15: 1u
- 2024-05-13 08:03:20: 1u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 3u
- 2023-12-08 07:28:51: 2u
- 2023-10-24 07:06:59: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-08 12:46:21: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 1u
- 2024-07-30 10:52:57: 2u
- 2024-07-01 06:32:15: 2u
- 2024-05-13 08:03:20: 3u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 3u
- 2023-10-24 07:06:59: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 1u
- 2025-09-03 06:40:21: 1u
- 2025-08-06 06:23:24: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 10:15:06: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:40:21: 1u
- 2025-08-27 06:19:11: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:40:21: 1u
- 2025-08-27 06:19:11: 1u
- 2025-07-08 12:46:21: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [LV342] LV Organic Broccoli Spread 190 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-22 13:55:28: 1u
- 2025-07-15 09:58:18: 1u
- 2025-07-08 12:46:21: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-15 09:58:18: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-26 06:26:03: 1u
- 2024-07-01 06:32:15: 3u
- 2024-05-13 08:03:20: 4u
- 2024-03-27 09:29:35: 2u
- 2024-02-06 07:38:39: 3u
- 2023-10-24 07:06:59: 3u

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
| [LV160] LV Tartinade Aubergine 190g | 2 | Stock prédit: 1.5u (14j restants) → prédit 2u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Stock prédit: 0.6u (6j restants) → prédit 2u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 1 | Stock prédit: 0.7u (13j restants) → prédit 1u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: 0.7u (12j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.7u (11j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.8u (15j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Stock prédit: 0.6u (8j restants) → prédit 1u mais non commandé |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Stock prédit: 0.8u (15j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock prédit: 0.7u (11j restants) → prédit 1u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 1 | Stock prédit: -0.4u (-5j restants) → prédit 1u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Stock prédit: 0.3u (7j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock prédit: 0.3u (9j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 0.4u (5j restants) → prédit 2u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: -1.6u (-20j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: -1.5u (-20j restants) → prédit 1u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock prédit: -1.2u (-18j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Stock prédit: -0.4u (-9j restants) → prédit 2u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Stock prédit: -0.4u (-9j restants) → prédit 1u mais non commandé |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Stock prédit: -1.1u (-20j restants) → prédit 1u mais non commandé |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |


---

## False Negatives (3)

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
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.1u (-3j) mais client a commandé 1u |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -4.6u (-62j) mais client a commandé 1u |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock suffisant: 0.9u (33j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T18:54:36.873Z*
