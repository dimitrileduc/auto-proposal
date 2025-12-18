# Rapport Backtest - Client croquez Local

## Contexte

- **Client** : croquez Local (ID: 17591)
- **Commande réelle** : S39916
- **Date commande** : 2025-11-14 10:24:13
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 31
- **Tokens**: 47,214 input + 9,215 output = 56,429 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 58.5% | 53 produits prédits, 31 corrects |
| **Rappel** | 73.8% | 42 produits réels, 31 détectés |
| **F1-Score** | 65.3% | Score équilibré global |

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
| **MAE** | 0.74 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 45.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 53.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 5.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 13 | Égalité parfaite |
| Partial Match (>0u) | 18 | Avec erreur |

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

## True Positives (31)

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
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV146] LV Sauce Aïoli 200 ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV160] LV Tartinade Aubergine 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV188] LV Tartinade Aubergine  380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 4 | 1 | 3.0 | 300.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [WIG03] WIGNAC cidre naturel bio 750ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (20 produits)


<details>
<summary><strong>1. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse stabilisée à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une transition d'un rythme erratique en 2024 (souvent 1u) vers une régularité mensuelle stricte depuis septembre 2025. Les deux dernières commandes ont été passées exactement à 28-30 jours d'intervalle (10/09 et 08/10) pour des quantités de 2u. Bien que la date de prédiction (13/11) soit un jeudi alors que les commandes récentes étaient le mercredi, le cycle de 30 jours environ suggère que la prochaine livraison est due autour de cette date. La tendance de fond est passée de 1u à 2u, faisant de 2u la prédiction la plus précise pour ce cycle de novembre.

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel ~30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande extrêmement régulier sur les deux derniers mois (10 septembre, 8 octobre), se produisant environ tous les 28-30 jours avec une quantité constante de 3 unités. Bien que les commandes de 2024 aient montré de légères variations (3u à 4u), la tendance 2025 est stabilisée à 3u. La date de prédiction (13 novembre) arrive exactement 36 jours après la dernière commande, ce qui s'inscrit dans la fenêtre mensuelle habituelle. Même si le jour de la semaine diffère légèrement (jeudi vs mercredi), le volume de 3u est le plus probable pour couvrir le besoin mensuel récurrent identifié.

</details>


<details>
<summary><strong>3. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel lent (~30j)
- **Saisonnalité**: none
- **Tendance**: Baisse puis stabilisation à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation régulière mais très faible de ce produit (LV Tartinade). En 2024, les quantités oscillaient entre 1u et 2u, mais les deux dernières commandes les plus récentes (septembre et octobre 2025) se sont stabilisées à exactement 1u par mois avec un intervalle d'environ 30 jours. La date de prédiction (13 novembre) arrive exactement 36 jours après la dernière commande du 8 octobre, ce qui s'inscrit parfaitement dans le cycle mensuel identifié. Bien que le jour varie (mercredis récemment vs jeudi demandé), la quantité de fond est structurellement de 1u.

</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation régulière mais faible (1 à 2 unités) avec un rythme de commande approximativement mensuel. Les deux dernières commandes récentes (septembre et octobre 2025) confirment ce cycle de 30 jours environ. La commande d'octobre était de 2u le 08/10. Pour la prédiction du 13/11 (soit 36 jours après la précédente), nous sommes exactement dans la fenêtre du cycle mensuel. Bien que le jour habituel récent soit le mercredi, les règles de gestion hors cycle imposent de prédire la prochaine commande probable. Compte tenu de la stabilité du produit sur 2 ans (moyenne de 1.55u) et du dernier volume de 2u, la quantité de 2u est la plus probable pour maintenir le stock client.

</details>


