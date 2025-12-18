# Rapport Backtest - Client DELHAIZE OTTIGNIES

## Contexte

- **Client** : DELHAIZE OTTIGNIES (ID: 52836)
- **Commande réelle** : S39781
- **Date commande** : 2025-10-22 13:41:36
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 35,019 input + 6,565 output = 41,584 total


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
| **MAE** | 2.71 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 70.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 70.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -55.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 3 | 10 | 7.0 | 70.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (~30-60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive vers 1u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique montre une commande sporadique avec une tendance à la baisse. Le volume de 4u en juin 2024 semble être un événement isolé (outlier) car toutes les autres commandes oscillent entre 1u et 2u. La dernière commande enregistrée (septembre 2025) était de 1u un lundi. Bien que la date de prédiction soit un mardi, cela correspond aux fenêtres historiques de commande du client (lundi/mardi). Compte tenu de la faible rotation du produit JF003, la quantité la plus probable pour la prochaine commande est le maintien du palier minimal de 1 unité.

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long (~30-45 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% (de 2-3u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible rotation globale du produit. En 2024, les volumes oscillaient entre 2u et 3u à cette période (septembre/octobre). Cependant, la commande la plus récente (septembre 2025) n'est que de 1u, indiquant une baisse de la demande de fond ou une gestion de stock plus tendue par le client. Le 21 octobre 2025 (mardi) correspond aux jours de commande habituels du client (lundi/mardi). Compte tenu de la tendance baissière récente et de la faible fréquence, la quantité la plus probable pour maintenir le stock sans sur-stockage est de 1 unité.

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 4u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 3u (300.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique (~45-60 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (de 4u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une fréquence de commande faible et irrégulière (environ une commande tous les deux mois). L'historique N-1 montre une légère saisonnalité de rentrée (4u en sept 2024), mais la donnée la plus récente (sept 2025) indique une stabilisation à 2 unités. Bien que le dernier intervalle de commande soit long, le mardi est un jour de commande historiquement validé pour ce client. N'ayant pas de signe de reprise de croissance, la dernière valeur observée (2u) est retenue comme la plus probable pour la prochaine commande.

</details>


<details>
<summary><strong>4. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence (commande ponctuelle)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique extrêmement limité avec une seule commande réelle de 1 unité enregistrée le 03/09/2025. L'historique N-1 (2024) affiche des valeurs nulles (0u), suggérant une introduction récente ou une reprise d'activité sur cette référence. Bien que le jour demandé (mardi) diffère du jour de la dernière commande (mercredi), la règle pour les jours hors cycle impose de prédire la prochaine quantité probable plutôt que 0. En l'absence de tendance à la hausse ou à la baisse et sur la base du volume unitaire constaté récemment, la prédiction la plus probable pour la prochaine occurrence de commande est le maintien de la quantité à 1 unité.

</details>


<details>
<summary><strong>5. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 3u vs Médiane: 4u (Réel: 10u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 10u
- 📉 **Erreur LLM**: 7u (70.0%)
- 📉 **Erreur Médiane**: 6u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique / Très faible rotation (intervalle de 45 à 90+ jours)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (3-4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation extrêmement faible et irrégulière, rendant la prédiction de date difficile. Cependant, selon les règles de prédiction hors cycle, nous devons prévoir le volume de la prochaine commande probable. Les volumes historiques sont très stables, oscillant entre 3 et 4 unités (hormis une commande nulle en juin 2024). La dernière commande connue (septembre 2025) était de 3 unités. Je retiens cette valeur comme la plus probable pour la prochaine réapprovisionnement, la tendance étant à la stabilité sur ce petit format de tartinade bio.

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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 3u (confidence: low)
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
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Stock prédit: -0.0u (0j restants) → prédit 4u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:19:46.750Z*
