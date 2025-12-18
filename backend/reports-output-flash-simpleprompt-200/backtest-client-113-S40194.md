# Rapport Backtest - Client Le bon Wagon Eupen

## Contexte

- **Client** : Le bon Wagon Eupen (ID: 113)
- **Commande réelle** : S40194
- **Date commande** : 2025-11-12 10:42:35
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 15
- **Tokens**: 12,546 input + 3,993 output = 16,539 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 26 produits prédits, 16 corrects |
| **Rappel** | 100.0% | 16 produits réels, 16 détectés |
| **F1-Score** | 76.2% | Score équilibré global |

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
| **MAE** | 0.81 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 52.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 52.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

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

## True Positives (16)

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
| [MF0033] MF Tarti Poivron chilli 250g | 3 | 1 | 2.0 | 200.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0047] MF Mayonnaise 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 5 | 3.0 | 60.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (1 commande observée)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande de 1 unité enregistrée le mois dernier (08/10). En l'absence de données N-1 et de fréquence établie, la répétition de la dernière quantité observée est l'hypothèse la plus probable pour minimiser l'erreur de prévision.

</details>


<details>
<summary><strong>2. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique non linéaire (moyenne ~45-60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une demande très faible et irrégulière (environ une commande tous les 2 mois). La dernière commande remonte au 19/08 (il y a environ 84 jours), ce qui suggère qu'un cycle de réapprovisionnement est imminent ou légèrement en retard. Vu que le volume historique oscille majoritairement entre 1u et 2u, et qu'une absence de commande prolongée précède souvent un léger besoin de stock, la quantité de 2u est retenue pour couvrir la demande probable du client sur ce produit à faible rotation.

</details>


<details>
<summary><strong>3. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique, intervalle de 2 à 3 mois
- **Saisonnalité**: none
- **Tendance**: Légère baisse (passé de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation lente et irrégulière avec un volume unitaire très faible (1 ou 2 unités). La dernière commande date d'août 2025 (1u). L'intervalle historique entre les commandes varie généralement entre 45 et 90 jours. Étant donné que la dernière commande (1u) marque une baisse par rapport aux séries de 2u en 2024, et qu'aucun pic saisonnier n'est identifié en novembre sur l'historique N-1, la quantité la plus probable pour maintenir le stock sans sur-stockage est de 1 unité.

</details>


<details>
<summary><strong>4. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 1.5 à 2 mois environ)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation très faible et irrégulière. L'historique montre des volumes oscillant entre 1 et 2 unités avec un intervalle moyen de 50 à 60 jours. La dernière commande date du 19 août (il y a environ 84 jours), ce qui suggère qu'un réapprovisionnement de fond est probable. Compte tenu de la tendance de 2024 où plusieurs commandes consécutives plafonnaient à 1u et de l'absence de pic saisonnier en novembre N-1, la quantité la plus probable est le minimum logistique de 1 unité pour éviter le surstock sur un produit dont la DLC pourrait être courte.

</details>


<details>
<summary><strong>5. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 3 à 4 mois)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1-2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation extrêmement faible et sporadique avec un intervalle moyen de 80 à 100 jours entre les commandes. La dernière commande datant du 19 août 2025 (soit il y a 84 jours), le client entre dans sa fenêtre habituelle de réapprovisionnement. Historiquement, le volume oscille entre 1 et 2 unités. Étant donné l'absence de tendance haussière ou de saisonnalité forte sur ce produit de niche (Pomme Raifort), la quantité la plus probable pour minimiser le MAPE est l'unité minimale.

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique non-cyclique d'environ 60-80 jours
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1u - 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une rotation très lente pour ce produit avec des commandes espacées de plusieurs mois. La dernière commande date d'août 2025 (1 unité). Bien que le client commande parfois 2 unités, la tendance récente sur 2025 s'oriente vers le maintien d'un stock minimal (1 unité). Sans signe de saisonnalité forte sur la fin d'année 2024 (seulement 1u en décembre), et compte tenu de la faible fréquence, 1 unité est le volume le plus probable pour éviter le surstockage.

