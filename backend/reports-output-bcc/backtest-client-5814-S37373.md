# Rapport Backtest - Client MEX - AL  EL SOMBRERO IMPORT/E, MEX - AL  EL SOMBRERO IMPORT/E, Adresse de facturation

## Contexte

- **Client** : MEX - AL  EL SOMBRERO IMPORT/E, MEX - AL  EL SOMBRERO IMPORT/E, Adresse de facturation (ID: 5814)
- **Commande réelle** : S37373
- **Date commande** : 2025-06-11 09:57:54
- **Date cutoff système** : 2025-06-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 893 input + 166 output = 1,059 total


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
| [PF0129] SAUCE BBQ MEXAL TEXAS 4,4 KG | 360 | 360 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0129] SAUCE BBQ MEXAL TEXAS 4,4 KG</strong> - LLM: 360u vs Médiane: 529u (Réel: 360u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 360u
- **Baseline calculee**: 360u
- **Mediane historique**: 529u
- **Reel commande**: 360u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 169u (46.9%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 360u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle montre un intervalle de 50 jours entre les deux dernières commandes. La dernière commande datant du 23 mai (il y a 18 jours), le prochain besoin est estimé autour du 12 juillet. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la zone de risque de rupture (18 + 30 = 48 jours, proche du cycle de 50). En application du principe de précaution B2B et face à un historique récent limité, une commande est nécessaire. La quantité retenue est de 360 unités, correspondant à la valeur la plus basse et la plus récente de l'historique pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 166 tokens
- **Total**: 1,059 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0129] SAUCE BBQ MEXAL TEXAS 4,4 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-23 11:47:01: 360u
- 2025-04-03 13:52:29: 698u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 360u
**Quantite Reelle**: 360u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:23:38.880Z*
