# Rapport Backtest - Client DELHAIZE LE LION/DE LEEUW NV

## Contexte

- **Client** : DELHAIZE LE LION/DE LEEUW NV (ID: 3452)
- **Commande réelle** : S40188
- **Date commande** : 2025-11-07 11:42:07
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 4,449 input + 816 output = 5,265 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 3 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 80.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 472.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 80.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 79.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -80.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML | 98 | 392 | 294.0 | 75.0% | partial | Non | Non | LLM |
| [PF3300] DLL MAYONNAISE OEUFS 300ML | 130 | 780 | 650.0 | 83.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML</strong> - LLM: 98u vs Médiane: 98u (Réel: 392u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 98u
- **Baseline calculee**: 98u
- **Mediane historique**: 98u
- **Reel commande**: 392u
- **Erreur LLM**: 294u (75.0%)
- **Erreur Mediane**: 294u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 98u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande hebdomadaire très régulier (tous les lundis). La dernière commande date du 2025-11-03, soit il y a 3 jours. Avec un seuil de réapprovisionnement de 30 jours, la prochaine commande est attendue sous 4 jours (le lundi 2025-11-10), ce qui justifie une prévision immédiate par précaution. Concernant la quantité, le volume est stabilisé à 98 unités sur les 6 dernières commandes. La médiane des commandes récentes est de 98 unités, ce qui constitue la cible de réapprovisionnement optimale.

**Tokens utilises pour cette prediction:**
- **Input**: 1,077 tokens
- **Output**: 161 tokens
- **Total**: 1,238 tokens



</details>


<details>
<summary><strong>2. [PF3300] DLL MAYONNAISE OEUFS 300ML</strong> - LLM: 130u vs Médiane: 130u (Réel: 780u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 130u
- **Baseline calculee**: 130u
- **Mediane historique**: 130u
- **Reel commande**: 780u
- **Erreur LLM**: 650u (83.3%)
- **Erreur Mediane**: 650u (83.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 130u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière (souvent hebdomadaire ou bimensuelle le lundi). La dernière commande date du 03/11/2025, soit il y a seulement 3 jours. Cependant, avec un seuil de réapprovisionnement de 30 jours, une nouvelle commande est nécessaire pour couvrir les besoins de fin novembre/début décembre. La commande exceptionnelle de 780u le 03/11 est traitée comme un pic ponctuel (événement ou stock de sécurité massif). En suivant la règle de la médiane des commandes récentes (130, 130, 130, 130, 130, 260, 390, 780), la valeur centrale est 130u. On privilégie cette quantité stable pour éviter le surstockage après le pic récent.

**Tokens utilises pour cette prediction:**
- **Input**: 1,119 tokens
- **Output**: 205 tokens
- **Total**: 1,324 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF3315] DLL VINAIGRETTE YOGORETTE PET 450ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 07:40:31: 98u
- 2025-10-27 07:02:27: 98u
- 2025-10-13 07:49:42: 98u
- 2025-09-08 10:16:06: 98u
- 2025-09-01 08:56:14: 98u
- 2025-08-25 08:08:15: 98u
- 2025-08-19 09:02:08: 98u
- 2025-08-14 13:30:24: 196u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 07:05:31: 196u
- 2024-09-23 11:56:39: 196u
- 2024-08-06 10:01:31: 98u
- 2024-07-11 10:01:48: 392u

**Quantite Mediane (fallback)**: 98u
**Quantite Reelle**: 392u

</details>


<details>
<summary><strong>2. [PF3300] DLL MAYONNAISE OEUFS 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-03 07:40:31: 780u
- 2025-10-20 08:14:48: 130u
- 2025-09-29 15:27:45: 390u
- 2025-09-22 10:46:37: 130u
- 2025-09-08 10:16:06: 130u
- 2025-09-01 08:56:14: 130u
- 2025-08-25 08:08:15: 130u
- 2025-08-19 09:02:08: 260u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-14 11:37:32: 390u
- 2024-10-01 06:38:15: 130u
- 2024-09-09 11:24:26: 130u
- 2024-09-05 05:51:58: 130u
- 2024-08-06 10:01:31: 130u
- 2024-07-11 10:01:48: 390u

**Quantite Mediane (fallback)**: 130u
**Quantite Reelle**: 780u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3316] DLL VINAIGRETTE FINES HERBES PET 450ML | 98 | Predicted 98u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:15:54.085Z*
