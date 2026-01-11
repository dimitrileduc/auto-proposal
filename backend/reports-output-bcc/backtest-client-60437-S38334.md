# Rapport Backtest - Client LE CHALET SUISSE

## Contexte

- **Client** : LE CHALET SUISSE (ID: 60437)
- **Commande réelle** : S38334
- **Date commande** : 2025-08-05 13:47:10
- **Date cutoff système** : 2025-08-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 29
- **Tokens**: 25,459 input + 4,016 output = 29,475 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 31.3% | 16 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 47.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.80 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0055] MF Noix de cajou - Curry 133g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle de 59 jours entre les deux dernières commandes. Au 04/08/2025, 39 jours se sont écoulés depuis la dernière commande (26/06), soit environ 66% du cycle moyen. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent durant cette période. En application du principe de précaution B2B et face à une rotation faible mais existante, une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la commande la plus récente et à la valeur basse pour éviter un surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 159 tokens
- **Total**: 1,050 tokens



</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 24 et 35 jours (moyenne de 29 jours). Depuis la dernière commande du 26 juin, 39 jours se sont écoulés, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe donc un risque de rupture immédiat. Concernant la quantité, l'historique récent montre des volumes de 1u et 2u. En appliquant la règle de la médiane sur ces trois commandes, la valeur retenue est de 2u pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 140 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 24 et 35 jours (moyenne de 30 jours). Depuis la dernière commande du 26 juin, 39 jours se sont écoulés, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est donc avéré. Pour la quantité, l'historique récent présente des volumes de 1u, 2u et 2u. La médiane de ces commandes est de 2u, ce qui correspond également au volume le plus fréquent pour maintenir le stock sur ce produit à rotation régulière mais faible.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 144 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 24 à 35 jours (moyenne ~30 jours). La dernière commande datant du 26 juin (soit 39 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est dépassé, ce qui indique un risque de rupture imminent. Conformément au principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes récentes, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 134 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 30 à 35 jours. La dernière commande datant du 26 juin (soit 39 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est largement dépassé. Il existe donc un risque de rupture imminent ou avéré. En suivant la règle de la médiane sur les quantités récentes (1u, 2u, 1u), la médiane est de 1u. Conformément au principe de précaution B2B et à la règle de privilégier la valeur la plus basse en cas de rotation faible, une commande de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 158 tokens
- **Total**: 1,067 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [MF0055] MF Noix de cajou - Curry 133g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:24:19: 1u
- 2025-04-28 08:28:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:24:19: 2u
- 2025-05-22 06:30:10: 2u
- 2025-04-28 08:28:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:24:19: 2u
- 2025-05-22 06:30:10: 2u
- 2025-04-28 08:28:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:24:19: 2u
- 2025-05-22 06:30:10: 2u
- 2025-04-28 08:28:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 06:24:19: 1u
- 2025-05-22 06:30:10: 2u
- 2025-04-28 08:28:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Predicted 1u but not ordered |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Predicted 1u but not ordered |
| [MF0028] ​MF Tarti Carotte Gingembre 250g | 1 | Predicted 1u but not ordered |
| [MF0030] MF Tarti Mangue Curry 250g  | 1 | Predicted 1u but not ordered |
| [MF0027] MF Tarti Aubergine 250g  | 1 | Predicted 1u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Predicted 1u but not ordered |
| [REB05] REB chips bio - sel de mer 35g | 1 | Predicted 1u but not ordered |
| [REB06] REB chips bio - paprika fumé 35g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [MF0012] MF Olives Mix 500g | 1 | Predicted 1u but not ordered |
| [MF0013] MF Olives Vertes 500g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:14:06.808Z*
