# Rapport Backtest - Client DLL PROXY RAEREN PETERGENSFELD

## Contexte

- **Client** : DLL PROXY RAEREN PETERGENSFELD (ID: 38869)
- **Commande réelle** : S40037
- **Date commande** : 2025-11-03 07:57:00
- **Date cutoff système** : 2025-11-02 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 33
- **Tokens**: 29,787 input + 5,339 output = 35,126 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 55.6% | 9 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 71.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 14.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 20.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 14.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte à plus de 4 mois (125 jours). Bien que la rotation soit très faible, l'absence de commandes récentes sur un cycle long crée une incertitude sur le stock résiduel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture prolongée), un réapprovisionnement est préconisé. La quantité retenue correspond à la dernière commande connue (2 unités), respectant la règle de maintien des volumes pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 118 tokens
- **Total**: 994 tokens



</details>


<details>
<summary><strong>2. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte à plus de 4 mois (125 jours). Bien que la rotation soit très faible, l'absence de commandes récentes sur un produit actif crée une incertitude sur le cycle de réapprovisionnement. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter une rupture prolongée), une commande est préconisée. La quantité retenue correspond à la dernière commande connue (2 unités), conformément à la règle de maintien des volumes pour les faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 117 tokens
- **Total**: 993 tokens



</details>


<details>
<summary><strong>3. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B. Le délai écoulé suggère un besoin de renouvellement du stock pour éviter une rupture prolongée. ÉTAPE 2 : L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u) et à l'utilisation de la médiane historique, la quantité de 2 unités est maintenue pour reconstituer le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 156 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>4. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'absence de cycle régulier impose l'application du principe de précaution B2B pour éviter une rupture de stock prolongée, surtout à l'approche d'un nouvel horizon de 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément aux règles sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane historique) pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 162 tokens
- **Total**: 1,036 tokens



</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 30 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible, le principe de précaution B2B s'applique pour éviter une rupture de stock prolongée sur un produit actif, surtout face à un cycle irrégulier. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale historique pour couvrir le besoin sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 142 tokens
- **Total**: 1,020 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [JF054] JF LEMON MAYONNAISE 250ml Weck</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:09:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF056] JF SAUCE CHIPOTLE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:09:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF055] JF HONEY MUSTARD MAYO 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:09:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:09:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-30 12:09:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (4)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:13:34.425Z*
