# Rapport Backtest - Client DLL AD FLEMALLE

## Contexte

- **Client** : DLL AD FLEMALLE (ID: 38800)
- **Commande réelle** : S39993
- **Date commande** : 2025-10-29 12:29:32
- **Date cutoff système** : 2025-10-28 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 28
- **Tokens**: 25,527 input + 4,227 output = 29,754 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 51.9% | 27 produits prédits, 14 corrects |
| **Rappel** | 93.3% | 15 produits réels, 14 détectés |
| **F1-Score** | 66.7% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.07 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 6.7% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 7.1% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 6.7% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 13 | Égalité parfaite |
| Partial Match (>0u) | 1 | Avec erreur |

---

## True Positives (14)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF057] JF EGG MAYONNAISE 720ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF031] JF SAUCE LIEGEOISE 380GX6 | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF020] JF SAUCE AIOLI 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |


### Details des Predictions LLM (14 produits)


<details>
<summary><strong>1. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre 2025, soit 41 jours. Le cycle moyen observé est d'environ 42 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent ou déjà présent. De plus, l'historique N-1 montre une commande fin octobre (23/10/2024), confirmant la nécessité de commander maintenant. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est extrêmement stable avec des commandes systématiques de 1 unité. La médiane est de 1. Application de la règle de maintien pour rotation faible (1-2u).

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 167 tokens
- **Total**: 1,087 tokens



</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 17 septembre 2025, soit 41 jours. Le cycle moyen récent est d'environ 42 jours (42 jours entre juillet/août et 42 jours entre août/septembre). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent car nous avons atteint la fin du cycle habituel. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 1u, 1u et 2u. La médiane des commandes récentes est de 1u. Bien qu'une commande de 3u ait eu lieu l'année dernière à la même période, la règle de précaution B2B et la priorité à la médiane récente imposent de rester sur une quantité de 1u pour éviter le surstockage sur un produit à faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 988 tokens
- **Output**: 208 tokens
- **Total**: 1,196 tokens



</details>


<details>
<summary><strong>3. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 17 septembre 2025, soit 41 jours avant la date actuelle. Bien que l'historique montre une rotation très faible et irrégulière (cycle de plusieurs mois), le délai écoulé dépasse largement le seuil de réapprovisionnement de 30 jours. En application du principe de précaution B2B (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 130 tokens
- **Total**: 1,034 tokens



