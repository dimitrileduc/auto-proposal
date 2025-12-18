# Rapport Backtest - Client CRF MARKET BEAURAING DEMARS

## Contexte

- **Client** : CRF MARKET BEAURAING DEMARS (ID: 38736)
- **Commande réelle** : S40078
- **Date commande** : 2025-11-04 13:40:54
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 19
- **Tokens**: 28,057 input + 5,489 output = 33,546 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.2% | 19 produits prédits, 12 corrects |
| **Rappel** | 85.7% | 14 produits réels, 12 détectés |
| **F1-Score** | 72.7% | Score équilibré global |

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
- **Pattern temporel**: Ponctuel à très faible fréquence (~30-60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u -> 2u -> 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un produit à très faible rotation avec une tendance baissière marquée (passant de 3 unités en 2024 à 1 unité lors de la dernière commande d'octobre 2025). Entre la dernière commande (08/10) et la date de prédiction (03/11), il s'est écoulé moins d'un mois, ce qui est court pour ce type de référence. Cependant, conformément aux consignes de ne pas prédire 0 pour les jours hors cycle et de privilégier la tendance la plus récente, la quantité de 1 unité est retenue comme le volume de fond minimal probable pour la prochaine réactivation du besoin client.

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (environ 1 commande tous les 45 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à faible rotation avec une fréquence de commande irrégulière mais une prédilection pour le lundi (57% des cas). La tendance récente (dernière commande en octobre 2025) et la majorité des commandes en 2024 se situent entre 1 et 2 unités. Étant donné que la dernière commande enregistrée est de 1u et que le volume global tend à se stabiliser à l'unité plutôt qu'aux pics de 2u observés début 2024, la quantité la plus probable pour maintenir un stock bas sur ce format 470ml est de 1 unité.

</details>


<details>
<summary><strong>3. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.33u
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
L'historique montre une commande régulière chaque mois avec un intervalle d'environ 28 à 30 jours (11/08, 09/09, 08/10). Le volume a décru de 2 unités en août/septembre à 1 unité lors de la dernière commande d'octobre. Étant donné la faible vélocité de ce produit organique de niche (180g), la tendance la plus probable pour la commande de début novembre est le maintien du dernier volume observé (1u), d'autant plus que l'intervalle de temps entre la dernière commande et la date de prédiction respecte le cycle habituel.

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
- **Pattern temporel**: Non défini / Éparse
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Nous disposons d'un historique extrêmement limité avec un seul point de données (1 unité le mercredi 08/10). En l'absence de pattern fréquentiel ou de saisonnalité N-1, la règle de l'expert Supply Chain privilégie la dernière valeur observée comme étant la demande de fond la plus probable. Bien que le jour demandé (lundi) diffère du jour de la commande initiale (mercredi), conformément aux consignes, nous ne prédisons pas 0 mais la quantité attendue pour le prochain cycle de réapprovisionnement, soit 1 unité.

</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intermittente avec un cycle de 30 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Stable entre 1u et 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande intermittente mais régulière avec des volumes très faibles (1 ou 2 unités). L'analyse montre que le lundi est le jour préférentiel de commande (43% des cas). La dernière commande en septembre (2u) et le cumul des commandes du 11 août (3u au total sur la journée) indiquent une légère tendance à commander par multiple de 1 ou 2. Étant donné l'intervalle de temps depuis la dernière commande (environ 55 jours), une commande est fortement probable pour ce lundi. Je recommande 2 unités pour couvrir le besoin sans risque de surstockage majeur sur ce petit format.

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
- **Pattern temporel**: Rythme sporadique à faible fréquence (environ tous les 3-4 mois)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une consommation très faible et irrégulière mais consistante sur l'unité (1u). Bien que la dernière commande remonte à septembre 2025 (il y a 2 mois), la demande de fond pour ce produit spécifique (Vinaigrette 200ml) ne dépasse jamais 1 unité, sauf exception en avril 2024. Le lundi 3 novembre est proche du jour de commande habituel (mardi). On anticipe donc la commande minimale de 1u pour couvrir le prochain besoin cyclique probable, conformément à la règle de ne pas prédire 0 pour un jour hors cycle ou à faible fréquence si le produit est toujours actif dans le catalogue client (dernière commande récente vs N-1). Il n'y a pas de signe de croissance justifiant un volume supérieur à l'unité de base de facturation/expédition habituelle de 1u. Le score de confiance est 'low' car l'intervalle entre les commandes est très long, rendant la prédiction de la date exacte incertaine malgré la stabilité du volume par commande (1u). Comme demandé, nous minimisons le MAPE en privilégiant la valeur la plus fréquente (1u) plutôt que 0 ou la moyenne incluant l'outlier de 2u (moyenne de 1.25). L'arrondi à l'entier le plus probable est 1u, car c'est la valeur observée dans 75% des commandes historiques. L'analyse temporelle indique une présence sur le marché sans signe d'arrêt (une commande en 2025).

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
- **Pattern temporel**: Rythme très sporadique / Commande annuelle
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u vers 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Bien que les données soient limitées (un seul point par an), on observe une récurrence stricte le lundi. Le volume est passé de 3 unités en juin 2024 à 1 unité en août 2025. Compte tenu de la faible rotation de cette référence (Andalouse 300ml) et de la tendance baissière sur le dernier point de données récent, la probabilité la plus forte est une commande de 1 unité pour maintenir un stock minimal, le lundi étant le jour d'achat validé historiquement.

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
- **Pattern temporel**: Commande spot / irrégulière (Intervalle > 1 an)
- **Saisonnalité**: none
- **Tendance**: Baisse (2u en 2024 vs 1u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique extrêmement faible avec seulement deux points de données espacés de plus d'un an (août 2024 et août 2025). Bien que les données soient limitées pour établir un cycle, la dernière commande enregistrée le 11 août 2025 a été effectuée un lundi pour 1 unité. La date de prédiction étant également un lundi, et en l'absence de tendance à la hausse ou de saisonnalité forte sur ce type de sauce spécifique, la quantité la plus probable est le maintien du dernier volume unitaire observé (1u).

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

**✅ Quantité LLM**: 1u (confidence: medium)
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
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock suffisant: 0.7u (55j restants > seuil 30j) |
| [LD012] LD Organic Samphire Spread 135 g | 2 | Stock suffisant: 1.4u (50j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T11:15:35.288Z*
