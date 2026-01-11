# Rapport Backtest - Client BVBA NOYEZ

## Contexte

- **Client** : BVBA NOYEZ (ID: 3508)
- **Commande réelle** : S39738
- **Date commande** : 2025-10-15 10:47:00
- **Date cutoff système** : 2025-10-14 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 1,882 input + 377 output = 2,259 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 50.0% | 2 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 20.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 60 | 80 | 20.0 | 25.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 60u vs Médiane: 60u (Réel: 80u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 60u
- **Baseline calculee**: 60u
- **Mediane historique**: 60u
- **Reel commande**: 80u
- **Erreur LLM**: 20u (25.0%)
- **Erreur Mediane**: 20u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 60u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 mai 2025, soit plus de 140 jours. L'historique N-1 montre une commande importante à la même période (80u le 24/09/2024) et une autre en octobre 2023. Le cycle est irrégulier mais le délai écoulé dépasse largement les fréquences habituelles, créant un risque de rupture imminent sous 30 jours. ÉTAPE 2 : Estimation de la quantité. La médiane des commandes significatives (60u, 60u, 60u, 80u) est de 60u. Les petites commandes de 15u ou 25u semblent être des ajustements. En suivant le principe de précaution B2B et la médiane historique, une commande de 60u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 209 tokens
- **Total**: 1,165 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-26 08:17:20: 60u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 07:03:10: 80u
- 2024-07-03 09:51:40: 15u
- 2024-05-07 10:48:57: 60u
- 2024-01-16 15:07:36: 60u
- 2023-10-19 07:56:09: 25u

**Quantite Mediane (fallback)**: 60u
**Quantite Reelle**: 80u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0520] YVALLI PET BOUL TOMATE 2,5 KG | 24 | Predicted 24u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:15:18.919Z*
