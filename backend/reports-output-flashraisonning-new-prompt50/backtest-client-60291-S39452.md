# Rapport Backtest - Client DOMAINE DE RONCHINNE

## Contexte

- **Client** : DOMAINE DE RONCHINNE (ID: 60291)
- **Commande réelle** : S39452
- **Date commande** : 2025-10-01 07:17:25
- **Date cutoff système** : 2025-09-30 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 23
- **Tokens**: 21,296 input + 34,417 output = 55,713 total


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
| **MAE** | 0.90 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 64.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 80.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 64.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
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
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Passage d'un cycle bimensuel à un cycle hebdomadaire (mercredi)
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u avec augmentation de la fréquence (hebdomadaire)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (Nettoyage): Aucune commande n'est identifiée comme outlier; la baisse de 4u à 2u est progressive et non accidentelle. ÉTAPE 2 (Saisonnalité): On note une érosion naturelle du volume suite à la période estivale (Juillet: 4u, Août: 3u, Septembre: 2u), impact faible en inter-saison. ÉTAPE 3 (Tendance): Bien que le volume unitaire ait baissé, la fréquence s'est intensifiée, passant d'une commande tous les 14-15 jours à un rythme hebdomadaire sur les deux dernières semaines. ÉTAPE 4 (Recommandation): La demande s'est stabilisée à 2 unités par semaine. Compte tenu du jour de commande actuel (mardi) proche du cycle habituel, une quantité de 2 unités est suffisante pour couvrir le besoin sans risque de sur-stockage.

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
- **Pattern temporel**: Accélération de la fréquence : de mensuelle à bi-hebdomadaire, puis hebdomadaire le mardi/mercredi
- **Saisonnalité**: weak
- **Tendance**: Fréquence en hausse compensée par une baisse des volumes unitaires (moyenne 3u en septembre)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond stable autour de 3.6 unités sans aucun outlier détecté. On observe une transition d'un rythme de commande mensuel vers un rythme quasi-hebdomadaire en septembre. Bien que la fréquence augmente, les volumes par commande ont tendance à diminuer légèrement depuis le pic d'août (5u), s'établissant à une moyenne de 3u sur le mois de septembre. La recommandation de 3 unités est conservatrice, s'alignant sur la tendance récente tout en évitant le sur-stockage en fin de haute saison.

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
- **Pattern temporel**: Accélération notable du rythme : passage d'un cycle mensuel (juillet/août) à bimensuel puis hebdomadaire en septembre.
- **Saisonnalité**: none
- **Tendance**: Fréquence en hausse (accélération), volumes stables avec une moyenne de 2.8 unités par commande.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une transition d'un approvisionnement sporadique vers un besoin hebdomadaire constant en septembre. Aucune commande ne présente de caractère exceptionnel (outlier), les volumes fluctuant sainement entre 2 et 4 unités. La moyenne lissée sur les 5 dernières commandes est de 2.8u. En tenant compte de l'accélération de la fréquence de réapprovisionnement depuis le 17 septembre, une quantité de 3 unités est recommandée pour couvrir la consommation de la semaine à venir sans risquer de surstockage sur ce produit en format verre.

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
- **Pattern temporel**: Cycle bimensuel (environ tous les 14 jours), majoritairement en début de semaine (Lundi-Mercredi).
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1.75u par commande avec une fréquence en accélération.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation régulière entre 1 et 2 unités sans aucun événement exceptionnel détecté. On observe une stabilisation du rythme de réapprovisionnement à environ 14 jours depuis août (contre ~35 jours auparavant). La commande actuelle du mardi 30 septembre intervient exactement 13 jours après la précédente, s'insérant parfaitement dans le cycle identifié. Sans données N-1 pour confirmer une saisonnalité spécifique, on se base sur la tendance récente stable à légèrement haussière en fréquence. Une quantité de 2 unités permet de couvrir le cycle de 15 jours à venir sans risque de surstockage majeur vu le faible volume unitaire.

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
- **Pattern temporel**: Cycle irrégulier d'environ 45 jours (6 semaines)
- **Saisonnalité**: none
- **Tendance**: Légère hausse observée (passage de 4u à 5u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse repose sur seulement deux points de données récents, ce qui limite la visibilité statistique. ÉTAPE 1: Aucune valeur aberrante n'est détectée sur les deux commandes (4u et 5u). ÉTAPE 2: Absence d'historique N-1 pour confirmer une saisonnalité, bien que le secteur suggère une hausse en automne. ÉTAPE 3: On observe une légère progression du volume (+25%). ÉTAPE 4: La moyenne lissée est de 4.5u. Compte tenu de la légère hausse récente et de l'entrée dans la période automnale, une commande de 5 unités est recommandée pour couvrir la demande tout en restant conservateur face au manque de profondeur historique.

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
- **Pattern temporel**: Cycle long identifié d'environ 45 jours entre les deux commandes historiques
- **Saisonnalité**: none
- **Tendance**: Hausse de volume (2u vers 3u) et accélération apparente de la fréquence
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est très limité (seulement 2 commandes). On observe une accélération de la demande : l'intervalle est passé de 44 jours à 13 jours seulement. Cependant, comme la dernière commande de 3u est très récente (17/09), commander à nouveau le 30/09 suggère un besoin de réajustement ou une consommation accrue. Étant donné l'absence de données N-1 et pour éviter le surstockage d'un produit bio en vrac, je recommande une quantité conservatrice de 2 unités, correspondant au minimum historique, pour couvrir les besoins immédiats en attendant de confirmer cette nouvelle fréquence.

</details>


<details>
<summary><strong>7. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.33u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier entre 2 et 5 semaines, avec une préférence marquée pour le mardi (66% des commandes).
- **Saisonnalité**: none
- **Tendance**: Volume unitaire passé de 1u à 2u lors de la dernière commande, mais rotation globale très faible.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée sur des volumes si faibles (1-2 unités). Étape 2: Absence de données N-1 pour confirmer une saisonnalité, bien que la demande de boissons fraîches tende à baisser fin septembre. Étape 3: Le volume a doublé lors de la dernière commande (2 units), mais après un silence de 4 semaines, la moyenne mensuelle reste proche de 1.3 unité. Étape 4: En appliquant une stratégie conservatrice pour éviter le sur-stockage sur un produit à faible rotation, une recommandation de 1 unité est préconisée pour couvrir le besoin immédiat sans immobiliser de capital.

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
- **Pattern temporel**: Cycle bimensuel à mensuel, exclusivement synchronisé sur le mardi (intervalle de 14 ou 28 jours).
- **Saisonnalité**: none
- **Tendance**: Stable à très faible volume (moyenne 1.33u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre que ce produit est un 'slow mover' avec une demande très faible mais régulière (1 ou 2 unités). Les commandes surviennent systématiquement le mardi avec un espacement de 2 à 4 semaines. La commande actuelle tombe précisément 28 jours après la précédente (cycle de 4 semaines). En l'absence d'outliers et face à une tendance stable, une approche conservatrice de 1 unité est préconisée pour couvrir le besoin immédiat sans risquer un sur-stockage inutile sur une référence à faible rotation.

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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 1u (confidence: low)
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
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Stock prédit: 0.5u (5j restants) → prédit 1u mais non commandé |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Stock prédit: 0.5u (5j restants) → prédit 1u mais non commandé |
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
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 12 | Stock prédit: 0.5u (28j restants) → prédit 12u mais non commandé |
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

*Rapport généré automatiquement le 2025-12-18T12:25:24.215Z*
