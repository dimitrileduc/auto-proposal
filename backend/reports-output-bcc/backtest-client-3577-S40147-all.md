# Rapport Backtest - Client ITM ALIMENTAIRE BELGIUM

## Contexte

- **Client** : ITM ALIMENTAIRE BELGIUM (ID: 3577)
- **Commande réelle** : S40147
- **Date commande** : 2025-11-05 14:17:31
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 3,522 input + 594 output = 4,116 total


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
| **MAE** | 32.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 36.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF2036] ITM BOULETTES TOMATE 800 GR | 128 | 64 | 64.0 | 100.0% | partial | Non | Non | LLM |
| [PF2996] ITM BO VIN CIBOULET PET 450 | 112 | 112 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - LLM: 128u vs Médiane: 64u (Réel: 64u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 128u
- **Baseline calculee**: 128u
- **Mediane historique**: 64u
- **Reel commande**: 64u
- **Erreur LLM**: 64u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 128u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 14 octobre 2025, soit 21 jours avant la date actuelle. Le cycle moyen observé est d'environ 20 à 25 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous dépassons le délai habituel entre deux commandes. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une alternance entre 64u et 128u. La médiane des commandes récentes (64, 64, 64, 64, 64, 128, 128, 128) se situe à 64u, mais l'historique N-1 sur la même période (novembre) montre des volumes plus importants (128u et 192u). Par principe de précaution B2B et pour couvrir le cycle complet, la quantité de 128u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,188 tokens
- **Output**: 242 tokens
- **Total**: 1,430 tokens



</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - LLM: 112u vs Médiane: 112u (Réel: 112u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 112u
- **Baseline calculee**: 112u
- **Mediane historique**: 112u
- **Reel commande**: 112u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 112u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande irrégulier mais fréquent, avec une dernière commande enregistrée le 14 octobre 2025. Au 4 novembre, 21 jours se sont écoulés, ce qui représente un risque de rupture imminent dans l'horizon des 30 jours (seuil de réapprovisionnement). En application du principe de précaution B2B, un besoin est détecté. La quantité retenue est de 112 unités, correspondant à la médiane des commandes récentes et à la valeur la plus fréquente observée historiquement, écartant le pic exceptionnel de 448 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 1,195 tokens
- **Output**: 146 tokens
- **Total**: 1,341 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF2036] ITM BOULETTES TOMATE 800 GR</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 08:27:27: 128u
- 2025-10-09 08:37:17: 64u
- 2025-09-16 09:22:58: 128u
- 2025-08-12 09:46:11: 64u
- 2025-08-05 11:52:23: 64u
- 2025-08-04 08:50:19: 128u
- 2025-07-17 10:18:05: 64u
- 2025-07-11 08:31:26: 64u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 12:49:47: 64u
- 2024-06-11 06:48:14: 192u
- 2024-05-21 13:18:20: 128u
- 2024-04-23 07:54:51: 64u
- 2024-04-09 09:07:56: 64u
- 2024-03-19 08:47:39: 64u
- 2024-02-13 10:12:54: 128u
- 2024-01-16 13:29:59: 128u
- 2023-11-29 10:59:25: 192u
- 2023-11-07 14:55:48: 128u

**Quantite Mediane (fallback)**: 128u
**Quantite Reelle**: 64u

</details>


<details>
<summary><strong>2. [PF2996] ITM BO VIN CIBOULET PET 450</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-14 08:27:27: 112u
- 2025-08-05 11:52:23: 448u
- 2025-08-04 08:50:19: 224u
- 2025-06-30 10:39:57: 112u
- 2025-06-24 14:19:04: 224u
- 2025-06-04 14:28:09: 112u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-08 06:47:45: 112u
- 2024-06-11 06:48:14: 224u
- 2024-05-21 13:18:20: 224u
- 2024-05-16 11:00:25: 112u
- 2024-04-23 07:54:51: 112u
- 2024-04-09 09:07:56: 224u
- 2024-03-19 08:47:39: 112u
- 2024-03-12 11:47:36: 112u
- 2024-02-13 10:12:54: 112u
- 2024-01-16 13:29:59: 112u
- 2023-12-27 07:11:21: 112u
- 2023-11-07 14:55:48: 112u

**Quantite Mediane (fallback)**: 112u
**Quantite Reelle**: 112u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF2997] ITM BO VIN YOGORETTE PET 450 | 112 | Predicted 112u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:04:13.560Z*
