# Rapport Backtest - Client LA PETITE EPICERIE BIO

## Contexte

- **Client** : LA PETITE EPICERIE BIO (ID: 60424)
- **Commande réelle** : S39848
- **Date commande** : 2025-10-22 13:46:04
- **Date cutoff système** : 2025-10-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 57
- **Tokens**: 50,309 input + 8,446 output = 58,755 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 36.4% | 22 produits prédits, 8 corrects |
| **Rappel** | 100.0% | 8 produits réels, 8 détectés |
| **F1-Score** | 53.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.13 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 12.5% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 12.5% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 12.5% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 7 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (8)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB06] REB chips bio - paprika fumé 35g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (8 produits)


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
La dernière commande remonte au 17 septembre, soit 34 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est avéré car nous avons dépassé le cycle de précaution. Bien que l'historique soit limité à une seule commande récente, le principe de précaution B2B impose de prévoir un réapprovisionnement. La quantité retenue est de 1 unité, correspondant à la médiane (et unique valeur) de l'historique récent, afin de maintenir le stock sans risque de surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 137 tokens
- **Total**: 1,010 tokens



</details>


<details>
<summary><strong>2. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre, soit 34 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré pour ce produit à faible rotation. En l'absence d'historique long, le principe de précaution B2B s'applique pour maintenir la disponibilité. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter, afin d'éviter un surstockage sur un produit dont la fréquence est encore incertaine.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 174 tokens
- **Total**: 1,049 tokens



</details>


<details>
<summary><strong>3. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 17 septembre, soit 34 jours écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous dépassons le cycle de précaution. En l'absence d'historique long permettant de définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 147 tokens
- **Total**: 1,019 tokens



</details>


<details>
<summary><strong>4. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 mai 2025, soit environ 146 jours. Bien que la rotation soit très faible, l'absence de commande récente sur un produit de type tartinade suggère un besoin de renouvellement de stock pour éviter une rupture permanente en rayon. En B2B, le principe de précaution s'applique pour maintenir la référence active. ÉTAPE 2 : Estimation quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1 unité pour couvrir le risque sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 161 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>5. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 28 mai 2025, soit environ 146 jours. Bien que la rotation soit extrêmement faible, l'absence de commande sur une période aussi longue pour un produit de type tartinade suggère un risque de rupture de stock imminent ou un besoin de renouvellement de l'unité d'exposition. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est préconisée. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 174 tokens
- **Total**: 1,048 tokens



</details>


<details>
<summary><strong>6. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 146 jours. Bien que le cycle soit difficile à déterminer en l'absence d'historique récurrent, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée sur une référence active. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité retenue est de 2 unités, correspondant à la dernière commande connue, afin de maintenir un stock minimal sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 121 tokens
- **Total**: 991 tokens



</details>


<details>
<summary><strong>7. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte à 146 jours (mai 2025). Bien que la rotation soit très faible, le délai écoulé dépasse largement tout cycle raisonnable. En application du principe de précaution B2B (détecter un besoin incertain plutôt qu'une rupture manquée), un réapprovisionnement est nécessaire pour maintenir la présence du produit en rayon. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale historique sans l'augmenter. La médiane des commandes récentes est de 1.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 163 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>8. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 28 mai 2025, soit plus de 140 jours. Bien que la rotation soit extrêmement faible, le principe de précaution B2B s'applique face à un cycle irrégulier ou difficile à déterminer. Un risque de rupture existe sur l'horizon de 30 jours si un besoin ponctuel survient. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité minimale de 1u sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 154 tokens
- **Total**: 1,030 tokens



</details>




### Donnees d'Input LLM (8 produits)


<details>
<summary><strong>1. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [REB06] REB chips bio - paprika fumé 35g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 11:57:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV331] LV Tartinade Lentils Balsamico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JOY01] JOY! Organic Sweet Orange Jam 370g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:15:14: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [NOM03] NOMADIC barre protéinée au beurre de noix & noisette 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [NOM04] NOMADIC barre protéinée au beurre de noix & double chocolat 40g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-28 06:15:14: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (14)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 1 | Predicted 1u but not ordered |
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | Predicted 1u but not ordered |
| [WIG01] WIGNAC cidre naturel bio 330ml | 1 | Predicted 1u but not ordered |
| [RF003] REFIELD Maïs 500G  | 1 | Predicted 1u but not ordered |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 2 | Predicted 2u but not ordered |
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | Predicted 1u but not ordered |
| [fsv02] Noix de cajou nature bio vrac 2,8kg  | 2 | Predicted 2u but not ordered |
| [LV149] LV Sauce Aioli Pesto 200ml | 1 | Predicted 1u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | Predicted 1u but not ordered |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | Predicted 1u but not ordered |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | Predicted 1u but not ordered |
| [LEA09] LEAMO cola bio 330ml | 1 | Predicted 1u but not ordered |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:17:29.666Z*
