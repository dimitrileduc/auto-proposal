# Rapport Backtest - Client WATTITUDE sprl

## Contexte

- **Client** : WATTITUDE sprl (ID: 60580)
- **Commande réelle** : S39773
- **Date commande** : 2025-10-16 12:54:09
- **Date cutoff système** : 2025-10-15 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 6
- **Tokens**: 5,237 input + 945 output = 6,182 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 5 produits prédits, 5 corrects |
| **Rappel** | 83.3% | 6 produits réels, 5 détectés |
| **F1-Score** | 90.9% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.40 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 14.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 16.7% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 4 | 4 | 0.0 | 0.0% | exact | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 3 | 1.0 | 33.3% | partial | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 2 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 18 juillet 2025, soit environ 89 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution et de détection du besoin en cas de cycle irrégulier ou incertain, un risque de rupture est identifié pour les 30 prochains jours. La quantité est fixée à 3 unités, correspondant à la valeur de la dernière commande connue (médiane sur historique récent).

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 128 tokens
- **Total**: 1,003 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 juillet 2025, soit 89 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour un produit de snacking bio. En application du principe de précaution B2B (cycle irrégulier ou difficile à déterminer), un besoin de réapprovisionnement est identifié pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. En l'absence d'historique multiple, la quantité de la dernière commande (3 unités) est utilisée comme référence. Conformément aux règles de maintien des faibles rotations (1-3u), la quantité est fixée à 3 unités pour reconstituer le stock initial sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 188 tokens
- **Total**: 1,063 tokens



</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 18 juillet 2025, soit environ 89 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de rotation standard pour ce type de produit. En application du principe de précaution B2B (Étape 1), un risque de rupture est identifié car le besoin de réapprovisionnement est probable après 3 mois d'inactivité. Pour la quantité (Étape 2), on se base sur l'unique point de donnée récent disponible (4 unités) pour maintenir le niveau de stock initial sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 142 tokens
- **Total**: 1,017 tokens



</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 juillet 2025, soit 89 jours avant la date actuelle. Bien qu'il n'y ait qu'une seule commande récente pour établir un cycle, le délai écoulé dépasse largement les seuils de réapprovisionnement standards pour un produit de snacking. En application du principe de précaution B2B (incertitude sur la rotation = prévoir commande), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. En l'absence d'historique multiple, la quantité de la dernière commande (4 unités) est utilisée comme référence. Conformément à la règle de maintien des rotations faibles, la quantité est fixée à 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 179 tokens
- **Total**: 1,054 tokens



</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 18 juillet 2025, soit environ 89 jours. Bien que l'historique soit limité à une seule commande, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture ou de besoin non couvert est jugé élevé par défaut d'historique (incertitude). ÉTAPE 2 : Estimation quantité. En l'absence de cycle établi, on se base sur la quantité unique observée (2u). La médiane et la valeur la plus basse de l'historique récent convergent vers 2 unités pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 175 tokens
- **Total**: 1,050 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 09:59:43: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 09:59:43: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 09:59:43: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 09:59:43: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-18 09:59:43: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 2 | Product analyzed but LLM -> 0 - client ordered 2u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM predit: 0u | Reel commande: 2u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'analyse de l'historique montre une absence totale de commandes récentes et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de commande établi, il n'y a aucun indicateur de risque de rupture imminent pour les 30 prochains jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. Sans historique de consommation, la médiane est nulle. Conformément au principe de ne pas surestimer sans raison factuelle, aucune commande n'est préconisée à ce stade.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:21:10.873Z*
