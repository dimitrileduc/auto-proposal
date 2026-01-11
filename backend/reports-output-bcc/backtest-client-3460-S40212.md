# Rapport Backtest - Client UPFRESH - HUPPA

## Contexte

- **Client** : UPFRESH - HUPPA (ID: 3460)
- **Commande réelle** : S40212
- **Date commande** : 2025-11-07 12:42:09
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 3,258 input + 616 output = 3,874 total


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
| **MAE** | 40.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 50.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (1)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0078] FILOU CHASSEUR 5 L | 120 | 80 | 40.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM: 120u vs Médiane: 140u (Réel: 80u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 120u
- **Baseline calculee**: 120u
- **Mediane historique**: 140u
- **Reel commande**: 80u
- **Erreur LLM**: 40u (50.0%)
- **Erreur Mediane**: 60u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 120u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence de réapprovisionnement régulière (environ toutes les 2 à 3 semaines). La dernière commande datant du 03/10/2025, soit il y a 34 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, signalant un risque de rupture imminent. Pour la quantité, l'historique récent présente des volumes oscillant entre 80u et 160u. Conformément à la règle de la médiane sur les commandes récentes (80, 80, 120, 160, 160, 160, 160), la valeur centrale se situe à 160u, mais compte tenu de l'historique N-1 à la même période (80u, 120u, 160u) et de la consigne de prudence privilégiant la valeur la plus basse en cas de doute pour éviter le surstock, une quantité de 120u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,220 tokens
- **Output**: 247 tokens
- **Total**: 1,467 tokens



</details>




### Donnees d'Input LLM (1 produits)


<details>
<summary><strong>1. [PF0078] FILOU CHASSEUR 5 L</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-03 09:41:57: 160u
- 2025-09-17 14:17:46: 160u
- 2025-09-05 12:22:01: 80u
- 2025-08-14 08:19:07: 160u
- 2025-08-08 11:47:43: 80u
- 2025-08-07 12:26:12: 160u
- 2025-07-18 13:15:46: 120u
- 2025-07-11 09:30:38: 80u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-18 10:25:14: 80u
- 2024-10-11 09:28:27: 160u
- 2024-10-04 08:58:23: 120u
- 2024-09-24 07:06:54: 80u
- 2024-08-30 09:47:24: 160u
- 2024-08-12 09:07:12: 160u
- 2024-07-19 09:36:52: 80u
- 2024-06-28 10:23:12: 160u
- 2024-06-17 07:31:21: 80u
- 2024-05-31 10:28:10: 80u
- 2024-05-27 06:49:47: 120u
- 2024-04-30 06:38:23: 160u

**Quantite Mediane (fallback)**: 120u
**Quantite Reelle**: 80u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0088] FILOU VOL AU VENT 800 GR | 6 | Predicted 6u but not ordered |
| [PF3270] JF TRUFFLE MAYONNAISE 925ML | 3 | Predicted 3u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:49.349Z*
