# Rapport Backtest - Client R.E.L.A.I.S.Coop

## Contexte

- **Client** : R.E.L.A.I.S.Coop (ID: 21029)
- **Commande réelle** : S39559
- **Date commande** : 2025-10-08 07:06:25
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 45
- **Tokens**: 41,721 input + 7,536 output = 49,257 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 68.9% | 45 produits prédits, 31 corrects |
| **Rappel** | 86.1% | 36 produits réels, 31 détectés |
| **F1-Score** | 76.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.61 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 27.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 31.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -15.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 12 | Égalité parfaite |
| Partial Match (>0u) | 19 | Avec erreur |

---

## True Positives (31)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV145] LV Sauce Tartare 200 ml  | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV157] LV Ketchup aux tomates 263 ml bio | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [LV131] LV Tartinade Potiron 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV136] LV Tartinade Betterave 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV188] LV Tartinade Aubergine  380g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV138] LV Tartinade Carotte gingembre  380g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV187] LV Tartinade Mangue Curry 380g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [RF003] REFIELD Maïs 500G  | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [MF0052] MF Pois chiches  500g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [fsv08] Banana chips bio vrac 1,6kg | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [fsv18] Mendiant bio vrac 2,8kg | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [MF0051] MF Kidney Beans 500g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV217] LV Tartinade Basilic 380g | 1 | 2 | 1.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (31 produits)


