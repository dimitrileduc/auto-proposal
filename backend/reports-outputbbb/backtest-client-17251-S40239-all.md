# Rapport Backtest - Client CARREFOUR BELGIUM SA, CD Carrefour Kontich

## Contexte

- **Client** : CARREFOUR BELGIUM SA, CD Carrefour Kontich (ID: 17251)
- **Commande réelle** : S40239
- **Date commande** : 2025-11-12 09:16:06
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 29,970 input + 27,260 output = 57,230 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 7.1% | 14 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 13.3% | Score équilibré global |

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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

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

## True Positives (1)

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
| [PF3381] CARREFOUR SAUCE COCKTAIL BIO SQUEEZE 300ML | 112 | 112 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF3381] CARREFOUR SAUCE COCKTAIL BIO SQUEEZE 300ML</strong> - LLM: 112u vs Médiane: 112u (Réel: 112u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 112u
- 📊 **Baseline calculée**: 112u
- 📊 **Médiane historique**: 112u
- ✅ **Réel commandé**: 112u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 112u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: medium
- **Confiance Phase 1 (détection risque)**: medium
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Commande régulière avec quantité fixe de 112u, cycle moyen de 21 jours
- **Cycle médian (jours)**: 21
- **Dernière commande**: 2025-10-31
- **Prochaine prédite**: 2025-11-21 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: 0u

**🧠 Raisonnement LLM:**
Le cycle de commande médian est de 21 jours (basé sur les intervalles de 21, 35 et 10 jours entre les commandes positives). La date théorique de la prochaine commande est le 2025-11-21, ce qui tombe dans l'horizon des 30 jours (J+10). La quantité est extrêmement stable à 112 unités par commande, suggérant un conditionnement logistique fixe (palette ou couche).

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 2,217 tokens
- **Output**: 1,599 tokens
- **Total**: 3,816 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Reviewing Sales Trajectory**

I've been analyzing the sales data for the CARREFOUR SAUCE CO CKTAIL BIO SQUEEZE. The recent history shows a consistent 112-unit sale, ten days prior to the last recorded sale. However, there's a troubling zero-unit sale prior to that. I'm focused on understanding the reason for the initial drop.


**Projecting Future Orders**

I'm focused on the predicted next order date, factoring in the intervals between sales. I've calculated a median interval of 21 days, based on the non-zero sales data. This suggests the next order could be around November 21st. There's a risk, as the current date is November 11th, leaving only 10 days until that prediction. Confidence is medium.


**Predicting Order Imminence**

I've examined the recent ordering cadence more closely. The identified cycle is approximately 21 days. The algorithm flags a potential rupture risk, as the predicted order date, November 21st, is nearing. I now have a high confidence the next order will be for 112 units, based on the quantity analysis.


**Evaluating Cycle Consistency**

I've been re-examining the intervals between orders. I've noted a median cycle of 21 days, but the spread requires a closer look. Despite some variance, the client consistently orders 112 units. This suggests the predicted order date, the 21st, should be reliable, and a quantity of 112 is highly likely.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF3381] CARREFOUR SAUCE COCKTAIL BIO SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-31 15:01:19: 112u
- 2025-10-21 09:39:45: 112u
- 2025-10-16 09:46:52: 0u
- 2025-09-16 12:31:33: 112u
- 2025-08-26 13:19:30: 112u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 112u (confidence: medium)
**📊 Quantité Réelle**: 112u

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
| [PF01012] CARREFOUR VOL AU VENT 400 GR | 384 | Stock prédit: -36.3u (-1j restants) → prédit 384u mais non commandé |
| [PF3339] CARRE MAYONNAISE ANCIENNE 500ML | 96 | Stock prédit: -14.8u (-1j restants) → prédit 96u mais non commandé |
| [PF3225] CARREFOUR CARBONNADES 680 GR PAR 8 | 216 | Stock prédit: -17.5u (-1j restants) → prédit 216u mais non commandé |
| [PF3340] CARRE MAYONNAISE BELGE 720ML | 240 | Stock prédit: -48.0u (-3j restants) → prédit 240u mais non commandé |
| [PF3343] SIMPL CARRE VOL AU VENT 800 GR | 192 | Stock prédit: 7.4u (0j restants) → prédit 192u mais non commandé |
| [PF3229] CARREFOUR VOL AU VENT BOCAL 800 GR | 192 | Stock prédit: -11.5u (0j restants) → prédit 192u mais non commandé |
| [PF3348] CARRE BOULETTES TOMATE 680 GR PAR 8 | 108 | Stock prédit: 14.6u (1j restants) → prédit 108u mais non commandé |
| [PF1952] CARRE VIN CIBOULET PET 450 | 98 | Stock prédit: -7.5u (0j restants) → prédit 98u mais non commandé |
| [PF3344] SIMPL CARRE CARBONNADES 800 GR PAR 8 | 96 | Stock prédit: -5.1u (0j restants) → prédit 96u mais non commandé |
| [PF3341] CARRE MAYONNAISE BIO 500ML | 110 | Stock prédit: 40.6u (5j restants) → prédit 110u mais non commandé |
| [PF2932] CARRE VIN CIBOULET PET 450 BIO | 98 | Stock prédit: 62.7u (17j restants) → prédit 98u mais non commandé |
| [PF2933] CARRE VIN MIEL MOU PET 450 BIO | 98 | Stock prédit: 52.1u (14j restants) → prédit 98u mais non commandé |
| [PF3380] CARREFOUR SAUCE TARTARE BIO SQUEEZE 300ML | 112 | Stock prédit: -288.0u (-18j restants) → prédit 112u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T09:02:28.513Z*
