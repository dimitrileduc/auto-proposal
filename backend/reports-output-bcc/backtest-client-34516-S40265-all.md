# Rapport Backtest - Client Fromagerie du Baîrsou

## Contexte

- **Client** : Fromagerie du Baîrsou (ID: 34516)
- **Commande réelle** : S40265
- **Date commande** : 2025-11-12 10:51:16
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 27
- **Tokens**: 23,837 input + 4,132 output = 27,969 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 52.0% | 25 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 68.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.08 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 7.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 7.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 7.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 12 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (13)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (13 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre deux commandes espacées de 53 jours (04/08 au 26/09). La dernière commande remonte au 26/09, soit 46 jours avant la date actuelle (11/11). Ce délai représente 86% du cycle précédent, dépassant le seuil de risque de 70%. Un besoin est donc probable dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. Les deux dernières commandes sont identiques (1u). La médiane est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 160 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 septembre, soit 46 jours. Le cycle précédent était de 91 jours. Bien que nous ne soyons pas encore au terme du cycle moyen, le délai de réapprovisionnement de 30 jours nous place dans une zone de risque (46 + 30 = 76 jours, proche du cycle observé). En application du principe de précaution B2B et face à un historique restreint, une commande est nécessaire pour éviter une rupture. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite avec deux commandes de 2 unités. La médiane est de 2. Conformément à la règle sur les rotations faibles, on maintient cette quantité sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 177 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 septembre, soit 46 jours. Le cycle précédent était de 91 jours. Bien que nous ne soyons qu'à 50% du cycle moyen estimé, la rotation est très faible et irrégulière. En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière), un risque de rupture est identifié à l'horizon de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite à 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 unité est maintenue pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 178 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 septembre, soit 46 jours. Le cycle précédent était de 53 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent (46 + 30 > 53). En application du principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. La médiane est de 1. Conformément aux règles sur les rotations faibles, on maintient la quantité de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 160 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 26 septembre, soit il y a 46 jours. Le cycle précédent était de 91 jours. Bien que nous ne soyons pas encore à 70% du cycle moyen théorique, la rotation est très faible et irrégulière. En application du principe de précaution B2B (doute sur le cycle = prévoir commande) et pour éviter une rupture sur un produit à faible rotation, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation. L'historique récent montre une constance absolue à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 175 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>6. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 26 septembre, soit 46 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit de snacking. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et compte tenu du seuil de 30 jours, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane de l'historique récent pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 135 tokens
- **Total**: 1,012 tokens



</details>


<details>
<summary><strong>7. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 septembre, soit 46 jours. Le cycle précédent était de 91 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 76 jours d'écart à l'échéance du seuil. En vertu du principe de précaution B2B (cycle irrégulier et risque de rupture à l'horizon du seuil), un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). La médiane et la constante étant de 1, la quantité recommandée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 897 tokens
- **Output**: 170 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>8. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 26 septembre, soit 46 jours écoulés. Bien que la rotation soit faible, le délai depuis la dernière commande dépasse largement le cycle précédent (environ 90 jours entre juin et septembre). Compte tenu du seuil de réapprovisionnement de 30 jours et du principe de précaution B2B en cas de cycle irrégulier, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 896 tokens
- **Output**: 167 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>9. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 septembre, soit 46 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. En l'absence de cycle établi et avec une rotation très faible, la règle impose de maintenir la quantité historique de 1 unité sans chercher à augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 144 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>10. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 septembre, soit 46 jours. Le cycle moyen observé est d'environ 50 jours (63 jours entre juin et août, 53 jours entre août et septembre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous dépassons largement les 70% du cycle moyen. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u, 1u et 2u. La médiane est de 1u. Conformément à la règle de précaution sur les faibles rotations et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 912 tokens
- **Output**: 177 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>11. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 26 septembre 2025, soit 46 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande (rotation très faible), le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et de la règle de détection du besoin en cas de cycle incertain, un risque de rupture est identifié. La quantité retenue correspond à la médiane de l'historique récent (1 unité), conformément à la règle de maintien des faibles rotations sans surestimation du stock.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 139 tokens
- **Total**: 1,017 tokens



</details>


<details>
<summary><strong>12. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 septembre, soit 46 jours. Le cycle précédent était de 91 jours. Bien que nous soyons à environ 50% du cycle moyen, la rotation est très faible et irrégulière. En application du principe de précaution B2B (si doute sur le cycle ou rotation difficile à déterminer), un risque de rupture est identifié à l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité absolue à 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1u est maintenue sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 165 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>13. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen observé est d'environ 91 jours. La dernière commande date du 26 septembre 2025, soit il y a 46 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 76 jours d'ici la fin de la période de vigilance, ce qui représente plus de 80% du cycle moyen. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. La médiane est de 1. Conformément aux règles sur les rotations faibles, la quantité de 1 unité est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 176 tokens
- **Total**: 1,064 tokens



</details>




### Donnees d'Input LLM (13 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 10:57:31: 1u
- 2025-08-04 11:45:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 10:57:31: 2u
- 2025-06-27 09:02:34: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 10:57:31: 1u
- 2025-06-27 09:02:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 10:57:31: 1u
- 2025-08-04 11:45:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 10:57:31: 1u
- 2025-06-27 09:02:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 10:57:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 10:57:31: 1u
- 2025-06-27 09:02:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 10:57:31: 1u
- 2025-06-27 09:02:34: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 10:57:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 10:57:31: 2u
- 2025-08-04 11:45:41: 1u
- 2025-06-27 09:02:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 10:57:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 10:57:31: 1u
- 2025-06-27 09:02:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-26 10:57:31: 1u
- 2025-06-27 09:02:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (12)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Predicted 1u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Predicted 1u but not ordered |
| [SOWA01] SOWA citron menthe 250ml | 2 | Predicted 2u but not ordered |
| [SOWA02] SOWA bissap 250ml | 1 | Predicted 1u but not ordered |
| [SOWA03] SOWA ginger beer ardent 250ml | 2 | Predicted 2u but not ordered |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Predicted 1u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 1 | Predicted 1u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 1 | Predicted 1u but not ordered |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Predicted 1u but not ordered |
| [LV216] LV Biscuits apéro Fromage & Oignon 100g bio | 1 | Predicted 1u but not ordered |
| [JOY05] Organic Cherry Jam 370g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:09:34.366Z*
