# Rapport Backtest - Client Elevage de presles

## Contexte

- **Client** : Elevage de presles (ID: 72016)
- **Commande réelle** : S38026
- **Date commande** : 2025-07-18 06:45:29
- **Date cutoff système** : 2025-07-17 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 29
- **Tokens**: 25,470 input + 4,444 output = 29,914 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 87.5% | 8 produits prédits, 7 corrects |
| **Rappel** | 100.0% | 7 produits réels, 7 détectés |
| **F1-Score** | 93.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.14 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 12.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 7.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -12.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (7)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (7 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique montre deux commandes espacées de 46 jours (18/04 au 03/06). Au 17/07, 44 jours se sont écoulés depuis la dernière commande. Ce délai représente environ 95% du cycle précédent, dépassant largement le seuil de risque de 70%. Une rupture est probable dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont constantes à 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 152 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit 44 jours. L'intervalle précédent était de 46 jours. Le cycle moyen est d'environ 45 jours. À la date actuelle (17/07), nous sommes à 98% du cycle moyen, ce qui dépasse largement le seuil de risque de 70%. Une rupture est imminente dans l'horizon des 30 jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes unitaires (1u). La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle sans augmentation.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 173 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>3. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 03/06/2025, soit 44 jours. L'intervalle précédent était de 46 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous atteignons la fin du cycle de rotation observé. ÉTAPE 2 : Estimation quantité. L'historique récent montre une consommation constante et régulière de 1 unité par commande. En suivant la règle de la médiane et de la rotation faible (1-2u), la quantité recommandée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 149 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>4. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique récent montre un cycle de commande d'environ 46 jours (entre le 18/04 et le 03/06). Au 17/07, 44 jours se sont écoulés depuis la dernière commande. Ce délai dépasse largement le seuil de 70% du cycle moyen (32 jours), indiquant un risque imminent de rupture dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation quantité. Le produit présente une rotation très faible et régulière de 1 unité par commande. Conformément aux règles de gestion des faibles rotations, la quantité maintenue est de 1 unité (médiane de l'historique récent).

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 172 tokens
- **Total**: 1,060 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/06/2025, soit 44 jours. Le cycle précédent était de 46 jours. Nous approchons de 100% du cycle moyen constaté, ce qui présente un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. En suivant la règle de maintien pour les rotations de 1-2u, la quantité retenue est de 1.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 145 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>6. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 (Détection) : Le cycle observé entre les deux dernières commandes est de 46 jours. La dernière commande date du 03/06/2025, soit 44 jours avant la date actuelle. Nous avons atteint 95% du cycle moyen, ce qui dépasse largement le seuil de précaution de 70%. Un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 (Quantité) : L'historique récent montre une consommation constante et faible de 1 unité par commande. Conformément à la règle sur les rotations faibles, la médiane de 1 unité est maintenue pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 161 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Le cycle de commande observé est d'environ 46 jours. La dernière commande remonte au 03/06/2025, soit 44 jours avant la date actuelle. Nous avons dépassé les 70% du cycle moyen, le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles de gestion des faibles rotations, la médiane de 1 unité est retenue pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 147 tokens
- **Total**: 1,039 tokens



</details>




### Donnees d'Input LLM (7 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u
- 2025-04-18 09:54:31: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 08:52:33: 1u
- 2025-04-18 09:54:31: 1u

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
| [LV160] LV Tartinade Aubergine 190g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:23:39.314Z*