</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 17 septembre 2025, soit il y a 41 jours. L'historique montre un cycle de commande variant entre 45 et 75 jours. Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est imminent d'ici fin novembre, période historiquement active (commande le 23/10 l'an dernier). ÉTAPE 2 : Estimation de la quantité. Les commandes récentes oscillent entre 1u et 2u. En suivant la règle de la médiane et le principe de prudence pour les rotations faibles, la quantité de 1u est retenue pour couvrir le besoin sans surstocker.

**Tokens utilises pour cette prediction:**
- **Input**: 973 tokens
- **Output**: 168 tokens
- **Total**: 1,141 tokens



</details>


<details>
<summary><strong>5. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 17/09/2025, soit 41 jours. L'historique montre un cycle moyen d'environ 60-70 jours, mais l'historique N-1 indique une commande systématique en octobre (23/10/2024). Avec un seuil de réapprovisionnement de 30 jours, le risque de rupture est réel face à la saisonnalité observée l'an dernier. Par principe de précaution B2B, le besoin est validé. ÉTAPE 2 : ESTIMATION QUANTITÉ. Les commandes récentes sont de 1u. Bien qu'une commande de 2u ait eu lieu l'an dernier, la médiane des commandes récentes et la règle de prudence sur les faibles rotations imposent de maintenir la quantité à 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 204 tokens
- **Total**: 1,142 tokens



</details>


<details>
<summary><strong>6. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique récent montre un cycle de commande d'environ 42 jours (entre le 06/08 et le 17/09). Au 28/10, 41 jours se sont écoulés depuis la dernière commande, ce qui dépasse largement le seuil de 70% du cycle moyen (29 jours). Le risque de rupture est imminent dans l'horizon des 30 jours (Replenishment Threshold Days). Conformément à la règle de la médiane sur les rotations faibles et régulières, la quantité de 1 unité est maintenue pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 891 tokens
- **Output**: 144 tokens
- **Total**: 1,035 tokens



</details>


<details>
<summary><strong>7. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM: 2u vs Médiane: 1u (Réel: 2u)</summary>

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
La dernière commande remonte au 17 septembre 2025, soit 41 jours avant la date actuelle. L'historique de l'année précédente montre une commande le 23 octobre 2024, ce qui indique un besoin récurrent à cette période de l'année. Le délai depuis la dernière commande dépasse largement le cycle habituel observé, créant un risque de rupture imminent dans l'horizon des 30 jours. Conformément à la règle de précaution B2B et à l'historique N-1 (médiane de 2u sur les périodes comparables), une commande de 2 unités est préconisée pour couvrir le besoin.

**Tokens utilises pour cette prediction:**
- **Input**: 919 tokens
- **Output**: 152 tokens
- **Total**: 1,071 tokens



</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 06/08/2025, soit plus de 80 jours. L'historique N-1 montre une commande le 23/10/2024, indiquant un besoin saisonnier à cette période de l'année. Le cycle moyen est largement dépassé, le risque de rupture est avéré dans l'horizon des 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre une rotation très faible et régulière de 1u à 2u. Conformément à la règle de précaution sur les faibles rotations et au choix de la valeur la plus basse en cas de doute, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 956 tokens
- **Output**: 178 tokens
- **Total**: 1,134 tokens



</details>


<details>
<summary><strong>9. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle d'environ 34 jours entre les deux dernières commandes. La dernière commande datant du 06/08/2025, le délai écoulé (83 jours) dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit très faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. Conformément aux règles pour les faibles rotations, la quantité est maintenue à la médiane historique, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 132 tokens
- **Total**: 1,025 tokens



</details>


<details>
<summary><strong>10. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse de l'historique montre un cycle de commande d'environ 34 jours (entre juillet et août). Depuis la dernière commande du 06/08/2025, 83 jours se sont écoulés, ce qui dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Bien que la rotation soit faible, le principe de précaution B2B impose de prévoir une commande pour éviter une rupture prolongée. La quantité retenue est de 1 unité, correspondant à la médiane constante des commandes précédentes.

**Tokens utilises pour cette prediction:**
- **Input**: 894 tokens
- **Output**: 129 tokens
- **Total**: 1,023 tokens



</details>


<details>
<summary><strong>11. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse montre un cycle de commande moyen d'environ 35 à 45 jours. La dernière commande datant du 06/08/2025 (soit plus de 80 jours), le délai dépasse largement le cycle habituel, ce qui indique un besoin imminent ou une rupture probable dans l'horizon des 30 jours (seuil de réapprovisionnement). En application du principe de précaution B2B et face à une rotation faible mais régulière, la quantité retenue est de 1 unité, correspondant à la médiane des commandes historiques et à la valeur la plus basse pour éviter le surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 143 tokens
- **Total**: 1,081 tokens



</details>


<details>
<summary><strong>12. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
La dernière commande remonte au 03/07/2025, soit environ 117 jours. L'historique de l'année précédente montre une commande le 23/10/2024, ce qui indique un besoin récurrent à cette période de l'année (saisonnalité ou cycle long). Bien que la rotation soit très faible, le délai depuis la dernière commande dépasse largement les cycles habituels observés. En application du principe de précaution B2B et pour éviter une rupture sur un produit à rotation lente mais régulière, un réapprovisionnement est nécessaire. La quantité retenue est de 1 unité, correspondant à la médiane et à la valeur la plus fréquente des commandes historiques.

**Tokens utilises pour cette prediction:**
- **Input**: 936 tokens
- **Output**: 162 tokens
- **Total**: 1,098 tokens



</details>


<details>
<summary><strong>13. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit plus de 115 jours. Bien que la rotation soit très faible, le délai écoulé dépasse largement un cycle de réapprovisionnement standard en B2B. En application du principe de précaution (détection d'un besoin incertain pour éviter la rupture), une commande est nécessaire. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre une commande unique de 1u. Conformément à la règle sur les rotations très faibles (1-2u), on maintient la quantité à 1u sans augmenter sans raison spécifique.

**Tokens utilises pour cette prediction:**
- **Input**: 876 tokens
- **Output**: 155 tokens
- **Total**: 1,031 tokens



</details>


<details>
<summary><strong>14. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 2u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 03/07/2025, soit plus de 115 jours. Bien que la rotation soit faible, l'historique N-1 montre des commandes régulières entre avril et septembre. Le délai écoulé dépasse largement le cycle habituel, créant une incertitude sur le niveau de stock actuel. Par principe de précaution B2B, un besoin est détecté. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 oscille entre 1u et 2u. La médiane des commandes passées est de 2u. Conformément à la règle de maintien des quantités pour les rotations faibles, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 939 tokens
- **Output**: 176 tokens
- **Total**: 1,115 tokens



</details>




### Donnees d'Input LLM (14 produits)


<details>
<summary><strong>1. [JF015] JF SAUCE ANDALOUSE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 13:19:37: 1u
- 2025-08-06 08:47:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-23 14:15:30: 1u
- 2024-09-03 07:16:58: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>2. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 13:19:37: 2u
- 2025-08-06 08:47:13: 1u
- 2025-07-03 12:21:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-23 14:15:30: 1u
- 2024-09-03 07:16:58: 3u
- 2024-07-17 12:35:11: 2u
- 2024-06-11 11:51:50: 1u
- 2024-04-22 10:01:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>3. [JF007] JF SAUCE MAYO TOMAT 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 13:19:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-17 12:35:11: 1u
- 2024-04-22 10:01:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 13:19:37: 1u
- 2025-07-03 12:21:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-23 14:15:30: 2u
- 2024-09-03 07:16:58: 1u
- 2024-07-17 12:35:11: 2u
- 2024-06-11 11:51:50: 1u
- 2024-04-22 10:01:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 13:19:37: 1u
- 2025-07-03 12:21:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-23 14:15:30: 2u
- 2024-09-03 07:16:58: 1u
- 2024-06-11 11:51:50: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF057] JF EGG MAYONNAISE 720ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 13:19:37: 1u
- 2025-08-06 08:47:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF031] JF SAUCE LIEGEOISE 380GX6</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-09-17 13:19:37: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-23 14:15:30: 2u
- 2024-09-03 07:16:58: 1u
- 2024-04-22 10:01:16: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>8. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 08:47:13: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-23 14:15:30: 1u
- 2024-09-03 07:16:58: 2u
- 2024-07-17 12:35:11: 2u
- 2024-06-11 11:51:50: 1u
- 2024-04-22 10:01:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 08:47:13: 1u
- 2025-07-03 12:21:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 08:47:13: 1u
- 2025-07-03 12:21:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>11. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-06 08:47:13: 1u
- 2025-07-03 12:21:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-17 12:35:11: 1u
- 2024-06-11 11:51:50: 2u
- 2024-04-22 10:01:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>12. [JF020] JF SAUCE AIOLI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:21:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-10-23 14:15:30: 1u
- 2024-07-17 12:35:11: 2u
- 2024-06-11 11:51:50: 1u
- 2024-04-22 10:01:16: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF022] JF MOUTARDE MIEL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:21:05: 1u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>14. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-07-03 12:21:05: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-03 07:16:58: 1u
- 2024-07-17 12:35:11: 1u
- 2024-06-11 11:51:50: 2u
- 2024-04-22 10:01:16: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>




---

## False Positives (13)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | Predicted 1u but not ordered |
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 1 | Predicted 1u but not ordered |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 1 | Predicted 1u but not ordered |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF055] JF HONEY MUSTARD MAYO 250ML WECK | 1 | Predicted 1u but not ordered |
| [JF021] JF PICKLES 350 ML | 1 | Predicted 1u but not ordered |
| [JF054] JF LEMON MAYONNAISE 250ml Weck | 2 | Predicted 2u but not ordered |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 1 | Predicted 1u but not ordered |
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF032] JF SAUCE LAPIN 380GX6 | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:09:20.251Z*
