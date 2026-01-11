# Rapport Backtest - Client Sandrine Sauvage - La main dans le vrac, Sandrine

## Contexte

- **Client** : Sandrine Sauvage - La main dans le vrac, Sandrine (ID: 59033)
- **Commande réelle** : S37735
- **Date commande** : 2025-06-30 12:52:40
- **Date cutoff système** : 2025-06-29 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 34
- **Tokens**: 30,174 input + 5,039 output = 35,213 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 29.4% | 34 produits prédits, 10 corrects |
| **Rappel** | 90.9% | 11 produits réels, 10 détectés |
| **F1-Score** | 44.4% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.50 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 33.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -33.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 5 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (10)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV132] LV Tartinade Houmous type 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [RIT05] RITCHIE Cola - verre 275ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande observé est d'environ 69 jours. La dernière commande date du 18 juin, soit il y a 11 jours. Bien que nous soyons loin du cycle moyen, le seuil de réapprovisionnement est de 30 jours et la rotation est extrêmement faible (1 unité par commande). En application du principe de précaution B2B et pour éviter toute rupture sur un produit à faible rotation mais régulier, une commande de 1 unité (médiane historique) est préconisée pour maintenir le stock durant la période de couverture.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 128 tokens
- **Total**: 1,017 tokens



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
L'analyse de l'historique récent montre un cycle de commande d'environ 69 jours. La dernière commande date du 18 juin 2025 (il y a 11 jours). Bien que le cycle moyen ne soit pas encore atteint, la rotation est très faible et irrégulière (1 unité par commande). En application du principe de précaution B2B et pour couvrir l'horizon de 30 jours (Replenishment Threshold Days), une commande est préconisée pour éviter toute rupture sur ce produit à faible stock. La quantité retenue est de 1 unité, correspondant à la médiane stricte des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 143 tokens
- **Total**: 1,033 tokens



</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le cycle de commande observé est d'environ 69 jours (entre avril et juin). Depuis la dernière commande du 18 juin, 11 jours se sont écoulés. Bien que nous soyons tôt dans le cycle, le seuil de réapprovisionnement de 30 jours porte l'horizon d'analyse au 29 juillet, date à laquelle nous serons à 41 jours du dernier achat. Compte tenu de la faible rotation et du principe de précaution B2B en cas de cycle irrégulier ou incertain, une commande est préconisée pour éviter toute rupture sur l'horizon défini. La quantité retenue est de 1 unité, correspondant à la médiane constante des commandes historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 889 tokens
- **Output**: 158 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>4. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen entre les commandes est d'environ 70 jours. La dernière commande date du 18 juin (il y a 11 jours). Bien que le cycle habituel ne soit pas encore atteint, la période estivale et le seuil de réapprovisionnement de 30 jours créent une incertitude sur la disponibilité. En application du principe de précaution B2B (mieux vaut prévenir une rupture incertaine), un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent est extrêmement stable avec des commandes systématiques de 1 unité. La médiane est de 1. On maintient cette quantité sans augmentation pour respecter la rotation faible du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 170 tokens
- **Total**: 1,075 tokens



</details>


<details>
<summary><strong>5. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 70 et 69 jours. La dernière commande date du 18 juin (il y a 11 jours). Bien que le cycle habituel ne soit pas encore atteint, le seuil de réapprovisionnement de 30 jours nous place à l'horizon du prochain besoin théorique (mi-août). En application du principe de précaution B2B et pour éviter toute rupture sur un produit à rotation faible mais régulière, une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane des commandes récentes et à la quantité la plus basse observée, conformément aux règles de gestion des stocks à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 157 tokens
- **Total**: 1,067 tokens



</details>


<details>
<summary><strong>6. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation faible mais régulière avec un intervalle de 69 jours entre les deux dernières commandes. La dernière commande datant du 18 juin (il y a 11 jours), nous entrons dans la fenêtre de vigilance des 30 jours de seuil de réapprovisionnement. En application du principe de précaution B2B et pour éviter toute rupture sur un cycle long, une commande est préconisée. La quantité est fixée à 1 unité, correspondant à la médiane stricte de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 122 tokens
- **Total**: 1,015 tokens



</details>


