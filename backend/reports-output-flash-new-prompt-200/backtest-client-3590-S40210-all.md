# Rapport Backtest - Client MAISON DESPRIET SA

## Contexte

- **Client** : MAISON DESPRIET SA (ID: 3590)
- **Commande réelle** : S40210
- **Date commande** : 2025-11-07 12:48:24
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 8,291 input + 2,732 output = 11,023 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.6% | 9 produits prédits, 5 corrects |
| **Rappel** | 83.3% | 6 produits réels, 5 détectés |
| **F1-Score** | 66.7% | Score équilibré global |

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
| **MAE** | 84.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 53.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 46.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -53.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
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

## True Positives (5)

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
| [PF0078] FILOU CHASSEUR 5 L | 240 | 480 | 240.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1140] FILOU SAUCE CHASSEUR 850G | 4 | 8 | 4.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0075] FILOU CHASSEUR  10 L | 118 | 264 | 146.0 | 55.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3266] JF SAUCE BEARNAISE 3L | 10 | 40 | 30.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0084] FILOU CARBONNADES 800 GR | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 240u vs Médiane: 160u (Réel: 480u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 240u (confidence: high)
- 📊 **Baseline N-1**: 213.33u
- 📊 **Médiane**: 160u
- ✅ **Réel commandé**: 480u
- 📉 **Erreur LLM**: 240u (50.0%)
- 📉 **Erreur Médiane**: 320u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire, principalement le lundi
- **Saisonnalité**: weak
- **Tendance**: Hausse stabilisée à 240u
- **Outliers détectés**: 320u, 320u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Les pics à 320u observés en août 2024 et septembre 2024 ont été isolés comme promotionnels. La demande de fond se stabilise autour de 160-240u. Étape 2 (Saisonnalité): Comparaison N-1 montre une activité soutenue en fin d'année (octobre/novembre) avec des volumes oscillant entre 160 et 240u. Étape 3 (Tendance): On observe une accélération nette sur les deux dernières semaines avec des commandes constantes de 240u le lundi. Étape 4 (Recommandation): Bien que nous soyons un jeudi (hors cycle principal du lundi), le volume de 240u est devenu la nouvelle norme de consommation hebdomadaire pour ce client. Nous recommandons 240u pour couvrir la semaine à venir et maintenir le stock de sécurité face à cette tendance haussière confirmée.

</details>


<details>
<summary><strong>2. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - LLM: 4u vs Médiane: 4u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 4u (50.0%)
- 📉 **Erreur Médiane**: 4u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire dominante le lundi
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 4-5u par semaine
- **Outliers détectés**: 15u, 15u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Les pics de 15u (août 2024 et octobre 2025) sont écartés car ils doublent la moyenne habituelle, indiquant des promotions ou du stockage ponctuel. La demande de fond se stabilise autour de 4-5u. ÉTAPE 2 (Saisonnalité) : On observe une légère hausse d'activité en octobre/novembre N-1, cohérente avec l'utilisation de la 'sauce chasseur' en période automnale, mais l'impact reste modéré. ÉTAPE 3 (Tendance) : Le rythme récent confirme une base de 5u le 03/11. ÉTAPE 4 (Recommandation) : Bien que la demande soit formulée un jeudi alors que le cycle est le lundi, le volume récent suggère un besoin de 4u pour couvrir la fin de semaine et le début de cycle suivant sans engendrer de sur-stock significatif.

</details>


<details>
<summary><strong>3. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 118u vs Médiane: 132u (Réel: 264u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 118u (confidence: high)
- 📊 **Baseline N-1**: 110u
- 📊 **Médiane**: 132u
- ✅ **Réel commandé**: 264u
- 📉 **Erreur LLM**: 146u (55.3%)
- 📉 **Erreur Médiane**: 132u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire, principalement le lundi
- **Saisonnalité**: strong
- **Tendance**: Hausse récente +15%
- **Outliers détectés**: 208u, 18u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Elimination de l'outlier de 208u (Août N-1) et de la régul de 18u. La demande de fond se stabilise autour de 110u. ÉTAPE 2 (Saisonnalité): Forte augmentation observée en fin d'année (Octobre/Novembre) sur N-1, confirmée par les volumes 2025. ÉTAPE 3 (Tendance): Passage d'un socle de 88u à 132u sur les 3 dernières commandes, indiquant une accélération saisonnière. ÉTAPE 4 (Recommandation): Le passage de la commande un jeudi (hors cycle habituel du lundi) suggère un besoin de réajustement pour tenir la fin de semaine. On préconise 118u (moyenne pondérée récente) pour sécuriser le stock sans surexposition.

</details>


<details>
<summary><strong>4. [PF3266] JF SAUCE BEARNAISE 3L</strong> - LLM: 10u vs Médiane: 20u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 10u (confidence: medium)
- 📊 **Baseline N-1**: 8.5u
- 📊 **Médiane**: 20u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 30u (75.0%)
- 📉 **Erreur Médiane**: 20u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 25 à 30 jours, historiquement jours de début de semaine (Lundi/Jeudi)
- **Saisonnalité**: weak
- **Tendance**: Hausse modérée +20% sur la base de fond
- **Outliers détectés**: 20u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): La commande de 20u en septembre 2025 est identifiée comme un outlier (2.5x la moyenne historique de 8u). La demande de fond se stabilise autour de 8-9u. ÉTAPE 2 (Saisonnalité): Pas de pic majeur sur la fin d'année en N-1, le produit reste stable en période hivernale. ÉTAPE 3 (Tendance): On observe une légère accélération du volume de fond (passant de 8u en N-1 à 12u lors de la dernière commande d'octobre), soit une hausse de 20-30%. ÉTAPE 4 (Recommandation): En se basant sur la dernière commande 'normale' de 12u et en restant conservateur pour éviter le surstockage sur un produit 3L, une quantité de 10u permet de couvrir le cycle de 30 jours tout en intégrant la tendance haussière récente.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 08:38:17: 240u
- 2025-10-27 06:58:44: 240u
- 2025-10-23 09:13:38: 80u
- 2025-10-20 08:16:09: 160u
- 2025-10-20 08:08:48: 160u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 06:37:40: 160u
- 2024-10-21 06:08:37: 240u
- 2024-10-10 08:27:59: 160u
- 2024-09-30 07:21:41: 80u
- 2024-09-26 08:50:24: 240u
- 2024-09-16 11:50:49: 320u
- 2024-09-09 11:38:48: 240u
- 2024-08-27 11:41:12: 160u
- 2024-08-27 11:40:22: 320u
- 2024-08-26 08:27:23: 160u
- 2024-08-14 07:59:29: 160u
- 2024-08-12 08:25:02: 160u

