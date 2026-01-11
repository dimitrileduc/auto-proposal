# Rapport Backtest - Client GEBR. JANSSEN V.O.F

## Contexte

- **Client** : GEBR. JANSSEN V.O.F (ID: 3918)
- **Commande réelle** : S39505
- **Date commande** : 2025-10-02 04:51:42
- **Date cutoff système** : 2025-10-01 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 7
- **Tokens**: 6,283 input + 1,082 output = 7,365 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 71.4% | 7 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 83.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 8.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 39.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 7.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -31.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF0097] FILOU MOUTARDE 5 KG | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [PF0088] FILOU VOL AU VENT 800 GR | 64 | 100 | 36.0 | 36.0% | partial | Non | Non | LLM |
| [PF0084] FILOU CARBONNADES 800 GR | 1 | 0 | 1.0 | 0.0% | partial | Non | Non | LLM |
| [PF1224] FILOU BOULETTES TOMATE 800 GR | 2 | 0 | 2.0 | 0.0% | partial | Non | Non | LLM |
| [PF1844] FILOU ANDALOUSE SQUEEZE 300ML | 1 | 0 | 1.0 | 0.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [PF0097] FILOU MOUTARDE 5 KG</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande date du 11 septembre 2025 (il y a 20 jours). Bien que l'historique soit irrégulier, le délai de 30 jours du seuil de réapprovisionnement approche. En application du principe de précaution B2B (incertitude sur le cycle), un besoin est détecté pour éviter une rupture. La quantité retenue est de 2 unités, correspondant à la constante observée sur l'ensemble de l'historique (médiane stricte).

**Tokens utilises pour cette prediction:**
- **Input**: 900 tokens
- **Output**: 118 tokens
- **Total**: 1,018 tokens



</details>


<details>
<summary><strong>2. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM: 64u vs Médiane: 64u (Réel: 100u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 64u
- **Baseline calculee**: 64u
- **Mediane historique**: 64u
- **Reel commande**: 100u
- **Erreur LLM**: 36u (36.0%)
- **Erreur Mediane**: 36u (36.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 64u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 11 septembre 2025 (il y a 20 jours). L'historique montre un cycle de commande espacé (environ tous les 3 à 4 mois), mais le délai actuel combiné au seuil de réapprovisionnement de 30 jours crée une incertitude sur la couverture du stock. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent et N-1 montre une récurrence forte sur la quantité de 64 unités (présente dans 3 des 4 dernières commandes). La médiane et la valeur constante observée étant de 64, cette quantité est retenue pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 177 tokens
- **Total**: 1,099 tokens



</details>


<details>
<summary><strong>3. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM: 1u vs Médiane: 2u (Réel: 0u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 0u
- **Erreur LLM**: 1u (Infinity%)
- **Erreur Mediane**: 2u (Infinity%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 11 septembre 2025, soit 20 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de réapprovisionnement pour ce produit à rotation lente et irrégulière. En application du principe de précaution B2B (cycle difficile à déterminer = prévoir), un besoin est détecté. ÉTAPE 2 : L'historique récent montre une commande de 1u. L'historique N-1 montre des quantités faibles (2u et 3u). Conformément à la règle sur les rotations très faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 183 tokens
- **Total**: 1,084 tokens



</details>


<details>
<summary><strong>4. [PF1224] FILOU BOULETTES TOMATE 800 GR</strong> - LLM: 2u vs Médiane: 3u (Réel: 0u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 0u
- **Erreur LLM**: 2u (Infinity%)
- **Erreur Mediane**: 3u (Infinity%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 11 septembre 2025 (soit 20 jours). Avec un seuil de réapprovisionnement de 30 jours et un historique de rotation très faible et irrégulier, le principe de précaution B2B s'applique pour éviter une rupture sur un produit à cycle long. La quantité retenue est de 2 unités, correspondant à la quantité de la commande la plus récente (médiane basse), afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 116 tokens
- **Total**: 1,020 tokens



</details>


<details>
<summary><strong>5. [PF1844] FILOU ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 0u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 0u
- **Erreur LLM**: 1u (Infinity%)
- **Erreur Mediane**: 1u (Infinity%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande date du 11 septembre, soit il y a 20 jours. Avec un seuil de réapprovisionnement de 30 jours et un historique très limité (une seule commande), le cycle de rotation est incertain. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour l'horizon cible. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien des quantités constantes en cas de doute, la quantité retenue est de 1 unité (médiane de l'historique disponible).

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 157 tokens
- **Total**: 1,032 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [PF0097] FILOU MOUTARDE 5 KG</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 08:08:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-07 11:39:15: 2u
- 2024-03-15 12:48:58: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [PF0088] FILOU VOL AU VENT 800 GR</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 08:08:49: 64u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-07 11:39:15: 48u
- 2024-03-15 12:48:58: 64u
- 2023-11-28 10:41:23: 64u

**Quantite Mediane (fallback)**: 64u
**Quantite Reelle**: 100u

</details>


<details>
<summary><strong>3. [PF0084] FILOU CARBONNADES 800 GR</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 08:08:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-07 11:39:15: 3u
- 2024-03-15 12:48:58: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 0u

</details>


<details>
<summary><strong>4. [PF1224] FILOU BOULETTES TOMATE 800 GR</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 08:08:49: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-07 11:39:15: 3u
- 2024-03-15 12:48:58: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 0u

</details>


<details>
<summary><strong>5. [PF1844] FILOU ANDALOUSE SQUEEZE 300ML</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-11 08:08:49: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 0u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF0121] FILOU MAYONNAISE OEUFS SEAU 1000ML | 2 | Predicted 2u but not ordered |
| [PF0165] FILOU COCKTAIL FRENKEN 3 L | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:15:28.041Z*
