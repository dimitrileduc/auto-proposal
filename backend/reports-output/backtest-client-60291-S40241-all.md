# Rapport Backtest - Client DOMAINE DE RONCHINNE

## Contexte

- **Client** : DOMAINE DE RONCHINNE (ID: 60291)
- **Commande réelle** : S40241
- **Date commande** : 2025-11-12 09:14:35
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 27,348 input + 46,618 output = 73,966 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.0% | 27 produits prédits, 17 corrects |
| **Rappel** | 65.4% | 26 produits réels, 17 détectés |
| **F1-Score** | 64.2% | Score équilibré global |

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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 60.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 70.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 10.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 13 | Avec erreur |

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
| [fsv06] Noix du Brésil nature bio vrac 3kg | 0 | 5 | 5.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RISH01] RISH kombucha BIO - original 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2.4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (cycle de 7 jours, principalement le mardi ou mercredi)
- **Saisonnalité**: none
- **Tendance**: Stable avec une légère baisse (moyenne de 2.4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle hebdomadaire très régulier de 7 jours (excepté un saut en octobre). La dernière commande a eu lieu il y a exactement 7 jours (mardi 04/11), ce qui rend une commande imminente dans la fenêtre des 30 jours (probablement aujourd'hui ou dans les jours qui suivent). La quantité moyenne par commande est de 2,4 unités. Compte tenu de la dernière commande à 1u et de la précédente à 3u, une recommandation de 2 unités pour la prochaine commande unique est la plus probable pour maintenir le stock sans sur-stocker.

</details>


<details>
<summary><strong>2. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2.4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Hebdomadaire (7 jours), principalement le mardi ou mercredi
- **Saisonnalité**: none
- **Tendance**: Stable avec un volume moyen de 2.4u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une fréquence hebdomadaire claire (7 jours d'intervalle entre les commandes du 17/09, 24/09 et 01/10, puis reprise du cycle le 28/10 et 04/11). La dernière commande ayant eu lieu il y a exactement 7 jours (le mardi 04/11), une commande est attendue au cours de la semaine actuelle (autour du 11/11). Le volume moyen après nettoyage est de 2.4 unités. Conformément à la règle de ne pas cumuler les commandes dans les 30 jours, nous recommandons une quantité de 2 unités pour la prochaine occurrence uniquement.

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
- **Pattern temporel**: Mensuel irrégulier entre 14 et 34 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 5u
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'historique montre deux commandes de 5u séparées par une petite commande intermédiaire de 1u considérée comme un outlier ou un ajustement technique. L'intervalle moyen pondéré entre les commandes significatives suggère une fréquence d'environ 24 à 28 jours. La dernière commande ayant eu lieu le 4 novembre (5u), la prochaine est prévue autour de la fin novembre ou du début décembre, ce qui se situe à l'intérieur de la fenêtre des 30 prochains jours. Nous préconisons le volume nominal de 5u pour cette unique prochaine commande.

</details>


<details>
<summary><strong>4. [fsv06] Noix du Brésil nature bio vrac 3kg</strong> - LLM: 0u vs Médiane: 5u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 5u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle long identifié d'environ 48 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un historique limité à deux commandes séparées par un intervalle de 48 jours (du 17/09 au 04/11). La dernière commande ayant eu lieu il y a seulement 7 jours, et le cycle observé suggérant une récurrence tous les mois et demi environ, la prochaine commande est statistiquement prévue autour du 22 décembre. Cette date tombant en dehors de la fenêtre d'analyse des 30 prochains jours (clôture le 11/12), aucune commande n'est anticipée pour cette période. Le volume habituel de 5 unités (15kg) semble couvrir les besoins du client pour une période supérieure à un mois.

</details>


<details>
<summary><strong>5. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (intervalles de 14 à 34 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique est limité à trois points de données. Après une commande initiale de 3 unités en septembre (considérée comme un remplissage initial ou outlier), le client a stabilisé sa consommation à 1 unité par commande. L'intervalle moyen entre les commandes est d'environ 24 à 30 jours. La dernière commande ayant eu lieu le 4 novembre, la prochaine est statistiquement attendue début décembre, ce qui se situe à l'intérieur de notre fenêtre de 30 jours. Compte tenu de la tendance récente et de la nature stable du produit, une quantité de 1 unité est recommandée pour la prochaine commande unique.

</details>


<details>
<summary><strong>6. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 35 jours (médiane : 35j)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive du volume (-1u par commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très stable de 34 à 36 jours. La dernière commande datant du 28/10/2025, la prochaine commande est prévue autour du mardi 02/12/2025, ce qui se situe bien dans la fenêtre de 30 jours (avant le 11/12/2025). Bien que la tendance montre une réduction de volume (4, puis 3, puis 2 unités), le cycle temporel est d'une grande fiabilité. La quantité recommandée pour la prochaine commande unique est de 2 unités, correspondant au dernier volume observé afin de stabiliser le niveau de stock face à la baisse de tendance.

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
- **Pattern temporel**: Cycle mensuel régulier avec un intervalle de 34 à 36 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive identifiée (4u > 2u > 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun événement exceptionnel détecté, bien que les volumes soient faibles. Étape 2 : Absence de données N-1 pour confirmer une saisonnalité, impact considéré comme nul. Étape 3 : On observe une tendance baissière marquée avec une division par 2 du volume à chaque commande sur les 3 derniers mois. Cependant, la fréquence est très stable (34-36 jours). Étape 4 : La dernière commande date du 2025-10-28. En appliquant le cycle habituel de 35 jours, la prochaine commande est prévue autour du 02/12/2025, ce qui se situe bien dans la fenêtre des 30 prochains jours. Malgré la baisse de volume, la quantité minimale de 1 unité est retenue pour la prochaine commande unique.

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel stabilisé d'environ 28 jours avec une préférence marquée pour le mardi
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1.5u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont faibles (1-2u) et constants. Étape 2: Pas de données N-1, mais la stabilité entre août et octobre suggère une faible sensibilité saisonnière sur ce volume. Étape 3: Le cycle s'est stabilisé entre 27 et 29 jours (moyenne de 28 jours) sur les trois derniers mois. Étape 4: La dernière commande (28/10) projetée à +28 jours place la suivante autour du 25 novembre, soit dans la fenêtre des 30 jours. Bien que le besoin théorique soit de 1.5u, l'alternance historique (2, 1, 1, 2) et l'absence de tendance haussière suggèrent une commande de 1 unité pour la prochaine échéance.

</details>


<details>
<summary><strong>9. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Initialement bimensuel (14-15j) puis accélération hebdomadaire (7j) en fin de période active.
- **Saisonnalité**: weak
- **Tendance**: Instable - Silence radio depuis 41 jours après une phase de forte activité.
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
ÉTAPE 1: La consommation est très stable à 2 unités par commande, la commande de 3u en août est considérée comme un léger ajustement de stock initial. ÉTAPE 2: La saisonnalité pour ce type de boisson soft est faible en novembre en B2B, on se base sur la demande de fond. ÉTAPE 3: On observe une rupture brutale du rythme depuis le 1er octobre (41 jours sans commande). Soit le client a surstocké lors des commandes hebdomadaires de fin septembre, soit la demande a chuté. ÉTAPE 4: Le cycle médian étant de 7 à 14 jours, un réapprovisionnement est statistiquement attendu. Même avec le retard actuel, il est probable qu'une commande de 'maintien' de 2 unités (le conditionnement standard semble être de 2) survienne dans les 30 prochains jours pour reconstituer le stock tampon.

</details>


<details>
<summary><strong>10. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec un intervalle observé de 36 jours, actuellement en dépassement (48 jours)
- **Saisonnalité**: strong
- **Tendance**: Baisse de volume (3u vers 1u) et ralentissement de la fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un historique limité à deux commandes. Le client a passé sa dernière commande le 24 septembre (1u), soit il y a 48 jours, dépassant l'intervalle précédent de 36 jours. Bien que la tendance de volume soit techniquement à la baisse (3u puis 1u), la nature du produit (chips premium à la truffe) suggère une forte saisonnalité positive pour la période des fêtes de fin d'année. Un réapprovisionnement est donc très probable d'ici le 11 décembre pour préparer les ventes de décembre. On recommande une quantité de 2 unités, correspondant à la moyenne historique, pour couvrir la demande de la prochaine commande sans surstocker.

</details>


<details>
<summary><strong>11. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande unique isolée (ponctuelle)
- **Saisonnalité**: none
- **Tendance**: Inactif (aucune commande depuis 55 jours)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une seule commande de 1 unité le 17 septembre 2025. Depuis cette date, soit un intervalle de 55 jours jusqu'à aujourd'hui (11 novembre), aucune activité n'a été enregistrée. Une quantité de 1 unité pour une boisson de 330ml en B2B s'apparente à un test ou un échantillon plutôt qu'à une consommation de fond. Aucun cycle n'étant établi et le délai écoulé dépassant largement le cadre d'un approvisionnement standard pour ce type de produit, la probabilité d'une commande dans les 30 prochains jours est jugée négligeable.

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

**✅ Quantité LLM**: 2u (confidence: high)
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

**✅ Quantité LLM**: 0u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 2u (confidence: high)
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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>10. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:16:03: 1u
- 2025-08-19 11:00:28: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 06:34:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
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
| [RIT01] RITCHIE Orange - verre 275ml | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 1.0u (13j restants) → prédit 2u mais non commandé |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | Stock prédit: -0.7u (-16j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 2 | Stock prédit: -0.1u (-3j restants) → prédit 2u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | Stock prédit: -0.1u (-3j restants) → prédit 2u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 | Stock prédit: 0.0u (1j restants) → prédit 2u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock prédit: -0.5u (-17j restants) → prédit 1u mais non commandé |
| [OCC05] OCCHIOLINO premium arancello 500ml | 1 | Stock prédit: -0.6u (-38j restants) → prédit 1u mais non commandé |


---

## False Negatives (9)

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
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -0.1u (-2j) mais client a commandé 1u |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 5 | LLM avait prédit 0 (pas de besoin) avec stock: 4.1u (29j) mais client a commandé 5u |
| [fsv04] Amande nature bio vrac 2,8 kg | 5 | Stock suffisant: 4.3u (38j restants > seuil 30j) |
| [fsv18] Mendiant bio vrac 2,8kg | 2 | Stock suffisant: 1.7u (33j restants > seuil 30j) |
| [fsv08] Banana chips bio vrac 1,6kg | 5 | Stock suffisant: 4.3u (34j restants > seuil 30j) |
| [fsv03] Noisette nature bio vrac 2,8kg  | 2 | Stock suffisant: 1.8u (59j restants > seuil 30j) |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T19:53:34.200Z*
