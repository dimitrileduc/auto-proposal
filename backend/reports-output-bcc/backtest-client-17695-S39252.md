# Rapport Backtest - Client Quels sont vos Goûts

## Contexte

- **Client** : Quels sont vos Goûts (ID: 17695)
- **Commande réelle** : S39252
- **Date commande** : 2025-09-17 11:40:42
- **Date cutoff système** : 2025-09-16 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 39
- **Tokens**: 35,135 input + 5,933 output = 41,068 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.0% | 30 produits prédits, 18 corrects |
| **Rappel** | 100.0% | 18 produits réels, 18 détectés |
| **F1-Score** | 75.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 29.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -3.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 9 | Avec erreur |

---

## True Positives (18)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV145] LV Sauce Tartare 200 ml  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV146] LV Sauce Aïoli 200 ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV149] LV Sauce Aioli Pesto 200ml | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV160] LV Tartinade Aubergine 190g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV158] LV Moutarde 200 ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 2 | 1.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (18 produits)


<details>
<summary><strong>1. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible et irrégulière (environ une commande tous les 3 à 4 mois). La dernière commande enregistrée date du 26 juin 2025, soit il y a 82 jours. Bien que le cycle soit imprévisible, le délai écoulé depuis la dernière commande dépasse largement les intervalles observés l'année précédente (environ 60-90 jours). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 163 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>2. [LV145] LV Sauce Tartare 200 ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit 82 jours. L'historique N-1 montre une commande le 12 septembre 2024. Nous sommes actuellement le 16 septembre. Le cycle est irrégulier mais la période correspond à un besoin historique. Par principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une constante de 1u (médiane de 1u). Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité de 1u sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 934 tokens
- **Output**: 172 tokens
- **Total**: 1,106 tokens



</details>


<details>
<summary><strong>3. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit 82 jours. L'historique N-1 montre une commande le 12 septembre 2024, ce qui indique une saisonnalité ou un besoin récurrent à cette période de l'année. Le délai depuis la dernière commande dépasse largement le cycle suggéré par l'historique annuel. Le risque de rupture est avéré pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique est constant avec des commandes unitaires (1u) en 2024 et 2025. La médiane des commandes récentes est de 1. Application du principe de précaution B2B pour maintenir le stock sur ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 900 tokens
- **Output**: 185 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>4. [LV149] LV Sauce Aioli Pesto 200ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 26 juin 2025, soit 82 jours. Bien que la rotation soit très faible, l'historique montre une commande en juin 2024 et une en janvier 2024. Le délai écoulé depuis la dernière commande dépasse largement les cycles observés. Par principe de précaution B2B et pour éviter une rupture prolongée sur un produit à faible rotation, un besoin est identifié. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 est constant à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 187 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>5. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 26 juin 2025, soit 82 jours sans réapprovisionnement. L'historique de l'année précédente montre une commande à la même période (12 septembre 2024) et un cycle moyen d'environ 60 à 80 jours. Le seuil de réapprovisionnement de 30 jours est largement atteint, créant un risque de rupture imminent. Conformément à la règle de la médiane historique et à la stabilité des volumes récents (3u), une commande de 3 unités est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 142 tokens
- **Total**: 1,095 tokens



</details>


<details>
<summary><strong>6. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit 82 jours. Bien que l'historique récent soit faible (1u), l'historique N-1 montre une commande récurrente en septembre (12/09/2024). Le délai depuis la dernière commande dépasse largement les cycles habituels observés l'an dernier (environ 60-90 jours). Par principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique montre des volumes faibles (1 à 3u). La dernière commande était de 1u et la médiane historique se situe entre 1u et 2u. En suivant la règle de choisir la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 219 tokens
- **Total**: 1,173 tokens



</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
Le produit présente une rotation lente mais régulière. La dernière commande remonte au 26 juin 2025, soit 82 jours avant la date actuelle. L'historique de l'année précédente montre une commande systématique en septembre (12/09/2024). Le cycle moyen constaté en 2024 est d'environ 60 à 90 jours ; nous sommes donc dans la fenêtre critique de réapprovisionnement. En application du principe de précaution B2B et pour couvrir le risque de rupture sur les 30 prochains jours, une commande est nécessaire. La quantité est fixée à 2 unités, correspondant à la médiane basse de l'historique (excluant le pic à 3u et la commande isolée de 1u) pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 186 tokens
- **Total**: 1,139 tokens