</details>


<details>
<summary><strong>7. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 3u (60.0%)
- 📉 **Erreur Médiane**: 3u (60.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les deux mois (moyenne 63 jours)
- **Saisonnalité**: none
- **Tendance**: Stable entre 2u et 3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande très irrégulière et de faible volume. La fréquence moyenne entre les commandes est d'environ 2 mois. La dernière commande datant du 19 août, le client est techniquement en retard pour un réapprovisionnement (intervalle actuel de 84 jours). Bien que le produit ait oscillé entre 2u et 3u en 2024, la commande la plus récente en 2025 était de 2u. Sans signal de croissance ou de saisonnalité forte sur ce produit de niche, la quantité la plus probable est le maintien du dernier volume observé.

</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique ou cycle long (>80 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec une seule commande enregistrée le 19 août (un mardi). La date de prédiction tombe également un mardi, ce qui pourrait suggérer un cycle hebdomadaire très lâche ou une commande de réapprovisionnement ponctuelle. En l'absence de données transactionnelles plus denses ou de saisonnalité N-1, la prévision la plus probable et la plus précise pour ce SKU bio de niche est le maintien de l'unité de commande minimale observée précédemment.

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique ou cycle long (>80 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur un historique extrêmement limité d'une seule commande passée un mardi il y a 84 jours. En l'absence de données de saisonnalité ou de récurrence plus fréquente, la prédiction la plus probable repose sur le renouvellement de l'unité de base observée précédemment, d'autant plus que le jour de la semaine (mardi) concorde avec l'historique.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 10:15:32: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 14:05:14: 1u
- 2024-09-02 13:08:13: 2u
- 2024-07-01 07:00:38: 3u
- 2024-06-04 06:36:04: 1u
- 2024-04-25 08:12:11: 2u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [MF0055] MF Noix de cajou - Curry 133g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 14:05:14: 2u
- 2024-09-02 13:08:13: 2u
- 2024-06-04 06:36:04: 2u
- 2024-04-25 08:12:11: 1u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 2u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [MF0032] MF Tarti Pois chiches 250 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:08:13: 2u
- 2024-07-01 07:00:38: 1u
- 2024-04-25 08:12:11: 2u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [MF0034] MF Tarti Pomme Raifort 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 14:05:14: 2u
- 2024-06-04 06:36:04: 2u
- 2024-04-25 08:12:11: 1u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-02 13:08:13: 2u
- 2024-06-04 06:36:04: 2u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [MF0030] MF Tarti Mangue Curry 250g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 14:05:14: 3u
- 2024-09-02 13:08:13: 2u
- 2024-07-01 07:00:38: 3u
- 2024-06-04 06:36:04: 3u
- 2024-04-25 08:12:11: 3u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 2u
- 2023-12-14 07:58:26: 1u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>8. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (10)

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
| [MF0013] MF Olives Vertes 500g | 1 | Stock prédit: 0.2u (8j restants) → prédit 1u mais non commandé |
| [MF0029] MF Tarti Datte chili 250g | 3 | Stock prédit: 0.0u (0j restants) → prédit 3u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 2 | Stock prédit: 0.4u (25j restants) → prédit 2u mais non commandé |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Stock prédit: 0.2u (8j restants) → prédit 1u mais non commandé |
| [MF0012] MF Olives Mix 500g | 1 | Stock prédit: 0.2u (17j restants) → prédit 1u mais non commandé |
| [MF0014] MF Olives noires 500g | 1 | Stock prédit: 0.2u (26j restants) → prédit 1u mais non commandé |
| [MF0024] MF KETCHUP 250g | 1 | Stock prédit: -0.4u (-23j restants) → prédit 1u mais non commandé |
| [MF0060] MF Passata | 1 | Stock prédit: -0.7u (-34j restants) → prédit 1u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Stock prédit: 0.0u (3j restants) → prédit 2u mais non commandé |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 1 | Stock prédit: -0.6u (-31j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:40:00.037Z*
