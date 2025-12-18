# Rapport Backtest - Client BEES COOP

## Contexte

- **Client** : BEES COOP (ID: 38709)
- **Commande réelle** : S39784
- **Date commande** : 2025-10-17 12:52:44
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 11,083 input + 3,473 output = 14,556 total


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
| **MAE** | 0.92 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 52.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 60.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

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
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (9 produits)


<details>
<summary><strong>1. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel (~30 jours)
- **Saisonnalité**: none
- **Tendance**: Hausse légère avec stabilisation à 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une accélération de la fréquence et des volumes en 2025. Le client est passé d'une consommation de 1 unité à 2 unités par commande lors des derniers cycles (septembre et août). L'intervalle de temps depuis la dernière commande (16 septembre) place la prédiction du 16 octobre exactement à 30 jours, respectant le cycle mensuel observé.

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
- **Pattern temporel**: Intervalle irrégulier de 15 à 30 jours, tendance mensuelle dominante
- **Saisonnalité**: weak
- **Tendance**: Hausse progressive (Moyenne 4u en 2024 -> 4.7u en 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation moyenne récente de 4.7 unités sur les 3 derniers mois (5, 3, 6). La dernière commande date d'exactement un mois (16 septembre), ce qui correspond au cycle de réapprovisionnement observé. Bien que le volume ait légèrement augmenté par rapport à N-1 (moyenne de 4u), la variabilité reste faible. Le chiffre de 5 unités équilibre la tendance haussière récente tout en restant cohérent avec l'historique global de ce format 470ml.

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
- **Pattern temporel**: Intervalle ponctuel de 15 à 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à environ 1u par mois
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation très faible et sporadique, ne dépassant jamais 2 unités par commande. On observe un cycle récent d'environ une commande par mois (août, début septembre, mi-septembre). La dernière commande datant du 16 septembre (exactement un mois avant la date de prédiction du 16 octobre), le déclenchement d'un réapprovisionnement est hautement probable. La tendance de fond sur 2025 s'est stabilisée à 1 unité par commande après un début d'août à 2 unités. Étant donné la faible vélocité du produit (250ml), un stock de sécurité minimal de 1 unité est préconisé pour couvrir la demande mensuelle récurrente.

</details>


<details>
<summary><strong>4. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 2.25u
- 📊 **Médiane**: 3u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique mensuel (environ tous les 15 à 30 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable avec légère augmentation (moyenne de 2.5u sur 2025)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une consommation faible mais régulière pour ce format squeeze. En 2025, nous observons un cycle de 15 puis 30 jours. La dernière commande date du 16/09 (2u), précédée du 03/09 (3u). Le volume moyen récent est de 2.5 unités. Étant donné l'absence de pic saisonnier majeur identifié en octobre N-1 (la commande la plus proche était en septembre) et le fait que les quantités oscillent entre 1 et 3, la valeur la plus probable pour maintenir le stock sans sur-stockage est de 2 unités, s'alignant sur la dernière commande et le mode statistique du produit.

</details>


<details>
<summary><strong>5. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Rythme sporadique s'accélérant (mensuel à bimensuel)
- **Saisonnalité**: none
- **Tendance**: Hausse +100% (passage de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une faible rotation globale mais une accélération récente sur septembre 2025 avec deux commandes rapprochées (intervalle de 13 jours) et une augmentation du volume unitaire (2 unités lors de la dernière commande). La demande du 16 octobre 2025 intervient exactement 30 jours après la dernière commande de septembre, confirmant un besoin de réapprovisionnement cyclique. Compte tenu de la tendance haussière immédiate et du maintien du stock pour ce type de condiment, la quantité de 2 unités est la plus probable pour couvrir le mois à venir.

</details>


<details>
<summary><strong>6. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.67u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle irrégulier d'environ 30 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1.5u - 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse des fréquences montre une commande mensuelle systématique depuis août. La dernière commande datant du 16 septembre, l'échéance du 16 octobre respecte parfaitement ce cycle de 30 jours. Le volume historique oscille entre 1 et 2 unités avec une tendance récente stabilisée à 2 unités sur 2 des 3 dernières itérations.

</details>


<details>
<summary><strong>7. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Faible rotation, cycle irrégulier d'environ 45 à 60 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 1-2 unités par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une rotation très lente et irrégulière avec un volume de commande constant de 1 ou 2 unités. La dernière commande date du 3 septembre (il y a environ 6 semaines). Bien que l'intervalle moyen soit parfois plus long, l'historique montre une récurrence en septembre/octobre sur les deux années. Étant donné que le stock B2B pour une mayonnaise de spécialité à faible rotation se gère à l'unité, et qu'aucune tendance à la hausse n'est visible, une commande de 1 unité est la plus probable pour maintenir le fond de rayon sans risquer le surstockage.

</details>


<details>
<summary><strong>8. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: low)
- 📊 **Baseline N-1**: 1.5u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Sporadique (tous les 30 à 60 jours en moyenne)
- **Saisonnalité**: none
- **Tendance**: Hausse légère (passage de 1u à 2u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une demande très irrégulière et de faible volume. Historiquement, le client commande environ une fois par trimestre avec des unités simples (1u). Cependant, la dernière commande d'août 2025 montre un passage à 2 unités. Étant donné qu'aucun événement saisonnier n'est corrélé à la mi-octobre dans l'historique N-1 et que l'intervalle depuis la dernière commande est de 73 jours, un réapprovisionnement est probable. En l'absence de régularité forte, on maintient la quantité du dernier volume observé (2u) pour couvrir le stock sans risque majeur de surstockage.

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
- **Pattern temporel**: Indéterminé (sporadique, intervalle de 2 à 3 mois)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume (1u)
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
Le produit présente une demande extrêmement faible et sporadique avec un volume modal de 1 unité. L'unique pic de 4 unités en juin 2024 semble être un outlier (stock de sécurité ou événement ponctuel). La dernière commande datant du 4 août 2025 (1u), et compte tenu de l'intervalle moyen constaté entre les commandes (60 à 90 jours), une commande de réapprovisionnement de 1 unité est probable pour la mi-octobre.

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

**✅ Quantité LLM**: 2u (confidence: medium)
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

**✅ Quantité LLM**: 1u (confidence: medium)
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

**✅ Quantité LLM**: 2u (confidence: low)
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

*Rapport généré automatiquement le 2025-12-18T11:36:34.539Z*
