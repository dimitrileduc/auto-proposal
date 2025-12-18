# Rapport Backtest - Client DLL AD WEZEMAAL WEDIS

## Contexte

- **Client** : DLL AD WEZEMAAL WEDIS (ID: 38845)
- **Commande réelle** : S39846
- **Date commande** : 2025-10-21 12:06:38
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 17
- **Tokens**: 26,452 input + 4,941 output = 31,393 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 64.3% | 28 produits prédits, 18 corrects |
| **Rappel** | 85.7% | 21 produits réels, 18 détectés |
| **F1-Score** | 73.5% | Score équilibré global |

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
| **MAE** | 0.72 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 39.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 36.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -39.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 13 | Avec erreur |

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

## True Positives (18)

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
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique récent montre une stabilisation parfaite à 1 unité avec un cycle de commande mensuel intervenant le premier lundi du mois. Bien que nous soyons le 20 octobre, et que la dernière commande date du 1er septembre (sautant potentiellement octobre ou reflétant une fréquence de 30-45 jours), le volume unitaire est la constante la plus fiable du produit. Le pic de 2u en mars 2024 est considéré comme un outlier historique face à la régularité de 1u observée sur toutes les autres commandes significatives. La prédiction de 1u respecte la tendance B2B de commandes à l'unité sur ce type de référence.

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-32 jours)
- **Saisonnalité**: none
- **Tendance**: Stable entre 1u et 2u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'historique récent montre une stabilisation du rythme de commande sur un cycle mensuel, spécifiquement le premier lundi du mois (04/08 et 01/09). La date cible (20/10) se situe environ 7 semaines après la dernière commande, suggérant l'attente d'un réapprovisionnement. En 2024, les volumes oscillaient entre 2 et 4 unités, mais la tendance 2025 montre un léger ralentissement (1u et 2u). Le pic de 4u en N-1 est considéré comme un outlier par rapport à la consommation actuelle. On retient 2u, valeur la plus récente et cohérente avec le besoin de fond observé.

</details>


<details>
<summary><strong>3. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très erratique, environ 1 commande tous les 2 à 4 mois
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Le produit présente une rotation extrêmement faible et irrégulière. L'historique N-1 ne montre que deux commandes significatives (1u et 3u) sur une année. La donnée la plus récente date du lundi 1er septembre 2025 pour 1u. Bien que le cycle ne soit pas strictement hebdomadaire, la prédiction pour un lundi (20/10) s'aligne avec le jour de la dernière commande. Vu le faible volume et l'absence de tendance à la hausse, la quantité la plus probable pour couvrir le besoin intermittent est de 1 unité, en ignorant le pic isolé de 3u de mai 2024.

</details>


<details>
<summary><strong>4. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~28-32 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'historique montre une stabilisation nette du produit à 1 unité par commande. Le rythme récent est strictement mensuel (04/08/2025, puis 01/09/2025), survenant le premier lundi du mois. La date de prédiction du 20/10/2025 correspond à un lundi, respectant le jour de commande habituel, bien que légèrement décalé dans le mois par rapport aux deux derniers points. Cependant, la quantité de 1u est systématique sur les volumes de 2024 (hors un pic isolé de 3u en septembre 2024 qui n'est pas reconduit cette année) et sur les derniers mois. Je prédis donc la continuité de ce volume de fond.

