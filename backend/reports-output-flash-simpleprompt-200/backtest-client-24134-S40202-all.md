# Rapport Backtest - Client Terre de fromages S.A

## Contexte

- **Client** : Terre de fromages S.A (ID: 24134)
- **Commande réelle** : S40202
- **Date commande** : 2025-11-14 10:30:22
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 10,823 input + 3,568 output = 14,391 total


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
| **MAE** | 1.73 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 54.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 53.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 2.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [LV159] LV Tartinade aux Truffes  135g  | 8 | 4 | 4.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 6 | 4.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LV145] LV Sauce Tartare 200 ml  | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV131] LV Tartinade Potiron 190g | 6 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 4 | 2 | 2.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 4 | 4 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


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
- **Pattern temporel**: Commande sporadique ou cycle long (>30j)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée il y a 36 jours (1 unit le 08/10). En l'absence de donn)es N-1 et de pattern hebdomadaire clair, la base de r)f)rence la plus probable pour ce produit de niche (Sauce A)oli 200ml) est l'unit). Le d)lai de 5 semaines depuis la derni(re commande sugg(re un besoin de r)approvisionnement immédiat de type 'fond de rayon'.

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 8u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 8u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 4u (100.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec accélération lors des événements de fin d'année (Nov-Déc)
- **Saisonnalité**: strong
- **Tendance**: Hausse saisonnière forte à l'approche des fêtes
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
L'analyse montre une saisonnalité marquée pour ce produit (Tartinade aux Truffes). En 2024, à la même période (12 novembre), la commande a bondit à 10 unités, ce qui représente le pic annuel historique, contre une base de 2 à 4 unités le reste de l'année. La commande récente d'octobre (2u) confirme que le stock de fond est bas. Bien que la tendance générale hors saison semble stable, le pic saisonnier de novembre lié aux préparatifs des fêtes est le facteur dominant. On ajuste légèrement à la baisse par rapport au pic de l'an dernier (8u au lieu de 10u) pour tenir compte de la possible prudence du marché, tout en sécurisant le volume nécessaire pour le pic de demande de novembre.

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
- **Pattern temporel**: Commande sporadique ou cycle long (>60j)
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée le jeudi 11 septembre 2025. Le 13 novembre 2025 (date cible) correspond exactement à un intervalle de 9 semaines (63 jours), ce qui pourrait suggérer un cycle bimestriel le jeudi. En l'absence de données de volume supérieures, la quantité de base de 1 unité est maintenue comme la prédiction la plus probable pour ce produit de niche ou à faible rotation.

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.2u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec une préférence marquée pour le jeudi (Cycle ~2 mois)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - de 6-8u à ~3u
- **Outliers détectés**: 10u

**🧠 Raisonnement LLM:**
L'historique montre une érosion de la demande sur ce produit Bio. Bien qu'une commande de 10 unités ait eu lieu à la même période l'année dernière (12 nov 2024), les données de 2025 indiquent un ralentissement significatif, avec un dernier volume à 3 unités en septembre. Le rythme de commande s'est espacé à environ 60 jours. La date du 13 novembre 2025 s'inscrit parfaitement dans ce cycle bimensuel le jeudi. On privilégie la tendance basse actuelle de 3 unités plutôt que le pic exceptionnel de l'an passé pour éviter le surstockage.

</details>


<details>
<summary><strong>5. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 6u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 6u (confidence: medium)
- 📊 **Baseline N-1**: 6u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques avec une récurrence accrue au mois de novembre (période de récolte du potiron)
- **Saisonnalité**: strong
- **Tendance**: Stable à 6u pour la saison haute
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des données historiques montre une saisonnalité marquée pour ce produit à base de potiron durant le mois de novembre. En novembre 2024, une commande de 6 unités a été passée à une date quasi identique (12 novembre). Bien que la commande de septembre 2025 n'était que de 3 unités, le pic saisonnier de novembre justifie un retour au volume de référence de 6 unités observé l'année précédente.

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande spot irrégulière (60-90j) avec faible volume unitaire
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une alternance entre des commandes de 6 unités et 2 unités sur de longs cycles. La commande la plus récente (septembre 2025) était de 2 unités un jeudi. Bien que le volume record à cette période l'année dernière (novembre) était de 6 unités, la tendance récente sur les 18 derniers mois montre une prédominance du besoin minimal de 2 unités pour ce produit spécifique (LV132). Sans preuve d'un événement promotionnel ou d'un cycle de réapprovisionnement accéléré, on privilégie la continuité de la dernière commande pour minimiser le risque de surstock en B2B.

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 3u vs Médiane: 6u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3u
- 📊 **Médiane**: 6u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 4u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique à faible intensité (intervalle moyen de 45 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive identifiée - stable à 3u
- **Outliers détectés**: 8u

**🧠 Raisonnement LLM:**
L'analyse montre un produit à rotation lente sans saisonnalité marquée. La dernière commande (septembre 2025) était de 3 unités, un volume cohérent avec les commandes de juin et septembre 2024. Bien que l'intervalle habituel soit légèrement dépassé (environ 60 jours depuis la dernière commande), le volume de base sur ce produit tartinable s'est stabilisé à 3u après un pic historique à 8u début 2024. Le jeudi est un jour de commande récurrent pour ce client.

</details>


<details>
<summary><strong>8. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 2u (100.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique avec une occurrence annuelle vers la mi-novembre
- **Saisonnalité**: weak
- **Tendance**: Stable à 3-4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une commande récurrente autour de la mi-novembre (4u en 2024, demande actuelle le 13/11). Le volume de 3u enregistré en septembre confirme un maintien de la demande de fond. Le choix de 4u s'aligne sur l'historique exact de la même période N-1 tout en respectant la tendance de consommation stable du produit.

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 4u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.2u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme très espacé, environ tous les 2-3 mois, principalement le jeudi
- **Saisonnalité**: none
- **Tendance**: Stable mais volume faible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande erratique à faible volume, sans saisonnalité marquée en fin d'année (dernière commande N-1 en septembre). Le cycle de commande semble être de 2 à 3 mois. La dernière commande datant du 11 septembre (soit exactement 2 mois ou 9 semaines), la date du 13 novembre est parfaitement alignée avec le rythme de réapprovisionnement observé. Le volume de 4 unités correspond à la commande la plus récente et se situe dans la moyenne basse historique (3-6u), minimisant ainsi le risque de surstock sur une référence à rotation lente.

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

**✅ Quantité LLM**: 8u (confidence: medium)
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

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [LV131] LV Tartinade Potiron 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-11 13:54:54: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-12 07:25:49: 6u
- 2024-09-19 06:59:28: 6u
- 2024-04-10 10:25:30: 3u
- 2024-03-05 07:47:58: 6u

**✅ Quantité LLM**: 6u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 3u (confidence: medium)
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

**✅ Quantité LLM**: 4u (confidence: medium)
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
| [LV162] LV Tartinade Tomato Basilico 190g | 5 | Stock prédit: 0.4u (4j restants) → prédit 5u mais non commandé |
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

*Rapport généré automatiquement le 2025-12-18T11:38:45.378Z*
