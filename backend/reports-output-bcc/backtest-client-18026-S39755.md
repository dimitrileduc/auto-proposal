# Rapport Backtest - Client AU FOND DES PANS

## Contexte

- **Client** : AU FOND DES PANS (ID: 18026)
- **Commande réelle** : S39755
- **Date commande** : 2025-11-12 10:39:26
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 49
- **Tokens**: 43,831 input + 7,200 output = 51,031 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 58.6% | 29 produits prédits, 17 corrects |
| **Rappel** | 100.0% | 17 produits réels, 17 détectés |
| **F1-Score** | 73.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.88 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 48.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 45.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -35.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 13 | Avec erreur |

---

## True Positives (17)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV145] LV Sauce Tartare 200 ml  | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV149] LV Sauce Aioli Pesto 200ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (17 produits)


<details>
<summary><strong>1. [LV145] LV Sauce Tartare 200 ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Le produit présente une rotation très faible et irrégulière (environ tous les 4 mois). La dernière commande remonte au 02/10/2025, soit 40 jours avant la date actuelle. Bien que le cycle soit incertain, le délai écoulé dépasse largement le seuil de précaution (70% du cycle estimé) et entre dans la fenêtre de risque de rupture pour les 30 prochains jours. En application du principe de précaution B2B et de la règle sur les faibles rotations (1-2u), une commande de 1 unité est préconisée pour maintenir le stock sans risque de surstockage, en s'alignant sur la médiane historique constante de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 917 tokens
- **Output**: 160 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 40 jours (02/10/2025). Bien que le cycle de rotation soit lent et irrégulier, le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours, créant un risque de rupture ou un besoin de restockage par précaution. En suivant la règle de la médiane sur l'historique récent et N-1 (valeurs entre 1u et 2u), la quantité de 1u est retenue conformément au principe de choisir la valeur la plus basse en cas de doute sur une faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 138 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'analyse de l'historique récent montre des intervalles de commande d'environ 50 à 70 jours (juin-août-octobre). La dernière commande date du 02/10/2025, soit il y a 40 jours. Étant donné que nous approchons du cycle moyen et que le seuil de réapprovisionnement est de 30 jours, il existe un risque de rupture imminent. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les quantités historiques sont très stables, oscillant entre 1u et 2u. La médiane des commandes récentes est de 1u. Conformément à la règle de ne pas surestimer pour les rotations faibles et de choisir la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 213 tokens
- **Total**: 1,167 tokens



</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre une fréquence de réapprovisionnement environ tous les 3 à 4 mois. La dernière commande datant du 02 octobre 2025 (il y a 40 jours), nous entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (Replenishment Threshold Days). Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à l'historique le plus fréquent pour ce produit.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 132 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>5. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/10/2025, soit 40 jours. Bien que la rotation soit faible, l'historique montre des commandes espacées de 1 à 3 mois. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture ou de besoin imminent est présent (principe de précaution B2B en cas de cycle irrégulier). ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est extrêmement stable avec des commandes systématiques de 1 unité. La médiane est de 1. On maintient cette quantité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 160 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 02/10/2025, soit 40 jours avant la date actuelle. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours, créant une incertitude sur l'état du stock. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et historiques, respectant la règle de ne pas augmenter les quantités sur les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 148 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>7. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 50 à 70 jours (juin, août, octobre). La dernière commande datant du 2 octobre (il y a 40 jours), nous entrons dans la zone de risque de rupture pour les 30 prochains jours (seuil de 70% du cycle atteint). Bien que le volume soit faible, la régularité impose un réapprovisionnement par précaution. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes de 2025, conformément à la règle de ne pas surestimer les stocks sur les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 155 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>8. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 02/10/2025, soit 40 jours avant la date actuelle. Bien que l'historique montre une rotation très faible et irrégulière (cycle long), le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 130 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>9. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'historique montre une rotation faible mais régulière avec un cycle d'environ 52 jours entre les deux dernières commandes. La dernière commande datant du 02/10/2025 (soit 40 jours avant la date actuelle), nous avons atteint environ 77% du cycle moyen. Ce délai dépasse le seuil de précaution de 70%, indiquant un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B et de la règle de maintien pour les faibles rotations (1-2u), une commande de 1 unité est préconisée, correspondant à la médiane des quantités historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 156 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>10. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 août 2025, soit 92 jours. L'historique N-1 montre une commande le 13 septembre 2024, ce qui indique un retard de cycle important. En application du principe de précaution B2B (cycle irrégulier ou doute sur la rotation), un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique complet (récent et N-1) est extrêmement stable avec des commandes systématiques de 1 unité. La médiane et la constante étant de 1, la quantité préconisée est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 166 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>11. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Le cycle de commande historique (environ 2 à 3 mois) et la dernière commande datant du 11 août 2025 (soit 92 jours) indiquent un besoin imminent de réapprovisionnement. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une unité pour éviter la rupture, le délai depuis la dernière commande dépassant largement le cycle habituel. La quantité retenue correspond à la médiane constante observée sur l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 117 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 11 août 2025, soit 92 jours sans réapprovisionnement. L'historique montre un cycle de rotation lent mais régulier (environ tous les 2 à 3 mois). Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle habituel, créant un risque de rupture imminent pour les 30 prochains jours. En application du principe de précaution B2B et de la règle de maintien des faibles rotations (1-2u), la quantité retenue est de 2 unités, correspondant à la médiane et au volume le plus fréquent des commandes passées.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 142 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>13. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 11 août 2025, soit 92 jours avant la date actuelle. Bien que l'historique montre une rotation très faible et irrégulière, le délai écoulé dépasse largement les cycles observés précédemment. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la valeur de la commande la plus récente, afin de maintenir le stock sans risque de surstockage excessif.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 128 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>14. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 11 août 2025, soit 92 jours avant la date actuelle. L'historique montre un cycle de commande espacé (environ tous les 2 à 4 mois) avec une rotation très faible mais constante de 1 unité. Bien que le cycle soit irrégulier, le délai depuis la dernière commande dépasse largement les intervalles habituels observés l'année précédente (45 à 90 jours). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 166 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>15. [LV149] LV Sauce Aioli Pesto 200ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit plus de 140 jours. Bien que la rotation soit extrêmement faible, l'absence de commande sur une période aussi longue, comparée à l'historique N-1 (avril), suggère un besoin de réapprovisionnement par précaution pour éviter une rupture de stock prolongée sur ce produit à faible rotation. ÉTAPE 2 : Estimation quantité. L'historique montre une constante de 1 unité par commande (médiane = 1). Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 884 tokens
- **Output**: 161 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>16. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 23 juin 2025, soit plus de 140 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement les cycles observés l'année précédente (environ 60 à 80 jours entre les commandes). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane historique et au volume habituel pour ce produit à faible rotation, afin d'éviter un surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 145 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>17. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit présente une rotation très faible mais régulière (environ tous les 3 à 4 mois). La dernière commande enregistrée remonte à septembre 2024. En date du 11 novembre 2025, le délai depuis la dernière commande dépasse largement le cycle habituel et l'historique N-1. Par principe de précaution B2B et pour éviter une rupture prolongée sur une référence active, un besoin est identifié. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique est constant avec des commandes unitaires (1u). Conformément à la règle sur les rotations faibles, la quantité est maintenue à 1 unité (médiane historique) pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 178 tokens
- **Total**: 1,086 tokens



