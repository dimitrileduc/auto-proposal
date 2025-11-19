# Rapport Backtest - Client HYGIENA SA

## Contexte

- **Client** : HYGIENA SA (ID: 17452)
- **Commande réelle** : S39690
- **Date commande** : 2025-10-13 08:23:06
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 0j


### 💰 Usage LLM

- **Appels**: 22
- **Tokens**: 34,117 input + 25,289 output = 59,406 total
- **Coût**: $0.4817 (~48.17¢)
- **Coût par produit LLM**: $0.0219


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
| **MAE** | 83.40 unités | Erreur moyenne absolue (métrique principale) |
| **MAPE** | 20.4% | Erreur moyenne en % (complémentaire) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

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
| [LV342] LV Organic Broccoli Spread 190 g | 230 | 310 | 80.0 | 25.8% | ✅ partial | 🤖 LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 147 | 124 | 23.0 | 18.5% | ✅ partial | 📊 Médiane |
| [LV161] LV Tartinade Mangue curry 190g | 928 | 775 | 153.0 | 19.7% | ✅ partial | 📊 Médiane |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 742 | 620 | 122.0 | 19.7% | ✅ partial | 📊 Médiane |
| [LV188] LV Tartinade Aubergine  380g | 128 | 112 | 16.0 | 14.3% | ✅ partial | 📊 Médiane |
| [LV160] LV Tartinade Aubergine 190g | 784 | 775 | 9.0 | 1.2% | ✅ partial | 📊 Médiane |
| [LV162] LV Tartinade Tomato Basilico 190g | 784 | 1085 | 301.0 | 27.7% | ✅ partial | 📊 Médiane |
| [LV345] LV Spread KIDS 200ml Organic | 65 | 62 | 3.0 | 4.8% | ✅ partial | 🤖 LLM |
| [LV139] LV Tartinade Paprika Chili 380g | 192 | 128 | 64.0 | 50.0% | ✅ partial | 📊 Médiane |
| [LV330] LV BIO Tartinade Toscana 190g | 342 | 279 | 63.0 | 22.6% | ✅ partial | 📊 Médiane |


### 🤖 Détails des Prédictions LLM (2 produits)


