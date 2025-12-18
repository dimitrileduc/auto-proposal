# Rapport Backtest - Client DLL AD BATTICE

## Contexte

- **Client** : DLL AD BATTICE (ID: 38785)
- **Commande réelle** : S40133
- **Date commande** : 2025-11-05 10:30:05
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 12,032 input + 4,641 output = 16,673 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 82.6% | 23 produits prédits, 19 corrects |
| **Rappel** | 76.0% | 25 produits réels, 19 détectés |
| **F1-Score** | 79.2% | Score équilibré global |

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
| **MAE** | 0.74 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 37.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 33.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -21.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
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

## True Positives (19)

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
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 4 | 3.0 | 75.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 3 | 2.0 | 66.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF021] JF PICKLES 350 ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF032] JF SAUCE LAPIN 380GX6 | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 3 | 2 | 1.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 3 | 1.0 | 33.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (6 produits)


<details>
<summary><strong>1. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 35-40 jours environ)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune donnée exceptionnelle n'est détectée sur les deux points de données fournis (1u et 2u). ÉTAPE 2 (Saisonnalité): Absence de données N-1 pour confirmer une saisonnalité, impact considéré comme nul par défaut. ÉTAPE 3 (Tendance): Le volume est extrêmement faible et la fréquence est irrégulière (environ une commande par mois). La dernière commande date d'il y a 32 jours. ÉTAPE 4 (Recommandation): On observe une demande de fond de 1.5u en moyenne. Étant donné l'absence d'historique robuste et l'objectif de ne pas sur-stocker un produit à rotation lente, une commande minimale de 1 unité est préconisée pour couvrir les besoins immédiats sans risque financier.

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 3u (75.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande erratique environ tous les 45 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 1-3u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur n'est identifiée comme outlier car les volumes (1u à 3u) sont cohérents avec un produit de niche (Mayonnaise Truffe). ÉTAPE 2 (Saisonnalité): Un pic à 3u a été observé en octobre 2024 (N-1), mais n'a pas été reconduit en octobre 2025 (1u le 03/10), suggérant une saisonnalité faible ou un décalage de consommation. ÉTAPE 3 (Tendance): La tendance récente montre un ralentissement avec seulement 1 unité commandée il y a un mois, contre 3 unités en août. Le cycle de commande est très espacé. ÉTAPE 4 (Recommandation): La demande de fond se situe autour de 2 unités, mais compte tenu de la commande récente de 1u en octobre et du risque de surstockage sur un produit à rotation lente, une quantité conservatrice de 1 unité est recommandée pour couvrir la demande immédiate sans alourdir les stocks en novembre, période traditionnellement calme avant les fêtes de fin d'année (où un pic pourrait survenir en décembre). La confiance est faible en raison du faible volume de transactions historiques (6 commandes en 18 mois). Quantité finale: 1u pour maintenir le stock au plus juste avant la période de Noël par précaution face au ralentissement d'octobre.

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 2u (66.7%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les 30 à 60 jours
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1-2 unités par commande
- **Outliers détectés**: 3u

**🧠 Raisonnement LLM:**
L'analyse montre une consommation irrégulière et de faible volume. ÉTAPE 1: La commande de 3u en août 2024 est considérée comme un pic isolé, la demande de fond se situant autour de 1.4 unités. ÉTAPE 2: Aucune saisonnalité marquée n'apparaît, les commandes étant dispersées sans corrélation mensuelle fixe. ÉTAPE 3: La tendance récente confirme un besoin faible (1u en octobre). ÉTAPE 4: Étant donné que la dernière commande (1u) date d'il y a un mois et que le stock de sécurité B2B doit rester minimal pour ce type de référence à rotation lente, une recommandation conservatrice de 1 unité est préconisée pour couvrir le besoin courant sans risque de sur-stockage sur un produit à faible rotation (Vitesse C). Le niveau de confiance est faible en raison de l'espacement important entre les commandes et de l'absence de cycle de jour fixe (commande un mardi alors que les historiques varient du lundi au vendredi). Mais le volume moyen historique de 1.5u arrondi à l'unité inférieure (principe conservateur) valide le choix de 1u pour novembre 2025. Aucun rattrapage spécifique n'est anticipé car le rythme de consommation ne semble pas s'essouffler ni s'accélérer significativement (2u en août, 1u en octobre). Une recommandation de 1 unité permet de maintenir la présence produit tout en attendant la prochaine commande client réelle au vu du délai habituel entre deux réapprovisionnements (environ 45 jours). Le caractère sporadique des commandes B2B impose ici une prudence extrême pour éviter l'immobilisation financière sur un produit Weck de 250ml qui semble être un produit de niche ou optionnel dans le catalogue du client final. Une quantité de 1u assure la continuité de service sans alourdir le stock dormant. La prochaine commande significative est probablement à prévoir pour la fin d'année si le client prépare des menus de fêtes, mais rien dans l'historique N-1 ne justifie un tel pic dès le 4 novembre.

</details>


<details>
<summary><strong>4. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 30 à 90 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont constants à 1 ou 2 unités. Étape 2: Historique N-1 insuffisant pour confirmer une saisonnalité, bien que le produit soit présent en été et automne. Étape 3: La tendance récente montre une commande unitaire en octobre 2025, confirmant une demande de niche ou de très faible rotation. Étape 4: Compte tenu de la faible fréquence et du dernier mouvement récent (il y a 30 jours), une commande de 1 unité suffit pour maintenir un stock minimal sans risque de sur-stockage sur un produit à rotation lente. La confiance est faible due au très petit nombre de points de données (3 commandes en 14 mois). Mais le besoin est identifié par la sollicitation de commande ce mardi (hors cycle). Recommandation: 1 unité (stock de sécurité de base). Solarité B2B respectée en restant conservateur sur un produit de niche (Sauce Tartare 470ml). Etant donné que la dernière commande date d'un mois, il est probable que le client reconstitue son unité de stock vendue/consommée le mois dernier le mois dernier sur un rythme mensuel lâche car le produit a une DLC longue (sauce en pot). On maintient donc le stock fonds de rayon à 1u pour éviter la rupture si la demande mensuelle se confirme en 2025 par rapport à 2024 (octobre 2024 vs octobre 2025). On ne commande pas plus pour ne pas immobiliser de capital sur un produit qui peut rester 3 mois sans mouvement (cf. gap juillet-octobre 2024). L'analyse du jour (mardi) ne montre pas de lien avec les jours habituels, ce qui suggère un besoin ponctuel de réapprovisionnement de rayon plutôt qu'une livraison de flux tendu logistique majeur. 1 unité est le choix le plus sécuritaire et rationnel ici pour un expert supply chain cherchant l'équilibre stock/rupture sur une faible rotation.

</details>


<details>
<summary><strong>5. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique ultra-faible (tous les 2 à 6 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée, l'historique est exclusivement composé de commandes unitaires (1u). ÉTAPE 2 (Saisonnalité): Pas de pattern saisonnier clair; le produit est une référence de niche avec des rotations très lentes. ÉTAPE 3 (Tendance): La demande est stable mais extrêmement faible. La dernière commande date de plus de deux mois (août 2025). Le cycle est imprévisible mais unitaire. ÉTAPE 4 (Recommandation): Au vu du caractère B2B et de la faible rotation, une commande de 1 unité est recommandée pour couvrir le besoin sans risque de mévente ou de dépassement de DLC sur un produit de niche (Wasabi Weck).

</details>


<details>
<summary><strong>6. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très faible fréquence, environ une commande tous les 14 mois
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont extrêmement faibles (1 ou 2 unités). Étape 2: Il n'y a pas assez de données pour confirmer une saisonnalité, bien que la commande de l'an dernier ait eu lieu à une période proche (octobre vs novembre). Étape 3: La tendance montre une légère baisse de 2u à 1u sur la dernière occurrence. Étape 4: Étant donné la très faible rotation de cette référence (JF SAUCE SAMOURAI 250ML) et le risque de péremption en agroalimentaire, la recommandation est conservatrice (1 unité) pour couvrir le besoin immédiat sans créer de surstock dormant.

</details>




### 📊 Données d'Input LLM (6 produits)


<details>
<summary><strong>1. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:08:19: 1u
- 2025-08-27 12:42:53: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:08:19: 1u
- 2025-08-27 12:42:53: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-02 09:27:51: 3u
- 2024-07-15 13:21:02: 3u
- 2024-05-30 14:06:56: 1u
- 2024-03-27 12:46:44: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:08:19: 1u
- 2025-08-27 12:42:53: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-02 09:27:51: 1u
- 2024-08-08 07:49:55: 3u
- 2024-07-15 13:21:02: 1u
- 2024-05-30 14:06:56: 1u
- 2024-04-30 09:31:30: 2u
- 2024-03-27 12:46:44: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-03 06:08:19: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-02 09:27:51: 2u
- 2024-07-15 13:21:02: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-27 12:42:53: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-02 09:27:51: 1u
- 2024-04-30 09:31:30: 1u
- 2024-03-27 12:46:44: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-27 12:42:53: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-02 09:27:51: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (4)

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
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock prédit: -0.2u (-5j restants) → prédit 1u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Stock prédit: 0.4u (20j restants) → prédit 1u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Stock prédit: 0.3u (12j restants) → prédit 1u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: -0.2u (-19j restants) → prédit 1u mais non commandé |


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
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Stock suffisant: 0.5u (37j restants > seuil 30j) |
| [LD015] LD Onion Spread 180g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LD004] LD Tartinade Tomate Basilic bio 180g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:15:14.629Z*
