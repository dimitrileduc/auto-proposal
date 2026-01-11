# Rapport Backtest - Client EUROPADRINKS

## Contexte

- **Client** : EUROPADRINKS (ID: 60190)
- **Commande réelle** : S40285
- **Date commande** : 2025-11-12 12:38:29
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 12
- **Tokens**: 11,066 input + 2,027 output = 13,093 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 25.0% | 12 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 40.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 3.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB05] REB chips bio - sel de mer 35g | 25 | 20 | 5.0 | 25.0% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 20 | 20 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 15 | 10 | 5.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [REB05] REB chips bio - sel de mer 35g</strong> - LLM: 25u vs Médiane: 28u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 25u
- **Baseline calculee**: 25u
- **Mediane historique**: 28u
- **Reel commande**: 20u
- **Erreur LLM**: 5u (25.0%)
- **Erreur Mediane**: 8u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 25u (risque detecte)

**Raisonnement LLM:**
Le cycle de commande récent montre une fréquence hebdomadaire (7 jours entre le 27/10 et le 03/11). Depuis la dernière commande du 03/11, 8 jours se sont écoulés, ce qui dépasse 70% du cycle moyen constaté. Il existe donc un risque de rupture imminent dans l'horizon des 30 jours. Pour la quantité, on écarte le pic exceptionnel de juin (64u) pour se concentrer sur la médiane des commandes récentes (25u et 30u). En application du principe de précaution B2B et de la règle de choisir la valeur la plus basse en cas de doute sur la médiane, une commande de 25 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 169 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 20u vs Médiane: 10u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 20u
- **Baseline calculee**: 20u
- **Mediane historique**: 10u
- **Reel commande**: 20u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 10u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 20u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une accélération récente avec des commandes hebdomadaires (27 oct, 03 nov). Depuis la dernière commande, 8 jours se sont écoulés. Sur un cycle moyen estimé à environ 25-30 jours historiquement mais réduit à 7 jours récemment, le risque de rupture est élevé dans l'horizon des 30 jours (seuil de réapprovisionnement). En application du principe de précaution B2B et de la règle de la médiane des commandes récentes (20, 20, 10, 15, 10), la quantité retenue est de 20 unités pour maintenir le stock face à la demande actuelle.

**Tokens utilises pour cette prediction:**
- **Input**: 948 tokens
- **Output**: 160 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>3. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 15u vs Médiane: 15u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 15u
- **Baseline calculee**: 15u
- **Mediane historique**: 15u
- **Reel commande**: 10u
- **Erreur LLM**: 5u (50.0%)
- **Erreur Mediane**: 5u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 15u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles réguliers d'environ 30 à 35 jours (32 jours entre les deux dernières commandes). La dernière commande datant du 27 octobre (il y a 15 jours), le prochain besoin interviendra dans environ 15 à 20 jours, ce qui entre dans la fenêtre de réapprovisionnement de 30 jours. En suivant la règle de la médiane sur l'historique récent (15, 20, 15, 20), et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 15 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 155 tokens
- **Total**: 1,091 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [REB05] REB chips bio - sel de mer 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 12:25:13: 30u
- 2025-10-27 08:44:07: 25u
- 2025-06-19 07:03:29: 64u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 25u
**Quantite Reelle**: 20u

</details>


<details>
<summary><strong>2. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 12:25:13: 20u
- 2025-10-27 08:44:07: 20u
- 2025-09-25 06:30:28: 10u
- 2025-08-19 08:57:48: 15u
- 2025-06-19 07:03:29: 10u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 20u

</details>


<details>
<summary><strong>3. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-27 08:44:07: 20u
- 2025-09-25 06:30:28: 15u
- 2025-08-19 08:57:48: 20u
- 2025-06-19 07:03:29: 15u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 15u
**Quantite Reelle**: 10u

</details>




---

## False Positives (9)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB06] REB chips bio - paprika fumé 35g | 20 | Predicted 20u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 20 | Predicted 20u but not ordered |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 4 | Predicted 4u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 10 | Predicted 10u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 15 | Predicted 15u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 10 | Predicted 10u but not ordered |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 4 | Predicted 4u but not ordered |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | Predicted 2u but not ordered |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 5 | Predicted 5u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:16:04.277Z*
