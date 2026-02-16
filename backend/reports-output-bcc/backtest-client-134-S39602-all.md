# Rapport Backtest - Client Le bon Wagon Malmedy

## Contexte

- **Client** : Le bon Wagon Malmedy (ID: 134)
- **Commande réelle** : S39602
- **Date commande** : 2025-10-08 07:14:28
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 25
- **Tokens**: 21,883 input + 3,425 output = 25,308 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 22 produits prédits, 11 corrects |
| **Rappel** | 57.9% | 19 produits réels, 11 détectés |
| **F1-Score** | 53.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.64 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 74.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 72.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -64.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

---

## True Positives (11)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0033] MF Tarti Poivron chilli 250g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [MF0047] MF Mayonnaise 250ml | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [MF0052] MF Pois chiches  500g | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | 5 | 4.0 | 80.0% | partial | LLM |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 1 | 5 | 4.0 | 80.0% | partial | LLM |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | 5 | 4.0 | 80.0% | partial | LLM |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | 5 | 4.0 | 80.0% | partial | LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | 5 | 4.0 | 80.0% | partial | LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 5 | 4.0 | 80.0% | partial | LLM |


### Details des Predictions LLM (11 produits)


<details>
<summary><strong>1. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle précédent d'environ 70 jours entre juin et août. Au 7 octobre, 49 jours se sont écoulés depuis la dernière commande du 19 août, ce qui représente 70% du cycle moyen. Selon le principe de précaution B2B et le seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. La quantité est fixée à 2 unités, correspondant à la médiane et à la constante observée sur les commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 122 tokens
- **Total**: 1,012 tokens



</details>


<details>
<summary><strong>2. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 août, soit 49 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré pour ce produit à faible rotation. En l'absence d'un cycle régulier établi, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien des quantités pour les rotations faibles (1-2u) et à l'utilisation de la médiane historique, la quantité préconisée est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 163 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>3. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse montre un cycle de commande long et irrégulier (environ 70 jours entre les deux dernières commandes). Depuis la dernière commande du 19 août, 49 jours se sont écoulés. Bien que le cycle ne soit pas parfaitement défini, le délai actuel dépasse 70% de l'intervalle précédent, ce qui induit un risque de rupture potentiel dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, une commande est déclenchée. La quantité est fixée à 1 unité, correspondant à la valeur basse de l'historique récent pour éviter le surstockage sur un produit à rotation très faible.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 154 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>4. [MF0047] MF Mayonnaise 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 19 août 2025, soit 49 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours, créant une incertitude sur le cycle de rotation. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane (et unique valeur) de l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 146 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>5. [MF0052] MF Pois chiches  500g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 70 jours (entre juin et août). Depuis la dernière commande du 19 août, 49 jours se sont écoulés, ce qui représente 70% du cycle moyen. Le risque de rupture est donc imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : L'historique récent montre une régularité stricte de 1 unité par commande. En suivant la règle de la médiane et du maintien des faibles rotations, la quantité recommandée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 134 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>6. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 5u
- **Erreur LLM**: 4u (80.0%)
- **Erreur Mediane**: 4u (80.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
Le produit présente une rotation très faible avec une seule commande enregistrée il y a environ 120 jours. Bien que le cycle soit difficile à établir avec un seul point de donnée, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, surtout face à une incertitude de cycle. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane historique, afin de maintenir une disponibilité minimale sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 121 tokens
- **Total**: 996 tokens



</details>


<details>
<summary><strong>7. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 5u
- **Erreur LLM**: 4u (80.0%)
- **Erreur Mediane**: 4u (80.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 juin 2025, soit environ 119 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement en B2B. En application du principe de précaution et pour éviter une rupture prolongée sur un horizon de 30 jours, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 164 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>8. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM: 1u vs Médiane: 1u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 5u
- **Erreur LLM**: 4u (80.0%)
- **Erreur Mediane**: 4u (80.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 10 juin 2025, soit environ 119 jours. Bien que la rotation soit très faible (1 unité), l'absence de cycle régulier et le délai important depuis le dernier achat imposent une commande de précaution pour éviter une rupture de stock prolongée sur cette référence. ÉTAPE 2 : En suivant la règle de rotation très faible (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane de l'historique récent, afin de ne pas surstocker un produit à faible mouvement.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 137 tokens
- **Total**: 1,013 tokens



</details>


<details>
<summary><strong>9. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 5u
- **Erreur LLM**: 4u (80.0%)
- **Erreur Mediane**: 4u (80.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 juin 2025, soit 119 jours avant la date actuelle. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée une incertitude sur le stock disponible. En application du principe de précaution B2B (détecter un besoin incertain plutôt qu'une rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 186 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>10. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 5u
- **Erreur LLM**: 4u (80.0%)
- **Erreur Mediane**: 4u (80.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 10 juin 2025, soit environ 119 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et conformément à la règle sur les rotations faibles (maintenir 1-2u), une commande de 1 unité est préconisée pour reconstituer le stock. La quantité est basée sur la médiane de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 131 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>11. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 5u
- **Erreur LLM**: 4u (80.0%)
- **Erreur Mediane**: 4u (80.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Absence totale d'historique de commandes (récent et N-1). En application du principe de précaution B2B, tout doute sur le cycle ou l'absence de données doit déclencher une commande pour éviter une rupture potentielle sur un nouveau produit ou une référence non suivie. ÉTAPE 2 : En l'absence de médiane historique, une quantité minimale de 1 unité est préconisée pour initialiser le stock sans risque de surstockage massif.

**Tokens utilises pour cette prediction:**
- **Input**: 859 tokens
- **Output**: 111 tokens
- **Total**: 970 tokens



</details>




### Donnees d'Input LLM (11 produits)


<details>
<summary><strong>1. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:25:40: 2u
- 2025-06-10 06:40:58: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:25:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:25:40: 2u
- 2025-06-10 06:40:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [MF0047] MF Mayonnaise 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:25:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [MF0052] MF Pois chiches  500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:25:40: 1u
- 2025-06-10 06:40:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:40:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>7. [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:40:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>8. [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:40:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>9. [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:40:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>10. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 06:40:58: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>11. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 5u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Predicted 1u but not ordered |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Predicted 2u but not ordered |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Predicted 2u but not ordered |
| [MF0029] MF Tarti Datte chili 250g | 1 | Predicted 1u but not ordered |
| [MF0061] MF Compote | 1 | Predicted 1u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Predicted 1u but not ordered |
| [RF003] REFIELD Maïs 500G  | 2 | Predicted 2u but not ordered |
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | Predicted 2u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |


---

## False Negatives (8)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 5 | Never ordered in previous analysis window (no history) |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 5 | Never ordered in previous analysis window (no history) |
| [JOY02] JOY! Organic Strawberry Jam 370g | 2 | Never ordered in previous analysis window (no history) |
| [JOY03] JOY! Organic Apricot Jam 370g | 2 | Never ordered in previous analysis window (no history) |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 2 | Never ordered in previous analysis window (no history) |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 2 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 9 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 54 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:22:02.072Z*
