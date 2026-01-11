# Rapport Backtest - Client Brasserie Bertinchamps

## Contexte

- **Client** : Brasserie Bertinchamps (ID: 24492)
- **Commande réelle** : S40155
- **Date commande** : 2025-11-06 12:37:37
- **Date cutoff système** : 2025-11-05 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 15
- **Tokens**: 13,696 input + 2,531 output = 16,227 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 80.0% | 15 produits prédits, 12 corrects |
| **Rappel** | 100.0% | 12 produits réels, 12 détectés |
| **F1-Score** | 88.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.08 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 61.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 42.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -51.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (12)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV214] LV Biscuits apéro tomate basilic 100g bio  | 2 | 9 | 7.0 | 77.8% | partial | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 3 | 16 | 13.0 | 81.3% | partial | Non | Non | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (12 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 01/10/2025, soit 35 jours avant la date actuelle. Bien que le cycle de rotation soit lent et irrégulier (intervalle de plus de 100 jours entre les deux dernières commandes), le délai actuel dépasse le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (2u) et au volume de la commande la plus récente.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 142 tokens
- **Total**: 1,095 tokens



</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 01/10/2025, soit 35 jours avant la date actuelle. Bien que la rotation soit faible, l'historique montre une commande en octobre 2025 et une commande en janvier 2024, suggérant un besoin potentiel pour la fin d'année/début d'hiver. Le délai depuis la dernière commande dépasse le seuil de réapprovisionnement (30 jours), créant un doute sur la rupture. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité quasi constante à 1 unité (médiane = 1). Conformément aux règles sur les rotations faibles, on maintient la quantité minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 194 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 01/10/2025, soit 35 jours avant la date actuelle. Bien que le cycle soit irrégulier, le délai écoulé dépasse le seuil de réapprovisionnement (30 jours). En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 3u. La médiane est de 2u, mais conformément à la règle de prudence en cas de doute ou de rotation faible, la quantité la plus basse (1u) est privilégiée pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 178 tokens
- **Total**: 1,097 tokens



</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 01/10/2025, soit 35 jours avant la date actuelle (05/11/2025). Bien que le cycle soit irrégulier, le délai écoulé dépasse le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (risque de rupture sur un produit à faible rotation), un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. L'historique N-1 est stable à 2u. En cas de doute entre deux quantités (1 ou 2) et conformément à la règle de ne pas surestimer pour le stock de sécurité, la valeur la plus basse de la période récente est privilégiée.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 196 tokens
- **Total**: 1,133 tokens



</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 01/10/2025, soit 35 jours avant la date actuelle (05/11/2025). Bien que le cycle soit irrégulier, le délai dépasse le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité à 2 unités (octobre et juin 2025). La médiane des commandes récentes et de l'année précédente (N-1) pour les volumes les plus fréquents est de 2 unités. On maintient cette quantité constante sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 175 tokens
- **Total**: 1,128 tokens



</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 01/10/2025, soit 35 jours avant la date actuelle. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes unitaires (1u en juin et octobre 2025). Conformément à la règle sur les rotations faibles, on maintient la quantité la plus basse observée récemment. La médiane des commandes de 2025 est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 183 tokens
- **Total**: 1,101 tokens



</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 01/10/2025, soit 35 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais espacé (environ tous les 3 à 4 mois en 2025, plus fréquent en 2024). Étant donné que nous avons dépassé le délai de 30 jours (Replenishment Threshold Days) et que le cycle est incertain, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et historiques (2u, 3u, 2u, 3u, 2u), en privilégiant la valeur la plus basse pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 181 tokens
- **Total**: 1,120 tokens



</details>


<details>
<summary><strong>8. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 01/10/2025, soit il y a 35 jours. Bien que le cycle historique soit long et irrégulier, le délai actuel dépasse le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (incertitude sur le cycle = prévoir), un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité parfaite avec des commandes systématiques de 2 unités. La médiane est de 2u. Conformément à la règle sur les rotations faibles, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 165 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>9. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 01/10/2025, soit il y a 35 jours. Avec un seuil de réapprovisionnement de 30 jours et un historique récent limité à une seule commande, le cycle de rotation est incertain. En application du principe de précaution B2B (Étape 1), un risque de rupture est identifié car le délai depuis la dernière commande dépasse le seuil de vigilance. Pour la quantité (Étape 2), on se base sur la seule valeur historique disponible (2u) pour maintenir le stock sans surévaluer.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 135 tokens
- **Total**: 1,007 tokens



</details>


<details>
<summary><strong>10. [LV214] LV Biscuits apéro tomate basilic 100g bio </strong> - LLM: 2u vs Médiane: 2u (Réel: 9u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 9u
- **Erreur LLM**: 7u (77.8%)
- **Erreur Mediane**: 7u (77.8%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 01/10/2025, soit 35 jours avant la date actuelle. Bien que le cycle soit irrégulier (intervalle précédent de 105 jours), le délai actuel dépasse le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité à 2 unités par commande. La médiane des commandes récentes est de 2. Conformément à la règle sur les rotations faibles, on maintient ce volume habituel sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 168 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>11. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 3u vs Médiane: 2u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 16u
- **Erreur LLM**: 13u (81.3%)
- **Erreur Mediane**: 14u (87.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 juin 2025, soit plus de 140 jours. Bien que l'historique soit très espacé, le principe de précaution B2B s'applique car le cycle est irrégulier et difficile à déterminer. Un besoin est à prévoir pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. La commande la plus récente est de 3 unités. En l'absence de données médianes significatives sur une rotation régulière, on maintient le volume de la dernière commande récente (3u) pour assurer le stock sans surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 150 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>12. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation extrêmement faible et irrégulière (dernière commande il y a 140 jours). Bien que le cycle soit difficile à déterminer, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le seuil de 30 jours est largement dépassé par rapport à l'intervalle historique. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes passées (1u en 2024 et 2025), afin de ne pas surstocker un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 138 tokens
- **Total**: 1,029 tokens



</details>




### Donnees d'Input LLM (12 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:20:22: 2u
- 2025-06-18 06:31:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:05:08: 2u
- 2024-06-20 06:55:13: 1u
- 2024-03-28 08:08:46: 2u
- 2024-01-09 13:58:53: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:20:22: 1u
- 2025-06-18 06:31:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 06:55:13: 1u
- 2024-01-09 13:58:53: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:20:22: 1u
- 2025-06-18 06:31:05: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:05:08: 2u
- 2024-06-20 06:55:13: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:20:22: 1u
- 2025-06-18 06:31:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:05:08: 2u
- 2024-03-28 08:08:46: 2u
- 2024-01-09 13:58:53: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:20:22: 2u
- 2025-06-18 06:31:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:05:08: 2u
- 2024-06-20 06:55:13: 1u
- 2024-03-28 08:08:46: 1u
- 2024-01-09 13:58:53: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:20:22: 1u
- 2025-06-18 06:31:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:05:08: 2u
- 2024-01-09 13:58:53: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:20:22: 2u
- 2025-06-18 06:31:05: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:05:08: 2u
- 2024-03-28 08:08:46: 3u
- 2024-01-09 13:58:53: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:20:22: 2u
- 2025-06-18 06:31:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-20 06:05:08: 2u
- 2024-01-09 13:58:53: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:20:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV214] LV Biscuits apéro tomate basilic 100g bio </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-01 07:20:22: 2u
- 2025-06-18 06:31:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 06:55:13: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 9u

</details>


<details>
<summary><strong>11. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 06:31:05: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-01-09 13:58:53: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>12. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 06:31:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 06:55:13: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 2 | Predicted 2u but not ordered |
| [LV040] LV Caprons apéritifs 240g | 1 | Predicted 1u but not ordered |
| [LV216] LV Biscuits apéro Fromage & Oignon 100g bio | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:13:10.061Z*
