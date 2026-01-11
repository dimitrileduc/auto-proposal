# Rapport Backtest - Client BOUCHERIE THERY

## Contexte

- **Client** : BOUCHERIE THERY (ID: 25846)
- **Commande réelle** : S39145
- **Date commande** : 2025-09-10 13:52:27
- **Date cutoff système** : 2025-09-09 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 908 input + 206 output = 1,114 total


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
| **MAE** | 24.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF0516] YVALLI PROVENCALE 2,5 KG BOC | 24 | 48 | 24.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - LLM: 24u vs Médiane: 24u (Réel: 48u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 24u
- **Baseline calculee**: 24u
- **Mediane historique**: 24u
- **Reel commande**: 48u
- **Erreur LLM**: 24u (50.0%)
- **Erreur Mediane**: 24u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 24u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 11 juin 2025, soit 90 jours avant la date actuelle. Bien que l'historique soit irrégulier, le délai écoulé dépasse largement les cycles observés précédemment (environ 75 jours entre les commandes de 2024). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande de 24u. Les commandes passées oscillent entre 24u et 48u. Conformément à la règle de privilégier la médiane et de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité de 24u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 206 tokens
- **Total**: 1,114 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 13:28:11: 24u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-03 08:50:43: 48u
- 2024-01-18 12:51:32: 24u

**Quantite Mediane (fallback)**: 24u
**Quantite Reelle**: 48u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:19:49.630Z*
