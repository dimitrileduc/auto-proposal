# Rapport Backtest - Client Ma p'tite epicerie

## Contexte

- **Client** : Ma p'tite epicerie (ID: 52807)
- **Commande réelle** : S38187
- **Date commande** : 2025-07-22 12:46:43
- **Date cutoff système** : 2025-07-21 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 29
- **Tokens**: 25,336 input + 4,396 output = 29,732 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 35.7% | 28 produits prédits, 10 corrects |
| **Rappel** | 100.0% | 10 produits réels, 10 détectés |
| **F1-Score** | 52.6% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.00 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 0.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 0.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 0 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT07] RITCHIE Orange - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [DAF001] DAF Elderflower with Pomegrenade juice 25cl | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [DAF002] DAF Lime and Ginger with Jasmine flower 25cl | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [DAF003] DAF Passionfruit with Hibiscus flower 25cl | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 03/06/2025, soit 48 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours, créant une incertitude sur le cycle de rotation. En application du principe de précaution B2B (Étape 1), un besoin est détecté pour éviter une rupture prolongée. La quantité est fixée à 1 unité, correspondant à la médiane de l'historique récent, conformément à la règle de maintien des volumes pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 143 tokens
- **Total**: 1,018 tokens



</details>


<details>
<summary><strong>2. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande date du 3 juin 2025, soit 48 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà avéré si le cycle de rotation est mensuel. En application du principe de précaution B2B et face à un historique récent très faible (une seule commande de 1 unité), la quantité recommandée est basée sur la médiane historique disponible, soit 1 unité, pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 880 tokens
- **Output**: 120 tokens
- **Total**: 1,000 tokens



</details>


<details>
<summary><strong>3. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 03/06/2025, soit 48 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane (et unique valeur) de l'historique récent, respectant la règle de maintien des volumes pour les rotations faibles.

**Tokens utilises pour cette prediction:**
- **Input**: 877 tokens
- **Output**: 137 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>4. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 03/06/2025, soit 48 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, l'horizon de risque s'étend jusqu'à 78 jours après la dernière commande. En l'absence d'un historique long permettant de définir un cycle précis, le principe de précaution B2B s'applique pour éviter une rupture prolongée sur ce produit bio premium. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément aux règles de rotation faible et de maintien des quantités constantes en cas de doute, la quantité retenue est la médiane de l'historique récent, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 182 tokens
- **Total**: 1,057 tokens



</details>


<details>
<summary><strong>5. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 03/06/2025, soit 48 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le délai écoulé dépasse largement le cycle de sécurité habituel pour un produit en stock. Par principe de précaution B2B et pour éviter une rupture prolongée, un besoin est détecté. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. En l'absence d'autres données ou de saisonnalité N-1, la médiane de 1 unité est retenue pour maintenir le stock sans risque de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 872 tokens
- **Output**: 154 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>6. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 03/06/2025, soit 48 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande (rotation faible), le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et pour éviter une rupture sur un produit à cycle incertain, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane de l'historique récent pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 129 tokens
- **Total**: 1,002 tokens



</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 03/06/2025, soit 48 jours. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (cycle incertain = prévoir), un risque de rupture est identifié. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre une rotation très faible de 1 unité. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstockage tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 170 tokens
- **Total**: 1,045 tokens



</details>


<details>
<summary><strong>8. [DAF001] DAF Elderflower with Pomegrenade juice 25cl</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 03/06/2025, soit 48 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande (rotation très faible), le délai écoulé suggère un besoin de réapprovisionnement imminent pour maintenir le stock, surtout avec un seuil de 30 jours. En application du principe de précaution B2B et de la règle sur les rotations faibles (1-2u), une quantité de 1 unité est préconisée pour éviter la rupture sans risquer le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 875 tokens
- **Output**: 129 tokens
- **Total**: 1,004 tokens



</details>


<details>
<summary><strong>9. [DAF002] DAF Lime and Ginger with Jasmine flower 25cl</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 3 juin 2025, soit 48 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande (rotation très faible), le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et de la règle sur les cycles irréguliers ou difficiles à déterminer, un risque de rupture est identifié. La quantité retenue correspond à la médiane de l'historique récent (1 unité), conformément à la règle de maintien des faibles rotations.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 130 tokens
- **Total**: 1,003 tokens



</details>


<details>
<summary><strong>10. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 03/06/2025, soit 48 jours. Avec un seuil de réapprovisionnement de 30 jours, le cycle de rotation est incertain mais le délai écoulé suggère un besoin imminent ou un risque de rupture. En application du principe de précaution B2B (détection d'un besoin incertain), une commande est prévue. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles, la quantité est maintenue à 1 unité (médiane de l'historique disponible) pour éviter le surstockage tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 873 tokens
- **Output**: 165 tokens
- **Total**: 1,038 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [BUD02] BUDDY Organic Energy Drink – Lemon & Ginger – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 12:04:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [BUD03] BUDDY biologische energiedrank – mango & passievrucht – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 12:04:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [BUD04] BUDDY Organic Energy Drink – Pomegranate & Hibiscus – 250ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 12:04:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 12:04:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [RIT07] RITCHIE Orange - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 12:04:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [RIT08] RITCHIE Citron - canette 330ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 12:04:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 12:04:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [DAF001] DAF Elderflower with Pomegrenade juice 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 12:04:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [DAF002] DAF Lime and Ginger with Jasmine flower 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 12:04:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [DAF003] DAF Passionfruit with Hibiscus flower 25cl</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-03 12:04:20: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (18)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Predicted 1u but not ordered |
| [NUT06] NUTS & BERRIES Bar choco noir cerises bio 40g | 1 | Predicted 1u but not ordered |
| [NUT04] NUTS & BERRIES energy bar Amandes-cranberry bio 30g | 1 | Predicted 1u but not ordered |
| [RIT09] RITCHIE Cola - canette 330ml | 1 | Predicted 1u but not ordered |
| [RIT10] RITCHIE Cola ZERO - canette 330ml | 1 | Predicted 1u but not ordered |
| [WIG04] WIGNAC cidre rosé bio 750ml | 1 | Predicted 1u but not ordered |
| [WIG03] WIGNAC cidre naturel bio 750ml | 1 | Predicted 1u but not ordered |
| [LV159] LV Tartinade aux Truffes  135g  | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Predicted 1u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 1 | Predicted 1u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 2 | Predicted 2u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Predicted 1u but not ordered |
| [WIG02] WIGNAC cidre rosé bio 330ml | 1 | Predicted 1u but not ordered |
| [WIG01] WIGNAC cidre naturel bio 330ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:24:31.911Z*
