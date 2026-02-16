# Rapport Backtest - Client Tirtiaux Fruits srl

## Contexte

- **Client** : Tirtiaux Fruits srl (ID: 17819)
- **Commande réelle** : S39691
- **Date commande** : 2025-10-14 13:40:25
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 58
- **Tokens**: 54,301 input + 9,188 output = 63,489 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 54 produits prédits, 27 corrects |
| **Rappel** | 100.0% | 27 produits réels, 27 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.22 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 17.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 15.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 21 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (27)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV132] LV Tartinade Houmous type 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (27 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/09/2025, soit 35 jours. L'historique montre un cycle moyen d'environ 30 à 60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou le cycle est déjà dépassé par rapport aux habitudes de l'année précédente (commandes fin septembre/début octobre en 2024). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des quantités de 1u et 2u. La médiane et la tendance sur les produits à faible rotation (1-2u) imposent de maintenir le niveau minimal. En cas de doute entre 1 et 2, la règle privilégie la valeur la plus basse pour éviter le surstock. Quantité retenue : 1.

**Tokens utilises pour cette prediction:**
- **Input**: 1,009 tokens
- **Output**: 217 tokens
- **Total**: 1,226 tokens



</details>


<details>
<summary><strong>2. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 08/09/2025, soit il y a 35 jours. Le cycle moyen observé est d'environ 30 à 60 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement, d'autant plus qu'une commande avait eu lieu fin septembre l'année précédente (30/09/2024). Par principe de précaution B2B, un besoin est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité absolue avec des commandes systématiques de 1 unité. La médiane est de 1. Conformément aux règles sur les rotations faibles, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 975 tokens
- **Output**: 191 tokens
- **Total**: 1,166 tokens



</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 30 à 35 jours (07/07, 05/08, 08/09). La dernière commande datant du 08/09, soit il y a 35 jours, le seuil de réapprovisionnement de 30 jours est dépassé, confirmant un risque de rupture imminent. Concernant la quantité, l'historique récent est très stable avec une médiane de 2 unités (valeurs : 2, 2, 3, 2). Conformément aux règles de gestion B2B privilégiant la médiane et la prudence sur les faibles rotations, une commande de 2 unités est préconisée pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 1,106 tokens
- **Output**: 176 tokens
- **Total**: 1,282 tokens



</details>


<details>
<summary><strong>4. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 08/09/2025, soit 35 jours. L'historique N-1 montre une commande systématique fin septembre ou début octobre (30/09/2024). Le cycle est irrégulier mais le délai actuel dépasse le seuil de réapprovisionnement de 30 jours. Par principe de précaution B2B, un besoin est identifié pour éviter la rupture. ÉTAPE 2 : Estimation quantité. L'historique complet (récent et N-1) est d'une stabilité absolue avec des commandes unitaires de 1u. La médiane est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 986 tokens
- **Output**: 181 tokens
- **Total**: 1,167 tokens



</details>


<details>
<summary><strong>5. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 08/09/2025, soit il y a 35 jours. L'historique montre un cycle de commande variant entre 30 et 90 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (horizon 65 jours post-dernière commande). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique (récent et N-1) est extrêmement stable avec une quantité constante de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 186 tokens
- **Total**: 1,159 tokens



</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'historique montre une rotation très régulière avec une commande d'une unité environ tous les 30 à 34 jours. La dernière commande datant du 8 septembre (il y a 35 jours), le cycle habituel est atteint. Compte tenu du seuil de réapprovisionnement de 30 jours, il existe un risque de rupture imminent. En suivant la règle de la médiane sur l'historique récent (systématiquement 1u) et la consigne de maintenir les faibles rotations sans augmenter la quantité, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 132 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>7. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 05/08/2025, soit 69 jours avant la date actuelle. Bien que l'historique montre une rotation très faible et irrégulière (cycle long), le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les intervalles observés précédemment. Un risque de rupture est identifié pour l'horizon des 30 prochains jours. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et historiques, afin de couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 143 tokens
- **Total**: 1,046 tokens



</details>


<details>
<summary><strong>8. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen observé est d'environ 31 jours (intervalle entre juin/juillet et juillet/août). La dernière commande remonte au 05/08/2025, soit 69 jours avant la date actuelle. Le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Par principe de précaution B2B et pour éviter une rupture prolongée, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une régularité parfaite avec des commandes de 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 175 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>9. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/08/2025, soit 69 jours. Le cycle précédent était de 61 jours. Nous avons largement dépassé l'intervalle habituel et entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (Replenishment Threshold Days). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles sur les rotations faibles, la quantité maintenue est de 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 155 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>10. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/08/2025, soit plus de 60 jours. Le cycle précédent était de 29 jours. Le délai actuel dépasse largement le cycle habituel et l'horizon de 30 jours du seuil de réapprovisionnement. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 162 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>11. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 05/08/2025, soit plus de 68 jours. Bien que le cycle de commande soit irrégulier, l'historique N-1 montre une activité en septembre et novembre. Selon le principe de précaution B2B et le dépassement du délai habituel entre deux commandes, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à la stabilité observée sur les dernières transactions.

**Tokens utilises pour cette prediction:**
- **Input**: 1,038 tokens
- **Output**: 123 tokens
- **Total**: 1,161 tokens



</details>


<details>
<summary><strong>12. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 05/08/2025, soit plus de 60 jours. Le cycle historique moyen est d'environ 30 à 40 jours. Le délai depuis la dernière commande dépasse largement le cycle habituel et l'horizon de 30 jours (Replenishment Threshold Days), indiquant un risque de rupture imminent ou un besoin de réapprovisionnement certain. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u, 2u et 3u. La médiane des commandes récentes est de 2u. L'historique N-1 sur la même période (septembre/octobre) confirme également des volumes entre 1u et 3u. En suivant la règle de la médiane et de prudence, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,091 tokens
- **Output**: 198 tokens
- **Total**: 1,289 tokens



</details>


<details>
<summary><strong>13. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 05/08/2025, soit plus de 60 jours. Bien que la rotation soit faible et irrégulière, l'historique de l'année précédente montre des commandes récurrentes entre août et novembre (05/08, 02/09, 07/11). En application du principe de précaution B2B et face à un cycle incertain dépassant largement le délai de réapprovisionnement de 30 jours, un besoin est détecté. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à la quantité habituelle observée lors des pics d'activité passés.

**Tokens utilises pour cette prediction:**
- **Input**: 990 tokens
- **Output**: 156 tokens
- **Total**: 1,146 tokens



</details>


<details>
<summary><strong>14. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 05/08/2025, soit 69 jours. L'historique montre un cycle de commande moyen d'environ 60 à 70 jours (ex: 2024-06-24 au 2024-08-05, ou 2024-08-05 au 2024-09-30). Nous avons dépassé le cycle habituel, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold). Conformément au principe de précaution B2B et à la détection d'un besoin incertain, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante des commandes récentes et historiques (rotation très faible et régulière de 1u).

