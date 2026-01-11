# Rapport Backtest - Client LA SUITE by JHM

## Contexte

- **Client** : LA SUITE by JHM (ID: 60429)
- **Commande réelle** : S39477
- **Date commande** : 2025-10-01 07:19:24
- **Date cutoff système** : 2025-09-30 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 12
- **Tokens**: 10,503 input + 1,849 output = 12,352 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 41.7% | 12 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 58.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 42.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 40.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -42.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 4 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [REB11] ReBEL chips premium & bio - truffes 125g | 2 | 3 | 1.0 | 33.3% | partial | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 20 mai 2025, soit plus de 130 jours sans activité. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement tout cycle de réapprovisionnement standard. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture) et compte tenu de l'absence d'historique N-1 pour infirmer la saisonnalité, une commande est déclenchée. La quantité est fixée à 1 unité, correspondant à la médiane et à la dernière commande enregistrée, afin de maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 148 tokens
- **Total**: 1,023 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'unique commande enregistrée date du 20 mai 2025 (soit plus de 130 jours). Bien que la rotation soit très faible, le délai écoulé depuis la dernière commande dépasse largement tout cycle raisonnable, créant une incertitude sur l'état des stocks. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité retenue correspond à la valeur de la dernière commande (2 unités), conformément à la règle de maintien des volumes pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 132 tokens
- **Total**: 1,007 tokens



</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 20 mai 2025, soit plus de 130 jours sans activité. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable en B2B. En application du principe de précaution (mieux vaut détecter un besoin incertain qu'une rupture), une commande est nécessaire pour reconstituer le stock. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité historique la plus basse pour éviter le surstockage. La médiane et la valeur de précaution convergent vers 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 175 tokens
- **Total**: 1,050 tokens



</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 20 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (incertitude sur le cycle = besoin potentiel), une commande est préconisée pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane historique et à la règle de maintien pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 120 tokens
- **Total**: 995 tokens



</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM: 2u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 20 mai 2025, soit plus de 130 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue pour un produit bio/premium suggère un risque de rupture de stock ou un besoin de renouvellement de gamme. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est préconisée. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u), la quantité est maintenue à 2 unités (médiane de l'historique disponible) pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 191 tokens
- **Total**: 1,066 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 08:34:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 08:34:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 08:34:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 08:34:41: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [REB11] ReBEL chips premium & bio - truffes 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-20 08:34:41: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 3u

</details>




---

## False Positives (7)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [UPI04] Jus de pomme-cerise bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [UPI03] Jus de pomme-poire bio d'UPIGNY 250ml | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Predicted 1u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Predicted 1u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Predicted 1u but not ordered |
| [CB010] CB Jus de Pomme cubis 3l | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:27:57.927Z*
