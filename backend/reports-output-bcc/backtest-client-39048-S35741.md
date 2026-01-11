# Rapport Backtest - Client REWE THERESA ARNDT 43655840

## Contexte

- **Client** : REWE THERESA ARNDT 43655840 (ID: 39048)
- **Commande réelle** : S35741
- **Date commande** : 2025-04-01 08:40:57
- **Date cutoff système** : 2025-03-31 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 18
- **Tokens**: 15,718 input + 2,451 output = 18,169 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 85.7% | 14 produits prédits, 12 corrects |
| **Rappel** | 100.0% | 12 produits réels, 12 détectés |
| **F1-Score** | 92.3% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.92 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 45.8% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 45.8% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -20.8% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 7 | Avec erreur |

---

## True Positives (12)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JF034] JF SAMOURAI SQUEEZE 300ML | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | 4 | 3.0 | 75.0% | partial | Non | Non | LLM |
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (12 produits)


<details>
<summary><strong>1. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 24 janvier 2025, soit plus de 60 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue correspond à la dernière commande connue (2 unités), respectant la règle de maintien des volumes pour les produits à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 119 tokens
- **Total**: 994 tokens



</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 2u vs Médiane: 3u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 3u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 24 janvier 2025, soit plus de 60 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement un cycle de réapprovisionnement standard pour ce type de produit. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 2 unités, correspondant au volume de la commande précédente, afin de maintenir le stock sans risque de surstockage sur une rotation faible.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 128 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>3. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 - DÉTECTION DU BESOIN : La dernière commande remonte au 24 janvier 2025, soit 66 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (cycle incertain = risque de rupture), une commande est nécessaire. ÉTAPE 2 - ESTIMATION QUANTITÉ : L'historique récent montre une commande unique de 2 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité est maintenue à 2 unités, correspondant à la dernière valeur observée pour assurer une rotation minimale sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 175 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>4. [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 24 janvier 2025, soit plus de 60 jours. Bien que l'historique soit limité à une seule unité, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et conformément à la règle de maintien des faibles rotations (1-2u), une commande d'une unité est préconisée pour reconstituer le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 879 tokens
- **Output**: 117 tokens
- **Total**: 996 tokens



</details>


<details>
<summary><strong>5. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée le 24 janvier (2 unités). Depuis cette date, 66 jours se sont écoulés sans réapprovisionnement. Bien que le cycle soit difficile à établir avec un seul point de donnée, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement le seuil de réapprovisionnement de 30 jours. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est maintenue à 2 unités, correspondant à la médiane de l'historique récent, pour éviter tout risque de rupture tout en limitant le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 148 tokens
- **Total**: 1,023 tokens



</details>


<details>
<summary><strong>6. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 24 janvier 2025, soit plus de 60 jours sans activité. Bien que le cycle de rotation soit difficile à établir avec une seule commande récente, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les seuils de réapprovisionnement habituels. Un risque de rupture est identifié pour couvrir les 30 prochains jours. Conformément à la règle de la médiane sur historique faible, la quantité de 2 unités est reconduite pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 130 tokens
- **Total**: 1,006 tokens



</details>


<details>
<summary><strong>7. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 24 janvier 2025, soit plus de 60 jours. Bien que l'historique soit limité à une seule commande de 2 unités, le délai écoulé suggère un besoin de réapprovisionnement imminent pour éviter une rupture de stock prolongée, surtout avec un seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et face à un cycle incertain, une commande est préconisée. La quantité retenue correspond à la seule valeur historique connue (2 unités), respectant la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 138 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>8. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 24 janvier 2025, soit 66 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En B2B, selon le principe de précaution et face à l'incertitude du cycle de rotation, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations faibles et le maintien des quantités historiques en l'absence de tendance inverse, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 168 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>9. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 24 janvier 2025, soit 66 jours. Bien que le cycle soit difficile à déterminer avec une seule commande récente, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (incertitude sur le cycle), un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. En l'absence d'autres données ou de saisonnalité N-1, la quantité est maintenue à 2 unités, correspondant à la dernière observation pour assurer une rotation minimale sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 168 tokens
- **Total**: 1,043 tokens



</details>


<details>
<summary><strong>10. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 24 janvier, soit 66 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle mensuel standard. En B2B, le principe de précaution s'applique pour éviter une rupture sur un produit à rotation lente mais active. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément aux règles pour les rotations très faibles (1-2u), la quantité est maintenue à 1 unité (médiane de l'historique) pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 152 tokens
- **Total**: 1,025 tokens



</details>


<details>
<summary><strong>11. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 4u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 24 janvier 2025, soit plus de 60 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement le cycle habituel pour un produit de ce type en B2B. En application du principe de précaution et du seuil de réapprovisionnement de 30 jours, un risque de rupture est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 165 tokens
- **Total**: 1,038 tokens



</details>


<details>
<summary><strong>12. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 1u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. Le produit ne présente aucun historique de commande récent ou passé (N-1). En l'absence totale de données sur la rotation, le principe de précaution B2B s'applique pour éviter une rupture potentielle dès le lancement ou la mise en stock. Le risque de rupture est considéré comme "DOUTE" par manque de visibilité. ÉTAPE 2 : ESTIMATION QUANTITÉ. En l'absence de médiane historique, une quantité minimale de 1 unité est préconisée pour initialiser le stock sans risque de surstockage massif, conformément à la règle de choisir la valeur la plus basse en cas d'incertitude totale.

**Tokens utilises pour cette prediction:**
- **Input**: 863 tokens
- **Output**: 156 tokens
- **Total**: 1,019 tokens



</details>




### Donnees d'Input LLM (12 produits)


<details>
<summary><strong>1. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-24 07:12:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-24 07:12:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-24 07:12:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [TVF007] TVF TARTINADE BIO MOUTARDE AGAVE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-24 07:12:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-24 07:12:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-24 07:12:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-24 07:12:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-24 07:12:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-24 07:12:53: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF034] JF SAMOURAI SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-24 07:12:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>11. [JF033] JF ANDALOUSE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-01-24 07:12:53: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>12. [TVF003] TVF TARTINADE BIO CAROTTE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- Aucune commande récente

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (2)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:28:57.344Z*
