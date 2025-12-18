# Rapport Backtest - Client CRF HYPER MARKET EUPEN

## Contexte

- **Client** : CRF HYPER MARKET EUPEN (ID: 29069)
- **Commande réelle** : S40333
- **Date commande** : 2025-11-13 12:35:36
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 41
- **Tokens**: 51,331 input + 82,321 output = 133,652 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 20.0% | 35 produits prédits, 7 corrects |
| **Rappel** | 58.3% | 12 produits réels, 7 détectés |
| **F1-Score** | 29.8% | Score équilibré global |

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
| **MAE** | 3.57 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 75.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 67.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -75.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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
| [LD011] LD Organic Kids Spread 180 g | 0 | 4 | 4.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD015] LD Onion Spread 180g | 0 | 4 | 4.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 7 | 5.0 | 71.4% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 7 | 6.0 | 85.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 6 | 4.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF048] JF DISPLAY SAUCES 250ML  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [LD011] LD Organic Kids Spread 180 g</strong> - LLM: 0u vs Médiane: 1u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 4u (100.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé - commande unique isolée
- **Saisonnalité**: none
- **Tendance**: Stable / Inactive
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse est basée sur un historique extrêmement limité : une seule commande de 1 unité enregistrée le 24 septembre 2025. Depuis cette date, 49 jours se sont écoulés sans aucune activité. Dans un contexte B2B, une commande unique de 1 unité suggère soit un échantillonnage, soit un produit à rotation extrêmement lente (hors cycle standard). En l'absence de récurrence (cycle hebdomadaire ou mensuel) et compte tenu du délai déjà important depuis la dernière commande, il n'y a pas de signal statistique fiable prévoyant une commande dans les 30 prochains jours.

</details>


<details>
<summary><strong>2. [LD015] LD Onion Spread 180g</strong> - LLM: 0u vs Médiane: 1u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 4u (100.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée (une seule occurrence enregistrée il y a 56 jours)
- **Saisonnalité**: none
- **Tendance**: Inexistante (Volume trop faible pour établir une tendance)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur une donnée unique (1 unité le 17/09/2025). Étape 1 : La demande de fond est de 1 unité. Étape 2 : Absence de données N-1 pour corréler une saisonnalité (fêtes de fin d'année). Étape 3 : Le produit n'a pas été commandé depuis 56 jours, ce qui suggère soit une commande ponctuelle (échantillon ou commande client spécifique), soit un produit à rotation extrêmement lente qui ne suit pas un cycle mensuel ou bimensuel standard. Étape 4 : Faute de pattern de répétition ou de signal de réapprovisionnement récent, la probabilité d'une commande dans les 30 prochains jours est jugée trop faible pour recommander un stock.

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 6u (85.7%)
- 📉 **Erreur Médiane**: 6u (85.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique avec longs intervalles (36 jours à plusieurs mois)
- **Saisonnalité**: weak
- **Tendance**: Baisse de volume (de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation extrêmement faible et irrégulière. Le produit a été commandé deux fois fin 2024 (Août/Octobre) puis plus rien jusqu'en septembre 2025. Nous sommes actuellement à 56 jours depuis la dernière commande du 17 septembre 2025. Sur la base du cycle observé en 2024 (intervalle de 36 jours), le client pourrait passer une commande de réapprovisionnement dans les 30 prochains jours. La quantité recommandée est fixée à 1 unité, en accord avec la tendance la plus récente, car il s'agit d'un produit à rotation très lente.

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.44u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 4u (66.7%)
- 📉 **Erreur Médiane**: 4u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle long irrégulier compris entre 30 et 60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable entre 1u et 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande de fond stable mais à faible fréquence. La dernière commande date du 17 septembre 2025 (il y a 56 jours). En observant l'année N-1, une commande avait eu lieu le 7 novembre. Le client est donc dans sa fenêtre habituelle de réapprovisionnement (cycle moyen de ~45 jours dépassé). Le volume oscille strictement entre 1 et 2 unités ; nous prédisons 2 unités pour la prochaine commande afin de s'aligner sur la quantité de l'année précédente à la même période (N-1 Nov = 2u) et sur la tendance de la dernière livraison.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [LD011] LD Organic Kids Spread 180 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:13:07: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [LD015] LD Onion Spread 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:30:52: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:30:52: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:31:36: 2u
- 2024-08-29 14:02:59: 2u
- 2024-05-16 09:16:10: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:30:52: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-07 07:22:47: 2u
- 2024-10-04 09:31:36: 1u
- 2024-08-06 06:14:26: 2u
- 2024-06-19 10:11:38: 1u
- 2024-05-16 09:16:10: 1u
- 2024-04-23 08:09:51: 2u
- 2024-03-21 13:18:37: 1u
- 2024-03-05 13:23:28: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 6u

</details>




---

## False Positives (28)

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
| [MF0033] MF Tarti Poivron chilli 250g | 2 | Stock prédit: 1.4u (19j restants) → prédit 2u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 2 | Stock prédit: 0.6u (10j restants) → prédit 2u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 3 | Stock prédit: 2.2u (20j restants) → prédit 3u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: 0.7u (19j restants) → prédit 1u mais non commandé |
| [RF003] REFIELD Maïs 500G  | 1 | Stock prédit: 0.7u (19j restants) → prédit 1u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | Stock prédit: 1.5u (24j restants) → prédit 2u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: 0.8u (24j restants) → prédit 1u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Stock prédit: 0.7u (19j restants) → prédit 1u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Stock prédit: 0.6u (11j restants) → prédit 2u mais non commandé |
| [FIL19] FIL VOL AU VENT 400G BOCAL | 4 | Stock prédit: 2.2u (20j restants) → prédit 4u mais non commandé |
| [JF073] FIL BOULLETTES SAUCE TOMATE 800G BOCAL  | 1 | Stock prédit: 0.7u (16j restants) → prédit 1u mais non commandé |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Stock prédit: -0.7u (-23j restants) → prédit 2u mais non commandé |
| [MF0027] MF Tarti Aubergine 250g  | 3 | Stock prédit: 0.1u (2j restants) → prédit 3u mais non commandé |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Stock prédit: 0.3u (10j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Stock prédit: 0.3u (9j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Stock prédit: -0.6u (-6j restants) → prédit 4u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Stock prédit: 0.3u (24j restants) → prédit 1u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.1u (6j restants) → prédit 1u mais non commandé |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Stock prédit: -0.3u (-11j restants) → prédit 1u mais non commandé |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | Stock prédit: -0.3u (-6j restants) → prédit 2u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock prédit: -0.4u (-29j restants) → prédit 1u mais non commandé |
| [LD010] LD Organic Truffle Spread 135 g | 2 | Stock prédit: -0.1u (-4j restants) → prédit 2u mais non commandé |


---

## False Negatives (5)

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
| [DIS0012] Display Foodprint Karton LD | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD013] LD Tuscan Organic Spread 180 g | 8 | Stock suffisant: 3.3u (40j restants > seuil 30j) |
| [LD014] LD Organic Avocado Spread 180 g | 4 | Stock suffisant: 2.5u (40j restants > seuil 30j) |
| [LD015] LD Onion Spread 180g | 4 | LLM avait prédit 0 (pas de besoin) avec stock: -0.2u (-9j) mais client a commandé 4u |
| [LD011] LD Organic Kids Spread 180 g | 4 | LLM avait prédit 0 (pas de besoin) avec stock: -0.0u (-2j) mais client a commandé 4u |


---

*Rapport généré automatiquement le 2025-12-18T20:00:33.903Z*
