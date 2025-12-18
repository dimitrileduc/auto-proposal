# Rapport Backtest - Client SCHMETS  DELICATESSES, ACHAT

## Contexte

- **Client** : SCHMETS  DELICATESSES, ACHAT (ID: 8555)
- **Commande réelle** : S40197
- **Date commande** : 2025-11-07 12:51:16
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 6,209 input + 2,320 output = 8,529 total


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
| **MAE** | 8.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 29.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 46.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -24.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 63 | 65 | 2.0 | 3.1% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0094] FILOU MOUTARDE 700 GR | 20 | 30 | 10.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 7 | 3 | 4.0 | 133.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 44 | 40 | 4.0 | 10.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF0093] FILOU MOUTARDE 300GR | 35 | 50 | 15.0 | 30.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [PF1689] FILOU CURRY KETCH SQUEEZE 300 | 1 | 40 | 39.0 | 97.5% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (5 produits)


<details>
<summary><strong>1. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - LLM: 40u vs Médiane: 40u (Réel: 40u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 40u (confidence: medium)
- 📊 **Baseline N-1**: 40u
- 📊 **Médiane**: 40u
- ✅ **Réel commandé**: 40u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 23 à 24 jours (environ 3 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable à 40u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente une demande très stable de 40 unités par commande. L'intervalle observé entre les deux dernières commandes (septembre et octobre) est de 23 jours. La date de prédiction (06 novembre) se situe 24 jours après la dernière commande du 13 octobre, ce qui correspond parfaitement au cycle de réapprovisionnement identifié. En l'absence de données N-1 et face à une stabilité parfaite sur les volumes récents, le maintien de la quantité à 40 unités est la prédiction la plus probable.

</details>


<details>
<summary><strong>2. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM: 3u vs Médiane: 3u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 2u (40.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme irrégulier, environ toutes les 3 semaines
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (moyenne 2u à 4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très fragmenté. On observe une augmentation du volume unitaire passant de 2u (septembre 2024 et 2025) à 4u lors de la dernière commande d'octobre. La date de prédiction (jeudi) ne correspond pas aux jours de commande historiques (lundi/samedi), suggérant une commande de réapprovisionnement ponctuelle. La moyenne pondérée entre la stabilité historique (2u) et le pic récent (4u) suggère une quantité de 3 unités pour équilibrer le risque de surstockage et la tendance à la hausse.

</details>


<details>
<summary><strong>3. [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML</strong> - LLM: 63u vs Médiane: 70u (Réel: 65u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 63u (confidence: medium)
- 📊 **Baseline N-1**: 62.5u
- 📊 **Médiane**: 70u
- ✅ **Réel commandé**: 65u
- 📉 **Erreur LLM**: 2u (3.1%)
- 📉 **Erreur Médiane**: 5u (7.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~31 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse légère -7%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un cycle régulier de 30 à 32 jours observé entre les commandes de septembre et octobre. La commande actuelle intervient exactement 24 jours après la dernière, suggérant une légère accélération du réapprovisionnement ou un besoin de restockage anticipé. La moyenne glissante pondérée sur les deux derniers points montre une tendance stable autour de 65 unités, ajustée à 63 pour refléter la baisse de 5 unités observée lors du dernier passage.

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
- **Pattern temporel**: Cycle mensuel (~24-30 jours) observé sur les deux derniers relevés
- **Saisonnalité**: none
- **Tendance**: Stable à 20u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (2 points), mais montre une constance parfaite à 20 unités par commande avec un intervalle d'environ 23 jours (20 sept au 13 oct). La date de prédiction (6 nov) se situe 24 jours après la dernière commande, ce qui correspond exactement au cycle de réapprovisionnement observé. Sans données N-1 pour infirmer cette tendance, la répétition du volume de 20 unités est le scénario le plus probable.

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
- **Pattern temporel**: Inconnu - Absence de données historiques
- **Saisonnalité**: none
- **Tendance**: Indéterminée - Nouveau produit ou reprise d'activité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale de données historiques pour l'année précédente (N-1) et les 3 derniers mois, il est impossible d'établir un pattern statistique ou une tendance. Pour un produit B2B de type condiment (Curry Ketchup 300ml), la recommandation se base sur une unité minimale de commande pour tester la réactivation du flux ou répondre à un besoin ponctuel. En supply chain, sans signal de demande, la prédiction par défaut vise le 'safety stock' minimal ou l'unité de colisage la plus basse.

</details>




### 📊 Données d'Input LLM (5 produits)


<details>
<summary><strong>1. [PF0502] FILOU MOUTARDE SQUEEZE 300 ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 08:25:46: 40u
- 2025-09-20 05:57:22: 40u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 40u (confidence: medium)
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

**✅ Quantité LLM**: 63u (confidence: medium)
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

*Rapport généré automatiquement le 2025-12-18T11:34:21.049Z*