</details>


<details>
<summary><strong>8. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation lente mais régulière avec un cycle moyen d'environ 80 à 90 jours. La dernière commande remontant au 26 juin 2025 (soit 82 jours avant la date actuelle), le produit entre dans sa fenêtre critique de réapprovisionnement. En application du principe de précaution B2B et pour couvrir le risque de rupture dans les 30 prochains jours, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques et à la quantité la plus fréquente observée sur les périodes similaires.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 139 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>9. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit 82 jours. L'historique montre des cycles de commande variant entre 60 et 90 jours (ex: juin à septembre 2024). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une commande est statistiquement imminente. Par principe de précaution B2B, le risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une rotation très faible et régulière de 1u (médiane de 1u sur les deux dernières années, avec quelques pics isolés à 2u). Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité minimale de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 200 tokens
- **Total**: 1,154 tokens



</details>


<details>
<summary><strong>10. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 26 juin 2025, soit 82 jours avant la date actuelle. L'historique montre un cycle de commande moyen d'environ 60 à 90 jours (ex: 2024-04-12 à 2024-06-11, ou 2024-06-11 à 2024-09-12). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous entrons dans la fenêtre habituelle de commande. La quantité est fixée à 4 unités, ce qui correspond à la médiane stricte et constante de l'historique récent et de l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 173 tokens
- **Total**: 1,126 tokens



</details>


<details>
<summary><strong>11. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit 82 jours. L'historique N-1 montre une commande le 12 septembre 2024. Nous sommes le 16 septembre, le cycle est irrégulier et nous avons dépassé la date anniversaire de la commande de l'an dernier. Par principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent est de 3u, mais l'historique long terme (N-1) oscille entre 1u et 2u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute sur une rotation faible, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 201 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>12. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 26 juin 2025, soit 82 jours d'inactivité. L'historique montre une rotation lente mais régulière avec des intervalles de 2 à 4 mois. En appliquant le principe de précaution B2B, le délai depuis la dernière commande dépasse largement le cycle moyen estimé, ce qui indique un risque de rupture imminent pour les 30 prochains jours. La quantité retenue est de 1 unité, correspondant à la médiane des commandes les plus récentes et à la tendance de consommation actuelle (1u).

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 127 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>13. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit 82 jours. L'historique N-1 montre une commande le 12 septembre 2024, ce qui indique un besoin saisonnier actuel. Le délai depuis la dernière commande dépasse largement les cycles habituels, créant un risque de rupture imminent sous 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 oscille entre 1u et 2u. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute sur une faible rotation), la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 161 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>14. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin 2025, soit 82 jours avant la date actuelle. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit en stock. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 161 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>15. [LV153] LV Vinaigrette Ciboulette 250 ml bio</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit présente une rotation très faible avec une commande unique enregistrée à la même période l'année dernière (septembre 2024). En l'absence d'historique récent, le principe de précaution B2B s'applique pour couvrir le besoin saisonnier potentiel. Le délai depuis la dernière commande connue dépasse largement les cycles standards, créant un risque de rupture si la demande annuelle se manifeste. ÉTAPE 2 : ESTIMATION QUANTITÉ. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à l'historique N-1, afin d'éviter tout surstockage sur un produit à faible mouvement.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 170 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>16. [LV158] LV Moutarde 200 ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique montre une commande à la même période l'année dernière (12 septembre 2024). Bien qu'il n'y ait pas de commandes récentes, le cycle annuel suggère un besoin récurrent en septembre. Le délai depuis la dernière commande théorique (1 an) et la correspondance de date indiquent un risque de rupture pour ce besoin saisonnier/annuel. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique N-1 montre une stabilité stricte à 1 unité par commande. En l'absence de données récentes, la médiane de l'historique disponible (1u) est retenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 167 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>17. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande enregistrée date du 12 septembre 2024. Nous sommes le 16 septembre 2025, soit un an sans commande. L'historique N-1 montre une commande systématique à cette période précise (12/09/2024). En l'absence d'historique récent, le principe de précaution B2B et la saisonnalité N-1 indiquent un besoin immédiat pour éviter une rupture de stock sur ce cycle annuel. ÉTAPE 2 : Estimation de la quantité. L'historique montre une rotation faible et stable (majoritairement 1u), mais la dernière commande de la même période l'an dernier était de 2u. Conformément à la règle de maintien des volumes historiques N-1 en l'absence de données récentes, la quantité retenue est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 944 tokens
- **Output**: 203 tokens
- **Total**: 1,147 tokens



