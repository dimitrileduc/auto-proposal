# Rapport Backtest - Client BIOK CORBAIS

## Contexte

- **Client** : BIOK CORBAIS (ID: 60211)
- **Commande réelle** : S39703
- **Date commande** : 2025-10-16 06:40:28
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 23
- **Tokens**: 46,528 input + 12,919 output = 59,447 total
- **Coût**: $0.3334 (~33.34¢)
- **Coût par produit LLM**: $0.0145


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
| **MAE** | 0.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 30.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 15.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 2 | 1 | 1.0 | 100.0% | ✅ partial | 📊 Médiane |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel ~30-35j avec accélération récente
- **Saisonnalité**: none
- **Tendance**: Stable autour de 1-2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**:
- 06/08 → 10/09 : 35 jours (mer. → mer.)
- 10/09 → 09/10 : 29 jours (mer. → jeu.)
- Pattern mensuel clairement identifié (~30-35j entre commandes)
- Date de prédiction: 16/10 (jeudi) = 7 jours après dernière commande du 09/10

**ANALYSE QUANTITATIVE**:
- Historique récent: 2u, 2u, 1u
- Dernière commande (la plus récente, 09/10): 1u
- Commandes précédentes: 2u stable
- Moyenne simple: 1.67u | Moyenne pondérée (poids récent): ~1.3u
- La baisse de 2u → 1u peut indiquer ajustement du besoin réel

**CONTEXTE TEMPOREL**:
- Pas de données N-1 → pas de saisonnalité identifiable
- Aucun outlier détecté (volumes cohérents 1-2u)
- Le client vient JUSTE de commander il y a 7 jours (09/10)

**ÉVALUATION CRITIQUE**:
Dans un contexte B2B agroalimentaire avec pattern mensuel (~30j), une commande 7 jours après la précédente serait **TRÈS atypique**. Cependant, la question porte sur une prédiction pour le 16/10, ce qui suggère qu'il faut anticiper une commande à cette date.

