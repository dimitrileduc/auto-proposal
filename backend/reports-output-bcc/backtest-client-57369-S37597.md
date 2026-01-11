# Rapport Backtest - Client Krämerladen Wermelskirchen

## Contexte

- **Client** : Krämerladen Wermelskirchen (ID: 57369)
- **Commande réelle** : S37597
- **Date commande** : 2025-06-23 06:33:22
- **Date cutoff système** : 2025-06-22 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 16
- **Tokens**: 13,844 input + 1,978 output = 15,822 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 63.6% | 11 produits prédits, 7 corrects |
| **Rappel** | 87.5% | 8 produits réels, 7 détectés |
| **F1-Score** | 73.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.71 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 60.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 54.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 10.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0034] MF Tarti Pomme Raifort 250g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 5 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [MF0051] MF Kidney Beans 500g | 1 | 6 | 5.0 | 83.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 11 mars 2025, soit plus de 100 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est maintenue à la valeur observée pour assurer la disponibilité sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 146 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>2. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 4u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 mars 2025, soit plus de 100 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles standards de réapprovisionnement. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent présente une commande unique de 4 unités. En l'absence d'autres données ou de saisonnalité N-1, la médiane se base sur cette valeur de référence pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 158 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>3. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 11 mars 2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'absence de commande récente sur un produit de type tartinable suggère un besoin de réapprovisionnement pour maintenir le stock en rayon, conformément au principe de précaution B2B (risque de rupture manquée). ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent présente une commande unique de 4 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité est maintenue à 4 unités pour assurer la présence du produit sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 168 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 mars 2025, soit plus de 100 jours. Bien que l'historique soit limité à une seule commande, l'absence de visibilité sur le cycle de rotation impose l'application du principe de précaution B2B. Le risque de rupture est considéré comme probable ou incertain sur l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. En l'absence de cycle régulier, la quantité est basée sur l'unique point de donnée récent (3 unités), ce qui correspond à la médiane de l'historique disponible. Ce volume modeste limite le risque de surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 170 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 11 mars 2025, soit plus de 100 jours sans activité. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter une rupture prolongée), une commande est préconisée. La quantité retenue correspond à la seule valeur historique disponible (3 unités), conformément à la règle de maintien des volumes pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 125 tokens
- **Total**: 998 tokens



</details>


<details>
<summary><strong>6. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 5u vs Médiane: 6u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 6u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 3u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 mars 2025, soit plus de 100 jours. Bien que la rotation soit faible, l'absence de visibilité sur le cycle de commande et le principe de précaution B2B imposent de prévoir un réapprovisionnement pour éviter une rupture prolongée, le délai de réapprovisionnement de 30 jours étant largement dépassé par l'intervalle actuel. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique N-1 et avec une seule commande récente de 5 unités, la médiane s'établit à 5. On maintient ce volume pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 168 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>7. [MF0051] MF Kidney Beans 500g</strong> - LLM: 1u vs Médiane: 3u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 6u
- **Erreur LLM**: 5u (83.3%)
- **Erreur Mediane**: 3u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
Absence totale d'historique de commandes (récent et N-1). En application du principe de précaution B2B et de la règle de détection du besoin en cas de doute ou d'absence de cycle déterminé, une commande est nécessaire pour constituer un stock initial ou tester la rotation. La quantité minimale de 1 unité est retenue conformément à la règle de rotation faible/incertaine afin d'éviter tout surstock tout en prévenant une rupture potentielle.

**Tokens utilises pour cette prediction:**
- **Input**: 856 tokens
- **Output**: 107 tokens
- **Total**: 963 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-11 08:20:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-11 08:20:05: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-11 08:20:05: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-11 08:20:05: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-11 08:20:05: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-11 08:20:05: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [MF0051] MF Kidney Beans 500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 6u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0047] MF Mayonnaise 250ml | 4 | Predicted 4u but not ordered |
| [MF0052] MF Pois chiches  500g | 3 | Predicted 3u but not ordered |
| [RF003] REFIELD Maïs 500G  | 1 | Predicted 1u but not ordered |
| [MF0031] MF Tarti Olives verte 250g  | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0061] MF Compote | 3 | Product analyzed but LLM -> 0 - client ordered 3u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [MF0061] MF Compote</strong> - LLM predit: 0u | Reel commande: 3u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour établir un cycle de consommation ou une quantité de référence. En l'absence totale d'historique de rotation, aucun besoin de réapprovisionnement ne peut être justifié selon le principe de précaution contre le surstockage.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:19:59.608Z*
