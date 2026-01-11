# Rapport Backtest - Client VINHOTECA PORTUGAL e.K.

## Contexte

- **Client** : VINHOTECA PORTUGAL e.K. (ID: 3862)
- **Commande réelle** : S39416
- **Date commande** : 2025-09-26 07:26:17
- **Date cutoff système** : 2025-09-25 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 967 input + 209 output = 1,176 total


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
| [PF0165] FILOU COCKTAIL FRENKEN 3 L | 120 | 120 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0165] FILOU COCKTAIL FRENKEN 3 L</strong> - LLM: 120u vs Médiane: 100u (Réel: 120u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 120u
- **Baseline calculee**: 120u
- **Mediane historique**: 100u
- **Reel commande**: 120u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 20u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 120u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 mai 2025, soit environ 118 jours. L'historique N-1 montre des commandes régulières tous les 2 à 3 mois (janvier, mars, juin, juillet). Le délai depuis la dernière commande dépasse largement le cycle habituel, indiquant un besoin imminent ou un stock épuisé. Par principe de précaution B2B, le risque de rupture est qualifié. ÉTAPE 2 : Estimation quantité. L'historique récent (2024) montre une récurrence forte sur la quantité de 120u. La commande de 162u en mai 2025 est traitée comme un pic exceptionnel. La médiane des commandes régulières de l'année précédente (120u) est retenue pour éviter le surstockage tout en couvrant le besoin standard.

**Tokens utilises pour cette prediction:**
- **Input**: 967 tokens
- **Output**: 209 tokens
- **Total**: 1,176 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0165] FILOU COCKTAIL FRENKEN 3 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-30 08:23:27: 162u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-05 06:18:16: 100u
- 2024-06-06 05:57:29: 120u
- 2024-03-15 10:37:50: 120u
- 2024-01-18 13:07:47: 120u
- 2023-11-17 13:09:17: 78u

**Quantite Mediane (fallback)**: 120u
**Quantite Reelle**: 120u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:21:45.478Z*
