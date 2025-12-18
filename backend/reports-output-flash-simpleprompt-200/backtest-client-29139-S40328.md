# Rapport Backtest - Client DLL AD EUPEN EUSCO

## Contexte

- **Client** : DLL AD EUPEN EUSCO (ID: 29139)
- **Commande réelle** : S40328
- **Date commande** : 2025-11-13 12:30:22
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 40
- **Tokens**: 35,775 input + 10,933 output = 46,708 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 5.8% | 52 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 10.9% | Score équilibré global |

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
| **MAE** | 4.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 70.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 69.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -70.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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

## True Positives (3)

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
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 7 | 5.0 | 71.4% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 7 | 6.0 | 85.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 6 | 3.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.33u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 5u (71.4%)
- 📉 **Erreur Médiane**: 4u (57.1%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel irrégulier, intervalle de 15 à 40 jours
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (1u -> 2u -> 3u)
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
L'historique récent (août à octobre 2025) montre une croissance linéaire de la consommation (1, 2, puis 3 unités). La commande intervient environ 16 jours après la dernière saisie du 27/10, ce qui correspond au cycle court observé fin 2024 (30/10/24 après une commande le 04/10/24). Bien que la tendance soit à 3u, l'intervalle court entre la dernière commande (fin octobre) et celle-ci suggère un besoin de réapprovisionnement partiel. Une quantité de 2 unités permet d'absorber la demande sans surstockage, en s'alignant sur la moyenne pondérée de la période récente.

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 7u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 7u
- 📉 **Erreur LLM**: 6u (85.7%)
- 📉 **Erreur Médiane**: 5u (71.4%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique étendu (en moyenne tous les 30 à 45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1.5u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et irrégulière mais persistante. Le client a commandé il y a seulement 16 jours (27 oct), ce qui est plus court que son cycle moyen habituel (~30-40 jours). Cependant, le volume moyen par commande oscille entre 1 et 2 unités sans pic saisonnier en novembre (N-1 absent en novembre). Étant donné la faible vélocité du produit et la proximité de la dernière commande, une unité unique suffit pour couvrir la demande immédiate du mercredi sans risque de surstockage sur une référence Weck à rotation lente.

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 3u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.66u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 3u (50.0%)
- 📉 **Erreur Médiane**: 3u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ toutes les 3 à 5 semaines)
- **Saisonnalité**: weak
- **Tendance**: Stable entre 2u et 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très stable oscillant entre 2 et 4 unités, avec une moyenne glissante sur les 3 derniers mois de 2.66 unités. La dernière commande date d'il y a 16 jours (27/10), ce qui est un peu plus court que le cycle habituel de 30 jours, mais correspond à la fenêtre de réapprovisionnement observée en 2024 à la même période (fin octobre/début novembre). Le volume de 3 unités est retenu car il représente le mode statistique le plus fréquent sur les périodes de forte activité et compense la légère accélération du rythme de commande par rapport à septembre.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-27 11:39:53: 3u
- 2025-09-17 11:24:53: 2u
- 2025-08-27 06:21:46: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 14:15:21: 3u
- 2024-10-04 09:33:24: 1u
- 2024-09-09 13:02:32: 4u
- 2024-08-05 10:31:21: 3u
- 2024-07-11 13:39:47: 3u
- 2024-06-24 13:10:55: 1u
- 2024-06-04 11:33:54: 1u
- 2024-05-13 14:04:31: 4u
- 2024-04-08 08:18:30: 2u
- 2024-03-21 08:49:39: 3u
- 2024-03-05 13:13:14: 0u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-27 11:39:53: 1u
- 2025-09-17 11:24:53: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:33:24: 2u
- 2024-09-09 13:02:32: 1u
- 2024-08-05 10:31:21: 1u
- 2024-07-11 13:39:47: 1u
- 2024-06-04 11:33:54: 1u
- 2024-05-13 14:04:31: 2u
- 2024-03-21 08:49:39: 1u
- 2024-03-05 13:13:14: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 7u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-27 11:39:53: 3u
- 2025-09-17 11:24:53: 2u
- 2025-08-27 06:21:46: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-30 14:15:21: 2u
- 2024-10-30 14:15:21: 2u
- 2024-10-04 09:33:24: 3u
- 2024-09-09 13:02:32: 3u
- 2024-08-05 10:31:21: 1u
- 2024-07-11 13:39:47: 2u
- 2024-06-04 11:33:54: 4u
- 2024-05-13 14:04:31: 4u
- 2024-03-05 13:13:14: 3u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 6u

</details>




---

## False Positives (49)

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
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Stock prédit: 0.2u (3j restants) → prédit 2u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Stock prédit: 1.2u (23j restants) → prédit 2u mais non commandé |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | Stock prédit: 1.2u (23j restants) → prédit 2u mais non commandé |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 3 | Stock prédit: 1.6u (17j restants) → prédit 3u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Stock prédit: -0.4u (-4j restants) → prédit 2u mais non commandé |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 3 | Stock prédit: 1.6u (17j restants) → prédit 3u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Stock prédit: 1.2u (23j restants) → prédit 2u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.6u (23j restants) → prédit 1u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Stock prédit: 1.0u (15j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Stock prédit: 1.2u (21j restants) → prédit 2u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: 0.4u (10j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: 0.2u (4j restants) → prédit 1u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | Stock prédit: 1.1u (9j restants) → prédit 3u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: 0.4u (10j restants) → prédit 2u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: 0.5u (17j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: 0.4u (10j restants) → prédit 1u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 3 | Stock prédit: 1.9u (26j restants) → prédit 3u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Stock prédit: 0.5u (12j restants) → prédit 1u mais non commandé |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Stock prédit: 1.1u (19j restants) → prédit 2u mais non commandé |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 3 | Stock prédit: 2.6u (28j restants) → prédit 3u mais non commandé |
| [MF0033] MF Tarti Poivron chilli 250g | 3 | Stock prédit: 2.0u (30j restants) → prédit 3u mais non commandé |
| [MF0031] MF Tarti Olives verte 250g  | 2 | Stock prédit: 1.2u (23j restants) → prédit 2u mais non commandé |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Stock prédit: 1.2u (23j restants) → prédit 1u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 2 | Stock prédit: 1.0u (15j restants) → prédit 2u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: 0.5u (12j restants) → prédit 1u mais non commandé |
| [RF003] REFIELD Maïs 500G  | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: 0.5u (17j restants) → prédit 1u mais non commandé |
| [MF0013] MF Olives Vertes 500g | 1 | Stock prédit: 0.6u (23j restants) → prédit 1u mais non commandé |
| [LD014] LD Organic Avocado Spread 180 g | 2 | Stock prédit: -0.7u (-14j restants) → prédit 2u mais non commandé |
| [LD012] LD Organic Samphire Spread 135 g | 2 | Stock prédit: 0.2u (6j restants) → prédit 2u mais non commandé |
| [LD010] LD Organic Truffle Spread 135 g | 2 | Stock prédit: -1.3u (-21j restants) → prédit 2u mais non commandé |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | Stock prédit: -0.9u (-16j restants) → prédit 2u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Stock prédit: -0.5u (-6j restants) → prédit 4u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Stock prédit: -0.3u (-4j restants) → prédit 3u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | Stock prédit: -2.1u (-22j restants) → prédit 3u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock prédit: -0.7u (-22j restants) → prédit 1u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | Stock prédit: -1.2u (-29j restants) → prédit 2u mais non commandé |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | Stock prédit: -0.3u (-6j restants) → prédit 2u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock prédit: -0.4u (-16j restants) → prédit 1u mais non commandé |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock prédit: 0.1u (6j restants) → prédit 1u mais non commandé |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Stock prédit: 0.0u (1j restants) → prédit 2u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: 0.2u (11j restants) → prédit 1u mais non commandé |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Stock prédit: 0.4u (30j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: -0.9u (-34j restants) → prédit 1u mais non commandé |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Stock prédit: -0.6u (-27j restants) → prédit 1u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Stock prédit: -0.7u (-32j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:35:57.281Z*
