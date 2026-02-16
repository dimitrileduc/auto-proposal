# Rapport Backtest - Client H-FOOD

## Contexte

- **Client** : H-FOOD (ID: 3654)
- **Commande réelle** : S38552
- **Date commande** : 2025-08-19 09:03:33
- **Date cutoff système** : 2025-08-18 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 1,065 input + 145 output = 1,210 total


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
| [PF0078] FILOU CHASSEUR 5 L | 80 | 80 | 0.0 | 0.0% | exact | LLM |


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
L'analyse de l'historique montre un cycle de commande régulier d'environ 25 à 35 jours. La dernière commande datant du 16 juillet 2025 (soit 33 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est atteint. Le risque de rupture est imminent. Concernant la quantité, l'historique récent et N-1 sur la même période indiquent une stabilité parfaite à 80 unités. La médiane des commandes est de 80u, ce qui constitue la cible de réapprovisionnement pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,065 tokens
- **Output**: 145 tokens
- **Total**: 1,210 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-16 08:21:35: 80u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-22 06:55:16: 80u
- 2024-06-28 07:19:45: 80u
- 2024-05-30 11:09:52: 80u
- 2024-02-07 09:25:50: 80u
- 2024-02-05 14:03:17: 160u
- 2024-01-15 07:36:33: 80u
- 2023-12-15 10:09:45: 80u
- 2023-11-10 08:19:53: 80u
- 2023-10-16 09:26:31: 80u
- 2023-09-18 12:39:59: 60u
- 2023-08-24 07:58:01: 60u

**Quantite Mediane (fallback)**: 80u
**Quantite Reelle**: 80u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:22:18.717Z*
