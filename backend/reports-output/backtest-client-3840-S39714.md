# Rapport Backtest - Client KORO HANDELS GmbH

## Contexte

- **Client** : KORO HANDELS GmbH (ID: 3840)
- **Commande réelle** : S39714
- **Date commande** : 2025-10-14 07:59:02
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 9
- **Tokens**: 8,156 input + 28,587 output = 36,743 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.0% | 4 produits prédits, 1 corrects |
| **Rappel** | 25.0% | 4 produits réels, 1 détectés |
| **F1-Score** | 25.0% | Score équilibré global |

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
| [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G | 1500 | 1500 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G</strong> - LLM: 1500u vs Médiane: 1518u (Réel: 1500u)</summary>

**📊 Quantités & Prédictions:**
- 🤖 **Quantité recommandée (finale)**: 1500u
- 📊 **Baseline calculée**: 1500u
- 📊 **Médiane historique**: 1518u
- ✅ **Réel commandé**: 1500u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 18u (1.2%)

**🚨 Décision LLM Phase 1 (Risque de rupture):**
- **Risque détecté**: ✅ OUI → Commande nécessaire
- **Quantité décidée**: 1500u (risque détecté)

**🎯 Niveaux de Confiance:**
- **Confiance globale**: high
- **Confiance Phase 1 (détection risque)**: high
- **Confiance Phase 2 (quantité)**: high

**🔍 Analyse LLM Complète:**
- **Pattern temporel**: Cycle mensuel régulier (env. 29 jours)
- **Cycle médian (jours)**: 29
- **Dernière commande**: 2025-10-09
- **Prochaine prédite**: 2025-11-07Base quantite 1500u stable sur les 3 derniers mois. Prochaine commande attendue le 2025-11-07, soit dans 25 jours, ce qui est sous le seuil de risque de 30 jours nécessitant une planification B2B. Le volume de commande a doublé par rapport à l'année dernière mais s'est stabilisé autour de 1500 unités lors du dernier trimestre de 2025.",
  "confidence_phase1": "high",
  "confidence_phase2": "high"
}


*(Note on dates calculation: Last order 2025-10-09 + 29 days = 2025-11-07. From current date 2025-10-13 to 2025-11-07 is 25 days.)* 
- **Dans horizon 30j ?**: ❌ NON
- **Saisonnalité**: none
- **Tendance**: stable
- **Analyse jour cycle**: N/A
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente un cycle mensuel extrêmement stable de 29 jours. Bien que la dernière commande ait été passée il y a seulement 4 jours, la prochaine commande prévue tombe dans 25 jours, soit en deçà du seuil de 30 jours défini pour l'identification du risque de rupture imminente. La quantité est stable à ~1500 unités sur les trois derniers mois, marquant un net changement structurel par rapport aux volumes de 2024.

**📊 Tokens utilisés pour cette prédiction:**
- **Input**: 1,028 tokens
- **Output**: 2,054 tokens
- **Total**: 3,082 tokens

**🤔 Raisonnement Interne du Modèle (Thinking):**
<details>
<summary>Voir le reasoning interne de Kimi K2</summary>

**Observing Production Consistency**

The production figures for the KORO Tartinade Bio Mangue appear remarkably steady over the past few months. I've noted a consistent output of around 1500 units, give or take, with only minor fluctuations. This stability is quite noteworthy, especially given the various factors that can impact production. It looks like the process is very well controlled.


**Projecting Future Demands**

I've calculated the next potential order date for the product, estimating it to be around November 7th. Given the consistent production cycle of roughly 28-29 days and the most recent order on October 9th, this projection is based on the median of recent intervals. There appears to be a definite risk of stockout, calling for an imminent B2B order.


**Confirming Stability & Quantities**

I've just refined the analysis, confirming the production stability at around 1500 units per cycle, or about 29 days. Further investigation points to a stable trend, with no significant outliers. My recommendation is to order 1500 units, as the confidence level is high based on recent data.


**Reassessing Order Timing**

I've re-examined the 2025-10-09 order and the production cycle, refining the stockout risk assessment. With 25 days until the next predicted order date, the risk remains high, justifying an immediate order recommendation of 1500 units. Though recent, the prompt guides us to address future demands proactively.


**Evaluating Replenishment Cycles**

I've re-evaluated the data, with the decision now being clearly defined as ordering for the next cycle, due in 25 days. The prompt's logic directs us to recommend a quantity, given the impending replenishment date. I maintain that the correct quantity is 1500 units, as the volume is stable.




</details>

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-09 08:02:15: 1500u
- 2025-09-10 14:18:40: 1494u
- 2025-08-14 06:52:41: 1536u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-05 07:27:40: 758u
- 2024-07-22 13:15:52: 758u
- 2024-05-02 07:07:22: 594u
- 2024-04-17 08:00:24: 244u
- 2024-01-19 12:40:26: 484u
- 2024-01-02 14:39:56: 334u

**✅ Quantité LLM**: 1500u (confidence: high)
**📊 Quantité Réelle**: 1500u

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
| [PF3312] DE_AUFSTR_036_T6 KORO TARTINADE BIO AUBERGINE 380G | 1826 | Stock prédit: 183.4u (2j restants) → prédit 1826u mais non commandé |
| [PF3314] DE_AUFSTR_038_T6 KORO TARTINADE BIO TOMATE 380G | 4224 | Stock prédit: 966.7u (6j restants) → prédit 4224u mais non commandé |
| [PF3253] DK_AUFSTR_039 KORO TARTINADE BIO TOMATE 180G | 166 | Stock prédit: -41.5u (-4j restants) → prédit 166u mais non commandé |


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
| [PF3363] DE_AUFSTR_041_T6 KORO TARTINADE BIO BETTERAVE 380G  | 172 | Stock suffisant: 160.1u (40j restants > seuil 30j) |
| [PF3320] DE_AUFSTR_043 KORO TARTINADE BIO MOUTARDE AGAVE 380G | 43 | En rupture (-3j) mais non prédit - probablement filtré (pas de consommation ou historique insuffisant) |
| [PF3364] DE_OLIVE_013_T6 KORO TARTINADE BIO OLIVE 380G | 86 | Stock suffisant: 79.7u (38j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-19T14:45:45.974Z*
