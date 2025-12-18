# Rapport Backtest - Client COLRUYT FOOD RETAIL NV NEW

## Contexte

- **Client** : COLRUYT FOOD RETAIL NV NEW (ID: 33598)
- **Commande réelle** : S39712
- **Date commande** : 2025-10-14 13:24:27
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 26
- **Tokens**: 31,894 input + 43,534 output = 75,428 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 14.3% | 28 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 25.0% | Score équilibré global |

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
| Exact Match (=0u) | 4 | Égalité parfaite |
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

## True Positives (4)

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
| [LV130] LV BIO Tartinade Paprika Chili 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 48 | 48 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: 100u
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle régulier variant entre 14 et 29 jours (moyenne/médiane ~21j), principalement le mardi ou mercredi
- **Saisonnalité**: weak
- **Tendance**: Stable à 100u
- **Outliers détectés**: 225u

**🧠 Raisonnement LLM:**
L'analyse de l'historique montre une stabilité quasi parfaite du volume de commande à 100 unités par livraison, à l'exception d'un pic ponctuel en juillet (225u) traité comme outlier. Le cycle de commande moyen est de 21 jours. La dernière commande ayant eu lieu le 08/10, la prochaine est statistiquement prévue autour du 29/10 (soit dans 16 jours), ce qui entre dans la fenêtre des 30 jours. Bien qu'un second cycle puisse théoriquement tomber juste à la fin des 30 jours (vers le 19/11), seule la prochaine commande de 100u est recommandée conformément à la règle de non-cumul.

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: 100u
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel régulier d'environ 27 à 34 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 100u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse montre une régularité parfaite tant en volume qu'en fréquence. ÉTAPE 1: Aucune commande anormale n'est détectée, le volume est constant à 100u. ÉTAPE 2: La comparaison avec octobre N-1 confirme la stabilité du besoin (100u). ÉTAPE 3: Le cycle observé est d'environ 30 jours. ÉTAPE 4: La dernière commande remontant au 09 septembre (il y a 34 jours), le client est en retard sur son cycle habituel. Une commande de 100u est donc extrêmement probable dans les prochains jours pour réapprovisionner le stock. Conformément aux règles, seule la prochaine commande est prédite.

</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 100u vs Médiane: 100u (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: 100u
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel variable entre 20 et 36 jours
- **Saisonnalité**: none
- **Tendance**: Stable à 100u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
Le client présente un comportement de commande extrêmement stable avec une quantité fixe de 100u à chaque occurrence. Bien que l'intervalle entre les commandes varie légèrement (moyenne de ~28-30 jours), le temps écoulé depuis la dernière commande (34 jours) indique une commande imminente dans la fenêtre de 30 jours. La comparaison avec N-1 (100u en octobre 2024) confirme la stabilité du besoin.

</details>


<details>
<summary><strong>4. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 48u vs Médiane: 48u (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: low)
- 📊 **Baseline N-1**: 48u
- 📊 **Médiane**: 48u
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle d'environ 56 jours (8 semaines) identifié sur les commandes de juillet et septembre
- **Saisonnalité**: none
- **Tendance**: Stable à 48u
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique montre deux commandes identiques de 48 unités espacées précisément de 8 semaines (56 jours), systématiquement un mardi. La dernière commande ayant eu lieu le 09/09/2025, la prochaine commande théorique est prévue pour le mardi 04/11/2025. Cette date se situe dans la fenêtre d'analyse des 30 prochains jours (jusqu'au 12/11/2025). La quantité recommandée correspond au volume habituel observé. Le niveau de confiance est faible en raison du très petit nombre de points de données.

</details>




### 📊 Données d'Input LLM (4 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-10-08 06:27:45: 100u
- 2025-09-16 09:13:36: 100u
- 2025-09-02 11:49:23: 100u
- 2025-08-13 10:56:00: 100u
- 2025-07-15 11:13:22: 225u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 11:14:44: 100u

**✅ Quantité LLM**: 100u (confidence: high)
**📊 Quantité Réelle**: 100u

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 09:42:43: 100u
- 2025-08-13 10:56:00: 100u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-01 08:04:30: 100u

**✅ Quantité LLM**: 100u (confidence: high)
**📊 Quantité Réelle**: 100u

</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 09:42:43: 100u
- 2025-08-20 07:51:02: 100u
- 2025-07-15 11:13:22: 100u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 11:14:44: 100u

**✅ Quantité LLM**: 100u (confidence: high)
**📊 Quantité Réelle**: 100u

</details>


<details>
<summary><strong>4. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-09-09 09:42:43: 48u
- 2025-07-15 11:13:22: 48u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 48u (confidence: low)
**📊 Quantité Réelle**: 48u

</details>




---

## False Positives (24)

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
| [PF3302] BONI BIO MAYONNAISE 500ML | 220 | Stock prédit: 37.6u (1j restants) → prédit 220u mais non commandé |
| [PF1654] ECONOM COLRUYT MOUTARDE 2,1 Kg | 336 | Stock prédit: 261.3u (10j restants) → prédit 336u mais non commandé |
| [PF1503] BONI VINAI MOUTARDE 450ML | 126 | Stock prédit: 58.6u (2j restants) → prédit 126u mais non commandé |
| [PF1502] BONI VINAI FINE HERBE 450ML | 252 | Stock prédit: -63.0u (0j restants) → prédit 252u mais non commandé |
| [PF1501] BONI VINAI CIBOULETTE 450ML | 378 | Stock prédit: 195.6u (3j restants) → prédit 378u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 80 | Stock prédit: 65.0u (17j restants) → prédit 80u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 100 | Stock prédit: 73.5u (11j restants) → prédit 100u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 100 | Stock prédit: 59.8u (5j restants) → prédit 100u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 100 | Stock prédit: 72.6u (10j restants) → prédit 100u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 100 | Stock prédit: 70.9u (9j restants) → prédit 100u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 100 | Stock prédit: 42.7u (8j restants) → prédit 100u mais non commandé |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 100 | Stock prédit: -62.5u (-5j restants) → prédit 100u mais non commandé |
| [LV339] LV Tripack apéro | 184 | Stock prédit: -115.0u (-5j restants) → prédit 184u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 100 | Stock prédit: 12.4u (3j restants) → prédit 100u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 126 | Stock prédit: 32.6u (11j restants) → prédit 126u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 100 | Stock prédit: -11.2u (-3j restants) → prédit 100u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 50 | Stock prédit: 1.9u (1j restants) → prédit 50u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 48 | Stock prédit: 4.9u (4j restants) → prédit 48u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 56 | Stock prédit: 5.7u (4j restants) → prédit 56u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 100 | Stock prédit: -80.9u (-23j restants) → prédit 100u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 100 | Stock prédit: 14.5u (8j restants) → prédit 100u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 125 | Stock prédit: -96.1u (-26j restants) → prédit 125u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 56 | Stock prédit: -34.6u (-33j restants) → prédit 56u mais non commandé |
| [PF1624] BONI VINAIGRETTE MANGUE 450ML | 625 | Stock prédit: -208.1u (-18j restants) → prédit 625u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T18:55:31.233Z*
