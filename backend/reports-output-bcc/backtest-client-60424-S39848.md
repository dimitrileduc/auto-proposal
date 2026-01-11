# Rapport Backtest - Client LA PETITE EPICERIE BIO

## Contexte

- **Client** : LA PETITE EPICERIE BIO (ID: 60424)
- **Commande réelle** : S39848
- **Date commande** : 2025-10-22 13:46:04
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 57
- **Tokens**: 50,309 input + 8,446 output = 58,755 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.0% | 35 produits prédits, 21 corrects |
| **Rappel** | 100.0% | 21 produits réels, 21 détectés |
| **F1-Score** | 75.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 21 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (21)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [fsv04] Amande nature bio vrac 2,8 kg | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [fsv03] Noisette nature bio vrac 2,8kg  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (21 produits)


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
Le produit présente une rotation très faible et irrégulière avec une commande de 1 unité tous les 4 mois environ (mai et septembre). La dernière commande remonte à 34 jours. Bien que le cycle soit long, le principe de précaution B2B s'applique car nous entrons dans la fenêtre de réapprovisionnement potentielle par rapport à l'intervalle précédent. Conformément aux règles pour les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique) pour éviter une rupture sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 126 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen constaté est d'environ 50 à 60 jours. La dernière commande date du 17 septembre, soit il y a 34 jours. À l'horizon des 30 prochains jours (Replenishment Threshold Days), nous atteindrons 64 jours sans commande, ce qui dépasse le cycle habituel. Le risque de rupture est donc identifié. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 167 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible et irrégulière (2 commandes isolées en 5 mois). La dernière commande remonte à 34 jours. Bien que le cycle soit difficile à définir, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée sur un produit à faible rotation. Conformément aux règles de gestion des faibles volumes (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane et au mode des commandes récentes, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 131 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>4. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 112 jours entre les deux dernières commandes. Depuis la dernière commande du 17 septembre 2025, 34 jours se sont écoulés. Bien que nous ne soyons pas encore au terme du cycle moyen, la rotation est très faible et irrégulière. En application du principe de précaution B2B (Étape 1), tout doute sur le cycle impose de prévoir un réapprovisionnement pour éviter une rupture potentielle dans l'horizon des 30 jours. Pour la quantité (Étape 2), la médiane historique est strictement de 1 unité, quantité maintenue pour respecter la faible rotation du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 153 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>5. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 17 septembre, soit 34 jours avant la date actuelle. Bien que l'historique soit limité, le délai entre les deux commandes précédentes était d'environ 4 mois. Cependant, avec un seuil de réapprovisionnement de 30 jours et une rotation irrégulière, le principe de précaution B2B s'applique pour éviter une rupture prolongée sur un produit à faible rotation. ÉTAPE 2 : Estimation de la quantité. L'historique montre une constance absolue avec des commandes unitaires (1u). La médiane et le mode étant de 1, la quantité recommandée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 165 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>6. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande observé est d'environ 112 jours. La dernière commande date du 17 septembre 2025, soit il y a 34 jours. Bien que nous ne soyons qu'à environ 30% du cycle théorique, la rotation est très faible et irrégulière (seulement deux points de données). En application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture sur un produit à faible rotation) et compte tenu du seuil de réapprovisionnement de 30 jours, une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 161 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>7. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande régulier de 61 jours (17 juillet au 17 septembre). Au 21 octobre, 34 jours se sont écoulés depuis la dernière commande, ce qui représente environ 55% du cycle moyen. Bien que nous ne soyons pas encore au seuil critique des 70%, le délai de réapprovisionnement de 30 jours nous place dans une zone de risque de rupture avant la prochaine opportunité de commande. En application du principe de précaution B2B et pour couvrir l'horizon des 30 prochains jours, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 165 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>8. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 17 septembre, soit il y a 34 jours. Bien que l'historique soit limité (2 commandes), l'intervalle précédent était de 112 jours. Cependant, avec un seuil de réapprovisionnement de 30 jours et une rotation irrégulière, le principe de précaution B2B s'applique pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). La médiane est de 1. Conformément aux règles pour les rotations faibles, on maintient la quantité de 1u sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 164 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>9. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 62 jours entre les deux dernières commandes (juillet et septembre). Au 21 octobre, 34 jours se sont écoulés depuis la dernière commande, ce qui représente environ 55% du cycle moyen. Bien que nous ne soyons pas encore au seuil de 70%, la rotation est très faible et irrégulière. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture potentielle dans les 30 prochains jours), une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 156 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande d'environ 60 jours (juillet à septembre). La dernière commande date du 17 septembre, soit il y a 34 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une rupture est probable avant la prochaine opportunité de commande (34 + 30 = 64 jours, dépassant le cycle habituel). Par principe de précaution B2B, le besoin est détecté. ÉTAPE 2 : Estimation quantité. Les deux dernières commandes sont constantes à 1 unité. La médiane est de 1. Conformément aux règles de rotation faible, on maintient la quantité historique sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 175 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>11. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'historique récent montre un cycle de commande d'environ 60 jours (juillet à septembre). Depuis la dernière commande du 17 septembre, 34 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une nouvelle commande est probable pour éviter la rupture (34 + 30 jours dépassant le cycle habituel). La rotation est faible mais constante à 1 unité par commande. En application du principe de précaution B2B et de la règle de la médiane sur historique récent, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 141 tokens
- **Total**: 1,033 tokens



</details>


<details>
<summary><strong>12. [fsv04] Amande nature bio vrac 2,8 kg</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 50 à 60 jours. La dernière commande datant du 17 septembre (il y a 34 jours), le prochain besoin est estimé dans environ 15 à 25 jours, ce qui entre dans l'horizon du seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à un historique de quantités variable (1u, 4u, 1u), la médiane de 1u est retenue pour éviter le surstockage tout en couvrant le risque de rupture.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 139 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>13. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 60 à 70 jours (mai, juillet, septembre). La dernière commande datant du 17 septembre (il y a 34 jours), nous entrons dans la zone de risque de rupture pour les 30 prochains jours (seuil de réapprovisionnement). Conformément au principe de précaution B2B et à la stabilité parfaite des quantités précédentes, la médiane de 1 unité est retenue pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 126 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>14. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 17 juillet 2025, soit plus de 90 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et pour éviter une rupture prolongée sur un produit premium, une commande est nécessaire. La quantité retenue correspond à la médiane historique (1 unité), conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 109 tokens
- **Total**: 984 tokens



</details>


<details>
<summary><strong>15. [fsv03] Noisette nature bio vrac 2,8kg </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande d'environ 50 jours (entre mai et juillet). Depuis la dernière commande du 17 juillet 2025, 96 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité est fixée à 1 unité, correspondant à la médiane stricte des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 128 tokens
- **Total**: 1,018 tokens



</details>


<details>
<summary><strong>16. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 28 mai 2025, soit plus de 140 jours sans activité. Bien que le cycle de rotation soit difficile à déterminer avec une seule commande historique, le principe de précaution B2B s'applique ici : en cas de doute sur le cycle ou de rotation irrégulière, il convient de prévoir un réapprovisionnement pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane (et unique valeur) de l'historique récent, respectant la règle de maintien des faibles rotations sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 133 tokens
- **Total**: 1,005 tokens



</details>


<details>
<summary><strong>17. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 146 jours (28 mai 2025). Bien que la rotation soit très faible (1 unité), l'absence de commande récente sur une période aussi longue, combinée au principe de précaution B2B, suggère un risque de rupture de stock ou un besoin de renouvellement imminent. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique) pour couvrir le seuil de réapprovisionnement de 30 jours sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 131 tokens
- **Total**: 1,008 tokens



</details>


<details>
<summary><strong>18. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 146 jours (28 mai 2025). Bien que la rotation soit extrêmement faible (1 unité), le délai écoulé dépasse largement tout cycle de réapprovisionnement standard. En application du principe de précaution B2B (Étape 1), un besoin est détecté pour éviter une rupture prolongée. Pour la quantité (Étape 2), la médiane historique étant de 1 unité, cette valeur est maintenue pour éviter un surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 119 tokens
- **Total**: 995 tokens



</details>


<details>
<summary><strong>19. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 mai 2025, soit plus de 140 jours. Bien que la rotation soit extrêmement faible, le principe de précaution B2B et l'absence de cycle régulier identifiable imposent de prévoir un réapprovisionnement pour éviter une rupture totale de stock sur une période prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique) pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 879 tokens
- **Output**: 156 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>20. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 mai 2025, soit plus de 140 jours. Bien que la rotation soit très faible, le principe de précaution B2B s'applique face à une absence prolongée de réapprovisionnement pour maintenir une présence en rayon. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale historique de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 138 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>21. [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte à 146 jours (28 mai). Bien que la rotation soit extrêmement faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 158 tokens
- **Total**: 1,036 tokens



</details>




### Donnees d'Input LLM (21 produits)


<details>
<summary><strong>1. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u
- 2025-07-17 06:56:22: 1u
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u
- 2025-07-17 06:56:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u
- 2025-07-17 06:56:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u
- 2025-07-17 06:56:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u
- 2025-07-17 06:56:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [fsv04] Amande nature bio vrac 2,8 kg</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u
- 2025-07-17 06:56:22: 4u
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u
- 2025-07-17 06:56:22: 1u
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:56:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [fsv03] Noisette nature bio vrac 2,8kg </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:56:22: 1u
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [NOM02] NOMADIC barre protéinée au beurre de noix & miel 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:15:14: 1u

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
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | Predicted 1u but not ordered |
| [MANA01] MANA natural energy drink - citron & gingembre 250ml | 1 | Predicted 1u but not ordered |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Predicted 1u but not ordered |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Predicted 1u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Predicted 1u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Predicted 1u but not ordered |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Predicted 1u but not ordered |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Predicted 1u but not ordered |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | Predicted 1u but not ordered |
| [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml | 1 | Predicted 1u but not ordered |
| [RIT05] RITCHIE Cola - verre 275ml | 1 | Predicted 1u but not ordered |
| [MF0052] MF Pois chiches  500g | 1 | Predicted 1u but not ordered |
| [fsv01] Cerneaux de noix nature bio vrac 1,8kg | 1 | Predicted 1u but not ordered |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:17:29.665Z*
