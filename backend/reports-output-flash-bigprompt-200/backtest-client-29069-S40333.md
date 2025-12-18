# Rapport Backtest - Client CRF HYPER MARKET EUPEN

## Contexte

- **Client** : CRF HYPER MARKET EUPEN (ID: 29069)
- **Commande réelle** : S40333
- **Date commande** : 2025-11-13 12:35:36
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 41
- **Tokens**: 62,883 input + 11,934 output = 74,817 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 13.6% | 44 produits prédits, 6 corrects |
| **Rappel** | 75.0% | 8 produits réels, 6 détectés |
| **F1-Score** | 23.1% | Score équilibré global |

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
| **MAE** | 4.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 75.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 73.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -75.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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
| [LD011] LD Organic Kids Spread 180 g | 1 | 4 | 3.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD015] LD Onion Spread 180g | 1 | 4 | 3.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 7 | 5.0 | 71.4% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 7 | 6.0 | 85.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 6 | 5.0 | 83.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [LD011] LD Organic Kids Spread 180 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (une seule donnée historique)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u (donnée unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique extrêmement limité avec une seule commande de 1 unité enregistrée le mercredi 24 septembre 2025. La date de prédiction (mercredi 12 novembre) correspond exactement au même jour de la semaine, ce qui pourrait suggérer un cycle hebdomadaire ou bimensuel très espacé. En l'absence de données contradictoires ou de tendances à la hausse, la quantité la plus probable reste le volume unitaire précédemment observé. Conformément aux règles de gestion des jours hors cycle, nous maintenons la prévision sur la base de la dernière activité réelle.

</details>


<details>
<summary><strong>2. [LD015] LD Onion Spread 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (une seule commande enregistrée)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u (donnée unique)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique extrêmement limité avec une seule commande de 1 unité enregistrée le mercredi 17 septembre 2025. La date de prédiction (mercredi 12 novembre) correspond exactement au même jour de la semaine. En l'absence d'autres données suggérant une croissance ou un déclin, la règle de la dernière valeur observée est appliquée pour minimiser le MAPE sur un produit à très faible rotation (Slow Mover). La quantité recommandée est donc de 1 unité.

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 6u (85.7%)
- 📉 **Erreur Médiane**: 6u (85.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très erratique - Intervalles longs (>30 jours) sans cycle fixe
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (2u en 2024 -> 1u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une fréquence de commande très faible et irrégulière. L'historique montre une diminution des volumes unitaires, passant de 2 unités fin 2024 à 1 unité lors de la commande la plus récente (septembre 2025). Bien que la date demandée (mercredi) corresponde au jour de la toute dernière commande, l'absence de récurrence hebdomadaire ou mensuelle claire suggère un besoin ponctuel de réapprovisionnement. En l'absence de signaux de croissance ou de saisonnalité forte sur ce format Weck, la dernière valeur observée (1u) constitue la prédiction la plus probable pour la prochaine occurrence de commande, indépendamment du délai écoulé depuis septembre 2025.

</details>


<details>
<summary><strong>4. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 5u (83.3%)
- 📉 **Erreur Médiane**: 4u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (environ tous les 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable entre 1u et 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une fréquence d'achat sporadique mais persistante, avec des volumes très faibles (entre 1 et 2 unités). La dernière commande enregistrée en septembre 2025 était de 2 unités, mais la moyenne long-terme se situe autour de 1,4 unités. Compte tenu de l'irrégularité des cycles, pour une date de prédiction en novembre (environ 2 mois après la dernière commande), on se situe dans la fenêtre probable de réapprovisionnement. En B2B, pour ce type de conditionnement (Weck 250ml), la commande minimale unitaire (1u) est la plus probable pour maintenir un stock frais sans surstockage.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [LD011] LD Organic Kids Spread 180 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 09:13:07: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [LD015] LD Onion Spread 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 11:30:52: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>




---

## False Positives (38)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Stock prédit: 0.6u (11j restants) → prédit 1u mais non commandé |
| [FIL19] FIL VOL AU VENT 400G BOCAL | 3 | Stock prédit: 2.2u (20j restants) → prédit 3u mais non commandé |
| [JF073] FIL BOULLETTES SAUCE TOMATE 800G BOCAL  | 1 | Stock prédit: 0.7u (16j restants) → prédit 1u mais non commandé |
| [JF074] FIL MAYONNAISE ŒUFS 1L SEAU  | 4 | Stock prédit: 3.1u (26j restants) → prédit 4u mais non commandé |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | Stock prédit: -0.5u (-9j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | Stock prédit: -0.7u (-23j restants) → prédit 2u mais non commandé |
| [MF0027] MF Tarti Aubergine 250g  | 3 | Stock prédit: 0.1u (2j restants) → prédit 3u mais non commandé |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | Stock prédit: 0.3u (10j restants) → prédit 2u mais non commandé |
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
| [FIL23] FIL MAYONNAISE 300ML SQUEEZE  | 1 | Stock prédit: -1.3u (-54j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: -0.8u (-43j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: -1.0u (-48j restants) → prédit 1u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock prédit: -0.4u (-29j restants) → prédit 1u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Stock prédit: -3.1u (-72j restants) → prédit 1u mais non commandé |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | Stock prédit: -1.1u (-50j restants) → prédit 1u mais non commandé |
| [LD012] LD Organic Samphire Spread 135 g | 1 | Stock prédit: -1.1u (-34j restants) → prédit 1u mais non commandé |
| [LD010] LD Organic Truffle Spread 135 g | 2 | Stock prédit: -0.1u (-4j restants) → prédit 2u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Stock prédit: -0.6u (-37j restants) → prédit 1u mais non commandé |


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
| [LD013] LD Tuscan Organic Spread 180 g | 8 | Stock suffisant: 3.3u (40j restants > seuil 30j) |
| [LD014] LD Organic Avocado Spread 180 g | 4 | Stock suffisant: 2.5u (40j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T11:15:11.647Z*