<details>
<summary><strong>5. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (~30 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (2u en début 2024 -> 1u fin 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une cadence de commande mensuelle très nette sur les deux derniers mois (8 sept et 10 oct, tous deux des mercredis, espacés de précisément 28-30 jours). Bien que l'année précédente affichait des volumes de 2 unités, la tendance récente s'est stabilisée à 1 unité. La date de prédiction (13 nov) tombe 36 jours après la dernière commande, ce qui s'aligne avec le cycle mensuel identifié. Le passage du mercredi au jeudi est négligeable pour ce type de produit B2B à faible rotation.

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une grande stabilité pour cette tartinade. Sur l'année 2024, le volume oscillait entre 1u et 3u (moyenne de 2.16u). Les deux dernières commandes (08/10 et 10/09) sont parfaitement identiques à 2u avec un intervalle strict de 28-30 jours. Le 13 novembre 2025 correspondant exactement à l'échéance de 4-5 semaines après la dernière commande d'octobre, la quantité de 2u est la plus probable pour maintenir ce stock de fond stable.

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-35 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable entre 2u et 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande mensuel très régulier. Les deux dernières commandes (08/10/2025 et 10/09/2025) confirment ce rythme avec des volumes de 3u et 2u respectivement. La date cible (13/11/2025) se situe exactement 36 jours après la dernière commande, ce qui correspond à la fenêtre de réapprovisionnement habituelle du client pour ce produit. Bien que l'historique N-1 montre des pics à 4u en début d'année, la tendance récente de fin d'année se stabilise à 3u, volume identique à celui d'octobre 2024 et octobre 2025.

</details>


<details>
<summary><strong>8. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1.5u (moyenne)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation très régulière mais à faible volume, avec un cycle de commande approximativement mensuel (dernières commandes le 10/09 et 08/10). La date de prédiction (13/11) correspond parfaitement à l'échéance de ce cycle mensuel (36 jours après la dernière commande). Bien que les volumes oscillent entre 1 et 2 unités, la commande la plus récente et la majorité des occurrences historiques sont à 1 unité. En l'absence de tendance haussière ou de saisonnalité marquée sur ce produit spécifique (BIO Tartinade), je prévois la quantité de base la plus fréquente pour minimiser le MAPE.

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (de 1u en 2024 à 2.5u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un changement de comportement : alors qu'en 2024 les commandes étaient sporadiques (1u), les deux derniers mois (septembre et octobre 2025) montrent une régularité mensuelle rigoureuse avec un cycle de 28-30 jours. La quantité est passée de 2u à 3u. La date de prédiction (13 novembre) arrive exactement 36 jours après la dernière commande du 8 octobre, ce qui correspond au cycle mensuel observé. Bien que le jour habituel récent soit le mercredi, le décalage au jeudi est minime pour un produit de type tartinade avec cette fréquence. Je retiens la dernière valeur connue (3u) qui reflète la tendance de croissance actuelle.

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable entre 1u et 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique récent montre un cycle d'environ 30 jours (08 oct et 10 sept). Avec une prédiction demandée le 13 novembre, nous sommes exactement dans la fenêtre de commande mensuelle (35 jours après la dernière). Bien que le volume historique N-1 ait montré des pointes à 3 unités, les données de 2025 s'orientent vers une consommation plus faible de 1 à 2 unités. Je préconise 2 unités pour couvrir la demande mensuelle habituelle, le produit étant stable.

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1.5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une fréquence de commande d'environ une fois par mois. Sur les 30 derniers jours, le client n'a pas encore commandé pour novembre (dernière commande le 08/10). Bien que le jour varie (Lundi en 2024, Mercredi en 2025), la demande se situe systématiquement entre 1 et 2 unités. Le volume de 2 unités est le plus fréquent historiquement (75% des cas) et correspond à la dernière commande à volume 'normal' de ce cycle. Comme le 13 novembre est le jeudi de la semaine habituelle de réapprovisionnement mensuel, je préconise le maintien du stock fond de rayon habituel.

</details>


<details>
<summary><strong>12. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (environ 1 commande tous les 45-60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (de 2u en début 2024 à 1u fin 2024/2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un produit à très faible rotation et sans cycle hebdomadaire strict. Initialement commandé par 2 unités début 2024, le volume s'est stabilisé à 1 unité lors des quatre dernières commandes (mars, août, octobre 2024 et octobre 2025). La dernière commande datant du 8 octobre 2025, la prédiction pour le 13 novembre s'inscrit dans la fenêtre de réapprovisionnement à la demande. Le volume de 1 unité est le plus probable au vu de la tendance récente et de la nature 'slow mover' du produit.

</details>


<details>
<summary><strong>13. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-32 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité parfaite de 2 unités par commande sur le long terme (N-1) et le court terme (2025). Le cycle est d'environ une commande par mois. Les deux dernières commandes ont eu lieu exactement à 28 jours d'intervalle (10/09 et 08/10), les mercredis. La date cible du 13/11 (jeudi) correspond exactement au créneau de la prochaine commande attendue (soit environ 35 jours après la dernière). Bien que le jour varie légèrement, la quantité de 2u est la constante absolue de ce client pour ce produit BIO spécifique.

</details>


<details>
<summary><strong>14. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité parfaite sur un cycle mensuel (tous les 28-32 jours) avec une quantité constante de 2 unités. Les deux dernières commandes ont eu lieu un mercredi (08/10 et 10/09). La date cible du jeudi 13 novembre se situe exactement à 36 jours de la dernière commande, s'inscrivant dans la fenêtre du cycle mensuel attendu. Conformément aux règles de gestion des jours hors cycle, bien que la commande tombe un jeudi au lieu du mercredi habituel, la quantité prévue pour l'occurrence de novembre reste de 2 unités, sans signe de croissance ou de baisse.

</details>


<details>
<summary><strong>15. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM: 4u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 3u (300.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-30 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (3u vers 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande régulière tous les mois (intervalle de 28 jours entre les deux points). Le jour habituel est le mercredi. Bien que la date de prédiction soit un jeudi, selon les consignes de gestion de jour hors-cycle, nous devons prédire le volume de la prochaine commande probable. La dernière commande en octobre était de 4 unités, montrant une légère progression par rapport à septembre (3 unités). Compte tenu de la stabilité du cycle mensuel et du volume récent, la prédiction est fixée à 4 unités.

</details>


<details>
<summary><strong>16. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux commandes espacées de 28 jours, toutes deux passées un mercredi. La date de prédiction (jeudi 13 novembre) survient exactement 36 jours après la dernière commande du 8 octobre. Bien que le jour diffère d'un jour (jeudi vs mercredi), nous sommes dans la fenêtre habituelle du cycle mensuel. La tendance courte montre une progression de 1u à 2u. Étant donné la faible profondeur d'historique mais la cohérence du cycle de 30 jours, je recommande de suivre la dernière quantité observée (2u) pour répondre au besoin de réapprovisionnement mensuel.

</details>


<details>
<summary><strong>17. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un comportement de commande extrêmement régulier mais à faible volume (1 unité par mois). Les deux dernières commandes ont eu lieu les 10 septembre et 8 octobre (deuxièmes mercredis du mois). La prédiction est demandée pour le jeudi 13 novembre. Suivant les consignes pour les jours hors cycle, la prochaine commande attendue au terme du cycle de 30 jours (attendue logiquement autour du 12-13 novembre) restera stable à 1 unité, sans aucun signe de croissance ou d'anomalie détectée.

</details>


<details>
<summary><strong>18. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-31 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un rythme de commande très régulier d'une unité par mois (commandes séparées de 33 jours en septembre/octobre). Bien que la date de prédiction soit un jeudi et que les commandes précédentes aient eu lieu un mercredi, le décalage est mineur et correspond à la fenêtre de réapprovisionnement mensuelle (environ 30-35 jours après la dernière commande du 08/10). Le volume est constant à 1u, sans aucun signe de variation ou d'outlier.

</details>


<details>
<summary><strong>19. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique ultra-faible (tous les 2 à 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique de ce produit montre une stabilité absolue à 1 unité par commande depuis début 2024, quel que soit l'intervalle de temps. Bien que la fréquence soit irrégulière (entre 45 et 90 jours d'intervalle), le volume ne dévie jamais. La dernière commande datant du 10 septembre, soit 64 jours avant la date de prédiction, nous sommes dans la fenêtre temporelle probable pour un réapprovisionnement de 1 unité.

</details>


<details>
<summary><strong>20. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (nouveau produit ou arrêt)
- **Saisonnalité**: none
- **Tendance**: Activité nulle observée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale de données historiques (N-1 et récentes), il est impossible d'identifier un cycle ou une tendance. Cependant, le produit est présent dans le référentiel (LV336). Conformément aux règles de gestion B2B spécifiant de ne jamais prédire 0 pour un produit référencé hors arrêt explicite, je préconise une quantité minimale de 1 unité (stock de sécurité de base/implantation) pour la première commande probable à venir.

</details>




### 📊 Données d'Input LLM (20 produits)


<details>
<summary><strong>1. [LV159] LV Tartinade aux Truffes  135g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u
- 2024-06-24 13:19:30: 2u
- 2024-05-06 12:55:07: 1u
- 2024-03-15 08:42:38: 1u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 3u
- 2025-09-10 06:22:23: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 4u
- 2024-08-27 06:21:49: 3u
- 2024-06-24 13:19:30: 4u
- 2024-05-06 12:55:07: 3u
- 2024-03-15 08:42:38: 3u
- 2024-01-11 08:27:56: 3u
- 2023-12-05 07:47:51: 3u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 2u
- 2024-06-24 13:19:30: 2u
- 2024-03-15 08:42:38: 2u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 1u
- 2024-06-24 13:19:30: 2u
- 2024-05-06 12:55:07: 1u
- 2024-03-15 08:42:38: 2u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [LV131] LV Tartinade Potiron 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 1u
- 2024-03-15 08:42:38: 2u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 2u
- 2024-06-24 13:19:30: 2u
- 2024-05-06 12:55:07: 1u
- 2024-03-15 08:42:38: 3u
- 2024-01-11 08:27:56: 3u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 3u
- 2025-09-10 06:22:23: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 3u
- 2024-08-27 06:21:49: 3u
- 2024-06-24 13:19:30: 4u
- 2024-03-15 08:42:38: 4u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 2u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u
- 2024-03-15 08:42:38: 1u
- 2024-01-11 08:27:56: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 3u
- 2025-09-10 06:22:23: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 1u
- 2024-06-24 13:19:30: 1u
- 2024-05-06 12:55:07: 1u
- 2024-01-11 08:27:56: 2u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-27 06:21:49: 2u
- 2024-05-06 12:55:07: 2u
- 2024-03-15 08:42:38: 3u
- 2024-01-11 08:27:56: 3u
- 2023-12-05 07:47:51: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 2u
- 2024-06-24 13:19:30: 2u
- 2024-05-06 12:55:07: 1u
- 2024-03-15 08:42:38: 2u
- 2024-01-11 08:27:56: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>12. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u
- 2024-03-15 08:42:38: 1u
- 2024-01-11 08:27:56: 2u
- 2023-12-05 07:47:51: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>13. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 2u
- 2024-08-27 06:21:49: 2u
- 2024-06-24 13:19:30: 1u
- 2024-05-06 12:55:07: 2u
- 2024-03-15 08:42:38: 2u
- 2024-01-11 08:27:56: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 4u
- 2025-09-10 06:22:23: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>16. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 2u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>17. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>18. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>19. [LV133] LV Tartinade Ananas Coco 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:01:10: 1u
- 2024-08-27 06:21:49: 1u
- 2024-06-24 13:19:30: 1u
- 2024-03-15 08:42:38: 1u
- 2024-01-11 08:27:56: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>20. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (22)

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
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: -0.3u (-7j restants) → prédit 1u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 2 | Stock prédit: -0.7u (-13j restants) → prédit 2u mais non commandé |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [LV158] LV Moutarde 200 ml | 1 | Stock prédit: -0.3u (-7j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Stock prédit: 0.6u (14j restants) → prédit 2u mais non commandé |
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 2 | Stock prédit: 0.8u (21j restants) → prédit 2u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock prédit: -0.3u (-13j restants) → prédit 1u mais non commandé |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 2 | Stock prédit: -0.6u (-13j restants) → prédit 2u mais non commandé |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 1 | Stock prédit: -0.3u (-13j restants) → prédit 1u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Stock prédit: -0.3u (-13j restants) → prédit 1u mais non commandé |
| [WIG02] WIGNAC cidre rosé bio 330ml | 1 | Stock prédit: -0.1u (-7j restants) → prédit 1u mais non commandé |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 1 | Stock prédit: -0.3u (-13j restants) → prédit 1u mais non commandé |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Stock prédit: -0.3u (-13j restants) → prédit 1u mais non commandé |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Stock prédit: -0.3u (-13j restants) → prédit 1u mais non commandé |
| [MF0052] MF Pois chiches  500g | 1 | Stock prédit: -0.1u (-7j restants) → prédit 1u mais non commandé |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [RF003] REFIELD Maïs 500G  | 1 | Stock prédit: -0.1u (-7j restants) → prédit 1u mais non commandé |
| [MF0060] MF Passata | 1 | Stock prédit: -0.1u (-13j restants) → prédit 1u mais non commandé |
| [MF0051] MF Kidney Beans 500g | 1 | Stock prédit: -0.1u (-13j restants) → prédit 1u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 2 | Stock prédit: -0.1u (-10j restants) → prédit 2u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | Stock prédit: -1.0u (-37j restants) → prédit 2u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Stock prédit: -1.3u (-63j restants) → prédit 1u mais non commandé |


---

## False Negatives (11)

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
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 2 | Stock suffisant: 1.1u (39j restants > seuil 30j) |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV156] LV Sauce barbecue 263 ml bio | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV136] LV Tartinade Betterave 190g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Stock suffisant: 1.0u (58j restants > seuil 30j) |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV214] LV Biscuits apéro tomate basilic 100g bio  | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 1 | Stock suffisant: 1.2u (88j restants > seuil 30j) |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 2 | Stock suffisant: 0.8u (142j restants > seuil 30j) |
| [LV040] LV Caprons apéritifs 240g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [WIG04] WIGNAC cidre rosé bio 750ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:18:48.358Z*
