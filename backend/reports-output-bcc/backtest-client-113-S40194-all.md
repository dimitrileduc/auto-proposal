# Rapport Backtest - Client Le bon Wagon Eupen

## Contexte

- **Client** : Le bon Wagon Eupen (ID: 113)
- **Commande réelle** : S40194
- **Date commande** : 2025-11-12 10:42:35
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 33
- **Tokens**: 30,985 input + 5,539 output = 36,524 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 48.5% | 33 produits prédits, 16 corrects |
| **Rappel** | 84.2% | 19 produits réels, 16 détectés |
| **F1-Score** | 61.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 32.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 24.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -16.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (16)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0033] MF Tarti Poivron chilli 250g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [MF0047] MF Mayonnaise 250ml | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [NUT02] NUTS & BERRIES energy bar Superfood bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0055] MF Noix de cajou - Curry 133g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [MF0034] MF Tarti Pomme Raifort 250g  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 5 | 3.0 | 60.0% | partial | Non | Non | LLM |
| [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (16 produits)


<details>
<summary><strong>1. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 08/10/2025, soit 34 jours avant la date actuelle (11/11/2025). Le cycle historique récent montre des intervalles de 50 à 70 jours, mais l'historique N-1 indique une fréquence plus soutenue en fin d'année (octobre/décembre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est identifié par précaution pour couvrir la période de fin d'année. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des quantités de 1u, 4u et 1u. La médiane est de 1u. Bien que l'année précédente affichait des commandes de 2u, la tendance récente est plus faible et irrégulière. Conformément à la règle de privilégier la médiane et la valeur la plus basse en cas de doute pour les faibles rotations, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,039 tokens
- **Output**: 242 tokens
- **Total**: 1,281 tokens



</details>


<details>
<summary><strong>2. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Le cycle de commande récent est d'environ 50 à 70 jours. La dernière commande date du 08/10/2025, soit il y a 34 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (34 + 30 = 64 jours, ce qui correspond au cycle moyen observé). Bien que l'historique N-1 montre des pics à 2 unités, la tendance récente sur les trois dernières commandes est strictement stabilisée à 1 unité. En application de la règle de la médiane et du principe de précaution sans surstockage, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,025 tokens
- **Output**: 162 tokens
- **Total**: 1,187 tokens



</details>


<details>
<summary><strong>3. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
La dernière commande remonte au 08/10/2025, soit 34 jours. Le cycle moyen historique est d'environ 50 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent (34 + 30 > 50). En application du principe de précaution B2B, un besoin est détecté. La quantité retenue est la médiane des commandes récentes (1, 2, 3), soit 2 unités, ce qui correspond également à la moyenne observée sur la même période l'année précédente (N-1).

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 141 tokens
- **Total**: 1,163 tokens



</details>


<details>
<summary><strong>4. [MF0047] MF Mayonnaise 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen constaté est d'environ 50 jours. La dernière commande date du 08/10/2025, soit 34 jours écoulés. Ce délai représente 68% du cycle moyen, approchant le seuil de risque de 70%. De plus, l'historique N-1 montre une commande systématique fin octobre/début novembre. En application du principe de précaution B2B, un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. La médiane des commandes récentes est de 2 unités. Bien que le volume soit faible, la tendance récente (août et octobre) s'est stabilisée à 2 unités. Conformément aux règles de rotation faible, nous maintenons cette quantité médiane sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,018 tokens
- **Output**: 198 tokens
- **Total**: 1,216 tokens



</details>


<details>
<summary><strong>5. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 08/10/2025, soit 34 jours avant la date actuelle. L'intervalle entre les deux commandes précédentes était de 100 jours. Bien que le cycle soit long, le délai actuel dépasse 30% du cycle moyen et nous entrons dans la fenêtre de risque des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un besoin est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes de 1u. La médiane est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 182 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>6. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 08/10/2025, soit 34 jours avant la date actuelle (11/11/2025). Le cycle moyen observé entre les commandes précédentes est d'environ 50 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (34 jours écoulés > 70% du cycle). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u, 2u et 1u. La médiane de ces commandes est de 1u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 202 tokens
- **Total**: 1,112 tokens



</details>


<details>
<summary><strong>7. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle moyen observé est d'environ 50 jours (50 jours entre juin et août, 50 jours entre août et octobre). La dernière commande date du 08/10/2025, soit il y a 34 jours. Avec un seuil de réapprovisionnement de 30 jours, l'horizon de risque atteint 64 jours après la dernière commande, ce qui dépasse largement le cycle habituel. Le risque de rupture est avéré. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent est d'une régularité absolue avec 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 184 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>8. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 50 jours (50 jours entre juin et août, 50 jours entre août et octobre). La dernière commande date du 08/10/2025, soit il y a 34 jours. Étant donné que nous avons dépassé 68% du cycle moyen et que le seuil de réapprovisionnement est de 30 jours, le risque de rupture est imminent. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes (1, 2, 1) et à la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 179 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>9. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 août 2025, soit 84 jours. Bien que la rotation soit faible, l'historique N-1 montre une activité régulière en fin d'année (octobre, décembre, janvier). Le délai depuis la dernière commande dépasse largement le cycle moyen observé, créant un risque de rupture imminent pour la période de fin d'année. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 oscille entre 1 et 3 unités. La médiane des commandes est de 1,5. En suivant la règle de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 1,028 tokens
- **Output**: 193 tokens
- **Total**: 1,221 tokens



</details>


<details>
<summary><strong>10. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 août 2025, soit 84 jours avant la date actuelle (11 novembre). L'historique montre un cycle de commande moyen d'environ 50 à 70 jours. Le délai depuis la dernière commande dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est critique. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une consommation stable entre 1u et 2u. La médiane des commandes historiques est de 2u. En application du principe de précaution B2B pour éviter la rupture sur un produit à rotation régulière mais lente, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,008 tokens
- **Output**: 180 tokens
- **Total**: 1,188 tokens



</details>


<details>
<summary><strong>11. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation lente et irrégulière avec un cycle moyen d'environ 60 à 80 jours. La dernière commande remontant au 19 août 2025 (soit 84 jours avant la date actuelle), le délai dépasse largement le cycle habituel, ce qui indique un risque de rupture imminent ou une vente manquée. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane des commandes récentes et à la dernière commande enregistrée, afin de maintenir le stock sans risque de surstockage sur ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 151 tokens
- **Total**: 1,121 tokens



</details>


<details>
<summary><strong>12. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation lente mais persistante. La dernière commande remonte au 19 août 2025 (soit 84 jours). Bien que le cycle soit irrégulier, l'historique N-1 indique une commande de 2 unités fin octobre 2024. En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours (Replenishment Threshold Days), un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la valeur la plus basse en cas de doute, afin d'éviter un surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 162 tokens
- **Total**: 1,135 tokens



</details>


<details>
<summary><strong>13. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 août 2025, soit 84 jours. L'historique N-1 montre une commande systématique entre septembre et décembre (2024-09-02 et 2023-12-14). Le cycle moyen historique est d'environ 60-80 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car le cycle habituel est dépassé. ÉTAPE 2 : Estimation quantité. Les commandes récentes oscillent entre 1u et 2u. L'historique N-1 sur la même période montre une préférence pour 2u. En suivant la règle de la médiane et la saisonnalité N-1, une quantité de 2u est préconisée pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 976 tokens
- **Output**: 204 tokens
- **Total**: 1,180 tokens



</details>


<details>
<summary><strong>14. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 19/08/2025, soit 84 jours. L'historique montre un cycle moyen d'environ 50 à 60 jours. Le délai actuel dépasse largement ce cycle, indiquant un risque de rupture imminent ou une consommation du stock de sécurité dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent présente des commandes de 2u et 3u. La médiane historique globale se situe à 2.5u. En application de la règle de prudence B2B (choisir la valeur la plus basse en cas de doute sur une faible rotation), la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 183 tokens
- **Total**: 1,205 tokens



</details>


<details>
<summary><strong>15. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 50 jours (entre juin et août). Depuis la dernière commande du 19 août 2025, 84 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent montre une quantité constante de 1 unité par commande. Conformément à la règle sur les rotations faibles, la quantité maintenue est de 1 unité (médiane de l'historique).

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 158 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>16. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 août 2025, soit plus de 80 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de la règle sur les cycles irréguliers/incertains, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 163 tokens
- **Total**: 1,040 tokens



</details>




### Donnees d'Input LLM (16 produits)


<details>
<summary><strong>1. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 10:15:32: 1u
- 2025-08-19 06:14:45: 4u
- 2025-06-30 08:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 14:05:14: 3u
- 2024-09-02 13:08:13: 2u
- 2024-07-01 07:00:38: 2u
- 2024-06-04 06:36:04: 2u
- 2024-04-25 08:12:11: 2u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 2u
- 2023-12-14 07:58:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [MF0028] ​MF Tarti Carotte Gingembre 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 10:15:32: 1u
- 2025-08-19 06:14:45: 1u
- 2025-06-30 08:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 14:05:14: 2u
- 2024-09-02 13:08:13: 2u
- 2024-07-01 07:00:38: 1u
- 2024-06-04 06:36:04: 1u
- 2024-04-25 08:12:11: 2u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 10:15:32: 2u
- 2025-08-19 06:14:45: 1u
- 2025-06-30 08:46:09: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 14:05:14: 1u
- 2024-09-02 13:08:13: 2u
- 2024-07-01 07:00:38: 2u
- 2024-06-04 06:36:04: 1u
- 2024-04-25 08:12:11: 3u
- 2024-01-23 07:29:32: 3u
- 2023-12-14 07:58:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [MF0047] MF Mayonnaise 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 10:15:32: 2u
- 2025-08-19 06:14:45: 2u
- 2025-06-30 08:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 14:05:14: 2u
- 2024-07-01 07:00:38: 1u
- 2024-06-04 06:36:04: 1u
- 2024-04-25 08:12:11: 2u
- 2024-03-14 13:32:44: 1u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [NUT02] NUTS & BERRIES energy bar Superfood bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 10:15:32: 1u
- 2025-06-30 08:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 10:15:32: 1u
- 2025-08-19 06:14:45: 2u
- 2025-06-30 08:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 10:15:32: 1u
- 2025-08-19 06:14:45: 1u
- 2025-06-30 08:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 10:15:32: 1u
- 2025-08-19 06:14:45: 2u
- 2025-06-30 08:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [MF0056] MF Noix de cajou - Herbes de Provence 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:14:45: 2u
- 2025-06-30 08:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 14:05:14: 1u
- 2024-09-02 13:08:13: 2u
- 2024-07-01 07:00:38: 3u
- 2024-06-04 06:36:04: 1u
- 2024-04-25 08:12:11: 2u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u
- 2025-06-30 08:46:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 14:05:14: 2u
- 2024-09-02 13:08:13: 2u
- 2024-06-04 06:36:04: 2u
- 2024-04-25 08:12:11: 1u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 2u
- 2023-12-14 07:58:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:08:13: 2u
- 2024-07-01 07:00:38: 1u
- 2024-04-25 08:12:11: 2u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [MF0034] MF Tarti Pomme Raifort 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u
- 2025-06-30 08:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 14:05:14: 2u
- 2024-06-04 06:36:04: 2u
- 2024-04-25 08:12:11: 1u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u
- 2025-06-30 08:46:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:08:13: 2u
- 2024-06-04 06:36:04: 2u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 1u
- 2023-12-14 07:58:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:14:45: 2u
- 2025-06-30 08:46:09: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 14:05:14: 3u
- 2024-09-02 13:08:13: 2u
- 2024-07-01 07:00:38: 3u
- 2024-06-04 06:36:04: 3u
- 2024-04-25 08:12:11: 3u
- 2024-03-14 13:32:44: 2u
- 2024-01-23 07:29:32: 2u
- 2023-12-14 07:58:26: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>15. [NUT01] NUTS & BERRIES energy bar Deluxe bio 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u
- 2025-06-30 08:46:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-19 06:14:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (17)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 2 | Predicted 2u but not ordered |
| [MF0013] MF Olives Vertes 500g | 1 | Predicted 1u but not ordered |
| [MF0029] MF Tarti Datte chili 250g | 2 | Predicted 2u but not ordered |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Predicted 1u but not ordered |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Predicted 1u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Predicted 1u but not ordered |
| [WIG01] WIGNAC cidre naturel bio 330ml | 1 | Predicted 1u but not ordered |
| [MF0012] MF Olives Mix 500g | 1 | Predicted 1u but not ordered |
| [MF0014] MF Olives noires 500g | 1 | Predicted 1u but not ordered |
| [MF0024] MF KETCHUP 250g | 2 | Predicted 2u but not ordered |
| [MF0060] MF Passata | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [NOC02] NOCCIOLATA Pâte noisette sans lait bio 250g | 1 | Predicted 1u but not ordered |
| [CB005] CB Apple juice 1l | 1 | Predicted 1u but not ordered |
| [CB006] CB Blackcurrant Apple juice 1l | 2 | Predicted 2u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [NUT05] NUTS & BERRIES Bar choco noir gingembre bio 40g | 1 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 19 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 114 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:08:51.576Z*
