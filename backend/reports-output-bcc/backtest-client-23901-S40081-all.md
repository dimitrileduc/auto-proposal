# Rapport Backtest - Client Le comptoir des Frangines

## Contexte

- **Client** : Le comptoir des Frangines (ID: 23901)
- **Commande réelle** : S40081
- **Date commande** : 2025-11-05 07:32:50
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 52
- **Tokens**: 46,571 input + 7,532 output = 54,103 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 34.8% | 46 produits prédits, 16 corrects |
| **Rappel** | 88.9% | 18 produits réels, 16 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 43.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 8 | Avec erreur |

---

## True Positives (16)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0052] MF Pois chiches  500g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV135] LV Tartinade Basilico 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV336] LV BIO Tartinade Tomato Basilico 380g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV216] LV Biscuits apéro Fromage & Oignon 100g bio | 2 | 1 | 1.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (16 produits)


<details>
<summary><strong>1. [MF0052] MF Pois chiches  500g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août 2025, soit 69 jours avant la date actuelle. Bien que l'historique montre une rotation très faible et irrégulière (cycle de plusieurs mois), le délai écoulé dépasse largement les intervalles observés précédemment. En application du principe de précaution B2B (si doute sur le cycle ou rotation -> prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique est constant avec des commandes unitaires (médiane de 1u). Conformément à la règle sur les rotations faibles, on maintient la quantité de 1u sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 900 tokens
- **Output**: 169 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 27 août 2025, soit plus de 60 jours. Bien que la rotation soit faible, l'historique N-1 montre une activité régulière en septembre et octobre (1u à 2u). Le délai depuis la dernière commande dépasse largement le cycle habituel, créant un risque de rupture ou un besoin de réapprovisionnement imminent pour maintenir le stock. En suivant le principe de précaution B2B et la règle de la médiane sur les faibles rotations, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 127 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>3. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 27 août 2025, soit 69 jours avant la date actuelle. L'historique de l'année précédente montre une activité sur la période septembre-octobre avec des commandes de 2 unités. Bien que le cycle soit irrégulier, le délai écoulé depuis la dernière commande dépasse largement les cycles observés et nous entrons dans une période historiquement active (N-1). Par principe de précaution B2B et pour éviter une rupture prolongée, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes de l'année précédente sur la même période.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 148 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 69 jours. Bien que le cycle soit difficile à établir avec un seul point de données, le délai écoulé dépasse largement les standards de réapprovisionnement habituels. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité retenue correspond à l'historique unique de 1 unité, conformément à la règle de maintien des volumes pour les faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 120 tokens
- **Total**: 992 tokens



</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 27 août 2025, soit plus de 60 jours. Bien que l'historique récent soit faible (1u), l'historique de l'année précédente (N-1) montre une commande récurrente de 2u durant la période de septembre. En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la médiane historique stable observée l'an dernier, afin de couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 141 tokens
- **Total**: 1,061 tokens



</details>


<details>
<summary><strong>6. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août 2025, soit 69 jours avant la date actuelle. L'historique de l'année précédente montre des cycles de commande variant entre 50 et 70 jours (ex: sept à oct 2024). Le délai actuel dépasse largement le cycle moyen constaté, indiquant un risque de rupture imminent ou un besoin de réapprovisionnement certain dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. L'historique montre des volumes faibles et stables (1u, 2u, 4u). La médiane des commandes historiques est de 2 unités. Conformément à la règle de précaution et de maintien des rotations faibles, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 183 tokens
- **Total**: 1,138 tokens



</details>


<details>
<summary><strong>7. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août 2025, soit plus de 60 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle habituel suggéré par l'historique N-1. En application du principe de précaution B2B (risque de rupture sur un produit à rotation lente mais constante), un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 1u et l'historique N-1 montre des commandes de 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible pour éviter le surstock, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 185 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 27 août 2025, soit 69 jours avant la date actuelle. L'historique de l'année précédente montre des commandes en septembre et octobre, suggérant un cycle de rotation qui aurait dû déclencher un réapprovisionnement. Le délai depuis la dernière commande dépasse largement le seuil de précaution (70% du cycle estimé). En application du principe de précaution B2B face à une irrégularité de cycle, un besoin est détecté. La quantité est fixée à 2 unités, correspondant à la médiane des commandes historiques (1, 2, 2, 1), afin de couvrir le risque de rupture sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 157 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>9. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 27/08/2025, soit 69 jours. L'historique montre un cycle de commande irrégulier mais fréquent (tous les 2 à 3 mois). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car nous entrons dans la fenêtre habituelle de commande. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des volumes très faibles et stables (1u ou 2u). La médiane des commandes est de 1u. Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 197 tokens
- **Total**: 1,151 tokens



</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 27 août 2025, soit plus de 60 jours. L'historique de l'année précédente montre une activité régulière en septembre et octobre (2u et 3u). Bien que la rotation récente soit faible (1u), le délai écoulé depuis la dernière commande dépasse largement le cycle habituel, créant un risque de rupture imminent pour la période de fin d'année. En application du principe de précaution B2B et en se basant sur la médiane historique (2u), une commande est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 127 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 27 août 2025, soit plus de 60 jours sans réapprovisionnement. L'historique de l'année précédente montre une activité régulière en septembre et octobre (2u à chaque fois). Le délai écoulé dépasse largement le cycle habituel constaté en N-1, créant un risque de rupture imminent pour la période actuelle. En application du principe de précaution B2B et en se basant sur la médiane des commandes historiques (2u), une commande est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 935 tokens
- **Output**: 119 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>12. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 27 août 2025, soit plus de 60 jours sans activité. Bien que la rotation soit faible (1-2 unités), l'historique de l'année précédente montre des commandes régulières en septembre et octobre. En application du principe de précaution B2B, le délai écoulé depuis la dernière commande dépasse largement le cycle habituel, créant un risque de rupture de stock. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la valeur la plus basse pour éviter un surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 137 tokens
- **Total**: 1,074 tokens



