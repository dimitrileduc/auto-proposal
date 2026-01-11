# Rapport Backtest - Client La Ferme du pavé

## Contexte

- **Client** : La Ferme du pavé (ID: 23320)
- **Commande réelle** : S40157
- **Date commande** : 2025-11-06 07:13:11
- **Date cutoff système** : 2025-11-05 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 37
- **Tokens**: 33,408 input + 6,042 output = 39,450 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 46.9% | 32 produits prédits, 15 corrects |
| **Rappel** | 100.0% | 15 produits réels, 15 détectés |
| **F1-Score** | 63.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.80 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 48.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 62.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -30.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

---

## True Positives (15)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF038] JF KETCHUP SQUEEZE 300ML | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 8 | 8 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 6 | 6 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 8 | 3 | 5.0 | 166.7% | partial | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 8 | 6.0 | 75.0% | partial | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 8 | 6.0 | 75.0% | partial | Non | Non | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | 8 | 6.0 | 75.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 8 | 6.0 | 75.0% | partial | Non | Non | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 4 | 1 | 3.0 | 300.0% | partial | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 8 | 6.0 | 75.0% | partial | Non | Non | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 6 | 8 | 2.0 | 25.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 8 | 8 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (15 produits)


<details>
<summary><strong>1. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle d'environ 86 jours entre les deux dernières commandes (juin à septembre). La dernière commande datant du 17 septembre 2025, soit il y a 49 jours, nous entrons dans la zone de risque de rupture (70% du cycle moyen) d'ici les 30 prochains jours. Bien que l'historique N-1 montre des volumes plus élevés en octobre, la tendance récente est stabilisée à 1 unité. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent, une commande de 1 unité est nécessaire pour couvrir le besoin imminent sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 160 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 8u vs Médiane: 8u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 8u
- **Reel commande**: 8u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 86 jours entre les commandes récentes (juin à septembre). Au 5 novembre, 49 jours se sont écoulés depuis la dernière commande. Bien que nous ne soyons qu'à environ 57% du cycle moyen, l'historique de l'année précédente montre une commande début octobre, suggérant un besoin imminent pour couvrir la fin d'année. En application du principe de précaution B2B et pour éviter une rupture durant la fenêtre de 30 jours, un réapprovisionnement est nécessaire. La quantité retenue est de 8 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes récentes, écartant le pic exceptionnel de 10 unités de l'an dernier.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 175 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 6u vs Médiane: 8u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 8u
- **Reel commande**: 6u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 90 jours entre les commandes récentes. La dernière commande datant du 17 septembre 2025 (il y a 49 jours), le risque de rupture devient significatif à l'horizon des 30 prochains jours (seuil de réapprovisionnement), car nous approchons de la fenêtre habituelle de réassort. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 6 unités, correspondant à la médiane et à la valeur la plus récente de l'historique proche, tout en restant prudente par rapport aux volumes plus importants constatés l'année précédente (8-10u).

**Tokens utilises pour cette prediction:**
- **Input**: 924 tokens
- **Output**: 165 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 17 septembre 2025, soit 49 jours avant la date actuelle. L'historique montre un cycle de réapprovisionnement d'environ 3 à 4 mois (86 jours entre juin et septembre). Bien que le cycle moyen ne soit pas encore totalement atteint, le délai de 49 jours combiné au seuil de réapprovisionnement de 30 jours crée un risque de rupture à l'horizon de fin novembre, période où une commande avait été passée l'année précédente (octobre 2024). En application du principe de précaution B2B, un besoin est détecté. La quantité est fixée à 4 unités, correspondant à la médiane des commandes récentes et à la commande de la même période l'année dernière (N-1), évitant ainsi le pic exceptionnel de 8 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 196 tokens
- **Total**: 1,118 tokens



</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 8u vs Médiane: 6u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 6u
- **Reel commande**: 3u
- **Erreur LLM**: 5u (166.7%)
- **Erreur Mediane**: 3u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle montre une commande récente le 17 septembre, soit il y a environ 49 jours. Bien que la rotation soit lente, l'historique de l'année précédente indique une commande de 10 unités début octobre. Nous sommes actuellement le 5 novembre, dépassant la période de récurrence habituelle de l'automne. Le risque de rupture est élevé dans l'horizon des 30 jours (Replenishment Threshold Days). En suivant la règle de la médiane des quantités historiques (2, 8, 8, 10), la valeur médiane se situe à 8 unités. Conformément au principe de précaution B2B et à la sélection de la valeur la plus basse en cas de doute sur un volume décroissant (2u vs 8u), la quantité de 8 unités est retenue pour couvrir le besoin sans surstockage excessif.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 194 tokens
- **Total**: 1,117 tokens



