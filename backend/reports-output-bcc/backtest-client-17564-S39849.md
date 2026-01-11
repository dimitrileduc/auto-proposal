# Rapport Backtest - Client Abbinante Ophélie (La Panetière Provençale)

## Contexte

- **Client** : Abbinante Ophélie (La Panetière Provençale) (ID: 17564)
- **Commande réelle** : S39849
- **Date commande** : 2025-10-22 07:13:33
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 21
- **Tokens**: 18,723 input + 3,183 output = 21,906 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 35.7% | 14 produits prédits, 5 corrects |
| **Rappel** | 100.0% | 5 produits réels, 5 détectés |
| **F1-Score** | 52.6% | Score equilibre global |

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

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV136] LV Tartinade Betterave 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 3 | 3 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (5 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre une rotation très faible et irrégulière (cycle de plusieurs mois). La dernière commande remonte au 16 juin 2025, soit plus de 120 jours. Bien que le cycle soit difficile à déterminer précisément, le principe de précaution B2B et l'absence de commande récente suggèrent un risque de rupture de stock ou un besoin de renouvellement pour maintenir la présence en rayon. Conformément aux règles pour les rotations faibles (1-2u), la quantité retenue est la médiane historique de 1 unité, privilégiant la valeur la plus basse pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 142 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>2. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 16 juin 2025, soit plus de 120 jours, ce qui dépasse largement le cycle de réapprovisionnement suggéré par l'historique (environ 90-100 jours). Bien que la rotation soit très faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane historique et au volume habituel constaté l'année précédente à la même période, afin de ne pas surstocker un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 133 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>3. [LV136] LV Tartinade Betterave 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 127 jours. Bien que le cycle soit difficile à déterminer en raison du manque d'historique, le principe de précaution B2B s'applique pour éviter une rupture prolongée sur cette référence. Conformément aux règles de gestion des rotations faibles (1-2u) et en l'absence d'historique N-1, une commande de 1 unité est préconisée pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 117 tokens
- **Total**: 988 tokens



</details>


<details>
<summary><strong>4. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 juin 2025, soit plus de 120 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande en novembre (09/11/2023). Avec un seuil de réapprovisionnement de 30 jours, nous couvrons la période de novembre. Par principe de précaution B2B et pour éviter une rupture sur un cycle long/irrégulier, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent est de 1u, mais l'historique N-1 et global oscille entre 2u et 3u. En suivant la règle de choisir la valeur la plus basse en cas de doute pour ne pas surestimer le stock, la médiane ajustée vers le bas donne 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 925 tokens
- **Output**: 207 tokens
- **Total**: 1,132 tokens



</details>


<details>
<summary><strong>5. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 3u vs Médiane: 4u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 4u
- **Reel commande**: 3u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit présente une rotation lente mais régulière avec un historique N-1. La dernière commande enregistrée remonte à plus de 16 mois (juin 2024). Bien qu'il n'y ait pas de commandes récentes, l'absence de données sur les 12 derniers mois crée une incertitude majeure sur l'état du stock actuel. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande de réapprovisionnement est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence d'historique récent, nous nous basons sur les données N-1. Les quantités historiques sont de 2, 4 et 3 unités. La médiane de ces commandes est de 3 unités. Cette quantité permet de couvrir le besoin sans risque de surstockage excessif pour un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 214 tokens
- **Total**: 1,123 tokens



</details>




### Donnees d'Input LLM (5 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 08:43:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 06:31:27: 2u
- 2024-03-26 09:38:56: 1u
- 2023-11-09 11:00:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 08:43:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 06:31:27: 1u
- 2024-03-26 09:38:56: 1u
- 2023-11-09 11:00:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV136] LV Tartinade Betterave 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 08:43:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV055] LV Mini grissini à l'huile d'olive  100g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-16 08:43:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 06:31:27: 3u
- 2024-03-26 09:38:56: 2u
- 2023-11-09 11:00:00: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-13 06:31:27: 2u
- 2024-03-26 09:38:56: 4u
- 2023-11-09 11:00:00: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 3u

</details>




---

## False Positives (9)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 1 | Predicted 1u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 1 | Predicted 1u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 4 | Predicted 4u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Predicted 1u but not ordered |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | Predicted 1u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Predicted 1u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 2 | Predicted 2u but not ordered |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:19:17.369Z*
