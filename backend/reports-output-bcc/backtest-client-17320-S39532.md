# Rapport Backtest - Client CARREFOUR BELGIUM SA, MARKET TONGEREN VELINX

## Contexte

- **Client** : CARREFOUR BELGIUM SA, MARKET TONGEREN VELINX (ID: 17320)
- **Commande réelle** : S39532
- **Date commande** : 2025-10-03 06:23:42
- **Date cutoff système** : 2025-10-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 20
- **Tokens**: 18,055 input + 3,244 output = 21,299 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.0% | 20 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 57.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 53.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 62.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -13.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | 3 | 2.0 | 66.7% | partial | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 3 | 1 | 2.0 | 200.0% | partial | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 03/07/2025, soit environ 90 jours. Bien que l'historique montre une rotation très faible et espacée, le délai écoulé dépasse largement les cycles observés précédemment (environ 30 jours en 2024). En application du principe de précaution B2B et pour couvrir un risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 135 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit 91 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé est très important. En application du principe de précaution B2B (cycle difficile à déterminer = prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. En l'absence de cycle régulier, on se base sur la quantité unique observée (2u). La médiane de l'historique récent étant de 2, cette quantité est maintenue pour assurer le réapprovisionnement sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 161 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 03/07/2025, soit 91 jours. Bien que la rotation soit faible, l'historique N-1 montre une activité sur la période août-octobre. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et face à un cycle irrégulier, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la règle de maintien pour les produits à très faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 128 tokens
- **Total**: 1,050 tokens



</details>


<details>
<summary><strong>4. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit 91 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande fin août. Avec un seuil de réapprovisionnement de 30 jours et une absence de commande depuis 3 mois, le risque de rupture ou de besoin imminent est présent selon le principe de précaution B2B (doute sur le cycle = prévoir). ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes de 1u et 2u. Conformément à la règle de rotation faible et au choix de la valeur la plus basse en cas de doute, la quantité retenue est la médiane basse de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 183 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 (Détection) : La dernière commande remonte au 03/07/2025, soit environ 91 jours. Le cycle précédent était de 56 jours. Nous avons largement dépassé le cycle moyen constaté, ce qui indique un besoin imminent ou une rupture probable. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est critique. ÉTAPE 2 (Quantité) : L'historique récent montre des commandes de 2u et 3u. La médiane est de 2.5u. En application de la règle de prudence B2B (choisir la valeur la plus basse en cas de doute), la quantité retenue est de 2u, ce qui correspond également au volume commandé à la même période l'année dernière (août 2024).

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 192 tokens
- **Total**: 1,115 tokens



</details>


<details>
<summary><strong>6. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 08/05/2025, soit environ 147 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane historique et respectant la règle de maintien pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 121 tokens
- **Total**: 996 tokens



</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/05/2025, soit environ 147 jours. Bien que l'historique montre une rotation très faible et irrégulière (cycle difficile à déterminer), le principe de précaution B2B s'applique face à une absence de commande prolongée. Un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes très bas (1u, 2u, 3u). La médiane des commandes est de 2u. Conformément aux règles pour les rotations faibles, on maintient la quantité médiane sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 168 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>8. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/05/2025, soit environ 147 jours. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 100 jours entre mai et août 2024). En application du principe de précaution B2B et face à un cycle incertain, un besoin de réapprovisionnement est détecté pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 3u, tandis que l'historique N-1 montre des unités de 1u. La médiane des commandes récentes est de 3u. Conformément à la règle de maintien des quantités sur rotation régulière ou récente, la quantité retenue est de 3u.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 201 tokens
- **Total**: 1,106 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:26:19: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 06:54:08: 1u
- 2024-05-16 08:03:29: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:26:19: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:26:19: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:53:58: 3u
- 2024-06-13 06:54:08: 2u
- 2024-05-16 08:03:29: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:26:19: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:53:58: 2u
- 2024-05-16 08:03:29: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 07:26:19: 2u
- 2025-05-08 09:47:34: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:53:58: 2u
- 2024-05-16 08:03:29: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 09:47:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 09:47:34: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:53:58: 3u
- 2024-05-16 08:03:29: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 09:47:34: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 06:53:58: 1u
- 2024-05-16 08:03:29: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>




---

## False Positives (12)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF021] JF PICKLES 350 ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:13:06.098Z*
