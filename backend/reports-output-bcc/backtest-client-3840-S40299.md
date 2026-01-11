# Rapport Backtest - Client KORO HANDELS GmbH

## Contexte

- **Client** : KORO HANDELS GmbH (ID: 3840)
- **Commande réelle** : S40299
- **Date commande** : 2025-11-13 07:44:27
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 12
- **Tokens**: 11,622 input + 2,057 output = 13,679 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 8.3% | 12 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 15.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 80.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 93.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 93.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 93.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF3252] DK_AUFSTR_040 KORO TARTINADE BIO AUBERGI 180G | 166 | 86 | 80.0 | 93.0% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF3252] DK_AUFSTR_040 KORO TARTINADE BIO AUBERGI 180G</strong> - LLM: 166u vs Médiane: 166u (Réel: 86u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 166u
- **Baseline calculee**: 166u
- **Mediane historique**: 166u
- **Reel commande**: 86u
- **Erreur LLM**: 80u (93.0%)
- **Erreur Mediane**: 80u (93.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 166u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Il n'y a aucune commande récente enregistrée. L'historique de l'année précédente montre des commandes en mai et juillet. En l'absence de données récentes et compte tenu du délai important depuis la dernière commande connue, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée. Le besoin est considéré comme certain ou incertain, ce qui déclenche une commande. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique N-1 est la seule référence disponible. Les deux dernières commandes connues étaient de 166 unités. La médiane et la valeur constante de ces commandes historiques dictent une quantité de 166 unités pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 172 tokens
- **Total**: 1,081 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF3252] DK_AUFSTR_040 KORO TARTINADE BIO AUBERGI 180G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 08:52:11: 166u
- 2024-05-23 08:12:27: 166u

**Quantite Mediane (fallback)**: 166u
**Quantite Reelle**: 86u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3362] DE_AUFSTR_037_T6 KORO TARTINADE BIO HOUMOUS 380g | 166 | Predicted 166u but not ordered |
| [PF3253] DK_AUFSTR_039 KORO TARTINADE BIO TOMATE 180G | 166 | Predicted 166u but not ordered |
| [PF3312] DE_AUFSTR_036_T6 KORO TARTINADE BIO AUBERGINE 380G | 1826 | Predicted 1826u but not ordered |
| [PF3314] DE_AUFSTR_038_T6 KORO TARTINADE BIO TOMATE 380G | 4224 | Predicted 4224u but not ordered |
| [PF3313] DE_AUFSTR_034_T6 KORO TARTINADE BIO MANGUE 380G | 1500 | Predicted 1500u but not ordered |
| [PF3363] DE_AUFSTR_041_T6 KORO TARTINADE BIO BETTERAVE 380G  | 172 | Predicted 172u but not ordered |
| [PF3320] DE_AUFSTR_043 KORO TARTINADE BIO MOUTARDE AGAVE 380G | 43 | Predicted 43u but not ordered |
| [PF3364] DE_OLIVE_013_T6 KORO TARTINADE BIO OLIVE 380G | 86 | Predicted 86u but not ordered |
| [PF3258] NL_AUFSTR_038 KORO TARTINADE BIO TOMATE 380G | 43 | Predicted 43u but not ordered |
| [PF2008] KORO TARTINADE BIO OLIVE 390 | 82 | Predicted 82u but not ordered |
| [PF3342] DE_AUFSTR_042_T6 KORO TARTINADE BIO PAPRIKA CHILI 380G | 1980 | Predicted 1980u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:23.322Z*