**✅ Quantité LLM**: 240u (confidence: high)
**📊 Quantité Réelle**: 480u

</details>


<details>
<summary><strong>2. [PF1140] FILOU SAUCE CHASSEUR 850G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 08:38:17: 5u
- 2025-10-27 06:58:44: 2u
- 2025-10-23 09:13:38: 15u
- 2025-10-20 08:16:09: 4u
- 2025-10-20 08:08:48: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 06:37:40: 10u
- 2024-10-21 06:08:37: 4u
- 2024-09-16 11:50:49: 6u
- 2024-08-12 08:25:02: 15u
- 2024-06-24 09:19:20: 4u
- 2024-06-17 07:40:59: 10u
- 2024-06-17 07:22:49: 8u
- 2024-06-06 12:27:23: 4u
- 2024-05-31 06:50:36: 4u
- 2024-05-27 07:09:19: 2u
- 2024-04-04 08:57:19: 10u
- 2024-03-07 02:48:05: 2u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>


<details>
<summary><strong>3. [PF0075] FILOU CHASSEUR  10 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-27 06:58:44: 132u
- 2025-10-20 08:16:09: 88u
- 2025-10-06 09:21:48: 88u
- 2025-09-29 05:47:52: 132u
- 2025-09-11 08:10:53: 132u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 06:08:37: 156u
- 2024-09-26 08:50:24: 156u
- 2024-09-16 11:50:49: 104u
- 2024-09-09 11:38:48: 104u
- 2024-08-27 11:40:22: 104u
- 2024-08-14 07:59:29: 208u
- 2024-07-24 07:35:24: 18u
- 2024-07-24 06:06:23: 156u
- 2024-06-17 07:40:59: 104u
- 2024-06-06 12:27:23: 104u
- 2024-05-31 06:50:36: 52u
- 2024-05-23 06:43:22: 104u

**✅ Quantité LLM**: 118u (confidence: high)
**📊 Quantité Réelle**: 264u

</details>


<details>
<summary><strong>4. [PF3266] JF SAUCE BEARNAISE 3L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-06 09:21:48: 12u
- 2025-09-11 08:10:53: 20u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 06:08:37: 10u
- 2024-09-26 08:50:24: 6u
- 2024-09-16 11:50:49: 10u
- 2024-09-09 11:38:48: 8u
- 2024-08-27 11:40:22: 10u
- 2024-08-14 07:59:29: 8u
- 2024-07-24 07:35:24: 6u
- 2024-07-24 06:06:23: 10u
- 2024-06-17 07:40:59: 6u
- 2024-06-06 12:27:23: 8u
- 2024-05-31 06:50:36: 6u
- 2024-05-23 06:43:22: 4u

**✅ Quantité LLM**: 10u (confidence: medium)
**📊 Quantité Réelle**: 40u

</details>




---

## False Positives (4)

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
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 1 | Stock prédit: 0.4u (9j restants) → prédit 1u mais non commandé |
| [PF3271] JF WASABI MAYONNAISE 925ML | 1 | Stock prédit: 0.0u (1j restants) → prédit 1u mais non commandé |
| [PF0524] FILOU SAUCE TOMATE 815 GR | 6 | Stock prédit: -0.5u (-5j restants) → prédit 6u mais non commandé |
| [PF3290] JF MAYO BARAKI 925ML | 1 | Stock prédit: -0.8u (-48j restants) → prédit 1u mais non commandé |


---

## False Negatives (1)

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
| [PF0088] FILOU VOL AU VENT 800 GR | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:08:26.684Z*
