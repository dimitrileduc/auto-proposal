# Rapport Backtest - Client Depairon Distribution

## Contexte

- **Client** : Depairon Distribution (ID: 18064)
- **Commande réelle** : S38885
- **Date commande** : 2025-09-05 10:07:36
- **Date cutoff système** : 2025-09-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 11
- **Tokens**: 9,866 input + 1,695 output = 11,561 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 36.4% | 11 produits prédits, 4 corrects |
| **Rappel** | 30.8% | 13 produits réels, 4 détectés |
| **F1-Score** | 33.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 12.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PAO01] PAOLA cola verre 250ml - le cola des Belges | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 2u)</summary>

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
L'analyse de l'historique montre un cycle de commande irrégulier avec une dernière commande effectuée il y a 94 jours (02/06/2025). Bien que la rotation soit faible, le délai écoulé depuis la dernière commande dépasse largement les intervalles observés l'année précédente (environ 60 à 75 jours entre avril et juin). En application du principe de précaution B2B, un risque de rupture est identifié pour l'horizon des 30 prochains jours. La quantité retenue est de 3 unités, correspondant à la médiane des commandes récentes et historiques (3u et 5u), en privilégiant la valeur la plus basse pour éviter le surstockage sur un produit à rotation lente.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 165 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>2. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 02/06/2025, soit plus de 90 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et face à l'absence d'historique N-1, une commande de 1 unité est préconisée. La quantité est fixée à 1, correspondant à la médiane et à la valeur la plus basse de l'historique récent pour ce type de produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 145 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>3. [PAO01] PAOLA cola verre 250ml - le cola des Belges</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 02/06/2025, soit 94 jours sans activité. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle standard de réapprovisionnement. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. ÉTAPE 2 : L'historique récent montre une commande unique de 1u. Conformément aux règles sur les rotations très faibles (1-2u), la quantité est maintenue à 1u pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 149 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 02/06/2025, soit 94 jours sans activité. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de détection du besoin incertain, une commande est nécessaire pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique) pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 160 tokens
- **Total**: 1,035 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 12:23:39: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-24 13:15:35: 5u
- 2024-04-08 11:40:22: 5u
- 2023-12-08 07:26:58: 3u
- 2023-10-24 06:45:09: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 12:23:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [PAO01] PAOLA cola verre 250ml - le cola des Belges</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 12:23:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-02 12:23:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 2 | Predicted 2u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 3 | Predicted 3u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Predicted 2u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 2 | Predicted 2u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |


---

## False Negatives (9)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Never ordered in previous analysis window (no history) |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Never ordered in previous analysis window (no history) |
| [LV131] LV Tartinade Potiron 190g | 2 | Never ordered in previous analysis window (no history) |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | Never ordered in previous analysis window (no history) |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Never ordered in previous analysis window (no history) |
| [LB003] LB Festive (4,5%) 33CL | 1 | Never ordered in previous analysis window (no history) |
| [JOY06] JOY! Organic Rhubarb Jam 370g | 1 | Never ordered in previous analysis window (no history) |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | Never ordered in previous analysis window (no history) |
| [LV132] LV Tartinade Houmous type 190g | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:27:49.171Z*
