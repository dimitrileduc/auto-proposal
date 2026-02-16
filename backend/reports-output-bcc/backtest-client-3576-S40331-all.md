# Rapport Backtest - Client HOUGARDY S.A.

## Contexte

- **Client** : HOUGARDY S.A. (ID: 3576)
- **Commande réelle** : S40331
- **Date commande** : 2025-11-13 13:56:08
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 2,307 input + 316 output = 2,623 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 2 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 160 | 160 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 160u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 160u
- **Baseline calculee**: 160u
- **Mediane historique**: 160u
- **Reel commande**: 160u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 160u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande très fréquent, généralement tous les 7 à 14 jours. La dernière commande datant du 06/11 (il y a 6 jours), le risque de rupture est élevé dans l'horizon des 30 jours (seuil de réapprovisionnement). Bien que la dernière commande fût de 80u, le volume récurrent le plus fréquent et la médiane des commandes récentes s'établissent à 160u. En application du principe de précaution B2B pour éviter une rupture sur un produit à rotation rapide, une commande de 160u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,222 tokens
- **Output**: 152 tokens
- **Total**: 1,374 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-06 11:37:10: 80u
- 2025-10-30 08:16:33: 160u
- 2025-10-09 09:00:46: 160u
- 2025-10-02 11:42:51: 80u
- 2025-09-25 06:26:38: 160u
- 2025-09-11 08:09:42: 160u
- 2025-09-05 07:35:32: 80u
- 2025-08-22 09:59:43: 160u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-29 14:10:50: 160u
- 2024-10-17 10:13:31: 160u
- 2024-10-03 06:59:28: 160u
- 2024-09-24 07:02:33: 160u
- 2024-09-12 09:58:22: 160u
- 2024-09-05 11:35:13: 80u
- 2024-08-14 06:06:20: 80u
- 2024-07-04 07:42:30: 160u
- 2024-06-27 07:49:07: 80u
- 2024-06-18 08:13:28: 160u
- 2024-06-06 12:24:49: 160u
- 2024-05-08 14:34:51: 160u

**Quantite Mediane (fallback)**: 160u
**Quantite Reelle**: 160u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0077] FILOU PROVENCALE 5 L | 40 | Predicted 40u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:37.756Z*
