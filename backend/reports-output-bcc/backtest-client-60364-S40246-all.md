# Rapport Backtest - Client ILLICO VENDING

## Contexte

- **Client** : ILLICO VENDING (ID: 60364)
- **Commande réelle** : S40246
- **Date commande** : 2025-11-12 09:21:18
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 10
- **Tokens**: 8,846 input + 1,439 output = 10,285 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 9 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 80.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 5.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 48.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 47.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -33.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 12 | 12 | 0.0 | 0.0% | exact | LLM |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 1 | 12 | 11.0 | 91.7% | partial | LLM |
| [REB05] REB chips bio - sel de mer 35g | 6 | 12 | 6.0 | 50.0% | partial | LLM |
| [REB06] REB chips bio - paprika fumé 35g | 1 | 12 | 11.0 | 91.7% | partial | LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 10 | 10 | 0.0 | 0.0% | exact | LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 15 | 10 | 5.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM: 12u vs Médiane: 9u (Réel: 12u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 12u
- **Baseline calculee**: 12u
- **Mediane historique**: 9u
- **Reel commande**: 12u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 3u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 12u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande d'environ 70 jours (entre juillet et septembre). Au 11 novembre, 56 jours se sont écoulés depuis la dernière commande du 16 septembre, ce qui représente 80% du cycle moyen. Le seuil de risque (70%) étant dépassé et l'horizon de réapprovisionnement étant de 30 jours, le risque de rupture est imminent. La quantité retenue correspond à la médiane des commandes passées (12 unités), conformément à la règle de maintien des volumes sur une rotation régulière.

**Tokens utilises pour cette prediction:**
- **Input**: 912 tokens
- **Output**: 136 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>2. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM: 1u vs Médiane: 4u (Réel: 12u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 4u
- **Reel commande**: 12u
- **Erreur LLM**: 11u (91.7%)
- **Erreur Mediane**: 8u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles irréguliers (environ 30 à 60 jours). La dernière commande remonte au 16 septembre, soit 56 jours avant la date actuelle. Ce délai dépasse largement le cycle moyen estimé, créant un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, bien qu'une commande de 12 unités ait eu lieu en juillet, les données les plus récentes montrent une rotation très faible (1 unité en septembre). Conformément aux règles de gestion des rotations faibles et à l'utilisation de la médiane pour éviter la surestimation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 174 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>3. [REB05] REB chips bio - sel de mer 35g</strong> - LLM: 6u vs Médiane: 8u (Réel: 12u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 8u
- **Reel commande**: 12u
- **Erreur LLM**: 6u (50.0%)
- **Erreur Mediane**: 4u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 septembre, soit 56 jours. L'intervalle précédent était de 41 jours. Nous avons largement dépassé le cycle moyen constaté. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est critique ou le stock est déjà épuisé. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre deux commandes (10u et 6u). En application de la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute ou la médiane pour éviter le surstockage sur un produit à faible rotation, la quantité de 6 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 162 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>4. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM: 1u vs Médiane: 8u (Réel: 12u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 8u
- **Reel commande**: 12u
- **Erreur LLM**: 11u (91.7%)
- **Erreur Mediane**: 4u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 16 septembre, soit 56 jours. Bien que le cycle entre les deux dernières commandes soit de 41 jours, le délai actuel dépasse largement ce cycle (56 > 41). Le risque de rupture est élevé ou le stock est probablement épuisé à l'horizon de 30 jours. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre deux commandes (6u et 1u). Conformément à la règle de privilégier la médiane et, en cas de doute ou de rotation faible, de choisir la valeur la plus basse pour éviter le surstockage, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 184 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>5. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 10u vs Médiane: 9u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 9u
- **Reel commande**: 10u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (10.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 06/08/2025, soit 97 jours sans activité. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de rotation standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. La quantité retenue est de 10 unités, correspondant à l'unique point de référence historique disponible (médiane par défaut).

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 121 tokens
- **Total**: 994 tokens



</details>


<details>
<summary><strong>6. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 15u vs Médiane: 10u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 15u
- **Baseline calculee**: 15u
- **Mediane historique**: 10u
- **Reel commande**: 10u
- **Erreur LLM**: 5u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 15u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 08/07/2025, soit plus de 120 jours sans activité. Bien que la rotation soit faible ou irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement un cycle standard de réapprovisionnement. En l'absence d'historique multiple, la quantité est basée sur la dernière commande connue (15u) pour assurer la disponibilité du produit sans surstockage, conformément à la règle de maintien des volumes constants pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 126 tokens
- **Total**: 1,000 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 08:28:00: 12u
- 2025-08-06 12:56:12: 0u
- 2025-07-08 06:23:16: 12u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 12u
**Quantite Reelle**: 12u

</details>


<details>
<summary><strong>2. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 08:28:00: 1u
- 2025-08-06 12:56:12: 0u
- 2025-07-08 06:23:16: 12u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 12u

</details>


<details>
<summary><strong>3. [REB05] REB chips bio - sel de mer 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 08:28:00: 10u
- 2025-08-06 12:56:12: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 12u

</details>


<details>
<summary><strong>4. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 08:28:00: 1u
- 2025-08-06 12:56:12: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 12u

</details>


<details>
<summary><strong>5. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 12:56:12: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>6. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-08 06:23:16: 15u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 15u
**Quantite Reelle**: 10u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [NOM01] NOMADIC barre protéinée au beurre de noix & baies 40g | 7 | Predicted 7u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 30 | Predicted 30u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 30 | Predicted 30u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:16:19.294Z*
