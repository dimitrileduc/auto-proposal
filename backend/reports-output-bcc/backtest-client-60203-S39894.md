# Rapport Backtest - Client BIO SHANTI

## Contexte

- **Client** : BIO SHANTI (ID: 60203)
- **Commande réelle** : S39894
- **Date commande** : 2025-10-29 13:48:50
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 21
- **Tokens**: 18,645 input + 3,115 output = 21,760 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 66.7% | 18 produits prédits, 12 corrects |
| **Rappel** | 100.0% | 12 produits réels, 12 détectés |
| **F1-Score** | 80.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.25 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 25.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 25.0% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 25.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 9 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (12)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [ORG04] ORGANICA crunchy fruit fraise 12g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [ORG08] ORGANICA crunchy fruit framboise 12g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD04] NODA limonade bio faible en calories - mangue passion 330ml | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [ORG03] ORGANICA crunchy fruit myrtille 16g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY07] JOY! Organic Fig Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |


### Details des Predictions LLM (12 produits)


<details>
<summary><strong>1. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre, soit 41 jours. Le cycle précédent était de 28 jours. Nous avons largement dépassé le cycle moyen et le seuil de réapprovisionnement de 30 jours est atteint. Le risque de rupture est avéré. ÉTAPE 2 : Estimation quantité. L'historique récent montre une consommation constante et faible de 1 unité par commande. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité habituelle sans l'augmenter. La médiane est de 1.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 142 tokens
- **Total**: 1,030 tokens



</details>


<details>
<summary><strong>2. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande date du 17 septembre, soit 41 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande, le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours, créant une incertitude sur le cycle de rotation. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane de l'historique récent pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 870 tokens
- **Output**: 129 tokens
- **Total**: 999 tokens



</details>


