# Rapport Backtest - Client Vent de Terre Scrl

## Contexte

- **Client** : Vent de Terre Scrl (ID: 23309)
- **Commande réelle** : S39965
- **Date commande** : 2025-10-28 13:41:14
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 32
- **Tokens**: 29,251 input + 4,958 output = 34,209 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.7% | 28 produits prédits, 17 corrects |
| **Rappel** | 100.0% | 17 produits réels, 17 détectés |
| **F1-Score** | 75.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.53 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 39.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 43.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 21.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

---

## True Positives (17)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (17 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse montre un cycle de commande long (environ 48 jours entre les deux dernières commandes). La dernière commande remonte au 4 août, soit 84 jours avant la date actuelle. Ce délai dépasse largement le cycle moyen observé, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement par précaution (principe de détection du besoin en cas de doute). Concernant la quantité, l'historique récent présente des volumes très faibles (1u et 2u). Conformément aux règles de gestion des rotations faibles, la quantité retenue est la plus basse de l'historique récent (médiane/minimum) pour éviter le surstockage, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 156 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 48 jours entre les deux dernières commandes. La dernière commande datant du 04/08/2025, soit il y a 84 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B face à un cycle irrégulier, un besoin est détecté pour éviter la rupture. La quantité est fixée à 1 unité, correspondant à la valeur la plus basse de l'historique récent (médiane entre 1u et 2u, choix du plus bas en cas de doute).

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 152 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle d'environ 48 jours entre les deux dernières commandes. La dernière commande datant du 4 août (soit plus de 80 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin de renouvellement de stock. En suivant la règle de précaution B2B et en privilégiant la valeur basse de la médiane historique pour ce produit à faible rotation, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 128 tokens
- **Total**: 1,020 tokens



</details>


<details>
<summary><strong>4. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le produit présente une rotation très faible avec une seule commande enregistrée il y a 84 jours (04/08/2025). Bien que le cycle soit difficile à établir, le principe de précaution B2B s'applique car le délai depuis la dernière commande est important. Un risque de rupture est possible dans l'horizon des 30 jours. ÉTAPE 2 : En l'absence d'historique multiple, la règle pour les rotations très faibles (1-2u) impose de maintenir la quantité minimale de 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 142 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>5. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et sporadique (environ une commande tous les 2 à 10 mois). La dernière commande remonte au 04/08/2025, soit 84 jours. Bien que le cycle soit irrégulier, le délai écoulé depuis la dernière commande est important. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture sur un horizon de 30 jours), un réapprovisionnement est préconisé. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique (toutes les commandes passées sont de 1u).

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 153 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>6. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle historique variant entre 45 et 70 jours. La dernière commande datant du 04 août 2025 (soit plus de 80 jours), le seuil de réapprovisionnement de 30 jours est largement dépassé, indiquant un risque de rupture imminent ou une commande déjà due. En se basant sur l'historique N-1 à la même période (octobre 2024 : 3u) et sur la médiane des commandes passées, une quantité de 3 unités est préconisée pour couvrir le besoin actuel tout en respectant la prudence B2B.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 149 tokens
- **Total**: 1,119 tokens



</details>


<details>
<summary><strong>7. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit 84 jours. L'historique montre un cycle moyen d'environ 60 à 80 jours. À la date du 27/10/2025, nous sommes dans la fenêtre critique de réapprovisionnement, d'autant plus qu'une commande avait été passée à la même période l'année précédente (11/10/2024). Le risque de rupture sous 30 jours est élevé. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité entre 1u et 2u. La médiane des commandes est de 2u. Conformément au principe de précaution B2B et à la stabilité de la rotation, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 203 tokens
- **Total**: 1,174 tokens



</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 2 à 3 mois. La dernière commande datant du 4 août 2025 (soit plus de 80 jours), le délai dépasse largement le cycle habituel, ce qui indique un risque de rupture imminent ou un besoin de stock pour la période actuelle. En se basant sur l'historique de l'année précédente à la même période (octobre 2024 : 3u) et sur la médiane des commandes récentes et passées qui se stabilise à 2 unités, une quantité de 2 est préconisée pour couvrir les besoins des 30 prochains jours sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 157 tokens
- **Total**: 1,127 tokens



