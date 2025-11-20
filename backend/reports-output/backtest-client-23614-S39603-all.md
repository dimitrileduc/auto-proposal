# Rapport Backtest - Client Alnatura Produktions- und Handels GmbH, Invoice Address

## Contexte

- **Client** : Alnatura Produktions- und Handels GmbH, Invoice Address (ID: 23614)
- **Commande réelle** : S39603
- **Date commande** : 2025-10-08 06:27:53
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 5
- **Tokens**: 10,908 input + 2,810 output = 13,718 total
- **Coût**: $0.0749 (~7.49¢)
- **Coût par produit LLM**: $0.0150


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 37.5% | 8 produits prédits, 3 corrects |
| **Rappel** | 60.0% | 5 produits réels, 3 détectés |
| **F1-Score** | 46.2% | Score équilibré global |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV102] LV Karot. Ingwer Aufstrich 180g DE | 300 | 300 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV105] LV Tomate Basil Aufstr 180g | 300 | 300 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |
| [LV106] LV Oliven Aufstrich 180g DE | 300 | 300 | 0.0 | 0.0% | 🎯 exact | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [LV102] LV Karot. Ingwer Aufstrich 180g DE</strong> - LLM: 300u vs Médiane: 300u (Réel: 300u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 300u (confidence: low)
- 📊 **Baseline N-1**: 300u
- 📊 **Médiane**: 300u
- ✅ **Réel commandé**: 300u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - une seule commande observée
- **Saisonnalité**: none
- **Tendance**: Impossible à déterminer - historique trop limité
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**CONTEXTE CRITIQUE : Historique extrêmement limité**

Avec une seule commande dans l'historique (300u le 26/08/2025), la prédiction repose sur des hypothèses fragiles :

**1. ANALYSE RYTHMIQUE :**
- Une seule observation = impossible d'identifier un pattern fiable
- Intervalle jusqu'à la date de prédiction : 43 jours (26 août → 8 octobre)
- Ce délai suggère soit un cycle mensuel (~30-45j), soit une irrégularité totale

**2. ABSENCE DE RÉFÉRENCES :**
- Aucune donnée N-1 pour valider un effet saisonnier automnal
- Aucune série pour détecter tendance ou outliers
- Produit spécifique (Carotte-Gingembre 180g DE) = niche potentielle avec demande erratique

**3. LOGIQUE DE DÉCISION :**
En l'absence totale de pattern, j'applique le principe de **continuité de la demande** :
- La dernière commande (300u) devient la baseline par défaut
- Hypothèse : le client maintient un niveau de stock similaire
- Pas d'élément suggérant une variation (ni promotion, ni rupture visible)

**RISQUES IDENTIFIÉS :**
- Si commande unique = test produit → prochaine commande peut être 0 ou très différente
- Si cycle réel > 45j → prédiction prématurée
- Si client commande en fonction de ventes réelles → haute volatilité possible

**CONCLUSION :** Je recommande **300 unités** par continuité, mais avec une **confiance faible** nécessitant un ajustement rapide dès nouvelles données disponibles.

</details>




---

## False Positives (5)

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
| [LV160] LV Tartinade Aubergine 190g | 300 | Stock prédit: 128.6u (25j restants) → prédit 300u mais non commandé |
| [LV103] LV Mango Curry Aufstrich 180g | 300 | Stock prédit: -42.9u (-4j restants) → prédit 300u mais non commandé |
| [LV104] LV Paprika Chili Aufstri 180g DE | 300 | Stock prédit: -128.6u (-10j restants) → prédit 300u mais non commandé |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 300 | Stock prédit: -218.9u (-20j restants) → prédit 300u mais non commandé |
| [LV341] LV Zwiebel Aufstrich 180g | 300 | Stock prédit: 68.8u (18j restants) → prédit 300u mais non commandé |


---

## False Negatives (2)

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
| [LV343] LV Toskana Aufstrich 180g | 300 | Jamais commandé avant dans les 120j précédents (pas d'historique) |
| [LV347] LV Trüffel Aufstrich 180g DE | 150 | Jamais commandé avant dans les 120j précédents (pas d'historique) |


---

*Rapport généré automatiquement le 2025-11-20T09:02:32.272Z*
