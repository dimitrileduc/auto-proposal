# Rapport Backtest - Client Energy Services Management - Epicerie Uhoda Damré

## Contexte

- **Client** : Energy Services Management - Epicerie Uhoda Damré (ID: 57352)
- **Commande réelle** : S39779
- **Date commande** : 2025-10-17 06:18:51
- **Date cutoff système** : 2025-10-16 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 35
- **Tokens**: 31,732 input + 5,496 output = 37,228 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 54.3% | 35 produits prédits, 19 corrects |
| **Rappel** | 100.0% | 19 produits réels, 19 détectés |
| **F1-Score** | 70.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.32 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 27.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 26.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 9.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 13 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (19)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV132] LV Tartinade Houmous type 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (19 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 11 septembre 2025, soit il y a 35 jours. L'historique montre un cycle de commande d'environ 30 à 60 jours (août-septembre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent selon le cycle de rotation. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes oscillent entre 1u et 2u. La médiane des commandes récentes (1, 1, 2) est de 1u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 197 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION) : La dernière commande date du 11 septembre 2025, soit il y a 35 jours. L'historique montre un cycle moyen d'environ 30 à 40 jours entre les commandes récentes. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent selon le cycle habituel. ÉTAPE 2 (QUANTITÉ) : L'historique récent présente des quantités de 1u, 3u, 1u, 1u. La médiane de ces commandes est de 1u. Conformément à la règle de précaution B2B et à la gestion des rotations faibles, la quantité retenue est de 1u pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 181 tokens
- **Total**: 1,134 tokens



</details>


<details>
<summary><strong>3. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 11 septembre 2025, soit il y a 35 jours. L'historique montre un cycle de réapprovisionnement d'environ 30 à 45 jours (juin à septembre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est extrêmement stable avec des commandes systématiques de 2 unités. La médiane est de 2. Application du principe de maintien de la rotation régulière.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 145 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'historique montre un cycle de commande d'environ 65 jours (entre juillet et septembre). Au 16 octobre, 35 jours se sont écoulés depuis la dernière commande. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (35 + 30 = 65 jours, correspondant au cycle identifié). En application du principe de précaution B2B et face à une rotation faible mais régulière, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane et à la constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 139 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>5. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 11 septembre, soit il y a 35 jours. Bien que l'historique soit limité, le délai entre les deux commandes précédentes était de 87 jours. Cependant, avec un seuil de réapprovisionnement de 30 jours et une rotation irrégulière, le principe de précaution B2B s'applique pour éviter une rupture potentielle. ÉTAPE 2 : Estimation de la quantité. L'historique montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 161 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande moyen d'environ 38 jours. La dernière commande datant du 11 septembre (il y a 35 jours), nous avons dépassé 70% du cycle habituel, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En suivant le principe de précaution B2B, un réapprovisionnement est nécessaire. Pour la quantité, la médiane des commandes récentes se situe entre 1u et 2u ; conformément à la règle de privilégier la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 165 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>7. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 11 septembre, soit il y a 35 jours. Le cycle moyen observé est d'environ 30 à 60 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (35 jours écoulés + 30 jours de seuil = 65 jours, dépassant le cycle habituel). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes systématiques de 1 unité. La médiane est de 1. Conformément aux règles de rotation faible, on maintient la quantité habituelle sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 177 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>8. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 60 jours (dernière commande il y a 35 jours). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent selon le principe de précaution B2B (70% du cycle moyen atteint). La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante des commandes récentes, ce produit présentant une rotation faible mais stable.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 112 tokens
- **Total**: 1,023 tokens



</details>


<details>
<summary><strong>9. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 11 septembre 2025, soit 35 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le cycle de commande est largement entamé, créant un risque de rupture imminent. En application du principe de précaution B2B, un besoin est détecté. Pour la quantité, l'historique récent montre une commande unique de 2 unités ; la médiane est donc de 2. Conformément aux règles de gestion des rotations faibles, on maintient ce volume sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 882 tokens
- **Output**: 131 tokens
- **Total**: 1,013 tokens



</details>


<details>
<summary><strong>10. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande très régulier d'environ 30 à 34 jours (11 août, 11 septembre). La dernière commande datant du 11 septembre, soit il y a 35 jours, nous avons dépassé le cycle habituel. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En suivant la règle de la médiane des quantités récentes (1, 1, 2), la quantité recommandée est de 1 unité pour maintenir le stock sans surstockage sur ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 139 tokens
- **Total**: 1,050 tokens



</details>


<details>
<summary><strong>11. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 septembre, soit 35 jours. Le cycle précédent était de 65 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (35 + 30 = 65 jours). Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 3u et 1u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 157 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>12. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 septembre, soit 35 jours. Le cycle précédent était de 65 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (35 + 30 = 65 jours). Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des volumes très faibles (1u et 2u). La médiane est de 1,5u. Conformément à la règle des rotations faibles et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 897 tokens
- **Output**: 169 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>13. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 11 août, soit 66 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle précédent (34 jours). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 1u et 3u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 896 tokens
- **Output**: 155 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>14. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 35 à 45 jours. La dernière commande datant du 11 août 2025 (soit plus de 60 jours), le produit est en rupture probable ou le cycle est dépassé. Selon le principe de précaution B2B et le seuil de réapprovisionnement de 30 jours, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane des commandes les plus récentes (1u, 1u, 2u), afin de respecter la tendance basse de consommation constatée sur les derniers mois.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 143 tokens
- **Total**: 1,079 tokens



</details>


<details>
<summary><strong>15. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/07/2025, soit plus de 100 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et pour éviter une rupture de stock prolongée sur un produit actif, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 159 tokens
- **Total**: 1,033 tokens



</details>


<details>
<summary><strong>16. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 16 juin 2025, soit 122 jours sans activité. L'historique de l'année précédente montre des commandes en juillet et septembre, suggérant un besoin de réapprovisionnement pour la période automnale actuelle. Bien que le cycle soit irrégulier, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 2 unités, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 121 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>17. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte à 122 jours (16 juin). Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle habituel observé entre mai et juin (20 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent montre des commandes unitaires (1u). La médiane des commandes récentes est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 148 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>18. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 juin 2025, soit 122 jours sans activité. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement en B2B. En application du principe de précaution (incertitude sur le cycle = prévoir commande), un besoin est identifié pour éviter une rupture prolongée si le produit est toujours référencé. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité historique sans l'augmenter. La médiane et la dernière valeur connue convergent vers 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 173 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>19. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 16 juin 2025, soit 122 jours sans activité. Bien que la rotation soit très faible, le principe de précaution B2B s'applique face à une absence de cycle défini. Un risque de rupture est considéré par défaut pour maintenir le référencement en rayon. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément aux règles de rotation faible (1-2u) et à l'utilisation de la médiane historique, la quantité de 2 unités est maintenue pour éviter tout surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 150 tokens
- **Total**: 1,024 tokens



</details>




### Donnees d'Input LLM (19 produits)


<details>
<summary><strong>1. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 11:16:42: 1u
- 2025-08-11 12:23:44: 1u
- 2025-06-16 09:02:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:10:50: 2u
- 2024-07-31 09:58:08: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 11:16:42: 1u
- 2025-08-11 12:23:44: 3u
- 2025-06-16 09:02:01: 1u
- 2025-05-27 09:02:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:10:50: 2u
- 2024-07-31 09:58:08: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 11:16:42: 2u
- 2025-06-16 09:02:01: 2u
- 2025-05-27 09:02:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:10:50: 2u
- 2024-07-31 09:58:08: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 11:16:42: 1u
- 2025-07-08 06:20:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 11:16:42: 2u
- 2025-06-16 09:02:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 11:16:42: 1u
- 2025-08-11 12:23:44: 2u
- 2025-06-16 09:02:01: 1u
- 2025-05-27 09:02:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 11:16:42: 1u
- 2025-08-11 12:23:44: 1u
- 2025-06-16 09:02:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 11:16:42: 1u
- 2025-08-11 12:23:44: 1u
- 2025-06-16 09:02:01: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 11:16:42: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>10. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 11:16:42: 1u
- 2025-08-11 12:23:44: 1u
- 2025-07-08 06:20:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 11:16:42: 1u
- 2025-07-08 06:20:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 11:16:42: 1u
- 2025-07-08 06:20:35: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 12:23:44: 1u
- 2025-07-08 06:20:35: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 12:23:44: 1u
- 2025-07-08 06:20:35: 1u
- 2025-05-27 09:02:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:10:50: 2u
- 2024-07-31 09:58:08: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>15. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-08 06:20:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>16. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 09:02:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:10:50: 2u
- 2024-07-31 09:58:08: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 09:02:01: 1u
- 2025-05-27 09:02:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-31 09:58:08: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 09:02:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 09:02:01: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (16)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Predicted 1u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 2 | Predicted 2u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Predicted 1u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Predicted 1u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 2 | Predicted 2u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Predicted 1u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Predicted 1u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 1 | Predicted 1u but not ordered |
| [OCC01] OCCHIOLINO huile d'olive extra vierge 500ml | 1 | Predicted 1u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 3 | Predicted 3u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Predicted 2u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | Predicted 1u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:29.986Z*
