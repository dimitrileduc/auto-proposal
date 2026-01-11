# Rapport Backtest - Client ROCHEFRAIS

## Contexte

- **Client** : ROCHEFRAIS (ID: 72487)
- **Commande réelle** : S39850
- **Date commande** : 2025-10-22 08:10:54
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,429 input + 621 output = 5,050 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 33.3% | 3 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 50.0% | Score equilibre global |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 80 | 80 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 80u vs Médiane: 80u (Réel: 80u)</summary>

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
L'analyse du cycle de commande montre une fréquence moyenne d'environ 28 jours entre chaque réapprovisionnement. La dernière commande datant du 24 septembre (soit 27 jours avant la date actuelle), le risque de rupture est imminent dans l'horizon des 30 jours du seuil de réapprovisionnement. Concernant la quantité, bien qu'un pic à 160u ait été observé en août, la quantité récurrente et la médiane des commandes récentes est de 80u. En application du principe de précaution et de la règle de la médiane, une commande de 80u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 963 tokens
- **Output**: 147 tokens
- **Total**: 1,110 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 08:46:14: 80u
- 2025-08-27 07:49:33: 160u
- 2025-07-31 05:44:02: 80u
- 2025-07-09 08:33:14: 80u
- 2025-06-13 12:25:16: 80u
- 2025-06-04 12:09:25: 80u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 80u
**Quantite Reelle**: 80u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF1140] FILOU SAUCE CHASSEUR 850G | 1 | Predicted 1u but not ordered |
| [PF3273] JF MITRAILLETTE SAUCE 925ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:09:33.705Z*
