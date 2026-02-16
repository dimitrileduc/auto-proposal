# Rapport Backtest - Client 3B TRADING & CONSULTING GmbH

## Contexte

- **Client** : 3B TRADING & CONSULTING GmbH (ID: 3857)
- **Commande réelle** : S39969
- **Date commande** : 2025-10-28 15:08:20
- **Date cutoff système** : 2025-10-27 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 2,120 input + 362 output = 2,482 total


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
| **MAE** | 18.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 35.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 33.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -35.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L | 39 | 65 | 26.0 | 40.0% | partial | LLM |
| [PF0608] FILOU/LD SAUCE SAMOURAI  10 L | 26 | 36 | 10.0 | 27.8% | partial | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L</strong> - LLM: 39u vs Médiane: 39u (Réel: 65u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 39u
- **Baseline calculee**: 39u
- **Mediane historique**: 39u
- **Reel commande**: 65u
- **Erreur LLM**: 26u (40.0%)
- **Erreur Mediane**: 26u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 39u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 30 à 34 jours (intervalles récents de 33, 34 et 34 jours). La dernière commande datant du 22 septembre, soit il y a 35 jours, le seuil de réapprovisionnement de 30 jours est dépassé, confirmant un risque de rupture imminent. Pour la quantité, l'historique récent présente des valeurs de 39, 55, 39 et 44. La médiane de ces commandes est de 41.5, mais conformément à la règle de prudence B2B privilégiant la valeur la plus basse en cas de doute et la récurrence historique forte du chiffre 39 (présent 6 fois sur l'ensemble des données), une quantité de 39 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,069 tokens
- **Output**: 196 tokens
- **Total**: 1,265 tokens



</details>


<details>
<summary><strong>2. [PF0608] FILOU/LD SAUCE SAMOURAI  10 L</strong> - LLM: 26u vs Médiane: 22u (Réel: 36u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 26u
- **Baseline calculee**: 26u
- **Mediane historique**: 22u
- **Reel commande**: 36u
- **Erreur LLM**: 10u (27.8%)
- **Erreur Mediane**: 14u (38.9%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 26u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle moyen d'environ 33 jours entre les commandes récentes. La dernière commande datant du 22 septembre (soit 35 jours avant la date actuelle), le seuil de réapprovisionnement de 30 jours est dépassé, indiquant un risque de rupture imminent. Bien que la dernière commande ait été de 44u (pic exceptionnel), l'historique montre une récurrence stable à 26u (juin et juillet 2025, ainsi qu'avril 2024). En appliquant la règle de la médiane et en ignorant le pic récent pour éviter le surstockage, la quantité préconisée est de 26u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,051 tokens
- **Output**: 166 tokens
- **Total**: 1,217 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 10:43:24: 44u
- 2025-08-19 08:54:50: 39u
- 2025-07-16 08:08:14: 55u
- 2025-06-13 13:01:38: 39u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 11:16:06: 39u
- 2024-08-20 14:01:43: 39u
- 2024-06-18 08:04:39: 52u
- 2024-05-13 12:26:04: 40u
- 2024-05-06 09:47:07: 39u
- 2024-04-02 06:09:19: 26u
- 2024-01-31 12:14:02: 39u
- 2023-11-30 08:24:02: 32u

**Quantite Mediane (fallback)**: 39u
**Quantite Reelle**: 65u

</details>


<details>
<summary><strong>2. [PF0608] FILOU/LD SAUCE SAMOURAI  10 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-22 10:43:24: 44u
- 2025-08-19 08:54:50: 13u
- 2025-07-16 08:08:14: 26u
- 2025-06-13 13:01:38: 26u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-02 11:16:06: 13u
- 2024-08-20 14:01:43: 13u
- 2024-05-13 12:26:04: 12u
- 2024-05-06 09:47:07: 13u
- 2024-04-02 06:09:19: 26u
- 2024-01-31 12:14:02: 13u
- 2023-11-30 08:24:02: 20u

**Quantite Mediane (fallback)**: 26u
**Quantite Reelle**: 36u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:07:54.480Z*
