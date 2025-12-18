# Rapport Backtest - Client CORA S.A.

## Contexte

- **Client** : CORA S.A. (ID: 38724)
- **Commande réelle** : S39998
- **Date commande** : 2025-10-29 13:29:02
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 16
- **Tokens**: 12,690 input + 4,542 output = 17,232 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.7% | 18 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 28.6% | Score équilibré global |

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
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 4.5% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 5.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
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

## True Positives (3)

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
| [JF037] JF BBQ SQUEEZE 300ML | 5 | 6 | 1.0 | 16.7% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF073] FIL BOULLETTES SAUCE TOMATE 800G BOCAL  | 8 | 8 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [JF071] FIL CARBONNADES 800G BOCAL  | 8 | 8 | 0.0 | 0.0% | 🎯 exact | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 5u vs Médiane: 4u (Réel: 6u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 5u (confidence: low)
- 📊 **Baseline N-1**: 4u
- 📊 **Médiane**: 4u
- ✅ **Réel commandé**: 6u
- 📉 **Erreur LLM**: 1u (16.7%)
- 📉 **Erreur Médiane**: 2u (33.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier avec alternance cycle court (5j) et cycle long (30j+)
- **Saisonnalité**: none
- **Tendance**: Baisse progressive (6u -> 5u -> 1u)
- **Outliers détectés**: 1u

**🧠 Raisonnement LLM:**
L'historique est limité et montre une instabilité. La dernière commande de 1u le 16/10 semble être un ajustement ou un reliquat exceptionnel (outlier bas) par rapport au volume habituel de 5-6u constaté en septembre. Étant donné l'intervalle de 12 jours depuis la dernière commande et le volume de fond précédent, une commande de 5u (quantité modale) est la plus probable pour reconstituer le stock tampon, malgré l'absence de pattern hebdomadaire strict.

</details>


<details>
<summary><strong>2. [JF073] FIL BOULLETTES SAUCE TOMATE 800G BOCAL </strong> - LLM: 8u vs Médiane: 8u (Réel: 8u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 8u (confidence: medium)
- 📊 **Baseline N-1**: 8u
- 📊 **Médiane**: 8u
- ✅ **Réel commandé**: 8u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Non-linéaire, environ 12 à 30 jours (moyenne 21 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 8u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une stabilité parfaite du volume commandé avec systématiquement 8 unités par commande sur les trois derniers événements. Bien que l'intervalle temporel soit irrégulier (passant d'un cycle court de 5 jours en début septembre à un cycle de 38 jours entre septembre et octobre), le besoin unitaire ne fluctue jamais. Étant donné que la dernière commande (16 oct) est relativement récente par rapport à la date de prédiction (28 oct), et en l'absence de données N-1 indiquant une saisonnalité, le maintien de la quantité nominale de 8 unités est l'option la plus statistiquement probable pour minimiser le MAPE.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF037] JF BBQ SQUEEZE 300ML</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 07:19:03: 1u
- 2025-09-08 07:10:00: 6u
- 2025-09-03 14:20:33: 5u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 5u (confidence: low)
**📊 Quantité Réelle**: 6u

</details>


<details>
<summary><strong>2. [JF073] FIL BOULLETTES SAUCE TOMATE 800G BOCAL </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-16 07:19:03: 8u
- 2025-09-08 07:10:00: 8u
- 2025-09-03 14:20:33: 8u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 8u (confidence: medium)
**📊 Quantité Réelle**: 8u

</details>




---

## False Positives (15)

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
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 13 | Stock prédit: 1.5u (2j restants) → prédit 13u mais non commandé |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 6 | Stock prédit: -0.0u (0j restants) → prédit 6u mais non commandé |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 15 | Stock prédit: 8.8u (13j restants) → prédit 15u mais non commandé |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 5 | Stock prédit: 2.8u (13j restants) → prédit 5u mais non commandé |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 6 | Stock prédit: 2.6u (12j restants) → prédit 6u mais non commandé |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 9 | Stock prédit: 0.1u (0j restants) → prédit 9u mais non commandé |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 5 | Stock prédit: -0.1u (0j restants) → prédit 5u mais non commandé |
| [JF009] JF SAUCE TARTARE 250ML WECK | 9 | Stock prédit: 0.0u (0j restants) → prédit 9u mais non commandé |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 11 | Stock prédit: 5.0u (13j restants) → prédit 11u mais non commandé |
| [JF068] FIL VOL AU VENT 800G BOCAL  | 12 | Stock prédit: 1.9u (3j restants) → prédit 12u mais non commandé |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 4 | Stock prédit: 1.1u (6j restants) → prédit 4u mais non commandé |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 5 | Stock prédit: 2.5u (11j restants) → prédit 5u mais non commandé |
| [JF035] JF BURGER SQUEEZE 300ML | 3 | Stock prédit: 0.4u (2j restants) → prédit 3u mais non commandé |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 7 | Stock prédit: -1.8u (-13j restants) → prédit 7u mais non commandé |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 21 | Stock prédit: -6.1u (-11j restants) → prédit 21u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:36:18.219Z*
