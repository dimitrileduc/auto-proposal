# Rapport Backtest - Client ITM BY MESTDAGH TAMINES

## Contexte

- **Client** : ITM BY MESTDAGH TAMINES (ID: 47775)
- **Commande réelle** : S38455
- **Date commande** : 2025-08-11 10:27:32
- **Date cutoff système** : 2025-08-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 23
- **Tokens**: 21,794 input + 3,837 output = 25,631 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 43.5% | 23 produits prédits, 10 corrects |
| **Rappel** | 76.9% | 13 produits réels, 10 détectés |
| **F1-Score** | 55.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 35.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 35.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -7.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF021] JF PICKLES 350 ML | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 juin 2025, soit 46 jours avant la date actuelle (10 août). L'historique de l'année précédente montre une activité régulière en juin et juillet (3 commandes). Bien que le cycle soit irrégulier, le délai depuis la dernière commande dépasse largement la fréquence habituelle de rotation. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes oscillent entre 1u et 2u. La médiane des commandes récentes est de 1u. Conformément à la règle de ne pas surestimer pour les produits à faible rotation et de choisir la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 198 tokens
- **Total**: 1,186 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 juin 2025, soit 46 jours. L'historique montre une activité régulière en juin/juillet (N et N-1). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car le cycle habituel est dépassé. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est extrêmement stable avec des commandes unitaires systématiques (1u). La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1u sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 974 tokens
- **Output**: 167 tokens
- **Total**: 1,141 tokens



</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 24 avril 2025, soit plus de 100 jours. Bien que la rotation soit faible, l'historique de l'année précédente montre des commandes en juin et juillet. Le délai depuis la dernière commande dépasse largement le cycle habituel, créant un risque de rupture ou un besoin de renouvellement de stock pour la période estivale. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des quantités entre 1u et 2u. La médiane et la dernière commande enregistrée étant de 2u, cette quantité est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 174 tokens
- **Total**: 1,097 tokens



</details>


<details>
<summary><strong>4. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 24 avril 2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'historique N-1 montre une activité en mai/juin. En application du principe de précaution B2B et face à un cycle irrégulier, un besoin est identifié pour éviter une rupture prolongée sur cette période. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes très bas (1u à 2u). Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 167 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 24 avril 2025, soit plus de 100 jours sans activité, ce qui dépasse largement le cycle habituel observé en N-1 (environ 30 à 60 jours). Selon le principe de précaution B2B et la détection d'un besoin incertain, un réapprovisionnement est nécessaire pour couvrir le risque de rupture. La quantité est fixée à 1 unité, correspondant à la médiane des commandes historiques (1u) et à la règle de ne pas augmenter les stocks sur les produits à très faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 146 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>6. [JF021] JF PICKLES 350 ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse montre une rotation lente mais régulière. La dernière commande remonte au 24 avril, soit plus de 100 jours sans activité, ce qui dépasse largement le cycle habituel observé l'année précédente (environ 15-30 jours entre les commandes d'avril à juillet). Bien que la demande actuelle soit faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (1, 2, 2, 2, 3), en privilégiant la valeur basse pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 934 tokens
- **Output**: 154 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>7. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 24 avril 2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'historique N-1 montre une activité sur la période avril-juin. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), et face à un cycle irrégulier, un besoin est identifié pour couvrir l'horizon de 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre une constante de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 186 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>8. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 24 avril 2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'historique N-1 montre une activité sur la période juin-juillet (1u). Le délai depuis la dernière commande dépasse largement tout cycle habituel, créant un doute sur la disponibilité du stock pour couvrir les 30 prochains jours. En application du principe de précaution B2B (mieux vaut prévenir une rupture incertaine), un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique (récent et N-1) est constant à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1 unité sans augmenter le stock de sécurité inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 209 tokens
- **Total**: 1,131 tokens



</details>


<details>
<summary><strong>9. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 24 avril 2025, soit plus de 100 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles observés l'année précédente (mai/juin). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent et N-1 montre une constante de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 155 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>10. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 10 mars 2025, soit 153 jours sans activité. Bien que l'historique récent soit faible, le principe de précaution B2B s'applique car l'absence de commande sur une période aussi longue suggère un risque de rupture imminent ou un besoin de renouvellement de stock, surtout face à un seuil de réapprovisionnement de 30 jours. ÉTAPE 2 : L'historique montre des commandes de 1u et 2u. La médiane des quantités observées est de 2u. En suivant la règle de maintien des rotations faibles (1-2u), la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 163 tokens
- **Total**: 1,085 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-25 10:22:59: 1u
- 2025-06-20 07:02:51: 1u
- 2025-03-10 13:23:46: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-12 08:22:51: 2u
- 2024-06-26 07:06:46: 2u
- 2024-05-27 08:22:05: 1u
- 2024-04-25 14:31:31: 1u
- 2024-04-05 11:39:52: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-25 10:22:59: 1u
- 2025-06-20 07:02:51: 1u
- 2025-04-24 13:29:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-12 08:22:51: 1u
- 2024-06-26 07:06:46: 1u
- 2024-04-25 14:31:31: 1u
- 2024-04-05 11:39:52: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-24 13:29:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-12 08:22:51: 2u
- 2024-06-26 07:06:46: 1u
- 2024-04-25 14:31:31: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-24 13:29:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-26 07:06:46: 0u
- 2024-05-27 08:22:05: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-24 13:29:07: 2u
- 2025-03-10 13:23:46: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-26 07:06:46: 1u
- 2024-05-27 08:22:05: 1u
- 2024-04-25 14:31:31: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-24 13:29:07: 1u
- 2025-03-10 13:23:46: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-12 08:22:51: 3u
- 2024-06-26 07:06:46: 2u
- 2024-04-25 14:31:31: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-24 13:29:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-26 07:06:46: 0u
- 2024-04-25 14:31:31: 1u
- 2024-04-05 11:39:52: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-24 13:29:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-12 08:22:51: 1u
- 2024-06-26 07:06:46: 0u
- 2024-04-25 14:31:31: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-24 13:29:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-26 07:06:46: 0u
- 2024-05-27 08:22:05: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-10 13:23:46: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-26 07:06:46: 0u
- 2024-05-27 08:22:05: 2u
- 2024-04-05 11:39:52: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (13)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | Predicted 2u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 2 | Predicted 2u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 2 | Predicted 2u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Never ordered in previous analysis window (no history) |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:11:33.286Z*
