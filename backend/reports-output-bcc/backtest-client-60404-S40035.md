# Rapport Backtest - Client LA FERME D'UPIGNY

## Contexte

- **Client** : LA FERME D'UPIGNY (ID: 60404)
- **Commande réelle** : S40035
- **Date commande** : 2025-11-04 13:31:03
- **Date cutoff système** : 2025-11-03 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 8
- **Tokens**: 6,994 input + 1,264 output = 8,258 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 8 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 4.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 56.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 49.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -56.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 7 | 4.0 | 57.1% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 10 | 7.0 | 70.0% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 8 | 5.0 | 62.5% | partial | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 10 | 7.0 | 70.0% | partial | Non | Non | LLM |
| [REB05] REB chips bio - sel de mer 35g | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB06] REB chips bio - paprika fumé 35g | 3 | 4 | 1.0 | 25.0% | partial | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 2 | 7 | 5.0 | 71.4% | partial | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 4 | 7 | 3.0 | 42.9% | partial | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 2u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 7u
- **Erreur LLM**: 4u (57.1%)
- **Erreur Mediane**: 5u (71.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20/08/2025, soit 75 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple, la quantité de la dernière commande (3 unités) est retenue comme référence pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 152 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 10u
- **Erreur LLM**: 7u (70.0%)
- **Erreur Mediane**: 7u (70.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 août 2025, soit 75 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle précis, le délai écoulé dépasse largement les seuils de réapprovisionnement standards en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. En l'absence d'historique long ou de saisonnalité N-1, la quantité est basée sur la dernière commande connue. La médiane et la valeur unique étant de 3 unités, ce volume est maintenu pour assurer la disponibilité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 174 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 8u
- **Erreur LLM**: 5u (62.5%)
- **Erreur Mediane**: 5u (62.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 août, soit 75 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (incertitude sur le cycle = risque de rupture), un besoin est détecté pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. En l'absence d'historique multiple, la quantité de la dernière commande (3 unités) est utilisée comme référence pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 151 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 10u
- **Erreur LLM**: 7u (70.0%)
- **Erreur Mediane**: 7u (70.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 août 2025, soit 75 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de rotation standard pour un produit de type chips. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. En l'absence de données multiples pour calculer une médiane, la quantité de la dernière commande (3 unités) est reconduite pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 161 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>5. [REB05] REB chips bio - sel de mer 35g</strong> - LLM: 4u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 20/08/2025, soit 75 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B pour ce type de produit. En application du principe de précaution et de détection du besoin incertain, un risque de rupture est identifié. ÉTAPE 2 : En l'absence de cycle établi, la quantité est basée sur la seule valeur historique disponible (4u), ce qui correspond à la médiane et au maintien de la rotation observée.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 146 tokens
- **Total**: 1,018 tokens



</details>


<details>
<summary><strong>6. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM: 3u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 20/08/2025, soit 75 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit de snacking. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est nécessaire. ÉTAPE 2 : En l'absence de cycle régulier, la quantité est basée sur la dernière commande connue (3u), ce qui correspond à la médiane de l'historique récent. Ce volume minimal permet de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 163 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>7. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 7u
- **Erreur LLM**: 5u (71.4%)
- **Erreur Mediane**: 5u (71.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 août 2025, soit 75 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit de snacking. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent présente une commande unique de 2 unités. Conformément à la règle de maintien des rotations faibles (1-2u) et à l'utilisation de la médiane historique, la quantité de 2 unités est reconduite pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 182 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>8. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 4u vs Médiane: 2u (Réel: 7u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 2u
- **Reel commande**: 7u
- **Erreur LLM**: 3u (42.9%)
- **Erreur Mediane**: 5u (71.4%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 20 août 2025, soit 75 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente (4 unités), le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit de snacking. En application du principe de précaution B2B (incertitude sur le cycle = risque de rupture), un besoin est détecté pour couvrir l'horizon des 30 prochains jours. La quantité retenue est de 4 unités, correspondant à la seule valeur historique disponible (médiane par défaut).

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 135 tokens
- **Total**: 1,010 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 08:18:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 08:18:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 08:18:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 08:18:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>5. [REB05] REB chips bio - sel de mer 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 08:18:55: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>6. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 08:18:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>7. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 08:18:55: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 7u

</details>


<details>
<summary><strong>8. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 08:18:55: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 7u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:18:59.600Z*
