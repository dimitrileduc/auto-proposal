# Rapport Backtest - Client Les Cabanes de Rensiwez SPRL

## Contexte

- **Client** : Les Cabanes de Rensiwez SPRL (ID: 34751)
- **Commande réelle** : S39873
- **Date commande** : 2025-10-28 13:37:18
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 3,630 input + 682 output = 4,312 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 8.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 8.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 8.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [WIG06] WIGNAC cidre naturel bio sans alcool 330ml | 4 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [WIG07] WIGNAC cidre naturel bio sans alcool 750ml | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [WIG01] WIGNAC cidre naturel bio 330ml | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [WIG03] WIGNAC cidre naturel bio 750ml | 3 | 3 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [WIG06] WIGNAC cidre naturel bio sans alcool 330ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 49 et 21 jours (moyenne de 35 jours). Depuis la dernière commande du 26 août, 62 jours se sont écoulés, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent. Pour la quantité, l'historique récent montre des volumes de 2u, 2u et 3u. Conformément à la règle de la médiane et à la prudence B2B (choisir la valeur la plus basse en cas de doute), la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 149 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>2. [WIG07] WIGNAC cidre naturel bio sans alcool 750ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 26 août, soit 62 jours. Le cycle moyen observé est d'environ 35 jours. Nous avons largement dépassé ce cycle et le risque de rupture est élevé dans l'horizon des 30 jours (Replenishment Threshold Days). Par principe de précaution B2B, un réapprovisionnement est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 1, 2 et 3 unités. La médiane de ces commandes est de 2 unités. Conformément à la règle de privilégier la médiane et de ne pas surestimer en cas de doute, la quantité retenue est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 173 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>3. [WIG01] WIGNAC cidre naturel bio 330ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 26 août 2025, soit 62 jours. L'historique montre un cycle moyen d'environ 35 jours entre les commandes précédentes (juin à août). Le délai actuel dépasse largement ce cycle moyen et le seuil de réapprovisionnement de 30 jours est largement atteint. En application du principe de précaution B2B, le risque de rupture est élevé. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent présente les quantités suivantes : 3, 1, et 2. La médiane de ces commandes est de 2 unités. Conformément aux règles de gestion, on privilégie la médiane pour stabiliser le stock sans surévaluer.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 179 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>4. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. L'historique récent montre des commandes le 17/06, 05/08 et 26/08, soit un cycle moyen d'environ 35 jours. La dernière commande remonte à 62 jours (26/08 au 27/10), ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est critique. ÉTAPE 2 : Estimation quantité. Les quantités commandées sont de 1, 2 et 3 unités. La médiane de l'historique récent est de 2 unités. Conformément à la règle de prudence B2B et au maintien des rotations faibles, la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 181 tokens
- **Total**: 1,087 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [WIG06] WIGNAC cidre naturel bio sans alcool 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-26 06:35:10: 3u
- 2025-08-05 07:26:53: 2u
- 2025-06-17 06:49:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [WIG07] WIGNAC cidre naturel bio sans alcool 750ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-26 06:35:10: 3u
- 2025-08-05 07:26:53: 1u
- 2025-06-17 06:49:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [WIG01] WIGNAC cidre naturel bio 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-26 06:35:10: 3u
- 2025-08-05 07:26:53: 1u
- 2025-06-17 06:49:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [WIG03] WIGNAC cidre naturel bio 750ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-26 06:35:10: 3u
- 2025-08-05 07:26:53: 1u
- 2025-06-17 06:49:23: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:36.863Z*
