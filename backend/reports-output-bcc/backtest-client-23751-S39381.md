# Rapport Backtest - Client CARREFOUR BELGIUM SA, Market Bree

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Market Bree (ID: 23751)
- **Commande réelle** : S39381
- **Date commande** : 2025-09-25 06:28:03
- **Date cutoff système** : 2025-09-24 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 28
- **Tokens**: 25,282 input + 4,489 output = 29,771 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 32.1% | 28 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 48.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 21.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -21.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 04/08/2025, soit 51 jours écoulés. L'historique N-1 montre une activité spécifique en septembre (03/09 et 05/09). Bien que le cycle soit irrégulier, le principe de précaution B2B s'applique car nous sommes en pleine période de rotation historique (septembre) et le délai depuis la dernière commande est important. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 est constant à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1 unité sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 177 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>2. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 04/08/2025, soit 51 jours avant la date actuelle. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien des quantités historiques, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 168 tokens
- **Total**: 1,041 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 04/08/2025, soit 51 jours. L'historique N-1 montre une activité en septembre (03/09 et 05/09). Bien que le cycle soit irrégulier, le délai écoulé et la saisonnalité historique indiquent un risque de rupture imminent dans l'horizon des 30 jours. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. Les commandes récentes et la majorité de l'historique sont de 1 unité. La médiane est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 175 tokens
- **Total**: 1,131 tokens



</details>


<details>
<summary><strong>4. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit 51 jours. L'historique N-1 montre une commande le 05/09/2024. Nous sommes actuellement le 24/09/2025, ce qui signifie que le cycle annuel est dépassé et que le délai depuis la dernière commande est important pour ce type de produit à rotation lente. Le risque de rupture est réel dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est constant à 1 unité. En suivant la règle de maintien pour les rotations faibles (1-2u) et la médiane historique, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 184 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>5. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation très faible et irrégulière (1 à 2 unités par commande). La dernière commande enregistrée remonte à plus de 4 mois (mai 2025), et l'historique N-1 indique une activité sur la période de septembre (commandes les 03/09 et 05/09). En application du principe de précaution B2B, un besoin est détecté pour couvrir le risque de rupture sur l'horizon des 30 prochains jours. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la règle de maintien pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 151 tokens
- **Total**: 1,089 tokens



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
La dernière commande remonte au 08/05/2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière, l'historique N-1 montre une activité spécifique en septembre (commandes les 03/09/2024 et 05/09/2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours face à ce cycle incertain, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 152 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>7. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/05/2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels observés (comparaison avec juin N-1). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une constante de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 170 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>8. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 08/05/2025, soit plus de 130 jours sans activité, ce qui dépasse largement les cycles observés l'année précédente (avril, juin, septembre). Bien que la rotation soit faible, l'historique N-1 montre une activité spécifique en septembre (03/09 et 05/09). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane des commandes historiques (1, 2, 3, 3, 3) et à la quantité la plus fréquente lors des périodes d'activité régulière.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 173 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>9. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
Le produit présente une rotation très faible et irrégulière. La dernière commande remonte à plus de 4 mois (mai 2025), ce qui dépasse largement les cycles observés précédemment. En application du principe de précaution B2B et de la règle sur les cycles incertains, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane des commandes historiques et à la règle stricte de ne pas augmenter les volumes sur les produits à rotation faible (1-2u).

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 127 tokens
- **Total**: 1,066 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:47:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:03:51: 1u
- 2024-09-03 07:39:54: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:47:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:47:48: 1u
- 2025-05-08 08:22:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:03:51: 1u
- 2024-09-03 07:39:54: 1u
- 2024-06-21 06:38:15: 2u
- 2024-04-23 06:58:02: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:47:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:03:51: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 08:22:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:03:51: 1u
- 2024-09-03 07:39:54: 1u
- 2024-06-21 06:38:15: 1u
- 2024-04-23 06:58:02: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 08:22:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:03:51: 1u
- 2024-09-03 07:39:54: 1u
- 2024-06-21 06:38:15: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 08:22:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-21 06:38:15: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 08:22:13: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:03:51: 2u
- 2024-09-03 07:39:54: 3u
- 2024-06-21 06:38:15: 3u
- 2024-04-23 06:58:02: 1u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 08:22:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:03:51: 1u
- 2024-09-03 07:39:54: 1u
- 2024-06-21 06:38:15: 3u
- 2024-04-23 06:58:02: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (19)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 3 | Predicted 3u but not ordered |
| [DIS0004] Display JF bois | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:11:07.024Z*
