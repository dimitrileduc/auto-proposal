# Rapport Backtest - Client SPAR QUEUE DU BOIS HCS DISTRIBUTION

## Contexte

- **Client** : SPAR QUEUE DU BOIS HCS DISTRIBUTION (ID: 39079)
- **Commande réelle** : S39640
- **Date commande** : 2025-10-09 11:25:33
- **Date cutoff système** : 2025-10-08 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 28
- **Tokens**: 25,622 input + 4,579 output = 30,201 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 34.6% | 26 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 51.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.56 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 31.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 23.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -18.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 5 | 3.0 | 60.0% | partial | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | 2 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 2u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 27 août 2025, soit 42 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier (allant de 10 jours à plus de 2 mois). En application du principe de précaution B2B face à un cycle incertain et une absence de commande en septembre, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 présente des volumes compris entre 1u et 3u. La médiane des commandes historiques (1, 3, 1, 1, 2, 3) se situe à 1.5u. En cas de doute entre deux quantités et pour éviter le surstock sur un produit à rotation modérée, la valeur de 2u est retenue pour couvrir le besoin prochain.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 215 tokens
- **Total**: 1,168 tokens



</details>


<details>
<summary><strong>2. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août 2025, soit 42 jours avant la date actuelle. Bien que le cycle soit irrégulier, l'historique montre des besoins espacés de 2 à 3 mois. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture pour maintenir la disponibilité de ce produit à faible rotation. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une constance absolue sur des commandes unitaires (1u). La médiane des quantités est de 1. En respectant la règle de ne pas augmenter sans raison pour les faibles rotations, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 173 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 27 août 2025, soit 42 jours avant la date actuelle. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement le cycle observé l'année précédente à la même période (août). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est considéré comme probable par principe de précaution B2B. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé, conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 135 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande récent est d'environ 90 jours. La dernière commande remontant au 27 août 2025 (soit 42 jours avant la date actuelle), nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours selon le principe de précaution B2B, car le cycle est irrégulier. En suivant la règle de la médiane des commandes récentes (1u en mai et août 2025) et en privilégiant la valeur la plus basse pour éviter le surstockage sur un produit à faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 138 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>5. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 juillet 2025, soit il y a 86 jours. L'historique montre un cycle de commande irrégulier mais espacé (environ tous les 2 à 3 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car nous entrons dans la fenêtre habituelle de renouvellement. En application du principe de précaution B2B et face à un cycle incertain, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus récente observée, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 149 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>6. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 14 juillet 2025, soit 86 jours. L'historique montre des cycles de commande espacés (environ 30 à 70 jours). Le délai actuel dépasse largement le cycle habituel, ce qui indique un besoin imminent ou une rupture probable dans l'horizon des 30 jours (seuil de réapprovisionnement). ÉTAPE 2 : L'historique récent et N-1 montre une consommation stable de 1 à 2 unités. La médiane des commandes passées est de 2 unités. En suivant le principe de précaution B2B et la stabilité du produit, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 162 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>7. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 juillet 2025, soit environ 86 jours. L'historique montre des commandes espacées de 2 à 3 mois (mai à juillet 2025, mai à août 2024). Nous sommes actuellement le 8 octobre, ce qui place le produit dans une fenêtre de réapprovisionnement probable pour couvrir les besoins des 30 prochains jours, d'autant plus que le cycle est irrégulier (principe de précaution B2B). ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est extrêmement stable avec des commandes systématiques de 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 190 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>8. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 juillet 2025, soit 86 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles observés l'année précédente (entre 10 et 60 jours). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes très bas (1u ou 2u). Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 182 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>9. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 14 juillet 2025, soit environ 86 jours. Bien que le cycle soit irrégulier, le délai écoulé depuis la dernière commande dépasse largement les intervalles habituels observés l'année précédente (environ 30 à 40 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue correspond à la médiane des commandes récentes (2u), ce qui permet de maintenir le stock sans risque de surstockage pour ce type de produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 157 tokens
- **Total**: 1,098 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:23:13: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 12:05:14: 1u
- 2024-06-11 11:53:22: 3u
- 2024-05-06 07:14:20: 1u
- 2024-04-12 10:01:26: 1u
- 2024-04-02 08:08:41: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>2. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:23:13: 1u
- 2025-05-27 13:20:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-11 11:53:22: 1u
- 2024-04-12 10:01:26: 1u
- 2024-04-02 08:08:41: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:23:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 12:05:14: 1u
- 2024-05-06 07:14:20: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 06:23:13: 1u
- 2025-05-27 13:20:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-11 11:53:22: 2u
- 2024-04-12 10:01:26: 2u
- 2024-04-02 08:08:41: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:14:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 12:05:14: 2u
- 2024-06-11 11:53:22: 1u
- 2024-04-12 10:01:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:14:30: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 12:05:14: 2u
- 2024-06-11 11:53:22: 1u
- 2024-05-06 07:14:20: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:14:30: 1u
- 2025-05-27 13:20:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 12:05:14: 1u
- 2024-05-06 07:14:20: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:14:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-11 11:53:22: 2u
- 2024-04-12 10:01:26: 2u
- 2024-04-02 08:08:41: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 09:14:30: 2u
- 2025-05-27 13:20:28: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-11 11:53:22: 2u
- 2024-05-06 07:14:20: 1u
- 2024-04-12 10:01:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (17)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Predicted 1u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | Predicted 1u but not ordered |
| [LD015] LD Onion Spread 180g | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [LD013] LD Tuscan Organic Spread 180 g | 2 | Predicted 2u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:11:40.488Z*
