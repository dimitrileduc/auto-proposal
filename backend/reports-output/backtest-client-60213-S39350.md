# Rapport Backtest - Client BIOK THOREMBAIS

## Contexte

- **Client** : BIOK THOREMBAIS (ID: 60213)
- **Commande réelle** : S39350
- **Date commande** : 2025-09-24 13:05:32
- **Date cutoff système** : 2025-09-24 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 17
- **Tokens**: 34,539 input + 9,611 output = 44,150 total
- **Coût**: $0.2478 (~24.78¢)
- **Coût par produit LLM**: $0.0146


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 47.6% | 21 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 64.5% | Score équilibré global |

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
| **MAE** | 0.70 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 60.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 2 | 2.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 📊 Médiane |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 📊 Médiane |
| [KOKO01] KOKO Kombucha original 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 3 | 1 | 2.0 | 200.0% | ✅ partial | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier semi-mensuel (~15-22j entre commandes, majoritairement mar/mer)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (+33% sur période)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
**Analyse rythmique** : Les commandes montrent un pattern semi-mensuel irrégulier avec préférence mar/mer. Intervalles observés : 16j (24/06→08/07), 15j (08/07→23/07), 20j (23/07→12/08), 22j (12/08→03/09). La prochaine commande à J+21 (03/09→24/09) s'inscrit dans ce rythme.

**Tendance identifiée** : Progression nette des quantités : 3u → 3u → 2u (outlier bas probable) → 1u (outlier extrême) → 4u (retour et dépassement). La dernière commande de 4u le 03/09 marque un nouveau palier après des commandes atypiquement basses en juillet-août (possibles ruptures ou ajustements estivaux).

**Filtrage outliers** : Les 1u et 2u de juillet-août semblent atypiques (baisse estivale ?). La commande de 4u du 03/09 représente un rattrapage et établit le nouveau niveau de demande.

**Décision** : Sans saisonnalité N-1 et avec une tendance haussière confirmée par la dernière commande, la baseline s'établit à 3u (demande de fond historique). Le pic récent à 4u reflète une demande accrue non exceptionnelle. Prédiction : **4 unités** (continuation du niveau actuel).

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier ~15-22 jours, alternance Mardi/Mercredi
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (+50% sur 3 mois)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse rythmique:** Les commandes suivent un pattern irrégulier tous les 15-22 jours, principalement en milieu de semaine (mardi/mercredi). Intervalles observés: 24/06→08/07 (14j), 08/07→23/07 (15j), 23/07→12/08 (20j), 12/08→03/09 (22j). Le 24/09 tombe 21 jours après la dernière commande du 03/09, cohérent avec le rythme récent.

**Tendance claire à la hausse:** 3u→2u→1u→1u→3u montre une progression nette. La moyenne des 2 dernières commandes (1u + 3u) / 2 = 2u, mais la toute dernière commande de 3u (la plus récente et donc la plus pertinente) indique un niveau de demande supérieur. La moyenne pondérée favorisant les données récentes donne ~2.5u.

**Pas d'outliers détectés:** Toutes les valeurs (1-3u) sont cohérentes pour un produit premium bio en développement. Pas de données N-1 pour valider une saisonnalité.

**Décision:** La dernière commande de 3u le 03/09 (mercredi) représente le niveau actuel de demande stabilisé. Le pattern montre une alternance 1u-2u-3u avec tendance haussière. Prédiction: **3 unités** - alignée sur la demande la plus récente et le niveau de croissance observé.

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~22-35j) avec prédominance Mardi
- **Saisonnalité**: none
- **Tendance**: Stable - demande constante de 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**Analyse Rythmique**: Les commandes montrent un pattern mensuel avec intervalles de 18j (24/06→08/07), 35j (08/07→12/08), 22j (12/08→03/09). La dernière commande date du 03/09 (mercredi), soit 21 jours avant la date de prédiction (24/09). Ce délai correspond parfaitement au rythme observé (~22-35j). Prédominance des commandes le mardi (3/4), mais le dernier achat un mercredi montre une flexibilité.

**Pattern de Quantité**: 100% des commandes = 1u. Aucune variation, aucun outlier. Demande extrêmement stable et prévisible, caractéristique d'un client B2B avec besoin récurrent minimal (probablement petit restaurant ou boutique spécialisée avec rotation lente sur ce SKU premium bio).

