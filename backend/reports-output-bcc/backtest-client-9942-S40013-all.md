# Rapport Backtest - Client La fermette

## Contexte

- **Client** : La fermette (ID: 9942)
- **Commande réelle** : S40013
- **Date commande** : 2025-10-30 07:17:13
- **Date cutoff système** : 2025-10-29 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 48
- **Tokens**: 43,625 input + 7,146 output = 50,771 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 30.4% | 46 produits prédits, 14 corrects |
| **Rappel** | 63.6% | 22 produits réels, 14 détectés |
| **F1-Score** | 41.2% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.07 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 6.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 3.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -6.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 13 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0047] MF Mayonnaise 250ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 septembre, soit 37 jours. Le cycle moyen récent est d'environ 14 jours (entre les deux dernières commandes). Nous avons largement dépassé ce cycle (37 jours > 14 jours), ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement immédiat dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une baisse de volume, passant de 2u à 1u sur les deux dernières commandes. En appliquant la règle de la médiane sur les commandes les plus récentes et en respectant la tendance à la baisse pour éviter le surstockage, la quantité de 1u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 175 tokens
- **Total**: 1,118 tokens



</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'historique récent montre un cycle de commande régulier avec un intervalle moyen d'environ 14 à 20 jours entre les sessions d'achat (juillet et septembre). La dernière commande datant du 22 septembre, soit il y a 37 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de toutes les commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 123 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique récent montre un cycle de commande d'environ 14 jours en septembre, mais la dernière commande remonte au 22 septembre (soit 37 jours). Le délai depuis la dernière commande dépasse largement le cycle moyen observé et l'horizon de 30 jours du seuil de réapprovisionnement. Il existe un risque de rupture ou un besoin non couvert. ÉTAPE 2 : Estimation de la quantité. Les trois dernières commandes sont constantes à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 156 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>4. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 66 jours entre les deux dernières commandes. Au 29 octobre, 37 jours se sont écoulés depuis la dernière commande (22 septembre). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (37 + 30 = 67 jours, ce qui correspond exactement au cycle moyen observé). En application du principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 141 tokens
- **Total**: 1,033 tokens



</details>


<details>
<summary><strong>5. [PAO01] PAOLA cola verre 250ml - le cola des Belges</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 66 jours (entre juillet et septembre). Depuis la dernière commande du 08/09/2025, 51 jours se sont écoulés. Cela représente environ 77% du cycle moyen, dépassant le seuil de risque de 70%. Un besoin est donc identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : L'historique récent montre une consommation constante et très faible de 1 unité par commande. Conformément à la règle sur les rotations faibles, la médiane de 1 unité est maintenue pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 153 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>6. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 11 jours puis 66 jours, indiquant une rotation irrégulière. Depuis la dernière commande du 08/09/2025, 51 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans une zone de risque de rupture (le délai actuel dépassant 70% du cycle long observé). En application du principe de précaution B2B pour les cycles irréguliers, un besoin est détecté. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 147 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>7. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/09/2025, soit 51 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (cycle incertain = prévoir), un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre une rotation très faible (1 unité). Conformément aux règles de gestion des rotations faibles, on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 149 tokens
- **Total**: 1,025 tokens



