# Rapport Backtest - Client DELISALADES

## Contexte

- **Client** : DELISALADES (ID: 3529)
- **Commande réelle** : S34835
- **Date commande** : 2025-02-11 12:56:40
- **Date cutoff système** : 2025-02-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 2,188 input + 342 output = 2,530 total


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
| **MAE** | 80.00 unités | Erreur moyenne absolue (symétrique) |
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
| [PF0078] FILOU CHASSEUR 5 L | 80 | 160 | 80.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 80u vs Médiane: 80u (Réel: 160u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 80u
- **Baseline calculee**: 80u
- **Mediane historique**: 80u
- **Reel commande**: 160u
- **Erreur LLM**: 80u (50.0%)
- **Erreur Mediane**: 80u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 80u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande très régulier (environ tous les 14 jours) avec une quantité stable de 80 unités. Bien qu'il n'y ait pas de commandes enregistrées sur la fin d'année 2024, les données N-1 (janvier/février 2024) confirment un besoin actif sur cette période avec des commandes de 80u et 160u. La dernière commande connue remontant à plus de 4 mois, le risque de rupture est critique face au seuil de 30 jours. En application du principe de précaution B2B et de la règle de la médiane historique, une commande de 80 unités est nécessaire pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 1,101 tokens
- **Output**: 173 tokens
- **Total**: 1,274 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-09-26 08:49:40: 80u
- 2024-09-12 12:08:30: 80u

**Commandes N-1 (meme periode annee derniere):**
- 2024-02-06 10:18:26: 160u
- 2024-01-24 07:56:02: 80u
- 2024-01-03 14:20:51: 0u
- 2023-12-07 14:41:30: 80u
- 2023-12-07 13:15:41: 160u
- 2023-11-27 10:46:02: 80u
- 2023-11-14 08:11:55: 80u
- 2023-10-31 13:11:23: 80u
- 2023-10-16 07:44:21: 80u
- 2023-10-03 07:04:30: 80u
- 2023-09-18 11:44:59: 80u
- 2023-08-30 09:19:02: 80u

**Quantite Mediane (fallback)**: 80u
**Quantite Reelle**: 160u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3251] JEFKE CHIVE VINAIGRETTE 5L | 40 | Predicted 40u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:27:10.347Z*
