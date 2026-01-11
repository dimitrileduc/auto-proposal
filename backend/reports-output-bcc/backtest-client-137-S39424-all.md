# Rapport Backtest - Client L'epicerie des Champs

## Contexte

- **Client** : L'epicerie des Champs (ID: 137)
- **Commande réelle** : S39424
- **Date commande** : 2025-09-29 06:12:41
- **Date cutoff système** : 2025-09-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 28
- **Tokens**: 25,261 input + 4,444 output = 29,705 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 44.4% | 27 produits prédits, 12 corrects |
| **Rappel** | 70.6% | 17 produits réels, 12 détectés |
| **F1-Score** | 54.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 23.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -23.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (12)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV145] LV Sauce Tartare 200 ml  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0024] MF KETCHUP 250g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (12 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre des commandes environ tous les 60 jours (avril à juin, juin à août). La dernière commande date du 25 août, soit il y a 34 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une commande est probable pour éviter une rupture d'ici la fin du cycle habituel. Le principe de précaution B2B s'applique. ÉTAPE 2 : Estimation quantité. Les quantités récentes sont de 1u, 1u et 2u. La médiane de l'historique récent est de 1u. Conformément à la règle de ne pas surestimer et de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 195 tokens
- **Total**: 1,101 tokens



</details>


<details>
<summary><strong>2. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte à 34 jours (25 août). Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles, la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 141 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>3. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 25 août, soit 34 jours avant la date actuelle. Le cycle historique entre les deux dernières commandes était d'environ 66 jours. Bien que nous ne soyons pas encore à l'échéance théorique du cycle complet, le délai actuel dépasse largement le seuil de réapprovisionnement de 30 jours (risque de rupture imminent ou besoin de restockage préventif). En application du principe de précaution B2B et face à une rotation faible mais constante, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent et de l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 154 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle de commande moyen est d'environ 65 jours. La dernière commande date du 25 août 2025, soit 34 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 64 jours d'ici la fin de la période de couverture, ce qui correspond exactement au cycle habituel. Il existe donc un risque de rupture imminent. ÉTAPE 2 : L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de précaution sur les faibles rotations et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 164 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>5. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande régulier d'environ 60 jours (avril, juin, août). La dernière commande datant du 25 août (il y a 34 jours), nous atteignons le seuil de risque de rupture pour l'horizon des 30 prochains jours (seuil de 70% du cycle dépassé). Conformément au principe de précaution B2B et à la stabilité parfaite des quantités historiques (médiane de 1u), une commande de 1 unité est nécessaire pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 134 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>6. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 25 août, soit 34 jours. Bien que le cycle soit irrégulier (66 jours entre les deux dernières commandes), nous entrons dans une zone de risque au regard du seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (cycle difficile à déterminer = prévoir), un besoin est identifié. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des volumes très faibles (1u et 2u). Conformément à la règle sur les rotations faibles, on privilégie la valeur la plus basse de la médiane pour éviter le surstock. La quantité retenue est donc de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 173 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>7. [LV145] LV Sauce Tartare 200 ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 juin 2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'absence de commande récente et l'incertitude sur le cycle imposent l'application du principe de précaution B2B pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité à 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 143 tokens
- **Total**: 1,013 tokens



</details>


<details>
<summary><strong>8. [LV165] LV Vol-au-vent (avec viande de volaille) 400 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande d'environ 53 jours (entre avril et juin). Depuis la dernière commande du 20 juin 2025, 100 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité est fixée à 1 unité, correspondant à la médiane stricte des commandes récentes (1u et 1u).

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 136 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>9. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 juin 2025, soit plus de 100 jours. Bien que la rotation soit faible, l'historique N-1 montre une activité en août et décembre. Selon le principe de précaution B2B et le cycle irrégulier, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent présente des commandes de 1u et 2u. La médiane est de 1,5u. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute et pour les rotations faibles de 1-2u), la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 179 tokens
- **Total**: 1,133 tokens



</details>


<details>
<summary><strong>10. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 juin 2025, soit plus de 100 jours. Bien que la rotation soit faible et irrégulière, le délai écoulé dépasse largement les cycles observés précédemment (environ 50 à 90 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. La médiane de l'historique global (1u, 2u, 1u, 3u, 1u, 1u) est de 1u. Conformément à la règle de ne pas surestimer pour les produits à faible rotation et de choisir la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 225 tokens
- **Total**: 1,179 tokens



</details>


<details>
<summary><strong>11. [MF0024] MF KETCHUP 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 juin 2025, soit plus de 100 jours. L'historique N-1 montre une commande en août 2024. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée, le cycle moyen étant largement dépassé. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre des commandes de 1u ou 2u. Conformément à la règle sur les rotations faibles (1-2u) et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 170 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 juin 2025, soit plus de 100 jours. Bien que la rotation soit faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente (environ 90 jours). Un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 2u. L'historique N-1 sur une période proche (août) était de 3u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 195 tokens
- **Total**: 1,115 tokens



</details>




### Donnees d'Input LLM (12 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:32:55: 2u
- 2025-06-20 11:18:49: 1u
- 2025-04-28 08:26:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:32:55: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:32:55: 1u
- 2025-06-20 11:18:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 05:59:02: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:32:55: 1u
- 2025-06-20 11:18:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-21 06:26:23: 1u
- 2024-02-20 13:09:05: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:32:55: 1u
- 2025-06-20 11:18:49: 1u
- 2025-04-28 08:26:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 05:59:02: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-25 06:32:55: 1u
- 2025-06-20 11:18:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-20 13:09:05: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV145] LV Sauce Tartare 200 ml </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 11:18:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV165] LV Vol-au-vent (avec viande de volaille) 400 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 11:18:49: 1u
- 2025-04-28 08:26:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 11:18:49: 2u
- 2025-04-28 08:26:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 05:59:02: 1u
- 2024-05-21 06:26:23: 2u
- 2024-02-20 13:09:05: 1u
- 2023-12-18 07:46:53: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 11:18:49: 2u
- 2025-04-28 08:26:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 05:59:02: 1u
- 2024-05-21 06:26:23: 3u
- 2024-02-20 13:09:05: 1u
- 2023-12-18 07:46:53: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [MF0024] MF KETCHUP 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 11:18:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 05:59:02: 1u
- 2024-05-21 06:26:23: 2u
- 2024-02-20 13:09:05: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 11:18:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-19 05:59:02: 3u
- 2024-05-21 06:26:23: 2u
- 2024-02-20 13:09:05: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (15)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Predicted 2u but not ordered |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Predicted 1u but not ordered |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | Predicted 2u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 2 | Predicted 2u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV158] LV Moutarde 200 ml | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Predicted 1u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 1 | Predicted 1u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Predicted 1u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Predicted 1u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Predicted 1u but not ordered |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | Predicted 1u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Predicted 1u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |


---

## False Negatives (5)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0047] MF Mayonnaise 250ml | 1 | Never ordered in previous analysis window (no history) |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Never ordered in previous analysis window (no history) |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 2 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 12 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:14:20.266Z*
