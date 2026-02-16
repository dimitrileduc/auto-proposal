# Rapport Backtest - Client Landlinie Lebensmittel-Vertrieb GmbH

## Contexte

- **Client** : Landlinie Lebensmittel-Vertrieb GmbH (ID: 72578)
- **Commande réelle** : S39395
- **Date commande** : 2025-09-25 11:23:32
- **Date cutoff système** : 2025-09-24 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,260 input + 1,122 output = 7,382 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 57.1% | 7 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 72.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 12.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 37.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -42.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 16 | 16 | 0.0 | 0.0% | exact | LLM |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 16 | 32 | 16.0 | 50.0% | partial | LLM |
| [MF0027] MF Tarti Aubergine 250g  | 16 | 32 | 16.0 | 50.0% | partial | LLM |
| [MF0029] MF Tarti Datte chili 250g | 16 | 32 | 16.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 16u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande date du 21 août 2025, soit il y a 34 jours. L'intervalle précédent était de 87 jours. Bien que le cycle soit irrégulier, le délai actuel dépasse 30% de l'intervalle historique et nous entrons dans la fenêtre de risque des 30 jours (Replenishment Threshold Days). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une stabilité parfaite avec deux commandes de 16 unités. La médiane est de 16. On maintient cette quantité constante pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 900 tokens
- **Output**: 168 tokens
- **Total**: 1,068 tokens



</details>


<details>
<summary><strong>2. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 32u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 32u
- **Erreur LLM**: 16u (50.0%)
- **Erreur Mediane**: 16u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Le cycle observé entre les deux dernières commandes est de 87 jours. Depuis la dernière commande (21 août), 34 jours se sont écoulés. Bien que nous ne soyons qu'à environ 40% du cycle moyen, l'historique est très limité (seulement deux points de données), ce qui rend le cycle incertain. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Les deux dernières commandes étant identiques (16u), la médiane est de 16. On maintient cette quantité constante conformément à la règle sur les rotations régulières.

**Tokens utilises pour cette prediction:**
- **Input**: 897 tokens
- **Output**: 167 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>3. [MF0027] MF Tarti Aubergine 250g </strong> - LLM: 16u vs Médiane: 16u (Réel: 32u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 32u
- **Erreur LLM**: 16u (50.0%)
- **Erreur Mediane**: 16u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. L'historique montre un intervalle de 87 jours entre les deux dernières commandes. La dernière commande date du 21 août, soit il y a 34 jours. Bien que nous ne soyons qu'à environ 40% du cycle précédent, le seuil de réapprovisionnement est de 30 jours. En application du principe de précaution B2B (si doute sur le cycle ou rotation irrégulière), un risque de rupture est identifié pour l'horizon de 30 jours. ÉTAPE 2 : Estimation quantité. Les deux dernières commandes sont identiques (16u). La médiane et la constante historique dictent de maintenir cette quantité de 16 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 167 tokens
- **Total**: 1,059 tokens



</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 32u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 32u
- **Erreur LLM**: 16u (50.0%)
- **Erreur Mediane**: 16u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
Le cycle observé entre les deux dernières commandes est d'environ 87 jours. Depuis la dernière commande du 21 août 2025, 34 jours se sont écoulés. Bien que nous ne soyons qu'à environ 40% du cycle moyen, l'absence d'historique N-1 et la nature irrégulière des commandes imposent l'application du principe de précaution B2B pour couvrir les 30 prochains jours (Replenishment Threshold Days). La quantité retenue est de 16 unités, correspondant à la médiane et à la constante des commandes récentes.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 136 tokens
- **Total**: 1,027 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 10:12:30: 16u
- 2025-05-26 11:43:43: 16u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>2. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 10:12:30: 16u
- 2025-05-26 11:43:43: 16u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 32u

</details>


<details>
<summary><strong>3. [MF0027] MF Tarti Aubergine 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 10:12:30: 16u
- 2025-05-26 11:43:43: 16u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 32u

</details>


<details>
<summary><strong>4. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-21 10:12:30: 16u
- 2025-05-26 11:43:43: 16u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 32u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0043] MF Brotaufstrich Apfel Meerrettich 250g | 16 | Predicted 16u but not ordered |
| [MF0030] MF Tarti Mangue Curry 250g  | 16 | Predicted 16u but not ordered |
| [MF0033] MF Tarti Poivron chilli 250g | 16 | Predicted 16u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:23:10.593Z*
