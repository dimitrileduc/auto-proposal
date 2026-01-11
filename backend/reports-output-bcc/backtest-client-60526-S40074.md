# Rapport Backtest - Client ROB - THE GOURMETS' MARKET

## Contexte

- **Client** : ROB - THE GOURMETS' MARKET (ID: 60526)
- **Commande réelle** : S40074
- **Date commande** : 2025-11-03 12:12:50
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 40
- **Tokens**: 35,345 input + 6,045 output = 41,390 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 53.1% | 32 produits prédits, 17 corrects |
| **Rappel** | 100.0% | 17 produits réels, 17 détectés |
| **F1-Score** | 69.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.06 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 22.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 20.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -12.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (17)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 6 | 3.0 | 50.0% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RISH01] RISH kombucha BIO - original 330ml | 10 | 10 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RISH02] RISH kombucha BIO - hibiscus 330ml | 10 | 10 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 6 | 15 | 9.0 | 60.0% | partial | Non | Non | LLM |
| [RISH05] RISH kombucha BIO - rose 750ml | 6 | 6 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RISH04] RISH kombucha BIO - smash basil 330ml | 10 | 10 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges  | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [LEA06] LEAMO maté 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (17 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 septembre, soit 41 jours. Le cycle moyen observé est d'environ 45 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous dépassons largement les 70% du cycle moyen. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 4u, 1u et 2u. La médiane de ces commandes est de 2u. Conformément à la règle de précaution et de maintien des faibles rotations, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 150 tokens
- **Total**: 1,068 tokens



</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 4u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 6u
- **Erreur LLM**: 3u (50.0%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles d'environ 45 à 60 jours (47 jours entre juin et août, 42 jours entre août et septembre). Depuis la dernière commande du 22 septembre, 41 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons la fin du cycle habituel. En suivant la règle de la médiane des commandes récentes (3, 4, 3), la quantité recommandée est de 3 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 134 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 45 à 70 jours (47 jours entre juin et août, 42 jours entre août et septembre). Au 2 novembre, 41 jours se sont écoulés depuis la dernière commande du 22 septembre. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons la fin du cycle habituel. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane et au mode des commandes récentes (3u, 2u, 3u), assurant une couverture stable sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 160 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande d'environ 42 jours (entre le 11/08 et le 22/09). Au 02/11, 41 jours se sont écoulés depuis la dernière commande, ce qui dépasse largement le seuil de 70% du cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold). Conformément à la règle de la médiane sur les quantités constantes observées (3u et 3u), une commande de 3 unités est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 146 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 septembre, soit 41 jours. Le cycle précédent était de 42 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré. En application du principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre une régularité parfaite avec des commandes de 2 unités. La médiane est de 2. Conformément à la règle sur les rotations faibles, on maintient cette quantité sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 141 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>6. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 4u (Réel: 2u)</summary>

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
L'analyse du cycle montre une commande le 11/08 puis le 22/09, soit un intervalle de 42 jours. Au 02/11, 41 jours se sont écoulés depuis la dernière commande. Nous atteignons 97% du cycle moyen, ce qui dépasse largement le seuil de risque de 70%. Un besoin est donc détecté pour couvrir les 30 prochains jours. Pour la quantité, l'historique récent présente des valeurs de 2u et 4u. Conformément à la règle de prudence privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 157 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>7. [RISH01] RISH kombucha BIO - original 330ml</strong> - LLM: 10u vs Médiane: 9u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 9u
- **Reel commande**: 10u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (10.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. L'intervalle entre les deux dernières commandes est de 98 jours. La dernière commande date du 22 septembre, soit il y a 41 jours. Bien que nous soyons à environ 42% du cycle précédent, le cycle est irrégulier (seulement deux points de données). En B2B, selon le principe de précaution et le risque d'incertitude sur la rotation, un besoin est identifié pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 20u et 10u. En cas de doute ou de tendance incertaine, la règle impose de choisir la valeur la plus basse pour éviter le surstockage. La quantité retenue est donc de 10u.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 193 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>8. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM: 10u vs Médiane: 11u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 11u
- **Reel commande**: 10u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (10.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 septembre, soit 41 jours. Le cycle précédent était de 98 jours. Bien que nous ne soyons pas encore au terme du cycle moyen, le délai de 41 jours combiné au seuil de réapprovisionnement de 30 jours crée une incertitude sur la couverture du stock jusqu'en décembre. En application du principe de précaution B2B (risque de rupture), une commande est déclenchée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre deux commandes (10u et 20u). Conformément à la règle de privilégier la médiane et, en cas de doute, de choisir la valeur la plus basse pour éviter le surstockage, la quantité retenue est de 10 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 192 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>9. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM: 6u vs Médiane: 12u (Réel: 15u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 12u
- **Reel commande**: 15u
- **Erreur LLM**: 9u (60.0%)
- **Erreur Mediane**: 3u (20.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 septembre, soit 41 jours. Bien que l'historique soit limité, l'intervalle entre les deux commandes précédentes était de 98 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque (70% du cycle estimé). En B2B, le principe de précaution s'applique face à l'incertitude du cycle. ÉTAPE 2 : Estimation de la quantité. Les commandes passées sont de 20u et 6u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute ou de tendance incertaine pour éviter le surstockage, la quantité retenue est de 6u.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 183 tokens
- **Total**: 1,076 tokens



</details>


<details>
<summary><strong>10. [RISH05] RISH kombucha BIO - rose 750ml</strong> - LLM: 6u vs Médiane: 8u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 6u
- **Baseline calculee**: 6u
- **Mediane historique**: 8u
- **Reel commande**: 6u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 6u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le cycle observé entre les deux dernières commandes est de 98 jours. À la date actuelle (02/11/2025), 41 jours se sont écoulés depuis la dernière commande du 22/09/2025. Bien que nous ne soyons pas encore à 70% du cycle moyen, le seuil de réapprovisionnement de 30 jours nous place dans une fenêtre critique où une rupture pourrait survenir avant la prochaine analyse. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est prévue. ÉTAPE 2 : L'historique récent montre une stabilité parfaite avec deux commandes de 6 unités. La médiane est de 6. Conformément à la règle de maintien des quantités pour les rotations régulières, la quantité retenue est de 6 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 197 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>11. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM: 10u vs Médiane: 11u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 11u
- **Reel commande**: 10u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (10.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'intervalle entre les deux dernières commandes est de 98 jours. La dernière commande date du 22 septembre, soit 41 jours avant la date actuelle. Bien que nous n'ayons pas encore atteint 70% du cycle précédent, le cycle est irrégulier et difficile à déterminer avec seulement deux points de données. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est prévue. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 20u et 10u. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute ou de tendance à la baisse, la quantité retenue est de 10u.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 194 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>12. [PAO01] PAOLA cola verre 250ml - le cola des Belges</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 22 septembre, soit 41 jours. Bien que la rotation soit faible, le délai entre les deux dernières commandes était de 89 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque (70% du cycle moyen atteint ou dépassé). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 168 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>13. [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre un cycle de commande d'environ 90 jours (juin à septembre). Depuis la dernière commande du 22 septembre, 41 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons l'horizon de 71 jours, ce qui représente plus de 70% du cycle moyen estimé. Par principe de précaution B2B et pour éviter une rupture sur ce produit à rotation lente, un besoin est détecté. ÉTAPE 2 : Estimation quantité. Les deux dernières commandes sont identiques (1u). La médiane est de 1u. On maintient cette quantité constante conformément à la règle sur les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 170 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>14. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

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
La dernière commande remonte au 22 septembre, soit 41 jours avant la date actuelle. Le cycle moyen entre les commandes précédentes est d'environ 45 jours (47 jours entre juin et août, 42 jours entre août et septembre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous avons déjà atteint 91% du cycle habituel. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est la médiane des commandes récentes (3, 4, 6), soit 4 unités, ce qui permet de maintenir le stock sans surestimer malgré le pic ponctuel de 6 unités en septembre.

**Tokens utilises pour cette prediction:**
- **Input**: 912 tokens
- **Output**: 161 tokens
- **Total**: 1,073 tokens



</details>


<details>
<summary><strong>15. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 2u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 11 août, soit 83 jours. Bien que le cycle entre les deux premières commandes soit de 47 jours, le délai actuel dépasse largement ce cycle moyen. En application du principe de précaution B2B (doute sur le cycle = risque de rupture), un réapprovisionnement est nécessaire pour couvrir les 30 prochains jours. ÉTAPE 2 : L'historique récent montre des commandes de 2u et 4u. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 899 tokens
- **Output**: 154 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>16. [LEA06] LEAMO maté 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 août 2025, soit 83 jours avant la date actuelle. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée une incertitude sur le stock résiduel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane de l'historique disponible.

**Tokens utilises pour cette prediction:**
- **Input**: 868 tokens
- **Output**: 181 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>17. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 juin 2025, soit plus de 120 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent présente une commande unique de 4 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité de la dernière commande est maintenue pour assurer le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 879 tokens
- **Output**: 162 tokens
- **Total**: 1,041 tokens



</details>




### Donnees d'Input LLM (17 produits)


<details>
<summary><strong>1. [MATE02] MATE MATE thé glacé bio pétillant au yerba maté canette 250ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 07:01:50: 2u
- 2025-08-11 10:26:33: 1u
- 2025-06-25 07:37:51: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 07:01:50: 3u
- 2025-08-11 10:26:33: 4u
- 2025-06-25 07:37:51: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 07:01:50: 3u
- 2025-08-11 10:26:33: 2u
- 2025-06-25 07:37:51: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 07:01:50: 3u
- 2025-08-11 10:26:33: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 07:01:50: 2u
- 2025-08-11 10:26:33: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 07:01:50: 4u
- 2025-08-11 10:26:33: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [RISH01] RISH kombucha BIO - original 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 07:01:50: 10u
- 2025-06-16 07:26:08: 20u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>8. [RISH02] RISH kombucha BIO - hibiscus 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 07:01:50: 10u
- 2025-06-16 07:26:08: 20u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>9. [RISH03] RISH kombucha BIO - gingembre 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 07:01:50: 6u
- 2025-06-16 07:26:08: 20u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 15u

</details>


<details>
<summary><strong>10. [RISH05] RISH kombucha BIO - rose 750ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 07:01:50: 6u
- 2025-06-16 07:26:08: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 6u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>11. [RISH04] RISH kombucha BIO - smash basil 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 07:01:50: 10u
- 2025-06-16 07:26:08: 20u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>12. [PAO01] PAOLA cola verre 250ml - le cola des Belges</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 07:01:50: 2u
- 2025-06-25 07:37:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [PAO02] PAOLA cola ZERO verre 250ml - le cola des Belges </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 07:01:50: 1u
- 2025-06-25 07:37:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [PAO04] PAOLA cola ZERO canette 330ml - le cola des Belges </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 07:01:50: 6u
- 2025-08-11 10:26:33: 3u
- 2025-06-25 07:37:51: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>15. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 10:26:33: 2u
- 2025-06-25 07:37:51: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>16. [LEA06] LEAMO maté 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-11 10:26:33: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-25 07:37:51: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>




---

## False Positives (15)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 3 | Predicted 3u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 3 | Predicted 3u but not ordered |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 2 | Predicted 2u but not ordered |
| [LEA09] LEAMO cola bio 330ml | 3 | Predicted 3u but not ordered |
| [LEA05] LEAMO organic lemon lemonade 330 ml | 2 | Predicted 2u but not ordered |
| [LEA07] LEAMO orangeade bio 330ml | 1 | Predicted 1u but not ordered |
| [ALO33] ORGANIC CRUNCH aloe vera drink citron-sureau 500ml | 3 | Predicted 3u but not ordered |
| [TEN02] TENSAÏ TEA  thé noir bio au gingembre 330ml | 2 | Predicted 2u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 3 | Predicted 3u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 3 | Predicted 3u but not ordered |
| [ALO30] ORGANIC CRUNCH aloe vera drink original 500ml | 3 | Predicted 3u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 2 | Predicted 2u but not ordered |
| [ALO32] ORGANIC CRUNCH aloe vera drink pomme-framboise 500ml | 2 | Predicted 2u but not ordered |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 4 | Predicted 4u but not ordered |
| [RISH06] RISH kombucha BIO - tagette 750ml | 8 | Predicted 8u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:07:47.311Z*
