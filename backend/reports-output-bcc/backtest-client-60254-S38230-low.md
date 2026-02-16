# Rapport Backtest - Client CHATEAU DE RIXENSART

## Contexte

- **Client** : CHATEAU DE RIXENSART (ID: 60254)
- **Commande réelle** : S38230
- **Date commande** : 2025-07-25 06:44:24
- **Date cutoff système** : 2025-07-24 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 2
- **Tokens**: 1,746 input + 358 output = 2,104 total


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
| **MAE** | 6.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 76.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 77.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 76.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (2)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [REB06] REB chips bio - paprika fumé 35g | 15 | 8 | 7.0 | 87.5% | partial | LLM |
| [REB05] REB chips bio - sel de mer 35g | 15 | 9 | 6.0 | 66.7% | partial | LLM |


### Details des Predictions LLM (2 produits)


<details>
<summary><strong>1. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM: 15u vs Médiane: 15u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 15u
- **Baseline calculee**: 15u
- **Mediane historique**: 15u
- **Reel commande**: 8u
- **Erreur LLM**: 7u (87.5%)
- **Erreur Mediane**: 7u (87.5%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 15u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 - DÉTECTION DU BESOIN : La dernière commande date du 02/07/2025, soit il y a 22 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de réassort. Bien qu'il n'y ait qu'une seule commande historique, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture de stock imminente. ÉTAPE 2 - ESTIMATION QUANTITÉ : En l'absence d'historique multiple pour calculer une médiane, la quantité de la commande la plus récente (15 unités) est reconduite pour maintenir le niveau de stock initialement établi.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 167 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>2. [REB05] REB chips bio - sel de mer 35g</strong> - LLM: 15u vs Médiane: 15u (Réel: 9u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 15u
- **Baseline calculee**: 15u
- **Mediane historique**: 15u
- **Reel commande**: 9u
- **Erreur LLM**: 6u (66.7%)
- **Erreur Mediane**: 6u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 15u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 - DÉTECTION DU BESOIN : La dernière commande date du 02/07/2025, soit il y a 22 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de risque de rupture. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse 70% d'un cycle mensuel standard. ÉTAPE 2 - ESTIMATION QUANTITÉ : L'historique récent montre une commande unique de 15 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité de 15 unités est maintenue pour assurer la continuité du stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 191 tokens
- **Total**: 1,064 tokens



</details>




### Donnees d'Input LLM (2 produits)


<details>
<summary><strong>1. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 12:37:01: 15u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 15u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>2. [REB05] REB chips bio - sel de mer 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-02 12:37:01: 15u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 15u
**Quantite Reelle**: 9u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:25:31.814Z*