**HYPOTHÈSE RETENUE**:
Si commande effective le 16/10 (contre pattern mensuel), cela peut indiquer:
- Rattrapage de stock suite à vente imprévue
- Ajustement de fréquence (passage d'un rythme mensuel à bi-mensuel)

Étant donné la dernière commande à 1u et le délai très court, je prédis une commande conservatrice de **1u** (besoin ponctuel plutôt que réapprovisionnement complet).

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - commandes espacées de 2-4 semaines, sans jour fixe (mar., mer., jeu.)
- **Saisonnalité**: none
- **Tendance**: Stable - oscillation entre 1-5u (hors outlier à 6u)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
**Analyse rythmique:** Les commandes sont irrégulières avec des intervalles variables (15-28 jours). Aucun pattern hebdomadaire fixe détecté. Dernière commande le 09/10 (jeudi), soit 7 jours avant la date de prédiction (16/10, jeudi).

**Filtrage outliers:** La commande de 6u du 10/09 est atypique comparée aux 4 autres (toutes à 1u ou 5u). La commande la plus récente (09/10) montre un retour à 1u, suggérant que les 6u étaient exceptionnelles.

**Pattern de quantités:** Sur les 5 commandes, 3 sont à 1u, 1 à 5u, 1 à 6u (outlier). La médiane est 1u, la moyenne sans outlier = 2u.

**Tendance récente:** Après le pic à 6u mi-septembre, retour immédiat à 1u le 09/10. Cela suggère un retour à la normale plutôt qu'une hausse structurelle.

**Décision:** Avec un intervalle de seulement 7 jours depuis la dernière commande (plus court que la moyenne), et compte tenu du retour récent à 1u, la demande probable est **1 unité**. Le produit premium bio à faible rotation justifie cette prudence. Pas de saisonnalité identifiable (pas de données N-1).

</details>


<details>
<summary><strong>3. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Intervalles variables (14-17j puis 12j puis 7j) - Accélération récente
- **Saisonnalité**: none
- **Tendance**: Hausse puis stabilisation - De 1-4u vers 1-2u en dernières commandes
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**
Historique des 5 commandes sur ~2 mois :
- 12/08→27/08 : 15 jours (4u→1u)
- 27/08→10/09 : 14 jours (1u→6u) [OUTLIER - pic exceptionnel]
- 10/09→22/09 : 12 jours (6u→2u)
- 22/09→09/10 : 17 jours (2u→1u)
- Aujourd'hui 16/10 : 7 jours depuis dernière commande

Pattern irrégulier avec accélération récente du rythme (de ~14j à 7j). Pas de jour de semaine fixe (mer/mar/mer/lun/jeu).

**FILTRAGE OUTLIERS**
Le 6u du 10/09 est clairement exceptionnel (x3 vs moyenne). Probablement promotion/événement ponctuel. En l'excluant : [4, 1, 2, 1] → moyenne ~2u.

**TENDANCE RÉCENTE**
Après le pic de 6u, retour à petites quantités : 2u puis 1u. La dernière commande (1u) date de seulement 7 jours, ce qui est court par rapport au rythme habituel de ~14j. Cela suggère que le client a commandé récemment et n'a probablement pas encore épuisé son stock.

**DÉCISION**
Baseline de fond : 2u (médiane hors outlier)
Avec seulement 7 jours écoulés vs rythme moyen de 14j, le besoin immédiat est modéré.
Prédiction : **2u** (demande de fond standard, sans effet rattrapage car commande récente)

</details>


<details>
<summary><strong>4. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - intervalles variables (27j, 58j, 64j entre commandes)
- **Saisonnalité**: none
- **Tendance**: Baisse -50% (de 2u vers 1u)
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
Les 3 commandes historiques montrent des intervalles très irréguliers :
- 16/07 → 12/08 : 27 jours
- 12/08 → 09/10 : 58 jours  
- 09/10 → 16/10 : 7 jours (prédiction)

Le dernier achat date du 09/10 (jeudi), soit seulement 7 jours avant la date de prédiction (16/10, aussi jeudi). Ce rythme très court par rapport aux intervalles précédents suggère un réapprovisionnement ponctuel plutôt qu'un rattrapage.

**FILTRAGE OUTLIERS:**
La commande de 2u du 16/07 apparaît comme une exception dans un historique où les 2 autres commandes sont de 1u. Sans contexte additionnel, je la considère comme outlier possible (commande initiale ou test produit).

**TENDANCE:**
Les 2 dernières commandes (12/08 et 09/10) sont toutes deux de 1u, confirmant un niveau de demande stable et faible. Pas de saisonnalité N-1 disponible.

**DÉCISION:**
Étant donné que le client vient tout juste de commander 1u il y a 7 jours, et que le pattern montre une demande sporadique de 1u par commande, la quantité la plus probable pour la prochaine commande reste **1 unité**. La proximité temporelle avec la dernière commande renforce l'hypothèse d'une demande unitaire répétée.

Confidence medium car l'historique est limité (3 points) et le pattern irrégulier.

</details>


<details>
<summary><strong>5. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - Seulement 2 commandes en 3 mois (intervalle ~14j entre les 2 seules commandes observées)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande (données insuffisantes pour confirmer une tendance)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE**: Historique très limité avec seulement 2 commandes observées sur 3 mois (27 août et 10 septembre). Intervalle de 14 jours entre ces 2 commandes, mais impossible de confirmer un pattern régulier. Depuis la dernière commande (10 sept), 36 jours se sont écoulés jusqu'à la date de prédiction (16 oct), ce qui suggère soit un rythme très irrégulier, soit un produit à faible rotation. **FILTRAGE OUTLIERS**: Aucun outlier détecté - les 2 commandes montrent une quantité constante de 1u. Pas de données N-1 pour valider la saisonnalité. **SYNTHÈSE**: Avec uniquement 2 points de données identiques (1u chacun), la baseline théorique est de 1u. L'absence de pattern clair et le long délai depuis la dernière commande créent une forte incertitude. La prédiction la plus probable reste 1u (quantité systématique observée), mais la confiance est faible en raison du manque de données historiques et de l'irrégularité apparente du rythme de commande.

</details>


<details>
<summary><strong>6. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes en 3 mois, intervalle de ~14 jours entre les deux dernières (27 août et 10 septembre), puis 36 jours sans nouvelle commande jusqu'à la date de prédiction (16 octobre)
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante de 1u sur les 2 commandes observées
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Historique très limité (seulement 2 commandes sur 3 mois, aucune donnée N-1). Les 2 commandes montrent un pattern de quantité stable (1u à chaque fois), mais la fréquence est difficile à déterminer avec certitude. L'intervalle entre les 2 commandes était de ~14 jours, et nous sommes maintenant à 36 jours de la dernière commande du 10 septembre. Cela pourrait indiquer soit un abandon du produit, soit un rythme irrégulier propre au client (commandes sporadiques selon besoins). En B2B agroalimentaire, ce profil suggère un produit de niche ou en phase de test. Sans données N-1 pour valider une saisonnalité, et face à un pattern peu établi, je me base sur la demande constante observée de 1u. La prédiction de 1u reflète la quantité la plus probable si une commande a lieu, tout en reconnaissant que la probabilité même qu'une commande se produise est incertaine. Confidence LOW en raison du manque critique de données historiques.

</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier ~15-30j, majoritairement en milieu de semaine (mardi-mercredi)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive : 1u → 2u → 2u → 6u (dernière commande outlier probable)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
- Intervalle entre commandes : 16j (juil-août), 15j (août-août), 14j (août-sept)
- Pattern : commandes relativement régulières tous les 15j environ, en milieu de semaine
- Depuis dernière commande (10 sept) → prédiction (16 oct) = 36 jours : RUPTURE du rythme habituel suggérant possiblement un stock restant

**FILTRAGE OUTLIERS:**
- Progression observée : 1u → 2u → 2u → 6u
- Le 6u du 10/09 est un outlier probable (×3 la quantité habituelle), potentiellement une promotion ou un stock de sécurité
- Sans cet outlier, la demande de fond se stabilise à 2u

**SYNTHÈSE:**
- Pas de données N-1, donc pas d'effet saisonnier détectable
- Baseline stable à 2u (hors outlier)
- La rupture du rythme (36j vs 15j habituels) suggère que le client a encore du stock du 6u
- Hypothèse : retour à la demande normale de 2u

**DÉCISION:** Je recommande 2u comme quantité la plus PROBABLE, correspondant à la demande de fond établie avant l'outlier, avec une confiance moyenne due à l'incertitude sur l'épuisement du stock du 6u.

</details>


<details>
<summary><strong>8. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec intervalle variable (14-15 jours puis 28 jours, puis 44 jours) - Tendance à l'espacement croissant
- **Saisonnalité**: none
- **Tendance**: Baisse récente - espacement des commandes et volume instable
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:** Les intervalles entre commandes montrent un pattern irrégulier et une tendance à l'espacement : 16/07→27/08 (42j), 27/08→10/09 (14j), puis 10/09→16/10 (36j prévu). Aucun jour fixe de commande identifiable (mar/mer alternés). 

**FILTRAGE OUTLIERS:** La commande de 6u du 10/09 est atypique comparée aux volumes de 1u et 5u. Sur 4 commandes : 5u, 1u, 1u, 6u - médiane = 3u.

**VOLUME DE RÉFÉRENCE:** Sans données N-1, je me base uniquement sur les 3 derniers mois. Moyenne = 3,25u. Cependant, l'espacement croissant des commandes suggère soit une baisse d'activité, soit une gestion en flux plus tendu.

**DÉCISION:** En l'absence de pattern clair et avec seulement 4 points historiques, la baseline de 3u (médiane) semble la prédiction la plus prudente et probable. Le dernier pic à 6u pourrait être lié à un événement ponctuel (rentrée septembre). La prochaine commande devrait revenir vers la médiane historique.

**Confiance LOW** due au manque d'historique profond et pattern non stabilisé.

</details>


<details>
<summary><strong>9. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier - 2 commandes seulement sur 3 mois (intervalles : 15 jours entre les 2 commandes). Pattern insuffisant pour établir un cycle fiable.
- **Saisonnalité**: none
- **Tendance**: Stable - Quantité constante à 1u sur les 2 observations, mais historique très limité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Analyse de données extrêmement limitées : seulement 2 commandes observées (12 août et 27 août 2025), toutes deux de 1 unité. 

**Facteurs déterminants:**
1. **Pattern rythmique absent** : Intervalle de 15 jours entre les 2 seules commandes, insuffisant pour établir une fréquence fiable. Le produit semble être en phase de lancement ou à rotation très lente.

2. **Absence de saisonnalité** : Aucune donnée N-1 disponible pour comparaison saisonnière.

3. **Quantités uniformes** : Les 2 commandes historiques sont identiques (1u), suggérant soit des commandes test, soit une demande de fond très faible.

4. **Date de prédiction** : 16 octobre (jeudi) = 50 jours après la dernière commande du 27 août. Cette longue absence suggère soit un abandon du produit, soit un rythme d'achat très sporadique.

**Décision** : En l'absence de pattern clair et avec un historique aussi maigre, je me base sur la seule constante observable : 1 unité par commande. Cependant, la probabilité qu'une commande intervienne précisément le 16 octobre est faible. Si commande il y a, elle sera vraisemblablement de 1u.

**Confidence LOW** justifiée par : historique minimal (2 points), absence de pattern temporel, pas de données N-1, et incertitude sur la continuité du produit dans l'assortiment client.

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
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.7u (13j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.6u (10j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 2 | Stock prédit: 0.8u (24j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: -0.2u (0j restants) → prédit 2u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: 0.5u (6j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: 0.8u (23j restants) → prédit 1u mais non commandé |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Stock prédit: 0.8u (19j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 2 | Stock prédit: 0.2u (7j restants) → prédit 2u mais non commandé |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Stock prédit: -0.1u (-1j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Stock prédit: -0.2u (-1j restants) → prédit 2u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock prédit: -0.7u (-13j restants) → prédit 1u mais non commandé |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.1u (5j restants) → prédit 1u mais non commandé |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Stock prédit: -1.5u (-21j restants) → prédit 1u mais non commandé |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Stock prédit: -0.2u (-9j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 2 | Stock prédit: 0.4u (21j restants) → prédit 2u mais non commandé |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 4 | Stock prédit: -1.2u (-21j restants) → prédit 4u mais non commandé |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 4 | Stock prédit: -0.2u (-3j restants) → prédit 4u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 2 | Stock prédit: -0.6u (-20j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-20T09:02:42.374Z*
