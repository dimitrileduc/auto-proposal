# Rapport Backtest - Client FERME TILKIN

## Contexte

- **Client** : FERME TILKIN (ID: 23324)
- **Commande réelle** : S40124
- **Date commande** : 2025-11-05 10:30:47
- **Date cutoff système** : 2025-11-04 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 37
- **Tokens**: 33,367 input + 5,841 output = 39,208 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 42.9% | 28 produits prédits, 12 corrects |
| **Rappel** | 100.0% | 12 produits réels, 12 détectés |
| **F1-Score** | 60.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.08 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 7.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 8.3% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 7.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 11 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (12)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | LLM Requis | LLM Succès | Source |
|---------|--------|------|-----------|----------|------|------------|------------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV130] LV BIO Tartinade Paprika Chili 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV162] LV Tartinade Tomato Basilico 190g | 2 | 2 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV134] LV BIO Tartinade Olives Vertes 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV330] LV BIO Tartinade Toscana 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV332] LV Tartinade Olive Caper Tomato 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV342] LV Organic Broccoli Spread 190 g | 2 | 1 | 1.0 | 100.0% | partial | Non | Non | LLM |
| [LV131] LV Tartinade Potiron 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV160] LV Tartinade Aubergine 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |
| [LV126] LV Tartinade Tomate Ail des Ours 190g | 1 | 1 | 0.0 | 0.0% | exact | Non | Non | LLM |


### Details des Predictions LLM (12 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. L'historique montre un cycle de commande d'environ 71 jours (entre juin et août). Depuis la dernière commande du 27 août 2025, 69 jours se sont écoulés. Nous avons atteint 97% du cycle moyen, ce qui dépasse largement le seuil de risque de 70%. Le risque de rupture est imminent dans l'horizon des 30 jours. ÉTAPE 2 : ESTIMATION QUANTITÉ. La rotation est très faible et constante (1 unité par commande). Conformément aux règles de gestion des rotations faibles (1-2u), la quantité est maintenue à la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 164 tokens
- **Total**: 1,055 tokens



</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle d'environ 71 jours entre les deux dernières commandes. La dernière commande datant du 27 août 2025, soit il y a 69 jours, nous atteignons 97% du cycle moyen. Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). En application du principe de précaution B2B et face à une rotation très faible mais régulière, la quantité retenue correspond à la médiane historique de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 890 tokens
- **Output**: 124 tokens
- **Total**: 1,014 tokens



</details>


<details>
<summary><strong>3. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'historique montre une rotation très faible et irrégulière avec un intervalle d'environ 70 jours entre les deux dernières commandes. Depuis la dernière commande du 27 août, 69 jours se sont écoulés, ce qui dépasse le seuil de 70% du cycle moyen estimé. En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue correspond à la médiane constante des commandes précédentes (1u).

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 125 tokens
- **Total**: 1,016 tokens



</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 27 août, soit plus de 60 jours. Bien que la rotation soit faible, l'historique N-1 montre une commande fin septembre. En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour les 30 prochains jours. La quantité retenue est de 1 unité, correspondant à la médiane constante des commandes historiques (1u), afin de maintenir le stock sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 112 tokens
- **Total**: 1,051 tokens



</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août 2025, soit environ 69 jours. L'historique montre un cycle de commande variant entre 60 et 90 jours. Avec un seuil de réapprovisionnement de 30 jours, nous entrons dans la fenêtre critique de renouvellement du stock pour éviter une rupture. Par principe de précaution B2B, le besoin est validé. ÉTAPE 2 : Estimation quantité. Les commandes récentes sont stables à 2 unités. Bien que l'année précédente affichait des volumes de 3 unités, la tendance actuelle est à 2 unités. En suivant la règle de la médiane et de la prudence sur les volumes, la quantité retenue est de 2.

**Tokens utilises pour cette prediction:**
- **Input**: 955 tokens
- **Output**: 177 tokens
- **Total**: 1,132 tokens



