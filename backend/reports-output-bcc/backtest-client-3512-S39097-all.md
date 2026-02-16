# Rapport Backtest - Client LES COCHONAILLES SPRL

## Contexte

- **Client** : LES COCHONAILLES SPRL (ID: 3512)
- **Commande réelle** : S39097
- **Date commande** : 2025-09-11 08:04:38
- **Date cutoff système** : 2025-09-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 2,073 input + 326 output = 2,399 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 2 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 3.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 10.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 14.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -4.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF0075] FILOU CHASSEUR  10 L | 52 | 50 | 2.0 | 4.0% | partial | LLM |
| [PF0077] FILOU PROVENCALE 5 L | 15 | 20 | 5.0 | 25.0% | partial | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 52u vs Médiane: 52u (Réel: 50u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 52u
- **Baseline calculee**: 52u
- **Mediane historique**: 52u
- **Reel commande**: 50u
- **Erreur LLM**: 2u (4.0%)
- **Erreur Mediane**: 2u (4.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 52u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande moyen d'environ 45 à 60 jours. La dernière commande enregistrée remonte au 04/06/2025, soit plus de 90 jours sans réapprovisionnement. Ce délai dépasse largement le cycle habituel et le seuil de 30 jours (Replenishment Threshold Days), indiquant un risque de rupture imminent ou un besoin déjà présent. La quantité historique est extrêmement stable et systématiquement fixée à 52 unités (médiane parfaite). En application du principe de précaution B2B et de la stabilité du volume, une commande de 52 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,065 tokens
- **Output**: 155 tokens
- **Total**: 1,220 tokens



</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM: 15u vs Médiane: 18u (Réel: 20u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 15u
- **Baseline calculee**: 15u
- **Mediane historique**: 18u
- **Reel commande**: 20u
- **Erreur LLM**: 5u (25.0%)
- **Erreur Mediane**: 2u (10.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 15u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 04/06/2025, soit plus de 90 jours sans activité, ce qui dépasse largement les cycles habituels observés l'année précédente (environ 60-80 jours). L'historique N-1 montre une commande importante en août (10u) et une activité régulière en septembre/octobre. En application du principe de précaution B2B et face à l'incertitude du cycle actuel, un besoin de réapprovisionnement est détecté pour couvrir les 30 prochains jours. La quantité retenue est de 15 unités, correspondant à la médiane de la commande la plus récente et des volumes historiques stables, en évitant les pics exceptionnels de 35u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,008 tokens
- **Output**: 171 tokens
- **Total**: 1,179 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 09:54:21: 52u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 06:33:21: 52u
- 2024-07-01 08:38:48: 52u
- 2024-05-14 14:35:46: 52u
- 2024-04-11 13:32:40: 52u
- 2024-03-13 21:50:49: 52u
- 2024-01-15 14:20:12: 52u
- 2023-12-11 12:14:42: 52u
- 2023-11-15 12:18:44: 52u
- 2023-10-16 11:21:28: 52u
- 2023-10-02 08:30:31: 52u
- 2023-09-18 08:26:04: 52u

**Quantite Mediane (fallback)**: 52u
**Quantite Reelle**: 50u

</details>


<details>
<summary><strong>2. [PF0077] FILOU PROVENCALE 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-04 09:54:21: 15u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-23 06:33:21: 10u
- 2024-07-01 08:38:48: 25u
- 2024-04-11 13:32:40: 35u
- 2024-01-15 14:20:12: 35u
- 2023-12-11 12:14:42: 5u
- 2023-10-16 11:21:28: 30u
- 2023-10-02 08:30:31: 5u
- 2023-09-18 08:26:04: 5u

**Quantite Mediane (fallback)**: 15u
**Quantite Reelle**: 20u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:18:09.135Z*
