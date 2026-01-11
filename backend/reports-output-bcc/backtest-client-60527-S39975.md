# Rapport Backtest - Client SAINT OCTAVE

## Contexte

- **Client** : SAINT OCTAVE (ID: 60527)
- **Commande réelle** : S39975
- **Date commande** : 2025-10-29 13:49:15
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,464 input + 817 output = 5,281 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 5 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 5.9% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 4.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -5.9% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 4 | 5 | 1.0 | 20.0% | partial | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 3 | 3 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 4u vs Médiane: 5u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 5u
- **Reel commande**: 5u
- **Erreur LLM**: 1u (20.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 78 jours entre les deux dernières commandes. La dernière commande datant du 20 août 2025 (soit il y a 69 jours), nous atteignons 88% du cycle moyen, ce qui dépasse le seuil de risque de 70%. Conformément au principe de précaution B2B et compte tenu de l'horizon de réapprovisionnement de 30 jours, un besoin est détecté. Pour la quantité, la médiane entre 4u et 5u est de 4.5u ; en suivant la règle de choisir la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 168 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 août, soit 69 jours. Le cycle précédent était de 78 jours. Nous approchons de la fin du cycle habituel et, avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. Selon le principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite avec deux commandes de 3 unités. La médiane est de 3. Conformément à la règle de maintien des rotations régulières, la quantité préconisée est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 154 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. Le cycle observé entre les deux dernières commandes est de 78 jours. La dernière commande date du 20 août 2025, soit 69 jours avant la date actuelle. Ce délai représente 88% du cycle moyen, ce qui dépasse largement le seuil de risque de 70%. Une rupture est probable dans l'horizon des 30 jours (Replenishment Threshold Days). ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une stabilité parfaite avec deux commandes de 3 unités. La médiane est de 3. Conformément à la règle de maintien des rotations régulières, la quantité préconisée est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 166 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 3u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 août, soit 69 jours. Le cycle précédent était de 78 jours. Nous sommes à 88% du cycle moyen, ce qui dépasse le seuil de risque de 70%. Le risque de rupture est imminent dans l'horizon des 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite avec deux commandes de 3 unités. La médiane est de 3. Conformément à la règle de maintien des rotations régulières, la quantité préconisée est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 144 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>5. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 3u vs Médiane: 5u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 5u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 2u (66.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 20 août 2025, soit 69 jours avant la date actuelle. L'intervalle précédent était de 78 jours. Nous approchons de la fin du cycle de rotation estimé et le risque de rupture est réel dans l'horizon des 30 jours (Replenishment Threshold Days). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre deux commandes de 6u et 3u. En suivant la règle de la médiane et la consigne de choisir la valeur la plus basse en cas de doute ou de tendance incertaine pour éviter le surstockage, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 185 tokens
- **Total**: 1,077 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:30:35: 5u
- 2025-06-03 12:07:39: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:30:35: 3u
- 2025-06-03 12:07:39: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:30:35: 3u
- 2025-06-03 12:07:39: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:30:35: 3u
- 2025-06-03 12:07:39: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>5. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:30:35: 3u
- 2025-06-03 12:07:39: 6u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:21:28.840Z*
