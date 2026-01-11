# Rapport Backtest - Client SB FRISCHMARKT

## Contexte

- **Client** : SB FRISCHMARKT (ID: 3872)
- **Commande réelle** : S40263
- **Date commande** : 2025-11-12 10:19:12
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 1,042 input + 192 output = 1,234 total


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
| **MAE** | 157.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 40.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 40.6% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -40.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0165] FILOU COCKTAIL FRENKEN 3 L | 230 | 387 | 157.0 | 40.6% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0165] FILOU COCKTAIL FRENKEN 3 L</strong> - LLM: 230u vs Médiane: 300u (Réel: 387u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 230u
- **Baseline calculee**: 230u
- **Mediane historique**: 300u
- **Reel commande**: 387u
- **Erreur LLM**: 157u (40.6%)
- **Erreur Mediane**: 87u (22.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 230u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 07/10/2025, soit 35 jours avant la date actuelle (11/11/2025). L'historique montre un cycle moyen d'environ 45 à 60 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous entrons dans la fenêtre habituelle de commande. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 191u, 300u et 230u. La médiane de ces trois valeurs est 230u. Conformément à la règle de privilégier la médiane et d'éviter les pics (300u), la quantité retenue est de 230u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,042 tokens
- **Output**: 192 tokens
- **Total**: 1,234 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0165] FILOU COCKTAIL FRENKEN 3 L</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-07 09:32:57: 191u
- 2025-08-22 10:44:44: 300u
- 2025-06-13 12:28:41: 230u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-29 09:33:25: 300u
- 2024-09-16 08:41:27: 300u
- 2024-07-03 06:47:13: 300u
- 2024-04-24 08:28:30: 300u
- 2024-03-21 12:41:39: 200u
- 2024-01-31 09:49:36: 300u
- 2023-11-29 10:44:12: 300u

**Quantite Mediane (fallback)**: 230u
**Quantite Reelle**: 387u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:08:48.196Z*
