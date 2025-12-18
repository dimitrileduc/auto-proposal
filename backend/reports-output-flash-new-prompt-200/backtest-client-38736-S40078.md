# Rapport Backtest - Client CRF MARKET BEAURAING DEMARS

## Contexte

- **Client** : CRF MARKET BEAURAING DEMARS (ID: 38736)
- **Commande réelle** : S40078
- **Date commande** : 2025-11-04 13:40:54
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 19
- **Tokens**: 17,590 input + 6,218 output = 23,808 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.2% | 19 produits prédits, 12 corrects |
| **Rappel** | 85.7% | 14 produits réels, 12 détectés |
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
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 21.1% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 19.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

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
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | 3 | 1.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD010] LD Organic Truffle Spread 135 g | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 2 | 1.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD011] LD Organic Kids Spread 180 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 2 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (8 produits)


<details>
<summary><strong>1. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, irrégularité marquée (>30j entre commandes)
- **Saisonnalité**: weak
- **Tendance**: Baisse de volume unitaire (-50% vs N-1)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (De-eventing): Aucune donnée aberrante détectée sur le faible échantillon, les volumes (1-3u) sont cohérents avec un produit de niche. ÉTAPE 2 (Saisonnalité): Les données N-1 montrent des achats en été (août/juillet), suggérant un usage type 'sauce d'accompagnement' mais l'historique est trop mince pour confirmer un pic de fin d'année. ÉTAPE 3 (Tendance): La dernière commande d'octobre est descendue à 1 unité, marquant un ralentissement par rapport à la moyenne de 2.5u de l'an dernier. ÉTAPE 4 (Recommandation): Au vu de la faible rotation (une seule commande en 3 mois) et de la tendance baissière, une recommandation conservatrice de 1 unité est préconisée pour couvrir le besoin immédiat sans risquer le sur-stockage.

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une commande tous les 1 à 2 mois sans jour fixe
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive (1u sur les deux dernières commandes)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont très stables (1-2u). Étape 2: La saisonnalité est faible; en novembre N-1, aucune commande n'a été passée, mais une commande de 2u a eu lieu fin octobre. Étape 3: On observe un ralentissement du volume unitaire (passage de 2u à 1u sur la période récente). Étape 4: Étant donné la faible rotation du produit et le stock B2B typique, une recommandation conservatrice de 1 unité est préconisée pour couvrir le besoin immédiat sans risquer le sur-stockage sur un produit à faible mouvement.

</details>


<details>
<summary><strong>3. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 3u
- 📉 **Erreur LLM**: 1u (33.3%)
- 📉 **Erreur Médiane**: 1u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel approximatif (environ 30 jours entre commandes)
- **Saisonnalité**: none
- **Tendance**: Légère baisse (de 2u à 1u lors de la dernière commande)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des trois derniers mois montre une demande très stable et régulière, avec une commande passée environ tous les 30 jours (8-11 du mois). Bien que la dernière commande d'octobre soit descendue à 1 unité, la moyenne historique récente se situe à 1.67 unités. Étant donné que nous sommes le 3 novembre, nous entrons dans la fenêtre habituelle de réapprovisionnement du produit. Sans données N-1 pour confirmer une saisonnalité de fin d'année et face à une tendance légèrement baissière en volume unitaire, une recommandation de 2 unités permet de couvrir le mois à venir tout en maintenant un stock de sécurité minimal, conformément à la stratégie conservatrice B2B.

</details>


<details>
<summary><strong>4. [LD010] LD Organic Truffle Spread 135 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (commande isolée un mercredi)
- **Saisonnalité**: none
- **Tendance**: Stable à 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée car une seule donnée disponible (1u). Étape 2: Aucune donnée historique N-1 pour confirmer une saisonnalité, bien que le produit (truffe) soit sensible aux fêtes de fin d'année, l'absence de pattern limite l'anticipation. Étape 3: Tendance impossible à corréler avec rigueur sur un seul point de données, mais le volume unitaire suggère un produit à faible rotation ou un échantillonnage. Étape 4: Application d'une stratégie conservatrice de maintien de stock au plus bas (1u) pour valider si la demande se répète, évitant ainsi tout risque de sur-stockage sur une référence à faible historique.

</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande périodique espacée de 30 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Stable entre 1u et 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'est identifiée comme outlier, les volumes oscillent régulièrement entre 1 et 2 unités. Demande de fond établie à 1.5 unités. Étape 2: L'historique N-1 ne montre pas de pic saisonnier spécifique au mois de novembre pour cette référence de sauce. Étape 3: La tendance récente montre une légère accélération du volume en septembre par rapport à août (2u vs 1.5u en moyenne), avec une préférence pour les commandes le lundi. Étape 4: En appliquant une approche conservatrice sur un produit à faible rotation mais stable, une commande de 2 unités permet de couvrir le cycle de 1 mois tout en sécurisant le stock face à la légère hausse de volume constatée lors de la dernière commande.

