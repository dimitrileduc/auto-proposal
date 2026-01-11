# Rapport Backtest - Client DLL AD GERAARDSBERGEN

## Contexte

- **Client** : DLL AD GERAARDSBERGEN (ID: 38803)
- **Commande réelle** : S39064
- **Date commande** : 2025-09-08 06:09:55
- **Date cutoff système** : 2025-09-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 39
- **Tokens**: 36,727 input + 6,403 output = 43,130 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.5% | 38 produits prédits, 23 corrects |
| **Rappel** | 100.0% | 23 produits réels, 23 détectés |
| **F1-Score** | 75.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.26 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 21.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 19.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 17 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (23)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF021] JF PICKLES 350 ML | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (23 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle récent montre une commande environ tous les 45 jours (mai, juin, juillet). La dernière commande datant du 17 juillet, soit il y a 52 jours, le cycle habituel est dépassé, ce qui indique un risque de rupture imminent ou une vente manquée. Bien que l'historique N-1 montre des pics à 2 unités en août, la tendance récente est strictement stabilisée à 1 unité par commande. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent, une commande de 1 unité est nécessaire pour couvrir le besoin immédiat sans risquer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 151 tokens
- **Total**: 1,124 tokens



</details>


<details>
<summary><strong>2. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 2 à 3 mois). La dernière commande remontant au 17 juillet 2025 (soit plus de 50 jours), le délai de réapprovisionnement dépasse largement 70% du cycle moyen estimé, créant un risque de rupture imminent sous 30 jours. En application du principe de précaution B2B pour les produits à faible rotation, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes historiques (1u) et à la valeur la plus basse pour éviter un surstockage inutile sur une référence à faible volume.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 153 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>3. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 17 jours entre les dernières commandes. La dernière commande remontant au 17 juillet 2025, soit plus de 50 jours avant la date actuelle (07 septembre), le seuil de réapprovisionnement de 30 jours est largement dépassé. Il existe un risque de rupture immédiat ou un besoin non couvert. En suivant la règle de la médiane sur l'historique récent (1u et 2u), et compte tenu de la faible rotation du produit, une quantité de 2 unités est préconisée pour couvrir le cycle suivant sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 147 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>4. [JF021] JF PICKLES 350 ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 30 à 40 jours. La dernière commande remontant au 17 juillet 2025 (soit 52 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent ou un besoin non couvert. En appliquant la règle de la médiane sur l'historique récent (valeurs : 1, 2, 2, 4), la médiane se situe à 2 unités. Conformément au principe de précaution B2B et à la règle de ne pas surestimer les quantités, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 966 tokens
- **Output**: 168 tokens
- **Total**: 1,134 tokens



</details>


<details>
<summary><strong>5. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 21 à 42 jours (moyenne ~30 jours). La dernière commande datant du 17 juillet 2025, soit plus de 50 jours avant la date actuelle (07 septembre), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture avéré. Concernant la quantité, le produit présente une rotation très stable et faible de 1 unité par commande sur les quatre dernières occurrences. Conformément aux règles de gestion des faibles rotations, la médiane de 1 unité est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 161 tokens
- **Total**: 1,151 tokens



</details>


<details>
<summary><strong>6. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre une rotation régulière mais lente avec un cycle moyen d'environ 45 jours. La dernière commande remontant au 17 juillet 2025 (soit plus de 50 jours), le délai de réapprovisionnement est largement dépassé, ce qui indique un risque de rupture imminent ou avéré. Bien qu'une commande de 2 unités ait été observée en août l'année précédente, la tendance actuelle sur 2025 est strictement stabilisée à 1 unité par commande. En application de la règle de la médiane et du maintien des faibles rotations, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 150 tokens
- **Total**: 1,122 tokens



</details>


<details>
<summary><strong>7. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 21 et 48 jours. La dernière commande remonte au 17 juillet 2025, soit 52 jours avant la date actuelle (07 septembre). Ce délai dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent ou une vente manquée. En suivant le principe de précaution B2B et la règle de la médiane sur l'historique récent (1u, 2u, 1u, 1u), la quantité recommandée est de 1 unité pour maintenir le stock sans surstockage sur ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 991 tokens
- **Output**: 154 tokens
- **Total**: 1,145 tokens



</details>


