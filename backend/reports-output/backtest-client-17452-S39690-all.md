# Rapport Backtest - Client HYGIENA SA

## Contexte

- **Client** : HYGIENA SA (ID: 17452)
- **Commande réelle** : S39690
- **Date commande** : 2025-10-13 08:23:06
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 18
- **Tokens**: 38,405 input + 11,205 output = 49,610 total
- **Coût**: $0.2833 (~28.33¢)
- **Coût par produit LLM**: $0.0157


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 26.3% | 38 produits prédits, 10 corrects |
| **Rappel** | 76.9% | 13 produits réels, 10 détectés |
| **F1-Score** | 39.2% | Score équilibré global |

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
| **MAE** | 84.10 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 19.7% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 20.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 1.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

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

## True Positives (10)

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
| [LV342] LV Organic Broccoli Spread 190 g | 220 | 310 | 90.0 | 29.0% | ✅ partial | 🤖 LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 147 | 124 | 23.0 | 18.5% | ✅ partial | 📊 Médiane |
| [LV161] LV Tartinade Mangue curry 190g | 928 | 775 | 153.0 | 19.7% | ✅ partial | 📊 Médiane |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 742 | 620 | 122.0 | 19.7% | ✅ partial | 📊 Médiane |
| [LV188] LV Tartinade Aubergine  380g | 128 | 112 | 16.0 | 14.3% | ✅ partial | 📊 Médiane |
| [LV160] LV Tartinade Aubergine 190g | 784 | 775 | 9.0 | 1.2% | ✅ partial | 📊 Médiane |
| [LV162] LV Tartinade Tomato Basilico 190g | 784 | 1085 | 301.0 | 27.7% | ✅ partial | 📊 Médiane |
| [LV345] LV Spread KIDS 200ml Organic | 62 | 62 | 0.0 | 0.0% | 🎯 exact | 🤖 LLM |
| [LV139] LV Tartinade Paprika Chili 380g | 192 | 128 | 64.0 | 50.0% | ✅ partial | 📊 Médiane |
| [LV330] LV BIO Tartinade Toscana 190g | 342 | 279 | 63.0 | 22.6% | ✅ partial | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 220u vs Médiane: 275u (Réel: 310u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 220u (confidence: low)
- 📊 **Baseline N-1**: 217u
- 📊 **Médiane**: 275u
- ✅ **Réel commandé**: 310u
- 📉 **Erreur LLM**: 90u (29.0%)
- 📉 **Erreur Médiane**: 35u (11.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Données insuffisantes - Seulement 2 commandes observées (26 août mardi, 29 août vendredi), intervalle de 3 jours. Pattern impossible à établir avec certitude.
- **Saisonnalité**: none
- **Tendance**: Hausse apparente +80% entre les 2 commandes (155u → 279u), mais échantillon trop faible pour confirmer une tendance structurelle
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**CONTEXTE CRITIQUE : Données extrêmement limitées**

Seulement 2 commandes historiques disponibles (26/08 et 29/08), sans données N-1 pour référence saisonnière. 

**ANALYSE RYTHMIQUE :**
- Intervalle observé : 3 jours (mardi → vendredi)
- Date de prédiction : 13 octobre (lundi), soit 45 jours après la dernière commande
- Impossible d'établir un pattern fiable (hebdomadaire/mensuel) avec 2 points seulement
- Le long délai depuis la dernière commande (45j) pourrait suggérer soit un arrêt, soit un besoin de rattrapage

**ANALYSE QUANTITATIVE :**
- Commande 1 : 155u (26/08)
- Commande 2 : 279u (29/08) - augmentation de +80%
- Moyenne simple : 217u
- L'augmentation pourrait refléter : (a) une tendance haussière, (b) un rattrapage, ou (c) un événement ponctuel

**DÉCISION :**
En l'absence de pattern établi et de saisonnalité N-1, je base la prédiction sur la moyenne des 2 observations (217u), légèrement ajustée à 220u pour tenir compte de la dynamique haussière apparente sur la dernière commande. 

**RISQUES MAJEURS :**
- Si le client a cessé de commander ce produit → surstock
- Si la commande de 279u était exceptionnelle → surestimation
- Si tendance réellement haussière → sous-estimation possible

Confidence LOW en raison de l'historique insuffisant pour une prédiction fiable.

</details>


<details>
<summary><strong>2. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM: 62u vs Médiane: 62u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: medium)
- 📊 **Baseline N-1**: 62u
- 📊 **Médiane**: 62u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Mensuel irrégulier (~30-35 jours entre commandes)
- **Saisonnalité**: none
- **Tendance**: Baisse -38%
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
**ANALYSE RYTHMIQUE:**
L'historique montre un pattern mensuel irrégulier:
- N-1: 07/08/24→09/09/24 (33j), 09/09/24→08/10/24 (29j)
- N: Dernière commande 26/08/25, soit 48 jours avant la date de prédiction (13/10/25)

Le client semble commander mensuellement mais avec flexibilité. La date cible (13/10) tombe ~48j après la dernière commande, suggérant un cycle légèrement retardé mais cohérent avec le pattern observé.

**ANALYSE TENDANCIELLE:**
- N-1 à période équivalente (août-oct): 100u constant
- N période récente (26/08/25): 62u
- Tendance baissière nette de -38% (de 100u à 62u)

**FILTRAGE OUTLIERS:**
Aucun outlier détecté. Les 100u en N-1 étaient constants (baseline stable), et le passage à 62u en N représente un changement structurel de la demande, pas un événement ponctuel.

**SAISONNALITÉ:**
Impact faible à nul. Les données N-1 pour octobre montrent 100u, mais la demande actuelle du client a structurellement diminué à 62u (commande la plus récente). Pas de pic saisonnier identifiable.

**DÉCISION:**
La dernière commande (62u) reflète la nouvelle réalité de consommation du client. Sans signal de rattrapage ou d'événement saisonnier fort, la prédiction doit s'aligner sur cette nouvelle baseline. Le produit étant Kids Organic en B2B, la baisse peut s'expliquer par une réduction de débouchés ou ajustement de gamme.

</details>




---

## False Positives (28)

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
| [LV135] LV Tartinade Basilico 190g | 295 | Stock prédit: 241.7u (25j restants) → prédit 295u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 165 | Stock prédit: 126.5u (21j restants) → prédit 165u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 295 | Stock prédit: 228.9u (18j restants) → prédit 295u mais non commandé |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 56 | Stock prédit: 38.9u (24j restants) → prédit 56u mais non commandé |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 6 | Stock prédit: 43.5u (9j restants) → prédit 6u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 317 | Stock prédit: 165.8u (27j restants) → prédit 317u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 300 | Stock prédit: 13.9u (3j restants) → prédit 300u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 585 | Stock prédit: 91.3u (8j restants) → prédit 585u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 24 | Stock prédit: -5.7u (-12j restants) → prédit 24u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 12 | Stock prédit: -10.1u (-21j restants) → prédit 12u mais non commandé |
| [LV158] LV Moutarde 200 ml | 38 | Stock prédit: -8.9u (-12j restants) → prédit 38u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 380 | Stock prédit: -33.5u (-4j restants) → prédit 380u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 299 | Stock prédit: -22.3u (-3j restants) → prédit 299u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 132 | Stock prédit: 31.2u (14j restants) → prédit 132u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 170 | Stock prédit: 26.3u (8j restants) → prédit 170u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 30 | Stock prédit: -9.8u (-11j restants) → prédit 30u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 75 | Stock prédit: 22.2u (15j restants) → prédit 75u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 128 | Stock prédit: 39.8u (16j restants) → prédit 128u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 240 | Stock prédit: 15.6u (3j restants) → prédit 240u mais non commandé |
| [LV217] LV Tartinade Basilic 380g | 32 | Stock prédit: -8.3u (-9j restants) → prédit 32u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 99 | Stock prédit: 18.5u (9j restants) → prédit 99u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 396 | Stock prédit: 14.9u (2j restants) → prédit 396u mais non commandé |
| [LV138] LV Tartinade Carotte gingembre  380g | 144 | Stock prédit: 16.4u (6j restants) → prédit 144u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 152 | Stock prédit: 6.6u (2j restants) → prédit 152u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 120 | Stock prédit: 51.5u (22j restants) → prédit 120u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 174 | Stock prédit: 43.5u (13j restants) → prédit 174u mais non commandé |
| [LV157] LV Ketchup aux tomates 263 ml bio | 75 | Stock prédit: -111.1u (-71j restants) → prédit 75u mais non commandé |
| [LV156] LV Sauce barbecue 263 ml bio | 25 | Stock prédit: -24.1u (-64j restants) → prédit 25u mais non commandé |


---

## False Negatives (3)

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
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 32 | Stock suffisant: 175.4u (42j restants > seuil 30j) |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 186 | Stock suffisant: 390.7u (36j restants > seuil 30j) |
| [LV357] LV Tartinade BIO Asperge 190g | 248 | Stock suffisant: 83.7u (46j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-11-20T08:58:09.322Z*
