# Rapport Backtest - Client VAN HEES BENELUX GmbH

## Contexte

- **Client** : VAN HEES BENELUX GmbH (ID: 3503)
- **Commande réelle** : S40160
- **Date commande** : 2025-11-06 07:50:01
- **Date cutoff système** : 2025-11-05 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 1,227 input + 177 output = 1,404 total


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
| [PF0075] FILOU CHASSEUR  10 L | 132 | 132 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 132u vs Médiane: 132u (Réel: 132u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 132u
- **Baseline calculee**: 132u
- **Mediane historique**: 132u
- **Reel commande**: 132u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 132u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre une fréquence élevée avec des intervalles variant de 2 à 14 jours (moyenne d'environ 9 jours). La dernière commande date du 2025-11-04, soit seulement 1 jour avant la date actuelle. Cependant, compte tenu du seuil de réapprovisionnement de 30 jours et de la forte rotation observée en octobre (4 commandes), un risque de rupture est certain durant cette période. La quantité de 132 unités est la valeur la plus fréquente et la médiane des commandes récentes, marquant une augmentation par rapport au volume de l'année précédente (104u). Conformément au principe de précaution B2B, la commande est préconisée pour couvrir les besoins du mois à venir.

**Tokens utilises pour cette prediction:**
- **Input**: 1,227 tokens
- **Output**: 177 tokens
- **Total**: 1,404 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 08:18:54: 132u
- 2025-10-21 08:27:36: 132u
- 2025-10-16 06:37:26: 132u
- 2025-10-14 07:02:22: 132u
- 2025-09-30 07:20:51: 88u
- 2025-09-17 14:39:35: 132u
- 2025-09-05 12:17:33: 88u
- 2025-08-29 12:39:18: 132u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 06:54:03: 104u
- 2024-10-08 12:20:50: 104u
- 2024-09-29 18:43:52: 104u
- 2024-09-12 13:20:27: 104u
- 2024-08-12 05:54:12: 104u
- 2024-05-31 10:30:35: 104u
- 2024-04-17 11:08:53: 104u
- 2024-04-03 07:08:05: 104u
- 2024-03-14 09:46:19: 104u
- 2024-02-28 12:25:20: 104u
- 2024-02-09 13:02:33: 104u
- 2024-01-30 07:37:39: 104u

**Quantite Mediane (fallback)**: 132u
**Quantite Reelle**: 132u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:00.088Z*