</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août 2025, soit plus de 60 jours. Bien que le cycle soit lent, l'intervalle actuel dépasse largement la fréquence observée entre les deux dernières commandes (71 jours). Dans un contexte B2B, le délai écoulé et l'approche de la fin d'année justifient une commande de précaution pour éviter une rupture sur les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une stabilisation à 1 unité par commande (juin et août 2025), contre 2 unités l'année précédente. En suivant la règle de la médiane récente et le respect de la tendance à la baisse, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 940 tokens
- **Output**: 184 tokens
- **Total**: 1,124 tokens



</details>


<details>
<summary><strong>7. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août 2025, soit environ 69 jours. Bien que la rotation soit faible, l'historique de l'année précédente montre une commande fin septembre. Avec un seuil de réapprovisionnement de 30 jours et un cycle irrégulier, le principe de précaution B2B s'applique pour éviter une rupture prolongée. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. Conformément à la règle de privilégier la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 937 tokens
- **Output**: 163 tokens
- **Total**: 1,100 tokens



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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 27 août 2025, soit 69 jours. Bien que la rotation soit très faible, l'historique N-1 montre une commande fin septembre. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture ou de besoin non couvert sur l'horizon de fin d'année est réel. En application du principe de précaution B2B (cycle irrégulier), un besoin est détecté. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent et N-1 montre des volumes unitaires (1u ou 2u). La médiane des commandes est de 1u. Conformément à la règle sur les rotations faibles (1-2u) et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 205 tokens
- **Total**: 1,125 tokens



</details>


<details>
<summary><strong>9. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 27 août, soit 69 jours. Bien que la rotation soit faible, le délai écoulé dépasse largement le cycle précédent (71 jours entre juin et août). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u et 2u. La médiane se situe à 1.5u. Conformément à la règle de maintien des volumes pour les rotations faibles (1-2u) et pour assurer une disponibilité minimale sans surstockage, la quantité de 2u est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 173 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>10. [LV131] LV Tartinade Potiron 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible avec une seule commande enregistrée il y a 69 jours (27 août). Bien que le cycle soit difficile à établir avec un seul point de données, le délai écoulé dépasse largement les standards de réapprovisionnement habituels. En application du principe de précaution B2B (incertitude sur le cycle = prévoir commande) et pour éviter une rupture prolongée sur un produit à faible rotation, un réapprovisionnement est préconisé. La quantité est fixée à 1 unité, correspondant à la médiane historique et à la règle de maintien des volumes faibles (1-2u).

**Tokens utilises pour cette prediction:**
- **Input**: 871 tokens
- **Output**: 139 tokens
- **Total**: 1,010 tokens



</details>


<details>
<summary><strong>11. [LV160] LV Tartinade Aubergine 190g</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 juin 2025, soit plus de 140 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement les cycles historiques observés en N-1 (environ 90 jours). En application du principe de précaution B2B et face à l'incertitude du cycle, un risque de rupture est identifié pour les 30 prochains jours. ÉTAPE 2 : Estimation de la quantité. L'historique montre des commandes de 1u ou 2u. Conformément à la règle sur les rotations faibles et la tendance récente (dernière commande à 1u), la quantité minimale de 1u est retenue pour éviter le surstock tout en assurant la présence du produit.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 183 tokens
- **Total**: 1,121 tokens



</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 17 juin 2025, soit plus de 140 jours sans activité. Bien que la rotation soit très faible et irrégulière, le principe de précaution B2B s'applique car le délai depuis la dernière commande dépasse largement les cycles observés l'année précédente (environ 60 à 170 jours). Un risque de rupture est identifié pour couvrir les 30 prochains jours. Conformément à la règle des rotations faibles (1-2u), la quantité retenue est de 1 unité, correspondant à la médiane et à la valeur constante de l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 146 tokens
- **Total**: 1,068 tokens



</details>




