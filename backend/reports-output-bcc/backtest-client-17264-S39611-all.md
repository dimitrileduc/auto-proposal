# Rapport Backtest - Client CARREFOUR BELGIUM SA, Hyper Ninove

## Contexte

- **Client** : CARREFOUR BELGIUM SA, Hyper Ninove (ID: 17264)
- **Commande réelle** : S39611
- **Date commande** : 2025-10-08 06:39:59
- **Date cutoff système** : 2025-10-07 00:00:00
- **Jours d'avance** : 1j


### Usage LLM

- **Appels**: 24
- **Tokens**: 21,682 input + 3,958 output = 25,640 total


---

## Métriques Globales

### Niveau Produit (Détection)

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **Précision** | 54.2% | 24 produits prédits, 13 corrects |
| **Rappel** | 81.3% | 16 produits réels, 13 détectés |
| **F1-Score** | 65.0% | Score equilibre global |

### Niveau Quantite (Precision)

**Important**: Ces metriques sont calculees **uniquement sur les True Positives** (produits correctement detectes).

| Métrique | Valeur | Interprétation |
|----------|--------|----------------|
| **MAE** | 0.46 unités | Erreur moyenne absolue (symétrique) |
| **wMAPE** | 30.0% | Erreur ponderee robuste (metrique principale) |
| **MAPE** | 26.9% | Erreur moyenne en % (biaisé, pour info) |
| **Bias** | 0.0% | Biais directionnel (>0 = surestime, <0 = sous-estime) |
| Exact Match (=0u) | 8 | Égalité parfaite |
| Partial Match (>0u) | 5 | Avec erreur |

---

## True Positives (13)


*Produits correctement détectés par le système*

| Produit | Prédit | Réel | Erreur Abs | Erreur % | Type | Source |
|---------|--------|------|-----------|----------|------|--------|
| [JF008] JF MAYONNA DU CHEF 470 ML WECK | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF003] JF MAYONNAIS WASABI 250ML WECK | 1 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF004] JF MAYONNAIS POIVRE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF009] JF SAUCE TARTARE 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF012] JF SAUCE BEARNAISE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF017] JF SAUCE COCKTAIL 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF001] JF MAYONNAI TRUFFES 250ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF023] JF MOUTARDE DOUCE 250ML WECK | 2 | 1 | 1.0 | 100.0% | partial | LLM |
| [JF011] JF SAUCE TARTARE 470ML WECK | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF005] JF MAYONNAISE OEUFS 250ML WECK | 3 | 2 | 1.0 | 50.0% | partial | LLM |
| [JF024] JF VINAIGRET CIBOULE WECK 200M | 2 | 2 | 0.0 | 0.0% | exact | LLM |
| [JF026] JF VINAIGRET TRUFFES WECK 200M | 1 | 1 | 0.0 | 0.0% | exact | LLM |
| [JF021] JF PICKLES 350 ML | 2 | 4 | 2.0 | 50.0% | partial | LLM |


### Details des Predictions LLM (13 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 60 jours entre les commandes récentes. La dernière commande datant du 13 août 2025 (soit 55 jours avant la date actuelle), nous avons dépassé le seuil de 70% du cycle moyen, ce qui indique un risque imminent de rupture de stock d'ici les 30 prochains jours. L'historique de l'année précédente confirme également une activité régulière sur cette période (septembre/octobre). Conformément à la règle de la médiane sur l'historique récent et N-1 (valeurs de 2u et 3u), la quantité de 2 unités est retenue pour couvrir le besoin sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 167 tokens
- **Total**: 1,105 tokens



</details>


<details>
<summary><strong>2. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 1u
- **Baseline calculee**: 1u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 1u (risque detecte)

**Raisonnement LLM:**
Le cycle de commande observé est d'environ 60 jours (juin à août). Depuis la dernière commande du 13 août 2025, 55 jours se sont écoulés. Nous atteignons 91% du cycle moyen, ce qui dépasse largement le seuil de précaution de 70%. Un risque de rupture est identifié pour les 30 prochains jours. En suivant la règle de la médiane sur l'historique récent (1u et 2u) et en privilégiant la valeur la plus basse en cas de doute sur un produit à faible rotation, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 921 tokens
- **Output**: 143 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>3. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 60 jours entre les commandes récentes (juin à août). Depuis la dernière commande du 13 août 2025, 55 jours se sont écoulés. Le seuil de réapprovisionnement étant de 30 jours, le risque de rupture est imminent car nous dépassons largement les 70% du cycle moyen. Conformément au principe de précaution B2B, une commande est nécessaire. Pour la quantité, l'historique récent et N-1 oscille entre 1u et 2u ; la médiane et la règle de prudence en cas de doute imposent de retenir la valeur la plus basse, soit 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 163 tokens
- **Total**: 1,085 tokens



