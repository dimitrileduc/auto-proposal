# Rapport Backtest - Client DLL AD WEZEMAAL WEDIS

## Contexte

- **Client** : DLL AD WEZEMAAL WEDIS (ID: 38845)
- **Commande réelle** : S39846
- **Date commande** : 2025-10-21 12:06:38
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 17
- **Tokens**: 17,091 input + 5,369 output = 22,460 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 64.3% | 28 produits prédits, 18 corrects |
| **Rappel** | 100.0% | 18 produits réels, 18 détectés |
| **F1-Score** | 78.3% | Score équilibré global |

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
- **Pattern temporel**: Cycle mensuel (~30 jours), traditionnellement en début de mois
- **Saisonnalité**: none
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: 2u

**🧠 Raisonnement LLM:**
Étape 1: Le pic de 2u en mars 2024 est considéré comme un outlier isolé, la demande de fond est de 1u. Étape 2: Aucune saisonnalité marquée n'est détectée sur ce produit de niche (vinaigrette), les volumes restent faibles et sporadiques toute l'année. Étape 3: On observe une stabilisation du rythme sur un cycle mensuel précis (tous les premiers lundis du mois en septembre et août 2025). Étape 4: La date actuelle (20 octobre) intervient après une absence de commande en début octobre, suggérant un besoin de réapprovisionnement pour maintenir le stock de fond de 1u.

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
- **Pattern temporel**: Cycle mensuel approximatif (30-40 jours), principalement en début de mois
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive identifiée (Moyenne 3u en 2024 vs 1.5u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre quatre étapes distinctes : 1. Aucun outlier n'est détecté car les volumes restent très faibles (1-4u). 2. La saisonnalité est faible mais présente avec un léger historique de commandes au printemps/été, s'estompant vers l'automne. 3. La tendance récente montre un ralentissement net par rapport à 2024 (moyenne passée de 3u à 1.5u). 4. Bien que la demande de fond soit de 1.5u, la commande intervient après un intervalle de 50 jours depuis la dernière saisie, suggérant un besoin de réapprovisionnement de sécurité. On arrondit à 2 unités pour couvrir le mois à venir tout en restant conservateur face à la tendance baissière.

</details>


<details>
<summary><strong>3. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intermittente (tous les 1 à 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante n'a été détectée, les volumes sont extrêmement faibles (0 à 3u). Étape 2: Aucune saisonnalité claire n'est identifiable entre l'historique N-1 et actuel. Étape 3: La demande est sporadique et lente, la dernière commande remontant à 7 semaines (début septembre). Étape 4: Étant donné la faible vélocité (moyenne inférieure à 1u/mois), la quantité minimale de 1 unité est recommandée pour couvrir la demande potentielle sans risquer de sur-stocker un produit à rotation lente. La confiance est faible car les données historiques sont rares.

</details>


<details>
<summary><strong>4. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel de type premier lundi du mois
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse montre un produit à faible rotation constante. ÉTAPE 1: La commande de 3u en septembre N-1 est identifiée comme un outlier isolé, la demande de fond se situant à 1u. ÉTAPE 2: Pas de saisonnalité marquée, les données N-1 montrent des ventes sporadiques tout au long de l'année. ÉTAPE 3: Une tendance à la stabilisation émerge sur les 2 derniers mois avec des commandes systématiques de 1u le premier lundi du mois. ÉTAPE 4: Bien que nous soyons le 20 octobre (décalage par rapport au début de mois habituel), le besoin unitaire reste la norme pour éviter le sur-stockage sur cette référence bio à faible volume.

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
- **Pattern temporel**: Faible intensité, cycle irrégulier d'environ 45 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à très faible rotation (Slow Mover) avec des commandes unitaires systématiques (1u), à l'exception d'un pic à 2u en mars 2024. Il n'y a pas d'outliers manifestes car le volume est structurellement bas. La saisonnalité est faible, bien qu'un léger regroupement soit visible en période estivale (juillet). La dernière commande datant d'août (il y a 2 mois), et le stock de sécurité B2B devant être maintenu pour ce type de condiment, une commande de 1 unité est recommandée pour couvrir la demande de fond sans engendrer de sur-stockage inutile. Le niveau de confiance est bas en raison de la rareté des points de données sur 2025 (une seule commande).

</details>


<details>
<summary><strong>6. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 2 à 3 mois sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Stable à très faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur aberrante détectée car les volumes sont extrêmement faibles (0 à 2 unités). ÉTAPE 2 (Saisonnalité): Pas de pic significatif en N-1 à la même période (septembre 2024 était à 2u, puis plus rien jusqu'en août 2025). ÉTAPE 3 (Tendance): Le produit est en rotation très lente (Slow Mover). La dernière commande remonte à plus de 2 mois (août 2025). ÉTAPE 4 (Recommandation): Au vu du très faible historique et de la nature ponctuelle des besoins, une commande de 1 unité est recommandée pour couvrir un besoin immédiat potentiel sans immobiliser de stock inutilement.

</details>


<details>
<summary><strong>7. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec cycle long (approximativement tous les 2 mois)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (3u en 2024 vs 1u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'est identifiée comme promotionnelle vu les faibles volumes (max 3u). La demande de fond est très faible. Étape 2: Une légère saisonnalité est notée en été (juillet) sur N-1, mais non confirmée en 2025. Étape 3: La tendance est à la baisse significative, passant d'un rythme de 3u à seulement 1u lors de la dernière commande d'août. Étape 4: En l'absence de commandes récentes sur les 60 derniers jours et face à un produit à faible rotation, la recommandation est fixée au minimum de 1 unité pour couvrir une éventuelle demande résiduelle tout en évitant le surstockage sur un produit bio dont la DLUO pourrait être courte. Le niveau de confiance est bas en raison du manque de données récentes cohérentes depuis août 2025 (période de 2 mois sans activité).

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
- **Pattern temporel**: Sporadique (tous les 3 à 4 mois)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (0 commande depuis 6 mois)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Les volumes historiques sont très faibles (1u ou 2u), donc aucune valeur n'est considérée comme un outlier. La moyenne est de 0,6u sur les points de commande actifs. ÉTAPE 2 (Saisonnalité) : Aucune corrélation saisonnière visible entre 2024 et 2025 sur ce produit spécifique. ÉTAPE 3 (Tendance) : Tendance fortement baissière avec une absence totale de commande au cours des 6 derniers mois (dernier mouvement en mars 2024). ÉTAPE 4 (Recommandation) : Malgré l'absence de demande récente, la demande de fond théorique est très basse. Étant donné qu'il s'agit d'un réapprovisionnement ponctuel sur un produit B2B, nous préconisons la quantité minimale unitaire de 1 pour maintenir une présence stock sans risque de sur-stockage massif.

</details>


<details>
<summary><strong>9. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel et irrégulier (tous les 2 mois environ)
- **Saisonnalité**: weak
- **Tendance**: Instable avec inactivité récente
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
Étape 1: Nettoyage des données : la commande de 3u en juillet 2024 est un outlier (3x la normale), ramenant la demande de base à environ 1u par commande effective. Étape 2: Saisonnalité : Faible activité historique en fin d'année (une seule commande en septembre l'année passée). Étape 3: Tendance : Aucune commande sur les 3 derniers mois, suggérant une rotation très lente ou un dé-référencement partiel. Étape 4: Recommandation : Compte tenu de l'absence de données récentes et du caractère B2B, une commande minimale de 1 unité est préconisée pour tester la reprise de la demande sans risque de sur-stockage sur un produit à longue période d'inactivité.

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

**✅ Quantité LLM**: 1u (confidence: medium)
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

*Rapport généré automatiquement le 2025-12-18T12:13:56.396Z*
