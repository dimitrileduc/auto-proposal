# Rapport Backtest - Client MYGASTRO

## Contexte

- **Client** : MYGASTRO (ID: 3850)
- **Commande réelle** : S40195
- **Date commande** : 2025-11-07 12:49:55
- **Date cutoff système** : 2025-11-06 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 1,888 input + 388 output = 2,276 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 2 produits prédits, 2 corrects |
| **Rappel** | 100.0% | 2 produits réels, 2 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 17.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 48.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 59.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 48.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0608] FILOU/LD SAUCE SAMOURAI  10 L | 52 | 44 | 8.0 | 18.2% | partial | Non | Non | LLM |
| [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L | 52 | 26 | 26.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [PF0608] FILOU/LD SAUCE SAMOURAI  10 L</strong> - LLM: 52u vs Médiane: 52u (Réel: 44u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 juin 2025, soit plus de 130 jours. Bien que l'historique récent soit espacé, l'historique N-1 montre une commande le 10 novembre 2023. Nous sommes le 6 novembre, à l'approche de cette date anniversaire. Par principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique est extrêmement stable avec une quantité constante de 52 unités sur toutes les commandes passées (récentes et N-1). La médiane est de 52. On maintient cette quantité standard.

**Tokens utilises pour cette prediction:**
- **Input**: 945 tokens
- **Output**: 180 tokens
- **Total**: 1,125 tokens



</details>


<details>
<summary><strong>2. [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L</strong> - LLM: 52u vs Médiane: 46u (Réel: 26u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 52u
- **Baseline calculee**: 52u
- **Mediane historique**: 46u
- **Reel commande**: 26u
- **Erreur LLM**: 26u (100.0%)
- **Erreur Mediane**: 20u (76.9%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 52u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande enregistrée remonte au 20 juin 2025, soit plus de 130 jours avant la date actuelle (6 novembre 2025). Bien que l'historique récent soit espacé, l'historique N-1 montre une activité en novembre (10/11/2023). En application du principe de précaution B2B et face à l'absence de commande depuis plusieurs mois, un risque de rupture est identifié pour couvrir la période de fin d'année. ÉTAPE 2 : Estimation de la quantité. L'historique montre des commandes récurrentes de 52u (juin 2025, août 2024, février 2024). La médiane des commandes significatives est de 52u. On retient cette valeur pour assurer le réapprovisionnement.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 208 tokens
- **Total**: 1,151 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [PF0608] FILOU/LD SAUCE SAMOURAI  10 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 06:48:43: 52u
- 2025-06-12 10:12:45: 52u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-22 10:06:34: 52u
- 2024-02-13 14:14:05: 52u
- 2023-11-10 13:17:36: 52u

**Quantite Mediane (fallback)**: 52u
**Quantite Reelle**: 44u

</details>


<details>
<summary><strong>2. [PF0070] FILOU/LD SAUCE ANDALOUSE  10 L</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-20 06:48:43: 52u
- 2025-06-12 10:12:45: 26u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-22 10:06:34: 52u
- 2024-02-13 14:14:05: 52u
- 2023-11-10 13:17:36: 26u

**Quantite Mediane (fallback)**: 52u
**Quantite Reelle**: 26u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:18:41.997Z*