</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/07/2025, soit plus de 110 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au cycle initial (11 jours entre les deux premières commandes) crée une incertitude sur le stock disponible. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une régularité stricte de 1 unité par commande. Conformément aux règles sur les rotations faibles (1-2u), la quantité maintenue est de 1 unité (médiane de l'historique).

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 184 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>9. [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à plus de 110 jours (4 juillet 2025), ce qui dépasse largement le cycle de rotation observé précédemment (11 jours entre les deux dernières commandes). Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane et au mode de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 897 tokens
- **Output**: 123 tokens
- **Total**: 1,020 tokens



</details>


<details>
<summary><strong>10. [MF0047] MF Mayonnaise 250ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 04/07/2025, soit environ 117 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement les cycles observés précédemment. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et au maintien du stock pour les produits à très faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 899 tokens
- **Output**: 119 tokens
- **Total**: 1,018 tokens



</details>


<details>
<summary><strong>11. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière (environ une unité tous les 2 à 4 mois). La dernière commande enregistrée remonte au 04 juillet 2025, soit plus de 115 jours. Bien que le cycle soit lent, le délai écoulé dépasse largement les intervalles historiques observés en 2024. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 142 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>12. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 04/07/2025, soit plus de 115 jours. Bien que la rotation soit faible et irrégulière, l'historique N-1 montre une activité en fin d'année (novembre). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent (2025) montre une stabilité à 1 unité. La médiane des commandes récentes est de 1. Conformément à la règle sur les rotations faibles (1-2u) et la consigne de choisir la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 957 tokens
- **Output**: 199 tokens
- **Total**: 1,156 tokens



</details>


<details>
<summary><strong>13. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 04/07/2025, soit plus de 115 jours. L'historique N-1 montre une commande le 07/10/2024. Bien que le cycle soit très lent et irrégulier, le principe de précaution B2B s'applique car nous sommes dans la période anniversaire de la commande de l'an dernier et le délai depuis la dernière livraison est très important. ÉTAPE 2 : L'historique récent et N-1 montre des volumes très faibles (1u ou 2u). Conformément à la règle sur les rotations faibles, on privilégie la quantité minimale de 1u pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 175 tokens
- **Total**: 1,112 tokens



</details>


<details>
<summary><strong>14. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 23 juin 2025, soit plus de 120 jours. L'historique (N-1) montre des commandes régulières environ tous les 2 à 3 mois (mars, mai, août, octobre). Nous sommes actuellement le 29 octobre, ce qui correspond à une période de commande historique. En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 147 tokens
- **Total**: 1,083 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:26:45: 1u
- 2025-09-08 06:53:29: 1u
- 2025-07-18 08:37:40: 2u
- 2025-07-04 09:09:35: 2u
- 2025-06-23 06:35:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:26:45: 1u
- 2025-09-08 06:53:29: 1u
- 2025-07-18 08:37:40: 1u
- 2025-07-04 09:09:35: 1u
- 2025-06-23 06:35:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:26:45: 1u
- 2025-09-08 06:53:29: 1u
- 2025-06-23 06:35:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 06:26:45: 1u
- 2025-07-18 08:37:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [PAO01] PAOLA cola verre 250ml - le cola des Belges</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 06:53:29: 1u
- 2025-07-04 09:09:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 06:53:29: 1u
- 2025-07-04 09:09:35: 1u
- 2025-06-23 06:35:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 06:53:29: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-04 09:09:35: 1u
- 2025-06-23 06:35:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-04 09:09:35: 1u
- 2025-06-23 06:35:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [MF0047] MF Mayonnaise 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-04 09:09:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 06:27:48: 2u
- 2024-03-12 07:30:37: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-04 09:09:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:40:03: 1u
- 2024-08-05 06:27:48: 1u
- 2024-05-27 07:14:30: 1u
- 2024-03-12 07:30:37: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-04 09:09:35: 1u
- 2025-06-23 06:35:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 06:27:48: 2u
- 2024-05-27 07:14:30: 1u
- 2024-03-12 07:30:37: 2u
- 2023-11-07 07:48:10: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-04 09:09:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:40:03: 1u
- 2024-08-05 06:27:48: 2u
- 2024-05-27 07:14:30: 2u
- 2024-03-12 07:30:37: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:35:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 11:40:03: 1u
- 2024-08-05 06:27:48: 1u
- 2024-05-27 07:14:30: 1u
- 2024-03-12 07:30:37: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (32)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LB006] LB Brown (7,0%)  33CL | 1 | Predicted 1u but not ordered |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Predicted 1u but not ordered |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Predicted 1u but not ordered |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | Predicted 1u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 2 | Predicted 2u but not ordered |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 1 | Predicted 1u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 1 | Predicted 1u but not ordered |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 1 | Predicted 1u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Predicted 1u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Predicted 1u but not ordered |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 1 | Predicted 1u but not ordered |
| [CB010] CB Jus de Pomme cubis 3l | 2 | Predicted 2u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Predicted 1u but not ordered |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Predicted 1u but not ordered |
| [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml | 1 | Predicted 1u but not ordered |
| [RF003] REFIELD Maïs 500G  | 1 | Predicted 1u but not ordered |
| [MF0013] MF Olives Vertes 500g | 1 | Predicted 1u but not ordered |
| [MF0052] MF Pois chiches  500g | 2 | Predicted 2u but not ordered |
| [MF0024] MF KETCHUP 250g | 1 | Predicted 1u but not ordered |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Predicted 1u but not ordered |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | Predicted 1u but not ordered |
| [LEA10] LEAMO ginger beer bio 330ml | 1 | Predicted 1u but not ordered |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | Predicted 1u but not ordered |
| [OCC02] OCCHIOLINO premium limoncello 500ml | 1 | Predicted 1u but not ordered |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Predicted 1u but not ordered |
| [MF0012] MF Olives Mix 500g | 1 | Predicted 1u but not ordered |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Predicted 1u but not ordered |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Predicted 1u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Predicted 1u but not ordered |
| [MF0061] MF Compote | 1 | Predicted 1u but not ordered |
| [CB007] CB Apple Nettle juice 1l | 1 | Predicted 1u but not ordered |


---

## False Negatives (8)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0014] MF Olives noires 500g | 1 | Never ordered in previous analysis window (no history) |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | Never ordered in previous analysis window (no history) |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Never ordered in previous analysis window (no history) |
| [MF0051] MF Kidney Beans 500g | 1 | Never ordered in previous analysis window (no history) |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Never ordered in previous analysis window (no history) |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 9 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 54 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:06:19.754Z*
