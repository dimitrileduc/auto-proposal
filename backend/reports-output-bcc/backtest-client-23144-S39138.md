# Rapport Backtest - Client Ferme de Gérard Sart

## Contexte

- **Client** : Ferme de Gérard Sart (ID: 23144)
- **Commande réelle** : S39138
- **Date commande** : 2025-09-11 11:06:03
- **Date cutoff système** : 2025-09-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 21
- **Tokens**: 19,266 input + 3,401 output = 22,667 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.9% | 21 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 76.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.77 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 37.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -18.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

---

## True Positives (13)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (13 produits)


<details>
<summary><strong>1. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
Le cycle de commande récent montre un intervalle d'environ 44 jours entre les deux dernières commandes. La dernière commande datant du 09 juillet 2025 (soit 63 jours avant la date actuelle), le délai dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture ou un besoin imminent. Conformément à la règle de la médiane sur l'historique récent (2u et 2u), la quantité préconisée est de 2 unités pour maintenir le stock sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 959 tokens
- **Output**: 132 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 45 à 60 jours. La dernière commande remontant au 9 juillet 2025 (soit plus de 60 jours), le risque de rupture est imminent ou déjà avéré dans l'horizon des 30 jours (Replenishment Threshold Days). Bien que l'historique récent soit limité, la demande est stable avec une médiane de 3 unités constatée sur la majorité des commandes passées (2024 et 2025). En application du principe de précaution B2B et de la règle de la médiane, une commande de 3 unités est préconisée pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 161 tokens
- **Total**: 1,114 tokens



</details>


<details>
<summary><strong>3. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle moyen observé entre les deux dernières commandes est de 44 jours. La dernière commande remonte au 09/07/2025, soit 63 jours avant la date actuelle. Le délai écoulé dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin imminent. ÉTAPE 2 : L'historique récent montre une consommation constante de 2 unités par commande. En appliquant la règle de la médiane sur ces données stables, la quantité préconisée est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 140 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 09/07/2025, soit plus de 60 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles habituels observés l'année précédente (environ 2 à 3 mois entre les petites commandes). En application du principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais régulière, un réapprovisionnement est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane des commandes récentes et historiques (hors pic exceptionnel de 24u en décembre), afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 144 tokens
- **Total**: 1,080 tokens



</details>


<details>
<summary><strong>5. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 09/07/2025, soit 63 jours. L'historique montre un cycle moyen d'environ 45 à 60 jours entre les commandes. Nous avons largement dépassé ce délai, et le seuil de réapprovisionnement de 30 jours place le produit en risque de rupture imminent. ÉTAPE 2 : Estimation quantité. L'historique récent présente des volumes de 1u et 3u. La médiane est de 2u, mais conformément à la règle de précaution sur les rotations faibles et la consigne de choisir la valeur la plus basse en cas de doute pour éviter le surstock, une quantité de 1u est préconisée pour maintenir la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 181 tokens
- **Total**: 1,118 tokens



</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 09/07/2025, soit 63 jours avant la date actuelle. L'intervalle précédent était de 44 jours. Le cycle moyen est estimé à environ 53 jours. Le délai depuis la dernière commande (63j) dépasse largement 70% du cycle moyen, indiquant un risque de rupture imminent ou déjà effectif dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 3u. La médiane de ces commandes est de 2u. Conformément à la règle de précaution B2B et à l'utilisation de la médiane pour lisser les variations, une quantité de 2u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 185 tokens
- **Total**: 1,103 tokens



</details>


<details>
<summary><strong>7. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
Le cycle de commande moyen est d'environ 50 à 60 jours. La dernière commande datant du 9 juillet (soit 63 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement atteint, indiquant un risque de rupture imminent. Bien que les quantités récentes soient de 1u et 3u, l'historique N-1 montre également des besoins à cette période (3u en juillet). En appliquant la règle de la médiane sur l'historique récent (médiane entre 1 et 3 = 2) et par principe de précaution B2B sans surestimer le stock, une commande de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 161 tokens
- **Total**: 1,115 tokens



</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 09/07/2025, soit 63 jours. Le cycle entre les deux dernières commandes était de 44 jours. Nous avons largement dépassé ce cycle moyen, ce qui indique un besoin imminent ou une rupture probable. Bien que l'historique N-1 montre des volumes de 3u, la tendance récente sur 2025 est stabilisée à 2u. En application de la règle de précaution B2B et de l'utilisation de la médiane des commandes récentes, une quantité de 2 unités est préconisée pour couvrir le risque de rupture sur l'horizon des 30 prochains jours.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 150 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 mai 2025, soit plus de 100 jours. Bien que la rotation soit lente, l'historique N-1 montre une commande en juillet et une autre en octobre. Nous entrons dans une période où un besoin s'est manifesté l'année dernière (octobre). Par principe de précaution B2B et pour éviter une rupture sur un cycle long, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes de 2, 3 et 5 unités. La médiane des commandes est de 3 unités. Conformément à la règle de privilégier la médiane et de ne pas surestimer, la quantité retenue est de 3.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 189 tokens
- **Total**: 1,111 tokens



