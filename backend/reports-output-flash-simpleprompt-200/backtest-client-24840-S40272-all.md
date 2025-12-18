# Rapport Backtest - Client Al-Terre-Native

## Contexte

- **Client** : Al-Terre-Native (ID: 24840)
- **Commande réelle** : S40272
- **Date commande** : 2025-11-14 10:18:22
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 13,075 input + 3,964 output = 17,039 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 54.5% | 22 produits prédits, 12 corrects |
| **Rappel** | 80.0% | 15 produits réels, 12 détectés |
| **F1-Score** | 64.9% | Score équilibré global |

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
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 47.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 58.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 35.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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

## True Positives (12)

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
| [LV161] LV Tartinade Mangue curry 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV132] LV Tartinade Houmous type 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique avec intervalle de 20 à 30 jours, sans jour de livraison fixe.
- **Saisonnalité**: none
- **Tendance**: Stable à 2 unités
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'historique montre une consommation extrêmement stable de 2 à 3 unités par commande depuis fin 2023. Le client n'a pas passé de commande depuis le 24 septembre (soit environ 50 jours), ce qui suggère que le stock est épuisé. Bien que l'intervalle soit plus long que d'habitude, le volume par commande ne gonfle jamais significativement (jamais au-dessus de 3u). Étant donné les deux dernières commandes à 2u en septembre, la prédiction se stabilise sur ce volume de fond pour minimiser le risque de surstock sur un produit type tartinade.

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalles de 20 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -25%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible fréquence de commande (environ 1 fois par mois). On observe une dégradation des volumes entre N-1 (moyenne de 3.2 units) et les deux derniers mois (moyenne de 1.5 units). La dernière commande remonte à 50 jours (24/09), suggérant un besoin imminent pour reconstituer le stock tampon. Compte tenu de la baisse de tendance mais du délai allongé depuis la dernière livraison, une quantité de 2 unités (proche de la moyenne récente arrondie au supérieur pour éviter la rupture de ce produit de niche) est la plus probable.

</details>


