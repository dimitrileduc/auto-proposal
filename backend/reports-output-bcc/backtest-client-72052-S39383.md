# Rapport Backtest - Client EDEKA Rhein Ruhr Stiftung & Co. KG, Walter Feinkost KG

## Contexte

- **Client** : EDEKA Rhein Ruhr Stiftung & Co. KG, Walter Feinkost KG (ID: 72052)
- **Commande réelle** : S39383
- **Date commande** : 2025-09-25 06:22:29
- **Date cutoff système** : 2025-09-24 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 17
- **Tokens**: 14,894 input + 2,591 output = 17,485 total


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
| **MAE** | 1.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 50.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 66.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 3 | 1.0 | 33.3% | partial | LLM |
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle montre une dernière commande effectuée il y a 90 jours (26 juin). Bien que l'historique soit limité, le délai écoulé dépasse largement un cycle de rotation standard en B2B, ce qui induit un risque de rupture imminent ou un besoin de réassort pour le prochain horizon de 30 jours. En application du principe de précaution et de la règle de la médiane sur les quantités récentes (2u et 6u), la valeur la plus basse (2u) est privilégiée pour éviter le surstockage sur un produit à rotation modérée.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 134 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>2. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 26 juin, soit environ 90 jours. Bien que le cycle historique soit de 24 jours entre les deux premières commandes, l'absence de commande récente crée une incertitude sur la rotation. En application du principe de précaution B2B (si doute sur le cycle → prévoir commande), un réapprovisionnement est nécessaire pour éviter une rupture prolongée si la demande reprend. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 2u et 3u. La médiane est de 2,5u. Conformément à la règle de choisir la valeur la plus basse en cas de doute ou de rotation faible, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 174 tokens
- **Total**: 1,064 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 12:08:05: 2u
- 2025-06-02 13:19:39: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [JF018] JF SAUCE SAMOURAI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-26 12:08:05: 2u
- 2025-06-02 13:19:39: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:23:16.559Z*
