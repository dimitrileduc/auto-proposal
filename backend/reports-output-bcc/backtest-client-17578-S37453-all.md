# Rapport Backtest - Client l'épicerie d'Augustin

## Contexte

- **Client** : l'épicerie d'Augustin (ID: 17578)
- **Commande réelle** : S37453
- **Date commande** : 2025-06-16 08:45:06
- **Date cutoff système** : 2025-06-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 40
- **Tokens**: 37,210 input + 5,994 output = 43,204 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 35.0% | 40 produits prédits, 14 corrects |
| **Rappel** | 100.0% | 14 produits réels, 14 détectés |
| **F1-Score** | 51.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.29 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 28.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 28.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 28 jours (intervalles de 23, 34 et 24 jours). La dernière commande datant du 25 avril, soit il y a 51 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou une vente manquée. En suivant la règle de la médiane sur les commandes récentes (1u, 1u, 2u, 1u), la quantité recommandée est de 1 unité, ce qui correspond également au volume de la même période l'année précédente (avril 2024).

**Tokens utilises pour cette prediction:**
- **Input**: 1,038 tokens
- **Output**: 163 tokens
- **Total**: 1,201 tokens



</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 25 avril 2025, soit il y a 51 jours. Le cycle moyen récent est d'environ 40-60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite à 1 unité par commande (médiane = 1). Bien que l'année précédente affichait des commandes de 2 unités, la tendance actuelle est à la baisse et stabilisée à 1. En respectant la règle de la médiane et de la prudence sur les faibles rotations, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 1,006 tokens
- **Output**: 173 tokens
- **Total**: 1,179 tokens



</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une rotation lente mais régulière avec un intervalle moyen d'environ 60 à 80 jours. La dernière commande datant du 25 avril 2025 (soit 51 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours place le produit dans une zone de risque de rupture imminente. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques et au volume de la dernière commande, afin de couvrir le prochain cycle sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 144 tokens
- **Total**: 1,115 tokens



</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 25 avril 2025, soit 51 jours avant la date actuelle. L'historique montre un cycle de commande moyen d'environ 45 à 60 jours (ex: fév-avr 2025, fév-avr 2024). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous dépassons le cycle habituel. En suivant la règle de précaution B2B et en analysant la médiane des commandes récentes (2u, 1u, 2u), la quantité recommandée est de 2 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,004 tokens
- **Output**: 156 tokens
- **Total**: 1,160 tokens



</details>


<details>
<summary><strong>5. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 25 avril 2025, soit 51 jours avant la date actuelle. L'historique récent montre un cycle de commande variant entre 24 et 57 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré selon le cycle haut. En application du principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte des commandes récentes (1u, 1u, 1u), malgré des volumes légèrement supérieurs l'année précédente.

**Tokens utilises pour cette prediction:**
- **Input**: 952 tokens
- **Output**: 142 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>6. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 30 à 45 jours. La dernière commande remontant au 25 avril 2025 (soit plus de 50 jours), le délai de réapprovisionnement est largement dépassé par rapport à la rotation habituelle. Il existe donc un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de la médiane sur l'historique récent (2u, 1u, 2u, 1u), la quantité préconisée est de 2 unités pour couvrir le besoin tout en restant prudent sur le volume de stockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,041 tokens
- **Output**: 153 tokens
- **Total**: 1,194 tokens



</details>


<details>
<summary><strong>7. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 avril, soit 51 jours. Le cycle moyen observé est d'environ 45-50 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. La médiane des commandes récentes et de l'année précédente se situe à 2u. Conformément à la règle de maintien des rotations faibles, la quantité de 2u est retenue pour couvrir la période sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 1,007 tokens
- **Output**: 165 tokens
- **Total**: 1,172 tokens



</details>


<details>
<summary><strong>8. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 avril, soit 51 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car le cycle de rotation, bien que faible, dépasse largement le délai de précaution. En l'absence d'historique long, le principe de précaution B2B s'applique. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans augmenter pour éviter le surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 155 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>9. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 25 avril, soit 51 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré pour ce type de produit à rotation lente. En l'absence d'un cycle historique clair, le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 157 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>10. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande historique montre un intervalle moyen d'environ 50 à 60 jours. La dernière commande remonte au 25 avril 2025, soit 51 jours avant la date actuelle. Nous avons dépassé 70% du cycle habituel, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). L'historique est extrêmement stable avec une quantité constante de 1 unité par commande. En suivant la règle de la médiane et de la rotation régulière, une commande de 1 unité est nécessaire pour couvrir le prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 993 tokens
- **Output**: 138 tokens
- **Total**: 1,131 tokens



</details>


<details>
<summary><strong>11. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'historique récent montre un cycle de commande régulier d'environ 35 à 40 jours (27/02, 02/04, 25/04). Depuis la dernière commande du 25 avril, 51 jours se sont écoulés, ce qui dépasse largement le cycle habituel. Bien que le seuil de réapprovisionnement soit de 30 jours, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée, d'autant plus que le cycle semble avoir été sauté. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 151 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>12. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/04/2025, soit 74 jours. Bien que la rotation soit très faible, l'historique montre des commandes espacées (environ tous les 2 à 5 mois). Dans un contexte B2B, le délai depuis la dernière commande suggère un risque de rupture imminent ou un besoin de réassort pour maintenir la présence en rayon sur l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique est constant avec des commandes unitaires (1u). La médiane des commandes récentes et passées est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité sans augmenter le stock inutilement.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 182 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>13. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/04/2025, soit plus de 70 jours. L'historique N-1 montre une activité régulière en mars/avril. Bien que le cycle soit lent, le délai depuis la dernière commande dépasse largement la fréquence habituelle, créant un risque de rupture imminent sous 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une consommation constante de 1 unité par commande (médiane = 1). Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 974 tokens
- **Output**: 154 tokens
- **Total**: 1,128 tokens



