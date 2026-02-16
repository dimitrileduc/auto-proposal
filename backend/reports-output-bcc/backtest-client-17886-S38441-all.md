# Rapport Backtest - Client Mini Markt raeren

## Contexte

- **Client** : Mini Markt raeren (ID: 17886)
- **Commande réelle** : S38441
- **Date commande** : 2025-08-11 06:49:01
- **Date cutoff système** : 2025-08-10 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 23
- **Tokens**: 20,531 input + 3,695 output = 24,226 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 39.1% | 23 produits prédits, 9 corrects |
| **Rappel** | 90.0% | 10 produits réels, 9 détectés |
| **F1-Score** | 54.5% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 1.33 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 36.4% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 28.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | -30.3% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 3 | Égalité parfaite |
| Partial Match (>0u) | 6 | Avec erreur |

---

## True Positives (9)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [TVF006] TVF TARTINADE BIO TOMATE 180g | 4 | 8 | 4.0 | 50.0% | partial | LLM |
| [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g | 3 | 4 | 1.0 | 25.0% | partial | LLM |
| [TVF004] TVF TARTINADE BIO OLIVE 180g | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [TVF002] TVF TARTINADE BIO PAPRIKA 180g | 3 | 4 | 1.0 | 25.0% | partial | LLM |
| [TVF005] TVF TARTINADE BIO AUBERGINE 180g | 2 | 4 | 2.0 | 50.0% | partial | LLM |
| [JF035] JF BURGER SQUEEZE 300ML | 2 | 5 | 3.0 | 60.0% | partial | LLM |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [TVF001] TVF TARTINADE BIO MANGUE 180g | 4 | 4 | 0.0 | 0.0% | exact | LLM |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | 1 | 0.0 | 0.0% | exact | LLM |


### Details des Predictions LLM (9 produits)


<details>
<summary><strong>1. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM: 4u vs Médiane: 4u (Réel: 8u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 4u
- **Reel commande**: 8u
- **Erreur LLM**: 4u (50.0%)
- **Erreur Mediane**: 4u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 37 et 26 jours (moyenne ~31 jours). La dernière commande datant du 13 mai 2025, soit 89 jours avant la date actuelle, le seuil de réapprovisionnement est largement dépassé, indiquant un besoin immédiat. Pour la quantité, bien que la dernière commande ait été de 10u, les commandes précédentes étaient de 3u et 4u. En appliquant la règle de la médiane (4u) et en privilégiant la prudence face à une volatilité récente, une commande de 4 unités est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 910 tokens
- **Output**: 146 tokens
- **Total**: 1,056 tokens



</details>


<details>
<summary><strong>2. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
L'analyse du cycle de commande montre des intervalles de 37 et 26 jours (moyenne ~31 jours). La dernière commande remontant au 13 mai 2025, soit il y a 89 jours, le délai dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture critique ou un besoin de restockage immédiat. La quantité est fixée à 3 unités, correspondant à la médiane des commandes récentes (2, 3, 4), conformément au principe de précaution B2B sans surestimation.

**Tokens utilises pour cette prediction:**
- **Input**: 912 tokens
- **Output**: 140 tokens
- **Total**: 1,052 tokens



</details>


<details>
<summary><strong>3. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM: 3u vs Médiane: 5u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 5u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 3u (150.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. Le cycle moyen observé est d'environ 60 jours (entre mars et mai). La dernière commande remonte au 13 mai 2025, soit 89 jours avant la date actuelle (10 août). Le délai depuis la dernière commande dépasse largement le cycle habituel et le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture imminent ou une consommation déjà effectuée. ÉTAPE 2 : Estimation de la quantité. L'historique présente deux commandes (3u et 6u). En application du principe de précaution B2B et de la règle privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est la médiane basse de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 892 tokens
- **Output**: 177 tokens
- **Total**: 1,069 tokens



</details>


<details>
<summary><strong>4. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM: 3u vs Médiane: 3u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 3u
- **Reel commande**: 4u
- **Erreur LLM**: 1u (25.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 (DÉTECTION) : L'historique montre un cycle de commande d'environ 60 jours (2 mois entre mars et mai). La dernière commande remonte au 13 mai, soit 89 jours avant la date actuelle (10 août). Le délai depuis la dernière commande dépasse largement le cycle habituel et l'horizon de 30 jours du seuil de réapprovisionnement. Il existe un risque de rupture ou un besoin imminent. ÉTAPE 2 (QUANTITÉ) : Les commandes récentes sont de 4u et 3u. En appliquant la règle de la médiane et le principe de prudence B2B (choisir la valeur la plus basse en cas de doute sur une faible rotation), la quantité retenue est de 3 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 893 tokens
- **Output**: 177 tokens
- **Total**: 1,070 tokens



</details>


<details>
<summary><strong>5. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 4u
- **Erreur LLM**: 2u (50.0%)
- **Erreur Mediane**: 2u (50.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 13 mai 2025, soit 89 jours avant la date actuelle (10 août). Le cycle moyen observé entre les commandes précédentes est d'environ 30 à 35 jours. Le délai depuis la dernière commande dépasse largement ce cycle moyen ainsi que le seuil de réapprovisionnement de 30 jours. Il existe un risque de rupture critique ou un besoin de restockage immédiat. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent montre des commandes de 2u, 2u et 4u. La médiane de ces commandes est de 2u. Conformément à la règle de prudence consistant à choisir la valeur la plus basse en cas de doute ou de rotation modérée, la quantité retenue est de 2u.

**Tokens utilises pour cette prediction:**
- **Input**: 911 tokens
- **Output**: 197 tokens
- **Total**: 1,108 tokens



</details>


<details>
<summary><strong>6. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 5u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 2u
- **Baseline calculee**: 2u
- **Mediane historique**: 2u
- **Reel commande**: 5u
- **Erreur LLM**: 3u (60.0%)
- **Erreur Mediane**: 3u (60.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 2u (risque detecte)

**Raisonnement LLM:**
L'analyse montre une rotation très faible et irrégulière (dernière commande il y a 89 jours). Bien que le cycle moyen soit largement dépassé, le principe de précaution B2B impose de prévoir un réapprovisionnement pour éviter une rupture prolongée sur un produit de fond de rayon. La quantité retenue est de 2 unités, correspondant à la médiane des commandes historiques (2u en mai 2025 et avril 2024), tout en ignorant le pic bas de 1u pour maintenir un stock minimal opérationnel.

**Tokens utilises pour cette prediction:**
- **Input**: 902 tokens
- **Output**: 124 tokens
- **Total**: 1,026 tokens



</details>


<details>
<summary><strong>7. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 mai 2025, soit environ 89 jours. L'historique montre une commande en juin l'année précédente. Bien que la rotation soit très faible, le délai écoulé depuis la dernière commande dépasse largement un cycle trimestriel potentiel. En application du principe de précaution B2B (doute sur le cycle = prévoir commande), un risque de rupture est identifié pour l'horizon des 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent et N-1 est constant à 1 unité. Conformément à la règle sur les rotations très faibles (1-2u), la quantité est maintenue à 1 unité pour éviter le surstock tout en assurant la disponibilité.

**Tokens utilises pour cette prediction:**
- **Input**: 884 tokens
- **Output**: 181 tokens
- **Total**: 1,065 tokens



</details>


<details>
<summary><strong>8. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM: 4u vs Médiane: 5u (Réel: 4u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 4u
- **Baseline calculee**: 4u
- **Mediane historique**: 5u
- **Reel commande**: 4u
- **Erreur LLM**: 0u (0.0%)
- **Erreur Mediane**: 1u (25.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 4u (risque detecte)

**Raisonnement LLM:**
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13 mai, soit environ 89 jours. Bien que le cycle historique soit de 26 jours entre les deux seules commandes connues, l'absence de commande depuis 3 mois sur un produit bio à rotation lente suggère un risque de rupture imminent ou un besoin de réapprovisionnement par précaution (principe de doute B2B). ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des commandes de 4u et 6u. En suivant la règle de la médiane et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur une rotation faible, la quantité retenue est de 4 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 895 tokens
- **Output**: 167 tokens
- **Total**: 1,062 tokens



</details>


<details>
<summary><strong>9. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
Le produit présente une rotation très faible et irrégulière (1 unité par commande). La dernière commande remonte à environ 115 jours (avril 2025). Bien que le cycle soit espacé, l'historique de l'année précédente montre une activité durant la période estivale (juin/juillet). En application du principe de précaution B2B et pour éviter une rupture sur un produit à faible rotation mais présent au catalogue, un réapprovisionnement est nécessaire. La quantité est fixée à 1 unité, correspondant à la médiane stricte et constante de l'historique récent et passé.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 138 tokens
- **Total**: 1,060 tokens



</details>




### Donnees d'Input LLM (9 produits)


<details>
<summary><strong>1. [TVF006] TVF TARTINADE BIO TOMATE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 14:47:11: 10u
- 2025-04-17 13:42:07: 4u
- 2025-03-11 09:21:50: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 8u

</details>


<details>
<summary><strong>2. [TVF008] TVF TARTINADE BIO BETTERAVE RAIFORT 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 14:47:11: 4u
- 2025-04-17 13:42:07: 2u
- 2025-03-11 09:21:50: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>3. [TVF004] TVF TARTINADE BIO OLIVE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 14:47:11: 6u
- 2025-03-11 09:21:50: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>4. [TVF002] TVF TARTINADE BIO PAPRIKA 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 14:47:11: 4u
- 2025-03-11 09:21:50: 3u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>5. [TVF005] TVF TARTINADE BIO AUBERGINE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 14:47:11: 4u
- 2025-04-17 13:42:07: 2u
- 2025-03-11 09:21:50: 2u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>6. [JF035] JF BURGER SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 14:47:11: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 06:23:19: 1u
- 2024-04-23 11:59:24: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 5u

</details>


<details>
<summary><strong>7. [JF037] JF BBQ SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 14:47:11: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-06-04 06:23:19: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [TVF001] TVF TARTINADE BIO MANGUE 180g</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-05-13 14:47:11: 6u
- 2025-04-17 13:42:07: 4u

**Commandes N-1 (meme periode annee derniere):**
- Aucune commande N-1

**Quantite Mediane (fallback)**: 4u
**Quantite Reelle**: 4u

</details>


<details>
<summary><strong>9. [JF036] JF MITRAILLETTE SQUEEZE 300ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-04-17 13:42:07: 1u
- 2025-03-11 09:21:50: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-15 08:45:51: 1u
- 2024-06-04 06:23:19: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>




---

## False Positives (14)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [TVF003] TVF TARTINADE BIO CAROTTE 180g | 1 | Predicted 1u but not ordered |
| [JF067] FIL MOUTARDE 700G BOCAL | 1 | Predicted 1u but not ordered |
| [JF066] FIL MOUTARDE 300G BOCAL | 1 | Predicted 1u but not ordered |
| [JF040] JF CURRY KETCHUP SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF074] FIL MAYONNAISE ŒUFS 1L SEAU  | 3 | Predicted 3u but not ordered |
| [FIL19] FIL VOL AU VENT 400G BOCAL | 2 | Predicted 2u but not ordered |
| [JF068] FIL VOL AU VENT 800G BOCAL  | 1 | Predicted 1u but not ordered |
| [JF071] FIL CARBONNADES 800G BOCAL  | 1 | Predicted 1u but not ordered |
| [TVF014] TVF TARTINADE BIO MANGUE 380G | 3 | Predicted 3u but not ordered |
| [JF073] FIL BOULLETTES SAUCE TOMATE 800G BOCAL  | 1 | Predicted 1u but not ordered |
| [FIL23] FIL MAYONNAISE 300ML SQUEEZE  | 2 | Predicted 2u but not ordered |
| [FIL27] FIL MOUTARDE 300ML SQUEEZE  | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 2 | Predicted 2u but not ordered |
| [JF033] JF ANDALOUSE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |


---

## False Negatives (1)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF025] JF VINAIGRETTE FH WECK 200ML | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:17:40.068Z*
