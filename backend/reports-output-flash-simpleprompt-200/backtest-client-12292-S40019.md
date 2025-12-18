# Rapport Backtest - Client Green Peas

## Contexte

- **Client** : Green Peas (ID: 12292)
- **Commande réelle** : S40019
- **Date commande** : 2025-10-30 09:12:37
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 14
- **Tokens**: 12,425 input + 3,814 output = 16,239 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.0% | 20 produits prédits, 11 corrects |
| **Rappel** | 100.0% | 11 produits réels, 11 détectés |
| **F1-Score** | 71.0% | Score équilibré global |

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
| **MAE** | 0.82 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 39.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 34.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -21.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0029] MF Tarti Datte chili 250g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0027] MF Tarti Aubergine 250g  | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0052] MF Pois chiches  500g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | 4 | 3.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-35 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un cycle d'approvisionnement extrêmement régulier de 1 unité par mois. Les commandes d'août et septembre ont eu lieu un mercredi, tout comme la date de prédiction actuelle (29 octobre). Bien que la commande d'octobre ait été anticipée au jeudi 09, l'historique montre une consommation stable sans aucune fluctuation de volume. Aucun rattrapage n'est nécessaire car la quantité est constante à chaque itération.

</details>


<details>
<summary><strong>2. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30-35 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse de 2u à 1u par rapport à N-1
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande extrêmement stable mais faible, passant d'une moyenne de 2 unités en 2024 à une base solide de 1 unité sur les commandes récentes (septembre et octobre 2025). Le cycle de commande est d'environ un mois. Bien que la date de prédiction (29 octobre) soit légèrement rapprochée de la dernière commande (9 octobre, soit 20 jours d'intervalle), le volume de 1 unité est le minimum insécable pour ce type de produit B2B et correspond à la consommation réelle observée sur les deux derniers mois. Aucune saisonnalité n'est détectée pour le mois d'octobre/novembre sur l'historique N-1.

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme mensuel irrégulier (tous les 30 à 35 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Le produit présente une demande très stable et faible, centrée sur 1 unité par commande depuis juin 2024 (à l'exception d'un léger pic en septembre 2024). L'intervalle entre les deux dernières commandes (03/09 et 09/10) est de 36 jours. La date de prédiction (29/10) se situe 20 jours après la dernière commande, ce qui est légèrement précoce par rapport au cycle habituel, mais la récurrence de l'unité simple (1u) sur les périodes récentes et historiques ne justifie aucun volume supérieur.

</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 2u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel d'environ 28-35 jours (dernier trimestre)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passant de 1u à 2u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse des données récentes montre un passage d'un volume de fond de 1 unité à 2 unités lors de la dernière commande de début octobre. Le rythme de commande s'est stabilisé sur une fréquence mensuelle (intervalle d'environ 4 semaines). La date du 2025-10-29 respecte parfaitement ce cycle de 20 jours après la commande du 09/10, confirmant la tendance à 2 unités observée récemment sans influence saisonnière significative provenant de N-1.

</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: high)
- 📊 **Baseline N-1**: 2.67u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une consommation extrêmement stable et cyclique avec une commande environ tous les 30 jours. Les données récentes (août, septembre, octobre 2025) montrent une légère montée en puissance de 2u à 3u. La date de prédiction (29 octobre) intervient exactement 20 jours après la dernière commande du 9 octobre, ce qui suggère un léger avancement du cycle habituel ou un besoin de réapprovisionnement standard pour clore le mois. Historiquement, le volume n'a jamais dépassé 4u et s'est stabilisé à 3u sur les deux derniers mois. La moyenne pondérée et la tendance récente convergent vers 3 unités.

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2.1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u a 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique récent montre une régularité mensuelle quasi parfaite (06/08, 03/09, 09/10). Bien que l'année N-1 présentait des volumes légèrement supérieurs en septembre/octobre (6u), la tendance actuelle sur les 3 derniers mois s'est stabilisée sur un volume bas (moyenne de 2u). La commande intervient exactement 20 jours après la précédente, s'inscrivant dans le cycle mensuel habituel. Au regard de la décroissance légère mais constante des volumes récents et de l'absence de pic saisonnier majeur sur ce produit spécifique l'an dernier à fin octobre, la quantité de 2 unités est la plus probable.

</details>