</details>


<details>
<summary><strong>9. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une récurrence environ tous les 2 à 3 mois. La dernière commande datant du 4 août 2025 (soit plus de 80 jours), le risque de rupture est imminent dans l'horizon des 30 jours. L'historique N-1 confirme également une activité sur la période d'octobre (3u en 2024). En suivant la règle de la médiane des commandes récentes (médiane entre 1u et 2u) et en tenant compte du pic saisonnier de l'an dernier, une quantité de 2 unités est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 154 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>10. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation lente mais régulière. La dernière commande remonte au 04/08/2025, soit 84 jours. Bien que le cycle soit irrégulier, l'historique N-1 montre une commande à la même période (11/10/2024). En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la dernière commande de la même période l'an dernier, respectant la règle de ne pas surestimer les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 160 tokens
- **Total**: 1,112 tokens



</details>


<details>
<summary><strong>11. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande irrégulier mais persistant, avec une dernière commande enregistrée il y a plus de 80 jours (04/08/2025). En application du principe de précaution B2B, le délai écoulé dépasse largement le cycle moyen estimé, créant un risque de rupture imminent pour la période actuelle. L'historique N-1 confirme une activité à cette même période (commande le 11/10/2024). La quantité retenue est de 2 unités, correspondant à la médiane haute des commandes historiques (alternance entre 1u et 2u) pour couvrir le besoin sur l'horizon des 30 jours de seuil de réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 170 tokens
- **Total**: 1,141 tokens



</details>


<details>
<summary><strong>12. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 60 à 70 jours. La dernière commande datant du 4 août 2025 (soit plus de 80 jours), le seuil de réapprovisionnement est largement dépassé, confirmant un besoin immédiat pour éviter la rupture. En suivant la règle de la médiane sur l'historique récent et N-1 (majorité de commandes à 2u), la quantité retenue est de 2 unités, privilégiant la valeur la plus basse et stable pour ce produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 134 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>13. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande irrégulier mais une récurrence marquée sur la période automnale (octobre/décembre). La dernière commande remonte à 84 jours, ce qui dépasse largement les intervalles observés en 2024 (environ 45-60 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue correspond à la médiane des commandes historiques (2u), les commandes de 1u étant traitées comme des points bas.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 142 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>14. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 60 à 80 jours. La dernière commande datant du 4 août 2025 (soit plus de 80 jours), le risque de rupture est imminent dans l'horizon des 30 jours. Bien que les commandes récentes soient faibles (1u et 2u), l'historique N-1 sur la même période (octobre/décembre) montre une demande constante de 2u à 3u. En appliquant la règle de la médiane sur l'historique global et en privilégiant la prudence face à une rotation irrégulière, une quantité de 2 unités est préconisée pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 969 tokens
- **Output**: 165 tokens
- **Total**: 1,134 tokens



</details>


<details>
<summary><strong>15. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 04/08/2025, soit 84 jours. L'historique montre une rotation lente mais régulière avec des intervalles variant entre 2 et 4 mois. En 2024, une commande a eu lieu précisément en octobre (11/10). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent pour couvrir la période de fin d'année. En suivant le principe de précaution B2B et la règle de la médiane sur un produit à faible rotation (1-2u), une quantité de 1 unité est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 154 tokens
- **Total**: 1,109 tokens



</details>


<details>
<summary><strong>16. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit 84 jours. Bien que l'historique soit irrégulier, une commande a eu lieu à la même période l'année dernière (11/10/2024). Le délai écoulé dépasse largement les cycles observés, créant un risque de rupture imminent sous 30 jours. Par principe de précaution B2B, le besoin est validé. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 2u. L'historique N-1 oscille entre 1u et 3u. La médiane des commandes (1, 1, 2, 3) se situe entre 1 et 2. En suivant la règle de maintien de la quantité récente la plus stable et le principe de ne pas surestimer, une quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 215 tokens
- **Total**: 1,135 tokens



</details>


