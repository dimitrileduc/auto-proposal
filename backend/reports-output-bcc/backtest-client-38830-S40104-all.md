# Rapport Backtest - Client DLL AD SOUMAGNE MARVAN

## Contexte

- **Client** : DLL AD SOUMAGNE MARVAN (ID: 38830)
- **Commande réelle** : S40104
- **Date commande** : 2025-11-04 11:03:09
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 41
- **Tokens**: 37,742 input + 6,600 output = 44,342 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 58.5% | 41 produits prédits, 24 corrects |
| **Rappel** | 80.0% | 30 produits réels, 24 détectés |
| **F1-Score** | 67.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.46 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 29.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 26.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -2.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 15 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

---

## True Positives (24)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF029] JF VOL AU VENT BOCAL 400G | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF021] JF PICKLES 350 ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 4 | 6 | 2.0 | 33.3% | partial | Non | Non | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (24 produits)


<details>
<summary><strong>1. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 41 jours (33 jours entre juin et août, 33 jours entre août et septembre). La dernière commande datant du 16 septembre 2025, soit il y a 48 jours, le cycle habituel est dépassé. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application de la règle de la médiane sur les commandes récentes (2u, 2u, 3u), la quantité retenue est de 2 unités pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 969 tokens
- **Output**: 145 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 30 à 50 jours (juin, août, septembre). Depuis la dernière commande du 16 septembre 2025, 48 jours se sont écoulés, ce qui dépasse le cycle moyen constaté. Le risque de rupture est imminent ou déjà avéré au regard du seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et de la règle de la médiane sur une rotation faible et constante, une commande de 1 unité est nécessaire pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 142 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>3. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 septembre 2025, soit 48 jours avant la date actuelle (3 novembre). L'historique montre un cycle de commande irrégulier (environ 30 à 60 jours). Selon le principe de précaution B2B, le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours, créant un risque de rupture imminent. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes sont de 1u et 3u. La médiane est de 2u, mais l'historique N-1 à la même période (octobre 2024) indique une commande de 1u. En cas de doute et pour éviter le surstock sur un produit à faible rotation, la quantité la plus basse de l'historique récent/saisonnier est privilégiée.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 208 tokens
- **Total**: 1,163 tokens



</details>


<details>
<summary><strong>4. [JF021] JF PICKLES 350 ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 16 septembre 2025, soit 48 jours. Bien que la rotation soit très faible, l'historique N-1 montre des commandes espacées de 30 à 60 jours durant cette période. Avec un seuil de réapprovisionnement de 30 jours, il existe un risque de rupture ou un besoin imminent pour maintenir le stock minimal. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des quantités de 1u (médiane). Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1u est maintenue pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 915 tokens
- **Output**: 196 tokens
- **Total**: 1,111 tokens



</details>


