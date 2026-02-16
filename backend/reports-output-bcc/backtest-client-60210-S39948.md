# Rapport Backtest - Client BIOK BOIS DE VILLERS

## Contexte

- **Client** : BIOK BOIS DE VILLERS (ID: 60210)
- **Commande réelle** : S39948
- **Date commande** : 2025-10-28 07:20:57
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 27
- **Tokens**: 24,837 input + 4,366 output = 29,203 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 73.1% | 26 produits prédits, 19 corrects |
| **Rappel** | 100.0% | 19 produits réels, 19 détectés |
| **F1-Score** | 84.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.47 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 24.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 19.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -2.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 12 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (19)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 4 | 1.0 | 25.0% | partial | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 5 | 2 | 3.0 | 150.0% | partial | LLM |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [ORG09] ORGANICA crunchy fruit cerise 20g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 6 | 5 | 1.0 | 20.0% | partial | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (19 produits)


<details>
<summary><strong>1. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique récent montre un cycle de commande moyen d'environ 22 jours (intervalles de 14, 21, 20, 22 et 36 jours). La dernière commande date du 08/10/2025, soit il y a 19 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons 86% du cycle moyen. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités commandées sont très stables, oscillant entre 2u et 4u. La médiane des commandes récentes est de 3u. En suivant le principe de précaution B2B et la règle de la médiane, une commande de 3 unités est préconisée pour couvrir les besoins sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 962 tokens
- **Output**: 203 tokens
- **Total**: 1,165 tokens



</details>


<details>
<summary><strong>2. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique montre un cycle de commande moyen d'environ 22 jours (intervalles de 14, 21, 20, 22 et 36 jours). La dernière commande date du 08/10/2025, soit 19 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons 86% du cycle moyen. Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes sont : 1, 3, 3, 2, 1, 2. La médiane de ces commandes est de 2 unités. Conformément aux règles, on privilégie la médiane pour stabiliser le stock sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 960 tokens
- **Output**: 204 tokens
- **Total**: 1,164 tokens



