# Rapport Backtest - Client Belgian Cousin Company

## Contexte

- **Client** : Belgian Cousin Company (ID: 74427)
- **Commande réelle** : S40358
- **Date commande** : 2025-11-14 10:19:02
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 12,241 input + 2,337 output = 14,578 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 92.9% | 14 produits prédits, 13 corrects |
| **Rappel** | 100.0% | 13 produits réels, 13 détectés |
| **F1-Score** | 96.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.77 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 43.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 30.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -34.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (13)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [LV215] LV Biscuits apéro Fromage Parmesan 100g bio  | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV214] LV Biscuits apéro tomate basilic 100g bio  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV216] LV Biscuits apéro Fromage & Oignon 100g bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (13 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 04/11/2025, soit il y a 9 jours. Bien que l'historique soit limité à une seule commande récente, le cycle de rotation est inconnu. En application du principe de précaution B2B (si doute sur le cycle → prévoir commande) et compte tenu du seuil de réapprovisionnement de 30 jours, un risque de rupture ne peut être exclu. ÉTAPE 2 : Estimation quantité. En l'absence d'historique multiple, la médiane se base sur l'unique commande récente de 1 unité. Conformément à la règle sur les rotations faibles, on maintient la quantité de 1u sans augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 168 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
Le produit présente une rotation très faible avec une commande unique de 1 unité le 04/11/2025. Bien que le cycle de commande ne soit pas encore établi, le délai depuis la dernière commande (9 jours) combiné au seuil de réapprovisionnement de 30 jours impose une approche de précaution B2B pour éviter toute rupture sur un produit à faible stock. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane de l'historique récent, afin de couvrir le besoin sans risquer de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 142 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>3. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 04/11, soit il y a 9 jours. Bien que l'historique soit limité à une seule commande, le seuil de réapprovisionnement est de 30 jours. En l'absence de cycle établi (cycle irrégulier/inconnu), le principe de précaution B2B s'applique pour éviter une rupture potentielle sur un produit à faible rotation. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité de 1 unité est maintenue pour couvrir le besoin sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 167 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>4. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 04/11/2025, soit il y a 9 jours. Avec un seuil de réapprovisionnement de 30 jours et une absence d'historique long permettant de définir un cycle précis, le principe de précaution B2B s'applique. Le risque de rupture à l'horizon de 30 jours est considéré comme présent en raison de l'incertitude du cycle. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter, celle-ci correspondant à la médiane du seul point de donnée disponible.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 187 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>5. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 04/11/2025, soit il y a 9 jours. Avec un seuil de réapprovisionnement de 30 jours et un historique très limité (une seule commande récente), il existe une incertitude sur le cycle de rotation. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle de maintien des quantités pour les rotations faibles et régulières, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 162 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>6. [LV214] LV Biscuits apéro tomate basilic 100g bio </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 04/11/2025, soit il y a 9 jours. Avec un seuil de réapprovisionnement de 30 jours et un historique très limité (une seule commande récente), le cycle de rotation est indéterminé. En application du principe de précaution B2B (mieux vaut prévenir une rupture incertaine), un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien des quantités identiques en cas de stabilité, la médiane retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 159 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>7. [LV216] LV Biscuits apéro Fromage & Oignon 100g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande date du 04/11/2025, soit il y a 9 jours. Avec un seuil de réapprovisionnement de 30 jours et une absence d'historique long permettant de définir un cycle précis, le principe de précaution B2B s'applique pour éviter toute rupture sur ce produit à faible rotation. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément aux règles sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane du flux récent) pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 151 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>8. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 04/11/2025, soit il y a 9 jours. Avec un seuil de réapprovisionnement de 30 jours et un historique très limité (une seule commande récente), il existe un doute sur le cycle de rotation. En application du principe de précaution B2B, un besoin est détecté pour éviter toute rupture. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien des quantités identiques, la médiane de 1 unité est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 151 tokens
- **Total**: 1,025 tokens



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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 04/11/2025, soit il y a 9 jours. Avec un seuil de réapprovisionnement de 30 jours et un historique très limité (une seule commande récente), le cycle de rotation n'est pas encore établi. En application du principe de précaution B2B (si doute sur le cycle → prévoir commande), un risque de rupture est identifié pour couvrir l'horizon des 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles (1-2u) et l'absence d'historique N-1, la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 196 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>10. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 04/11/2025, soit il y a 9 jours. Avec un seuil de réapprovisionnement de 30 jours et un historique très limité (une seule commande récente), le cycle de rotation est incertain. En application du principe de précaution B2B (si doute sur le cycle → prévoir commande), un risque de rupture est identifié pour l'horizon cible. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles (1-2u) et l'absence d'historique N-1, la quantité est maintenue à la valeur observée pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 188 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>11. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date de 9 jours. Bien qu'il n'y ait qu'une seule commande récente (cycle indéterminé), le principe de précaution B2B s'applique face à l'absence d'historique long terme. Le risque de rupture sur un horizon de 30 jours est considéré comme possible (doute sur la rotation). ÉTAPE 2 : Estimation quantité. En l'absence de données multiples, on se base sur la seule valeur connue de l'historique récent. La quantité de 1 unité est maintenue pour éviter le surstockage sur un produit à rotation potentiellement faible.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 151 tokens
- **Total**: 1,026 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 04/11/2025, soit il y a 9 jours. Bien que l'historique soit limité à une seule commande récente, le principe de précaution B2B s'applique face à l'absence de cycle établi. Avec un seuil de réapprovisionnement de 30 jours, il existe un doute sur la rotation ; le risque de rupture doit être couvert. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. En l'absence d'autres données ou de saisonnalité N-1, la médiane de 1 unité est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 169 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>13. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (DÉTECTION DU BESOIN) : Le produit présente une rotation très faible avec une seule commande récente le 04/11. Bien que le cycle soit difficile à établir, le principe de précaution B2B s'applique car nous sommes à 9 jours de la dernière commande et le seuil de réapprovisionnement est de 30 jours. Un doute subsiste sur la fréquence, donc le besoin est détecté. ÉTAPE 2 (ESTIMATION QUANTITÉ) : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles (1-2u), on maintient la quantité minimale de 1 unité pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 170 tokens
- **Total**: 1,045 tokens



</details>




### Donnees d'Input LLM (13 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:28:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:28:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:28:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:28:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [LV215] LV Biscuits apéro Fromage Parmesan 100g bio </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:28:36: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV214] LV Biscuits apéro tomate basilic 100g bio </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:28:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV216] LV Biscuits apéro Fromage & Oignon 100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:28:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:28:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>9. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:28:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:28:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:28:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:28:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 13:28:36: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:24:59.958Z*
