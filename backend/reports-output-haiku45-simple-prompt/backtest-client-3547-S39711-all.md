# Rapport Backtest - Client K&F DE PAUW

## Contexte

- **Client** : K&F DE PAUW (ID: 3547)
- **Commande réelle** : S39711
- **Date commande** : 2025-10-14 07:25:09
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 10
- **Tokens**: 23,880 input + 9,946 output = 33,826 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 9.1% | 11 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 16.7% | Score équilibré global |

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
| **MAE** | 50.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF1809] LD SAUCE BEARNAISE 250ML WECK | 150 | 200 | 50.0 | 25.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [PF1809] LD SAUCE BEARNAISE 250ML WECK</strong> - LLM: 150u vs Médiane: 200u (Réel: 200u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 150u (confidence: medium)
- 📊 **Baseline N-1**: 112.5u
- 📊 **Médiane**: 200u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 50u (25.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Pattern irrégulier avec cycles variés. N-1 montre commandes espacées de 15-45j. Récemment: aucune commande depuis le 23-09-2025 (rattrapage possible). Pas de cycle fixe hebdomadaire détecté.
- **Saisonnalité**: weak
- **Tendance**: Hausse récente : 0u (23-09) → 200u (29-08) et 200u (07-08). Pic octobre N-1 (200u). Suggère demande Q3-Q4 plus forte.
- **Outliers détectés**: 1u, 200u, 200u, 300u

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
- N-1 (2024): Pattern très irrégulier, commandes espacées de 15 à 45 jours. Pas de jour fixe de commande.
- Récent (août-septembre 2025): Deux commandes de 200u (07-08 et 29-08) puis rupture le 23-09 (0u = possible erreur de saisie ou absence de besoin).
- Intervalle de 45+ jours = rupture du rythme antérieur → risque de rattrapage.

**FILTRAGE OUTLIERS:**
- 1u (26-06-2024): Commande test/erreur → à ignorer
- 300u (12-06-2024): Pic N-1 pour cette période (juin) → non saisonnier pour octobre
- 200u (récent × 2): Tendance Q3 2025, plus stable que N-1
- 0u (23-09-2025): Anomalie à revoir, probablement non-enregistrement

**SAISONNALITÉ:**
- N-1 octobre: 200u + septembre 30: 200u = Q3-Q4 plus actif (~150-200u/mois)
- Récent conforte cette tendance (200u × 2 en août-septembre)
- Impact faible car données limitées et irrégularité structurelle du produit

**TENDANCE IMMÉDIATE:**
- Pic récent: 200u confirmé deux fois → baseline = ~150u (moyenne excluyant outliers extrêmes)
- Pas de baisse nette contrairement à N-1 → maintien de la demande Q3-Q4

**SYNTHÈSE DÉCISION:**
- Contexte: Lundi de prédiction = jour de commande possible (plusieurs commandes N-1 le lundi)
- Baseline N-1 pour octobre ~100-125u → Baseline récente ~200u
- Moyenne pondérée: 60% données récentes (200u) + 40% saisonnalité N-1 (100u) ≈ 150u
- Recommandation: **150u** (entre conservative et trend-following)
- Confiance "medium" car données partielles et irrégularité structurelle du produit


</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1809] LD SAUCE BEARNAISE 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-23 06:58:29: 0u
- 2025-08-29 12:31:54: 200u
- 2025-08-07 09:53:40: 200u

**📅 Commandes N-1 (même période année dernière):**
- 2024-09-30 06:28:38: 200u
- 2024-09-09 07:37:51: 150u
- 2024-08-14 07:53:18: 75u
- 2024-06-26 09:38:12: 1u
- 2024-06-12 06:17:25: 300u
- 2024-05-27 07:47:39: 75u
- 2024-05-03 06:34:29: 75u
- 2024-04-17 06:38:21: 100u
- 2024-03-28 07:59:23: 75u
- 2024-03-18 14:18:31: 100u
- 2024-02-23 12:36:35: 50u
- 2024-02-02 07:47:31: 50u

**✅ Quantité LLM**: 150u (confidence: medium)
**📊 Quantité Réelle**: 200u

</details>




---

## False Positives (10)

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
| [PF1799] LD MAYONNAISE OEUFS 250ML WECK | 200 | Stock prédit: 100.9u (19j restants) → prédit 200u mais non commandé |
| [PF1803] LD SAUCE TARTARE 250ML WECK | 55 | Stock prédit: 0.4u (0j restants) → prédit 55u mais non commandé |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 200 | Stock prédit: 100.9u (19j restants) → prédit 200u mais non commandé |
| [PF2938] LD FR TARTINAD BIO AUBERGI 200 | 200 | Stock prédit: 84.8u (14j restants) → prédit 200u mais non commandé |
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 150 | Stock prédit: 122.9u (30j restants) → prédit 150u mais non commandé |
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 175 | Stock prédit: 100.9u (19j restants) → prédit 175u mais non commandé |
| [PF1194] GF VIN FINES HERBES WECK 330ML | 153 | Stock prédit: 34.9u (13j restants) → prédit 153u mais non commandé |
| [PF0193] GF VIN ANCIENNE JERRYCAN 5L | 25 | Stock prédit: 4.5u (10j restants) → prédit 25u mais non commandé |
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 150 | Stock prédit: 74.8u (28j restants) → prédit 150u mais non commandé |
| [PF1193] GF VIN TOMATE WECK 330ML | 75 | Stock prédit: -73.9u (-39j restants) → prédit 75u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T10:09:38.293Z*
