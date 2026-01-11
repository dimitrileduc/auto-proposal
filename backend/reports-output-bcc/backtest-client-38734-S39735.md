# Rapport Backtest - Client CRF MARKET BARCHON

## Contexte

- **Client** : CRF MARKET BARCHON (ID: 38734)
- **Commande réelle** : S39735
- **Date commande** : 2025-10-16 11:40:19
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 29
- **Tokens**: 26,236 input + 4,644 output = 30,880 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 35.7% | 28 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 52.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 15.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 45 à 75 jours (mai-juillet-septembre). La dernière commande remonte au 02/09/2025, soit 43 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous entrons dans la fenêtre habituelle de commande. La rotation est très faible et constante sur l'année 2025 avec des commandes unitaires systématiques. En appliquant la règle de la médiane sur l'historique récent et le principe de précaution pour les rotations faibles, une quantité de 1 unité est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 167 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>2. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 45 à 70 jours (mai-juillet-septembre). La dernière commande datant du 02/09/2025 (soit 43 jours avant la date actuelle), le produit entre dans sa fenêtre critique de réapprovisionnement compte tenu du seuil de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter la rupture. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes récentes et à la stabilité du volume historique.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 142 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 02/09/2025, soit 43 jours. Bien que le cycle historique soit long et irrégulier (environ 3-4 mois), l'absence de commande récente et le délai écoulé créent une incertitude sur le niveau de stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est déclenchée. ÉTAPE 2 : L'historique récent montre une stabilité à 2 unités (mai et septembre 2025). La médiane des commandes récentes est de 2. Conformément à la règle sur les rotations faibles, on maintient cette quantité habituelle sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 172 tokens
- **Total**: 1,092 tokens



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
La dernière commande remonte au 02/09/2025, soit 43 jours. Bien que le cycle historique soit long (environ 98 jours entre les deux dernières commandes), l'absence d'historique N-1 et la faible rotation imposent une vigilance. En appliquant le principe de précaution B2B (risque de rupture à l'horizon de 30 jours si le besoin client est erratique), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane basse des commandes récentes, afin d'éviter le surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 141 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>5. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse montre une rotation faible mais régulière (1 unité par commande). La dernière commande remonte au 02/09/2025, soit 43 jours. Le cycle moyen observé est d'environ 54 jours (entre juillet et septembre). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (43 + 30 > 54). En application du principe de précaution B2B et face à un cycle de rotation lente, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 151 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>6. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 juillet 2025, soit plus de 90 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement un cycle de réapprovisionnement standard. Un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une constante de 1 unité par commande. En suivant la règle des rotations faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane historique.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 156 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>7. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 juillet 2025, soit 97 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels observés (environ 40 jours entre mai et juillet l'année précédente). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité absolue à 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 unité est maintenue pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 175 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>8. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 10 juillet 2025, soit 97 jours. Le cycle précédent était de 44 jours. Nous avons largement dépassé le cycle moyen constaté, ce qui indique un besoin imminent ou une rupture de stock probable. En application du principe de précaution B2B (cycle irrégulier), le besoin est validé. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une consommation constante de 1 unité par commande. Bien qu'une commande de 2 unités ait eu lieu l'année dernière à la même période, la règle de la médiane sur l'historique récent et la consigne de ne pas surestimer imposent de maintenir la quantité à 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 179 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>9. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 mai 2025, soit plus de 140 jours. Bien que la rotation soit extrêmement faible (produit de niche), le délai écoulé dépasse largement tout cycle raisonnable. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une consommation constante de 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 173 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>10. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 mai 2025, soit plus de 140 jours. Bien que la rotation soit extrêmement faible, le principe de précaution B2B s'applique face à une absence prolongée de commande pour un produit actif. Le risque de rupture ou de besoin client non couvert est présent. ÉTAPE 2 : Estimation quantité. L'historique (récent et N-1) montre une constante de 1 unité par commande. En suivant la règle de maintien pour les rotations très faibles (1-2u) et l'utilisation de la médiane historique, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 157 tokens
- **Total**: 1,042 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 08:53:54: 1u
- 2025-07-10 09:27:00: 1u
- 2025-05-27 10:08:00: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-17 11:08:31: 3u
- 2024-04-18 07:27:24: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 08:53:54: 1u
- 2025-07-10 09:27:00: 1u
- 2025-05-27 10:08:00: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-17 11:08:31: 2u
- 2024-04-18 07:27:24: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 08:53:54: 2u
- 2025-05-27 10:08:00: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 10:56:08: 1u
- 2024-05-30 13:40:52: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 08:53:54: 1u
- 2025-05-27 10:08:00: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 08:53:54: 1u
- 2025-07-10 09:27:00: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-17 11:08:31: 1u
- 2024-04-18 07:27:24: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-10 09:27:00: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-18 07:27:24: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-10 09:27:00: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 13:40:52: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-10 09:27:00: 1u
- 2025-05-27 10:08:00: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 10:56:08: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 10:08:00: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-18 07:27:24: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-27 10:08:00: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 10:56:08: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (18)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Predicted 1u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Predicted 1u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:11:57.163Z*
