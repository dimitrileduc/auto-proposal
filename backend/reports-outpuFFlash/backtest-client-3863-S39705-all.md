# Rapport Backtest - Client C.F. GRELL NACHF. NATURKOST

## Contexte

- **Client** : C.F. GRELL NACHF. NATURKOST (ID: 3863)
- **Commande réelle** : S39705
- **Date commande** : 2025-10-13 14:04:36
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 3,657 input + 5,665 output = 9,322 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 66.7% | 6 produits réels, 4 détectés |
| **F1-Score** | 80.0% | Score équilibré global |

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
| **MAE** | 8.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

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

## True Positives (4)

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
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 32 | 16 | 16.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 32 | 48 | 16.0 | 33.3% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [MF0062] ​MF Tarti Betterave rouge | 16 | 16 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 32u vs Médiane: 32u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 32u
- 📊 **Baseline calculée**: 32u
- 📊 **Médiane historique**: 32u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 16u (100.0%)
- 📉 **Erreur Médiane**: 16u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 32u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande bi-hebdomadaire (14j) le mercredi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-10-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: decreasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle de 14 jours est extrêmement régulier sur les dernières itérations (mercredi). La prochaine commande est attendue dans environ 10 jours (le 22 octobre), ce qui justifie un besoin immédiat. Bien que la tendance récente des quantités soit à la baisse (48 > 32 > 16), la quantité de 32u correspond à la médiane historique et au volume commandé exactement à la même période l'année précédente (N-1), agissant comme un point pivot sécuritaire.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,006 tokens
- **Output**: 1,564 tokens
- **Total**: 2,570 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Tracking Project Timelines**

I'm currently focused on the temporal aspects of "MF Brotaufstrich Tomate Bärlauch 250g," specifically its project timeline. Right now, I'm calculating the gaps between various updates, starting with the most recent: a 14-day interval between October 8th and September 24th.


**Calculating Further Predictions**

I've extended my analysis to 2024 order dates, which reveals a less consistent pattern, though a 14-day cycle is still visible. Based on the most recent cycle, and knowing today's date, I'm now predicting the next order date, assessing the risk of a stockout based on the time remaining. I also have quantities to investigate, and I'm calculating those values.


**Predicting Stockout Risk**

Following the 14-day cycle, I've predicted the next order date and compared it to today's date. The analysis indicates a high risk of stockout within ten days, given the upcoming order and the current inventory levels. Based on recent decreasing trends and the volume observed a year ago, I'm recommending a base quantity of 32.


**Confirming Stock Predictions**

I've validated the predicted order date of October 22nd. The 14-day cycle is evident in recent orders, and I've also confirmed a high stockout risk within ten days. The quantities also appear to be decreasing, so 32 units is the recommended base quantity, aligning with the observed 2024 volumes.




