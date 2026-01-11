# Rapport Backtest - Client MEX - AL  EL SOMBRERO IMPORT/E

## Contexte

- **Client** : MEX - AL  EL SOMBRERO IMPORT/E (ID: 3809)
- **Commande réelle** : S39709
- **Date commande** : 2025-10-14 07:06:30
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 1
- **Tokens**: 1,061 input + 172 output = 1,233 total


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
| **MAE** | 80.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 16.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -16.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0129] SAUCE BBQ MEXAL TEXAS 4,4 KG | 400 | 480 | 80.0 | 16.7% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0129] SAUCE BBQ MEXAL TEXAS 4,4 KG</strong> - LLM: 400u vs Médiane: 400u (Réel: 480u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 400u
- **Baseline calculee**: 400u
- **Mediane historique**: 400u
- **Reel commande**: 480u
- **Erreur LLM**: 80u (16.7%)
- **Erreur Mediane**: 80u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 400u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence trimestrielle (juin, septembre). La dernière commande date du 16 septembre 2025, soit il y a 27 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où le risque de rupture est imminent pour couvrir le prochain cycle. Bien que l'historique N-1 montre une activité plus dense, les données récentes de 2025 sont stables à 400 unités par commande. En suivant la règle de la médiane des commandes récentes et le principe de précaution B2B, une quantité de 400 unités est préconisée pour maintenir le stock sans surévaluer par rapport aux derniers volumes observés.

**Tokens utilises pour cette prediction:**
- **Input**: 1,061 tokens
- **Output**: 172 tokens
- **Total**: 1,233 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0129] SAUCE BBQ MEXAL TEXAS 4,4 KG</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 13:41:54: 400u
- 2025-06-19 12:48:16: 400u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-05 11:56:20: 320u
- 2024-06-10 09:23:55: 177u
- 2024-05-16 15:16:28: 1000u
- 2024-04-17 06:54:17: 433u
- 2024-03-20 12:28:53: 600u
- 2024-02-19 08:09:46: 480u
- 2024-01-23 10:14:03: 423u
- 2024-01-23 10:14:03: 0u
- 2023-10-26 07:29:49: 480u

**Quantite Mediane (fallback)**: 400u
**Quantite Reelle**: 480u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:10:45.874Z*