</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 8u
- **Erreur LLM**: 6u (75.0%)
- **Erreur Mediane**: 5u (62.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 17 septembre 2025, soit 49 jours avant la date actuelle. Bien que l'historique soit limité, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours, créant une incertitude sur le niveau de stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la valeur de la dernière commande connue (médiane de l'historique récent).

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 135 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 6u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 6u
- **Reel commande**: 8u
- **Erreur LLM**: 6u (75.0%)
- **Erreur Mediane**: 2u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre, soit 49 jours. Bien que le cycle récent soit irrégulier (environ 86 jours entre les deux dernières), nous entrons dans une période où des commandes ont été passées l'année précédente (décembre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est considéré comme présent par principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des volumes faibles (2u et 3u). La médiane des commandes récentes est de 2,5u. Conformément à la règle de choisir la valeur la plus basse en cas de doute et de ne pas surestimer pour les produits à faible rotation, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 190 tokens
- **Total**: 1,128 tokens



</details>


<details>
<summary><strong>8. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 2u vs Médiane: 4u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 8u
- **Erreur LLM**: 6u (75.0%)
- **Erreur Mediane**: 4u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 17 septembre 2025, soit 49 jours avant la date actuelle. L'historique montre une rotation irrégulière avec des pics en fin d'année (novembre/décembre). Le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours, créant un risque de rupture imminent pour la période de fin d'année. En application du principe de précaution B2B et de la règle de la médiane sur les volumes récents et historiques stables, une quantité de 2 unités est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 143 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>9. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 7u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 7u
- **Reel commande**: 8u
- **Erreur LLM**: 6u (75.0%)
- **Erreur Mediane**: 1u (12.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre 2025, soit 49 jours avant la date actuelle (5 novembre). Bien que le cycle soit irrégulier, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours et l'historique montre des besoins récurrents. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 2u et 3u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 175 tokens
- **Total**: 1,113 tokens



</details>


<details>
<summary><strong>10. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 1u
- **Erreur LLM**: 3u (300.0%)
- **Erreur Mediane**: 3u (300.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 23 juin 2025, soit plus de 130 jours. Bien que le cycle soit difficile à déterminer avec une seule commande récente, l'absence de commande sur une période aussi longue pour un produit de type moutarde (rotation lente mais constante en B2B) et l'approche de la fin d'année justifient une commande de précaution pour éviter une rupture prolongée. ÉTAPE 2 : En l'absence d'historique multiple, la quantité est basée sur la dernière commande connue (4 unités), ce qui correspond au volume standard de réapprovisionnement pour cette référence.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 148 tokens
- **Total**: 1,022 tokens



</details>


<details>
<summary><strong>11. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 3u vs Médiane: 6u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 6u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit plus de 130 jours. Bien que le cycle soit irrégulier, le délai écoulé dépasse largement les intervalles historiques observés. En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), un besoin de réapprovisionnement est détecté pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 3 unités. Bien que l'année précédente affichait des volumes de 8 unités, la règle de prudence impose de suivre la tendance récente la plus basse pour éviter le surstockage sur un produit à rotation lente. La médiane récente de 3 unités est donc retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 186 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>12. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 7u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 7u
- **Reel commande**: 8u
- **Erreur LLM**: 6u (75.0%)
- **Erreur Mediane**: 1u (12.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement tout cycle raisonnable, suggérant un besoin de réapprovisionnement pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 2 unités. Bien que l'année précédente affichait des volumes de 8 unités, la tendance récente est à la baisse. Conformément aux règles, on privilégie la quantité récente la plus basse pour éviter le surstockage sur un produit à faible rotation. La médiane des commandes récentes est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 182 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>13. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 23 juin 2025, soit plus de 130 jours sans activité, ce qui dépasse largement les cycles historiques observés (15 à 45 jours en fin d'année N-1). Bien que la rotation soit faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour couvrir le risque de rupture à l'approche de la période d'activité de fin d'année (novembre/décembre). La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à la quantité minimale historique, afin d'éviter un surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 156 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>14. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 6u vs Médiane: 6u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 6u
- **Reel commande**: 8u
- **Erreur LLM**: 2u (25.0%)
- **Erreur Mediane**: 2u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une rotation cyclique environ tous les 3 à 4 mois. La dernière commande enregistrée remonte à plus de 15 mois. En application du principe de précaution B2B et face à l'absence de données récentes (doute sur le cycle), un besoin de réapprovisionnement est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique récent, la décision se base sur les données N-1. La médiane des commandes passées (4, 6, 8) est de 6 unités. Cette quantité est retenue pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 179 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>15. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 8u vs Médiane: 7u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 7u
- **Reel commande**: 8u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (12.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Bien qu'il n'y ait pas de commandes récentes en 2025, l'historique N-1 montre un cycle de réapprovisionnement environ tous les 4 mois (mars, juillet, décembre). La dernière commande enregistrée remonte à plus de 15 mois. En application du principe de précaution B2B et face à l'absence de données récentes (doute sur le cycle), un besoin de réapprovisionnement est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique montre des volumes de 6u et 8u. La médiane des commandes passées est de 8u. Conformément aux règles, on maintient ce volume historique stable pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 181 tokens
- **Total**: 1,087 tokens



</details>




### Donnees d'Input LLM (15 produits)


<details>
<summary><strong>1. [JF038] JF KETCHUP SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:18:55: 1u
- 2025-06-23 06:28:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:45:03: 4u
- 2024-06-04 06:52:35: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:18:55: 8u
- 2025-06-23 06:28:24: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:45:03: 10u
- 2024-06-04 06:52:35: 8u

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>3. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:18:55: 6u
- 2025-06-23 06:28:24: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:45:03: 10u
- 2024-06-04 06:52:35: 8u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:18:55: 4u
- 2025-06-23 06:28:24: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:45:03: 4u
- 2024-06-04 06:52:35: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:18:55: 2u
- 2025-06-23 06:28:24: 8u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-01 13:45:03: 10u
- 2024-06-04 06:52:35: 8u

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:18:55: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:40:18: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>7. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:18:55: 3u
- 2025-06-23 06:28:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:40:18: 8u
- 2024-03-15 08:44:17: 8u
- 2023-12-15 13:57:57: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>8. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:18:55: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:40:18: 0u
- 2024-03-15 08:44:17: 8u
- 2023-12-15 13:57:57: 2u
- 2023-11-30 10:52:12: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>9. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:18:55: 3u
- 2025-06-23 06:28:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:40:18: 8u
- 2024-03-15 08:44:17: 8u
- 2023-12-15 13:57:57: 6u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>10. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:28:24: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:28:24: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:40:18: 8u
- 2024-03-15 08:44:17: 8u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>12. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:28:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:40:18: 8u
- 2024-03-15 08:44:17: 8u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>13. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:28:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:40:18: 4u
- 2023-12-15 13:57:57: 2u
- 2023-11-30 10:52:12: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:40:18: 6u
- 2024-03-15 08:44:17: 8u
- 2023-12-15 13:57:57: 4u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>15. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:40:18: 8u
- 2024-03-15 08:44:17: 8u
- 2023-12-15 13:57:57: 6u

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 8u

</details>




---

## False Positives (17)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | Predicted 2u but not ordered |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 2 | Predicted 2u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 2 | Predicted 2u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Predicted 1u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Predicted 1u but not ordered |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 2 | Predicted 2u but not ordered |
| [LV216] LV Biscuits apéro Fromage & Oignon 100g bio | 2 | Predicted 2u but not ordered |
| [LV214] LV Biscuits apéro tomate basilic 100g bio  | 2 | Predicted 2u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 4 | Predicted 4u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 4 | Predicted 4u but not ordered |
| [JF021] JF PICKLES 350 ML | 2 | Predicted 2u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 8 | Predicted 8u but not ordered |
| [LV040] LV Caprons apéritifs 240g | 8 | Predicted 8u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:49.682Z*
