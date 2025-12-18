# Rapport Backtest - Client La ferme du vieux bure

## Contexte

- **Client** : La ferme du vieux bure (ID: 23826)
- **Commande réelle** : S39798
- **Date commande** : 2025-10-20 06:51:11
- **Date cutoff système** : 2025-10-19 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 21
- **Tokens**: 18,865 input + 6,155 output = 25,020 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 20.5% | 44 produits prédits, 9 corrects |
| **Rappel** | 75.0% | 12 produits réels, 9 détectés |
| **F1-Score** | 32.1% | Score équilibré global |

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
| **MAE** | 0.22 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 11.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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

## True Positives (9)

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
| [LV160] LV Tartinade Aubergine 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV345] LV Spread KIDS 200ml Organic | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de réapprovisionnement mensuel (tous les 21-30 jours), principalement le lundi.
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (de 2u en N-1 à 1u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont très faibles et constants (1-2 unités). Étape 2: L'historique N-1 montre une activité sporadique sans pic estival marqué pour cette tartinade, malgré le secteur agroalimentaire. Étape 3: On observe une baisse structurelle de la demande de fond, passant de 2 unités en 2024 à 1 unité lors des deux dernières commandes de septembre et août 2025. Étape 4: La recommandation reste conservatrice à 1 unité pour s'aligner sur la tendance récente de consommation et éviter le sur-stockage sur un produit à rotation lente, tout en respectant le cycle de commande mensuel constaté.

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-cyclique, commandes sporadiques tous les 1 à 2 mois
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3-4u en 2024 vs 1u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucun outlier détecté, les volumes sont faibles et constants. ÉTAPE 2 (SAISONNALITÉ): Faible impact visible sur ce SKU spécifique, bien que le segment tartinade puisse être estival. ÉTAPE 3 (TENDANCE): On observe une baisse de volume significative par rapport à N-1 (passant de 4u/3u à seulement 1u lors des deux dernières occurrences). Le rythme est irrégulier. ÉTAPE 4 (RECOMMANDATION): Compte tenu de la tendance baissière et de la faible rotation récente, une commande de 1 unité est préconisée. Commander plus risquerait de générer un sur-stock sur un produit au ralentissement marqué.

</details>


<details>
<summary><strong>3. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ tous les 40 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, le volume de base est de 1 unité par commande. Étape 2: Aucune donnée historique N-1 n'est disponible pour évaluer une saisonnalité, et le volume actuel est trop faible pour en déduire un impact saisonnier. Étape 3: La fréquence est sporadique (août, puis mi-septembre), mais le volume est constant (1u). La commande actuelle est passée un dimanche, alors que les précédentes étaient en début de semaine. Étape 4: Étant donné la faible vélocité de vente du RITCHIE Orange et l'absence de tendance à la hausse, une approche conservatrice impose de maintenir la quantité minimale de 1 unité pour couvrir le besoin sans risque de sur-stockage.

</details>


<details>
<summary><strong>4. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 20 et 21 jours
- **Saisonnalité**: none
- **Tendance**: Baisse progressive du volume par commande (de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune donnée aberrante identifiée au vu du faible volume global. ÉTAPE 2 (Saisonnalité): Manque de données N-1 pour confirmer une saisonnalité, bien que le secteur suggère un ralentissement post-été. ÉTAPE 3 (Tendance): On observe un espacement des commandes (20-21 jours) avec une réduction de la quantité unitaire (passée de 2u le 05/08 à 1u sur les deux dernières occurrences). ÉTAPE 4 (Recommandation): La demande est faible et décroissante. Malgré la date de commande (dimanche) proche du cycle habituel du lundi, le volume récent ne justifie pas plus d'une unité pour éviter le surstockage sur un produit à rotation lente. Approche conservatrice privilégiée (1u). Chaque unité supplémentaire doublerait le stock théorique sans preuve de besoin immédiat élevé (confidence: low car n < 5).

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 2 à 4 mois
- **Saisonnalité**: none
- **Tendance**: Stable à la baisse, volumes constants de 1-2 unités
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à très faible rotation (Slow Mover). 1. DE-EVENTING: Aucune anomalie détectée, les volumes sont organiques (1 à 2 unités). 2. SAISONNALITÉ: Pas de corrélation saisonnière visible entre 2024 et 2025; le produit semble répondre à un besoin ponctuel de fond de rayon. 3. TENDANCE: La dernière commande d'août (1u) montre un léger ralentissement par rapport aux 2u de juin 2024. 4. RECOMMANDATION: La demande est sporadique avec une moyenne de 1.5u par commande sur 2 ans. Étant donné la faible fréquence et l'absence de commande depuis fin août, une commande de sécurité de 1 unité est recommandée pour couvrir la demande tout en évitant le surstockage sur un produit dont la rotation n'est pas garantie.

</details>


<details>
<summary><strong>6. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données historiques inexistantes
- **Saisonnalité**: none
- **Tendance**: Indéterminée (Lancement ou nouveau référencement)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
En l'absence totale d'historique de commandes (N-1 et 3 derniers mois), il est impossible d'établir un cycle de réapprovisionnement ou une tendance. Le produit [RIT03] est soit un nouveau lancement, soit un nouveau référencement client. Dans une approche de Supply Chain conservatrice pour éviter le sur-stockage initial, la recommandation minimale de 1 unité est préconisée pour tester le marché ou répondre au besoin d'un échantillonnage/première mise en rayon, en attendant de collecter les premières données de vente réelle.

</details>


<details>
<summary><strong>7. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.66u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très faible fréquence, commande sporadique (tous les 2 à 4 mois)
- **Saisonnalité**: none
- **Tendance**: Stable mais demande extrêmement résiduelle
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune valeur aberrante détectée, les quantités (1u et 2u) sont cohérentes avec un produit de niche ou à rotation lente. Étape 2 (Saisonnalité): Pas de pattern saisonnier visible sur les données N-1; le produit semble répondre à un besoin ponctuel plutôt qu'à une consommation liée à la saisonnalité agroalimentaire classique. Étape 3 (Tendance): Absence totale de commandes sur les 3 derniers mois. Le produit est soit en fin de vie, soit commandé de manière très irrégulière. Étape 4 (Recommandation): En raison de l'absence de commandes récentes, nous nous basons sur la moyenne historique (1.66) arrondie à l'entier supérieur pour maintenir un stock de sécurité minimal, tout en restant conservateur pour éviter le sur-stockage d'un produit à faible rotation.

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:25:43: 1u
- 2025-08-25 06:31:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-24 06:32:36: 2u
- 2024-04-23 13:03:29: 2u
- 2024-01-03 08:57:40: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:25:43: 1u
- 2025-08-05 13:48:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-24 06:32:36: 2u
- 2024-04-23 13:03:29: 3u
- 2024-01-03 08:57:40: 4u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [RIT01] RITCHIE Orange - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:25:43: 1u
- 2025-08-05 13:48:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-15 06:25:43: 1u
- 2025-08-25 06:31:24: 1u
- 2025-08-05 13:48:36: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-25 06:31:24: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-24 06:32:36: 2u
- 2024-04-23 13:03:29: 2u
- 2024-01-03 08:57:40: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-24 06:32:36: 2u
- 2024-04-23 13:03:29: 1u
- 2024-01-03 08:57:40: 2u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>




---

## False Positives (35)

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
| [LV136] LV Tartinade Betterave 190g | 2 | Stock prédit: 1.0u (30j restants) → prédit 2u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Stock prédit: 0.4u (24j restants) → prédit 1u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Stock prédit: 0.2u (4j restants) → prédit 2u mais non commandé |
| [fsv18] Mendiant bio vrac 2,8kg | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Stock prédit: 0.3u (18j restants) → prédit 1u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Stock prédit: 0.1u (7j restants) → prédit 1u mais non commandé |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | Stock prédit: 0.3u (23j restants) → prédit 1u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 2 | Stock prédit: -0.0u (-1j restants) → prédit 2u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Stock prédit: -0.9u (-35j restants) → prédit 1u mais non commandé |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Stock prédit: 0.2u (16j restants) → prédit 1u mais non commandé |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Stock prédit: -0.8u (-33j restants) → prédit 1u mais non commandé |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Stock prédit: -0.8u (-33j restants) → prédit 1u mais non commandé |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | Stock prédit: -0.8u (-33j restants) → prédit 1u mais non commandé |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | Stock prédit: -0.8u (-33j restants) → prédit 1u mais non commandé |
| [LV158] LV Moutarde 200 ml | 1 | Stock prédit: -0.2u (-17j restants) → prédit 1u mais non commandé |
| [LB003] LB Festive (4,5%) 33CL | 1 | Stock prédit: -1.8u (-74j restants) → prédit 1u mais non commandé |
| [LB004] LB Blonde (6,5%) 33CL | 1 | Stock prédit: -1.8u (-74j restants) → prédit 1u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Stock prédit: -0.9u (-53j restants) → prédit 1u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | Stock prédit: -0.8u (-33j restants) → prédit 2u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Stock prédit: -0.1u (-6j restants) → prédit 1u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 1 | Stock prédit: -0.0u (-4j restants) → prédit 1u mais non commandé |
| [fsv08] Banana chips bio vrac 1,6kg | 1 | Stock prédit: -0.9u (-55j restants) → prédit 1u mais non commandé |
| [fsv09] Noix de cajou grillées salées bio vrac 2,8kg  | 1 | Stock prédit: -0.5u (-37j restants) → prédit 1u mais non commandé |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 1 | Stock prédit: -0.9u (-55j restants) → prédit 1u mais non commandé |
| [fsv17] Mélange de noix bio vrac 2,75kg | 1 | Stock prédit: -1.8u (-74j restants) → prédit 1u mais non commandé |


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
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [fsv04] Amande nature bio vrac 2,8 kg | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:11:32.285Z*
