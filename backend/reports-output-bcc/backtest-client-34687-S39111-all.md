# Rapport Backtest - Client Boucherie Halleux srl

## Contexte

- **Client** : Boucherie Halleux srl (ID: 34687)
- **Commande réelle** : S39111
- **Date commande** : 2025-09-11 07:07:07
- **Date cutoff système** : 2025-09-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 26
- **Tokens**: 24,088 input + 4,559 output = 28,647 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 61.5% | 26 produits prédits, 16 corrects |
| **Rappel** | 84.2% | 19 produits réels, 16 détectés |
| **F1-Score** | 71.1% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.06 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 48.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 60.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 8.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 13 | Avec erreur |

---

## True Positives (16)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 6 | 2 | 4.0 | 200.0% | partial | LLM |
| [LV160] LV Tartinade Aubergine 190g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 1 | 2.0 | 200.0% | partial | LLM |
| [LV133] LV Tartinade Ananas Coco 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV147] LV Sauce Cocktail 200 ml | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 4 | 1.0 | 25.0% | partial | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 4 | 3 | 1.0 | 33.3% | partial | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 2 | 1.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (16 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 6u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 4u (200.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 23 juin 2025, soit 79 jours avant la date actuelle. Bien que l'historique soit limité, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 6 unités, correspondant à la valeur de la commande la plus récente, afin de maintenir le niveau de stock observé lors du dernier mouvement.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 122 tokens
- **Total**: 1,010 tokens



</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 23 juin 2025, soit 79 jours avant la date actuelle. L'historique montre un cycle de commande moyen d'environ 60 à 70 jours. Le délai écoulé dépasse largement ce cycle moyen, ce qui indique un risque de rupture imminent ou une consommation du stock de sécurité dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité est fixée à 3 unités, correspondant à la médiane des commandes historiques (3u), en écartant le pic récent de 4u pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 154 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 23 juin 2025, soit 79 jours. L'historique montre un cycle de commande moyen d'environ 60 à 70 jours (ex: mai à juin 2025, ou les intervalles de 2024). Nous avons largement dépassé ce cycle moyen. Le risque de rupture est imminent ou déjà avéré pour la période de 30 jours à venir. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 2u et 4u. La médiane de l'historique global (2, 2, 4, 3, 3, 2, 4) se situe à 3u, mais les commandes les plus fréquentes et récentes de l'année N-1 à la même période (août/mai) sont de 2u. En application de la règle de prudence B2B (choisir la valeur la plus basse en cas de doute sur une faible rotation), la quantité de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 251 tokens
- **Total**: 1,221 tokens



</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit 79 jours avant la date actuelle. L'historique montre un cycle de commande moyen d'environ 60 à 70 jours. Le délai depuis la dernière commande dépasse largement ce cycle moyen, indiquant un risque de rupture imminent ou déjà effectif dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. Les commandes récentes affichent 1u et 2u, tandis que l'historique N-1 était plus élevé (3u). En suivant la règle de la médiane des commandes récentes et le principe de prudence face à une légère tendance à la baisse, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 172 tokens
- **Total**: 1,145 tokens



</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 23 juin 2025, soit 79 jours avant la date actuelle (10 septembre). Bien que la rotation soit faible et irrégulière, le délai écoulé dépasse largement les cycles observés historiquement. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une stabilisation à 1 unité par commande (mai et juin 2025). Conformément à la règle de maintien des rotations faibles (1-2u) et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 191 tokens
- **Total**: 1,162 tokens



</details>


<details>
<summary><strong>6. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande moyen d'environ 60 à 80 jours. La dernière commande remontant au 23 juin 2025 (soit 79 jours avant la date actuelle), le seuil de réapprovisionnement est largement atteint et le risque de rupture est imminent pour les 30 prochains jours. Bien que les commandes récentes oscillent entre 2u et 4u, la médiane historique globale se situe à 3u. En suivant le principe de précaution B2B pour un produit à rotation modérée mais régulière, une commande de 3 unités est préconisée pour couvrir la période à venir sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 155 tokens
- **Total**: 1,125 tokens



</details>


<details>
<summary><strong>7. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit 79 jours. Bien que l'historique soit irrégulier, le délai actuel dépasse largement les cycles observés précédemment (souvent espacés de 2 à 4 mois). En application du principe de précaution B2B et face à l'incertitude du cycle de rotation, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande de 2u. L'historique N-1 montre des quantités variant entre 1u et 3u avec une médiane à 2u. Conformément à la règle de la médiane et au maintien des quantités pour les rotations faibles, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 192 tokens
- **Total**: 1,128 tokens



</details>


<details>
<summary><strong>8. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 23 juin 2025, soit environ 79 jours. L'historique montre un cycle de commande moyen d'environ 60 à 70 jours. Le délai actuel dépasse largement ce cycle, ce qui indique un risque de rupture imminent ou un besoin de réapprovisionnement immédiat selon le principe de précaution B2B. Pour la quantité, bien que l'historique N-1 affichait 3 unités, les commandes les plus récentes en 2025 sont de 2 unités. En suivant la règle de la médiane récente et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage, une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 165 tokens
- **Total**: 1,138 tokens



</details>


<details>
<summary><strong>9. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
La dernière commande remonte au 23 juin 2025, soit 79 jours avant la date actuelle. Bien que l'historique soit limité, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (Étape 1), un risque de rupture est identifié pour les 30 prochains jours. Pour la quantité (Étape 2), la commande la plus récente étant de 2 unités, ce volume est retenu comme référence pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 884 tokens
- **Output**: 128 tokens
- **Total**: 1,012 tokens



</details>


<details>
<summary><strong>10. [LV147] LV Sauce Cocktail 200 ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit 79 jours. L'historique montre des cycles irréguliers (2 à 5 mois). Selon le principe de précaution B2B, un délai de plus de 70 jours sans commande sur un produit à rotation lente présente un risque de rupture imminent, surtout à l'approche de la période automnale où une commande avait eu lieu l'an dernier (octobre). ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes très faibles (1 à 2 unités). La médiane des commandes est de 2u, mais conformément à la règle de rotation faible (1-2u) et au choix de la valeur la plus basse en cas de doute, une quantité de 1u est préconisée pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 934 tokens
- **Output**: 202 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>11. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit 79 jours avant la date actuelle. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit de type boisson. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 175 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>12. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin 2025, soit 79 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé est très important. En application du principe de précaution B2B (cycle irrégulier ou difficile à déterminer), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple, on se base sur la seule donnée disponible. Pour une rotation très faible (1u), la règle impose de maintenir cette quantité sans l'augmenter. La médiane est ici de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 162 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 juin, soit 79 jours. Le cycle précédent était de 49 jours. Nous avons largement dépassé le cycle moyen constaté. En application du principe de précaution B2B (jours depuis dernière commande > cycle moyen), le risque de rupture est élevé d'ici les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent présente deux commandes (4u et 2u). Conformément à la règle de privilégier la médiane et, en cas de doute entre deux valeurs, de choisir la plus basse pour éviter le surstockage, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 159 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>14. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/05/2025, soit plus de 120 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement tout cycle raisonnable pour un produit de snacking bio. En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière), un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 3 unités. En l'absence d'autres données ou de saisonnalité N-1, la médiane se base sur cette valeur de référence. On maintient la quantité de 3 unités pour couvrir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 178 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>15. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/05/2025, soit plus de 120 jours. Bien que le cycle soit difficile à établir avec une seule commande, le principe de précaution B2B s'applique face à une absence de réapprovisionnement depuis 4 mois. Le risque de rupture est considéré comme élevé par défaut. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 4 unités. En l'absence d'autres données ou de saisonnalité N-1, la médiane (4u) est retenue pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 155 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>16. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 05/05/2025, soit plus de 120 jours sans activité. En l'absence d'un cycle de commande régulier établi, le principe de précaution B2B s'applique pour éviter une rupture prolongée si le produit est toujours au catalogue. Le risque est considéré comme présent par défaut d'historique fréquent. ÉTAPE 2 : L'historique récent ne présente qu'une seule commande de 3 unités. Conformément à la règle de maintien des quantités pour les rotations faibles et l'utilisation de la valeur historique disponible, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 152 tokens
- **Total**: 1,029 tokens



</details>




### Donnees d'Input LLM (16 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:26:16: 6u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 05:54:53: 1u

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:26:16: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 05:54:53: 2u
- 2024-05-27 07:13:14: 3u
- 2024-03-27 09:25:09: 4u
- 2024-01-22 14:05:26: 3u
- 2023-10-30 15:35:04: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:26:16: 4u
- 2025-05-05 08:26:03: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 05:54:53: 2u
- 2024-05-27 07:13:14: 2u
- 2024-03-27 09:25:09: 4u
- 2024-01-22 14:05:26: 3u
- 2023-10-30 15:35:04: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:26:16: 1u
- 2025-05-05 08:26:03: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 05:54:53: 3u
- 2024-05-27 07:13:14: 3u
- 2024-03-27 09:25:09: 3u
- 2024-01-22 14:05:26: 2u
- 2023-10-30 15:35:04: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:26:16: 1u
- 2025-05-05 08:26:03: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 05:54:53: 1u
- 2024-05-27 07:13:14: 3u
- 2024-03-27 09:25:09: 2u
- 2024-01-22 14:05:26: 3u
- 2023-10-30 15:35:04: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:26:16: 4u
- 2025-05-05 08:26:03: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 05:54:53: 4u
- 2024-05-27 07:13:14: 2u
- 2024-03-27 09:25:09: 3u
- 2024-01-22 14:05:26: 2u
- 2023-10-30 15:35:04: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV133] LV Tartinade Ananas Coco 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:26:16: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 05:54:53: 1u
- 2024-03-27 09:25:09: 1u
- 2024-01-22 14:05:26: 2u
- 2023-10-30 15:35:04: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:26:16: 2u
- 2025-05-05 08:26:03: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 05:54:53: 3u
- 2024-05-27 07:13:14: 3u
- 2024-03-27 09:25:09: 3u
- 2024-01-22 14:05:26: 3u
- 2023-10-30 15:35:04: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:26:16: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 05:54:53: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>10. [LV147] LV Sauce Cocktail 200 ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:26:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-21 05:54:53: 1u
- 2024-05-27 07:13:14: 2u
- 2024-03-27 09:25:09: 2u
- 2023-10-30 15:35:04: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [PAO03] PAOLA cola canette 330ml - le cola des Belges</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:26:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:26:16: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>13. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-23 06:26:16: 4u
- 2025-05-05 08:26:03: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>14. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:26:03: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>15. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:26:03: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>16. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-05 08:26:03: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 4 | Predicted 4u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Predicted 2u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | Predicted 1u but not ordered |
| [LV145] LV Sauce Tartare 200 ml  | 3 | Predicted 3u but not ordered |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Predicted 2u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | Predicted 2u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 2 | Predicted 2u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 2 | Predicted 2u but not ordered |
| [LV140] LV Moutarde à l'ancienne  200ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 3 | Never ordered in previous analysis window (no history) |
| [LV158] LV Moutarde 200 ml | 2 | Never ordered in previous analysis window (no history) |
| [LV131] LV Tartinade Potiron 190g | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:17:35.186Z*
