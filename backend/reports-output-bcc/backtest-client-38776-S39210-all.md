# Rapport Backtest - Client DE SPIEGELEER BVBA

## Contexte

- **Client** : DE SPIEGELEER BVBA (ID: 38776)
- **Commande réelle** : S39210
- **Date commande** : 2025-09-17 11:56:10
- **Date cutoff système** : 2025-09-16 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 27
- **Tokens**: 23,995 input + 4,313 output = 28,308 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 27 produits prédits, 9 corrects |
| **Rappel** | 50.0% | 18 produits réels, 9 détectés |
| **F1-Score** | 40.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'historique récent montre un cycle de commande mensuel (environ 28 jours) avec une quantité constante de 2 unités. La dernière commande remonte au 5 juin, soit plus de 100 jours sans activité. Selon le principe de précaution B2B, l'absence prolongée de commande sur un produit à rotation régulière par le passé crée une incertitude majeure. Un besoin de réapprovisionnement est donc détecté pour couvrir le risque de rupture. La quantité retenue correspond à la médiane historique (2 unités), conformément à la règle de maintien des rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 898 tokens
- **Output**: 131 tokens
- **Total**: 1,029 tokens



</details>


<details>
<summary><strong>2. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/06/2025, soit plus de 100 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 166 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>3. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 05/06/2025, soit 103 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en juillet. Le délai écoulé dépasse largement les cycles habituels, créant un doute sur l'état du stock. En application du principe de précaution B2B (détection d'un besoin incertain), un réapprovisionnement est nécessaire. ÉTAPE 2 : L'historique récent et N-1 est constant à 1 unité. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 162 tokens
- **Total**: 1,067 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/05/2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en juillet. En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière), un besoin est identifié pour éviter une rupture prolongée sur ce produit. ÉTAPE 2 : Estimation de la quantité. L'historique complet (récent et N-1) est constant à 1 unité. La médiane des commandes est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité habituelle de 1 unité sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 172 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>5. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/05/2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit de ce type. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 162 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>6. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible et irrégulière (environ une commande tous les 2 à 4 mois). La dernière commande enregistrée remonte au 08/05/2025, soit plus de 130 jours sans activité. Bien que le cycle soit imprévisible, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les intervalles habituels observés en 2024. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité recommandée est fixée à 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 151 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>7. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/05/2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande à la même période (12/09/2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. Conformément à la règle sur les rotations faibles (1-2u), la quantité de 1 est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 166 tokens
- **Total**: 1,073 tokens



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
La dernière commande remonte au 08/05/2025, soit plus de 130 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et face à l'absence d'historique N-1, une commande de 1 unité est préconisée pour reconstituer le stock, correspondant à la quantité médiane observée lors de la dernière transaction.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 129 tokens
- **Total**: 1,001 tokens



</details>


<details>
<summary><strong>9. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/05/2025, soit plus de 130 jours. Bien que le cycle soit irrégulier, l'historique N-1 montre une commande à la même période (12/09/2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes très faibles (1u ou 2u). La médiane des commandes historiques est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1u sans augmenter sans raison spécifique.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 187 tokens
- **Total**: 1,108 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 09:20:07: 2u
- 2025-05-08 13:39:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 09:20:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 09:20:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-16 14:09:12: 1u
- 2024-04-18 10:13:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 13:39:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-16 14:09:12: 1u
- 2024-04-18 10:13:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 13:39:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 13:39:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 10:10:46: 1u
- 2024-07-16 14:09:12: 1u
- 2024-04-18 10:13:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 13:39:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 10:10:46: 1u
- 2024-04-18 10:13:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 13:39:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-08 13:39:20: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 10:10:46: 1u
- 2024-07-16 14:09:12: 1u
- 2024-04-18 10:13:26: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (18)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LB004] LB Blonde (6,5%) 33CL | 1 | Predicted 1u but not ordered |
| [LB003] LB Festive (4,5%) 33CL | 1 | Predicted 1u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Predicted 1u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Predicted 1u but not ordered |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF021] JF PICKLES 350 ML | 1 | Predicted 1u but not ordered |
| [MF0061] MF Compote | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Predicted 2u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | Predicted 1u but not ordered |
| [FIL27] FIL MOUTARDE 300ML SQUEEZE  | 1 | Predicted 1u but not ordered |


---

## False Negatives (9)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:17:42.985Z*
