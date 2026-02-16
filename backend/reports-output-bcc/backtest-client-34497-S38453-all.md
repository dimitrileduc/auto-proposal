# Rapport Backtest - Client Comptoir De Sophie SRL

## Contexte

- **Client** : Comptoir De Sophie SRL (ID: 34497)
- **Commande réelle** : S38453
- **Date commande** : 2025-08-11 11:32:51
- **Date cutoff système** : 2025-08-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 48
- **Tokens**: 41,932 input + 6,445 output = 48,377 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 47.8% | 46 produits prédits, 22 corrects |
| **Rappel** | 61.1% | 36 produits réels, 22 détectés |
| **F1-Score** | 53.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.32 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 24.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 12.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -17.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 18 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (22)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [FO001] FO CITRONNADE BIO 33cl | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LB003] LB Festive (4,5%) 33CL | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LB004] LB Blonde (6,5%) 33CL | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [MANA01] MANA natural energy drink - citron & gingembre 250ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MANA02] MANA natural energy drink - tropical passion 250ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [AQUA01] AQUAPAX - natural mineral water 500ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (22 produits)


<details>
<summary><strong>1. [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 30 juin 2025, soit 41 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue correspond à la valeur unique observée dans l'historique récent (1u), conformément à la règle de maintien des quantités pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 130 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>2. [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 30 juin 2025, soit 41 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane de l'historique récent pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 125 tokens
- **Total**: 1,003 tokens



</details>


<details>
<summary><strong>3. [FO001] FO CITRONNADE BIO 33cl</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande date du 30 juin, soit il y a 41 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à l'incertitude du cycle de rotation, un risque de rupture est identifié. La quantité retenue correspond à la médiane de l'historique récent (1 unité) afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 121 tokens
- **Total**: 991 tokens



</details>


<details>
<summary><strong>4. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande date du 30 juin, soit 41 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré si le cycle de consommation est mensuel. En l'absence d'historique long permettant de définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien des quantités historiques, la quantité retenue est la médiane des commandes récentes, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 879 tokens
- **Output**: 154 tokens
- **Total**: 1,033 tokens



</details>


<details>
<summary><strong>5. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande d'environ 33 jours (entre le 28/05 et le 30/06). Au 10/08, 41 jours se sont écoulés depuis la dernière commande, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est avéré. ÉTAPE 2 : Estimation quantité. Les deux dernières commandes sont identiques (1u). La médiane est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 155 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>6. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 30 juin, soit 41 jours. Le cycle précédent était de 33 jours. Nous avons dépassé 100% du cycle moyen, le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : L'historique récent montre une rotation très faible et constante de 1 unité par commande. En suivant la règle de maintien pour les rotations de 1-2u, la quantité retenue est la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 896 tokens
- **Output**: 131 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>7. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen observé est d'environ 33 jours (entre le 28/05 et le 30/06). La dernière commande remonte au 30/06, soit 41 jours avant la date actuelle (10/08). Le délai depuis la dernière commande dépasse largement le cycle moyen et l'horizon de réapprovisionnement de 30 jours. Le risque de rupture est avéré. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre deux commandes de 1u et 3u. En application de la règle de la médiane et du principe de prudence (choisir la valeur la plus basse en cas de doute sur une faible rotation), la quantité retenue est de 1u pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 193 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>8. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 33 jours (entre fin mai et fin juin). Au 10 août, 41 jours se sont écoulés depuis la dernière commande, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est avéré. ÉTAPE 2 : L'historique récent montre une consommation constante et faible de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 136 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>9. [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 30 juin, soit 41 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent si le cycle de rotation est mensuel ou légèrement supérieur. En l'absence d'historique long, le principe de précaution B2B s'applique pour éviter une rupture. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans augmenter pour éviter le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 142 tokens
- **Total**: 1,020 tokens



</details>


<details>
<summary><strong>10. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande date du 30 juin, soit 41 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (cycle incertain = prévoir), un risque de rupture est identifié. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien des quantités historiques, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 138 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>11. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 41 jours. Bien que le cycle soit difficile à établir avec un seul point de données, le principe de précaution B2B s'applique car nous avons dépassé le délai habituel de réapprovisionnement pour ce type de produit de snacking. Le risque de rupture est considéré comme présent à l'horizon de 30 jours. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité recommandée est maintenue à 1 unité, correspondant à la médiane de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 132 tokens
- **Total**: 1,008 tokens



</details>


<details>
<summary><strong>12. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande date du 30 juin 2025, soit il y a 41 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à un cycle encore indéterminé, un risque de rupture est identifié. La quantité est fixée à 1 unité, correspondant à la médiane (et unique valeur) de l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 132 tokens
- **Total**: 1,009 tokens



</details>


<details>
<summary><strong>13. [LB003] LB Festive (4,5%) 33CL</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 28 mai 2025, soit 74 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande (rotation très faible), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de détection du besoin incertain, une commande est nécessaire pour éviter une rupture de stock prolongée. La quantité est fixée à 1 unité, correspondant à la médiane de l'historique récent pour ce type de rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 126 tokens
- **Total**: 997 tokens



</details>


<details>
<summary><strong>14. [LB004] LB Blonde (6,5%) 33CL</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 74 jours (28 mai). Bien que l'historique soit limité à une seule unité, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit B2B. En application du principe de précaution (Étape 1) et face à l'incertitude du cycle de rotation, un risque de rupture est identifié pour l'horizon des 30 prochains jours. La quantité retenue correspond à la médiane de l'historique récent (1u), conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 129 tokens
- **Total**: 1,000 tokens



</details>


<details>
<summary><strong>15. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 28 mai 2025, soit 74 jours sans activité pour ce produit. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et conformément à la règle sur les rotations faibles (maintenir 1-2u), une commande d'une unité est préconisée pour reconstituer le stock de présentation ou répondre à une demande ponctuelle imminente.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 133 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>16. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 28 mai 2025, soit 74 jours avant la date actuelle. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le délai écoulé est important. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien des quantités pour les rotations faibles (1-2u) et l'utilisation de la médiane historique, la quantité préconisée est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 155 tokens
- **Total**: 1,028 tokens



</details>


<details>
<summary><strong>17. [MANA01] MANA natural energy drink - citron & gingembre 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 28 mai 2025, soit 74 jours avant la date actuelle. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit de boisson énergisante. En application du principe de précaution B2B et pour éviter une rupture de stock prolongée sur un horizon de 30 jours, un besoin est détecté. La quantité retenue correspond à la médiane historique récente (1 unité), conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 127 tokens
- **Total**: 1,002 tokens



</details>


<details>
<summary><strong>18. [MANA02] MANA natural energy drink - tropical passion 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 28 mai 2025, soit 74 jours avant la date actuelle. Bien que le volume soit très faible (1u), l'absence de commandes récentes et l'impossibilité de définir un cycle précis imposent l'application du principe de précaution B2B. Le délai écoulé suggère un besoin de réapprovisionnement imminent pour éviter une rupture prolongée. Conformément aux règles de gestion des rotations faibles, la quantité est maintenue à 1 unité, correspondant à la médiane de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 128 tokens
- **Total**: 1,001 tokens



</details>


<details>
<summary><strong>19. [PAO01] PAOLA cola verre 250ml - le cola des Belges</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 mai 2025, soit 74 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 2 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité est maintenue à 2 unités, correspondant à la médiane de l'historique disponible.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 164 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>20. [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 mai 2025, soit plus de 70 jours sans activité. Bien que la rotation soit très faible, le principe de précaution B2B et l'incertitude sur le cycle de réapprovisionnement imposent de prévoir une unité pour éviter une rupture prolongée sur un horizon de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u (médiane historique) sans augmentation injustifiée.

**Tokens utilises pour cette prediction:**
- **Input**: 879 tokens
- **Output**: 157 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>21. [AQUA01] AQUAPAX - natural mineral water 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucun historique de commande récent ou passé (N-1). En l'absence totale de données sur le cycle de rotation, le principe de précaution B2B s'applique pour éviter une rupture potentielle sur un nouveau référencement ou un produit sans historique. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de médiane historique, une quantité minimale de 1 unité est préconisée pour initialiser le stock ou répondre à un besoin incertain sans risquer de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 862 tokens
- **Output**: 131 tokens
- **Total**: 993 tokens



</details>


<details>
<summary><strong>22. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Absence totale d'historique de commandes (récentes et N-1). En application du principe de précaution B2B et de la règle de détection du besoin en cas de doute ou d'absence de cycle défini, une commande est nécessaire pour initialiser le stock ou tester le référencement. La quantité minimale de 1 unité est retenue conformément à la règle de rotation faible/incertaine afin d'éviter tout surstock tout en assurant une présence produit.

**Tokens utilises pour cette prediction:**
- **Input**: 862 tokens
- **Output**: 107 tokens
- **Total**: 969 tokens



</details>




### Donnees d'Input LLM (22 produits)


<details>
<summary><strong>1. [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:08:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:08:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [FO001] FO CITRONNADE BIO 33cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:08:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:08:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:08:28: 1u
- 2025-05-28 06:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:08:28: 1u
- 2025-05-28 06:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:08:28: 3u
- 2025-05-28 06:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>8. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:08:28: 1u
- 2025-05-28 06:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:08:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:08:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:08:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:08:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LB003] LB Festive (4,5%) 33CL</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [LB004] LB Blonde (6,5%) 33CL</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:20:16: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [MANA01] MANA natural energy drink - citron & gingembre 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [MANA02] MANA natural energy drink - tropical passion 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [PAO01] PAOLA cola verre 250ml - le cola des Belges</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:20:16: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>20. [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:20:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>21. [AQUA01] AQUAPAX - natural mineral water 500ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>22. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (24)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Predicted 1u but not ordered |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Predicted 1u but not ordered |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Predicted 1u but not ordered |
| [DAF004] DAF Peach and Lemon with Honeybush flower 25cl | 1 | Predicted 1u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Predicted 1u but not ordered |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Predicted 1u but not ordered |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | Predicted 1u but not ordered |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Predicted 1u but not ordered |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | Predicted 1u but not ordered |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | Predicted 1u but not ordered |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 2 | Predicted 2u but not ordered |
| [ORG10] ORGANICA crunchy fruit mangue 18g | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Predicted 1u but not ordered |
| [REB05] REB chips bio - sel de mer 35g | 1 | Predicted 1u but not ordered |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Predicted 1u but not ordered |
| [LB005] LB Amber (5,2%) 33CL | 1 | Predicted 1u but not ordered |
| [LB006] LB Brown (7,0%)  33CL | 1 | Predicted 1u but not ordered |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Predicted 1u but not ordered |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Predicted 1u but not ordered |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Predicted 1u but not ordered |
| [ORG01] ORGANICA crunchy fruit ananas 16g | 1 | Predicted 1u but not ordered |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |


---

## False Negatives (14)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [CB010] CB Jus de Pomme cubis 3l | 10 | Never ordered in previous analysis window (no history) |
| [MF0014] MF Olives noires 500g | 1 | Never ordered in previous analysis window (no history) |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Never ordered in previous analysis window (no history) |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Never ordered in previous analysis window (no history) |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Never ordered in previous analysis window (no history) |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Never ordered in previous analysis window (no history) |
| [LV145] LV Sauce Tartare 200 ml  | 1 | Never ordered in previous analysis window (no history) |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | Never ordered in previous analysis window (no history) |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Never ordered in previous analysis window (no history) |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Never ordered in previous analysis window (no history) |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Never ordered in previous analysis window (no history) |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 5 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 30 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:21:48.062Z*
