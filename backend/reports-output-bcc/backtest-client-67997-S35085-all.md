# Rapport Backtest - Client DEPOT VRAC SILLY SPRL, Sorenza

## Contexte

- **Client** : DEPOT VRAC SILLY SPRL, Sorenza (ID: 67997)
- **Commande réelle** : S35085
- **Date commande** : 2025-02-26 08:11:58
- **Date cutoff système** : 2025-02-25 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 19,213 input + 3,124 output = 22,337 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.6% | 22 produits prédits, 14 corrects |
| **Rappel** | 70.0% | 20 produits réels, 14 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.43 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 42.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 42.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JOY05] Organic Cherry Jam 370g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JOY07] JOY! Organic Fig Jam 370g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 23 janvier, soit 33 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le cycle de rotation est atteint. Bien que l'historique soit limité à une seule commande, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture de stock prolongée. La quantité est fixée à 1 unité, correspondant à la médiane (et unique valeur) de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 880 tokens
- **Output**: 115 tokens
- **Total**: 995 tokens



</details>


<details>
<summary><strong>2. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 23 janvier, soit 33 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré selon le cycle de rotation. En l'absence d'historique étendu, le principe de précaution B2B s'applique pour maintenir la disponibilité du produit. La quantité retenue correspond à la médiane de la commande la plus récente (1u), conformément à la règle de ne pas surestimer les volumes sur les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 126 tokens
- **Total**: 1,003 tokens



</details>


<details>
<summary><strong>3. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 23 janvier, soit 33 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le cycle de commande est atteint ou dépassé. En l'absence d'historique plus large pour définir une fréquence précise, le principe de précaution B2B s'applique pour éviter une rupture. La quantité retenue est de 1 unité, correspondant à la médiane (et unique valeur) de l'historique récent, respectant la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 122 tokens
- **Total**: 997 tokens



</details>


<details>
<summary><strong>4. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 23 janvier 2025, soit 33 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse le seuil de réapprovisionnement de 30 jours, créant un risque de rupture ou un besoin de renouvellement de stock. En application du principe de précaution B2B et face à l'incertitude du cycle, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la valeur de la commande précédente (médiane sur historique récent) pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 142 tokens
- **Total**: 1,012 tokens



</details>


<details>
<summary><strong>5. [JOY05] Organic Cherry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande date du 23 janvier, soit 33 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement du stock pour éviter une rupture. ÉTAPE 2 : L'historique récent présente une commande unique de 2 unités. En l'absence d'historique N-1 ou de données complémentaires, la règle de précaution B2B impose de maintenir cette quantité (médiane de 2u) pour assurer la disponibilité du produit sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 867 tokens
- **Output**: 133 tokens
- **Total**: 1,000 tokens



</details>


<details>
<summary><strong>6. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 23 janvier, soit il y a 33 jours. Avec un seuil de réapprovisionnement fixé à 30 jours, le risque de rupture est avéré ou imminent selon le principe de précaution B2B. L'historique récent montre une commande unique de 2 unités ; conformément à la règle de maintien des quantités pour les rotations faibles (1-2u) et à l'utilisation de la médiane historique, une quantité de 2 unités est préconisée pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 121 tokens
- **Total**: 990 tokens



</details>


<details>
<summary><strong>7. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 23 janvier 2025, soit 33 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le cycle de rotation est atteint. En l'absence d'historique plus large ou de données N-1, le principe de précaution B2B impose de prévoir une commande pour éviter la rupture. La quantité retenue correspond à la dernière commande connue (2 unités), conformément à la règle de maintien des volumes pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 118 tokens
- **Total**: 987 tokens



</details>


<details>
<summary><strong>8. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 23 janvier, soit 33 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse le seuil de réapprovisionnement de 30 jours, ce qui crée une incertitude sur le niveau de stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la valeur de la commande la plus récente (médiane par défaut), afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 143 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>9. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande date du 23 janvier, soit il y a 33 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de réapprovisionnement pour ce produit à rotation lente. En l'absence d'un historique long permettant de définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément aux règles de gestion des rotations faibles et à l'utilisation de la médiane, la quantité préconisée est maintenue à 2 unités pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 158 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>10. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 23 janvier, soit il y a 33 jours. Avec un seuil de réapprovisionnement de 30 jours, le délai écoulé dépasse l'horizon de sécurité. Bien que l'historique soit limité à une seule commande, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture de stock prolongée sur un produit actif. ÉTAPE 2 : Estimation quantité. En l'absence de cycle établi, on se base sur la quantité unique de l'historique récent (médiane de 1u). On maintient cette quantité minimale de 1 unité conformément à la règle sur les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 881 tokens
- **Output**: 164 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>11. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 23 janvier, soit 33 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous avons dépassé le cycle de précaution pour ce produit. Bien que l'historique soit limité à une seule commande récente, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture de stock prolongée. La quantité retenue correspond à la médiane de l'historique récent (1 unité), conformément à la règle de maintien des rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 124 tokens
- **Total**: 1,000 tokens



</details>


<details>
<summary><strong>12. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 23 janvier, soit 33 jours. Le seuil de réapprovisionnement est de 30 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse le seuil de vigilance. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 158 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>13. [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 janvier, soit 33 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est avéré ou le cycle de rotation est atteint. En l'absence d'historique long, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 146 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>14. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 23 janvier, soit il y a 33 jours. Avec un seuil de réapprovisionnement de 30 jours, nous dépassons l'horizon de sécurité. Bien que l'historique soit limité à une seule commande, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture de stock prolongée sur ce produit. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique volumineux, on se base sur la quantité unique observée (1u). Conformément aux règles de rotation faible et de maintien des quantités historiques, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 166 tokens
- **Total**: 1,042 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-23 07:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-23 07:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-23 07:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-23 07:46:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JOY05] Organic Cherry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-23 07:46:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-23 07:46:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-23 07:46:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JOY04] JOY! Organic Four-Fruit Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-23 07:46:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-23 07:46:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-23 07:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-23 07:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-23 07:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-23 07:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-23 07:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JOY03] JOY! Organic Apricot Jam 370g | 2 | Predicted 2u but not ordered |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | Predicted 2u but not ordered |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Predicted 1u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Predicted 1u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Predicted 1u but not ordered |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 1 | Predicted 1u but not ordered |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Predicted 1u but not ordered |
| [RISH01] RISH kombucha BIO - original 330ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (6)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Never ordered in previous analysis window (no history) |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | Never ordered in previous analysis window (no history) |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Never ordered in previous analysis window (no history) |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | Never ordered in previous analysis window (no history) |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | Never ordered in previous analysis window (no history) |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:26:07.626Z*
