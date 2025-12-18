# Rapport Backtest - Client K&F DE PAUW

## Contexte

- **Client** : K&F DE PAUW (ID: 73359)
- **Commande réelle** : S40290
- **Date commande** : 2025-11-12 13:11:25
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 17
- **Tokens**: 25,747 input + 5,145 output = 30,892 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 4.3% | 23 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 8.3% | Score équilibré global |

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
| [LV160] LV Tartinade Aubergine 190g | 31 | 31 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (1 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 31u vs Médiane: 31u (Réel: 31u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 31u (confidence: high)
- 📊 **Baseline N-1**: 31u
- 📊 **Médiane**: 31u
- ✅ **Réel commandé**: 31u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle hebdomadaire à 10 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 31u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le produit présente une stabilité exceptionnelle avec 5 commandes consécutives de 31 unités exactement. Le rythme moyen entre les commandes est d'environ 8 à 10 jours. La dernière commande ayant eu lieu le lundi 3 novembre (il y a 8 jours), la date cible du mardi 11 novembre correspond parfaitement à la fenêtre de réapprovisionnement attendue selon le cycle observé (environ une commande par semaine avec légère dérive). La constance absolue du volume (31u) dicte la prédiction.

</details>




### 📊 Données d'Input LLM (1 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-11-03 09:31:25: 31u
- 2025-10-23 07:11:08: 31u
- 2025-10-14 14:36:52: 31u
- 2025-10-06 07:30:22: 31u
- 2025-09-22 12:46:11: 31u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 31u (confidence: high)
**📊 Quantité Réelle**: 31u

</details>




---

## False Positives (22)

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
| [LV146] LV Sauce Aïoli 200 ml | 12 | Stock prédit: 8.3u (15j restants) → prédit 12u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 12 | Stock prédit: 8.6u (17j restants) → prédit 12u mais non commandé |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 31 | Stock prédit: 16.8u (8j restants) → prédit 31u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 31 | Stock prédit: 19.6u (12j restants) → prédit 31u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 31 | Stock prédit: 16.8u (8j restants) → prédit 31u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 31 | Stock prédit: 19.6u (12j restants) → prédit 31u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 31 | Stock prédit: 14.0u (5j restants) → prédit 31u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 4 | Stock prédit: -0.9u (-3j restants) → prédit 4u mais non commandé |
| [LV330] LV BIO Tartinade Toscana 190g | 31 | Stock prédit: -5.5u (-2j restants) → prédit 31u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 62 | Stock prédit: -17.7u (-4j restants) → prédit 62u mais non commandé |
| [LV331] LV Tartinade Lentils Balsamico 190g | 31 | Stock prédit: -8.9u (-4j restants) → prédit 31u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 31 | Stock prédit: -8.9u (-4j restants) → prédit 31u mais non commandé |
| [LV357] LV Tartinade BIO Asperge 190g | 31 | Stock prédit: -8.9u (-4j restants) → prédit 31u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 9 | Stock prédit: 1.2u (3j restants) → prédit 9u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 31 | Stock prédit: -2.0u (-1j restants) → prédit 31u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 10 | Stock prédit: -1.5u (-5j restants) → prédit 10u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 31 | Stock prédit: 2.4u (2j restants) → prédit 31u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 31 | Stock prédit: 2.4u (2j restants) → prédit 31u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 31 | Stock prédit: 2.4u (2j restants) → prédit 31u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 62 | Stock prédit: 5.2u (3j restants) → prédit 62u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Stock prédit: -2.4u (-33j restants) → prédit 1u mais non commandé |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Stock prédit: -2.4u (-33j restants) → prédit 1u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T11:17:58.565Z*
