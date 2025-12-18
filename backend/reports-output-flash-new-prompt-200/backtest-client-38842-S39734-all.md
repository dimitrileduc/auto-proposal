# Rapport Backtest - Client DLL AD WELKENRAEDT ETS ADOLPHE

## Contexte

- **Client** : DLL AD WELKENRAEDT ETS ADOLPHE (ID: 38842)
- **Commande réelle** : S39734
- **Date commande** : 2025-10-16 11:36:31
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 18
- **Tokens**: 16,823 input + 5,626 output = 22,449 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 51.5% | 33 produits prédits, 17 corrects |
| **Rappel** | 73.9% | 23 produits réels, 17 détectés |
| **F1-Score** | 60.7% | Score équilibré global |

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
| **MAE** | 0.35 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 17.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -13.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
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

## True Positives (17)

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 4 | 5 | 1.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 4 | 5 | 1.0 | 20.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD015] LD Onion Spread 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD010] LD Organic Truffle Spread 135 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD012] LD Organic Samphire Spread 135 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les deux mois (45-60 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -50% (passages de 2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune commande anormale détectée, les volumes sont constants ou décroissants. ÉTAPE 2 (Saisonnalité): Pas de pic spécifique en octobre N-1, l'impact saisonnier immédiat est faible. ÉTAPE 3 (Tendance): La moyenne est passée de 2u en 2024 à 1u sur les commandes de 2025, indiquant un ralentissement de la rotation du stock. ÉTAPE 4 (Recommandation): Au vu de la baisse de volume par commande (1u récemment) et du délai important depuis la dernière commande (septembre), une unité suffit pour couvrir la demande de fond tout en évitant le surstockage sur une référence aux truffes à rotation lente.

</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: high)
- 📊 **Baseline N-1**: 4.1u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 1u (20.0%)
- 📉 **Erreur Médiane**: 1u (20.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier long d'environ 40 à 60 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 4u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune valeur aberrante détectée, les commandes oscillent strictement entre 4u et 5u. ÉTAPE 2 (SAISONNALITÉ): Pas de pattern saisonnier marqué en octobre N-1 par rapport au reste de l'année. ÉTAPE 3 (TENDANCE): Les deux dernières commandes de 2025 sont stables à 4u, montrant une demande de fond très régulière bien que peu fréquente. ÉTAPE 4 (RECOMMANDATION): La moyenne lissée et la tendance récente convergent vers 4 unités. Le délai entre les deux dernières commandes suggère qu'un réapprovisionnement est nécessaire à cette période pour maintenir le stock de sécurité sans risque de sur-stockage.

</details>


<details>
<summary><strong>3. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 4u vs Médiane: 3u (Réel: 5u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 4u (confidence: medium)
- 📊 **Baseline N-1**: 4.14u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 5u
- 📉 **Erreur LLM**: 1u (20.0%)
- 📉 **Erreur Médiane**: 2u (40.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Légère baisse (passage de 4-5u à 3-4u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucun outlier détecté, les volumes sont stables entre 3 et 5 unités. Étape 2: La saisonnalité est faible, bien qu'une commande ait eu lieu en octobre N-1 (5u), le volume reste dans la norme. Étape 3: La tendance récente montre un léger ralentissement (3u et 4u en 2025 contre 4u et 5u en 2024). Le cycle de commande semble être de ~40 jours, la dernière commande datant d'il y a 36 jours. Étape 4: La recommandation de 4 unités se base sur la moyenne historique lissée tout en restant conservateur face à la légère baisse de volume observée sur les deux dernières itérations.

</details>


<details>
<summary><strong>4. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle irrégulière (intervalle de 33 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse du volume (2u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Données insuffisantes pour isoler des outliers, les deux points (1u et 2u) sont conservés comme demande de fond naturelle. ÉTAPE 2 (SAISONNALITÉ): Aucune donnée N-1 disponible pour confirmer un impact saisonnier propre à octobre. ÉTAPE 3 (TENDANCE): On observe une baisse de 50% entre août (2u) et septembre (1u), avec une fréquence de commande environ tous les 30-35 jours. ÉTAPE 4 (RECOMMANDATION): Vu le faible historique et la baisse de volume observée sur la période récente, une approche conservatrice suggère une commande de 1 unité pour couvrir le mois à venir sans risque de sur-stockage.

</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (cycles de 30 à 33 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Aucune commande n'est identifiée comme promotionnelle, les volumes de 1u et 2u sont cohérents pour un produit de niche. ÉTAPE 2 (Saisonnalité) : Aucune donnée N-1 disponible, mais la nature du produit (tartinade bio) ne suggère pas de pic majeur en octobre pour ce type de canal B2B. ÉTAPE 3 (Tendance) : La fréquence est très faible (une commande par mois environ). La dernière commande remonte à 36 jours, ce qui correspond au cycle observé précédemment (33 jours). ÉTAPE 4 (Recommandation) : Compte tenu de la faible rotation et de l'absence de commande depuis le 9 septembre, un réapprovisionnement de 1 unité est préconisé pour couvrir la demande de fond tout en évitant le surstockage sur un produit à date de péremption courte (agroalimentaire).

</details>


<details>
<summary><strong>6. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande par mois (cycle 30j environ)
- **Saisonnalité**: none
- **Tendance**: Stable mais volume très faible (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée sur le faible historique. Étape 2: Absence de données N-1 pour confirmer une saisonnalité, mais le produit semble être une référence de fond de rayon à faible rotation. Étape 3: Tendance stable avec une commande mensuelle très légère. Étape 4: La moyenne est de 1.5u. Compte tenu de la faible rotation et de l'absence de données historiques solides, une approche conservatrice de 1 unité est recommandée pour éviter le sur-stockage d'un produit bio potentiellement périssable (DLC). La confiance est faible car basée sur seulement deux points de données distants de plus de 30 jours (dernière commande enregistrée il y a plus de 30 jours par rapport à la date actuelle). habituel: pas de cycle strict détecté sur ces deux points intermittents (mardi/jeudi). L'achat de 1u permet de maintenir une présence en rayon sans risque financier significatif en cas de ralentissement de la demande locale durant l'automne (octobre). L'intervalle de commande semble être d'environ 30 à 40 jours, ce qui rend une commande à la mi-octobre pertinente après la commande du 09 septembre (soit 36 jours).

</details>


<details>
<summary><strong>7. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée il y a 70 jours
- **Saisonnalité**: none
- **Tendance**: Inexistante ou demande très faible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : L'unique point de donnée (2u) n'affiche aucun signe de promotion, il est considéré comme la base. ÉTAPE 2 (Saisonnalité) : Aucune donnée N-1 disponible pour le mois d'octobre, impact non mesurable. ÉTAPE 3 (Tendance) : Historique quasi-inexistant avec seulement une commande il y a plus de deux mois, suggérant soit une rotation très lente, soit un référencement récent. ÉTAPE 4 (Recommandation) : En l'absence de cycle de réapprovisionnement établi et vu l'ancienneté de la dernière commande, nous préconisons la quantité minimale observée (2 unités) pour éviter toute rupture si le client revient sur ce cycle, tout en minimisant le risque d'invendus pour ce produit bio à faible rotation.

</details>


<details>
<summary><strong>8. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande isolée, aucune fréquence établie
- **Saisonnalité**: none
- **Tendance**: Indéterminée (données insuffisantes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune donnée aberrante car il n'existe qu'un seul point de données historique (2 unités). ÉTAPE 2 (SAISONNALITÉ): Impossible à corréler en l'absence de données N-1. ÉTAPE 3 (TENDANCE): Le produit présente un volume de rotation très faible, voire stagnant, avec une seule commande enregistrée il y a plus de deux mois (août). ÉTAPE 4 (RECOMMANDATION): En l'absence de pattern récurrent et face à une rotation extrêmement lente, la recommandation se base sur l'unique volume historique connu (2 unités) par mesure de prudence pour assurer une présence en rayon sans risquer de surstockage sur un produit à faible vélocité.

</details>


<details>
<summary><strong>9. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande spot / irrégulière (unique occurrence en 3 mois)
- **Saisonnalité**: none
- **Tendance**: Incertaine - Volume faible 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune donnée aberrante détectée car l'historique est quasi inexistant (une seule commande de 1u). Étape 2: Saisonnalité impossible à évaluer sereinement sans données N-1. Étape 3: Pas de tendance identifiable, le rythme de commande semble très lent ou spécifique à un besoin ponctuel. Étape 4: La recommandation est fixée à 1 unité, soit le volume minimum constaté, pour répondre à une commande exceptionnelle sans risque de sur-stockage sur une référence à faible rotation. La confiance est faible en raison de la rareté des données historiques.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u
- 2025-08-07 09:25:52: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 12:47:02: 2u
- 2024-08-14 05:54:47: 2u
- 2024-05-30 09:18:01: 2u
- 2024-04-23 14:38:28: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 11:13:17: 4u
- 2025-08-07 09:25:52: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 12:47:02: 5u
- 2024-08-14 05:54:47: 4u
- 2024-07-05 11:29:19: 4u
- 2024-05-30 09:18:01: 4u
- 2024-04-23 14:38:28: 4u
- 2024-03-19 14:34:17: 5u

**✅ Quantité LLM**: 4u (confidence: high)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>3. [JF032] JF SAUCE LAPIN 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 11:13:17: 4u
- 2025-08-07 09:25:52: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-03 12:47:02: 5u
- 2024-08-14 05:54:47: 4u
- 2024-05-30 09:18:01: 4u
- 2024-04-23 14:38:28: 4u
- 2024-03-19 14:34:17: 5u

**✅ Quantité LLM**: 4u (confidence: medium)
**📊 Quantité Réelle**: 5u

</details>


<details>
<summary><strong>4. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u
- 2025-08-07 09:25:52: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u
- 2025-08-07 09:25:52: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 11:13:17: 1u
- 2025-08-07 09:25:52: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 09:25:52: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [LD014] LD Organic Avocado Spread 180 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 09:25:52: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-07 09:25:52: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (16)

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
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | Stock prédit: 0.5u (10j restants) → prédit 2u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | Stock prédit: 0.6u (16j restants) → prédit 2u mais non commandé |
| [LD008] LD Tartinade Pois chiches bio 180g   | 1 | Stock prédit: 0.0u (0j restants) → prédit 1u mais non commandé |
| [LD011] LD Organic Kids Spread 180 g | 1 | Stock prédit: 0.3u (16j restants) → prédit 1u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Stock prédit: -1.9u (-33j restants) → prédit 2u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Stock prédit: 0.0u (0j restants) → prédit 2u mais non commandé |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Stock prédit: -1.9u (-33j restants) → prédit 2u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | Stock prédit: -1.9u (-33j restants) → prédit 2u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Stock prédit: -1.9u (-33j restants) → prédit 2u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: -0.4u (-31j restants) → prédit 1u mais non commandé |


---

## False Negatives (6)

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
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Stock suffisant: 0.4u (36j restants > seuil 30j) |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock suffisant: 0.5u (36j restants > seuil 30j) |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Stock suffisant: 0.6u (58j restants > seuil 30j) |
| [LD006] LD Tartinade Olives bio 180g   | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:15:22.989Z*
