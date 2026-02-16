# Rapport Backtest - Client li ptit en k

## Contexte

- **Client** : li ptit en k (ID: 17608)
- **Commande réelle** : S37910
- **Date commande** : 2025-07-08 10:06:23
- **Date cutoff système** : 2025-07-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 33
- **Tokens**: 30,112 input + 5,219 output = 35,331 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 30.3% | 33 produits prédits, 10 corrects |
| **Rappel** | 66.7% | 15 produits réels, 10 détectés |
| **F1-Score** | 41.7% | Score equilibre global |

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
| [LV145] LV Sauce Tartare 200 ml  | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV160] LV Tartinade Aubergine 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV149] LV Sauce Aioli Pesto 200ml | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV161] LV Tartinade Mangue curry 190g | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [LV040] LV Caprons apéritifs 240g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF021] JF PICKLES 350 ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (10 produits)


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
La dernière commande remonte au 06/06/2025, soit il y a 31 jours. Bien que la rotation soit très faible (1 unité), le délai écoulé dépasse le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B et pour éviter une rupture sur un produit à cycle lent mais régulier (confirmé par l'historique N-1 à la même période), une commande est nécessaire. La quantité retenue correspond à la médiane historique de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 900 tokens
- **Output**: 124 tokens
- **Total**: 1,024 tokens



</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 06/06/2025, soit 31 jours. L'historique montre un cycle de commande irrégulier mais une présence de commandes en juin/juillet l'année dernière (2u le 11/06/2024). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est présent par principe de précaution B2B. La quantité retenue est de 2 unités, correspondant à la médiane des commandes récentes et au volume historique stable pour cette période.

**Tokens utilises pour cette prediction:**
- **Input**: 987 tokens
- **Output**: 129 tokens
- **Total**: 1,116 tokens



</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/06/2025, soit 31 jours. L'intervalle précédent était de 85 jours. Bien que le cycle soit long, le principe de précaution B2B s'applique car nous entrons dans une zone de risque de rupture potentielle d'ici les 30 prochains jours (seuil de réapprovisionnement). ÉTAPE 2 : Estimation quantité. L'historique récent montre une rotation très faible et constante de 1 unité par commande. Conformément aux règles de gestion des rotations faibles, la quantité maintenue est de 1 unité (médiane de l'historique).

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 161 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>4. [LV149] LV Sauce Aioli Pesto 200ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 mars 2025, soit environ 116 jours. L'historique N-1 montre une activité spécifique sur la période mai-juillet (commandes en mai et juin 2024). Bien que le cycle soit irrégulier, nous entrons dans la fenêtre de saisonnalité observée l'an dernier. Par principe de précaution B2B et pour couvrir le risque de rupture sur les 30 prochains jours, une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 est constant à 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 918 tokens
- **Output**: 184 tokens
- **Total**: 1,102 tokens



</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 mars 2025, soit environ 116 jours. Bien que la rotation soit très faible, l'historique montre une commande en juillet l'année précédente (2024-07-11, notée 0u mais présente dans le cycle N-1). En B2B, le principe de précaution s'applique pour éviter une rupture sur un produit à rotation lente mais régulière. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une constante de 1 unité par commande. La médiane est de 1. Conformément aux règles sur les rotations faibles (1-2u), on maintient la quantité minimale de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 178 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 13 mars 2025, soit environ 116 jours. L'historique N-1 montre une activité en juin et juillet (2u le 11/06/2024 et une activité en juillet 2023). Bien que le cycle soit irrégulier, le principe de précaution B2B s'applique car nous entrons dans une période historiquement active et le délai depuis la dernière commande dépasse largement les cycles habituels. ÉTAPE 2 : ESTIMATION QUANTITÉ. La médiane des commandes historiques (1u, 1u, 2u, 2u, 3u) est de 2u. En respectant la règle de ne pas surestimer et de privilégier la médiane pour une rotation faible, une quantité de 2u est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 953 tokens
- **Output**: 206 tokens
- **Total**: 1,159 tokens



</details>


<details>
<summary><strong>7. [LV132] LV Tartinade Houmous type 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 mars 2025, soit environ 116 jours. L'historique montre une rotation très faible et irrégulière (juin 2024, septembre 2023). En l'absence de cycle de commande stable et compte tenu du délai important depuis la dernière unité vendue, un risque de rupture ou un besoin de renouvellement de stock est identifié par principe de précaution B2B. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une constante de 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 184 tokens
- **Total**: 1,104 tokens



</details>


<details>
<summary><strong>8. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière. La dernière commande remonte à 116 jours (13 mars 2025), ce qui dépasse largement les cycles historiques observés. Bien que la rotation soit lente, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée, d'autant plus qu'une commande avait eu lieu en juillet l'année précédente (11 juillet 2024). Conformément aux règles de gestion des faibles rotations (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane historique et à la valeur la plus basse pour éviter un surstockage inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 152 tokens
- **Total**: 1,089 tokens



</details>


<details>
<summary><strong>9. [LV040] LV Caprons apéritifs 240g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 13 mars 2025, soit environ 116 jours. Bien que l'historique soit à très faible rotation, l'absence de commande depuis près de 4 mois et l'approche de la période estivale (juillet), correspondant à une commande passée l'année précédente le 11 juillet, créent un doute sur le cycle. En application du principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : L'historique récent et passé montre une constante stricte de 1 unité par commande. La médiane est de 1. Conformément à la règle sur les rotations très faibles, la quantité de 1 unité est maintenue.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 168 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>10. [JF021] JF PICKLES 350 ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 116 jours. Bien que le cycle soit difficile à établir, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée sur une référence active. Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane historique, afin de couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 868 tokens
- **Output**: 109 tokens
- **Total**: 977 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV145] LV Sauce Tartare 200 ml </strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-06 10:03:04: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-11 06:48:48: 1u
- 2023-07-11 07:37:52: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-06 10:03:04: 2u
- 2025-03-13 08:21:44: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-11 06:48:48: 2u
- 2024-05-21 07:40:33: 2u
- 2024-02-06 10:16:31: 2u
- 2023-12-14 08:01:09: 1u
- 2023-09-29 06:19:51: 3u
- 2023-07-11 07:37:52: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-06 10:03:04: 1u
- 2025-03-13 08:21:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV149] LV Sauce Aioli Pesto 200ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:21:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-11 06:48:48: 1u
- 2024-05-21 07:40:33: 1u
- 2023-07-11 07:37:52: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV129] LV Tartinade Carotte Gingembre 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:21:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-05-21 07:40:33: 1u
- 2023-12-14 08:01:09: 1u
- 2023-07-11 07:37:52: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [LV161] LV Tartinade Mangue curry 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:21:44: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-11 06:48:48: 2u
- 2024-02-06 10:16:31: 1u
- 2023-12-14 08:01:09: 1u
- 2023-09-29 06:19:51: 2u
- 2023-07-11 07:37:52: 0u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>7. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:21:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-11 06:48:48: 1u
- 2023-09-29 06:19:51: 1u
- 2023-07-11 07:37:52: 0u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:21:44: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-11 06:48:48: 1u
- 2024-02-06 10:16:31: 1u
- 2023-12-14 08:01:09: 1u
- 2023-07-11 07:37:52: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV040] LV Caprons apéritifs 240g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:21:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2023-09-29 06:19:51: 1u
- 2023-07-11 07:37:52: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-03-13 08:21:44: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (23)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [LV158] LV Moutarde 200 ml | 1 | Predicted 1u but not ordered |
| [LV146] LV Sauce Aïoli 200 ml | 1 | Predicted 1u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV154] LV Vinaigrette Miel et moutarde 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 2 | Predicted 2u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | Predicted 2u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [LV135] LV Tartinade Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 2 | Predicted 2u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 2 | Predicted 2u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF056] JF SAUCE CHIPOTLE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [LV342] LV Organic Broccoli Spread 190 g | 1 | Predicted 1u but not ordered |
| [LV357] LV Tartinade BIO Asperge 190g | 1 | Predicted 1u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 1 | Predicted 1u but not ordered |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 2 | Predicted 2u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Predicted 1u but not ordered |
| [MF0035] MF Tarti Tomate Ail des ours 250g  | 2 | Predicted 2u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (5)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [LV036] LV Olives Vertes dénoyautées BE 350g | 1 | Never ordered in previous analysis window (no history) |
| [JF039] JF MAYO BARAKI SQUEEZE 300ML | 1 | Never ordered in previous analysis window (no history) |
| [LV159] LV Tartinade aux Truffes  135g  | 2 | Never ordered in previous analysis window (no history) |
| [LV136] LV Tartinade Betterave 190g | 1 | Never ordered in previous analysis window (no history) |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:19:16.889Z*