<details>
<summary><strong>8. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 60 à 70 jours entre les réapprovisionnements. La dernière commande datant du 30 juin 2025 (soit 69 jours avant la date actuelle), le seuil de 70% du cycle est largement dépassé, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours. Bien que l'historique N-1 montre des volumes légèrement supérieurs en juin, la tendance récente est stable à 1 unité par commande. En suivant la règle de précaution B2B et en privilégiant la médiane des quantités récentes pour éviter le surstockage sur un produit à faible rotation, une commande de 1 unité est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 168 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>9. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 40 à 70 jours). La dernière commande remonte au 30 juin 2025, soit 69 jours avant la date actuelle. Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent ou un besoin non couvert. Conformément au principe de précaution B2B et à la règle des 70% du cycle, une commande est nécessaire. La quantité est fixée à 2 unités, ce qui correspond à la médiane stricte et constante de l'historique récent et de l'année précédente (N-1).

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 159 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>10. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 30 juin 2025, soit plus de 65 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 15-30 jours entre les mouvements en période similaire). En application du principe de précaution B2B, un besoin de réapprovisionnement est identifié pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre des volumes très faibles (1u en 2025, 2u en 2024). Conformément à la règle sur les rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la commande la plus récente et à la valeur la plus prudente pour éviter un surstockage sur un produit à faible mouvement.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 206 tokens
- **Total**: 1,126 tokens



</details>


<details>
<summary><strong>11. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 65 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle habituel observé entre mai et juin (42 jours). Par principe de précaution B2B et pour éviter une rupture prolongée sur un produit présent au catalogue N-1, un besoin est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. En suivant la règle de la médiane et le choix de la valeur la plus basse en cas de doute pour une rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 162 tokens
- **Total**: 1,099 tokens



</details>


<details>
<summary><strong>12. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse montre une rotation très faible et irrégulière (1 à 2 unités par commande). La dernière commande remonte au 30 juin 2025, soit plus de 60 jours. Bien que le cycle soit difficile à définir précisément, le principe de précaution B2B s'applique car nous entrons dans une période où un besoin peut survenir (seuil de 30 jours). En suivant la règle des rotations faibles, on maintient la quantité minimale observée. La médiane des commandes historiques (1u) est retenue pour éviter tout surstockage sur un produit à faible mouvement.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 137 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>13. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 30 juin 2025, soit 69 jours avant la date actuelle. Bien que le cycle soit irrégulier, l'historique N-1 montre une activité en juin. Le délai depuis la dernière commande est important, ce qui crée un doute sur le niveau de stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des volumes très faibles (1u et 2u). La médiane des commandes récentes est de 1,5u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 198 tokens
- **Total**: 1,138 tokens



</details>


<details>
<summary><strong>14. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen observé sur les commandes récentes est d'environ 42 jours (21 jours entre avril/mai, 42 jours entre mai/juin). La dernière commande remonte au 30 juin 2025, soit 69 jours avant la date actuelle (07 septembre). Nous avons largement dépassé le cycle habituel et le seuil de 70% du cycle moyen. Par principe de précaution B2B et pour éviter une rupture prolongée, un besoin est identifié. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des volumes très faibles (1u, 1u, 2u). La médiane des commandes récentes est de 1u. Conformément aux règles sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 208 tokens
- **Total**: 1,164 tokens



</details>


