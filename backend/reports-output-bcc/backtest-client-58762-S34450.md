# Rapport Backtest - Client OH GOURMAND SAS

## Contexte

- **Client** : OH GOURMAND SAS (ID: 58762)
- **Commande réelle** : S34450
- **Date commande** : 2025-01-22 08:35:51
- **Date cutoff système** : 2025-01-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 14
- **Tokens**: 12,500 input + 2,271 output = 14,771 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 76.9% | 13 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 87.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 10.10 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 85.6% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 79.4% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -68.6% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 0 | Égalité parfaite |
| Partial Match (>0u) | 10 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [PF1695] LD FR TARTINADE BIO TOMATE 200 | 16 | 15 | 1.0 | 6.7% | partial | Non | Non | LLM |
| [PF1693] LD FR TARTINAD BIO CAROTTE 200 | 1 | 31 | 30.0 | 96.8% | partial | Non | Non | LLM |
| [PF1694] LD FR TARTINAD BIO POIVRON 200 | 1 | 16 | 15.0 | 93.8% | partial | Non | Non | LLM |
| [PF2937] LD FR TARTINADE BIO POIS 200 | 1 | 15 | 14.0 | 93.3% | partial | Non | Non | LLM |
| [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G | 1 | 16 | 15.0 | 93.8% | partial | Non | Non | LLM |
| [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G | 13 | 5 | 8.0 | 160.0% | partial | Non | Non | LLM |
| [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML | 1 | 5 | 4.0 | 80.0% | partial | Non | Non | LLM |
| [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML | 1 | 5 | 4.0 | 80.0% | partial | Non | Non | LLM |
| [PF1792] LD MAYONNAI TRUFFES 250ML WECK | 1 | 10 | 9.0 | 90.0% | partial | Non | Non | LLM |
| [PF1805] LD SAUCE COCKTAIL 250ML WECK | 1 | 0 | 1.0 | 0.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM: 16u vs Médiane: 9u (Réel: 15u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 16u
- **Baseline calculee**: 16u
- **Mediane historique**: 9u
- **Reel commande**: 15u
- **Erreur LLM**: 1u (6.7%)
- **Erreur Mediane**: 6u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 16u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 13/12/2024, soit 39 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré, d'autant plus que le cycle de commande n'est pas encore stabilisé (historique récent uniquement). Le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : L'historique récent montre deux volumes (16u et 1u) le même jour. La valeur de 16u représente le besoin réel de mise en stock ou de rotation standard, tandis que 1u semble être un ajustement. En suivant la règle de la médiane et de la stabilité des volumes significatifs, la quantité de 16u est retenue pour couvrir la période à venir.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 196 tokens
- **Total**: 1,088 tokens



</details>


<details>
<summary><strong>2. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 31u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 31u
- **Erreur LLM**: 30u (96.8%)
- **Erreur Mediane**: 30u (96.8%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 13 décembre 2024, soit 39 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le délai écoulé dépasse largement le cycle de sécurité. Bien que l'historique soit très limité (une seule unité commandée), le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée. La quantité retenue correspond à la médiane de l'historique récent (1 unité).

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 117 tokens
- **Total**: 1,009 tokens



</details>


<details>
<summary><strong>3. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM: 1u vs Médiane: 8u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 8u
- **Reel commande**: 16u
- **Erreur LLM**: 15u (93.8%)
- **Erreur Mediane**: 8u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande date du 13 décembre 2024, soit il y a 39 jours. Bien que le cycle soit difficile à établir avec seulement deux commandes le même jour, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours, créant un risque de rupture (principe de précaution B2B). Pour la quantité, la commande de 15 unités semble être un pic exceptionnel ou une mise en stock initiale ; la médiane et la règle de prudence pour les rotations incertaines imposent de retenir la quantité la plus basse (1 unité) pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 142 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>4. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM: 1u vs Médiane: 9u (Réel: 15u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 9u
- **Reel commande**: 15u
- **Erreur LLM**: 14u (93.3%)
- **Erreur Mediane**: 6u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 13/12/2024, soit 39 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le délai écoulé dépasse largement la fréquence habituelle pour ce type de produit en rotation. Par principe de précaution B2B et pour éviter une rupture prolongée, un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre deux commandes le même jour (16u et 1u). La commande de 16u présente un caractère exceptionnel ou de mise en place, tandis que la commande de 1u reflète une rotation de base. En application de la règle de la médiane et du choix de la valeur la plus basse en cas de doute sur un produit à faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 208 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>5. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM: 1u vs Médiane: 8u (Réel: 16u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 8u
- **Reel commande**: 16u
- **Erreur LLM**: 15u (93.8%)
- **Erreur Mediane**: 8u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 13/12/2024, soit 39 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré pour ce type de produit bio à rotation spécifique. En l'absence d'un cycle historique clair (commandes groupées sur une seule date), le principe de précaution B2B impose de prévoir une commande. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre deux volumes très disparates le même jour (15u et 1u). La commande de 15u présente un caractère exceptionnel ou de mise en stock initiale. Conformément aux règles de gestion des valeurs extrêmes et de rotation incertaine, on privilégie la quantité la plus basse (médiane basse) pour éviter le surstockage, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 899 tokens
- **Output**: 213 tokens
- **Total**: 1,112 tokens



</details>


<details>
<summary><strong>6. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM: 13u vs Médiane: 7u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 13u
- **Baseline calculee**: 13u
- **Mediane historique**: 7u
- **Reel commande**: 5u
- **Erreur LLM**: 8u (160.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 13u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 13 décembre 2024, soit 39 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le cycle de commande est largement dépassé, créant un risque de rupture imminent. Bien qu'il n'y ait que deux commandes récentes le même jour, la quantité de 13 unités représente le volume principal de commande (la commande de 1u étant marginale). En l'absence d'historique N-1, on applique le principe de précaution B2B en prévoyant une commande basée sur la quantité médiane significative observée.

**Tokens utilises pour cette prediction:**
- **Input**: 901 tokens
- **Output**: 144 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>7. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM: 1u vs Médiane: 7u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 7u
- **Reel commande**: 5u
- **Erreur LLM**: 4u (80.0%)
- **Erreur Mediane**: 2u (40.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : La dernière commande remonte au 13/12/2024, soit 39 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré, d'autant plus que le cycle de rotation est irrégulier (principe de précaution B2B). ÉTAPE 2 : L'historique récent montre deux commandes le même jour (12u et 1u). La commande de 12u présente un caractère exceptionnel ou de stockage initial, tandis que la commande de 1u reflète une rotation unitaire plus probable pour ce type de produit bio spécialisé. En cas de doute et pour éviter le surstock, la quantité la plus basse (médiane basse) de 1 unité est privilégiée.

**Tokens utilises pour cette prediction:**
- **Input**: 897 tokens
- **Output**: 188 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>8. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 5u
- **Erreur LLM**: 4u (80.0%)
- **Erreur Mediane**: 4u (80.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 13/12/2024, soit 39 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le délai écoulé dépasse largement le cycle de rotation habituel pour ce type de produit. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une commande unitaire (1u). Conformément à la règle sur les rotations faibles, on maintient la quantité historique la plus basse pour éviter le surstock. La médiane des commandes non nulles est de 1.

**Tokens utilises pour cette prediction:**
- **Input**: 897 tokens
- **Output**: 175 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>9. [PF1792] LD MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 10u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 10u
- **Erreur LLM**: 9u (90.0%)
- **Erreur Mediane**: 9u (90.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 13 décembre 2024, soit 39 jours avant la date actuelle. Bien que l'historique soit limité à une seule unité, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et pour éviter une rupture de stock sur un produit à rotation lente, une commande est nécessaire. La quantité retenue correspond à la médiane historique (1 unité).

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 109 tokens
- **Total**: 1,002 tokens



</details>


<details>
<summary><strong>10. [PF1805] LD SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 0u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 1u
- **Reel commande**: 0u
- **Erreur LLM**: 1u (Infinity%)
- **Erreur Mediane**: 1u (Infinity%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 13 décembre 2024, soit 39 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le délai écoulé dépasse largement le cycle de précaution. Bien que l'historique soit très limité (une seule unité commandée), le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue correspond à la médiane des commandes historiques (1 unité), conformément à la règle de maintien des rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 122 tokens
- **Total**: 1,014 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [PF1695] LD FR TARTINADE BIO TOMATE 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-13 13:00:56: 16u
- 2024-12-13 11:36:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 16u
**Quantite Reelle**: 15u

</details>


<details>
<summary><strong>2. [PF1693] LD FR TARTINAD BIO CAROTTE 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-13 13:00:56: 0u
- 2024-12-13 11:36:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 31u

</details>


<details>
<summary><strong>3. [PF1694] LD FR TARTINAD BIO POIVRON 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-13 13:00:56: 15u
- 2024-12-13 11:36:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>4. [PF2937] LD FR TARTINADE BIO POIS 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-13 13:00:56: 16u
- 2024-12-13 11:36:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 15u

</details>


<details>
<summary><strong>5. [PF1696] CB9012 LD FR TARTINADE BIO MANGUE 180G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-13 13:00:56: 15u
- 2024-12-13 11:36:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 16u

</details>


<details>
<summary><strong>6. [PF3317] CB9028 - LD FR PESTO BIO AIL DES OURS 135G</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-13 13:00:56: 13u
- 2024-12-13 11:36:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 13u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>7. [PF1692] CB9005 LD FR AIOLI PESTO BIO 200ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-13 13:00:56: 12u
- 2024-12-13 11:36:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>8. [PF1699] CB9006 LD FR VINAI CAESAR BIO PET 250ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-13 13:00:56: 0u
- 2024-12-13 11:36:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>9. [PF1792] LD MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-13 13:00:56: 0u
- 2024-12-13 11:36:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 10u

</details>


<details>
<summary><strong>10. [PF1805] LD SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2024-12-13 13:00:56: 0u
- 2024-12-13 11:36:57: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 0u

</details>




---

## False Positives (3)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [PF2972] LD FR TARTINADE BIO OLIVE 200 | 1 | Predicted 1u but not ordered |
| [PF1815] LD VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [PF1809] LD SAUCE BEARNAISE 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:28:23.524Z*