<details>
<summary><strong>5. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 60 jours entre les commandes récentes. La dernière commande datant du 16 septembre (soit 48 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, car une rupture est probable avant début décembre. L'historique N-1 confirme également une activité régulière sur cette période (octobre/novembre). En suivant la règle de la médiane des commandes récentes (2u, 2u, 1u), la quantité retenue est de 2 unités pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 147 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>6. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'historique récent montre un cycle de commande d'environ 33 jours (entre août et septembre). Depuis la dernière commande du 16 septembre, 48 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. Conformément à la règle de la médiane sur une rotation régulière et faible, la quantité de 2 unités est maintenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 115 tokens
- **Total**: 1,006 tokens



</details>


<details>
<summary><strong>7. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 16 septembre, soit 48 jours avant la date actuelle. L'historique montre un cycle de commande variant entre 45 et 80 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent selon le cycle moyen. De plus, une commande avait été passée fin octobre l'année précédente (N-1), confirmant un besoin à cette période. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 133 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>8. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 16 septembre 2025, soit 48 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais fréquent (tous les 2 à 3 mois). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une rupture est probable si aucune commande n'est passée, d'autant plus qu'une commande avait été passée fin octobre l'année précédente (N-1). Le principe de précaution B2B s'applique. ÉTAPE 2 : Estimation quantité. Les volumes sont très faibles (1 à 2 unités récemment). La médiane des commandes récentes est de 1 unité. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité de 1 unité est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 205 tokens
- **Total**: 1,143 tokens



</details>


<details>
<summary><strong>9. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 33 et 49 jours sur la période récente. La dernière commande datant du 16 septembre (soit 48 jours avant la date actuelle), le cycle moyen est largement dépassé, ce qui indique un risque de rupture imminent ou une vente manquée dans l'horizon des 30 jours. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane des commandes les plus récentes (1u, 1u, 2u) et respectant la tendance actuelle de rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 146 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>10. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible mais régulière (1 unité par commande). La dernière commande remonte au 16 septembre 2025, soit 48 jours avant la date actuelle. Le cycle moyen constaté est d'environ 60 à 80 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture (70% du cycle atteint). En application du principe de précaution B2B et pour maintenir le stock sur ce produit à faible rotation, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 159 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>11. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM: 1u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 septembre 2025, soit 48 jours. Le cycle moyen observé entre les commandes récentes est d'environ 41 jours (49 jours entre juin et août, 33 jours entre août et septembre). Le délai depuis la dernière commande dépasse largement le cycle moyen et l'horizon de 30 jours du seuil de réapprovisionnement. Le risque de rupture est avéré. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 4u, 1u et 1u. La médiane des commandes récentes est de 1u. Bien que l'historique N-1 à la même période (septembre) affichait 2u, la tendance récente est à la baisse ou à la stabilisation à l'unité. En application de la règle de prudence B2B et du choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 227 tokens
- **Total**: 1,179 tokens



</details>


<details>
<summary><strong>12. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 4u vs Médiane: 5u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 5u
- **Reel commande**: 6u
- **Erreur LLM**: 2u (33.3%)
- **Erreur Mediane**: 1u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles variant entre 30 et 60 jours. La dernière commande remontant au 16 septembre 2025 (soit 48 jours avant la date actuelle), le délai dépasse largement le seuil de réapprovisionnement de 30 jours, confirmant un risque de rupture imminent. L'historique de l'année précédente confirme également une activité soutenue en septembre/octobre. En appliquant la règle de la médiane sur les commandes récentes (1, 4, 6), la valeur centrale est de 4 unités. Ce volume est cohérent avec la consommation historique N-1 pour cette période.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 149 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>13. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 août 2025, soit 81 jours avant la date actuelle. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement les cycles observés l'année précédente (environ 60-70 jours entre les commandes de juin et septembre 2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé, conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 154 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>14. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14/08/2025, soit 81 jours. L'historique N-1 montre une commande fin octobre (30/10/2024). Bien que le cycle soit irrégulier, le délai depuis la dernière commande dépasse largement les intervalles habituels observés l'an dernier. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon de 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 3u. L'historique N-1 oscille entre 1u et 4u avec une médiane à 2u. Cependant, la commande la plus récente étant de 3u et le produit ayant une rotation régulière mais faible, la médiane globale se situe autour de 3u. On maintient cette quantité pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 226 tokens
- **Total**: 1,163 tokens



</details>


<details>
<summary><strong>15. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 août 2025, soit environ 81 jours. Bien que le cycle historique soit irrégulier, l'absence de commande depuis plus de deux mois et l'approche de la période de fin d'année (historiquement active en N-1) créent un risque de rupture. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la récurrence des commandes récentes, tout en restant prudent face à la rotation faible du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 133 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>16. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 14 août 2025, soit plus de 80 jours sans activité. L'historique de l'année précédente montre des commandes espacées de 2 à 3 mois (mars, juin, juillet, septembre). Nous sommes actuellement début novembre, ce qui dépasse largement le cycle de rotation habituel. En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques et à la quantité de la commande la plus récente.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 139 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>17. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 14 août 2025, soit 81 jours avant la date actuelle (3 novembre). L'historique montre des cycles irréguliers (environ 3 à 4 mois d'intervalle en N-1). Compte tenu du délai écoulé et du principe de précaution B2B, le risque de rupture à l'horizon de 30 jours est élevé. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent affiche une commande de 2u. L'historique N-1 oscille entre 1u et 3u (médiane à 1.5u). En suivant la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité de 2u est retenue pour maintenir le stock sans surestimer le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 216 tokens
- **Total**: 1,137 tokens



</details>


<details>
<summary><strong>18. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 26 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique montre une commande en juin 2024 et juin 2025. En B2B, le principe de précaution s'applique pour éviter une rupture prolongée sur un produit à rotation lente mais régulière. Le délai depuis la dernière commande justifie un réapprovisionnement préventif. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre une constante de 1 unité par commande. Conformément aux règles de rotation faible (1-2u), la quantité est maintenue à 1 unité (médiane historique) pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 193 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>19. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 26 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles observés précédemment (environ 4 mois entre les commandes de 2024 et 2025). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre une stabilité stricte à 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique) sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 190 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>20. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 26 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement les cycles habituels observés l'année précédente (environ 30 jours entre juillet et août 2024). En application du principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais constante, un réapprovisionnement est nécessaire. La quantité retenue correspond à la médiane historique de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 124 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>21. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 26 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit en catalogue. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité à 1 unité sans l'augmenter, ce qui correspond également à la médiane historique.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 169 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>22. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue, comparée à l'historique N-1 (août), indique un risque de rupture ou un besoin de réapprovisionnement imminent pour maintenir le stock en rayon. En application du principe de précaution B2B (doute sur le cycle = prévoir), un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 2u et l'historique N-1 une commande de 1u. Conformément à la règle de maintien pour les faibles rotations (1-2u), la médiane des commandes récentes (2u) est retenue pour assurer la disponibilité sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 199 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>23. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit plus de 130 jours. Bien que la rotation soit extrêmement faible, le principe de précaution B2B et l'absence de données sur le stock actuel imposent de prévoir un réapprovisionnement pour éviter une rupture prolongée, surtout à l'approche de la fin d'année. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 160 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>24. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Absence de commandes récentes sur ce produit à rotation très faible. L'historique N-1 montre des commandes unitaires (1u) avec un intervalle d'environ 3 mois. La dernière commande enregistrée remontant à plus de 15 mois, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée sur une référence active du catalogue. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est fixée à 1 unité (médiane de l'historique disponible) pour reconstituer un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 136 tokens
- **Total**: 1,045 tokens



</details>




### Donnees d'Input LLM (24 produits)


<details>
<summary><strong>1. [JF029] JF VOL AU VENT BOCAL 400G</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:09:30: 2u
- 2025-08-14 07:06:50: 2u
- 2025-06-26 09:48:56: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:19:07: 4u
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 1u
- 2024-06-11 11:58:06: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u
- 2025-08-14 07:06:50: 1u
- 2025-06-26 09:48:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 08:28:10: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u
- 2025-08-14 07:06:50: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:19:07: 1u
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 0u
- 2024-06-11 11:58:06: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF021] JF PICKLES 350 ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 0u
- 2024-03-21 09:11:51: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:09:30: 2u
- 2025-08-14 07:06:50: 2u
- 2025-06-26 09:48:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:19:07: 3u
- 2024-09-20 08:22:07: 2u
- 2024-07-10 08:28:10: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:09:30: 2u
- 2025-08-14 07:06:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u
- 2025-06-26 09:48:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:19:07: 1u
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 0u
- 2024-06-11 11:58:06: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u
- 2025-06-26 09:48:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:19:07: 1u
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u
- 2025-08-14 07:06:50: 1u
- 2025-06-26 09:48:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 08:22:07: 2u
- 2024-07-10 08:28:10: 2u
- 2024-06-11 11:58:06: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>10. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u
- 2025-06-26 09:48:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:19:07: 1u
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 0u
- 2024-06-11 11:58:06: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF032] JF SAUCE LAPIN 380GX6</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u
- 2025-08-14 07:06:50: 1u
- 2025-06-26 09:48:56: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 08:22:07: 2u
- 2024-07-10 08:28:10: 3u
- 2024-06-11 11:58:06: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 10:09:30: 1u
- 2025-08-14 07:06:50: 6u
- 2025-06-26 09:48:56: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:19:07: 5u
- 2024-09-20 08:22:07: 4u
- 2024-07-10 08:28:10: 4u
- 2024-06-11 11:58:06: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>13. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 07:06:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 08:22:07: 1u
- 2024-07-10 08:28:10: 0u
- 2024-06-11 11:58:06: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 07:06:50: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:19:07: 1u
- 2024-08-09 11:18:51: 4u
- 2024-07-10 08:28:10: 1u
- 2024-06-11 11:58:06: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 07:06:50: 2u
- 2025-06-26 09:48:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 08:22:07: 1u
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 1u
- 2024-06-11 11:58:06: 3u
- 2024-03-21 09:11:51: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 07:06:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-20 08:22:07: 1u
- 2024-07-10 08:28:10: 2u
- 2024-06-11 11:58:06: 1u
- 2024-03-21 09:11:51: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 07:06:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 08:28:10: 0u
- 2024-06-11 11:58:06: 1u
- 2024-03-21 09:11:51: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:48:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 08:28:10: 0u
- 2024-06-11 11:58:06: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [JF039] JF MAYO BARAKI SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:48:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 13:19:07: 1u
- 2024-07-10 08:28:10: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:48:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:48:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>22. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:48:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-09 11:18:51: 1u
- 2024-07-10 08:28:10: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>23. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:48:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 08:28:10: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>24. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 08:28:10: 0u
- 2024-06-11 11:58:06: 1u
- 2024-03-21 09:11:51: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (17)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Predicted 1u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Predicted 2u but not ordered |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | Predicted 3u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | Predicted 2u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 3 | Predicted 3u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | Predicted 2u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 3 | Predicted 3u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Predicted 1u but not ordered |


---

## False Negatives (6)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [JF041] JF MAYONNAISE SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | Never ordered in previous analysis window (no history) |
| [LD004] LD Tartinade Tomate Basilic bio 180g | 1 | Never ordered in previous analysis window (no history) |
| [LD013] LD Tuscan Organic Spread 180 g | 1 | Never ordered in previous analysis window (no history) |
| [LD008] LD Tartinade Pois chiches bio 180g   | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:09:08.359Z*
