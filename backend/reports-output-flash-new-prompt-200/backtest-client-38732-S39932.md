# Rapport Backtest - Client CRF MARKET AUBEL SA AGBA

## Contexte

- **Client** : CRF MARKET AUBEL SA AGBA (ID: 38732)
- **Commande réelle** : S39932
- **Date commande** : 2025-10-27 10:41:25
- **Date cutoff système** : 2025-10-26 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 27
- **Tokens**: 26,561 input + 8,994 output = 35,555 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 52.4% | 42 produits prédits, 22 corrects |
| **Rappel** | 100.0% | 22 produits réels, 22 détectés |
| **F1-Score** | 68.8% | Score équilibré global |

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
| **MAE** | 1.18 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 47.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 46.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 16 | Avec erreur |

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

## True Positives (22)

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
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 3 | 2.0 | 66.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 3 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD010] LD Organic Truffle Spread 135 g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 5 | 2 | 3.0 | 150.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 3 | 3 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 4 | 3.0 | 75.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 4 | 2.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (15 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 3u (75.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 20 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 1.5u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune commande ne dépasse le seuil d'outlier (max 3u en 2024), la demande de fond est estimée à 1.5u. ÉTAPE 2: La saisonnalité est faible, bien qu'on observe historiquement une légère activité en automne (septembre/octobre). ÉTAPE 3: La tendance récente montre une stabilisation (2u en sept, 1u en août) après un pic à 3u en avril 2024. Le volume moyen par commande reste bas. ÉTAPE 4: Compte tenu de l'historique de septembre 2024 et 2025, une commande de 2 unités permet de couvrir la demande mensuelle habituelle sans risque de sur-stockage majeur pour ce format 250ML.

</details>


<details>
<summary><strong>2. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle long et irrégulier, environ tous les 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u, baisse de fréquence par rapport à N-1
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucune commande exceptionnelle détectée, les volumes sont constants (1u à 2u). ÉTAPE 2 (SAISONNALITÉ): Faible impact saisonnier visible malgré la nature du produit (Sauce Cocktail); les données N-1 montrent des achats ponctuels d'avril à juillet. ÉTAPE 3 (TENDANCE): Le rythme a ralenti de manière significative en 2025 avec une seule commande enregistrée en septembre. ÉTAPE 4 (RECOMMANDATION): Compte tenu de la faible rotation historique et de la dernière commande datant de 6 semaines, un réapprovisionnement de 1 unité est suffisant pour couvrir le besoin actuel tout en évitant le sur-stockage d'un produit à rotation lente.

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 à 45 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à la baisse légère (1u vs 2u l'an passé)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing) : Aucune anomalie détectée, les volumes sont constants (1u-2u). Étape 2 (Saisonnalité) : Faible impact ; l'an dernier en octobre une commande de 2u a eu lieu, mais la demande actuelle semble plus lente. Étape 3 (Tendance) : Les deux dernières commandes (août/septembre 2025) sont stables à 1u, marquant un léger ralentissement par rapport aux pics de 2u en 2024. Étape 4 (Recommandation) : Compte tenu de la faible rotation de ce produit (mayonnaise en format 250ml) et de la date (dimanche), une commande de 1 unité suffit pour couvrir le besoin immédiat sans risquer le sur-stockage.

</details>


<details>
<summary><strong>4. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier mensuel (moyenne 30-40 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive identifiée (2u en sept. 2025)
- **Outliers détectés**: 6u

**🧠 Raisonnement LLM:**
Étape 1: La commande de 6u en juin 2024 est traitée comme un outlier léger (pic isolé). La demande de fond réelle se situe entre 3 et 4u. Étape 2: Faible impact saisonnier constaté en octobre N-1 (5u), mais les volumes globaux ont diminué cette année. Étape 3: La tendance récente montre un ralentissement avec seulement 2u commandées en septembre 2025 après une période sans commande en juillet. Étape 4: En croisant la demande historique stable (4u) et la tendance récente plus faible, une quantité de 3u est recommandée. Cela permet de couvrir la demande sans risquer le sur-stockage sur un produit dont la rotation semble ralentir.

</details>


<details>
<summary><strong>5. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 2u (66.7%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques tous les 25-45 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond extrêmement stable à 1 unité par commande. ÉTAPE 1: La commande de 3u en mars 2024 a été identifiée comme un outlier (stockage initial ou événement ponctuel) et écartée de la moyenne. ÉTAPE 2: Aucune saisonnalité marquée n'est visible entre 2024 et 2025 pour cette période d'octobre. ÉTAPE 3: La tendance récente confirme un rythme de 1u tous les 20 à 30 jours environ. Malgré la demande un dimanche (jour inhabituel), le stock de sécurité n'a pas besoin d'être augmenté car le volume unitaire est constant. ÉTAPE 4: La recommandation finale est maintenue à 1 unité pour couvrir le besoin immédiat sans risque de sur-stockage.

</details>


<details>
<summary><strong>6. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ 30-40 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse légère (passage de 1u à 2u systématique en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à faible rotation mais à demande constante. Etape 1: Aucune valeur aberrante n'est détectée, les volumes oscillent entre 1 et 2 unités. Etape 2: On observe une légère activité accrue à l'automne en N-1 (octobre), ce qui justifie un maintien de volume. Etape 3: La tendance récente (août/septembre 2025) montre une stabilisation à 2 unités par commande contre 1 unité l'année précédente, suggérant une croissance de la demande de fond de +100%. Etape 4: Compte tenu de l'historique récent et de la saisonnalité N-1 (commande de 2u le 11/10/24), la recommandation est de 2 unités pour couvrir le cycle de 30 jours.

</details>


<details>
<summary><strong>7. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.7u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Hausse légère: passage de 1u en 2024 à 2u constants en 2025
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont cohérents avec un produit de niche (1-2 unités). Étape 2: La saisonnalité est faible, bien qu'une commande ait eu lieu en octobre N-1, le volume global reste très stable. Étape 3: On observe une tendance haussière légère mais ferme, les deux dernières commandes de 2025 étant de 2 unités contre 1 unité l'année précédente à période comparable. Étape 4: La recommandation de 2 unités sécurise la demande sans risque de surstockage majeur, s'alignant sur la consommation réelle observée lors du dernier trimestre.

</details>


<details>
<summary><strong>8. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les 20-30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (seulement 2 points de données), ce qui réduit la visibilité. Les deux commandes passées (août et septembre) montrent une demande de fond stable de 2 unités par cycle. Il n'y a pas d'outliers identifiés ni de données N-1 pour confirmer une saisonnalité. Étant donné l'intervalle de ~30 jours entre les commandes et le fait que la dernière commande remonte à 6 semaines, un besoin de réapprovisionnement de 2 unités est cohérent avec la tendance observée pour maintenir le stock de fond sans risque de sur-stockage massif sur ce produit bio de niche (DLUO potentiellement courte). Nous restons conservateurs à 2 unités en l'absence de signaux de croissance ou de promotions prévues sur l'avocat en octobre/novembre en B2B hors fêtes de fin d'année précoces.

</details>


<details>
<summary><strong>9. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 30 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive -25%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucun outlier identifié, les volumes oscillent naturellement entre 2u et 5u. La moyenne historique lissée est de 3,4u. ÉTAPE 2 (SAISONNALITÉ): Faible impact saisonnier. On note une légère hausse au printemps (5u) mais l'automne (période actuelle) présente historiquement des volumes modérés (2u-3u). ÉTAPE 3 (TENDANCE): La tendance récente montre une diminution du volume commandé (2u en septembre vs moyenne de 4u précédemment) et un allongement de la durée entre les commandes. ÉTAPE 4 (RECOMMANDATION): Bien que la base théorique soit de 3,4u, la tendance baissière récente et la saisonnalité stabilisée à l'automne poussent à une recommandation conservatrice de 3 unités pour couvrir les besoins sans générer de surstock sur un produit au rythme ralenti.

</details>


<details>
<summary><strong>10. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.12u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 à 45 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (moyenne N-1 à 2u vs dernière commande à 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'a été identifiée comme outlier, les quantités oscillant de manière stable entre 1u et 3u. Étape 2: L'analyse de l'historique N-1 ne montre aucun pic saisonnier marqué en octobre/novembre, la demande de fond est restée linéaire. Étape 3: On observe une légère hausse de volume sur la dernière commande (3u) par rapport à la moyenne historique de 2u, mais avec une fréquence de commande qui s'est considérablement ralentie (dernière commande en août). Étape 4: La recommandation de 2 unités est conservatrice pour tenir compte du ralentissement du rythme de commande récent tout en s'alignant sur la moyenne historique lissée, minimisant ainsi le risque de sur-stockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>11. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 5u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 5u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 3u (150.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel / Signal faible (1 commande en 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable mais volume extrêmement faible
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune donnée aberrante car une seule donnée disponible (5u), servant de base par défaut. Étape 2 (Saisonnalité): Données N-1 absentes, impact saisonnier impossible à confirmer, traité comme neutre. Étape 3 (Tendance): La dernière commande date de plus de deux mois (août). Il n'y a pas de rythme hebdomadaire ou mensuel établi. Étape 4 (Recommandation): En l'absence de récurrence et de tendance à la hausse, on recommande de reconduire la quantité minimale observée (5u) pour couvrir une éventuelle demande ponctuelle tout en limitant le risque de sur-stockage sur un produit à rotation lente. La confiance est faible car basée sur un seul point de données.

</details>


<details>
<summary><strong>12. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier moyen de 30-40 jours
- **Saisonnalité**: weak
- **Tendance**: Hausse légère observée sur la période estivale
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
1. DE-EVENTING: La commande de 4u en mai 2024 et août 2025 est traitée comme un pic ponctuel, la moyenne de fond se situant à 2.4 unités. 2. SAISONNALITÉ: Faible corrélation saisonnière directe, bien que les produits de type 'Mayonnaise' tendent à mieux performer en période estivale et pré-fêtes (octobre/novembre). 3. TENDANCE: La dernière commande enregistrée (4u) montre une dynamique de volume légèrement supérieure à la moyenne N-1 à la même période (2u). 4. RECOMMANDATION: Avec une rupture de flux depuis août 2025 (pas de commande en septembre), un besoin de réapprovisionnement de 3 unités est préconisé pour couvrir la demande de fin d'année sans risquer un surstockage d'un produit de niche (truffe).

</details>


<details>
<summary><strong>13. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ tous les 2 à 4 mois (irrégulier)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u, historique très sporadique
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les quantités (1-2u) sont cohérentes avec un produit de niche. Étape 2: L'historique N-1 (mars, juin, juillet) ne montre aucun lien avec la période actuelle d'octobre. Étape 3: La dernière commande remonte à fin août (2 mois), suggérant un possible besoin de réapprovisionnement, mais le rythme est très lent. Étape 4: Étant donné la faible vélocité (moyenne de 1.25u par commande sur 4 points de données) et l'absence de commande depuis 60 jours, une quantité minimale de 1 unité est recommandée pour couvrir la demande tout en évitant un surstock inutile sur une référence à rotation lente.

</details>


<details>
<summary><strong>14. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Atypique / Ponctuel (moyenne d'une commande toutes les 4 à 6 semaines)
- **Saisonnalité**: none
- **Tendance**: Inactivité critique (aucune commande depuis 12 mois)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des données montre un produit à très faible rotation (Slow Mover) avec une demande constante de 1 unité par commande en 2024. Cependant, il n'y a eu aucune activité enregistrée sur les 12 derniers mois (dernière commande en octobre 2024). Bien que le cycle historique suggère une commande toutes les ~40 jours, l'absence de données récentes rend la prévision incertaine. Nous recommandons la quantité minimale de 1 unité pour tester la reprise de la demande tout en évitant le sur-stockage sur une référence dont la rotation semble s'être arrêtée ou fortement ralentie.

</details>


<details>
<summary><strong>15. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très faible fréquence, commande sporadique (écart de 1 à 6 mois)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement faible et irrégulière (3 commandes sur l'année N-1, aucune commande récente en N). Toutes les commandes précédentes sont unitaires (1u), ce qui définit la ligne de base. Il n'y a pas d'outliers à traiter. Bien qu'une commande ait eu lieu en octobre l'année dernière (saisonnalité faible potentielle), l'absence totale d'activité depuis mars 2024 ainsi que la nature sporadique du produit suggèrent de commander uniquement le minimum vital (1u) pour couvrir un besoin ponctuel sans risquer le sur-stockage sur un produit à rotation très lente.

</details>




### 📊 Données d'Input LLM (15 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:15:39: 1u
- 2024-08-09 06:13:57: 1u
- 2024-06-27 07:05:16: 2u
- 2024-04-23 07:38:39: 3u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>2. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-16 10:53:09: 1u
- 2024-06-27 07:05:16: 1u
- 2024-05-22 09:12:24: 1u
- 2024-04-23 07:38:39: 1u
- 2024-03-18 09:22:57: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 1u
- 2025-08-21 12:13:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 2u
- 2024-09-09 13:15:39: 1u
- 2024-08-09 06:13:57: 1u
- 2024-07-16 10:53:09: 1u
- 2024-06-27 07:05:16: 2u
- 2024-05-22 09:12:24: 2u
- 2024-04-23 07:38:39: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 5u
- 2024-09-09 13:15:39: 3u
- 2024-07-16 10:53:09: 2u
- 2024-06-27 07:05:16: 6u
- 2024-05-22 09:12:24: 5u
- 2024-04-23 07:38:39: 4u
- 2024-03-18 09:22:57: 4u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>5. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 1u
- 2025-08-21 12:13:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 1u
- 2024-09-09 13:15:39: 1u
- 2024-06-27 07:05:16: 1u
- 2024-03-18 09:22:57: 3u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>6. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 2u
- 2024-09-09 13:15:39: 1u
- 2024-07-16 10:53:09: 2u
- 2024-05-22 09:12:24: 1u
- 2024-04-23 07:38:39: 1u
- 2024-03-18 09:22:57: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 1u
- 2024-08-09 06:13:57: 1u
- 2024-07-16 10:53:09: 1u
- 2024-05-22 09:12:24: 2u
- 2024-03-18 09:22:57: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>8. [LD014] LD Organic Avocado Spread 180 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-12 06:37:01: 2u
- 2025-08-21 12:13:27: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 3u
- 2024-09-09 13:15:39: 3u
- 2024-08-09 06:13:57: 2u
- 2024-07-16 10:53:09: 2u
- 2024-06-27 07:05:16: 5u
- 2024-05-22 09:12:24: 5u
- 2024-04-23 07:38:39: 4u
- 2024-03-18 09:22:57: 4u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-21 12:13:27: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:15:39: 2u
- 2024-08-09 06:13:57: 1u
- 2024-07-16 10:53:09: 2u
- 2024-06-27 07:05:16: 3u
- 2024-05-22 09:12:24: 1u
- 2024-04-23 07:38:39: 3u
- 2024-03-18 09:22:57: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>11. [LD013] LD Tuscan Organic Spread 180 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-21 12:13:27: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>12. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-21 12:13:27: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 2u
- 2024-09-09 13:15:39: 3u
- 2024-08-09 06:13:57: 2u
- 2024-07-16 10:53:09: 3u
- 2024-06-27 07:05:16: 1u
- 2024-05-22 09:12:24: 4u
- 2024-04-23 07:38:39: 2u
- 2024-03-18 09:22:57: 3u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>13. [JF032] JF SAUCE LAPIN 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-21 12:13:27: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-16 10:53:09: 1u
- 2024-06-27 07:05:16: 1u
- 2024-03-18 09:22:57: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>14. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 1u
- 2024-09-09 13:15:39: 1u
- 2024-07-16 10:53:09: 1u
- 2024-06-27 07:05:16: 1u
- 2024-05-22 09:12:24: 1u
- 2024-04-23 07:38:39: 1u
- 2024-03-18 09:22:57: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>15. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-11 06:21:26: 1u
- 2024-09-09 13:15:39: 1u
- 2024-03-18 09:22:57: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (20)

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
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Stock prédit: -0.1u (-4j restants) → prédit 1u mais non commandé |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Stock prédit: -0.3u (-10j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Stock prédit: 0.3u (7j restants) → prédit 2u mais non commandé |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock prédit: -0.3u (-10j restants) → prédit 1u mais non commandé |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Stock prédit: 0.1u (7j restants) → prédit 1u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock prédit: 0.3u (15j restants) → prédit 1u mais non commandé |
| [LD011] LD Organic Kids Spread 180 g | 2 | Stock prédit: 0.1u (3j restants) → prédit 2u mais non commandé |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Stock prédit: -2.0u (-28j restants) → prédit 1u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Stock prédit: -1.6u (-26j restants) → prédit 2u mais non commandé |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | Stock prédit: -1.7u (-16j restants) → prédit 3u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 3 | Stock prédit: -6.5u (-44j restants) → prédit 3u mais non commandé |
| [LD009] LD Organic Asparagus Spread 180 g | 2 | Stock prédit: -0.7u (-26j restants) → prédit 2u mais non commandé |
| [LD012] LD Organic Samphire Spread 135 g | 1 | Stock prédit: -0.3u (-14j restants) → prédit 1u mais non commandé |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | Stock prédit: 0.3u (12j restants) → prédit 2u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 2 | Stock prédit: -0.2u (-10j restants) → prédit 2u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: 0.2u (13j restants) → prédit 1u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 3 | Stock prédit: -2.2u (-43j restants) → prédit 3u mais non commandé |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Stock prédit: 0.1u (15j restants) → prédit 1u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Stock prédit: -0.1u (-5j restants) → prédit 1u mais non commandé |
| [LD015] LD Onion Spread 180g | 1 | Stock prédit: -3.3u (-88j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:12:52.025Z*
