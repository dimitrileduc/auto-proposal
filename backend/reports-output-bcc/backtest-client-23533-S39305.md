# Rapport Backtest - Client Epicerie Le Colibri

## Contexte

- **Client** : Epicerie Le Colibri (ID: 23533)
- **Commande réelle** : S39305
- **Date commande** : 2025-09-24 06:17:45
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 42
- **Tokens**: 37,699 input + 6,244 output = 43,943 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 64.5% | 31 produits prédits, 20 corrects |
| **Rappel** | 100.0% | 20 produits réels, 20 détectés |
| **F1-Score** | 78.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.30 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 22.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 14 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (20)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (20 produits)


<details>
<summary><strong>1. [LV153] LV Vinaigrette Ciboulette 250 ml bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/07/2025, soit 83 jours. Bien que la rotation soit très faible et irrégulière, l'historique montre des besoins espacés (environ 2 à 3 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est considéré comme présent par principe de précaution B2B, car le cycle habituel est largement dépassé. ÉTAPE 2 : Estimation de la quantité. L'historique (récent et N-1) est constant à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 180 tokens
- **Total**: 1,101 tokens



</details>


<details>
<summary><strong>2. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 02/07/2025, soit 83 jours. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement les cycles historiques observés (environ 70 jours entre les commandes de 2024). En application du principe de précaution B2B et du seuil de réapprovisionnement de 30 jours, un risque de rupture est identifié. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé pour ce produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 136 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>3. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande moyen d'environ 60 à 70 jours. La dernière commande datant du 02 juillet 2025 (soit plus de 80 jours), le seuil de réapprovisionnement est largement dépassé, indiquant un risque de rupture imminent. En suivant la règle de la médiane sur l'historique récent (2u en mai et juillet) et en privilégiant la valeur la plus basse par précaution pour ce produit à faible rotation, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 130 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>4. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 2 à 3 mois). La dernière commande remonte au 02/07/2025, soit plus de 80 jours, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent. En appliquant la règle de la médiane sur l'historique récent et passé (1u, 2u, 3u, 2u, 2u), la médiane se situe à 2 unités. Conformément au principe de précaution B2B et à la stabilité de la rotation, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 163 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>5. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 02/07/2025, soit plus de 80 jours. Bien que le cycle historique soit irrégulier (entre 2 et 4 mois), le délai actuel dépasse largement les 70% du cycle moyen constaté. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes historiques (mode), tout en respectant la règle de maintien pour les faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 142 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/07/2025, soit 83 jours. L'historique montre des cycles de réapprovisionnement irréguliers (environ 60 à 70 jours entre les commandes récentes). Le délai actuel dépasse largement le cycle moyen constaté, ce qui indique un risque de rupture imminent ou un besoin de restockage dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 oscille entre 1u et 3u. La médiane des commandes passées est de 2u. En suivant le principe de précaution sans surestimer, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 170 tokens
- **Total**: 1,123 tokens



</details>