</details>


<details>
<summary><strong>6. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 2u
- 📉 **Erreur LLM**: 1u (50.0%)
- 📉 **Erreur Médiane**: 1u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très faible/Erratique (environ 1 commande tous les 2 à 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une demande extrêmement sporadique avec un volume constant de 1 unité par commande (sauf un pic à 2u en avril 2024). Il n'y a pas de saisonnalité marquée en fin d'année d'après N-1 (une seule commande en octobre). La dernière commande remontant à 8 semaines (début septembre), un besoin de réapprovisionnement de fond est probable pour maintenir un stock de sécurité minimal, mais la faible rotation impose une approche conservatrice de 1 unité pour éviter le sur-stockage d'un produit à rotation lente.

</details>


<details>
<summary><strong>7. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très faible fréquence, commande ponctuelle annuelle
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1-3u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée car le volume est extrêmement faible (1 à 3 unités). Étape 2: Les données historiques sont trop rares pour confirmer une saisonnalité, bien que les deux commandes enregistrées soient espacées de plus d'un an. Étape 3: La dernière commande (août 2025) montre une baisse par rapport à juin 2024 (1u vs 3u). Étape 4: Compte tenu de la très faible rotation de cette référence (JF ANDALOUSE 300ML) et de l'absence de commandes régulières sur les 3 derniers mois, la recommandation minimale de 1 unité est préconisée pour éviter tout risque de sur-stockage ou de péremption, tout en maintenant une présence minimale en rayon si nécessaire.

</details>


<details>
<summary><strong>8. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Très faible fréquence, commande sporadique (environ une fois par an)
- **Saisonnalité**: none
- **Tendance**: Stable à très faible volume (1-2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité (2 points de données sur 15 mois). (1) Aucun outlier détecté car les volumes sont minimaux (1 et 2 unités). (2) Aucune saisonnalité visible entre août N-1 et août N, le produit semble être une référence de niche ou un complément de commande. (3) La tendance est stable sur un volume minimal. (4) Étant donné le contexte B2B et la date de la dernière commande (août 2025), une commande de 1 unité est recommandée pour couvrir un besoin ponctuel sans risque de surstockage, en restant conservateur face à la faible rotation du produit.

</details>




### 📊 Données d'Input LLM (8 produits)


<details>
<summary><strong>1. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-22 09:07:28: 3u
- 2024-07-30 08:36:52: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:00:06: 2u
- 2024-08-22 09:07:28: 1u
- 2024-06-10 10:53:09: 1u
- 2024-06-05 12:10:16: 2u
- 2024-04-15 11:51:21: 2u
- 2024-03-14 08:15:53: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [LD013] LD Tuscan Organic Spread 180 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u
- 2025-09-09 10:48:36: 2u
- 2025-08-11 13:29:06: 2u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 3u

</details>


<details>
<summary><strong>4. [LD010] LD Organic Truffle Spread 135 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 07:09:40: 1u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>5. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 10:48:36: 2u
- 2025-08-11 13:29:06: 1u
- 2025-08-11 08:24:24: 2u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-24 09:57:13: 2u
- 2024-08-22 09:07:28: 1u
- 2024-06-24 13:12:37: 1u
- 2024-04-15 11:51:21: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 10:48:36: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-21 08:00:06: 1u
- 2024-07-30 08:36:52: 1u
- 2024-04-30 10:01:21: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 2u

</details>


<details>
<summary><strong>7. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-11 13:29:06: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-06-10 10:53:09: 3u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>8. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-11 13:29:06: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-22 09:07:28: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (7)

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
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | Stock prédit: 1.8u (13j restants) → prédit 4u mais non commandé |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 3 | Stock prédit: 1.5u (24j restants) → prédit 3u mais non commandé |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | Stock prédit: 0.0u (1j restants) → prédit 2u mais non commandé |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Stock prédit: 0.0u (1j restants) → prédit 2u mais non commandé |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | Stock prédit: -1.3u (-20j restants) → prédit 3u mais non commandé |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 2 | Stock prédit: -0.2u (-8j restants) → prédit 2u mais non commandé |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Stock prédit: -0.2u (-7j restants) → prédit 2u mais non commandé |


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
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Stock suffisant: 0.7u (55j restants > seuil 30j) |
| [LD012] LD Organic Samphire Spread 135 g | 2 | Stock suffisant: 1.4u (50j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:11:57.352Z*