</details>


<details>
<summary><strong>10. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 mai 2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'historique montre des cycles espacés de 3 à 5 mois. Par principe de précaution B2B et pour éviter une rupture prolongée sur un produit bio à faible rotation, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une récurrence stable de 2 unités (médiane). Conformément aux règles sur les rotations faibles, on maintient la quantité habituelle de 2 unités sans chercher à augmenter le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 942 tokens
- **Output**: 162 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>11. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION) : La dernière commande remonte au 26 mai 2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport à l'historique (commande en octobre N-1) crée un doute sur le niveau de stock actuel. En application du principe de précaution B2B, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 (QUANTITÉ) : L'historique récent montre une commande de 2u et l'historique N-1 une commande de 3u. Conformément à la règle de privilégier la quantité la plus basse en cas de doute sur une rotation faible, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 181 tokens
- **Total**: 1,068 tokens



</details>


<details>
<summary><strong>12. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 26 mai 2025, soit plus de 100 jours sans activité. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente (environ 75 jours entre avril et juillet 2024). Un risque de rupture est identifié pour couvrir les 30 prochains jours. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la dernière commande effectuée.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 146 tokens
- **Total**: 1,050 tokens



</details>


<details>
<summary><strong>13. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande récente n'est enregistrée pour 2025. L'historique N-1 montre une commande le 11/07/2024, suivie d'un silence prolongé. En l'absence de données récentes et face à un cycle irrégulier (environ 3 à 4 mois entre les commandes l'an dernier), le principe de précaution B2B s'applique. Le délai depuis la dernière commande théorique dépasse largement le cycle habituel, créant un doute sur le stock actuel. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre des volumes de 2u et 3u. La médiane et la règle de prudence (choisir la valeur la plus basse en cas de doute) imposent une quantité de 2 unités pour couvrir le besoin sans risquer un surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 210 tokens
- **Total**: 1,133 tokens



</details>




### Donnees d'Input LLM (13 produits)


<details>
<summary><strong>1. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 13:58:34: 2u
- 2025-05-26 11:23:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-11 06:49:49: 3u
- 2024-04-25 08:35:58: 4u
- 2023-12-19 08:22:13: 6u
- 2023-10-03 12:18:48: 6u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 13:58:34: 4u
- 2025-05-26 11:23:04: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-11 06:49:49: 3u
- 2024-04-25 08:35:58: 3u
- 2023-12-19 08:22:13: 3u
- 2023-10-03 12:18:48: 4u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 13:58:34: 2u
- 2025-05-26 11:23:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 13:58:34: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-11 06:49:49: 3u
- 2024-04-25 08:35:58: 3u
- 2023-12-19 08:22:13: 24u
- 2023-10-03 12:18:48: 5u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 13:58:34: 1u
- 2025-05-26 11:23:04: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-11 06:49:49: 3u
- 2024-04-25 08:35:58: 2u
- 2023-10-03 12:18:48: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 13:58:34: 1u
- 2025-05-26 11:23:04: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-25 08:35:58: 2u
- 2023-10-03 12:18:48: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>7. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 13:58:34: 1u
- 2025-05-26 11:23:04: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-11 06:49:49: 3u
- 2024-04-25 08:35:58: 1u
- 2023-12-19 08:22:13: 4u
- 2023-10-03 12:18:48: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-09 13:58:34: 2u
- 2025-05-26 11:23:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-11 06:49:49: 3u
- 2024-04-25 08:35:58: 3u
- 2023-10-03 12:18:48: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:23:04: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-11 06:49:49: 3u
- 2024-04-25 08:35:58: 2u
- 2023-10-03 12:18:48: 5u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>10. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:23:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-11 06:49:49: 2u
- 2024-04-25 08:35:58: 2u
- 2023-12-19 08:22:13: 5u
- 2023-10-03 12:18:48: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:23:04: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2023-10-03 12:18:48: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 11:23:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-11 06:49:49: 2u
- 2024-04-25 08:35:58: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-11 06:49:49: 3u
- 2024-04-25 08:35:58: 2u
- 2023-12-19 08:22:13: 2u
- 2023-10-03 12:18:48: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>




---

## False Positives (8)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV342] LV Organic Broccoli Spread 190 g | 2 | Predicted 2u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 2 | Predicted 2u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Predicted 2u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 2 | Predicted 2u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Predicted 2u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Predicted 2u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 2 | Predicted 2u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:57.781Z*
