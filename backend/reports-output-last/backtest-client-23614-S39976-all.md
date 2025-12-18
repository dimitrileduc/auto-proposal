# Rapport Backtest - Client Alnatura Produktions- und Handels GmbH, Invoice Address

## Contexte

- **Client** : Alnatura Produktions- und Handels GmbH, Invoice Address (ID: 23614)
- **Commande réelle** : S39976
- **Date commande** : 2025-10-29 07:41:55
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 7
- **Tokens**: 10,991 input + 19,245 output = 30,236 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 12.5% | 8 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 22.2% | Score équilibré global |

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
| **MAE** | 300.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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
| [LV104] LV Paprika Chili Aufstri 180g DE | 300 | 600 | 300.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [LV104] LV Paprika Chili Aufstri 180g DE</strong> - LLM: 300u vs Médiane: 300u (Réel: 600u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 300u (confidence: high)
- 📊 **Baseline N-1**: 0u
- 📊 **Médiane**: 300u
- ✅ **Réel commandé**: 600u
- 📉 **Erreur LLM**: 300u (50.0%)
- 📉 **Erreur Médiane**: 300u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commandes toutes les 14-35 jours (moyenne ~24 jours)
- **Saisonnalité**: strong
- **Tendance**: Stabilisation à la baisse (300u constant)
- **Outliers détectés**: 900u

**🧠 Raisonnement LLM:**
Le jour de prédiction (mardi) est un jour de commande habituel pour ce produit. Les 3 dernières commandes (août-septembre 2025) montrent une stabilisation PARFAITE à 300u, signal très fort. Le 600u de N-1 (2024-10-15) ne reflète plus la tendance actuelle qui s'est clairement réduite. Le 900u du 03/07/2024 est un outlier évident (3× la valeur médiane, isolé). En B2B, privilégier la précision : la valeur la plus probable est la consigne récente stable → 300u.

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [LV104] LV Paprika Chili Aufstri 180g DE</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-03 08:18:02: 300u
- 2025-08-20 06:08:56: 300u
- 2025-08-07 07:25:44: 300u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 11:47:58: 600u
- 2024-09-18 06:25:10: 300u
- 2024-08-27 11:52:00: 300u
- 2024-08-07 07:56:23: 300u
- 2024-07-03 07:36:16: 900u
- 2024-05-29 09:11:13: 300u
- 2024-05-08 06:38:08: 600u
- 2024-04-16 12:55:07: 300u
- 2024-03-26 12:32:16: 300u
- 2024-03-05 13:51:42: 600u
- 2024-01-16 12:42:37: 600u
- 2024-01-03 14:24:51: 600u

**✅ Quantité LLM**: 300u (confidence: high)
**📊 Quantité Réelle**: 600u

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
| [LV102] LV Karot. Ingwer Aufstrich 180g DE | 300 | Stock prédit: 116.1u (12j restants) → prédit 300u mais non commandé |
| [LV105] LV Tomate Basil Aufstr 180g | 300 | Stock prédit: 159.3u (21j restants) → prédit 300u mais non commandé |
| [LV106] LV Oliven Aufstrich 180g DE | 300 | Stock prédit: 182.5u (29j restants) → prédit 300u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 300 | Stock prédit: 21.6u (4j restants) → prédit 300u mais non commandé |
| [LV103] LV Mango Curry Aufstrich 180g | 300 | Stock prédit: -137.8u (-17j restants) → prédit 300u mais non commandé |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 300 | Stock prédit: -251.4u (-30j restants) → prédit 300u mais non commandé |
| [LV341] LV Zwiebel Aufstrich 180g | 300 | Stock prédit: 1.7u (0j restants) → prédit 300u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T08:12:40.157Z*
