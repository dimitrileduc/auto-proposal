# Rapport Backtest - Client COLRUYT FOOD RETAIL NV NEW

## Contexte

- **Client** : COLRUYT FOOD RETAIL NV NEW (ID: 33598)
- **Commande réelle** : S40243
- **Date commande** : 2025-11-12 07:34:47
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 33
- **Tokens**: 19,479 input + 13,698 output = 33,177 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 15.8% | 19 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 26.1% | Score équilibré global |

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
| [LV160] LV Tartinade Aubergine 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV132] LV Tartinade Houmous type 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (3 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: 100u
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle régulier d'environ 21 jours (3 semaines)
- **Saisonnalité**: none
- **Tendance**: Stable à 100u
- **Outliers détectés**: 150u

**🧠 Raisonnement LLM:**
Le rythme de commande est très précis avec un intervalle moyen de 20 à 22 jours. La dernière commande ayant eu lieu il y a exactement 21 jours, et le volume étant d'une stabilité remarquable (100u), une commande est imminente. L'historique N-1 confirme également ce volume de 100u par commande.

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: 100u
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Intervalle de 20 à 33 jours (moyenne environ 26 jours), commandes majoritairement les mardis et mercredis
- **Saisonnalité**: none
- **Tendance**: Stable à 100u
- **Outliers détectés**: 200u

**🧠 Raisonnement LLM:**
L'analyse montre une régularité forte avec un cycle moyen de 26 jours. La dernière commande datant du 21 octobre, la prochaine est prévue autour du 16 novembre, soit dans la fenêtre des 30 prochains jours. Les quantités sont stables à 100 unités après avoir écarté l'exception de août.

</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: 100u
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 30 à 45 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 100u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre une commande stable de 100u environ tous les mois (20-30 jours d'intervalle). La dernière commande datant du 16 septembre, et nous étant le 11 novembre, le cycle habituel suggère un renouvellement de stock immédiat ou imminent sous 30 jours pour maintenir le niveau de service.

</details>




### 📊 Données d'Input LLM (3 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 08:23:57: 100u
- 2025-10-08 06:27:45: 100u
- 2025-09-16 09:13:36: 100u
- 2025-08-26 09:29:26: 100u
- 2025-08-20 07:51:02: 150u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-08 10:15:57: 100u
- 2024-10-15 08:44:39: 100u
- 2024-10-08 11:14:44: 100u

**✅ Quantité LLM**: 100u (confidence: high)
**📊 Quantité Réelle**: 100u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-21 08:23:57: 100u
- 2025-10-08 06:27:45: 100u
- 2025-09-16 09:13:36: 100u
- 2025-08-13 10:56:00: 200u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-15 08:44:39: 100u
- 2024-10-08 11:14:44: 100u

**✅ Quantité LLM**: 100u (confidence: high)
**📊 Quantité Réelle**: 100u

</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-16 09:13:36: 100u
- 2025-08-20 07:51:02: 100u

**📅 Commandes N-1 (même période année dernière):**
- 2024-11-08 10:15:57: 100u
- 2024-10-01 08:04:30: 100u

**✅ Quantité LLM**: 100u (confidence: high)
**📊 Quantité Réelle**: 100u

</details>




---

## False Positives (16)

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
| [PF3302] BONI BIO MAYONNAISE 500ML | 110 | Stock prédit: 116.9u (3j restants) → prédit 110u mais non commandé |
| [PF1503] BONI VINAI MOUTARDE 450ML | 126 | Stock prédit: 177.2u (7j restants) → prédit 126u mais non commandé |
| [PF1502] BONI VINAI FINE HERBE 450ML | 252 | Stock prédit: 667.8u (5j restants) → prédit 252u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 27 | Stock prédit: 14.1u (14j restants) → prédit 27u mais non commandé |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 100 | Stock prédit: 9.1u (1j restants) → prédit 100u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 100 | Stock prédit: -18.4u (-2j restants) → prédit 100u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 100 | Stock prédit: 11.9u (1j restants) → prédit 100u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 100 | Stock prédit: 42.2u (9j restants) → prédit 100u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 100 | Stock prédit: 32.2u (9j restants) → prédit 100u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 48 | Stock prédit: 23.6u (19j restants) → prédit 48u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 50 | Stock prédit: 24.6u (19j restants) → prédit 50u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 100 | Stock prédit: 9.0u (2j restants) → prédit 100u mais non commandé |
| [LV135] LV Tartinade Basilico 190g | 100 | Stock prédit: 8.5u (2j restants) → prédit 100u mais non commandé |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 48 | Stock prédit: 15.1u (12j restants) → prédit 48u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 80 | Stock prédit: 1.7u (0j restants) → prédit 80u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 100 | Stock prédit: -120.4u (-47j restants) → prédit 100u mais non commandé |


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
| [LV147] LV Sauce Cocktail 200 ml | 50 | Stock: 10.2u (12j restants) - filtré pour autre raison |


---

*Rapport généré automatiquement le 2025-12-18T21:31:52.617Z*