</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique longue durée (60-90 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
L'historique montre une demande constante de 1 unité depuis l'été 2024, à l'exception d'un pic à 2 unités en mars 2024 considéré comme un outlier au vu de la stabilité ultérieure. Bien que les commandes soient espacées (cycle de plusieurs mois), le client a commandé 1u lors de sa dernière transaction un lundi en août 2025. En l'absence de signal de hausse ou de baisse, le volume unitaire de 1u reste la prédiction la plus probable pour maintenir le stock de ce produit de niche (mayonnaise poivre 250ml).

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation très faible et irrégulière. L'historique montre des volumes unitaires (1u ou 2u) avec de longs intervalles. La dernière commande datant d'août (1u), et la moyenne lissée sur l'historique étant proche de 1, nous prévoyons le maintien de ce besoin minimal. Le lundi est un jour de commande valide dans l'historique récent du client.

</details>


<details>
<summary><strong>7. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très erratique, environ 1 commande tous les 60-90 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive - de 3u en 2024 à 1u en 2025
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation extrêmement faible et une fréquence imprévisible. Historiquement, le volume est passé de 3 unités en 2024 à 1 unité lors de la commande la plus récente (août 2025). Bien que l'intervalle entre les commandes suggère que le client n'est peut-être pas encore en phase de réapprovisionnement (cycle long de +2 mois), la règle métier interdit de prédire 0 pour un jour hors cycle ou entre deux cycles si le produit est encore actif. En suivant la tendance récente la plus probable, la quantité est fixée à 1 unité.

</details>


<details>
<summary><strong>8. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.6u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (intervalle de 2 à 4 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (0-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un historique très fragmenté avec de longues périodes d'inactivité (0u enregistrés en 2024). Cependant, la dernière commande réelle était de 1u et l'avant-dernière de 2u. En B2B agroalimentaire, pour des sauces en format 250ml (WECK), les commandes sont souvent déclenchées par le besoin de réapprovisionnement d'une unité de vente minimale ou d'un carton. Bien qu'aucun mouvement n'ait été enregistré ces 3 derniers mois, la règle de continuité de service sur un produit non-arrêté impose de prévoir la prochaine unité probable plutôt que 0, conformément aux consignes de gestion de cycle.

</details>


<details>
<summary><strong>9. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.83u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique (intervalles de 1 à 2 mois)
- **Saisonnalité**: weak
- **Tendance**: Stable mais très faible volume (moyenne 0.8u)
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Le produit présente une demande très faible et irrégulière dans l'historique N-1. Les commandes se situent majoritairement à 1 unité, à l'exception d'un pic à 3 unités en juillet 2024 considéré comme un outlier au vu de la rotation. Comme le client n'a pas commandé depuis plus de 3 mois sur ce produit spécifique, mais qu'il s'agit d'un produit bio de niche, on anticipe un besoin de réapprovisionnement ponctuel pour le stock de fond lors du prochain passage de commande probable (lundi). La quantité prévisible la plus précise est l'unité minimale de 1.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:45:37: 1u
- 2025-08-04 13:24:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 09:21:52: 1u
- 2024-09-03 09:56:31: 1u
- 2024-07-18 13:08:11: 1u
- 2024-07-02 10:08:11: 0u
- 2024-05-23 07:58:15: 0u
- 2024-03-28 15:42:01: 2u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:45:37: 2u
- 2025-08-04 13:24:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:56:31: 2u
- 2024-07-18 13:08:11: 3u
- 2024-07-02 10:08:11: 0u
- 2024-05-23 07:58:15: 4u
- 2024-03-28 15:42:01: 3u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:45:37: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:56:31: 1u
- 2024-07-18 13:08:11: 0u
- 2024-07-02 10:08:11: 0u
- 2024-05-23 07:58:15: 3u
- 2024-03-28 15:42:01: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:45:37: 1u
- 2025-08-04 13:24:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 09:21:52: 3u
- 2024-07-18 13:08:11: 1u
- 2024-07-02 10:08:11: 1u
- 2024-05-23 07:58:15: 0u
- 2024-03-28 15:42:01: 1u

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 13:24:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:56:31: 1u
- 2024-07-18 13:08:11: 1u
- 2024-07-02 10:08:11: 1u
- 2024-05-23 07:58:15: 0u
- 2024-03-28 15:42:01: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 13:24:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:56:31: 2u
- 2024-07-18 13:08:11: 1u
- 2024-07-02 10:08:11: 0u
- 2024-05-23 07:58:15: 0u
- 2024-03-28 15:42:01: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 13:24:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 09:21:52: 3u
- 2024-07-18 13:08:11: 3u
- 2024-07-02 10:08:11: 0u
- 2024-05-23 07:58:15: 1u
- 2024-03-28 15:42:01: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 09:56:31: 1u
- 2024-07-18 13:08:11: 0u
- 2024-07-02 10:08:11: 0u
- 2024-05-23 07:58:15: 0u
- 2024-03-28 15:42:01: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 09:21:52: 1u
- 2024-07-18 13:08:11: 3u
- 2024-07-02 10:08:11: 0u
- 2024-05-23 07:58:15: 1u
- 2024-03-28 15:42:01: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

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
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock prédit: 0.3u (23j restants) → prédit 1u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Stock prédit: -0.2u (-4j restants) → prédit 2u mais non commandé |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Stock prédit: -0.3u (-11j restants) → prédit 1u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Stock prédit: 0.7u (24j restants) → prédit 2u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Stock prédit: -0.3u (-11j restants) → prédit 1u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Stock prédit: -0.3u (-11j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: -0.2u (-12j restants) → prédit 1u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Stock prédit: -0.4u (-22j restants) → prédit 1u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: -0.5u (-24j restants) → prédit 1u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: -0.7u (-44j restants) → prédit 1u mais non commandé |


---

## False Negatives (3)

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
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF021] JF PICKLES 350 ML | 2 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T11:17:28.330Z*
