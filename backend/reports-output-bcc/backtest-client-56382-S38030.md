# Rapport Backtest - Client SRL GILSON FRUITS & LEGUMES, Alain Gilson

## Contexte

- **Client** : SRL GILSON FRUITS & LEGUMES, Alain Gilson (ID: 56382)
- **Commande réelle** : S38030
- **Date commande** : 2025-07-15 06:24:10
- **Date cutoff système** : 2025-07-14 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 31
- **Tokens**: 27,302 input + 4,884 output = 32,186 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.9% | 21 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 76.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.85 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 45.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 39.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -45.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

---

## True Positives (13)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (13 produits)


<details>
<summary><strong>1. [LV153] LV Vinaigrette Ciboulette 250 ml bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. L'historique montre deux commandes de 1 unité espacées de 74 jours. La dernière commande date du 26 mai, soit il y a 49 jours. Le cycle moyen étant d'environ 74 jours, nous atteignons 66% du cycle. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans l'horizon cible. En application du principe de précaution B2B (doute sur le cycle irrégulier), un besoin est détecté. ÉTAPE 2 : Estimation quantité. La rotation est très faible et constante (1u). La médiane des commandes récentes est de 1 unité. Conformément aux règles sur les faibles rotations, on maintient la quantité habituelle de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 187 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>2. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 mai, soit 49 jours. Le cycle précédent était de 74 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où le risque de rupture est probable (49 + 30 = 79 jours, dépassant le cycle observé). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles sur les faibles rotations, la quantité de 1u est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 157 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>3. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 26 mai 2025, soit 49 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà effectif pour ce type de produit à faible rotation. En l'absence d'un cycle historique clair, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique disponible) pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 170 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>4. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le cycle observé entre les deux dernières commandes est de 74 jours. Depuis la dernière commande (26 mai), 49 jours se sont écoulés, ce qui représente environ 66% du cycle moyen. Étant donné que le seuil de réapprovisionnement est de 30 jours, le risque de rupture survient durant cette période (49 + 30 = 79 jours, dépassant le cycle de 74). En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique montre une consommation constante et très faible de 1 unité par commande. La médiane est de 1. Conformément aux règles sur les rotations faibles, la quantité de 1 unité est maintenue pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 181 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le cycle moyen entre les deux dernières commandes est de 74 jours. La dernière commande date du 26 mai, soit il y a 49 jours. 49 jours représentent environ 66% du cycle moyen. Étant donné que nous approchons du seuil de 70% et que le seuil de réapprovisionnement est de 30 jours, il existe un risque de rupture à court terme. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre une rotation très faible et constante de 1 unité par commande. La médiane est de 1. Conformément aux règles pour les rotations faibles, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 175 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Le cycle moyen observé est d'environ 74 jours. La dernière commande date du 26 mai 2025, soit il y a 49 jours. Cela représente environ 66% du cycle moyen. Étant donné que nous approchons du seuil de 70% et que le délai de réapprovisionnement est de 30 jours, il existe un risque de rupture à court terme. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une consommation constante de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles, la quantité de 1 unité est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 178 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>7. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
Le cycle de commande observé est d'environ 74 jours (entre mars et mai). Au 14 juillet, 49 jours se sont écoulés depuis la dernière commande, ce qui représente environ 66% du cycle moyen. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient durant cette fenêtre. En application du principe de précaution B2B et face à une rotation faible mais régulière, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 130 tokens
- **Total**: 1,020 tokens



</details>


<details>
<summary><strong>8. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. L'historique montre deux commandes espacées de 74 jours. La dernière commande date du 26 mai, soit il y a 49 jours. Le seuil de réapprovisionnement est de 30 jours, ce qui nous place à un horizon de 79 jours après la dernière commande. Le risque de rupture est avéré car nous dépassons le cycle moyen observé. ÉTAPE 2 : Estimation de la quantité. Les deux dernières commandes sont de 1 unité. La médiane et la constante historique étant de 1, cette quantité est maintenue pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 151 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>9. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 26 mai 2025, soit 49 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré pour ce produit à rotation lente. En l'absence d'un cycle régulier établi, le principe de précaution B2B s'applique pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 158 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le cycle de commande observé est d'environ 74 jours (entre mars et mai). Depuis la dernière commande du 26 mai, 49 jours se sont écoulés. Cela représente environ 66% du cycle moyen. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture survient dans l'horizon de prévision (49 + 30 = 79 jours, dépassant le cycle de 74 jours). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre une consommation constante et très faible de 1 unité par commande. La médiane est de 1. Conformément aux règles sur les rotations faibles, on maintient la quantité de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 187 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>11. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 26 mai 2025, soit 49 jours avant la date actuelle. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le délai écoulé dépasse largement le seuil de précaution habituel pour un produit en stock. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent affiche une commande unique de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité observée sans l'augmenter. La médiane et la valeur la plus basse de l'historique convergent vers 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 184 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>12. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 mai, soit 49 jours. Le cycle précédent était de 74 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons un intervalle de 79 jours à l'échéance, dépassant le cycle observé. Par principe de précaution B2B face à une rotation lente mais existante, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). La médiane est de 1. Conformément aux règles de rotation faible, on maintient la quantité de 1u sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 170 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>13. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 mars 2025, soit plus de 120 jours. Bien que la rotation soit très faible, le principe de précaution B2B s'applique car le cycle est irrégulier et le risque de rupture de stock est incertain. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant une présence minimale en rayon.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 146 tokens
- **Total**: 1,019 tokens



</details>




### Donnees d'Input LLM (13 produits)


<details>
<summary><strong>1. [LV153] LV Vinaigrette Ciboulette 250 ml bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:36:42: 1u
- 2025-03-13 08:03:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:36:42: 1u
- 2025-03-13 08:03:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:36:42: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:36:42: 1u
- 2025-03-13 08:03:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:36:42: 1u
- 2025-03-13 08:03:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:36:42: 1u
- 2025-03-13 08:03:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:36:42: 1u
- 2025-03-13 08:03:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:36:42: 1u
- 2025-03-13 08:03:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LV136] LV Tartinade Betterave 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:36:42: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:36:42: 1u
- 2025-03-13 08:03:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>11. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:36:42: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:36:42: 1u
- 2025-03-13 08:03:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LV135] LV Tartinade Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:03:52: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 1 | Predicted 1u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Predicted 1u but not ordered |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Predicted 1u but not ordered |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:15:54.521Z*
