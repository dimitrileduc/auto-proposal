# Rapport Backtest - Client NATURKOST WEST GMBH

## Contexte

- **Client** : NATURKOST WEST GMBH (ID: 3818)
- **Commande réelle** : S40142
- **Date commande** : 2025-11-05 12:54:20
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 4,374 input + 726 output = 5,100 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 75.0% | 4 produits prédits, 3 corrects |
| **Rappel** | 100.0% | 3 produits réels, 3 détectés |
| **F1-Score** | 85.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 10.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (3)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g | 32 | 16 | 16.0 | 100.0% | partial | LLM |
| [MF0042] MF Brotaufstrich Tomate Bärlauch 250g | 48 | 48 | 0.0 | 0.0% | exact | LLM |
| [MF0062] ​MF Tarti Betterave rouge | 16 | 32 | 16.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (3 produits)


<details>
<summary><strong>1. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM: 32u vs Médiane: 32u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 32u
- **Baseline calculee**: 32u
- **Mediane historique**: 32u
- **Reel commande**: 16u
- **Erreur LLM**: 16u (100.0%)
- **Erreur Mediane**: 16u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 32u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande récent montre une fréquence de réapprovisionnement toutes les 2 à 3 semaines (14 à 19 jours). La dernière commande datant du 13 octobre (soit 22 jours avant la date actuelle), le seuil de 70% du cycle moyen est dépassé, ce qui indique un risque de rupture imminent dans l'horizon des 30 jours. Concernant la quantité, l'historique récent est extrêmement stable avec trois commandes consécutives de 32 unités. Conformément à la règle de la médiane et du maintien d'une rotation régulière, la quantité de 32 unités est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 1,148 tokens
- **Output**: 150 tokens
- **Total**: 1,298 tokens



</details>


<details>
<summary><strong>2. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM: 48u vs Médiane: 40u (Réel: 48u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 48u
- **Baseline calculee**: 48u
- **Mediane historique**: 40u
- **Reel commande**: 48u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 8u (16.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 48u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 24 septembre 2025, soit 41 jours avant la date actuelle. Le cycle de commande historique varie entre 7 et 21 jours, ce qui indique un retard important et un risque de rupture critique sous 30 jours. L'historique de l'année précédente (octobre/novembre 2024) montre des commandes régulières de 48u. En appliquant la règle de la médiane sur les commandes récentes (32, 80, 32, 32, 48, 64), la médiane est de 40u. Cependant, pour s'aligner sur la saisonnalité N-1 et la récurrence des volumes standards, une quantité de 48u est préconisée pour couvrir le besoin immédiat.

**Tokens utilises pour cette prediction:**
- **Input**: 1,181 tokens
- **Output**: 188 tokens
- **Total**: 1,369 tokens



</details>


<details>
<summary><strong>3. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM: 16u vs Médiane: 32u (Réel: 32u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 32u
- **Reel commande**: 32u
- **Erreur LLM**: 16u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 110 jours entre les deux dernières commandes. Au 04/11/2025, 41 jours se sont écoulés depuis la dernière commande (24/09). Bien que nous ne soyons qu'à environ 40% du cycle moyen, l'irrégularité des volumes (passage de 80u à 16u) et l'absence d'historique N-1 créent une incertitude sur la rotation réelle. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture sur un horizon de 30 jours), une commande est préconisée. La quantité retenue est de 16 unités, correspondant à la commande la plus récente et la plus basse, afin d'éviter le surstockage tout en maintenant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 201 tokens
- **Total**: 1,088 tokens



</details>




### Donnees d'Input LLM (3 produits)


<details>
<summary><strong>1. [MF0044] MF Brotaufstrich Kichererbsen - Kreuzkümmel 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-13 10:17:04: 32u
- 2025-09-24 09:49:39: 32u
- 2025-09-10 06:32:45: 32u
- 2025-06-06 08:36:21: 48u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-14 06:57:05: 48u
- 2024-09-09 12:35:42: 32u
- 2024-09-05 07:56:09: 32u
- 2024-08-27 12:23:03: 16u
- 2024-08-16 09:58:48: 16u
- 2024-06-27 07:43:54: 16u
- 2024-06-13 06:56:18: 32u
- 2024-05-16 08:11:07: 32u
- 2024-05-14 08:23:32: 16u
- 2024-03-14 08:27:15: 32u
- 2024-03-08 09:59:07: 32u
- 2024-02-22 13:59:46: 32u

**Quantite Mediane (fallback)**: 32u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>2. [MF0042] MF Brotaufstrich Tomate Bärlauch 250g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 09:49:39: 32u
- 2025-09-10 06:32:45: 80u
- 2025-08-20 12:43:59: 32u
- 2025-08-13 10:37:06: 32u
- 2025-06-25 12:42:38: 48u
- 2025-06-06 08:36:21: 64u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-30 10:32:25: 48u
- 2024-10-14 06:57:05: 48u
- 2024-09-09 12:35:42: 48u
- 2024-09-05 07:56:09: 48u
- 2024-08-27 12:23:03: 32u
- 2024-08-16 09:58:48: 32u
- 2024-06-27 07:43:54: 32u
- 2024-06-13 06:56:18: 32u
- 2024-05-16 08:11:07: 48u
- 2024-05-14 08:23:32: 32u
- 2024-04-18 08:58:20: 48u
- 2024-03-14 08:27:15: 96u

**Quantite Mediane (fallback)**: 48u
**Quantite Reelle**: 48u

</details>


<details>
<summary><strong>3. [MF0062] ​MF Tarti Betterave rouge</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-24 09:49:39: 16u
- 2025-06-06 08:36:21: 80u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 32u

</details>




---

## False Positives (1)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0048] MF Delikatess Mayonnaise 250ml DE | 32 | Predicted 32u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:05:13.040Z*
