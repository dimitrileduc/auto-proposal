# Rapport Backtest - Client DELITRAITEUR

## Contexte

- **Client** : DELITRAITEUR (ID: 60283)
- **Commande réelle** : S39542
- **Date commande** : 2025-10-03 13:14:16
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 8,399 input + 10,253 output = 18,652 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 70.0% | 10 produits prédits, 7 corrects |
| **Rappel** | 77.8% | 9 produits réels, 7 détectés |
| **F1-Score** | 73.7% | Score équilibré global |

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
| **MAE** | 27.57 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 75.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 89.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -49.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 17 | 60 | 43.0 | 71.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV161] LV Tartinade Mangue curry 190g | 15 | 25 | 10.0 | 40.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV162] LV Tartinade Tomato Basilico 190g | 20 | 7 | 13.0 | 185.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 10 | 40 | 30.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 10 | 60 | 50.0 | 83.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 18 | 45 | 27.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 38 | 18 | 20.0 | 111.1% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 17u vs Médiane: 19u (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 17u (confidence: high)
- 📊 **Baseline N-1**: 19u
- 📊 **Médiane**: 19u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 43u (71.7%)
- 📉 **Erreur Médiane**: 41u (68.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel strict (~28 jours), principalement le lundi matin
- **Saisonnalité**: weak
- **Tendance**: Stable à légère baisse (passage de 20u à 17u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un cycle de commande mensuel très régulier de 28 jours (constaté sur les trois derniers mois). La dernière commande a eu lieu le lundi 29 septembre pour 17 unités. En suivant ce cycle, la prochaine commande est prévue aux alentours du lundi 27 octobre 2025, ce qui tombe dans la fenêtre des 30 jours. Bien qu'il s'agisse d'un thé glacé (produit météo-sensible), les volumes restent stables en sortie d'été (20u en août/septembre, 17u fin septembre). Je préconise de maintenir la quantité de la dernière commande (17u), le client semblant avoir légèrement ajusté son volume habituel de 20u vers le bas.

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 20u vs Médiane: 25u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 20u (confidence: low)
- 📊 **Baseline N-1**: 20u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 13u (185.7%)
- 📉 **Erreur Médiane**: 18u (257.1%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier avec une moyenne d'intervalle de 29.5 jours
- **Saisonnalité**: none
- **Tendance**: Volume en baisse sur la dernière commande (10u vs 25u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande moyen d'environ 30 jours (intervalles de 46 puis 13 jours). La dernière commande ayant eu lieu le 2025-09-01, soit il y a 31 jours, le client est théoriquement en phase de réapprovisionnement immédiat. Bien que le volume soit passé de 25u à 10u lors de la dernière commande, l'absence de données historiques plus larges suggère l'utilisation de la moyenne glissante (20u) pour la prochaine commande unique prévue en début de période d'analyse.

</details>


<details>
<summary><strong>3. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 30u (75.0%)
- 📉 **Erreur Médiane**: 30u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Initialement mensuel (31j), s'est accéléré à un cycle bimensuel (13-15j) en août avant une pause de 31 jours en septembre.
- **Saisonnalité**: strong
- **Tendance**: Baisse progressive du volume (-50%) de juillet à septembre (20u vers 10u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Pas d'outliers détectés, les volumes de 20u correspondent au pic estival de juillet/août. Étape 2: Forte saisonnalité liée au produit (limonade). On observe une division par deux des volumes (de 20u à 10u) dès septembre. Étape 3: La tendance est à la stabilisation à 10u par commande. Étape 4: Le client a passé sa dernière commande il y a 31 jours (01/09). Bien que le rythme se soit accéléré en août, la pause de septembre suggère un retour à un cycle mensuel ou un ralentissement saisonnier. Une commande de réapprovisionnement de 10 unités est imminente sous 30 jours pour couvrir la demande de fond d'automne.

</details>


<details>
<summary><strong>4. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 10u vs Médiane: 10u (Réel: 60u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 10u
- 📊 **Médiane**: 10u
- ✅ **Réel commandé**: 60u
- 📉 **Erreur LLM**: 50u (83.3%)
- 📉 **Erreur Médiane**: 50u (83.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel identifié, environ tous les 28 à 31 jours, en début de mois.
- **Saisonnalité**: weak
- **Tendance**: Stable à 10u sur les deux derniers mois
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande très régulier d'environ 30 jours (04/07, 04/08, 01/09). La dernière commande datant du 1er septembre, une nouvelle commande est attendue au cours des premiers jours d'octobre. Après un pic initial à 20u en juillet (potentiel stockage ou saisonnalité haute), le volume s'est stabilisé à 10u lors des deux dernières occurrences. En suivant cette tendance de fond stable et la logique du cycle mensuel, nous prévoyons une commande unique de 10 unités pour la période actuelle.

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 18u vs Médiane: 18u (Réel: 45u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 18u (confidence: low)
- 📊 **Baseline N-1**: 18u
- 📊 **Médiane**: 18u
- ✅ **Réel commandé**: 45u
- 📉 **Erreur LLM**: 27u (60.0%)
- 📉 **Erreur Médiane**: 27u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimestriel d'environ 60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 18u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux commandes identiques de 18 unités avec un intervalle de 59 jours (environ 2 mois). La dernière commande ayant eu lieu le 01/09/2025, la prochaine est statistiquement attendue aux alentours du 30 ou 31 octobre 2025. Cette date tombe dans la fenêtre de prédiction des 30 prochains jours (se terminant le 01/11). En l'absence d'outliers et malgré une baisse saisonnière probable pour une limonade en octobre, la stabilité parfaite des volumes précédents (18u) suggère que le client commande par colisage fixe. Une seule commande de 18 unités est donc prévue à la fin du cycle.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-29 09:22:29: 17u
- 2025-09-01 06:22:40: 20u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 10u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 17u (confidence: high)
**📊 Quantité Réelle**: 60u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 25u
- 2025-07-04 11:09:53: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 20u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>3. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-19 09:00:44: 10u
- 2025-08-04 09:36:12: 20u
- 2025-07-04 11:09:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: medium)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>4. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 10u
- 2025-08-04 09:36:12: 10u
- 2025-07-04 11:09:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 10u (confidence: medium)
**📊 Quantité Réelle**: 60u

</details>


<details>
<summary><strong>5. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:22:40: 18u
- 2025-07-04 11:09:53: 18u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 18u (confidence: low)
**📊 Quantité Réelle**: 45u

</details>




---

## False Positives (3)

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
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 126 | Stock prédit: -38.2u (-13j restants) → prédit 126u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 21 | Stock prédit: -18.3u (-27j restants) → prédit 21u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 53 | Stock prédit: -5.4u (-4j restants) → prédit 53u mais non commandé |


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
| [LV160] LV Tartinade Aubergine 190g | 50 | Stock suffisant: 32.9u (36j restants > seuil 30j) |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 40 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T18:56:21.677Z*
