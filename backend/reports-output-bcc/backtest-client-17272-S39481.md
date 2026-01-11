# Rapport Backtest - Client CARREFOUR BELGIUM SA, Hyper Wépion

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Hyper Wépion (ID: 17272)
- **Commande réelle** : S39481
- **Date commande** : 2025-10-01 07:16:07
- **Date cutoff système** : 2025-09-30 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 18
- **Tokens**: 16,492 input + 3,174 output = 19,666 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 18 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 8.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 19/08/2025, soit 42 jours. Le cycle entre les deux dernières commandes était de 77 jours. Bien que nous ne soyons pas encore à l'échéance théorique du cycle, l'historique N-1 montre une commande début septembre (03/09/2024). En application du principe de précaution B2B et face à l'irrégularité du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont de 2u. La médiane du cycle récent est de 2u. Conformément à la règle sur les rotations faibles, nous maintenons la quantité habituelle de 2u sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 201 tokens
- **Total**: 1,140 tokens



</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 19 août 2025, soit 42 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais fréquent (environ tous les 2 à 3 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est présent car nous entrons dans la fenêtre habituelle de commande. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur constante des commandes récentes, tout en restant cohérent avec l'historique N-1 (moyenne de 1.75u).

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 154 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>3. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse montre un cycle de commande très espacé et irrégulier (environ 75 jours entre les deux dernières commandes). La dernière commande remontant au 19 août 2025, soit il y a 42 jours, nous dépassons largement le seuil de précaution (70% du cycle estimé). En application du principe de précaution B2B pour éviter une rupture sur un produit à faible rotation, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 136 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>4. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 19/08/2025, soit 42 jours avant la date actuelle. L'historique montre un cycle de commande variant entre 40 et 75 jours. En appliquant le principe de précaution B2B et le seuil de 70% du cycle moyen, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 oscille entre 1u et 2u. La médiane des commandes est de 2u. Conformément aux règles de gestion des faibles rotations, nous maintenons ce volume habituel pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 172 tokens
- **Total**: 1,109 tokens



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
ÉTAPE 1 - DÉTECTION DU BESOIN : La dernière commande remonte au 03/06/2025, soit environ 119 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en juin et une autre en mars. Le délai écoulé depuis la dernière commande est très important, ce qui crée une incertitude sur le cycle. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 - ESTIMATION QUANTITÉ : L'historique récent et N-1 est constant à 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité habituelle de 1 unité sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 190 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>6. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse de l'historique montre une rotation très faible et irrégulière, avec une dernière commande enregistrée il y a près de 4 mois (juin 2025). Bien que le cycle soit difficile à définir précisément, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les intervalles observés l'année précédente (environ 1 à 5 mois). Afin d'éviter une rupture de stock prolongée sur ce produit, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et historiques, respectant la règle de maintien des volumes pour les faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 150 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>7. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit environ 119 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en juin et une autre en mars. Le délai écoulé depuis la dernière commande dépasse largement les cycles observés précédemment. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un besoin est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique (récent et N-1) est constant à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 185 tokens
- **Total**: 1,090 tokens



</details>


<details>
<summary><strong>8. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit environ 119 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en juin et une autre en mars. Le délai écoulé depuis la dernière commande est largement supérieur au cycle habituel suggéré par l'historique. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est constant à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 189 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>9. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit environ 119 jours. L'historique N-1 montre une commande à la même période (03/09/2024). Bien que le cycle soit lent et irrégulier, le principe de précaution B2B et la correspondance avec l'historique de l'année précédente indiquent un besoin de réapprovisionnement pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique complet (récent et N-1) est extrêmement stable avec des commandes systématiques de 1 unité. La médiane est de 1u. Conformément à la règle sur les rotations très faibles, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 186 tokens
- **Total**: 1,107 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:24:05: 2u
- 2025-06-03 06:34:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:25:25: 1u
- 2024-06-24 06:41:31: 1u
- 2024-04-25 07:39:40: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:24:05: 2u
- 2025-06-03 06:34:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:25:25: 3u
- 2024-06-24 06:41:31: 1u
- 2024-04-25 07:39:40: 2u
- 2024-03-25 09:48:56: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:24:05: 1u
- 2025-06-03 06:34:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 06:41:31: 1u
- 2024-04-25 07:39:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:24:05: 1u
- 2025-06-03 06:34:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:25:25: 2u
- 2024-06-24 06:41:31: 1u
- 2024-04-25 07:39:40: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 06:34:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 06:41:31: 1u
- 2024-03-25 09:48:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 06:34:27: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:25:25: 2u
- 2024-04-25 07:39:40: 2u
- 2024-03-25 09:48:56: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 06:34:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 06:41:31: 1u
- 2024-03-25 09:48:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 06:34:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 06:41:31: 1u
- 2024-03-25 09:48:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 06:34:27: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:25:25: 1u
- 2024-06-24 06:41:31: 1u
- 2024-03-25 09:48:56: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (9)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Predicted 2u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:18:21.721Z*