<details>
<summary><strong>15. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 40 à 50 jours (avril, mai, juin). La dernière commande datant du 30 juin 2025, soit plus de 65 jours avant la date actuelle (07 septembre), le cycle habituel est largement dépassé. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes (1, 1, 2), en privilégiant la valeur la plus basse conformément aux règles de gestion des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 958 tokens
- **Output**: 151 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>16. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 30 juin 2025, soit plus de 60 jours. Bien que la rotation soit très faible (1u récemment, 2u l'année dernière à la même période), le délai écoulé dépasse largement le cycle habituel suggéré par l'historique. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et respectant la règle de ne pas augmenter les stocks sur les produits à très faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 142 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>17. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière. La dernière commande remonte au 19 mai 2025, soit plus de 110 jours sans activité, ce qui dépasse largement les cycles habituels observés l'année précédente (environ 15 à 45 jours). En application du principe de précaution B2B et face à cette absence prolongée de réapprovisionnement, un risque de rupture est identifié pour l'horizon des 30 prochains jours. La quantité retenue correspond à la médiane des commandes historiques (2 unités), écartant le pic ponctuel de 3 unités pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 154 tokens
- **Total**: 1,110 tokens



</details>


<details>
<summary><strong>18. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse montre une rotation très faible et irrégulière. La dernière commande remonte au 19 mai 2025 (soit plus de 110 jours). Bien que le cycle soit difficile à définir, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les seuils habituels, suggérant un besoin de réapprovisionnement pour maintenir le stock en rayon. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité retenue est de 2 unités, correspondant à la dernière commande connue et à la valeur haute de l'historique N-1, afin de couvrir les besoins sur l'horizon des 30 prochains jours sans risque de surstockage majeur.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 165 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>19. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 28 avril 2025, soit plus de 130 jours sans activité. Bien que la rotation soit très faible (1 unité par commande), l'absence de commande sur une période aussi longue par rapport à l'historique crée une incertitude sur l'état du stock. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), une commande est préconisée. La quantité est fixée à 1 unité, correspondant à la médiane et à la valeur constante observée dans l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 140 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>20. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse montre une rotation très faible et irrégulière. La dernière commande remonte au 28 avril 2025 (soit plus de 130 jours). Bien que le cycle soit difficile à définir, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, surtout face à l'absence de données récentes durant l'été. En suivant la règle des cas particuliers pour les rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la dernière commande et à la valeur la plus basse de l'historique pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 143 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>21. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 avril 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'historique N-1 montre une activité en juin. En application du principe de précaution B2B et face à une absence de commande depuis plusieurs mois, un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité. La médiane des commandes est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 165 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>22. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 28 avril 2025, soit plus de 130 jours sans activité, ce qui dépasse largement les cycles de rotation observés l'année précédente (environ 45-60 jours). Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, surtout à l'approche de la période automnale où des ventes ont été enregistrées l'an dernier (août). Conformément à la règle des rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane et au dernier volume commandé.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 153 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>23. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique récent est inexistant, mais les données N-1 montrent une activité sur cette période (juin). En l'absence de commandes récentes et face à un cycle irrégulier, le principe de précaution B2B s'applique pour éviter une rupture potentielle sur un produit à faible rotation. ÉTAPE 2 : ESTIMATION QUANTITÉ. La rotation historique est très faible (1 unité). Conformément aux règles de gestion des rotations faibles (1-2u), on maintient la quantité minimale de 1 unité pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 142 tokens
- **Total**: 1,049 tokens



</details>




### Donnees d'Input LLM (23 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:51:09: 1u
- 2025-06-30 08:47:03: 1u
- 2025-05-19 13:45:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-02 06:12:35: 2u
- 2024-06-20 12:36:29: 1u
- 2024-06-04 08:34:01: 1u
- 2024-04-08 06:27:20: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF002] JF MAYONNAI BASILIC 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:51:09: 2u
- 2025-04-28 12:37:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 12:36:29: 1u
- 2024-06-04 08:34:01: 1u
- 2024-04-08 06:27:20: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF019] JF SAUCE AIOLI PESTO 250M WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:51:09: 2u
- 2025-06-30 08:47:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 12:36:29: 1u
- 2024-06-04 08:34:01: 1u
- 2024-04-08 06:27:20: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:51:09: 4u
- 2025-06-30 08:47:03: 1u
- 2025-05-19 13:45:22: 2u
- 2025-04-28 12:37:28: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 12:36:29: 4u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:51:09: 1u
- 2025-06-30 08:47:03: 1u
- 2025-05-19 13:45:22: 1u
- 2025-04-28 12:37:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-02 06:12:35: 2u
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 1u
- 2024-04-08 06:27:20: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:51:09: 1u
- 2025-06-30 08:47:03: 1u
- 2025-05-19 13:45:22: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-02 06:12:35: 2u
- 2024-06-20 12:36:29: 1u
- 2024-06-04 08:34:01: 0u
- 2024-04-08 06:27:20: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:51:09: 1u
- 2025-06-30 08:47:03: 2u
- 2025-05-19 13:45:22: 1u
- 2025-04-28 12:37:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-02 06:12:35: 1u
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:47:03: 1u
- 2025-04-28 12:37:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 12:36:29: 2u
- 2024-06-04 08:34:01: 1u
- 2024-04-08 06:27:20: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:47:03: 2u
- 2025-05-19 13:45:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-02 06:12:35: 2u
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:47:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 12:36:29: 2u
- 2024-06-04 08:34:01: 0u
- 2024-04-08 06:27:20: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:47:03: 1u
- 2025-05-19 13:45:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 12:36:29: 2u
- 2024-06-04 08:34:01: 0u
- 2024-04-08 06:27:20: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:47:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:47:03: 2u
- 2025-04-28 12:37:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 12:36:29: 3u
- 2024-06-04 08:34:01: 0u
- 2024-04-08 06:27:20: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:47:03: 2u
- 2025-05-19 13:45:22: 1u
- 2025-04-28 12:37:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 1u
- 2024-04-08 06:27:20: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:47:03: 2u
- 2025-05-19 13:45:22: 1u
- 2025-04-28 12:37:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 12:36:29: 2u
- 2024-06-04 08:34:01: 0u
- 2024-04-08 06:27:20: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 08:47:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>17. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 13:45:22: 2u
- 2025-04-28 12:37:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-02 06:12:35: 2u
- 2024-06-20 12:36:29: 2u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 13:45:22: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-02 06:12:35: 1u
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-28 12:37:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 12:36:29: 1u
- 2024-06-04 08:34:01: 0u
- 2024-04-08 06:27:20: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-28 12:37:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-02 06:12:35: 2u
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-28 12:37:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 12:36:29: 1u
- 2024-06-04 08:34:01: 1u
- 2024-04-08 06:27:20: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>22. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-28 12:37:28: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-02 06:12:35: 1u
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 2u
- 2024-04-08 06:27:20: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>23. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-20 12:36:29: 0u
- 2024-06-04 08:34:01: 1u
- 2024-04-08 06:27:20: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (15)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | Predicted 2u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF035] JF BURGER SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 2 | Predicted 2u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:09:13.832Z*
