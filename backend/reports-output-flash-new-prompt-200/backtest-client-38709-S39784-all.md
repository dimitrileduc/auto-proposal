# Rapport Backtest - Client BEES COOP

## Contexte

- **Client** : BEES COOP (ID: 38709)
- **Commande réelle** : S39784
- **Date commande** : 2025-10-17 12:52:44
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 12,731 input + 4,475 output = 17,206 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 18 produits prédits, 12 corrects |
| **Rappel** | 80.0% | 15 produits réels, 12 détectés |
| **F1-Score** | 72.7% | Score équilibré global |

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
| **MAE** | 0.83 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 47.6% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 52.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 9.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
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

## True Positives (12)

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
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 3 | 1 | 2.0 | 200.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF035] JF BURGER SQUEEZE 300ML | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 5 | 4 | 1.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF038] JF KETCHUP SQUEEZE 300ML | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier approximativement mensuel (20-30 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (moyenne 1.66u sur 3 mois vs 1.25u N-1)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier détecté, les volumes oscillent entre 1u et 2u, ce qui est cohérent pour un format squeeze 300ml. Étape 2 : Pas de saisonnalité marquée entre N-1 et N ; les ventes sont sporadiques tout au long de l'année. Étape 3 : On observe une légère accélération de la demande sur les 3 derniers mois avec deux commandes de 2u contre 1u historiquement. Étape 4 : La demande de fond se situe autour de 1.5u. Compte tenu de la tendance récente et de l'intervalle d'un mois depuis la dernière commande (16/09), une commande de 2u est recommandée pour couvrir la période à venir sans risque de surstockage majeur.

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 5u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 4.67u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec accélération mensuelle (tous les 15-30 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (moyenne 3.5u en 2024 vs 4.6u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une tendance à la hausse du volume moyen par commande, passant de 3.5 unités en N-1 à 4.6 unités sur les derniers mois. Aucun outlier n'a été détecté car les volumes restent cohérents entre 3 et 6 unités. La saisonnalité est jugée faible bien qu'un pic à 6u ait été observé en juin 2024 et septembre 2025. Nous sommes actuellement le 16 octobre, soit un mois après la dernière commande de 6u (16 septembre). Compte tenu du ralentissement léger de la fréquence par rapport à septembre mais de la nécessité de couvrir les besoins jusqu'en novembre, une commande de 5 unités est recommandée pour s'aligner sur la moyenne récente tout en restant conservateur face à l'entrée dans la période creuse de fin d'année observée en N-1.

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.15u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande mensuelle irrégulière (intervalle 15-30 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à 1 unité par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune anomalie détectée, les volumes sont constants entre 1 et 2 unités. ÉTAPE 2 (Saisonnalité): Faible impact; l'historique N-1 montre une activité en septembre (2u) similaire à septembre N (1u+1u). ÉTAPE 3 (Tendance): La tendance récente s'est stabilisée à 1 unité par commande en septembre après un pic à 2 unités en août. Le produit semble avoir une demande de fond très faible mais régulière. ÉTAPE 4 (Recommandation): La moyenne lissée sur les 6 dernières commandes est de 1.5u, mais la tendance la plus récente (septembre) privilégie le format 1u. Étant donné l'approche conservatrice pour éviter le sur-stockage sur un produit à faible rotation, une commande de 1 unité est recommandée.

</details>


<details>
<summary><strong>4. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.85u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec cycle approximatif de 15 à 25 jours
- **Saisonnalité**: weak
- **Tendance**: Hausse légère sur les 3 derniers mois (+50% vs moyenne basse)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Étape 1: Identification de la commande du 20/09/2024 (4u) comme un outlier probable (2x la moyenne hors pics). Demande de fond stabilisée autour de 1.8-2u. Étape 2: Saisonnalité faible, bien qu'un volume plus important soit observé en septembre tant en 2024 qu'en 2025. Étape 3: La tendance récente est à la hausse par rapport au printemps 2024, passant de commandes de 1u à 2-3u. Le cycle de commande actuel (septembre-octobre) suggère un besoin de réapprovisionnement imminent après 30 jours sans mouvement. Étape 4: Application d'une approche conservatrice en visant 2 unités pour couvrir la demande de fond tout en tenant compte de la légère accélération de consommation récente.

</details>


<details>
<summary><strong>5. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cyclicité irrégulière (environ tous les 15-30 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passage de 1u à 1.5u en moyenne)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune valeur aberrante détectée, les volumes (1u ou 2u) sont cohérents avec un produit de niche à faible rotation. ÉTAPE 2 (Saisonnalité): Pas de corrélation saisonnière évidente entre 2024 et 2025 sur cette période; le produit semble répondre à un besoin de fond stable. ÉTAPE 3 (Tendance): On observe une légère accélération de la consommation en septembre 2025 (3 unités sur le mois vs 1 unité auparavant). ÉTAPE 4 (Recommandation): Bien que la tendance soit à la hausse, l'historique reste erratique avec de faibles volumes. Étant donné la date actuelle (mi-octobre) et la dernière commande datant d'un mois, une réapprovisionnement de sécurité de 1 unité est recommandé pour couvrir la demande sans risquer de sur-stockage sur un produit à rotation lente.

</details>


<details>
<summary><strong>6. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.7u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle erratique environ tous les 15 à 30 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 1.5u - 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1: Aucune valeur aberrante détectée, les commandes oscillent entre 1 et 2 unités. ÉTAPE 2: La saisonnalité est faible, avec une légère baisse d'activité notée en automne N-1 comparativement à l'été. ÉTAPE 3: La tendance récente montre une certaine stabilité dans les volumes (moyenne de 1.66 sur les 3 derniers mois) mais une rupture de rythme avec la dernière commande datant d'il y a un mois jour pour jour (16/09). ÉTAPE 4: Pour couvrir le besoin mensuel habituel et éviter la rupture suite à un mois d'inactivité sur cette référence, une commande de 2 unités est recommandée, restant dans la fourchette haute des consommations observées sans risque de surstockage majeur.

</details>


<details>
<summary><strong>7. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Toutes les 4 à 8 semaines sans jour fixe (Mardi/Mercredi/Vendredi)
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 1-2 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : Aucune commande anormale n'est détectée, les volumes oscillent de manière organique entre 1 et 2 unités. ÉTAPE 2 (Saisonnalité) : Faible visibilité due au volume réduit, mais une commande en septembre/octobre est cohérente avec l'historique N-1 (septembre). ÉTAPE 3 (Tendance) : La demande est stable à faible rotation. La dernière commande date de début septembre (il y a ~6 semaines), ce qui correspond au cycle de réapprovisionnement moyen observé. ÉTAPE 4 (Recommandation) : On se base sur la moyenne haute (2u) pour couvrir la période automnale, tout en restant conservateur face à la faible rotation du produit.

</details>


<details>
<summary><strong>8. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.17u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très erratique et sporadique, environ 1 commande tous les 2 à 3 mois sans jour fixe
- **Saisonnalité**: none
- **Tendance**: Hausse légère (+1u) par rapport à la moyenne unitaire habituelle
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'est identifiée comme outlier car le volume est extrêmement faible (1-2u). Étape 2: Il n'y a pas de corrélation saisonnière visible entre N-1 et l'année actuelle sur ce produit. Étape 3: La dernière commande d'août (2u) est supérieure à la moyenne historique de 1u, mais le manque de récurrence suggère un besoin ponctuel plutôt qu'une tendance de fond. Étape 4: Compte tenu de la faible rotation (5 commandes en 18 mois) et de la stratégie conservatrice, une quantité de 1u est recommandée pour couvrir le besoin sans risque de surstockage prolongé sur un produit à faible vélocité.

</details>


<details>
<summary><strong>9. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, irrégulière (cycle de 60 à 90 jours)
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - volume unitaire constant à 1u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing) : La commande de 4u en juin 2024 est identifiée comme un outlier isolé, la consommation de base étant de 1u. ÉTAPE 2 (Saisonnalité) : Pas de pic observé au T4 en N-1, le produit semble avoir une faible rotation indépendante des fêtes. ÉTAPE 3 (Tendance) : Volume très faible avec une seule commande enregistrée sur les 3 derniers mois (août). Le rythme passe d'une commande tous les 2 mois en 2024 à un ralentissement marqué en 2025. ÉTAPE 4 (Recommandation) : Au vu de la faible rotation et du stock résiduel probable chez le client (B2B), une commande de sécurité de 1 unité est recommandée pour couvrir le besoin immédiat sans risque de surstockage.

</details>




### 📊 Données d'Input LLM (9 produits)


<details>
<summary><strong>1. [JF035] JF BURGER SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 08:36:35: 2u
- 2025-09-03 06:47:09: 1u
- 2025-08-04 11:59:10: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-06 09:14:09: 2u
- 2024-06-28 11:44:57: 1u
- 2024-05-13 11:48:40: 1u
- 2024-04-09 06:51:49: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 08:36:35: 6u
- 2025-09-03 06:47:09: 3u
- 2025-08-04 11:59:10: 5u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 08:29:53: 3u
- 2024-08-22 07:59:17: 2u
- 2024-08-06 09:14:09: 5u
- 2024-06-28 11:44:57: 6u
- 2024-05-13 11:48:40: 4u
- 2024-04-09 06:51:49: 4u

**✅ Quantité LLM**: 5u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 08:36:35: 1u
- 2025-09-03 06:47:09: 1u
- 2025-08-04 11:59:10: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 08:29:53: 2u
- 2024-08-22 07:59:17: 1u
- 2024-06-28 11:44:57: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 08:36:35: 2u
- 2025-09-03 06:47:09: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 08:29:53: 4u
- 2024-08-22 07:59:17: 1u
- 2024-08-06 09:14:09: 2u
- 2024-06-28 11:44:57: 2u
- 2024-05-13 11:48:40: 3u
- 2024-04-09 06:51:49: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>5. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 08:36:35: 2u
- 2025-09-03 06:47:09: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-22 07:59:17: 1u
- 2024-08-06 09:14:09: 1u
- 2024-06-28 11:44:57: 1u
- 2024-05-13 11:48:40: 1u
- 2024-04-09 06:51:49: 1u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 08:36:35: 2u
- 2025-09-03 06:47:09: 1u
- 2025-08-04 11:59:10: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-22 07:59:17: 2u
- 2024-08-06 09:14:09: 1u
- 2024-06-28 11:44:57: 2u
- 2024-05-13 11:48:40: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 4u

</details>


<details>
<summary><strong>7. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:47:09: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 08:29:53: 2u
- 2024-08-06 09:14:09: 2u
- 2024-06-28 11:44:57: 1u
- 2024-04-09 06:51:49: 1u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:59:10: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-20 08:29:53: 1u
- 2024-06-28 11:44:57: 1u
- 2024-05-13 11:48:40: 1u
- 2024-04-09 06:51:49: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>9. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-04 11:59:10: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-22 07:59:17: 1u
- 2024-06-28 11:44:57: 4u
- 2024-05-13 11:48:40: 1u
- 2024-04-09 06:51:49: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (6)

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
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Stock prédit: 0.5u (24j restants) → prédit 1u mais non commandé |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 3 | Stock prédit: 1.0u (22j restants) → prédit 3u mais non commandé |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Stock prédit: -0.4u (-11j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 3 | Stock prédit: -1.4u (-29j restants) → prédit 3u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Stock prédit: 0.2u (7j restants) → prédit 1u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: 0.1u (11j restants) → prédit 1u mais non commandé |


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
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 2 | Stock suffisant: 1.6u (101j restants > seuil 30j) |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-18T12:11:29.272Z*
