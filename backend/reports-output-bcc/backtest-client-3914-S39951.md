# Rapport Backtest - Client SLIGRO B.V.

## Contexte

- **Client** : SLIGRO B.V. (ID: 3914)
- **Commande réelle** : S39951
- **Date commande** : 2025-10-28 07:35:05
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 1,087 input + 184 output = 1,271 total


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
| **MAE** | 64.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0088] FILOU VOL AU VENT 800 GR | 64 | 128 | 64.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 64u vs Médiane: 64u (Réel: 128u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 64u
- **Baseline calculee**: 64u
- **Mediane historique**: 64u
- **Reel commande**: 128u
- **Erreur LLM**: 64u (50.0%)
- **Erreur Mediane**: 64u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 64u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 02/10/2025, soit 25 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. L'historique montre une accélération des commandes en octobre (cycle de 2 à 8 jours récemment). Bien qu'une commande de 192u ait été enregistrée le 02/10, la quantité récurrente (médiane) observée tant sur l'historique récent que sur l'année précédente (N-1) est de 64u. En application du principe de précaution B2B et de la règle de la médiane pour éviter le surstockage lié aux pics exceptionnels, une commande de 64u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,087 tokens
- **Output**: 184 tokens
- **Total**: 1,271 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 12:35:34: 192u
- 2025-09-30 07:38:02: 64u
- 2025-09-22 14:29:20: 64u
- 2025-07-10 11:08:16: 64u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-07 13:47:08: 64u
- 2024-10-07 13:47:08: 64u
- 2024-10-01 11:28:51: 192u
- 2024-10-01 11:28:51: 192u
- 2024-08-26 13:30:37: 64u
- 2024-06-25 08:43:03: 64u
- 2024-04-02 08:22:04: 64u
- 2023-11-23 14:38:14: 64u
- 2023-11-13 14:43:11: 64u

**Quantite Mediane (fallback)**: 64u
**Quantite Reelle**: 128u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:27.567Z*
