# Rapport Backtest - Client TERRA NATURKOST HANDELS KG

## Contexte

- **Client** : TERRA NATURKOST HANDELS KG (ID: 3868)
- **Commande réelle** : S40371
- **Date commande** : 2025-11-14 15:19:09
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 8
- **Tokens**: 7,026 input + 2,286 output = 9,312 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 87.5% | 16 produits prédits, 14 corrects |
| **Rappel** | 87.5% | 16 produits réels, 14 détectés |
| **F1-Score** | 87.5% | Score équilibré global |

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
| **MAE** | 21.57 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 49.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 61.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -0.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 11 | Avec erreur |

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

## True Positives (14)

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
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | 48 | 32.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 48 | 48 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 64 | 80 | 16.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 32 | 80 | 48.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 25 | 50 | 25.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 50 | 50 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV136] LV Tartinade Betterave 190g | 25 | 25 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV159] LV Tartinade aux Truffes  135g  | 25 | 53 | 28.0 | 52.8% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV345] LV Spread KIDS 200ml Organic | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV342] LV Organic Broccoli Spread 190 g | 50 | 53 | 3.0 | 5.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV133] LV Tartinade Ananas Coco 190g | 50 | 25 | 25.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV189] LV Tartinade Houmous Type 380g | 75 | 25 | 50.0 | 200.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 16u vs Médiane: 32u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 16u (confidence: medium)
- 📊 **Baseline N-1**: 24u
- 📊 **Médiane**: 32u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 32u (66.7%)
- 📉 **Erreur Médiane**: 16u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme mensuel irrégulier (21 à 35 jours), majoritairement le vendredi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (32u vers 16u-32u alterné)
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande environ toutes les 3 à 4 semaines, principalement le vendredi. La dernière commande date du 17 octobre (il y a 27 jours), ce qui place la demande du jeudi 13 novembre dans la fenêtre habituelle de réapprovisionnement. Bien que la moyenne historique soit plus élevée, on observe une alternance de volume (32u / 16u) sur les deux derniers mois. Étant donné l'absence de pic saisonnier majeur en novembre N-1 et la tendance à la rationalisation des stocks observée sur les périodes récentes, une commande de 16 unités (1 carton standard probable) est la plus probable pour maintenir le roulement sans surstock.

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 48u vs Médiane: 48u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: high)
- 📊 **Baseline N-1**: 48u
- 📊 **Médiane**: 48u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~20-30j) avec une prédominance pour le vendredi
- **Saisonnalité**: weak
- **Tendance**: Stable à 48u
- **Outliers détectés**: 80u, 32u

**🧠 Raisonnement LLM:**
L'historique montre une stabilité remarquable à 48 unités (7 répétitions sur les 13 dernières commandes). Le cycle de commande actuel est de type mensuel. La commande précédente date du 17/10 (il y a 27 jours), ce qui correspond parfaitement à la fenêtre de réapprovisionnement habituelle. Bien que le jour soit un jeudi au lieu d'un vendredi, ce pattern a déjà été observé en septembre 2025 et avril 2024 avec des volumes maintenus. L'outlier de 80u en 2024 semble isolé et non saisonnier (septembre), et la baisse à 32u en septembre 2025 a été immédiatement compensée par un retour à 48u. La prédiction de 48u est la plus probable pour maintenir le stock fond de rayon.

</details>


<details>
<summary><strong>3. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 64u vs Médiane: 64u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 64u (confidence: high)
- 📊 **Baseline N-1**: 64u
- 📊 **Médiane**: 64u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 16u (20.0%)
- 📉 **Erreur Médiane**: 16u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de 20 à 30 jours, majoritairement le vendredi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive de 80u à 64u (-20%)
- **Outliers détectés**: 48u

**🧠 Raisonnement LLM:**
L'historique montre une transition nette d'un palier de 80u en 2024 vers un palier de 64u en 2025. Les trois dernières commandes (septembre et octobre 2025) sont parfaitement constantes à 64 unités, indépendamment du jour de la semaine (jeudi ou vendredi). L'intervalle depuis la dernière commande (17 octobre) est de 27 jours, ce qui correspond exactement au cycle de réapprovisionnement observé. Bien que la date de prédiction soit un jeudi, le client a déjà commandé un jeudi en septembre pour la même quantité. Il n'y a aucun signal suggérant un retour immédiat à 80u.

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 32u vs Médiane: 32u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 32u (confidence: high)
- 📊 **Baseline N-1**: 32u
- 📊 **Médiane**: 32u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 48u (60.0%)
- 📉 **Erreur Médiane**: 48u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de 21 jours (toutes les 3 semaines le vendredi)
- **Saisonnalité**: none
- **Tendance**: Stable à 32u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité parfaite sur les deux derniers points de données (32u). Le client suit un cycle de réapprovisionnement rigoureux toutes les 3 semaines le vendredi (intervalle exact de 21 jours entre le 26/09 et le 17/10). La date cible du 13/11 est le jeudi précédant l'échéance théorique du cycle de 3 semaines (qui serait le vendredi 14/11). Il s'agit très probablement d'une commande d'anticipation de fin de cycle. La quantité de 32u est donc extrêmement probable car elle correspond au volume de consommation standard par cycle identifié.

