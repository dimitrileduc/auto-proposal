# Rapport Backtest - Client MAISON DES VINS FINS

## Contexte

- **Client** : MAISON DES VINS FINS (ID: 60477)
- **Commande réelle** : S40242
- **Date commande** : 2025-11-14 10:22:45
- **Date cutoff système** : 2025-11-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 5
- **Tokens**: 4,375 input + 772 output = 5,147 total


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
| **MAE** | 1.80 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 39.1% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 21.2% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -30.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 2 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 3 | 3 | 0.0 | 0.0% | exact | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 3 | 11 | 8.0 | 72.7% | partial | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 4 | 3 | 1.0 | 33.3% | partial | LLM |


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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit plus de 100 jours. Bien que la rotation soit faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée une incertitude sur l'état du stock. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent présente une commande unique de 3 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité est maintenue à 3 unités, correspondant à la dernière observation pour assurer la disponibilité sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 183 tokens
- **Total**: 1,058 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit plus de 100 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable de réapprovisionnement. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent présente une commande unique de 3 unités. Conformément à la règle de maintien des quantités pour les rotations faibles et l'utilisation de la médiane historique, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 162 tokens
- **Total**: 1,037 tokens



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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 04/08/2025, soit plus de 100 jours. Bien que la rotation soit très faible, l'absence de commande récente sur un produit actif crée une incertitude sur l'état du stock. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), un réapprovisionnement est préconisé. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 3 unités. Conformément à la règle de maintien des volumes pour les rotations faibles et régulières, la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 162 tokens
- **Total**: 1,037 tokens



</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 3u vs Médiane: 3u (Réel: 11u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 11u
- **Erreur LLM**: 8u (72.7%)
- **Erreur Mediane**: 8u (72.7%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 04/08/2025, soit plus de 100 jours. Bien que la rotation soit faible, l'absence de données sur un cycle régulier impose l'application du principe de précaution B2B. Le risque de rupture est considéré comme présent par défaut face à une période d'inactivité prolongée. ÉTAPE 2 : L'historique récent ne présente qu'une seule commande de 3 unités. Conformément à la règle de maintien des quantités pour les rotations faibles et régulières, la quantité retenue est la médiane de l'historique disponible, soit 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 151 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>5. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 4u vs Médiane: 3u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 3u
- **Reel commande**: 3u
- **Erreur LLM**: 1u (33.3%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 04/08/2025, soit plus de 100 jours sans activité. Bien que le cycle soit difficile à déterminer avec une seule commande historique, le principe de précaution B2B s'applique pour éviter une rupture prolongée si le produit est toujours au catalogue. En l'absence de données récurrentes, la quantité est basée sur l'unique volume historique connu (4 unités) pour reconstituer un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 114 tokens
- **Total**: 989 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:41:48: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>2. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:41:48: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>3. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:41:48: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>4. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:41:48: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 11u

</details>


<details>
<summary><strong>5. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-04 11:41:48: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 3u

</details>




---

## False Positives (0)

*Aucun faux positif (précision = 100%)*

---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:22:53.833Z*
