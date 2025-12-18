# Rapport Backtest - Client croquez Local

## Contexte

- **Client** : croquez Local (ID: 17591)
- **Commande réelle** : S39916
- **Date commande** : 2025-11-14 10:24:13
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 31
- **Tokens**: 25,937 input + 8,218 output = 34,155 total


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
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel ~30 jours au second semestre
- **Saisonnalité**: weak
- **Tendance**: Hausse stabilisée à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité parfaite sur les deux derniers mois (8 sept et 10 oct) avec une quantité de 2u toutes les 4 semaines environ. Bien que l'historique N-1 soit erratique et faible (majoritairement 1u), la tendance 2025 s'est stabilisée à un niveau supérieur. La commande du 13 novembre (jeudi) intervient exactement 36 jours après la dernière commande du 8 octobre, s'inscrivant dans le cycle mensuel observé. Aucun effet de saisonnalité forte n'est détecté pour ce produit spécifique à cette date en N-1, justifiant le maintien du volume récent de 2u.

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
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité exceptionnelle pour ce produit. Sur les deux dernières années, 75% des commandes sont de 3 unités, incluant les deux commandes les plus récentes (septembre et octobre 2025). Le cycle de commande est d'environ 30 jours (dernières commandes le 10/09 et le 08/10). La date de prédiction (13/11) correspond parfaitement à ce cycle de 4-5 semaines. Aucun pic saisonnier n'est observé en fin d'année sur l'historique N-1. La stabilité du volume à 3 unités est la base la plus fiable pour minimiser le MAPE.

</details>


<details>
<summary><strong>3. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours) sur le milieu de semaine
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement stable et faible. En 2025, le client a adopté un rythme de commande rigoureusement mensuel (tous les 28-32 jours). La dernière commande date du 08/10, soit il y a 36 jours. La date de prédiction (13/11) correspond parfaitement au créneau de réapprovisionnement attendu. Le volume historique oscille entre 1 et 2 unités, mais les données les plus récentes (septembre et octobre 2024) confirment un passage à 1 unité par commande. Aucun facteur saisonnier ne justifie une hausse sur ce produit spécifique en novembre.

</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.44u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ 30 à 45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable entre 1u et 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande constante alternant entre 1 et 2 unités avec une moyenne sur le long terme de 1.55u. La dernière commande date d'il y a 36 jours (8 octobre), ce qui correspond à la fréquence de rotation habituelle du produit (environ 1 mois). Étant donné que la commande précédente était de 2u et celle d'avant de 1u, et que nous sommes sur un intervalle légèrement plus long que le mois dernier, le besoin de restockage penche vers la borne haute du cycle (2 unités) pour éviter la rupture de stock sur ce produit de niche à faible rotation.

</details>


