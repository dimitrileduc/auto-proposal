# Rapport Backtest - Client BIO VRAC UCCLE

## Contexte

- **Client** : BIO VRAC UCCLE (ID: 60205)
- **Commande réelle** : S37113
- **Date commande** : 2025-05-28 08:11:24
- **Date cutoff système** : 2025-05-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 8,787 input + 3,196 output = 11,983 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 46.2% | 13 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 63.2% | Score équilibré global |

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
| **MAE** | 1.17 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 10.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 10.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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

## True Positives (6)

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
| [REB08] ReBEL chips premium & bio - piment citron 125g | 10 | 10 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 12 | 14 | 2.0 | 14.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 8 | 8 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 18 | 20 | 2.0 | 10.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 8 | 8 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 5 | 8 | 3.0 | 37.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 10u vs Médiane: 5u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 9u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 5u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 13 à 18 jours (Bi-hebdomadaire variable)
- **Saisonnalité**: none
- **Tendance**: Hausse marquée (+100% sur le dernier cycle)
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'analyse montre une accélération nette du volume sur les trois dernières commandes (4u, 8u, 10u). L'intervalle de temps entre les commandes s'est stabilisé autour de 15-18 jours. La commande du 20/03 (1u) est identifiée comme une anomalie basse ou un test de référencement. La dernière commande du 05/05 à 10u marque un palier de croissance. Étant donné que la date de prédiction (27/05) intervient 22 jours après la dernière saisie, un volume de fond de 9 à 10 unités est nécessaire pour maintenir le stock au vu de la tendance haussière observée.

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 12u vs Médiane: 8u (Réel: 14u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 12u (confidence: medium)
- 📊 **Baseline N-1**: 11.5u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 14u
- 📉 **Erreur LLM**: 2u (14.3%)
- 📉 **Erreur Médiane**: 6u (42.9%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel irrégulier (environ tous les 15-20 jours)
- **Saisonnalité**: none
- **Tendance**: Stable avec alternance de volumes (11-12u vs 2u)
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une alternance systématique entre une commande de réapprovisionnement majeure (11-12 unités) et une commande de complexe d'appoint très faible (2 unités). La dernière commande du 05/05 était de 11u. Cependant, nous sommes le 27/05, soit 22 jours après la dernière commande. Ce délai correspond au cycle constaté entre les grosses commandes (ex: 02/04 au 05/05, en sautant l'appoint du 17/04). L'absence de commande d'appoint à mi-mai suggère un besoin de restockage complet pour maintenir le linéaire bio premium. On privilégie la borne haute du cycle de rotation (12u) pour compenser l'intervalle de 3 semaines.

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 8u vs Médiane: 5u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 8u (confidence: medium)
- 📊 **Baseline N-1**: 6.6u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 3u (37.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme bimensuel flexible, environ tous les 15-18 jours
- **Saisonnalité**: none
- **Tendance**: Hausse progressive +50% sur 2 mois
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'analyse montre une accélération claire de la consommation avec des volumes passant de 1-2u à 6-9u sur les deux derniers mois. Le délai depuis la dernière commande (22 jours) est supérieur à la moyenne récente (15-18 jours), ce qui laisse présager un besoin de réapprovisionnement imminent. La moyenne pondérée des trois dernières commandes (6.6) ajustée par la tendance haussière oriente vers une cible de 8 unités pour couvrir la période à venir.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 18u vs Médiane: 11u (Réel: 20u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 18u (confidence: medium)
- 📊 **Baseline N-1**: 17.5u
- 📊 **Médiane**: 11u
- ✅ **Réel commandé**: 20u
- 📉 **Erreur LLM**: 2u (10.0%)
- 📉 **Erreur Médiane**: 9u (45.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Quinzomadaire (tous les 14-15 jours) principalement le jeudi
- **Saisonnalité**: none
- **Tendance**: Hausse marquée (10u -> 11u -> 19u -> 16u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une accélération nette de la consommation depuis mi-avril. Le rythme initial était de 10-11 unités toutes les deux semaines. Les deux dernières commandes (19u et 16u) indiquent un nouveau palier de consommation. La commande du 05/05 (16u) est intervenue prématurément par rapport au cycle de 14 jours, confirmant une tension sur les stocks. Pour le 27/05, avec un intervalle de 22 jours depuis la dernière saisie, le volume doit couvrir la tendance haute (moyenne récente de 17.5u). On privilégie 18u pour s'aligner sur la dynamique de croissance observée sur les 60 derniers jours.

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 8u vs Médiane: 5u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 8u (confidence: high)
- 📊 **Baseline N-1**: 7.5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 3u (37.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 13 à 15 jours (bi-mensuel)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (de 3u à 8u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande bimensuel avec une tendance haussière marquée sur les trois derniers mois. La dernière commande date d'il y a 22 jours, ce qui dépasse l'intervalle habituel de 14 jours, suggérant un besoin de réapprovisionnement immédiat. La recommandation de 8 unités s'aligne sur le pic de consommation récent tout en stabilisant le volume face à la croissance observée.

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 5u vs Médiane: 3u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 4.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 3u (37.5%)
- 📉 **Erreur Médiane**: 5u (62.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme aléatoire, environ toutes les 2 à 4 semaines
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (1u -> 5u -> 3u -> 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible volumétrie avec une fréquence de commande irrégulière (entre 13 et 28 jours d'intervalle). On observe une tendance haussière lente : la moyenne des deux dernières commandes est de 4.5 unités. La dernière commande (6u) date du 5 mai, soit 22 jours avant la date cible, ce qui correspond au cycle moyen constaté. Étant donné l'absence de saisonnalité N-1 et la variabilité des jours de commande, on se base sur une moyenne pondérée récente légèrement ajustée pour stabiliser la prévision à 5 unités, évitant de sur-réagir à la pointe de 6u tout en restant au-dessus de la moyenne long-terme.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-05 08:42:11: 10u
- 2025-04-17 14:34:07: 8u
- 2025-04-02 07:05:25: 4u
- 2025-03-20 08:04:24: 1u
- 2025-03-06 07:28:26: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: medium)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-05 08:42:11: 11u
- 2025-04-17 14:34:07: 2u
- 2025-04-02 07:05:25: 12u
- 2025-03-06 07:28:26: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 12u (confidence: medium)
**📊 Quantité Réelle**: 14u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-05 08:42:11: 6u
- 2025-04-17 14:34:07: 9u
- 2025-04-02 07:05:25: 5u
- 2025-03-20 08:04:24: 1u
- 2025-03-06 07:28:26: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 8u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-05 08:42:11: 16u
- 2025-04-17 14:34:07: 19u
- 2025-04-02 07:05:25: 10u
- 2025-03-20 08:04:24: 11u
- 2025-03-06 07:28:26: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 18u (confidence: medium)
**📊 Quantité Réelle**: 20u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-05 08:42:11: 7u
- 2025-04-17 14:34:07: 8u
- 2025-04-02 07:05:25: 5u
- 2025-03-20 08:04:24: 3u
- 2025-03-06 07:28:26: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 8u (confidence: high)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-05-05 08:42:11: 6u
- 2025-04-17 14:34:07: 3u
- 2025-04-02 07:05:25: 5u
- 2025-03-06 07:28:26: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 8u

</details>




---

## False Positives (7)

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
| [RISH04] RISH kombucha BIO - smash basil 330ml | 5 | Stock prédit: -3.6u (-28j restants) → prédit 5u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 2 | Stock prédit: -4.9u (-47j restants) → prédit 2u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 2 | Stock prédit: -3.2u (-41j restants) → prédit 2u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 3 | Stock prédit: -4.3u (-45j restants) → prédit 3u mais non commandé |
| [RISH05] RISH kombucha BIO - rose 750ml | 4 | Stock prédit: -6.3u (-41j restants) → prédit 4u mais non commandé |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 3 | Stock prédit: -2.7u (-51j restants) → prédit 3u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 2 | Stock prédit: -1.1u (-32j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:38:25.056Z*
