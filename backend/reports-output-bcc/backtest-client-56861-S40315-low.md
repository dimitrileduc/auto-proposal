# Rapport Backtest - Client ITM LIÈGE COINTE

## Contexte

- **Client** : ITM LIÈGE COINTE (ID: 56861)
- **Commande réelle** : S40315
- **Date commande** : 2025-11-13 10:33:59
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 30
- **Tokens**: 26,988 input + 4,648 output = 31,636 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 23.1% | 13 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 37.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 3.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 62.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 58.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -62.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LD013] LD Tuscan Organic Spread 180 g | 2 | 8 | 6.0 | 75.0% | partial | LLM |
| [LD014] LD Organic Avocado Spread 180 g | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [LD015] LD Onion Spread 180g | 2 | 4 | 2.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 8u
- **Erreur LLM**: 6u (75.0%)
- **Erreur Mediane**: 6u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 09/10/2025, soit 34 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le cycle de commande est largement atteint. Bien que l'historique soit limité à une seule commande récente, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter la rupture. La quantité retenue est de 2 unités, correspondant à la valeur de la dernière commande connue (médiane sur historique disponible).

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 121 tokens
- **Total**: 993 tokens



</details>


<details>
<summary><strong>2. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
La dernière commande remonte au 09/10/2025, soit 34 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le cycle de commande est largement atteint. En l'absence d'historique étendu ou de données N-1, le principe de précaution B2B s'applique pour éviter une rupture de stock. La quantité retenue correspond à la dernière commande connue (2 unités), respectant la règle de maintien des volumes pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 121 tokens
- **Total**: 993 tokens



</details>


<details>
<summary><strong>3. [LD015] LD Onion Spread 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
La dernière commande remonte au 09/10/2025, soit 34 jours avant la date actuelle. Le seuil de réapprovisionnement étant de 30 jours, le cycle de commande est atteint ou dépassé, ce qui indique un risque de rupture imminent. En l'absence d'historique plus large ou de données N-1, la règle de précaution B2B impose de prévoir une commande. La quantité est fixée à 2 unités, correspondant au volume de la commande la plus récente pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 868 tokens
- **Output**: 129 tokens
- **Total**: 997 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 11:26:33: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>2. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 11:26:33: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [LD015] LD Onion Spread 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-09 11:26:33: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>




---

## False Positives (10)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [KOKO01] KOKO Kombucha original 330ml | 1 | Predicted 1u but not ordered |
| [KOKO03] KOKO Kombucha Raspberry Hibiscus 330ml | 1 | Predicted 1u but not ordered |
| [LEA06] LEAMO maté 330ml | 1 | Predicted 1u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [LD008] LD Tartinade Pois chiches bio 180g   | 2 | Predicted 2u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Predicted 2u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Predicted 2u but not ordered |
| [SOWA03] SOWA ginger beer ardent 250ml | 1 | Predicted 1u but not ordered |
| [SOWA04] SOWA thé glacé pêche 250ml | 1 | Predicted 1u but not ordered |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:10.502Z*