<details>
<summary><strong>7. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-32 jours) le mercredi en période récente
- **Saisonnalité**: none
- **Tendance**: Stable à baisse légère (1-2u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique montre une consommation régulière mais faible (mode à 2u). Sur les deux derniers mois, un changement de rythme est apparu : les commandes passent le mercredi avec un intervalle strict de 4 semaines. La dernière commande (septembre) était de 1u. Étant donné l'absence de pic saisonnier significatif en octobre N-1 et la tendance récente à la baisse du volume par commande (passant de 2u à 1u), la quantité la plus probable pour maintenir ce cycle de 4-8 semaines est de 1 unité.

</details>


<details>
<summary><strong>8. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de 28-30 jours (mensuel), généralement le premier mercredi du mois.
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique récent (août et septembre 2025) montre une stabilisation parfaite à 1 unité avec un rythme mensuel (intervalle de 28 jours exactement entre les deux dernières commandes). Bien que la date de prédiction soit un mercredi, elle intervient 8 semaines après la dernière commande du 03/09, suggérant soit une commande sautée début octobre, soit un besoin de réapprovisionnement ponctuel. La valeur de 1u est la plus probable compte tenu de la forte récurrence de ce volume (60% des occurrences historiques hors outliers).

</details>


<details>
<summary><strong>9. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (~tous les 3 à 6 mois)
- **Saisonnalité**: none
- **Tendance**: Stable mais très faible volume
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande extrêmement sporadique avec seulement 4 commandes sur les 24 derniers mois et aucune activité sur les 90 derniers jours. L'historique montre des volumes oscillant entre 1 et 3 unités sans saisonnalité marquée (pics en février, juin, août et décembre). La moyenne historique de 1,75 unité et l'absence de tendance de croissance suggèrent une commande de réapprovisionnement de faible volume. Comme il s'agit d'un produit B2B, on retient l'arrondi supérieur de la moyenne historique pour assurer un stock minimal de présentation ou d'usage.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 1u
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [MF0033] MF Tarti Poivron chilli 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 1u
- 2025-09-03 06:58:40: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 2u
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 2u
- 2024-03-12 14:11:03: 2u
- 2024-02-12 06:43:09: 2u
- 2024-01-22 12:57:59: 2u
- 2023-12-12 07:24:48: 1u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [MF0029] MF Tarti Datte chili 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 1u
- 2025-09-03 06:58:40: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 1u
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 1u
- 2024-03-12 14:11:03: 2u
- 2024-02-12 06:43:09: 4u
- 2023-12-12 07:24:48: 3u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 2u
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-11 07:44:12: 4u
- 2024-05-13 11:42:43: 1u
- 2024-01-22 12:57:59: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 3u
- 2025-09-03 06:58:40: 3u
- 2025-08-06 06:20:35: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 3u
- 2024-08-05 06:36:16: 3u
- 2024-06-11 07:44:12: 4u
- 2024-05-13 11:42:43: 2u
- 2024-03-29 14:59:13: 2u
- 2024-02-12 06:43:09: 4u
- 2024-01-22 12:57:59: 2u
- 2023-12-12 07:24:48: 3u

**✅ Quantité LLM**: 3u (confidence: high)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 06:35:27: 2u
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 6u
- 2024-09-03 12:32:05: 2u
- 2024-08-05 06:36:16: 6u
- 2024-06-11 07:44:12: 5u
- 2024-05-13 11:42:43: 1u
- 2024-03-29 14:59:13: 6u
- 2024-03-12 14:11:03: 3u
- 2024-02-12 06:43:09: 2u
- 2024-01-22 12:57:59: 4u
- 2023-12-12 07:24:48: 1u

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [MF0030] MF Tarti Mangue Curry 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 2u
- 2024-09-03 12:32:05: 2u
- 2024-08-05 06:36:16: 3u
- 2024-06-11 07:44:12: 2u
- 2024-05-13 11:42:43: 2u
- 2024-03-29 14:59:13: 2u
- 2024-03-12 14:11:03: 1u
- 2024-02-12 06:43:09: 4u
- 2024-01-22 12:57:59: 2u
- 2023-12-12 07:24:48: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>8. [MF0032] MF Tarti Pois chiches 250 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:58:40: 1u
- 2025-08-06 06:20:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-27 12:17:01: 1u
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 4u
- 2024-05-13 11:42:43: 2u
- 2024-03-29 14:59:13: 1u
- 2024-01-22 12:57:59: 3u
- 2023-12-12 07:24:48: 1u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [MF0034] MF Tarti Pomme Raifort 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-05 06:36:16: 1u
- 2024-06-11 07:44:12: 3u
- 2024-02-12 06:43:09: 2u
- 2023-12-12 07:24:48: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (9)

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
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Stock prédit: 0.1u (1j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 1.2u (29j restants) → prédit 2u mais non commandé |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Stock prédit: 0.3u (8j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Stock prédit: 0.3u (8j restants) → prédit 1u mais non commandé |
| [MF0051] MF Kidney Beans 500g | 1 | Stock prédit: 0.3u (8j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 2 | Stock prédit: -1.0u (-27j restants) → prédit 2u mais non commandé |
| [MF0061] MF Compote | 2 | Stock prédit: -0.1u (-3j restants) → prédit 2u mais non commandé |
| [MF0060] MF Passata | 2 | Stock prédit: -0.3u (-11j restants) → prédit 2u mais non commandé |
| [MF0024] MF KETCHUP 250g | 2 | Stock prédit: 0.4u (8j restants) → prédit 2u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:36:17.079Z*
