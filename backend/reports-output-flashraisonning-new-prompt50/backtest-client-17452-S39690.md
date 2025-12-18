# Rapport Backtest - Client HYGIENA SA

## Contexte

- **Client** : HYGIENA SA (ID: 17452)
- **Commande réelle** : S39690
- **Date commande** : 2025-10-13 08:23:06
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 22
- **Tokens**: 23,142 input + 53,430 output = 76,572 total


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
| **MAE** | 90.60 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 21.2% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 22.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -0.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV342] LV Organic Broccoli Spread 190 g | 155 | 310 | 155.0 | 50.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 147 | 124 | 23.0 | 18.5% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV161] LV Tartinade Mangue curry 190g | 928 | 775 | 153.0 | 19.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 742 | 620 | 122.0 | 19.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV188] LV Tartinade Aubergine  380g | 128 | 112 | 16.0 | 14.3% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV160] LV Tartinade Aubergine 190g | 784 | 775 | 9.0 | 1.2% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV162] LV Tartinade Tomato Basilico 190g | 784 | 1085 | 301.0 | 27.7% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV345] LV Spread KIDS 200ml Organic | 62 | 62 | 0.0 | 0.0% | 🎯 exact | ✅ Oui | ✅ Oui | 🤖 LLM |
| [LV139] LV Tartinade Paprika Chili 380g | 192 | 128 | 64.0 | 50.0% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |
| [LV330] LV BIO Tartinade Toscana 190g | 342 | 279 | 63.0 | 22.6% | ✅ partial | ❌ Non | ❌ Non | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 155u vs Médiane: 275u (Réel: 310u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 155u (confidence: low)
- 📊 **Baseline N-1**: 217u
- 📊 **Médiane**: 275u
- ✅ **Réel commandé**: 310u
- 📉 **Erreur LLM**: 155u (50.0%)
- 📉 **Erreur Médiane**: 35u (11.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (2 commandes rapprochées fin août, puis absence prolongée)
- **Saisonnalité**: none
- **Tendance**: Indéterminée (rupture de rythme depuis 44 jours)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité avec seulement deux points de données datant de fin août 2025. Il y a un silence radio de 44 jours entre la dernière commande et la date actuelle, ce qui suggère soit une rotation très faible, soit une irrégularité structurelle. En l'absence de données N-1 pour évaluer la saisonnalité d'automne, j'applique une stratégie conservatrice : je recommande la quantité la plus basse observée (155u) pour couvrir une reprise d'activité sans risquer un surstockage important sur un produit à la demande incertaine.

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
- **Pattern temporel**: Cycle mensuel (~30 jours) observé en N-1, passage à un cycle plus long d'environ 45-50 jours en 2025
- **Saisonnalité**: weak
- **Tendance**: Baisse significative (-38%) du volume par commande et ralentissement de la rotation
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'analyse se décompose en quatre étapes : 1. Nettoyage : Les volumes de 100u en N-1 étaient constants, suggérant un palier standard plutôt que des anomalies. 2. Saisonnalité : Les données N-1 sur la période août-octobre sont identiques (100u), indiquant une absence de pic saisonnier à cette période pour ce produit. 3. Tendance : On observe une rupture nette avec la dernière commande de 62u (août 2025), soit une baisse de 38% par rapport à l'an dernier. Le délai écoulé depuis la dernière commande (47 jours contre 30 habituellement) confirme un ralentissement de la demande ou un déstockage. 4. Recommandation : En restant conservateur face à cette baisse de régime, la quantité de 62u est préconisée pour s'aligner sur la consommation réelle la plus récente tout en assurant un stock de sécurité minimal, le cycle de réapprovisionnement s'étant allongé.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [LV342] LV Organic Broccoli Spread 190 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-29 12:24:00: 279u
- 2025-08-26 07:48:22: 155u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 155u (confidence: low)
**📊 Quantité Réelle**: 310u

</details>


<details>
<summary><strong>2. [LV345] LV Spread KIDS 200ml Organic</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-26 07:44:55: 62u

**📅 Commandes N-1 (même période année dernière):**
- 2024-10-08 06:52:41: 100u
- 2024-09-09 08:44:08: 100u
- 2024-08-07 07:52:18: 100u

**✅ Quantité LLM**: 62u (confidence: medium)
**📊 Quantité Réelle**: 62u

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
| [LV135] LV Tartinade Basilico 190g | 310 | Stock prédit: 250.7u (26j restants) → prédit 310u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 120 | Stock prédit: 132.2u (22j restants) → prédit 120u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 295 | Stock prédit: 240.6u (18j restants) → prédit 295u mais non commandé |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 56 | Stock prédit: 40.3u (25j restants) → prédit 56u mais non commandé |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 6 | Stock prédit: 44.7u (9j restants) → prédit 6u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 317 | Stock prédit: 169.3u (27j restants) → prédit 317u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 290 | Stock prédit: 16.6u (3j restants) → prédit 290u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 585 | Stock prédit: 97.5u (8j restants) → prédit 585u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 24 | Stock prédit: -5.4u (-11j restants) → prédit 24u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 15 | Stock prédit: -9.6u (-20j restants) → prédit 15u mais non commandé |
| [LV158] LV Moutarde 200 ml | 38 | Stock prédit: -8.5u (-11j restants) → prédit 38u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 380 | Stock prédit: -29.4u (-3j restants) → prédit 380u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 299 | Stock prédit: -19.1u (-3j restants) → prédit 299u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 132 | Stock prédit: 32.5u (15j restants) → prédit 132u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 170 | Stock prédit: 28.2u (8j restants) → prédit 170u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 40 | Stock prédit: -9.3u (-10j restants) → prédit 40u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 75 | Stock prédit: 23.0u (15j restants) → prédit 75u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 128 | Stock prédit: 41.1u (16j restants) → prédit 128u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 230 | Stock prédit: 18.4u (3j restants) → prédit 230u mais non commandé |
| [LV217] LV Tartinade Basilic 380g | 48 | Stock prédit: -7.5u (-8j restants) → prédit 48u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 99 | Stock prédit: 19.6u (10j restants) → prédit 99u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 396 | Stock prédit: 19.0u (2j restants) → prédit 396u mais non commandé |
| [LV138] LV Tartinade Carotte gingembre  380g | 96 | Stock prédit: 19.0u (6j restants) → prédit 96u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 152 | Stock prédit: 8.2u (2j restants) → prédit 152u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 120 | Stock prédit: 52.8u (22j restants) → prédit 120u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 174 | Stock prédit: 45.2u (13j restants) → prédit 174u mais non commandé |
| [LV157] LV Ketchup aux tomates 263 ml bio | 85 | Stock prédit: -109.8u (-70j restants) → prédit 85u mais non commandé |
| [LV156] LV Sauce barbecue 263 ml bio | 35 | Stock prédit: -23.8u (-63j restants) → prédit 35u mais non commandé |


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
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 32 | Stock suffisant: 179.4u (42j restants > seuil 30j) |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 186 | Stock suffisant: 401.2u (36j restants > seuil 30j) |
| [LV357] LV Tartinade BIO Asperge 190g | 248 | Stock suffisant: 85.4u (46j restants > seuil 30j) |


---

*Rapport généré automatiquement le 2025-12-18T12:22:10.254Z*
