# Rapport Backtest - Client CARREFOUR BELGIUM SA, Hyper Turnhout

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Hyper Turnhout (ID: 17297)
- **Commande réelle** : S39063
- **Date commande** : 2025-09-08 06:49:29
- **Date cutoff système** : 2025-09-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 28
- **Tokens**: 25,376 input + 4,383 output = 29,759 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 59.3% | 27 produits prédits, 16 corrects |
| **Rappel** | 100.0% | 16 produits réels, 16 détectés |
| **F1-Score** | 74.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.38 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 27.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (16)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF021] JF PICKLES 350 ML | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (16 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 51 et 69 jours. La dernière commande datant du 14 juillet 2025 (soit 55 jours avant la date actuelle), nous avons dépassé 70% du cycle moyen estimé. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (1, 2, 2), afin de couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 147 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 14 juillet 2025, soit environ 55 jours. Bien que le cycle historique soit irrégulier (allant de 2 à 3 mois), nous entrons dans une période où une commande a été passée l'année dernière (septembre 2024). En application du principe de précaution B2B et compte tenu du délai de 30 jours du seuil de réapprovisionnement, un risque de rupture est identifié. Pour la quantité, la médiane des commandes récentes (2u et 3u) est de 2,5u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 171 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>3. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 14 juillet 2025, soit 55 jours. Bien que l'historique soit très faible, nous sommes dans la période anniversaire de la commande de l'année précédente (septembre 2024). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre une rotation constante de 1 unité. Conformément à la règle sur les rotations très faibles, la quantité de 1u est maintenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 169 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>4. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 40 jours entre les commandes récentes. La dernière commande datant du 14 juillet 2025 (soit 55 jours avant la date actuelle), le seuil de 70% du cycle est largement dépassé, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours. Bien que la rotation soit faible, l'historique N-1 confirme une activité sur cette période (septembre). En suivant la règle de précaution B2B et en utilisant la médiane des quantités historiques (1u et 2u), une commande de 2 unités est préconisée pour couvrir le besoin tout en restant prudent.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 161 tokens
- **Total**: 1,082 tokens



</details>


<details>
<summary><strong>5. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre un cycle de commande irrégulier avec une dernière commande effectuée il y a 55 jours (14 juillet). Bien que la rotation soit faible, le délai écoulé dépasse largement les intervalles observés précédemment, créant un risque de rupture imminent dans l'horizon des 30 jours. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane basse de l'historique récent et passé, afin d'éviter un surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 135 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>6. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 juillet 2025, soit 55 jours. L'historique N-1 montre une commande le 2 septembre 2024. Nous sommes actuellement le 7 septembre, ce qui indique un dépassement du cycle de réapprovisionnement habituel pour cette période. Le risque de rupture est avéré dans l'horizon des 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes très faibles (1 à 2 unités). La médiane des commandes est de 1 unité. En respectant le principe de précaution B2B et la règle de choisir la valeur la plus basse en cas de faible rotation, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 185 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 50 à 70 jours (avril-juin-juillet). Depuis la dernière commande du 14 juillet 2025, 55 jours se sont écoulés, ce qui place le produit dans la fenêtre critique de réapprovisionnement par rapport au cycle habituel. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter la rupture. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes récentes (les trois dernières commandes étant de 1u), conformément à la règle de ne pas surestimer les stocks sur les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 158 tokens
- **Total**: 1,095 tokens



</details>


<details>
<summary><strong>8. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 juillet 2025, soit 55 jours avant la date actuelle. L'historique montre des intervalles de commande longs et irréguliers (environ 60 à 90 jours). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une nouvelle commande est probable pour éviter une rupture, conformément au principe de précaution B2B. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes très faibles et constants (1u ou 2u). La médiane des commandes est de 1u. En respectant la règle de choisir la valeur la plus basse en cas de rotation faible, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 183 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>9. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 juillet 2025, soit 55 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier (environ 60 à 80 jours entre les commandes l'année précédente). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une rupture est probable si aucune commande n'est passée. En application du principe de précaution B2B face à un cycle incertain, un besoin est détecté. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes récentes et historiques, assurant un stock suffisant sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 160 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>10. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation faible mais régulière avec un cycle moyen d'environ 50 à 60 jours. La dernière commande remonte au 14 juillet 2025, soit 55 jours avant la date actuelle. Nous avons dépassé le seuil de 70% du cycle moyen, ce qui indique un risque imminent de rupture de stock. Conformément au principe de précaution B2B et à la règle de maintien des faibles rotations, une commande de 1 unité (médiane historique) est nécessaire pour couvrir les 30 prochains jours.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 134 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>11. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/06/2025, soit plus de 90 jours. Bien que la rotation soit faible, l'historique N-1 montre une activité sur la période juin-septembre. En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière), un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. La dernière commande était de 2u et la médiane historique globale se situe entre 1u et 2u. Conformément à la règle de maintien des faibles rotations (1-2u), la quantité de 2u est retenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 177 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>12. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/06/2025, soit 93 jours. L'historique montre un cycle de commande espacé (environ tous les 2 à 4 mois). Étant donné l'absence de commande depuis juin et le principe de précaution B2B, il existe un risque de rupture imminent pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique est extrêmement stable avec des commandes systématiques de 1 unité (médiane = 1). Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 158 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>13. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/06/2025, soit plus de 90 jours. Bien que la rotation soit très faible, l'absence de commande récente et le franchissement du seuil de précaution (Replenishment Threshold Days de 30 jours) indiquent un risque de rupture ou un besoin de renouvellement de stock. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 2u et l'historique N-1 à la même période montre 1u. En suivant le principe de précaution B2B et la médiane des commandes, une quantité de 2u est préconisée pour couvrir le cycle à venir sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 171 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>14. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/06/2025, soit plus de 90 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande à cette période précise (02/09/2024). Par principe de précaution B2B et pour éviter une rupture sur un produit à cycle long, un besoin est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des volumes unitaires (1u et 2u). En suivant la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 168 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>15. [JF021] JF PICKLES 350 ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation irrégulière avec une dernière commande enregistrée il y a 93 jours (06/06/2025). Bien que le cycle soit difficile à définir précisément, le délai écoulé dépasse largement les intervalles observés précédemment, induisant un risque de rupture imminent selon le principe de précaution B2B. En application de l'étape 2, la quantité retenue est la médiane de l'historique disponible (1, 1, 2, 3), soit 2 unités, afin de couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 915 tokens
- **Output**: 133 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>16. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 16 avril 2025, soit plus de 140 jours sans activité, ce qui dépasse largement les cycles observés l'année précédente (avril et septembre). Bien que la rotation soit très faible, le principe de précaution B2B et l'arrivée à la période anniversaire de la commande de septembre 2024 (02/09) indiquent un risque de besoin imminent. Conformément aux règles sur les faibles rotations (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane historique stricte.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 134 tokens
- **Total**: 1,038 tokens



</details>




### Donnees d'Input LLM (16 produits)


<details>
<summary><strong>1. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 08:38:54: 1u
- 2025-06-06 09:56:54: 2u
- 2025-04-16 08:07:34: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-26 06:53:40: 1u
- 2024-04-25 07:50:16: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 08:38:54: 2u
- 2025-04-16 08:07:34: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:09:38: 1u
- 2024-06-26 06:53:40: 4u
- 2024-04-25 07:50:16: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 08:38:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:09:38: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 08:38:54: 2u
- 2025-06-06 09:56:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:09:38: 2u
- 2024-06-26 06:53:40: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 08:38:54: 3u
- 2025-06-06 09:56:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:09:38: 1u
- 2024-06-26 06:53:40: 2u
- 2024-04-25 07:50:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 08:38:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:09:38: 2u
- 2024-06-26 06:53:40: 1u
- 2024-04-25 07:50:16: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 08:38:54: 1u
- 2025-06-06 09:56:54: 1u
- 2025-04-16 08:07:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-26 06:53:40: 2u
- 2024-04-25 07:50:16: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 08:38:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-26 06:53:40: 2u
- 2024-04-25 07:50:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 08:38:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-26 06:53:40: 1u
- 2024-04-25 07:50:16: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-14 08:38:54: 1u
- 2025-06-06 09:56:54: 1u
- 2025-04-16 08:07:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:09:38: 1u
- 2024-04-25 07:50:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-06 09:56:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-26 06:53:40: 4u
- 2024-04-25 07:50:16: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [JF025] JF VINAIGRETTE FH WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-06 09:56:54: 1u
- 2025-04-16 08:07:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:09:38: 1u
- 2024-04-25 07:50:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-06 09:56:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:09:38: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-06 09:56:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:09:38: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-06 09:56:54: 3u
- 2025-04-16 08:07:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:09:38: 1u
- 2024-04-25 07:50:16: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-16 08:07:34: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:09:38: 1u
- 2024-04-25 07:50:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:08.367Z*
