# Rapport Backtest - Client ROCH EPICES

## Contexte

- **Client** : ROCH EPICES (ID: 3520)
- **Commande réelle** : S40231
- **Date commande** : 2025-11-12 12:42:52
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 1,171 input + 192 output = 1,363 total


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
| **MAE** | 32.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 13.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 13.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -13.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 208 | 240 | 32.0 | 13.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 208u vs Médiane: 224u (Réel: 240u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 208u
- **Baseline calculee**: 208u
- **Mediane historique**: 224u
- **Reel commande**: 240u
- **Erreur LLM**: 32u (13.3%)
- **Erreur Mediane**: 16u (6.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 208u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 25 à 30 jours entre les réapprovisionnements récents (13/10, 29/09, 04/09). Depuis la dernière commande du 13 octobre 2025, 29 jours se sont écoulés, ce qui dépasse le seuil de 70% du cycle habituel. Avec un horizon de réapprovisionnement de 30 jours, le risque de rupture est imminent. Conformément à la règle de la médiane sur l'historique récent (240, 160, 208, 320, 133), la valeur centrale est de 208 unités. Cette quantité est cohérente avec les volumes historiques et permet de couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,171 tokens
- **Output**: 192 tokens
- **Total**: 1,363 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 08:20:19: 240u
- 2025-09-29 15:36:57: 160u
- 2025-09-04 07:34:49: 208u
- 2025-07-08 13:19:17: 320u
- 2025-07-08 13:19:17: 133u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-29 11:04:03: 240u
- 2024-09-26 08:46:51: 320u
- 2024-09-12 12:06:30: 160u
- 2024-08-14 07:06:33: 160u
- 2024-06-12 07:36:40: 320u
- 2024-05-31 06:40:58: 160u
- 2024-05-16 14:24:33: 160u
- 2024-04-19 08:17:06: 160u
- 2024-03-25 07:32:57: 160u
- 2024-02-06 10:16:40: 240u
- 2024-02-02 11:34:32: 160u
- 2024-01-16 11:25:54: 320u

**Quantite Mediane (fallback)**: 208u
**Quantite Reelle**: 240u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:06:53.433Z*