</details>


<details>
<summary><strong>14. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre une rotation régulière mais lente avec un cycle de commande moyen d'environ 30 à 35 jours (février à avril). La dernière commande datant du 02 avril 2025, le délai écoulé (74 jours) dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, signalant un besoin imminent ou une rupture de stock. En suivant la règle de précaution B2B et en se basant sur la médiane des commandes récentes qui est de 1 unité, une commande de 1 unité est préconisée pour maintenir le stock sans surstocker ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 986 tokens
- **Output**: 156 tokens
- **Total**: 1,142 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-25 06:22:35: 1u
- 2025-04-02 07:22:23: 1u
- 2025-02-27 07:12:44: 2u
- 2025-02-03 10:54:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-15 12:01:43: 1u
- 2024-03-19 11:45:01: 2u
- 2024-02-08 09:03:41: 3u
- 2023-12-14 07:15:51: 1u
- 2023-11-14 09:11:30: 4u
- 2023-10-06 06:49:44: 2u
- 2023-08-28 09:08:54: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-25 06:22:35: 1u
- 2025-04-02 07:22:23: 1u
- 2025-02-03 10:54:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-17 06:54:55: 2u
- 2024-04-15 12:01:43: 1u
- 2024-02-08 09:03:41: 2u
- 2023-12-14 07:15:51: 2u
- 2023-11-14 09:11:30: 2u
- 2023-08-28 09:08:54: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-25 06:22:35: 2u
- 2025-02-03 10:54:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-17 06:54:55: 1u
- 2024-03-19 11:45:01: 2u
- 2023-12-14 07:15:51: 2u
- 2023-11-14 09:11:30: 1u
- 2023-10-06 06:49:44: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-25 06:22:35: 2u
- 2025-04-02 07:22:23: 1u
- 2025-02-03 10:54:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-15 12:01:43: 1u
- 2024-03-19 11:45:01: 2u
- 2024-02-08 09:03:41: 2u
- 2023-12-14 07:15:51: 2u
- 2023-11-14 09:11:30: 1u
- 2023-10-06 06:49:44: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV136] LV Tartinade Betterave 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-25 06:22:35: 1u
- 2025-02-27 07:12:44: 1u
- 2025-02-03 10:54:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-08 09:03:41: 2u
- 2023-12-14 07:15:51: 2u
- 2023-08-28 09:08:54: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-25 06:22:35: 2u
- 2025-04-02 07:22:23: 1u
- 2025-02-27 07:12:44: 2u
- 2025-02-03 10:54:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-15 12:01:43: 2u
- 2024-03-19 11:45:01: 2u
- 2024-02-08 09:03:41: 1u
- 2023-12-14 07:15:51: 1u
- 2023-11-14 09:11:30: 2u
- 2023-10-06 06:49:44: 2u
- 2023-08-28 09:08:54: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-25 06:22:35: 1u
- 2025-04-02 07:22:23: 2u
- 2025-02-03 10:54:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-15 12:01:43: 1u
- 2024-03-19 11:45:01: 1u
- 2024-02-08 09:03:41: 2u
- 2023-11-14 09:11:30: 2u
- 2023-10-06 06:49:44: 1u
- 2023-08-28 09:08:54: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV357] LV Tartinade BIO Asperge 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-25 06:22:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-25 06:22:35: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-25 06:22:35: 1u
- 2025-02-27 07:12:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-17 06:54:55: 1u
- 2024-04-15 12:01:43: 1u
- 2023-12-14 07:15:51: 1u
- 2023-11-14 09:11:30: 1u
- 2023-10-06 06:49:44: 1u
- 2023-08-28 09:08:54: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-25 06:22:35: 1u
- 2025-04-02 07:22:23: 1u
- 2025-02-27 07:12:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV131] LV Tartinade Potiron 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-02 07:22:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-17 06:54:55: 1u
- 2023-12-14 07:15:51: 1u
- 2023-10-06 06:49:44: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-02 07:22:23: 1u
- 2025-02-03 10:54:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-15 12:01:43: 1u
- 2024-03-19 11:45:01: 1u
- 2023-12-14 07:15:51: 1u
- 2023-11-14 09:11:30: 2u
- 2023-08-28 09:08:54: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-02 07:22:23: 1u
- 2025-02-27 07:12:44: 1u
- 2025-02-03 10:54:23: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-03-19 11:45:01: 1u
- 2024-02-08 09:03:41: 2u
- 2023-12-14 07:15:51: 1u
- 2023-10-06 06:49:44: 2u
- 2023-08-28 09:08:54: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (26)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Predicted 1u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 1 | Predicted 1u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Predicted 2u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [LB004] LB Blonde (6,5%) 33CL | 1 | Predicted 1u but not ordered |
| [LV145] LV Sauce Tartare 200 ml  | 1 | Predicted 1u but not ordered |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Predicted 1u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Predicted 1u but not ordered |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Predicted 1u but not ordered |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | Predicted 1u but not ordered |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | Predicted 1u but not ordered |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Predicted 1u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Predicted 1u but not ordered |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Predicted 1u but not ordered |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | Predicted 1u but not ordered |
| [fsv18] Mendiant bio vrac 2,8kg | 1 | Predicted 1u but not ordered |
| [OCC03] OCCHIOLINO SUCO - citron, miel & gingembre - 500ml  | 1 | Predicted 1u but not ordered |
| [LB002] LB Blonde 75 CL (6,5%) | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:34.646Z*
