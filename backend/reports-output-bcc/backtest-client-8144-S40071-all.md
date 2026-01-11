# Rapport Backtest - Client DELISALADES, Jean-Luc Durré

## Contexte

- **Client** : DELISALADES, Jean-Luc Durré (ID: 8144)
- **Commande réelle** : S40071
- **Date commande** : 2025-11-03 13:21:41
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 2,034 input + 322 output = 2,356 total


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
| **MAE** | 160.00 unités | Erreur moyenne absolue (symétrique) |
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
| [PF0078] FILOU CHASSEUR 5 L | 160 | 320 | 160.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 160u vs Médiane: 120u (Réel: 320u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 160u
- **Baseline calculee**: 160u
- **Mediane historique**: 120u
- **Reel commande**: 320u
- **Erreur LLM**: 160u (50.0%)
- **Erreur Mediane**: 200u (62.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 160u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 20 jours entre les dernières livraisons (02/09, 23/09, 13/10). Au 02/11, 20 jours se sont écoulés depuis la dernière commande, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). Bien que l'historique N-1 montre des volumes plus faibles (80u), la tendance récente est stabilisée à 160u sur les trois dernières commandes. En suivant la règle de la médiane des commandes récentes et la stabilité du volume actuel, une quantité de 160u est préconisée pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 1,033 tokens
- **Output**: 173 tokens
- **Total**: 1,206 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 08:07:34: 160u
- 2025-09-23 07:48:19: 160u
- 2025-09-02 06:58:03: 160u
- 2025-08-20 11:49:07: 80u
- 2025-08-05 09:20:37: 80u
- 2025-06-24 14:21:33: 160u
- 2025-06-13 13:00:43: 160u
- 2025-06-04 09:44:16: 80u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-23 09:48:19: 80u
- 2024-10-14 12:00:44: 80u

**Quantite Mediane (fallback)**: 160u
**Quantite Reelle**: 320u

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

*Rapport généré automatiquement le 2025-12-30T14:20:12.108Z*
