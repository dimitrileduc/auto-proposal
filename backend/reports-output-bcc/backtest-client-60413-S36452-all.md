# Rapport Backtest - Client LA FERME DU PLANOIS

## Contexte

- **Client** : LA FERME DU PLANOIS (ID: 60413)
- **Commande réelle** : S36452
- **Date commande** : 2025-04-30 09:37:13
- **Date cutoff système** : 2025-04-29 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,121 input + 1,007 output = 7,128 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 85.7% | 7 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 92.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 38.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 35.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -38.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [RIT01] RITCHIE Orange - verre 275ml | 5 | 8 | 3.0 | 37.5% | partial | Non | Non | LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 2 | 4 | 2.0 | 50.0% | partial | Non | Non | LLM |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 2 | 5 | 3.0 | 60.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 5u vs Médiane: 5u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 8u
- **Erreur LLM**: 3u (37.5%)
- **Erreur Mediane**: 3u (37.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 février 2025, soit 70 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est élevé car le cycle de rotation est incertain (une seule commande récente). En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent présente une commande unique de 5 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité de 5 unités est maintenue pour assurer la disponibilité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 155 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>2. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 18 février 2025, soit 70 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la valeur unique observée dans l'historique récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 128 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>3. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 18 février 2025, soit plus de 70 jours sans activité pour ce produit. Bien que la rotation soit faible (2 unités), l'absence de cycle régulier établi et le délai important depuis le dernier mouvement imposent l'application du principe de précaution B2B. Un risque de rupture est identifié à l'horizon des 30 jours (Replenishment Threshold Days). Conformément aux règles de gestion, la quantité retenue correspond à la dernière commande connue (2 unités), évitant ainsi toute surestimation tout en garantissant la disponibilité du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 138 tokens
- **Total**: 1,012 tokens



</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 18 février 2025, soit plus de 70 jours sans activité pour ce produit. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et pour éviter une rupture de stock prolongée sur une référence premium/bio, un besoin est détecté. La quantité retenue correspond à la dernière commande connue (3 unités), ce qui permet de maintenir le référencement sans risque de surstockage excessif.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 130 tokens
- **Total**: 1,005 tokens



</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
La dernière commande remonte au 18 février 2025, soit 70 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le cycle de réapprovisionnement standard pour un produit de snacking bio. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la seule valeur historique connue (médiane de l'historique récent).

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 125 tokens
- **Total**: 1,000 tokens



</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 18 février 2025, soit 70 jours sans activité. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et pour éviter une rupture prolongée sur un horizon de 30 jours, un besoin est détecté. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans risquer un surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 157 tokens
- **Total**: 1,032 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-18 13:36:47: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>2. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-18 13:36:47: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-18 13:36:47: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>4. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-18 13:36:47: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-18 13:36:47: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-02-18 13:36:47: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:25:56.322Z*
