# Rapport Backtest - Client Vrac & Go Blegny

## Contexte

- **Client** : Vrac & Go Blegny (ID: 21025)
- **Commande réelle** : S40057
- **Date commande** : 2025-11-05 07:28:20
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 16
- **Tokens**: 14,728 input + 2,572 output = 17,300 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 60.0% | 15 produits prédits, 9 corrects |
| **Rappel** | 100.0% | 9 produits réels, 9 détectés |
| **F1-Score** | 75.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.67 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 46.2% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 50.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 15.4% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 4 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV145] LV Sauce Tartare 200 ml  | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV159] LV Tartinade aux Truffes  135g  | 3 | 1 | 2.0 | 200.0% | partial | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 3 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [LV135] LV Tartinade Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml  | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [LV145] LV Sauce Tartare 200 ml </strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 15 septembre 2025, soit plus de 50 jours. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement le cycle habituel observé l'année précédente à la même période (octobre). En application du principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais régulière, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 125 tokens
- **Total**: 1,027 tokens



</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM: 3u vs Médiane: 3u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 1u
- **Erreur LLM**: 2u (200.0%)
- **Erreur Mediane**: 2u (200.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 15 septembre 2025, soit 50 jours avant la date actuelle. Bien que le cycle récent soit irrégulier (environ 100 jours entre les deux dernières commandes), l'historique de l'année précédente montre une activité importante sur la période octobre-janvier (commandes de 3u et 4u). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de consommation saisonnière observée en N-1. Par principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon de 30 jours, une commande est nécessaire. La quantité retenue est de 3 unités, correspondant à la médiane des commandes historiques (1, 2, 3, 3, 4) et à la consommation habituelle de fin d'année.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 193 tokens
- **Total**: 1,130 tokens



</details>


<details>
<summary><strong>3. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
Le cycle de commande moyen est d'environ 100 jours. La dernière commande remonte au 15 septembre 2025, soit 50 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, nous atteindrons 80 jours d'écart à l'échéance du seuil, ce qui représente 80% du cycle moyen. Selon le principe de précaution B2B (seuil > 70%), un risque de rupture est identifié. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur constante des commandes récentes de 2025.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 150 tokens
- **Total**: 1,086 tokens



</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 3u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande date du 15 septembre 2025, soit il y a 50 jours. L'historique montre un cycle de réapprovisionnement irrégulier (environ 3 à 4 mois). Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique où une rupture est probable si aucune commande n'est passée, d'autant plus qu'une commande avait été passée en octobre l'année précédente (N-1). Le principe de précaution B2B s'applique. ÉTAPE 2 : Estimation de la quantité. Les commandes récentes et historiques sont majoritairement de 3 unités (médiane de 3). On maintient cette quantité stable conformément aux règles de rotation régulière.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 182 tokens
- **Total**: 1,118 tokens



</details>


<details>
<summary><strong>5. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 15 septembre 2025, soit 50 jours avant la date actuelle. Bien que la rotation soit faible et irrégulière (cycle moyen estimé entre 60 et 100 jours), le délai écoulé dépasse 70% du cycle probable, créant un risque de rupture à l'horizon des 30 jours de seuil de réapprovisionnement. En application du principe de précaution B2B et face à l'incertitude du cycle, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane et à la tendance des commandes les plus récentes (1u), évitant ainsi tout surstockage pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 954 tokens
- **Output**: 164 tokens
- **Total**: 1,118 tokens



</details>


<details>
<summary><strong>6. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 15 septembre 2025, soit 50 jours avant la date actuelle (4 novembre). Bien que la rotation soit lente, l'historique de l'année précédente montre une commande début octobre. Le délai depuis la dernière commande dépasse largement le cycle habituel constaté en 2024. Par principe de précaution B2B et pour éviter une rupture prolongée, un besoin est identifié. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont de 1u et 2u. La médiane du récent est de 1.5u. En application de la règle de choisir la valeur la plus basse en cas de doute pour ne pas surestimer le stock, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 181 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 15 septembre 2025, soit 50 jours avant la date actuelle. Bien que la rotation soit très faible (1 unité par commande), le délai écoulé dépasse largement le cycle observé l'année précédente à la même période (commande le 4 octobre 2024). En application du principe de précaution B2B et pour couvrir le risque de rupture sur l'horizon des 30 prochains jours, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte de l'historique récent et passé pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 143 tokens
- **Total**: 1,044 tokens



</details>


<details>
<summary><strong>8. [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml </strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/06/2025, soit environ 151 jours. L'historique de l'année précédente montre une commande le 04/10/2024, suggérant un besoin cyclique pour la période de fin d'année. Le délai depuis la dernière commande dépasse largement les cycles habituels, créant un risque de rupture imminent pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre des commandes de 1u, 2u et 3u. La médiane des commandes historiques est de 2u. Conformément à la règle de prudence consistant à choisir la valeur la plus basse en cas de doute sur une rotation faible, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 946 tokens
- **Output**: 190 tokens
- **Total**: 1,136 tokens



</details>


<details>
<summary><strong>9. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'historique montre une rotation très faible et irrégulière (1 à 3 unités par commande). La dernière commande remonte à juin 2025, soit environ 150 jours. Bien que le cycle soit difficile à déterminer, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée sur cette référence. Conformément aux règles de gestion des faibles rotations (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane basse de l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 126 tokens
- **Total**: 1,046 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [LV145] LV Sauce Tartare 200 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:22:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 06:21:17: 1u
- 2024-06-11 06:55:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV159] LV Tartinade aux Truffes  135g </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:22:43: 2u
- 2025-06-06 06:55:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 06:21:17: 3u
- 2024-03-27 09:31:57: 4u
- 2024-01-12 13:24:10: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:22:43: 2u
- 2025-06-06 06:55:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-11 06:55:00: 3u
- 2024-03-27 09:31:57: 1u
- 2024-01-12 13:24:10: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:22:43: 3u
- 2025-06-06 06:55:56: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 06:21:17: 1u
- 2024-06-11 06:55:00: 3u
- 2024-01-12 13:24:10: 3u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:22:43: 1u
- 2025-06-06 06:55:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 06:21:17: 2u
- 2024-06-11 06:55:00: 1u
- 2024-03-27 09:31:57: 3u
- 2024-01-12 13:24:10: 3u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:22:43: 1u
- 2025-06-06 06:55:56: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 06:21:17: 3u
- 2024-06-11 06:55:00: 3u
- 2024-03-27 09:31:57: 4u
- 2024-01-12 13:24:10: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV135] LV Tartinade Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-15 06:22:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 06:21:17: 1u
- 2024-06-11 06:55:00: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV142] LV Mayonnaise en bocal weck (huile 70%) 470 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-06 06:55:56: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-04 06:21:17: 2u
- 2024-06-11 06:55:00: 1u
- 2024-03-27 09:31:57: 2u
- 2024-01-12 13:24:10: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-06 06:55:56: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-11 06:55:00: 1u
- 2024-03-27 09:31:57: 3u
- 2024-01-12 13:24:10: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 2 | Predicted 2u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Predicted 2u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | Predicted 1u but not ordered |
| [LV139] LV Tartinade Paprika Chili 380g | 1 | Predicted 1u but not ordered |
| [LV155] LV Vinaigrette Caesar 250 ml | 1 | Predicted 1u but not ordered |
| [LV147] LV Sauce Cocktail 200 ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:18:30.723Z*
