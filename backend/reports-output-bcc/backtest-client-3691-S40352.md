# Rapport Backtest - Client SRL WAL’EPICES

## Contexte

- **Client** : SRL WAL’EPICES (ID: 3691)
- **Commande réelle** : S40352
- **Date commande** : 2025-11-13 14:53:05
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 2,104 input + 296 output = 2,400 total


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
| **MAE** | 160.00 unités | Erreur moyenne absolue (symétrique) |
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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 320 | 160.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 160u (Réel: 320u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 160u
- **Baseline calculee**: 160u
- **Mediane historique**: 160u
- **Reel commande**: 320u
- **Erreur LLM**: 160u (50.0%)
- **Erreur Mediane**: 160u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 160u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 35 à 45 jours. La dernière commande datant du 21 octobre (soit 22 jours avant la date actuelle), le risque de rupture se situe dans l'horizon des 30 jours du seuil de réapprovisionnement (Replenishment Threshold Days). En application du principe de précaution B2B, un besoin est détecté. Concernant la quantité, l'historique récent et N-1 montre une récurrence forte sur le volume de 160u, qui constitue la médiane et la valeur standard hors pics exceptionnels. On maintient donc cette quantité de 160u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,149 tokens
- **Output**: 158 tokens
- **Total**: 1,307 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 11:32:14: 160u
- 2025-09-17 06:30:43: 80u
- 2025-09-04 07:33:26: 160u
- 2025-07-24 12:10:38: 160u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-16 12:01:30: 400u
- 2024-09-10 06:41:36: 160u
- 2024-07-15 11:39:10: 160u
- 2024-07-05 07:07:23: 160u
- 2024-06-11 07:58:05: 160u
- 2024-05-27 08:26:05: 160u
- 2024-04-30 10:09:43: 80u
- 2024-04-22 07:06:13: 160u
- 2024-03-22 10:16:33: 160u
- 2024-02-06 09:17:16: 160u
- 2024-01-15 10:16:03: 160u
- 2023-12-06 09:03:16: 80u

**Quantite Mediane (fallback)**: 160u
**Quantite Reelle**: 320u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0097] FILOU MOUTARDE 5 KG | 10 | Predicted 10u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:07:07.479Z*
