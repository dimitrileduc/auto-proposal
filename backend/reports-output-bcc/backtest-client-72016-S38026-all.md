# Rapport Backtest - Client Elevage de presles

## Contexte

- **Client** : Elevage de presles (ID: 72016)
- **Commande réelle** : S38026
- **Date commande** : 2025-07-18 06:45:29
- **Date cutoff système** : 2025-07-17 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 29
- **Tokens**: 25,470 input + 4,444 output = 29,914 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 51.7% | 29 produits prédits, 15 corrects |
| **Rappel** | 57.7% | 26 produits réels, 15 détectés |
| **F1-Score** | 54.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 17.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 13.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 12 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (15)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV345] LV Spread KIDS 200ml Organic | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV214] LV Biscuits apéro tomate basilic 100g bio  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (15 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande date du 03/06/2025, soit 44 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré pour ce produit à rotation lente. En l'absence d'un cycle historique établi, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément aux règles de rotation très faible (1-2u) et à l'utilisation de la médiane, la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 163 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre deux commandes espacées de 46 jours (18/04 au 03/06). Au 17/07, 44 jours se sont écoulés depuis la dernière commande. Ce délai représente environ 95% du cycle précédent, dépassant largement le seuil de risque de 70%. Une rupture est probable dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont constantes à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 152 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit 44 jours. L'intervalle précédent était de 46 jours. Le cycle moyen est d'environ 45 jours. À la date actuelle (17/07), nous sommes à 98% du cycle moyen, ce qui dépasse largement le seuil de risque de 70%. Une rupture est imminente dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 173 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>4. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 03/06/2025, soit 44 jours. L'intervalle précédent était de 46 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons la fin du cycle de rotation observé. ÉTAPE 2 : Estimation quantité. L'historique récent montre une consommation constante et régulière de 1 unité par commande. En suivant la règle de la médiane et de la rotation faible (1-2u), la quantité recommandée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 149 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>5. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique récent montre un cycle de commande d'environ 46 jours (entre le 18/04 et le 03/06). Au 17/07, 44 jours se sont écoulés depuis la dernière commande. Ce délai dépasse largement le seuil de 70% du cycle moyen (32 jours), indiquant un risque imminent de rupture dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation quantité. Le produit présente une rotation très faible et régulière de 1 unité par commande. Conformément aux règles de gestion des faibles rotations, la quantité maintenue est de 1 unité (médiane de l'historique récent).

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 172 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>6. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit 44 jours. Le cycle précédent était de 46 jours. Nous approchons de 100% du cycle moyen constaté, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. En suivant la règle de maintien pour les rotations de 1-2u, la quantité retenue est de 1.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 145 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>7. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (Détection) : Le cycle observé entre les deux dernières commandes est de 46 jours. La dernière commande date du 03/06/2025, soit 44 jours avant la date actuelle. Nous avons atteint 95% du cycle moyen, ce qui dépasse largement le seuil de précaution de 70%. Un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 (Quantité) : L'historique récent montre une consommation constante et faible de 1 unité par commande. Conformément à la règle sur les rotations faibles, la médiane de 1 unité est maintenue pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 161 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>8. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 46 jours. La dernière commande remonte au 03/06/2025, soit 44 jours avant la date actuelle. Nous avons dépassé les 70% du cycle moyen, le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles de gestion des faibles rotations, la médiane de 1 unité est retenue pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 147 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>9. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande date du 03/06/2025, soit 44 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré pour ce produit à rotation lente. En l'absence d'un cycle historique établi, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 152 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>10. [LV157] LV Ketchup aux tomates 263 ml bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 18 avril 2025, soit 90 jours sans activité. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de la règle sur les cycles irréguliers/incertains, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 154 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>11. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 avril 2025, soit 90 jours sans activité. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles standards de réapprovisionnement. En application du principe de précaution B2B (incertitude sur le cycle = prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 167 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>12. [LV214] LV Biscuits apéro tomate basilic 100g bio </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 18 avril 2025, soit environ 90 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit de ce type. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et face à l'absence d'historique N-1 pour affiner la saisonnalité, une commande de réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane du volume historique récent pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 145 tokens
- **Total**: 1,022 tokens



</details>


<details>
<summary><strong>13. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 18 avril 2025, soit environ 90 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle standard de réapprovisionnement en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et face à l'absence d'historique N-1, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la dernière commande connue (médiane du volume récent), afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 880 tokens
- **Output**: 134 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>14. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 18 avril 2025, soit 90 jours avant la date actuelle. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de détection du besoin incertain, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique disponible) pour éviter tout surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 175 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>15. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 avril 2025, soit 90 jours avant la date actuelle. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 161 tokens
- **Total**: 1,036 tokens



</details>




### Donnees d'Input LLM (15 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV345] LV Spread KIDS 200ml Organic</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV157] LV Ketchup aux tomates 263 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [LV214] LV Biscuits apéro tomate basilic 100g bio </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-18 09:54:31: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (14)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV145] LV Sauce Tartare 200 ml  | 1 | Predicted 1u but not ordered |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Predicted 1u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Predicted 1u but not ordered |
| [LV149] LV Sauce Aioli Pesto 200ml | 1 | Predicted 1u but not ordered |
| [LV158] LV Moutarde 200 ml | 1 | Predicted 1u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 1 | Predicted 1u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |
| [WIG03] WIGNAC cidre naturel bio 750ml | 1 | Predicted 1u but not ordered |
| [WIG04] WIGNAC cidre rosé bio 750ml | 1 | Predicted 1u but not ordered |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | Predicted 1u but not ordered |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | Predicted 1u but not ordered |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Predicted 1u but not ordered |
| [RIT05] RITCHIE Cola - verre 275ml | 1 | Predicted 1u but not ordered |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 1 | Predicted 1u but not ordered |


---

## False Negatives (11)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV156] LV Sauce barbecue 263 ml bio | 1 | Never ordered in previous analysis window (no history) |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV131] LV Tartinade Potiron 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Never ordered in previous analysis window (no history) |
| [LV188] LV Tartinade Aubergine  380g | 1 | Never ordered in previous analysis window (no history) |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Never ordered in previous analysis window (no history) |
| [CWLVRB0005] CW LV RB MUG JUMBO Ø80mm x H90mm | 1 | Never ordered in previous analysis window (no history) |
| [CWLVRB0013] CW LV RB COFFEE CUP Ø80mm x H70mm + SAUCER Ø157mm | 2 | Never ordered in previous analysis window (no history) |
| [CWLVRB0011] CW LV RB SALAD BOWL H107/ Ø 245mm | 2 | Never ordered in previous analysis window (no history) |
| [CWLVRB0004] CW LV RB BOWL 3 Ø 245 mm | 1 | Never ordered in previous analysis window (no history) |
| [CWLVRB0003] CW LV RB BOWL 2 Ø 185 mm | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:23:39.317Z*
