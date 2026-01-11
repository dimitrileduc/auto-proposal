# Rapport Backtest - Client CRF MARKET ST VITH EINKAUFZENT

## Contexte

- **Client** : CRF MARKET ST VITH EINKAUFZENT (ID: 38769)
- **Commande réelle** : S40309
- **Date commande** : 2025-11-13 10:16:13
- **Date cutoff système** : 2025-11-12 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 22
- **Tokens**: 19,988 input + 3,680 output = 23,668 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 23.8% | 21 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 38.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 3.20 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 66.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 65.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -66.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (5)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LD013] LD Tuscan Organic Spread 180 g | 2 | 8 | 6.0 | 75.0% | partial | LLM |
| [LD007] LD Organic Pineapple Coconut Spread 180 g | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [LD011] LD Organic Kids Spread 180 g | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [LD014] LD Organic Avocado Spread 180 g | 1 | 4 | 3.0 | 75.0% | partial | LLM |
| [LD015] LD Onion Spread 180g | 2 | 4 | 2.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 8u
- **Erreur LLM**: 6u (75.0%)
- **Erreur Mediane**: 6u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 50 à 70 jours (51 jours entre juin et août, 51 jours entre août et octobre). La dernière commande remonte au 02/10/2025, soit 41 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous atteignons l'horizon de risque de rupture (41 + 30 = 71 jours, ce qui dépasse le cycle habituel). En application du principe de précaution B2B et face à la régularité parfaite des quantités précédentes, la quantité retenue est la médiane historique, soit 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 163 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>2. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
Le cycle de commande est irrégulier avec une dernière commande effectuée il y a 41 jours (02/10/2025). Bien que la rotation soit faible, le délai écoulé dépasse largement la fréquence observée entre les deux commandes précédentes (environ 100 jours), créant une incertitude sur le stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est nécessaire pour couvrir le risque de rupture dans les 30 prochains jours. La quantité retenue est de 2 unités, correspondant à la valeur la plus élevée du récent historique pour assurer une disponibilité minimale sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 149 tokens
- **Total**: 1,039 tokens



</details>


<details>
<summary><strong>3. [LD011] LD Organic Kids Spread 180 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse de l'historique récent montre un cycle de commande régulier d'environ 50 à 70 jours (51 jours entre juin et août, 51 jours entre août et octobre). La dernière commande datant du 02/10/2025, soit il y a 41 jours, nous atteignons 80% du cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold). Conformément à la règle de la médiane sur les rotations faibles et régulières, une quantité de 1 unité est préconisée pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 147 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>4. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 4u
- **Erreur LLM**: 3u (75.0%)
- **Erreur Mediane**: 3u (75.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 02/10/2025, soit 41 jours avant la date actuelle. Le cycle moyen observé est d'environ 50 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous dépassons largement les 70% du cycle moyen (41/50 = 82%). Par principe de précaution B2B, une commande est nécessaire. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u, 1u et 2u. La médiane de ces quantités est de 1u. Conformément à la règle de ne pas surestimer pour les produits à faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 187 tokens
- **Total**: 1,095 tokens



</details>


<details>
<summary><strong>5. [LD015] LD Onion Spread 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 25 juin 2025, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de données historiques supplémentaires et l'irrégularité du cycle imposent l'application du principe de précaution B2B pour éviter une rupture prolongée. Selon la règle de détection du besoin en cas de cycle incertain, une commande est nécessaire. La quantité est fixée à 2 unités, correspondant à la médiane (et unique valeur) de l'historique récent, conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 868 tokens
- **Output**: 133 tokens
- **Total**: 1,001 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [LD013] LD Tuscan Organic Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 13:24:19: 2u
- 2025-08-12 12:02:02: 2u
- 2025-06-25 06:38:59: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>2. [LD007] LD Organic Pineapple Coconut Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 13:24:19: 2u
- 2025-06-25 06:38:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [LD011] LD Organic Kids Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 13:24:19: 1u
- 2025-08-12 12:02:02: 1u
- 2025-06-25 06:38:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>4. [LD014] LD Organic Avocado Spread 180 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-10-02 13:24:19: 2u
- 2025-08-12 12:02:02: 1u
- 2025-06-25 06:38:59: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [LD015] LD Onion Spread 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-25 06:38:59: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>




---

## False Positives (16)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | Predicted 2u but not ordered |
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Predicted 1u but not ordered |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | Predicted 1u but not ordered |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | Predicted 1u but not ordered |
| [LD009] LD Organic Asparagus Spread 180 g | 1 | Predicted 1u but not ordered |
| [LD010] LD Organic Truffle Spread 135 g | 1 | Predicted 1u but not ordered |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | Predicted 1u but not ordered |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 2 | Predicted 2u but not ordered |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 1 | Predicted 1u but not ordered |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | Predicted 3u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | Predicted 2u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 3 | Predicted 3u but not ordered |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | Predicted 2u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 3 | Predicted 3u but not ordered |
| [LD012] LD Organic Samphire Spread 135 g | 1 | Predicted 1u but not ordered |
| [TVF009] TVF TARTINADE BIO POIS CHICHES 180g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:16:49.962Z*