<details>
<summary><strong>3. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, cycle long de 20 à 60 jours
- **Saisonnalité**: none
- **Tendance**: Stable à légèrement baissière (2u vers 1.5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une demande sporadique mais persistante avec un volume modal de 2 unités. Aucune saisonnalité forte n'est détectée sur cette référence de tartinade. La dernière commande datant de 50 jours (septembre), un réapprovisionnement de 2 unités correspond au cycle de rotation moyen observé en N-1 et compense la faible quantité (1u) de l'avant-dernière commande.

</details>


<details>
<summary><strong>4. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.45u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Approvisionnement irrégulier par cycle de 20 à 30 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u -> 2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une tendance à la baisse constante sur les volumes récents (passant de 3-4 unités en N-1 à 2 puis 1 unité sur les deux derniers mois). L'intervalle de temps depuis la dernière commande (24 sept) est de 50 jours, ce qui est supérieur à la moyenne habituelle (~30j), suggérant une rotation très lente du produit en rayon. Bien que l'historique N-1 suggère des volumes de 2-3 unités, la dynamique actuelle de 2025 impose une commande minimale de 1 unité pour éviter le surstockage sur une référence dont la demande semble s'essouffler.

</details>


<details>
<summary><strong>5. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Approvisionnement irrégulier (60-90 jours), principalement le lundi/mardi
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (2-3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation lente et erratique. Historiquement, le produit tourne autour de 2 à 3 unités par commande avec des intervalles longs. La dernière commande (2u) remonte à plus de deux mois, ce qui suggère un besoin de réapprovisionnement imminent pour ce point de vente. Bien que le jeudi ne soit pas le jour habituel de commande (plutôt lundi/mardi), le volume de fond reste très constant. On privilégie la quantité de 2 unités, correspondant à la dernière commande et à la moyenne basse du produit, pour minimiser le risque de surstockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (environ tous les 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Inexistante / Inactive
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique extrêmement faible et aucune activité enregistrée au cours des 15 derniers mois. La dernière commande remonte à juillet 2024. Le volume historique oscille entre 1u et 2u de manière très sporadique. Étant donné l'absence totale de commandes récentes, la demande de fond est techniquement nulle, mais pour maintenir une présence minimale ou répondre à une demande de réapprovisionnement ponctuelle après une longue période d'inactivité, la quantité la plus probable en cas de commande est l'unité minimale (1u).

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique ~30-45 jours, principalement lundi/mardi
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 3u
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'historique montre une demande de fond très stable oscillant entre 3 et 4 unités par commande. Bien qu'aucune commande n'ait été enregistrée sur les 3 derniers mois, la récurrence historique suggère un besoin de réapprovisionnement à cette période de l'année (similaire à octobre-décembre 2023/2024). Le volume de 3 unités est statistiquement le plus fréquent et correspond à la moyenne lissée hors anomalies mineures (1u). La commande tombant un jeudi (jour d'activité historique pour ce client en octobre/avril), on maintient le volume standard sans effet de rattrapage majeur.

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 13:11:31: 2u
- 2025-09-02 06:43:42: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 13:08:43: 2u
- 2024-09-23 12:43:31: 3u
- 2024-06-24 13:38:30: 2u
- 2024-02-12 14:44:33: 3u
- 2024-01-22 12:42:31: 2u
- 2023-12-12 07:28:43: 3u
- 2023-11-28 08:00:23: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 13:11:31: 2u
- 2025-09-02 06:43:42: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 13:08:43: 4u
- 2024-09-23 12:43:31: 3u
- 2024-07-15 06:47:21: 2u
- 2024-06-24 13:38:30: 3u
- 2024-04-18 09:29:52: 3u
- 2024-03-12 08:16:55: 2u
- 2024-02-12 14:44:33: 4u
- 2024-01-22 12:42:31: 4u
- 2023-12-12 07:28:43: 2u
- 2023-11-28 08:00:23: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [LV330] LV BIO Tartinade Toscana 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 13:11:31: 2u
- 2025-09-02 06:43:42: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 13:08:43: 2u
- 2024-09-23 12:43:31: 3u
- 2024-06-24 13:38:30: 3u
- 2024-04-18 09:29:52: 3u
- 2024-03-12 08:16:55: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 13:11:31: 1u
- 2025-09-02 06:43:42: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 13:08:43: 3u
- 2024-07-15 06:47:21: 3u
- 2024-06-24 13:38:30: 3u
- 2024-05-21 06:57:18: 3u
- 2024-04-18 09:29:52: 2u
- 2024-03-12 08:16:55: 3u
- 2024-02-12 14:44:33: 4u
- 2024-01-22 12:42:31: 4u
- 2023-12-12 07:28:43: 3u
- 2023-11-28 08:00:23: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 06:43:42: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 13:08:43: 1u
- 2024-09-23 12:43:31: 2u
- 2024-07-15 06:47:21: 2u
- 2024-05-21 06:57:18: 3u
- 2024-03-12 08:16:55: 3u
- 2024-02-12 14:44:33: 3u
- 2024-01-22 12:42:31: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-15 06:47:21: 1u
- 2024-05-21 06:57:18: 2u
- 2024-04-18 09:29:52: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 13:08:43: 4u
- 2024-09-23 12:43:31: 1u
- 2024-07-15 06:47:21: 2u
- 2024-05-21 06:57:18: 3u
- 2024-04-18 09:29:52: 3u
- 2024-03-12 08:16:55: 3u
- 2024-02-12 14:44:33: 3u
- 2024-01-22 12:42:31: 4u
- 2023-12-12 07:28:43: 3u
- 2023-11-28 08:00:23: 1u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (10)

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
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Stock prédit: -0.8u (-13j restants) → prédit 2u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | Stock prédit: 0.4u (11j restants) → prédit 2u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Stock prédit: 0.4u (11j restants) → prédit 2u mais non commandé |
| [LV131] LV Tartinade Potiron 190g | 2 | Stock prédit: -0.1u (-1j restants) → prédit 2u mais non commandé |
| [LV188] LV Tartinade Aubergine  380g | 2 | Stock prédit: -0.7u (-29j restants) → prédit 2u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 2 | Stock prédit: -0.6u (-15j restants) → prédit 2u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: -0.2u (-11j restants) → prédit 1u mais non commandé |
| [LV344] LV Colis apéro | 2 | Stock prédit: -0.4u (-11j restants) → prédit 2u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Stock prédit: -0.2u (-17j restants) → prédit 1u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Stock prédit: -2.0u (-59j restants) → prédit 2u mais non commandé |


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
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Stock suffisant: 1.0u (46j restants > seuil 30j) |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:37:43.672Z*
