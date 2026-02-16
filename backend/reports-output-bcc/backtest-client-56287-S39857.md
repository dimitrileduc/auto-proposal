# Rapport Backtest - Client Elodie Chapelle - C'était Mieux Demain

## Contexte

- **Client** : Elodie Chapelle - C'était Mieux Demain (ID: 56287)
- **Commande réelle** : S39857
- **Date commande** : 2025-10-22 11:00:10
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 11
- **Tokens**: 9,956 input + 1,798 output = 11,754 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 90.0% | 10 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 94.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.78 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 46.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 59.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 3 | 1 | 2.0 | 200.0% | partial | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [MF0033] MF Tarti Poivron chilli 250g | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [MF0032] MF Tarti Pois chiches 250 g | 2 | 2 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande d'environ 80 jours (entre juin et août). Depuis la dernière commande du 21 août 2025, 61 jours se sont écoulés, ce qui représente plus de 70% du cycle moyen estimé. Un risque de rupture est donc identifié pour les 30 prochains jours (Replenishment Threshold Days). En application du principe de précaution B2B et conformément à la règle sur les rotations faibles, la quantité retenue est de 1 unité, correspondant à la médiane et à la constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 137 tokens
- **Total**: 1,029 tokens



</details>


<details>
<summary><strong>2. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 21 août, soit 61 jours. Bien que le cycle soit irrégulier, l'historique N-1 montre une activité en août et mai. Le délai depuis la dernière commande est important, et selon le principe de précaution B2B (doute sur le cycle), un besoin de réapprovisionnement est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est extrêmement stable avec des commandes systématiques de 3 unités. La médiane et la constante historique convergent vers cette valeur.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 144 tokens
- **Total**: 1,066 tokens



</details>


<details>
<summary><strong>3. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

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
L'analyse montre une commande de 3 unités le 21 août 2025, soit il y a exactement 61 jours. L'historique de l'année précédente (2024) indique une commande fin août suivie d'une période d'activité, suggérant un besoin récurrent. Bien que le cycle soit espacé, le délai depuis la dernière commande dépasse largement le seuil de précaution (70% du cycle estimé). En application du principe de précaution B2B pour éviter une rupture sur un produit à rotation lente mais régulière, une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane constante observée sur toutes les commandes effectives (2024 et 2025).

**Tokens utilises pour cette prediction:**
- **Input**: 923 tokens
- **Output**: 169 tokens
- **Total**: 1,092 tokens



</details>


<details>
<summary><strong>4. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 21 août 2025, soit 61 jours avant la date actuelle. L'historique montre un cycle de réapprovisionnement d'environ 80 jours (entre juin et août). À 61 jours, nous avons dépassé 70% du cycle moyen estimé. De plus, l'historique N-1 montre une commande fin août, suggérant un besoin imminent pour couvrir les 30 prochains jours (seuil de réapprovisionnement). Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 2u et 3u. La médiane de ces valeurs est de 2,5u. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute), la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 220 tokens
- **Total**: 1,140 tokens



</details>


<details>
<summary><strong>5. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 21 août, soit 61 jours. Bien que le cycle soit irrégulier, le délai écoulé dépasse largement la fréquence habituelle observée entre juin et août. En application du principe de précaution B2B (doute sur le cycle = risque de rupture), une commande est nécessaire pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. La médiane des commandes récentes est de 1,5u. Conformément à la règle de maintien des stocks sur rotation faible et au principe de précaution, on retient la quantité de 2u pour assurer la disponibilité sans surstockage majeur.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 174 tokens
- **Total**: 1,077 tokens



</details>


<details>
<summary><strong>6. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

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
La dernière commande remonte au 21 août 2025, soit 61 jours avant la date actuelle. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle suggéré par l'historique N-1 (environ 3 mois entre mai et août). En application du principe de précaution B2B, un risque de rupture est identifié pour l'horizon des 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et à la commande de la même période l'année précédente (hors pic exceptionnel de 5u), afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 147 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

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
Le produit présente une rotation lente mais régulière avec un cycle moyen constaté d'environ 80 jours. La dernière commande remontant au 21 août 2025 (soit 61 jours avant la date actuelle), nous avons dépassé le seuil de 70% du cycle habituel. En application du principe de précaution B2B, un risque de rupture est identifié pour les 30 prochains jours. Pour la quantité, la médiane des commandes récentes se situe entre 2u et 3u ; conformément aux règles de gestion, la valeur la plus basse (2u) est privilégiée pour éviter le surstockage sur une référence à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 150 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>8. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 21 août 2025, soit il y a 61 jours. L'intervalle précédent était de 80 jours. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons l'horizon critique (61 + 30 = 91 jours), dépassant le cycle moyen observé. Par principe de précaution B2B, un risque de rupture est identifié. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. En suivant la règle de la médiane et la consigne de choisir la valeur la plus basse en cas de doute pour les produits à faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 178 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>9. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 02/06/2025, soit plus de 140 jours. Bien que la rotation soit faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente (environ 90 jours entre mai et août 2024). Un risque de rupture est identifié par manque de visibilité récente. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande de 2u. L'historique N-1 montre des commandes de 3u. En suivant la règle de privilégier la quantité la plus basse en cas de doute ou de rotation faible, la médiane basse de 2u est retenue pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 192 tokens
- **Total**: 1,096 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 09:16:43: 1u
- 2025-06-02 12:16:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 09:16:43: 3u
- 2025-06-02 12:16:51: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:29:19: 3u
- 2024-05-23 14:02:52: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [MF0035] MF Tarti Tomate Ail des ours 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 09:16:43: 3u
- 2025-06-02 12:16:51: 0u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:29:19: 3u
- 2024-05-23 14:02:52: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 09:16:43: 2u
- 2025-06-02 12:16:51: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:29:19: 2u
- 2024-05-23 14:02:52: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [MF0033] MF Tarti Poivron chilli 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 09:16:43: 2u
- 2025-06-02 12:16:51: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-23 14:02:52: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 09:16:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:29:19: 5u
- 2024-05-23 14:02:52: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 09:16:43: 2u
- 2025-06-02 12:16:51: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:29:19: 3u
- 2024-05-23 14:02:52: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 09:16:43: 1u
- 2025-06-02 12:16:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-23 14:02:52: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [MF0032] MF Tarti Pois chiches 250 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 12:16:51: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:29:19: 3u
- 2024-05-23 14:02:52: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:18:51.174Z*
