# Rapport Backtest - Client Boucherie Le Limousin

## Contexte

- **Client** : Boucherie Le Limousin (ID: 23615)
- **Commande réelle** : S38213
- **Date commande** : 2025-07-23 13:11:08
- **Date cutoff système** : 2025-07-22 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 12,374 input + 2,083 output = 14,457 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 85.7% | 14 produits prédits, 12 corrects |
| **Rappel** | 100.0% | 12 produits réels, 12 détectés |
| **F1-Score** | 92.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.17 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 48.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -28.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

---

## True Positives (12)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV040] LV Caprons apéritifs 240g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (12 produits)


<details>
<summary><strong>1. [LV040] LV Caprons apéritifs 240g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 111 jours. Bien que le cycle soit difficile à établir, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus que le délai depuis la dernière commande dépasse largement les seuils usuels. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane historique, afin de maintenir une disponibilité minimale sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 123 tokens
- **Total**: 995 tokens



</details>


<details>
<summary><strong>2. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/04/2025, soit plus de 110 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (doute sur le cycle = prévoir), un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 170 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>3. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
La dernière commande remonte au 02/04/2025, soit 111 jours sans activité. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter une rupture prolongée) et face à l'absence d'historique N-1, une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane de l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 139 tokens
- **Total**: 1,017 tokens



</details>


<details>
<summary><strong>4. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/04/2025, soit plus de 110 jours. Bien que la rotation soit faible, l'historique montre des besoins ponctuels (avril 2024, octobre 2023). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. La dernière commande était de 3u et la médiane historique se situe entre 2u et 3u. Conformément aux règles de maintien des faibles rotations (1-3u), la quantité de 3u est retenue pour assurer la disponibilité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 179 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>5. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/04/2025, soit plus de 110 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée une incertitude sur l'état du stock. En application du principe de précaution B2B (mieux vaut détecter un besoin incertain qu'une rupture), une commande est préconisée. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1u pour éviter un surstockage inutile tout en assurant une présence produit.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 185 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 4u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 02/04/2025, soit plus de 110 jours sans activité pour ce produit. Bien que l'historique soit irrégulier, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement tout cycle raisonnable, suggérant un besoin de réapprovisionnement imminent pour éviter une rupture prolongée. La quantité retenue est de 4 unités, correspondant à la valeur de la commande la plus récente, afin de maintenir le stock sans surévaluer par rapport au volume historique constaté.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 129 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 02/04/2025, soit plus de 110 jours sans activité. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter une rupture prolongée), une commande est préconisée. La quantité retenue correspond à la médiane historique (1u), conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 120 tokens
- **Total**: 992 tokens



</details>


<details>
<summary><strong>8. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 111 jours. Bien que le cycle soit difficile à déterminer en l'absence d'historique récurrent, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée sur un produit dont le stock est potentiellement épuisé. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est fixée à 1 unité, correspondant à la médiane de l'historique récent, afin de maintenir une présence minimale sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 130 tokens
- **Total**: 1,001 tokens



</details>


<details>
<summary><strong>9. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 02/04/2025, soit plus de 110 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement les cycles habituels observés l'année précédente (avril/octobre). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à rotation lente, un réapprovisionnement est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane des commandes récentes et au volume de la même période l'année dernière (avril 2024).

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 134 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 02/04/2025, soit plus de 110 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent présente une commande unique de 2 unités. Conformément à la règle de maintien des quantités pour les faibles rotations (1-2u) et à l'utilisation de la médiane historique, la quantité préconisée est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 153 tokens
- **Total**: 1,028 tokens



</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 02/04/2025, soit plus de 110 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement les cycles standards de réapprovisionnement. En application du principe de précaution B2B et pour éviter une rupture de stock prolongée sur une référence active, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane historique et au maintien strict du stock pour une rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 116 tokens
- **Total**: 987 tokens



</details>


<details>
<summary><strong>12. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 02/04/2025, soit plus de 110 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement pour un produit de type tartinade. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et face à l'absence d'historique N-1, une commande est préconisée. La quantité est fixée à 1 unité, correspondant à la médiane et à la dernière commande enregistrée, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 149 tokens
- **Total**: 1,022 tokens



</details>




### Donnees d'Input LLM (12 produits)


<details>
<summary><strong>1. [LV040] LV Caprons apéritifs 240g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-02 11:01:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-02 11:01:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-02 11:01:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-02 11:01:41: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-18 11:58:12: 2u
- 2023-10-12 14:13:39: 6u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-02 11:01:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-02 11:01:41: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-18 11:58:12: 2u
- 2023-10-12 14:13:39: 2u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-02 11:01:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-02 11:01:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-02 11:01:41: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-18 11:58:12: 3u
- 2023-10-12 14:13:39: 6u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>10. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-02 11:01:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>11. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-02 11:01:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-02 11:01:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 3 | Predicted 3u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 3 | Predicted 3u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:24:02.895Z*
