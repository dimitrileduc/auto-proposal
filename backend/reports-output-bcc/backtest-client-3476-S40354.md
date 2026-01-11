# Rapport Backtest - Client RETAIL PARTNERS  SA

## Contexte

- **Client** : RETAIL PARTNERS  SA (ID: 3476)
- **Commande réelle** : S40354
- **Date commande** : 2025-11-13 15:20:17
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 5,389 input + 855 output = 6,244 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 20.0% | 5 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 33.3% | Score equilibre global |

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
| [PF1501] BONI VINAI CIBOULETTE 450ML | 126 | 126 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF1501] BONI VINAI CIBOULETTE 450ML</strong> - LLM: 126u vs Médiane: 126u (Réel: 126u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 126u
- **Baseline calculee**: 126u
- **Mediane historique**: 126u
- **Reel commande**: 126u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 126u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION) : La dernière commande remonte au 25 septembre 2025, soit 48 jours avant la date actuelle (12 novembre). L'historique montre des cycles de commande variant entre 14 et 58 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent, car nous dépassons largement le délai moyen de rotation observé. ÉTAPE 2 (QUANTITÉ) : L'historique récent est extrêmement stable avec une quantité constante de 126 unités par commande. La médiane des commandes récentes est de 126. Conformément à la règle de maintien des quantités régulières, la quantité préconisée est de 126 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,158 tokens
- **Output**: 177 tokens
- **Total**: 1,335 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF1501] BONI VINAI CIBOULETTE 450ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-25 14:48:43: 126u
- 2025-07-29 06:27:54: 126u
- 2025-07-17 12:24:33: 126u
- 2025-07-03 12:28:47: 126u
- 2025-06-20 10:50:33: 126u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-10 11:50:15: 126u
- 2024-08-22 13:40:56: 126u
- 2024-08-06 08:49:18: 126u
- 2024-07-04 11:45:00: 126u
- 2024-05-30 11:37:28: 126u
- 2024-05-23 13:40:52: 126u
- 2024-04-11 11:44:22: 252u
- 2024-03-21 13:01:32: 126u
- 2024-02-22 14:32:27: 126u
- 2024-01-11 08:09:31: 126u
- 2023-12-20 10:10:46: 126u

**Quantite Mediane (fallback)**: 126u
**Quantite Reelle**: 126u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0563] BONI MOUTARDE DOUCE 300 GR | 130 | Predicted 130u but not ordered |
| [PF1502] BONI VINAI FINE HERBE 450ML | 126 | Predicted 126u but not ordered |
| [PF1503] BONI VINAI MOUTARDE 450ML | 126 | Predicted 126u but not ordered |
| [PF3302] BONI BIO MAYONNAISE 500ML | 110 | Predicted 110u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:49.625Z*