</details>


<details>
<summary><strong>13. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août 2025, soit 69 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle habituel suggéré par l'historique. En application du principe de précaution B2B (incertitude sur le cycle = prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 1u et l'historique N-1 montre 2u. Conformément à la règle de rotation faible et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 886 tokens
- **Output**: 179 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>14. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août 2025, soit 69 jours avant la date actuelle. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (risque de rupture sur l'horizon de 30 jours), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 161 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>15. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 27 août 2025, soit plus de 60 jours sans réapprovisionnement. L'historique de l'année précédente montre une rotation régulière tous les 2 à 4 mois avec des commandes entre juin et octobre. Le délai depuis la dernière commande dépasse largement le cycle habituel, créant un risque de rupture imminent pour les 30 prochains jours. En suivant la règle de précaution B2B et en se basant sur la médiane de l'historique (2u), une commande de 2 unités est nécessaire pour couvrir le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 134 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>16. [LV216] LV Biscuits apéro Fromage & Oignon 100g bio</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27/08/2025, soit 69 jours. L'historique N-1 montre des commandes régulières en septembre et octobre. Le délai depuis la dernière commande dépasse largement le cycle habituel constaté l'an dernier (environ 45-60 jours). Il existe un risque de rupture imminent ou une vente manquée sur la période actuelle. ÉTAPE 2 : Estimation quantité. L'historique récent est très faible (1u), mais les commandes de l'année précédente sur la même période (septembre/octobre) étaient de 2u. La médiane historique globale se situe à 2u. En application du principe de précaution B2B et de la saisonnalité N-1, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 191 tokens
- **Total**: 1,131 tokens



</details>




### Donnees d'Input LLM (16 produits)


<details>
<summary><strong>1. [MF0052] MF Pois chiches  500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:11:19: 1u
- 2024-02-27 11:02:10: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 09:39:27: 1u
- 2024-09-19 06:11:19: 2u
- 2024-06-26 06:24:13: 2u
- 2024-04-17 08:32:21: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 09:39:27: 2u
- 2024-09-19 06:11:19: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-19 06:11:19: 2u
- 2024-06-26 06:24:13: 2u
- 2024-04-17 08:32:21: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 09:39:27: 2u
- 2024-09-19 06:11:19: 2u
- 2024-06-26 06:24:13: 1u
- 2024-04-17 08:32:21: 4u
- 2024-02-27 11:02:10: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 09:39:27: 2u
- 2024-02-27 11:02:10: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 09:39:27: 2u
- 2024-09-19 06:11:19: 2u
- 2024-06-26 06:24:13: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 09:39:27: 1u
- 2024-09-19 06:11:19: 2u
- 2024-06-26 06:24:13: 1u
- 2024-04-17 08:32:21: 1u
- 2024-02-27 11:02:10: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 09:39:27: 3u
- 2024-09-19 06:11:19: 2u
- 2024-06-26 06:24:13: 1u
- 2024-04-17 08:32:21: 4u
- 2024-02-27 11:02:10: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 09:39:27: 2u
- 2024-09-19 06:11:19: 2u
- 2024-06-26 06:24:13: 1u
- 2024-04-17 08:32:21: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 09:39:27: 2u
- 2024-09-19 06:11:19: 1u
- 2024-06-26 06:24:13: 1u
- 2024-04-17 08:32:21: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LV336] LV BIO Tartinade Tomato Basilico 380g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-27 11:02:10: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 09:39:27: 3u
- 2024-09-19 06:11:19: 2u
- 2024-06-26 06:24:13: 2u
- 2024-02-27 11:02:10: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>16. [LV216] LV Biscuits apéro Fromage & Oignon 100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 09:24:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-31 09:39:27: 2u
- 2024-09-19 06:11:19: 2u
- 2024-06-26 06:24:13: 1u
- 2024-02-27 11:02:10: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (30)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [RF003] REFIELD Maïs 500G  | 1 | Predicted 1u but not ordered |
| [LV149] LV Sauce Aioli Pesto 200ml | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Predicted 1u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Predicted 1u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Predicted 1u but not ordered |
| [LV214] LV Biscuits apéro tomate basilic 100g bio  | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | Predicted 2u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 2 | Predicted 2u but not ordered |
| [LV040] LV Caprons apéritifs 240g | 1 | Predicted 1u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Predicted 1u but not ordered |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | Predicted 1u but not ordered |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Predicted 1u but not ordered |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | Predicted 1u but not ordered |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | Predicted 1u but not ordered |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | Predicted 1u but not ordered |
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | Predicted 1u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Predicted 1u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Predicted 1u but not ordered |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Predicted 1u but not ordered |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | Predicted 1u but not ordered |
| [FO001] FO CITRONNADE BIO 33cl | 1 | Predicted 1u but not ordered |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Predicted 1u but not ordered |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 2 | Predicted 2u but not ordered |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [VID0009] Consigne casier | 1 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 6 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:12:55.696Z*
