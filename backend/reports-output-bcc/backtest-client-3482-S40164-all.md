# Rapport Backtest - Client VDS  FOOD

## Contexte

- **Client** : VDS  FOOD (ID: 3482)
- **Commande réelle** : S40164
- **Date commande** : 2025-11-06 10:51:54
- **Date cutoff système** : 2025-11-05 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,872 input + 1,160 output = 8,032 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.7% | 6 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 28.6% | Score equilibre global |

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 14 à 25 jours. La dernière commande datant du 08/10/2025 (soit 28 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est atteint, présentant un risque de rupture imminent. L'historique N-1 confirme également une activité soutenue sur cette période (octobre/novembre). La quantité de 80 unités est systématique et constante sur toutes les dernières commandes, correspondant à la médiane et au volume de rotation habituel du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 1,172 tokens
- **Output**: 145 tokens
- **Total**: 1,317 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 14:25:30: 80u
- 2025-09-24 14:51:56: 80u
- 2025-08-25 08:10:13: 80u
- 2025-08-13 08:38:41: 80u
- 2025-07-22 09:18:05: 80u
- 2025-06-19 11:22:05: 80u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-18 10:07:21: 80u
- 2024-10-07 14:02:24: 80u
- 2024-09-25 19:43:32: 80u
- 2024-08-28 08:55:36: 80u
- 2024-08-13 11:09:17: 80u
- 2024-08-08 06:29:58: 80u
- 2024-07-22 08:19:23: 80u
- 2024-07-11 08:40:08: 80u
- 2024-06-24 13:18:37: 60u
- 2024-06-04 09:26:50: 80u
- 2024-05-16 15:20:35: 80u
- 2024-04-30 07:21:58: 80u

**Quantite Mediane (fallback)**: 80u
**Quantite Reelle**: 80u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0077] FILOU PROVENCALE 5 L | 18 | Predicted 18u but not ordered |
| [PF1640] JF MITRAILLETTE SQUEEZE 300ML | 7 | Predicted 7u but not ordered |
| [PF1598] JF ANDALOUSE SQUEEZE 300ML | 6 | Predicted 6u but not ordered |
| [PF1601] JF SAMOURAI SQUEEZE 300ML | 5 | Predicted 5u but not ordered |
| [PF1639] JF BURGER SQUEEZE 300ML | 8 | Predicted 8u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:51.811Z*
