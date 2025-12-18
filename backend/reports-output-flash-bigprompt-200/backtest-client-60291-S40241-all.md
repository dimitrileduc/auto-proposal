# Rapport Backtest - Client DOMAINE DE RONCHINNE

## Contexte

- **Client** : DOMAINE DE RONCHINNE (ID: 60291)
- **Commande réelle** : S40241
- **Date commande** : 2025-11-12 09:14:35
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 33,757 input + 6,338 output = 40,095 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.0% | 27 produits prédits, 17 corrects |
| **Rappel** | 70.8% | 24 produits réels, 17 détectés |
| **F1-Score** | 66.7% | Score équilibré global |

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
| **MAE** | 0.53 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 32.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 32.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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

## True Positives (17)

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
| [RIT05] RITCHIE Cola - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv17] Mélange de noix bio vrac 2,75kg | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH01] RISH kombucha BIO - original 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (7 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (4u -> 2u -> 3u -> 1u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse montre une transition claire du jour de commande : historiquement le mercredi en septembre, puis stabilisé sur le mardi depuis le 28 octobre. L'intervalle est strictement hebdomadaire (7 jours). Bien que la dernière commande (1u) soit faible, la moyenne des quatre dernières commandes (hors outlier de 4u) se situe à 2u. Le pic initial de 4u en septembre semble être un outlier de lancement ou de remplissage de stock initial. La tendance récente oscille entre 1u et 3u, rendant la prédiction de 2 unités la plus probable pour minimiser le MAPE.

</details>


<details>
<summary><strong>2. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (7 jours) avec transition récente du mercredi vers le mardi
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (4u -> 2u -> 3u -> 1u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse montre une stabilisation du jour de commande le mardi. Sur les 5 dernières commandes, on observe une tendance baissière : après un pic à 4u (outlier potentiel dans cette petite série), le volume a oscillé entre 1u et 3u. La moyenne des deux dernières semaines sur le créneau du mardi est précisément de 2u (3u le 28/10 et 1u le 04/11). Étant donné la nature B2B et la faible rotation constatée la semaine dernière (1u), une remontée légère à 2u est la prédiction la plus probable pour maintenir le stock sans sur-stocker face à la tendance baissière immédiate.

</details>


<details>
<summary><strong>3. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - LLM: 5u vs Médiane: 5u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle intermittent devenant hebdomadaire (~7-14j ou bi-mensuel)
- **Saisonnalité**: none
- **Tendance**: Hausse stabilisée à 5u
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'historique montre une accélération de la demande. Après deux commandes espacées de 15 jours en septembre/octobre avec des volumes inconsistants (5u puis 1u), la commande la plus récente du mardi 4 novembre à 5u semble établir un nouveau rythme hebdomadaire de fond. Le point à 1u est considéré comme un outlier (sous-stockage ou ajustement ponctuel) car les deux autres points de données convergent vers 5u. La date de prédiction (mardi 11 novembre) correspond exactement au jour de la dernière commande, rendant la prédiction de 5u hautement probable pour maintenir le stock.

</details>


<details>
<summary><strong>4. [fsv06] Noix du Brésil nature bio vrac 3kg</strong> - LLM: 5u vs Médiane: 5u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire suspectée (dernière période) vs Mensuelle
- **Saisonnalité**: none
- **Tendance**: Stable à 5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux commandes de 5 unités. Entre la commande du 17/09 et celle du 04/11, il n'y a pas de fréquence claire, mais la commande la plus récente (il y a exactement 7 jours) a eu lieu un mardi pour 5 unités. En suivant la règle de priorité à la tendance récente et au cycle de jour, la probabilité d'une commande de réapprovisionnement de 5 unités ce mardi 11/11 est très élevée, surtout dans un contexte B2B où les volumes par colisage (vrac 3kg) sont souvent fixes.

</details>


<details>
<summary><strong>5. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme mensuel à bimensuel
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une stabilisation à 1 unité (2.2kg) lors des deux dernières commandes après un pic isolé de 3 unités en septembre (considéré comme outlier ou stock initial de rentrée). Le client a commandé exactement 7 jours auparavant (mardi 04/11). Bien que le rythme global semble mensuel (octobre vs novembre), la commande du 04/11 suggère un réapprovisionnement récent. Étant donné la règle de prédiction pour le 11/11 (mardi), et la répétition de la valeur unitaire, la quantité la plus probable est le maintien à 1 unité.

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35j)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (4u vers 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle très régulier d'environ 1 mois entre chaque commande. On observe une érosion constante des volumes : 4 unités en août, 3 en septembre, puis 2 en octobre. La date de prédiction (11 novembre) suit de 14 jours la dernière commande, mais tombe un mardi, jour favori du client. Cependant, compte tenu de la tendance baissière marquée et du volume déjà faible (2u), il est hautement probable que la commande se stabilise à 2 unités plutôt que de descendre à 1, afin de maintenir un minimum de stock présentoir.

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 34-35 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (4u -> 2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de réapprovisionnement mensuel plutôt que hebdomadaire, avec une préférence marquée pour le mardi. La tendance de consommation sur ce produit spécifique (ReBEL chips) est en nette diminution constante, passant de 4 unités en août à 1 unité en octobre. Étant donné que la date de prédiction (11 novembre) respecte à la fois le jour habituel (mardi) et l'intervalle temporel récent (environ 2 semaines après la dernière commande du 28/10), la quantité la plus probable sans signe de reprise de croissance est de maintenir le dernier niveau observé à 1 unité.

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-30 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (alternance 1u/2u avec maintien récent à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit suit un cycle de commande mensuel très régulier, principalement le mardi. Les intervalles entre les commandes sont de 28 jours (août-sept), 29 jours (sept-oct), puis une commande intermédiaire fin octobre après 27 jours. La quantité alterne entre 1u et 2u, mais la commande la plus récente du 28 octobre était de 2u, et la date de prédiction (11 novembre) se situe exactement 14 jours après, ce qui pourrait correspondre à un raccourcissement du cycle ou à un réapprovisionnement de stabilisation. Basé sur la tendance de la dernière commande et le fait que le mardi est le jour de commande privilégié historiquement, je prévois 2 unités.

</details>


<details>
<summary><strong>9. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire à bimensuel (7 à 14 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u avec un ralentissement du rythme
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité quasi-totale à 2 unités. Bien que la fréquence de commande se soit espacée en octobre, la quantité unitaire reste constante à 2u depuis le mois de septembre. Le pic à 3u en août est isolé et ancien. La date de prédiction (mardi) correspond à l'un des deux jours de commande habituels du client, validant la pertinence de la commande.

</details>


<details>
<summary><strong>10. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme mensuel irrégulier (35 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse (de 3u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité avec seulement deux points de données espacés de 35 jours. Le volume le plus récent (septembre) est de 1 unité, en baisse par rapport aux 3 unités d'août. Bien que la date de prédiction soit un mardi (jour de la commande d'août), rien n'indique une remontée du volume ou un cycle hebdomadaire dense. En l'absence de données N-1 et face à une tendance récente de 1u, la prédiction la plus probable pour maintenir une précision élevée est l'alignement sur la dernière valeur connue.

</details>


<details>
<summary><strong>11. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (donnée unique)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée (1 unité en septembre). En l'absence de pattern récurrent ou de saisonnalité N-1, la dernière valeur connue (1u) constitue la meilleure estimation de la demande de fond. Conformément aux règles de gestion des jours hors cycle, bien que la date demandée soit un mardi et l'historique un mercredi, nous prédisons le maintien du volume minimal nécessaire pour couvrir la prochaine commande probable.

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [RIT05] RITCHIE Cola - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:37:34: 1u
- 2025-10-28 07:14:16: 3u
- 2025-10-01 07:17:25: 2u
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:37:34: 1u
- 2025-10-28 07:14:16: 3u
- 2025-10-01 07:17:25: 2u
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:35:39: 5u
- 2025-10-01 07:17:25: 1u
- 2025-09-17 06:33:32: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>4. [fsv06] Noix du Brésil nature bio vrac 3kg</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:35:39: 5u
- 2025-09-17 06:33:32: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>5. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-04 13:35:39: 1u
- 2025-10-01 07:17:25: 1u
- 2025-09-17 06:33:32: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 07:14:16: 2u
- 2025-09-24 06:16:03: 3u
- 2025-08-19 11:00:28: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 07:14:16: 1u
- 2025-09-24 06:16:03: 2u
- 2025-08-19 11:00:28: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-28 07:14:16: 2u
- 2025-10-01 07:17:25: 1u
- 2025-09-02 06:42:42: 1u
- 2025-08-19 11:00:28: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 07:17:25: 2u
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 2u
- 2025-09-02 06:42:42: 2u
- 2025-08-19 11:00:28: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:16:03: 1u
- 2025-08-19 11:00:28: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 06:34:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
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
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Stock prédit: 0.8u (21j restants) → prédit 1u mais non commandé |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Stock prédit: 0.6u (7j restants) → prédit 1u mais non commandé |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | Stock prédit: 0.5u (5j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 1.0u (13j restants) → prédit 2u mais non commandé |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | Stock prédit: -0.7u (-16j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 2 | Stock prédit: -0.1u (-3j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | Stock prédit: -0.1u (-3j restants) → prédit 2u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 | Stock prédit: 0.0u (1j restants) → prédit 2u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock prédit: -0.5u (-17j restants) → prédit 1u mais non commandé |
| [OCC05] OCCHIOLINO premium arancello 500ml | 1 | Stock prédit: -0.6u (-38j restants) → prédit 1u mais non commandé |


---

## False Negatives (7)

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
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock suffisant: 1.5u (34j restants > seuil 30j) |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Stock suffisant: 0.9u (52j restants > seuil 30j) |
| [fsv04] Amande nature bio vrac 2,8 kg | 5 | Stock suffisant: 4.3u (38j restants > seuil 30j) |
| [fsv18] Mendiant bio vrac 2,8kg | 2 | Stock suffisant: 1.7u (33j restants > seuil 30j) |
| [fsv08] Banana chips bio vrac 1,6kg | 5 | Stock suffisant: 4.3u (34j restants > seuil 30j) |
| [fsv03] Noisette nature bio vrac 2,8kg  | 2 | Stock suffisant: 1.8u (59j restants > seuil 30j) |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:12:34.486Z*
