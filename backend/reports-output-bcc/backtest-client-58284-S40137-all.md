# Rapport Backtest - Client SPRL GOOD & FOOD

## Contexte

- **Client** : SPRL GOOD & FOOD (ID: 58284)
- **Commande réelle** : S40137
- **Date commande** : 2025-11-05 11:38:00
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 16
- **Tokens**: 14,063 input + 2,222 output = 16,285 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 14.3% | 14 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 25.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 188.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 73.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 72.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -73.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF3354] DLL DRESSING AVOCAT BALSAMICO 240ML | 20 | 273 | 253.0 | 92.7% | partial | Non | Non | LLM |
| [PF3356] DLL DRESSING AVOCAT CORIANDRE LIME 240ML | 118 | 242 | 124.0 | 51.2% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF3354] DLL DRESSING AVOCAT BALSAMICO 240ML</strong> - LLM: 20u vs Médiane: 165u (Réel: 273u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 20u
- **Baseline calculee**: 20u
- **Mediane historique**: 165u
- **Reel commande**: 273u
- **Erreur LLM**: 253u (92.7%)
- **Erreur Mediane**: 108u (39.6%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 20u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 14 août 2025, soit 82 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de rotation standard pour ce type de produit. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. En l'absence de données multiples pour calculer une médiane, la quantité de la commande la plus récente (20u) est reconduite pour maintenir le stock sans surévaluer.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 164 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>2. [PF3356] DLL DRESSING AVOCAT CORIANDRE LIME 240ML</strong> - LLM: 118u vs Médiane: 341u (Réel: 242u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 118u
- **Baseline calculee**: 118u
- **Mediane historique**: 341u
- **Reel commande**: 242u
- **Erreur LLM**: 124u (51.2%)
- **Erreur Mediane**: 99u (40.9%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 118u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 14 août 2025, soit 82 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En l'absence d'historique de cycle, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. ÉTAPE 2 : La seule donnée historique disponible est de 118 unités. En l'absence d'autres points de comparaison ou de saisonnalité N-1, cette quantité est retenue comme base de référence pour le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 881 tokens
- **Output**: 162 tokens
- **Total**: 1,043 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF3354] DLL DRESSING AVOCAT BALSAMICO 240ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 12:47:50: 20u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 273u

</details>


<details>
<summary><strong>2. [PF3356] DLL DRESSING AVOCAT CORIANDRE LIME 240ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-14 12:47:50: 118u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 118u
**Quantite Reelle**: 242u

</details>




---

## False Positives (12)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3357] DLL DRESSING AVOCAT GINGER MANGO 240ML | 110 | Predicted 110u but not ordered |
| [PF3353] DLL DRESSING AVOCAT MIEL MOUTARDE 240ML | 125 | Predicted 125u but not ordered |
| [PF3358] DLL DRESSING AVOCAT ITALIAN 240ML | 124 | Predicted 124u but not ordered |
| [PF3359] DLL MAYONNAISE AVOCAT CHIPOTLE 200ML | 350 | Predicted 350u but not ordered |
| [ING0271] SIROP D'AGAVE BIO | 25 | Predicted 25u but not ordered |
| [PF3355] DLL DRESSING AVOCAT POPPY SEEDS 240ML | 401 | Predicted 401u but not ordered |
| [PF3350] DLL MARINADE AVOCAT 8 HERBS 240ML | 8 | Predicted 8u but not ordered |
| [PF3360] DLL MAYONNAISE AVOCAT 200ML | 141 | Predicted 141u but not ordered |
| [PI3338] PI VINAIGRETTE CILANTRO LIME G&F | 80 | Predicted 80u but not ordered |
| [PI3336] PI VINAIGRETTE ITALIAN G&F | 85 | Predicted 85u but not ordered |
| [PI3337] PI VINAIGRETTE GRAINES DE PAVOT G&F | 95 | Predicted 95u but not ordered |
| [PI3333] PI VINAIGRETTE MIEL MOUTARDE G&F | 95 | Predicted 95u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:10.174Z*
