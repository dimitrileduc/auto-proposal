# Rapport Backtest - Client BEES COOP

## Contexte

- **Client** : BEES COOP (ID: 38709)
- **Commande réelle** : S39784
- **Date commande** : 2025-10-17 12:52:44
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 16,284 input + 24,589 output = 40,873 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 80.0% | 15 produits prédits, 12 corrects |
| **Rappel** | 85.7% | 14 produits réels, 12 détectés |
| **F1-Score** | 82.8% | Score équilibré global |

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
| **Bias** | 4.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | 4 | 2.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 1 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 0 | 1 | 1.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


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
- **Pattern temporel**: Cycle mensuel irrégulier (intervalle de 13 à 30 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable avec légère hausse de volume (1.67u vs 1.25u en N-1)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un cycle de commande médian d'environ 21 à 30 jours. La dernière commande date du 2025-09-16, soit il y a exactement 30 jours par rapport à la date actuelle (2025-10-16). Le client est donc théoriquement en phase de réapprovisionnement immédiat ou imminent dans la fenêtre des 30 prochains jours. En termes de volume, les commandes récentes oscillent entre 1u et 2u. Vu la tendance des derniers mois (2u le 04/08 et 2u le 16/09), la quantité recommandée pour la prochaine commande unique est de 2 unités. La saisonnalité est jugée faible car le produit est consommé régulièrement sur les périodes observées en 2024 et 2025.

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 5u vs Médiane: 5u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: medium)
- 📊 **Baseline N-1**: 4.5u
- 📊 **Médiane**: 5u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 1u (25.0%)
- 📉 **Erreur Médiane**: 1u (25.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier tournant autour de 30 jours avec des accélérations ponctuelles à 15 jours
- **Saisonnalité**: weak
- **Tendance**: Légère hausse sur les derniers volumes (moyenne mobile passée de 4.2 à 4.6u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une consommation régulière entre 3 et 6 unités par commande. (1) Aucun outlier n'a été identifié, les volumes restant proportionnels au stock de sécurité B2B standard. (2) La saisonnalité est peu marquée, bien que le volume actuel soit légèrement supérieur à celui de l'année précédente à la même période (6u en sept-25 vs 3u en sept-24). (3) L'intervalle de commande médian est d'environ 30 jours. (4) La dernière commande ayant eu lieu le 16 septembre 2025 (soit il y a exactement 30 jours), une commande est imminente dans la fenêtre de prédiction. Sur la base de la tendance récente des 3 derniers mois (moyenne 4.6u) et de la dernière commande (6u), une quantité de 5 unités est recommandée pour la prochaine commande unique.

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: medium)
- 📊 **Baseline N-1**: 1.4u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier entre 13 et 30 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 1u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une demande faible mais persistante (1 à 2 unités par commande). Aucun événement promotionnel n'a été détecté (Step 1). La saisonnalité est faible (Step 2), le produit étant présent toute l'année avec des volumes similaires. La tendance récente montre un léger ralentissement du volume (1u contre 2u auparavant) mais une présence constante (Step 3). La dernière commande date du 16 septembre 2025 (il y a 30 jours), ce qui correspond au cycle maximal observé dans l'historique récent. Une commande est donc statistiquement attendue dans les prochains jours. Compte tenu des deux dernières commandes à 1u, nous recommandons 1 unité pour la prochaine commande unique (Step 4).

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
- **Pattern temporel**: Cycle irrégulier avec une médiane de 30 jours, mais une accélération récente (13 jours entre les deux dernières commandes)
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 2u par commande
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande médian d'environ 30 jours. La dernière commande ayant eu lieu le 16 septembre 2025, soit il y a exactement 30 jours par rapport à la date actuelle (16 octobre), une nouvelle commande est statistiquement imminente dans la fenêtre de prédiction. Bien que le volume ait atteint 4u à la même période l'an dernier, les données les plus récentes (3u puis 2u en septembre 2025) indiquent une stabilisation de la demande de fond à 2 unités par commande.

</details>


<details>
<summary><strong>5. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.14u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle intermittent avec accélération récente (13-16 jours)
- **Saisonnalité**: weak
- **Tendance**: Hausse de fréquence et de volume (2u vs 1u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPES 1 & 2 : Aucune anomalie majeure détectée malgré le pic de 2u en septembre. Historiquement, le produit est commandé en été/début d'automne (avril à août en 2024, septembre en 2025). ÉTAPE 3 : On observe une reprise d'activité récente après un long silence, avec un intervalle passant de ~40 jours à ~14 jours en septembre. ÉTAPE 4 : La dernière commande date du 16 septembre 2025. Avec un cycle récent de 13-15 jours, le client est déjà en retard sur son réapprovisionnement habituel. Une commande est donc hautement probable dans les 30 prochains jours. Bien que la dernière quantité commandée fût de 2u, le mode historique est de 1u, ce qui constitue la base la plus sûre vu l'intermittence du produit.

</details>


<details>
<summary><strong>6. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: high)
- 📊 **Baseline N-1**: 1.7u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 4u
- 📉 **Erreur LLM**: 2u (50.0%)
- 📉 **Erreur Médiane**: 2u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel approximatif (environ 30 jours)
- **Saisonnalité**: weak
- **Tendance**: Stable à environ 2u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une consommation très régulière de 1 à 2 unités par commande. En examinant les intervalles, on constate un cycle médian de 30 jours. La dernière commande ayant eu lieu le 16 septembre 2025, et nous étant aujourd'hui le 16 octobre 2025, le client est exactement au terme de son cycle habituel. Une commande est donc statistiquement imminente dans les prochains jours. La demande de fond étant stable à 2 unités pour la majorité des commandes récentes, cette quantité est recommandée pour la prochaine commande unique.

</details>


<details>
<summary><strong>7. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 2u (confidence: medium)
- 📊 **Baseline N-1**: 1.6u
- 📊 **Médiane**: 2u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 1u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande sporadique avec un cycle moyen de 45 à 60 jours
- **Saisonnalité**: weak
- **Tendance**: Stable à 2u pour les commandes récentes
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre un cycle de commande irrégulier mais récurrent, oscillant entre 39 et 80 jours (moyenne ~50j). La dernière commande date du 03/09/2025, soit il y a 43 jours. Selon ce rythme, une commande est prévue très prochainement dans la fenêtre des 30 jours (probablement entre le 18/10 et le début novembre). La quantité est stable à 2 unités sur les trois dernières livraisons, ce qui définit la demande de fond.

</details>


<details>
<summary><strong>8. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 1u (confidence: low)
- 📊 **Baseline N-1**: 1.2u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier et sporadique (intervalles de 34 à 84 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à faible volume
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre un produit à rotation très faible avec seulement 5 commandes enregistrées en 18 mois. La dernière commande (2u) remonte au 04/08/2025, soit il y a 73 jours. En se basant sur l'intervalle maximal observé en 2024 (84 jours), une commande de réapprovisionnement est statistiquement attendue entre le 20/10/2025 et le 30/10/2025, ce qui se situe dans la fenêtre des 30 prochains jours. La quantité est ramenée à 1 unité, correspondant à la demande de fond standard observée sur 80% de l'historique.

</details>


<details>
<summary><strong>9. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 0u vs Médiane: 1u (Réel: 1u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 0u (confidence: low)
- 📊 **Baseline N-1**: 1u
- 📊 **Médiane**: 1u
- ✅ **Réel commandé**: 1u
- 📉 **Erreur LLM**: 1u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Erratique avec une concentration saisonnière identifiée entre avril et août (cycle ~45 jours en période active).
- **Saisonnalité**: strong
- **Tendance**: Baisse de fréquence significative (une seule commande en 2025 vs quatre en 2024).
- **Outliers détectés**: 4u

**🧠 Raisonnement LLM:**
ÉTAPE 1: La commande de 4u en juin 2024 est identifiée comme un outlier, la demande de fond est de 1u par commande. ÉTAPE 2: L'historique N-1 ne présente aucune activité entre septembre et mars, suggérant un produit exclusivement estival (moutarde miel pour salades/grillades). ÉTAPE 3: La tendance 2025 est très faible avec une unique commande en août. ÉTAPE 4: Bien que 73 jours se soient écoulés depuis la dernière commande (04/08/2025), dépassant le cycle moyen observé l'an dernier, l'absence totale d'historique de commandes en automne/hiver et la faible activité récente indiquent qu'aucune commande n'est prévue pour les 30 prochains jours.

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

**✅ Quantité LLM**: 1u (confidence: low)
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

**✅ Quantité LLM**: 2u (confidence: high)
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

**✅ Quantité LLM**: 0u (confidence: low)
**📊 Quantité Réelle**: 1u

</details>




---

## False Positives (3)

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
| [JF034] JF SAMOURAI SQUEEZE 300ML | 3 | Stock prédit: -1.4u (-29j restants) → prédit 3u mais non commandé |


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
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 2 | Stock suffisant: 1.6u (101j restants > seuil 30j) |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | LLM avait prédit 0 (pas de besoin) avec stock: -1.3u (-41j) mais client a commandé 1u |


---

*Rapport généré automatiquement le 2025-12-18T20:00:12.538Z*
