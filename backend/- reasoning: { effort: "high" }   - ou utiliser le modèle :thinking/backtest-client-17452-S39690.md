# Rapport Backtest - Client HYGIENA SA

## Contexte

- **Client** : HYGIENA SA (ID: 17452)
- **Commande réelle** : S39690
- **Date commande** : 2025-10-13 08:23:06
- **Date cutoff système** : 2025-10-12 00:00:00
- **Jours d'avance** : 1j


### 🤖 Usage LLM

- **Appels**: 22
- **Tokens**: 23,177 input + 8,415 output = 31,592 total


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
| **MAE** | 84.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 19.8% | ⚖️ Erreur pondérée robuste (métrique principale) |
| **MAPE** | 20.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 1.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
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
| [LV342] LV Organic Broccoli Spread 190 g | 217 | 310 | 93.0 | 30.0% | ✅ partial | ✅ Oui | ✅ Oui | 🤖 LLM |
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
<summary><strong>1. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 217u vs Médiane: 275u (Réel: 310u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 217u (confidence: low)
- 📊 **Baseline N-1**: 217u
- 📊 **Médiane**: 275u
- ✅ **Réel commandé**: 310u
- 📉 **Erreur LLM**: 93u (30.0%)
- 📉 **Erreur Médiane**: 35u (11.3%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Irrégulier (intervalle 3-4 jours sur les dernières données)
- **Saisonnalité**: none
- **Tendance**: Hausse significative (passage de 155u à 279u)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
L'historique est extrêmement limité (seulement 2 points de données récents). ÉTAPE 1: Aucune valeur ne peut être formellement écartée comme outlier sans plus de contexte, bien que 279u soit élevé. ÉTAPE 2: Données N-1 absentes, impact saisonnier inconnu mais estimé neutre par prudence. ÉTAPE 3: On observe une accélération du volume (+80%) entre le mardi 26/08 et le vendredi 29/08. ÉTAPE 4: En l'absence de récurrence établie et vu l'ancienneté de la dernière commande (fin août), la moyenne arithmétique de 217u est retenue comme base de réapprovisionnement conservatrice pour couvrir la demande de fond sans risquer un surstockage massif sur un produit dont le rythme n'est pas encore stabilisé. La confiance est faible car les données datent de 6 semaines avant la date actuelle (12 octobre). Aucun cycle hebdomadaire clair n'est encore visible le dimanche (date actuelle). Toute commande passée ce jour pourrait être un rattrapage par rapport au rythme d'août (mar/ven).erait être un rattrapage par rapport au rythme d'août (mar/ven).

</details>


<details>
<summary><strong>2. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM: 62u vs Médiane: 62u (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 62u (confidence: low)
- 📊 **Baseline N-1**: 62u
- 📊 **Médiane**: 62u
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 0u (0.0%)
- 📉 **Erreur Médiane**: 0u (0.0%)

**🔍 Analyse LLM:**
- **Pattern temporel**: Cycle mensuel irrégulier (environ tous les 30 jours)
- **Saisonnalité**: none
- **Tendance**: Baisse significative (-38%)
- **Outliers détectés**: Aucun

**🧠 Raisonnement LLM:**
ÉTAPE 1 (DE-EVENTING): L'historique N-1 affiche une stabilité parfaite à 100u, tandis que la commande la plus récente chute à 62u. Aucune anomalie ponctuelle n'est détectée, mais un nouveau palier inférieur semble s'être établi. ÉTAPE 2 (SAISONNALITÉ): Pas d'impact saisonnier visible entre août et octobre selon l'historique N-1 (100u constants). ÉTAPE 3 (TENDANCE): On observe un ralentissement notable du volume sur la période récente (-38%). Le rythme de commande est toutefois espacé (dernière commande fin août), suggérant un besoin de réapprovisionnement imminent car nous sommes à +45 jours. ÉTAPE 4 (RECOMMANDATION): Étant donné l'absence de données entre fin août et mi-octobre, on se base sur la dernière valeur connue de 62u pour éviter le sur-stockage, tout en tenant compte de la rupture du rythme habituel qui justifie une commande de maintien de stock au nouveau niveau de consommation constaté en 2025. La confiance est faible car il manque des données sur septembre 2025 pour confirmer la tendance baissière ou un glissement de cycle de commande spécifique (dimanche vs jours ouvrés). L'arrondi est conservateur à 62u pour s'aligner sur le dernier besoin réel exprimé par le client B2B en période récente (août 2025). Jours de commande varient entre le lundi et le mercredi habituellement; la commande un dimanche suggère une préparation pour la semaine à venir ou une urgence de stock bas côté client après une absence de commande en septembre 2025 selon le log fourni. On compense l'absence de commande en septembre 2025 par le maintien de la quantité vue en août 2025 au lieu de revenir aux 100u de l'an dernier car la tendance 2025 semble durablement plus faible que 2024.

</details>




### 📊 Données d'Input LLM (2 produits)


<details>
<summary><strong>1. [LV342] LV Organic Broccoli Spread 190 g</strong> - ✅ LLM Réussi</summary>

**📅 Commandes Récentes (3 derniers mois):**
- 2025-08-29 12:24:00: 279u
- 2025-08-26 07:48:22: 155u

**📅 Commandes N-1 (même période année dernière):**
- Aucune commande N-1

**✅ Quantité LLM**: 217u (confidence: low)
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

**✅ Quantité LLM**: 62u (confidence: low)
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
| [LV135] LV Tartinade Basilico 190g | 295 | Stock prédit: 250.7u (26j restants) → prédit 295u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 165 | Stock prédit: 132.2u (22j restants) → prédit 165u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 295 | Stock prédit: 240.6u (18j restants) → prédit 295u mais non commandé |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 56 | Stock prédit: 40.3u (25j restants) → prédit 56u mais non commandé |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 4 | Stock prédit: 44.7u (9j restants) → prédit 4u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 317 | Stock prédit: 169.3u (27j restants) → prédit 317u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 215 | Stock prédit: 16.6u (3j restants) → prédit 215u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 585 | Stock prédit: 97.5u (8j restants) → prédit 585u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 24 | Stock prédit: -5.4u (-11j restants) → prédit 24u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 12 | Stock prédit: -9.6u (-20j restants) → prédit 12u mais non commandé |
| [LV158] LV Moutarde 200 ml | 38 | Stock prédit: -8.5u (-11j restants) → prédit 38u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 380 | Stock prédit: -29.4u (-3j restants) → prédit 380u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 299 | Stock prédit: -19.1u (-3j restants) → prédit 299u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 121 | Stock prédit: 32.5u (15j restants) → prédit 121u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 170 | Stock prédit: 28.2u (8j restants) → prédit 170u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 40 | Stock prédit: -9.3u (-10j restants) → prédit 40u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 75 | Stock prédit: 23.0u (15j restants) → prédit 75u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 128 | Stock prédit: 41.1u (16j restants) → prédit 128u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 230 | Stock prédit: 18.4u (3j restants) → prédit 230u mais non commandé |
| [LV217] LV Tartinade Basilic 380g | 48 | Stock prédit: -7.5u (-8j restants) → prédit 48u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 99 | Stock prédit: 19.6u (10j restants) → prédit 99u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 396 | Stock prédit: 19.0u (2j restants) → prédit 396u mais non commandé |
| [LV138] LV Tartinade Carotte gingembre  380g | 144 | Stock prédit: 19.0u (6j restants) → prédit 144u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 152 | Stock prédit: 8.2u (2j restants) → prédit 152u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 120 | Stock prédit: 52.8u (22j restants) → prédit 120u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 174 | Stock prédit: 45.2u (13j restants) → prédit 174u mais non commandé |
| [LV157] LV Ketchup aux tomates 263 ml bio | 75 | Stock prédit: -109.8u (-70j restants) → prédit 75u mais non commandé |
| [LV156] LV Sauce barbecue 263 ml bio | 25 | Stock prédit: -23.8u (-63j restants) → prédit 25u mais non commandé |


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

*Rapport généré automatiquement le 2025-12-18T12:01:16.143Z*