<details>
<summary><strong>3. [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre, soit 41 jours. Le cycle moyen observé est d'environ 33 jours. Nous avons dépassé 70% du cycle moyen et entrons dans la fenêtre de risque de rupture pour les 30 prochains jours (Replenishment Threshold Days). ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes faibles (1, 3, 2, 1). La médiane est de 1,5u. Conformément à la règle de précaution sur les rotations faibles et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 927 tokens
- **Output**: 160 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>4. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 1u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (100.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre un intervalle de 99 jours entre les deux dernières commandes. La dernière commande datant du 17 septembre (il y a 41 jours), nous entrons dans une zone d'incertitude par rapport au seuil de réapprovisionnement de 30 jours (total 71 jours projetés). En application du principe de précaution B2B face à un cycle irrégulier, un besoin est détecté pour éviter une rupture. La quantité retenue est de 1 unité, correspondant à la commande la plus récente et à la valeur la plus basse de l'historique pour ce produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 147 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>5. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 71 jours puis 28 jours, soit une moyenne de 49 jours. La dernière commande datant du 17 septembre (il y a 41 jours), nous avons atteint 83% du cycle moyen, ce qui dépasse le seuil de précaution de 70%. Un risque de rupture est identifié dans l'horizon des 30 jours à venir. Concernant la quantité, l'historique récent présente des volumes très faibles (1u et 2u). Conformément à la règle de la médiane et au principe de ne pas surestimer les produits à faible rotation, la quantité de 1 unité est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 157 tokens
- **Total**: 1,068 tokens



</details>


<details>
<summary><strong>6. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles variant entre 30 et 70 jours. La dernière commande remontant au 17 septembre (soit 41 jours), nous entrons dans la fenêtre de réapprovisionnement critique compte tenu du seuil de 30 jours. En application du principe de précaution B2B et face à un cycle irrégulier, un besoin est détecté. La quantité retenue est de 2 unités, correspondant à la médiane et au volume le plus fréquent des commandes récentes, afin de couvrir la rotation sans créer de surstock.

**Tokens utilises pour cette prediction:**
- **Input**: 912 tokens
- **Output**: 129 tokens
- **Total**: 1,041 tokens



</details>


<details>
<summary><strong>7. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 août, soit 69 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle précédent (71 jours entre juin et août). Dans une optique de précaution B2B et pour éviter une rupture sur un horizon de 30 jours, un réapprovisionnement est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite avec des commandes unitaires (médiane de 1u). Conformément à la règle sur les rotations faibles, on maintient la quantité de 1 unité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 888 tokens
- **Output**: 152 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>8. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM: 2u vs Médiane: 3u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 20 août, soit 69 jours. Le cycle moyen observé est d'environ 35 jours (28 jours entre juin et juillet, 43 jours entre juillet et août). Le délai depuis la dernière commande dépasse largement le cycle moyen et l'horizon de 30 jours (Replenishment Threshold Days). Le risque de rupture est avéré. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 2u, 2u et 3u. La médiane des quantités est de 2u. Conformément à la règle de privilégier la médiane et la valeur la plus basse en cas de doute pour éviter le surstockage, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 917 tokens
- **Output**: 179 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>9. [ORG03] ORGANICA crunchy fruit myrtille 16g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle d'environ 43 jours entre les deux dernières commandes. La dernière commande datant du 20 août 2025, soit il y a 69 jours, le délai dépasse largement le cycle habituel et l'horizon de réapprovisionnement de 30 jours. Bien que la rotation soit très faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane et à la constante observée dans l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 887 tokens
- **Output**: 135 tokens
- **Total**: 1,022 tokens



</details>


<details>
<summary><strong>10. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 08/07/2025, soit plus de 110 jours. Bien que la rotation soit très faible (1 unité), l'absence de cycle régulier et le délai important depuis le dernier mouvement imposent une commande de précaution pour éviter une rupture de stock prolongée sur cette référence. Conformément aux règles de gestion des rotations faibles, la quantité est maintenue à la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 105 tokens
- **Total**: 974 tokens



</details>


<details>
<summary><strong>11. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 112 jours. Bien que le cycle soit difficile à déterminer en raison du manque d'historique, le principe de précaution B2B s'applique pour éviter une rupture prolongée sur une référence active. Conformément aux règles de gestion des rotations faibles (1-2u) et à l'absence d'historique N-1, une commande de 1 unité est préconisée pour maintenir le stock sans risque de surstockage, en se basant sur la quantité unique observée précédemment.

**Tokens utilises pour cette prediction:**
- **Input**: 869 tokens
- **Output**: 130 tokens
- **Total**: 999 tokens



</details>


<details>
<summary><strong>12. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 1u
- **Reel commande**: 1u
- **Erreur LLM**: 1u (100.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 10 juin 2025, soit plus de 140 jours. Bien que la rotation soit très faible, l'absence de commande sur une période aussi longue par rapport au seuil de réapprovisionnement de 30 jours crée une incertitude sur l'état du stock. En application du principe de précaution B2B (si doute sur le cycle → prévoir), un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 2 unités. Conformément à la règle sur les rotations faibles (1-2u) et à l'utilisation de la médiane, la quantité est maintenue à 2 unités pour éviter toute rupture sans risquer de surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 878 tokens
- **Output**: 184 tokens
- **Total**: 1,062 tokens



</details>




### Donnees d'Input LLM (12 produits)


<details>
<summary><strong>1. [ORG04] ORGANICA crunchy fruit fraise 12g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 12:04:48: 1u
- 2025-08-20 11:28:39: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [ORG08] ORGANICA crunchy fruit framboise 12g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 12:04:48: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [DAM05] Dr. Antonio Martins organic & fairtrade coconut water 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 12:04:48: 1u
- 2025-08-20 11:28:39: 3u
- 2025-07-08 11:47:09: 2u
- 2025-06-10 07:04:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [NOD03] NODA limonade bio faible en calories - gingembre citronelle 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 12:04:48: 1u
- 2025-06-10 07:04:45: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [NOD02] NODA limonade bio faible en calories - citron de sicile 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 12:04:48: 1u
- 2025-08-20 11:28:39: 1u
- 2025-06-10 07:04:45: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [NOD04] NODA limonade bio faible en calories - mangue passion 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 12:04:48: 2u
- 2025-08-20 11:28:39: 1u
- 2025-06-10 07:04:45: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JOY02] JOY! Organic Strawberry Jam 370g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:28:39: 1u
- 2025-06-10 07:04:45: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [MATE01] MATE MATE thé glacé bio pétillant au yerba maté verre 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:28:39: 3u
- 2025-07-08 11:47:09: 2u
- 2025-06-10 07:04:45: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [ORG03] ORGANICA crunchy fruit myrtille 16g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-20 11:28:39: 1u
- 2025-07-08 11:47:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JOY07] JOY! Organic Fig Jam 370g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-08 11:47:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JOY08] JOY! Organic Raspberry Jam 370g</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-08 11:47:09: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [NOD01] NODA limonade bio faible en calories - pamplemousse rose 330ml</strong> - LLM Echoue (fallback mediane)</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-10 07:04:45: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (6)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JOY04] JOY! Organic Four-Fruit Jam 370g | 1 | Predicted 1u but not ordered |
| [TEN01] TENSAÏ TEA  thé vert bio au citron et à la fleur de sureau 330ml | 1 | Predicted 1u but not ordered |
| [JOY05] Organic Cherry Jam 370g | 1 | Predicted 1u but not ordered |
| [TEN04] TENSAÏ TEA  thé matcha bio à la menthe 330ml | 1 | Predicted 1u but not ordered |
| [TEN03] TENSAÏ TEA  thé blanc bio à la myrtille 330ml | 1 | Predicted 1u but not ordered |
| [ALO31] ORGANIC CRUNCH aloe vera drink grenade-myrtille 500ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:09:34.722Z*
