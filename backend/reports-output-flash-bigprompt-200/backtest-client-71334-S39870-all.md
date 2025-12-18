# Rapport Backtest - Client BIODIS

## Contexte

- **Client** : BIODIS (ID: 71334)
- **Commande réelle** : S39870
- **Date commande** : 2025-10-22 12:36:11
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 11
- **Tokens**: 16,215 input + 3,385 output = 19,600 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 38.9% | 18 produits prédits, 7 corrects |
| **Rappel** | 100.0% | 7 produits réels, 7 détectés |
| **F1-Score** | 56.0% | Score équilibré global |

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
| **MAE** | 26.57 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 40.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 26.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
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
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 93 | 93 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 217 | 93 | 124.0 | 133.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 93 | 93 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 31 | 62 | 31.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2973] LD FR TARTINADE BIO ANANAS 200 | 31 | 31 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 62 | 62 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3200] LD FR TARTINADE BIO ASPERGE 180G | 62 | 31 | 31.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM: 93u vs Médiane: 93u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 93u (confidence: medium)
- 📊 **Baseline N-1**: 93u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~27-28 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse récente sur les volumes standards (+50% vs Septembre)
- **Outliers détectés**: 155u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande mensuel régulier (07/08, 04/09, 01/10). Le pic de 155u en août est traité comme un outlier (volume de lancement ou stock initial) car les volumes suivants se sont stabilisés entre 62u et 93u. La date cible du 21/10 se situe juste avant la fenêtre habituelle de commande (début de mois). Conformément aux consignes, nous prédisons le volume de la prochaine commande probable. Le volume a augmenté de 50% entre septembre (62u) et octobre (93u) ; nous maintenons ce dernier palier de 93u pour la commande à venir pour minimiser le MAPE face à cette tendance de croissance récente.

</details>