<details>
<summary><strong>7. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre des intervalles d'environ 70 à 80 jours. La dernière commande date du 18 juin 2025 (il y a 11 jours). Bien que le cycle habituel ne soit pas encore atteint, la période estivale et le seuil de réapprovisionnement de 30 jours imposent une vigilance. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est préconisée. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent (rotation très faible et régulière).

**Tokens utilises pour cette prediction:**
- **Input**: 908 tokens
- **Output**: 150 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>8. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Le cycle de commande moyen est d'environ 70 jours. La dernière commande date du 18 juin 2025 (il y a 11 jours). Bien que nous soyons tôt dans le cycle, l'historique montre une rotation très faible mais régulière de 1 unité par commande. En application du principe de précaution B2B et pour couvrir l'horizon de 30 jours (Replenishment Threshold Days), une commande est déclenchée. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 130 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>9. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen entre les commandes est d'environ 70 jours. La dernière commande date du 18 juin (il y a 11 jours). Bien que nous soyons tôt dans le cycle, la rotation est irrégulière et le seuil de réapprovisionnement est de 30 jours. Par principe de précaution B2B et pour éviter une rupture sur un produit bio à faible rotation, un besoin est identifié. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u, 1u et 2u. La médiane est de 1u. En suivant la règle de choisir la valeur la plus basse en cas de doute pour ne pas surstocker, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 182 tokens
- **Total**: 1,091 tokens



</details>


<details>
<summary><strong>10. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
Le cycle de commande moyen est d'environ 70 jours. La dernière commande date du 18 juin, soit il y a seulement 11 jours. Cependant, avec un seuil de réapprovisionnement de 30 jours, nous couvrons la période jusqu'à fin juillet. Bien que le cycle habituel ne soit pas encore atteint, la rotation est très faible et constante (1 unité). En application du principe de précaution B2B et pour éviter toute rupture sur un produit à faible rotation mais régulière, une commande de 1 unité (médiane historique) est préconisée pour maintenir le stock.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 139 tokens
- **Total**: 1,048 tokens



</details>




### Donnees d'Input LLM (10 produits)


<details>
<summary><strong>1. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 12:10:47: 1u
- 2025-04-10 06:48:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [LV132] LV Tartinade Houmous type 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 12:10:47: 1u
- 2025-04-10 06:48:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 12:10:47: 1u
- 2025-04-10 06:48:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 12:10:47: 1u
- 2025-04-10 06:48:06: 1u
- 2025-01-30 13:09:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>5. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 12:10:47: 1u
- 2025-04-10 06:48:06: 1u
- 2025-01-30 13:09:10: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 12:10:47: 1u
- 2025-04-10 06:48:06: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 12:10:47: 1u
- 2025-04-10 06:48:06: 1u
- 2025-01-30 13:09:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 12:10:47: 1u
- 2025-04-10 06:48:06: 1u
- 2025-01-30 13:09:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>9. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 12:10:47: 2u
- 2025-04-10 06:48:06: 1u
- 2025-01-30 13:09:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-18 12:10:47: 1u
- 2025-04-10 06:48:06: 1u
- 2025-01-30 13:09:10: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>




---

## False Positives (24)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | Predicted 1u but not ordered |
| [MF0047] MF Mayonnaise 250ml | 1 | Predicted 1u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Predicted 1u but not ordered |
| [MF0061] MF Compote | 1 | Predicted 1u but not ordered |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Predicted 1u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 1 | Predicted 1u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Predicted 1u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |
| [LV345] LV Spread KIDS 200ml Organic | 1 | Predicted 1u but not ordered |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | Predicted 1u but not ordered |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | Predicted 1u but not ordered |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | Predicted 1u but not ordered |
| [fsv06] Noix du Brésil nature bio vrac 3kg | 1 | Predicted 1u but not ordered |
| [fsv09] Noix de cajou grillées salées bio vrac 2,8kg  | 1 | Predicted 1u but not ordered |
| [JOY01] JOY! Organic Sweet Orange Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY05] Organic Cherry Jam 370g | 1 | Predicted 1u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Predicted 1u but not ordered |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Predicted 1u but not ordered |
| [fsv10] Noix de cajou oignon/crème bio vrac 2,8kg  | 1 | Predicted 1u but not ordered |
| [LB003] LB Festive (4,5%) 33CL | 1 | Predicted 1u but not ordered |
| [LB006] LB Brown (7,0%)  33CL | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:19:14.614Z*