<details>
<summary><strong>17. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique N-1 montre une commande de 2 unités le 11 octobre 2024. À la date actuelle (27 octobre 2025), nous avons dépassé la date anniversaire de cette commande sans réapprovisionnement récent. En l'absence de données récentes, le principe de précaution B2B s'applique pour éviter une rupture sur un produit à rotation lente mais saisonnière. ÉTAPE 2 : ESTIMATION QUANTITÉ. En se basant sur l'historique N-1 à la même période, la quantité commandée était de 2 unités. La médiane des commandes passées oscille entre 1 et 2. Conformément à la règle de maintien des faibles rotations, nous retenons la valeur de 2 unités pour couvrir le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 190 tokens
- **Total**: 1,096 tokens



</details>




### Donnees d'Input LLM (17 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 2u
- 2025-06-17 08:15:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 2u
- 2025-06-17 08:15:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 2u
- 2025-06-17 08:15:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV155] LV Vinaigrette Caesar 250 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:25:00: 1u
- 2023-12-07 09:40:05: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 2u
- 2025-06-17 08:15:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:25:00: 3u
- 2024-08-27 07:58:57: 3u
- 2024-06-20 11:19:54: 2u
- 2024-02-27 10:12:10: 1u
- 2023-12-07 09:40:05: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 2u
- 2025-06-17 08:15:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:25:00: 2u
- 2024-08-27 07:58:57: 1u
- 2024-06-20 11:19:54: 2u
- 2024-02-27 10:12:10: 1u
- 2023-12-07 09:40:05: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 2u
- 2025-06-17 08:15:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:25:00: 3u
- 2024-08-27 07:58:57: 2u
- 2024-06-20 11:19:54: 2u
- 2024-02-27 10:12:10: 2u
- 2023-12-07 09:40:05: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 2u
- 2025-06-17 08:15:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:25:00: 3u
- 2024-08-27 07:58:57: 1u
- 2024-06-20 11:19:54: 1u
- 2023-12-07 09:40:05: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 1u
- 2025-06-17 08:15:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:25:00: 1u
- 2024-08-27 07:58:57: 2u
- 2024-02-27 10:12:10: 2u
- 2023-12-07 09:40:05: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 2u
- 2025-06-17 08:15:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:25:00: 2u
- 2024-08-27 07:58:57: 1u
- 2024-06-20 11:19:54: 2u
- 2024-02-27 10:12:10: 1u
- 2023-12-07 09:40:05: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 2u
- 2025-06-17 08:15:40: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:25:00: 2u
- 2024-08-27 07:58:57: 2u
- 2024-06-20 11:19:54: 2u
- 2024-02-27 10:12:10: 3u
- 2023-12-07 09:40:05: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>13. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 2u
- 2025-06-17 08:15:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:25:00: 2u
- 2024-08-27 07:58:57: 2u
- 2024-06-20 11:19:54: 1u
- 2023-12-07 09:40:05: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 1u
- 2025-06-17 08:15:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:25:00: 3u
- 2024-08-27 07:58:57: 1u
- 2024-06-20 11:19:54: 2u
- 2024-02-27 10:12:10: 2u
- 2023-12-07 09:40:05: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:25:00: 2u
- 2024-08-27 07:58:57: 1u
- 2024-06-20 11:19:54: 1u
- 2024-02-27 10:12:10: 2u
- 2023-12-07 09:40:05: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 13:15:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:25:00: 3u
- 2024-06-20 11:19:54: 1u
- 2023-12-07 09:40:05: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>17. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-11 06:25:00: 2u
- 2024-08-27 07:58:57: 1u
- 2023-12-07 09:40:05: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LB003] LB Festive (4,5%) 33CL | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Predicted 1u but not ordered |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 2 | Predicted 2u but not ordered |
| [SOWA02] SOWA bissap 250ml | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 2 | Predicted 2u but not ordered |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 2 | Predicted 2u but not ordered |
| [SOWA03] SOWA ginger beer ardent 250ml | 2 | Predicted 2u but not ordered |
| [SOWA04] SOWA thé glacé pêche 250ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:11:04.845Z*