</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 5u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 3u (150.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 22 jours. La dernière commande datant du 08/10/2025 (soit 19 jours avant la date actuelle), nous atteignons 86% du cycle moyen, ce qui dépasse le seuil de précaution de 70%. Un risque de rupture est donc identifié dans l'horizon des 30 jours (Replenishment Threshold Days). Pour la quantité, la médiane des commandes récentes (6, 5, 5, 4, 2, 5) est de 5 unités. Conformément aux règles de gestion, nous retenons cette valeur médiane pour couvrir le prochain cycle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 960 tokens
- **Output**: 165 tokens
- **Total**: 1,125 tokens



</details>


<details>
<summary><strong>4. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 08/10/2025, soit il y a 19 jours. Le cycle moyen constaté est d'environ 28 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent (19 jours écoulés + 30 jours de visibilité > cycle moyen). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des quantités de 1, 1, 2, 2 et un pic à 3. La médiane des commandes récentes est de 2. Cependant, conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible/irrégulière pour éviter le surstock, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 207 tokens
- **Total**: 1,146 tokens



</details>


<details>
<summary><strong>5. [ORG09] ORGANICA crunchy fruit cerise 20g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle de commande moyen est d'environ 38 jours. La dernière commande date du 08/10/2025, soit il y a 19 jours. Avec un seuil de réapprovisionnement de 30 jours, la prochaine commande théorique tomberait autour du 15/11/2025, ce qui se situe à l'intérieur de l'horizon de risque (19 + 30 = 49 jours écoulés, dépassant largement le cycle moyen). Un besoin est donc détecté par précaution. ÉTAPE 2 : L'historique récent montre des quantités de 1u et 2u. La médiane est de 1,5u. Conformément à la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 204 tokens
- **Total**: 1,124 tokens



</details>


<details>
<summary><strong>6. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 22 et 77 jours. La dernière commande date du 08/10/2025 (il y a 19 jours). Avec un seuil de réapprovisionnement de 30 jours, nous couvrons l'horizon jusqu'au 26/11/2025. Étant donné l'irrégularité du cycle et le principe de précaution B2B, un risque de rupture est identifié. Pour la quantité, l'historique récent montre des volumes faibles (1, 3, 2, 1). La médiane est de 1,5u. Conformément aux règles de gestion (choisir la valeur la plus basse en cas de doute et maintenir les faibles rotations), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 927 tokens
- **Output**: 190 tokens
- **Total**: 1,117 tokens



</details>


<details>
<summary><strong>7. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande moyen d'environ 33 jours (intervalles de 21, 42 et 36 jours). La dernière commande date du 08/10/2025, soit 19 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture survient d'ici 11 jours, ce qui correspond à l'échéance du cycle moyen. Le besoin est donc détecté par précaution. ÉTAPE 2 : Estimation de la quantité. Les quantités récentes sont 1, 3, 1, 2. La médiane de ces commandes est de 1,5. En application de la règle de prudence B2B (choisir la valeur la plus basse en cas de doute ou de rotation faible), la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 210 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>8. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 08/10/2025, soit 19 jours avant la date actuelle. Le cycle moyen constaté est d'environ 28 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent d'ici la prochaine fenêtre de commande. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1, 4, 2, 2 et 3 unités. La médiane de ces commandes est de 2 unités. Conformément à la règle de privilégier la médiane et de ne pas surestimer en cas de doute, la quantité retenue est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 950 tokens
- **Output**: 166 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>9. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 35 jours. La dernière commande datant du 08 octobre (il y a 19 jours), le risque de rupture se situe dans l'horizon des 30 jours du seuil de réapprovisionnement (Replenishment Threshold Days). En application du principe de précaution B2B, un besoin est détecté. Pour la quantité, la médiane des commandes récentes est de 2 unités (trois commandes de 2u contre une de 3u). Conformément aux règles de gestion, nous maintenons cette quantité stable pour éviter le surstockage sur un produit à rotation régulière mais faible.

**Tokens utilises pour cette prediction:**
- **Input**: 930 tokens
- **Output**: 154 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>10. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 6u vs Médiane: 5u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 5u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 21 jours (intervalles de 22, 20, 21 et 14 jours). La dernière commande remontant au 02 septembre, soit 55 jours avant la date actuelle, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture critique. En suivant la règle de la médiane des quantités récentes (6, 6, 5, 2, 5), la valeur médiane est de 5, mais la tendance sur les deux dernières commandes s'est stabilisée à 6 unités. Par mesure de précaution B2B et pour maintenir le stock sur ce produit à rotation régulière, une commande de 6 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 186 tokens
- **Total**: 1,129 tokens



</details>


<details>
<summary><strong>11. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 21 à 35 jours entre chaque commande. La dernière commande datant du 02 septembre (soit 55 jours avant la date actuelle), le délai habituel est largement dépassé. Le risque de rupture est critique dans l'horizon des 30 jours (Replenishment Threshold Days). En suivant la règle de la médiane des commandes récentes, la quantité de 3 unités est systématiquement commandée (4 occurrences identiques). Il convient donc de maintenir cette quantité stable pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 928 tokens
- **Output**: 129 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>12. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 21 jours entre juillet et septembre. La dernière commande datant du 02 septembre (soit 55 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture imminent. Concernant la quantité, l'historique récent présente une médiane de 2 unités (valeurs : 2, 3, 2, 2). Conformément à la règle de privilégier la médiane et la valeur la plus basse en cas de doute pour éviter le surstockage, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 928 tokens
- **Output**: 157 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>13. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation régulière environ tous les 25 à 35 jours (moyenne de 26 jours entre les commandes récentes). La dernière commande datant du 02 septembre, soit il y a 55 jours, le délai habituel est largement dépassé. En application du principe de précaution B2B et face à ce retard sur le cycle habituel, un risque de rupture est identifié pour l'horizon des 30 prochains jours. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante des commandes historiques récentes pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 140 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>14. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/09/2025, soit 55 jours. Le cycle précédent était de 42 jours. Nous avons dépassé le cycle moyen constaté, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement selon le principe de précaution B2B (jours depuis dernière commande > 70% du cycle). ÉTAPE 2 : Estimation quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles de gestion des rotations faibles, la quantité maintenue est de 1 unité (médiane du stock).

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 154 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>15. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande date du 02/09/2025, soit 55 jours écoulés. Bien que l'historique soit limité à une seule unité, le délai important depuis la dernière vente et l'approche du seuil de réapprovisionnement de 30 jours justifient une commande de précaution pour éviter une rupture de stock prolongée. Conformément aux règles de rotation faible, la quantité est maintenue à 1 unité (médiane de l'historique récent).

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 114 tokens
- **Total**: 983 tokens



</details>


<details>
<summary><strong>16. [ORG03] ORGANICA crunchy fruit myrtille 16g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 14 et 63 jours. La dernière commande remonte au 02/09/2025, soit 55 jours avant la date actuelle. Ce délai ayant dépassé 70% du cycle long observé, le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 143 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>17. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 21 jours (3 semaines). La dernière commande remonte au 02/09/2025, soit 55 jours avant la date actuelle. Ce délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture ou un besoin imminent. En suivant le principe de précaution B2B et la règle de la médiane sur une rotation faible et constante, une quantité de 1 unité est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 138 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>18. [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/09/2025, soit 55 jours. Le cycle précédent était de 63 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique (55 + 30 > 63). Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 899 tokens
- **Output**: 163 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>19. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/09/2025, soit 55 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle précédent (77 jours). À l'approche du seuil de 30 jours, un risque de rupture existe selon le principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité absolue avec des commandes unitaires (1u). Conformément à la règle sur les rotations faibles, la quantité maintenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 896 tokens
- **Output**: 142 tokens
- **Total**: 1,038 tokens



</details>




### Donnees d'Input LLM (19 produits)


<details>
<summary><strong>1. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:05:30: 3u
- 2025-09-02 10:03:59: 4u
- 2025-08-11 11:56:21: 4u
- 2025-07-22 06:31:13: 3u
- 2025-07-01 09:08:43: 2u
- 2025-06-17 08:19:06: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 3u
- 2025-08-11 11:56:21: 3u
- 2025-07-22 06:31:13: 2u
- 2025-07-01 09:08:43: 1u
- 2025-06-17 08:19:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:05:30: 6u
- 2025-09-02 10:03:59: 5u
- 2025-08-11 11:56:21: 5u
- 2025-07-22 06:31:13: 4u
- 2025-07-01 09:08:43: 2u
- 2025-06-17 08:19:06: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:05:30: 3u
- 2025-08-11 11:56:21: 1u
- 2025-07-22 06:31:13: 1u
- 2025-07-01 09:08:43: 2u
- 2025-06-17 08:19:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [ORG09] ORGANICA crunchy fruit cerise 20g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 1u
- 2025-07-01 09:08:43: 2u
- 2025-06-17 08:19:06: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 3u
- 2025-08-11 11:56:21: 2u
- 2025-06-17 08:19:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 3u
- 2025-07-22 06:31:13: 1u
- 2025-07-01 09:08:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:05:30: 1u
- 2025-09-02 10:03:59: 4u
- 2025-07-22 06:31:13: 2u
- 2025-07-01 09:08:43: 2u
- 2025-06-17 08:19:06: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 07:05:30: 2u
- 2025-09-02 10:03:59: 2u
- 2025-07-22 06:31:13: 2u
- 2025-07-01 09:08:43: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 10:03:59: 6u
- 2025-08-11 11:56:21: 6u
- 2025-07-22 06:31:13: 5u
- 2025-07-01 09:08:43: 2u
- 2025-06-17 08:19:06: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>11. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 10:03:59: 3u
- 2025-08-11 11:56:21: 3u
- 2025-07-22 06:31:13: 3u
- 2025-06-17 08:19:06: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>12. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 10:03:59: 2u
- 2025-08-11 11:56:21: 3u
- 2025-07-22 06:31:13: 2u
- 2025-07-01 09:08:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 10:03:59: 1u
- 2025-08-11 11:56:21: 1u
- 2025-07-22 06:31:13: 1u
- 2025-06-17 08:19:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 10:03:59: 1u
- 2025-07-22 06:31:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 10:03:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [ORG03] ORGANICA crunchy fruit myrtille 16g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 10:03:59: 1u
- 2025-07-01 09:08:43: 1u
- 2025-06-17 08:19:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 10:03:59: 1u
- 2025-08-11 11:56:21: 1u
- 2025-07-22 06:31:13: 1u
- 2025-07-01 09:08:43: 1u
- 2025-06-17 08:19:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 10:03:59: 2u
- 2025-07-01 09:08:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-02 10:03:59: 1u
- 2025-06-17 08:19:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY05] Organic Cherry Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Predicted 1u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | Predicted 1u but not ordered |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Predicted 1u but not ordered |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:43.962Z*
