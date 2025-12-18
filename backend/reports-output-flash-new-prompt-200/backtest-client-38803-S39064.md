# Rapport Backtest - Client DLL AD GERAARDSBERGEN

## Contexte

- **Client** : DLL AD GERAARDSBERGEN (ID: 38803)
- **Commande réelle** : S39064
- **Date commande** : 2025-09-08 06:09:55
- **Date cutoff système** : 2025-09-07 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 24
- **Tokens**: 23,031 input + 9,078 output = 32,109 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 24 produits prédits, 16 corrects |
| **Rappel** | 88.9% | 18 produits réels, 16 détectés |
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
| **MAE** | 0.44 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 35.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 37.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

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
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF021] JF PICKLES 350 ML | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (11 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Bimensuel irrégulier (cycle de 17 à 30 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes oscillent entre 1 et 2 unités. Étape 2: La saisonnalité est faible; bien qu'un léger pic à 2u ait été observé en août N-1, les données récentes de juillet (1u) ne confirment pas d'accélération estivale majeure. Étape 3: La tendance récente est à la baisse par rapport à l'année dernière (passage de 2u à 1u par commande). La date de commande actuelle est un dimanche, ce qui est inhabituel pour ce client. Étape 4: Compte tenu de la faible rotation (dernière commande il y a 52 jours) et de la volonté de ne pas sur-stocker sur un produit de niche (Mayonnaise Truffe), une quantité unique de 1 unité est recommandée pour couvrir la demande immédiate sans risque de péremption excessif au vu du faible historique récent des ventes de 2025 (1u par mois environ). Nous privilégions une approche conservatrice en raison de l'espacement des commandes en 2025 par rapport à 2024 (juin/juillet). L'absence de commandes en août 2025 suggère une baisse de régime par rapport à août 2024 ou un stock de sécurité suffisant chez le client par ailleurs déjà approvisionné début juillet. Une seule unité suffit à parer à l'éruption d'une rupture potentielle sans alourdir le stock mort sur un produit dont la fréquence s'étire au-delà d'un mois en 2025 (prochain cycle prévu fin août/début septembre). Ainsi, 1 unité suffit pour une reprise des commandes après une longue pause estivale constatée depuis mi-juillet 2025 (environ 7 semaines sans commande). La prédiction reste prudente face à ce ralentissement manifeste par rapport à l'année précédente (N-1).

</details>


<details>
<summary><strong>2. [JF021] JF PICKLES 350 ML</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique mensuelle à bimensuelle sans jour fixe
- **Saisonnalité**: weak
- **Tendance**: Stable avec un volume moyen de 2.8u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur aberrante détectée, les volumes (1u à 4u) sont cohérents pour ce type de condiment. ÉTAPE 2 (Saisonnalité): Impact faible, bien que les données N-1 montrent des commandes en juin comme en 2025; la demande semble liée à la rotation naturelle du stock plutôt qu'à un pic saisonnier marqué. ÉTAPE 3 (Tendance): La moyenne récente (2.5u sur les 2 dernières commandes) est légèrement inférieure à la moyenne historique (3u). Aucun jour de commande fixe n'est identifié. ÉTAPE 4 (Recommandation): La demande de fond se situe autour de 2.8u. Compte tenu de l'absence de commande en août, un besoin de réapprovisionnement de 3 unités est recommandé pour couvrir la demande de septembre tout en restant conservateur face à l'irrégularité des cycles.

</details>


<details>
<summary><strong>3. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 15 à 45 jours sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à très faible rotation (Slow Mover) avec une demande extrêmement stable de 1 unité par commande. 1. DE-EVENTING: Aucune valeur aberrante détectée, les volumes sont constants (1u). 2. SAISONNALITÉ: L'historique N-1 ne montre aucun pic spécifique en septembre; l'activité semble sporadique tout au long de l'année. 3. TENDANCE: Stable, les deux dernières commandes de l'année en cours confirment le maintien du besoin à 1 unité. 4. RECOMMANDATION: Étant donné la fréquence irrégulière et le faible volume, une commande de 1 unité est recommandée pour couvrir le besoin sans risquer de sur-stockage sur un produit qui peut rester en stock plusieurs mois.

</details>


<details>
<summary><strong>4. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 15 à 45 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucun outlier détecté, les volumes oscillent entre 1 et 2 unités seulement. La demande de fond est de 1 unité par commande. ÉTAPE 2: Faible saisonnalité visible, bien que l'historique N-1 montre une légère hausse en août (2u), le produit reste sur une rotation très lente. ÉTAPE 3: La tendance récente est stable avec 1 unité commandée fin juin et mi-juillet. Il n'y a pas eu de commande en août contrairement à l'an dernier, suggérant un ralentissement ou un stock résiduel. ÉTAPE 4: Compte tenu de la faible rotation (produit de niche type vinaigrette miel 200g) et de la date (dimanche), une commande de sécurité de 1 unité est recommandée pour couvrir le besoin sans risque de sur-stockage.

</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec cycle long (env. 30 à 45 jours)
- **Saisonnalité**: none
- **Tendance**: Stable entre 1u et 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune quantité aberrante détectée, les volumes oscillent naturellement entre 1 et 2 unités. ÉTAPE 2 (Saisonnalité): Pas de corrélation forte identifiée entre N-1 et l'année en cours pour cette période de septembre sur ce produit de niche. ÉTAPE 3 (Tendance): La tendance reste extrêmement stable à faible volume (moyenne glissante proche de 1.2u). La dernière commande (juillet) était de 1u, précédée d'un 2u en juin. ÉTAPE 4 (Recommandation): Au vu du faible historique et de la fréquence de rotation lente, une commande de 1 unité est recommandée pour couvrir la demande de fond sans risquer le surstockage, d'autant que la commande intervient un dimanche, potentiellement en anticipation d'un besoin de début de semaine. Approche conservatrice privilégiée (Low Confidence due au faible volume de données). / [TVF002] TVF TARTINADE BIO PAPRIKA 180g / 2025-09-07 (dimanche) / 1u recommandé pour éviter le sur-stockage sur un produit à faible rotation / TVF TARTINADE BIO PAPRIKA 180g / 2025-09-07 / 1u recommandé pour éviter le sur-stockage sur un produit à faible rotation/ Ce produit a une rotation lente, environ une commande par mois. Il est plus prudent de commander une seule unité pour éviter le surstockage, surtout car nous n'avons pas eu de commande en août. / TVF002

</details>


<details>
<summary><strong>6. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Eratique - cycle extrêmement long (30-60 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse d'activité prolongée
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): Aucun outlier détecté, les volumes sont constants entre 1 et 2 unités. ÉTAPE 2 (SAISONNALITÉ): Faible signal en N-1 durant l'été (juin) qui ne semble pas se répéter de manière significative cette année. ÉTAPE 3 (TENDANCE): Rythme très lent. La dernière commande date d'il y a plus de 2 mois (30 juin), suggérant une rotation de stock extrêmement faible ou un produit de niche. ÉTAPE 4 (SYNTHÈSE): La demande de fond est de 1 unité par cycle. Étant donné l'absence de commande en juillet et août, un réapprovisionnement minimal de 1 unité est recommandé pour couvrir le besoin sans risque de sur-stockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 2 mois
- **Saisonnalité**: weak
- **Tendance**: Stable à la baisse (faible volume permanent)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à très faible rotation (Slow Mover). 1. Étapes de nettoyage : aucune quantité ne dépasse les 2 unités, pas d'outliers détectés. 2. Saisonnalité : l'historique N-1 montre une activité en juin, mais très sporadique; l'impact saisonnier est jugé faible car les volumes ne permettent pas de corrélation statistique forte. 3. Tendance : Le produit n'a pas été commandé depuis plus de 2 mois (dernière commande le 30 juin), suggérant un besoin de réapprovisionnement de sécurité. 4. Recommandation : Compte tenu de la date actuelle (septembre) et du cycle long, une commande de 1 unité est recommandée pour couvrir la demande de fond tout en évitant le sur-stockage sur un produit dont la rotation est incertaine. Un niveau de confiance 'low' est attribué en raison du manque de données récentes sur les 60 derniers jours.

</details>


<details>
<summary><strong>8. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très faible fréquence, commande sporadique (tous les 30 à 60 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (2-3 unités)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucun outlier détecté car les volumes sont extrêmement faibles (0 à 3 unités). La demande de fond est estimée à 2 unités par commande active. Étape 2: L'historique N-1 est trop pauvre pour confirmer une saisonnalité, bien que le produit (tartinade mangue) puisse être lié à l'été, la commande de juin 2025 reste cohérente avec juin 2024. Étape 3: Pas de commande depuis plus de 60 jours (dernière le 30 juin), suggérant un besoin de réapprovisionnement de sécurité. Étape 4: En l'absence de données de rotation rapide, on recommande le minimum historique (2u) pour éviter le sur-stockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>9. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible intensité, commandes sporadiques tous les 1 à 2 mois
- **Saisonnalité**: none
- **Tendance**: Stable à très faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée car les volumes sont extrêmement faibles et cohérents (1-2u). ÉTAPE 2 (Saisonnalité): Pas de pattern saisonnier clair; le produit semble être un article de niche avec une rotation lente. ÉTAPE 3 (Tendance): La dernière commande date de fin juin (1u), suggérant un besoin de réapprovisionnement après 2 mois d'inactivité pour maintenir un stock de sécurité minimal. ÉTAPE 4 (Recommandation): Au vu du faible historique et de la rotation lente (moyenne proche de 1u par commande), une commande de 1 unité est recommandée pour couvrir la demande sans risquer de sur-stockage ou de péremption, le produit étant du bio périssable (tartinade). La confiance est faible en raison de la rareté des points de données historiques en 2025 (une seule commande). En agroalimentaire B2B, pour ce type de référence lente, on privilégie l'unité minimale de commande (PCB). Recommandation fixée à 1u par conservatisme opérationnel le dimanche 07/09/2025 pour une livraison attendue en début de semaine (cycle habituel). Sinon, attendre une commande client ferme avant de stocker davantage de stock sur ce SKU spécifique si ce dernier n'est pas récurrent auprès des clients finaux de l'acheteur B2B actuel car le cycle dépasse les 30 jours calendaires glissants habituels sans demande constatée en juillet-août 2025.

</details>


<details>
<summary><strong>10. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (environ tous les 2 mois en N-1)
- **Saisonnalité**: weak
- **Tendance**: Inactivité prolongée (aucune commande depuis >1 an)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à rotation très lente avec une moyenne historique de 2,25 unités par commande. Etape 1 : Aucun outlier détecté, les volumes sont constants (2-3u). Etape 2 : Pas de saisonnalité forte visible, bien qu'une commande ait eu lieu en août l'an dernier. Etape 3 : La tendance est critique car il n'y a eu aucune activité sur les 3 derniers mois (ni sur les 12 derniers mois). Etape 4 : La demande tombe un dimanche, jour inhabituel. Compte tenu de l'absence de commandes récentes, nous préconisons une quantité conservatrice de 2 unités pour sonder la reprise de la demande sans risquer de sur-stocker un produit potentiellement en fin de vie ou à très faible rotation.

</details>


<details>
<summary><strong>11. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 0.75u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Ponctuel et erratique (fréquence de 1 à 2 mois)
- **Saisonnalité**: none
- **Tendance**: Inexistante / Demande dormante
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): Aucune quantité ne dépasse 2u, pas d'outliers identifiés, la moyenne historique est très basse (0.75u). Étape 2 (Saisonnalité): Aucune donnée récente sur les 3 derniers mois n'indique une reprise saisonnière en septembre; l'historique N-1 s'arrête en août. Étape 3 (Tendance): Absence totale de commande récente (Période Récente vide), ce qui suggère un produit à faible rotation ou une fin de vie. Étape 4 (Recommandation): La date actuelle (dimanche) ne correspond à aucun cycle logique. Étant donné la faible rotation et l'absence de données récentes, on recommande la quantité minimale de 1 unité pour couvrir une éventuelle demande isolée sans risquer de sur-stocker un produit dormant sur ce format de 250ml (Weck). L'indice de confiance est faible en raison de la pauvreté des données récentes (dernière commande il y a plus de 13 mois).

</details>




### 📊 Données d'Input LLM (11 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-17 06:51:09: 1u
- 2025-06-30 08:47:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:12:35: 2u
- 2024-06-20 12:36:29: 1u
- 2024-06-04 08:34:01: 1u
- 2024-04-08 06:27:20: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF021] JF PICKLES 350 ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-17 06:51:09: 4u
- 2025-06-30 08:47:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-20 12:36:29: 4u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 3u

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-17 06:51:09: 1u
- 2025-06-30 08:47:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:12:35: 2u
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 1u
- 2024-04-08 06:27:20: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-17 06:51:09: 1u
- 2025-06-30 08:47:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:12:35: 2u
- 2024-06-20 12:36:29: 1u
- 2024-06-04 08:34:01: 0u
- 2024-04-08 06:27:20: 0u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-07-17 06:51:09: 1u
- 2025-06-30 08:47:03: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:12:35: 1u
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 08:47:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-20 12:36:29: 2u
- 2024-06-04 08:34:01: 1u
- 2024-04-08 06:27:20: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 08:47:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 08:47:03: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-20 12:36:29: 3u
- 2024-06-04 08:34:01: 0u
- 2024-04-08 06:27:20: 0u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>9. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-06-30 08:47:03: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>10. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:12:35: 2u
- 2024-06-20 12:36:29: 2u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 3u

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>11. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-02 06:12:35: 1u
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 0u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (8)

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
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Stock prédit: 0.1u (4j restants) → prédit 1u mais non commandé |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Stock prédit: -0.3u (-7j restants) → prédit 2u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Stock prédit: -0.9u (-23j restants) → prédit 1u mais non commandé |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock prédit: 0.2u (18j restants) → prédit 1u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Stock prédit: -0.2u (-12j restants) → prédit 1u mais non commandé |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Stock prédit: 0.1u (5j restants) → prédit 1u mais non commandé |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Stock prédit: -1.8u (-70j restants) → prédit 1u mais non commandé |


---

## False Negatives (2)

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
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock suffisant: 1.4u (121j restants > seuil 30j) |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock suffisant: 0.3u (35j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:15:29.179Z*
