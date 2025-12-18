# Rapport Backtest - Client SDP Rungis

## Contexte

- **Client** : SDP Rungis (ID: 17600)
- **Commande réelle** : S39727
- **Date commande** : 2025-10-14 13:50:03
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 25
- **Tokens**: 32,474 input + 44,130 output = 76,604 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 27.3% | 22 produits prédits, 6 corrects |
| **Rappel** | 60.0% | 10 produits réels, 6 détectés |
| **F1-Score** | 37.5% | Score équilibré global |

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
| **MAE** | 215.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 67.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 75.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -46.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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
| [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP | 200 | 400 | 200.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml  | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV363] LV BIO Tartin'apero Avocat 180g  | 0 | 434 | 434.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml | 400 | 200 | 200.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml | 0 | 200 | 200.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV356] LV SET 3 X 135G trisauces  SDP | 0 | 256 | 256.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP</strong> - LLM: 200u vs Médiane: 198u (Réel: 400u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 200u (confidence: high)
- 📊 **Baseline N-1**: 200u
- 📊 **Médiane**: 198u
- ✅ **Réel commandé**: 400u
- 📉 **Erreur LLM**: 200u (50.0%)
- 📉 **Erreur Médiane**: 202u (50.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle régulier de 22 à 27 jours (moyenne 24,5 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 200u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité parfaite tant sur les volumes (systématiquement 200 unités) que sur la cadence. On observe un cycle moyen de 24,5 jours entre chaque commande. La dernière commande ayant eu lieu le 08/10/2025, la prochaine commande est projetée aux alentours du 01/11/2025 (soit dans environ 19 jours), ce qui s'inscrit parfaitement dans la fenêtre d'analyse des 30 prochains jours. En suivant la règle de non-cumul et en se basant sur la demande de fond constante, la prédiction est de 200 unités pour l'unique commande attendue.

</details>


<details>
<summary><strong>2. [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml </strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel à bi-mensuel (moyenne 25-30 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse stabilisée à 434u (+24% vs N-1)
- **Outliers détectés**: 305u

**🧠 Raisonnement LLM:**
L'analyse montre un changement de palier structurel depuis août 2025, passant de 350u (standard N-1) à 434u de manière constante. L'intervalle de commande récent varie entre 16 et 34 jours, avec une moyenne de 25 jours. La dernière commande ayant eu lieu le 08/10/2025, la prochaine échéance est prévue autour du 02/11/2025, ce qui se situe à l'intérieur de la fenêtre de 30 jours. Conformément à la règle de non-cumul, nous prédisons une commande unique de 434u pour maintenir le nouveau stock de fond observé.

</details>


<details>
<summary><strong>3. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - LLM: 0u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 434u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle long identifié de 49 jours avec commandes positionnées le mercredi
- **Saisonnalité**: strong
- **Tendance**: Baisse significative (-50% en volume) et ralentissement saisonnier
- **Outliers détectés**: 864u, 4u

**🧠 Raisonnement LLM:**
ÉTAPE 1: La commande du 20/08 (868u au total) est traitée comme un outlier saisonnier ou un stockage de masse (pic d'été). La base actuelle semble se stabiliser à 434u.
ÉTAPE 2: Le produit (tartinable avocat) est très sensible à la saisonnalité ; une baisse de la demande est logique en octobre/novembre après la période estivale.
ÉTAPE 3: On observe une réduction de moitié du volume entre août et octobre. L'intervalle observé entre les deux dernières commandes est de 49 jours.
ÉTAPE 4: La dernière commande ayant eu lieu le 08/10, l'application du cycle de 49 jours projette la suivante vers le 26/11. Même en considérant un raccourcissement théorique du cycle à 35 jours (scénario optimiste), la commande tomberait après le 12/11. Il n'y a donc aucun besoin prévu dans la fenêtre des 30 prochains jours.

</details>


<details>
<summary><strong>4. [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml</strong> - LLM: 400u vs Médiane: 500u (Réel: 200u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 400u (confidence: high)
- 📊 **Baseline N-1**: 400u
- 📊 **Médiane**: 500u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 200u (100.0%)
- 📉 **Erreur Médiane**: 300u (150.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel à bimensuel (cycles de 15 à 30 jours), principalement les mardis, mercredis et jeudis
- **Saisonnalité**: weak
- **Tendance**: Stable à 400u
- **Outliers détectés**: 800u, 600u

**🧠 Raisonnement LLM:**
Étape 1: Identification des outliers à 800u et 600u, la demande de fond se stabilisant nettement à 400u dans 75% des cas récents et historiques. Étape 2: La saisonnalité est faible, avec une présence continue du produit sur toute l'année N-1. Étape 3: Bien qu'il y ait eu un rapprochement des commandes début septembre (intervalle de 6 jours), le cycle médian de l'année précédente est plus proche de 25-30 jours. Étape 4: La dernière commande remontant au 10 septembre 2025, soit il y a 33 jours, une commande de réapprovisionnement est statistiquement attendue dans la fenêtre de prédiction. On privilégie la quantité standard de 400u, correspondant au volume unitaire habituel du client.

</details>


<details>
<summary><strong>5. [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml</strong> - LLM: 0u vs Médiane: 200u (Réel: 200u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 200u
- 📊 **Médiane**: 200u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 200u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé - Longue période d'inactivité (> 1 an)
- **Saisonnalité**: none
- **Tendance**: Inactif / Rupture de cycle
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Les commandes historiques étaient extrêmement stables à 200 unités, sans aucun outlier détecté. Étape 2: Aucune saisonnalité claire ne se dégage malgré des points en octobre et décembre l'année précédente. Étape 3: Tendance en arrêt total. La dernière commande enregistrée remonte au 11 juin 2024 (il y a plus de 16 mois). Étape 4: Le cycle habituel était d'environ 2 à 3 mois. Puisque l'intervalle depuis la dernière commande est de 489 jours, le produit semble avoir été déréférencé ou n'est plus commandé par ce client. La probabilité d'une commande dans les 30 prochains jours est quasi nulle selon les données disponibles.

</details>


<details>
<summary><strong>6. [LV356] LV SET 3 X 135G trisauces  SDP</strong> - LLM: 0u vs Médiane: 512u (Réel: 256u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 576u
- 📊 **Médiane**: 512u
- ✅ **Réel commandé**: 256u
- 📉 **Erreur LLM**: 256u (100.0%)
- 📉 **Erreur Médiane**: 256u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique avec inactivité prolongée (aucune commande depuis octobre 2024)
- **Saisonnalité**: weak
- **Tendance**: Baisse totale (Inactif sur les 12 derniers mois)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre que ce produit n'a pas été commandé depuis plus d'un an (dernière commande le 01/10/2024). Bien qu'il y ait eu une activité en août et octobre l'année précédente, celle-ci ne s'est pas répétée en 2025 (0 commande sur les 3 derniers mois). La date anniversaire de la commande d'octobre N-1 étant déjà passée (13 octobre aujourd'hui) sans nouvelle commande, il est fort probable que le produit soit déréférencé ou que le besoin client ait disparu. Par conséquent, aucune commande n'est prévue pour les 30 prochains jours.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 200u
- 2025-09-16 11:31:53: 200u
- 2025-08-20 10:22:31: 196u
- 2025-08-20 10:22:31: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 200u (confidence: high)
**📊 Quantité Réelle**: 400u

</details>


<details>
<summary><strong>2. [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 434u
- 2025-09-04 09:10:58: 434u
- 2025-08-19 07:26:59: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 08:46:54: 350u
- 2024-09-11 07:42:30: 350u
- 2024-08-08 07:00:55: 350u
- 2024-08-07 07:54:26: 350u
- 2024-06-11 08:53:39: 350u
- 2024-05-23 09:00:22: 305u
- 2024-04-24 08:56:28: 350u
- 2024-04-02 13:39:05: 350u
- 2024-01-30 09:51:19: 350u
- 2023-12-19 08:25:50: 350u
- 2023-11-07 14:19:04: 350u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>3. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 434u
- 2025-08-20 10:22:31: 864u
- 2025-08-20 10:22:31: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>4. [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-10 09:37:56: 400u
- 2025-09-04 09:10:58: 400u
- 2025-08-19 07:26:59: 600u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-10 12:10:09: 400u
- 2024-09-11 07:42:30: 200u
- 2024-08-08 07:00:55: 200u
- 2024-08-07 07:54:26: 400u
- 2024-06-11 08:46:37: 800u
- 2024-05-23 09:00:22: 400u
- 2024-04-24 08:56:28: 400u
- 2024-04-02 13:39:05: 400u
- 2024-03-25 14:38:30: 200u
- 2024-03-13 08:07:55: 400u
- 2024-01-30 09:51:19: 400u
- 2023-12-19 08:26:46: 400u

**✅ Quantité LLM**: 400u (confidence: high)
**📊 Quantité Réelle**: 200u

</details>


<details>
<summary><strong>5. [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-11 08:46:37: 200u
- 2024-04-02 13:39:05: 200u
- 2023-12-19 08:25:50: 200u
- 2023-10-18 13:56:51: 200u

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 200u

</details>


<details>
<summary><strong>6. [LV356] LV SET 3 X 135G trisauces  SDP</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 08:31:17: 512u
- 2024-08-07 07:56:04: 640u

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 256u

</details>




---

## False Positives (16)

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
| [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml | 200 | Stock prédit: 145.8u (10j restants) → prédit 200u mais non commandé |
| [LV234] LV "CLASSIQUE" WECK Mayonnaise aus œufs 250ml | 400 | Stock prédit: 345.1u (25j restants) → prédit 400u mais non commandé |
| [LV313] LV "CLASSIQUE" WECK Sauce COCKTAIL 250ml | 200 | Stock prédit: 170.4u (23j restants) → prédit 200u mais non commandé |
| [LV236] LV "CLASSIQUE" WECK Sauce TARTARE 250ml | 200 | Stock prédit: 160.8u (16j restants) → prédit 200u mais non commandé |
| [LV303] LV BIO  Tartin'apero Mangue curry SDP 200 ml  | 434 | Stock prédit: 354.3u (17j restants) → prédit 434u mais non commandé |
| [LV358] LV SDP SAUCE BEARNAISE 125G (copie) | 350 | Stock prédit: 175.0u (25j restants) → prédit 350u mais non commandé |
| [LV302] LV BIO Tartin'apero Carotte Gingembre SDP 200 ml  | 392 | Stock prédit: -186.4u (-9j restants) → prédit 392u mais non commandé |
| [LV314] LV "CLASSIQUE" WECK Sauce AIOLI PESTO 250ml | 200 | Stock prédit: -81.5u (-10j restants) → prédit 200u mais non commandé |
| [LV334] LA VACHE TRAD Sauce au poivre bocal 250ml WECK SDP | 200 | Stock prédit: -98.0u (-12j restants) → prédit 200u mais non commandé |
| [LV304] LV BIO Tartin'apero Poivrons Chili SDP 200 ml  | 434 | Stock prédit: -70.9u (-5j restants) → prédit 434u mais non commandé |
| [LV307] LV BIO Tartin'apero Houmous type SDP 200 ml  | 392 | Stock prédit: 141.9u (18j restants) → prédit 392u mais non commandé |
| [LV tritart 135] LV BIO SET 3 X 135G TARTIN'APERO SDP | 256 | Stock prédit: -125.5u (-12j restants) → prédit 256u mais non commandé |
| [LV337] LV BIO Tartin'apero TOMATE AIL DES OURS SDP 200ml | 434 | Stock prédit: -19.8u (-1j restants) → prédit 434u mais non commandé |
| [LV362] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml bio (copie) | 217 | Stock prédit: -4.0u (0j restants) → prédit 217u mais non commandé |
| [LV364] LV SDP SAUCE Cocktail  125ML | 175 | Stock prédit: -4.0u (0j restants) → prédit 175u mais non commandé |
| [LV306] LV BIO Tartin'apero Olives Vertes SDP200 ml  | 350 | Stock prédit: -20.6u (-2j restants) → prédit 350u mais non commandé |


---

## False Negatives (4)

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
| [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml | 200 | LLM avait prédit 0 (pas de besoin) avec stock: 31.2u (18j) mais client a commandé 200u |
| [LV356] LV SET 3 X 135G trisauces  SDP | 256 | LLM avait prédit 0 (pas de besoin) avec stock: -77.2u (-23j) mais client a commandé 256u |
| [LV311] LV BIO Tartin'apero Basilico SDP 200 ml  | 350 | Stock suffisant: 421.7u (137j restants > seuil 30j) |
| [LV363] LV BIO Tartin'apero Avocat 180g  | 434 | LLM avait prédit 0 (pas de besoin) avec stock: 335.7u (13j) mais client a commandé 434u |


---

*Rapport généré automatiquement le 2025-12-18T18:54:02.235Z*
