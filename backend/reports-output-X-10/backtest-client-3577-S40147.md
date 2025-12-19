# Rapport Backtest - Client ITM ALIMENTAIRE BELGIUM

## Contexte

- **Client** : ITM ALIMENTAIRE BELGIUM (ID: 3577)
- **Commande réelle** : S40147
- **Date commande** : 2025-11-05 14:17:31
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 8,125 input + 7,327 output = 15,452 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 3 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
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
| **MAE** | 32.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 36.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

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

## True Positives (2)

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
| [PF2036] ITM BOULETTES TOMATE 800 GR | 128 | 64 | 64.0 | 100.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF2996] ITM BO VIN CIBOULET PET 450 | 112 | 112 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - LLM: 128u vs Médiane: 64u (Réel: 64u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 128u
- 📊 **Baseline calculée**: 96u
- 📊 **Médiane historique**: 64u
- ✅ **Réel commandé**: 64u
- 📉 **Erreur LLM**: 64u (100.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 128u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: medium

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle irrégulier avec une médiane de 15 jours, client actuellement en retard de commande
- **Cycle médian (jours)**: 15
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-10-29Primeira-feira de Novembro de 2025, especificamente 2025-10-29 para respeitar o ciclo de 15 dias após a última encomenda de 14 de Outubro. Note-se que hoje é 04 de Novembro, o cliente está, portanto, com 6 dias de atraso em relação ao seu ciclo mediano de 15 dias. No entanto, o padrão de datas nos últimos meses apresenta intervalos variáveis (5, 7, 23, 35 dias), o que torna a confiança médio-baixa no cumprimento estrito da data, mas reforça o risco de rutura presente no horizonte de 30 dias. A quantidade recomendada baseia-se na última encomenda de 128u e no histórico N-1 que demonstra volumes de 128u e 192u em Novembro, sugerindo uma tendência de aumento sazonal típica para o final do ano. Embora a mediana recente seja 64u, a aproximação à época de maior consumo justifica manter o patamar de 128u conforme a última transação bem-sucedida de Outubro para garantir stock suficiente durante o período de 30 dias projectado pela nossa análise de ciclo mediano corrigido por atraso real detetado. 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: weak
- **Tendance**: increasing
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Cycle médian calculé à 15 jours (intervalles: 5, 23, 35, 7). Avec une dernière commande au 14/10, la prédiction théorique était le 29/10. Le client est en retard (Risque OUI). Quantités constantes entre 64 et 128. On retient 128 car c'est la dernière valeur commandée et l'historique N-1 confirme des volumes élevés (128-192) en novembre.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,742 tokens
- **Output**: 2,436 tokens
- **Total**: 5,178 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Examining Recent Trends**

I'm currently focused on the recent history of product PF2036, specifically the ITM BOULETTES TOMATE 800 GR. I've noted the dates and unit quantities from the last three months. The data points from the last month, particularly October 14th and 9th, are of interest. I want to see if this represents a clear pattern.


**Predicting the Next Order**

I've calculated the median interval between orders, which is 15 days. Based on this, and the last order date of October 14th, I predicted the next order should have been on October 29th. Now, comparing the predicted date to today's, November 4th, the client appears to be late, and I'll investigate.


**Evaluating Quantity Predictions**

I've examined the order quantities, focusing on the recent 5 orders. The median quantity is 64 units, but the last order was 128. Considering the upcoming November context with previous high volumes (192u last year), I am estimating the next order quantity will fall somewhere between the median and the last order, likely 128, which also seems like a probable standard pallet quantity.


**Determining Order Quantity**

I'm now assessing the probable order quantity. Considering the median of recent orders is 64 units, but the last was 128, and November historically sees higher volumes, I'm leaning toward 128 units. This quantity aligns with historical and seasonal data, suggesting it's the most appropriate estimate.


**Calculating Latency and Units**

I've determined the client is six days late, with a predicted order date of October 29th, yet it's now November 4th. Examining order quantities, recent history alternates between 64 and 128 units, and with the N-1 data showing increased November volumes, I'm recommending 128 units for this upcoming order.




</details>

</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - LLM: 112u vs Médiane: 224u (Réel: 112u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 112u
- 📊 **Baseline calculée**: 112u
- 📊 **Médiane historique**: 224u
- ✅ **Réel commandé**: 112u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 112u (100.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 112u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle régulier détecté d'environ 22 jours avec une forte saisonnalité annuelle.
- **Cycle médian (jours)**: 22
- **Dernière commande**: 2025-10-14
- **Prochaine prédite**: 2025-11-05 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: strong
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 448u

**🧠 Raisonnement LLM:**
Le cycle médian global (N et N-1) est de 22 jours. La dernière commande date d'il y a 21 jours (2025-10-14), ce qui place la prochaine commande théorique à demain (2025-11-05), donc en plein dans l'horizon. Historiquement, le client commande principalement par multiples de 112u. La commande de l'année précédente à la même date exacte était de 112u, tout comme la commande la plus récente. On privilégie donc cette quantité standard malgré les pics observés en août (448u/224u) qui semblent exceptionnels ou liés à un stockage estival.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,749 tokens
- **Output**: 2,804 tokens
- **Total**: 5,553 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Product History**

I'm currently reviewing the historical data for product PF2996. The focus is on unit sales, specifically from August and October of 2025. I'm noting the significant difference in units sold between August 4th and August 5th, and comparing it to the sales on October 14th.


**Calculating Interval Spans**

I'm now calculating the intervals between significant sales spikes, focusing on the differences between 2025 and 2024. The 70-day gap between the August cluster and October 2025 sales is notable, and I'm comparing it to the varied intervals observed in the 2024 data.


**Anticipating Potential Demand**

I've just calculated the median interval between sales spikes, focusing on the 2024 and 2025 data, finding it to be 22 days. Based on this, and the last order date of October 14th, the model predicts high demand starting tomorrow, November 5th. This presents a potential risk that needs further analysis.


**Synthesizing Recommendations**

I'm now consolidating my findings. The analysis points to high confidence in a demand spike *tomorrow*. I've considered historical intervals, seasonality, and the recent trend of multiples of 112 units. A baseline quantity of 112u is recommended, mirroring the standard unit size and last order.


**Revisiting Quantity Analysis**

I'm now recalculating the median quantity based on the three most recent orders, yielding 224 units. However, given that the last order was for 112, and this aligns with the historical pattern, 112 units may be a safer recommendation. The confidence level remains high, though.


**Evaluating Data Consistency**

I am now assessing the model's recommendation of 112 units. This aligns with both the last order and the historical median quantity, which strongly supports that recommendation. Furthermore, the timing aligns with a clear annual cycle, solidifying the confidence.




</details>

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 08:27:27: 128u
- 2025-10-09 08:37:17: 64u
- 2025-09-16 09:22:58: 128u
- 2025-08-12 09:46:11: 64u
- 2025-08-05 11:52:23: 64u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-03 12:49:47: 64u
- 2024-06-11 06:48:14: 192u
- 2024-05-21 13:18:20: 128u
- 2024-04-23 07:54:51: 64u
- 2024-04-09 09:07:56: 64u
- 2024-03-19 08:47:39: 64u
- 2024-02-13 10:12:54: 128u
- 2024-01-16 13:29:59: 128u
- 2023-11-29 10:59:25: 192u
- 2023-11-07 14:55:48: 128u

**✅ Quantité LLM**: 128u (confidence: medium)
**📊 Quantité Réelle**: 64u

</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-14 08:27:27: 112u
- 2025-08-05 11:52:23: 448u
- 2025-08-04 08:50:19: 224u

**📅 Commandes N-1 (même période année dernière):**
- 2024-07-08 06:47:45: 112u
- 2024-06-11 06:48:14: 224u
- 2024-05-21 13:18:20: 224u
- 2024-05-16 11:00:25: 112u
- 2024-04-23 07:54:51: 112u
- 2024-04-09 09:07:56: 224u
- 2024-03-19 08:47:39: 112u
- 2024-03-12 11:47:36: 112u
- 2024-02-13 10:12:54: 112u
- 2024-01-16 13:29:59: 112u
- 2023-12-27 07:11:21: 112u
- 2023-11-07 14:55:48: 112u

**✅ Quantité LLM**: 112u (confidence: high)
**📊 Quantité Réelle**: 112u

</details>




---

## False Positives (1)

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
| [PF2997] ITM BO VIN YOGORETTE PET 450 | 112 | Stock prédit: -67.8u (-9j restants) → prédit 112u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T09:31:36.766Z*
