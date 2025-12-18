# Rapport Backtest - Client CRF MARKET EMBOURG DESADIS

## Contexte

- **Client** : CRF MARKET EMBOURG DESADIS (ID: 38740)
- **Commande réelle** : S40077
- **Date commande** : 2025-11-04 07:10:58
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 34,441 input + 6,839 output = 41,280 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 41.0% | 39 produits prédits, 16 corrects |
| **Rappel** | 84.2% | 19 produits réels, 16 détectés |
| **F1-Score** | 55.2% | Score équilibré global |

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
| **MAE** | 0.31 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 31.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
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

## True Positives (16)

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
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD015] LD Onion Spread 180g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD011] LD Organic Kids Spread 180 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme mensuel (environ 28-30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère fluctuation (2u à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande par mois (août, septembre, octobre). Le dernier intervalle suggère une commande début novembre. Bien que la dernière commande (02/10) fût de 3u, la moyenne sur 4 points est de 2,25u. En excluant les effets de bord, le volume de croisière pour ce produit de niche (Tartinade Bio) se stabilise à 2u. La date du 03/11 correspond parfaitement au cycle de ~30 jours après la commande du 02/10. On privilégie la médiane de 2u pour minimiser le risque de surstockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle mensuel instable (environ 12 à 30 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (3u -> 2u -> 1u -> 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible fréquence de commande (une fois par mois) avec des volumes très réduits oscillant entre 1 et 3 unités. La dernière commande date du 02 octobre (2u). Un cycle de ~30 jours placerait la commande début novembre. Bien que la tendance soit légèrement baissière par rapport au début de période (3u), la valeur de 2u est la plus récurrente et la plus récente. La date du 3 novembre (lundi) est cohérente avec un réapprovisionnement mensuel après environ 32 jours d'intervalle depuis la dernière commande. On privilégie 2u pour maintenir un stock minimum sur un produit bio de niche à faible rotation sans risque de surstock excessif ou de rupture si la demande de fond est de 2 unités par mois comme en octobre et septembre (moyenne 1.5u arrondie à l'entier supérieur). Aucun outlier détecté vu le faible volume global de données (4 points seulement). Confidence 'low' due au très faible nombre de données historiques et à l'irrégularité des intervalles calendaires (intervalle min 12j, max 30j+). Nous suivons la règle du 'prochain volume probable' car le client n'a pas de jour de semaine fixe mais un rythme mensuel approximatif (médiane à 2u). La quantité recommandée est donc l'entier le plus probable basé sur la dernière observation cohérente avec l'historique moyen récent (moyenne glissante 3 mois : 1.66u). On retient 2u pour la précision agroalimentaire B2B optimale ici. On ne met pas 0 car une commande est attendue environ tous les mois et aucune commande n'a eu lieu en novembre encore.

</details>


<details>
<summary><strong>3. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme mensuel (environ 30-45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2u avec baisse légère par rapport à N-1
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une consommation faible et irrégulière mais stable. La dernière commande (octobre, 2u) fait suite à deux commandes de 1u. On observe que le volume de l'année précédente (3u) n'a jamais été atteint sur la période récente. Le délai entre les commandes suggère un besoin de réapprovisionnement environ tous les mois. La date demandée (lundi 03/11) correspond à l'intervalle habituel d'un mois après la commande du 02/10. Compte tenu de la tendance bimensuelle à 1u et du pic ponctuel à 2u, la quantité de 1u est la plus probable pour maintenir le stock sans sur-stocker ce produit à faible rotation.

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une consommation très régulière de 1 unité par commande avec un intervalle d'environ 30 jours (03/09 puis 02/10). La commande de 2 unités en août 2024 est considérée comme un outlier par rapport à la stabilité observée sur les 12 derniers mois. Bien que le lundi ne soit pas le jour habituel de réception, la règle métier impose de prévoir la prochaine commande probable. Compte tenu de l'intervalle de 30 jours écoulé depuis la commande du 02 octobre, une commande de réapprovisionnement de 1 unité est attendue pour début novembre.

</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-32 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité frappante sur un cycle mensuel. Les deux dernières commandes (03/09 et 02/10) sont de 2 unités. Bien que la demande porte sur un lundi, alors que le client commande habituellement le mercredi ou jeudi, la règle de gestion des jours hors cycle impose de prédire la prochaine commande probable. Comme le cycle de ~30 jours arrive à échéance début novembre, la quantité de 2 unités est la plus probable compte tenu de la stabilité du produit sur 2024 et 2025.

</details>


<details>
<summary><strong>6. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse vers palier stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une fréquence de commande mensuelle très marquée. En 2025, le client a commandé exactement 1 unité le 06/08 et le 03/09 (intervalles de 28 jours), tous les deux des mercredis. Bien que l'année précédente affichait des volumes de 2 unités, la tendance récente s'est stabilisée à l'unité minimale de commande (1u). La date de prédiction étant un lundi (03/11), soit environ 60 jours après la dernière commande enregistrée, le produit est entré dans sa fenêtre de réapprovisionnement mensuel. Je table sur la continuité de la tendance récente de 1 unité pour couvrir le prochain cycle.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:18:26: 3u
- 2025-09-15 12:13:28: 1u
- 2025-09-03 14:41:32: 2u
- 2025-08-06 11:32:29: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:18:26: 2u
- 2025-09-15 12:13:28: 1u
- 2025-09-03 14:41:32: 2u
- 2025-08-06 11:32:29: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [JF032] JF SAUCE LAPIN 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:18:26: 2u
- 2025-09-15 12:13:28: 1u
- 2025-08-06 11:32:29: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-21 08:44:16: 3u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:18:26: 1u
- 2025-09-03 14:41:32: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-14 06:00:40: 2u
- 2024-06-21 08:44:16: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 06:18:26: 2u
- 2025-09-03 14:41:32: 2u
- 2025-08-06 11:32:29: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-14 06:00:40: 2u
- 2024-06-21 08:44:16: 1u
- 2024-05-28 06:38:38: 2u
- 2024-03-26 15:27:00: 2u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 14:41:32: 1u
- 2025-08-06 11:32:29: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-14 06:00:40: 2u
- 2024-06-21 08:44:16: 1u
- 2024-05-28 06:38:38: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (23)

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
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Stock prédit: 0.2u (4j restants) → prédit 2u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Stock prédit: -0.8u (-13j restants) → prédit 1u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: -0.5u (-5j restants) → prédit 2u mais non commandé |
| [LD014] LD Organic Avocado Spread 180 g | 2 | Stock prédit: -0.5u (-5j restants) → prédit 2u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | Stock prédit: 0.8u (20j restants) → prédit 2u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: -0.5u (-10j restants) → prédit 1u mais non commandé |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 2 | Stock prédit: 0.4u (10j restants) → prédit 2u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 2 | Stock prédit: 0.4u (10j restants) → prédit 2u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 2 | Stock prédit: -0.2u (-3j restants) → prédit 2u mais non commandé |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 2 | Stock prédit: -0.2u (-3j restants) → prédit 2u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 2 | Stock prédit: -0.2u (-3j restants) → prédit 2u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Stock prédit: 0.1u (3j restants) → prédit 1u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: -0.8u (-26j restants) → prédit 1u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: -0.2u (-4j restants) → prédit 2u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: 0.2u (14j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.2u (13j restants) → prédit 1u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Stock prédit: -0.4u (-9j restants) → prédit 1u mais non commandé |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: -1.1u (-32j restants) → prédit 1u mais non commandé |
| [DIS0003] Display TVF bois | 1 | Stock prédit: -2.1u (-60j restants) → prédit 1u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Stock prédit: -2.1u (-60j restants) → prédit 1u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock prédit: -2.1u (-60j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: 0.0u (2j restants) → prédit 1u mais non commandé |


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
| [LD004] LD Tartinade Tomate Basilic bio 180g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:16:04.141Z*