**Saisonnalité**: Pas de données N-1 pour comparaison. Les 4 commandes s'étalent sur juin-septembre sans variation saisonnière apparente.

**Décision**: La régularité absolue (toujours 1u) + le respect du cycle temporel (21j depuis dernière commande) = prédiction de 1u avec haute confiance. Aucun signal de changement de comportement.

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier ~15-22 jours, alternance mardi/mercredi
- **Saisonnalité**: none
- **Tendance**: Stable avec pic récent (2u le 2025-09-03)
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
- Intervalles observés: 24j (24/06→08/07), 15j (08/07→23/07), 20j (23/07→12/08), 22j (12/08→03/09), 21j depuis dernière commande (03/09→24/09)
- Pattern: Commandes principalement les mardis/mercredis, cycle approximatif de 15-22 jours (≈3 semaines)
- La prédiction tombe un mercredi, cohérent avec le pattern (3 commandes sur 5 un mercredi)

**ANALYSE DES VOLUMES:**
- 4 commandes sur 5 = 1 unité (constance forte)
- 1 commande à 2 unités (03/09) = outlier récent (+100%)
- Ce pic pourrait indiquer: rattrapage après 22j sans commande OU début de hausse tendancielle

**FILTRAGE OUTLIER:**
- Le "2u" du 03/09 est très récent (21j), mais reste isolé dans l'historique
- Aucune donnée N-1 pour confirmer une récurrence saisonnière
- Hypothèse la plus probable: rattrapage ponctuel car intervalle précédent était le plus long (22j)

**DÉCISION:**
- Baseline théorique = 1u (demande de fond sur 80% des commandes)
- L'intervalle actuel (21j) est dans la moyenne haute mais pas exceptionnel
- Pas d'élément suggérant un besoin de 2u aujourd'hui (pas de fête, pas de pattern N-1)
- Le pic du 03/09 a probablement "régularisé" le stock client

**CONCLUSION:** Retour à la demande de fond de 1 unité, pattern le plus fréquent et cohérent avec le rythme observé.

</details>


<details>
<summary><strong>5. [KOKO01] KOKO Kombucha original 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Commandes espacées de 19-22-29 jours, sans jour fixe identifié
- **Saisonnalité**: none
- **Tendance**: Légère hausse : 1u → 0u → 2u → 3u (progression récente)
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
**Analyse détaillée:**

1. **Pattern rythmique**: Les 4 dernières commandes montrent des intervalles variables (33j, 20j, 22j) sans régularité claire. Pas de jour fixe (2 mardis, 2 mercredis). Le produit semble être commandé de manière opportuniste plutôt que systématique.