</details>


<details>
<summary><strong>5. [LV348] LV Tartinade Dattes-Chili 180g BE bio</strong> - LLM: 25u vs Médiane: 50u (Réel: 50u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: medium)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 50u
- ✅ **Réel commandé**: 50u
- 📉 **Erreur LLM**: 25u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel environ tous les 15 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 25u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique récent montre une stabilité parfaite sur les deux derniers points de données avec une quantité constante de 25 unités. Bien que les données soient limitées (pas d'historique N-1), le rythme de commande semble s'établir toutes les deux semaines environ. La commande précédente datant du 26/09, il y a eu une pause prolongée en octobre, mais la reprise sur un jeudi (jour déjà observé dans l'historique) avec une quantité stable de 25u est le scénario le plus probable pour maintenir le stock sans sur-stockage.

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 25u vs Médiane: 75u (Réel: 25u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: low)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 75u
- ✅ **Réel commandé**: 25u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 50u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Indéterminé (donnée unique)
- **Saisonnalité**: none
- **Tendance**: Stable à 25u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec une seule commande enregistrée (25u le vendredi 26 septembre), la base de données est trop limitée pour établir un cycle ou une tendance. En l'absence d'historique N-1 et face à un produit de type tartinade (agroalimentaire longue conservation relative), nous conservons le dernier volume observé comme référence standard (25u) pour la commande du jeudi 13 novembre, supposant une reconstitution de stock suite à un écoulement régulier.

</details>


<details>
<summary><strong>7. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 25u vs Médiane: 25u (Réel: 53u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 25u (confidence: medium)
- 📊 **Baseline N-1**: 25u
- 📊 **Médiane**: 25u
- ✅ **Réel commandé**: 53u
- 📉 **Erreur LLM**: 28u (52.8%)
- 📉 **Erreur Médiane**: 28u (52.8%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel environ tous les 15 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 25u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité parfaite sur les deux derniers points de commande (25 unités). L'intervalle observé initialement était de 15 jours (du 11/09 au 26/09). Bien qu'il y ait eu un arrêt des commandes en octobre, la date de prédiction (13 novembre) s'aligne sur un jeudi, identique à la première commande enregistrée. Le volume est constant et la demande semble calibrée par lots de 25 unités (possiblement un conditionnement carton ou une rotation de stock fixe).

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 32u
- 2025-09-26 09:47:05: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 11:39:30: 16u
- 2024-09-23 07:00:28: 32u
- 2024-08-16 11:44:09: 32u
- 2024-07-05 09:22:25: 16u
- 2024-05-06 12:17:20: 32u
- 2024-04-25 07:54:19: 32u
- 2024-03-27 14:20:05: 32u
- 2024-02-23 08:25:35: 48u
- 2024-01-26 09:38:43: 16u
- 2024-01-05 08:53:58: 32u

**✅ Quantité LLM**: 16u (confidence: medium)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 48u
- 2025-09-26 09:47:05: 48u
- 2025-09-11 14:14:00: 32u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 11:39:30: 48u
- 2024-09-23 07:00:28: 80u
- 2024-08-16 11:44:09: 48u
- 2024-07-05 09:22:25: 64u
- 2024-05-06 12:17:20: 32u
- 2024-04-25 07:54:19: 48u
- 2024-03-27 14:20:05: 48u
- 2024-02-23 08:25:35: 48u
- 2024-01-26 09:38:43: 48u
- 2024-01-05 08:53:58: 48u

**✅ Quantité LLM**: 48u (confidence: high)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>3. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 64u
- 2025-09-26 09:47:05: 64u
- 2025-09-11 14:14:00: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 11:39:30: 80u
- 2024-09-23 07:00:28: 48u
- 2024-08-16 11:44:09: 80u
- 2024-07-05 09:22:25: 80u
- 2024-05-06 12:17:20: 80u
- 2024-04-25 07:54:19: 80u
- 2024-03-27 14:20:05: 80u
- 2024-02-23 08:25:35: 64u
- 2024-01-26 09:38:43: 80u
- 2024-01-05 08:53:58: 64u

**✅ Quantité LLM**: 64u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-17 12:58:29: 32u
- 2025-09-26 09:47:05: 32u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 32u (confidence: high)
**📊 Quantité Réelle**: 80u

</details>


<details>
<summary><strong>5. [LV348] LV Tartinade Dattes-Chili 180g BE bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u
- 2025-09-11 14:14:00: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: medium)
**📊 Quantité Réelle**: 50u

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: low)
**📊 Quantité Réelle**: 25u

</details>


<details>
<summary><strong>7. [LV159] LV Tartinade aux Truffes  135g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-26 09:47:05: 25u
- 2025-09-11 14:14:00: 25u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 25u (confidence: medium)
**📊 Quantité Réelle**: 53u

</details>




---

## False Positives (2)

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
| [LV331] LV Tartinade Lentils Balsamico 190g | 25 | Stock prédit: -27.0u (-24j restants) → prédit 25u mais non commandé |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 75 | Stock prédit: -328.6u (-92j restants) → prédit 75u mais non commandé |


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
| [VID0009] Consigne casier | 256 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 1536 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:35:41.926Z*
