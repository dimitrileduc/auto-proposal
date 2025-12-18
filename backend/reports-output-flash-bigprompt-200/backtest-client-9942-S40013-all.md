# Rapport Backtest - Client La fermette

## Contexte

- **Client** : La fermette (ID: 9942)
- **Commande réelle** : S40013
- **Date commande** : 2025-10-30 07:17:13
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 37,687 input + 6,922 output = 44,609 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 34.2% | 38 produits prédits, 13 corrects |
| **Rappel** | 59.1% | 22 produits réels, 13 détectés |
| **F1-Score** | 43.3% | Score équilibré global |

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
| **wMAPE** | 28.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 26.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
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

## True Positives (13)

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0047] MF Mayonnaise 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel (tous les 14 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux commandes consécutives de 1 unité espacées exactement de 14 jours (les lundis 08/09 et 22/09). Bien que la date de prédiction soit un mercredi, les règles de gestion des jours hors cycle imposent de prédire la prochaine quantité probable plutôt que 0. Malgré l'absence de données en octobre, la stabilité parfaite des deux derniers points (1u) indique une demande de fond faible mais régulière pour ce produit bio premium. La prédiction est maintenue à 1 unité.

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (14 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité parfaite avec une commande de 1 unité tous les 14 jours (les lundis). Le client semble commander ce produit bio spécifique en volumes très faibles mais constants. Bien que la date de prédiction soit un mercredi, les règles de gestion hors cycle imposent de ne pas prédire 0 et de se baser sur la prochaine commande probable. Comme le volume est systématiquement de 1 unité lors des deux derniers mois, la prédiction est maintenue à 1.

</details>


<details>
<summary><strong>3. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique ou unique identifiée
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une unique commande de 1 unité enregistrée le 8 septembre 2025. En l'absence de données N-1 et de répétition du cycle de commande, la prédiction la plus probable repose sur la reconduction du volume de fond observé. Bien que le jour demandé (mercredi) diffère du jour initial (lundi), la règle pour les jours hors cycle impose de prédire la prochaine occurrence probable. Sans preuve d'augmentation de volume pour cette référence (limonade mangue passion 330ml), le maintien à 1 unité est le scénario minimisant le risque d'erreur (MAPE).

</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (nouveau produit ou arrêt)
- **Saisonnalité**: none
- **Tendance**: Absence de données historiques (0u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale d'historique (N-1 et période récente), il est impossible d'identifier un cycle de commande. Cependant, selon les directives B2B interdisant de prédire 0 pour un jour ouvré (mercredi), et en considérant qu'il s'agit d'une référence active (REB03), la quantité minimale de 1 unité est préconisée comme point de départ pour l'initialisation du stock ou pour couvrir un premier besoin potentiel, conformément à la recommandation de ne jamais utiliser 0 en cas d'incertitude sur un jour ouvré.

</details>


<details>
<summary><strong>5. [MF0047] MF Mayonnaise 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (données éparses)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1.5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec seulement deux points de données en 2024 (2u et 1u) et aucune commande récente sur les 3 derniers mois. Le produit semble être un article à rotation très lente ou commandé de manière ponctuelle. En l'absence de tendance récente, on se base sur la moyenne des volumes historiques (1.5u). Conformément aux règles de ne pas prédire 0 pour un produit actif, la quantité de 2u est recommandée pour couvrir le besoin minimal probable du prochain cycle, en privilégiant le volume le plus élevé observé (2024-08-05) pour éviter une rupture sur un petit conditionnement (Mayonnaise 250ml).

</details>


<details>
<summary><strong>6. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel espacé (tous les 2 à 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation extrêmement régulière de 1 unité par commande, bien que les intervalles soient longs. Le produit n'a pas été commandé depuis mai 2024, ce qui suggère un cycle de réapprovisionnement très lent ou un besoin ponctuel spécifique. En respectant les règles métier, bien que le mercredi soit hors du cycle habituel (lundi), nous prédisons la quantité de la prochaine commande probable. Le volume historique étant systématiquement de 1 unité, sans aucune variation ni outlier, la prédiction la plus précise est le maintien de cette unité.

</details>


<details>
<summary><strong>7. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (intervalles de 2 à 4 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation très faible et irrégulière (4 commandes en 18 mois). Les volumes oscillent strictement entre 1 et 2 unités. Bien que la date demandée soit un mercredi alors que le client commande habituellement en début de semaine (lundi/mardi), les règles de gestion hors cycle imposent de prédire la prochaine occurrence. Au vu de la stabilité historique (moyenne de 1,75u), la quantité la plus probable est de 2 unités pour couvrir le prochain besoin.

</details>


<details>
<summary><strong>8. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique / Très faible fréquence (tous les 2 à 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'historique montre un produit à très faible rotation sans commande depuis plus d'un an, ce qui indique un produit de niche ou une commande de réapprovisionnement ponctuelle. Le volume modal est de 2 unités (observé 3 fois sur 4). Bien que la commande demandée soit un mercredi alors que le client commande habituellement le lundi, nous suivons les règles de gestion hors cycle pour prédire la prochaine commande probable. Compte tenu de la stabilité du volume historique (hors la première commande de 1u), la quantité la plus probable pour un réapprovisionnement est de 2 unités.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 06:26:45: 1u
- 2025-09-08 06:53:29: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-22 06:26:45: 1u
- 2025-09-08 06:53:29: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 06:53:29: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [MF0047] MF Mayonnaise 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:27:48: 2u
- 2024-03-12 07:30:37: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:40:03: 1u
- 2024-08-05 06:27:48: 1u
- 2024-05-27 07:14:30: 1u
- 2024-03-12 07:30:37: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:27:48: 2u
- 2024-05-27 07:14:30: 1u
- 2024-03-12 07:30:37: 2u
- 2023-11-07 07:48:10: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-07 11:40:03: 1u
- 2024-08-05 06:27:48: 2u
- 2024-05-27 07:14:30: 2u
- 2024-03-12 07:30:37: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (25)

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
| [LB006] LB Brown (7,0%)  33CL | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Stock prédit: 0.4u (22j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: 0.4u (22j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: 0.3u (15j restants) → prédit 1u mais non commandé |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Stock prédit: -0.2u (-7j restants) → prédit 1u mais non commandé |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Stock prédit: -0.2u (-7j restants) → prédit 1u mais non commandé |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Stock prédit: -0.2u (-7j restants) → prédit 1u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Stock prédit: 0.1u (2j restants) → prédit 1u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Stock prédit: -0.9u (-16j restants) → prédit 1u mais non commandé |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [CB010] CB Jus de Pomme cubis 3l | 3 | Stock prédit: 0.4u (7j restants) → prédit 3u mais non commandé |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.1u (8j restants) → prédit 1u mais non commandé |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Stock prédit: 0.1u (8j restants) → prédit 1u mais non commandé |
| [RF003] REFIELD Maïs 500G  | 1 | Stock prédit: -0.3u (-11j restants) → prédit 1u mais non commandé |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [LEA10] LEAMO ginger beer bio 330ml | 1 | Stock prédit: 0.4u (29j restants) → prédit 1u mais non commandé |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Stock prédit: 0.3u (22j restants) → prédit 1u mais non commandé |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 1 | Stock prédit: -1.0u (-50j restants) → prédit 1u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.1u (17j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: -0.8u (-44j restants) → prédit 1u mais non commandé |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: -1.0u (-57j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock prédit: -0.8u (-52j restants) → prédit 1u mais non commandé |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Stock prédit: -0.2u (-16j restants) → prédit 1u mais non commandé |
| [MF0061] MF Compote | 1 | Stock prédit: -1.2u (-62j restants) → prédit 1u mais non commandé |


---

## False Negatives (9)

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
| [MF0014] MF Olives noires 500g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0029] MF Tarti Datte chili 250g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MF0051] MF Kidney Beans 500g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0009] Consigne casier | 9 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 54 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:15:13.289Z*
