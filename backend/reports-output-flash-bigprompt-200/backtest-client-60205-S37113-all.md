# Rapport Backtest - Client BIO VRAC UCCLE

## Contexte

- **Client** : BIO VRAC UCCLE (ID: 60205)
- **Commande réelle** : S37113
- **Date commande** : 2025-05-28 08:11:24
- **Date cutoff système** : 2025-05-27 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 16,362 input + 3,601 output = 19,963 total


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
| **MAE** | 1.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 11.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 11.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -11.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 11 | 14 | 3.0 | 21.4% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 7 | 8 | 1.0 | 12.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 18 | 20 | 2.0 | 10.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 8 | 8 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 6 | 8 | 2.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


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
- **Pattern temporel**: Bimensuel (tous les 14-18 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (4u -> 8u -> 10u)
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'historique montre une progression claire du volume de commandes sur les trois derniers points (4u, 8u, 10u), suggérant une adoption croissante du produit. Bien qu'il n'y ait pas de jour de commande fixe (jeudi, mercredi, lundi), le cycle moyen est de 16 jours. La dernière commande datant du 5 mai, une commande pour le 27 mai s'inscrit parfaitement dans ce rythme bimensuel. La valeur de 1u identifiée le 20/03 est traitée comme un outlier négatif ou un test. Je retiens la dernière valeur de 10u qui reflète la tendance de croissance actuelle.

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 11u vs Médiane: 8u (Réel: 14u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 11u (confidence: medium)
- 📊 **Baseline N-1**: 11.5u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 14u
- 📉 **Erreur LLM**: 3u (21.4%)
- 📉 **Erreur Médiane**: 6u (42.9%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-32 jours) avec réassorts intermédiaires ponctuels
- **Saisonnalité**: none
- **Tendance**: Stable sur les volumes principaux (~11-12u)
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'analyse montre deux types de commandes : des commandes de stock principal (11u et 12u) espacées d'environ un mois, et des micro-réassorts de 2u. La dernière commande principale date du 05/05 (11u). Le 27/05 se situe 22 jours après la dernière commande, approchant la fin du cycle mensuel habituel. Étant donné que le volume de fond est stable autour de 11-12u lorsqu'il ne s'agit pas de micro-réajustements, la quantité la plus probable pour la prochaine commande significative est de 11u. Le mardi 27/05 est considéré comme une date de passage de commande probable pour le réapprovisionnement du mois de juin.

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 7u vs Médiane: 5u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 7u (confidence: medium)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 1u (12.5%)
- 📉 **Erreur Médiane**: 3u (37.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (environ tous les 14-18 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (de 2u à 6u)
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'historique montre une croissance constante du volume de commande (2u -> 5u -> 9u -> 6u). Bien que le volume ait légèrement baissé lors de la dernière commande (6u), la tendance générale sur les 3 derniers mois reste positive. L'intervalle moyen entre les commandes est de 17 jours. La dernière commande datant du 5 mai, la commande de fin mai (27 mai, soit 22 jours plus tard) s'inscrit parfaitement dans le cycle. Étant donné l'augmentation de la demande sur ce produit premium bio et le délai légèrement plus long depuis la dernière commande, une quantité de 7 unités (légèrement au-dessus de la dernière valeur mais en dessous du pic de 9u) est la plus probable.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 18u vs Médiane: 11u (Réel: 20u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 18u (confidence: high)
- 📊 **Baseline N-1**: 17.5u
- 📊 **Médiane**: 11u
- ✅ **Réel commandé**: 20u
- 📉 **Erreur LLM**: 2u (10.0%)
- 📉 **Erreur Médiane**: 9u (45.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel (environ tous les 14-18 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (de 10u à 19u, stabilisation récente)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une accélération du volume sur les deux derniers mois, passant de 10-11u à une moyenne de 17.5u sur les deux dernières commandes (19u et 16u). L'intervalle moyen entre les commandes est de 16 jours. La dernière commande datant du 05 mai, la prédiction pour le 27 mai (22 jours plus tard) correspond parfaitement à la fenêtre de réapprovisionnement attendue pour ce client. Compte tenu de la légère baisse entre les deux dernières livraisons (19u vers 16u) mais de la croissance globale du produit, une quantité de 18u (moyenne pondérée orientée vers le haut) est la plus probable pour maintenir le stock.

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 8u vs Médiane: 5u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 8u (confidence: medium)
- 📊 **Baseline N-1**: 7.5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 3u (37.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 14 à 18 jours (toutes les 2 à 2.5 semaines environ)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (3u vers 8u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une progression constante du volume de commande depuis mars (3, 4, 5, 8, 7). La fréquence de commande est d'environ une commande par quinzaine. La dernière commande date du 05 mai, soit 22 jours avant la date de prédiction (27 mai). Un réapprovisionnement est donc imminent ou déjà nécessaire. Bien que le mardi ne soit pas le jour historique dominant (plutôt jeudi), la tendance à la hausse et la nécessité de stock suite à l'intervalle de 3 semaines depuis la dernière commande justifient une quantité alignée sur les deux derniers volumes les plus élevés (7u et 8u).

</details>


<details>
<summary><strong>6. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 6u vs Médiane: 3u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 5.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 2u (25.0%)
- 📉 **Erreur Médiane**: 5u (62.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle irrégulier tendant vers un cycle mensuel (~19-30j)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (1u -> 3u -> 5u -> 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une croissance constante du volume par commande depuis mars, passant de 1 unité à 6 unités. Bien que les intervalles de temps soient irréguliers (approximativement toutes les 3 à 4 semaines), la dernière commande du 05/05 (6u) marque le point le plus haut de la tendance. Le mardi 27/05 se situe 22 jours après la dernière commande, ce qui s'inscrit parfaitement dans la fenêtre de réapprovisionnement habituelle du client. Étant donné la dynamique positive du produit (chips premium bio), je maintien la quantité de la dernière commande pour valider la stabilité de la hausse.

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

**✅ Quantité LLM**: 11u (confidence: medium)
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

**✅ Quantité LLM**: 7u (confidence: medium)
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

**✅ Quantité LLM**: 18u (confidence: high)
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

**✅ Quantité LLM**: 8u (confidence: medium)
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

**✅ Quantité LLM**: 6u (confidence: medium)
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
| [RISH01] RISH kombucha BIO - original 330ml | 2 | Stock prédit: -4.3u (-45j restants) → prédit 2u mais non commandé |
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

*Rapport généré automatiquement le 2025-12-18T11:17:02.130Z*