### Donnees d'Input LLM (12 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 11:30:43: 1u
- 2025-06-17 08:20:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 11:30:43: 1u
- 2025-06-17 08:20:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF027] JF VINAIGRET MIEL MOU WECK 200</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 11:30:43: 1u
- 2025-06-17 08:20:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [LV130] LV BIO Tartinade Paprika Chili 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 11:30:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:27:51: 1u
- 2024-07-04 09:35:58: 1u
- 2024-04-11 06:37:24: 2u
- 2024-02-14 11:09:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [LV162] LV Tartinade Tomato Basilico 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 11:30:43: 2u
- 2025-06-17 08:20:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:27:51: 2u
- 2024-07-04 09:35:58: 3u
- 2024-04-11 06:37:24: 3u
- 2024-02-14 11:09:40: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>6. [LV134] LV BIO Tartinade Olives Vertes 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 11:30:43: 1u
- 2025-06-17 08:20:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-04 09:35:58: 2u
- 2024-04-11 06:37:24: 2u
- 2024-02-14 11:09:40: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [LV330] LV BIO Tartinade Toscana 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 11:30:43: 1u
- 2025-06-17 08:20:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:27:51: 1u
- 2024-04-11 06:37:24: 2u
- 2024-02-14 11:09:40: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [LV332] LV Tartinade Olive Caper Tomato 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 11:30:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:27:51: 1u
- 2024-04-11 06:37:24: 2u
- 2024-02-14 11:09:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [LV342] LV Organic Broccoli Spread 190 g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 11:30:43: 1u
- 2025-06-17 08:20:15: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [LV131] LV Tartinade Potiron 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-27 11:30:43: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [LV160] LV Tartinade Aubergine 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:20:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:27:51: 1u
- 2024-07-04 09:35:58: 2u
- 2024-04-11 06:37:24: 2u
- 2024-02-14 11:09:40: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [LV126] LV Tartinade Tomate Ail des Ours 190g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-17 08:20:15: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-30 06:27:51: 1u
- 2024-04-11 06:37:24: 1u
- 2024-02-14 11:09:40: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (16)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [FO002] FO ORGANIC FRUITY HIBISCUS INFUSION 33cl | 1 | Predicted 1u but not ordered |
| [FO003] FO ORGANIC FRUITY PEACH INFUSION 33cl | 1 | Predicted 1u but not ordered |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 1 | Predicted 1u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Predicted 1u but not ordered |
| [LV161] LV Tartinade Mangue curry 190g | 1 | Predicted 1u but not ordered |
| [LV331] LV Tartinade Lentils Balsamico 190g | 1 | Predicted 1u but not ordered |
| [LV136] LV Tartinade Betterave 190g | 1 | Predicted 1u but not ordered |
| [LV055] LV Mini grissini à l'huile d'olive  100g bio | 2 | Predicted 2u but not ordered |
| [LV003] LV Pizza Croccantina tomate origan 150 g bio | 1 | Predicted 1u but not ordered |
| [LV129] LV Tartinade Carotte Gingembre 190g | 2 | Predicted 2u but not ordered |
| [LV133] LV Tartinade Ananas Coco 190g | 1 | Predicted 1u but not ordered |
| [LV137] LV Tartinade Lentilles Curry 190g | 1 | Predicted 1u but not ordered |
| [LV002] LV Pizza Croccantina au romarin 150 g bio | 1 | Predicted 1u but not ordered |
| [LV001] LV Pizza Croccantina à l'huile d'olive 150 g bio | 1 | Predicted 1u but not ordered |
| [REB01] ReBEL chips premium & bio - sel de mer 125g | 2 | Predicted 2u but not ordered |
| [REB02] ReBEL chips premium & bio - paprika fumé 125g | 2 | Predicted 2u but not ordered |


---

## False Negatives (0)

*Aucun faux negatif (rappel = 100%)*

---

*Rapport généré automatiquement le 2025-12-30T14:12:51.847Z*
