# Rapport Backtest - Client DLL AD GERAARDSBERGEN

## Contexte

- **Client** : DLL AD GERAARDSBERGEN (ID: 38803)
- **Commande réelle** : S39064
- **Date commande** : 2025-09-08 06:09:55
- **Date cutoff système** : 2025-09-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 39
- **Tokens**: 36,727 input + 6,403 output = 43,130 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 1 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 2.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 100.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 100.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 100.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 4 | 2 | 2.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 4u vs Médiane: 4u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 2u
- **Erreur LLM**: 2u (100.0%)
- **Erreur Mediane**: 2u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 17 juillet, soit 52 jours avant la date actuelle. En l'absence d'un historique plus dense pour définir un cycle précis, le principe de précaution B2B s'applique car le délai écoulé suggère un besoin imminent de réapprovisionnement pour couvrir les 30 prochains jours. ÉTAPE 2 : L'historique récent présente une commande unique de 4 unités. Conformément à la règle de maintien des quantités pour les rotations régulières ou faibles, la quantité retenue est de 4 unités (médiane de l'historique disponible).

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 143 tokens
- **Total**: 1,017 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-17 06:51:09: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 2u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:09:13.834Z*
