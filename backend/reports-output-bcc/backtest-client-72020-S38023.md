# Rapport Backtest - Client O'Bio

## Contexte

- **Client** : O'Bio (ID: 72020)
- **Commande réelle** : S38023
- **Date commande** : 2025-07-14 09:03:41
- **Date cutoff système** : 2025-07-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 27
- **Tokens**: 23,750 input + 4,187 output = 27,937 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.6% | 9 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 71.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 54.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 55.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -36.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [KOKO02] KOKO Kombucha Lemon Ginger 330ml | 1 | 2 | 1.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 35 jours (entre le 18/04 et le 23/05). Depuis la dernière commande du 23/05, 51 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou un besoin non couvert. ÉTAPE 2 : L'historique récent montre une régularité parfaite avec des commandes de 2 unités. En suivant la règle de maintien de la quantité pour les rotations faibles et régulières, la médiane de 2 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 154 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>2. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
Le cycle de commande observé est d'environ 35 jours (entre avril et mai). La dernière commande remonte au 23 mai, soit 51 jours avant la date actuelle. Le délai dépasse largement le cycle habituel et l'horizon de réapprovisionnement de 30 jours, ce qui indique un risque de rupture ou un besoin imminent. En suivant le principe de précaution B2B et la règle de la médiane sur l'historique récent (2u et 2u), une commande de 2 unités est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 132 tokens
- **Total**: 1,023 tokens



</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 mai, soit 51 jours. Le cycle précédent était de 35 jours. Nous avons largement dépassé le cycle moyen et le seuil de réapprovisionnement de 30 jours est atteint. Le risque de rupture est élevé. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. En suivant la règle de la médiane et le principe de choisir la valeur la plus basse en cas de doute pour une rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 140 tokens
- **Total**: 1,032 tokens



</details>


<details>
<summary><strong>4. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 23 mai, soit 51 jours. Bien que la rotation soit faible, le cycle observé entre les deux dernières commandes était de 35 jours. Nous avons largement dépassé ce délai, ce qui indique un besoin de réapprovisionnement imminent ou une rupture de stock probable. En application du principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 149 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>5. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 23 mai, soit 51 jours. Le cycle précédent était de 35 jours. Nous avons largement dépassé le cycle moyen et le seuil de réapprovisionnement de 30 jours est atteint. Par principe de précaution B2B, un besoin est détecté pour éviter la rupture. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles sur les rotations faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique).

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 149 tokens
- **Total**: 1,041 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-23 06:19:52: 2u
- 2025-04-18 11:56:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-23 06:19:52: 2u
- 2025-04-18 11:56:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-23 06:19:52: 1u
- 2025-04-18 11:56:17: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-23 06:19:52: 1u
- 2025-04-18 11:56:17: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [KOKO02] KOKO Kombucha Lemon Ginger 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-23 06:19:52: 1u
- 2025-04-18 11:56:17: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:23:40.755Z*