2. **Traitement des outliers**: La commande à 0u du 2025-07-23 est anormale (probable commande groupée avec d'autres produits ou erreur) et doit être exclue de l'analyse.

3. **Tendance**: En excluant le 0, on observe 1u → 2u → 3u, suggérant une adoption progressive du produit. Cependant, l'historique est très court (3 commandes réelles sur 3 mois).

4. **Saisonnalité**: Absence de données N-1, impossible d'identifier un pattern saisonnier pour septembre.

5. **Décision**: Avec seulement 3 points de données valides et une tendance naissante, la moyenne pondérée (poids sur les 2 dernières: 2u et 3u) donne une baseline de 2.5u. Par prudence statistique et vu le caractère irrégulier des commandes, je recommande **2 unités** plutôt que 3, car la progression pourrait ralentir et le rythme d'achat reste imprévisible.

**Confiance faible** due à: historique très limité, absence de saisonnalité N-1, pattern irrégulier.

</details>


<details>
<summary><strong>6. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 3u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalle variable (10-22 jours), légère préférence mardi/mercredi
- **Saisonnalité**: none
- **Tendance**: Hausse progressive observée : passage de 1u (juin-juillet-août) vers 3u (septembre)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
**Analyse Rythmique:** Historique limité à 5 commandes sur 3 mois. Les intervalles sont irréguliers (16j, 20j, 15j, 22j) avec commandes principalement mardi/mercredi. Pas de pattern hebdomadaire/mensuel fixe détectable.

**Analyse de Tendance:** 
- Juin-Août: Quantités faibles et stables (1u à 4 reprises)
- Le 23/07 montre un pic à 4u (probable test ou promotion ponctuelle)
- Début septembre: Saut à 3u, signalant une possible montée en régime

**Filtrage Outliers:** La commande de 4u du 23/07 semble exceptionnelle (3x la moyenne des autres commandes). Les autres fluctuent entre 1u et 3u.

**Absence de Saisonnalité:** Aucune donnée N-1 disponible, impossible de valider un pattern saisonnier.

**Décision:** La dernière commande (3u au 03/09, il y a 21 jours) représente le niveau actuel de demande. L'intervalle moyen étant de ~18 jours et la date cible tombant un mercredi (jour habituel), une nouvelle commande est probable. La tendance récente suggère une stabilisation autour de 3u plutôt qu'un retour à 1u. Baseline théorique à 2u (moyenne hors outlier), mais ajustement à 3u pour refléter la dynamique récente.

</details>


<details>
<summary><strong>7. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec légère préférence Mardi-Mercredi (~15-22j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère hausse récente (moyenne ~2.2u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Les commandes récentes montrent un pattern irrégulier avec des intervalles variables: 14j (24/06→08/07), 15j (08/07→23/07), 20j (23/07→12/08), 22j (12/08→03/09). Depuis la dernière commande (03/09), nous sommes à 21 jours au 24/09, ce qui correspond au rythme récent observé. Pas de rupture de rythme significative.

**FILTRAGE OUTLIERS**: La commande de 4u du 23/07 semble être un pic ponctuel (2x la moyenne). Les autres commandes oscillent entre 1-3u. Sans contexte N-1 pour confirmer un événement récurrent, je traite ce 4u comme une anomalie. 

**TENDANCE**: Hors outlier, les 4 dernières commandes montrent: 2u, 1u, 1u, 3u. Moyenne = 1.75u. La dernière commande de 3u (un mercredi, comme aujourd'hui) suggère une légère reprise après deux commandes faibles (1u).

**DÉCISION**: Baseline théorique à 2u (médiane hors outlier). Le mercredi 03/09 a commandé 3u, mais c'était probablement un rattrapage après deux commandes à 1u. Pour minimiser le MAPE, je privilégie la demande de fond régulière à **2 unités**, représentant le besoin structurel du client pour ce produit de niche (Kombucha spécialité).

</details>


<details>
<summary><strong>8. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~30-35j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Stable (1 unité par commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
- 08/07 (mar.) → 12/08 (mar.) = 35 jours
- 12/08 (mar.) → 03/09 (mer.) = 22 jours
- 03/09 (mer.) → 24/09 (mer.) = 21 jours
Pattern: Commandes espacées d'environ 3-5 semaines, avec une tendance récente à se rapprocher (22j puis 21j). Le client commande de façon relativement régulière.

**FILTRAGE OUTLIERS:**
Aucun outlier détecté. Toutes les commandes sont de 1 unité, ce qui indique soit:
- Un produit de test/niche à faible rotation
- Une commande de complément régulière
- Un client final spécifique avec besoin récurrent

**SAISONNALITÉ:**
Pas de données N-1 disponibles. Sur les 3 mois observés (juillet-septembre), aucune variation de volume, donc impact saisonnier non détectable ou inexistant.

**TENDANCE:**
Volume parfaitement stable (1u à chaque commande). La fréquence s'accélère légèrement (22j→21j) mais le volume unitaire reste constant.

**DÉCISION:**
Le mercredi 24/09 correspond exactement à 21 jours après la dernière commande (03/09), ce qui s'inscrit dans le rythme actuel. Aucun élément ne justifie une variation du volume commandé. La prédiction optimale est donc 1 unité.

</details>




---

## False Positives (11)

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.4u (14j restants) → prédit 1u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.4u (14j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.6u (27j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: -0.8u (-8j restants) → prédit 2u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.4u (25j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -0.2u (-7j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.1u (5j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.2u (9j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: -0.2u (-9j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: -0.3u (-18j restants) → prédit 1u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Stock prédit: -0.2u (-20j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T09:06:17.846Z*