<details>
<summary><strong>1. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 230u vs Médiane: undefinedu (Réel: 310u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 230u (confidence: medium)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 310u
- 📉 **Erreur LLM**: 80u (25.8%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**

ÉTAPE 1: DE-EVENTING (Nettoyage des outliers)
- Commande 1: 2025-08-29 → 279u
- Commande 2: 2025-08-26 → 155u
- Commande 3: 2025-06-30 → 275u

Moyenne: (279+155+275)/3 = 236.33u
Écart-type: ~60u (variation ~25%)

Les variations observées (155u à 279u) restent dans une fourchette acceptable (±30% mentionné comme normal en B2B). La commande de 155u pourrait être une commande partielle ou un ajustement, mais pas un outlier extrême à éliminer complètement.

**Demande de fond estimée: ~235-240u** (en gardant toutes les commandes comme représentatives)

ÉTAPE 2: SAISONNALITÉ
Le produit "LV Organic Broccoli Spread" (tartinade bio au brocoli) présente des indices saisonniers intéressants:
- Dernières commandes concentrées en août (279u + 155u) et juin (275u)
- Période actuelle: Mi-octobre 2025 → Début d'automne

**Analyse saisonnière**: Les tartinades végétales bio tendent à avoir une demande plus forte en été (BBQ, apéritifs, salades) et début d'automne. Octobre reste une période modérée-bonne (rentrée, début de saison froide avec consommation de produits réconfortants).

Cependant, on observe un gap de commande entre fin juin et fin août (2 mois), puis plus rien depuis le 29 août jusqu'au 13 octobre (6 semaines). Cela suggère soit des stocks existants, soit une baisse d'activité.

**Ajustement saisonnier: Neutre à légèrement négatif** (-5%)

ÉTAPE 3: TENDANCE RÉCENTE
- Avec seulement 3 points de données sur 3,5 mois, la visibilité est limitée
- Pattern observé: 275u (juin) → 155u (août) → 279u (août) 
- Les deux commandes d'août rapprochées (3 jours d'écart) totalisent 434u, ce qui pourrait indiquer un fractionnement ou un rattrapage de stock après la période juin-août

**Fréquence**: Irrégulière (2 mois de gap, puis 2 commandes en 3 jours, puis 6 semaines sans commande)

**Tendance volume**: Stable autour de 235-240u en moyenne, mais comportement d'achat irrégulier qui complique la prédiction.

**Ajustement tendance: Conservateur (-10%)** car le gap actuel de 6 semaines suggère soit un sur-stock existant, soit une demande ralentie.

ÉTAPE 4: RECOMMANDATION FINALE
- Base demande de fond: 236u
- Ajustement saisonnier (octobre, post-été): -5% → 224u
- Ajustement tendance (prudence sur gap temporel): -10% → ~210u
- Marge de sécurité raisonnable: +10% → ~230u

**RECOMMANDATION: 230 unités**

Cette quantité représente un compromis conservateur qui:
✓ Reflète la moyenne historique (~236u)
✓ Tient compte du gap temporel depuis la dernière commande
✓ Évite le sur-stockage dans un contexte d'incertitude
✓ Reste suffisant pour couvrir la demande normale d'octobre


**📅 Analyse Temporelle:**
Historique très court (3 commandes sur 3,5 mois) avec pattern irrégulier: gap de 2 mois (juin-août), puis 2 commandes concentrées en 3 jours (26-29 août), puis nouveau gap de 6 semaines jusqu'à aujourd'hui. Cette irrégularité suggère des achats par lots ou une gestion de stock opportuniste plutôt qu'un réapprovisionnement régulier. L'absence de commande depuis 45 jours indique soit un stock restant, soit une baisse temporaire d'activité.

**📊 Analyse Quantité:**
Les quantités oscillent entre 155u et 279u avec une moyenne de 236u. La variance de ±25% est normale pour du B2B. Les deux commandes d'août (155+279=434u) sur 3 jours pourraient représenter une commande unique fractionnée ou un rattrapage après le gap estival. La commande de juin (275u) et celle du 29 août (279u) sont très proches, suggérant une demande de fond autour de 275u. La commande de 155u apparaît comme une demi-commande ou un ajustement.

**📈 Tendance détectée:** ❌ Non

</details>


<details>
<summary><strong>2. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM: 65u vs Médiane: undefinedu (Réel: 62u)</summary>

**Quantités:**
- 🤖 **LLM prédit**: 65u (confidence: low)
- 📊 **Médiane**: undefinedu
- ✅ **Réel commandé**: 62u
- 📉 **Erreur LLM**: 3u (4.8%)
- 📉 **Erreur Médiane**: NaNu (NaN%)

**🧠 Raisonnement:**
**ÉTAPE 1 - DE-EVENTING:**
- 2025-08-26: 62u (commande récente, semble normale)
- 2025-06-30: 150u + 25u = 175u (deux commandes le même jour!)
- Total sur 3 commandes: 237u

La double commande du 30 juin est suspecte. Il s'agit probablement:
- Soit d'un stockage préventif avant les vacances d'été
- Soit d'une correction/ajustement de stock
- Soit d'une demande promotionnelle

En excluant le pic de 150u, nous avons: (62 + 25) / 2 = 43.5u comme demande de fond estimée.

**ÉTAPE 2 - SAISONNALITÉ:**
- Produit: "LV Spread KIDS 200ml Organic" → produit enfant, bio, format petit
- Juin-Août: Période estivale avec possibles pics (vacances, pique-niques, camps d'été)
- Date actuelle: 13 octobre → Rentrée scolaire passée, début automne
- Le gros volume en juin pourrait correspondre à une anticipation de demande estivale

Octobre est probablement une période de demande moyenne/normale pour ce type de produit (hors période de vacances).

**ÉTAPE 3 - TENDANCE RÉCENTE:**
- Données très limitées (3 commandes seulement, sur ~3.5 mois)
- Fréquence: Pas de commande depuis le 26 août (48 jours écoulés)
- Intervalle juin→août: ~57 jours
- La dernière commande réelle: 62u (26 août)

Avec si peu de données, difficile d'établir une tendance claire. Cependant:
- Le délai depuis la dernière commande (48j) suggère qu'une commande est imminente
- Volume de la dernière commande normale: 62u

**ÉTAPE 4 - RECOMMANDATION FINALE:**
- Base demande de fond: ~45u (en excluant le pic)
- Dernière commande normale: 62u
- Ajustement saisonnier: Neutre/légèrement positif (octobre = période normale)
- Ajustement tendance: Impossible à déterminer (données insuffisantes)
- Principe de précaution: Prendre comme référence la dernière commande réelle (62u) avec légère marge

**RECOMMANDATION: 65u**
- Basé sur la dernière commande normale (62u) + 5% de sécurité
- Approche conservatrice face au manque de données
- Évite le sur-stockage tout en couvrant la demande probable

**📅 Analyse Temporelle:**
Historique très court (3 commandes sur 3.5 mois). Intervalles: ~57 jours entre juin et août, puis 48 jours depuis. Fréquence d'environ 50-60 jours entre commandes. La prochaine commande est attendue maintenant (délai écoulé).

**📊 Analyse Quantité:**
Volumes très variables: 25u, 62u, et 150u. La commande de 150u semble être un outlier (possible événement promotionnel ou stockage préventif estival). Les volumes normaux semblent se situer entre 25-62u, avec 62u comme référence la plus récente et fiable.

**📈 Tendance détectée:** ❌ Non

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
| [LV135] LV Tartinade Basilico 190g | 290 | Stock prédit: 241.7u (25j restants) → prédit 290u mais non commandé |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 165 | Stock prédit: 126.5u (21j restants) → prédit 165u mais non commandé |
| [LV159] LV Tartinade aux Truffes  135g  | 295 | Stock prédit: 228.9u (18j restants) → prédit 295u mais non commandé |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 56 | Stock prédit: 38.9u (24j restants) → prédit 56u mais non commandé |
| [LV348] LV Tartinade Dattes-Chili 180g BE bio | 12 | Stock prédit: 43.5u (9j restants) → prédit 12u mais non commandé |
| [LV133] LV Tartinade Ananas Coco 190g | 317 | Stock prédit: 165.8u (27j restants) → prédit 317u mais non commandé |
| [LV145] LV Sauce Tartare 200 ml  | 200 | Stock prédit: 13.9u (3j restants) → prédit 200u mais non commandé |
| [LV129] LV Tartinade Carotte Gingembre 190g | 585 | Stock prédit: 91.3u (8j restants) → prédit 585u mais non commandé |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 24 | Stock prédit: -5.7u (-12j restants) → prédit 24u mais non commandé |
| [LV149] LV Sauce Aioli Pesto 200ml | 15 | Stock prédit: -10.1u (-21j restants) → prédit 15u mais non commandé |
| [LV158] LV Moutarde 200 ml | 38 | Stock prédit: -8.9u (-12j restants) → prédit 38u mais non commandé |
| [LV132] LV Tartinade Houmous type 190g | 380 | Stock prédit: -33.5u (-4j restants) → prédit 380u mais non commandé |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 299 | Stock prédit: -22.3u (-3j restants) → prédit 299u mais non commandé |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 85 | Stock prédit: 31.2u (14j restants) → prédit 85u mais non commandé |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 170 | Stock prédit: 26.3u (8j restants) → prédit 170u mais non commandé |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 30 | Stock prédit: -9.8u (-11j restants) → prédit 30u mais non commandé |
| [LV155] LV Vinaigrette Caesar 250 ml | 75 | Stock prédit: 22.2u (15j restants) → prédit 75u mais non commandé |
| [LV137] LV Tartinade Lentilles Curry 190g | 128 | Stock prédit: 39.8u (16j restants) → prédit 128u mais non commandé |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 160 | Stock prédit: 15.6u (3j restants) → prédit 160u mais non commandé |
| [LV217] LV Tartinade Basilic 380g | 40 | Stock prédit: -8.3u (-9j restants) → prédit 40u mais non commandé |
| [LV040] LV Caprons apéritifs 240g | 99 | Stock prédit: 18.5u (9j restants) → prédit 99u mais non commandé |
| [LV136] LV Tartinade Betterave 190g | 396 | Stock prédit: 14.9u (2j restants) → prédit 396u mais non commandé |
| [LV138] LV Tartinade Carotte gingembre  380g | 144 | Stock prédit: 16.4u (6j restants) → prédit 144u mais non commandé |
| [LV187] LV Tartinade Mangue Curry 380g | 152 | Stock prédit: 6.6u (2j restants) → prédit 152u mais non commandé |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 120 | Stock prédit: 51.5u (22j restants) → prédit 120u mais non commandé |
| [LV146] LV Sauce Aïoli 200 ml | 174 | Stock prédit: 43.5u (13j restants) → prédit 174u mais non commandé |
| [LV157] LV Ketchup aux tomates 263 ml bio | 75 | Stock prédit: -111.1u (-71j restants) → prédit 75u mais non commandé |
| [LV156] LV Sauce barbecue 263 ml bio | 20 | Stock prédit: -24.1u (-64j restants) → prédit 20u mais non commandé |


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

*Rapport généré automatiquement le 2025-11-19T16:27:20.330Z*
