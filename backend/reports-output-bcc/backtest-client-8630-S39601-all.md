# Rapport Backtest - Client Dorfladen An Ennen

## Contexte

- **Client** : Dorfladen An Ennen (ID: 8630)
- **Commande réelle** : S39601
- **Date commande** : 2025-10-17 06:18:09
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 24
- **Tokens**: 22,095 input + 3,989 output = 26,084 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 58.3% | 24 produits prédits, 14 corrects |
| **Rappel** | 77.8% | 18 produits réels, 14 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.43 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 37.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 39.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0029] MF Tarti Datte chili 250g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 08/09/2025, soit 38 jours. Le cycle précédent était de 77 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons l'horizon de 68 jours sans commande. Par principe de précaution B2B et compte tenu de l'irrégularité potentielle, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. La médiane est de 1. Conformément aux règles sur les rotations faibles, on maintient la quantité de 1 unité sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 169 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>2. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 35 et 77 jours. Depuis la dernière commande du 08/09/2025, 38 jours se sont écoulés. Bien que le cycle soit irrégulier, nous atteignons une période de réapprovisionnement probable et le risque de rupture dans les 30 prochains jours est réel (principe de précaution B2B). La quantité est fixée à 2 unités, ce qui correspond à la médiane des commandes récentes et à la quantité la plus fréquente observée sur les dernières transactions.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 130 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>3. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 08/09/2025, soit 38 jours avant la date actuelle. L'historique N-1 montre une commande systématique entre septembre et novembre (2u le 16/09/2024). Le cycle moyen constaté est d'environ 60-70 jours, mais la saisonnalité de l'année précédente indique un besoin imminent pour couvrir les 30 prochains jours. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. Les commandes récentes oscillent entre 1u et 2u. La médiane historique et la commande correspondante à la même période l'an dernier (septembre) est de 2u. On retient cette quantité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 977 tokens
- **Output**: 197 tokens
- **Total**: 1,174 tokens



</details>


<details>
<summary><strong>4. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 08/09/2025, soit 38 jours avant la date actuelle. L'historique montre un cycle de commande irrégulier mais fréquent (environ tous les 2 à 3 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est présent car nous entrons dans la fenêtre habituelle de réassort. En application du principe de précaution B2B et face à un cycle incertain, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et historiques (2u), stabilisant le stock sur le volume le plus fréquent.

**Tokens utilises pour cette prediction:**
- **Input**: 942 tokens
- **Output**: 152 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>5. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 08/09/2025, soit il y a 38 jours. L'historique montre un cycle de réapprovisionnement irrégulier mais fréquent (environ tous les 2 à 3 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent selon le cycle N-1. En application du principe de précaution B2B et face à une rotation faible mais constante, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane et à la valeur constante des commandes récentes, excluant le pic exceptionnel de 2023.

**Tokens utilises pour cette prediction:**
- **Input**: 961 tokens
- **Output**: 153 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>6. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 08/09/2025, soit il y a 38 jours. L'historique N-1 montre une commande le 16/09/2024 suivie d'une période d'activité en fin d'année. Bien que le cycle soit irrégulier, le délai écoulé dépasse le seuil de précaution habituel pour ce type de produit à faible rotation. Par principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes très faibles (1u ou 2u). La médiane des commandes récentes est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1u sans augmenter sans raison spécifique.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 205 tokens
- **Total**: 1,195 tokens



</details>


<details>
<summary><strong>7. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 08/09/2025, soit 38 jours avant la date actuelle. Bien que le cycle soit irrégulier (rotation faible), le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes unitaires (1u). La médiane des commandes récentes est de 1u. Conformément aux règles sur les rotations faibles (1-2u), la quantité de 1u est maintenue pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 166 tokens
- **Total**: 1,137 tokens



</details>


