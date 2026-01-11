# Rapport Backtest - Client VDS FOOD

## Contexte

- **Client** : VDS FOOD (ID: 72511)
- **Commande réelle** : S39897
- **Date commande** : 2025-10-23 12:55:33
- **Date cutoff système** : 2025-10-22 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,433 input + 787 output = 5,220 total


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
| **MAE** | 4.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 100.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 100.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 100.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF034] JF SAMOURAI SQUEEZE 300ML | 8 | 4 | 4.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 8u vs Médiane: 8u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 8u
- **Baseline calculee**: 8u
- **Mediane historique**: 8u
- **Reel commande**: 4u
- **Erreur LLM**: 4u (100.0%)
- **Erreur Mediane**: 4u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 8u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 18 juillet 2025, soit 96 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En l'absence d'historique complet pour établir une fréquence précise, le principe de précaution s'applique car le risque de rupture est élevé ou le stock est probablement épuisé. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de multiples points de données, la quantité de la dernière commande (8 unités) est utilisée comme référence. Conformément aux règles de maintien des volumes sur rotation faible ou régulière, on reconduit la quantité de 8 unités pour couvrir le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 185 tokens
- **Total**: 1,058 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 06:16:07: 8u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 8u
**Quantite Reelle**: 4u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:27:43.621Z*
