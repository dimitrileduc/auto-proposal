# Rapport Backtest - Client PIRONT LAURENT

## Contexte

- **Client** : PIRONT LAURENT (ID: 3767)
- **Commande réelle** : S38783
- **Date commande** : 2025-08-27 06:53:23
- **Date cutoff système** : 2025-08-26 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,407 input + 770 output = 5,177 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.0% | 5 produits prédits, 3 corrects |
| **Rappel** | 75.0% | 4 produits réels, 3 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 10.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 13.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -10.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 2 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 10 | 10 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF0096] FILOU MOUTARDE 3 KG | 3 | 5 | 2.0 | 40.0% | partial | Non | Non | LLM |
| [PF0959] FILOU TOMATO KETCHUP 10KG | 5 | 5 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM: 10u vs Médiane: 13u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 10u
- **Baseline calculee**: 10u
- **Mediane historique**: 13u
- **Reel commande**: 10u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 3u (30.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 10u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 23 mai 2025, soit plus de 90 jours sans activité. Bien que le cycle soit irrégulier, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours et les intervalles historiques observés l'année précédente (environ 5 mois). En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. La commande la plus récente est de 10u. L'historique N-1 montre des volumes de 15u, mais conformément à la règle de privilégier la quantité la plus basse en cas de doute ou de tendance incertaine, la médiane récente de 10u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 198 tokens
- **Total**: 1,107 tokens



</details>


<details>
<summary><strong>2. [PF0096] FILOU MOUTARDE 3 KG</strong> - LLM: 3u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 2u (40.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 23 mai 2025, soit environ 95 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B s'applique ici car le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'historique N-1, la quantité est basée sur la dernière commande connue (3u) pour couvrir un besoin potentiel et éviter une rupture prolongée sur cette référence.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 122 tokens
- **Total**: 992 tokens



</details>


<details>
<summary><strong>3. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM: 5u vs Médiane: 5u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 5u
- **Baseline calculee**: 5u
- **Mediane historique**: 5u
- **Reel commande**: 5u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 5u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 23 mai 2025, soit plus de 90 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les seuils de rotation standards. En l'absence d'historique complexe ou de saisonnalité N-1, la quantité est basée sur le dernier volume observé (5u) pour assurer le réapprovisionnement sans risque de surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 121 tokens
- **Total**: 994 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-23 11:29:06: 10u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-27 09:17:03: 15u
- 2024-01-25 09:47:19: 15u

**Quantite Mediane (fallback)**: 10u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>2. [PF0096] FILOU MOUTARDE 3 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-23 11:29:06: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>3. [PF0959] FILOU TOMATO KETCHUP 10KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-23 11:29:06: 5u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 5u
**Quantite Reelle**: 5u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 1 | Predicted 1u but not ordered |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [PF0097] FILOU MOUTARDE 5 KG | 3 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:24:13.812Z*
