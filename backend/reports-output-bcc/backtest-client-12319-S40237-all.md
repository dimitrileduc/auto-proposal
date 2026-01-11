# Rapport Backtest - Client Fonk's Backwaren SA

## Contexte

- **Client** : Fonk's Backwaren SA (ID: 12319)
- **Commande réelle** : S40237
- **Date commande** : 2025-11-12 08:54:29
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 1,907 input + 378 output = 2,285 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 2 produits prédits, 1 corrects |
| **Rappel** | 33.3% | 3 produits réels, 1 détectés |
| **F1-Score** | 40.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0043] MF Brotaufstrich Apfel Meerrettich 250g | 50 | 50 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [MF0043] MF Brotaufstrich Apfel Meerrettich 250g</strong> - LLM: 50u vs Médiane: 21u (Réel: 50u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 50u
- **Baseline calculee**: 50u
- **Mediane historique**: 21u
- **Reel commande**: 50u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 29u (58.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 50u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 50 à 70 jours entre les réapprovisionnements récents. La dernière commande datant du 22 septembre 2025 (soit 50 jours avant la date actuelle), le produit entre dans la zone de risque de rupture au regard du seuil de 30 jours. Bien que l'historique N-1 montre des volumes plus faibles (21u), la tendance récente de 2025 s'est stabilisée à un niveau supérieur. En appliquant la règle de la médiane sur les commandes les plus récentes (50, 50, 25), la valeur de 50 unités est retenue pour couvrir le cycle de consommation actuel et éviter une rupture de stock imminente.

**Tokens utilises pour cette prediction:**
- **Input**: 964 tokens
- **Output**: 180 tokens
- **Total**: 1,144 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [MF0043] MF Brotaufstrich Apfel Meerrettich 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 08:25:35: 50u
- 2025-07-14 11:42:35: 50u
- 2025-06-23 07:51:35: 25u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 10:17:35: 21u
- 2024-08-28 12:51:45: 21u
- 2023-11-21 07:33:10: 20u

**Quantite Mediane (fallback)**: 50u
**Quantite Reelle**: 50u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0034] MF Tarti Pomme Raifort 250g  | 21 | Predicted 21u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [VID0009] Consigne casier | 50 | Never ordered in previous analysis window (no history) |
| [VID0010] Consigne casier | 300 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:07:14.230Z*