</details>

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 32u vs Médiane: 32u (Réel: 48u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 32u
- 📊 **Baseline calculée**: 37.33u
- 📊 **Médiane historique**: 32u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 16u (33.3%)
- 📉 **Erreur Médiane**: 16u (33.3%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 32u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel (14 jours) très stable depuis septembre sur le jour du mercredi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-10-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit suit un cycle de commande bimensuel extrêmement précis (intervalle de 14 jours exacts sur les trois dernières livraisons). La dernière commande date du 08/10, la prochaine est prévue autour du 22/10, soit dans environ 10 jours, ce qui justifie un besoin de réapprovisionnement à court terme. Bien que la dernière commande ait été de 48 unités, la médiane stable et récurrente sur l'historique (N et N-1) est de 32 unités (multiple de 16).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,009 tokens
- **Output**: 1,656 tokens
- **Total**: 2,665 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Assessing Product History**

I'm currently reviewing the product history for MF0044. My focus is on the sales data, specifically the recent drops. I am noting the dates and units sold for each period.


**Forecasting Order Timelines**

\n\n

I've calculated the median cycle for MF0044 as 14 days, with the last order on October 8th. This suggests a risk of stockout if no new order is placed in the next 10 days. The sales quantities of the recent sales periods (48, 32, 32, 48) seem consistent. I am proceeding to make recommendations based on these findings.


**Refining Ordering Strategy**

\n\n

I've just finished analyzing the order history, and identified a consistent bi-weekly Wednesday pattern. Given the 14-day cycle, the next order is projected for October 22nd, creating a potential stockout risk in 10 days. I'm recommending an order of 32 units, based on the stable volume baseline and recent demand increases, taking into account the observed seasonality.


**Calculating Recommended Order Size**

\n\n

My analysis shows a consistent bi-weekly Wednesday order pattern. The predicted next order is for October 22nd, creating potential stockout risk in 10 days. Recent sales quantities are 48, 32, 32, 48 units. Considering the N-1 data, and the strong frequency pattern, I'm now recommending 32 units, reflecting a stable baseline and recent demand. Confidence is high.




</details>

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 16u
- 📊 **Médiane historique**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande bi-mensuelle extrêmement régulière le mercredi
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-10-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le cycle récent montre une régularité parfaite de 14 jours entre chaque commande de 16 unités. La dernière commande date du 8 octobre, la prochaine est donc prévue pour le 22 octobre. Etant donné que nous sommes le 12 octobre (J+4), l'échéance de consommation à 10 jours entre dans l'horizon de risque de rupture.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,001 tokens
- **Output**: 1,170 tokens
- **Total**: 2,171 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Recent Sales Data**

I've been examining the recent sales data for MF Delikatess Mayonnaise. Today's date is 2025-10-12, and I'm looking back three months. Noted a sale of 1 6u on 2025-10-08 and 16u on 2025-09-24. I need to keep digging to see what's driving these numbers.


**Forecasting Next Order Date**

I've calculated the next anticipated order date, which is October 22nd. Given today's date, that gives us ten days. The quantities have been consistently at 16 units recently. This strongly suggests a very stable pattern, and I'm confident we can stick with our baseline recommendation of 16 units for the next order.


**Finalizing the Recommendation**

I've just finalized the order recommendation. The analysis points to a clear pattern: 16 units every 14 days, with the next order due on October 22nd, ten days from now. No seasonal effects are visible. Consequently, I recommend ordering 16 units, with very high confidence.




</details>

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 16u
- 📊 **Baseline calculée**: 16u
- 📊 **Médiane historique**: 16u
- ✅ **Réel commandé**: 16u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 16u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle bi-mensuel régulier de 14 jours (mercredi) identifié sur les commandes récentes
- **Cycle médian (jours)**: 14
- **Dernière commande**: 2025-10-08
- **Prochaine prédite**: 2025-10-22 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 64u

**🧠 Raisonnement LLM:**
Après une commande volumineuse en juillet, le comportement s'est stabilisé sur un cycle très régulier de 14 jours avec une quantité constante de 16 unités. La prochaine commande est prévue pour le 22/10/2025 (dans 10 jours), ce qui entre dans l'horizon de risque de 30 jours.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 641 tokens
- **Output**: 1,275 tokens
- **Total**: 1,916 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product Data**

I've been analyzing the production data for MF0062, specifically the MF Tarti Betterave rouge. I noted the production runs, focusing on the quantity of 16 units produced on both October 8th and September 24th, with a past date of July 14th also on record.


**Projecting Future Needs**

I'm now calculating the next order date for MF0062, focusing on the recent 14-day production cycle. Based on this, I predict the next order will be on 2025-10-22. With today being 2025-10-12, there are 10 days until then, so a risk of rupture. I've noted a bulk order prior, but the recent data seems more stable.


**Calculating Order Quantity**

I've determined a strong bi-weekly cycle, 14 days, and a stable trend. While there was a larger initial order of 64 units, the consistent recent orders of 16 units are key. Therefore, I recommend ordering 16 units to match the established pattern, with high confidence in this projection.


**Refining Risk Assessment**

I'm now integrating the risk assessment with the quantity decision. There's a high confidence level due to the stable bi-weekly cycle. The 10-day lead time until the next order, combined with the consistent 16-unit requirement, confirms the immediate need to order, mitigating any rupture concerns.




</details>

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 32u
- 2025-09-10 06:05:27: 48u
- 2025-07-14 07:23:44: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:15:32: 32u
- 2024-09-23 07:03:10: 48u
- 2024-08-23 06:50:23: 48u
- 2024-08-07 07:50:22: 16u
- 2024-07-19 07:16:19: 64u
- 2024-07-01 04:50:52: 32u
- 2024-06-14 08:44:06: 32u
- 2024-05-24 09:36:53: 64u
- 2024-05-13 07:07:14: 48u
- 2024-04-19 09:15:16: 64u
- 2024-03-22 09:26:53: 32u
- 2024-03-15 08:05:43: 32u

**✅ Quantité LLM**: 32u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>2. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 48u
- 2025-09-24 07:27:49: 32u
- 2025-09-10 06:05:27: 32u
- 2025-07-14 07:23:44: 48u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:15:32: 32u
- 2024-09-23 07:03:10: 16u
- 2024-08-23 06:50:23: 32u
- 2024-08-07 07:50:22: 48u
- 2024-07-19 07:16:19: 16u
- 2024-07-01 04:50:52: 32u
- 2024-06-14 08:44:06: 32u
- 2024-05-13 07:07:14: 32u
- 2024-04-19 09:15:16: 32u
- 2024-03-22 09:26:53: 32u
- 2024-03-15 08:05:43: 32u
- 2024-02-23 08:44:27: 32u

**✅ Quantité LLM**: 32u (confidence: high)
**📊 Quantité Réelle**: 48u

</details>


<details>
<summary><strong>3. [MF0048] MF Delikatess Mayonnaise 250ml DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 16u
- 2025-09-10 06:05:27: 16u
- 2025-07-14 07:23:44: 16u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-04 09:15:32: 16u
- 2024-09-23 07:03:10: 16u
- 2024-08-23 06:50:23: 16u
- 2024-08-07 07:50:22: 16u
- 2024-07-19 07:16:19: 16u
- 2024-06-14 08:44:06: 32u
- 2024-05-13 07:07:14: 16u
- 2024-03-22 09:26:53: 16u
- 2024-03-15 08:05:43: 16u
- 2024-02-23 08:44:27: 16u
- 2024-02-19 09:05:29: 16u
- 2024-01-26 13:59:24: 32u

**✅ Quantité LLM**: 16u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>


<details>
<summary><strong>4. [MF0062] ​MF Tarti Betterave rouge</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:38:27: 16u
- 2025-09-24 07:27:49: 16u
- 2025-07-14 07:23:44: 64u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 16u (confidence: high)
**📊 Quantité Réelle**: 16u

</details>




---

## False Positives (0)

<details>
<summary>Qu'est-ce qu'un False Positive ?</summary>

**En simple** : Un produit que le système a prédit MAIS que le client n'a pas commandé

**Calcul** : Pour chaque produit, on compare :
- Système dit : "Ce produit doit être commandé"
- Réalité : Le client ne commande PAS ce produit
- → False Positive (fausse alerte)

**Problème** : Trop de False Positives = beaucoup de propositions inutiles (baisse la Précision)
</details>

*Aucun faux positif (précision = 100%)*

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
| [VID0009] Consigne casier | 96 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [VID0010] Consigne casier | 576 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-12-19T12:50:20.849Z*
