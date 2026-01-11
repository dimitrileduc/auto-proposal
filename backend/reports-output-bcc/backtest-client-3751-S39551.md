# Rapport Backtest - Client METZGEREI KOHNEN HILT

## Contexte

- **Client** : METZGEREI KOHNEN HILT (ID: 3751)
- **Commande réelle** : S39551
- **Date commande** : 2025-10-08 05:21:32
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,609 input + 1,167 output = 7,776 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 16.7% | 6 produits prédits, 1 corrects |
| **Rappel** | 100.0% | 1 produits réels, 1 détectés |
| **F1-Score** | 28.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 20.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 20.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -20.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0075] FILOU CHASSEUR  10 L | 4 | 5 | 1.0 | 20.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM: 3u vs Médiane: 3u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 5u
- **Erreur LLM**: 2u (40.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle historique montre une fréquence de commande environ tous les 2 à 3 mois. La dernière commande remonte au 26 août 2025, soit 42 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une rupture est probable (le délai moyen entre les commandes étant souvent proche de 60-70 jours). En application du principe de précaution B2B, un besoin est détecté. Pour la quantité, bien que la dernière commande fût de 2u, l'historique long (N-1) est extrêmement stable à 3u. La médiane historique de 3u est donc retenue pour assurer la disponibilité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 985 tokens
- **Output**: 171 tokens
- **Total**: 1,156 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0075] FILOU CHASSEUR  10 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-26 13:31:50: 2u
- 2025-05-23 11:39:30: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-29 06:40:17: 3u
- 2024-07-02 12:26:09: 3u
- 2024-04-25 11:39:26: 3u
- 2024-02-12 08:25:31: 3u
- 2023-11-30 09:58:54: 3u
- 2023-10-25 13:05:28: 3u

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>




---

## False Positives (5)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0072] FILOU MAYONNAISE OEUFS SEAU 10L | 4 | Predicted 4u but not ordered |
| [PF0085] FILOU CURRY KETCHUP  10 KG | 3 | Predicted 3u but not ordered |
| [PF0093] FILOU MOUTARDE 300GR | 1 | Predicted 1u but not ordered |
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 2 | Predicted 2u but not ordered |
| [PF1599] FILOU MAYONNAISE OEUFS SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:18:16.092Z*
