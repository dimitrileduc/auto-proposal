# Rapport Backtest - Client Speisekammer

## Contexte

- **Client** : Speisekammer (ID: 308)
- **Commande réelle** : S40140
- **Date commande** : 2025-11-05 13:30:41
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 12
- **Tokens**: 11,009 input + 1,805 output = 12,814 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 72.7% | 11 produits prédits, 8 corrects |
| **Rappel** | 66.7% | 12 produits réels, 8 détectés |
| **F1-Score** | 69.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 22.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 21.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -11.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 4 | 5 | 1.0 | 20.0% | partial | LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MF0029] MF Tarti Datte chili 250g | 4 | 5 | 1.0 | 20.0% | partial | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 01/09/2025, soit 64 jours avant la date actuelle. L'historique montre des cycles de commande espacés (environ tous les 2 à 4 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est jugé élevé car nous entrons dans la fenêtre habituelle de réassort. ÉTAPE 2 : L'historique récent et N-1 montre des quantités stables entre 2u et 3u. En suivant la règle de la médiane et le principe de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 171 tokens
- **Total**: 1,095 tokens



</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 01/09/2025, soit 64 jours sans activité. Bien que l'historique récent soit très faible (1u), le délai écoulé dépasse largement les cycles habituels observés l'année précédente (environ tous les 60 jours). En application du principe de précaution B2B pour éviter une rupture prolongée sur un produit à rotation lente, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la commande la plus récente et à la valeur la plus basse pour minimiser le risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 138 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 01/09/2025, soit 64 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier variant entre 2 et 4 mois. Compte tenu du délai écoulé et du seuil de réapprovisionnement de 30 jours, le risque de rupture est probable ou incertain, ce qui justifie une commande par précaution. La quantité est basée sur la médiane de l'historique (2u), en privilégiant la valeur basse pour éviter le surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 133 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>4. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 4u vs Médiane: 4u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 1u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 01/09/2025, soit 64 jours avant la date actuelle. L'historique montre des cycles de commande irréguliers (environ 60 à 80 jours). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent selon le principe de précaution B2B. La quantité retenue est de 4 unités, correspondant à la médiane des commandes récentes et à la dernière commande effectuée, afin de maintenir le stock sans surévaluer le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 129 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>5. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 01/09/2025, soit 64 jours. Bien que l'historique soit irrégulier et à faible rotation, le délai écoulé dépasse largement le cycle observé l'année précédente à la même période (août/septembre). En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié pour l'horizon de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes très faibles (1u ou 2u). La médiane des commandes est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1u pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 192 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 01/09/2025, soit plus de 60 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 45 à 60 jours entre les commandes d'août et octobre). En application du principe de précaution B2B pour éviter une rupture sur un produit à faible rotation, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la dernière commande enregistrée, afin de ne pas surstocker un produit à faible débit.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 146 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>7. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 4u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 01/09/2025, soit 64 jours avant la date actuelle. L'historique montre un cycle de commande moyen d'environ 60 à 70 jours (ex: juin à août, août à octobre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous avons dépassé la périodicité habituelle. En application du principe de précaution B2B et de la détection d'un cycle régulier, une commande est nécessaire. La quantité retenue est de 4 unités, correspondant à la médiane et à la valeur de la commande la plus récente.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 153 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>8. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande enregistrée remonte à octobre 2024. Bien qu'il n'y ait pas de commandes récentes en 2025, l'historique N-1 montre une rotation faible mais persistante (environ tous les 2 à 4 mois). En application du principe de précaution B2B et face à l'absence de données récentes, un risque de rupture ou un besoin de réapprovisionnement est identifié pour couvrir le cycle annuel. ÉTAPE 2 : Estimation de la quantité. L'historique complet (N-1) est constant avec des commandes unitaires de 1u. La médiane et la règle de rotation très faible (1-2u) imposent de maintenir la quantité minimale historique. Une commande de 1u est donc préconisée pour reconstituer le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 199 tokens
- **Total**: 1,106 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 12:07:59: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:21:29: 3u
- 2024-06-05 13:14:08: 3u
- 2024-04-15 06:29:39: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 12:07:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 12:37:03: 2u
- 2024-06-05 13:14:08: 3u
- 2024-04-15 06:29:39: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 12:07:59: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:21:29: 2u
- 2024-08-14 12:37:03: 1u
- 2024-06-05 13:14:08: 4u
- 2024-04-15 06:29:39: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 12:07:59: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:21:29: 5u
- 2024-08-14 12:37:03: 1u
- 2024-06-05 13:14:08: 4u
- 2024-04-15 06:29:39: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>5. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 12:07:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-14 12:37:03: 2u
- 2024-04-15 06:29:39: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 12:07:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:21:29: 1u
- 2024-08-14 12:37:03: 2u
- 2024-04-15 06:29:39: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-01 12:07:59: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:21:29: 4u
- 2024-08-14 12:37:03: 3u
- 2024-06-05 13:14:08: 3u
- 2024-04-15 06:29:39: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>8. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 09:21:29: 1u
- 2024-08-14 12:37:03: 1u
- 2024-04-15 06:29:39: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 3 | Predicted 3u but not ordered |
| [MF0055] MF Noix de cajou - Curry 133g | 2 | Predicted 2u but not ordered |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Predicted 1u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Never ordered in previous analysis window (no history) |
| [MF0062] ​MF Tarti Betterave rouge | 2 | Product analyzed but LLM -> 0 - client ordered 2u |
| [VID0009] Consigne casier | 21 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 126 | Never ordered in previous analysis window (no history) |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de consommation, aucun besoin de réapprovisionnement ne peut être justifié. Le risque de rupture est nul par défaut de demande enregistrée.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:12:59.562Z*
