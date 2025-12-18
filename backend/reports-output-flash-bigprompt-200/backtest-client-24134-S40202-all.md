# Rapport Backtest - Client Terre de fromages S.A

## Contexte

- **Client** : Terre de fromages S.A (ID: 24134)
- **Commande réelle** : S40202
- **Date commande** : 2025-11-14 10:30:22
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 12
- **Tokens**: 18,147 input + 3,441 output = 21,588 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 22 produits prédits, 11 corrects |
| **Rappel** | 73.3% | 15 produits réels, 11 détectés |
| **F1-Score** | 59.5% | Score équilibré global |

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
| **MAE** | 1.36 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 43.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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

## True Positives (11)

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
| [LV146] LV Sauce Aïoli 200 ml | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 6 | 4.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV145] LV Sauce Tartare 200 ml  | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ❌ Non | 📊 Médiane |
| [LV132] LV Tartinade Houmous type 190g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes (1 seule commande)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (1.0u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Avec une seule donnée historique (1u le mercredi 08/10), il est impossible d'établir un cycle de commande récurrent. Toutefois, en suivant les guidelines B2B interdisant une prédiction nulle pour cause de jour hors cycle, je me base sur la dernière et unique observation. La quantité de 1 unité (sauce Aïoli 200ml) suggère un besoin de dépannage ou un faible débit récurrent. Je prédis donc le maintien de cette unité pour la prochaine commande probable, peu importe que celle-ci tombe le jeudi demandé ou le mercredi habituel.

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 3u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec accélération lors du quatrième trimestre
- **Saisonnalité**: strong
- **Tendance**: Baisse par rapport à N-1
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
L'historique montre une saisonnalité marquée en fin d'année (10u en novembre 2024), mais cette valeur de 10u apparaît comme un outlier ou un surstockage ponctuel car les commandes suivantes en 2025 sont beaucoup plus faibles (2u en octobre 2025). Le produit 'Tartinade aux Truffes' est typiquement saisonnier pour les fêtes de fin d'année. On note une reprise de l'activité en octobre/novembre. Bien que 10u aient été commandés l'an dernier, la tendance actuelle est à la baisse (-50% à -60% sur les volumes récents). Je préconise 3 unités : une légère augmentation par rapport aux 2 unités d'octobre pour anticiper la demande de novembre, tout en restant prudent face à la baisse structurelle du volume par rapport à N-1.

</details>


<details>
<summary><strong>3. [LV145] LV Sauce Tartare 200 ml </strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Unique commande identifiée le jeudi 11/09 (Intervalle inconnu)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée de 1 unité le jeudi 11 septembre 2025. La date de prédiction (jeudi 13 novembre) correspond au même jour de la semaine. En l'absence d'autres données ou de saisonnalité N-1, la dernière valeur observée (1u) constitue la base la plus probable et la plus précise pour ce produit.

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier court terme, environ 45-60 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -25%
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
L'historique montre une faible fréquence de commande avec un volume en légère diminution. En 2024 à la même période (novembre), une commande de 10u a été enregistrée, mais celle-ci semble être un outlier au regard de la moyenne historique (environ 5u) et de la dernière commande très basse de 3u en septembre 2025. Compte tenu du délai de 2 mois entre la dernière commande et aujourd'hui, un léger réapprovisionnement est attendu. Je base la prédiction sur la moyenne pondérée excluant l'outlier de 10u, soit environ 4u, pour refléter la baisse de régime observée sur ce produit Bio.

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande spot / irrégulière (intervalles de 2 à 4 mois)
- **Saisonnalité**: none
- **Tendance**: Stabilité à bas volume (2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible fréquence de commande sans cycle hebdomadaire ou mensuel strict. Cependant, on observe deux types de volumes : 6 unités (3 fois en 2024) et 2 unités (3 fois entre 2024 et 2025). La commande la plus récente (septembre 2025) était de 2 unités un jeudi. En l'absence de tendance à la hausse ou de saisonnalité marquée sur ce produit spécifique (tartinade), et suivant la règle de privilégier la tendance immédiate pour les données éparses, la quantité la plus probable est le maintien à 2 unités.

</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 3u vs Médiane: 6u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 4u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique avec faible fréquence (2-3 mois d'intervalle)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (3-4u)
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
L'historique montre une demande très sporadique avec de longs intervalles entre les commandes. La dernière commande enregistrée remonte à septembre 2025 (il y a 2 mois) pour 3 unités. En analysant les données N-1 sur la même période (septembre 2024), on observe un volume de 6 unités, mais la tendance 2025 semble plus conservatrice. Le jeudi 13 novembre correspond à un jour habituel de commande pour ce client. Compte tenu de la faible rotation et du dernier point de donnée récent (3u), la prédiction la plus probable pour minimiser le MAPE est le maintien du dernier volume observé, les pics à 8u étant considérés comme des outliers historiques non répétés en 2025.

</details>


<details>
<summary><strong>7. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle éparse, approximativement semestriel ou événementiel
- **Saisonnalité**: weak
- **Tendance**: Stable à baisse légère (3-4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible fréquence de commande sans rythme hebdomadaire strict. On observe une stabilité relative entre 2u et 4u sur deux ans. La commande la plus récente (septembre 2025) a été passée un jeudi pour 3u. En l'absence de tendance haussière et compte tenu du volume N-1 à la même période (4u en novembre 2024), la valeur de 3u est la plus probable pour maintenir le stock sans sur-stockage, s'alignant sur le dernier point de donnée connu.

</details>


<details>
<summary><strong>8. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 4u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande ponctuelle / Cycle long (~30-90 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 3-4u
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
L'historique montre une récurrence marquée le jeudi. Bien que le volume soit faible et espacé, la dernière commande effectuée en septembre 2025 (4u) est cohérente avec la base historique de 2024 (3u-6u). Le pic de 6u en juin 2024 semble exceptionnel (doublon ou stock de sécurité). On se base sur la dernière valeur observée qui valide la tendance actuelle sur ce jour de semaine spécifique.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [LV146] LV Sauce Aïoli 200 ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:15:49: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:15:49: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-12 07:25:49: 10u
- 2024-09-19 06:59:28: 4u
- 2024-06-20 11:08:54: 2u
- 2024-06-07 11:26:46: 2u
- 2024-05-27 07:25:56: 3u
- 2024-04-10 10:25:30: 2u
- 2024-03-05 07:47:58: 5u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [LV145] LV Sauce Tartare 200 ml </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:54:54: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:54:54: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-12 07:25:49: 10u
- 2024-09-19 06:59:28: 6u
- 2024-06-20 11:08:54: 2u
- 2024-05-27 07:25:56: 4u
- 2024-04-10 10:25:30: 6u
- 2024-03-05 07:47:58: 2u
- 2024-01-03 08:55:55: 8u

**✅ Quantité LLM**: 4u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV131] LV Tartinade Potiron 190g</strong> - ❌ LLM Échoué (fallback médiane)</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:54:54: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-12 07:25:49: 6u
- 2024-09-19 06:59:28: 6u
- 2024-04-10 10:25:30: 3u
- 2024-03-05 07:47:58: 6u

**📊 Quantité Médiane (fallback)**: 3u
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:54:54: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-12 07:25:49: 6u
- 2024-09-19 06:59:28: 2u
- 2024-05-27 07:25:56: 2u
- 2024-04-10 10:25:30: 6u
- 2024-03-05 07:47:58: 2u
- 2024-01-03 08:55:55: 6u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:54:54: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 06:59:28: 6u
- 2024-06-20 11:08:54: 3u
- 2024-06-07 11:26:46: 2u
- 2024-05-27 07:25:56: 3u
- 2024-04-10 10:25:30: 4u
- 2024-03-05 07:47:58: 2u
- 2024-01-03 08:55:55: 8u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:54:54: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-12 07:25:49: 4u
- 2024-09-19 06:59:28: 2u
- 2024-05-27 07:25:56: 2u
- 2024-04-10 10:25:30: 4u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:54:54: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-19 06:59:28: 3u
- 2024-06-20 11:08:54: 6u
- 2024-06-07 11:26:46: 6u
- 2024-05-27 07:25:56: 2u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 4u

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Stock prédit: -0.3u (-3j restants) → prédit 2u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 0.3u (6j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.3u (6j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 0.3u (6j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | Stock prédit: 0.3u (6j restants) → prédit 2u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Stock prédit: 0.3u (6j restants) → prédit 2u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 3 | Stock prédit: 0.6u (6j restants) → prédit 3u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 3 | Stock prédit: -0.8u (-10j restants) → prédit 3u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 1 | Stock prédit: -0.1u (-3j restants) → prédit 1u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | Stock prédit: 0.4u (4j restants) → prédit 4u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Stock prédit: -0.3u (-13j restants) → prédit 1u mais non commandé |


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
| [REB05] REB chips bio - sel de mer 35g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV129] LV Tartinade Carotte Gingembre 190g | 4 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:17:12.405Z*
