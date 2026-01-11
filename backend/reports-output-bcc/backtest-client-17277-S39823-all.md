# Rapport Backtest - Client CARREFOUR BELGIUM SA, Hyper Bomeree

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Hyper Bomeree (ID: 17277)
- **Commande réelle** : S39823
- **Date commande** : 2025-10-21 08:30:28
- **Date cutoff système** : 2025-10-20 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 15
- **Tokens**: 13,549 input + 2,434 output = 15,983 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 46.7% | 15 produits prédits, 7 corrects |
| **Rappel** | 77.8% | 9 produits réels, 7 détectés |
| **F1-Score** | 58.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.43 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 27.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 21.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -27.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF021] JF PICKLES 350 ML | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


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
La dernière commande remonte au 05/09/2025, soit 45 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande récente (rotation faible), le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente, un besoin est détecté. La quantité est fixée à 1 unité, correspondant à la médiane (et unique valeur) de l'historique récent, conformément à la règle de maintien des volumes pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 140 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 45 jours. L'historique N-1 montre une commande le 16/10/2024, indiquant un besoin récurrent à cette période de l'année. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est avéré par rapport au cycle saisonnier. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 oscille entre 1u et 2u. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute sur une faible rotation), la médiane basse de 1u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 175 tokens
- **Total**: 1,115 tokens



</details>


<details>
<summary><strong>3. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/09/2025, soit 45 jours. L'historique montre un cycle irrégulier (environ 60 jours entre les deux dernières commandes). Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 75 jours sans commande à l'échéance, ce qui dépasse le cycle observé. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. L'historique N-1 à la même période (octobre) était de 1u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 202 tokens
- **Total**: 1,123 tokens



</details>


<details>
<summary><strong>4. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/07/2025, soit plus de 100 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles observés précédemment (comparaison avec l'historique N-1). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une consommation constante de 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 184 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>5. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte à plus de 100 jours (02/07/2025). Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles habituels et nous entrons dans la période anniversaire de la commande de l'an dernier (16/10/2024). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique (récent et N-1) montre une quantité constante de 1 unité. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1u sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 149 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>6. [JF021] JF PICKLES 350 ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/07/2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande à cette période précise (16/10/2024). Par principe de précaution B2B et pour éviter une rupture sur un produit à cycle long, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 2 unités. La médiane est de 2. On maintient cette quantité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 881 tokens
- **Output**: 150 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>7. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande récente n'est enregistrée, mais l'historique N-1 indique une commande le 16 octobre. Nous sommes actuellement le 20 octobre, soit exactement dans la même fenêtre saisonnière. En l'absence de cycle récent, le principe de précaution B2B s'applique pour éviter une rupture sur un produit à rotation très faible mais potentiellement saisonnier. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique N-1 affiche une unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité historique sans l'augmenter. La quantité retenue est donc de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 165 tokens
- **Total**: 1,041 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 12:04:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 12:04:41: 1u
- 2025-07-02 07:33:16: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-16 06:19:55: 1u
- 2024-08-02 06:20:23: 2u
- 2024-05-30 07:09:53: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-05 12:04:41: 1u
- 2025-07-02 07:33:16: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-16 06:19:55: 1u
- 2024-05-30 07:09:53: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:33:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-30 07:09:53: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:33:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-16 06:19:55: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF021] JF PICKLES 350 ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:33:16: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-16 06:19:55: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-16 06:19:55: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Never ordered in previous analysis window (no history) |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:12:45.959Z*
