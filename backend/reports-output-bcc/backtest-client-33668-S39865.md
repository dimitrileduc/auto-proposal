# Rapport Backtest - Client FRITE D'OR SPRL

## Contexte

- **Client** : FRITE D'OR SPRL (ID: 33668)
- **Commande réelle** : S39865
- **Date commande** : 2025-10-22 12:08:05
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 2,920 input + 509 output = 3,429 total


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
| **MAE** | 8.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 18.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 18.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 18.2% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0085] FILOU CURRY KETCHUP  10 KG | 52 | 44 | 8.0 | 18.2% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM: 52u vs Médiane: 52u (Réel: 44u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 52u
- **Baseline calculee**: 52u
- **Mediane historique**: 52u
- **Reel commande**: 44u
- **Erreur LLM**: 8u (18.2%)
- **Erreur Mediane**: 8u (18.2%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 52u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande régulier d'environ 60 jours (2 mois). La dernière commande remonte au 22 août 2025, soit il y a 60 jours exactement par rapport à la date actuelle (21 octobre). Le risque de rupture est imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Bien que la dernière commande était de 55u, l'historique long terme (N-1) est extrêmement stable à 52u. En application de la règle de la médiane et de la prudence sur les quantités (choisir la plus basse en cas de doute), une commande de 52u est préconisée pour couvrir les besoins du prochain cycle.

**Tokens utilises pour cette prediction:**
- **Input**: 996 tokens
- **Output**: 173 tokens
- **Total**: 1,169 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0085] FILOU CURRY KETCHUP  10 KG</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-22 08:59:01: 55u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 13:11:33: 52u
- 2024-08-06 06:23:52: 52u
- 2024-06-11 12:24:58: 52u
- 2024-04-16 08:32:36: 52u
- 2024-03-12 10:20:14: 52u
- 2024-01-16 14:52:09: 52u
- 2023-11-08 08:20:09: 52u

**Quantite Mediane (fallback)**: 52u
**Quantite Reelle**: 44u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0097] FILOU MOUTARDE 5 KG | 5 | Predicted 5u but not ordered |
| [PF0077] FILOU PROVENCALE 5 L | 6 | Predicted 6u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:14:09.635Z*
