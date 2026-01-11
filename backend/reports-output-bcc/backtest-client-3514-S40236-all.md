# Rapport Backtest - Client LA FAGNARDE

## Contexte

- **Client** : LA FAGNARDE (ID: 3514)
- **Commande réelle** : S40236
- **Date commande** : 2025-11-10 11:38:16
- **Date cutoff système** : 2025-11-09 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 3,150 input + 525 output = 3,675 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 3 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

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
| [PF0078] FILOU CHASSEUR 5 L | 80 | 80 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 80u vs Médiane: 80u (Réel: 80u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 80u
- **Baseline calculee**: 80u
- **Mediane historique**: 80u
- **Reel commande**: 80u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 80u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre une fréquence de réapprovisionnement environ tous les 28 à 35 jours (août, septembre, fin septembre). La dernière commande datant du 29 septembre 2025, soit il y a 41 jours, le seuil de réapprovisionnement de 30 jours est largement dépassé, indiquant un risque de rupture immédiat. L'historique de l'année précédente confirme également une activité en novembre (commande le 04/11/2024). Concernant la quantité, les quatre dernières commandes sont strictement identiques à 80 unités. Conformément à la règle de maintien de la quantité pour une rotation régulière, la quantité retenue est de 80.

**Tokens utilises pour cette prediction:**
- **Input**: 1,101 tokens
- **Output**: 169 tokens
- **Total**: 1,270 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-29 15:22:37: 80u
- 2025-09-02 11:38:13: 80u
- 2025-08-05 09:17:00: 80u
- 2025-06-23 12:47:27: 80u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 11:00:54: 80u
- 2024-10-08 09:02:17: 60u
- 2024-08-06 10:02:55: 160u
- 2024-07-11 10:01:00: 80u
- 2024-06-04 09:16:10: 80u
- 2024-06-04 09:15:07: 10u
- 2024-05-06 09:38:38: 40u
- 2024-04-15 09:05:51: 30u
- 2024-02-19 09:37:49: 60u
- 2023-11-20 13:39:01: 60u

**Quantite Mediane (fallback)**: 80u
**Quantite Reelle**: 80u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0085] FILOU CURRY KETCHUP  10 KG | 27 | Predicted 27u but not ordered |
| [PF0096] FILOU MOUTARDE 3 KG | 140 | Predicted 140u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:59.738Z*
