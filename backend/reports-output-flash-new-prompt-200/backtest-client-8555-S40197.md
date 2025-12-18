# Rapport Backtest - Client SCHMETS  DELICATESSES, ACHAT

## Contexte

- **Client** : SCHMETS  DELICATESSES, ACHAT (ID: 8555)
- **Commande réelle** : S40197
- **Date commande** : 2025-11-07 12:51:16
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 7,219 input + 3,135 output = 10,354 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 71.4% | 14 produits prédits, 10 corrects |
| **Rappel** | 90.9% | 11 produits réels, 10 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 8.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 29.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 46.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -23.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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

## True Positives (10)

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
| [PF0502] FILOU MOUTARDE SQUEEZE 300 ML | 40 | 40 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1539] FILOU BOULETTE CHASSEUR 800G | 2 | 10 | 8.0 | 80.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 3 | 5 | 2.0 | 40.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0084] FILOU CARBONNADES 800 GR | 3 | 5 | 2.0 | 40.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 65 | 65 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0094] FILOU MOUTARDE 700 GR | 20 | 30 | 10.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 7 | 3 | 4.0 | 133.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 44 | 40 | 4.0 | 10.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0093] FILOU MOUTARDE 300GR | 35 | 50 | 15.0 | 30.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 1 | 40 | 39.0 | 97.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: low)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel approximatif (environ 23-30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 40u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un historique très limité (2 commandes). Étape 1 : Les deux commandes sont identiques (40u), aucune anomalie détectée. Étape 2 : Absence de données N-1 pour confirmer une saisonnalité, impact considéré comme nul par défaut. Étape 3 : La tendance est strictement stable sur les deux derniers mois avec un volume de 40 unités par commande. Étape 4 : Le délai entre les deux dernières commandes est de 23 jours ; la commande actuelle intervient 24 jours après la dernière, ce qui suggère le maintien du volume habituel de 40 unités pour couvrir le cycle mensuel à venir sans risque de sur-stockage massif au vu de la stabilité observée, bien que la confiance soit faible due au manque de profondeur historique (n=2). Nous recommandons 40u en restant conservateur sur le volume historique constant par commande plutôt que sur un lissage quotidien car les clients B2B semblent commander par 'batch' complet sur ce produit (moutarde squeeze). Aucun signe de hausse ou de baisse n'étant visible, la stabilité prime pour cette recommandation d'expert senior en l'absence de signaux faibles contraires. Étant donné l'écart de 24 jours (très proche du cycle précédent), la commande est cohérente temporellement avec le flux habituel identifié par les archives disponibles (Cycle 23-30 jours).

</details>


<details>
<summary><strong>2. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM: 3u vs Médiane: 3u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-linéaire (toutes les 3 à 4 semaines environ)
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (moyenne 2u en 2024 vs 3u fin 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune commande n'est identifiée comme outlier (volumes faibles et cohérents entre 2u et 4u). Étape 2: La saisonnalité est jugée faible mais le produit (carbonnades) est typique des plats mijotés d'automne/hiver, justifiant l'augmentation observée en octobre. Étape 3: La tendance récente montre un volume moyen de 3u sur les deux dernières commandes contre 2u historiquement. Étape 4: En l'absence de commande depuis 24 jours, un besoin de réapprovisionnement est probable. On retient une base de 3u pour suivre la tendance de consommation automnale tout en restant conservateur face à l'irrégularité des dates de commande.

</details>


<details>
<summary><strong>3. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 65u vs Médiane: 70u (Réel: 65u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 65u (confidence: low)
- 📊 **Baseline N-1**: 67.5u
- 📊 **Médiane**: 70u
- ✅ **Réel commandé**: 65u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 5u (7.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Approximativement mensuel (cycle de 30-32 jours)
- **Saisonnalité**: none
- **Tendance**: Légère baisse (-7%)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante détectée sur les deux points de données (65u et 70u). Étape 2: Aucune donnée N-1 disponible pour confirmer une saisonnalité, impact considéré comme nul par défaut. Étape 3: On observe un cycle mensuel. La commande d'octobre (65u) est légèrement inférieure à celle de septembre (70u), indiquant une tendance stable à légèrement baissière. Étape 4: La moyenne lissée est de 67.5u, mais étant donné la légère baisse récente et l'absence d'historique long, une approche conservatrice à 65u est privilégiée pour éviter le sur-stockage sur un seau de 1000ML, tout en respectant le rythme de réapprovisionnement mensuel constaté (dernière commande il y a 24 jours). La confiance est faible due au très faible nombre de points de données (n=2). Sans données N-1, nous restons sur la consommation réelle constatée en période récente (P-1). Les commandes tombent entre le 11 et le 13 du mois habituellement, la demande du 6 novembre est légèrement anticipée par rapport au cycle de 30 jours, justifiant d'autant plus la prudence sur le volume car le stock de sécurité n'est probablement pas encore épuisé totalement car le cycle n'est pas terminé (24j/30j). Cependant, pour maintenir le stock opérationnel en B2B, 65u est le volume cible cohérent avec le dernier flux observé. Rapporté au prorata des jours restants, on pourrait descendre plus bas, mais les unités logistiques B2B imposent souvent des volumes stables par commande (palettisation/colisage). 65u est donc retenu comme valeur de sécurité basse. Le jour de la semaine (jeudi) s'aligne avec l'historique de septembre, validant la pertinence de la commande ce jour-là sur un cycle flexible autour de la dizaine du mois. Le volume final recommandé de 65 unités sécurise la disponibilité pour le mois de novembre sans risque majeur d'obsolescence ou de coût de stockage excessif pour ce format seau.

</details>


<details>
<summary><strong>4. [PF0094] FILOU MOUTARDE 700 GR</strong> - LLM: 20u vs Médiane: 20u (Réel: 30u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 20u (confidence: low)
- 📊 **Baseline N-1**: 20u
- 📊 **Médiane**: 20u
- ✅ **Réel commandé**: 30u
- 📉 **Erreur LLM**: 10u (33.3%)
- 📉 **Erreur Médiane**: 10u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle erratique (intervalle de 23 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 20u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les deux commandes historiques sont identiques (20u). Étape 2: Aucune donnée N-1 disponible pour évaluer la saisonnalité, impact considéré comme nul par défaut. Étape 3: La tendance est parfaitement stable en volume (20u) bien que la fréquence soit irrégulière (23 jours d'écart). Étape 4: La demande de fond est de 20 unités. En l'absence de données plus denses ou de signes de croissance, le maintien du volume historique de 20 unités est la recommandation la plus prudente pour ce format pro (700g). La confiance reste faible car nous n'avons que deux points de données récents et aucun historique saisonnier pour confirmer la récurrence de novembre par rapport à octobre/septembre. La commande intervient un jeudi, rompant avec les jours précédents, ce qui suggère une commande de réapprovisionnement ponctuelle basée sur le besoin réel plutôt qu'un cycle logistique rigide de livraison hebdomadaire spécifique au client/fournisseur (ex: pas de cycle 'chaque lundi').

</details>


<details>
<summary><strong>5. [PF1689] FILOU CURRY KETCH SQUEEZE 300</strong> - LLM: 1u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 39u (97.5%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Inconnu - Première commande détectée
- **Saisonnalité**: none
- **Tendance**: Indéterminée - Lancement ou nouveau référencement
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune donnée historique disponible pour identifier des outliers. ÉTAPE 2 (Saisonnalité): Impact impossible à évaluer sans historique N-1 ou N-2. ÉTAPE 3 (Tendance): Produit sans historique récent, suggérant soit un nouveau référencement, soit une réactivation. ÉTAPE 4 (Recommandation): En l'absence totale de données de consommation, une approche ultra-conservatrice est appliquée pour minimiser le risque de stock mort (Slow Mover). On recommande la quantité minimale unitaire de 1 pour tester la demande réelle ou répondre à un besoin ponctuel spécifique.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 40u
- 2025-09-20 05:57:22: 40u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 40u (confidence: low)
**📊 Quantité Réelle**: 40u

</details>


<details>
<summary><strong>2. [PF0084] FILOU CARBONNADES 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 4u
- 2025-09-20 05:57:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 07:22:41: 2u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>3. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 65u
- 2025-09-11 08:06:57: 70u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 65u (confidence: low)
**📊 Quantité Réelle**: 65u

</details>


<details>
<summary><strong>4. [PF0094] FILOU MOUTARDE 700 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 20u
- 2025-09-20 05:57:22: 20u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 20u (confidence: low)
**📊 Quantité Réelle**: 30u

</details>


<details>
<summary><strong>5. [PF1689] FILOU CURRY KETCH SQUEEZE 300</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
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
| [PF0075] FILOU CHASSEUR  10 L | 10 | Stock prédit: 6.1u (18j restants) → prédit 10u mais non commandé |
| [PF0077] FILOU PROVENCALE 5 L | 10 | Stock prédit: 6.1u (18j restants) → prédit 10u mais non commandé |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 40 | Stock prédit: 0.0u (0j restants) → prédit 40u mais non commandé |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 5 | Stock prédit: 2.0u (18j restants) → prédit 5u mais non commandé |


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
| [PF0078] FILOU CHASSEUR 5 L | 30 | Stock suffisant: 23.5u (43j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:09:00.540Z*
