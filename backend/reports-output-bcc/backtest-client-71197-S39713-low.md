# Rapport Backtest - Client Le Cortil asbl, Amandine Duhaut

## Contexte

- **Client** : Le Cortil asbl, Amandine Duhaut (ID: 71197)
- **Commande réelle** : S39713
- **Date commande** : 2025-10-14 10:02:46
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,185 input + 1,054 output = 7,239 total


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
| **MAE** | 1.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 37.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 37.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -37.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 3 | 4 | 1.0 | 25.0% | partial | LLM |
| [MANA02] MANA natural energy drink - tropical passion 250ml | 2 | 4 | 2.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 24 septembre, soit il y a 19 jours. Avec un seuil de réapprovisionnement de 30 jours et un historique très limité (une seule commande), le cycle de rotation est incertain. En application du principe de précaution B2B (incertitude sur le cycle = risque), un besoin est détecté pour éviter toute rupture. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 3 unités. Conformément à la règle de maintien des quantités pour les rotations régulières ou faibles, la médiane de 3 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 882 tokens
- **Output**: 152 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>2. [MANA02] MANA natural energy drink - tropical passion 250ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande date de 19 jours (24/09). Avec un seuil de réapprovisionnement de 30 jours et un historique très limité (une seule commande récente), il existe une incertitude sur le cycle de rotation. En application du principe de précaution B2B (Étape 1), un besoin est détecté pour éviter toute rupture. Pour la quantité (Étape 2), on se base sur la seule valeur connue de l'historique récent, soit 2 unités, afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 126 tokens
- **Total**: 999 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 07:27:55: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>2. [MANA02] MANA natural energy drink - tropical passion 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 07:27:55: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 6 | Predicted 6u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:17:23.022Z*