<details>
<summary><strong>2. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 217u vs Médiane: 186u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 217u (confidence: medium)
- 📊 **Baseline N-1**: 206.67u
- 📊 **Médiane**: 186u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 124u (133.3%)
- 📉 **Erreur Médiane**: 93u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~27-28 jours)
- **Saisonnalité**: none
- **Tendance**: Stable avec légère fluctuation (moyenne 206u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client suit un cycle de commande mensuel très régulier (07/08, 04/09, 01/10). Bien que la date du 21/10 soit légèrement anticipée par rapport à l'intervalle habituel de ~28 jours (qui tomberait plutôt le 29/10), les règles métier dictent de ne jamais prédire 0 pour un jour hors cycle et de projeter la prochaine commande probable. Les volumes oscillent entre 186 et 217 unités sans tendance de baisse. La dernière commande et celle d'août étant identiques à 217u, je sélectionne cette valeur comme la plus probable pour maintenir le stock du client sur son nouveau mois de consommation.

</details>


<details>
<summary><strong>3. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 93u vs Médiane: 93u (Réel: 93u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 93u (confidence: high)
- 📊 **Baseline N-1**: 93u
- 📊 **Médiane**: 93u
- ✅ **Réel commandé**: 93u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~27-30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 93u
- **Outliers détectés**: 155u

**🧠 Raisonnement LLM:**
L'historique montre un cycle mensuel très régulier. L'intervalle entre les deux premières commandes était de 28 jours, et le dernier intervalle était de 27 jours. La valeur de 155u en août semble être un stock initial ou un outlier de lancement, car les deux commandes suivantes sont parfaitement identiques à 93u (stabilité de tendance de 0%). Bien que la date demandée (mardi 21) soit légèrement plus précoce dans la semaine que les précédentes (mercredi/jeudi), elle correspond à l'échéance du cycle de ~27 jours calculé depuis le 01/10. En B2B agro, la répétition exacte de la quantité (93u) sur deux mois consécutifs indique un volume de contrat ou de fond de rayon fixe.

</details>


<details>
<summary><strong>4. [PF2972] LD FR TARTINADE BIO OLIVE 200</strong> - LLM: 31u vs Médiane: 47u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: low)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 47u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 31u (50.0%)
- 📉 **Erreur Médiane**: 15u (24.2%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier / Ponctuel (Cycle ~55j)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive -50%
- **Outliers détectés**: 62u

**🧠 Raisonnement LLM:**
L'historique est très limité (2 points). La commande du mois d'août (62u) semble être un stock de sécurité initial ou une promotion de lancement, car elle a été divisée par deux lors de la commande suivante le 1er octobre (31u). Le cycle de réapprovisionnement semble long (~2 mois). Bien que la date de prédiction soit un mardi et que les commandes précédentes soient tombées un jeudi puis un mercredi, il n'y a pas assez de données pour confirmer un jour de cycle strict. En suivant la règle de privilégier la dernière valeur cohérente avec la tendance immédiate (baisse de volume suite au pic initial), je prédis 31u pour la prochaine occurrence de commande probable afin de minimiser le MAPE sur le fond de rayon réel sans surstocker l'outlier initial de 62u.

</details>


<details>
<summary><strong>5. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - LLM: 31u vs Médiane: 31u (Réel: 31u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: high)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 31u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 31u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une régularité parfaite avec trois commandes consécutives de 31 unités à environ 30 jours d'intervalle (07/08, 04/09, 01/10). Bien que la date de prédiction (21/10) soit légèrement plus précoce que l'intervalle strict de 30 jours, le client opère sur un flux de fond stable. Conformément aux guidelines B2B, nous prédisons la quantité du prochain cycle probable. La constance absolue du volume (31u) sur les trois derniers mois indique une demande contractuelle ou une gestion de stock fixe, ce qui justifie une prédiction identique.

</details>


<details>
<summary><strong>6. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - LLM: 62u vs Médiane: 62u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Baseline N-1**: 62u
- 📊 **Médiane**: 62u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme mensuel (28-30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 62u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un comportement de commande mensuel régulier (62 unités le 07/08 et le 04/09). Bien que la date de prédiction soit un mardi et que les commandes précédentes aient eu lieu un jeudi, l'intervalle suggère que la prochaine commande est attendue au cours de la deuxième quinzaine d'octobre. En l'absence de données N-1 pour confirmer une saisonnalité et face à une stabilité parfaite sur les deux derniers points (62u), la prédiction la plus précise est le maintien du volume de fond. Conformément aux règles, on ne prédit pas 0 malgré le décalage de jour de la semaine.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 11:19:31: 93u
- 2025-09-04 13:24:31: 62u
- 2025-08-07 12:45:07: 155u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 93u (confidence: medium)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>2. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 11:19:31: 217u
- 2025-09-04 13:24:31: 186u
- 2025-08-07 12:45:07: 217u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 217u (confidence: medium)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>3. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 11:19:31: 93u
- 2025-09-04 13:24:31: 93u
- 2025-08-07 12:45:07: 155u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 93u (confidence: high)
**📊 Quantité Réelle**: 93u

</details>


<details>
<summary><strong>4. [PF2972] LD FR TARTINADE BIO OLIVE 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 11:19:31: 31u
- 2025-08-07 12:45:07: 62u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 31u (confidence: low)
**📊 Quantité Réelle**: 62u

</details>


<details>
<summary><strong>5. [PF2973] LD FR TARTINADE BIO ANANAS 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-01 11:19:31: 31u
- 2025-09-04 13:24:31: 31u
- 2025-08-07 12:45:07: 31u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 31u (confidence: high)
**📊 Quantité Réelle**: 31u

</details>


<details>
<summary><strong>6. [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-04 13:24:31: 62u
- 2025-08-07 12:45:07: 62u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 62u (confidence: medium)
**📊 Quantité Réelle**: 62u

</details>




---

## False Positives (11)

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
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 40 | Stock prédit: 7.0u (4j restants) → prédit 40u mais non commandé |
| [PF1892] LD TARTINADE BIO TRUFFES 135G | 100 | Stock prédit: 9.5u (1j restants) → prédit 100u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 31 | Stock prédit: 0.3u (0j restants) → prédit 31u mais non commandé |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 25 | Stock prédit: 10.0u (12j restants) → prédit 25u mais non commandé |
| [PF3349] LD FR TARTINADE BIO AVOCAT 180G | 62 | Stock prédit: 12.4u (4j restants) → prédit 62u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 434 | Stock prédit: -136.4u (-10j restants) → prédit 434u mais non commandé |
| [PF3361] LD FR TARTINADE BIO OIGNON 180G | 62 | Stock prédit: -34.6u (-26j restants) → prédit 62u mais non commandé |
| [PF1690] LD BBQ BIO 300G | 25 | Stock prédit: -16.3u (-37j restants) → prédit 25u mais non commandé |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 25 | Stock prédit: -16.3u (-37j restants) → prédit 25u mais non commandé |
| [PF1698] CB9007 LD FR VINAI CIBOULE BIO PET 250ML | 40 | Stock prédit: -20.1u (-38j restants) → prédit 40u mais non commandé |
| [PF3247] AA0248 - LD FR TARTINADE BIO KIDS 180G | 47 | Stock prédit: -7.9u (-12j restants) → prédit 47u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:14:53.262Z*