**Tokens utilises pour cette prediction:**
- **Input**: 986 tokens
- **Output**: 198 tokens
- **Total**: 1,184 tokens



</details>


<details>
<summary><strong>15. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation lente mais régulière avec un cycle moyen constaté d'environ 45 à 60 jours. La dernière commande remontant au 05/08/2025 (soit plus de 65 jours), le délai de réapprovisionnement est largement dépassé, créant un risque de rupture imminent sous 30 jours. Bien que la dernière commande fût de 2 unités, l'historique long (N-1) montre une prédominance de commandes à l'unité (médiane de 1u). En application du principe de précaution B2B et de la règle de la médiane basse pour les faibles rotations, une commande de 1 unité est nécessaire.

**Tokens utilises pour cette prediction:**
- **Input**: 1,054 tokens
- **Output**: 164 tokens
- **Total**: 1,218 tokens



</details>


<details>
<summary><strong>16. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 30 à 32 jours entre juin et août. Depuis la dernière commande du 05/08/2025, plus de 60 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin non couvert. En suivant la règle de la médiane sur l'historique récent (1, 1, 2) et le principe de précaution pour les faibles rotations, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 140 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>17. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 30 à 60 jours (32 jours entre juin et juillet, 29 jours entre juillet et août). Depuis la dernière commande du 5 août, 69 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou un besoin non couvert. En suivant la règle de la médiane des commandes récentes (2, 1, 2), la quantité recommandée est de 2 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 137 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>18. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/07/2025, soit plus de 90 jours. L'historique N-1 montre une activité régulière entre août et septembre (1u). Bien que le cycle soit lent, l'absence de commande récente couplée à l'historique de l'année précédente suggère un risque de rupture ou un besoin de réapprovisionnement imminent pour maintenir le stock sur les 30 prochains jours. Par principe de précaution B2B, le besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique montre une rotation très faible et constante de 1u (médiane). Conformément aux règles sur les rotations faibles, on maintient la quantité minimale de 1u sans augmenter pour éviter le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 975 tokens
- **Output**: 188 tokens
- **Total**: 1,163 tokens



</details>


