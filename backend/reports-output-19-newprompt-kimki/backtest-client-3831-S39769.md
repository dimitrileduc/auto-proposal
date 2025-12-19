# Rapport Backtest - Client DANTESSE GmbH

## Contexte

- **Client** : DANTESSE GmbH (ID: 3831)
- **Commande réelle** : S39769
- **Date commande** : 2025-10-16 10:03:47
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 13
- **Tokens**: 28,053 input + 68,633 output = 96,686 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 10.0% | 10 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 18.2% | Score équilibré global |

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
| **MAE** | 163.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 130.4% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 130.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 130.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 288 | 125 | 163.0 | 130.4% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF1792] LD MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 288u vs Médiane: 250u (Réel: 125u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 288u (confidence: low)
- 📊 **Baseline N-1**: 250u
- 📊 **Médiane**: 250u
- ✅ **Réel commandé**: 125u
- 📉 **Erreur LLM**: 163u (130.4%)
- 📉 **Erreur Médiane**: 125u (100.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle erratique: intervalles [10j,19j,49j] avec CV=64%. Tendance compression récente vers 10j
- **Saisonnalité**: strong
- **Tendance**: increasing
- **Outliers détectés**: 55u

**🧠 Raisonnement LLM:**
PHASE1: Intervalles 10j/19j/49j → médiane 19j, CV=64% (low). Prochaine commande le 21 octobre (dans 6j, <30j) → RISQUE CONFIRMÉ. PHASE2: Quantités [55,250,250,250]. Test IQR: Q1=103.75, Q3=250, IQR=146.25, barrières [-115.6,469.4]. 55u est une valeur historique isolée (ancien niveau N-1: 50-125u), les 3×250u forment un nouveau pattern stable → exclure 55u. Valeurs retenues [250,250,250] avec CV=0% → baseline=médiane=250u. Comparaison N-1: moyenne N-1≈90u vs récent 250u = +178% → seasonality 'strong' (règle +50%). Ajustement +15%: 250×1.15=287.5 → 288u.

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1792] LD MAYONNAI TRUFFES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-02 08:37:42: 250u
- 2025-09-22 05:31:37: 250u
- 2025-09-03 07:49:42: 250u
- 2025-07-16 13:46:45: 55u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-25 19:46:57: 125u
- 2024-08-29 12:54:10: 75u
- 2024-08-23 09:48:48: 50u
- 2024-07-17 09:21:00: 80u
- 2024-06-07 10:11:53: 50u
- 2024-05-28 11:15:02: 125u
- 2024-04-23 06:22:53: 50u
- 2024-04-04 06:34:16: 125u
- 2024-03-12 11:50:55: 50u
- 2024-02-15 07:27:41: 70u
- 2024-01-17 14:53:06: 75u
- 2023-12-13 12:47:04: 125u

**✅ Quantité LLM**: 288u (confidence: low)
**📊 Quantité Réelle**: 125u

</details>




---

## False Positives (9)

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
| [PF1807] LD SAUCE ANDALOUSE 250ML WECK | 8 | Stock prédit: -0.4u (-1j restants) → prédit 8u mais non commandé |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 1 | Stock prédit: 0.6u (35j restants) → prédit 1u mais non commandé |
| [PF1802] LD MOUTARDE MIEL 250ML WECK | 6 | Stock prédit: 3.3u (44j restants) → prédit 6u mais non commandé |
| [PF1799] LD MAYONNAISE OEUFS 250ML WECK | 58 | Stock prédit: 10.8u (11j restants) → prédit 58u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 63 | Stock prédit: -18.3u (-11j restants) → prédit 63u mais non commandé |
| [PF1795] LD MAYONNAI WASABI 250ML WECK | 100 | Stock prédit: 42.2u (65j restants) → prédit 100u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 25 | Stock prédit: 16.3u (43j restants) → prédit 25u mais non commandé |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 29 | Stock prédit: 23.9u (59j restants) → prédit 29u mais non commandé |
| [PF3246] AA0105 - LD FR TARTINADE BIO TOSCANE 180G | 29 | Stock prédit: 39.6u (67j restants) → prédit 29u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-19T07:30:53.394Z*