<details>
<summary><strong>7. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière (environ tous les 2 à 3 mois). La dernière commande remontant au 2 juillet 2025 (soit plus de 80 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, signalant un risque de rupture imminent. En application du principe de précaution B2B et de la règle de la médiane historique, une commande de 2 unités est préconisée (médiane entre les commandes de 1u et 2u du semestre, et cohérent avec l'historique N-1).

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 146 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>8. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 60 à 80 jours. La dernière commande datant du 02 juillet 2025 (soit 83 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, confirmant un risque de rupture imminent. Bien que l'historique N-1 affichait des quantités de 3u, les commandes les plus récentes en 2025 se sont stabilisées à 2u. En application de la règle de la médiane sur l'historique récent et du principe de prudence face à une légère tendance à la baisse, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 162 tokens
- **Total**: 1,118 tokens



</details>


<details>
<summary><strong>9. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/07/2025, soit 83 jours. Le cycle historique récent est d'environ 58 jours (entre mai et juillet). Nous avons largement dépassé ce cycle moyen, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement immédiat pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité à 2 unités (mai et juillet 2025). Bien que l'année précédente affichait des commandes de 3 unités, la tendance actuelle est plus basse. En suivant la règle de la médiane récente et le principe de prudence (choisir la valeur la plus basse en cas de doute), la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 188 tokens
- **Total**: 1,141 tokens



</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 02/07/2025, soit 83 jours. L'historique montre un cycle de commande irrégulier mais récurrent (environ tous les 2 à 4 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car nous entrons dans la fenêtre habituelle de commande. En application du principe de précaution B2B et face à un cycle incertain, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 140 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>11. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 58 jours entre les deux dernières commandes. Au 23 septembre, 83 jours se sont écoulés depuis la dernière commande (02/07), ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la médiane et à la constante observée sur les commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 130 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>12. [fsv06] Noix du Brésil nature bio vrac 3kg</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande d'environ 58 jours (entre mai et juillet). Au 23 septembre, 83 jours se sont écoulés depuis la dernière commande, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent ou une consommation non couverte. En suivant la règle de la médiane des commandes récentes (2u en mai et 2u en juillet), la quantité préconisée est de 2 unités pour maintenir le stock sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 133 tokens
- **Total**: 1,021 tokens



</details>


<details>
<summary><strong>13. [fsv13] Pistaches grillées salées bio vrac 2,6kg </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande d'environ 58 jours (entre mai et juillet). Au 23 septembre, 83 jours se sont écoulés depuis la dernière commande, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité est fixée à 1 unité, correspondant à la médiane stricte des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 123 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>14. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 60 jours (entre mai et juillet). La dernière commande remonte au 02/07/2025, soit 83 jours avant la date actuelle. Le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent montre des quantités de 1u et 2u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 157 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>15. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle observé entre les deux dernières commandes est de 58 jours. La dernière commande date du 02/07/2025, soit il y a 83 jours. Nous avons largement dépassé le cycle habituel et le seuil de réapprovisionnement de 30 jours est largement entamé. Le risque de rupture est critique, le besoin est confirmé par principe de précaution. ÉTAPE 2 : Estimation quantité. L'historique récent montre une régularité parfaite avec des commandes de 2 unités. La médiane est de 2. Conformément aux règles de rotation faible, on maintient cette quantité constante sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 161 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>16. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 58 jours entre les deux dernières commandes. Au 23 septembre, 83 jours se sont écoulés depuis la dernière commande (02/07), ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la médiane et à la constante observée sur l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 132 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>17. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/07/2025, soit 83 jours. Le cycle précédent était de 58 jours. Nous avons largement dépassé le cycle moyen constaté, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement par précaution (principe de précaution B2B appliqué). ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes très faibles (1u et 2u). Conformément aux règles de gestion des rotations faibles et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité (médiane/minimum historique).

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 160 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>18. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique montre un cycle de commande d'environ 60 jours (mai à juillet). Depuis la dernière commande du 02/07/2025, 83 jours se sont écoulés, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est avéré. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont de 1u et 2u. La médiane est de 1,5u. Conformément à la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 170 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>19. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 05/05/2025, soit plus de 140 jours. Bien que le cycle soit irrégulier et la rotation très faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que nous entrons dans la période automnale (octobre/décembre) où des ventes ont été enregistrées l'année précédente (N-2). Conformément à la règle des rotations faibles, la quantité retenue est de 1 unité, correspondant à la dernière commande et à la prudence nécessaire pour ce type de produit.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 143 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>20. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/05/2025, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue pour un produit de type "chips" (consommable) suggère un besoin de réapprovisionnement par principe de précaution B2B pour éviter une rupture permanente en rayon. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 2 unités (médiane de l'historique disponible) sans augmenter pour limiter le risque de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 170 tokens
- **Total**: 1,045 tokens



</details>




### Donnees d'Input LLM (20 produits)


<details>
<summary><strong>1. [LV153] LV Vinaigrette Ciboulette 250 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:12:45: 1u
- 2024-04-08 06:47:38: 1u
- 2023-10-10 06:47:48: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:12:45: 1u
- 2024-04-08 06:47:38: 1u
- 2023-10-10 06:47:48: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 2u
- 2025-05-05 08:46:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:12:45: 3u
- 2024-04-08 06:47:38: 3u
- 2023-12-05 08:04:01: 2u
- 2023-10-10 06:47:48: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 1u
- 2025-05-05 08:46:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:12:45: 3u
- 2024-04-08 06:47:38: 2u
- 2023-12-05 08:04:01: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:12:45: 2u
- 2024-04-08 06:47:38: 2u
- 2023-12-05 08:04:01: 1u
- 2023-10-10 06:47:48: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 2u
- 2025-05-05 08:46:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:12:45: 2u
- 2024-04-08 06:47:38: 2u
- 2023-12-05 08:04:01: 1u
- 2023-10-10 06:47:48: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 2u
- 2025-05-05 08:46:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:12:45: 2u
- 2024-04-08 06:47:38: 3u
- 2023-10-10 06:47:48: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 2u
- 2025-05-05 08:46:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:12:45: 3u
- 2024-04-08 06:47:38: 3u
- 2023-12-05 08:04:01: 3u
- 2023-10-10 06:47:48: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 2u
- 2025-05-05 08:46:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:12:45: 3u
- 2024-04-08 06:47:38: 3u
- 2023-12-05 08:04:01: 1u
- 2023-10-10 06:47:48: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:12:45: 2u
- 2024-04-08 06:47:38: 2u
- 2023-12-05 08:04:01: 2u
- 2023-10-10 06:47:48: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [fsv05] Noix de pecan nature bio vrac 2,2kg </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 2u
- 2025-05-05 08:46:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [fsv06] Noix du Brésil nature bio vrac 3kg</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 2u
- 2025-05-05 08:46:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [fsv13] Pistaches grillées salées bio vrac 2,6kg </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 1u
- 2025-05-05 08:46:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 1u
- 2025-05-05 08:46:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 2u
- 2025-05-05 08:46:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>16. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 2u
- 2025-05-05 08:46:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>17. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 1u
- 2025-05-05 08:46:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 07:31:42: 1u
- 2025-05-05 08:46:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:46:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2023-12-05 08:04:01: 3u
- 2023-10-10 06:47:48: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>20. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:46:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Predicted 1u but not ordered |
| [LV040] LV Caprons apéritifs 240g | 1 | Predicted 1u but not ordered |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Predicted 1u but not ordered |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | Predicted 1u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 1 | Predicted 1u but not ordered |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Predicted 2u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Predicted 1u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Predicted 1u but not ordered |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:13:19.580Z*
