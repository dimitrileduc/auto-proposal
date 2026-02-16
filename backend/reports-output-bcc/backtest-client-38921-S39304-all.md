# Rapport Backtest - Client ESCAVIR

## Contexte

- **Client** : ESCAVIR (ID: 38921)
- **Commande réelle** : S39304
- **Date commande** : 2025-09-24 06:16:54
- **Date cutoff système** : 2025-09-23 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,420 input + 823 output = 5,243 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 40.0% | 5 produits prédits, 2 corrects |
| **Rappel** | 50.0% | 4 produits réels, 2 détectés |
| **F1-Score** | 44.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 4 | 6 | 2.0 | 33.3% | partial | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 4u vs Médiane: 4u (Réel: 6u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 6u
- **Erreur LLM**: 2u (33.3%)
- **Erreur Mediane**: 2u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 19 juin 2025, soit plus de 90 jours. Bien que l'historique soit faible, la date actuelle (23 septembre) correspond à la période de commande de l'année précédente (septembre 2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une stabilité parfaite à 4 unités. La médiane est de 4. On maintient cette quantité constante pour répondre au besoin saisonnier identifié.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 170 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>2. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse montre une rotation très faible et irrégulière, avec une dernière commande remontant à plus de 90 jours (juin 2025). Bien que le cycle soit difficile à établir, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu à la même période l'année précédente (septembre 2024). Conformément aux règles de gestion des faibles rotations, la quantité retenue est de 2 unités, correspondant à la médiane du volume récent, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 885 tokens
- **Output**: 142 tokens
- **Total**: 1,027 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 10:39:02: 4u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:01:08: 4u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 6u

</details>


<details>
<summary><strong>2. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-19 10:39:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 07:01:08: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 4 | Predicted 4u but not ordered |
| [JF009] JF SAUCE TARTARE 250ML WECK | 4 | Predicted 4u but not ordered |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 2 | Predicted 2u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 6 | Never ordered in previous analysis window (no history) |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:20:06.500Z*
