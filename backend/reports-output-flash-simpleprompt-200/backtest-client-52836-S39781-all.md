# Rapport Backtest - Client DELHAIZE OTTIGNIES

## Contexte

- **Client** : DELHAIZE OTTIGNIES (ID: 52836)
- **Commande réelle** : S39781
- **Date commande** : 2025-10-22 13:41:36
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 19,239 input + 6,311 output = 25,550 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 46.7% | 15 produits prédits, 7 corrects |
| **Rappel** | 41.2% | 17 produits réels, 7 détectés |
| **F1-Score** | 43.7% | Score équilibré global |

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
| **MAE** | 2.57 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 66.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 69.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -51.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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

## True Positives (7)

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
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 4 | 3.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 4 | 3.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 4 | 3.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 4 | 10 | 6.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique à faible volume (environ 1 commande par mois)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse montre une demande faible et irrégulière sans pattern hebdomadaire strict. La commande de 4u en juin 2024 semble être un outlier par rapport à la moyenne historique de 1u. Étant donné que la dernière commande (22/09/2025) était de 1u il y a environ 30 jours, un besoin de réapprovisionnement de 1u est le scénario le plus probable pour maintenir le stock sans sur-stockage sur cette référence à faible rotation.

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec des intervalles de 30 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% vs N-1
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
L'analyse montre une fréquence de commande faible et irrégulière (environ tous les mois ou deux mois). La dernière commande date de 29 jours (22 septembre), ce qui suggère qu'un cycle de renouvellement de stock est proche. La tendance sur 2025 est globalement plus faible que sur 2024 (1u vs moyenne de 2u en N-1). Étant donné que le volume de septembre était de 1u et que l'historique N-1 à date comparable (septembre) était de 3u mais avec une érosion visible sur les derniers relevés, une quantité de 1u est la plus probable pour maintenir le stock sans sur-stockage.

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 4u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.3u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 3u (300.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme très irrégulier (cycle de 30 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (volumes divisés par 2)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible fréquence de commande avec un volume par commande qui s'essouffle : de 4u à 2u. La dernière commande date d'il y a environ 48 jours (03/09), ce qui suggère qu'un réapprovisionnement est nécessaire. Le volume historique se stabilise autour de 2 unités sur les occurrences récentes (saisonnalité N-1 de septembre/octobre et commande de septembre 2025). Le mardi est un jour historiquement valide pour ce client, mais le manque de récurrence stricte réduit la confiance.

</details>


<details>
<summary><strong>4. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Demande extrêmement sporadique, aucune récurrence hebdomadaire ou mensuelle détectée.
- **Saisonnalité**: none
- **Tendance**: Stable à un volume très faible (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et irrégulière sur ce produit (Sauce Béarnaise 470ml). La seule commande enregistrée en 2025 est de 1 unité le 3 septembre. Bien que le volume lissé soit mathématiquement inférieur à 1, la nature de l'agroalimentaire B2B et l'absence de pattern clair suggèrent que si une commande est déclenchée le 21 octobre, elle portera vraisemblablement sur l'unité de vente minimale (1u), comme lors de la dernière occurrence.

</details>


<details>
<summary><strong>5. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 4u vs Médiane: 4u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 3.7u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 6u (60.0%)
- 📉 **Erreur Médiane**: 6u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec des cycles longs (45-60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (3-4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande sporadique mais relativement constante en volume lorsqu'elle se manifeste. La dernière commande date de début septembre (soit environ 48 jours avant la date de prédiction), ce qui correspond aux intervalles de réapprovisionnement observés en N-1 (mai à juillet puis juillet à septembre). La médiane des commandes non nulles est de 4 unités. Vu le délai écoulé depuis la dernière commande (3u le 03/09), un besoin de réassort de 4 unités est statistiquement le plus probable pour maintenir le stock rayon.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 06:20:01: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-05 08:59:36: 1u
- 2024-06-17 13:08:38: 4u
- 2024-05-27 11:55:31: 1u
- 2024-04-23 14:55:41: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 06:20:01: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 09:51:21: 3u
- 2024-08-12 06:00:43: 2u
- 2024-07-05 08:59:36: 0u
- 2024-06-17 13:08:38: 0u
- 2024-05-27 11:55:31: 1u
- 2024-04-23 14:55:41: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 07:01:13: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 09:51:21: 4u
- 2024-08-12 06:00:43: 2u
- 2024-07-05 08:59:36: 2u
- 2024-06-17 13:08:38: 4u
- 2024-05-27 11:55:31: 1u
- 2024-04-23 14:55:41: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 07:01:13: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-05 08:59:36: 0u
- 2024-06-17 13:08:38: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>5. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 07:01:13: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 09:51:21: 4u
- 2024-07-05 08:59:36: 2u
- 2024-06-17 13:08:38: 0u
- 2024-05-27 11:55:31: 4u

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 10u

</details>




---

## False Positives (8)

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
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | Stock prédit: -0.8u (-12j restants) → prédit 2u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: 0.1u (7j restants) → prédit 1u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Stock prédit: -1.1u (-16j restants) → prédit 2u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: 0.2u (13j restants) → prédit 1u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Stock prédit: -1.5u (-27j restants) → prédit 1u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Stock prédit: 0.2u (4j restants) → prédit 3u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 4 | Stock prédit: 0.7u (9j restants) → prédit 4u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 5 | Stock prédit: -0.0u (0j restants) → prédit 5u mais non commandé |


---

## False Negatives (10)

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
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock suffisant: 0.5u (51j restants > seuil 30j) |
| [JF021] JF PICKLES 350 ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Stock suffisant: 0.6u (75j restants > seuil 30j) |
| [LD004] LD Tartinade Tomate Basilic bio 180g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 4 | Stock suffisant: 1.8u (442j restants > seuil 30j) |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Stock suffisant: 1.8u (442j restants > seuil 30j) |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:41:26.870Z*