<details>
<summary><strong>1. [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml </strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 40 et 60 jours. La dernière commande remontant au 07/08/2025 (soit 61 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, confirmant un risque de rupture imminent. L'historique N-1 montre également une activité en septembre/octobre. En appliquant la règle de la médiane sur les commandes récentes (1, 2, 3) et en tenant compte de la tendance légère à la baisse, une quantité de 2 unités est préconisée pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 978 tokens
- **Output**: 152 tokens
- **Total**: 1,130 tokens



</details>


<details>
<summary><strong>2. [LV145] LV Sauce Tartare 200 ml </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 85 jours (entre mai et août). Depuis la dernière commande du 07/08/2025, 61 jours se sont écoulés, ce qui représente environ 72% du cycle moyen. Ce dépassement du seuil de 70% indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : L'historique récent montre une stabilité parfaite avec des commandes systématiques de 2 unités. La médiane et la constante étant de 2, cette quantité est retenue pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 155 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>3. [LV157] LV Ketchup aux tomates 263 ml bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 07/08/2025, soit il y a 61 jours. L'historique montre un cycle moyen d'environ 80-90 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (61 + 30 = 91 jours). Par principe de précaution B2B, le besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique est extrêmement stable avec des commandes systématiques de 2 unités (médiane = 2). Conformément à la règle de maintien des rotations faibles, la quantité de 2 unités est reconduite.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 172 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>4. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit 61 jours. L'historique montre un cycle moyen d'environ 60 à 70 jours (ex: mai à août 2025, ou les intervalles de 2024). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. ÉTAPE 2 : Estimation quantité. Les commandes récentes oscillent entre 2u et 4u. En suivant la règle de la médiane et le principe de précaution B2B qui préconise de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur des produits à faible rotation, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 989 tokens
- **Output**: 186 tokens
- **Total**: 1,175 tokens



</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 60 jours. La dernière commande datant du 07/08/2025 (soit 61 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. Bien que les quantités historiques récentes oscillent entre 1u et 4u, la médiane des commandes (incluant l'historique N-1 à la même période qui était de 2u en septembre) suggère une commande de précaution. En suivant la règle de prudence B2B et en privilégiant la valeur médiane basse pour éviter le surstock sur un produit à rotation modérée, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 174 tokens
- **Total**: 1,179 tokens



</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit 61 jours. Le cycle moyen observé est d'environ 45 à 50 jours. Nous avons largement dépassé ce cycle, et l'historique N-1 montre une commande systématique en septembre/octobre. Le risque de rupture dans les 30 jours est critique. ÉTAPE 2 : Estimation quantité. Les commandes récentes oscillent entre 2u et 5u. La médiane des commandes récentes est de 2u. Conformément à la règle de précaution B2B privilégiant la valeur basse en cas de doute sur une rotation irrégulière, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,006 tokens
- **Output**: 170 tokens
- **Total**: 1,176 tokens



</details>


<details>
<summary><strong>7. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit 61 jours. Le cycle moyen historique est d'environ 45 à 55 jours. Nous avons largement dépassé ce cycle et le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 3u, 1u, et 3u. La médiane des commandes récentes est de 3u. L'historique N-1 confirme des volumes stables entre 2u et 4u. Conformément aux règles, nous retenons la médiane de 3u pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 189 tokens
- **Total**: 1,196 tokens



</details>


<details>
<summary><strong>8. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 07/08/2025, soit 61 jours. L'historique montre un cycle moyen d'environ 45 à 60 jours (ex: 23/05/24 au 03/07/24 = 41j ; 23/06/25 au 07/08/25 = 45j). Nous avons largement dépassé le cycle habituel et le seuil de 70% du cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes sont de 2u et 3u. La médiane est de 2.5u. En application de la règle de précaution B2B privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur des produits à faible rotation, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 236 tokens
- **Total**: 1,171 tokens



</details>


<details>
<summary><strong>9. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 07/08/2025, soit il y a 61 jours. Le cycle moyen observé est d'environ 45 à 50 jours. Nous avons largement dépassé ce cycle et le seuil de 70% du cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 2u, 3u, 2u. La médiane des commandes récentes est de 2u. Conformément à la règle de précaution B2B et au maintien des rotations faibles, la quantité de 2u est retenue pour éviter le surstock tout en couvrant le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 190 tokens
- **Total**: 1,163 tokens



</details>


<details>
<summary><strong>10. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 40 à 45 jours (mai-juin-août). La dernière commande datant du 07/08/2025, soit il y a 61 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent. Concernant la quantité, les trois dernières commandes sont strictement identiques (3u). Conformément à la règle de maintien de la quantité pour une rotation régulière, la médiane de 3u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,004 tokens
- **Output**: 143 tokens
- **Total**: 1,147 tokens



</details>


<details>
<summary><strong>11. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit 61 jours. Le cycle moyen observé est d'environ 45 à 60 jours. Étant donné que nous avons dépassé ce délai et que le seuil de réapprovisionnement est de 30 jours, le risque de rupture est imminent. Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite à 2 unités (août et juin 2025). L'historique N-1 confirme également une médiane de 2 unités. En suivant la règle de la médiane et de la stabilité, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 179 tokens
- **Total**: 1,134 tokens



</details>


<details>
<summary><strong>12. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit 61 jours. Le cycle précédent était de 45 jours. Le délai actuel dépasse largement le cycle moyen constaté, indiquant un risque de rupture imminent ou un besoin de réapprovisionnement immédiat selon le principe de précaution B2B. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 2u et 4u. L'historique N-1 à la même période montre 2u et 3u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à rotation modérée, la quantité de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 179 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>13. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre des intervalles variant entre 40 et 45 jours. La dernière commande datant du 07/08/2025 (il y a 61 jours), le cycle habituel est largement dépassé, ce qui indique un risque de rupture imminent ou une consommation en cours non couverte. En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes (2, 4, 2) et à la valeur la plus basse pour éviter le surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 147 tokens
- **Total**: 1,099 tokens



</details>


<details>
<summary><strong>14. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 07/08/2025, soit 61 jours avant la date actuelle. Le cycle moyen constaté est d'environ 45 à 60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. En application du principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes de 1u et 3u, tandis que l'historique N-1 est très stable à 2u. La médiane de l'ensemble des commandes se situe à 2u. Conformément à la règle de ne pas surestimer et de privilégier la médiane stable, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,005 tokens
- **Output**: 192 tokens
- **Total**: 1,197 tokens



</details>


<details>
<summary><strong>15. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit 61 jours. Le cycle précédent était de 45 jours. Nous avons largement dépassé le cycle moyen constaté, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement selon le principe de précaution B2B. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite à 2 unités (juin et août 2025). Bien que les volumes de l'année précédente fussent légèrement supérieurs (3-4u), la tendance actuelle est à 2 unités. En suivant la règle de la médiane et du choix de la valeur la plus basse en cas de doute, la quantité retenue est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 180 tokens
- **Total**: 1,118 tokens



</details>


<details>
<summary><strong>16. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 60 jours. La dernière commande remontant au 07/08/2025 (soit 61 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, confirmant un risque de rupture imminent. Pour la quantité, l'historique récent présente des volumes de 2, 3 et 4 unités. En appliquant la règle de la médiane et le principe de prudence (choix de la valeur basse en cas de doute sur la rotation), une commande de 3 unités est préconisée pour couvrir les besoins sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 156 tokens
- **Total**: 1,146 tokens



</details>


<details>
<summary><strong>17. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 3u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 07/08/2025, soit 61 jours. Le cycle moyen observé est d'environ 40 à 50 jours. Nous avons largement dépassé ce cycle et le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). De plus, l'historique N-1 montre une commande à la mi-septembre, confirmant un besoin actuel. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités récentes sont de 2, 4 et 3 unités. La médiane de l'historique récent est de 3 unités. Conformément à la règle de précaution et de maintien de la rotation régulière, la quantité de 3 est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 185 tokens
- **Total**: 1,156 tokens



</details>


<details>
<summary><strong>18. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit 61 jours. L'historique N-1 montre une commande le 18/09/2024, indiquant un besoin cyclique à cette période de l'année. Le délai depuis la dernière commande dépasse largement le cycle habituel constaté en 2024 (environ 45-60 jours). Il existe un risque de rupture imminent sous 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité à 2 unités. Bien que des volumes plus élevés (3-4u) aient été observés début 2024, la tendance actuelle et la médiane des commandes les plus récentes convergent vers 2 unités. Par précaution et respect de la rotation faible, on maintient cette quantité.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 201 tokens
- **Total**: 1,157 tokens



</details>


<details>
<summary><strong>19. [LV188] LV Tartinade Aubergine  380g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 07/08/2025, soit 61 jours. Le cycle moyen récent est d'environ 42 jours. Nous avons largement dépassé ce cycle, et l'historique N-1 montre une commande le 18/09/2024. Le risque de rupture est imminent ou déjà avéré dans l'horizon des 30 jours. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent est extrêmement stable avec 3 commandes consécutives de 2 unités. Conformément à la règle de maintien de la quantité pour une rotation régulière et au principe de privilégier la médiane, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 972 tokens
- **Output**: 180 tokens
- **Total**: 1,152 tokens



</details>


<details>
<summary><strong>20. [LV138] LV Tartinade Carotte gingembre  380g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/08/2025, soit 61 jours. Le cycle historique est irrégulier (environ 45 à 60 jours). Étant donné que nous sommes à 61 jours et que le seuil de réapprovisionnement est de 30 jours, le risque de rupture est imminent ou déjà présent. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 3u. L'historique N-1 à la même période (septembre) était de 2u. La médiane des commandes récentes (1, 3) est de 2. En respectant la règle de la médiane et la cohérence avec la saisonnalité N-1, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 207 tokens
- **Total**: 1,144 tokens



</details>


<details>
<summary><strong>21. [LV187] LV Tartinade Mangue Curry 380g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 45 à 60 jours. La dernière commande remontant au 07/08/2025 (soit 61 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. Bien que l'historique récent soit irrégulier (1u et 3u), l'historique N-1 sur la même période montre une activité constante. En appliquant la règle de la médiane sur l'ensemble des données (1, 2, 3) et en privilégiant la prudence B2B, une quantité de 2 unités est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 172 tokens
- **Total**: 1,125 tokens



</details>


<details>
<summary><strong>22. [RF003] REFIELD Maïs 500G </strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : La dernière commande date du 07/08/2025, soit il y a 61 jours. L'intervalle précédent était de 85 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons un horizon de 91 jours sans commande, ce qui dépasse le cycle observé. Le risque de rupture est jugé élevé selon le principe de précaution B2B. ÉTAPE 2 : L'historique récent présente des quantités de 2u et 3u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 162 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>23. [MF0052] MF Pois chiches  500g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 07/08/2025, soit 61 jours. L'intervalle précédent était de 85 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons l'horizon critique (61 + 30 = 91 jours), ce qui dépasse le cycle moyen observé. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane est de 1,5u. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute ou de faible rotation), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 185 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>24. [fsv08] Banana chips bio vrac 1,6kg</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 07/08/2025, soit 61 jours. L'intervalle précédent était de 85 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 91 jours d'ici la fin de la période de couverture, ce qui dépasse le cycle moyen observé. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. En suivant la règle de la médiane et la consigne de choisir la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité de 1u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 182 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>25. [fsv18] Mendiant bio vrac 2,8kg</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 07/08/2025, soit il y a 61 jours. L'intervalle précédent était de 45 jours. Le délai actuel dépasse largement le cycle moyen constaté et le seuil de réapprovisionnement de 30 jours est atteint. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). La médiane des quantités est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 156 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>26. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'absence de commande récente et l'approche d'un nouveau cycle potentiel après une longue période d'inactivité justifient une commande de précaution pour éviter une rupture de stock prolongée (principe de précaution B2B). ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles, on maintient la quantité historique de 2 unités sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 152 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>27. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit plus de 100 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 158 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>28. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit plus de 100 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle précédent (environ 40 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une régularité stricte de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane historique.

**Tokens utilises pour cette prediction:**
- **Input**: 896 tokens
- **Output**: 162 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>29. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 106 jours. Bien que le cycle soit difficile à déterminer en l'absence d'historique récurrent, le principe de précaution B2B s'applique face à un délai aussi long depuis le dernier mouvement. Afin d'éviter une rupture de stock prolongée sur cette référence BIO, un réapprovisionnement est préconisé. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane du volume historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 130 tokens
- **Total**: 1,003 tokens



</details>


<details>
<summary><strong>30. [MF0051] MF Kidney Beans 500g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 mai 2025, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée une incertitude sur le niveau de stock actuel. En application du principe de précaution B2B (détecter un besoin incertain plutôt qu'une rupture), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles et le maintien de la médiane historique, la quantité de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 168 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>31. [LV217] LV Tartinade Basilic 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 mai 2025, soit plus de 140 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit de ce type. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 168 tokens
- **Total**: 1,041 tokens



</details>




### Donnees d'Input LLM (31 produits)


<details>
<summary><strong>1. [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 1u
- 2025-06-23 06:27:18: 2u
- 2025-05-14 12:05:24: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-18 09:38:38: 2u
- 2024-05-23 14:28:03: 3u
- 2024-03-29 14:59:50: 3u
- 2023-12-05 07:54:29: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [LV145] LV Sauce Tartare 200 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 2u
- 2025-05-14 12:05:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV157] LV Ketchup aux tomates 263 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 2u
- 2025-05-14 12:05:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-23 14:28:03: 2u
- 2023-12-05 07:54:29: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 2u
- 2025-05-14 12:05:24: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-18 09:38:38: 2u
- 2024-07-03 12:30:02: 4u
- 2024-05-23 14:28:03: 3u
- 2024-03-29 14:59:50: 3u
- 2024-02-02 08:15:26: 4u
- 2023-12-05 07:54:29: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 1u
- 2025-06-23 06:27:18: 4u
- 2025-05-14 12:05:24: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-18 09:38:38: 2u
- 2024-07-03 12:30:02: 4u
- 2024-05-23 14:28:03: 2u
- 2024-03-29 14:59:50: 4u
- 2024-02-02 08:15:26: 4u
- 2023-12-05 07:54:29: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 2u
- 2025-06-23 06:27:18: 5u
- 2025-05-14 12:05:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-18 09:38:38: 2u
- 2024-07-03 12:30:02: 3u
- 2024-05-23 14:28:03: 4u
- 2024-03-29 14:59:50: 4u
- 2024-02-02 08:15:26: 5u
- 2023-12-05 07:54:29: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 3u
- 2025-06-23 06:27:18: 1u
- 2025-05-14 12:05:24: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-18 09:38:38: 2u
- 2024-07-03 12:30:02: 4u
- 2024-05-23 14:28:03: 3u
- 2024-03-29 14:59:50: 4u
- 2024-02-02 08:15:26: 2u
- 2023-12-05 07:54:29: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 2u
- 2025-06-23 06:27:18: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-03 12:30:02: 2u
- 2024-05-23 14:28:03: 3u
- 2024-03-29 14:59:50: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 2u
- 2025-06-23 06:27:18: 3u
- 2025-05-14 12:05:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-23 14:28:03: 2u
- 2024-03-29 14:59:50: 4u
- 2024-02-02 08:15:26: 3u
- 2023-12-05 07:54:29: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>10. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 3u
- 2025-06-23 06:27:18: 3u
- 2025-05-14 12:05:24: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-18 09:38:38: 2u
- 2024-07-03 12:30:02: 3u
- 2024-05-23 14:28:03: 2u
- 2024-03-29 14:59:50: 4u
- 2024-02-02 08:15:26: 4u
- 2023-12-05 07:54:29: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>11. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 2u
- 2025-06-23 06:27:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-03 12:30:02: 2u
- 2024-03-29 14:59:50: 3u
- 2024-02-02 08:15:26: 2u
- 2023-12-05 07:54:29: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>12. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 2u
- 2025-06-23 06:27:18: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-03 12:30:02: 2u
- 2024-05-23 14:28:03: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>13. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 2u
- 2025-06-23 06:27:18: 4u
- 2025-05-14 12:05:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-03 12:30:02: 4u
- 2024-05-23 14:28:03: 1u
- 2024-03-29 14:59:50: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>14. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 1u
- 2025-06-23 06:27:18: 3u
- 2025-05-14 12:05:24: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-18 09:38:38: 2u
- 2024-07-03 12:30:02: 2u
- 2024-05-23 14:28:03: 2u
- 2024-03-29 14:59:50: 3u
- 2024-02-02 08:15:26: 2u
- 2023-12-05 07:54:29: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>15. [LV137] LV Tartinade Lentilles Curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 2u
- 2025-06-23 06:27:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-29 14:59:50: 3u
- 2024-02-02 08:15:26: 4u
- 2023-12-05 07:54:29: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>16. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 3u
- 2025-06-23 06:27:18: 4u
- 2025-05-14 12:05:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-03 12:30:02: 4u
- 2024-05-23 14:28:03: 3u
- 2024-03-29 14:59:50: 4u
- 2024-02-02 08:15:26: 5u
- 2023-12-05 07:54:29: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>17. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 2u
- 2025-06-23 06:27:18: 4u
- 2025-05-14 12:05:24: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-18 09:38:38: 2u
- 2024-07-03 12:30:02: 4u
- 2024-05-23 14:28:03: 4u
- 2024-03-29 14:59:50: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>18. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 2u
- 2025-05-14 12:05:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-18 09:38:38: 2u
- 2024-07-03 12:30:02: 2u
- 2024-05-23 14:28:03: 4u
- 2024-03-29 14:59:50: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>19. [LV188] LV Tartinade Aubergine  380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 2u
- 2025-06-23 06:27:18: 2u
- 2025-05-14 12:05:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-18 09:38:38: 2u
- 2024-07-03 12:30:02: 3u
- 2024-02-02 08:15:26: 4u
- 2023-12-05 07:54:29: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [LV138] LV Tartinade Carotte gingembre  380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 1u
- 2025-06-23 06:27:18: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-18 09:38:38: 2u
- 2024-05-23 14:28:03: 1u
- 2024-03-29 14:59:50: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>21. [LV187] LV Tartinade Mangue Curry 380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 1u
- 2025-06-23 06:27:18: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-03 12:30:02: 2u
- 2024-05-23 14:28:03: 1u
- 2024-03-29 14:59:50: 3u
- 2023-12-05 07:54:29: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>22. [RF003] REFIELD Maïs 500G </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 3u
- 2025-05-14 12:05:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>23. [MF0052] MF Pois chiches  500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 1u
- 2025-05-14 12:05:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>24. [fsv08] Banana chips bio vrac 1,6kg</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 1u
- 2025-05-14 12:05:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>25. [fsv18] Mendiant bio vrac 2,8kg</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-07 13:35:18: 1u
- 2025-06-23 06:27:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>26. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:27:18: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>27. [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:27:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>28. [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:27:18: 1u
- 2025-05-14 12:05:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>29. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:27:18: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>30. [MF0051] MF Kidney Beans 500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-14 12:05:24: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>31. [LV217] LV Tartinade Basilic 380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-14 12:05:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (14)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV146] LV Sauce Aïoli 200 ml | 2 | Predicted 2u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Predicted 1u but not ordered |
| [LV149] LV Sauce Aioli Pesto 200ml | 2 | Predicted 2u but not ordered |
| [LV156] LV Sauce barbecue 263 ml bio | 2 | Predicted 2u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Predicted 1u but not ordered |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | Predicted 1u but not ordered |
| [LV189] LV Tartinade Houmous Type 380g | 1 | Predicted 1u but not ordered |
| [KOKO01] KOKO Kombucha original 330ml | 1 | Predicted 1u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |
| [fsv01] Cerneaux de noix nature bio vrac 1,8kg | 1 | Predicted 1u but not ordered |
| [fsv05] Noix de pecan nature bio vrac 2,2kg  | 1 | Predicted 1u but not ordered |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 1 | Predicted 1u but not ordered |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 2 | Predicted 2u but not ordered |
| [fsv17] Mélange de noix bio vrac 2,75kg | 1 | Predicted 1u but not ordered |


---

## False Negatives (5)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Never ordered in previous analysis window (no history) |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Never ordered in previous analysis window (no history) |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | Never ordered in previous analysis window (no history) |
| [VID0009] Consigne casier | 5 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 30 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:16:42.680Z*