<details>
<summary><strong>19. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière (environ une commande tous les 3 à 4 mois). La dernière commande remonte au 07 juillet 2025, soit il y a 98 jours. En comparant avec l'historique N-1 (novembre 2023), le cycle moyen est largement atteint ou dépassé, ce qui induit un risque de rupture imminent selon le principe de précaution B2B. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 133 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>20. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande enregistrée date du 07/07/2025, soit plus de 90 jours avant la date actuelle (13/10/2025). Bien que le cycle historique soit irrégulier, l'absence de commande récente combinée à l'historique de l'année précédente (commandes en septembre/novembre) indique un risque de rupture imminent ou un besoin de réapprovisionnement pour la saison actuelle. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. Les commandes récentes affichent 2u et 3u. L'historique N-1 sur la même période montre des commandes de 1u à 2u. La médiane des commandes récentes est de 2.5u. En cas de doute et pour éviter le surstockage sur un produit à rotation modérée, la valeur basse de la médiane arrondie, soit 2u, est privilégiée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,022 tokens
- **Output**: 229 tokens
- **Total**: 1,251 tokens



</details>


<details>
<summary><strong>21. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 07/07/2025, soit environ 98 jours. L'historique montre un cycle de commande irrégulier mais récurrent (environ tous les 3 à 4 mois). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une nouvelle commande est probable pour maintenir le stock. En suivant le principe de précaution B2B et la règle de la médiane sur un produit à faible rotation (1-2u), une quantité de 1 unité est préconisée pour couvrir le besoin sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 140 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>22. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : La dernière commande remonte au 07/07/2025, soit plus de 90 jours sans activité. L'historique N-1 montre une activité régulière en septembre, octobre et novembre (cycle d'environ 30 jours). Le délai depuis la dernière commande dépasse largement le cycle habituel, créant un risque de rupture ou un besoin de réapprovisionnement pour la saison actuelle. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent (2025) montre des volumes de 2u et 3u. L'historique N-1 sur la même période (septembre/novembre) oscille entre 2u et 3u. En suivant la règle de la médiane et le principe de précaution (choisir la valeur la plus basse en cas de doute), une quantité de 2 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,043 tokens
- **Output**: 215 tokens
- **Total**: 1,258 tokens



</details>


<details>
<summary><strong>23. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte à 98 jours (07/07/2025). Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle précédent (32 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent montre une quantité constante de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 141 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>24. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 07/07/2025, soit plus de 90 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle précédent (32 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin de réapprovisionnement est détecté pour éviter une rupture prolongée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une régularité stricte de 1 unité par commande. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane historique.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 170 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>25. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte à 124 jours (11 juin 2025). Bien que la rotation soit très faible (1 unité), l'absence de commandes récentes sur une période aussi longue crée une incertitude sur le cycle de réapprovisionnement. En application du principe de précaution B2B (Étape 1), un besoin est détecté pour éviter une rupture prolongée si un cycle saisonnier ou ponctuel redémarre. Pour la quantité (Étape 2), la médiane historique étant de 1 unité, ce volume minimal est maintenu conformément à la règle sur les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 139 tokens
- **Total**: 1,012 tokens



</details>


<details>
<summary><strong>26. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/06/2025, soit plus de 130 jours. Bien que la rotation soit très faible et irrégulière, l'historique N-1 montre une commande à la même période (30/09/2024). Par principe de précaution B2B et pour éviter une rupture sur un produit à cycle long, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique complet (récent et N-1) est constant à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 173 tokens
- **Total**: 1,093 tokens



</details>


<details>
<summary><strong>27. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Aucune commande récente n'est enregistrée, mais l'historique N-1 montre une activité saisonnière sur cette période (septembre/octobre). Le délai depuis la dernière commande théorique dépasse largement le cycle habituel. En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique montre une rotation faible et stable (1u à 2u). La médiane des commandes passées est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1u sans surestimer.

**Tokens utilises pour cette prediction:**
- **Input**: 941 tokens
- **Output**: 168 tokens
- **Total**: 1,109 tokens



</details>




### Donnees d'Input LLM (27 produits)


<details>
<summary><strong>1. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u
- 2025-07-07 09:19:24: 2u
- 2025-06-11 07:01:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:29:12: 1u
- 2024-09-02 13:19:45: 1u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 1u
- 2024-04-02 08:47:10: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF028] JF VINAIGRET CAESAR WECK 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u
- 2025-08-05 07:24:21: 1u
- 2025-06-05 09:13:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:29:12: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-04-29 07:16:03: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 09:32:05: 2u
- 2025-08-05 07:24:21: 2u
- 2025-07-07 09:19:24: 3u
- 2025-06-11 07:01:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:29:12: 3u
- 2024-08-05 06:29:22: 3u
- 2024-06-24 06:37:56: 2u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 2u
- 2024-04-02 08:47:10: 3u
- 2024-02-29 08:57:59: 2u
- 2024-02-02 07:19:09: 1u
- 2024-01-09 12:58:28: 2u
- 2023-12-05 08:08:03: 1u
- 2023-11-07 08:22:06: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u
- 2025-06-11 07:01:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:29:12: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-02-02 07:19:09: 1u
- 2023-12-05 08:08:03: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u
- 2025-06-11 07:01:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-05 06:29:22: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 1u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-08 09:32:05: 1u
- 2025-08-05 07:24:21: 1u
- 2025-07-07 09:19:24: 1u
- 2025-06-05 09:13:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 06:37:56: 1u
- 2024-04-02 08:47:10: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u
- 2025-07-07 09:19:24: 1u
- 2025-06-05 09:13:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u
- 2025-06-05 09:13:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u
- 2025-07-07 09:19:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u
- 2025-06-05 09:13:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:29:12: 2u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 3u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-02 08:47:10: 3u
- 2024-02-29 08:57:59: 3u
- 2024-01-09 12:58:28: 3u
- 2023-11-07 08:22:06: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u
- 2025-07-07 09:19:24: 2u
- 2025-06-05 09:13:07: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:29:12: 3u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 3u
- 2024-05-31 07:24:37: 1u
- 2024-04-02 08:47:10: 2u
- 2024-02-29 08:57:59: 1u
- 2024-02-02 07:19:09: 1u
- 2024-01-09 12:58:28: 2u
- 2023-12-05 08:08:03: 3u
- 2023-11-07 08:22:06: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>13. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-05-31 07:24:37: 2u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 1u
- 2023-12-05 08:08:03: 2u
- 2023-11-07 08:22:06: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:29:12: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-04-29 07:16:03: 1u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 1u
- 2023-11-07 08:22:06: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>15. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u
- 2025-06-11 07:01:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:29:12: 1u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 1u
- 2024-04-02 08:47:10: 1u
- 2024-02-29 08:57:59: 1u
- 2024-01-09 12:58:28: 2u
- 2023-11-07 08:22:06: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>16. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:24:21: 1u
- 2025-07-07 09:19:24: 1u
- 2025-06-05 09:13:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>17. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 07:24:21: 2u
- 2025-07-07 09:19:24: 1u
- 2025-06-05 09:13:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>18. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-07 09:19:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-05-31 07:24:37: 2u
- 2024-04-29 07:16:03: 1u
- 2024-04-02 08:47:10: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>19. [LV143] LV Mayonnaise (huile 70%) 200 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-07 09:19:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-31 07:24:37: 1u
- 2024-02-02 07:19:09: 1u
- 2023-11-07 08:22:06: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>20. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-07 09:19:24: 3u
- 2025-06-11 07:01:09: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:29:12: 1u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-05-31 07:24:37: 1u
- 2024-04-29 07:16:03: 2u
- 2024-02-29 08:57:59: 3u
- 2024-01-09 12:58:28: 2u
- 2023-11-07 08:22:06: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>21. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-07 09:19:24: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:19:45: 1u
- 2024-05-31 07:24:37: 2u
- 2024-02-29 08:57:59: 1u
- 2023-11-07 08:22:06: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>22. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-07 09:19:24: 3u
- 2025-06-05 09:13:07: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:29:12: 2u
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 3u
- 2024-04-29 07:16:03: 2u
- 2024-04-02 08:47:10: 3u
- 2024-02-29 08:57:59: 4u
- 2024-01-09 12:58:28: 3u
- 2023-12-05 08:08:03: 3u
- 2023-11-07 08:22:06: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>23. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-07 09:19:24: 1u
- 2025-06-05 09:13:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>24. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-07 09:19:24: 1u
- 2025-06-05 09:13:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>25. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 07:01:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>26. [JF014] JF SAUCE BEARNAISE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-05 09:13:07: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:29:12: 1u
- 2024-08-05 06:29:22: 1u
- 2024-04-02 08:47:10: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>27. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-02 13:19:45: 1u
- 2024-08-05 06:29:22: 1u
- 2024-06-24 06:37:56: 1u
- 2024-02-29 08:57:59: 2u
- 2023-12-05 08:08:03: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (27)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [LV156] LV Sauce barbecue 263 ml bio | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | Predicted 3u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 1 | Predicted 1u but not ordered |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Predicted 1u but not ordered |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Predicted 2u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 2 | Predicted 2u but not ordered |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Predicted 1u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |
| [CB001] CB Apple juice 25cl | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | Predicted 1u but not ordered |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF021] JF PICKLES 350 ML | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:58.772Z*
