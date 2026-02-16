# Rapport Backtest - Client ÖKORING HANDELS GMBH

## Contexte

- **Client** : ÖKORING HANDELS GMBH (ID: 3812)
- **Commande réelle** : S40248
- **Date commande** : 2025-11-12 07:35:42
- **Date cutoff système** : 2025-11-11 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 9
- **Tokens**: 8,743 input + 1,488 output = 10,231 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 8 produits prédits, 6 corrects |
| **Rappel** | 100.0% | 6 produits réels, 6 détectés |
| **F1-Score** | 85.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 6 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (6)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0029] MF Tarti Datte chili 250g | 16 | 16 | 0.0 | 0.0% | exact | LLM |
| [MF0030] MF Tarti Mangue Curry 250g  | 16 | 16 | 0.0 | 0.0% | exact | LLM |
| [MF0031] MF Tarti Olives verte 250g  | 16 | 16 | 0.0 | 0.0% | exact | LLM |
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 16 | 16 | 0.0 | 0.0% | exact | LLM |
| [MF0043] MF Brotaufstrich Apfel Meerrettich 250g | 16 | 16 | 0.0 | 0.0% | exact | LLM |
| [MF0062] ​MF Tarti Betterave rouge | 16 | 16 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (6 produits)


<details>
<summary><strong>1. [MF0029] MF Tarti Datte chili 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 16u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 13 à 14 jours (dernières commandes les 08/10, 21/10 et 04/11). La dernière commande datant du 04/11 (il y a 7 jours), le prochain besoin est estimé aux alentours du 17-18 novembre, ce qui entre dans l'horizon du seuil de réapprovisionnement de 30 jours. En appliquant la règle de la médiane sur les commandes récentes (16, 32, 16, 48, 16, 16, 16, 16), la valeur médiane est de 16 unités. Les pics à 32 et 48 unités sont considérés comme exceptionnels. Conformément au principe de précaution B2B et à la règle de la médiane, une quantité de 16 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 999 tokens
- **Output**: 224 tokens
- **Total**: 1,223 tokens



</details>


<details>
<summary><strong>2. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 16u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence régulière d'environ 10 à 14 jours entre chaque réapprovisionnement. La dernière commande datant du 4 novembre (il y a 7 jours), le risque de rupture est élevé dans l'horizon des 30 jours (seuil de réapprovisionnement). Concernant la quantité, l'historique récent oscille entre 16u et 32u. En appliquant la règle de la médiane et le principe de prudence consistant à choisir la valeur la plus basse en cas de doute pour éviter le surstockage, une quantité de 16u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 1,000 tokens
- **Output**: 147 tokens
- **Total**: 1,147 tokens



</details>


<details>
<summary><strong>3. [MF0031] MF Tarti Olives verte 250g </strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 16u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique récent montre des intervalles de commande irréguliers (19 jours puis 70 jours). La dernière commande date du 04/11/2025, soit il y a seulement 7 jours. Cependant, selon le principe de précaution B2B et la règle du cycle irrégulier/difficile à déterminer, un besoin est identifié pour couvrir l'horizon de 30 jours (Replenishment Threshold Days) afin d'éviter toute rupture sur un produit à rotation constante. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les trois dernières commandes sont strictement identiques (16u). La médiane et la constante historique convergent vers 16 unités. Conformément à la règle de maintien des quantités régulières, la quantité préconisée est de 16.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 190 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>4. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 16u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier avec une dernière commande effectuée le 21 octobre, soit il y a 21 jours. Le cycle moyen observé entre les dernières commandes est d'environ 15 à 20 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent. La quantité est fixée à 16 unités, ce qui correspond à la médiane stricte et constante de toutes les commandes passées en 2025.

**Tokens utilises pour cette prediction:**
- **Input**: 1,040 tokens
- **Output**: 123 tokens
- **Total**: 1,163 tokens



</details>


<details>
<summary><strong>5. [MF0043] MF Brotaufstrich Apfel Meerrettich 250g</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 16u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 08/10/2025, soit il y a 34 jours. Le cycle moyen observé entre les dernières commandes est d'environ 45 jours (intervalles de 15, 43 et 43 jours). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (34 jours écoulés + 30 jours de seuil > cycle moyen). Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec une quantité constante de 16 unités sur les 4 dernières commandes. La médiane est de 16. Conformément à la règle de maintien des rotations régulières, la quantité retenue est de 16.

**Tokens utilises pour cette prediction:**
- **Input**: 964 tokens
- **Output**: 201 tokens
- **Total**: 1,165 tokens



</details>


<details>
<summary><strong>6. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 16u
- **Reel commande**: 16u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande d'environ 45 à 50 jours. La dernière commande datant du 29 septembre (il y a 43 jours), nous avons largement dépassé le seuil de 70% du cycle moyen, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément au principe de précaution B2B, un réapprovisionnement est nécessaire. La quantité est fixée à 16 unités, correspondant à la médiane stricte et constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 137 tokens
- **Total**: 1,042 tokens



</details>




### Donnees d'Input LLM (6 produits)


<details>
<summary><strong>1. [MF0029] MF Tarti Datte chili 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 10:16:05: 16u
- 2025-10-21 10:27:16: 32u
- 2025-10-08 06:30:49: 16u
- 2025-08-26 09:44:27: 48u
- 2025-08-19 07:45:38: 16u
- 2025-08-11 11:36:10: 16u
- 2025-08-07 06:30:17: 16u
- 2025-07-14 07:05:06: 16u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>2. [MF0030] MF Tarti Mangue Curry 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 10:16:05: 16u
- 2025-10-21 10:27:16: 32u
- 2025-10-08 06:30:49: 16u
- 2025-09-29 10:19:21: 32u
- 2025-08-26 09:44:27: 16u
- 2025-08-19 07:45:38: 16u
- 2025-08-11 11:36:10: 16u
- 2025-08-07 06:30:17: 16u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>3. [MF0031] MF Tarti Olives verte 250g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-11-04 10:16:05: 16u
- 2025-08-26 09:44:27: 16u
- 2025-08-07 06:30:17: 16u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>4. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-21 10:27:16: 16u
- 2025-10-08 06:30:49: 16u
- 2025-09-29 10:19:21: 16u
- 2025-08-19 07:45:38: 16u
- 2025-08-11 11:36:10: 16u
- 2025-08-07 06:30:17: 16u
- 2025-07-14 07:05:06: 16u
- 2025-06-24 10:09:11: 16u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-28 08:31:22: 32u
- 2024-01-09 09:56:05: 48u

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>5. [MF0043] MF Brotaufstrich Apfel Meerrettich 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-08 06:30:49: 16u
- 2025-08-26 09:44:27: 16u
- 2025-08-11 11:36:10: 16u
- 2025-06-24 10:09:11: 16u

**Commandes N-1 (meme periode annee derniere):**
- 2024-08-28 08:31:22: 32u
- 2024-01-09 09:56:05: 16u

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>6. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-29 10:19:21: 16u
- 2025-08-11 11:36:10: 16u
- 2025-06-24 10:09:11: 16u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 16u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0027] MF Tarti Aubergine 250g  | 16 | Predicted 16u but not ordered |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 16 | Predicted 16u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:20:19.836Z*
