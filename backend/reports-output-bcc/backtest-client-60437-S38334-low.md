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
| **Précision** | 18.2% | 11 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 30.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0014] MF Olives noires 500g | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [MF0014] MF Olives noires 500g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 28 avril 2025, soit environ 98 jours. Bien que la rotation soit très faible (1 unité), l'absence de commandes récentes et l'incertitude sur le cycle de réapprovisionnement imposent l'application du principe de précaution B2B. Le délai écoulé suggère un besoin potentiel imminent pour éviter une rupture prolongée. Conformément aux règles de gestion des rotations faibles, la quantité est maintenue à la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 118 tokens
- **Total**: 988 tokens



</details>


<details>
<summary><strong>2. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin - Absence totale d'historique de commandes (récentes et N-1). En application du principe de précaution B2B, tout doute sur le cycle ou l'absence de données doit conduire à prévoir une commande pour éviter une rupture potentielle dès le lancement ou la reprise du produit. ÉTAPE 2 : Estimation quantité - En l'absence de médiane historique, la règle pour les rotations faibles ou inconnues impose de maintenir une quantité minimale de sécurité. Une unité est préconisée pour initialiser le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 861 tokens
- **Output**: 131 tokens
- **Total**: 992 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [MF0014] MF Olives noires 500g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-28 08:28:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (9)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [fsv17] Mélange de noix bio vrac 2,75kg | 1 | Predicted 1u but not ordered |
| [fsv13] Pistaches grillées salées bio vrac 2,6kg  | 1 | Predicted 1u but not ordered |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Predicted 1u but not ordered |
| [NUT03] NUTS & BERRIES energy bar Mediterran bio 40g | 1 | Predicted 1u but not ordered |
| [NUT07] NUTS & BERRIES Bar choco noir caramel salé bio 40g | 1 | Predicted 1u but not ordered |
| [LV165] LV Vol-au-vent (avec viande de volaille) 400 g | 1 | Predicted 1u but not ordered |
| [REB11] ReBEL chips premium & bio - truffes 125g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:14:06.810Z*
