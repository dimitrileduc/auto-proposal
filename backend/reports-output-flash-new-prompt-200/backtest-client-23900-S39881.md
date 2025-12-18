# Rapport Backtest - Client CARREFOUR BELGIUM SA, Hyper Bierges

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Hyper Bierges (ID: 23900)
- **Commande réelle** : S39881
- **Date commande** : 2025-10-23 06:18:52
- **Date cutoff système** : 2025-10-22 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 16
- **Tokens**: 15,197 input + 5,583 output = 20,780 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 45.8% | 24 produits prédits, 11 corrects |
| **Rappel** | 78.6% | 14 produits réels, 11 détectés |
| **F1-Score** | 57.9% | Score équilibré global |

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
| **MAE** | 0.36 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 36.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 26.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

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

## True Positives (11)

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
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 1 | 2.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 5 | 5 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (7 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 2u (200.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec tendance lundi (cycle 7 à 30 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à légèrement haussière (moyenne 2-3u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond stable entre 2 et 3 unités. ÉTAPE 1: La commande de 4u en septembre 2025 est traitée comme un outlier (stockage préventif ou pic de rentrée), ramenant la base à 2.5u. ÉTAPE 2: La saisonnalité est faible, bien qu'un pic à 4u ait été observé en septembre sur les deux années. ÉTAPE 3: La tendance récente montre une récurrence plus forte que l'an dernier (3 commandes en 3 mois contre 4 sur toute l'année N-1). ÉTAPE 4: Le jour de commande habituel étant le lundi, cette demande du mercredi suggère un besoin de complément. Compte tenu du secteur B2B et de la volonté de ne pas sur-stocker, une recommandation de 2 unités est optimale pour couvrir la fin de semaine sans créer d'excédent.

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 3u (confidence: low)
- 📊 **Baseline N-1**: 2.5u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 2u (200.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes sporadiques le lundi, intervalle de 7 à 90 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (2-3 unités)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur n'est identifiée comme outlier car les volumes oscillent naturellement entre 2 et 4 unités. Étape 2: La saisonnalité est faible, bien que l'année N-1 montre une activité en septembre proche de la période actuelle. Étape 3: On observe un ralentissement sur les deux dernières commandes (passant de 4u à 2u). Le cycle de commande semble être le lundi, or nous sommes mercredi, suggérant un besoin immédiat ou un décalage de flux. Étape 4: En restant conservateur sur un produit à faible rotation, une quantité de 3 unités (moyenne lissée) permet de couvrir la demande sans risque de surstockage majeur sur ce format 250ml.

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique, historiquement mensuel ou bi-mensuel, souvent le lundi
- **Saisonnalité**: weak
- **Tendance**: Stable à faible volume (1-2u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Étape 1 (De-eventing): La commande de 4u en sept N-1 est exclue car elle double la moyenne habituelle. Demande de fond : 1 à 2u. Étape 2 (Saisonnalité): Pas de pic majeur visible sur la période automnale entre N et N-1, le produit semble avoir une demande de fond stable et faible. Étape 3 (Tendance): Volume stable (1-2u) mais ralentissement de la fréquence en octobre (dernière commande il y a 6 semaines). Étape 4 (Recommandation): La date actuelle est un mercredi alors que le client commande habituellement le lundi. Compte tenu du faible volume de rotation et du risque de surstock sur un format 250ml, une commande de sécurité de 1u est recommandée pour couvrir la demande immédiate sans saturer le stock.

</details>


<details>
<summary><strong>4. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, environ une fois par mois ou par besoin ponctuel
- **Saisonnalité**: none
- **Tendance**: Stable à 1u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1: Aucune valeur aberrante détectée, les volumes sont constants (1-2u). Étape 2: La donnée N-1 d'avril (2u) est trop isolée pour confirmer une saisonnalité, le produit semble être un fond de rayon stable à faible rotation. Étape 3: La tendance récente en septembre montre une stabilité à 1 unité par commande. Étape 4: Le besoin est identifié à 1 unité. Compte tenu du faible historique et de la nature B2B, commander 1 unité permet de couvrir la demande sans risque de sur-stockage sur un produit à rotation lente (slow-mover). On privilégie la prudence vu l'absence de commandes en octobre jusqu'à présent (possible stock résiduel). Mais si une commande est déclenchée ce mercredi, 1 unité est le volume de fond cohérent avec les 60 derniers jours.

</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique environ tous les deux mois sans jour fixe
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive identifiée (passage de 3-4u à 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande de fond en net ralentissement. En N-1 (2024), les volumes par commande oscillaient entre 2 et 4 unités. Sur la période récente (2025), les deux dernières commandes sont tombées à 1 unité seulement. Malgré l'absence d'outliers manifestes à nettoyer, la saisonnalité semble faible car aucune pointe n'est visible sur le T4 de l'année précédente. La tendance est baissière (-50% par rapport à la moyenne historique). Étant donné le secteur B2B et la nature du produit (Sauce Aioli Weck), nous préconisons une stratégie conservatrice de 1 unité pour couvrir le besoin immédiat sans risquer de sur-stockage sur une référence dont la rotation ralentit.

</details>


<details>
<summary><strong>6. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible fréquence, commandes sporadiques sans cycle fixe
- **Saisonnalité**: weak
- **Tendance**: Baisse progressive - de 2u à 1u
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
L'analyse des données montre une demande extrêmement faible et sporadique pour cette référence. ÉTAPE 1: La commande de 4 unités en septembre N-1 est traitée comme un outlier (stockage ou événement ponctuel). ÉTAPE 2: La saisonnalité est jugée faible car aucun volume significatif n'est observé à la même période l'an dernier. ÉTAPE 3: La tendance est à la baisse, la dernière commande remontant à 7 semaines pour seulement 1 unité. ÉTAPE 4: Compte tenu de la rotation très lente et de la date de commande (mercredi) qui ne correspond à aucun cycle, une recommandation conservatrice de 1 unité est préconisée pour couvrir le besoin sans risquer de sur-stockage sur un produit à faible rotation.

</details>


<details>
<summary><strong>7. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande spot / irrégulière (intervalles de 30 à 60 jours)
- **Saisonnalité**: weak
- **Tendance**: Inactivité prolongée (Baisse -100% sur 3 mois)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): La commande de 4 unités en sept-2024 est un outlier probable (4x la moyenne habituelle de 1u). La demande de fond réelle est de 1 unité par commande. ÉTAPE 2 (SAISONNALITÉ): Faible saisonnalité observée l'an passé sur cette période spécifique d'octobre. ÉTAPE 3 (TENDANCE): Aucune commande n'a été enregistrée au cours des 3 derniers mois, indiquant un produit à rotation très lente ou un déréférencement partiel. ÉTAPE 4 (RECOMMANDATION): Compte tenu de l'inactivité récente et du profil B2B de ce produit 'Squeeze BBQ', une commande minimale de 1 unité est préconisée pour tester la reprise de la demande tout en évitant le sur-stockage sur une référence à faible rotation.

</details>




### 📊 Données d'Input LLM (7 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:30:34: 2u
- 2025-09-01 06:39:50: 4u
- 2025-07-23 07:38:08: 3u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:55:26: 4u
- 2024-07-18 05:34:21: 2u
- 2024-06-11 07:29:36: 1u
- 2024-04-30 10:14:14: 2u

**✅ Quantité LLM**: 2u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:30:34: 2u
- 2025-09-01 06:39:50: 4u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:55:26: 4u
- 2024-06-11 07:29:36: 3u
- 2024-04-30 10:14:14: 2u

**✅ Quantité LLM**: 3u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:30:34: 1u
- 2025-09-01 06:39:50: 2u
- 2025-07-23 07:38:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:55:26: 4u
- 2024-07-18 05:34:21: 2u
- 2024-06-11 07:29:36: 1u
- 2024-04-30 10:14:14: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>4. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:30:34: 1u
- 2025-09-01 06:39:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-04-30 10:14:14: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>5. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-08 09:30:34: 1u
- 2025-07-23 07:38:08: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:55:26: 4u
- 2024-07-18 05:34:21: 2u
- 2024-06-11 07:29:36: 3u
- 2024-04-30 10:14:14: 2u

**✅ Quantité LLM**: 1u (confidence: medium)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>6. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-01 06:39:50: 1u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:55:26: 4u
- 2024-04-30 10:14:14: 2u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>


<details>
<summary><strong>7. [JF037] JF BBQ SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- Aucune commande récente

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-09 13:55:26: 4u
- 2024-07-18 05:34:21: 1u
- 2024-06-11 07:29:36: 1u
- 2024-04-30 10:14:14: 1u

**✅ Quantité LLM**: 1u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (13)

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
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Stock prédit: -2.1u (-28j restants) → prédit 1u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Stock prédit: -0.9u (-13j restants) → prédit 2u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | Stock prédit: -0.6u (-9j restants) → prédit 2u mais non commandé |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Stock prédit: -0.7u (-18j restants) → prédit 1u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Stock prédit: -0.7u (-18j restants) → prédit 1u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 2 | Stock prédit: -0.6u (-9j restants) → prédit 2u mais non commandé |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 2 | Stock prédit: -0.6u (-9j restants) → prédit 2u mais non commandé |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Stock prédit: 0.1u (3j restants) → prédit 2u mais non commandé |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Stock prédit: -0.0u (-1j restants) → prédit 1u mais non commandé |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 2 | Stock prédit: 0.2u (6j restants) → prédit 2u mais non commandé |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | Stock prédit: -0.3u (-12j restants) → prédit 2u mais non commandé |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Stock prédit: -0.3u (-13j restants) → prédit 1u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Stock prédit: -0.5u (-22j restants) → prédit 1u mais non commandé |


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
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Stock suffisant: 0.8u (32j restants > seuil 30j) |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Stock suffisant: 0.7u (35j restants > seuil 30j) |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Stock suffisant: 0.4u (39j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:15:12.003Z*
