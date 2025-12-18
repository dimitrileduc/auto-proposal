# Rapport Backtest - Client BIOK THOREMBAIS

## Contexte

- **Client** : BIOK THOREMBAIS (ID: 60213)
- **Commande réelle** : S39350
- **Date commande** : 2025-09-24 13:05:32
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 18
- **Tokens**: 16,538 input + 23,732 output = 40,270 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 47.6% | 21 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 64.5% | Score équilibré global |

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
| **MAE** | 0.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.9% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 48.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 28.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [KOKO01] KOKO Kombucha original 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: medium)
- 📊 **Baseline N-1**: 2.6u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bimensuel (tous les 15-22 jours), principalement les mardis et mercredis.
- **Saisonnalité**: none
- **Tendance**: Stable à environ 3u (rebond récent de 4u suite à un point bas de 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une récurrence stable toutes les 2 à 3 semaines. La moyenne globale est de 2,6 unités par commande. La quantité de 4 unités enregistrée le 03/09 semble compenser le volume exceptionnellement faible de 1 unité du 12/08. En l'absence de données N-1 pour confirmer une saisonnalité spécifique, nous restons sur la tendance centrale de 3 unités, ce qui est cohérent avec le rythme de rotation actuel et permet de couvrir le prochain cycle de 20 jours sans risque de sur-stockage.

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de réapprovisionnement bi-mensuel (environ tous les 15-22 jours), principalement le mardi ou mercredi.
- **Saisonnalité**: none
- **Tendance**: Stable avec une moyenne de 2 unités par commande.
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique récent montre une demande stable variant entre 1 et 3 unités sans outliers significatifs. Le cycle de commande est régulier (environ 3 semaines d'intervalle), et la date actuelle (20 jours après la dernière commande) correspond au moment habituel de réapprovisionnement. En l'absence de données N-1 pour confirmer une saisonnalité spécifique en fin septembre et compte tenu de la stabilité de la moyenne (2u), une recommandation de 2 unités est préconisée pour maintenir le stock sans risque de sur-stockage sur ce produit premium.

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel (tous les 14 à 35 jours), principalement le mardi
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité absolue avec une quantité constante de 1 unité par commande. Le rythme de réapprovisionnement est d'environ une fois par mois (moyenne de 23 jours entre les commandes). La dernière commande ayant eu lieu il y a 20 jours (le 3 septembre), nous entrons dans la fenêtre habituelle de commande pour ce client. Aucun outlier n'est à signaler et la tendance est parfaitement plate. Étant donné le contexte B2B et la nature du produit (chips premium), le maintien de ce stock de fond de 1 unité est préconisé.

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle bi-mensuel d'environ 15 à 22 jours
- **Saisonnalité**: none
- **Tendance**: Légère hausse (passage de 1u à 2u lors de la dernière commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation très régulière de faible volume, avec une commande intervenant tous les 20 jours en moyenne. La dernière commande du 03/09 était de 2 unités, ce qui pourrait indiquer une légère accélération ou un besoin ponctuel. Cependant, étant donné que nous sommes exactement 20 jours après cette dernière commande et conformément à une politique de gestion conservatrice pour un produit premium bio à faible rotation, une recommandation de 1 unité est préconisée pour couvrir le cycle de base sans risquer le sur-stockage.

</details>


<details>
<summary><strong>5. [KOKO01] KOKO Kombucha original 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel, cycle d'environ 21 à 30 jours (principalement les mardis et mercredis)
- **Saisonnalité**: none
- **Tendance**: Hausse progressive (1u → 2u → 3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucun outlier identifié, les volumes étant très faibles et en croissance organique. Étape 2 : Absence de données N-1 pour confirmer une saisonnalité, bien que le segment kombucha soit habituellement sensible à la chaleur. Étape 3 : On observe une tendance haussière sur les 4 derniers mois (1, 0, 2, 3 unités) avec une fréquence stabilisée autour de 3 semaines. Étape 4 : La demande de fond calculée sur les commandes non nulles est de 2 unités. Bien que la dernière commande fût de 3 unités, nous recommandons de rester conservateur avec 2 unités pour ce réapprovisionnement afin d'éviter le sur-stockage en début d'automne, tout en respectant la tendance de croissance du point de vente.

</details>


<details>
<summary><strong>6. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de réapprovisionnement de 15 à 22 jours (environ toutes les 3 semaines), principalement le mardi ou mercredi.
- **Saisonnalité**: weak
- **Tendance**: Stable avec variations cycliques (alternance entre 1u et 3-4u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre un produit à faible rotation mais avec une fréquence régulière de 2 à 3 semaines. ÉTAPE 1 : La quantité de 4u en juillet est un pic isolé, la moyenne réelle se situant à 2u. ÉTAPE 2 : En l'absence de données N-1, nous anticipons une légère baisse de régime pour cette boisson (Kombucha) avec la fin de la période estivale. ÉTAPE 3 : La tendance est stable. La commande arrive exactement à l'échéance du cycle moyen constaté (20 jours vs moyenne de 18-20 jours). ÉTAPE 4 : Une recommandation de 2 unités permet de couvrir le besoin moyen constaté sur les 3 derniers mois tout en restant prudent face à l'entrée dans la saison automnale moins propice aux boissons rafraîchissantes.

</details>


<details>
<summary><strong>7. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.2u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle de réapprovisionnement de 15 à 22 jours, principalement les mardis et mercredis
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (moyenne 2.2 unités)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à faible rotation avec une demande de fond stable d'environ 2 unités par commande toutes les 3 semaines environ. Les volumes varient de 1 à 4 unités sans pic promotionnel évident (le pic de 4u en juillet correspond au pic de chaleur estivale pour un kombucha). La dernière commande date du 3 septembre (il y a 20 jours), ce qui correspond exactement au cycle habituel. En entrant dans la période automnale (fin de saison pour les boissons rafraîchissantes), une quantité de 2 unités est recommandée pour maintenir le stock sans risque de sur-stockage.

</details>


<details>
<summary><strong>8. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: high)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel approximatif (22 à 35 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des trois derniers mois montre une stabilité absolue avec une commande systématique de 1 unité. ÉTAPE 1: Aucun outlier détecté. ÉTAPE 2: Bien qu'aucune donnée N-1 ne soit disponible, la demande est restée constante durant tout l'été, suggérant une faible sensibilité saisonnière pour ce client. ÉTAPE 3: Le cycle de commande varie entre 3 et 5 semaines ; nous sommes actuellement à 20 jours de la dernière commande, ce qui place la demande dans la fenêtre haute de récurrence. ÉTAPE 4: Compte tenu de la régularité parfaite (1u à chaque itération), une commande de 1 unité est recommandée pour couvrir le mois à venir sans risque de surstockage.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 4u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 2u
- 2025-07-08 06:30:25: 3u
- 2025-06-24 12:29:05: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 3u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 1u
- 2025-07-08 06:30:25: 2u
- 2025-06-24 12:29:05: 3u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 1u
- 2025-08-12 12:02:43: 1u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 2u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 1u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [KOKO01] KOKO Kombucha original 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 2u
- 2025-07-23 08:08:35: 0u
- 2025-06-24 12:29:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 4u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 3u
- 2025-08-12 12:02:43: 1u
- 2025-07-23 08:08:35: 4u
- 2025-07-08 06:30:25: 1u
- 2025-06-24 12:29:05: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>8. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 06:56:39: 1u
- 2025-08-12 12:02:43: 1u
- 2025-07-08 06:30:25: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: high)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (11)

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
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Stock prédit: 0.4u (15j restants) → prédit 1u mais non commandé |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Stock prédit: 0.6u (28j restants) → prédit 1u mais non commandé |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Stock prédit: -0.7u (-7j restants) → prédit 2u mais non commandé |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Stock prédit: 0.4u (26j restants) → prédit 1u mais non commandé |
| [JOY05] Organic Cherry Jam 370g | 1 | Stock prédit: -0.2u (-6j restants) → prédit 1u mais non commandé |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Stock prédit: 0.1u (6j restants) → prédit 1u mais non commandé |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Stock prédit: 0.2u (10j restants) → prédit 1u mais non commandé |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Stock prédit: -0.2u (-9j restants) → prédit 1u mais non commandé |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Stock prédit: -0.3u (-17j restants) → prédit 1u mais non commandé |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 12 | Stock prédit: -0.2u (-19j restants) → prédit 12u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:24:24.024Z*
