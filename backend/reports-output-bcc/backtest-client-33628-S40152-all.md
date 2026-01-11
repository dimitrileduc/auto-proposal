# Rapport Backtest - Client LIDL BELGIE GMBH

## Contexte

- **Client** : LIDL BELGIE GMBH (ID: 33628)
- **Commande réelle** : S40152
- **Date commande** : 2025-11-05 14:53:47
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 3
- **Tokens**: 3,525 input + 569 output = 4,094 total


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
| **MAE** | 288.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 75.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 214.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [PF3327] DELUXE MAYONNAISE OEUFS 720ML WECK | 480 | 672 | 192.0 | 28.6% | partial | LLM |
| [PF3328] DELUXE MIX SAUCES 250ML WECK | 480 | 96 | 384.0 | 400.0% | partial | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF3327] DELUXE MAYONNAISE OEUFS 720ML WECK</strong> - LLM: 480u vs Médiane: 400u (Réel: 672u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 480u
- **Baseline calculee**: 480u
- **Mediane historique**: 400u
- **Reel commande**: 672u
- **Erreur LLM**: 192u (28.6%)
- **Erreur Mediane**: 272u (40.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 480u (risque detecte)

**Raisonnement LLM:**
Étape 1 : Détection du besoin. La dernière commande date du 07/10/2025, soit 28 jours avant la date actuelle (04/11/2025). Bien que le cycle soit irrégulier avec un pic d'activité massif en août (saisonnalité confirmée par l'historique N-1), le délai de 28 jours combiné au seuil de réapprovisionnement de 30 jours crée un risque de rupture imminent. En application du principe de précaution B2B, une commande est nécessaire. Étape 2 : Estimation de la quantité. L'historique récent montre des volumes extrêmes en août (jusqu'à 1040u) qui semblent liés à un événement ponctuel ou saisonnier, suivis d'une chute brutale à 96u en octobre. La médiane des commandes récentes (excluant les doublons de date pour la rotation) se situe autour de 480u-560u. En cas de doute et pour éviter le surstockage après un pic saisonnier, on retient la valeur médiane basse de 480u.

**Tokens utilises pour cette prediction:**
- **Input**: 1,143 tokens
- **Output**: 262 tokens
- **Total**: 1,405 tokens



</details>


<details>
<summary><strong>2. [PF3328] DELUXE MIX SAUCES 250ML WECK</strong> - LLM: 480u vs Médiane: 432u (Réel: 96u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 480u
- **Baseline calculee**: 480u
- **Mediane historique**: 432u
- **Reel commande**: 96u
- **Erreur LLM**: 384u (400.0%)
- **Erreur Mediane**: 336u (350.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 480u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 07/10/2025, soit 28 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. Le cycle historique montre une forte activité en août suivie d'une reprise en octobre/novembre (confirmée par la commande du 28/10 l'année précédente). En application du principe de précaution B2B, un besoin est détecté. La quantité est fixée à 480 unités, ce qui correspond à la médiane des commandes récentes (excluant les pics à 864u et la commande isolée de 288u), assurant un stock stable sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 1,139 tokens
- **Output**: 170 tokens
- **Total**: 1,309 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF3327] DELUXE MAYONNAISE OEUFS 720ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-07 09:01:45: 96u
- 2025-08-28 07:33:10: 960u
- 2025-08-27 12:55:19: 384u
- 2025-08-27 06:03:24: 400u
- 2025-08-27 06:02:20: 560u
- 2025-08-26 15:28:37: 560u
- 2025-08-25 07:53:59: 1040u
- 2025-08-22 08:50:31: 400u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-26 08:31:02: 800u
- 2024-08-22 05:50:46: 1360u
- 2024-08-21 13:11:12: 640u
- 2024-08-20 11:56:36: 800u
- 2024-08-14 06:03:44: 320u
- 2024-08-14 06:03:13: 240u
- 2024-08-14 06:02:51: 480u

**Quantite Mediane (fallback)**: 480u
**Quantite Reelle**: 672u

</details>


<details>
<summary><strong>2. [PF3328] DELUXE MIX SAUCES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-07 09:01:45: 288u
- 2025-08-28 07:33:10: 864u
- 2025-08-27 12:55:19: 384u
- 2025-08-27 06:03:24: 384u
- 2025-08-27 06:02:20: 480u
- 2025-08-26 15:28:37: 480u
- 2025-08-25 07:53:59: 864u
- 2025-08-22 08:50:31: 480u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-28 07:06:00: 384u
- 2024-08-26 08:31:02: 576u
- 2024-08-22 05:50:46: 672u
- 2024-08-21 13:11:12: 288u
- 2024-08-20 11:56:36: 480u
- 2024-08-14 06:03:44: 288u
- 2024-08-14 06:02:51: 288u

**Quantite Mediane (fallback)**: 480u
**Quantite Reelle**: 96u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF3279] KANIA BOULETTES TOMATE 800 GR (7404167) | 256 | Predicted 256u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:15:53.693Z*