<details>
<summary><strong>8. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 35 et 77 jours. Depuis la dernière commande du 08/09/2025, 38 jours se sont écoulés. Bien que le cycle soit irrégulier, nous dépassons le délai de la commande précédente et entrons dans la fenêtre de risque des 30 prochains jours (Replenishment Threshold Days). En application du principe de précaution B2B pour éviter une rupture sur un produit à rotation faible mais constante, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 142 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>9. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 08/09/2025, soit 38 jours. Le cycle moyen observé est d'environ 50-60 jours. Avec un seuil de réapprovisionnement de 30 jours, l'horizon de risque atteint 68 jours après la dernière commande, ce qui dépasse le cycle habituel. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes unitaires systématiques (médiane = 1). La quantité de 1 unité est donc maintenue pour éviter la rupture sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 163 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit environ 115 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle précédent (35 jours). En B2B, selon le principe de précaution et la règle du doute sur le cycle, un réapprovisionnement est nécessaire pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une régularité stricte de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité maintenue est de 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 159 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>11. [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g</strong> - LLM: 3u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit 115 jours sans activité. Bien que la rotation soit faible, le principe de précaution B2B s'applique face à une absence prolongée de réapprovisionnement pour un produit de fond de rayon. Le risque de rupture est considéré comme probable d'ici les 30 prochains jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 3 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité de la dernière commande est maintenue pour assurer la présence du produit sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 165 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>12. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 19 mai 2025, soit environ 150 jours sans activité. Bien que la rotation soit très faible et irrégulière, l'historique N-1 montre des commandes en fin d'année (novembre et décembre). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours face à un cycle incertain, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes historiques et à la règle de maintien pour les produits à très faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 140 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>13. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 mai 2025, soit environ 150 jours. Bien que la rotation soit très faible et irrégulière, l'historique N-1 montre une commande à la même période (16 septembre 2024). En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et passé oscille entre 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage sur les produits à faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 183 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>14. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 19 mai 2025, soit environ 150 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande historique, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée si le produit est toujours au catalogue. En l'absence de données récurrentes, la quantité est basée sur le volume de la dernière commande connue (2 unités), conformément à la règle de maintien des rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 114 tokens
- **Total**: 989 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 06:51:50: 1u
- 2025-06-23 06:36:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 06:51:50: 2u
- 2025-06-23 06:36:37: 2u
- 2025-05-19 08:10:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 06:51:50: 2u
- 2025-06-23 06:36:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-16 12:49:41: 2u
- 2024-07-01 06:34:36: 2u
- 2024-04-05 06:32:45: 1u
- 2024-02-02 07:47:10: 1u
- 2023-11-07 08:03:59: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [MF0054] MF Noix de cajou - Fleur de sel 133g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 06:51:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-01 06:34:36: 2u
- 2024-04-05 06:32:45: 1u
- 2024-02-02 07:47:10: 1u
- 2023-11-07 08:03:59: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 06:51:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-16 12:49:41: 1u
- 2024-07-01 06:34:36: 1u
- 2024-04-05 06:32:45: 1u
- 2024-02-02 07:47:10: 1u
- 2023-11-07 08:03:59: 5u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 06:51:50: 1u
- 2025-05-19 08:10:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-16 12:49:41: 2u
- 2024-07-01 06:34:36: 1u
- 2024-04-05 06:32:45: 1u
- 2024-02-02 07:47:10: 2u
- 2023-12-05 07:30:01: 2u
- 2023-11-07 08:03:59: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 06:51:50: 1u
- 2025-05-19 08:10:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-01 06:34:36: 1u
- 2024-04-05 06:32:45: 2u
- 2024-02-02 07:47:10: 2u
- 2023-12-05 07:30:01: 2u
- 2023-11-07 08:03:59: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 06:51:50: 1u
- 2025-06-23 06:36:37: 1u
- 2025-05-19 08:10:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 06:51:50: 1u
- 2025-06-23 06:36:37: 1u
- 2025-05-19 08:10:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:36:37: 1u
- 2025-05-19 08:10:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:36:37: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 08:10:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-05 06:32:45: 1u
- 2024-02-02 07:47:10: 2u
- 2023-12-05 07:30:01: 2u
- 2023-11-07 08:03:59: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 08:10:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-16 12:49:41: 2u
- 2024-04-05 06:32:45: 1u
- 2024-02-02 07:47:10: 2u
- 2023-12-05 07:30:01: 1u
- 2023-11-07 08:03:59: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-19 08:10:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Predicted 1u but not ordered |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 1 | Predicted 1u but not ordered |
| [CB005] CB Apple juice 1l | 2 | Predicted 2u but not ordered |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Predicted 1u but not ordered |
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | Predicted 1u but not ordered |
| [MF0027] MF Tarti Aubergine 250g  | 2 | Predicted 2u but not ordered |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | Predicted 1u but not ordered |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Predicted 2u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Predicted 1u but not ordered |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Predicted 1u but not ordered |


---

## False Negatives (4)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 2 | Never ordered in previous analysis window (no history) |
| [NUT08] NUTS & BERRIES Bar choco noir & noix grillées bio 40g | 2 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 6 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 36 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:16:31.625Z*