</details>




### Donnees d'Input LLM (17 produits)


<details>
<summary><strong>1. [LV145] LV Sauce Tartare 200 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:07:53: 1u
- 2025-06-23 06:32:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:48:00: 1u
- 2024-04-29 11:43:42: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:07:53: 1u
- 2025-06-23 06:32:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:48:00: 1u
- 2024-04-29 11:43:42: 2u
- 2024-02-20 10:56:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:07:53: 2u
- 2025-08-11 08:38:37: 1u
- 2025-06-23 06:32:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:53:42: 1u
- 2024-06-17 06:48:00: 1u
- 2024-02-20 10:56:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:07:53: 2u
- 2025-06-23 06:32:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:53:42: 1u
- 2024-06-17 06:48:00: 1u
- 2024-04-29 11:43:42: 1u
- 2024-02-20 10:56:34: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:07:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:53:42: 1u
- 2024-06-17 06:48:00: 1u
- 2024-04-29 11:43:42: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:07:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:53:42: 2u
- 2024-02-20 10:56:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:07:53: 1u
- 2025-08-11 08:38:37: 1u
- 2025-06-23 06:32:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:53:42: 2u
- 2024-06-17 06:48:00: 1u
- 2024-02-20 10:56:34: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>8. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:07:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:48:00: 1u
- 2024-02-20 10:56:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 06:07:53: 1u
- 2025-08-11 08:38:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:38:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:53:42: 1u
- 2024-06-17 06:48:00: 1u
- 2024-04-29 11:43:42: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>11. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:38:37: 1u
- 2025-06-23 06:32:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:53:42: 1u
- 2024-06-17 06:48:00: 1u
- 2024-04-29 11:43:42: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:38:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:48:00: 2u
- 2024-04-29 11:43:42: 1u
- 2024-02-20 10:56:34: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:38:37: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:48:00: 1u
- 2024-02-20 10:56:34: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 08:38:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:53:42: 1u
- 2024-06-17 06:48:00: 1u
- 2024-04-29 11:43:42: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [LV149] LV Sauce Aioli Pesto 200ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:32:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-29 11:43:42: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>16. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:32:37: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-17 06:48:00: 1u
- 2024-04-29 11:43:42: 1u
- 2024-02-20 10:56:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-13 11:53:42: 1u
- 2024-06-17 06:48:00: 1u
- 2024-02-20 10:56:34: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (12)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | Predicted 1u but not ordered |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Predicted 1u but not ordered |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | Predicted 2u but not ordered |
| [LV040] LV Caprons apéritifs 240g | 1 | Predicted 1u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Predicted 1u but not ordered |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | Predicted 1u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Predicted 1u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:11:22.542Z*
