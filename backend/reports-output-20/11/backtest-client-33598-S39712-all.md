# Rapport Backtest - Client COLRUYT FOOD RETAIL NV NEW

## Contexte

- **Client** : COLRUYT FOOD RETAIL NV NEW (ID: 33598)
- **Commande réelle** : S39712
- **Date commande** : 2025-10-14 13:24:27
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 24
- **Tokens**: 49,248 input + 5,742 output = 54,990 total
- **Coût**: $0.2339 (~23.39¢)
- **Coût par produit LLM**: $0.0097


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 11.8% | 34 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 21.1% | Score équilibré global |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV136] LV Tartinade Betterave 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV135] LV Tartinade Basilico 190g | 100 | 100 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 48 | 48 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |


### 🤖 Détails des Prédictions LLM (4 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 100u vs Médiane: N/Au (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: high)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
225u

**🧠 Raisonnement LLM:**
Les données montrent une demande de fond très stable à 100 unités, tant en N-1 qu'en période récente (4 commandes sur 5 à exactement 100u). La commande de 225u en juillet est clairement exceptionnelle (probablement liée à un événement estival ou promotion), et n'a pas d'équivalent dans le pattern. Aucune saisonnalité marquée détectée, la demande récurrente est cohérente et prévisible à 100 unités.

</details>


<details>
<summary><strong>2. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 100u vs Médiane: N/Au (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: medium)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Les données montrent une parfaite régularité : 100 unités commandées à chaque fois (N-1 en octobre, et période récente en août et septembre). Aucun outlier détecté, aucune saisonnalité marquée visible. La demande de fond semble stable autour de 100 unités par commande mensuelle. Je recommande donc 100 unités avec une confiance moyenne, car bien que les données soient cohérentes, leur volume limité ne permet pas une confiance maximale.

</details>


<details>
<summary><strong>3. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 100u vs Médiane: N/Au (Réel: 100u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 100u (confidence: medium)
- 📊 **Baseline N-1**: 100u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 100u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Les données montrent une demande très régulière et stable de 100 unités par commande sur toute la période observée (N-1 et 3 derniers mois), avec une fréquence mensuelle constante. Aucune saisonnalité marquée ni tendance à la hausse ou à la baisse n'est détectable. La prédiction de 100u correspond à la médiane et au pattern observé, avec une confiance medium due au nombre limité de points de données historiques.

</details>


<details>
<summary><strong>4. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 48u vs Médiane: N/Au (Réel: 48u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 48u (confidence: low)
- 📊 **Baseline N-1**: 48u
- 📊 **Médiane**: N/Au
- ✅ **Réel commandé**: 48u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: N/A

**📈 Tendance détectée:**
stable

**🔍 Outliers détectés:**
Aucun

**🧠 Raisonnement LLM:**
Absence totale de données N-1 et seulement 2 commandes récentes identiques (48u) espacées de ~2 mois. Aucun pattern saisonnier détectable. Je retiens la médiane récente de 48u comme demande de fond probable, mais la confiance est faible vu le manque d'historique pour valider la récurrence de cette demande.

</details>




---

## False Positives (30)

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
| [PF3259] EVD MOUTARDE FORTE 350 GR | 3900 | Stock prédit: 3900.0u (30j restants) → prédit 3900u mais non commandé |
| [PF3302] BONI BIO MAYONNAISE 500ML | 110 | Stock prédit: 14.3u (0j restants) → prédit 110u mais non commandé |
| [PF1654] ECONOM COLRUYT MOUTARDE 2,1 Kg | 336 | Stock prédit: 237.4u (9j restants) → prédit 336u mais non commandé |
| [PF1503] BONI VINAI MOUTARDE 450ML | 126 | Stock prédit: 37.1u (1j restants) → prédit 126u mais non commandé |
| [PF1502] BONI VINAI FINE HERBE 450ML | 252 | Stock prédit: -164.3u (-1j restants) → prédit 252u mais non commandé |
| [PF1501] BONI VINAI CIBOULETTE 450ML | 378 | Stock prédit: 137.0u (2j restants) → prédit 378u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 80 | Stock prédit: 61.4u (16j restants) → prédit 80u mais non commandé |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 27 | Stock prédit: 22.0u (22j restants) → prédit 27u mais non commandé |
| [LV160] LV Tartinade Aubergine 190g | 100 | Stock prédit: 67.2u (10j restants) → prédit 100u mais non commandé |
| [LV161] LV Tartinade Mangue curry 190g | 100 | Stock prédit: 50.2u (5j restants) → prédit 100u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 100 | Stock prédit: 66.1u (9j restants) → prédit 100u mais non commandé |
| [LV162] LV Tartinade Tomato Basilico 190g | 100 | Stock prédit: 64.0u (8j restants) → prédit 100u mais non commandé |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 100 | Stock prédit: 38.6u (8j restants) → prédit 100u mais non commandé |
| [LV209] LV Confit de Figues Bio 150g (bocal weck) | 100 | Stock prédit: -75.0u (-6j restants) → prédit 100u mais non commandé |
| [LV339] LV Tripack apéro | 184 | Stock prédit: -138.0u (-6j restants) → prédit 184u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 80 | Stock prédit: 36.2u (15j restants) → prédit 80u mais non commandé |
| [LV147] LV Sauce Cocktail 200 ml | 50 | Stock prédit: 22.6u (15j restants) → prédit 50u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 100 | Stock prédit: 10.0u (3j restants) → prédit 100u mais non commandé |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 126 | Stock prédit: 30.8u (11j restants) → prédit 126u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 100 | Stock prédit: -13.3u (-4j restants) → prédit 100u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 50 | Stock prédit: 1.0u (0j restants) → prédit 50u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 48 | Stock prédit: 4.3u (3j restants) → prédit 48u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 56 | Stock prédit: 5.0u (3j restants) → prédit 56u mais non commandé |
| [LV345] LV Spread KIDS 200ml Organic | 100 | Stock prédit: -83.0u (-24j restants) → prédit 100u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 100 | Stock prédit: 13.5u (7j restants) → prédit 100u mais non commandé |
| [LV342] LV Organic Broccoli Spread 190 g | 125 | Stock prédit: -97.4u (-26j restants) → prédit 125u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 50 | Stock prédit: -18.8u (-24j restants) → prédit 50u mais non commandé |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 56 | Stock prédit: -34.8u (-34j restants) → prédit 56u mais non commandé |
| [PF1626] BONI VINAI MIEL MOUTARDE 450ML | 126 | Stock prédit: -191.2u (-61j restants) → prédit 126u mais non commandé |
| [PF1624] BONI VINAIGRETTE MANGUE 450ML | 625 | Stock prédit: -208.5u (-19j restants) → prédit 625u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T19:59:51.614Z*
