# Rapport Backtest - Client Le Fourgon SAS

## Contexte

- **Client** : Le Fourgon SAS (ID: 56363)
- **Commande réelle** : S37059
- **Date commande** : 2025-06-24 06:16:08
- **Date cutoff système** : 2025-06-23 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 4
- **Tokens**: 3,768 input + 769 output = 4,537 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 100.0% | 4 produits prédits, 4 corrects |
| **Rappel** | 100.0% | 4 produits réels, 4 détectés |
| **F1-Score** | 100.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 8.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 28.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 24.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -21.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 1 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (4)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [MF0024] MF KETCHUP 250g | 20 | 32 | 12.0 | 37.5% | partial | Non | Non | LLM |
| [MF0047] MF Mayonnaise 250ml | 20 | 16 | 4.0 | 25.0% | partial | Non | Non | LLM |
| [RF003] REFIELD Maïs 500G  | 32 | 48 | 16.0 | 33.3% | partial | Non | Non | LLM |
| [MF0021] MF Sauce BBQ 250ml | 16 | 16 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (4 produits)


<details>
<summary><strong>1. [MF0024] MF KETCHUP 250g</strong> - LLM: 20u vs Médiane: 23u (Réel: 32u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 20u
- **Baseline calculee**: 20u
- **Mediane historique**: 23u
- **Reel commande**: 32u
- **Erreur LLM**: 12u (37.5%)
- **Erreur Mediane**: 9u (28.1%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 20u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre une fréquence moyenne d'environ 25 à 35 jours entre chaque réapprovisionnement. La dernière commande datant du 6 mai 2025 (soit 48 jours avant la date actuelle), le délai habituel est largement dépassé, ce qui confirme un besoin immédiat pour couvrir les 30 prochains jours. Pour la quantité, bien que la dernière commande ait été de 32u, l'historique récent montre des volumes variés (10u, 16u, 20u, 25u). En appliquant la règle de la médiane sur les commandes récentes (20u) et en privilégiant la prudence pour éviter le surstockage sur un format 250g, une quantité de 20 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 958 tokens
- **Output**: 185 tokens
- **Total**: 1,143 tokens



</details>


<details>
<summary><strong>2. [MF0047] MF Mayonnaise 250ml</strong> - LLM: 20u vs Médiane: 23u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 20u
- **Baseline calculee**: 20u
- **Mediane historique**: 23u
- **Reel commande**: 16u
- **Erreur LLM**: 4u (25.0%)
- **Erreur Mediane**: 7u (43.8%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 20u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique montre un cycle de commande moyen d'environ 23 jours (intervalles de 14, 15, 26 et 35 jours). La dernière commande datant du 06 mai 2025 (soit 48 jours avant la date actuelle), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours, indiquant un risque de rupture imminent. Pour la quantité, l'historique récent présente des variations (10u à 35u). En appliquant la règle de la médiane sur les commandes récentes (10, 16, 20, 32, 35), la valeur centrale est 20u. Ce volume correspond également à la commande passée à la même période l'année dernière (juin 2024), validant une cohérence saisonnière.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 206 tokens
- **Total**: 1,162 tokens



</details>


<details>
<summary><strong>3. [RF003] REFIELD Maïs 500G </strong> - LLM: 32u vs Médiane: 36u (Réel: 48u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 32u
- **Baseline calculee**: 32u
- **Mediane historique**: 36u
- **Reel commande**: 48u
- **Erreur LLM**: 16u (33.3%)
- **Erreur Mediane**: 12u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 32u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles variant de 14 à 35 jours. Depuis la dernière commande du 06/05/2025, 48 jours se sont écoulés, ce qui dépasse largement le cycle moyen et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent. Pour la quantité, l'historique récent présente des variations (16u à 65u). En excluant le pic exceptionnel de 65u et en appliquant la règle de la médiane sur les commandes récentes (16, 20, 32, 40), la valeur pivot se situe entre 20 et 32. Conformément au principe de précaution B2B et à la sélection de la médiane représentative, une quantité de 32 unités est préconisée pour couvrir les besoins sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 943 tokens
- **Output**: 203 tokens
- **Total**: 1,146 tokens



</details>


<details>
<summary><strong>4. [MF0021] MF Sauce BBQ 250ml</strong> - LLM: 16u vs Médiane: 16u (Réel: 16u)</summary>

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
ÉTAPE 1 (DÉTECTION) : La dernière commande remonte au 01/04/2025, soit 83 jours. Le cycle moyen observé est d'environ 30 jours (février à mars, mars à avril). Le délai depuis la dernière commande dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Le risque de rupture est critique. ÉTAPE 2 (QUANTITÉ) : L'historique récent montre des commandes de 16u, 10u et 16u. La médiane des quantités est de 16u. Conformément aux règles de précaution B2B, une commande de 16u est préconisée pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 175 tokens
- **Total**: 1,086 tokens



</details>




### Donnees d'Input LLM (4 produits)


<details>
<summary><strong>1. [MF0024] MF KETCHUP 250g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-06 09:19:13: 32u
- 2025-04-01 07:53:14: 16u
- 2025-03-06 13:21:30: 10u
- 2025-02-19 13:07:30: 25u
- 2025-02-05 08:23:52: 20u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 14:36:38: 20u

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 32u

</details>


<details>
<summary><strong>2. [MF0047] MF Mayonnaise 250ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-06 09:19:13: 16u
- 2025-04-01 07:53:14: 32u
- 2025-03-06 13:21:30: 10u
- 2025-02-19 13:07:30: 35u
- 2025-02-05 08:23:52: 20u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 14:36:38: 20u

**Quantite Mediane (fallback)**: 20u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>3. [RF003] REFIELD Maïs 500G </strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-06 09:19:13: 40u
- 2025-04-01 07:53:14: 32u
- 2025-03-06 13:21:30: 65u
- 2025-02-19 13:07:30: 20u
- 2025-02-05 08:23:52: 16u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 32u
**Quantite Reelle**: 48u

</details>


<details>
<summary><strong>4. [MF0021] MF Sauce BBQ 250ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-01 07:53:14: 16u
- 2025-03-06 13:21:30: 10u
- 2025-02-05 08:23:52: 16u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 16u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:20:47.188Z*
