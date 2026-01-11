# Rapport Backtest - Client DUMORTIER   ETS.

## Contexte

- **Client** : DUMORTIER   ETS. (ID: 3894)
- **Commande réelle** : S40206
- **Date commande** : 2025-11-07 12:29:40
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 4,187 input + 640 output = 4,827 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 4 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 24.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 27.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -27.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0516] YVALLI PROVENCALE 2,5 KG BOC | 48 | 96 | 48.0 | 50.0% | partial | Non | Non | LLM |
| [PF0077] FILOU PROVENCALE 5 L | 80 | 80 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - LLM: 48u vs Médiane: 48u (Réel: 96u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 48u
- **Baseline calculee**: 48u
- **Mediane historique**: 48u
- **Reel commande**: 96u
- **Erreur LLM**: 48u (50.0%)
- **Erreur Mediane**: 48u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 48u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 35 à 45 jours. La dernière commande datant du 13 octobre (il y a 24 jours), le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Bien que la dernière commande ait été de 24 unités, l'historique récent et N-1 montre une médiane stable à 48 unités. En application du principe de précaution B2B et pour maintenir le stock sur ce format de 2,5 KG, la quantité médiane de 48 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,126 tokens
- **Output**: 144 tokens
- **Total**: 1,270 tokens



</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 80u vs Médiane: 80u (Réel: 80u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 35 à 40 jours (dernières commandes le 31/07, 09/09 et 13/10). Au 06/11, 24 jours se sont écoulés depuis la dernière commande, ce qui représente environ 65-70% du cycle habituel. Compte tenu du seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent durant cette période. L'historique N-1 confirme également une activité soutenue en novembre (commande le 04/11/2024). La quantité est fixée à 80 unités, correspondant à la médiane constante et stricte de toutes les commandes passées.

**Tokens utilises pour cette prediction:**
- **Input**: 1,136 tokens
- **Output**: 183 tokens
- **Total**: 1,319 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0516] YVALLI PROVENCALE 2,5 KG BOC</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 13:02:08: 24u
- 2025-09-09 08:57:38: 48u
- 2025-07-31 05:38:36: 48u
- 2025-06-30 08:08:29: 48u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 10:58:46: 48u
- 2024-09-16 12:02:38: 48u
- 2024-09-05 12:57:09: 48u
- 2024-06-17 07:47:11: 72u
- 2024-05-31 06:53:10: 72u
- 2024-04-26 07:22:05: 72u
- 2024-03-14 09:43:20: 48u
- 2024-02-28 12:33:46: 48u
- 2024-01-24 10:59:31: 48u
- 2024-01-09 15:01:54: 48u
- 2023-12-06 12:03:44: 48u

**Quantite Mediane (fallback)**: 48u
**Quantite Reelle**: 96u

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 13:02:08: 80u
- 2025-09-09 08:57:38: 80u
- 2025-07-31 05:38:36: 80u
- 2025-06-30 08:08:29: 80u

**Commandes N-1 (meme periode annee derniere):**
- 2024-11-04 10:58:46: 80u
- 2024-09-16 12:02:38: 80u
- 2024-08-30 09:51:05: 80u
- 2024-08-05 13:37:34: 80u
- 2024-06-17 07:47:11: 80u
- 2024-04-26 07:22:50: 80u
- 2024-03-14 09:42:44: 80u
- 2024-02-28 12:31:36: 80u
- 2024-01-24 10:58:40: 80u
- 2024-01-09 15:01:54: 0u
- 2024-01-09 15:01:24: 80u
- 2023-12-06 12:04:56: 80u

**Quantite Mediane (fallback)**: 80u
**Quantite Reelle**: 80u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0509] YVALLI GR BOUL TOMATE 2,5 KG | 24 | Predicted 24u but not ordered |
| [PF0549] YVALLI SAUCE PIZZA 2,5 KG | 24 | Predicted 24u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:33.330Z*
