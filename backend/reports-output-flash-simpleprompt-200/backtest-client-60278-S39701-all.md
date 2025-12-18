# Rapport Backtest - Client D'ICI WEPION

## Contexte

- **Client** : D'ICI WEPION (ID: 60278)
- **Commande réelle** : S39701
- **Date commande** : 2025-10-21 07:43:33
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 7,101 input + 2,407 output = 9,508 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 12 produits prédits, 12 corrects |
| **Rappel** | 85.7% | 14 produits réels, 12 détectés |
| **F1-Score** | 92.3% | Score équilibré global |

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
| **MAE** | 1.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 37.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 47.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -12.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | 6 | 2.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 5 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 5 | 6 | 1.0 | 16.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 5 | 2.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 5 | 10 | 5.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 4u vs Médiane: 5u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.33u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 2u (33.3%)
- 📉 **Erreur Médiane**: 1u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~25-30j) sans jour fixe spécifique
- **Saisonnalité**: none
- **Tendance**: Stable avec légère oscillation (3-5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande environ une fois par mois. La dernière commande date du 1er octobre (5u). Bien que l'intervalle actuel (19 jours) soit légèrement plus court que le cycle précédent (23 jours), le volume moyen sur les 3 derniers points est de 4.33 unités. On observe une alternance 5u - 3u - 5u. En l'absence de données N-1 et compte tenu du profil de type 'chips premium' (rotation modérée), une quantité de 4 unités est la plus probable pour stabiliser les stocks sans sur-stockage.

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 23-28 jours
- **Saisonnalité**: none
- **Tendance**: Hausse légère (2u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande récurrente mensuelle. L'intervalle entre la dernière commande (01/10) et la date de prédiction (20/10) est de 19 jours, ce qui est légèrement plus court que le cycle habituel de ~25 jours, mais la demande s'est stabilisée à 3 unités lors des deux dernières occurrences. La tendance est passée de 2u en août à 3u en septembre/octobre. Étant donné la faible volatilité et l'absence de saisonnalité N-1, le maintien à 3 unités est le plus probable.

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 5u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~25-30 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (3u vers 5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande mensuel régulier avec une accélération de la demande (passage de 3 unités en août/septembre à 5 unités début octobre). L'intervalle depuis la dernière commande (01/10) est de 19 jours, ce qui est légèrement plus court que le cycle habituel de 3-4 semaines, mais cohérent avec la tendance haussière observée. On retient le volume de la commande la plus récente (5u) pour refléter la dynamique actuelle du marché premium/bio sans données de saisonnalité N-1 disponibles.

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 5u vs Médiane: 5u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: high)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 1u (16.7%)
- 📉 **Erreur Médiane**: 1u (16.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel ~26-28 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 5u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une stabilité parfaite avec une quantité constante de 5 unités par commande sur les trois derniers mois. L'intervalle entre les commandes est régulier (26 jours entre août et septembre, 23 jours entre septembre et octobre). La date de prédiction (20 octobre) se situe 19 jours après la dernière commande du 1er octobre, ce qui correspond à la fenêtre habituelle de réapprovisionnement mensuel pour ce client B2B. Aucun signe de croissance ou de saisonnalité n'étant visible, le maintien de la quantité nominale est la stratégie la plus précise (MAPE optimal).

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 4u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 1u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 23 à 28 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (5u vers 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande mensuelle régulière. On observe un passage de 5 unités en août à 3 unités en septembre et octobre, indiquant une stabilisation du fond de rayon à 3 unités. L'intervalle depuis la dernière commande (01/10) est de 19 jours, ce qui est légèrement plus court que le cycle habituel (~26 jours), mais la date de prédiction (lundi 20/10) correspond à un jour de commande déjà pratiqué par le client. Sans promotion identifiée et avec une tendance baissière stabilisée, la quantité la plus probable est le maintien à 3 unités.

</details>


<details>
<summary><strong>6. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 23 à 26 jours (cycle mensuel de 3 à 4 semaines)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (1u -> 2u -> 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilisation de la demande à 2 unités sur les deux derniers cycles (septembre et octobre). Le cycle moyen est d'environ 25 jours ; la commande du 20 octobre intervient 19 jours après la précédente, ce qui suggère un léger avancement du cycle sans pour autant justifier une augmentation de volume au-delà de la tendance actuelle de 2 unités. Aucune donnée N-1 n'est disponible pour ajuster la saisonnalité.

</details>


<details>
<summary><strong>7. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 5u vs Médiane: 4u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 5u (50.0%)
- 📉 **Erreur Médiane**: 6u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~21 à 26 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (de 2u à 6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande mensuel régulier avec une accélération du volume unitaire (passage de 2u à 3u puis 6u sur les trois derniers mois). La dernière commande date du 1er octobre (6u). La commande actuelle au 20 octobre intervient avec une avance de ~10 jours par rapport au cycle de 30 jours, suggérant soit une accélération de la rotation des stocks, soit un réapprovisionnement intermédiaire. Compte tenu de la tendance haussière mais du délai raccourci depuis la dernière livraison, une quantité de 5 unités capture la croissance sans surestimer le besoin immédiat.

</details>


<details>
<summary><strong>8. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (une seule donnée disponible)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée il y a deux mois (août). En l'absence de pattern cyclique détectable (hebdomadaire ou mensuel) et de données historiques N-1, la prédiction s'appuie sur la consommation de fond observée de 1 unité. Bien que le délai depuis la dernière commande soit long, il n'y a pas de preuve statistique d'une accélération de la demande ou d'une saisonnalité spécifique pour ce produit à cette date.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 13:30:34: 5u
- 2025-09-08 10:27:39: 3u
- 2025-08-13 06:26:39: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>2. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 13:30:34: 3u
- 2025-09-08 10:27:39: 3u
- 2025-08-13 06:26:39: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 13:30:34: 5u
- 2025-09-08 10:27:39: 3u
- 2025-08-13 06:26:39: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 13:30:34: 5u
- 2025-09-08 10:27:39: 5u
- 2025-08-13 06:26:39: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: high)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 13:30:34: 3u
- 2025-09-08 10:27:39: 3u
- 2025-08-13 06:26:39: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>6. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 13:30:34: 2u
- 2025-09-08 10:27:39: 2u
- 2025-08-13 06:26:39: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 13:30:34: 6u
- 2025-09-08 10:27:39: 2u
- 2025-08-13 06:26:39: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 10u

</details>


<details>
<summary><strong>8. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-13 06:26:39: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (0)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

*Aucun faux positif (précision = 100%)*

---

## False Negatives (2)

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
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Stock suffisant: 2.3u (59j restants > seuil 30j) |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | Stock suffisant: 1.2u (63j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T11:38:11.413Z*
