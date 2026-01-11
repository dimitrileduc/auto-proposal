# Rapport Backtest - Client LA FERME DU BUEAU

## Contexte

- **Client** : LA FERME DU BUEAU (ID: 60411)
- **Commande réelle** : S39677
- **Date commande** : 2025-10-14 06:47:17
- **Date cutoff système** : 2025-10-13 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 48
- **Tokens**: 42,440 input + 6,960 output = 49,400 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 30.2% | 43 produits prédits, 13 corrects |
| **Rappel** | 86.7% | 15 produits réels, 13 détectés |
| **F1-Score** | 44.8% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.38 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 26.3% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 14.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -26.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 10 | Égalité parfaite |
| Partial Match (>0u) | 3 | Avec erreur |

---

## True Positives (13)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [RIT05] RITCHIE Cola - verre 275ml | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT04] RITCHIE Pamplemousse - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT02] RITCHIE Citron - Framboise - verre 275ml | 1 | 2 | 1.0 | 50.0% | partial | Non | Non | LLM |
| [RIT01] RITCHIE Orange - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |
| [REB03] ReBEL chips premium & bio - poivre noir 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB08] ReBEL chips premium & bio - piment citron 125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB04] ReBEL chips premium & bio - thym/romarin125g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [RIT03] RITCHIE Citron-Gingembre - verre 275ml | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 1 | 3 | 2.0 | 66.7% | partial | Non | Non | LLM |


### Details des Predictions LLM (13 produits)


<details>
<summary><strong>1. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 40 jours. La dernière commande datant du 16 septembre (soit 27 jours avant la date actuelle), nous atteignons 67% du cycle moyen. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent durant cette période. En application du principe de précaution B2B, une commande est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et à la valeur la plus fréquente des commandes passées.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 131 tokens
- **Total**: 1,053 tokens



</details>


<details>
<summary><strong>2. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen entre les commandes est d'environ 40 jours. La dernière commande remonte au 16 septembre, soit 27 jours avant la date actuelle. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent (27 jours écoulés représentent environ 70% du cycle habituel). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes systématiques de 1 unité. La médiane et la tendance constante confirment une quantité de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 927 tokens
- **Output**: 151 tokens
- **Total**: 1,078 tokens



</details>


<details>
<summary><strong>3. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 16 septembre, soit 27 jours. Le cycle précédent était de 42 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (27 + 30 > 42). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 2u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 165 tokens
- **Total**: 1,060 tokens



</details>


<details>
<summary><strong>4. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. Le cycle moyen entre les commandes est d'environ 45 jours. La dernière commande date du 16 septembre, soit il y a 27 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car la prochaine commande théorique devrait intervenir sous peu. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilité parfaite avec des commandes systématiques de 1 unité. La médiane est de 1. Conformément à la règle sur les rotations faibles, on maintient la quantité habituelle de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 907 tokens
- **Output**: 144 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>5. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 16 septembre, soit il y a 27 jours. Le cycle moyen entre les commandes précédentes est d'environ 40 à 45 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent d'ici la fin de la période de couverture. En suivant le principe de précaution B2B, une commande est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane des commandes récentes (1, 1, 2, 3) et respectant la règle de choisir la valeur la plus basse en cas de doute sur une faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 926 tokens
- **Output**: 146 tokens
- **Total**: 1,072 tokens



</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 16 septembre, soit il y a 27 jours. Le cycle moyen observé est d'environ 60 à 80 jours. Cependant, avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque (27 + 30 = 57 jours), ce qui correspond à la périodicité basse du cycle. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation quantité. L'historique récent montre une stabilité parfaite avec des commandes systématiques de 1 unité. La médiane est de 1. Conformément aux règles de rotation faible, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 174 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>7. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 16 septembre, soit il y a 27 jours. Le cycle historique entre les commandes précédentes était d'environ 35 à 85 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre de risque de rupture (27 jours écoulés + 30 jours de seuil = 57 jours, ce qui dépasse le cycle court observé). Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent est extrêmement stable avec des commandes systématiques de 1 unité. La médiane est de 1u. Conformément à la règle sur les rotations faibles, on maintient cette quantité sans l'augmenter.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 184 tokens
- **Total**: 1,095 tokens



</details>


