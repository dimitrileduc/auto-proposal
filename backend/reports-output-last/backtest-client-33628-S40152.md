# Rapport Backtest - Client LIDL BELGIE GMBH

## Contexte

- **Client** : LIDL BELGIE GMBH (ID: 33628)
- **Commande réelle** : S40152
- **Date commande** : 2025-11-05 14:53:47
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 3
- **Tokens**: 4,979 input + 16,774 output = 21,753 total


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
| **MAE** | 384.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 100.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 142.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
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
| [PF3327] DELUXE MAYONNAISE OEUFS 720ML WECK | 96 | 672 | 576.0 | 85.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF3328] DELUXE MIX SAUCES 250ML WECK | 288 | 96 | 192.0 | 200.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF3327] DELUXE MAYONNAISE OEUFS 720ML WECK</strong> - LLM: 96u vs Médiane: 400u (Réel: 672u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 96u (confidence: medium)
- 📊 **Baseline N-1**: 96u
- 📊 **Médiane**: 400u
- ✅ **Réel commandé**: 672u
- 📉 **Erreur LLM**: 576u (85.7%)
- 📉 **Erreur Médiane**: 272u (40.5%)

**🔍 Analyse LLM:**
- **Pattern temporel**: mensuel
- **Saisonnalité**: none
- **Tendance**: declining
- **Outliers détectés**: -80u, -80u

**🧠 Raisonnement LLM:**
Rupture de tendance majeure : demande passée de ~500u à 96u (-80%). Cycle mensuel identifié (28-40j). La date de prédiction est exactement dans cette fenêtre. Les données historiques sont obsolètes. La dernière commande (96u) est la seule valeur représentative du nouveau comportement client. Prédire cette valeur minimise le MAPE tout en respectant les règles agro B2B.

</details>


<details>
<summary><strong>2. [PF3328] DELUXE MIX SAUCES 250ML WECK</strong> - LLM: 288u vs Médiane: 384u (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 288u (confidence: high)
- 📊 **Baseline N-1**: 288u
- 📊 **Médiane**: 384u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 192u (200.0%)
- 📉 **Erreur Médiane**: 288u (300.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: 288u apparaît 4× (valeur dominante), 384u apparaît 3×. Le pic 864u est 2,25× supérieur à la dernière commande et 3× la valeur la plus fréquente - traité comme outlier exceptionnel (promotion/erreur). Commandes multiples mêmes jours (27/08, 14/08) suggèrent des besoins ponctuels, pas une tendance structurelle.
- **Saisonnalité**: none
- **Tendance**: stable
- **Outliers détectés**: -864u

**🧠 Raisonnement LLM:**
1) Cycle identifié: mensuel (~30-40j) plutôt que hebdomadaire, avec retour systematique aux 288u après pics. 2) Outlier rejeté: 864u n'est pas répété depuis 3 mois. 3) Dernière commande valide: 07/10/2025 (288u) représente la 'nouvelle normalité' post-période active d'août. 4) Stabilité B2B: en agroalimentaire, après un pic, les clients reviennent à leur niveau de base régulier. 5) Précision vs prudence: privilégier la valeur la plus probable (mode statistique) plutôt qu'une moyenne gonflée par l'outlier. La valeur récurrente 288u minimise le MAPE versus une estimation incertaine entre 288-384u.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF3327] DELUXE MAYONNAISE OEUFS 720ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:01:45: 96u
- 2025-08-28 07:33:10: 960u
- 2025-08-27 12:55:19: 384u
- 2025-08-27 06:03:24: 400u
- 2025-08-27 06:02:20: 560u

**📅 Commandes N-1 (même période année dernière):**
- 2024-08-26 08:31:02: 800u
- 2024-08-22 05:50:46: 1360u
- 2024-08-21 13:11:12: 640u
- 2024-08-20 11:56:36: 800u
- 2024-08-14 06:03:44: 320u
- 2024-08-14 06:03:13: 240u
- 2024-08-14 06:02:51: 480u

**✅ Quantité LLM**: 96u (confidence: medium)
**📊 Quantité Réelle**: 672u

</details>


<details>
<summary><strong>2. [PF3328] DELUXE MIX SAUCES 250ML WECK</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-07 09:01:45: 288u
- 2025-08-28 07:33:10: 864u
- 2025-08-27 12:55:19: 384u
- 2025-08-27 06:03:24: 384u
- 2025-08-27 06:02:20: 480u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-28 07:06:00: 384u
- 2024-08-26 08:31:02: 576u
- 2024-08-22 05:50:46: 672u
- 2024-08-21 13:11:12: 288u
- 2024-08-20 11:56:36: 480u
- 2024-08-14 06:03:44: 288u
- 2024-08-14 06:02:51: 288u

**✅ Quantité LLM**: 288u (confidence: high)
**📊 Quantité Réelle**: 96u

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
| [PF3279] KANIA BOULETTES TOMATE 800 GR (7404167) | 384 | Stock prédit: -163.6u (-6j restants) → prédit 384u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T08:08:46.092Z*