</details>


<details>
<summary><strong>18. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une commande récurrente à cette période précise (12 septembre 2024). Le délai depuis la dernière commande théorique dépasse largement le cycle habituel, créant un risque de rupture imminent dans l'horizon des 30 jours. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique récent, la référence est la commande de l'année précédente à la même période (3u). La médiane historique globale (2023-2024) oscille entre 2u et 3u. Conformément à la règle de maintien des volumes sur rotation faible, la quantité de 3u est retenue pour couvrir le besoin saisonnier identifié.

**Tokens utilises pour cette prediction:**
- **Input**: 928 tokens
- **Output**: 204 tokens
- **Total**: 1,132 tokens



</details>




### Donnees d'Input LLM (18 produits)


<details>
<summary><strong>1. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 1u
- 2024-06-11 07:02:51: 1u
- 2024-04-12 11:45:00: 1u
- 2024-01-22 12:21:32: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV145] LV Sauce Tartare 200 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 1u
- 2024-06-11 07:02:51: 2u
- 2024-04-12 11:45:00: 1u
- 2024-01-22 12:21:32: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV146] LV Sauce Aïoli 200 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 1u
- 2024-06-11 07:02:51: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV149] LV Sauce Aioli Pesto 200ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-11 07:02:51: 1u
- 2024-01-22 12:21:32: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 4u
- 2024-06-11 07:02:51: 4u
- 2024-04-12 11:45:00: 3u
- 2024-01-22 12:21:32: 3u
- 2023-11-17 07:45:45: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 2u
- 2024-06-11 07:02:51: 2u
- 2024-04-12 11:45:00: 1u
- 2024-01-22 12:21:32: 3u
- 2023-11-17 07:45:45: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 3u
- 2024-06-11 07:02:51: 3u
- 2024-04-12 11:45:00: 2u
- 2024-01-22 12:21:32: 2u
- 2023-11-17 07:45:45: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 2u
- 2024-06-11 07:02:51: 1u
- 2024-04-12 11:45:00: 2u
- 2024-01-22 12:21:32: 3u
- 2023-11-17 07:45:45: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 1u
- 2024-06-11 07:02:51: 1u
- 2024-04-12 11:45:00: 2u
- 2024-01-22 12:21:32: 2u
- 2023-11-17 07:45:45: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 4u
- 2024-06-11 07:02:51: 4u
- 2024-04-12 11:45:00: 4u
- 2024-01-22 12:21:32: 4u
- 2023-11-17 07:45:45: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>11. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 2u
- 2024-06-11 07:02:51: 1u
- 2024-01-22 12:21:32: 1u
- 2023-11-17 07:45:45: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 1u
- 2024-06-11 07:02:51: 1u
- 2024-04-12 11:45:00: 2u
- 2024-01-22 12:21:32: 2u
- 2023-11-17 07:45:45: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 2u
- 2024-06-11 07:02:51: 1u
- 2024-04-12 11:45:00: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 09:19:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [LV153] LV Vinaigrette Ciboulette 250 ml bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [LV158] LV Moutarde 200 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 1u
- 2024-04-12 11:45:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 2u
- 2024-06-11 07:02:51: 1u
- 2024-04-12 11:45:00: 1u
- 2024-01-22 12:21:32: 1u
- 2023-11-17 07:45:45: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>18. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-12 06:47:18: 3u
- 2024-04-12 11:45:00: 2u
- 2024-01-22 12:21:32: 2u
- 2023-11-17 07:45:45: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>




---

## False Positives (12)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV147] LV Sauce Cocktail 200 ml | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | Predicted 2u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 1 | Predicted 1u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 2 | Predicted 2u but not ordered |
| [LV040] LV Caprons apéritifs 240g | 2 | Predicted 2u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Predicted 1u but not ordered |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Predicted 1u but not ordered |
| [LV140] LV Moutarde à l'ancienne  200ml | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Predicted 1u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:18:31.160Z*
