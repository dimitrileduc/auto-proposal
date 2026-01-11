# Rapport Backtest - Client EPI-CERI SPRL LOUIS DELHAIZE

## Contexte

- **Client** : EPI-CERI SPRL LOUIS DELHAIZE (ID: 38920)
- **Commande réelle** : S35918
- **Date commande** : 2025-04-09 11:24:38
- **Date cutoff système** : 2025-04-08 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 17
- **Tokens**: 14,923 input + 2,553 output = 17,476 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 41.2% | 17 produits prédits, 7 corrects |
| **Rappel** | 46.7% | 15 produits réels, 7 détectés |
| **F1-Score** | 43.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.14 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 12.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 7.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 12.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF029] JF VOL AU VENT BOCAL 400G | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/02/2025, soit plus de 60 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en mars. Le délai écoulé dépasse largement le cycle de réapprovisionnement habituel pour ce type de produit à faible rotation. Par principe de précaution B2B et pour éviter une rupture prolongée, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est constant à 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 168 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>2. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/02/2025, soit plus de 60 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En B2B, le principe de précaution s'applique pour éviter une rupture sur un produit à rotation lente. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément aux règles pour les rotations très faibles (1-2u), on maintient la quantité historique sans l'augmenter. La médiane est de 1.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 156 tokens
- **Total**: 1,031 tokens



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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 03/02/2025, soit 64 jours écoulés. Bien que l'historique soit limité à une seule commande, le délai dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (cycle incertain = risque de rupture), un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 161 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>4. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 64 jours (03/02/2025). Bien que la rotation soit très faible, l'historique N-1 montre une commande à cette période précise (06/03/2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes historiques et à la règle de maintien pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 131 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 03/02/2025, soit plus de 60 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle suggéré par l'historique N-1 (mars). En application du principe de précaution B2B pour éviter une rupture prolongée sur un produit à faible rotation, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la commande la plus récente et respectant la règle de ne pas augmenter les stocks sur les produits à rotation 1-2u.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 133 tokens
- **Total**: 1,019 tokens



</details>


<details>
<summary><strong>6. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 03/02/2025, soit plus de 60 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la seule valeur historique disponible (médiane par défaut).

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 116 tokens
- **Total**: 987 tokens



</details>


<details>
<summary><strong>7. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 03/02/2025, soit 64 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un besoin est identifié. ÉTAPE 2 : L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 152 tokens
- **Total**: 1,024 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-03 09:49:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-06 14:37:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-03 09:49:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-03 09:49:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-03 09:49:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-06 14:37:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-03 09:49:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-06 14:37:56: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-03 09:49:11: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-03 09:49:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |


---

## False Negatives (8)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Never ordered in previous analysis window (no history) |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Never ordered in previous analysis window (no history) |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Never ordered in previous analysis window (no history) |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:24:48.335Z*