</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande date du 13 août 2025, soit 55 jours avant la date actuelle (7 octobre). L'historique montre un cycle irrégulier (environ 60 jours entre les deux dernières commandes). En appliquant le principe de précaution B2B et le seuil de 70% du cycle moyen, le risque de rupture est imminent dans l'horizon des 30 jours. ÉTAPE 2 : Estimation de la quantité. L'historique récent montre des volumes très faibles (1u et 2u). Conformément à la règle de rotation faible et au choix de la valeur la plus basse en cas de doute pour éviter le surstock, la quantité retenue est de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 920 tokens
- **Output**: 174 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 60 jours entre les commandes récentes. La dernière commande remontant au 13 août 2025 (soit 55 jours avant la date actuelle), nous avons largement dépassé le seuil de 70% du cycle moyen. Un risque de rupture est identifié pour les 30 prochains jours. En application du principe de précaution B2B et de la règle de la médiane sur l'historique récent (1u et 2u), une quantité de 2 unités est préconisée pour couvrir le besoin imminent tout en restant prudent face à la faible rotation.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 147 tokens
- **Total**: 1,050 tokens



</details>


<details>
<summary><strong>6. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : La dernière commande remonte au 13 août, soit 55 jours. Bien que le cycle historique soit irrégulier (environ 60 jours entre les deux dernières commandes), nous atteignons 90% de cet intervalle. En application du principe de précaution B2B (risque de rupture imminent dans l'horizon de 30 jours), un besoin est détecté. ÉTAPE 2 : L'historique récent montre des volumes très faibles (1u et 2u). Conformément à la règle sur les rotations faibles et le choix de la valeur la plus basse en cas de doute, la quantité retenue est la médiane basse de 1 unité.

**Tokens utilises pour cette prediction:**
- **Input**: 904 tokens
- **Output**: 154 tokens
- **Total**: 1,058 tokens



</details>


<details>
<summary><strong>7. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
L'analyse du cycle de commande montre un intervalle moyen d'environ 60 jours entre les commandes récentes (juin à août). Depuis la dernière commande du 13 août 2025, 55 jours se sont écoulés. Étant donné que nous atteignons 91% du cycle moyen et que le seuil de réapprovisionnement est de 30 jours, le risque de rupture est imminent. L'historique de l'année précédente confirme également une activité en septembre/octobre. En suivant la règle de la médiane des quantités récentes (médiane entre 1u et 2u) et en privilégiant la valeur la plus basse en cas de doute pour éviter le surstockage sur un produit à faible rotation, une quantité de 1 unité est préconisée.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 178 tokens
- **Total**: 1,100 tokens



</details>


<details>
<summary><strong>8. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM: 2u vs Médiane: 2u (Réel: 1u)</summary>

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
Le cycle de commande récent montre un intervalle d'environ 60 jours entre juin et août. Depuis la dernière commande du 13 août 2025, 55 jours se sont écoulés, ce qui dépasse le seuil de 70% du cycle moyen. Un risque de rupture est identifié dans l'horizon des 30 jours (Replenishment Threshold Days). L'historique N-1 confirme également une activité sur la période septembre/octobre. En suivant la règle de la médiane des quantités historiques (1u, 3u, 2u, 1u, 2u), la quantité recommandée est de 2 unités pour couvrir le besoin imminent sans surstockage.

**Tokens utilises pour cette prediction:**
- **Input**: 938 tokens
- **Output**: 158 tokens
- **Total**: 1,096 tokens



</details>


<details>
<summary><strong>9. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM: 1u vs Médiane: 2u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 13/08/2025, soit 55 jours. Le cycle précédent était de 63 jours. Nous atteignons 87% du cycle moyen constaté, ce qui dépasse le seuil de risque de 70%. Un besoin est donc identifié pour couvrir les 30 prochains jours. ÉTAPE 2 : Estimation quantité. L'historique récent montre des commandes de 1u et 3u. En suivant la règle de la médiane et le principe de précaution B2B privilégiant la valeur la plus basse en cas de doute sur une faible rotation, la quantité retenue est de 1u.

**Tokens utilises pour cette prediction:**
- **Input**: 903 tokens
- **Output**: 161 tokens
- **Total**: 1,064 tokens



</details>


<details>
<summary><strong>10. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM: 3u vs Médiane: 2u (Réel: 2u)</summary>

**Quantites & Predictions:**
- **Quantite recommandee (finale)**: 3u
- **Baseline calculee**: 3u
- **Mediane historique**: 2u
- **Reel commande**: 2u
- **Erreur LLM**: 1u (50.0%)
- **Erreur Mediane**: 0u (0.0%)

**Decision LLM Phase 1 (Risque de rupture):**
- **Risque detecte**: OUI - Commande necessaire
- **Quantite decidee**: 3u (risque detecte)

**Raisonnement LLM:**
La dernière commande remonte au 11 juin 2025, soit 118 jours sans activité. Bien que l'historique récent soit limité, l'analyse de l'année précédente montre des commandes espacées (avril, juillet, septembre). Nous sommes actuellement en octobre, période qui correspond à la dernière commande enregistrée en N-1 (24 septembre). En application du principe de précaution B2B et face à un cycle irrégulier, un risque de rupture est identifié pour l'horizon des 30 prochains jours. La quantité retenue est de 3 unités, correspondant à la médiane des commandes historiques (2, 2, 3, 3) et à la dernière quantité commandée.

**Tokens utilises pour cette prediction:**
- **Input**: 922 tokens
- **Output**: 161 tokens
- **Total**: 1,083 tokens



</details>


<details>
<summary><strong>11. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM: 2u vs Médiane: 2u (Réel: 2u)</summary>

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
La dernière commande remonte au 11 juin 2025, soit environ 118 jours. Bien que la rotation soit très faible et irrégulière, le délai écoulé dépasse largement les cycles observés précédemment (environ 75 jours entre les commandes de 2024). En application du principe de précaution B2B et pour éviter une rupture prolongée sur un produit à faible rotation, un réapprovisionnement est nécessaire. La quantité retenue est de 2 unités, correspondant à la médiane et au volume le plus fréquent constaté dans l'historique récent et N-1.

**Tokens utilises pour cette prediction:**
- **Input**: 906 tokens
- **Output**: 134 tokens
- **Total**: 1,040 tokens



</details>


<details>
<summary><strong>12. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM: 1u vs Médiane: 1u (Réel: 1u)</summary>

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
ÉTAPE 1 : Détection du besoin. La dernière commande remonte au 11 juin 2025, soit 118 jours. L'historique N-1 montre une commande en juillet, mais aucune activité récente. Cependant, selon le principe de précaution B2B et la règle sur les cycles irréguliers/difficiles à déterminer, un besoin est identifié pour éviter une rupture prolongée, d'autant plus que nous entrons dans une période où le produit était actif l'an dernier. ÉTAPE 2 : Estimation de la quantité. L'historique récent et N-1 montre des volumes très faibles (1u ou 2u). En suivant la règle de la médiane et la consigne de ne pas augmenter sans raison pour les rotations faibles (1-2u), la quantité de 1 unité est retenue.

**Tokens utilises pour cette prediction:**
- **Input**: 905 tokens
- **Output**: 189 tokens
- **Total**: 1,094 tokens



</details>


<details>
<summary><strong>13. [JF021] JF PICKLES 350 ML</strong> - LLM: 2u vs Médiane: 2u (Réel: 4u)</summary>

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
ÉTAPE 1 : DÉTECTION DU BESOIN. La dernière commande remonte au 11 juin 2025, soit 118 jours sans activité. L'historique N-1 montre des commandes en juillet et septembre, indiquant une consommation sur le second semestre. Le cycle est irrégulier et difficile à déterminer précisément, ce qui active le principe de précaution B2B pour éviter une rupture sur un produit de fond de rayon. ÉTAPE 2 : ESTIMATION QUANTITÉ. L'historique récent affiche 3u, tandis que l'historique N-1 affiche 1u et 2u. La médiane de l'ensemble des commandes est de 2u. En application de la règle de prudence (choisir la valeur la plus basse en cas de doute entre deux volumes médians), la quantité retenue est de 2 unités.

**Tokens utilises pour cette prediction:**
- **Input**: 898 tokens
- **Output**: 194 tokens
- **Total**: 1,092 tokens



</details>




### Donnees d'Input LLM (13 produits)


<details>
<summary><strong>1. [JF008] JF MAYONNA DU CHEF 470 ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 06:54:41: 2u
- 2025-06-11 06:52:02: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:15:47: 2u
- 2024-07-10 06:59:27: 2u
- 2024-04-18 07:09:03: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>2. [JF003] JF MAYONNAIS WASABI 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 06:54:41: 1u
- 2025-06-11 06:52:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:15:47: 1u
- 2024-07-10 06:59:27: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>3. [JF004] JF MAYONNAIS POIVRE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 06:54:41: 1u
- 2025-06-11 06:52:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:15:47: 1u
- 2024-07-10 06:59:27: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>4. [JF009] JF SAUCE TARTARE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 06:54:41: 1u
- 2025-06-11 06:52:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:15:47: 3u
- 2024-04-18 07:09:03: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>5. [JF012] JF SAUCE BEARNAISE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 06:54:41: 1u
- 2025-06-11 06:52:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:15:47: 3u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>6. [JF017] JF SAUCE COCKTAIL 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 06:54:41: 1u
- 2025-06-11 06:52:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-18 07:09:03: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>7. [JF001] JF MAYONNAI TRUFFES 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 06:54:41: 2u
- 2025-06-11 06:52:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:15:47: 1u
- 2024-07-10 06:59:27: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>8. [JF023] JF MOUTARDE DOUCE 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 06:54:41: 1u
- 2025-06-11 06:52:02: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:15:47: 2u
- 2024-07-10 06:59:27: 1u
- 2024-04-18 07:09:03: 2u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>9. [JF011] JF SAUCE TARTARE 470ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-08-13 06:54:41: 1u
- 2025-06-11 06:52:02: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-04-18 07:09:03: 2u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>10. [JF005] JF MAYONNAISE OEUFS 250ML WECK</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 06:52:02: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:15:47: 3u
- 2024-07-10 06:59:27: 2u
- 2024-04-18 07:09:03: 2u

**Quantite Mediane (fallback)**: 3u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>11. [JF024] JF VINAIGRET CIBOULE WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 06:52:02: 2u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:15:47: 2u
- 2024-07-10 06:59:27: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 2u

</details>


<details>
<summary><strong>12. [JF026] JF VINAIGRET TRUFFES WECK 200M</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 06:52:02: 1u

**Commandes N-1 (meme periode annee derniere):**
- 2024-07-10 06:59:27: 2u
- 2024-04-18 07:09:03: 1u

**Quantite Mediane (fallback)**: 1u
**Quantite Reelle**: 1u

</details>


<details>
<summary><strong>13. [JF021] JF PICKLES 350 ML</strong> - LLM Reussi</summary>

**Commandes Recentes (3 derniers mois):**
- 2025-06-11 06:52:02: 3u

**Commandes N-1 (meme periode annee derniere):**
- 2024-09-24 09:15:47: 2u
- 2024-07-10 06:59:27: 1u

**Quantite Mediane (fallback)**: 2u
**Quantite Reelle**: 4u

</details>




---

## False Positives (11)


*Produits prédits mais non commandés*

| Produit | Qté prédite | Raison |
|---------|-------------|--------|
| [JF019] JF SAUCE AIOLI PESTO 250M WECK | 1 | Predicted 1u but not ordered |
| [JF028] JF VINAIGRET CAESAR WECK 200ML | 1 | Predicted 1u but not ordered |
| [JF037] JF BBQ SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF027] JF VINAIGRET MIEL MOU WECK 200 | 2 | Predicted 2u but not ordered |
| [JF022] JF MOUTARDE MIEL 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF025] JF VINAIGRETTE FH WECK 200ML | 2 | Predicted 2u but not ordered |
| [JF007] JF SAUCE MAYO TOMAT 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF014] JF SAUCE BEARNAISE 470ML WECK | 2 | Predicted 2u but not ordered |
| [JF020] JF SAUCE AIOLI 250ML WECK | 2 | Predicted 2u but not ordered |
| [JF036] JF MITRAILLETTE SQUEEZE 300ML | 1 | Predicted 1u but not ordered |
| [JF029] JF VOL AU VENT BOCAL 400G | 1 | Predicted 1u but not ordered |


---

## False Negatives (3)


*Produits commandes mais non predits*

| Produit | Qte commandee | Raison |
|---------|---------------|--------|
| [JF018] JF SAUCE SAMOURAI 250ML WECK | 1 | Never ordered in previous analysis window (no history) |
| [JF002] JF MAYONNAI BASILIC 250ML WECK | 2 | Never ordered in previous analysis window (no history) |
| [JF015] JF SAUCE ANDALOUSE 250ML WECK | 1 | Never ordered in previous analysis window (no history) |




---

*Rapport généré automatiquement le 2025-12-30T14:11:05.239Z*
