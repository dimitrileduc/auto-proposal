# Rapport Backtest - Client DOMAINE DE RONCHINNE

## Contexte

- **Client** : DOMAINE DE RONCHINNE (ID: 60291)
- **Commande réelle** : S39452
- **Date commande** : 2025-10-01 07:17:25
- **Date cutoff système** : 2025-09-30 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 21,170 input + 8,762 output = 29,932 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 34.5% | 29 produits prédits, 10 corrects |
| **Rappel** | 90.9% | 11 produits réels, 10 détectés |
| **F1-Score** | 50.0% | Score équilibré global |

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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 71.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 90.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 71.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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

## True Positives (10)

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
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT06] RITCHIE Cola ZERO - verre 275ml | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv17] Mélange de noix bio vrac 2,75kg | 5 | 1 | 4.0 | 400.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 2.6u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire à bimensuel, principalement le mardi ou mercredi
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (de 4u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont cohérents pour ce type de boisson premium. Étape 2: On observe une légère baisse de volume entre juillet (4u) et septembre (2u), correspondant à la fin de la haute saison estivale pour les sodas artisanaux. Étape 3: La tendance récente est stabilisée à 2 unités par semaine sur les deux dernières occurrences (17 et 24 sept). Étape 4: La demande de fond s'est stabilisée à 2 unités. Bien que la moyenne historique soit plus haute, le ralentissement saisonnier de fin septembre préconise une approche conservatrice de 2 unités pour maintenir un niveau de fraîcheur optimal sans surstockage.

</details>


<details>
<summary><strong>2. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 3.6u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 2u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire à bimensuel (mar/mer)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive du volume par commande (5u vers 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande régulier le mardi ou mercredi. ÉTAPE 1: Aucune valeur n'est identifiée comme outlier, les volumes restant dans une fourchette étroite de 2 à 5 unités. ÉTAPE 2: Faute de données N-1, la saisonnalité n'est pas confirmée, bien que nous soyons en fin de période estivale pour un soda. ÉTAPE 3: On observe une tendance à la baisse sur les deux dernières semaines (4u puis 2u), suggérant un ralentissement de la rotation ou un stock résiduel. ÉTAPE 4: La moyenne lissée est de 3.6 unités, mais compte tenu de la tendance baissière récente et de l'absence de saisonnalité forte inversant la courbe, une approche conservatrice de 3 unités est recommandée pour éviter le sur-stockage tout en couvrant la demande hebdomadaire moyenne.

</details>


<details>
<summary><strong>3. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.8u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire ou bimensuel (mardi/mercredi)
- **Saisonnalité**: none
- **Tendance**: Stable à environ 2.8u/commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie majeure n'est détectée, les volumes sont constants entre 2 et 4 unités. ÉTAPE 2 (Saisonnalité): Données N-1 absentes, mais la stabilité entre juillet et septembre suggère un impact saisonnier faible pour cette référence spécifique. ÉTAPE 3 (Tendance): Le volume moyen récent est de 2.8u. On observe une légère accélération de la fréquence en septembre (hebdomadaire) par rapport à l'été. ÉTAPE 4 (Recommandation): La quantité recommandée de 3 unités s'aligne sur la moyenne des 3 derniers mois (2.8u) et correspond au jour de commande habituel (mardi). On conserve une approche prudente face à la faible rotation du produit.

</details>


<details>
<summary><strong>4. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.75u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel d'environ 14-15 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1.75u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier n'est détecté, les volumes sont constants (1u à 2u). Étape 2 : Pas de données N-1 pour confirmer la saisonnalité, mais la fin d'été/début d'automne ne semble pas impacter ce SKU. Étape 3 : Le produit suit un rythme de commande tous les 13 à 15 jours. La dernière commande date du 17/09, soit il y a 13 jours exactement. Étape 4 : La demande de fond se situe entre 1 et 2 unités. Étant donné que nous sommes pile dans le cycle de réapprovisionnement habituel (13-15 jours) et que la tendance est stable, une commande de 2 unités est recommandée pour couvrir les deux prochaines semaines sans risque de sur-stockage massif.

</details>


<details>
<summary><strong>5. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - LLM: 5u vs Médiane: 5u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 4u (400.0%)
- 📉 **Erreur Médiane**: 4u (400.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-cyclique, commandes sporadiques (environ 45 jours d'intervalle)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (4u à 5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'apparaît comme un outlier (4u et 5u sont cohérents pour du vrac B2B). Étape 2: Aucune donnée historique N-1 n'est disponible pour valider une saisonnalité, impact considéré comme nul par défaut. Étape 3: On observe un intervalle de commande d'environ 6 semaines avec une légère augmentation du volume unitaire lors de la dernière commande (+25%). Étape 4: La demande actuelle survient seulement 13 jours après la dernière commande, ce qui est beaucoup plus court que le cycle précédent. En l'absence de données de stock, nous recommandons de s'aligner sur le dernier volume de 5 unités pour couvrir cette accélération soudaine de la fréquence tout en restant conservateur face à l'historique limité (seulement 2 points de données). La confiance est faible car l'historique est très court pour dégager une tendance robuste. La quantité finale de 5u permet de répondre à la demande de fond observée tout en sécurisant la hausse de fréquence récente sans risque majeur de sur-stockage massif sur un produit à rotation lente ou moyenne (vrac 2.75kg). Ils utilisent ce produit plus vite qu'en août, il faut donc maintenir le niveau de 5u pour éviter la rupture si cette accélération se confirme en octobre avec l'approche de la fin d'année (période propice aux mélanges de noix). Quantité recommandée finale: 5 unités (arrondi conservateur de la tendance haute). L'absence de cycle de jour fixe (lundi vs mercredi vs mardi) suggère un réapprovisionnement piloté par les besoins de stock plutôt que par une logistique fixe hebdomadaire. La commande est placée mardi, ce qui s'intercale dans les jours ouvrés habituels de ces deux derniers mois (lundi/mercredi). En conclusion, nous confirmons 5 car la dernière commande à 5u date d'il y a moins de 15 jours, suggérant un besoin soit pour une promotion locale, soit pour une hausse de consommation réelle sur ce SKU en automne. Nous ne dépassons pas 5 pour ne pas saturer le stock en cas de simple décalage de livraison antérieure.

</details>


<details>
<summary><strong>6. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier, environ 1 commande toutes les 6 semaines
- **Saisonnalité**: none
- **Tendance**: Légère hausse (+1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée sur les deux points de données (2u et 3u). La demande de fond se situe autour de 2.5 unités par commande. Étape 2: Aucune donnée N-1 n'est disponible pour confirmer une saisonnalité, bien que les fruits à coque voient souvent une hausse en fin d'année. Étape 3: La tendance récente montre une légère augmentation (de 2u à 3u), mais le volume global reste très faible et espacé de 44 jours. Étape 4: Compte tenu de la faible fréquence de commande (tous les 1.5 mois environ) et de la nature vrac du produit (conservation longue), nous privilégions une approche conservatrice pour éviter le sur-stockage sur un produit à rotation lente. Une quantité de 2 unités est recommandée pour couvrir la demande de base sans saturer le stock mobile avant une potentielle accélération saisonnière en octobre/novembre qui reste à confirmer par de prochaines commandes car non visible dans l'historique fourni aux dates correspondantes (août/septembre). L'intervalle de temps suggère qu'un réapprovisionnement est pertinent maintenant pour maintenir la disponibilité durant le cycle d'automne qui commence aujourd'hui (30/09). Aucun signe de rupture de rythme n'est détecté. Niveau de confiance bas en raison du très petit historique (2 commandes). Même si la tendance est à 3u, on reste sur 2u par prudence B2B face à l'espacement des achats (44 jours écoulés). En l'absence de données N-1 fiables (fêtes de fin d'année non visibles), on ne sur-stocke pas encore les quantités festives éventuelles (octobre/novembre). On maintient le stock de sécurité standard de 2u pour ce mardi (30 septembre). Date actuelle (mardi) est cohérente avec les jours de saisie habituels (lun/mer). Rythme global constant et stable.

</details>


<details>
<summary><strong>7. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 14 jours environ le mardi)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passage de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (Nettoyage): Aucune quantité aberrante identifiée, les volumes (1u-2u) sont cohérents pour un produit de niche en verre. ÉTAPE 2 (Saisonnalité): Absence de données N-1, impact considéré comme neutre à ce stade. ÉTAPE 3 (Tendance): On observe un rythme de commande bimensuel le mardi. La dernière commande date d'il y a exactement 4 semaines (saut de cycle probable le 16/09), suggérant un besoin immédiat. Le volume est passé de 1u à 2u lors de la dernière occurrence. ÉTAPE 4 (Recommandation): On se base sur le dernier volume observé (2u) pour couvrir le cycle de 14 à 21 jours, tout en restant conservateur face à la faible profondeur historique.

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel à mensuel le mardi
- **Saisonnalité**: none
- **Tendance**: Stable avec faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune commande n'est identifiée comme outlier, les volumes étant très faibles et cohérents. ÉTAPE 2 (Saisonnalité): Pas de données N-1 disponibles pour confirmer une saisonnalité, mais le produit semble être une référence de niche stable. ÉTAPE 3 (Tendance): Le rythme est de 2 à 3 semaines entre chaque commande, toujours le mardi. La dernière commande date de 4 semaines (02/09), suggérant un besoin de réapprovisionnement imminent. ÉTAPE 4 (Recommandation): La moyenne lissée est de 1.33 unités. Étant donné l'approche conservatrice et le faible flux, une commande de 1 unité est recommandée pour couvrir la demande de fond sans risquer le sur-stockage.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 2u
- 2025-09-02 06:42:42: 2u
- 2025-08-19 11:00:28: 3u
- 2025-07-22 06:58:35: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: high)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [RIT05] RITCHIE Cola - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u
- 2025-09-02 06:42:42: 3u
- 2025-08-19 11:00:28: 5u
- 2025-07-22 06:58:35: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>3. [RIT06] RITCHIE Cola ZERO - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-24 06:16:03: 2u
- 2025-09-17 06:34:27: 4u
- 2025-09-02 06:42:42: 2u
- 2025-08-19 11:00:28: 3u
- 2025-07-22 06:58:35: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>4. [RIT01] RITCHIE Orange - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 06:34:27: 2u
- 2025-09-02 06:42:42: 1u
- 2025-08-19 11:00:28: 2u
- 2025-07-14 13:52:07: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [fsv17] Mélange de noix bio vrac 2,75kg</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 06:33:32: 5u
- 2025-08-04 13:50:22: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-17 06:33:32: 3u
- 2025-08-04 13:50:22: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 06:42:42: 2u
- 2025-08-19 11:00:28: 1u
- 2025-07-14 13:52:07: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [RIT11] RITCHIE Orange Sanguine - verre 275ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-02 06:42:42: 1u
- 2025-08-19 11:00:28: 2u
- 2025-07-22 06:58:35: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (19)

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
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Stock prédit: 0.5u (4j restants) → prédit 1u mais non commandé |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | Stock prédit: 2.2u (14j restants) → prédit 3u mais non commandé |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Stock prédit: 1.5u (14j restants) → prédit 2u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Stock prédit: 0.5u (5j restants) → prédit 2u mais non commandé |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 2 | Stock prédit: 0.6u (20j restants) → prédit 2u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 | Stock prédit: 0.9u (9j restants) → prédit 2u mais non commandé |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Stock prédit: 0.6u (17j restants) → prédit 1u mais non commandé |
| [fsv08] Banana chips bio vrac 1,6kg | 2 | Stock prédit: 0.5u (3j restants) → prédit 2u mais non commandé |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 5 | Stock prédit: 3.1u (19j restants) → prédit 5u mais non commandé |
| [RISH01] RISH kombucha BIO - original 330ml | 2 | Stock prédit: 0.9u (24j restants) → prédit 2u mais non commandé |
| [RIT09] RITCHIE Cola - canette 330ml | 2 | Stock prédit: -0.8u (-17j restants) → prédit 2u mais non commandé |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 2 | Stock prédit: -0.8u (-17j restants) → prédit 2u mais non commandé |
| [RIT07] RITCHIE Orange - canette 330ml | 2 | Stock prédit: -0.8u (-17j restants) → prédit 2u mais non commandé |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Stock prédit: -0.6u (-15j restants) → prédit 1u mais non commandé |
| [OCC05] OCCHIOLINO premium arancello 500ml | 1 | Stock prédit: -0.5u (-17j restants) → prédit 1u mais non commandé |
| [fsv03] Noisette nature bio vrac 2,8kg  | 1 | Stock prédit: -0.0u (0j restants) → prédit 1u mais non commandé |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 6 | Stock prédit: 0.5u (28j restants) → prédit 6u mais non commandé |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Stock prédit: -1.0u (-29j restants) → prédit 1u mais non commandé |


---

## False Negatives (1)

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
| [RIT08] RITCHIE Citron - canette 330ml | 1 | Stock suffisant: 0.7u (38j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:02:34.170Z*
