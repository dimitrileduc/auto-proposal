# Rapport Backtest - Client En fait c'est simple - L'Épicerie

## Contexte

- **Client** : En fait c'est simple - L'Épicerie (ID: 17967)
- **Commande réelle** : S38961
- **Date commande** : 2025-09-03 14:42:01
- **Date cutoff système** : 2025-09-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 20,053 input + 3,435 output = 23,488 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 54.5% | 22 produits prédits, 12 corrects |
| **Rappel** | 85.7% | 14 produits réels, 12 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.08 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 5.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 8.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 5.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (12)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV131] LV Tartinade Potiron 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (12 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation lente mais régulière avec un cycle moyen d'environ 70 à 90 jours. La dernière commande remontant au 15 mai 2025 (soit plus de 100 jours), le délai de réapprovisionnement est largement dépassé, ce qui indique un risque de rupture imminent ou un besoin de restockage selon le principe de précaution B2B. La quantité historique est strictement constante à 2 unités sur toutes les commandes passées (N et N-1). En suivant la règle de la médiane et de la stabilité pour les faibles rotations, la quantité préconisée est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 151 tokens
- **Total**: 1,121 tokens



</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 mai 2025, soit plus de 100 jours. L'historique N-1 montre une commande systématique début septembre (04/09/2023). Le cycle moyen historique est d'environ 60 à 70 jours. Nous sommes largement au-delà de ce cycle et dans la fenêtre anniversaire de commande. Le risque de rupture est avéré pour les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique est extrêmement stable avec une quantité constante de 2 unités sur toutes les commandes passées (récentes et N-1). La médiane est de 2. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 184 tokens
- **Total**: 1,155 tokens



</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 15 mai 2025, soit plus de 100 jours sans réapprovisionnement. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles habituels observés l'année précédente (environ 60 à 90 jours). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à rotation lente, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane historique et au volume de la dernière commande, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 136 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation lente mais régulière avec un cycle moyen d'environ 60 à 90 jours. La dernière commande enregistrée date du 15 mai 2025, soit plus de 100 jours avant la date actuelle (02 septembre 2025). Le délai écoulé dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, ce qui indique un risque de rupture ou un besoin imminent. Conformément à la règle de précaution B2B et à la stabilité historique des volumes, la quantité retenue est de 2 unités, correspondant à la médiane constante observée sur toutes les commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 971 tokens
- **Output**: 156 tokens
- **Total**: 1,127 tokens



</details>


<details>
<summary><strong>5. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique montre une rotation lente mais régulière avec un cycle de commande moyen d'environ 2 à 3 mois. La dernière commande remontant au 15 mai 2025 (soit plus de 100 jours), le risque de rupture est critique dans l'horizon des 30 jours. En application du principe de précaution B2B et de la détection de besoin en cas de cycle irrégulier, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et au volume habituel constaté sur cette période l'année précédente (septembre 2023).

**Tokens utilises pour cette prediction:**
- **Input**: 969 tokens
- **Output**: 151 tokens
- **Total**: 1,120 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 mai 2025, soit plus de 100 jours. L'historique N-1 montre une commande systématique fin août ou début septembre (04/09/2023). Le cycle est irrégulier mais la période actuelle correspond à une fenêtre de réapprovisionnement historique. Par principe de précaution B2B, un besoin est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 montre une stabilité quasi totale à 2 unités (médiane). Le pic de 4 unités en 2023 est considéré comme exceptionnel. Application de la médiane constante : 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 970 tokens
- **Output**: 176 tokens
- **Total**: 1,146 tokens



</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 mai 2025, soit plus de 100 jours. L'historique N-1 montre une commande systématique début septembre (04/09/2023). Le cycle est irrégulier mais la période actuelle correspond à un besoin historique identifié. Par principe de précaution B2B, un risque de rupture est détecté pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité forte autour de 2 unités (médiane). Le pic de 4u en septembre 2023 est considéré comme exceptionnel. Application de la médiane constante de 2u pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 180 tokens
- **Total**: 1,153 tokens



</details>


<details>
<summary><strong>8. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
La dernière commande remonte au 15 mai 2025, soit plus de 100 jours sans activité, ce qui dépasse largement les cycles observés l'année précédente (environ 60 à 90 jours). Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu fin juillet l'année dernière. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (1u, 1u, 2u, 2u, 2u) et à la dernière quantité commandée.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 151 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>9. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 mai 2025, soit plus de 100 jours. Bien que la rotation soit très faible (1u), le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1u. Conformément aux règles pour les rotations très faibles (1-2u), la quantité est maintenue à 1u (médiane de l'historique disponible) sans augmentation injustifiée.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 167 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>10. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 15 mai 2025, soit plus de 100 jours sans activité. Bien que la rotation soit très faible, le principe de précaution B2B et l'absence d'historique complet imposent de prévoir un réapprovisionnement pour éviter une rupture prolongée si un cycle de vente se manifeste. ÉTAPE 2 : En suivant la règle des rotations très faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane et à la dernière commande enregistrée, afin de ne pas créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 141 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>11. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 15 mai 2025, soit plus de 100 jours sans activité. Bien que la rotation soit très faible, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture prolongée). ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément aux règles de rotation très faible (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique disponible) pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 152 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>12. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. En l'absence totale d'historique de commandes (récent ou N-1), il est impossible de déterminer un cycle de rotation. Selon le principe de précaution B2B et la règle de détection en cas de doute ou d'absence de données, un besoin est identifié pour éviter une rupture potentielle sur un nouveau produit ou un référencement manquant. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de médiane historique, la règle pour les rotations faibles ou inconnues est appliquée : maintien d'une quantité minimale de sécurité de 1 unité pour tester la rotation sans risquer un surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 862 tokens
- **Output**: 156 tokens
- **Total**: 1,018 tokens



</details>




### Donnees d'Input LLM (12 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 06:40:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:22:17: 2u
- 2024-04-25 07:54:38: 2u
- 2024-02-29 09:24:13: 2u
- 2024-01-22 12:40:17: 2u
- 2023-11-14 09:24:38: 2u
- 2023-09-04 07:15:01: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 06:40:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:22:17: 2u
- 2024-04-25 07:54:38: 2u
- 2024-02-29 09:24:13: 2u
- 2024-01-22 12:40:17: 2u
- 2023-11-14 09:24:38: 2u
- 2023-09-04 07:15:01: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 06:40:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:22:17: 2u
- 2024-04-25 07:54:38: 1u
- 2024-02-29 09:24:13: 3u
- 2024-01-22 12:40:17: 2u
- 2023-11-14 09:24:38: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 06:40:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:22:17: 2u
- 2024-04-25 07:54:38: 2u
- 2024-02-29 09:24:13: 2u
- 2024-01-22 12:40:17: 2u
- 2023-11-14 09:24:38: 2u
- 2023-09-04 07:15:01: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 06:40:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:22:17: 1u
- 2024-04-25 07:54:38: 1u
- 2024-02-29 09:24:13: 1u
- 2024-01-22 12:40:17: 2u
- 2023-11-14 09:24:38: 2u
- 2023-09-04 07:15:01: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 06:40:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:22:17: 2u
- 2024-04-25 07:54:38: 2u
- 2024-02-29 09:24:13: 2u
- 2024-01-22 12:40:17: 2u
- 2023-11-14 09:24:38: 2u
- 2023-09-04 07:15:01: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 06:40:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:22:17: 2u
- 2024-04-25 07:54:38: 2u
- 2024-02-29 09:24:13: 3u
- 2024-01-22 12:40:17: 2u
- 2023-11-14 09:24:38: 2u
- 2023-09-04 07:15:01: 4u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 06:40:40: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-29 06:22:17: 1u
- 2024-04-25 07:54:38: 1u
- 2024-02-29 09:24:13: 2u
- 2024-01-22 12:40:17: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 06:40:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 06:40:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-15 06:40:40: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LB004] LB Blonde (6,5%) 33CL | 1 | Predicted 1u but not ordered |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 1 | Predicted 1u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Predicted 1u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Predicted 1u but not ordered |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | Predicted 1u but not ordered |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [PAO03] PAOLA cola canette 330ml - le cola des Belges | 1 | Predicted 1u but not ordered |
| [SOWA04] SOWA thé glacé pêche 250ml | 1 | Predicted 1u but not ordered |
| [SOWA02] SOWA bissap 250ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [REB05] REB chips bio - sel de mer 35g | 1 | Never ordered in previous analysis window (no history) |
| [RISH03] RISH kombucha BIO - gingembre 330ml | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:17:04.331Z*
