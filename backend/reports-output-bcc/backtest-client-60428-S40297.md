# Rapport Backtest - Client LA SALLE A MANGER

## Contexte

- **Client** : LA SALLE A MANGER (ID: 60428)
- **Commande réelle** : S40297
- **Date commande** : 2025-11-14 10:19:38
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 6
- **Tokens**: 5,288 input + 976 output = 6,264 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 4 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 85.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 44.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 11.1% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 4 | 2 | 2.0 | 100.0% | partial | Non | Non | LLM |
| [UPI01] Jus de pomme bio d'UPIGNY 250ml | 4 | 4 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM: 2u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse montre un cycle de commande long et irrégulier (environ 79 jours entre les deux dernières commandes). Depuis la dernière commande du 24 septembre, 50 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons l'horizon de risque de rupture (50 + 30 = 80 jours), ce qui correspond à la périodicité observée. En application du principe de précaution B2B et face à l'incertitude du cycle, un besoin est détecté. La quantité est fixée à 2 unités, correspondant à la valeur basse de l'historique récent (médiane entre 2 et 3, choix du plus bas pour éviter le surstockage sur un produit à rotation lente).

**Tokens utilises pour cette prediction:**
- **Input**: 899 tokens
- **Output**: 176 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>2. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 4u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/07/2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B. Le risque de rupture est considéré comme présent par défaut de visibilité. ÉTAPE 2 : Estimation de la quantité. L'historique récent présente une commande unique de 4 unités. En l'absence d'autres points de comparaison ou de saisonnalité N-1, la quantité de la dernière commande (médiane de l'historique disponible) est reconduite pour maintenir le stock sans risque de surstockage majeur.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 168 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>3. [UPI01] Jus de pomme bio d'UPIGNY 250ml</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 07/07/2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'absence de commande récente sur une période aussi longue, combinée au principe de précaution B2B, impose de prévoir un réapprovisionnement pour éviter une rupture de stock prolongée, surtout avec un seuil de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent ne présente qu'une seule commande de 4 unités. Conformément à la règle de maintien des quantités pour les rotations faibles et régulières, la quantité retenue est la médiane de l'historique disponible, soit 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 169 tokens
- **Total**: 1,043 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 06:18:36: 3u
- 2025-07-07 09:18:45: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-07 09:18:45: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [UPI01] Jus de pomme bio d'UPIGNY 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-07 09:18:45: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [RIT05] RITCHIE Cola - verre 275ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:14:48.244Z*
