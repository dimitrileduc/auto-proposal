# Rapport Backtest - Client DUMORTIER   ETS.

## Contexte

- **Client** : DUMORTIER   ETS. (ID: 3894)
- **Commande réelle** : S40206
- **Date commande** : 2025-11-07 12:29:40
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 4
- **Tokens**: 5,481 input + 7,681 output = 13,162 total


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
| **MAE** | 24.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 27.3% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -27.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [PF0516] YVALLI PROVENCALE 2,5 KG BOC | 48 | 96 | 48.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [PF0077] FILOU PROVENCALE 5 L | 80 | 80 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - LLM: 48u vs Médiane: 48u (Réel: 96u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: high)
- 📊 **Baseline N-1**: 48u
- 📊 **Médiane**: 48u
- ✅ **Réel commandé**: 96u
- 📉 **Erreur LLM**: 48u (50.0%)
- 📉 **Erreur Médiane**: 48u (50.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier (intervalle moyen de 33 jours)
- **Saisonnalité**: none
- **Tendance**: Stabilisation à 48u après une baisse ponctuelle à 24u
- **Outliers détectés**: 72u, 24u

**🧠 Raisonnement LLM:**
L'historique montre une grande régularité avec une commande par mois, généralement de 48 unités. La dernière commande date du 13 octobre 2025 (il y a 24 jours). En suivant le cycle moyen constaté de 33 jours, la prochaine commande est attendue autour du 15-18 novembre 2025, ce qui se situe dans la fenêtre de prévision des 30 prochains jours. La baisse à 24 unités observée en octobre est considérée comme un ajustement de stock ponctuel ou une commande partielle, le produit revenant systématiquement à sa valeur de fond de 48 unités (le standard observé sur 2024 et 2025).

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 80u vs Médiane: 80u (Réel: 80u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 80u (confidence: high)
- 📊 **Baseline N-1**: 80u
- 📊 **Médiane**: 80u
- ✅ **Réel commandé**: 80u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle variable de recharge de stock, environ tous les 35 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 80u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Étape 1 : Aucune anomalie identifiée ; toutes les commandes historiques (sauf une correction à 0) sont strictement de 80 unités, indiquant un conditionnement fixe (palette ou lot). Étape 2 : Aucune saisonnalité marquée sur le volume, le besoin est constant dès que le stock est épuisé. Étape 3 : La tendance est extrêmement stable avec un volume récurrent de 80u. Étape 4 : La dernière commande a eu lieu le 13/10/2025. En se basant sur l'intervalle récent (34 jours entre septembre et octobre) et l'historique N-1 (commande le 04/11/2024 après 49 jours), une commande est prévue entre le 16/11 et le 30/11. Cela tombe dans la fenêtre des 30 prochains jours. La quantité recommandée est de 80u, correspondant au standard immuable du client.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 13:02:08: 24u
- 2025-09-09 08:57:38: 48u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-04 10:58:46: 48u
- 2024-09-16 12:02:38: 48u
- 2024-09-05 12:57:09: 48u
- 2024-06-17 07:47:11: 72u
- 2024-05-31 06:53:10: 72u
- 2024-04-26 07:22:05: 72u
- 2024-03-14 09:43:20: 48u
- 2024-02-28 12:33:46: 48u
- 2024-01-24 10:59:31: 48u
- 2024-01-09 15:01:54: 48u
- 2023-12-06 12:03:44: 48u

**✅ Quantité LLM**: 48u (confidence: high)
**📊 Quantité Réelle**: 96u

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-13 13:02:08: 80u
- 2025-09-09 08:57:38: 80u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-04 10:58:46: 80u
- 2024-09-16 12:02:38: 80u
- 2024-08-30 09:51:05: 80u
- 2024-08-05 13:37:34: 80u
- 2024-06-17 07:47:11: 80u
- 2024-04-26 07:22:50: 80u
- 2024-03-14 09:42:44: 80u
- 2024-02-28 12:31:36: 80u
- 2024-01-24 10:58:40: 80u
- 2024-01-09 15:01:54: 0u
- 2024-01-09 15:01:24: 80u
- 2023-12-06 12:04:56: 80u

**✅ Quantité LLM**: 80u (confidence: high)
**📊 Quantité Réelle**: 80u

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
| [PF0509] YVALLI GR BOUL TOMATE 2,5 KG | 20 | Stock prédit: 9.6u (21j restants) → prédit 20u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T20:00:46.534Z*