<details>
<summary><strong>5. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 30 jours (mercredi)
- **Saisonnalité**: weak
- **Tendance**: Stable mais bas (1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un rythme de commande très régulier de type mensuel. Les deux dernières commandes (08/10 et 10/09) sont espacées de exactement 4 semaines et concernent 1 unité. Bien que l'historique N-1 montre parfois des commandes de 2 unités, la tendance actuelle sur les 3 derniers mois s'est stabilisée à 1 unité par mois. La date de prédiction (13/11) correspond parfaitement au cycle de 4-5 semaines après la dernière commande du 08/10. Aucun effet saisonnier majeur n'indique une hausse immédiate pour ce produit spécifique à cette date.

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
- **Pattern temporel**: Cycle mensuel d'environ 30 jours (quasi-mensuel)
- **Saisonnalité**: none
- **Tendance**: Stable autour de 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des données montre une stabilité remarquable de la demande. Sur les deux derniers mois (septembre et octobre 2025), le client a commandé exactement 2 unités à un intervalle de 28-30 jours. Bien que l'historique N-1 montre de légères variations (entre 1 et 3 unités), le volume modal est de 2 unités. La commande est attendue un jeudi alors que les dernières étaient un mercredi, mais ce décalage d'un jour n'indique pas de rupture de cycle significative au vu de l'espacement mensuel. La prédiction de 2 unités minimise le risque d'erreur au vu de la tendance plate actuelle.

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 30 jours (tous les mercredis du début de mois récemment)
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (passant de 2u fin 2023 à 3u fin 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation régulière et stable sur ce produit avec une fréquence de commande d'environ une fois par mois. En 2025, nous observons un cycle strict de 30 jours (10 sept, 08 oct). La commande du 13 novembre s'inscrit parfaitement dans ce cycle (35 jours d'écart). Le volume est passé d'un socle de 2 unités fin 2023 à un socle solide de 3 unités sur les commandes les plus récentes et la même période l'an dernier (octobre 2024 = 3u). Aucune saisonnalité forte ne justifie un pic à 4u ou 5u à cette période précise.

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
- **Pattern temporel**: Cycle d'environ 30 jours (mensuel)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1-2u par mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande sporadique mais récurrente avec un rythme mensuel marqué sur les deux derniers mois (8 octobre et 10 septembre). L'intervalle de 36 jours depuis la dernière commande (8 octobre) suggère qu'une commande de réapprovisionnement est imminente pour le 13 novembre. Le volume est historiquement faible (1 à 2 unités). La moyenne des commandes récentes est de 1.5u, mais sans tendance à la hausse et avec une majorité de commandes à 1u sur l'historique global, la quantité la plus probable est 1u.

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
- **Pattern temporel**: Rythme mensuel (environ tous les 30 jours, un mercredi)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (de 1u-2u à 2u-3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des cycles récents montre une commande mensuelle systématique depuis septembre. La dernière commande date du 08/10 (mercredi), plaçant le 13/11 (jeudi) exactement dans la fenêtre de réapprovisionnement à J+36. On observe une tendance haussière passant de l'unité historique (1u) à un volume plus élevé (3u lors de la dernière commande). Étant donné le cycle de ~30 jours et la montée en puissance du produit sur 2025, la quantité de 3 unités est la plus probable pour couvrir le stock du prochain mois.

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
- **Tendance**: Stable à 1.5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des données montre un rythme de commande mensuel très marqué (intervalles de ~30 jours entre sept-25 et oct-25). La demande de fond oscille historiquement entre 1 et 3 unités. Avec une dernière commande de 2u le 08/10, et une tendance stable sans pic saisonnier identifié en novembre N-1, la commande du 13/11 s'inscrit parfaitement dans le cycle de 35 jours. On préconise 2 unités pour maintenir le stock au vu de la légère hausse de volume constatée le mois dernier par rapport à septembre.

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 à 45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère accélération (1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très stable oscillant entre 1 et 2 unités par commande depuis 2024. Le cycle de commande actuel est d'environ un mois (dernière commande le 08/10, nous sommes le 13/11, soit 36 jours d'intervalle). La quantité modale et la plus récente est de 2 unités. Étant donné la stabilité du produit et le délai écoulé depuis la dernière commande, le volume de 2 unités est le plus probable pour couvrir la période à venir sans risque de surstockage significatif.

</details>


<details>
<summary><strong>12. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.15u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très erratique, environ une commande tous les 1 à 2 mois sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Baisse de volume (passé de 2u à 1u par commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement sporadique et de très faible volume (majoritairement 1 unité par commande en 2024 et 2025). La dernière commande remonte au 8 octobre (il y a environ 36 jours), ce qui correspond à l'intervalle moyen observé historiquement pour ce produit de niche. Il n'y a aucun signal suggérant une accélération de la demande ou un pic saisonnier sur cette référence spécifique de tartinade à cette période de l'année. La recommandation d'une unité est la plus probable compte tenu de la tendance de fond à 1u/commande constatée sur les trois dernières transactions.

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
- **Pattern temporel**: Mensuel cyclique (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une régularité remarquable de 2 unités par commande depuis début 2024, avec un intervalle moyen de 30 jours constaté sur les deux derniers mois (8 octobre et 10 septembre). La demande du 13 novembre arrive exactement 36 jours après la précédente, s'inscrivant dans ce cycle mensuel de réapprovisionnement. Aucune saisonnalité n'influence ce volume de fond qui reste constant à 2 unités.

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
- **Pattern temporel**: Cycle mensuel ~28-31 jours, historiquement le deuxième mercredi du mois
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique récent montre une régularité parfaite avec une commande de 2 unités effectuée environ tous les 30 jours (08 oct et 10 sept), systématiquement un mercredi. La date de prédiction (jeudi 13 nov) accuse un léger décalage d'un jour par rapport au cycle théorique du mercredi 12 nov, suggérant un besoin immédiat pour maintenir le stock de fond. Aucune variation de volume n'étant observée sur les deux derniers mois, la reconduction de la quantité de 2 unités est la plus probable pour minimiser l'erreur (MAPE).

</details>


<details>
<summary><strong>15. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM: 4u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 3u (300.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-30 jours) le mercredi
- **Saisonnalité**: none
- **Tendance**: Hausse légère (+1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande strictement mensuelle avec un intervalle de 28 jours exactement entre septembre et octobre (cycles de 4 semaines). La commande de novembre est attendue car la dernière date remonte à 36 jours. Bien que le jour habituel soit le mercredi, la demande intervient ce jeudi. La tendance est passée de 3u à 4u lors de la dernière occurrence. Compte tenu du léger retard par rapport au cycle de 28 jours (besoin de stock probablement plus critique) et de la tendance récente, une quantité de 4 unités est la plus probable pour maintenir le niveau de stock actuel.

</details>


<details>
<summary><strong>16. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle 28-30 jours (mensuel)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande récurrente mensuelle (intervalle de 28 jours entre septembre et octobre). Bien que l'échantillon soit faible, on observe une progression de 1u à 2u. La date de prédiction (13 novembre) arrive exactement 36 jours après la dernière commande, confirmant l'échéance mensuelle dépassée de quelques jours, ce qui suggère un besoin de réapprovisionnement immédiat. On privilégie la quantité la plus récente (2u) pour soutenir la dynamique de vente actuelle sur cette référence spécifique.

</details>


<details>
<summary><strong>17. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel exact (cycle de 30-31 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité parfaite avec une commande d'une unité toutes les 4 à 5 semaines (intervalles de ~30 jours). La dernière commande a eu lieu le 8 octobre, plaçant la fenêtre de réapprovisionnement naturelle autour du 7-13 novembre. Bien que le jour de la semaine diffère légèrement (jeudi vs mercredi), le volume est extrêmement stable à l'unité sans aucun signe de croissance ou de saisonnalité à ce stade du cycle de vie du produit.

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
- **Pattern temporel**: Cycle mensuel strict (~28-30 jours) le deuxième mercredi du mois
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un comportement de commande extrêmement régulier et de faible volume (1 unité par mois, systématiquement le deuxième mercredi du mois). La commande du 13 novembre (jeudi) intervient exactement un jour après le créneau habituel du cycle (mercredi 12), ce qui suggère un léger décalage opérationnel plutôt qu'une modification de la demande de fond. Aucun outlier n'est détecté et la stabilité est parfaite sur les derniers mois.

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
- **Pattern temporel**: Rythme sporadique et irrégulier (environ tous les 2 à 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique complet montre une stabilité absolue de la quantité commandée (systématiquement 1 unité par commande depuis début 2024). Malgré le caractère sporadique des commandes, aucune variation de volume n'est observée indépendamment du cycle ou du mois. La dernière commande datant du 10 septembre (soit environ 2 mois), la probabilité d'une commande de réapprovisionnement d'une unité unique est très élevée.

</details>


<details>
<summary><strong>20. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé - Première commande ou historique absent
- **Saisonnalité**: none
- **Tendance**: Inconnue - Absence de données historiques
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale de données historiques pour l'année précédente (N-1) et les trois derniers mois, il est impossible d'identifier un cycle de commande ou une tendance pour ce produit spécifique (LV BIO Tartinade Tomato Basilico). Dans un contexte B2B agroalimentaire, une quantité minimale de 1 unité (ou colis standard) est recommandée pour tester l'implantation du produit ou répondre à une demande ponctuelle, tout en minimisant le risque de stock mort du fait du manque de visibilité.

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

**✅ Quantité LLM**: 2u (confidence: high)
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

**✅ Quantité LLM**: 1u (confidence: high)
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

**✅ Quantité LLM**: 1u (confidence: high)
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

**✅ Quantité LLM**: 2u (confidence: high)
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

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>17. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:10:46: 1u
- 2025-09-10 06:22:23: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
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

*Rapport généré automatiquement le 2025-12-18T11:40:24.756Z*
