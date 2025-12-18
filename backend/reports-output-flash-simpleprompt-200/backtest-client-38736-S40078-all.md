# Rapport Backtest - Client CRF MARKET BEAURAING DEMARS

## Contexte

- **Client** : CRF MARKET BEAURAING DEMARS (ID: 38736)
- **Commande réelle** : S40078
- **Date commande** : 2025-11-04 13:40:54
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 19
- **Tokens**: 15,142 input + 5,049 output = 20,191 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.2% | 19 produits prédits, 12 corrects |
| **Rappel** | 48.0% | 25 produits réels, 12 détectés |
| **F1-Score** | 54.5% | Score équilibré global |

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
| **MAE** | 0.42 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 22.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -15.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
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
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD010] LD Organic Truffle Spread 135 g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD011] LD Organic Kids Spread 180 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande spot / irrégulière (intervalle 30-60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u -> 2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande sporadique avec un volume très faible (1-3 unités) par commande. Aucun pattern de jour fixe n'est identifié. Bien que la dernière commande (1u) date de 26 jours, ce qui pourrait suggérer une récurrence mensuelle approchante, la tendance globale du volume par commande est en baisse constante depuis un an (passant de 3 à 1 unité). Sans signe de reprise ou de promotion, la quantité la plus probable pour cette commande de début novembre est le maintien du volume minimal de 1 unité.

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique et irrégulière (60-90 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande erratique de faible volume. La dernière commande date de 26 jours (8 octobre), alors que l'intervalle moyen historique est beaucoup plus long (environ 2 à 3 mois). Cependant, historiquement, il n'y a jamais plus de 1u ou 2u par commande. Étant donné l'absence de régularité hebdomadaire et le fait qu'une unité a déjà été commandée en octobre, la probabilité d'un réapprovisionnement immédiat le 3 novembre est faible, mais si commande il y a, elle sera limitée au minimum unitaire (1u) pour reconstituer le stock de sécurité.

</details>


<details>
<summary><strong>3. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (2u vers 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une cadence de commande mensuelle extrêmement régulière (intervalle de 28 à 30 jours). On observe cependant une érosion du volume passant de 2 unités en août/septembre à seulement 1 unité en octobre. La date de prédiction (3 novembre) arrive exactement 26 jours après la dernière commande, s'insérant parfaitement dans le cycle habituel de début de mois. Compte tenu de la tendance baissière récente et de la nature du produit (pâte à tartiner bio 180g), le volume le plus probable pour maintenir le stock sans sur-stockage est de 1 unité.

</details>


<details>
<summary><strong>4. [LD010] LD Organic Truffle Spread 135 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (une seule donnée historique)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée il y a environ quatre semaines. En l'absence de cycles récurrents ou de données saisonnières N-1, la prédiction repose sur la répétition du volume unitaire le plus récent. Le changement de jour de commande (lundi contre mercredi) ne permet pas encore d'identifier un pattern logistique spécifique.

</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.6u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 30 et 60 jours, principalement les lundis et mardis
- **Saisonnalité**: none
- **Tendance**: Stable entre 1u et 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande faible mais persistante avec un volume modal de 2 unités. Bien que les intervalles soient irréguliers, on observe une stabilisation à 1.5u-2u par commande sur les deux dernières années. La dernière commande datant du 9 septembre (il y a presque 8 semaines), le stock client est probablement épuisé. Au vu du cumul des commandes du 11 août (3u au total sur la journée), un arrondi à 2 unités pour ce lundi de novembre est la prédiction la plus précise pour couvrir le besoin sans surstockage.

</details>


<details>
<summary><strong>6. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 3 a 4 mois environ)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et sporadique avec un intervalle moyen de 3-4 mois entre les commandes. La dernière commande date de septembre 2025 (il y a 2 mois). Bien que le cycle habituel ne soit pas encore tout à fait atteint, la fréquence historique et la stabilité des volumes (1u à 2u) suggèrent une commande minimale de 1 unité. L'absence de saisonnalité marquée en octobre/novembre N-1 renforce l'hypothèse d'un besoin de réapprovisionnement de base.

</details>


<details>
<summary><strong>7. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique et à l'unité, jour habituel: lundi
- **Saisonnalité**: none
- **Tendance**: Stable à 1-3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un volume extrêmement faible et une fréquence de commande très espacée (plusieurs mois d'intervalle). La dernière commande en août 2025 était de 1 unité un lundi. La commande N-1 de juin 2024 était de 3 unités également un lundi. En l'absence de données de rotation quotidiennes suggérant un besoin supérieur, et compte tenu de la faible rotation structurelle du produit sur ce point de vente, la prédiction la plus probable est le maintien d'une commande à l'unité (1u) pour couvrir le besoin immédiat.

</details>


<details>
<summary><strong>8. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques à long intervalle (> 2 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec seulement deux points de données sur 15 mois. La commande la plus récente (août 2025) était de 1 unité. Bien que la commande N-1 d'août 2024 fût de 2 unités, il n'y a pas de preuve d'une accélération de la demande ou d'une saisonnalité spécifique pour ce condiment en novembre. Le volume de fond le plus probable pour ce type de produit de niche en format 250ml est l'unité simple pour du réassort de stock de sécurité.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-22 09:07:28: 3u
- 2024-07-30 08:36:52: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:00:06: 2u
- 2024-08-22 09:07:28: 1u
- 2024-06-10 10:53:09: 1u
- 2024-06-05 12:10:16: 2u
- 2024-04-15 11:51:21: 2u
- 2024-03-14 08:15:53: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [LD013] LD Tuscan Organic Spread 180 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u
- 2025-09-09 10:48:36: 2u
- 2025-08-11 13:29:06: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [LD010] LD Organic Truffle Spread 135 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 10:48:36: 2u
- 2025-08-11 13:29:06: 1u
- 2025-08-11 08:24:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 09:57:13: 2u
- 2024-08-22 09:07:28: 1u
- 2024-06-24 13:12:37: 1u
- 2024-04-15 11:51:21: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 10:48:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:00:06: 1u
- 2024-07-30 08:36:52: 1u
- 2024-04-30 10:01:21: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-11 13:29:06: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-10 10:53:09: 3u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-11 13:29:06: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-22 09:07:28: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

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
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Stock prédit: 1.8u (13j restants) → prédit 4u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 3 | Stock prédit: 1.5u (24j restants) → prédit 3u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Stock prédit: 0.0u (1j restants) → prédit 2u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Stock prédit: 0.0u (1j restants) → prédit 2u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | Stock prédit: -1.3u (-20j restants) → prédit 3u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Stock prédit: -0.2u (-8j restants) → prédit 2u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Stock prédit: -0.2u (-7j restants) → prédit 2u mais non commandé |


---

## False Negatives (13)

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
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock suffisant: 0.7u (55j restants > seuil 30j) |
| [LD006] LD Tartinade Olives bio 180g   | 3 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD004] LD Tartinade Tomate Basilic bio 180g | 3 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD015] LD Onion Spread 180g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD008] LD Tartinade Pois chiches bio 180g   | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 3 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD012] LD Organic Samphire Spread 135 g | 2 | Stock suffisant: 1.4u (50j restants > seuil 30j) |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:36:59.503Z*
