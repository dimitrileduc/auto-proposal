# Rapport Backtest - Client CARREFOUR BELGIUM SA, Market Reet

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Market Reet (ID: 17308)
- **Commande réelle** : S39433
- **Date commande** : 2025-09-29 06:08:20
- **Date cutoff système** : 2025-09-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 19,697 input + 3,360 output = 23,057 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 45.0% | 20 produits prédits, 9 corrects |
| **Rappel** | 81.8% | 11 produits réels, 9 détectés |
| **F1-Score** | 58.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.22 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 14.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 11.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | 4 | 0.0 | 0.0% | exact | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 09/07/2025, soit 81 jours. L'historique de l'année précédente montre des commandes espacées de 60 à 90 jours (mars, juin, août). Nous sommes actuellement dans la fenêtre critique de réapprovisionnement par rapport au cycle historique. En application du principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est la médiane de l'historique disponible (2, 4, 4, 6), soit 4 unités, ce qui correspond également à la quantité la plus fréquente observée l'an dernier.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 153 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>2. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 09/07/2025, soit 81 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en août. Le délai écoulé dépasse largement les cycles habituels de réapprovisionnement B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 est constant à 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 171 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>3. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 09/07/2025, soit 81 jours. Bien que l'historique montre une rotation très faible et irrégulière (cycle moyen difficile à définir), le principe de précaution B2B s'applique car le délai depuis la dernière commande est important. Le risque de rupture à l'horizon de 30 jours est considéré comme probable ou incertain. En suivant la règle des rotations faibles (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 133 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et espacée (environ tous les 2 à 3 mois). La dernière commande remonte au 09/07/2025, soit plus de 80 jours. Bien que le cycle soit irrégulier, le délai écoulé dépasse largement la fréquence habituelle constatée en 2024, ce qui indique un besoin imminent ou un risque de rupture pour couvrir les 30 prochains jours. En application du principe de précaution B2B et de la règle sur les faibles rotations, une commande de 1 unité (médiane historique) est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 138 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit 81 jours. L'historique montre un cycle de rotation lent et irrégulier (environ tous les 2 à 3 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est présent car nous entrons dans la fenêtre habituelle de commande constatée l'année précédente (août/septembre). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique est constant avec des commandes unitaires de 1u. La médiane des commandes récentes et passées est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1u sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 193 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>6. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit 81 jours. L'historique N-1 montre une commande en août (13/08/2024). Bien que la rotation soit très faible, le délai depuis la dernière commande dépasse largement le cycle habituel observé l'an dernier. Par principe de précaution B2B et pour éviter une rupture prolongée sur un produit à faible rotation, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique est constant à 1 unité par commande. La médiane et le mode étant de 1, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 166 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>7. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Aucune commande récente n'est enregistrée, mais l'historique de l'année précédente montre une rotation très faible et régulière (1 unité environ tous les 2 à 3 mois). La dernière commande enregistrée remonte à plus d'un an (août 2024). En application du principe de précaution B2B et pour pallier l'absence de données récentes, un besoin est détecté pour maintenir le stock. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique disponible.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 126 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>8. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit présente une rotation très faible et irrégulière (2 unités sur l'année précédente). La dernière commande enregistrée remonte à plus d'un an (août 2024). En application du principe de précaution B2B, l'absence de commande récente sur un cycle indéterminé crée un doute sur le niveau de stock actuel. Un besoin est donc détecté pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. Conformément à la règle des rotations très faibles (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane et au mode de l'historique disponible, afin de maintenir une présence en stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 175 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>9. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une commande à la mi-août. Avec une date actuelle au 28 septembre et un seuil de réapprovisionnement de 30 jours, le cycle est incertain ou très lent. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique récent, la base est la commande N-1 de la même période. La quantité de 1 unité est maintenue conformément à la règle sur les rotations très faibles pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 169 tokens
- **Total**: 1,040 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:16:22: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-13 06:23:03: 4u
- 2024-06-13 07:08:47: 2u
- 2024-03-19 12:20:40: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:16:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-13 06:23:03: 1u
- 2024-03-19 12:20:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:16:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-13 06:23:03: 1u
- 2024-03-19 12:20:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:16:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-13 06:23:03: 1u
- 2024-06-13 07:08:47: 1u
- 2024-03-19 12:20:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:16:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-13 06:23:03: 1u
- 2024-06-13 07:08:47: 1u
- 2024-03-19 12:20:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 11:16:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-13 06:23:03: 1u
- 2024-06-13 07:08:47: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-13 06:23:03: 1u
- 2024-06-13 07:08:47: 1u
- 2024-03-19 12:20:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-13 06:23:03: 1u
- 2024-03-19 12:20:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-13 06:23:03: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | Predicted 2u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (Recent Orders et Last Year Orders sont vides). En l'absence totale d'historique de consommation ou de cycle de commande, il est impossible d'identifier un besoin ou de calculer une médiane. Par mesure de prudence et pour éviter un surstockage injustifié, aucune commande n'est préconisée.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:21:21.544Z*
