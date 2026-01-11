# Rapport Backtest - Client DISTRIBECQ / ITM REBECQ

## Contexte

- **Client** : DISTRIBECQ / ITM REBECQ (ID: 38778)
- **Commande réelle** : S39284
- **Date commande** : 2025-09-22 06:21:14
- **Date cutoff système** : 2025-09-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 24
- **Tokens**: 21,669 input + 3,777 output = 25,446 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 57.1% | 21 produits prédits, 12 corrects |
| **Rappel** | 92.3% | 13 produits réels, 12 détectés |
| **F1-Score** | 70.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.08 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 7.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 4.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (12)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (12 produits)


<details>
<summary><strong>1. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 04/06/2025, soit plus de 100 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement tout cycle raisonnable pour un produit actif. Un risque de rupture est identifié par défaut d'activité récente. ÉTAPE 2 : L'historique (récent et N-1) montre une quantité constante de 1 unité. Conformément à la règle sur les rotations faibles, la quantité maintenue est de 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 147 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>2. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible et irrégulière (environ une commande tous les 3 à 6 mois). La dernière commande remonte au 04 juin 2025, soit plus de 100 jours sans activité. Bien que le cycle soit difficile à définir précisément, le principe de précaution B2B s'applique ici car le délai depuis la dernière commande dépasse largement les intervalles observés l'année précédente (mars à septembre). Un besoin est donc probable pour maintenir le stock. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 158 tokens
- **Total**: 1,062 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/06/2025, soit plus de 100 jours. L'historique N-1 montre une commande le 13/09/2024. Bien que la rotation soit très faible, le délai écoulé et la saisonnalité passée indiquent un besoin de réapprovisionnement imminent pour éviter une rupture sur ce produit à rotation lente. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des commandes unitaires (médiane de 1u). Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité minimale de 1 unité pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 177 tokens
- **Total**: 1,118 tokens



</details>


<details>
<summary><strong>4. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte à plus de 100 jours (04/06/2025). Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels constatés. En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : L'historique (récent et N-1) montre une constante de 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 162 tokens
- **Total**: 1,052 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/06/2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'historique N-1 montre des commandes espacées de 1 à 2 mois. Le délai écoulé dépasse largement le cycle habituel, créant une incertitude sur le niveau de stock actuel. Par principe de précaution B2B, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique complet (récent et N-1) est d'une stabilité absolue avec des commandes systématiques de 1 unité. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 197 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/06/2025, soit plus de 100 jours. L'historique N-1 montre une commande le 13/09/2024, ce qui indique un besoin récurrent à cette période de l'année. Le cycle est irrégulier mais le délai depuis la dernière commande dépasse largement les seuils de précaution. Le risque de rupture est élevé pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique est constant avec des commandes unitaires (1u). La médiane des commandes récentes et passées est de 1. Application du principe de maintien pour rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 165 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/06/2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'historique N-1 montre des commandes espacées de 1 à 3 mois. Le délai écoulé dépasse largement le cycle habituel, créant un doute sur l'état du stock. Par principe de précaution B2B, un besoin est identifié. ÉTAPE 2 : Estimation quantité. L'historique (récent et N-1) est constant à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 178 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>8. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/06/2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'historique montre une commande en septembre l'année précédente (13/09/2024). Par principe de précaution B2B et pour éviter une rupture sur un produit à cycle long mais récurrent, un besoin est identifié. ÉTAPE 2 : Estimation quantité. L'historique est constant avec des commandes unitaires (1u). La médiane des commandes récentes et passées est de 1. On maintient donc cette quantité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 156 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>9. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande enregistrée date du 13 septembre de l'année précédente. Bien qu'il n'y ait pas de commandes récentes sur l'année en cours, l'historique N-1 montre une commande systématique à cette période précise (mi-septembre). En application du principe de précaution B2B et pour éviter une rupture sur un produit à cycle saisonnier ou annuel, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique est extrêmement stable avec des commandes constantes de 1 unité. La médiane et la règle de maintien pour les rotations faibles (1-2u) confirment une préconisation de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 163 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>10. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande enregistrée date du 13 septembre de l'année précédente. Bien qu'il n'y ait pas de commandes récentes, l'historique N-1 montre une activité régulière à cette période (septembre). En l'absence de données récentes et suivant le principe de précaution B2B pour éviter une rupture sur un produit à rotation lente mais existante, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique oscille entre 1u et 2u. La médiane de l'historique disponible est de 1,5u. Conformément à la règle de choisir la valeur la plus basse en cas de doute pour ne pas surestimer le stock, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 928 tokens
- **Output**: 181 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>11. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une commande à la même période l'année dernière (13 septembre). Le délai depuis cette date anniversaire est de 8 jours, ce qui entre dans la fenêtre de risque des 30 jours (Replenishment Threshold Days). En B2B, le principe de précaution s'applique pour éviter une rupture sur un produit saisonnier ou à cycle annuel. ÉTAPE 2 : Estimation de la quantité. L'historique montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles sur les rotations faibles, la quantité maintenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 160 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>12. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le produit présente une rotation très faible mais saisonnière, avec une commande enregistrée à la même période l'année dernière (13 septembre). En l'absence de commandes récentes et compte tenu du principe de précaution B2B pour éviter une rupture sur un cycle annuel potentiel, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique N-1 montre des commandes constantes de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 est maintenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 142 tokens
- **Total**: 1,034 tokens



</details>




### Donnees d'Input LLM (12 produits)


<details>
<summary><strong>1. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 08:58:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-25 14:44:51: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 08:58:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:46:21: 1u
- 2024-03-15 08:58:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 08:58:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:46:21: 1u
- 2024-06-24 13:25:04: 2u
- 2024-04-25 14:44:51: 1u
- 2024-03-15 08:58:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 08:58:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-15 08:58:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 08:58:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:25:04: 1u
- 2024-04-25 14:44:51: 1u
- 2024-03-15 08:58:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 08:58:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:46:21: 1u
- 2024-06-24 13:25:04: 1u
- 2024-04-25 14:44:51: 1u
- 2024-03-15 08:58:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 08:58:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:25:04: 1u
- 2024-04-25 14:44:51: 1u
- 2024-03-15 08:58:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 08:58:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:46:21: 1u
- 2024-04-25 14:44:51: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:46:21: 1u
- 2024-06-24 13:25:04: 1u
- 2024-04-25 14:44:51: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:46:21: 1u
- 2024-06-24 13:25:04: 2u
- 2024-04-25 14:44:51: 2u
- 2024-03-15 08:58:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:46:21: 1u
- 2024-03-15 08:58:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:46:21: 1u
- 2024-03-15 08:58:30: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (9)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Aucune donnée historique disponible (commandes récentes ou N-1) pour ce produit. En l'absence totale d'historique de rotation, il est impossible d'établir un cycle de commande ou une quantité médiane. Par mesure de prudence et pour éviter un surstockage injustifié, aucune commande n'est préconisée tant qu'un besoin n'est pas identifié.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:13:31.158Z*
