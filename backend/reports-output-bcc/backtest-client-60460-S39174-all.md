# Rapport Backtest - Client LES DELICES DE PINCHART

## Contexte

- **Client** : LES DELICES DE PINCHART (ID: 60460)
- **Commande réelle** : S39174
- **Date commande** : 2025-09-22 11:22:41
- **Date cutoff système** : 2025-09-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 11
- **Tokens**: 9,628 input + 1,718 output = 11,346 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 81.8% | 11 produits prédits, 9 corrects |
| **Rappel** | 75.0% | 12 produits réels, 9 détectés |
| **F1-Score** | 78.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.11 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 62.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 60.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [WIG04] WIGNAC cidre rosé bio 750ml | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |
| [WIG03] WIGNAC cidre naturel bio 750ml | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [WIG02] WIGNAC cidre rosé bio 330ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [WIG01] WIGNAC cidre naturel bio 330ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 06/08/2025, soit 46 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré pour ce produit à faible rotation. En l'absence d'un cycle historique établi, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément aux règles de gestion des rotations faibles, on maintient la quantité observée (médiane de 2u) sans l'augmenter, afin de couvrir le besoin tout en évitant le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 162 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/08/2025, soit 46 jours. L'intervalle précédent était de 64 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où le cycle moyen (environ 55-60 jours) risque d'être atteint prochainement. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 173 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 06/08/2025, soit 46 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré pour maintenir une disponibilité constante, d'autant plus que le cycle de rotation sur ce type de produit bio est généralement mensuel. En l'absence d'historique long, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 3 unités. En suivant la règle de maintien de la quantité pour les rotations régulières ou faibles et en utilisant la valeur historique disponible comme référence médiane, la quantité de 3 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 181 tokens
- **Total**: 1,056 tokens



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
La dernière commande remonte au 06/08/2025, soit 46 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane de l'historique récent pour ce produit à rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 121 tokens
- **Total**: 996 tokens



</details>


<details>
<summary><strong>5. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/08/2025, soit 46 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence de cycle établi, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément aux règles de rotation faible et de maintien des quantités constatées, la médiane de 1 unité est retenue pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 160 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>6. [WIG04] WIGNAC cidre rosé bio 750ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 46 jours (6 août). Bien que le cycle soit difficile à établir avec un seul point de donnée, le délai écoulé dépasse largement un mois, ce qui induit un risque de rupture imminent selon le principe de précaution B2B (incertitude sur le cycle = besoin potentiel). Conformément aux règles de gestion des faibles rotations (1-2u), la quantité préconisée est maintenue à 1 unité, correspondant à la médiane historique, pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 130 tokens
- **Total**: 1,002 tokens



</details>


<details>
<summary><strong>7. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 06/08/2025, soit 46 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans une zone de risque de rupture si le cycle de consommation est mensuel ou légèrement supérieur. En l'absence d'historique long, le principe de précaution B2B s'applique pour éviter une rupture sur ce produit bio. ÉTAPE 2 : La seule donnée historique récente est de 1 unité. Conformément à la règle sur les rotations faibles (1-2u) et à l'utilisation de la médiane, la quantité recommandée est de 1 unité pour maintenir le stock sans surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 164 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>8. [WIG02] WIGNAC cidre rosé bio 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 06/08/2025, soit 46 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est considéré comme élevé ou incertain en raison de l'absence d'historique long terme permettant de définir un cycle précis. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent ne présente qu'une seule commande de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u) et à l'utilisation de la médiane, la quantité de 1 unité est maintenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 170 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>9. [WIG01] WIGNAC cidre naturel bio 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 06/08/2025, soit 46 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est considéré comme présent par principe de précaution B2B, car le cycle de rotation est encore difficile à établir avec une seule commande récente. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle de rotation faible et à l'utilisation de la médiane, la quantité recommandée est maintenue à 1 unité pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 150 tokens
- **Total**: 1,022 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:24:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:24:04: 1u
- 2025-06-03 07:50:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:24:04: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:24:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:24:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [WIG04] WIGNAC cidre rosé bio 750ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:24:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>7. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:24:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [WIG02] WIGNAC cidre rosé bio 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:24:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [WIG01] WIGNAC cidre naturel bio 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 06:24:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [RIT01] RITCHIE Orange - verre 275ml | 1 | Predicted 1u but not ordered |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 2 | Never ordered in previous analysis window (no history) |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Never ordered in previous analysis window (no history) |
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:23:18.833Z*
