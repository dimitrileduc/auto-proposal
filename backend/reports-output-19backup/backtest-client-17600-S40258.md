# Rapport Backtest - Client SDP Rungis

## Contexte

- **Client** : SDP Rungis (ID: 17600)
- **Commande réelle** : S40258
- **Date commande** : 2025-11-12 08:36:42
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 31
- **Tokens**: 19,965 input + 26,571 output = 46,536 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 17.6% | 17 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
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
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
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
| [LV311] LV BIO Tartin'apero Basilico SDP 200 ml  | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV363] LV BIO Tartin'apero Avocat 180g  | 434 | 434 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml | 200 | 200 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [LV311] LV BIO Tartin'apero Basilico SDP 200 ml </strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 406u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 15 à 20 jours
- **Saisonnalité**: weak
- **Tendance**: Hausse légère à 434u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une accélération de la fréquence (8 jours entre les deux dernières commandes et 20 jours précédemment). Avec une dernière commande au 3 novembre, le cycle moyen de 2-3 semaines place la prochaine commande durant la seconde quinzaine de novembre, soit dans les 30 prochains jours. La quantité de 434u est retenue comme le volume standard récent.

</details>


<details>
<summary><strong>2. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - LLM: 434u vs Médiane: 434u (Réel: 434u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 434u (confidence: high)
- 📊 **Baseline N-1**: 434u
- 📊 **Médiane**: 434u
- ✅ **Réel commandé**: 434u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Commande hebdomadaire (intervalle 6 à 7 jours)
- **Saisonnalité**: none
- **Tendance**: Stable à 434u
- **Outliers détectés**: 864u, 4u

**🧠 Raisonnement LLM:**
L'historique récent montre un rythme hebdomadaire strict tous les 6 à 7 jours avec une quantité constante de 434 unités. La dernière commande datant du 20 octobre, le cycle indique une rupture imminente ou un besoin immédiat pour couvrir les 30 prochains jours. Les données d'août sont ignorées car elles constituent des anomalies par rapport à la stabilité constatée en octobre.

</details>


<details>
<summary><strong>3. [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml</strong> - LLM: 200u vs Médiane: 200u (Réel: 200u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 200u (confidence: high)
- 📊 **Baseline N-1**: 200u
- 📊 **Médiane**: 200u
- ✅ **Réel commandé**: 200u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle moyen de 25 à 30 jours (cycle mensuel)
- **Saisonnalité**: none
- **Tendance**: Stable à 200u
- **Outliers détectés**: 600u, 400u

**🧠 Raisonnement LLM:**
L'historique montre une commande constante de 200 unités environ une fois par mois. La dernière commande datant du 8 octobre, le cycle de 30 jours arrive à échéance autour du 7-11 novembre. Une nouvelle commande de 200 unités est donc imminente.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV311] LV BIO Tartin'apero Basilico SDP 200 ml </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 11:51:44: 434u
- 2025-10-14 13:50:03: 350u
- 2025-10-08 11:33:10: 434u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-10 12:10:09: 350u
- 2024-08-07 07:54:26: 200u
- 2024-04-24 08:56:28: 350u
- 2023-12-19 08:25:50: 350u

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>2. [LV363] LV BIO Tartin'apero Avocat 180g </strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-20 11:56:31: 434u
- 2025-10-14 13:50:03: 434u
- 2025-10-08 11:33:10: 434u
- 2025-08-20 10:22:31: 864u
- 2025-08-20 10:22:31: 4u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 434u (confidence: high)
**📊 Quantité Réelle**: 434u

</details>


<details>
<summary><strong>3. [LV312] LV "CLASSIQUE" WECK Mayonnaise à la TRUFFE 250ml</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 11:33:10: 200u
- 2025-09-10 09:37:56: 200u
- 2025-09-04 09:10:58: 200u
- 2025-08-19 07:26:59: 200u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-29 15:21:52: 200u
- 2024-10-10 12:10:09: 200u
- 2024-09-11 07:42:30: 600u
- 2024-08-08 07:00:55: 200u
- 2024-06-11 08:46:37: 200u
- 2024-04-24 08:56:28: 200u
- 2024-04-02 13:39:05: 200u
- 2024-03-13 08:07:55: 200u
- 2024-03-06 09:03:21: 200u
- 2023-12-19 08:25:50: 400u

**✅ Quantité LLM**: 200u (confidence: high)
**📊 Quantité Réelle**: 200u

</details>




---

## False Positives (14)

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
| [LV233] LV "CLASSIQUE" WECK Mayonnaise TOMATE séchées 250ml | 200 | Stock prédit: 44.4u (2j restants) → prédit 200u mais non commandé |
| [LV361] LV "CLASSIQUE" WECK Sauce BOURGUIGNONNE 250ml SDP | 200 | Stock prédit: 41.5u (2j restants) → prédit 200u mais non commandé |
| [LV235] LV "CLASSIQUE" WECK Sauce BEARNAISE* 250ml | 400 | Stock prédit: -320.5u (-16j restants) → prédit 400u mais non commandé |
| [LV305] LV BIO Tartin'apero Tomato Basilico SDP 200 ml  | 434 | Stock prédit: -130.7u (-6j restants) → prédit 434u mais non commandé |
| [LV234] LV "CLASSIQUE" WECK Mayonnaise aus œufs 250ml | 400 | Stock prédit: 2.4u (0j restants) → prédit 400u mais non commandé |
| [LV313] LV "CLASSIQUE" WECK Sauce COCKTAIL 250ml | 200 | Stock prédit: 41.0u (8j restants) → prédit 200u mais non commandé |
| [LV236] LV "CLASSIQUE" WECK Sauce TARTARE 250ml | 200 | Stock prédit: -95.5u (-10j restants) → prédit 200u mais non commandé |
| [LV303] LV BIO  Tartin'apero Mangue curry SDP 200 ml  | 434 | Stock prédit: -207.3u (-10j restants) → prédit 434u mais non commandé |
| [LV314] LV "CLASSIQUE" WECK Sauce AIOLI PESTO 250ml | 200 | Stock prédit: -122.9u (-25j restants) → prédit 200u mais non commandé |
| [LV334] LA VACHE TRAD Sauce au poivre bocal 250ml WECK SDP | 200 | Stock prédit: -284.3u (-39j restants) → prédit 200u mais non commandé |
| [LV307] LV BIO Tartin'apero Houmous type SDP 200 ml  | 350 | Stock prédit: 19.2u (3j restants) → prédit 350u mais non commandé |
| [LV tritart 135] LV BIO SET 3 X 135G TARTIN'APERO SDP | 256 | Stock prédit: -157.3u (-25j restants) → prédit 256u mais non commandé |
| [LV337] LV BIO Tartin'apero TOMATE AIL DES OURS SDP 200ml | 434 | Stock prédit: -266.7u (-25j restants) → prédit 434u mais non commandé |
| [LV335] LA VACHE TRAD Sauce Andalouse bocal 250ml WECK SDP | 200 | Stock prédit: 56.1u (32j restants) → prédit 200u mais non commandé |


---

## False Negatives (1)

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
| [LV362] LV BIO Tartin'apero Olives Câpres Tomate SDP 200 ml bio (copie) | 434 | Stock: -4.0u (0j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-18T21:31:06.442Z*