<details>
<summary><strong>8. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre des intervalles de 35 jours puis 85 jours. Depuis la dernière commande du 16 septembre 2025, 27 jours se sont écoulés. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique (risque de rupture imminent à l'horizon des 30 prochains jours). Le cycle étant irrégulier, le principe de précaution B2B s'applique pour éviter une rupture. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent.

**Tokens utilises pour cette prediction:**
- **Input**: 909 tokens
- **Output**: 138 tokens
- **Total**: 1,047 tokens



</details>


<details>
<summary><strong>9. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 05/08/2025, soit 69 jours avant la date actuelle. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle standard de réapprovisionnement en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : L'historique récent montre une commande unique de 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour couvrir le besoin sans créer de surstock inutile.

**Tokens utilises pour cette prediction:**
- **Input**: 880 tokens
- **Output**: 151 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>10. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 05/08/2025, soit 69 jours avant la date actuelle. Bien que l'historique soit limité à une seule commande (rotation très faible), le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture) et conformément à la règle des rotations faibles (1-2u), une commande de 1 unité est préconisée pour reconstituer le stock minimal, en se basant sur la quantité unique observée précédemment.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 136 tokens
- **Total**: 1,010 tokens



</details>


<details>
<summary><strong>11. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 05/08/2025, soit 69 jours avant la date actuelle. Bien que la rotation soit très faible (1 unité), le délai écoulé est important. En l'absence d'un cycle historique établi, le principe de précaution B2B s'applique pour éviter une rupture prolongée sur un produit référencé. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1 unité. Conformément aux règles pour les rotations très faibles (1-2u), la quantité est maintenue à 1 unité, correspondant à la médiane des commandes observées.

**Tokens utilises pour cette prediction:**
- **Input**: 874 tokens
- **Output**: 159 tokens
- **Total**: 1,033 tokens



</details>


<details>
<summary><strong>12. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande moyen d'environ 40 à 45 jours. La dernière commande datant du 5 août 2025 (soit il y a 69 jours), le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin imminent. En suivant la règle de la médiane sur les quantités historiques (toutes à 1u), la quantité préconisée est de 1 unité pour maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 132 tokens
- **Total**: 1,042 tokens



</details>


<details>
<summary><strong>13. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM: 1u vs Médiane: 2u (Réel: 3u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 3u
- **Erreur LLM**: 2u (66.7%)
- **Erreur Mediane**: 1u (33.3%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Le cycle moyen entre les commandes est d'environ 39 jours (35 jours entre mai et juin, 43 jours entre juin et août). La dernière commande remonte au 05/08/2025, soit 69 jours avant la date actuelle. Le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture ou un besoin de réassort par précaution. ÉTAPE 2 : Estimation quantité. L'historique récent montre des volumes très faibles (1u, 1u, 2u). La médiane des commandes récentes est de 1u. Conformément à la règle sur les rotations faibles, on maintient la quantité minimale habituelle.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 180 tokens
- **Total**: 1,091 tokens



</details>




### Donnees d'Input LLM (13 produits)


<details>
<summary><strong>1. [RIT05] RITCHIE Cola - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:30:48: 2u
- 2025-08-05 09:16:54: 2u
- 2025-06-23 06:31:12: 1u
- 2025-05-19 13:49:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [RIT04] RITCHIE Pamplemousse - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:30:48: 1u
- 2025-08-05 09:16:54: 1u
- 2025-06-23 06:31:12: 1u
- 2025-05-19 13:49:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [RIT02] RITCHIE Citron - Framboise - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:30:48: 1u
- 2025-08-05 09:16:54: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [RIT01] RITCHIE Orange - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:30:48: 1u
- 2025-08-05 09:16:54: 1u
- 2025-06-23 06:31:12: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [REB01] ReBEL chips premium & bio - sel de mer 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:30:48: 2u
- 2025-08-05 09:16:54: 1u
- 2025-06-23 06:31:12: 1u
- 2025-05-19 13:49:13: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>


<details>
<summary><strong>6. [REB03] ReBEL chips premium & bio - poivre noir 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:30:48: 1u
- 2025-06-23 06:31:12: 1u
- 2025-05-19 13:49:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [REB08] ReBEL chips premium & bio - piment citron 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:30:48: 1u
- 2025-06-23 06:31:12: 1u
- 2025-05-19 13:49:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [REB04] ReBEL chips premium & bio - thym/romarin125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-16 06:30:48: 1u
- 2025-06-23 06:31:12: 1u
- 2025-05-19 13:49:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 09:16:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV002] LV Pizza Croccantina au romarin 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 09:16:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV003] LV Pizza Croccantina tomate origan 150 g bio</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 09:16:54: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [RIT03] RITCHIE Citron-Gingembre - verre 275ml</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 09:16:54: 1u
- 2025-06-23 06:31:12: 1u
- 2025-05-19 13:49:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [REB02] ReBEL chips premium & bio - paprika fumé 125g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-05 09:16:54: 1u
- 2025-06-23 06:31:12: 1u
- 2025-05-19 13:49:13: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 3u

</details>




---

## False Positives (30)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [RIT11] RITCHIE Orange Sanguine - verre 275ml | 1 | Predicted 1u but not ordered |
| [LB003] LB Festive (4,5%) 33CL | 1 | Predicted 1u but not ordered |
| [LB005] LB Amber (5,2%) 33CL | 1 | Predicted 1u but not ordered |
| [LB006] LB Brown (7,0%)  33CL | 1 | Predicted 1u but not ordered |
| [LV160] LV Tartinade Aubergine 190g | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 1 | Predicted 1u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 1 | Predicted 1u but not ordered |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | Predicted 1u but not ordered |
| [LV131] LV Tartinade Potiron 190g | 1 | Predicted 1u but not ordered |
| [LV132] LV Tartinade Houmous type 190g | 1 | Predicted 1u but not ordered |
| [LV162] LV Tartinade Tomato Basilico 190g | 1 | Predicted 1u but not ordered |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | Predicted 1u but not ordered |
| [MF0056] MF Noix de cajou - Herbes de Provence 133g | 1 | Predicted 1u but not ordered |
| [MF0055] MF Noix de cajou - Curry 133g | 1 | Predicted 1u but not ordered |
| [MF0054] MF Noix de cajou - Fleur de sel 133g | 1 | Predicted 1u but not ordered |
| [JOY05] Organic Cherry Jam 370g | 1 | Predicted 1u but not ordered |
| [JOY02] JOY! Organic Strawberry Jam 370g | 1 | Predicted 1u but not ordered |
| [WIG03] WIGNAC cidre naturel bio 750ml | 1 | Predicted 1u but not ordered |
| [MF0060] MF Passata | 1 | Predicted 1u but not ordered |
| [LV143] LV Mayonnaise (huile 70%) 200 ml  | 1 | Predicted 1u but not ordered |
| [LV157] LV Ketchup aux tomates 263 ml bio | 1 | Predicted 1u but not ordered |
| [RIT08] RITCHIE Citron - canette 330ml | 1 | Predicted 1u but not ordered |
| [LV153] LV Vinaigrette Ciboulette 250 ml bio | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 1 | Predicted 1u but not ordered |
| [LV036] LV Olives Vertes dénoyautées BE 350g | 1 | Predicted 1u but not ordered |
| [MF0061] MF Compote | 1 | Predicted 1u but not ordered |
| [MF0050] MF Cornichons aigre doux (belge) 500g | 1 | Predicted 1u but not ordered |
| [LV158] LV Moutarde 200 ml | 1 | Predicted 1u but not ordered |
| [LV145] LV Sauce Tartare 200 ml  | 1 | Predicted 1u but not ordered |
| [WIG04] WIGNAC cidre rosé bio 750ml | 1 | Predicted 1u but not ordered |


---

## False Negatives (2)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JOY08] JOY! Organic Raspberry Jam 370g | 1 | Never ordered in previous analysis window (no history) |
| [JOY03] JOY! Organic Apricot Jam 370g | 1 | Product analyzed but LLM -> 0 - client ordered 1u |


### Details des Predictions LLM pour FN (1 produits)

*Pourquoi le systeme n'a pas predit ces produits?*


<details>
<summary><strong>1. [JOY03] JOY! Organic Apricot Jam 370g</strong> - LLM predit: 0u | Reel commande: 1u</summary>

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: NON - Pas de commande
- **Quantite decidee**: 0u (pas de risque detecte)

**Raisonnement LLM (pourquoi pas de rupture predite):**
Absence totale d'historique de commandes sur l'année en cours et sur l'année précédente (N-1). En l'absence de données de rotation ou de cycle de vente établi, aucun besoin de réapprovisionnement ne peut être justifié selon les critères de prédiction. Le risque de rupture est nul car aucune demande n'est enregistrée pour ce produit.

</details>




---

*Rapport généré automatiquement le 2025-12-30T14:08:52.162Z*
